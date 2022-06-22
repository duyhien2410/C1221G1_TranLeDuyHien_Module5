package com.codegym.station.service;

import com.codegym.station.model.Station;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IStationService {
    void save(Station station);

    void deleteById(int id);

    Station findById(int id);

    List<Station> findAllAndSearch(String name);
}
