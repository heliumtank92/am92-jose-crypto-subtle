import * as utils from './utils'
import { JoseCryptoKeyObj } from './TYPES'
import JoseCryptoSubtleError from './JoseCryptoSubtleError'
import {
  AES_ALGORITHM,
  AES_AUTH_TAG_LENGTH,
  AES_DATA_SEPARATOR,
  AES_IV_LENGTH,
  AES_KEY_GEN_PARAMS,
  AES_KEY_USAGE,
  RSA_KEY_IMPORT_FORMAT,
  RSA_KEY_IMPORT_PARAMS,
  RSA_KEY_USAGES,
  RSA_KEY_WRAP_FORMAT,
  RSA_KEY_WRAP_PARAMS
} from './CONSTANTS'
import {
  INVALID_GENERATE_AND_WRAP_KEY_PARAMS_ERROR,
  INVALID_ENCRYPT_DATA_PARAMS_ERROR,
  INVALID_DECRYPT_DATA_PARAMS_ERROR
} from './ERRORS'

const JoseCryptoSubtle = {
  generateAndWrapKey,
  encryptData,
  decryptData
}

export { JoseCryptoKeyObj } from './TYPES'
export { JoseCryptoSubtleError }
export default JoseCryptoSubtle

async function generateAndWrapKey(
  base64PublicKey: string
): Promise<JoseCryptoKeyObj> {
  // Validate Params
  _validateGenerateAndWrapKeyParams(base64PublicKey)

  // Generate AES Encryption Key
  const encryptionKey: CryptoKey = await window.crypto.subtle
    .generateKey(AES_KEY_GEN_PARAMS, true, AES_KEY_USAGE)
    .catch((error: DOMException) => {
      throw new JoseCryptoSubtleError(error)
    })

  // Import Public CryptoKey
  const publicKeyBuffer: ArrayBuffer = utils.base64ToBuffer(base64PublicKey)
  const puclicKey: CryptoKey = await window.crypto.subtle.importKey(
    RSA_KEY_IMPORT_FORMAT,
    publicKeyBuffer,
    RSA_KEY_IMPORT_PARAMS,
    true,
    RSA_KEY_USAGES
  )

  // Encrypt AES Encryption Key with RSA Public CryptoKey
  const encryptedEncryptionKeyBuffer: ArrayBuffer = await window.crypto.subtle
    .wrapKey(RSA_KEY_WRAP_FORMAT, encryptionKey, puclicKey, RSA_KEY_WRAP_PARAMS)
    .catch((error: DOMException) => {
      throw new JoseCryptoSubtleError(error)
    })
  const encryptedEncryptionKey: string = utils.bufferToBase64(
    encryptedEncryptionKeyBuffer
  )

  // Return JoseCryptoKeyObj
  const joseCryptoKeyObj: JoseCryptoKeyObj = {
    encryptionKey,
    encryptedEncryptionKey
  }
  return joseCryptoKeyObj
}

async function encryptData(data: any, key: CryptoKey): Promise<string> {
  // Validate Params
  _validateEncryptParams(data, key)

  // Build Encryption Params
  const ivBuffer: ArrayBuffer = window.crypto.getRandomValues(
    new Uint8Array(AES_IV_LENGTH)
  )
  const aesGcmParams: AesGcmParams = {
    name: AES_ALGORITHM,
    iv: ivBuffer,
    tagLength: AES_AUTH_TAG_LENGTH * 8
  }
  const stringifiedData: string =
    typeof data === 'string' ? data : JSON.stringify(data)
  const plainTextBuffer: ArrayBuffer = utils.utf8ToBuffer(stringifiedData)

  // Encrypt Data
  const encryptedBuffer = await window.crypto.subtle
    .encrypt(aesGcmParams, key, plainTextBuffer)
    .catch((error: DOMException) => {
      throw new JoseCryptoSubtleError(error)
    })

  // Split Cipher Text
  const cipherTextBuffer = encryptedBuffer.slice(
    0,
    encryptedBuffer.byteLength - AES_AUTH_TAG_LENGTH
  )

  // Split Auth Tag
  const authTagBuffer = encryptedBuffer.slice(
    encryptedBuffer.byteLength - AES_AUTH_TAG_LENGTH,
    encryptedBuffer.byteLength
  )

  // Build Payload Part Strings
  const ivString = utils.bufferToBase64(ivBuffer)
  const cipherTextString = utils.bufferToBase64(cipherTextBuffer)
  const authTagString = utils.bufferToBase64(authTagBuffer)

  // Build and Return payload
  const payload = [ivString, authTagString, cipherTextString].join(
    AES_DATA_SEPARATOR
  )
  return payload
}

async function decryptData(payload: string, key: CryptoKey): Promise<any> {
  // Validate Params
  _validateDecryptParams(payload, key)

  // Split Payload Part String
  const [ivString, authTagString, cipherTextString] =
    payload.split(AES_DATA_SEPARATOR)

  // Convert Payload Parts to Buffers
  const ivBuffer = utils.base64ToBuffer(ivString)
  const authTagBuffer = utils.base64ToBuffer(authTagString)
  const cipherTextBuffer = utils.base64ToBuffer(cipherTextString)

  // Build Encrypted Data Buffer
  const encryptedBuffer = utils.concatBuffers([cipherTextBuffer, authTagBuffer])

  // Build Decryption Params
  const aesGcmParams: AesGcmParams = {
    name: AES_ALGORITHM,
    iv: ivBuffer,
    tagLength: AES_AUTH_TAG_LENGTH * 8
  }

  // Decrypt Data
  const plainTextBuffer: ArrayBuffer = await window.crypto.subtle
    .decrypt(aesGcmParams, key, encryptedBuffer)
    .catch((error: DOMException) => {
      throw new JoseCryptoSubtleError(error)
    })

  // Convert Buffer to Original Data and Return
  const plainTextString = utils.bufferToUtf8(plainTextBuffer)
  const plainText = _parse(plainTextString)
  return plainText
}

function _validateGenerateAndWrapKeyParams(base64PublicKey: string): void {
  if (!base64PublicKey) {
    throw new JoseCryptoSubtleError(
      undefined,
      INVALID_GENERATE_AND_WRAP_KEY_PARAMS_ERROR
    )
  }
}

function _validateEncryptParams(data: any, key: CryptoKey): void {
  if (!data || !key) {
    throw new JoseCryptoSubtleError(
      undefined,
      INVALID_ENCRYPT_DATA_PARAMS_ERROR
    )
  }
}

function _validateDecryptParams(payload: string, key: CryptoKey): void {
  if (
    !payload ||
    typeof payload !== 'string' ||
    payload.split(AES_DATA_SEPARATOR).length !== 3 ||
    !key
  ) {
    throw new JoseCryptoSubtleError(
      undefined,
      INVALID_DECRYPT_DATA_PARAMS_ERROR
    )
  }
}

function _parse(string: string): any {
  try {
    return JSON.parse(string)
  } catch (error) {
    return string
  }
}
