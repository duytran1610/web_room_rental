import React, { memo, useRef, useState, useEffect } from 'react';
import { YMaps, Map, Placemark} from '@pbe/react-yandex-maps';

// default value for ymap
const mapState = {
    center: [21.0245, 105.84117],
    zoom: 11,
};

const YMap = ({ address }) => {
    const [ymaps, setYmaps] = useState(null);
    const [addressCoord, setAddressCoord] = useState(null);

    // const ymaps = useRef(null);
    const placemarkRef = useRef(null);
    const mapRef = useRef(null);

    useEffect(() => {
        if (ymaps) {
            ymaps.geocode(address)
                .then(res => {
                    let coord = res.geoObjects.get(0).geometry.getCoordinates();
                    setAddressCoord(coord);
                    console.log(coord);
                });
        }
    }, [ymaps, address]);

    // create Placemark
    const createPlacemark = (coords) => {
        return new ymaps.Placemark(
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

        ymaps.geocode(coords).then((res) => {
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
                    apikey: process.env.REACT_APP_YMAP_API
                }}>
                <Map
                    modules={["Polygon", "GeoObject", "geoQuery", "control.ZoomControl", "control.FullscreenControl", "Placemark", "geocode",
                        "geoObject.addon.balloon", "borders", "ObjectManager", 'geoObject.addon.balloon', 'clusterer.addon.balloon',
                        'templateLayoutFactory']}
                    width="100%"
                    height="100%"
                    onClick={onMapClick}
                    instanceRef={mapRef}
                    onLoad={(ymapsInstance) => setYmaps(ymapsInstance)}
                    state={addressCoord || mapState}
                >
                    <Placemark
                        geometry={addressCoord || mapState.center}
                    />
                </Map>
            </YMaps>
        </div >
    )
}

export default memo(YMap);