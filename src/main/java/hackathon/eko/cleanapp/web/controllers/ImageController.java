package hackathon.eko.cleanapp.web.controllers;

import hackathon.eko.cleanapp.service.ImageService;
import hackathon.eko.cleanapp.web.exceptions.ImageNotFoundException;
import hackathon.eko.cleanapp.web.responses.ImageResponse;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/api/images")
public class ImageController {

    private final ImageService imageService;

    public ImageController(ImageService imageService) {
        this.imageService = imageService;
    }

    @PostMapping("/upload")
    public ImageResponse uploadImage(@RequestParam("imageFile") MultipartFile file) throws IOException {
        return this.imageService.uploadImage(file);
    }

    @GetMapping("{imageName}")
    public ImageResponse getImage(@PathVariable("imageName") String imageName) throws ImageNotFoundException {
        return this.imageService.findImageByName(imageName);
    }
}
