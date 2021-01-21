const WanProvider = require('wanchain-truffle-sdk').WanProvider;
const Web3 = require('web3');

const privateKey = 'a9c3ac742eac849a07dbe67baefe5277c21b8d93563a9296ee104f15c9af67e5';

const fromAddress = '0x1425338fb3fd3263c19d29fadecd784c558a15bc';

const toAddress = '0x1425338fb3fd3263c19d29fadecd784c558a15bc';

const value = '0x' + (1e18).toString(16);

// Wanchain **Testnet** RPC server, please replace to mainnet when you use.
const rpcUrl = 'https://gwan-ssl.wandevs.org:46891';


const wanProvider = new WanProvider(privateKey, rpcUrl);

const web3 = new Web3(wanProvider);

web3.eth.sendTransaction({from: fromAddress, to: toAddress, value: value}).then(v=>{
    console.log('success', v);
}).catch(err=>{
    console.log('error', err);
});

