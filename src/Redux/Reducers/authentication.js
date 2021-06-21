const authentication = (state={}, action) => {
    switch(action.type) {
        case 'LOGIN_SUCCESS' : return {
            ...state,
            isAuthenticated : true
        }
        case 'LOGIN_FAILURE' : return {
            ...state,
            isAuthenticated : false
        };
    }
    return state;
}

export default authentication;