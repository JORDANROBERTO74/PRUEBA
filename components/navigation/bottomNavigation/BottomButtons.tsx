import { cn } from '@/lib/utils'
import { usePathname, useRouter } from 'next/navigation'

interface PropsType {
  item: {
    title: string
    id: string
    path: string
    icon: JSX.Element
    activeIcon: JSX.Element
  }
}

const BottomButtons = ({ item }: PropsType) => {
  const currentPath = usePathname().split('/')[1]
  const router = useRouter()

  return (
    <div
      onClick={() => router.push(item?.path)}
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        marginLeft: '8px',
        marginRight: '8px',

        paddingTop: currentPath === item?.path.split('/')[1] ? '0px' : '4px'
      }}
      className={cn(
        currentPath === item?.path.split('/')[1]
          ? 'border-t-4 border-primary text-black'
          : 'text-gray-700'
      )}
    >
      <div
        style={{
          transition: '0.1s'
        }}
      >
        {currentPath === item?.path.split('/')[1]
          ? item?.activeIcon
          : item?.icon}
      </div>
      <div>{item?.title}</div>
    </div>
  )
}
export default BottomButtons
