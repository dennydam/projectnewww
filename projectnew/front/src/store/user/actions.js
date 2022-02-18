import { api } from '@/plugins/axios.js'
import swal from 'sweetalert2'
import router from '@/router'

export const login2 = async ({ commit }, form2) => {
  try {
    const { data } = await api.post('/users/login', form2)
    console.log('aaa')
    commit('login', data.result)
    console.log('bbb')
    swal.fire({
      icon: 'success',
      title: '成功',
      text: '登入成功'
    })
    router.push('/')
  } catch (error) {
    console.log(error)
    swal.fire({
      icon: 'error',
      title: '失敗',
      text: '登入失敗'
    })
  }
}

export const getInfo = async ({ commit, state }) => {
  if (state.token.length === 0) return
  try {
    const { data } = await api.get('/users/me', {
      headers: {
        authorization: 'Bearer ' + state.token
      }
    })
    commit('getInfo', data.result)
  } catch (error) {
    // commit('logout');
  }
}
