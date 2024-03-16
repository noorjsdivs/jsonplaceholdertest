import clsx from "clsx";
import Link from "next/link";
import React from "react";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link
      href={"/"}
      className={clsx(
        `${className} text-base font-bold hover:text-blue-600 duration-200`
      )}
    >
      JSONPlaceholder
    </Link>
  );
};

export default Logo;
