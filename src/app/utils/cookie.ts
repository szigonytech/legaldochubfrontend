const Cookies = require('universal-cookie');

import * as _ from 'lodash';

export const AUTHENTICAT_TOKEN = 'AUTHENTICAT_TOKEN';
export const USER_TYPE = 'USER_TYPE';
export const USER_LOGIN_ID = 'USER_LOGIN_ID';
export const USER_ROLE_ID = 'USER_ROLE_ID';
export const USER_PROFILE_IMAGE = 'USER_PROFILE_IMAGE';
export const USER_NAME = 'USER_NAME';
export const SUBSCRIPTION_KEY = 'SUBSCRIPTION_KEY';

const EXPIRY_DURATION = 24 * 60 * 60 * 7 * 1000; // One Week
let cookie = new Cookies();

export function set(key: any, value: any) {
    let date = new Date();
    date.setTime(date.getTime() + EXPIRY_DURATION);

    cookie.set(key, value, { path: '/', expires: date });
}

export function get(key: any) {
    return cookie.get(key);
}

export function remove(key: any) {
    cookie.remove(key, { path: '/' });
}

export function removeAll() {
    let cookies = cookie.getAll();
    let cookiesKeys = _.keys(cookies);

    cookiesKeys.forEach(cookieKey => remove(cookieKey));
}