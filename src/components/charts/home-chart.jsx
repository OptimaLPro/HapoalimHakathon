"use client";

import { TrendingUp } from "lucide-react";
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";

const chartData = [
  { browser: "safari", visitors: 1000, fill: "var(--color-safari)" },
];

const chartConfig = {
  visitors: {
    label: "מבקרים",
  },
  safari: {
    label: "ספארי",
    color: "hsl(var(--chart-2))",
  },
};

export function Component() {
  return (
    <Card
      className="flex flex-col border-0 shadow-none bg-transparent"
      dir="rtl"
    >
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadialBarChart
            data={chartData}
            startAngle={0}
            endAngle={250}
            innerRadius={80}
            outerRadius={110}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-background"
              polarRadius={[86, 74]}
            />
            <RadialBar dataKey="visitors" background cornerRadius={10} />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        className="fill-foreground font-bold"
                      >
                        <tspan className="text-2xl" x={viewBox.cx} dy="-0.3em">
                          {chartData[0].visitors.toLocaleString()}
                        </tspan>
                        <tspan
                          className="fill-muted-foreground text-base"
                          x={viewBox.cx}
                          dy="1.6em" // כאן המרווח כלפי מטה — כמו mt-2
                        >
                          יעד
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-lg text-white">
        <div className="flex items-center gap-2 font-medium leading-none rtl">
          עלייה של 10% החודש <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none rtl text-white">
          אתה ממש קרוב ליעד הצבירה החודשי שלך!{" "}
        </div>
      </CardFooter>
    </Card>
  );
}
