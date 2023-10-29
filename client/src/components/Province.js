import { ProvinceBtn } from '../components';
import { location } from '../utils/constant';

const Province = () => {
  return (
    <div className='flex justify-center gap-5 py-5'>
        {location.map(item => 
            <ProvinceBtn 
                key={item.id} 
                name={item.name} 
                img={item.img}
                provinceCode={item.provinceCode}
            />
        )}
    </div>
  )
}

export default Province;