'use client'

import { ChatPanel } from './chat-panel'
import { ChatMessages } from './chat-messages'

export function Chat() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%'
      }}
    >
      <ChatMessages />
      <ChatPanel />
    </div>
  )
}
