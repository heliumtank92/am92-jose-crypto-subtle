export default JoseCryptoSubtle;
declare namespace JoseCryptoSubtle {
    export { generateAndWrapKey };
    export { encryptData };
    export { decryptData };
}
declare function generateAndWrapKey(publicKey?: string): Promise<{
    encryptionKey: CryptoKeyPair & CryptoKey;
    encryptedEncryptionKey: string;
}>;
declare function encryptData(data: any, key: any): Promise<string>;
declare function decryptData(payload: any, key: any): Promise<any>;
