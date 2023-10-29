export const path = {
    HOME: '/*',
    LOGIN: 'login',
    SIGNUP: 'signup',

    CTCN: 'cho-thue-can-ho',
    CTMB: 'cho-thue-mat-bang',
    CTPT: 'cho-thue-phong-tro',
    NCT: 'nha-cho-thue',
    HOME__PAGE: ':page',
    DETAIL: 'detail',
    DETAIL_POSTS__TITLE__POSTID: 'detail/:title/:postId',
    SEARCHDETAIL: 'search-detail',
    CONTACT: 'contact',

    SYSTEM: '/system/*',
    CREATE_POST: 'create-new-post',
    MANAGE_POST: 'manage-posts',
    EDIT_PROFILE: 'edit-profile'
}

export const text = {
    HOMEPAGE_TITLE: 'Cho Thuê Phòng Trọ, Giá Rẻ, Tiện Nghi, Mới Nhất 2023',
    HOMEPAGE_DESCRIPTION: 'Cho thuê phòng trọ - Kênh thông tin số 1 về phòng trọ giá rẻ, phòng trọ sinh viên, phòng trọ cao cấp mới nhất năm 2023. Tất cả nhà trọ cho thuê giá tốt nhất tại Việt Nam.'
}

export const location = [
    {
        id: 'HCM',
        name: 'Phòng trọ Hồ Chí Minh',
        img: 'https://phongtro123.com/images/location_hcm.jpg',
        provinceCode: '382HIC137'
    },
    {
        id: 'HN',
        name: 'Phòng trọ Hà Nội',
        img: 'https://phongtro123.com/images/location_hn.jpg',
        provinceCode: 'C180IN133'
    },
    {
        id: 'DN',
        name: 'Phòng trọ Đà Nẵng',
        img: 'https://phongtro123.com/images/location_dn.jpg',
        provinceCode: 'C327HN134'
    }
];

export const infoUnderMap = ['Bạn đang xem nội dung tin đăng: "', `". Mọi thông tin liên quan đến tin đăng này chỉ mang tính chất tham khảo. 
Nếu bạn có phản hồi với tin đăng này (báo xấu, tin đã cho thuê, không liên lạc được,...), vui lòng thông báo để PhòngTrọ123 có thể xử lý.`
];

export const attention = [
    'Nội dung phải viết bằng tiếng Việt có dấu',
    'Tiêu đề tin không dài quá 100 kí tự',
    'Các bạn nên điền đầy đủ thông tin vào các mục để tin đăng có hiệu quả hơn.',
    'Để tăng độ tin cậy và tin rao được nhiều người quan tâm hơn, hãy sửa vị trí tin rao của bạn trên bản đồ bằng cách kéo icon tới đúng vị trí của tin rao.',
    'Tin đăng có hình ảnh rõ ràng sẽ được xem và gọi gấp nhiều lần so với tin rao không có ảnh. Hãy đăng ảnh để được giao dịch nhanh chóng!'
];