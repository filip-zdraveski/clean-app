package hackathon.eko.cleanapp.web.controllers;

import hackathon.eko.cleanapp.service.CityService;
import hackathon.eko.cleanapp.web.exceptions.CityNotFoundException;
import hackathon.eko.cleanapp.web.responses.CityResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/cities")
public class CityController {

    private final CityService cityService;

    public CityController(CityService cityService) {
        this.cityService = cityService;
    }

    @GetMapping
    public List<CityResponse> findAllCities() {
        return this.cityService.findAll();
    }

    @GetMapping("{id}")
    public CityResponse findCityById(@PathVariable long id) throws CityNotFoundException {
        return this.cityService.findById(id);
    }
}
