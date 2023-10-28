import React, { memo, useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';        // create googlemap from lib google-map-react
import { MdLocationPin } from 'react-icons/md';
import { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';                  // Get Latitude and Longitude from address

// used to show exact position in gg map
const Location  = ({ text }) => <div>{text}</div>;

// default value for gg map
const defaultProps = {
    center: {
        lat: 10.99835602,
        lng: 77.01502627
    },
    zoom: 11
};

// create gg map
const Map = ({ address }) => {
    // coordinates of object in gg map
    const [coords, setCoords] = useState(null);

    // use get coordinates
    useEffect(() => {
        const getCoords = async () => {
            try {
                if (address) throw new Error({'msg': 'No exact address! Set address default!'});
                const results = await geocodeByAddress(address);
                const latLng = await getLatLng(results[0]);
                setCoords(latLng);
            } catch (err) {
                // function get coordinates of current user: navigator.geolocation.getCurrentPosition(cb)
                navigator.geolocation.getCurrentPosition((e) => {
                    setCoords({
                        lat: e.coords.latitude,
                        lng: e.coords.longitude
                    });
                });
            }           
        }

        getCoords();
    }, [address]);

    return (
        // Important! Always set the container height explicitly
        <div className='h-[300px] w-full relative'>
            {address && 
            <div className='absolute top-2 left-2 z-50 max-w-[200px] bg-white shadow-md p-2 text-xs rounded-md'>
                {address}
            </div>
            }
            <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={coords || defaultProps.center}
                defaultZoom={defaultProps.zoom}
                center={coords || defaultProps.center}
            >
                <Location 
                    lat={coords?.lat || 59.955413}
                    lng={coords?.lng || 30.337844}
                    text={<MdLocationPin color='red' size={24} />}
                />
            </GoogleMapReact>
        </div>
    )
}

export default memo(Map);