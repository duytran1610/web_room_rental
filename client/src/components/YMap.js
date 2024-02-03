import React, { memo, useState} from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

// default value for ymap
const mapState = {
    center: [55.75, 37.57],
    zoom: 11,
    controls: ['zoomControl', 'fullscreenControl']
};

// create ymap
const YMap = ({ address }) => {
    // coordinates of object in  ymap
    const [addressCoord, setAddressCoord] = useState();

    let ymapsObject;

    const onYmapsLoad = (ymaps) => {
        ymapsObject = ymaps;
        getCoords();
    }

    const getCoords = async () => {
        try {
            let myGeocoder = await ymapsObject.geocode('338 Nguyen Van Qua Street, Dong Hung Thuan Ward, District 12, Ho Chi Minh');
            let coord = myGeocoder.geoObjects.get(0).geometry.getCoordinates();
            setAddressCoord(coord);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        // Important! Always set the container height explicitly
        <div className='h-[300px] w-full relative'>
            {address &&
                <div className='absolute top-2 left-2 z-50 max-w-[200px] bg-white shadow-md p-2 text-xs rounded-md'>
                    {address}
                </div>
            }

            <YMaps query={{
                ns: 'use-load-option',
                load: 'Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon',
                lang: 'en_RU',
                apikey: process.env.REACT_APP_YMAP_API
            }}>
                <Map
                    onLoad={ymaps => onYmapsLoad(ymaps)}
                    modules={["geocode"]}
                    width="100%"
                    height="100%"
                    state={addressCoord ? { ...mapState, center: addressCoord } : mapState}
                >
                    <Placemark
                        geometry={addressCoord}
                    />
                </Map>
            </YMaps>
        </div>
    )
}

export default memo(YMap);