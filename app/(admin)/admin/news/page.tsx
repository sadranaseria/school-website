import { Button } from "@/components/ui/button";
import Link from "next/link";

const NewsPage = () => {
  return (
    <div>
      NewsPage
      <Button><Link href='/admin/news/new'>جدید</Link></Button>
    </div>
  )
}

export default NewsPage;