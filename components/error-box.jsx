import React from "react";
import { RefreshCcw } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

function ErrorBox({ message }) {
  return (
    <div className="flex flex-col items-center justify-center h-12 w-full  mx-auto   p-4 bg-red-100 border border-red-400 text-red-700 ">
      <div className="flex items-center justify-center w-full gap-2">
        Something went wrong.
        <Button
          aria-label="Refresh page"
          size="sm"
          className="cursor-pointer flex"
        >
          <Link href={"/"}>
            <span className="flex items-center gap-1">
              <RefreshCcw size={16} />
              <span>Retry</span>
            </span>
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default ErrorBox;
