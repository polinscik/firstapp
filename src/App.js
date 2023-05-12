import "./App.css";
import {Chart} from "react-google-charts";

export const options = {
  title: "Цвета моего гардероба",
  colors: [
    "#eb1b10",
    "#35eb10",
    "#0a0a0a",
    "#ffffff",
    "#a2a3a2",
    "#fa50b6",
    "#faf450",
  ],
  backgroundColor: "#e3e3e1",
};
export const data = [
  ["Цвет", "Процент от всех вещей"],
  ["Красный", 3],
  ["Зеленый", 7],
  ["Черный", 10],
  ["Белый", 8],
  ["Серый", 8],
  ["Розовый", 4],
  ["Желтый", 3],
];

function App() {
  return (
    <div className="App">
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width="100%"
        height="400px"
      />
    </div>
  );
}

export default App;
