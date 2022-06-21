package com.codegym.station.service.impl;

import com.codegym.station.model.TypeVehicle;
import com.codegym.station.repository.ITypeVehicleRepository;
import com.codegym.station.service.ITypeVehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TypeVehicleService implements ITypeVehicleService {
    @Autowired
    private ITypeVehicleRepository typeVehicleRepository;


    @Override
    public List<TypeVehicle> findAll() {
        return this.typeVehicleRepository.findAll();
    }

    @Override
    public TypeVehicle findById(int id) {
        return this.typeVehicleRepository.findById(id).orElse(null);
    }
}
