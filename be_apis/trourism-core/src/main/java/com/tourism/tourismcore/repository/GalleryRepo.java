package com.tourism.tourismcore.repository;

import com.tourism.tourismcore.domain.Gallery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface GalleryRepo extends JpaRepository<Gallery, Integer> {

    @Query(value = "select gallery from Gallery gallery")
    List<Gallery> gallery();

    @Query(value = "select gallery from Gallery gallery where gallery.id = :id")
    Gallery fetchGalleryById (@Param("id") Integer galleryId);

}
