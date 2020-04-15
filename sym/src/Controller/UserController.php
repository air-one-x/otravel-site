<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\User;
use App\Form\RegistrationType;
use App\Services\ImageUploader;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class UserController extends AbstractController
{
    private $passwordEncoder;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->passwordEncoder = $passwordEncoder;
    }

    
    /**
     * @Route("/inscription", name="user_inscription", methods={"POST"})
     */
    public function inscription(Request $request, SerializerInterface $serializer, EntityManagerInterface $entityManager, ValidatorInterface $validator)
    {
       
        $user = $serializer->deserialize($request->getContent(), User::class, 'json');

        if(empty($user->getAvatar())){
            $user->setAvatar("account.png");
        }
        else{
            $avatar = $user->getAvatar();
            $avatar->move('uploads/images', $avatar->getClientOriginalName());
            
        }
        $user->setRoles(['ROLE_USER']);
        
        $password = $user->getPassword();
        
        $user->setPassword($this->passwordEncoder->encodePassword(
            $user,
            $password
        ));

        $errors = $validator->validate($user);
        if(count($errors)) {
            $errors = $serializer->serialize($errors, 'json');
            return new Response($errors, 500, [
                'Content-Type' => 'application/json'
            ]);
        }
        $entityManager->persist($user);
        $entityManager->flush();
        $data = [
            'status' => 201,
            'message' => 'L\'utilisateur a bien été ajouté'
        ];
        return new JsonResponse($data, 201);
    }
}

