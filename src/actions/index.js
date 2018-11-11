import * as types from './../constans/actionTyle';
export const acAddToCart = (product, quantity) =>{
  return{
    type : types.ADD_TO_CART,
    product,
    quantity
  }
}

export const acChangeMessage = (message) =>{
  return{
    type: types.CHANGE_MESSAGE,
    message
  }
}
export const actRemoveProductInCart =(product)=>{
  return {
    type: types.DELETE_IN_CART,
    product
  }
}
export const actUpdateProductInCart =(product,quantity)=>{
  return {
    type: types.UPDATE_PRODUCT_IN_CAR,
    product,
    quantity
  }
}