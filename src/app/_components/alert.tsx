"use client";

import { useRef, useEffect } from "react";
import Container from "@/app/_components/container";
import cn from "classnames";

type Props = {
  preview?: boolean;
};

const Alert = ({ preview }: Props) => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marqueeElement = marqueeRef.current;
    const handleMouseEnter = () => {
      if (marqueeElement) {
        marqueeElement.style.animationPlayState = "paused";
      }
    };
    const handleMouseLeave = () => {
      if (marqueeElement) {
        marqueeElement.style.animationPlayState = "running";
      }
    };

    if (marqueeElement) {
      marqueeElement.addEventListener("mouseenter", handleMouseEnter);
      marqueeElement.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (marqueeElement) {
        marqueeElement.removeEventListener("mouseenter", handleMouseEnter);
        marqueeElement.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div
      className={cn("border-b dark:bg-slate-800", {
        "bg-neutral-800 border-neutral-800 text-white": preview,
        "bg-neutral-50 border-neutral-200": !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm dark:text-sky-200">
          {preview ? (
            <>
              This page is a preview.{" "}
              <a
                href="/api/exit-preview"
                className="underline hover:text-teal-300 duration-200 transition-colors"
              >
                Click here
              </a>{" "}
              to exit preview mode.
            </>
          ) : (
            <div className="whitespace-nowrap overflow-hidden relative">
              <div
                ref={marqueeRef}
                className="inline-block animate-marquee"
              > We have migrated from www.ironweb-research.tech to here. We appreciate the support given by{" "}
                <a
                  href={`https://vercel.com/`}
                  className="underline hover:text-blue-600 duration-200 transition-colors"
                >
                  Vercel
                </a>
                &nbsp;in building up our site.
              </div>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Alert;
