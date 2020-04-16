<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use App\Repository\UserRepository;


class SecurityController extends AbstractController
{
    /**
     * @Route("/login", name="app_login")
     */

    public function login(AuthenticationUtils $authenticationUtils, Request $request, SerializerInterface $serializer, ValidatorInterface $validator,  UserRepository $userRepository): Response

    {
        // if ($this->getUser()) {
        //     return $this->redirectToRoute('target_path');
        // }
            
        $user = $serializer->deserialize($request->getContent(), User::class, 'json');


        $data = json_decode($request->getContent());
        //$user = $serializer->deserialize($request->getContent(), User::class, 'json');

        // $email = $data->email;
        // $password = $data->password;

        // $request->request->get($password);

        $user = $userRepository->checkLogin($data);
        //$data = $serializer->normalize($user, null,['groups' => 'user']);



        // get the login error if there is one
        $error = $authenticationUtils->getLastAuthenticationError();
        // last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();

        $errors = $validator->validate($user);

        if (count($errors)) {

            $errors = $serializer->serialize($errors, 'json');
            return new Response($errors, 500, [
                'Content-Type' => 'application/json'
            ]);
        }



        $mess = [
            'status' => 201,
            'message' => 'L\'utilisateur a bien été ajouté'
        ];


        // return new JsonResponse($data, 201);
        if (empty($user)) {
            return new Response('mot de passe ou email incorect', 401, [
                'Content-Type' => 'application/json'
            ]);
        } else {
            return $this->json($user);
        }
    }

    /**
     * @Route("/logout", name="app_logout")
     */
    public function logout()
    {
        throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
    }
}
