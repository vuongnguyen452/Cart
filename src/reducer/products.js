//tao danh sách sản phẩm
var inittialState = [
  {
    id:1,
    name: 'IPhone7',
    descripton:' Do apple sản xuất',
    image:'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
    price: 500,
    inventory:10,
    rating: 4
  },
  {
    id:2,
    name: 'SamSung',
    descripton:' Do SamSung sản xuất',
    image:'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
    price: 700,
    inventory:15,
    rating:5
  },
  {
    id:3,
    name: 'SamSung',
    descripton:' Do SamSung sản xuất',
    image:'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
    price: 800,
    inventory:10,
    rating:3
  },
];
const products =(state = inittialState , action ) =>{
  switch(action.type){
    default : return[...state];
  }
}
export default products;