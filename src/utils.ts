export function base64ToBuffer(base64String: string): ArrayBuffer {
  const utf8String = atob(base64String)
  const buffer = new Uint8Array(utf8String.length)
  for (let i = 0; i < utf8String.length; i++) {
    buffer[i] = utf8String.charCodeAt(i)
  }
  return buffer.buffer
}

export function utf8ToBuffer(utf8String: string): ArrayBuffer {
  const unescapedString = unescape(encodeURIComponent(utf8String)) // 2 bytes for each char
  const buffer = new Uint8Array(unescapedString.length)
  for (let i = 0; i < unescapedString.length; i++) {
    buffer[i] = unescapedString.charCodeAt(i)
  }
  return buffer.buffer
}

export function bufferToBase64(buffer: ArrayBuffer): string {
  const byteArray = new Uint8Array(buffer)
  let byteString = ''
  for (let i = 0; i < byteArray.byteLength; i++) {
    byteString += String.fromCharCode(byteArray[i])
  }
  return btoa(byteString)
}

export function bufferToUtf8(arrayBuffer: ArrayBuffer): string {
  const byteArray = new Uint8Array(arrayBuffer)
  let byteString = ''
  for (let i = 0; i < byteArray.byteLength; i++) {
    byteString += String.fromCharCode(byteArray[i])
  }
  return byteString
}

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
