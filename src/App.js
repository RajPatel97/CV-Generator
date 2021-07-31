import Header from "./components/Header";
import GeneralInformation from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";
import CVdisplay from "./components/CVdisplay";
function App() {
  return (
    <div>
    <Header />
    <div className="body-content">
      <div className="input-container">
      <GeneralInformation />
      <Education />
      <Experience />
      </div>
      {/* add logic for the cv display here*/}
      <CVdisplay />
    </div>
    </div>
  );
}

export default App;
