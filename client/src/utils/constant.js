export const path = {
    HOME: '/',
    LOGIN: 'login',
    SIGNUP: 'signup',
    CTCN: 'cho-thue-can-ho',
    CTMB: 'cho-thue-mat-bang',
    CTPT: 'cho-thue-phong-tro',
    NCT: 'nha-cho-thue'
}

export const text = {
    HOMEPAGE_TITLE: 'Cho Thuê Phòng Trọ, Giá Rẻ, Tiện Nghi, Mới Nhất 2023',
    HOMEPAGE_DESCRIPTION: 'Cho thuê phòng trọ - Kênh thông tin số 1 về phòng trọ giá rẻ, phòng trọ sinh viên, phòng trọ cao cấp mới nhất năm 2023. Tất cả nhà trọ cho thuê giá tốt nhất tại Việt Nam.'
}

export const formatVietnameseToString = (keyword) => {
    return keyword
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .split(' ')
        .join('-')
}