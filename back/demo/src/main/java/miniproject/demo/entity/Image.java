package miniproject.demo.entity;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.Size;

import static javax.persistence.FetchType.*;

@Entity
@Data
public class Image extends BaseEntity{

    @Id @GeneratedValue
    private Long id;
    @Size(max=200)
    private String src;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "image_id")
    private Content content;
}
