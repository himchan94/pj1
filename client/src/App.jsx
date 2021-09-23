import "./app.css";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Wrapper from "./components/Wrapper";
import CancerResearch from "./pages/CancerResearch";

function App() {
  return (
    <div className="App">
      <Header />
      <Wrapper>
        <Sidebar />
        <CancerResearch />
      </Wrapper>
    </div>
  );
}

export default App;
