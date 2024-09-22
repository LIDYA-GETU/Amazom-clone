import React, { useContext } from 'react';
import {Link} from "react-router-dom"
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import classes from"./Header.module.css"
import LowerHeader from "./LowerHeader"
import { DataContext } from '../DataProvider/DataProvider';

function Header() {
const [{basket},dispatch]=useContext(DataContext)
const totalItem=basket?.reduce((amount,item)=>{
  return item.amount+amount
},0)

  return (
    <section className={classes.fixed}>
    <section>
      <section>
        <div className={classes.header_container}>
          <div className={classes.logo_container}>
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
              />
            </Link>
          <div className={classes.delivery}>
          <span>
            <SlLocationPin />
          </span>
          <div>
            <p>delivered to</p>
            <span>Atlanta, GA</span>
          </div>
        </div>
        </div>
        <div className={classes.search}>
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" name="" id="" placeholder="search product" />
          <BsSearch size={25} />
        </div>
        {/* right side link */}
        <div>
          <div className={classes.order_container}>
            <a href='' className={classes.language}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/d/de/Flag_of_the_United_States.png'
              
              alt=""
            />
            <select>
              <option value="">EN</option>
            </select>
            </a>
          
          <Link to="">
      
              <p>Sign In</p>
              <span>Account & Lists</span>
            
          </Link>
          {/* orders */}
          <Link to="/Orders">
            <p>returns</p>
            <span>& Orders</span>
          </Link>
          {/* cart */}
          <Link to='/Cart' className={classes.cart}>
            <BiCart size={35} />
            <span>{totalItem}</span>
          </Link>
        </div>
        </div>
        </div>
        
      </section>
    </section>
    <LowerHeader/>
    </section>
  );
}

export default Header
