'use client'

import { useState } from 'react'
import { Wallet, Copy, ExternalLink, AlertCircle, CheckCircle } from 'lucide-react'

interface CryptoPaymentProps {
  amount: number
  currency: 'USDT' | 'ETH' | 'BTC'
  recipientAddress: string
  onPaymentComplete: (txHash: string) => void
}

export function CryptoPayment({ amount, currency, recipientAddress, onPaymentComplete }: CryptoPaymentProps) {
  const [paymentStep, setPaymentStep] = useState<'connect' | 'confirm' | 'pending' | 'completed'>('connect')
  const [txHash, setTxHash] = useState('')
  const [walletConnected, setWalletConnected] = useState(false)

  const walletAddresses = {
    USDT: '0x1234567890123456789012345678901234567890',
    ETH: '0x1234567890123456789012345678901234567890',
    BTC: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh'
  }

  const networkInfo = {
    USDT: { network: 'Ethereum (ERC-20)', fee: '~$5-15' },
    ETH: { network: 'Ethereum Mainnet', fee: '~$5-15' },
    BTC: { network: 'Bitcoin Network', fee: '~$2-10' }
  }

  const copyAddress = () => {
    navigator.clipboard.writeText(walletAddresses[currency])
  }

  const connectWallet = () => {
    // Mock wallet connection
    setWalletConnected(true)
    setPaymentStep('confirm')
  }

  const confirmPayment = () => {
    setPaymentStep('pending')
    // Mock transaction processing
    setTimeout(() => {
      const mockTxHash = '0x' + Math.random().toString(16).substr(2, 64)
      setTxHash(mockTxHash)
      setPaymentStep('completed')
      onPaymentComplete(mockTxHash)
    }, 3000)
  }

  return (
    <div className="bg-card border border-border rounded-lg p-6 max-w-md mx-auto">
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-foreground mb-2">Crypto Payment</h3>
        <p className="text-2xl font-bold text-foreground">
          {amount} {currency}
        </p>
        <p className="text-sm text-muted-foreground">
          Network: {networkInfo[currency].network}
        </p>
      </div>

      {paymentStep === 'connect' && (
        <div className="space-y-4">
          <div className="bg-accent rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <AlertCircle className="h-4 w-4 text-orange-500" />
              <span className="text-sm font-medium">Payment Details</span>
            </div>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>Amount: {amount} {currency}</p>
              <p>Network Fee: {networkInfo[currency].fee}</p>
              <p>Total: ~{amount} {currency} + fees</p>
            </div>
          </div>

          <button
            onClick={connectWallet}
            className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2"
          >
            <Wallet className="h-5 w-5" />
            <span>Connect Wallet</span>
          </button>

          <div className="text-center">
            <p className="text-xs text-muted-foreground">
              Or send manually to the address below
            </p>
          </div>

          <div className="bg-accent rounded-lg p-4">
            <p className="text-sm font-medium text-foreground mb-2">Send {currency} to:</p>
            <div className="flex items-center space-x-2">
              <code className="flex-1 text-xs bg-background p-2 rounded border font-mono">
                {walletAddresses[currency]}
              </code>
              <button
                onClick={copyAddress}
                className="p-2 hover:bg-background rounded transition-colors"
              >
                <Copy className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {paymentStep === 'confirm' && (
        <div className="space-y-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span className="text-sm font-medium text-green-800">Wallet Connected</span>
            </div>
            <p className="text-sm text-green-700">Ready to send payment</p>
          </div>

          <div className="bg-accent rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Transaction Summary</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Amount:</span>
                <span className="font-medium">{amount} {currency}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Network Fee:</span>
                <span className="font-medium">{networkInfo[currency].fee}</span>
              </div>
              <div className="flex justify-between border-t border-border pt-2">
                <span className="text-muted-foreground">Recipient:</span>
                <span className="font-medium text-xs">{recipientAddress.slice(0, 10)}...</span>
              </div>
            </div>
          </div>

          <button
            onClick={confirmPayment}
            className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Confirm Payment
          </button>
        </div>
      )}

      {paymentStep === 'pending' && (
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <div>
            <p className="font-medium text-foreground">Processing Payment</p>
            <p className="text-sm text-muted-foreground">Please wait while we confirm your transaction...</p>
          </div>
        </div>
      )}

      {paymentStep === 'completed' && (
        <div className="text-center space-y-4">
          <div className="bg-green-100 rounded-full p-3 w-16 h-16 mx-auto flex items-center justify-center">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <div>
            <p className="font-medium text-foreground">Payment Successful!</p>
            <p className="text-sm text-muted-foreground mb-4">
              Your payment has been sent to escrow
            </p>
            <div className="bg-accent rounded-lg p-3">
              <p className="text-xs text-muted-foreground mb-1">Transaction Hash:</p>
              <div className="flex items-center space-x-2">
                <code className="text-xs font-mono bg-background p-1 rounded flex-1">
                  {txHash.slice(0, 20)}...
                </code>
                <button className="p-1 hover:bg-background rounded">
                  <ExternalLink className="h-3 w-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
