import { useState, useEffect } from 'react'
import * as Icon from 'react-feather';
import './App.css'

import get_shedule from './api/GetSchedule'

function App() {
	const [data, setData] = useState(null)

	useEffect(() => {
		async function fetchData() {
			const schedule = await get_shedule()
			setData(schedule)
		}
		fetchData()
	}, [])


	return (
		<main>
			{data ? <>
				<header>
					<div>
						<div id='group'>{data[0].group}</div>
						<div id='date'>{data[0].schedule[0].date}</div>
					</div>
					<Icon.MoreVertical size={32} opacity={0.6}/>
				</header>
			</> : <>Загрузка</>}
		</main>
	)
}

export default App
