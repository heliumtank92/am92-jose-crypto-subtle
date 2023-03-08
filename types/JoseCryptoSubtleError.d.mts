export default class JoseCryptoSubtleError extends Error {
    constructor(e: {}, eMap: any);
    _isCustomError: boolean;
    _isJoseCryptoError: boolean;
    message: any;
    statusCode: any;
    errorCode: any;
    error: {};
}
