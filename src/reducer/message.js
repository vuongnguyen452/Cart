import * as types from './../constans/actionTyle'//tao danh sách sản phẩ
import * as Message from  './../constans/Message';
var inittialState = Message.MSG_WELCOME;
const message = (state = inittialState , action) =>{
  switch(action.types){
    case types.CHANGE_MESSAGE:
      return action.message;
    default : return state;
  }
}
export default message;