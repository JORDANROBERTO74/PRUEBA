'use client'

import { CollapseContext } from '@/components/context'
import React from 'react'
import LogoInitial from '../../common/Logo/LogoInitial.png'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'
import CollapseIcon from '@/components/common/icons/CollapseIcon'
import { Plus } from 'lucide-react'
import HomeIcon from '@/components/common/icons/HomeIcon'
import StorageIcon from '@/components/common/icons/StorageIcon'
import StorageIconActive from '@/components/common/icons/StorageIconActive'
import DashboardIcon from '@/components/common/icons/DashboardIcon'
import InferenceIcon from '@/components/common/icons/InferenceIcon'
import InferenceIconActive from '@/components/common/icons/InferenceIconActive'
import DashboardIconActive from '@/components/common/icons/DashboardIconActive'
import { Separator } from '@/components/ui/separator'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import SettingIcon from '@/components/common/icons/SettingIcon'
import PhoneIcon from '@/components/common/icons/PhoneIcon'
import TwitterIcon from '@/components/common/icons/TwitterIcon'
import DiscordIcon from '@/components/common/icons/DiscordIcon'
import SideButtons from './SideButtons'
import SourcesIcon from '@/components/common/icons/SourcesIcon'
import SourcesIconActive from '@/components/common/icons/SourcesIconActive'
import { DASHBOARD, STORAGE, INFERENCE, SOURCES } from '../constants'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const navItems = [
  {
    title: 'Home',
    id: 'home',
    path: `/`,
    icon: <HomeIcon width={'24px'} height={'24px'} />,
    activeIcon: <HomeIcon width={'24px'} height={'24px'} />
  },
  {
    title: 'Dashboard',
    id: 'dashboard',
    path: `/${DASHBOARD}`,
    icon: <DashboardIcon width={'24px'} height={'24px'} />,
    activeIcon: <DashboardIconActive width={'24px'} height={'24px'} />
  },
  {
    title: 'Sources',
    id: 'sources',
    path: `/${SOURCES}`,
    icon: <SourcesIcon width={'24px'} height={'24px'} />,
    activeIcon: <SourcesIconActive width={'24px'} height={'24px'} />
  },
  {
    title: 'Storage',
    id: 'storage',
    path: `/${STORAGE}`,
    icon: <StorageIcon width={'24px'} height={'24px'} />,
    activeIcon: <StorageIconActive width={'24px'} height={'24px'} />
  },
  {
    title: 'Inference',
    id: 'inference',
    path: `/${INFERENCE}`,
    icon: <InferenceIcon width={'24px'} height={'24px'} />,
    activeIcon: <InferenceIconActive width={'24px'} height={'24px'} />
  }
]

