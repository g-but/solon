"use client";

import WalletConnector from "@/components/bitcoin/wallet-connector";

export default function VotingWalletConnector() {
  return (
    <WalletConnector onConnect={(pub) => {
      window.location.href = `/dashboard/voting?pub=${encodeURIComponent(pub)}`;
    }} />
  );
}
