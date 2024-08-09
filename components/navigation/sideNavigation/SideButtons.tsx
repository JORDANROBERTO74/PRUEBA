'use client'

import React from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { usePathname, useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'
import { inferenceData } from '@/app/simulatedData/inferenceData'
import ChatInference from './chatInference'
import { ScrollArea } from '@/components/ui/scroll-area'
import { CHAT, INFERENCE } from '../constants'

interface PropsType {
  item: {
    title: string
    id: string
    path: string
    icon: JSX.Element
    activeIcon: JSX.Element
  }
  isCollapse: boolean
}

const SideButtons = ({ item, isCollapse }: PropsType) => {
  const arrayPath = usePathname().split('/')
  const currentPath = usePathname().split('/')[1]
  const router = useRouter()
  const [isInferenceOpen, setIsInferenceOpen] = React.useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false)

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        transition: 'all 0.5s ease'
      }}
    >
      {isCollapse ? (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div
                onClick={() => router.push(item?.path)}
                style={{
                  display: 'flex',
                  height: '40px',
                  borderRadius: '7px',
                  alignItems: 'center',
                  transition: 'all 0.1s ease',
                  justifyContent: isCollapse ? 'center' : 'flex-start',
                  paddingLeft: '10px',
                  paddingRight: '10px',
                  cursor: 'pointer'
                }}
                className={cn(
                  `${
                    currentPath === item?.path.split('/')[1]
                      ? 'text-black'
                      : 'text-gray-700'
                  } hover:bg-primary/5`
                )}
              >
                <div
                  style={{
                    transition: '0.1s',
                    display: 'flex',
                    scale: 1.1
                  }}
                >
                  {currentPath === item?.path.split('/')[1]
                    ? item?.activeIcon
                    : item?.icon}
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>{item?.title}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ) : (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'center'
          }}
        >
          <div
            onClick={() => router.push(item?.path)}
            onMouseEnter={() =>
              item?.id === 'inference' && setIsInferenceOpen(true)
            }
            onMouseLeave={() =>
              item?.id === 'inference' && setIsInferenceOpen(false)
            }
            style={{
              display: 'flex',
              height: '40px',
              width: '90%',
              borderRadius: '7px',
              alignItems: 'center',
              transition: 'all 0.1s ease',
              justifyContent: isCollapse ? 'center' : 'flex-start',
              paddingLeft: '10px',
              paddingRight: '10px',
              cursor: 'pointer'
            }}
            className={cn(
              `${
                currentPath === item?.path.split('/')[1]
                  ? 'text-black'
                  : 'text-gray-700'
              } hover:bg-primary/5`
            )}
          >
            <div
              style={{
                transition: '0.1s',
                display: 'flex',
                scale: 0.9
              }}
            >
              {currentPath === item?.path.split('/')[1]
                ? item?.activeIcon
                : item?.icon}
            </div>
            <span
              style={{
                whiteSpace: 'nowrap',
                pointerEvents: 'none',
                transition: '0.1s',
                marginLeft: '2px'
              }}
            >
              {item?.title}
            </span>
          </div>
          {(isInferenceOpen || isDropdownOpen || currentPath === INFERENCE) &&
            item?.id === 'inference' && (
              <ScrollArea
                className="w-full h-[160px] pl-3 pr-3"
                onMouseEnter={() => setIsInferenceOpen(true)}
                onMouseLeave={() => setIsInferenceOpen(false)}
              >
                {inferenceData?.map((obj, index) => {
                  const isActive =
                    item?.id === INFERENCE &&
                    arrayPath[2] === CHAT &&
                    arrayPath[3] === obj?.id
                  const path = `${item?.path}/${CHAT}/${obj?.id}`
                  return (
                    <ChatInference
                      key={index}
                      chat={obj}
                      setIsDropdownOpen={setIsDropdownOpen}
                      isActive={isActive}
                      path={path}
                    />
                  )
                })}
              </ScrollArea>
            )}
        </div>
      )}
    </div>
  )
}
export default SideButtons
