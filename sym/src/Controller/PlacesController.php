<?php

namespace App\Controller;

use App\Entity\PlacePicture;
use App\Entity\Places;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\CategoryRepository;

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
        //---------------Version Géocode
        $x = "45.6944012, 4.9300878";
        $geocoder = new \OpenCage\Geocoder\Geocoder('b38489ac53674c90b5e1b886beb901a3');
        $result = $geocoder->geocode($x); # latitude,longitude (y,x)
        dd($result['results'][0]['formatted']);

        //-----------------Version adresse

        // $geocoder = new \OpenCage\Geocoder\Geocoder('b38489ac53674c90b5e1b886beb901a3');
        // $result = $geocoder->geocode('59 rue Anatole France, 69800 Saint Priest', ['language' => 'fr', 'countrycode' => 'fr']);
        

        // if ($result && $result['total_results'] > 0) {
        // $first = $result['results'][0];
        // dd($first['geometry']['lng'] . ';' . $first['geometry']['lat'] . ';' . $first['formatted'] . "\n");
        // # 4.360081;43.8316276;6 Rue Massillon, 30020 Nîmes, Frankreich
        // }

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

        $categoriesSelected = $data->category; //je récup les catégories renseignées dans le formulaires

        foreach($categoriesSelected as $uniqueCategory){
            $test = $categoryRepository->findOneBy(['id' => $uniqueCategory]);
            $newPlace->addCategory($test);
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
        return $this->render('places/index.html.twig', [
            'controller_name' => 'PlacesController',
        ]);
    }
}

