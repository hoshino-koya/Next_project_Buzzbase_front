"use client";
import { Link, Button } from "@nextui-org/react";
import { NextArrowIcon } from "@app/components/icon/NextArrowIcon";

export default function HeaderNext({ onMatchResultSave }: HeaderNextProps) {
  return (
    <>
      <header className="py-2 px-3 border-b border-b-zinc-500 fixed top-0 w-full bg-main z-50">
        <div className="flex items-center justify-between h-full">
          <Link href="/">LOGO</Link>
          <div className="flex items-center gap-x-4">
            <Button
              color="primary"
              variant="solid"
              size="sm"
              radius="full"
              endContent={
                <NextArrowIcon width="16" height="16" stroke="#F4F4F4" />
              }
              onClick={onMatchResultSave}
            >
              次へ
            </Button>
          </div>
        </div>
      </header>
    </>
  );
}