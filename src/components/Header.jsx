import logo from '../assets/logo.svg'
import { FaSearch } from 'react-icons/fa'

function Header() {
    return (
        <header className='flex mb-6 items-center gap-10 px-10 py-6'>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className='flex text-primary items-center'>
                <FaSearch className='translate-x-6' />
                <input className='bg-transparent placeholder-primary px-8 py-2' type="search" placeholder='Search artists' name="search" id="search" />
            </div>
        </header>
    )
}

export default Header