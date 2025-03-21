
import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import OnSale from '../pages/OnSale'
import NewArrivals from '../pages/NewArrivals'
import Brands from '../pages/Brands'
import Profile from '../pages/Profile'
import Header from '../components/Header'
import Card from '../components/Card'
import CartPage from '../pages/CartPage'
import ProductDetail from '../pages/ProductDetail'
import CheckoutPage from '../pages/CheckoutPage'
import DressCategories from '../components/DresCatigories'
import Catigories from '../pages/Catigories'
import Categories from '../pages/Catigories'

 



const Router = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={< Home />} />
        <Route path='/onsale' element={< OnSale />} />
        <Route path='/newarrivals' element={< NewArrivals />} />
        <Route path='/brands' element={< Brands />} />
        <Route path='/profile' element={< Profile />} />
       
        <Route path="/" element={<Card />} />
        <Route path="/korzinka" element={<CartPage />} /> 
        <Route path="/product/:id" element={<ProductDetail />} />

        <Route path="/" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />

        <Route path="/" element={<DressCategories />} />
        <Route path="/catigories" element={<Catigories />} />

        <Route path="/" element={<Card />} />
        <Route path="/category" element={<Categories />} />

        <Route path="/" element={<Categories />} />
        <Route path="/cart" element={<CartPage />} />


      



      </Routes>

    
    </>
  )
}

export default Router