package hackathon.eko.cleanapp.service;

import hackathon.eko.cleanapp.repository.GarbageZoneRepository;
import hackathon.eko.cleanapp.web.response.GarbageZoneResponse;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class GarbageZoneService {

    private final GarbageZoneRepository garbageZoneRepository;

    public GarbageZoneService(GarbageZoneRepository garbageZoneRepository) {
        this.garbageZoneRepository = garbageZoneRepository;
    }

    public List<GarbageZoneResponse> getAllGarbageZones() {
        return garbageZoneRepository.findAll()
                .stream()
                .map(el -> new GarbageZoneResponse(el.getId(), el.getName()))
                .collect(Collectors.toList());
    }
}
