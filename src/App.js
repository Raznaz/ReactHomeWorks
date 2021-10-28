import { Container } from '@mui/material';
import Header from './components/Header/Header';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Game from './pages/Game';
import Error from './pages/Error';
import Create from './pages/Create';

function App() {
	return (
		<>
			<BrowserRouter>
				<Provider store={store}>
					<Header />
					<Container maxWidth="xl" sx={{ mb: 3 }}>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/about" component={About} />
							<Route path="/competition/:id" component={Game} />
							<Route path="/create" component={Create} />
							<Route component={Error} />
						</Switch>
					</Container>
				</Provider>
			</BrowserRouter>
		</>
	);
}

export default App;
