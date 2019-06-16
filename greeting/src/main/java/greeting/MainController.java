package greeting;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {
    @Autowired
    HelloWorldClient helloWorldClient;

    @GetMapping("/")
    @PreAuthorize("hasRole('ROLE_ADMINISTRATOR')")
    public String greeting() {
        return helloWorldClient.getHelloWorld();
    }
}
