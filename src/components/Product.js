import React, { Component } from 'react';
import * as Message from './../constans/Message';

class Product extends Component {
    onAddToCart=(product)=>{
      this.props.onAddToCart(product);
      this.props.onChangeMessage(Message.MSG_ADD_TO_CART_SUCSSE);
    }
    showRating(rating){
        var  result = [];
            for(var  i = 1; i <= rating; i++){
                result.push(<i className="fa fa-star"></i>);
            }
            for(var j =1; j <= (5-rating); j++){
                result.push(<i className="fa fa-star-o"></i>);
            }
        return result;
    }
  render() {
      var {product } = this.props;
    return (
      <div className ="col-md-4">
                            <div className="">
                          <div className="card text-center card-cascade narrower">
                              <div className="view overlay hm-white-slight z-depth-1">
                                  <img  src={product.image}
                                      className="img-fluid" alt={product.name} />
                                  <a>
                                      <div className="mask waves-light waves-effect waves-light"></div>
                                  </a>
                              </div>
                              <div className="card-body">
                                  <h4 className="card-title">
                                      <strong>
                                          <a>{product.name}</a>
                                      </strong>
                                  </h4>
                                  <ul className="rating">
                                        <li>
                                            {this.showRating(product.rating)}
                                        </li>
                                  </ul>
                                  <p className="card-text">
                                      {product.descripton}
                                  </p>
                                  <div className="card-footer">
                                      <span className="left">{product.price}</span>
                                      <span className="right">
                                          <a className="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Cart"
                                            onClick={()=>this.onAddToCart(product)}
                                          >
                                              <i className="fa fa-shopping-cart"></i>
                                          </a>
                                      </span>
                                  </div>
                              </div>
                          </div>
                      </div>
  </div>
    );
  }
  
}

export default Product;
