import axios from 'axios'

axios.defaults.timeout = 10000
axios.defaults.baseURL = 'https://elm.cangdu.org/' // 填写域名，需以/结尾，后续在拼装URL时使用
axios.defaults.withCredentials = false // 表示跨域请求时是否需要使用凭证
// ------------------------------私有内部方法-------------------------------
// axios 拦截重复请求
const pending = {}
const CancelToken = axios.CancelToken
const removePending = (key, isRequest = false) => {
  if (pending[key] && isRequest) {
    pending[key]('取消重复请求') // 执行CancelToken，用于取消进行中的请求
  }
  delete pending[key]
}

const getRequestIdentify = (config, isReuest = false) => {
  // request的时候，config.url是action路径；response的时候，config.url是全路径。所以存在判断请求操作从而处理url
  let url = config.url
  if (isReuest) {
    url = config.baseURL + config.url.substring(1, config.url.length)
  }
  return config.method === 'get' || config.method === 'delete' ? encodeURIComponent(url + JSON.stringify(config.params)) : encodeURIComponent(url + JSON.stringify(config.data))
}

/**
 * 封装get post delete put方法
 * @param method
 * @param url
 * @param data
 * @param selfConfig 单个请求的个性化配置
 * @returns {Promise}
 */
function methodAxios (method, url, params, selfConfig = {}) {
  let httpDefault = {
    method: method,
    url: url,
    params: method === 'GET' || method === 'DELETE' ? params : null,
    data: method === 'POST' || method === 'PUT' ? JSON.stringify(params) : null
  }
  let requestConfig = Object.assign({}, httpDefault, selfConfig)
  return new Promise((resolve, reject) => {
    axios(requestConfig)
      .then((response) => {
        resolve(response)
      }).catch((error) => {
      reject(error)
    })
  })
}

/**
 * 封装添加axios All
 * @param promiseArray
 * @returns {Promise}
 */
function allAxios (promiseArray) {
  return new Promise((resolve, reject) => {
    axios.all(promiseArray)
      .then(allResponse => {
        resolve(allResponse)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

/**
 * 封装添加请求拦截器方法
 * @param interceptorFun
 * @param errorFun
 * @returns {Interceptor}
 */
function setRequestInterceptor (interceptorFun, errorFun) {
  return axios.interceptors.request.use(interceptorFun, errorFun)
}

/**
 * 封装卸载请求拦截器方法
 * @param interceptor
 * @returns {Interceptor}
 */

function ejectRequestInterceptor (interceptor) {
  return axios.interceptors.request.eject(interceptor)
}
/**
 * 封装添加响应拦截器方法
 * @param interceptorFun
 * @param errorFun
 * @returns {Interceptor}
 */

function setResponseInterceptor (interceptorFun, errorFun) {
  return axios.interceptors.response.use(interceptorFun, errorFun)
}
/**
 * 封装卸载响应拦截器方法
 * @param interceptor
 * @returns {Interceptor}
 */

function ejectResponseInterceptor (interceptor) {
  return axios.interceptors.response.eject(interceptor)
}
/**
 * 封装设置axios默认参数值方法
 * @param key 需要是在默认值列表中key
 * @param value
 */

function setDefaultValue (key, value) {
  axios.defaults[key] = value
}
/**
 * 封装设置axios默认参数值方法
 * @param key 需要是在默认值列表中key
 */

function setDefaultValues (defaultValues) {
  for (let key in defaultValues) {
    axios.defaults[key] = defaultValues[key]
  }
}
// -------------------------------基础公共配置----------------------
// 请求拦截器--公共
// 1、headers添加Content-Type
// 2、拦截重复请求

setRequestInterceptor(
  config => {
    config.headers = {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    }
    // 拦截重复请求(即当前正在进行的相同请求)
    let requestData = getRequestIdentify(config, true)
    removePending(requestData, true)
    config.cancelToken = new CancelToken((c) => {
      pending[requestData] = c
    })
    console.log('请求前')
    return config
  },
  error => {
    // Do something with request error
    return Promise.reject(error)
  }
)

// 响应拦截器--公共
// 1、拦截重复请求
// 2、对响应结果进行判断--请求状态
setResponseInterceptor(
  response => {
    // 把已经完成的请求从 pending 中移除
    let requestData = getRequestIdentify(response.config)
    removePending(requestData)
    return response
  }, error => {
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          error.message = '错误请求'
          break
        case 401:
          error.message = '未授权，请重新登录'
          break
        case 403:
          error.message = '拒绝访问'
          break
        case 404:
          error.message = '请求错误,未找到该资源'
          break
        case 405:
          error.message = '请求方法未允许'
          break
        case 408:
          error.message = '请求超时'
          break
        case 500:
          error.message = '服务器端出错'
          break
        case 501:
          error.message = '网络未实现'
          break
        case 502:
          error.message = '网络错误'
          break
        case 503:
          error.message = '服务不可用'
          break
        case 504:
          error.message = '网络超时'
          break
        case 505:
          error.message = 'http版本不支持该请求'
          break
        default:
          error.message = `连接错误${error.response.status}`
      }
    } else {
      if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) { // 请求超时
        console.log('连接请求超时')
      }
    }
    return Promise.reject(error)
  }
)

//导出通用的请求
const Http = {

  get: (url, params, selfConfig) => methodAxios('GET', url, params, selfConfig),

  post: (url, params, selfConfig) => methodAxios('POST', url, params, selfConfig),

  put: (url, params, selfConfig) => methodAxios('PUT', url, params, selfConfig),

  delete: (url, params, selfConfig) => methodAxios('DELETE', url, params, selfConfig),

  all: (promiseArr) => allAxios(promiseArr)

}

export default Http
