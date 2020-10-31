package hackathon.eko.cleanapp.repository;

import hackathon.eko.cleanapp.model.GarbageZone;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface GarbageZoneRepository extends JpaRepository<GarbageZone, Long> {

    List<GarbageZone> findAllByCityId(long cityId);
}
