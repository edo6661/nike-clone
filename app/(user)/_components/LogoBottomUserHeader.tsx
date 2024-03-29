"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useIsClient } from "usehooks-ts";
const LogoBottomUserHeader = () => {
  const isClient = useIsClient();
  const { theme } = useTheme();
  const isLight = theme === "light";
  const imageSrc = isLight
    ? "/copy-dark-logo-nike.png"
    : "/white-logo-nike.png";
  const imageReuse = (
    <Link
      href="/"
      className=" hover-primary-bg base-transition hover:rounded-xl"
    >
      <Image src={imageSrc} alt="Logo Nike" width={90} height={90} />
    </Link>
  );
  return isClient ? (
    isLight ? (
      imageReuse
    ) : (
      imageReuse
    )
  ) : (
    <Skeleton className=" skeleton m-2 h-16 w-36" />
  );
};

export default LogoBottomUserHeader;
