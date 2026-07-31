import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import useDrop from "../_hooks/useDrop";

const Uploader = () => {
  const { isDragActive, getRootProps, getInputProps } = useDrop();

  return (
    <Card
      className={cn(
        "text-center p-20 flex flex-col justify-center items-center transition-colors w-full h-full cursor-pointer",
        isDragActive
          ? "border border-primary bg-blue-superlight"
          : "border border-dashed hover:border-primary",
      )}
      {...getRootProps()}
    >
      <CardContent>
        <input {...getInputProps()} />
        <Button>{isDragActive ? "در حال انتخاب فایل" : "آپلود عکس"}</Button>
      </CardContent>
    </Card>
  );
};

export default Uploader;
