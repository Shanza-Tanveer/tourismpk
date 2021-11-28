package tourismpk.tourismpk.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tourismpk.tourismpk.domain.Gallery;
import tourismpk.tourismpk.repository.GalleryRepo;

import java.util.List;
import java.util.Optional;

@Service
public class GalleryServiceImpl {

    @Autowired
    private GalleryRepo galleryRepo;

    public List<Gallery> getAllGallery () {
        return galleryRepo.findAll();
    }

    public Optional<Gallery> getGalleryById(Integer id) {
        return galleryRepo.findById(id);
    }

    public Gallery saveGallery(Gallery gallery) {
        return galleryRepo.save(gallery);
    }
}
