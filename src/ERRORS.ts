import { JoseCryptoSubtleErrorMap } from './TYPES'

/** @ignore */
export const INVALID_PUBLIC_KEY_ERROR: JoseCryptoSubtleErrorMap = {
  message: "'publicKey' is Invalid",
  errorCode: 'JoseCryptoSubtle::INVALID_PUBLIC_KEY'
}

/** @ignore */
export const INVALID_CRYPTO_KEY_ERROR: JoseCryptoSubtleErrorMap = {
  message: "'cryptoKey' is Invalid",
  errorCode: 'JoseCryptoSubtle::INVALID_CRYPTO_KEY'
}

/** @ignore */
export const INVALID_GENERATE_AND_WRAP_KEY_PARAMS_ERROR: JoseCryptoSubtleErrorMap =
  {
    message: "'base64PublicKey' is mandatory",
    errorCode: 'JoseCryptoSubtle::INVALID_GENERATE_AND_WRAP_KEY_PARAMS'
  }

/** @ignore */
export const INVALID_ENCRYPT_DATA_PARAMS_ERROR: JoseCryptoSubtleErrorMap = {
  message: "Valid 'data' and 'key' are mandatory",
  errorCode: 'JoseCryptoSubtle::INVALID_GENERATE_AND_WRAP_KEY_PARAMS'
}

/** @ignore */
export const INVALID_DECRYPT_DATA_PARAMS_ERROR: JoseCryptoSubtleErrorMap = {
  message: "Valid 'payload' and 'key' are mandatory",
  errorCode: 'JoseCryptoSubtle::INVALID_GENERATE_AND_WRAP_KEY_PARAMS'
}
