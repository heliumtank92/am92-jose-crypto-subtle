export type JoseCryptoKeyObj = {
  encryptionKey: CryptoKey
  encryptedEncryptionKey: string
}

export type JoseCryptoSubtleErrorMap = {
  message: string
  errorCode: string
  statusCode?: number
}
