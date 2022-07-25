import "./App.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Navigation from "./components/Navigation";

function App(): JSX.Element {
  return (
    <div className="app">
      <Header />
      <Main />
      <Navigation />
    </div>
  );
}

export default App;
