import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { prisma } from "@/prisma/client";
import Markdown from "react-markdown";
import DeleteButton from "./_components/DeleteButton";
import Link from "next/link";

const QuestionsPage = async () => {
  const questions = await prisma.question.findMany();

  return (
    <section>
        <Button className='mt-5'><Link href='/admin/questions/new'>ساخت سوال</Link></Button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">
        {questions.map((q) => (
          <Card key={q.id} className="p-4 wrap-break-word">
            <CardHeader className="bg-primary/50 border-2 border-primary rounded-xl p-2">
              {q.title}
            </CardHeader>
            <CardContent className="bg-blue-superlight border-2 border-secondary rounded-xl p-2">
              <Markdown>
                {q.anwser.length > 60
                  ? `${q.anwser.substring(0, 60)}...`
                  : q.anwser}
              </Markdown>
              <DropdownMenu>
                <DropdownMenuTrigger render={<Button variant="outline" />}>
                  بیشتر
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-100">
                  <div className="max-h-100 overflow-y-auto p-3 text-sm whitespace-normal break-words [overflow-wrap:anywhere]">
                    <Markdown>{q.anwser}</Markdown>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardContent>
            <CardFooter className="p-0 space-x-4">
              <DeleteButton id={q.id} />
              <Button className='bg-violet-400 hover:bg-violet-500'><Link href={`/admin/questions/${q.id}/edit`}>ویرایش سوال</Link></Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default QuestionsPage;
