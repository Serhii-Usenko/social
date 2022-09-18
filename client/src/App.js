import './App.css';
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import Posts from './components/posts/Posts';
import Form from './components/form/Form';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';
import { useEffect, useState } from 'react';

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts())
  }, [currentId, dispatch])

  return (
    <Container maxWidth="lg">

      <AppBar position='static' color="inherit">
        <Typography variant="h2" align="center">
          Memories
        </Typography>
      </AppBar>

      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              
              <Posts setCurrentId={setCurrentId} />

            </Grid>
            <Grid item xs={12} sm={4}>
              
              <Form currentId={currentId} setCurrentId={setCurrentId} />

            </Grid>
          </Grid>
        </Container>
      </Grow>
      
    </Container>
  );
}

export default App;
