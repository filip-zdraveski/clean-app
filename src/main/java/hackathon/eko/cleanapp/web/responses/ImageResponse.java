package hackathon.eko.cleanapp.web.responses;

public class ImageResponse {

    private final long id;
    private final String name;
    private final String type;
    private final byte[] bytes;

    public ImageResponse(long id, String name, String type, byte[] bytes) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.bytes = bytes;
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getType() {
        return type;
    }

    public byte[] getBytes() {
        return bytes;
    }
}
