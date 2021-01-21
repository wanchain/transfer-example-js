const WanProvider = require('wanchain-truffle-sdk').WanProvider;
const Web3 = require('web3');

const mnemonic = 'tray cake drill legal crane wife ridge neither lamp romance price ancient';

const fromAddress = '0x51be6ec4a23f4093942fa8e748c64d9b5e8636c9';

const toAddress = '0x51be6ec4a23f4093942fa8e748c64d9b5e8636c9';

const value = '0x' + (1e18).toString(16);

// Wanchain **Testnet** RPC server, please replace to mainnet when you use.
const rpcUrl = 'https://gwan-ssl.wandevs.org:46891';

const wanProvider = new WanProvider(mnemonic, rpcUrl);

const web3 = new Web3(wanProvider);

web3.eth.sendTransaction({from: fromAddress, to: toAddress, value: value}).then(v=>{
    console.log('success', v);
}).catch(err=>{
    console.log('error', err);
});

