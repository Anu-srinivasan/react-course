import "./App.css";
import Expenses from "./components/Expenses";
function App() {
  const expenses = [
    { id: "e1", title: "New TV", amount: 799.0, date: new Date(2022, 2, 15) },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 300.5,
      date: new Date(2022, 1, 14),
    },
    { id: "e3", title: "Food", amount: 120.0, date: new Date(2022, 1, 13) },
    { id: "e4", title: "grocery", amount: 100.0, date: new Date(2022, 1, 28) },
  ];
  return (
    <div>
      <Expenses items={expenses}/>
    </div>
  )
  
}

export default App;
