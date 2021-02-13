import "./App.css";
import FileUpload from "./components/FileUpload";

const App = () => {
  return (
    <div className='App'>
      <div className='ui raised very padded container segment center aligned'>
        <h2 className='ui header'>
          <div className='ui grid centered aligned'>
            <i className='fas fa-credit-card left'></i>
            <span className='right'>ANZ Institutional Lending</span>
          </div>
        </h2>

        <FileUpload />
      </div>
    </div>
  );
};

export default App;
