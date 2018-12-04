import { App } from '../model';

const initialState: App = {
    isBusy: false
};
const LIMIT = 'app/LIMIT';
const SHOWAPP_BUSY = 'app/SHOWAPP_BUSY';

export function handleSettingsLimit(payload: boolean) {
    return { type: LIMIT, payload: payload };
}

type Action = { type: String, payload: any };

export default function rootReducer(state: any = initialState, action: Action) {
    switch (action.type) {
        case SHOWAPP_BUSY:
            return { ...state, isBusy: action.payload };
        default:
            return state;
    }
}