package miniproject.demo.service;

import miniproject.demo.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@SpringBootTest
@Transactional
public class MemberServiceTest {
    @PersistenceContext
    EntityManager em;
    @Autowired
    MemberRepository memberRepository;

}