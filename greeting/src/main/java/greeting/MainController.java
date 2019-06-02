package greeting;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {
    @Autowired
    HelloWorldClient helloWorldClient;

    @GetMapping("/")
    public String greeting() {
        return helloWorldClient.getHelloWorld();
    }
}
