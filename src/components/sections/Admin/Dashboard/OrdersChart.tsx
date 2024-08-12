'use client'

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@ui/card'
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@ui/chart'
import { useTranslations } from 'next-intl'
import React, { useMemo } from 'react'
import { Label, Pie, PieChart } from 'recharts'

const chartData = [
  { restaurant: 'Fish House', ProjectsByAccount: 173, fill: '#00B2A9' },
  { restaurant: 'KFC', ProjectsByAccount: 575, fill: '#EB5757' },
  { restaurant: 'KLM', ProjectsByAccount: 200, fill: '#EAAB00' },
  { restaurant: "McCDonald's", ProjectsByAccount: 287, fill: '#A84069' },
  { restaurant: 'Dolma', ProjectsByAccount: 190, fill: '#8D43FF' },
  { restaurant: 'Doner', ProjectsByAccount: 190, fill: '#BB6BD9' },
  { restaurant: 'Kabab', ProjectsByAccount: 190, fill: '#F4A26C' },
  { restaurant: 'Steak House', ProjectsByAccount: 190, fill: '#4CD964' }
]

interface IChartsConfig {
  [key: string]: {
    label: string
    color?: string
  }
}

const chartConfig: IChartsConfig = {
  ProjectsByAccount: {
    label: 'Projects by account'
  },
  KFC: {
    label: 'KFC',
    color: '#EB5757'
  },
  KLM: {
    label: 'KLM',
    color: '#EAAB00'
  },
  McCDonalds: {
    label: "McCDonald's",
    color: '#A84069'
  },
  FishHouse: {
    label: 'Fish House',
    color: '#00B2A9'
  },
  Dolma: {
    label: 'Dolma',
    color: '#8D43FF'
  },
  Doner: {
    label: 'Doner',
    color: '#BB6BD9'
  },
  Kabab: {
    label: 'Kabab',
    color: '#F4A26C'
  },
  SteakHouse: {
    label: 'Steak House',
    color: '#4CD964'
  }
} satisfies ChartConfig

const OrdersChart: React.FC = ({ className }: { className?: string }): JSX.Element => {
  const t = useTranslations('OrdersChart')

  const totalProjects = useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.ProjectsByAccount, 0)
  }, [])

  return (
    <Card className={`flex h-full w-full basis-[40%] flex-col border-none bg-[#27283C] px-5 pb-20   pt-5`}>
      <CardHeader>
        <CardTitle className={`text-left  text-[#c7c7c7]`}>{t('orders')}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[264px]">
          <PieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartData} dataKey="ProjectsByAccount" nameKey="restaurant" innerRadius={70} strokeWidth={5}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                        <tspan x={viewBox.cx} y={viewBox.cy - 20} className="fill-[#c7c7c7] text-base font-bold">
                          {totalProjects.toLocaleString()}
                        </tspan>
                        <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 4} className="fill-[#c7c7c7] text-base">
                          {t('projectsByAccount')}
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex w-full flex-wrap items-center gap-x-4 gap-y-2 text-sm">
        {Object.values(chartConfig).map(
          (item, index) =>
            index > 0 && (
              <div className={`flex gap-1`} key={item.label}>
                <span className={`h-4 w-4 rounded-full`} style={{ backgroundColor: item.color }}></span>
                <span className={`text-sm capitalize text-[#c7c7c7]`}>{item.label}</span>
              </div>
            )
        )}
      </CardFooter>
    </Card>
  )
}

export default OrdersChart
