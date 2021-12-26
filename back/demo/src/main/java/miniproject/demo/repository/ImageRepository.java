package miniproject.demo.repository;

import miniproject.demo.entity.Image;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ImageRepository extends JpaRepository<Image, Long> {
    List<Image> findAllImagesByContentId(Long contentId);
}
