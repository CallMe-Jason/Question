// create会生成一个axios实例，每个实例互不干扰
const request = axios.create({
  // 接口的基准路径
  baseURL: 'http://ttapi.research.itcast.cn/',
  // 自定义返回的原始数据
  transformResponse:[function (data) {
    // Do whatever you want to transform the data

    return data
  }]
})

// 请求拦截器
request.interceptors.request.use(function (config) {
  // 在请求发出之前进行一些信息设置
  return config
}, function(err) {
  // 处理响应的错误信息
})

// 响应拦截器
request.interceptors.response.use(function(res) {
  // 在这里对返回的数据进行处理
  return res
}, function(err) {
  // 处理响应的错误信息
})