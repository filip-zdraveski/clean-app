package hackathon.eko.cleanapp.repository;

import hackathon.eko.cleanapp.model.GarbageZone;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GarbageZoneRepository extends JpaRepository<GarbageZone, Long> {
}
