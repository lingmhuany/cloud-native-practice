package rainbow;

import java.util.List;

import org.springframework.data.repository.CrudRepository;


public interface RainbowRepository extends CrudRepository<Rainbow, Integer> {
    
    public List<Rainbow> findAll();

}
