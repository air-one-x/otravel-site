<?php

namespace App\Controller;

use App\Entity\Places;
use App\Entity\PlacePicture;
use App\Repository\CategoryRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

class PlacesController extends AbstractController
{
  
    /**
     * @Route("/places/edit/{id}", name="places_edit_{id}")
     */
    public function edit()
    {

        return $this->render('places/index.html.twig', [
            'controller_name' => 'PlacesController',
        ]);

    }

    /**
     * @Route("/places/add", name="places_add")
     */
    public function add(Request $request, SerializerInterface $serializer, EntityManagerInterface $entityManager, CategoryRepository $categoryRepository)
    {
    
        $places = $serializer->deserialize($request->getContent(), Places::class, 'json');
        $data = json_decode($request->getContent()); // je récup juste les données renseignées
        $description= $places->getDescription();       
        $name = $places->getName();
        $street = $places->getStreet();
        $zipcode = $places->getZipcode();
        $city = $places->getCity();
        $lng = $places->getLng();
        $lat = $places->getLat();
        
        $newPlace = new Places();
        $newPlace->setDescription($description);
        $newPlace->setName($name);  
        $newPlace->setStreet($street); 
        $newPlace->setZipcode($zipcode); 
        $newPlace->setCity($city); 
        $newPlace->setUser($this->getUser());
        $newPlace->setLng($lng);
        $newPlace->setLat($lat);
        
        if(!empty($data->nameFile)){

            $pictureForm = $data->nameFile;
            $img = str_replace('data:image/png;base64,','', $pictureForm);
            $nomfichier = explode(".", $data->nameFile)  ;
            $nomfichierUnique = $nomfichier[0].uniqid().'.'.$nomfichier[1];
            $path = '../public/uploads/images/places/'. $nomfichierUnique;
            $success = file_put_contents($path, base64_decode($img));

            if(isset($success)){
                
                $picture = new PlacePicture;
                $picture->setName($pictureForm);
                $newPlace->setPlacesPicture($picture);
                
            }

        }
        
        $categoriesSelected = $data->category;

        foreach($categoriesSelected as $uniqueCategory){

            $findCategory = $categoryRepository->findOneBy(['id' => $uniqueCategory]);
            $newPlace->addCategory($findCategory);

        }

        $entityManager->persist($newPlace);
        $entityManager->flush();
        $data = [
            'status' => 201,
            'message' => 'Le lieu a bien été ajouté'
        ];

        return new JsonResponse($data, 201);
        
    }
    

    /**
     * @Route("/places/delete/{id}", name="places_delete")
     */
    public function delete()
    {
       
    }
}

