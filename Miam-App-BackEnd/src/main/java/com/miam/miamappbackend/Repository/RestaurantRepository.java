package com.miam.miamappbackend.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.miam.miamappbackend.Entity.Restaurant;
import org.springframework.stereotype.Repository;

@Repository
public interface RestaurantRepository extends JpaRepository<Restaurant,Long> {
}
