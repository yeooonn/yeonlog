import URL from '@/constants/Url';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <div className="container flex h-14 items-center px-4">
        <Link href="/" className="text-xl font-semibold">
          <span className="font-bold">yeonlog</span>
        </Link>
        <nav className="ml-auto flex items-center gap-4">
          <Link href={URL.HOME} className="hover:text-primary font-medium">
            홈
          </Link>
          <Link href={URL.BLOG.getBlogPost('1')} className="hover:text-primary font-medium">
            블로그
          </Link>
          <Link href={URL.ABOUT.PROFILE} className="hover:text-primary font-medium">
            소개
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
