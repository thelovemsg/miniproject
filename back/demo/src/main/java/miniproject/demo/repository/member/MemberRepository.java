package miniproject.demo.repository.member;

import miniproject.demo.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MemberRepository extends JpaRepository<Member, Long> {

    int countByEmail(String email);
    Member findByEmailAndPassword(String email, String password);
}

