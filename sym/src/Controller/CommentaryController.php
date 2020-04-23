<?php

namespace App\Controller;

use App\Entity\Commentary;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;




class CommentaryController extends AbstractController
{

    /**
     * @Route("/commentary/add", name="commentary_add")
     */
    public function CommentPlaces(Request $request, SerializerInterface $serializer, EntityManagerInterface $entityManager)
    {
        $commentary = $serializer->deserialize($request->getContent(), Commentary::class, 'json');
        $data = json_decode($request->getContent()); // je récup juste les données renseignées
        $text= $data->text;       
       
        $newCommentary = new Commentary();
        $newCommentary->setUser($this->getUser());
        $newCommentary->setText($text);
        $entityManager->persist($newCommentary);
        $entityManager->flush();
        $data = [
            'status' => 201,
            'message' => 'Le commentaire a bien été ajouté'
        ];

        return new JsonResponse($data, 201);
    
    }

}