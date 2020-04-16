<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class TestController extends AbstractController
{
    /**
    * @Route("/", name="api")
    */
   public function browse()
   {
       return $this->json('coucou');
   }
}


