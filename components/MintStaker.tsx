import * as React from 'react'
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from 'wagmi'
import { ethers } from "ethers";

export function MintStaker() {
  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    address: '0xc3ddb818e61e1b66bee71fd5df7eb33fc729b1f0',
    abi: [
      {
        name: 'mint',
        type: 'function',
        stateMutability: 'payable',
        inputs: [],
        outputs: [],
      },
    ],
    functionName: 'mint',
    overrides: {
      value: ethers.utils.parseEther('0.00042'),
    },
  })
  const { data, error, isError, write } = useContractWrite(config)

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  })

  return (
    <div>
      <div>
      Supply cap: 4883
      </div>
      <div>
      Price: 0.00042 ETH
      </div>
      <button disabled={!write || isLoading} onClick={() => write?.()}>
        {isLoading ? 'Minting...' : 'Mint'}
      </button>
      {isSuccess && (
        <div>
          Successfully minted your NFT!
          <div>
            <a href={`https://optimistic.etherscan.io/tx/${data?.hash}`}>view on Etherscan</a>
          </div>
        </div>
      )}
      {(isPrepareError || isError) && (
        <div>Error: {(prepareError || error)?.message}</div>
      )}
    </div>
  )
}
