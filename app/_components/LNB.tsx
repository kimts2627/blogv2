"use client";

import Link from "next/link";
import WindowBox from "./WindowBox";
import { usePathname } from "next/navigation";

type SITEMAP = {
  path: string;
  title: string;
  children: SITEMAP[];
};

const DEFAULT_SITEMAP: SITEMAP[] = [
  {
    path: "/",
    title: "home",
    children: [],
  },
  {
    path: "/test",
    title: "테스트용테스트트",
    children: [
      {
        path: "/test/test2",
        title: "테스트용의 자식",
        children: [],
      },
      {
        path: "/test/test3",
        title: "테스트용의 자식2",
        children: [],
      },
    ],
  },
  {
    path: "/test2",
    title: "흠냐뤼 뽕뽕구리",
    children: [
      {
        path: "/test2",
        title: "구리구리구리",
        children: [],
      },
    ],
  },
  {
    path: "/test3",
    title: "배가 고프다잉",
    children: [],
  },
];

const LNB = () => {
  const pathname = usePathname();

  return (
    <WindowBox title={`~/.likegecko${pathname}`} width="300">
      <div className="flex flex-col gap-2 pt-10">
        {DEFAULT_SITEMAP.map((sitemap, index, total) => (
          <ul key={sitemap.path} className="flex flex-col gap-2">
            <li className="flex align-center gap-2">
              <span>{index === 0 ? "┌" : index === total.length - 1 ? "└" : "├"}</span>
              <Link href={sitemap.path} legacyBehavior>
                <span className="cursor-pointer">{sitemap.title}</span>
              </Link>
            </li>
            <ul className="flex flex-col gap-2">
              {sitemap.children.map((child, childIndex) => (
                <li className="flex align-center gap-2" key={childIndex}>
                  <span>├──</span>
                  <Link href={child.path}>
                    <span className="cursor-pointer">{child.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </ul>
        ))}
      </div>
    </WindowBox>
  );
};

export default LNB;
