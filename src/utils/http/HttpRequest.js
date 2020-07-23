import HttpStatus from './HttpStatus'

export default class HttpRequest {

  static async execute(URL, method, body = null) {
    const requestParams = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      // credentials: 'same-origin',
      body: null,
    }

    if (body) {
      requestParams.body = JSON.stringify(body);
    }

    return await fetch(URL, requestParams)
      .then((res) => {
        if (res.status === HttpStatus.EMPTY_RESPONSE) {
          return null
        }
        return res.ok
          ? Promise
            .all([res.clone().blob(), res])
            .then(([blob, res]) =>
              blob.type.includes('application/json') ? res.json() : Promise.reject(res))

          : res.json().then((json) => Promise.reject(json))
      })
  }
}
