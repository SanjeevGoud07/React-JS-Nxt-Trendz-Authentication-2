// Write your JS code here
import Cookies from 'js-cookie'
import './index.css'
import {Redirect} from 'react-router-dom'
import Header from '../Header'

const Cart = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <>
      <Header />
      <div className="Con">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
          alt="cart"
          className="Img"
        />
        {/* <h1 className="heading">Cart</h1> */}
      </div>
    </>
  )
}
export default Cart
