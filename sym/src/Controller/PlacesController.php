<?php

namespace App\Controller;

use App\Entity\Places;
use App\Repository\PlacesRepository;
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

       
        // je veux:
            // Ajouter un endroit et renseignant ses catégories
        $places = $serializer->deserialize($request->getContent(), Places::class, 'json');
        $data = json_decode($request->getContent()); // je récup juste les données renseignées
        $description= $places->getDescription();       
        $name = $places->getName();
        $street = $places->getStreet();
        $zipcode = $places->getZipcode();
        $city = $places->getCity();
        $user = $places->getUser();
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

