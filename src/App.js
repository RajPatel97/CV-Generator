import Header from "./components/Header";
import GeneralInformation from "./components/General";
import Education from "./components/Education";
function App() {
  return (
    <div className="body-content">
      <Header />
      <div className="input-container">
      <GeneralInformation />
      <Education />
      </div>

      
    </div>
    
  );
}

export default App;
