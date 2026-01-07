// Minimal BTCPay client stub for Solon MVP
export class BTCPayClient {
  async createOrganizationWallet(orgId: string) {
    // Stub: In production, call BTCPay API to create a wallet (multi-sig)
    return { walletId: `wallet_${orgId}`, multisig: true };
  }

  async getWalletBalance(walletId: string) {
    // Stub: Replace with real RPC; return sats
    return { walletId, balance_sats: 12_345_678 };
  }

  async createPaymentRequest(amount: number, description: string) {
    // Stub: Return a fake invoice ID / address
    return { invoiceId: `inv_${Date.now()}`, amount_sats: amount, description };
  }

  async trackTransaction(txid: string) {
    // Stub: return a pretend confirmation height
    return { txid, confirmations: 2 };
  }
}

