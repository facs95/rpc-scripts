import Web3 from "web3"
import { TransactionConfig } from "web3-eth"
import { NODE_URL, ACCOUNT_1, METAMASK_ADDRESS } from "./constants";


const web3 = new Web3(NODE_URL)

const sendRawTransaction = async () => {
  console.log(`Attempting to send transaction from ${ACCOUNT_1.address} to ${METAMASK_ADDRESS}`);

  console.log("Gettings transaction count...")
  const nonce = await web3.eth.getTransactionCount(ACCOUNT_1.address)

  const transactionConfig: TransactionConfig = {
    from: ACCOUNT_1.address,
    value: web3.utils.toWei("10", "ether"),
    to: METAMASK_ADDRESS,
    nonce,
  }

  console.log("Estimating gas...")
  const estimateGas = await web3.eth.estimateGas(transactionConfig)
  transactionConfig.gas = estimateGas

  console.log("Signing transaction...")
  const signedTransaction = await web3.eth.accounts.signTransaction(transactionConfig, ACCOUNT_1.privateKey)

  if (!signedTransaction.rawTransaction) {
    console.error("unable to sign transaction")
    return
  }

  console.log("Sending Transaction...")
  const response = await web3.eth.sendSignedTransaction(signedTransaction.rawTransaction)
  console.dir(response)
}

sendRawTransaction()

