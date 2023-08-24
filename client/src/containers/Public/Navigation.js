import {NavLink} from 'react-router-dom';

const nav = [
    {name: 'Home', path: 'home'}, 
    {name: 'Cho thuê phòng trọ', path: 'cho-thue-phong-tro'}, 
    {name: 'Nhà cho thuê', path: 'nha-cho-thue'}, 
    {name: 'Cho thuê căn hộ', path: 'cho-thue-can-ho'}, 
    {name: 'Cho thuê mặt bằng', path: 'cho-thue-mat-bang'}
];

const Active = 'bg-secondary2 px-4 flex items-center';
const noActive = 'hover:bg-secondary2 px-4 flex items-center';

const Navigation = () => {
    return (
        <div className="w-screen flex justify-center items-stretch h-[40px] bg-secondary1 text-white">
            <div className='w-1100 flex items-stretch text-sm font-medium'>
                {nav?.length > 0 && nav.map((item, index) => 
                    <div key={index} className='flex'>
                        <NavLink
                            to={item.path}
                            className={({isActive}) => isActive ? Active : noActive}
                        >
                            {item.name}
                        </NavLink>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navigation;