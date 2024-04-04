import { Line } from "react-chartjs-2"
import { Chart as ChartJS } from "chart.js/auto"

ChartJS.register()

export const options = {

};

const LineChart = ({ chartData }: {chartData: any}) => {

  return (
    <Line data={chartData} width={1000} height={300} />
  )
}

export default LineChart