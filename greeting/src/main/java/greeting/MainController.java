package greeting;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class MainController {

    @GetMapping("/get")
    public String greeting() {
        Date date = new Date();
        SimpleDateFormat df = new SimpleDateFormat("HH");
        String str = df.format(date);
        int a = Integer.parseInt(str);
        if (a >= 0 && a <= 6) {
            return "凌晨好 " + SecurityContextHolder.getContext().getAuthentication().getName();
        } else if (a > 6 && a <= 11) {
            return "上午好 " + SecurityContextHolder.getContext().getAuthentication().getName();
        } else if  (a > 11 && a <= 13) {
            return "中午好 " + SecurityContextHolder.getContext().getAuthentication().getName();
        } else if  (a > 13 && a <= 18) {
            return "下午好 " + SecurityContextHolder.getContext().getAuthentication().getName();
        } else {
            return "晚上好 " + SecurityContextHolder.getContext().getAuthentication().getName();
        }
    }
}
