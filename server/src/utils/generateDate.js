import moment from 'moment';

// format date
const formatDate = (data) => {
    let day = data.getDay() === 0 ? 'Chủ nhật' : `Thứ ${data.getDay() + 1}`;
    let date = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
    let time = `${data.getHours()}:${data.getMinutes()}`;

    return `${day}, ${time} ${date}`;
}

// generate date and date expire
const generateDate = (expire) => {
    let today = new Date();
    let expireDay = moment(today).add(expire, 'd').toDate();

    return {
        today: formatDate(today),
        expireDay: formatDate(expireDay)
    }
}

export default generateDate;

