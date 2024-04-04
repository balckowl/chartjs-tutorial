import { Bar } from "react-chartjs-2"
import { Chart as ChartJS } from "chart.js/auto"

ChartJS.register()

export const options = {

};

const BarChart = ({ chartData }: {chartData: any}) => {

  return (
    <Bar data={chartData} width={1000} height={300} />
  )
}

export default BarChart