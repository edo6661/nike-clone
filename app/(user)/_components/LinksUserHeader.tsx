import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import HeaderHelpDropdown from "./HeaderHelpDropdown";
import ToggleTheme from "@/components/ToggleTheme";

const LinksUserHeader = () => {
  return (
    <div className="container-header-links">
      <div>
        <Link href="/retail">Find a Store</Link>
        <SeparatorUserHeader />
      </div>
      <HeaderHelpDropdown />
      <div>
        <Link href="/membership">Join Us</Link>
        <SeparatorUserHeader />
      </div>
      <div>
        <Link href="/auth/sign-in">Sign in</Link>
        <SeparatorUserHeader />
      </div>
      <div>
        <ToggleTheme />
      </div>
    </div>
  );
};

export const SeparatorUserHeader = () => {
  return (
    <Separator
      orientation="vertical"
      className="h-6 w-[2px]  bg-primaryDarkBg dark:bg-primaryLightBg"
    />
  );
};

export default LinksUserHeader;