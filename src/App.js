import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navy from "./Components/Navy/Navy";
import Footer from "./Components/Footer/Footer";
import Websites from "./Components/Websites/Websites";
function App() {
  return (
    <div>
      <Navy />
      <Websites />
      <Footer />
    </div>
  );
}

export default App;
