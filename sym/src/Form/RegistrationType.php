<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\IsTrue;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Validator\Constraints\File;

class RegistrationType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('avatar', FileType::class, [
            'attr' => ['class' => 'col-xs-12 col-md-8 form-control'],
            'required' => false,
            'constraints' => [
                new File([
                    'maxSize' => '1024k',
                    'mimeTypes' => [
                        'application/jpg',
                        'application/png',
                    ],
                    'mimeTypesMessage' => 'Veuillez uploader un fichier au format JPG ou PNG',
                ]) 
            ],
           
        ])
            ->add('username', TextType::class, ['attr' => [
                'placeholder' => "Votre nom d'utilisateur",
                'class' => "col-12 col-md-8 form-control"
            ]
                ])
         
            ->add('email', EmailType::class, ['attr'=> [
                'placeholder' =>"Votre adresse Email",
                'class' => "col-12 col-md-8 form-control"
                ]
            ])
            ->add('password', RepeatedType::class, [
                'type' => PasswordType::class,
                'invalid_message' => 'Les mots de passe entrés doivent être identiques',
                'options' => ['attr' => ['class' => 'password-field']],
                'required' => true,    
                'first_options' => ['label' => 'Mot de passe', 'attr' => ['placeholder' => 'Votre mot de passe',
                'class' => "col-12 col-md-8 form-control"
                ]],
                'second_options' => ['label' => 'Confirmez votre mot de passe', 'attr' => ['placeholder' => 'Confirmation mot de passe',
                'class' => "col-12 col-md-8 form-control"
                ]],
            ])
            ->add('submit', SubmitType::class, [
                'label' => 'Inscription'
            ])
            ->add('agreeTerms', CheckboxType::class, [
                'mapped' => false,
                'constraints' => [
                    new IsTrue([
                        'message' => 'You should agree to our terms.',
                    ]),
                ],
            ])
            
            
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
