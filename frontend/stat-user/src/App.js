import "./i18n";

import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Route from "./router/route";

function App() {
    return (
        <BrowserRouter>
            <Route />
        </BrowserRouter>
    );
}

export default App;
