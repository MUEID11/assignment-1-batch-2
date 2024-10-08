import logo from "../../assets/images/logo/logo.svg";
import MenuButton from "../Buttons/MenuButton";

const Navbar = () => {
  return (
    <div className="ud-header absolute left-0 top-0 z-40 flex w-full items-center bg-transparent">
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="flex w-full items-center justify-between px-4 py-3">
            <a
              href="https://learnwithsumit.com/"
              target="_blank"
              className="navbar-logo block w-60 max-w-full px-4"
            >
              <img src={logo} alt="logo" className="header-logo h-12" />
            </a>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex space-x-4">
              <li className="group relative">
                <MenuButton href="#home">Home</MenuButton>
              </li>
              <li className="group relative">
                <MenuButton href="#about">About</MenuButton>
              </li>
              <li className="group relative">
                <MenuButton href="#pricing">Pricing</MenuButton>
              </li>
              <li className="group relative">
                <MenuButton href="#blog">Blog</MenuButton>
              </li>
            </ul>

            {/* Buttons for Sign In and Sign Up */}
            <div className="flex">
              <a
                href="signin.html"
                className="loginBtn sm:px-[22px] px-1 py-1 sm:py-2 sm:text-base font-medium text-white hover:opacity-70 text-xs"
              >
                Sign In
              </a>
              <a
                href="signup.html"
                className="signUpBtn rounded-md text-xs bg-white bg-opacity-20 sm:px-6 px-1 py-1 sm:py-2 sm:text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
