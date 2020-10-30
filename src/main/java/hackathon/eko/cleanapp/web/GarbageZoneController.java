package hackathon.eko.cleanapp.web;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/garbage-zones")
public class GarbageZoneController {

    // TODO: Implement methods here
    @GetMapping
    public String getGarbageZones() {
        return "Test";
    }
}