const SideMenu = () => {
  const { isCollapse, setIsCollapse } = React.useContext(CollapseContext)
  const router = useRouter()

  return (
    <div
      className="hidden sm:hidden md:flex lg:flex"
      style={{
        position: 'fixed',
        flexDirection: 'column',
        backgroundColor: 'hsl(var(--primary-foreground))',
        width: isCollapse ? '95px' : '220px',
        height: '100vh',
        transition: 'all 0.5s ease',
        paddingTop: '15px',
        paddingBottom: '6px'
      }}
    >
      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <div
            onClick={() => router.push('/')}
            style={{
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              marginBottom: isCollapse ? '10px' : '0px'
            }}
          >
            <Image width={40} height={40} alt={'Logo'} src={LogoInitial.src} />
            {!isCollapse && (
              <span
                style={{
                  fontFamily: `Arial`,
                  fontSize: '23px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: '5px'
                }}
              >
                FractalGrid
              </span>
            )}
          </div>
          {!isCollapse && (
            <div
              style={{
                marginRight: '10px'
              }}
            >
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      className="rounded-full"
                      variant="secondary"
                      size="icon"
                      type="button"
                      onClick={() => setIsCollapse(!isCollapse)}
                    >
                      <CollapseIcon height="18px" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <p>Collapse</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          )}
        </div>
        <div
          style={{
            display: 'flex',
            width: '100%',
            marginTop: '15px',
            paddingLeft: '15px',
            paddingRight: '15px',
            justifyContent: 'center'
          }}
        >
          {isCollapse ? (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    className="rounded-full"
                    size={'icon'}
                    variant="secondary"
                  >
                    <Plus height="18px" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>New Thread</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ) : (
            <Button variant={'outline'} type="button">
              <span style={{ display: 'flex', alignItems: 'center' }}>
                <span>New Thread</span>
                <span
                  style={{
                    marginLeft: '8px',
                    minWidth: '1.25rem',
                    height: '1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '0.25rem',
                    border: '1px solid #ccc',
                    backgroundColor: 'transparent',
                    fontSize: '16px',
                    fontFamily: 'monospace'
                  }}
                >
                  Ctrl
                </span>
                <span
                  style={{
                    marginLeft: '2px',
                    minWidth: '1.25rem',
                    height: '1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '0.25rem',
                    border: '1px solid #ccc',
                    backgroundColor: 'transparent',
                    fontSize: '16px',
                    fontFamily: 'monospace'
                  }}
                >
                  I
                </span>
              </span>
            </Button>
          )}
        </div>
        <div
          style={{
            marginTop: '20px'
          }}
        >
          {navItems.map(item => (
            <div
              key={item.id}
              style={{
                marginTop: isCollapse ? '5px' : '2px',
                marginBottom: isCollapse ? '5px' : '2px'
              }}
            >
              <SideButtons item={item} isCollapse={isCollapse} />
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          flexDirection: 'column',
          flex: 1
        }}
      >
        {isCollapse && (
          <div
            style={{
              paddingBottom: '25px',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    className="rounded-full rotate-180"
                    variant="secondary"
                    size="icon"
                    type="button"
                    onClick={() => setIsCollapse(!isCollapse)}
                  >
                    <CollapseIcon height="18px" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>Expand</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        )}
        <Separator />
        <div
          style={{
            paddingTop: isCollapse ? '25px' : '15px',
            paddingBottom: '15px',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          {isCollapse ? (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    className="rounded-full"
                    variant={'secondary'}
                    size="icon"
                    type="button"
                  >
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>Settings</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ) : (
            <Button
              className="rounded-full py-6 px-1 w-full ml-2 mr-2"
              variant={'secondary'}
              type="button"
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                  alignItems: 'center'
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  <span>
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>RJ</AvatarFallback>
                    </Avatar>
                  </span>
                  <span style={{ marginLeft: '5px' }}>roberto_jordan</span>
                </span>
                <span style={{ display: 'flex', marginRight: '2px' }}>
                  <SettingIcon width={'20px'} />
                </span>
              </div>
            </Button>
          )}
        </div>
        {!isCollapse && <Separator />}
        {!isCollapse && (
          <div
            style={{
              display: 'flex',
              marginTop: '10px',
              marginBottom: '10px',
              justifyContent: 'space-between',
              paddingLeft: '10px',
              paddingRight: '10px'
            }}
          >
            <div>
              <Button
                className="h-8 px-0 pr-1"
                variant={'ghost'}
                type={'button'}
              >
                <span
                  style={{
                    display: 'flex'
                  }}
                >
                  <PhoneIcon height="16px" />
                </span>
                <span
                  style={{
                    fontSize: '14px'
                  }}
                >
                  Download
                </span>
              </Button>
            </div>
            <div>
              <span>
                <Button
                  className="rounded-full h-8 w-8"
                  variant={'ghost'}
                  size={'icon'}
                  type={'button'}
                >
                  <div
                    style={{
                      display: 'flex',
                      height: '16px'
                    }}
                  >
                    <TwitterIcon height="16px" />
                  </div>
                </Button>
              </span>
              <span style={{ marginLeft: '5px' }}>
                <Button
                  className="rounded-full h-8 w-8"
                  variant={'ghost'}
                  size={'icon'}
                  type={'button'}
                >
                  <div
                    style={{
                      display: 'flex',
                      height: '16px'
                    }}
                  >
                    <DiscordIcon height="16px" />
                  </div>
                </Button>
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default SideMenu
