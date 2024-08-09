import { useUIState } from 'ai/rsc'
import type { AI } from '@/app/action'
import React from 'react'

export function ChatMessages() {
  const [messages, setMessages] = useUIState<typeof AI>()
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth <= 767)
    }
  }, [])

  return (
    <div
      style={{
        width: '100%',
        paddingTop: isMobile ? '0px' : !!messages?.length ? '40px' : '0px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '672px',
          paddingLeft: isMobile ? '30px' : '0px',
          paddingRight: isMobile ? '30px' : '0px',
          position: 'initial',
          zIndex: 10,
          paddingBottom: !!messages?.length ? '105px' : '0px'
        }}
      >
        {messages.map((message: { id: number; component: React.ReactNode }) => (
          <div key={message.id}>{message.component}</div>
        ))}
      </div>
    </div>
  )
}
