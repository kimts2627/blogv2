import Link from "next/link";

const Header = () => {
  return (
    <header className="flex align-center justify-center py-3 px-2">
      <Link href="/">
        <div className="cursor-pointer">likegecko</div>
      </Link>
    </header>
  );
};

export default Header;
