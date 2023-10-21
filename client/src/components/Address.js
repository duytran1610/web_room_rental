import React, {memo, useEffect, useState} from 'react';
import {SelectedAddress} from '../components';
import { apiGetPublicProvinces, apiGetPublicDistricts } from '../services';

// use in path system
const Address = () => {

    // state
    // provinces
    const [provinces, setProvinces] = useState([]);
    // province
    const [province, setProvince] = useState();
    // districts in province
    const [districts, setDistricts] = useState([]);
    // district
    const [district, setDistrict] = useState();

    // auto get public provinces
    useEffect(() => {
        // function fetch public provinces
        const fetchPublicProvinces = async () => {
            const response = await apiGetPublicProvinces();
            if (response.status === 200) setProvinces(response?.data.results);
        }

        fetchPublicProvinces();
    }, []);

    // auto fetch public districts in province
    useEffect(() => {
        setDistrict();

        // function get public provinces
        const fetchPublicDistricts = async (provinceId) => {
            const response = await apiGetPublicDistricts(provinceId);
            if (response.status === 200) setDistricts(response?.data.results);
        }

        if (province) fetchPublicDistricts(province);
        else setDistricts([]);
        
    }, [province]);

    return (
        <div>
            <h2 className='font-semibold text-xl py-4'>Dia chi cho thue</h2>
            <div className='flex flex-col gap-4'>
                <div className='flex items-center gap-4'>
                    <SelectedAddress type='province' value={province} setValue={setProvince} options={provinces} label='Tinh/ TP'/>
                    <SelectedAddress type='district' value={district} setValue={setDistrict} options={districts} label='Quan/ huyen'/>
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='font-medium' htmlFor='exactly-address'>Dia chi chinh xac</label>
                    <input 
                        id='exactly-address'
                        type='text' 
                        readOnly 
                        className='border border-gray-200 rounded-md p-2 w-full outline-none bg-gray-100'
                        value={`${district ? `${districts?.find(item => item.district_id === district)?.district_name}, ` : ''}${province ? `${provinces?.find(item => item.province_id === province)?.province_name}` : ''}`}
                    />
                </div>
            </div>
        </div>
    )
}

export default memo(Address);