import axios from "axios";

let env = process.env.NODE_ENV;

// axios.defaults.timeout = 5000;
// axios.defaults.timeout = 100;

// axios.defaults.baseURL = server_host
if (env == "development") {
  axios.defaults.baseURL = "/api";
} else {
  axios.defaults.baseURL = process.env.VUE_APP_BASEURL;
}
axios.defaults.headers = { "Content-Type": "application/json; charset=UTF-8" };
//http request 拦截器
axios.interceptors.request.use(
  (config) => {
    // config.headers.authorization = "bearer " + getToken();
    // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
    // config.data = JSON.stringify(config.data);
    // config.headers = {
    //   // 'Content-Type':'application/x-www-form-urlencoded;charset=utf-8'
    //   "Content-Type": "application/json;charset=utf-8",
    //   // token: window.localStorage.getItem("nestweb_token"),
    // };
    // if(token){
    //   config.params = {'token':token}
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//http response 拦截器
axios.interceptors.response.use(
  (response) => {
    if (response.data.errCode == 2) {
      this.$router.push({
        path: "/login",
        querry: { redirect: this.$router.currentRoute.fullPath }, //从哪个页面跳转
      });
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function fetch(url, data = {}, config) {
  let params = {
    ...config,
    params: data,
  };
  return new Promise((resolve, reject) => {
    axios
      .get(url, params)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data = {}, config) {
  return new Promise((resolve, reject) => {
    axios.post(url, data, config).then(
      (response) => {
        resolve(response.data);
      },
      (err) => {
        reject(err);
      }
    );
  });
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data).then(
      (response) => {
        resolve(response.data);
      },
      (err) => {
        reject(err);
      }
    );
  });
}

/**
 * 封装delete请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function dele(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios
      .delete(url, {
        // params: params  //传参通过url
        data: params, //传参通过body
      })
      .then(
        (response) => {
          resolve(response.data);
        },
        (err) => {
          reject(err);
        }
      );
  });
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data).then(
      (response) => {
        resolve(response.data);
      },
      (err) => {
        reject(err);
      }
    );
  });
}
