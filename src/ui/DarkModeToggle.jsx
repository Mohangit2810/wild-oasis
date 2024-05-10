import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import { useDarkMode } from "../context/DarkModeContext";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <ButtonIcon onClick={toggleDarkMode}>
      {isDarkMode ? (
        <HiOutlineSun className="fill-cyan-300" />
      ) : (
        <HiOutlineMoon className="fill-cyan-300" />
      )}
    </ButtonIcon>
  );
}

export default DarkModeToggle;
