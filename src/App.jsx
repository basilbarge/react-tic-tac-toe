import { useState } from 'react'
import './App.css'

function Square() {
	const [value, setValue] = useState(null)	

	function handleClick() {
		setValue('X')
	}


	return <button onClick={handleClick} className="square">{value}</button>
}

function Board() {

	return (<>
		<div className='board-row'>
			<Square />
			<Square />
			<Square />
		</div>
		<div className='board-row'>
			<Square />
			<Square />
			<Square />
		</div>
		<div className='board-row'>
			<Square />
			<Square />
			<Square />
		</div>

		</>);
	
}

export default Board
