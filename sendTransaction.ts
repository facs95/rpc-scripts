import Web3 from "web3"
import { TransactionConfig } from "web3-eth"
import { NODE_URL, ACCOUNT_1, ADDRESS_2 } from "./constants"

const sendTransaction = async () => {
  const web3 = new Web3(NODE_URL)
  const transactionConfig: TransactionConfig = {
    from: ACCOUNT_1.address,
    value: "1000000000000000000",
    to: ADDRESS_2
  }
  console.log("Sending Transaction...")
  const response = await web3.eth.sendTransaction(transactionConfig)
  console.dir(response)
}

sendTransaction()
