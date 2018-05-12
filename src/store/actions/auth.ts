export const actionTypes = {
    LOGIN: {
        REQUEST: 'LOGIN.REQUEST',
        SUCCESS: 'LOGIN.SUCCESS',
        FAILURE: 'LOGIN.FAILURE',
        LOGIN: 'LOGIN'
    },
    LOGOUT: {
        REQUEST: 'LOGOUT.REQUEST',
        SUCCESS: 'LOGOUT.SUCCESS',
        FAILURE: 'LOGOUT.FAILURE'
    },
    SIGNUP: {
        REQUEST: 'SIGNUP.REQUEST',
        SUCCESS: 'SIGNUP.SUCCESS',
        FAILURE: 'SIGNUP.FAILURE',
        SIGNUP: 'SIGNUP'
    },
    AUTH: {
        CHECK_TIMEOUT: 'CHECK_TIMEOUT',
        REDIRECT_PATH: 'REDIRECT_PATH',
        CHECK_STATE: 'CHECK_STATE',
        USER_REMOVE: 'USER_REMOVE',
        USER_IS_LOGIN: 'USER_IS_LOGIN',
        USER_IS__NOT_LOGIN: 'USER_IS__NOT_LOGIN',
    },
};

export const logInStart = () => {
    return {
        type: actionTypes.LOGIN.REQUEST
    };
};

export const removeUser = () => {
    return {
        type: actionTypes.AUTH.USER_REMOVE
    };
};

export const logInSuccess = authData => {
    return {
        type: actionTypes.LOGIN.SUCCESS,
        user: authData
    };
};

export const logInFail = error => {
    return {
        type: actionTypes.LOGIN.FAILURE,
        error: error
    };
};

export const logout = () => {
    return {
        type: actionTypes.LOGOUT.REQUEST
    };
};

export const logoutSucceed = () => {
    return {
        type: actionTypes.LOGOUT.SUCCESS
    };
};

export const checkAuthTimeout = expirationTime => {
    return {
        type: actionTypes.AUTH.CHECK_TIMEOUT,
        expirationTime: expirationTime
    };
};

export const logIn = authData => {
    return {
        type: actionTypes.LOGIN.LOGIN,
        email: authData.email,
        password: authData.password,
    };
};

export const signUp = authData => {
    return {
        type: actionTypes.SIGNUP.SIGNUP,
        email: authData.email,
        password: authData.password,
    };
};

export const setAuthRedirectPath = path => {
    return {
        type: actionTypes.AUTH.REDIRECT_PATH,
        path: path
    };
};

export const authCheckState = () => {
    return {
        type: actionTypes.AUTH.CHECK_STATE
    };
};

export const signUpStart = () => {
    return {
        type: actionTypes.SIGNUP.REQUEST
    };
};

export const signUpSucceed = authData => {
    return {
        type: actionTypes.SIGNUP.SUCCESS,
        user: authData
    }
};

export const signUpFail = (error) => {
    return {
        type: actionTypes.SIGNUP.FAILURE,
        error: error
    }
};

export const isNotLogin = (error) => {
    return {
        type: actionTypes.AUTH.USER_IS__NOT_LOGIN,
        error: error
    }
};

export const isLogin = (user) => {
    return {
        type: actionTypes.AUTH.USER_IS_LOGIN,
        user: user
    }
};

