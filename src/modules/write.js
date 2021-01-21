import {createAction, handleAction} from 'redux-actions';

const INITIALIZE = 'write/INITIALIZE'; //모든 내용 초기화,
const CHANGE_FIELD = 'write/CHANGE_FIELD'; //특정 key 값 바꾸기

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({key, value}) => ({
    key,
    value,
}));