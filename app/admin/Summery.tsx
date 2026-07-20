import { Card, CardContent } from "@/components/ui/card";

const Summery = () => {
  const summeryCards: { label: string; value: number }[] = [
    { label: "رشته ها", value: 3 },
  ];

  return (
    <div className="">
      {summeryCards.map((sumCard, index) => (
        <Card className="w-40" key={index}>
          <CardContent className="space-y-3">
            <h1>{sumCard.label}</h1>
            <p>{sumCard.value}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Summery;
