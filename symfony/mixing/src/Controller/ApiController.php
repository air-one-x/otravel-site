<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\User;
use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Serializer\SerializerInterface;

class ApiController extends AbstractController
{
    /**
     * @Route("/api", name="api")
     */
    public function index(UserRepository $userRepository, SerializerInterface $serializer, Request $request)
    {
        $user = $userRepository->findAll();

        $data = $serializer->normalize($user, null, ['groups' => 'user']);
        // foreach($data as $unique){
        //     return $this->JSON.stringify($unique);
        // }
       return $this->json($data);
    }

        /**
     * @Route("/api/2", name="api_2")
     */
    public function browse(UserRepository $userRepository, SerializerInterface $serializer, Request $request)
    {

        $limit = (int) $request->query->get('limit', 1);
        $offset = (int) $request->query->get('offset', 0); 

        $user = $userRepository->findBy([], [], $limit, $offset);

        return $this->json($serializer->normalize($user, null, ['groups' => 'user']));
    }
    
} 






  

