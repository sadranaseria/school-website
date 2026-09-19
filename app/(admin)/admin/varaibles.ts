import { NewsWithImages } from "./news/types";

export const columns: {
  label: string;
  value: keyof NewsWithImages;
  className?: string;
}[] = [
  { label: "آی دی", value: "id" },
  { label: "عکس", value: "images" },
  { label: "عنوان", value: "title" },
  { label: "توضیحات", value: "description", className: "hidden md:table-cell" },
];