import React from 'react';
import CompetitionsList from '../components/Competitions/CompetitionsList';
import CompetitionItem from '../components/Competitions/CompetitionItem';
import SearchCompetition from '../components/Competitions/SearchCompetition';

function Home() {
	return (
		<div>
			<h1>Home page</h1>
			<SearchCompetition />
			<CompetitionsList />
		</div>
	);
}

export default Home;
