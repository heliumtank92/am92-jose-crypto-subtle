export const AES_ALGORITHM = 'AES-GCM'
export const AES_KEY_GEN_PARAMS: AesKeyGenParams = {
  name: AES_ALGORITHM,
  length: 256
}
export const AES_KEY_USAGE: KeyUsage[] = ['encrypt', 'decrypt']
export const AES_IV_LENGTH = 16
export const AES_AUTH_TAG_LENGTH = 16
export const AES_DATA_SEPARATOR = '.'

export const RSA_ALGORITHM = 'RSA-OAEP'
export const RSA_KEY_IMPORT_FORMAT: Exclude<KeyFormat, 'jwk'> = 'spki'
export const RSA_KEY_IMPORT_PARAMS: RsaHashedImportParams = {
  name: RSA_ALGORITHM,
  hash: 'SHA-256'
}
export const RSA_KEY_USAGES: KeyUsage[] = ['wrapKey']
export const RSA_KEY_WRAP_FORMAT: KeyFormat = 'raw'
export const RSA_KEY_WRAP_PARAMS: RsaOaepParams = {
  name: RSA_ALGORITHM
}
