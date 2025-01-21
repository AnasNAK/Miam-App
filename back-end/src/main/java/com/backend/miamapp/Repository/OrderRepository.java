package com.backend.miamapp.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.backend.miamapp.Entity.Order;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<Order,Long> {
}
