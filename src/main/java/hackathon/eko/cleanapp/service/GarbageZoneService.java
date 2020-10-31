package hackathon.eko.cleanapp.service;

import hackathon.eko.cleanapp.model.City;
import hackathon.eko.cleanapp.model.GarbageZone;
import hackathon.eko.cleanapp.repository.CityRepository;
import hackathon.eko.cleanapp.repository.GarbageZoneRepository;
import hackathon.eko.cleanapp.web.exceptions.CityNotFoundException;
import hackathon.eko.cleanapp.web.exceptions.GarbageZoneNotFoundException;
import hackathon.eko.cleanapp.web.requests.GarbageZoneRequest;
import hackathon.eko.cleanapp.web.responses.GarbageZoneResponse;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class GarbageZoneService {

    private final GarbageZoneRepository garbageZoneRepository;
    private final CityRepository cityRepository;

    public GarbageZoneService(GarbageZoneRepository garbageZoneRepository, CityRepository cityRepository) {
        this.garbageZoneRepository = garbageZoneRepository;
        this.cityRepository = cityRepository;
    }

    private GarbageZoneResponse mapToResponse(GarbageZone garbageZone) {
        return new GarbageZoneResponse(
                garbageZone.getId(),
                garbageZone.getCity().getName(),
                garbageZone.getCoordinates(),
                garbageZone.getDescription());
    }

    public List<GarbageZoneResponse> findAll() {
        return garbageZoneRepository.findAll()
                .stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    public GarbageZoneResponse findById(long id) throws GarbageZoneNotFoundException {
        GarbageZone garbageZone = garbageZoneRepository.findById(id).orElseThrow(() -> new GarbageZoneNotFoundException(id));
        return mapToResponse(garbageZone);
    }

    public List<GarbageZoneResponse> findAllByCityId(long cityId) {
        return garbageZoneRepository.findAllByCityId(cityId)
                .stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    public void create(GarbageZoneRequest request) throws CityNotFoundException {
        GarbageZone garbageZone = new GarbageZone();
        City garbageZoneCity = this.cityRepository.findById(request.cityId).orElseThrow(() -> new CityNotFoundException(request.cityId));
        garbageZone.setCity(garbageZoneCity);
        garbageZone.setCoordinates(request.coordinates);
        garbageZone.setDescription(request.description);
        garbageZoneRepository.save(garbageZone);
    }
}
