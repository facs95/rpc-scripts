import { ethers } from "ethers";
import { NODE_URL } from "./constants";


const filter: ethers.providers.Filter = {
  fromBlock: "0x26",
  toBlock: "latest",
  topics: [
    '0xbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b',
    '0x0000000000000000000000003bf5b9b163662dff052e5e5b632b0dbb9a1a66be'
  ]
}

const callFilters = async () => {
  const provider = new ethers.providers.JsonRpcProvider(NODE_URL)
  const logs = await provider.getLogs(filter)
  console.dir(logs)
}

callFilters()



