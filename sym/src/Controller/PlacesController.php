<?php

namespace App\Controller;

use App\Entity\Places;
use App\Entity\User;
use App\Entity\Category;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\PlacesRepository;
use App\Repository\UserRepository;
use App\Repository\CategoryRepository;
class PlacesController extends AbstractController
{
  

    /**
     * @Route("/places/edit", name="places_edit")
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
    public function add(Request $request, SerializerInterface $serializer, EntityManagerInterface $entityManager, ValidatorInterface $validator, PlacesRepository $placesRepository, CategoryRepository $categoryRepositor)
    {
        $places = $serializer->deserialize($request->getContent(), Places::class, 'json');
        
        $name = $places->getName();
        $places->setName($name);   
             
        $city = $places->getCity();
        $places->setCity($city);    
            
        $street = $places->getStreet();
        $places->setStreet($name);        

        $zipcode = $places->getZipcode();
        $places->setZipcode($zipcode);        

        $user = $places->getUser();
        $places->getUser()->setUsername($name);    
            
        $category = $places->getCategory();
        $category->setName($category);
        

        
        $entityManager->persist($places);
        $entityManager->flush();
        $data = [
            'status' => 201,
            'message' => 'Le lieu a bien été ajouté'
        ];
        return new JsonResponse($data, 201);






    }

    /**
     * @Route("/places", name="places")
     */
    public function delete()
    {
        return $this->render('places/index.html.twig', [
            'controller_name' => 'PlacesController',
        ]);
    }
}





// public function login(AuthenticationUtils $authenticationUtils, User $user, Request $request, SerializerInterface $serializer, ValidatorInterface $validator): Response
//     {
//         // if ($this->getUser()) {
//         //     return $this->redirectToRoute('target_path');
//         // }
            
//         $user = $serializer->deserialize($request->getContent(), User::class, 'json');

//         $email = $user->getEmail();
//         $password = $user->getPassword();
//         $request->get($email, $password);
        
//         dd($request);
        
//         // get the login error if there is one
//         $error = $authenticationUtils->getLastAuthenticationError();
//         // last username entered by the user
//         $lastUsername = $authenticationUtils->getLastUsername();

//         $errors = $validator->validate($user);
//         if(count($errors)) {
//             $errors = $serializer->serialize($errors, 'json');
//             return new Response($errors, 500, [
//                 'Content-Type' => 'application/json'
//             ]);
//         }

//         $data = [
//             'status' => 201,
//             'message' => 'Utilisateur reconnu'
//         ];
//         return new JsonResponse($data, 201);
//         // return $this->json($request); 
//     }
