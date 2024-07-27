// app/components/EthereumBalance.tsx
import React, { useEffect, useState } from "react";
import { useAccount, useBalance, useConnect, useDisconnect } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

interface EthereumBalanceType {
  setShowError: React.Dispatch<React.SetStateAction<boolean>>;
}
const EthereumBalance: React.FC<EthereumBalanceType> = ({ setShowError }) => {
  const { address, isConnected } = useAccount();
  const { connect, connectors, error } = useConnect();
  const { disconnect } = useDisconnect();

  // hard coded this. for checking for your wallet address simply replace remove the address.
  const { data, isError, isLoading } = useBalance({
    address: "0x44F5E883c11Dea274759Dc33815ee6000adff658",
    chainId: sepolia.id,
  });
  useEffect(() => {
    if (error) {
      setShowError(true);
    }
  }, [error, isError]);

  return (
    <div className="card p-4 mt-4 w-100 rounded-3 shadow-sm animate-card position-relative">
      {!isConnected ? (
        <>
          <h5 className="mb-3">Connect to Ethereum Wallet</h5>
          {connectors.map((connector) => (
            <button
              key={connector.id}
              onClick={() => connect({ connector })}
              className="btn btn-primary w-100 mb-2"
            >
              Connect with {connector.name}
            </button>
          ))}
        </>
      ) : (
        <>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="mb-0">Ethereum Wallet Balance</h5>
            <button onClick={() => disconnect()} className="btn btn-danger">
              <FontAwesomeIcon icon={faSignOutAlt} />
            </button>
          </div>
          <div className="text-center mb-3">
            <FontAwesomeIcon
              icon={faWallet}
              size="2x"
              className="mb-2 text-primary"
            />
            <p className="mb-1">Address: {address}</p>
            {isLoading && <div>Loading balance...</div>}

            {data && (
              <p className="h4">
                Balance: {parseFloat(data.formatted).toFixed(6)} ETH
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default EthereumBalance;
