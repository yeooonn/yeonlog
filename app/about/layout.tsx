import { ReactNode } from 'react';
import Link from 'next/link';
import { MENU_ITEMS } from '@/constants/SidebarItems';

interface AboutLayoutProps {
  children: ReactNode;
}

export default function AboutLayout({ children }: AboutLayoutProps) {
  return (
    <div className="container py-8">
      <div className="flex gap-8">
        {/* 사이드바 */}
        <aside className="w-64 shrink-0">
          <nav className="bg-card sticky top-8 space-y-1 rounded-lg border p-4">
            {MENU_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.path}
                className="text-muted-foreground hover:bg-accent hover:text-accent-foreground flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors"
                {...(item.external && {
                  target: '_blank',
                  rel: 'noopener noreferrer',
                })}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </aside>

        {/* 메인 콘텐츠 */}
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
