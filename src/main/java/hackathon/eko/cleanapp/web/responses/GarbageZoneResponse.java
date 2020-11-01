package hackathon.eko.cleanapp.web.responses;

public class GarbageZoneResponse {

    private final long id;
    private final String cityName;
    private final String coordinates;
    private final String description;
    private final long imageId;

    public GarbageZoneResponse(long id, String cityName, String coordinates, String description, long imageId) {
        this.id = id;
        this.cityName = cityName;
        this.coordinates = coordinates;
        this.description = description;
        this.imageId = imageId;
    }

    public long getId() {
        return id;
    }

    public String getCityName() {
        return cityName;
    }

    public String getCoordinates() {
        return coordinates;
    }

    public String getDescription() {
        return description;
    }

    public long getImageId() {
        return imageId;
    }
}
