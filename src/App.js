import { Container, Grid } from '@mui/material';
import Header from './components/Header/Header';
import Registration from './components/Registration/Registration';
import WinnerInfo from './components/WinnerInfo/WinnerInfo';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import CardsList from './components/Cards/CardsList';
import Search from './components/Search/Search';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Game from './pages/Game';
import Error from './pages/Error';

function App() {
	return (
		<>
			<BrowserRouter>
				<Provider store={store}>
					<Header />
					<Container maxWidth="xl">
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/about" component={About} />
							<Route path="/competition/:id" component={Game} />
							<Route component={Error} />
						</Switch>
						{/* <Grid container spacing={2}>
							<Grid item xs={8} sx={{ bgcolor: '#e1e1e1', p: 2 }}>
								<Search />
								<CardsList />
							</Grid>
							<Grid item xs={4} sx={{ bgcolor: '#eee', p: 2 }}>
								<Registration />
								<WinnerInfo />
							</Grid>
						</Grid> */}
					</Container>
				</Provider>
			</BrowserRouter>
		</>
	);
}

export default App;
