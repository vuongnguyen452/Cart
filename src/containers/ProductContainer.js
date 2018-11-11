import React, { Component } from 'react';
import { connect} from 'react-redux';
import Products from './../components/Products';
import PropTypes from 'prop-types';
import Product from './../components/Product';
import { acAddToCart, acChangeMessage  } from './../actions/index';

class ProductContainer extends Component {
  showProduct (products){
    var result  = null;
    var { onAddToCart, onChangeMessage} = this.props;
    if(products.length > 0){
      result = products.map((product,index)=>{
        return <Product 
                  key = {index} 
                  product={product}
                  onAddToCart  = {onAddToCart}
                  onChangeMessage = {onChangeMessage}
                />
      });
    }
    return result;
  }
  render() {
    var { products } = this.props;
    return (
      <Products>
        {this.showProduct(products)}
      </Products>
    );
  }
  
}

ProductContainer.protoType= {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      descripton: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
    }) 
  ).isRequired,  //yeu cau phai co  
  onChangeMessage : PropTypes.func.isRequired
}
const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddToCart : (product)=>{
        dispatch(acAddToCart(product, 1));
    },
    onChangeMessage : (message) =>{
      dispatch(acChangeMessage(message));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
