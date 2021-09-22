import "./app.css";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Wrapper from "./components/Wrapper";
import ContentPage from "./components/ContentPage";

import { json } from "d3";

const url = "https://covid19.mathdro.id/api/deaths";

json(url).then((data) => {
  console.log(data);
});

function App() {
  return (
    <div className="App">
      <Header />
      <Wrapper>
        <Sidebar />
      </Wrapper>
    </div>
  );
}

export default App;
