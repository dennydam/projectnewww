const time = parseInt(process.env.VUE_APP_TIME)
// const timebreak = parseInt(process.env.VUE_APP_TIMEBREAK);

export default () => {
  return {
    token: '',
    account: '',
    role: 0,
    cart: 0,
    timeleft: time
  }
}
