
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
  BookOpen,
  KeyRound,
  ShieldQuestion,
  Library,
  ClipboardCheck,
  Shapes,
  Compass,
} from 'lucide-react';
import { useState, useEffect } from 'react';

export const navItems = [
  { href: '/', label: 'ಮುಖಪುಟ', icon: Home },
  { href: '/mantras', label: 'ಮಂತ್ರಗಳು', icon: BookAudio },
  { href: '/activities', label: 'ಚಟುವಟಿಕೆಗಳು', icon: Activity },
  { href: '/recommendations', label: 'ಶಿಫಾರಸುಗಳು', icon: Sparkles },
  { href: '/initiation', label: 'ದೀಕ್ಷೆ', icon: KeyRound },
  { href: '/knowledge', label: 'ಜ್ಞಾನ', icon: BookOpen },
  { href: '/literature', label: 'ಸಾಹಿತ್ಯ', icon: Library },
  { href: '/yantras', label: 'ಯಂತ್ರಗಳು', icon: Shapes },
  { href: '/duties', label: 'ಸಾಧಕನ ಕರ್ತವ್ಯಗಳು', icon: ClipboardCheck },
  { href: '/progress', label: 'ಪ್ರಗತಿ', icon: TrendingUp },
  { href: '/guidance', label: 'ಮಾರ್ಗದರ್ಶನ', icon: ShieldQuestion },
  { href: '/tour', label: 'ಸೈಟ್ ಪ್ರವಾಸ', icon: Compass },
];

export default function AppSidebar() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
              <SidebarMenuButton 
                asChild 
                variant="ghost" 
                className="w-full justify-start p-2 h-auto" 
                isActive={mounted && pathname === item.href}
                tooltip={item.label}
              >
                <Link href={item.href}>
                    <item.icon className="mr-2 h-4 w-4" />
                    <span className="group-data-[collapsible=icon]:hidden">{item.label}</span>
                </Link>
              </SidebarMenuButton>
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
