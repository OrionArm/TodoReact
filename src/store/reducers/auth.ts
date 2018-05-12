import {actionTypes} from '../actions/auth';

const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

const initialState = {
    user: null,
    error: null,
    loading: false,
};

const logInStart = ( state, action ) => {
    return updateObject( state, { error: null, loading: true } );
};
const logInSuccess = (state, action) => {
    return updateObject( state, {
        user: action.user,
        error: null,
        loading: false
    } );
};
const logInFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
};
const authLogout = (state, action) => {
    return updateObject(state, { token: null, userId: null });

};

const signUpStart = (state, action) => {
    return updateObject( state, { error: null, loading: true } );
};
const signUpSuccess = (state, action) => {
    return updateObject( state, {
        user: action.user,
        error: null,
        loading: false
    } );
};
const signUpFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
};

const updateUser = (state, action) => {
    return updateObject( state, {
        error: null,
        loading: false,
        user: action.user
    });
};

const removeUser = (state, action) => {
    return updateObject( state, {
        error: null,
        loading: false,
        user: null
    });
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.LOGIN.REQUEST:      return logInStart(state, action);
        case actionTypes.LOGIN.SUCCESS:      return logInSuccess(state, action);
        case actionTypes.LOGIN.FAILURE:      return logInFail(state, action);
        case actionTypes.SIGNUP.REQUEST:     return signUpStart(state, action);
        case actionTypes.SIGNUP.SUCCESS:     return signUpSuccess(state, action);
        case actionTypes.SIGNUP.FAILURE:     return signUpFail(state, action);
        case actionTypes.AUTH.USER_REMOVE:   return removeUser(state, action);
        case actionTypes.LOGOUT.REQUEST:     return authLogout(state, action);
        case actionTypes.AUTH.USER_IS_LOGIN: return updateUser(state, action);
        default:                             return state;
    }
};

export default reducer;