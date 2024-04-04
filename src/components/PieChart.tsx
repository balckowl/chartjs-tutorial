import { Pie } from "react-chartjs-2"

export const PieChart = ({ chartData }: any) => {
    return (
        <Pie data={chartData}width={100} height={100}/>
    )
}
