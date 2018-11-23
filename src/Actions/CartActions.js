export const ADD = 'cart:addCartAction';
export const REMOVE = 'cart:removeCartAction';

export const addCartAction = (article) => {
  return {
    type: ADD,
    payload: {
      article: article
    }
  }
}

export const removeCartAction = (id) => {
  return {
    type: REMOVE,
    payload: {
      id: id
    }
  }
}