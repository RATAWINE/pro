import axios from 'axios'


// AUTH ACTION CREATORS //

export const authRequest = () =>{
    return async (dispatch) => {
        try {
            const res = await axios.get('/auth/validate');
            //console.log(res)
            if(res.data.status === 'user found'){
                dispatch({type: "NEW_USER", payload: res.data.data})
            }
            if(res.data.status === 'no user found'){
                dispatch({type: "NO_USER"});
            }
        } catch (error) {
            console.log(error.response)
        }
    }
}

export const validateUserAccount = () =>{
    return async (dispatch) => {
        try {
            const res = await axios.get('/auth/validate');
            if(res.data.status === 'user found'){
                dispatch({type: "NEW_USER", payload: res.data.data})
            } 
            if(res.data.status === 'no user found'){
                dispatch({type: "NO_USER"})
                window.location = '/auth/login'
            }
        } catch (error) {
            console.log(error.response)
        }
    }
}

export const activateUser = (data) => {
    return (dispatch) => {
        dispatch(loadingModal('Validating activation code...'))
        setTimeout(async ()=>{
            try {
                const res = await axios.patch('/auth/activate', data);
                // console.log(res.data);
                if(res.data.status === 'success') {
                    dispatch( {type: "NEW_USER", payload: res.data.data} )
                }
            } catch (error) {
                console.log(error.response)
                if(error.response.data.status === 'failed') {
                    dispatch(errorModal(error.response.data.message))
                }
            }

        },2000)
    }
}

// REGISTER //
export const signUpUser = (data) => {
    return async (dispatch) => {
        try {
            const res = await axios.post('/auth/signup', data);
            //console.log(res)
            if(res.data.status === 'success') {
                dispatch( {type: "NEW_USER", payload: res.data.data} )
                dispatch(successModal('Creating account...'))
                setTimeout(() => {
                    window.location.assign('/auth/account/validate')
                },2000)
            }
            
        } catch (error) {
            console.log(error.response);

            if(error.response.data.status === 'failed' && error.response.data.error.code === 11000) {
                const errMessage = `Sorry, ${Object.keys(error.response.data.error.keyValue)} is already taken.`
                dispatch(errorModal(errMessage))
            }
            if(error.response.data.status === 'failed' && error.response.data.error.name === "ValidationError") {
                const errMessage = error.response.data.message.split(':')[2].trim();
                dispatch(errorModal(errMessage))
            }
            else {
                dispatch(errorModal(`Sorry, something went wrong. Please try again`))
            }
        }
        
        

    }
}

export const setUserPassword = (data) => {
    return async (dispatch) => {
        try {
            const res = await axios.patch('/auth/signup', data);
            if(res.data.status === 'success') {
                dispatch(successModal('Setting your password...'))
                setTimeout(() => {
                    window.location.assign('/')
                },2000)
            }
        } catch (error) {
            console.log(error.response);
        }
    }
}

export const editUserPhoto = (data) => {
    return (dispatch) => {
        dispatch(loadingModal('Updating profile pic....'));
        setTimeout(async ()=>{
            try {
                const res = await axios.patch('/u/account/photo', data,{
                    headers : {
                        'content-type': 'multipart/form-data'
                    }
                });
                 console.log(res.data);
                if(res.data.status === 'success') {
                    dispatch(successModal('Profile update successful'))
                    dispatch( {type: "NEW_USER", payload: res.data.data} )
                    window.location.reload();
                }
            } catch (error) {
                console.log(error.response)
                if(error.response.data.status === 'failed') {
                    dispatch(errorModal(error.response.data.message))
                } 
            }

        },2000)

    }
}

export const editUserProfile = (data) => {
    return (dispatch) => {
        dispatch(loadingModal('Updating your profile....'))
        setTimeout(async ()=>{
            try {
                const res = await axios.patch('/u/account/profile', data);
                // console.log(res.data);
                if(res.data.status === 'success') {
                    dispatch(successModal('Profile update successful'))
                    dispatch( {type: "NEW_USER", payload: res.data.data} )
                }
            } catch (error) {
                console.log(error.response)
                if(error.response.data.status === 'failed') {
                    dispatch(errorModal(error.response.data.message))
                }
            }

        },2000)
    }
}

