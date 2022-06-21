package com.codegym.station.dto;

import com.codegym.station.model.TypeVehicle;

public class StationDto {
    private Integer stationId;
    private String licensePlates;
    private TypeVehicle typeVehicleId;
    private String name;
    private String go;
    private String arrive;
    private String phone;
    private String email;
    private String start;
    private String end;

    public StationDto() {
    }

    public Integer getStationId() {
        return stationId;
    }

    public void setStationId(Integer stationId) {
        this.stationId = stationId;
    }

    public String getLicensePlates() {
        return licensePlates;
    }

    public void setLicensePlates(String licensePlates) {
        this.licensePlates = licensePlates;
    }

    public TypeVehicle getTypeVehicleId() {
        return typeVehicleId;
    }

    public void setTypeVehicleId(TypeVehicle typeVehicleId) {
        this.typeVehicleId = typeVehicleId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getGo() {
        return go;
    }

    public void setGo(String go) {
        this.go = go;
    }

    public String getArrive() {
        return arrive;
    }

    public void setArrive(String arrive) {
        this.arrive = arrive;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getStart() {
        return start;
    }

    public void setStart(String start) {
        this.start = start;
    }

    public String getEnd() {
        return end;
    }

    public void setEnd(String end) {
        this.end = end;
    }
}
