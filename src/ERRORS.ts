import { ErrorMap } from './TYPES'

export const INVALID_GENERATE_AND_WRAP_KEY_PARAMS_ERROR: ErrorMap = {
  message: "'base64PublicKey' is mandatory",
  errorCode: 'INVALID_GENERATE_AND_WRAP_KEY_PARAMS'
}

export const INVALID_ENCRYPT_DATA_PARAMS_ERROR: ErrorMap = {
  message: "Valid 'data' and 'key' are mandatory",
  errorCode: 'INVALID_GENERATE_AND_WRAP_KEY_PARAMS'
}

export const INVALID_DECRYPT_DATA_PARAMS_ERROR: ErrorMap = {
  message: "Valid 'payload' and 'key' are mandatory",
  errorCode: 'INVALID_GENERATE_AND_WRAP_KEY_PARAMS'
}
