import { combineReducers } from 'redux';
import authReducer from './authReducer';
import userReducer from './userReducer';

import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import {persistReducer} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';

// https://github.com/rt2zz/redux-persist
// whitelist để chọn ra những state nào của reducer được lưu trong localstorage 
// blacklist để chọn ra những state nào của reducer không lưu ở localstorage
// nếu trong config không chỉ ra whitelist or blacklist thì mặc định nó sẽ lưu hết state của reducer ở trong localstorage


const commonConfig = {
    storage,
    stateReconciler: autoMergeLevel2
}

const authPersistConfig = {
    ...commonConfig,
    key: 'auth',
    whitelist: ['isLoggedIn', 'token']
}

const rootReducer = combineReducers({
    auth: persistReducer(authPersistConfig, authReducer),
    user: userReducer
});

export default rootReducer;