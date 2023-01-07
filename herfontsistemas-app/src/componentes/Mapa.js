import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

export const Mapa = () => {
    return (
        <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=C/%20del%20Estanque,%205.%20P.I.%20La%20Fontana,%20nave%20n%C2%B0%203.%20%2028945%20Fuenlabrada%20Madrid&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        )
}
