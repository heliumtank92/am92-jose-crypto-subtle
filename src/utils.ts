/**
 * Function to convert Base64 string to Buffer.
 *
 * @ignore
 * @param base64String Base64 string to be converted to Buffer.
 * @returns
 */
export function base64ToBuffer(base64String: string): ArrayBuffer {
  const utf8String = decodeURIComponent(encodeURI(atob(base64String)))
  const buffer = utf8ToBuffer(utf8String)
  return buffer
}

/**
 * Function to convert UTF8 string to Buffer.
 *
 * @ignore
 * @param utf8String UTF8 string to be converted to Buffer.
 * @returns
 */
export function utf8ToBuffer(utf8String: string): ArrayBuffer {
  const unescapedString = decodeURI(encodeURIComponent(utf8String)) // 2 bytes for each char
  const buffer = new Uint8Array(unescapedString.length)
  for (let i = 0; i < unescapedString.length; i++) {
    buffer[i] = unescapedString.charCodeAt(i)
  }
  return buffer.buffer
}

/**
 * Function to convert Buffer to Base64 string.
 *
 * @ignore
 * @param buffer Buffer to be converted to Base64 string.
 * @returns
 */
export function bufferToBase64(buffer: ArrayBuffer): string {
  const byteString = bufferToUtf8(buffer)
  return btoa(decodeURI(encodeURIComponent(byteString)))
}

/**
 * Function to convert Buffer to UTF8 string.
 *
 * @ignore
 * @param arrayBuffer Buffer to be converted to UTF8 string.
 * @returns
 */
export function bufferToUtf8(arrayBuffer: ArrayBuffer): string {
  const byteArray = new Uint8Array(arrayBuffer)
  let byteString = ''
  for (let i = 0; i < byteArray.byteLength; i++) {
    byteString += String.fromCharCode(byteArray[i])
  }
  return decodeURIComponent(encodeURI(byteString))
}

/**
 * Function to merge Buffers into a single Buffer.
 *
 * @ignore
 * @param arrayOfBuffers Array of Buffers to be merged.
 * @returns
 */
export function concatBuffers(arrayOfBuffers: ArrayBuffer[]): ArrayBuffer {
  const length = arrayOfBuffers.reduce(
    (length, buffer) => length + buffer.byteLength,
    0
  )
  const outputBuffer = new Uint8Array(length)
  let filledBufferStart = 0
  arrayOfBuffers.forEach(buffer => {
    outputBuffer.set(new Uint8Array(buffer), filledBufferStart)
    filledBufferStart = filledBufferStart + buffer.byteLength
  })
  return outputBuffer.buffer
}
