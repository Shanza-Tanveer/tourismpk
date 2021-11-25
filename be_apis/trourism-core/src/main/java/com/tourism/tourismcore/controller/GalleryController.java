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
        return galleryRepo.save(gallery);
    }
}
