import { BrowserRouter} from 'react-router-dom';
import './App.css'
import Navbar from './Navbar';
import Routing from './Routing';


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Routing />
            </BrowserRouter>
        </div>
    );
}

export default App;