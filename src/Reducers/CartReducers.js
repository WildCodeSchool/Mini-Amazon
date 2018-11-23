import { ADD, REMOVE } from '../Actions/CartActions';

const cartReducer = (cart = [], {type, payload}) => {
  switch (type) {
    case ADD:
      return [...cart, payload.article]
    case REMOVE:
      return [
        ...cart.slice(0, payload.id),
        ...cart.slice(payload.id + 1)
    ];
    default:
      return cart;
  }
}

export default cartReducer;