const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <div className="container mx-auto flex h-14 items-center px-4">
        <a href="#" className="text-xl font-semibold">
          <span className="font-bold">yeonlog</span>
        </a>
        <nav className="ml-auto flex items-center gap-4">
          <a href="#" className="hover:text-primary font-medium">
            홈
          </a>
          <a href="#" className="hover:text-primary font-medium">
            블로그
          </a>
          <a href="#" className="hover:text-primary font-medium">
            소개
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
