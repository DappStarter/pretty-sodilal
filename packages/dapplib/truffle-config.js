require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty fringe trophy name rifle rural minor hockey arena army gauge'; 
let testAccounts = [
"0xeb687ea174bb7f2415f91bfd2497e1c2ca258ddd42b2c4be9eadca26977ebe23",
"0x8e16336715f75619dfaccfea6320c49407f8885a221e83665ad4e163ce5f8d20",
"0xbeb555bfec4dd1deb3726c4ef5924a68d9a23eabc5b6b52228e7674854312d8d",
"0x655db0f2846b2a3b30ba5f221be035ed5573c0f94b36926ecf577cd86d6881a6",
"0x13383cec61ca55e373b54f33ccd8980300b45859ac3a1720d953cffa6f56d162",
"0x71862655860fda0628d45e338e0a5b912fd913487f33d288cc8a5714df466188",
"0x7d9d87326c486f74025ddc288ea3ecaf9242b0676d8a214ee95b52696790d210",
"0x852297eb31b19abe17f6667099278753e8e95ed1adcad3d10ed671c0c42859fb",
"0x127099e60e1c9fca124c7898363e66de4c9dd70d9b1c2f05c48f5ba3681e2ed2",
"0x2f2534c9f29b9eac0d42920758da0ce8c17606caba72ce3cde213a4c51efaf0f"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
