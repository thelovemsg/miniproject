package miniproject.demo.repository;

import miniproject.demo.dto.ImageDto;
import miniproject.demo.entity.Image;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ImageRepository extends JpaRepository<Image, Long> {
    List<ImageDto> findAllImagesByContentId(Long contentId);
}
