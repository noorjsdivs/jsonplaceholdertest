import Link from "next/link";
import Container from "./Container";
import Logo from "./Logo";

const navigation = [
  {
    title: "Guide",
    href: "/guide",
  },
  {
    title: "Sponsor this project",
    href: "/",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "My JOSN Server",
    href: "/server",
  },
  {
    title: "Products",
    href: "/products",
  },
  {
    title: "Playground",
    href: "/playground",
  },
];

const Header = () => {
  return (
    <div className="border-b-[1px] border-b-gray-300 bg-white sticky top-0 z-50">
      <Container className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <Logo />
        <div className="flex items-center gap-x-2 md:gap-x-5">
          {navigation.map((item) => (
            <Link
              key={item?.title}
              href={item?.href}
              className="text-xs md:text-base font-light hover:text-blue-600 duration-200"
            >
              {item?.title}
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Header;
