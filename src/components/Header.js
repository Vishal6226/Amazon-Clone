import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search'
import BasketIcon from '@material-ui/icons/ShoppingBasket'
import { Link } from "react-router-dom"; 
import { useStateValue } from '../StateProvider.js';


function Header() {
  const [{basket},dispatch] = useStateValue (); 
  return (
    <div className = "header">
    <Link to = "/">
      <img className = "header_logo" src = "http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt = "amazon" />
    </Link>
      <div className = "header_search">
        <input className = "header_searchInput" type = "text">
        </input>
        <SearchIcon className='header_searchIcon'/>
      </div>
      <div className = "header_nav">
        <Link to = "./login">
          <div className = "header_option">
            <span className ="header_option_1">Hello Guest</span>
            <span className ="header_option_2">Sign In</span>
          </div>
        </Link>
        <Link to = "./orders">
          <div className = "header_option">
            <span className ="header_option_1">Returns</span>
            <span className ="header_option_2">&Orders</span>
          </div>
        </Link>
        <div className = "header_option">
          <span className ="header_option_1">Your</span>
           <span className ="header_option_2">Prime</span>
        </div>
          <Link to = "/checkout">
            <div className = "header_basket">
              <BasketIcon />
              <span className =  "header_option_2 header_basketCount">{basket?.length}</span> 
            </div>
          </Link>
      </div> 
    </div>
  )
}

export default Header;
