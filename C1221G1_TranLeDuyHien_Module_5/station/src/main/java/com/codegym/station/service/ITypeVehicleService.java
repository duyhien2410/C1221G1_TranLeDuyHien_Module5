package com.codegym.station.service;

import com.codegym.station.model.TypeVehicle;

import java.util.List;

public interface ITypeVehicleService {
    List<TypeVehicle> findAll();

    TypeVehicle findById(int id);
}
