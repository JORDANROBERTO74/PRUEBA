import React from 'react'
import InferenceChatIcon from '@/components/common/icons/InferenceChatIcon'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import { ArchiveIcon, Pencil, ShareIcon, Trash2Icon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import InferenceChatIconActive from '@/components/common/icons/InferenceChatIconActive'
import { cn } from '@/lib/utils'
import { upperFirst } from 'lodash'

interface PropsType {
  chat: any
  setIsDropdownOpen: (isDropdownOpen: boolean) => void
  isActive: boolean
  path: string
}

const ChatInference = ({
  chat,
  setIsDropdownOpen,
  isActive,
  path
}: PropsType) => {
  const router = useRouter()

  return (
    <div
      onClick={() => router.push(path)}
      className={cn(
        `flex gap-2 py-1 px-3 w-[196px] justify-between items-center rounded-md text-sm ${
          isActive ? 'text-black bg-accent border' : 'text-gray-700'
        } cursor-pointer hover:bg-primary/5`
      )}
    >
      <div className="flex gap-2">
        <div className="flex items-center">
          {isActive ? (
            <InferenceChatIconActive width="12px" hight="12px" />
          ) : (
            <InferenceChatIcon width="12px" hight="12px" />
          )}
        </div>
        <div
          style={{
            fontWeight: 500,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            WebkitBoxOrient: 'vertical',
            display: '-webkit-box',
            WebkitLineClamp: 1
          }}
        >
          {upperFirst(chat?.name)}
        </div>
      </div>
      <div>
        <DropdownMenu onOpenChange={setIsDropdownOpen}>
          <DropdownMenuTrigger className="flex" asChild>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 rounded-full"
            >
              <DotsHorizontalIcon className="h-4 w-6" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="right" align="start">
            <DropdownMenuItem className="flex gap-2 items-center cursor-pointer">
              <div className="text-muted-foreground">
                <ShareIcon width={'15px'} />
              </div>
              <div>Share</div>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex gap-2 items-center cursor-pointer">
              <div className="text-muted-foreground">
                <Pencil width={'15px'} />
              </div>
              <div>Rename</div>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex gap-2 items-center cursor-pointer">
              <div className="text-muted-foreground">
                <ArchiveIcon width={'15px'} />
              </div>
              <div>File</div>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex gap-2 items-center cursor-pointer">
              <div className="text-destructive">
                <Trash2Icon width={'15px'} />
              </div>
              <div className="text-destructive">Eliminate</div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

export default ChatInference
