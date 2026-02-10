import { BarChart, CheckSquare, Cog, Flag, Home, LifeBuoy, SquareStack, Users, Search } from 'lucide-react'
import { UsedSpaceWidget } from './UsedSpaceWidget'
import { NavItem } from './NavItem'
import { Logo } from './Logo'
import { Profile } from './Profile'
import * as Input from '../../components/Input'

export function Sidebar() {
  return (
<aside className="w-64 min-h-screen flex flex-col gap-6 border-r border-zinc-200 px-5 py-8 bg-white">
   
  <Logo />

     <Input.Root>
        <Input.Prefix>
          <Search className="h-5 w-5 to-zinc-500" />
        </Input.Prefix>
        <Input.Control placeholder="Search" />
      </Input.Root>

     <nav className="space-y-0.5">
        <NavItem title="Home" icon={Home} />
        <NavItem title="Dashboard" icon={BarChart} />
        <NavItem title="Projects" icon={SquareStack} />
        <NavItem title="Tasks" icon={CheckSquare} />
        <NavItem title="Reporting" icon={Flag} />
        <NavItem title="Users" icon={Users} />
      </nav>

      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0.5">
          <NavItem title="Support" icon={LifeBuoy} />
          <NavItem title="Settings" icon={Cog} />
        </nav>

        <UsedSpaceWidget />

        <div className="h-px bg-zinc-200" />

        <Profile />
      </div>
    </aside>
  )
}
