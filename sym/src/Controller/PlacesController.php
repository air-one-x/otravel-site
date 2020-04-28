<?php

namespace App\Controller;

use App\Entity\Places;
use App\Entity\PlacePicture;
use App\Entity\User;
use App\Repository\CategoryRepository;
use App\Repository\PlacesRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

class PlacesController extends AbstractController
{
  
    /**
     * @Route("/places/edit/{id}", name="places_edit_{id}", methods={"POST"})
     * @return Response
     */
    //public function edit(Places $places, PlacesRepository $placesRepository, Request $request, SerializerInterface $serializer, EntityManagerInterface $entityManager)
    //{

        
      //  $findPlace = $placesRepository->findOneBy(['id' => $places]);
      // $findUser =  $findPlace->getUser();

      //  if($findUser->getId() !== $this->getUser()->getId()){
      //     $data = [
      //          'status' => 400,
      //          'message' => 'Vous vous êtes perdu?'
      //      ];
      //      return new JsonResponse($data, 400);

      //  }else{

      //      $updatedPlacesData = $serializer->deserialize($request->getContent(), Places::class, 'json');
         
       //     $content = json_decode($request->getContent());
       //     dd($updatedPlacesData);
          

            //Update street
          //  if(!empty($updatedPlacesData->getStreet())){
          //
          //      $street = $updatedPlacesData->getStreet();
          //      $findPlace->setStreet($street);

          //  }
            //Update Name
          //  if(!empty($updatedPlacesData->getName())){

          //      $newName = $updatedPlacesData->getName();
          //      $findPlace->setName($newName);

            //}
            //Update Email
          //  if(!empty($updatedPlacesData->getZipcode())){

          //      $zipcode = $updatedUserData->getZipcode();
          //      $findPlace->setZipcode($zipcode);

          //  }
            //Update City
          //  if(!empty($updatedPlacesData->getCity())){

          //      $city = $updatedPlacesData->getCity();
          //      $findPlace->setCity($city);
              
          //  }
             //Update Category
          //   if(!empty($updatedPlacesData->getCategory())){

          //      $category = $updatedPlacesData->getCategory();
          //      $findPlace->addCategory($category);
              
          //  }

             //Update Lng
          //  if(!empty($updatedPlacesData->getLng())){

          //      $lng = $updatedPlacesData->getLng();
          //      $findPlace->setLng($lng);
              
          //  }

             //Update Lat
          //  if(!empty($updatedPlacesData->getLat())){

          //      $lat = $updatedPlacesData->getLat();
          //      $findPlace->setLat($lat);
              
          //  }
              //Update Description
          //  if(!empty($updatedPlacesData->getDescription())){

          //      $description = $updatedPlacesData->getDescription();
          //     $findPlace->setDescription($description);
              
          //  }
             //Update Commentary
          //  if(!empty($updatedPlacesData->getCommentary())){

          //      $commentary = $updatedPlacesData->getCommentary();
          //      $findPlace->setCommentary($commentary);
              
          //  }

          
              //Update places_picture
          //    if(!empty($updatedPlacesData->getPlacesPicture())){

          //      $newPlacesPicture = $updatedPlacesData->getPlacesPicture();
          //      $img = str_replace('data:image/png;base64,','', $newPlacesPicture);
          //      $nomfichier = explode(".", $content->nameFile)  ;
          //      $nomfichierUnique = $nomfichier[0].uniqid().'.'.$nomfichier[1];
          //      $path = '../public/uploads/images/places/'. $nomfichierUnique;
          //      $success = file_put_contents($path, base64_decode($img));

          //      if(isset($success)){
          //          $findPlace->setPlacesPicture($path);
          //      }

          //  }
    
          //  $entityManager->persist($findPlace);
          //  $entityManager->flush();
            
          //  $data = [
          //      'status' => 201,
          //      'message' => 'Le lieu a bien été mis à jour'
          //  ];
          //  return new JsonResponse($data, 201);
    //    }
   // }

    

    /**
     * @Route("/places/add", name="places_add", methods={"POST"})
     * @return Response
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
        
        if(!empty($data->place_picture && $data->nameFile)){

            $pictureForm = $data->place_picture ;
            $img = preg_replace('#^data:image/\w+;base64,#i', '', $pictureForm);
            $nomfichier = explode(".", $data->nameFile)  ;
            $nomfichierUnique = $nomfichier[0].uniqid().'.'.$nomfichier[1];
            $path = '../public/uploads/images/places/'. $nomfichierUnique;
            $success = file_put_contents($path, base64_decode($img));

            if(isset($success)){
                $pathFileBdd = 'uploads/images/places/'.$nomfichierUnique;
                $picture = new PlacePicture(); ///////////////////////////////////////rajout des parenthèses à enlever si marche plus
                $picture->setName($pathFileBdd);
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
     * @Route("/places/delete/{id}", name="places_delete", methods={"POST"})
     */
    public function delete()
    {
       
    }
}

