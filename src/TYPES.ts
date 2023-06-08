export type JoseCryptoKeyObj = {
  encryptionKey: CryptoKey
  encryptedEncryptionKey: string
}

export type ErrorMap = {
  message: string
  errorCode: string
  statusCode?: number
}
