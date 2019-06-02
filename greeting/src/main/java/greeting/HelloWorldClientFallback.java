package greeting;

import org.springframework.stereotype.Component;

@Component
public class HelloWorldClientFallback implements HelloWorldClient {
    @Override
    public String getHelloWorld() {
        return "Failed to connect to hello world.";
    }
}
