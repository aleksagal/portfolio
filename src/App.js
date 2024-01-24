import './App.css';
import {useState} from "react";
import {Box} from "@mui/material";
import StartingAnimation from "./components/StartingAnimation";
import Header from "./components/Header";
import Projects from './components/Projects';

function App() {
    const [animationEnded, setAnimationEnded] = useState(false);

    return (
    <Box className={"App"} sx={{ width: '100%'}}>
        {!animationEnded
            ? <StartingAnimation setAnimationEnded={setAnimationEnded} />
            : <>
                <Header />
                <Projects />
              </>
        }
    </Box>
  );
}

export default App;
