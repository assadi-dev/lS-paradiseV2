<?php

namespace App\Controller;


use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class OauthController extends AbstractController
{
    /**
     * @Route("/oauth/steam", name="oauth_steam")
     */
    public function loginWithSteam()
    {
        return $this->json([
            'message' => 'Welcome to your new controller!',
            'path' => 'src/Controller/OauthController.php',
        ]);
    }
}