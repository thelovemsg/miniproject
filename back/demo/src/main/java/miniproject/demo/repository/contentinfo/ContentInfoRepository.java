package miniproject.demo.repository.contentinfo;

import miniproject.demo.entity.ContentInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ContentInfoRepository extends JpaRepository<ContentInfo, Long> {
    @Query("select c.contentInfoType, count(*) " +
            "from ContentInfo c left join Member m " +
            "where m.id = :memberId " +
            "group by c.contentInfoType")
    int countContentInfoByMemberId(Long memberId);
}
