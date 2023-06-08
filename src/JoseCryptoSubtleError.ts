import { ErrorMap } from './TYPES'

const DEFAULT_ERROR_MSG = 'Jose Crypto Subtle Error'
const DEFAULT_ERROR_STATUS_CODE = 500
const DEFAULT_ERROR_CODE = 'JOSE_CRYPTO_SUBTLE_ERROR'

export default class JoseCryptoSubtleError extends Error {
  _isCustomError = true
  _isJoseCryptoError = true
  message = DEFAULT_ERROR_MSG
  statusCode = DEFAULT_ERROR_STATUS_CODE
  errorCode = DEFAULT_ERROR_CODE
  error = {}

  constructor(e?: DOMException | JoseCryptoSubtleError, eMap?: ErrorMap) {
    if (e instanceof JoseCryptoSubtleError && !eMap) {
      return e
    }

    super()

    const { message, statusCode, errorCode } = eMap || {}
    let eMessage = ''
    let eName = ''
    if (e instanceof DOMException) {
      eMessage = e.message
      eName = e.name
    }

    this._isCustomError = true
    this._isJoseCryptoError = true
    this.message = message || eMessage || DEFAULT_ERROR_MSG
    this.statusCode = statusCode || DEFAULT_ERROR_STATUS_CODE
    this.errorCode = errorCode || eName || DEFAULT_ERROR_CODE
    this.error = e || {}
  }
}
