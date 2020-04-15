<?php

namespace App\Repository;

use App\Entity\PlacesCategory;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method PlacesCategory|null find($id, $lockMode = null, $lockVersion = null)
 * @method PlacesCategory|null findOneBy(array $criteria, array $orderBy = null)
 * @method PlacesCategory[]    findAll()
 * @method PlacesCategory[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PlacesCategoryRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PlacesCategory::class);
    }

    // /**
    //  * @return PlacesCategory[] Returns an array of PlacesCategory objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('p.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?PlacesCategory
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
