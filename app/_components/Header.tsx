import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full h-full flex justify-between items-center">
      <Link href="/">
        <div className="relative">
          <h1 className="text-2xl font-bold">likegecko</h1>
          <span className="absolute top-5 left-3 border-green-500 border-solid border-b-4 w-32"></span>
        </div>
      </Link>
      <div className="h-full flex gap-8 items-center justify-center">
        <ul className="flex gap-10 text-2xl font-bold items-center justify-center">
          <Link href="/resume">
            <li>나</li>
          </Link>
          <Link href="posts">
            <li>포스트</li>
          </Link>
        </ul>
        <div className="w-44 h-full flex items-center">
          <input type="text" className="w-full border-b-2 h-8 text-lg" />
        </div>
      </div>
    </div>
  );
};

export default Header;
