require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom knife frame security iron response still grant gesture desert force there'; 
let testAccounts = [
"0x38f74c8514f3b9206964faa1406dfdb11770005a1a1690c0628b3bf5b15d4b38",
"0x48af4624d01065a9e8e9106baee6c9e288db59a7c0bc3577a342832fa971a907",
"0x6639e8c1d271684a69ee811bfff924027e9ef8dbd486b4a395caff330f1bb5c7",
"0x2344016c56936769752d9faf834483560b349e937844d1e09648bec12b3a153b",
"0xdf3888b4784bd9b9eb46261de71bd34719ce4cecca78b5222092151fef056734",
"0xb3581c6648d5a917d3a3c07e3a2766ec2db3d7005d36136f8b069fd5db180fde",
"0x8f198f019399f37b116d944cb71e8bf7bb5f8508824393357d8127f858eb37e5",
"0xd2de9cb6ba3b7956d8961633aa55989061ac8fdeb958d4fa17bf0ec22299db90",
"0xc7814ef04beb575d08317d5e8b3d46568354b91ecee64a35d602b188e40dc4f9",
"0x93853506550a82d1b6228607589b5941a3381428d3a373262970fa6bd75a773c"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


