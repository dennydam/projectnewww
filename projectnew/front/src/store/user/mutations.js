export const login = (state, data) => {
  state.account = data.account
  state.token = data.token
  state._id = data._id
  state.role = data.role
  state.cart = data.cart
}

export const getInfo = (state, data) => {
  state.account = data.account
  state._id = data._id
  state.role = data.role
  state.cart = data.cart
}

export const updateCart = (state, data) => {
  state.cart = data
}
