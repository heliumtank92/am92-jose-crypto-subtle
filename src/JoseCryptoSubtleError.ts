import { ErrorMap } from './TYPES'

const DEFAULT_ERROR_MSG = 'Jose Crypto Subtle Error'
const DEFAULT_ERROR_STATUS_CODE = 500
const DEFAULT_ERROR_CODE = 'JOSE_CRYPTO_SUBTLE_ERROR'

export default class JoseCryptoSubtleError extends Error {
  _isCustomError = true
  _isJoseCryptoError = true
  message: string
  statusCode: number
  errorCode: string
  error?: { [key: string]: any } = {}

  constructor(e?: DOMException, eMap?: ErrorMap) {
    super()

    this.message = eMap?.message || e?.message || DEFAULT_ERROR_MSG
    this.statusCode = eMap?.statusCode || DEFAULT_ERROR_STATUS_CODE
    this.errorCode = eMap?.errorCode || e?.name || DEFAULT_ERROR_CODE
    this.error = e
  }
}
