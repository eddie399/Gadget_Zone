import React from 'react'
import logo from '../components/images/elelogo.png'
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <footer className='bg-slate-900 shadow-md'>
        <div className="container mx-auto px-4">
            <div className="min-h-16">
                <div className='flex justify-between items-center flex-col md:flex-row py-10'>
                    <h2 className='text-4xl font-bold text-white'>Subscribe To Our Newsletter</h2>
                    <form className='md:w-1/3 w-full mt-8 md:mt-0 relative'>
                        <input type="text" placeholder='enter your email' 
                        className='py-4 px-4 rounded shadow-md w-full bg-gray-200'
                        />
                        <button className='bg-gray-300 py-3 px-4 rounded-full absolute right-3 top-1'>submit</button>
                    </form>
                </div>
            </div>
        </div>

        <div className='bg-slate-800 text-white py-8'>
            <div className="container mx-auto px-4">
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4'>
                    <div>
                        <img src={logo} alt="logo_footer" className='my-4' />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                             Quibusdam minima aliquam dolore aperiam necessitatibus
                             , rem expedita eligendi voluptate eveniet quos.
                        </p>
                        <div className='flex mt-4 gap-4 items-center'>
                            <Facebook size={40} className='bg-white text-black rounded-md p-2'/>
                            <Twitter size={40} className='bg-white text-black rounded-md p-2'/>
                            <Instagram size={40} className='bg-white text-black rounded-md p-2'/>
                            <Youtube size={40} className='bg-white text-black rounded-md p-2'/>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-2xl font-semibold my-4'>Pages</h2>
                        <ul>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                             <Link to='/'>About</Link>
                            </li>
                            <li>
                                <Link to='/'>Faq</Link>
                            </li>
                                
                            <li>
                                <Link to='/'>Contact</Link>
                            </li>
                        </ul>
                    </div>

                    
                    <div>
                        <h2 className='text-2xl font-semibold my-4'>Categories</h2>
                        <ul>
                            <li>
                                <Link to='/'>Phones</Link>
                            </li>
                            <li>
                             <Link to='/'>Monitors</Link>
                            </li>
                            <li>
                                <Link to='/'>Computers</Link>
                            </li>
                                
                            <li>
                                <Link to='/'>Power Supply</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-2xl font-semibold my-4'>Contact</h2>
                        <p>Lilongwe, Area 3, along chipasula road</p>
                        <p>+265 887 627 368</p>
                        <p>+256 998 546 355</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='container text-white mx-auto text-center py-4'>
            <p>Copyright &copy; 2025 EJ_PIXELS</p>
        </div>
    </footer>
  )
}

export default Footer