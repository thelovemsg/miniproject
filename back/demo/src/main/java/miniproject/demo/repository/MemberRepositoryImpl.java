package miniproject.demo.repository;

import lombok.RequiredArgsConstructor;

import javax.persistence.EntityManager;

@RequiredArgsConstructor
public class MemberRepositoryImpl {

    private final EntityManager em;

}
