"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import useDrop from "../_hooks/useDrop";

const Dropzone = () => {
  const { isDragActive, getRootProps, getInputProps } = useDrop();

  return (
    <>
      <div
        className={cn(
          "border-2 border-dashed cursor-pointer rounded-md p-16 w-full transition-colors hover:border-primary",
          isDragActive
            ? "bg-blue-superlight border-solid border-secondary"
            : "",
        )}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p className="text-center">در حال کشیدن</p>
        ) : (
          <div className="flex flex-col items-center justify-center gap-4">
            <p>برای آپلود عکس، عکسی را بکشید یا دکمه را انتخاب کنید</p>
            <Button>آپلود عکس</Button>
          </div>
        )}
      </div>
    </>
  );
};

export default Dropzone;
