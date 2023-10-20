import icons from "./icons";

const { BsPencil, MdOutlineLibraryBooks, FaRegUserCircle } = icons;

const menuManage = [
    {
        id: 1,
        text: 'Dang tin cho thue',
        path: '/system/create-new',
        icon: <BsPencil />
    },
    {
        id: 2,
        text: 'Quan ly tin dang',
        path: '/system/manage-post',
        icon: <MdOutlineLibraryBooks />
    },
    {
        id: 3,
        text: 'Thong tin tai khoan',
        path: '/system/profile',
        icon: <FaRegUserCircle />
    }
];

export default menuManage;