import GitHub from "./icons/GitHub";
import { Switch } from "@nextui-org/react";
import { getCurrentTheme } from "../functions/getCurrentTheme";
import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";
import { useState } from "react";

const Nav = () => {
  const [theme, setTheme] = useState(getCurrentTheme());

  const [icons] = useState({
    start: theme === "dark" ? <SunIcon /> : <MoonIcon />,
    end: theme === "dark" ? <MoonIcon /> : <SunIcon />,
  });

  return (
    <nav className="w-screen h-20 ">
      <Switch
        defaultSelected
        size="lg"
        startContent={icons.start}
        endContent={icons.end}
        className="absolute right-16 top-7"
        onValueChange={() => {
          document.querySelector("main")?.classList.toggle("dark");

          if (theme === "dark") {
            localStorage.setItem("theme", "light");
            return;
          }
          localStorage.setItem("theme", "dark");

          setTheme(getCurrentTheme());
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
