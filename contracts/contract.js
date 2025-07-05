const web3 = require("@solana/web3.js");

(async () => {
    const connection = new web3.Connection("https://rpc.testnet.carv.io/rpc", "yes");

    const payerPubKey = new web3.PublicKey("xxx");

    try {
        const balance = await connection.getBalance(payerPubKey);
        console.log("Payer Balance:", balance / web3.LAMPORTS_PER_SOL, "SOL");
    } catch (e) {
        console.error("Error fetching balance:", e);
    }
})();