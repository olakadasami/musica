import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Nav from '../components/Nav/Nav'

function HomeLayout() {
    return (
        <div className=''>
            <Header />

            <div className='flex gap-6 relative'>
                <Nav />
                <main>
                    <Outlet />
                </main>

            </div>
        </div>
    )
}

export default HomeLayout