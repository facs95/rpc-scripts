import { ethers } from "ethers";
import { NODE_URL } from "./constants";

const FILTER_ID = "0x17661e85f4f19d4aeed909b535780cd4"
const callFilters = async () => {
  const provider = new ethers.providers.JsonRpcProvider(NODE_URL)
  const logs = await provider.send("eth_getFilterChanges", [FILTER_ID])
  console.log(logs)
}

callFilters()



