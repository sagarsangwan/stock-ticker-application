import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="space-y-4 p-4 ">
      <div className="flex items-center space-x-3">
        <Skeleton className="  bg-gray-300 h-8 w-8 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="  bg-gray-300 h-4 w-32" />
          <Skeleton className="  bg-gray-300 h-3 w-20" />
        </div>
      </div>

      {/* Price info */}
      <div className="flex space-x-6">
        <Skeleton className="  bg-gray-300 h-6 w-16" />
        <Skeleton className="  bg-gray-300 h-6 w-16" />
        <Skeleton className="  bg-gray-300 h-6 w-16" />
      </div>

      <Skeleton className="  bg-gray-300 h-64 w-full rounded-md" />
    </div>
  );
}
