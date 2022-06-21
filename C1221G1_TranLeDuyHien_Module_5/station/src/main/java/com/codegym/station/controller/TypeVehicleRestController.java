package com.codegym.station.controller;

import com.codegym.station.model.Station;
import com.codegym.station.model.TypeVehicle;
import com.codegym.station.service.ITypeVehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/type-vehicle")
public class TypeVehicleRestController {
    @Autowired
    private ITypeVehicleService typeVehicleService;

    @GetMapping("/search/{id}")
    public ResponseEntity<List<Station>> getBlogType(@PathVariable int id){
        TypeVehicle typeVehicle = this.typeVehicleService.findById(id);
        if (typeVehicle == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(typeVehicle.getStationList(), HttpStatus.OK);
    }
}
