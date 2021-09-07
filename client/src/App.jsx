import "./app.css";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Wrapper from "./components/Wrapper";
import ContentPage from "./components/ContentPage";

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
