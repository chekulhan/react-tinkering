import "./styles.css";
import MyButton from "./components/MyButton";
import MyData from "./components/MyData";
import Quiz from "./components/Quiz";
import MyDetails from "./components/MyDetails";
import Car from "./components/Car";
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <MyButton />
      <Quiz />
      <MyData />
      <h1>My details:</h1>
      <MyDetails />
      <Car wheels="10" brand="BMW" message="Here is a BMW" colour="true"/>
      <Car wheels="4" brand="Ford" message="Here is a Ford" />
    </div>
  );
}
