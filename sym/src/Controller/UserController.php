<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\RegistrationType;
use App\Repository\UserRepository;
use App\Services\ImageUploader;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
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
     * @Route("/inscription", name="inscription", methods={"POST"})
     */
    public function inscription(Request $request, SerializerInterface $serializer, EntityManagerInterface $entityManager, ValidatorInterface $validator, UserRepository $userRepository)
    {
       
        $user = $serializer->deserialize($request->getContent(), User::class, 'json');
        $user->setRoles(['ROLE_USER']);

        /*Give avatar if the user don't put*/
        if(empty($user->getAvatar())){
            $user->setAvatar("account.png");
        }
        else{
            $avatar = $user->getAvatar();
            $avatar->move('uploads/images', $avatar->getClientOriginalName());
        }

        /*email verification*/

        $emailgive = $user->getEmail();
        $emailbdd = $userRepository->findOneby(['email' => $emailgive]);

        if($emailbdd){ 

             $userEmail = $emailbdd->getEmail();
             if($emailgive == $userEmail){
            
               $emailverif = false;
               $data = [
                  'status' => 400,
                  'message' => 'L\'adresse email est déja utilisée'
               ];
            return new JsonResponse($data, 400);
        }
    }
            /*username verification*/

            $usernamegive = $user->getUsername();
            $usernamebdd = $userRepository->findOneby(['username' => $usernamegive]);
          
          
           if($usernamebdd){
    
            $userUsername = $usernamebdd->getUsername();
    
           
            if($usernamegive == $userUsername){
                
                $usernameverif = false;
                $data = [
                    'status' => 400,
                    'message' => 'Le username choisi n\'est pas disponible'
                ];
                return new JsonResponse($data, 400);
            }
          }     
      
       
        
     
        /*password verification*/
        $password = $user->getPassword();
        $verif= strlen($password);
        $valid = "8";

        if($verif < $valid){
                       
            $verif = false;
            $data = [
                'status' => 400,
                'message' => 'Le mot de passe doit faire 8 charactère minimum'
            ];
            return new JsonResponse($data, 400);
        }
        $user->setPassword($this->passwordEncoder->encodePassword(
            $user,
            $password
        ));

        /*push to database */
       
        $entityManager->persist($user);
        $entityManager->flush();
        $data = [
            'status' => 201,
            'message' => 'L\'utilisateur a bien été ajouté'
        ];
        return new JsonResponse($data, 201);
    }
    /**
     * @Route("/logout", name="app_logout")
     */
    public function logout()
    {
        throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
    }
}

