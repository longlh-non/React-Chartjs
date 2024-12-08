import React from 'react';
import logo from './logo.svg';
import './App.css';
import TabsVertical from './components/TabsVertical'
import MainPage from "./MainPage";
import { PageProvider } from "./PageContext";

function App() {
  return (
    <div className="App">
      <PageProvider>
        <MainPage />
      </PageProvider>
    </div>
  );
}

export default App;
