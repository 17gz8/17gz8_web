export default function ({ app: { $axios } }) {
  $axios.defaults.baseURL = 'http://www.17gz8.com:52800/allycs/server/member/v1/'
  $axios.interceptors.request.use((config) => {
    return config
  })
  $axios.interceptors.response.use((response) => {
    if (/^[4|5]/.test(response.status)) {
      return Promise.reject(response.statusText)
    }
    return response.data
  })
}
