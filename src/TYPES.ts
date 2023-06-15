/**
 * Type defination for the keys returned from generateAndWrapKey function
 *
 * @typedef {JoseCryptoKeyObj}
 */
export type JoseCryptoKeyObj = {
  encryptionKey: CryptoKey
  encryptedEncryptionKey: string
}

/**
 * Type defination for error map to be passed to JoseCryptoSubtleError.
 *
 * @typedef {JoseCryptoSubtleErrorMap}
 */
export type JoseCryptoSubtleErrorMap = {
  message: string
  errorCode: string
  statusCode?: number
}
