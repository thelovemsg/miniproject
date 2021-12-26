package miniproject.demo.service;

import lombok.RequiredArgsConstructor;
import miniproject.demo.entity.Comment;
import miniproject.demo.entity.Content;
import miniproject.demo.entity.ContentInfo;
import miniproject.demo.entity.Member;
import miniproject.demo.enums.Authority;
import miniproject.demo.enums.ContentInfoType;
import miniproject.demo.utils.EncryptUtils;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.PostConstruct;
import javax.persistence.EntityManager;
import java.security.NoSuchAlgorithmException;
import java.time.LocalDate;

@Component
@RequiredArgsConstructor
public class initDb {

    private final InitService initService;
    @PostConstruct
    public void init(){
        try {
            initService.dbInit1();
//          initService.dbInit2();
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
    }

    @Component
    @Transactional
    @RequiredArgsConstructor
    static class InitService {

        private final EntityManager em;
        public void dbInit1() throws NoSuchAlgorithmException {
            Member member1 = new Member("thelovemsg@naver.com","123", EncryptUtils.hashPassword("123"), LocalDate.now(), Authority.ROLE_USER);
            em.persist(member1);

            Content content1 = new Content("description1", member1.getNickname(), member1);
            em.persist(content1);

            Comment comment1 = new Comment(content1,"comment1");
            em.persist(comment1);

            ContentInfo contentInfo1 = new ContentInfo(content1, ContentInfoType.LIKE, member1);
            ContentInfo contentInfo2 = new ContentInfo(content1, ContentInfoType.FOLLOWING, member1);
            ContentInfo contentInfo3 = new ContentInfo(content1, ContentInfoType.FOLLOWED, member1);
            ContentInfo contentInfo4 = new ContentInfo(content1, ContentInfoType.LIKE, member1);
            ContentInfo contentInfo5 = new ContentInfo(content1, ContentInfoType.LIKED, member1);
            em.persist(contentInfo1);
            em.persist(contentInfo2);
            em.persist(contentInfo3);
            em.persist(contentInfo4);
            em.persist(contentInfo5);


        }

    }
}
