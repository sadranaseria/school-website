import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { prisma } from "@/prisma/client";
import Markdown from "react-markdown";
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const QuestionsPage = async () => {
  const questions = await prisma.question.findMany();
  
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">
        {questions.map(q => (
          <Card key={q.id} className="p-4 wrap-break-word">
            <CardHeader className="bg-primary/50 border-2 border-primary rounded-xl p-2">{q.title}</CardHeader>
            <CardContent className="bg-blue-superlight border-2 border-secondary rounded-xl p-2">
              <Markdown>{q.anwser.length > 60 ? `${q.anwser.substring(0, 60)}...` : q.anwser}</Markdown>
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
          </Card>
        ))}
      </div>
    </section>
  )
}

export default QuestionsPage;