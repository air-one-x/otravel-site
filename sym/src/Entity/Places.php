<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass="App\Repository\PlacesRepository")
 */
class Places
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups("places")
     * @Groups("user")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("category")
     * @Groups("places")
     * @Groups("user")
     * @Groups("place_picture")
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("category")
     * @Groups("user")
     */
    private $adress;

    /**
     * @ORM\Column(type="datetime")
     * @Groups("places")
     * @Groups("user")
     */
    private $created_at;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     * @Groups("places")
     * 
     */
    private $updated_at;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="Places")
     * @ORM\JoinColumn(onDelete="SET NULL")
     * @Groups("places")
     */
    private $user;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Category", inversedBy="places")
     * @Groups("places")
     */
    private $Category;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\PlacePicture", mappedBy="places")
     * @Groups("places")
     */
    private $Place_picture;

   
    public function __construct()
    {
        $this->Category = new ArrayCollection();
        $this->Place_picture = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getAdress(): ?string
    {
        return $this->adress;
    }

    public function setAdress(string $adress): self
    {
        $this->adress = $adress;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->created_at;
    }

    public function setCreatedAt(\DateTimeInterface $created_at): self
    {
        $this->created_at = $created_at;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updated_at;
    }

    public function setUpdatedAt(?\DateTimeInterface $updated_at): self
    {
        $this->updated_at = $updated_at;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    /**
     * @return Collection|Category[]
     */
    public function getCategory(): Collection
    {
        return $this->Category;
    }

    public function addCategory(Category $category): self
    {
        if (!$this->Category->contains($category)) {
            $this->Category[] = $category;
        }

        return $this;
    }

    public function removeCategory(Category $category): self
    {
        if ($this->Category->contains($category)) {
            $this->Category->removeElement($category);
        }

        return $this;
    }

    /**
     * @return Collection|PlacePicture[]
     */
    public function getPlacePicture(): Collection
    {
        return $this->Place_picture;
    }

    public function addPlacePicture(PlacePicture $placePicture): self
    {
        if (!$this->Place_picture->contains($placePicture)) {
            $this->Place_picture[] = $placePicture;
            $placePicture->setPlaces($this);
        }

        return $this;
    }

    public function removePlacePicture(PlacePicture $placePicture): self
    {
        if ($this->Place_picture->contains($placePicture)) {
            $this->Place_picture->removeElement($placePicture);
            // set the owning side to null (unless already changed)
            if ($placePicture->getPlaces() === $this) {
                $placePicture->setPlaces(null);
            }
        }

        return $this;
    }
}
