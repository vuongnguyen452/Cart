import * as types from './../constans/actionTyle'
//tao danh sách sản phẩm
var data = JSON.parse(localStorage.getItem('CART'));

var inittialState = data ? data : [];
const cart =(state = inittialState , action ) =>{
  var {product, quantity} = action;
  var index = -1; //không tìm thấy
  switch(action.type){
    case types.ADD_TO_CART:
    index = findProductInCart(state, product);
      if(index !== -1){
        state[index].quantity += quantity;
      }else{
        state.push({
          product,
          quantity
        });
      }
      localStorage.setItem('CART', JSON.stringify(state));// trước khi trả về lưu lại rồi render ra
      return [...state];
      case types.DELETE_IN_CART:
      index = findProductInCart(state, product);
      if(index !== -1){
        state.splice(index, 1);// tiếp theo dispa action chuyển thành props gọi vào component
      }
      localStorage.setItem('CART', JSON.stringify(state));// trước khi trả về lưu lại rồi render ra
      return [...state];
      case types.UPDATE_PRODUCT_IN_CAR:
      index = findProductInCart(state, product);
      if (index !== -1){
        state[index].quantity = quantity;
      }
      localStorage.setItem('CART', JSON.stringify(state));// trước khi trả về lưu lại rồi render ra
      return [...state];
    default : return[...state];
    
  }
}
var findProductInCart=(cart, product)=>{
  var index = -1;
  if(cart.length>0){
    for(var i=0 ;i< cart.length; i++){
      if(cart[i].product.id === product.id){
        index = i;
        break;
      }
    }
  }
  return index;
}
export default cart;