"use client"

import { Marker, TileLayer } from "react-leaflet"
import { MapBase } from "./mapBase"

function ShowMap({location}) {
  return (
    <MapBase center={location}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      
      <Marker position={location} />
    </MapBase>
  )
}

export default ShowMap