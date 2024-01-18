import './App.css';
import {Box} from "@mui/material";
import Header from "./components/Header";
import Projects from './components/Projects';

function App() {
  return (
    <Box className="App" sx={{ width: '100%'}}>
        <Header />
        <Projects />
    </Box>
  );
}

export default App;
