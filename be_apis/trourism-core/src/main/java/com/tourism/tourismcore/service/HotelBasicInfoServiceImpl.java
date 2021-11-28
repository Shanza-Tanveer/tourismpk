package tourismpk.tourismpk.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tourismpk.tourismpk.domain.HotelBasicInfo;
import tourismpk.tourismpk.repository.HotelBasicInfoRepo;

import java.util.List;
import java.util.Optional;

@Service
public class HotelBasicInfoServiceImpl {

    @Autowired
    private HotelBasicInfoRepo hotelBasicInfoRepo;

    public List<HotelBasicInfo> getAllInfo() {
        return hotelBasicInfoRepo.findAll();
    }

    public Optional<HotelBasicInfo> getInfoById(Integer id) {
        return hotelBasicInfoRepo.findById(id);
    }

    public HotelBasicInfo saveInfo(HotelBasicInfo hotelBasicInfo) {
        return hotelBasicInfoRepo.save(hotelBasicInfo);
    }
}
