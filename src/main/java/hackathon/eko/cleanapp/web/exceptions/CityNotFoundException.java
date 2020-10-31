package hackathon.eko.cleanapp.web.exceptions;

public class CityNotFoundException extends Exception {

    public CityNotFoundException(long id) {
        super("City with id=" + id + " not found");
    }
}
