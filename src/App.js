import React, {useEffect, useState} from "react";
import Wrapper from "./components/Wrapper";
import Table from "./components/Header";
import Main from "./components/Main"
import {getUsers} from "./API";
import "./App.css";

function App(){
    return (
        <div className="App">
            <Wrapper>
                <Header/>
                <Main/>
            </Wrapper>
        </div>
    );
}

export default App;