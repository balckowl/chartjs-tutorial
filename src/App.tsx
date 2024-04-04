import { useState } from 'react'
import './App.css'
import BarChart from './components/BarChart'
import { UserData } from './data/Data'
import LineChart from './components/LineChart'
import { PieChart } from './components/PieChart'

function App() {

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gain",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50af95",
          "#f3ba2f",
          "2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  })

  return (
    <div>
      <BarChart chartData={userData} />
      <LineChart chartData={userData} />
      <PieChart chartData={userData} />
    </div>
  )
}

export default App
