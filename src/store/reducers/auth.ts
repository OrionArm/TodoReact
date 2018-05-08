import {actionTypes} from '../actions/auth';

const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

const initialState = {
    user: null,
    token: null,
    userId: null,
    error: null,
    loading: false,
};

const authStart = ( state, action ) => {
    return updateObject( state, { error: null, loading: true } );
};
const authSuccess = (state, action) => {
    return updateObject( state, {
        user: action.user,
        token: action.idToken,
        userId: action.userId,
        error: null,
        loading: false
    } );
};
const authFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
};
const authLogout = (state, action) => {
    return updateObject(state, { token: null, userId: null });

};

const signStart = (state, action) => {
    return updateObject( state, { error: null, loading: true } );
};
const signSuccess = (state, action) => {
    return updateObject( state, {
        user: action.user,
        token: action.idToken,
        userId: action.userId,
        error: null,
        loading: false
    } );
};
const signFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
};


const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.LOGIN.REQUEST:  return authStart(state, action);
        case actionTypes.LOGIN.SUCCESS:  return authSuccess(state, action);
        case actionTypes.LOGIN.FAILURE:  return authFail(state, action);
        case actionTypes.SIGNUP.REQUEST: return signStart(state, action);
        case actionTypes.SIGNUP.SUCCESS: return signSuccess(state, action);
        case actionTypes.SIGNUP.FAILURE: return signFail(state, action);
        case actionTypes.LOGOUT.REQUEST: return authLogout(state, action);
        default:
            return state;
    }
};

export default reducer;