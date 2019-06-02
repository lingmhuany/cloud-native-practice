package greeting;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;


@FeignClient(value = "hello-world", fallback = HelloWorldClientFallback.class)
public interface HelloWorldClient {
    @GetMapping(value = "/")
    String getHelloWorld();
}
