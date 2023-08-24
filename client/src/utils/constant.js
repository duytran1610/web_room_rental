export const path = {
    HOME: '/',
    LOGIN: 'login',
    SIGNUP: 'signup',
    CTCN: 'cho-thue-can-ho',
    CTMB: 'cho-thue-mat-bang',
    CTPT: 'cho-thue-phong-tro',
    NCT: 'nha-cho-thue'
}

export const formatVietnameseToString = (keyword) => {
    return keyword
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .split(' ')
        .join('-')
}