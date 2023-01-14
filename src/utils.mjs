export function toBuffer (string = '', from = 'base64') {
  switch (from) {
    case 'base64': return _base64ToArrayBuffer(string)
    case 'utf8': return _utf8toArrayBuffer(string)
  }
}

export function toString (buffer, to = 'base64') {
  switch (to) {
    case 'base64': return _arrayBufferToBase64String(buffer)
    case 'utf8': return _arrayBufferToText(buffer)
  }
}

export function concatBuffer (bufferArray = []) {
  const length = bufferArray.reduce((length, buffer) => length + buffer.byteLength, 0)
  const outputBuffer = new Uint8Array(length)
  let filledBufferStart = 0
  bufferArray.forEach((buffer) => {
    outputBuffer.set(new Uint8Array(buffer), filledBufferStart)
    filledBufferStart = filledBufferStart + buffer.byteLength
  })
  return outputBuffer.buffer
}

function _base64ToArrayBuffer (string) {
  const utf8String = atob(string)
  const buffer = new Uint8Array(utf8String.length)
  for (let i = 0; i < utf8String.length; i++) {
    buffer[i] = utf8String.charCodeAt(i)
  }
  return buffer.buffer
}

function _utf8toArrayBuffer (string) {
  const unescapedString = unescape(encodeURIComponent(string)) // 2 bytes for each char
  const buffer = new Uint8Array(unescapedString.length)
  for (let i = 0; i < unescapedString.length; i++) {
    buffer[i] = unescapedString.charCodeAt(i)
  }
  return buffer.buffer
}

function _arrayBufferToBase64String (arrayBuffer) {
  const byteArray = new Uint8Array(arrayBuffer)
  let byteString = ''
  for (let i = 0; i < byteArray.byteLength; i++) {
    byteString += String.fromCharCode(byteArray[i])
  }
  return btoa(byteString)
}

function _arrayBufferToText (arrayBuffer) {
  const byteArray = new Uint8Array(arrayBuffer)
  let byteString = ''
  for (let i = 0; i < byteArray.byteLength; i++) {
    byteString += String.fromCharCode(byteArray[i])
  }
  return byteString
}
