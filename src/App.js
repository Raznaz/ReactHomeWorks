import { useRegContext } from './actions/RegState';
import Header from './components/layout/Header';
import Result from './components/Result';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
// import { useRegContext } from './Context/RegState';

function App() {
	const { state } = useRegContext();

	return (
		<>
			<Header />
			{state.step === 1 && <Step1 />}
			{state.step === 2 && <Step2 />}
			{state.step === 3 && <Step3 />}
			{state.step === 4 && <Step4 />}
			{state.step === 5 && <Result />}
		</>
	);
}

export default App;
