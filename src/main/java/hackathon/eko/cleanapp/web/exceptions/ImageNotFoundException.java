package hackathon.eko.cleanapp.web.exceptions;

public class ImageNotFoundException extends Exception {

    public ImageNotFoundException(String imageName) {
        super("Image with name=" + imageName + " not found");
    }

    public ImageNotFoundException(long id) {
        super("Image with id=" + id + " not found");
    }
}
