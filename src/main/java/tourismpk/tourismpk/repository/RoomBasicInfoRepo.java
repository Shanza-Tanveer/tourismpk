package tourismpk.tourismpk.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import tourismpk.tourismpk.domain.RoomBasicInfo;

import java.util.List;

@Repository
public interface RoomBasicInfoRepo extends JpaRepository<RoomBasicInfo, Integer> {

    @Query(value = "select info from RoomBasicInfo info")
    List<RoomBasicInfo> info();

    @Query(value = "select info from RoomBasicInfo info where info.id = :id")
    RoomBasicInfo fetchInfoById (@Param("id") Integer infoId);
}
