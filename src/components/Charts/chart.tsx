import React from 'react'
import { LineChart } from 'lucide-react'

const data = [
    { value: 12, date: "02.04.2024"},
    { value: 20, date: "20.04.2024"},
    { value: 24, date: "12.04.2024"}
]

const Chart = () => {
  return (
    <LineChart width={500} height={500}>
        <line/>
\    </LineChart>
  )
}

export default Chart