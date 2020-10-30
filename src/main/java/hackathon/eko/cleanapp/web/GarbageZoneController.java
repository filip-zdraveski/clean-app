package hackathon.eko.cleanapp.web;

import hackathon.eko.cleanapp.service.GarbageZoneService;
import hackathon.eko.cleanapp.web.response.GarbageZoneResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/garbage-zones")
public class GarbageZoneController {

    private final GarbageZoneService garbageZoneService;

    public GarbageZoneController(GarbageZoneService garbageZoneService) {
        this.garbageZoneService = garbageZoneService;
    }

    // TODO: Implement real method here (this is just a test)
    @GetMapping
    public String getGarbageZones() {
        List<GarbageZoneResponse> zones = this.garbageZoneService.getAllGarbageZones();
        StringBuilder sb = new StringBuilder();
        zones.forEach(el -> {
            sb.append(el.name);
            sb.append(' ');
        });
        return sb.toString();
    }
}
