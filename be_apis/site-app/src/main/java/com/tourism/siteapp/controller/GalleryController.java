package com.tourism.tourismcore.controller;

import com.tourism.tourismcore.domain.Gallery;
import com.tourism.tourismcore.repository.GalleryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/gallery")
public class GalleryController {

    @Autowired
    private GalleryRepo galleryRepo;

    @GetMapping
    public List<Gallery> findAllGallery() {
        return galleryRepo.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Gallery> findGalleryById(@PathVariable(value = "id") Integer id) {
        Optional<Gallery> gallery = galleryRepo.findById(id);

        if(gallery.isPresent()) {
            return ResponseEntity.ok().body(gallery.get());
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public Gallery saveGallery(@Validated @RequestBody Gallery gallery){
        String isError = validateGallery(gallery);

        if (Strings.isBlank(isError)) {
            //return isError;
        }
        return galleryServiceImpl.saveGallery(gallery);
    }
    private String validateGallery (Gallery gallery) {
        if(Strings.isBlank(gallery.getUrl())) {
            return "Url is mandatory";
        }
        if(Strings.isBlank(gallery.getTitle())) {
            return "Title is mandatory";
        }
        if(Strings.isBlank(gallery.getStatus())) {
            return "Status is mandatory";
        }
        return null;
    }
}
