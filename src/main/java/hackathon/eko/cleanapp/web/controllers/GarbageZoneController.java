package hackathon.eko.cleanapp.web.controllers;

import hackathon.eko.cleanapp.service.GarbageZoneService;
import hackathon.eko.cleanapp.web.exceptions.CityNotFoundException;
import hackathon.eko.cleanapp.web.exceptions.GarbageZoneNotFoundException;
import hackathon.eko.cleanapp.web.requests.GarbageZoneRequest;
import hackathon.eko.cleanapp.web.responses.GarbageZoneResponse;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/garbage-zones")
public class GarbageZoneController {

    private final GarbageZoneService garbageZoneService;

    public GarbageZoneController(GarbageZoneService garbageZoneService) {
        this.garbageZoneService = garbageZoneService;
    }

    @GetMapping
    public List<GarbageZoneResponse> findAllGarbageZones() {
        return this.garbageZoneService.findAll();
    }

    @GetMapping("{id}")
    public GarbageZoneResponse findGarbageZoneById(@PathVariable long id) throws GarbageZoneNotFoundException {
        return this.garbageZoneService.findById(id);
    }

    @GetMapping("/city/{cityId}")
    public List<GarbageZoneResponse> findGarbageZonesForCity(@PathVariable long cityId) {
        return this.garbageZoneService.findAllByCityId(cityId);
    }

    @PostMapping("/create")
    public void createNewGarbageZone(@RequestBody GarbageZoneRequest request) throws CityNotFoundException {
        this.garbageZoneService.create(request);
    }
}
