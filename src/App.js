import './App.css'
import CustomizedAccordions from './Components/Boxbar';
import Vidios from './Components/Data';
import ButtonAppBar from './Components/Navbar';
import Video2 from './Components/Video';
function App() {
  return (
    <div>
      <ButtonAppBar/>
      <Video2/>
      <Vidios/>
      <CustomizedAccordions/>

    </div>
  );
}

export default App;
