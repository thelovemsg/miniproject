package miniproject.demo.repository.member;

import lombok.RequiredArgsConstructor;

import javax.persistence.EntityManager;

@RequiredArgsConstructor
public class MemberRepositoryImpl {

    private final EntityManager em;

}
