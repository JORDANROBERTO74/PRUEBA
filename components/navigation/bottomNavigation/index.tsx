'use client'

import HomeIcon from '../../common/icons/HomeIcon'
import StorageIcon from '../../common/icons/StorageIcon'
import InferenceIcon from '../../common/icons/InferenceIcon'
import BottomButtons from './BottomButtons'
import StorageIconActive from '../../common/icons/StorageIconActive'
import InferenceIconActive from '../../common/icons/InferenceIconActive'
import DashboardIcon from '../../common/icons/DashboardIcon'
import DashboardIconActive from '../../common/icons/DashboardIconActive'
import { DASHBOARD, STORAGE, INFERENCE } from '../constants'

const BottomMenu = () => {
  const navItems = [
    {
      title: '',
      id: 'home',
      path: `/`,
      icon: <HomeIcon width={'30px'} height={'30px'} />,
      activeIcon: <HomeIcon width={'30px'} height={'30px'} />
    },
    {
      title: '',
      id: 'dashboard',
      path: `/${DASHBOARD}`,
      icon: <DashboardIcon width={'30px'} height={'30px'} />,
      activeIcon: <DashboardIconActive width={'30px'} height={'30px'} />
    },
    {
      title: '',
      id: 'storage',
      path: `/${STORAGE}`,
      icon: <StorageIcon width={'30px'} height={'30px'} />,
      activeIcon: <StorageIconActive width={'30px'} height={'30px'} />
    },
    {
      title: '',
      id: 'inference',
      path: `/${INFERENCE}`,
      icon: <InferenceIcon width={'30px'} height={'30px'} />,
      activeIcon: <InferenceIconActive width={'30px'} height={'30px'} />
    }
  ]
  return (
    <div
      style={{ zIndex: 101, bottom: 0, right: 0 }}
      className={`fixed flex sm:flex md:hidden lg:hidden flex-col w-full bg-white`}
    >
      <div
        style={{
          height: '63px',
          display: 'flex',
          width: '100%'
        }}
      >
        {navItems.map(item => (
          <div
            key={item.id}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%'
            }}
          >
            <BottomButtons item={item} />
          </div>
        ))}
      </div>
    </div>
  )
}
export default BottomMenu
