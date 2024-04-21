"use client";

import { ReactNode, type ReactElement, useState, useRef } from "react";
import { useClickAway } from "react-use";

type WindowBoxProps = {
  title: string | ReactElement;
  width?: string;
  height?: string;
  children?: ReactNode;
  disableSelected?: boolean;
};

const WindowBox = ({ title, width, height, children, disableSelected = false }: WindowBoxProps) => {
  const [selected, setSelected] = useState(false);

  const sectionRef = useRef<HTMLElement | null>(null);

  useClickAway(sectionRef, () => {
    if (disableSelected) return;
    setSelected(false);
  });

  return (
    <section
      ref={sectionRef}
      className="h-full w-full pt-2"
      style={{ width: width ? `${width}px` : "100%", height: height ? `${height}px` : "100%" }}
      onClick={() => {
        if (disableSelected) return;
        setSelected(true);
      }}
    >
      <div
        className={`relative border-1 ${selected ? "border-green-400" : "border-primary-gray"} border-solid w-full h-full px-3 py-5`}
      >
        <span className="absolute px-2 bg-black -top-2 left-2">{title}</span>
        {children}
      </div>
    </section>
  );
};

export default WindowBox;
