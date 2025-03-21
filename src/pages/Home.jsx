
import Hero from '../components/Hero'
import Brand from '../components/brand'
import Card from '../components/Card'
import DresStyle from '../components/DresCatigories'
import HappyCustomers from '../components/HappyCostumers'
import StayUpdated from '../components/StayUpdate'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <>
      <Hero />
      <Brand />
      <Card />
      <DresStyle/>
      <HappyCustomers />
      <StayUpdated />
      <Footer/>
    </>
  )
}

export default Home