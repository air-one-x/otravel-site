<?php
namespace App\Controller;

use App\Entity\User;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\Session;


class SecurityController extends AbstractController
{
    private $session;

    public function __construct(SessionInterface $session)
    {
        $this->session = $session;
    }
    /**
     * @Route("/login", name="login", methods={"POST"})
     */
    public function login(Request $request, SerializerInterface $serializer, ValidatorInterface $validator, UserRepository $userRepository)
    {
        $data = json_decode($request->getContent());

        /*check connexion*/

        $user = $userRepository->checkLogin($data);            
        $errors = $validator->validate($user);
        $emailBdd = $userRepository->findOneBy(['email' => $data->email ]);
        $passwordDB = $emailBdd->getPassword();
        $passwordInput = $data->password; 
        $result = password_verify($passwordInput,$passwordDB);
    
        if (count($errors)) {
            
            $errors = $serializer->serialize($errors, 'json');
            return new Response($errors, 401, [
                'Content-Type' => 'application/json'
            ]);
        }

        // Check if log or password return error;
        
        if ($result === false) {
            return new JsonResponse('mot de passe ou email incorrect', 401, [
                'Content-Type' => 'application/json'
            ]);
        } else {
            return $this->json($emailBdd);
        }
    }
    /**
     * @Route("/isLogged", name="test")
     */
    public function isLogged(SerializerInterface $serializer)
    {
        $user = $this->getUser();
        $data = $serializer->normalize($user, null, ['groups' => 'user']);
        return $this->json($data);
    }
    /**
     * @Route("/logout", name="app_logout")
     */
    public function logout()
    {
        throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
    }
}