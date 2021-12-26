package miniproject.demo.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.Size;

import static javax.persistence.FetchType.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper=false)
public class Image extends BaseEntity{

    @Id @GeneratedValue
    private Long id;
    @Size(max=200)
    private String src;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "image_id")
    @JsonIgnore
    private Content content;
}
