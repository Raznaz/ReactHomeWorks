import { Container, Grid } from '@mui/material';
import Header from './components/Header/Header';
import Registration from './components/Registration/Registration';
import WinnerInfo from './components/WinnerInfo/WinnerInfo';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import CardsList from './components/Cards/CardsList';
import Search from './components/Search/Search';

function App() {
	return (
		<Provider store={store}>
			<Header />
			<Container maxWidth="xl">
				<Grid container spacing={2}>
					<Grid item xs={8} sx={{ bgcolor: '#e1e1e1', p: 2 }}>
						<Search />
						<CardsList />
					</Grid>
					<Grid item xs={4} sx={{ bgcolor: '#eee', p: 2 }}>
						<Registration />
						<WinnerInfo />
					</Grid>
				</Grid>
			</Container>
		</Provider>
	);
}

export default App;
