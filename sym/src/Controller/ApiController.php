<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Entity\User;
use App\Repository\UserRepository;
use App\Entity\Category;
use App\Repository\CategoryRepository;
use App\Entity\Places;
use App\Repository\PlacesRepository;
use App\Entity\PlacePicture;
use App\Repository\PlacePictureRepository;
use App\Entity\Commentary;
use App\Repository\CommentaryRepository;
use App\Entity\CommentaryPicture;
use App\Repository\CommentaryPictureRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\SerializerInterface;

class ApiController extends AbstractController
{
    /**
     * @Route("/api/user", name="browse_user")
     */
    public function browse(UserRepository $userRepository, SerializerInterface $serializer)
    {
        $user = $userRepository->findAll();

        $data = $serializer->normalize($user, null, ['groups' => 'user']);
        return $this->json($data);

    }

    /**
     * @Route("/api/user/{id}", name="read_user")
     */
    public function read(User $user, UserRepository $userRepository, SerializerInterface $serializer)
    {
        $user = $userRepository->find($user);
        $data = $serializer->normalize($user, null,['groups' => 'user']);
        return $this->json($data);

    }

    /**
     * @Route("/api/category", name="browse_category")
     */
    public function browse_category(CategoryRepository $categoryRepository, SerializerInterface $serializer)
    {
        $user = $categoryRepository->findAll();

        $data = $serializer->normalize($user, null, ['groups' => 'category']);
        return $this->json($data);

    }

    /**
     * @Route("/api/category/{id}", name="read_category")
     */
    public function read_category(Category $category, CategoryRepository $categoryRepository, SerializerInterface $serializer)
    {
     
        $user = $categoryRepository->find($category);
        $data = $serializer->normalize($user, null, ['groups' => 'category']);
        return $this->json($data);
        
    }

    /**
     * @Route("/api/places", name="browse_places")
     */
    public function browse_places(PlacesRepository $placesRepository, SerializerInterface $serializer)
    {
        $user = $placesRepository->findAll();

        $data = $serializer->normalize($user, null, ['groups' => 'places']);
        return $this->json($data);

    }

    /**
     * @Route("/api/places/{id}", name="read_places")
     */
    public function read_places(Places $places, PlacesRepository $placesRepository, SerializerInterface $serializer)
    {
        $user = $placesRepository->find($places);
        $data = $serializer->normalize($user, null, ['groups' => 'places']);
        return $this->json($data);

    }

    /**
     * @Route("/api/commentary", name="browse_commentary")
     */
    public function browse_commentary(CommentaryRepository $commentaryRepository, SerializerInterface $serializer)
    {
        $user = $commentaryRepository->findAll();

        $data = $serializer->normalize($user, null, ['groups' => 'commentary']);
        return $this->json($data);

    }

    /**
     * @Route("/api/commentary/{id}", name="read_commentary")
     */
    public function read_commentary(Commentary $commentary, CommentaryRepository $commentaryRepository, SerializerInterface $serializer)
    {
      
        $user = $commentaryRepository->find($commentary);
        $data = $serializer->normalize($user, null, ['groups' => 'commentary']);
        return $this->json($data);

    }

    /**
     * @Route("/api/place_picture", name="browse_place_picture")
     */
    public function browse_place_picture(PlacePictureRepository $placepictureRepository, SerializerInterface $serializer)
    {
        $user = $placepictureRepository->findAll();

        $data = $serializer->normalize($user, null, ['groups' => 'place_picture']);
        return $this->json($data);

    }

    /**
     * @Route("/api/place_picture/{id}", name="read_place_picture")
     */
    public function read_place_picture(PlacePicture $placepicture, PlacePictureRepository $placepictureRepository, SerializerInterface $serializer)
    {
        $user = $placepictureRepository->find($placepicture);
        $data = $serializer->normalize($user, null, ['groups' => 'place_picture']);
        return $this->json($data);
    }

    /**
     * @Route("/api/commentary_picture", name="browse_commentary_picture")
     */
    public function browse_commentary_picture(CommentaryPictureRepository $commentarypictureRepository, SerializerInterface $serializer)
    {
        $user = $commentarypictureRepository->findAll();

        $data = $serializer->normalize($user, null, ['groups' => 'commentary_picture']);
        return $this->json($data);

    }

    /**
     * @Route("/api/commentary_picture/{id}", name="read_commentary_picture")
     */
    public function read_commentary_picture(CommentaryPicture $commentarypicture, CommentaryPictureRepository $commentarypictureRepository, SerializerInterface $serializer)
    {
        $user = $commentarypictureRepository->find($commentarypicture);
        $data = $serializer->normalize($user, null, ['groups' => 'commentary_picture']);
        return $this->json($data);

    }
    
    /**
     * @Route("/api/category/toilette/places", name="read_toilette_places")
     */
    public function read_toilette_places(CategoryRepository $categoryRepository, PlacesRepository $placesRepository, SerializerInterface $serializer)
    {
        $places = $placesRepository->findByExampleField(3);
        dd($places);
        
        dd($category->getId());
        
        foreach($category as $categ){
            
            $test2 = $placesRepository->findOneBy(['id' => $categ->getId()]);
            
            dd($test2);
        }
 

        $criteria = 3;
        $user = $PlacesRepository->findOneBy(['category_id' => $criteria]);
        dd($user); 
        //tu peu test stp si sa recup bien $user 



        $data = $serializer->normalize($user, null, ['groups' => 'category']);
        return $this->json($data);
        
    }

    /**
     * @Route("/api/category/douche/places", name="read_douche_places")
     */
    public function read_douche_places(Category $category, CategoryRepository $categoryRepository, SerializerInterface $serializer)
    {
     
        $user = $categoryRepository->find($category);
        $data = $serializer->normalize($user, null, ['groups' => 'category']);
        return $this->json($data);
        
    }


    /**
     * @Route("/api/category/wifi/places", name="read_wifi_places")
     */
    public function read_wifi_places(Category $category, CategoryRepository $categoryRepository, SerializerInterface $serializer)
    {
     
        $user = $categoryRepository->find($category);
        $data = $serializer->normalize($user, null, ['groups' => 'category']);
        return $this->json($data);
        
    }



    /**
     * @Route("/api/category/fontaine/places", name="read_fontaine_places")
     */
    public function read_fontaine_places(Category $category, CategoryRepository $categoryRepository, SerializerInterface $serializer)
    {
     
        $user = $categoryRepository->find($category);
        $data = $serializer->normalize($user, null, ['groups' => 'category']);
        return $this->json($data);
        
    }

   

}



