package miniproject.demo.service;

import miniproject.demo.dto.MemberDto;
import miniproject.demo.entity.Member;
import miniproject.demo.repository.member.MemberRepository;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.Optional;

@SpringBootTest
@Transactional
public class MemberServiceTest {
    @PersistenceContext
    EntityManager em;
    @Autowired
    MemberRepository memberRepository;

}