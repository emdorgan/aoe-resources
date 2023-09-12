import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from '@emotion/react';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import { createTheme } from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
            light: '#42a5f5',
            dark: '#1565c0',
            contrastText: '#fff',
        }
    }
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
        <Router>
            <Layout/>
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/about" Component={About} />
            </Routes>
        </Router>
    </ThemeProvider>
  );
}

export default App;
