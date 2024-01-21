'use client'

import { useModal, ConnectKitButton} from 'connectkit'
import { useAccount, useDisconnect } from 'wagmi'


export default function Home() {
  const { isConnected, address, isConnecting } = useAccount()
  const { setOpen } = useModal()
  const { disconnect } = useDisconnect()
  if (isConnecting) return <div>Connecting...</div>
  
  
  
  
  return (
    
    <div className="flex min-h-screen flex-col items-center bg-primary justify-center ">

<ConnectKitButton />

    </div>
    
  )
}