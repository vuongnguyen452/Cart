import React, { Component } from 'react';
import { connect} from 'react-redux';
import PropTypes from 'prop-types';
import Cart from  './../components/Cart';
import *as Message from '../constans/Message';
import CartItems from './../components/CartItems';
import CartResult from  './../components/CartResult';
import {actRemoveProductInCart, acChangeMessage , actUpdateProductInCart} from './../actions/index';
class CartContainer extends Component {
  showCartResult = (cart)=>{
      var result = null;
      if(cart.length > 0){
        result = <CartResult cart = {cart}/>
      }
      return result;
  }
  showCartItem= (cart)=>{
    var result = <tr><td>{Message.MSG_CART_EMTY}</td></tr>;
    var {onDeleteProductInCart, onChangeMessage, onUpdateProductInCart} = this.props;
    if(cart.length >0) {
      result = cart.map((item, index)=>{
        return(
          <CartItems
            key= {index}
            item = {item}
            index= {index}
            onDeleteProductInCart = {onDeleteProductInCart}
            onChangeMessage = {onChangeMessage}
            onUpdateProductInCart ={onUpdateProductInCart}
          />
        );
      })
    }
    return result;
  }
  render() {
    var { cart } = this.props;
    console.log(cart)
    return (
      <Cart>
         {this.showCartItem(cart)}
         {this.showCartResult(cart)}
      </Cart>
    );
  }
  
}

CartContainer.protoType= {
  cart: PropTypes.arrayOf(PropTypes.shape({
    product: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      descripton: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
    }).isRequired,
    quantity: PropTypes.number.isRequired
    })).isRequired  //yeu cau phai co  
}
const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onDeleteProductInCart : (product)=>{
      dispatch(actRemoveProductInCart(product));
    },
    onChangeMessage :(message)=>{
      dispatch(acChangeMessage(message));// truyền vào cartitem
    },
    onUpdateProductInCart : (product, quantity) =>{
      dispatch(actUpdateProductInCart(product, quantity))
    }
  }
}// truyền prop vào cartitem
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
