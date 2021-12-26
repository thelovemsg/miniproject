package miniproject.demo.repository;

import miniproject.demo.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Long> {

    boolean existsByEmail(String email);
    Member findByEmailAndPassword(String email, String password);
    Optional<Member> findByEmail(String email);
}

