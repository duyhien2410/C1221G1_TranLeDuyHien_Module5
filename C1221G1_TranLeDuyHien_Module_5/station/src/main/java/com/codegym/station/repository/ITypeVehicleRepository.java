package com.codegym.station.repository;

import com.codegym.station.model.TypeVehicle;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ITypeVehicleRepository extends JpaRepository<TypeVehicle, Integer> {
}
