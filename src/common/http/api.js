
const install = () => {
  /* 通用配置 */
  uni.$uv.http.setConfig((config) => {
    config.baseURL = process.env.NODE_ENV === 'development' ?
      '' :
      ''
    return config
  })

  /* 响应拦截器 */
  uni.$uv.http.interceptors.response.use((response) => {
    return response.data
  }, (response) => {
    return Promise.reject(response)
  })

  let pingUrl = "/api/ping"

  /* ping测试 */
  let ping = (params = {}) => uni.$uv.http.get(pingUrl, params)

  uni.$api = {
    ping,
  }
}
export default install

