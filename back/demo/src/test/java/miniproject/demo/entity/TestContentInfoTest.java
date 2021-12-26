package miniproject.demo.entity;

import com.querydsl.jpa.impl.JPAQueryFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;

@SpringBootTest
@Transactional
class TestContentInfoTest {
    @Autowired
    EntityManager em;

    private JPAQueryFactory jpaQueryFactory;

//    @BeforeEach
//    public void before(){
//        jpaQueryFactory = new JPAQueryFactory(em);
//        TestContentInfo TestContentInfo1 = new TestContentInfo(ContentInfoType.FOLLOWING.getKey(),Long.parseLong("1"));
//        TestContentInfo TestContentInfo2 = new TestContentInfo(ContentInfoType.LIKE.getKey(),Long.parseLong("1"));
//        TestContentInfo TestContentInfo3 = new TestContentInfo(ContentInfoType.LIKED.getKey(),Long.parseLong("1"));
//        TestContentInfo TestContentInfo4 = new TestContentInfo(ContentInfoType.FOLLOWED.getKey(),Long.parseLong("1"));
//        TestContentInfo TestContentInfo5 = new TestContentInfo(ContentInfoType.FOLLOWING.getKey(),Long.parseLong("5"));
//        TestContentInfo TestContentInfo6 = new TestContentInfo(ContentInfoType.FOLLOWING.getKey(),Long.parseLong("6"));
//        TestContentInfo TestContentInfo7 = new TestContentInfo(ContentInfoType.FOLLOWING.getKey(),Long.parseLong("7"));
//        em.persist(TestContentInfo1);
//        em.persist(TestContentInfo2);
//        em.persist(TestContentInfo3);
//        em.persist(TestContentInfo4);
//        em.persist(TestContentInfo5);
//        em.persist(TestContentInfo6);
//        em.persist(TestContentInfo7);
//    }


}