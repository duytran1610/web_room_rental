// function to check valid data input
const validateFields = (payload, setInvalidFields) => {
    let invalids = 0;

    // Returns an array of key/values of the enumerable properties of an object 
    let fields = Object.entries(payload);

    fields.forEach(item => {
        if (item[1] === '') {
            setInvalidFields(prev => [...prev, {
                name: item[0],
                msg: 'You forget input data into this field!'
            }]);
            invalids++;
        }
    });

    fields.forEach(item => {
        switch(item[0]) {
            case 'password':
                const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+-=])[A-Za-z\d!@#$%^&*()_+-=]{8,}$/;
                let checkPassword = passwordRegex.test(item[1]);
                if (!checkPassword) {
                    setInvalidFields(prev => [...prev, {
                        name: item[0],
                        msg: 'Password invalid!'
                    }]);
                    invalids++;
                }
                break;
            case 'phone': 
                const phoneRegex = /^\d{6,11}$/; // Regex check number phone
                let checkPhone = phoneRegex.test(item[1]);
                if (!checkPhone) {
                    setInvalidFields(prev => [...prev, {
                        name: item[0],
                        msg: 'Phone invalid!'
                    }]);
                    invalids++;
                }
                break;
            case 'priceVal':
            case 'areaVal':
                if (!item[1] || item[1] < 0) {
                    setInvalidFields(prev => [...prev, {
                        name: item[0],
                        msg: 'Need input exact value for this field! This value need > 0'
                    }]);
                    invalids++;
                }
                break;
            case 'images': 
                if (item[1].length === 0) {
                    setInvalidFields(prev => [...prev, {
                        name: item[0],
                        msg: 'Need add images!'
                    }]);
                    invalids++;
                }
                break;
            default:
                break;
        }
    })
    return invalids;
}

export default validateFields;