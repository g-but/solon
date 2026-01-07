import type { Vote } from "@/lib/solon/types";

export default function SignatureValidator({ vote }: { vote: Vote }) {
  return (
    <div className="text-xs text-gray-400 font-mono break-all">
      Signature: {vote.bitcoin_signature}
    </div>
  );
}

