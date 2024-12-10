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
          <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
            <Header />
            <Sidebar />
            <Box
              component="main"
              className="MainContent"
              sx={{
                px: { xs: 2, md: 6 },
                pt: {
                  xs: 'calc(12px + var(--Header-height))',
                  sm: 'calc(12px + var(--Header-height))',
                  md: 3,
                },
                pb: { xs: 2, sm: 2, md: 3 },
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                minWidth: 0,
                height: '100dvh',
                gap: 1,
              }}
            >
              <MainPage />
            </Box>
          </Box>
          
        </PageProvider>
      </div>
    </CssVarsProvider>

  );
}

export default App;
