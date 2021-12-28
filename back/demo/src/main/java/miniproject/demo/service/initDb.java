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
            for(int i = 0; i <20; i++){
                Member member = new Member("thelovemsg"+i+"@naver.com",Integer.toString(i), EncryptUtils.hashPassword("123"), LocalDate.now(), Authority.ROLE_USER);
                em.persist(member);

                Content content = new Content("description"+i, member.getNickname(), member);
                em.persist(content);

                Comment comment = new Comment(content,"comment1");
                em.persist(comment);

                ContentInfo contentInfo1 = new ContentInfo(content, ContentInfoType.LIKE, member);
                ContentInfo contentInfo2 = new ContentInfo(content, ContentInfoType.FOLLOWING, member);
                ContentInfo contentInfo3 = new ContentInfo(content, ContentInfoType.FOLLOWED, member);
                ContentInfo contentInfo4 = new ContentInfo(content, ContentInfoType.LIKE, member);
                ContentInfo contentInfo5 = new ContentInfo(content, ContentInfoType.LIKED, member);
                em.persist(contentInfo1);
                em.persist(contentInfo2);
                em.persist(contentInfo3);
                em.persist(contentInfo4);
                em.persist(contentInfo5);
            }



        }
    }
}
