/* eslint-disable max-len */
const crypto = require('node:crypto');
const { AES_DB_KEY, AES_DB_IV, AES_REQ_RES_IV, AES_REQ_RES_KEY, ONE_WALLET_IV, ONE_WALLET_KEY, 
  DB_ENCRYPTION_ALGORITHM,
  RESPONSE_ENCRYPTION_ALGORITHM,
  ONE_WALLET_ALGORITHM } = require('../config');

const AES_DB_ENCRYPTION_KEY = Buffer.from(AES_DB_KEY, 'base64');

/**
 * Decrypts a string using the AES algorithm.
 *
 * @param {String} encryptedText the cipherText to be decrypted
 */
const decryptDB = (encryptedText) => {
  const iv = Buffer.from(AES_DB_IV, 'binary');

  const decipher = crypto.createDecipheriv(
    DB_ENCRYPTION_ALGORITHM,
    Buffer.from(AES_DB_ENCRYPTION_KEY, 'hex'),
    iv
  );
  if (encryptedText) {
    let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  }
  return null;
};

const decryptRequest = async (encrypted) => {
	try {
		const iv = Buffer.alloc(16, AES_REQ_RES_IV);
		const key = AES_REQ_RES_KEY;

		let decipher = crypto.createDecipheriv(RESPONSE_ENCRYPTION_ALGORITHM, key, iv);
		let dec = decipher.update(encrypted, 'hex', 'utf8');
		dec += decipher.final('utf8');
		return dec;
	} catch (error) {
		throw error;
	}
};

const AESDecrypt = async (encrypted) => {
  try {
    if(!encrypted) return;
    const iv = Buffer.alloc(16, ONE_WALLET_IV);

    let decipher = crypto.createDecipheriv(ONE_WALLET_ALGORITHM, ONE_WALLET_KEY, iv);
    let dec = decipher.update(encrypted, 'hex', 'utf8');
    dec += decipher.final('utf8');
    return dec;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  decryptDB,
  decryptRequest,
  AESDecrypt
};
