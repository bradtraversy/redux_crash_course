import Moment from 'react-moment';
import 'moment-timezone';

export const dateFormat = 'MM-DD-YYYY';
export const timeFormat = 'HH:mm';


export const isRequired = (value, min = 1, max = 100) => {
    let error = '';
    if (!value && value.length) error = "Required"
    if (min && !value && value.length < min) error = `Min Length is ${min}`
    if (max && !value && value.length > max) error = `Max Length is ${max}`
    return error
}
export const isMatch = (a, b) => {
    let error=''
    if(!a.length) error='Required';
    if(a.trim()!==b.trim()) error ='No Match Found';
    return error
};

export const isEmail = (value) => {
    let errors = '';
    if (!value) {
        errors = 'Required!';
    } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        errors = 'Invalid email address!';
    }
    return errors;
}
export const isDate = value => {
    let errors = ''
    if (!value) {
        errors = 'Required!';
    } else if (
        Moment(value).format(dateFormat) < Moment(Date.now()).format(dateFormat)
    ) {
        errors = 'Invalid date!';
    }
    return errors;
};
export const isPassword = value => {
    let errors = '';
    if (!value) {
        errors = 'Required!';
    } else if (value && value.length < 9) {
        errors = 'Username must be 9 characters long';
    }
    return errors;
};
export const isUsername = value => {
    let errors = '';
    if (!value) {
        errors = 'Required!';
    } else if (value && value.length < 9) {
        errors = 'Username must be 9 characters long';
    }
    return errors;
};
