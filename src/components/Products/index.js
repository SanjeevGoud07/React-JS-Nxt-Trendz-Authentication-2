import Cookies from 'js-cookie'
import './index.css'
import {Redirect} from 'react-router-dom'
import Header from '../Header'

const Products = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <>
      <Header />
      <div className="Con">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
          alt="products"
          className="Img"
        />
      </div>
    </>
  )
}
export default Products
