
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { Logo } from '@/components/icons/logo';
import {
  Home,
  BookAudio,
  Activity,
  Sparkles,
  TrendingUp,
  Users,
  BookOpen,
} from 'lucide-react';
import { Button } from '../ui/button';

const navItems = [
  { href: '/', label: 'ಮುಖಪುಟ', icon: Home },
  { href: '/mantras', label: 'ಮಂತ್ರಗಳು', icon: BookAudio },
  { href: '/activities', label: 'ಚಟುವಟಿಕೆಗಳು', icon: Activity },
  { href: '/recommendations', label: 'ಶಿಫಾರಸುಗಳು', icon: Sparkles },
  { href: '/knowledge', label: 'ಜ್ಞಾನ', icon: BookOpen },
  { href: '/progress', label: 'ಪ್ರಗತಿ', icon: TrendingUp },
  { href: '/community', label: 'ಸಮುದಾಯ', icon: Users },
];

export default function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon">
        <SidebarHeader>
            <div className="flex items-center justify-between">
                <Logo className="group-data-[collapsible=icon]:hidden"/>
                <SidebarTrigger className="group-data-[collapsible=icon]:hidden" />
            </div>
        </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <Button asChild variant="ghost" className="w-full justify-start p-2 h-auto" aria-current={pathname === item.href ? "page" : undefined}>
                <Link href={item.href}>
                    <item.icon className="mr-2 h-4 w-4" />
                    <span className="group-data-[collapsible=icon]:hidden">{item.label}</span>
                </Link>
              </Button>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="group-data-[collapsible=icon]:hidden">
        <div className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} ತಂತ್ರ ವಿಜ್ಞಾನ
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
