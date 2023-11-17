import "./styles.css";
import MyButton from "./components/MyButton";
import MyData from "./components/MyData";
import Quiz from "./components/Quiz";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <MyButton />
      <Quiz />
      <MyData />
    </div>
  );
}
