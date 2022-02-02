import { combineReducers } from "redux";

export const userReducer = (user = null, action) => {
    switch (action.type) {
        case "NEW_USER":
            return {...action.payload}
        case "LOGIN_USER":
            return {...action.payload}
        case "NO_USER":
            return user
        case "LOGOUT_USER":
            return user
        default:
           return user
    }
}

export const modalReducer = (modal = null, action) => {
    switch (action.type) {
        case "LOADING_MODAL":
            return { message : action.payload, status: 'loading' }
        case "SUCCESS_MODAL":
            return { message : action.payload, status: 'success' }
        case "ERROR_MODAL":
            return { message : action.payload, status: 'error' }
        case "RESET_MODAL":
            return null
        default:
           return modal
    }
}

export const gigReducer = (gig = null, action) => {
    switch (action.type) {
        case "NEW_GIG":
            return { status: 'new' }
        default:
           return gig
    }
}

export const ordersReducer = (orders = null, action) => {
    return orders
}

export const notificationReducer = (notifications = null, action) => {
    return notifications
}
export default combineReducers({currentUser : userReducer, modal : modalReducer, gigs : gigReducer, orders: ordersReducer, notifications: notificationReducer});

