package miniproject.demo.repository;

import miniproject.demo.entity.ContentInfo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContentInfoRepository extends JpaRepository<ContentInfo, Long> {

}
