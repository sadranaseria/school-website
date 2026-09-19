import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface Props {
  majors: number;
  images: number;
  news: number;
  passeds: number;
}

const Summery = ({ images, majors, news, passeds }: Props) => {
  const summeryCards: { label: string; value: number }[] = [
    { label: "تعداد رشته ها", value: majors },
    { label: "تعداد عکس ها", value: images },
    { label: "تعداد اخبار", value: news },
    { label: "تعداد قبولی ها", value: passeds },
  ];

  return (
    <section className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {summeryCards.map((sumCard, index) => (
          <Card className="w-70 text-center" key={index}>
            <CardHeader className="text-xl">{sumCard.label}</CardHeader>
            <CardContent className="space-y-3">
              <p className="text-3xl">{sumCard.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Summery;
