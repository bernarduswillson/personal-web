import Logo from "@/components/Icon/Logo";
import ToggleMode from "@/components/ui/toggleMode";
import { Button } from "@/components/ui/button";

const Navbar = (): JSX.Element => {
  return (
    <nav className="h-[100px] w-full flex items-center justify-between fixed z-50">
      <div className="flex justify-start ml-7 items-center">
        <Logo />
        <span className="translate-y-[2px] ml-2 text-[30px] font-extrabold tracking-[3px]">
          BW
        </span>
      </div>
      <div className="justify-end flex mr-7 items-center">
        <Button 
          className="font-bold text-[15px] border-[3px] px-7 py-2 mr-7"
          variant="outline">
          Contact
        </Button>
        <ToggleMode />
      </div>
    </nav>
  );
};

export default Navbar;