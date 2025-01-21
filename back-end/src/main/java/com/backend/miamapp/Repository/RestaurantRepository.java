package com.backend.miamapp.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.backend.miamapp.Entity.Restaurant;
import org.springframework.stereotype.Repository;

@Repository
public interface RestaurantRepository extends JpaRepository<Restaurant,Long> {
}
