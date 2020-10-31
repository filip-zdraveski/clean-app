package hackathon.eko.cleanapp.service;

import hackathon.eko.cleanapp.model.City;
import hackathon.eko.cleanapp.repository.CityRepository;
import hackathon.eko.cleanapp.web.exceptions.CityNotFoundException;
import hackathon.eko.cleanapp.web.responses.CityResponse;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CityService {

    private final CityRepository cityRepository;

    public CityService(CityRepository cityRepository) {
        this.cityRepository = cityRepository;
    }

    private CityResponse mapToResponse(City city) {
        return new CityResponse(
                city.getId(),
                city.getName());
    }

    public List<CityResponse> findAll() {
        return cityRepository.findAll()
                .stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    public CityResponse findById(long cityId) throws CityNotFoundException {
        City city = cityRepository.findById(cityId).orElseThrow(() -> new CityNotFoundException(cityId));
        return mapToResponse(city);
    }
}
