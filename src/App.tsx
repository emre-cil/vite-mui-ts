import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Routing from './routes/Routing';

const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Routing />
    </BrowserRouter>
  );
};

export default App;