export const editUserSettings = (data) => {
    return (dispatch) => {
        dispatch(loadingModal('Updating your settings....'))
        setTimeout(async ()=>{
            try {
                const res = await axios.patch('/u/account/settings', data);
                // console.log(res.data);
                if(res.data.status === 'success') {
                    dispatch(successModal('Settings update successful'))
                    dispatch( {type: "NEW_USER", payload: res.data.data} )
                }
            } catch (error) {
                console.log(error.response)
                if(error.response.data.status === 'failed') {
                    dispatch(errorModal(error.response.data.message))
                }
            }

        },2000)
    }
}

export const forgotUserPassword = (data) => {
    return async (dispatch) => {
        try {
            const res = await axios.patch('/auth/forgorpassword', data);
            console.log(res)
        } catch (error) {
            console.log(error.response)
        }
    }
}

export const loginUser = (data) => {
    return async (dispatch) => {
        try {
            console.log(data)
            const res = await axios.post('/auth/login', data);
            console.log(res)
            if(res.data.status === 'success') {
                dispatch(successModal('Login successful...'))
                setTimeout(() => {
                    window.location.assign('/u/account/profile')
                },1000)
                setTimeout(() => {
                    dispatch( {type: "LOGIN_USER", payload: res.data.data} )
                },2000)
            }
            
        } catch (error) {
            console.log(error.response);
            if(error.response.data.status === 'failed') {
                dispatch(errorModal(error.response.data.message))
            }
            
        }
    }
}

export const logoutUser = () => {
    return async(dispatch) => {
        try {
            const res = await axios.get('/auth/logout')
            if(res.data.status === 'success') {
                dispatch( {type: "LOGOUT_USER"} )
                    window.location.assign('/');
            }
            
        } catch (error) {
            console.log(error.response)
        }
    }
}


// SELLER ACCOUNT ACTION CREATORS //

export const createSeller = (data) => {
    return (dispatch) => {
        dispatch(loadingModal('Creating seller account....'))
        setTimeout(async ()=>{
            try {
                const res = await axios.post('/s/account/create', data)
                console.log(res.data)
                if(res.data.status === 'success') {
                    dispatch(successModal('Your profile is ready.'))
                    dispatch( {type: "NEW_USER", payload: res.data.data} )
                    window.location.assign('/s/account/dashboard'); 
                }
            } catch (error) {
                console.log(error.response)
                if(error.response.data.status === 'failed') {
                    dispatch(errorModal(error.response.data.message))
                }
            }
        }, 2000)
    
    }
}

// CREATE NEW GIG //

export const createNewGig = (data) => {
    return (dispatch) => {
        dispatch(loadingModal('Creating your Gig....'));
        setTimeout(async ()=>{
            try {
                const res = await axios.post('/api/v1/gig', data ,{
                    headers : {
                        'content-type': 'multipart/form-data'
                    }
                });
                if(res.data.status === 'success') {
                    dispatch({type:"NEW_GIG"})
                }
                
            } catch (error) {
                console.log(error.response)
                if(error.response.data.status === 'failed') {
                    dispatch(errorModal(error.response.data.message))
                } 
            }

        },2000)

    }
}


// MODAL - ERROR ACTIONS CREATORS //


export const successModal = (message) => {
    return {
        type : "SUCCESS_MODAL",
        payload : message
    }
}

export const loadingModal = (message) => {
    return {
        type : "LOADING_MODAL",
        payload : message
    }
}

export const errorModal = (message) => {
    return {
        type : "ERROR_MODAL",
        payload : message
    }
}

export const resetModal = () => {
    return {
        type : "RESET_MODAL"
    }
}