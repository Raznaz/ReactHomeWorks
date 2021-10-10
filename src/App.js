import Header from './components/layout/Header';
import Result from './components/Result';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import { useRegContext } from './Context/RegState';

function App() {
	const { state } = useRegContext();

	return (
		<>
			<Header />
			{state.step === 1 ? <Step1 /> : null}
			{state.step === 2 ? <Step2 /> : null}
			{state.step === 3 ? <Step3 /> : null}
			{state.step === 4 ? <Step4 /> : null}
			{state.step === 5 ? <Result /> : null}
		</>
	);
}

export default App;
