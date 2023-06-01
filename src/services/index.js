import lodash from 'lodash';

// eslint-disable-next-line no-underscore-dangle
let _requests = 0;
// eslint-disable-next-line no-underscore-dangle
let _interceptors = {};

function triggerInterceptors(event, data = {}) {
  lodash.forEach(_interceptors, interceptor => {
    interceptor(event, data);
  });
}

// eslint-disable-next-line no-unused-vars
let refreshingTokenPromise = null;

class Request {
  static create(options) {
    return new Request(options);
  }

  static registerInterceptor(name, interceptor) {
    _interceptors[name] = interceptor;
  }

  static unregisterInterceptor(name) {
    _interceptors = lodash.omit(_interceptors, name);
  }

  constructor(options) {
    this._options = options;
  }

  get(url, params) {
    return this.request({ method: 'GET', url, params });
  }

  post(path, payload, callback) {
    return this.request({
      method: 'POST',
      url: path,
      responseType: 'json',
      data: payload,
    }).then(response => {
      callback(response);
    });
  }

  put(path, payload, callback) {
    return this.request({
      method: 'PUT',
      url: path,
      responseType: 'json',
      data: payload,
    }).then(response => {
      callback(response);
    });
  }

  putOne(url, data, params) {
    return this.request({ method: 'PUT', url, params, data });
  }

  delete(url, data, callback) {
    return this.request({
      method: 'DELETE',
      url,
      params: data,
    }).then(response => {
      callback(response);
    });
  }

  async request(...args) {
    _requests += 1;

    triggerInterceptors('request:start', { requests: _requests });

    try {
      return await this._request(...args);
    } finally {
      triggerInterceptors('request:done', { requests: _requests });

      _requests -= 1;
    }
  }

  async _request(requestOptions) {
    const { method = 'GET', data = null } = requestOptions;
    let { url, params = null } = requestOptions;

    url = this._options.endpoint + url;

    if (params) {
      url += this._getQueryString(params);
    }

    const options = {
      method,
      headers: {
        Accept: 'application/json',
      },
    };

    if (method === 'POST' || method === 'PUT') {
      if (data) {
        const serializable = lodash.isPlainObject(data);

        options.body = serializable ? JSON.stringify(data) : data;

        let contentType = null;

        if (serializable) {
          contentType = 'application/json';
        }

        if (contentType) {
          options.headers['Content-Type'] = contentType;
        }
      }
    }

    const res = await fetch(url, options);

    if (!res.ok) {
      triggerInterceptors('response:error', { response: res });
      const messageError = await res.text();
      throw JSON.parse(messageError);
    }

    const text = await res.text();

    try {
      const responseData = JSON.parse(text);
      return responseData;
    } catch (error) {
      triggerInterceptors('response:error.json', { error, response: res });

      throw error;
    }
  }

  _getQueryString(params) {
    const parts = [];

    lodash.forEach(params, (value, key) => {
      const values = lodash.isArray(value) ? value : [value];
      const operator = lodash.isArray(value) ? '=' : '=';

      lodash.forEach(values, v => {
        parts.push(key + operator + encodeURIComponent(v));
      });
    });

    const queryString = parts.join('&');

    return queryString ? `?${queryString}` : '';
  }
}

const Service = Request.create({
  endpoint: `${process.env.REACT_APP_DOMAIN}`,
  handleToken: false,
});

export default Service;
