import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const GalleryLatests = () => {
  return (
      <Card className="max-w-200">
        <CardHeader className="flex items-center justify-between">
          <h2 className="text-[18px]">عکس های اخیر</h2>
          <Button variant='outline'>آپلود عکس</Button>
      </CardHeader>
      <CardContent>
        
      </CardContent>
      </Card>
  )
};

export default GalleryLatests;