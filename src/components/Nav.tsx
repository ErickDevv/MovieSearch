import GitHub from "./icons/GitHub";
import { Switch } from "@nextui-org/react";
import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";

const Nav = () => {
  return (
    <nav className="w-screen h-20 ">
      <Switch
        defaultSelected
        size="lg"
        color="primary"
        startContent={<MoonIcon />}
        endContent={<SunIcon />}
        className="absolute right-16 top-7"
        onValueChange={() => {
          document.querySelector("main")?.classList.toggle("dark");
        }}
      />

      <GitHub
        className="w-12 h-12  absolute top-5 right-5 cursor-pointer"
        onClick={() => window.open("https://github.com/ErickDevv/Movies")}
      />
    </nav>
  );
};

export default Nav;
