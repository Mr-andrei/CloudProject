import React, {useEffect} from 'react';
import './app.css'
import RouteFile from "./routes/RouteFile";
import {BrowserRouter} from "react-router-dom";
import {useAppDispatch} from "./redux/store/store";
import {authTC} from "./redux/thunk/logInThunks";

// #004D64
function App() {
    const dispatch = useAppDispatch()

    useEffect(()=>{
        dispatch(authTC())
    },[])

    return (
        <div className="App">
            <BrowserRouter>
                <RouteFile/>
            </BrowserRouter>
        </div>
    );
}

export default App;
