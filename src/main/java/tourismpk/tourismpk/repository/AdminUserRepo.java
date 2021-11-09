package tourismpk.tourismpk.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import tourismpk.tourismpk.domain.AdminUser;

import java.util.List;

@Repository
public interface AdminUserRepo extends JpaRepository<AdminUser, Integer> {

    @Query(value ="select admin from AdminUser admin")
    List<AdminUser> admin ();

    @Query(value ="select admin from AdminUser admin where admin.id = :id")
    AdminUser fetchUserById (@Param("id") Integer userId);

    @Query(value ="select admin from AdminUser admin where admin.userName = ?1")
    AdminUser fetchUserByUserName (String userName);

    @Query(value ="select * from admin_user where user_name = ?1" , nativeQuery = true)
    AdminUser findByUserByUserName (String userName);

    AdminUser findByUserName (String username);
}
