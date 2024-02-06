import React, { memo, useState, useEffect } from 'react';
import { YMaps, Map, Placemark, Button } from '@pbe/react-yandex-maps';

// default value for ymap
const mapState = {
    center: [21.0245, 105.84117],
    zoom: 11,
};

const YMap = ({ address }) => {
    const ymaps = React.useRef(null);
    const placemarkRef = React.useRef(null);
    const mapRef = React.useRef(null);

    // create Placemark
    const createPlacemark = (coords) => {
        return new ymaps.current.Placemark(
            coords,
            {
                iconCaption: "loading.."
            },
            {
                preset: "islands#violetDotIconWithCaption",
                draggable: true
            }
        );
    };

    // get address by coords
    const getAddress = (coords) => {
        let regionName = "";
        placemarkRef.current.properties.set("iconCaption", "loading..");

        ymaps.current.geocode(coords).then((res) => {
            const firstGeoObject = res.geoObjects.get(0);
            const newAddress = [
                firstGeoObject.getLocalities().length
                    ? firstGeoObject.getLocalities()
                    : firstGeoObject.getAdministrativeAreas(),
                firstGeoObject.getThoroughfare() || firstGeoObject.getPremise()
            ]
                .filter(Boolean)
                .join(", ");

            regionName = firstGeoObject.getAdministrativeAreas()[0];

            placemarkRef.current.properties.set({
                iconCaption: newAddress,
                balloonContent: regionName
            });
        })
    };

    // envent click map
    const onMapClick = (e) => {
        const coords = e.get("coords");
        if (placemarkRef.current) {
            placemarkRef.current.geometry.setCoordinates(coords);
        } else {
            placemarkRef.current = createPlacemark(coords);
            mapRef.current.geoObjects.add(placemarkRef.current);
            placemarkRef.current.events.add("dragend", function () {
                getAddress(placemarkRef.current.geometry.getCoordinates());
            });
        }
        getAddress(coords);
    };

    return (
        <div className='h-[300px] w-full relative'>
            {address &&
                <div className='absolute top-2 left-2 z-50 max-w-[200px] bg-white shadow-md p-2 text-xs rounded-md'>
                    {address}
                </div>
            }

            <YMaps
                query={{
                    lang: 'en_RU',
                    apikey: "106e4ebf-abbc-41b9-9230-adfbc64f15d9"
                }}>
                <Map
                    modules={["Polygon", "GeoObject", "geoQuery", "control.ZoomControl", "control.FullscreenControl", "Placemark", "geocode",
                        "geoObject.addon.balloon", "borders", "ObjectManager", 'geoObject.addon.balloon', 'clusterer.addon.balloon',
                        'templateLayoutFactory']}
                    width="100%"
                    height="100%"
                    onClick={onMapClick}
                    instanceRef={mapRef}
                    onLoad={(ymapsInstance) => (ymaps.current = ymapsInstance)}
                    state={mapState}
                >
                </Map>
            </YMaps>
        </div >
    )
}

export default memo(YMap);