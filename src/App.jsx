import { useEffect } from 'react'
import { useAppContext } from './AppContext'
import getSchedule from './api/GetSchedule'
import './App.css'

import Header from './components/Header'
import ClassItem from './components/ClassItem'

function App() {
    const { data, setData } = useAppContext()

    useEffect(() => {
        async function fetchData() {
            const schedule = await getSchedule()
            setData(schedule)
        }
        fetchData()
    }, [])


    return (
        <main>
            {data ? <>
                <Header />
                <ClassItem />
            </> : <>Загрузка</>}
        </main>
    )
}

export default App
