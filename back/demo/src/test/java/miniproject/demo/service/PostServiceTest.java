package miniproject.demo.service;

import miniproject.demo.repository.CommentRepository;
import miniproject.demo.repository.ContentRepository;
import miniproject.demo.repository.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@SpringBootTest
@Transactional
class PostServiceTest {
    @PersistenceContext
    EntityManager em;
    @Autowired
    CommentRepository commentRepository;

    @Autowired
    ContentRepository contentRepository;

    @Autowired
    ImageRepository imageRepository;

}