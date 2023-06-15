import { JoseCryptoSubtleErrorMap } from './TYPES'

/** @ignore */
export const INVALID_GENERATE_AND_WRAP_KEY_PARAMS_ERROR: JoseCryptoSubtleErrorMap =
  {
    message: "'base64PublicKey' is mandatory",
    errorCode: 'INVALID_GENERATE_AND_WRAP_KEY_PARAMS'
  }

/** @ignore */
export const INVALID_ENCRYPT_DATA_PARAMS_ERROR: JoseCryptoSubtleErrorMap = {
  message: "Valid 'data' and 'key' are mandatory",
  errorCode: 'INVALID_GENERATE_AND_WRAP_KEY_PARAMS'
}

/** @ignore */
export const INVALID_DECRYPT_DATA_PARAMS_ERROR: JoseCryptoSubtleErrorMap = {
  message: "Valid 'payload' and 'key' are mandatory",
  errorCode: 'INVALID_GENERATE_AND_WRAP_KEY_PARAMS'
}
