import React from 'react'
import dotenv from 'dotenv'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import {connect} from 'react-redux'
import { authRequest } from './components/Actions/actions';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Header from './components/UI/Header/Header'
import Footer from './components/UI/Footer/Footer'
import Home from './components/Pages/homepage/Home'
import CategoryPage from './components/Pages/category/CategoryPage';
import SubCategoryPage from './components/Pages/category/SubCategoryPage';
import SingleCategoryPage from './components/Pages/category/SingleCategoryPage';
import Orders from './components/Pages/orders/Orders';
import Complete from './components/Pages/orders/Complete';
import Login from './components/Pages/auth/Login';
import Signup from './components/Pages/auth/Signup';
import ForgotPassword from './components/Pages/auth/ForgotPassword';
import ResetPassword from './components/Pages/auth/ResetPassword';
import ValidateAccount from './components/Pages/auth/ValidateAccount';
import UserAccount from './components/Pages/user/Account';
import SellerAccount from './components/Pages/seller/Account';
import NewSeller from './components/Pages/landing/Seller'
import CreateGig from './components/Pages/seller/CreateGig';

dotenv.config({path: './.env'})

const App = (props) => {

  console.log(props)


  return (
    <Router className="App">
        <Header /> 
          <main>
            <Routes >
                <Route path='/' element={<Home/>} />

                <Route path='/auth/login' element={<Login />} />
                <Route path='/auth/create' element={<Signup />} />
                <Route path='/auth/account/validate' element={<ValidateAccount />} />
                <Route path='/auth/forgotpassword' element={<ForgotPassword />} />
                <Route path='/auth/resetpassword' element={<ResetPassword />} />

                <Route path='/category/:id' element={<CategoryPage />} />
                <Route path='/category/:id/:sub' element={<SubCategoryPage />} />
                <Route path='/category/:id/:sub/:user' element={<SingleCategoryPage />} />

                <Route path='/purchase/orders/:id' element={<Orders />}/>
                <Route path='/purchase/orders/:id/complete' element={<Complete />} />

                {/* USER ACCOUNT ROUTES */}
                <Route path='/u/account/profile' element={<UserAccount />} />
                <Route path='/u/account/orders' element={<UserAccount />} />
                <Route path='/u/account/settings' element={<UserAccount />} />
                <Route path='/u/account/notifications' element={<UserAccount />} />

                {/* SELLER ACCOUNT ROUTES */}
                <Route path='/s/account/dashboard' element={<SellerAccount />} />
                <Route path='/s/account/notifications' element={<SellerAccount />} />
                <Route path='/s/account/gigs' element={<SellerAccount />} />
                <Route path='/s/account/request' element={<SellerAccount />} />
                <Route path='/s/account/profile' element={<SellerAccount />} />
                <Route path='/s/account/settings' element={<SellerAccount />} />

                {/* SELLER ACCOUNT NEW*/}
                <Route path='/seller' element={<NewSeller/>} />
                <Route path='/seller/account' element={<NewSeller/>} />
                <Route path='/seller/gig/create' element={<CreateGig/>} />

            </Routes>
          </main>
          <Footer />

    </Router>
  );
}



const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, {authRequest})(App);
