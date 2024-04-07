import Logo from "./ui/Logo";
import Profile from "./ui/Profile";
import Search from "./ui/Search";
import Aside from "@components/Aside";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 w-full max-w-screen-2xl px-6 mx-auto h-20 bg-white z-20">
      <nav className="flex items-center justify-between h-full">
        <Aside />
        <Logo />
        <Search />
        <Profile />
      </nav>
    </header>
  );
};

export default Header;
