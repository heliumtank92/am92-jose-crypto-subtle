const DEFAULT_ERROR_MSG = 'Jose Crypto Subtle Error'
const DEFAULT_ERROR_STATUS_CODE = 500
const DEFAULT_ERROR_CODE = 'JOSE_CRYPTO_SUBTLE_ERROR'

export default class JoseCryptoSubtleError extends Error {
  constructor (e = {}, eMap) {
    if (e._isCustomError && !eMap) { return e }

    super()

    const { message, statusCode, errorCode } = eMap || {}
    const {
      message: eMessage,
      msg: eMsg,
      code: eCode
    } = e

    this._isCustomError = true
    this._isJoseCryptoError = true
    this.message = message || eMessage || eMsg || DEFAULT_ERROR_MSG
    this.statusCode = statusCode || DEFAULT_ERROR_STATUS_CODE
    this.errorCode = errorCode || eCode || DEFAULT_ERROR_CODE
    this.error = {
      ...e,
      message: eMessage || this.message,
      errorCode: this.errorCode
    }
  }
}