package hackathon.eko.cleanapp.web.responses;

public class CityResponse {

    private final long id;
    private final String name;

    public CityResponse(long id, String name) {
        this.id = id;
        this.name = name;
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }
}
