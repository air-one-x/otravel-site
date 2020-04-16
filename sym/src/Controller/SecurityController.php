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
use Symfony\Component\HttpFoundation\Session\SessionInterface;
class SecurityController extends AbstractController
{
    /**
     * @Route("/login", name="login", methods={"POST"})
     */
    public function login(Request $request, SerializerInterface $serializer, ValidatorInterface $validator, UserRepository $userRepository, SessionInterface $session)
    {
        $data = json_decode($request->getContent());
        $user = $userRepository->checkLogin($data);
            
        $errors = $validator->validate($user);
        $test2 = $userRepository->findOneBy(['email' => $data->email ]);
        $passwordDB = $test2->getPassword();
        $passwordInput = $data->password; 
        $result = password_verify($passwordInput,$passwordDB);
    
        if (count($errors)) {
            
            $errors = $serializer->serialize($errors, 'json');
            return new Response($errors, 401, [
                'Content-Type' => 'application/json'
            ]);
        }
        // return new JsonResponse($data, 201);
        if (empty($result)) {
            return new JsonResponse('mot de passe ou email incorect', 401, [
                'Content-Type' => 'application/json'
            ]);
        } else {
            $session->set('user', $user);
            return $this->json($test2);
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