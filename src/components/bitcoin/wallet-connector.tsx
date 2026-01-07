"use client";
import { useState } from "react";

export default function WalletConnector({ onConnect }: { onConnect: (pubKey: string) => void }) {
  const [pub, setPub] = useState("");
  return (
    <div className="flex gap-2">
      <input
        placeholder="Enter demo public key"
        value={pub}
        onChange={(e) => setPub(e.target.value)}
        className="px-3 py-2 rounded-md bg-black/20 border border-white/10 w-72"
      />
      <button className="btn-primary" onClick={() => onConnect(pub)}>Connect</button>
    </div>
  );
}

