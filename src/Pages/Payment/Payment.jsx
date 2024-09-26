import React,{useContext} from 'react'
import LayOut from '../../Components/LayOut/LayOut'
import classes from "./payment.module.css"
import { DataContext } from '../../Components/DataProvider/DataProvider';
import ProductCard from "../../Components/product/ProductCard"
function Payment() {
const[{user,basket}]=useContext(DataContext);
 const totalItem = basket?.reduce((amount, item) => {
   return item.amount + amount;
 }, 0);
  return (
    <LayOut>
      <div className={classes.payment__header}>
        check Out ({totalItem})items
      </div>
      <section className={classes.Payment}>
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user.email}</div>
            <div>124 robin hill</div>
            <div>Atlanta,GA</div>
          </div>
        </div>
        <hr />
        <div className={classes.flex}>
          <h3>Review items and delivery</h3>
          <div>
            {
              basket?.map((item)=>(<ProductCard product={item} flex={true}/>))
            }
          </div>
          </div>
          <hr />
          <div><h3>Payment methods</h3></div>
      </section>
    </LayOut>
  );
}

export default Payment
