package hackathon.eko.cleanapp.service;

import hackathon.eko.cleanapp.model.Image;
import hackathon.eko.cleanapp.repository.ImageRepository;
import hackathon.eko.cleanapp.web.exceptions.ImageNotFoundException;
import hackathon.eko.cleanapp.web.responses.ImageResponse;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.zip.DataFormatException;
import java.util.zip.Deflater;
import java.util.zip.Inflater;

@Service
public class ImageService {

    private final ImageRepository imageRepository;

    public ImageService(ImageRepository imageRepository) {
        this.imageRepository = imageRepository;
    }

    public ImageResponse uploadImage(MultipartFile file) throws IOException {
        Image img = new Image();
        img.setName(file.getOriginalFilename());
        img.setType(file.getContentType());
        img.setBytes(compressBytes(file.getBytes()));
        imageRepository.save(img);
        return mapToResponse(img);
    }

    public ImageResponse findImageByName(String imageName) throws ImageNotFoundException {
        Image retrievedImage = imageRepository.findByName(imageName).orElseThrow(() -> new ImageNotFoundException(imageName));
        return mapToResponse(retrievedImage);
    }

    private ImageResponse mapToResponse(Image image) {
        return new ImageResponse(
                image.getId(),
                image.getName(),
                image.getType(),
                decompressBytes(image.getBytes()));
    }

    private static byte[] compressBytes(byte[] data) {
        Deflater deflater = new Deflater();
        deflater.setInput(data);
        deflater.finish();
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
        byte[] buffer = new byte[1024];
        while (!deflater.finished()) {
            int count = deflater.deflate(buffer);
            outputStream.write(buffer, 0, count);
        }
        try {
            outputStream.close();
        } catch (IOException e) {

        }
        return outputStream.toByteArray();
    }

    private static byte[] decompressBytes(byte[] data) {
        Inflater inflater = new Inflater();
        inflater.setInput(data);
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
        byte[] buffer = new byte[1024];
        try {
            while (!inflater.finished()) {
                int count = inflater.inflate(buffer);
                outputStream.write(buffer, 0, count);
            }
            outputStream.close();
        } catch (IOException | DataFormatException ioe) {

        }
        return outputStream.toByteArray();
    }
}
