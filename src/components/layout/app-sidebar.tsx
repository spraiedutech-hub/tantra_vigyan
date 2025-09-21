
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
  useSidebar,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarSeparator,
} from '@/components/ui/sidebar';
import { Logo } from '@/components/icons/logo';
import { navGroups } from '@/lib/nav-items';
import { useState, useEffect } from 'react';

export default function AppSidebar() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const { setOpenMobile, isMobile } = useSidebar();

  useEffect(() => {
    setMounted(true);
  }, []);
  
  const handleLinkClick = () => {
    if (isMobile) {
      setOpenMobile(false);
    }
  };

  return (
    <Sidebar collapsible="icon">
        <SidebarHeader>
            <div className="flex items-center justify-between">
                <Logo className="group-data-[collapsible=icon]:hidden"/>
                <SidebarTrigger className="group-data-[collapsible=icon]:hidden" />
            </div>
        </SidebarHeader>
      <SidebarContent>
        {navGroups.map((group, index) => (
          <SidebarGroup key={index}>
            <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
            <SidebarMenu>
              {group.items.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton 
                    asChild 
                    variant="ghost" 
                    className="w-full justify-start p-2 h-auto" 
                    isActive={mounted && pathname === item.href}
                    tooltip={item.label}
                    onClick={handleLinkClick}
                  >
                    <Link href={item.href}>
                        <item.icon className="mr-2 h-4 w-4" />
                        <span className="group-data-[collapsible=icon]:hidden">{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
            {index < navGroups.length - 1 && <SidebarSeparator />}
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter className="group-data-[collapsible=icon]:hidden space-y-2">
        <div className="text-sm text-muted-foreground text-center">
            <span className="font-semibold text-foreground">Guidence by:</span><br/> Nagaraja D, Hosadurga
        </div>
        <div className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} ತಂತ್ರ ವಿಜ್ಞಾನ
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
