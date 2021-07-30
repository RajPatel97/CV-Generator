import Header from "./components/Header";
function App() {
  return (
    <div className="body-content">
      <Header />
      <div className="button-container">
        <button className="general-info">Add Some General Information about yourself</button><br />
        <button className="general-info">Add Some Work Experience</button><br />
        <button className="general-info">Add Your Education Information</button>
      </div>

      
    </div>
    
  );
}

export default App;
