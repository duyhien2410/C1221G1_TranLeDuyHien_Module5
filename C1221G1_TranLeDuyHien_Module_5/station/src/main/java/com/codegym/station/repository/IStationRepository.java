package com.codegym.station.repository;

import com.codegym.station.model.Station;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IStationRepository extends JpaRepository<Station, Integer> {
}
