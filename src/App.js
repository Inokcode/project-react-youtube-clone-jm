import './App.css';
// import youtube from './api/youtube';
import { Grid } from '@mui/material';
import { SearchBar, VideoDetails, VideoList } from './components';

//
function App() {
  return (
    <div className="App">
      <h1>YouTube Clone App</h1>
      <Grid container spacing={16} justifyContent="center">
        <Grid item xs={12}>
          <Grid container spacing={16}>
            <Grid item xs={12}>
              <SearchBar />
            </Grid>
            <Grid item xs={8}>
              <VideoDetails />
            </Grid>
            <Grid item xs={4}>
              <VideoList />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
