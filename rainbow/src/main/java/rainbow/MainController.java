package rainbow;

import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {

    @Autowired
    RainbowRepository rainbowRepository;

    
    @GetMapping("/get")
    public String getRainbow() {
        List<Rainbow> rainbows = rainbowRepository.findAll();
        Random rand = new Random();
        Rainbow rainbow = rainbows.get(rand.nextInt(rainbows.size()));
        return rainbow.getSentence();
    }

}
