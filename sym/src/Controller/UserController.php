<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\User;
use App\Form\RegistrationType;
use App\Services\ImageUploader;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserController extends AbstractController
{
    private $passwordEncoder;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->passwordEncoder = $passwordEncoder;
    }

    /**
     * @Route("/inscription", name="user_inscription")
     */
    public function index(Request $request): Response
    {
        $user = new User();
        $form = $this->createForm(RegistrationType::class, $user);
        $form->handleRequest($request);

         if ($form->isSubmitted() && $form->isValid()) {
            
            // On récupère l'objet qui représente le fichier envoyé
            $file = $form['avatar']->getData();
            $file->move('uploads/images', $file->getClientOriginalName());
            $username = $form['username']->getData();
            $email = $form['email']->getData();
            $password = $form['password']->getData();

            $user->setRoles(['ROLE_USER']);

            $user->setAvatar($file->getClientOriginalName());
            

           $user->setAvatar($file);
           $user->setUsername($username);
           $user->setEmail($email);

           $user->setPassword($this->passwordEncoder->encodePassword(
            $user,
            $password
        ));
            

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($user);
            $entityManager->flush();

        }

        return $this->render('user/index.html.twig', [
            'registrationForm' => $form->createView(),
        ]);
    }
}
