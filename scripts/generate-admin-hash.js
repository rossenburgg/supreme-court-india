const crypto = require('crypto');

const password = 'Rossenburg909090@@@';
const salt = crypto.randomBytes(32).toString('hex');
const pepper = crypto.randomBytes(32).toString('hex');

const hash = crypto.createHash('sha256')
  .update(password + salt + pepper)
  .digest('hex');

console.log('Add these to your .env.local:');
console.log(`ADMIN_PASSWORD_SALT=${salt}`);
console.log(`ADMIN_PASSWORD_PEPPER=${pepper}`);
console.log(`ADMIN_PASSWORD_HASH=${hash}`);
