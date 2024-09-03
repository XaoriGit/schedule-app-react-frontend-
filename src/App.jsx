import { useEffect } from 'react'
import { useAppContext } from './AppContext'
import getSchedule from './api/GetSchedule'
import './App.css'
import ClassSwiper from './components/screens/Classes/ClassSwiper'
import Settings from './components/screens/settings/Settings'

function App() {
    const { data, setData, onSettings } = useAppContext()

    useEffect(() => {
        async function fetchData() {
            const schedule = await getSchedule()
            setData(schedule)
        }
        fetchData()
    }, [])


    return (
        <main>
            {(onSettings) ?
                <Settings /> :
                <>{(data) ? <><ClassSwiper /></> : <>Загрузка</>}</>
            }
        </main>
    )
}

export default App
