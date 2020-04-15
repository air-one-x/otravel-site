<?php

namespace App\Controller;

use App\Entity\Places;
use App\Form\PlacesType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class PlacesController extends AbstractController
{
    /**
     * @Route("/places", name="places")
     */
    public function browse(Request $request): Response
    {
        $places = new Places();
        $form = $this->createForm(PlacesType::class, $places);
        $form->handleRequest($request);
        dd($form);
        return $this->render('places/index.html.twig', [
            'placesForm' => $form->createView(),
        ]);
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($places);
        $entityManager->flush();
    }

        /**
     * @Route("/places", name="places")
     */
    public function read()
    {
        return $this->render('places/index.html.twig', [
            'controller_name' => 'PlacesController',
        ]);
    }

        /**
     * @Route("/places", name="places")
     */
    public function edit()
    {
        return $this->render('places/index.html.twig', [
            'controller_name' => 'PlacesController',
        ]);
    }

    /**
     * @Route("/places", name="places")
     */
    public function add()
    {
        return $this->render('places/index.html.twig', [
            'controller_name' => 'PlacesController',
        ]);
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
