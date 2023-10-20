import icons from "./icons";

const { BsPencil, MdOutlineLibraryBooks, FaRegUserCircle } = icons;

// các lựa chọn control account ở page system
const menuSidebar = [
    {
        id: 1,
        text: 'Dang tin cho thue',
        path: '/system/create-new-post',
        icon: <BsPencil />
    },
    {
        id: 2,
        text: 'Quan ly tin dang',
        path: '/system/manage-posts',
        icon: <MdOutlineLibraryBooks />
    },
    {
        id: 3,
        text: 'Sua thong tin ca nhan',
        path: '/system/edit-profile',
        icon: <FaRegUserCircle />
    },
    {
        id: 4,
        text: 'Contact',
        path: '/system/contact',
        icon: <MdOutlineLibraryBooks />
    },
];

export default menuSidebar;