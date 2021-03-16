import { BrowserRouter} from 'react-router-dom';
import './App.scss'
import NavBar from './components/navbar/NavBar';
import Routing from './Routing';


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavBar />
                <Routing />
            </BrowserRouter>
        </div>
    );
}

export default App;