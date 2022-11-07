import { ethers } from "ethers";
import { NODE_URL } from "./constants";


const filter: ethers.providers.Filter = {
  topics: [
    '0xbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b',
    '0x0000000000000000000000003bf5b9b163662dff052e5e5b632b0dbb9a1a66be'
  ]
}

const createFilter = async () => {
  const provider = new ethers.providers.JsonRpcProvider(NODE_URL)
  const filterId = await provider.send("eth_newFilter", [filter]);
  console.log("Filter ID: ", filterId);

  // const logs = await provider.send("eth_getFilterChanges", [filterId])
  // console.log(logs)
}

createFilter()


