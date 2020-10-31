package hackathon.eko.cleanapp.web.exceptions;

public class GarbageZoneNotFoundException extends Exception {

    public GarbageZoneNotFoundException(long id) {
        super("Garbage zone with id=" + id + " not found");
    }
}
