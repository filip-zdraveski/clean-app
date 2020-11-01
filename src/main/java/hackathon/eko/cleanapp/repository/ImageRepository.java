package hackathon.eko.cleanapp.repository;

import hackathon.eko.cleanapp.model.Image;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ImageRepository extends JpaRepository<Image, Long> {
    Optional<Image> findByName(String imageName);
}
