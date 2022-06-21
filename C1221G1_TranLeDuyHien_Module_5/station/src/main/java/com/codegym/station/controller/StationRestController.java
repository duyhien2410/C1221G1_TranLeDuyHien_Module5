package com.codegym.station.controller;

import com.codegym.station.dto.StationDto;
import com.codegym.station.model.Station;
import com.codegym.station.service.IStationService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/station")
public class StationRestController {
    @Autowired
    private IStationService stationService;

    @GetMapping("/list")
    public ResponseEntity<List<Station>> getPageStation(){
        List<Station> stations = this.stationService.findAll();

        if (stations.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(stations, HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<List<FieldError>> createBlog(@Validated @RequestBody StationDto stationDto,
                                                       BindingResult bindingResult){
        if (bindingResult.hasFieldErrors()){
            return new ResponseEntity<>(bindingResult.getFieldErrors(), HttpStatus.BAD_REQUEST);
        }

        Station station = new Station();

        BeanUtils.copyProperties(stationDto, station);

        this.stationService.save(station);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/detail/{id}")
    public ResponseEntity<Station> showDetail(@PathVariable int id) {
        Optional<Station> optionalStation = Optional.ofNullable(stationService.findById(id));
        if (!optionalStation.isPresent()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(optionalStation.get(),HttpStatus.OK);
    }
}
