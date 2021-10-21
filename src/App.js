import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Nav />
      <Header />

      <div class="container" id="work">
        <h1 class="text-center m-1">My Work</h1>
        <div className="row featurette">
          <div classNameName="col-md-7 order-md-2"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
