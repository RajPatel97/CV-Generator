import Header from "./components/Header";
import GeneralInformation from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";
function App() {
  return (
    <div className="body-content">
      <Header />
      <div className="input-container">
      <GeneralInformation />
      <Education />
      <Experience />
      </div>

      
    </div>
    
  );
}

export default App;
