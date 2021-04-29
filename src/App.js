import './App.css';
import ModulMath from './moduls/modulMath';
import {useState} from 'react';


//Всім, привіт, додатково до дз зробіть по counter кнопки - increment, decrement, reset(тобто коли натискаєте на
// кнопко то counter = 0), а також кнопки increment + 100, decrement - 100
function App() {
	let [acc, setAcc] = useState(0);
	let incrs100 = ()=> setAcc(acc + 100)
	let incrs1 = ()=> setAcc(acc + 1)
	let incrs0 = ()=> setAcc(acc = 0)
	let incrs_1 = ()=> setAcc(acc - 1)
	let incrs_100 = ()=> setAcc(acc - 100)


	return (
		<div>
			<p className={'pesky'}>{acc}</p>
			<br/>
			<button onClick={incrs100}>100</button>
			<button onClick={incrs1}>1</button>

			<button onClick={incrs0}>0</button>
			<button onClick={incrs_1}>-1</button>
			<button onClick={incrs_100}>-100</button>
		</div>
	);
}

export default App;
