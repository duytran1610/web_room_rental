import React, { memo, useEffect, useState } from 'react';
import { SelectOption } from '../components';
import { apiGetPublicProvinces, apiGetPublicDistricts } from '../services';
import { InputReadOnly } from '../components';

// use in path system
const Address = ({payload, setPayload, invalidFields, setInvalidFields}) => {

    // state
    // provinces
    const [provinces, setProvinces] = useState([]);
    // province id
    const [provinceId, setProvinceId] = useState();
    // districts in province
    const [districts, setDistricts] = useState([]);
    // district id
    const [districtId, setDistrictId] = useState();

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
        setDistrictId('');

        // function get public provinces
        const fetchPublicDistricts = async (provinceId) => {
            const response = await apiGetPublicDistricts(provinceId);
            if (response.status === 200) setDistricts(response?.data.results);
        }

        if (provinceId) fetchPublicDistricts(provinceId);
        else setDistricts([]);

    }, [provinceId]);

    useEffect(() => {
        setPayload(prev => ({
            ...prev,
            province: provinceId ? provinces?.find(item => item.province_id === provinceId)?.province_name : '',
            address: `${districtId ? `${districts?.find(item => item.district_id === districtId)?.district_name}, ` : ''}${provinceId ? `${provinces?.find(item => item.province_id === provinceId)?.province_name}` : ''}`
        }));

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [provinceId, districtId]);

    useEffect(() => {
        if (payload.address === '') {
            setProvinceId('');
        }
    }, [payload.address]);

    return (
        <div>
            <h2 className='font-semibold text-xl py-4'>Địa chỉ cho thuê</h2>
            <div className='flex flex-col gap-4'>
                <div className='flex items-center gap-4'>
                    <SelectOption
                        type='province'
                        setValue={setProvinceId}
                        value={provinceId}
                        options={provinces}
                        label='Tỉnh/ TP' 
                        invalidFields={invalidFields}
                        setInvalidFields={setInvalidFields}
                    />
                    <SelectOption
                        type='district'
                        setValue={setDistrictId}
                        value={districtId}
                        options={districts}
                        label='Quận/ huyện' 
                        invalidFields={invalidFields}
                        setInvalidFields={setInvalidFields}
                    />
                </div>
                <InputReadOnly
                    label='Địa chỉ chính xác'
                    value={payload?.address || ''}
                />

            </div>
        </div>
    )
}

export default memo(Address);