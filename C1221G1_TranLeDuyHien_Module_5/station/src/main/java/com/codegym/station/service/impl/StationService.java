package com.codegym.station.service.impl;

import com.codegym.station.model.Station;
import com.codegym.station.repository.IStationRepository;
import com.codegym.station.service.IStationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StationService implements IStationService {
    @Autowired
    private IStationRepository stationRepository;

    @Override
    public void save(Station station) {
        this.stationRepository.save(station);
    }

    @Override
    public void deleteById(int id) {
        this.stationRepository.deleteById(id);
    }

    @Override
    public Station findById(int id) {
        return this.stationRepository.findById(id).orElse(null);
    }

    @Override
    public List<Station> findAll() {
        return this.stationRepository.findAll();
    }
}
