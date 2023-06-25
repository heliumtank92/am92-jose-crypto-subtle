import { JoseCryptoSubtleErrorMap } from './TYPES'

/** @ignore */
const DEFAULT_ERROR_MSG = 'Jose Crypto Subtle Error'
/** @ignore */
const DEFAULT_ERROR_STATUS_CODE = 500
/** @ignore */
const DEFAULT_ERROR_CODE = 'JoseCryptoSubtle::GENERIC_ERROR'

/**
 * Error class whose instance is thrown in case of any error.
 *
 * @class
 * @typedef {JoseCryptoSubtleError}
 * @extends {Error}
 */
export default class JoseCryptoSubtleError extends Error {
  /**
   * Flag to identify if error is a custom error.
   */
  readonly _isCustomError = true
  /**
   * Flag to identoify if error is a JoseCryptoSubtleError.
   */
  readonly _isJoseCryptoError = true
  /**
   * Error's message string.
   */
  message: string
  /**
   * HTTP status code associated with the error.
   */
  statusCode: number
  /**
   * Error Code.
   */
  errorCode: string
  /**
   * Error object.
   */
  error?: any
  /**
   * Creates an instance of JoseCryptoSubtleError.
   *
   * @constructor
   * @param [e] DOMException instance to wrap with JoseCryptoSubtleError.
   * @param [eMap] JoseCryptoSubtleErrorMap to rewrap error for better understanding.
   */
  constructor(e?: DOMException, eMap?: JoseCryptoSubtleErrorMap) {
    super()

    this.message = eMap?.message || e?.message || DEFAULT_ERROR_MSG
    this.statusCode = eMap?.statusCode || DEFAULT_ERROR_STATUS_CODE
    this.errorCode = eMap?.errorCode || e?.name || DEFAULT_ERROR_CODE
    this.error = e
  }
}
