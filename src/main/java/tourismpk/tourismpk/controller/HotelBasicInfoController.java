package tourismpk.tourismpk.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import tourismpk.tourismpk.domain.HotelBasicInfo;
import tourismpk.tourismpk.repository.HotelBasicInfoRepo;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/hotelBasicInfo")
public class HotelBasicInfoController {

    @Autowired
    private HotelBasicInfoRepo hotelBasicInfoRepo;

    @GetMapping
    public List<HotelBasicInfo> findAllHotelBasicInfo() {
        return hotelBasicInfoRepo.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<HotelBasicInfo> findHotelBasicInfoById(@PathVariable(value = "id") Integer id) {
        Optional<HotelBasicInfo> hotelBasicInfo = hotelBasicInfoRepo.findById(id);

        if(hotelBasicInfo.isPresent()) {
            return ResponseEntity.ok().body(hotelBasicInfo.get());
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public HotelBasicInfo saveHotelBasicInfo(@Validated @RequestBody HotelBasicInfo hotelBasicInfo) {
        return hotelBasicInfoRepo.save(hotelBasicInfo);
    }
}
