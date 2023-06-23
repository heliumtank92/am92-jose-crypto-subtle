/** @ignore */
export const AES_ALGORITHM = 'AES-GCM'
/** @ignore */
export const AES_KEY_IMPORT_FORMAT: Exclude<KeyFormat, 'jwk'> = 'raw'
/** @ignore */
export const AES_KEY_EXPORT_FORMAT: Exclude<KeyFormat, 'jwk'> = 'raw'
/** @ignore */
export const AES_KEY_GEN_PARAMS: AesKeyGenParams = {
  name: AES_ALGORITHM,
  length: 256
}
/** @ignore */
export const AES_KEY_USAGE: KeyUsage[] = ['encrypt', 'decrypt']
/** @ignore */
export const AES_IV_LENGTH = 16
/** @ignore */
export const AES_AUTH_TAG_LENGTH = 16
/** @ignore */
export const AES_DATA_SEPARATOR = '.'

/** @ignore */
export const RSA_ALGORITHM = 'RSA-OAEP'
/** @ignore */
export const RSA_KEY_IMPORT_FORMAT: Exclude<KeyFormat, 'jwk'> = 'spki'
/** @ignore */
export const RSA_KEY_IMPORT_PARAMS: RsaHashedImportParams = {
  name: RSA_ALGORITHM,
  hash: 'SHA-256'
}
/** @ignore */
export const RSA_KEY_USAGES: KeyUsage[] = ['wrapKey']
/** @ignore */
export const RSA_KEY_WRAP_FORMAT: KeyFormat = 'raw'
/** @ignore */
export const RSA_KEY_WRAP_PARAMS: RsaOaepParams = {
  name: RSA_ALGORITHM
}
