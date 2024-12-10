import React from 'react';

import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';

import logo from './logo.svg';
import './App.css';
import TabsVertical from './components/TabsVertical'
import MainPage from "./MainPage";
import { PageProvider } from "./PageContext";

import Header from "./components/Header"
import Sidebar from "./components/Sidebar"

function App() {
  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
        <div className="App">
        <PageProvider>
          <Header />
          <Sidebar />
          <MainPage />
        </PageProvider>
      </div>
    </CssVarsProvider>

  );
}

export default App;
