export namespace RSA_CONSTANTS {
    const ALGORITHM: string;
    const KEY_IMPORT_FORMAT: string;
    const KEY_WRAP_FORMAT: string;
    const KEY_FORMAT: string;
    const PLAIN_TEXT_FORMAT: string;
    const CIPHER_TEXT_FORMAT: string;
    namespace KEY_OPTIONS {
        const modulusLength: number;
        const hash: string;
    }
    const KEY_USAGE: string[];
}
export namespace AES_256_GCM_CONSTANTS {
    const ALGORITHM_1: string;
    export { ALGORITHM_1 as ALGORITHM };
    const KEY_USAGE_1: string[];
    export { KEY_USAGE_1 as KEY_USAGE };
    export { AES_256_GCM_KEY_LENGTH as KEY_LENGTH };
    export { AES_256_GCM_KEY_BIT_LENGTH as KEY_BIT_LENGTH };
    export { AES_256_GCM_KEY_STRING_LENGTH as KEY_STRING_LENGTH };
    export const IV_FORMAT: string;
    export const IV_LENGTH: number;
    const PLAIN_TEXT_FORMAT_1: string;
    export { PLAIN_TEXT_FORMAT_1 as PLAIN_TEXT_FORMAT };
    const CIPHER_TEXT_FORMAT_1: string;
    export { CIPHER_TEXT_FORMAT_1 as CIPHER_TEXT_FORMAT };
    export const AUTH_TAG_LENGTH: number;
    export const DATA_SEPARATOR: string;
}
declare const AES_256_GCM_KEY_LENGTH: 32;
declare const AES_256_GCM_KEY_BIT_LENGTH: number;
declare const AES_256_GCM_KEY_STRING_LENGTH: number;
export {};
