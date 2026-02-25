import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Menu, X, UserCircle2 } from 'lucide-react' // Install lucide-react

const Navbar = () => {
    const navigate = useNavigate()
    const [visible, setVisible] = useState(false)

    const navLinks = [
        { path: '/', label: 'HOME' },
        { path: '/about', label: 'ABOUT' },
        { path: '/support', label: 'SUPPORT' },
        { path: '/contact', label: 'CONTACT' },
    ]

    return (
        <div className='sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-100'>
            <div className='max-w-7xl mx-auto flex items-center justify-between py-4 px-6 md:px-10 font-medium'>

                {/* Logo */}
                <Link to='/' className='transition-transform hover:scale-105'>
                    <img src={assets.logo} alt="Nairobi City County" className='w-32 md:w-40' />
                </Link>

                {/* Desktop Menu */}
                <ul className='hidden lg:flex gap-8 text-[13px] tracking-widest text-slate-600 font-bold'>
                    {navLinks.map((link) => (
                        <NavLink key={link.path} to={link.path} className='relative group'>
                            <p className='hover:text-emerald-700 transition-colors uppercase'>{link.label}</p>
                            <hr className='absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 border-none transition-all duration-300 group-hover:w-full' />
                        </NavLink>
                    ))}
                </ul>

                {/* Auth Buttons & Mobile Toggle */}
                <div className='flex items-center gap-4'>
                    <div className='hidden sm:flex items-center gap-3'>
                        <button
                            onClick={() => navigate('/auth', { state: { mode: 'login' } })}
                            className='px-6 py-2.5 text-slate-700 font-bold text-sm hover:text-emerald-700 transition-all'>
                            Login
                        </button>
                        <button
                            onClick={() => navigate('/auth', { state: { mode: 'signup' } })}
                            className='px-6 py-2.5 bg-slate-900 text-white rounded-xl text-sm font-bold shadow-lg shadow-slate-200 hover:bg-emerald-800 hover:-translate-y-0.5 transition-all active:scale-95'>
                            Sign Up
                        </button>
                    </div>

                    {/* Hamburger Icon */}
                    <button onClick={() => setVisible(true)} className='lg:hidden p-2 text-slate-700'>
                        <Menu size={28} />
                    </button>
                </div>
            </div>


            {/* Mobile Sidebar Menu */}
            <div className={`fixed inset-y-0 right-0 z-100 w-full bg-black shadow-2xl transition-all duration-500 ease-in-out transform ${visible ? 'translate-x-0' : 'translate-x-full'}`}>

                {/* Full Screen Overlay for extra safety */}
                <div className="flex flex-col h-full bg-white p-8">

                    {/* Top Header in Menu */}
                    <div className='flex items-center justify-between mb-12 border-b border-slate-50 pb-6'>
                        <img src={assets.logo} className='w-32' alt="Nairobi City" />
                        <button
                            onClick={() => setVisible(false)}
                            className='p-3 bg-slate-100 text-slate-900 rounded-full hover:bg-red-50 hover:text-red-600 transition-colors'
                        >
                            <X size={28} />
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <div className='flex flex-col gap-8'>
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                onClick={() => setVisible(false)}
                                to={link.path}
                                className={({ isActive }) => `text-2xl font-bold transition-colors ${isActive ? 'text-emerald-700' : 'text-slate-800'}`}
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </div>

                    {/* Bottom Actions */}
                    <div className='mt-auto space-y-4 pb-10'>
                        <p className="text-center text-slate-400 text-sm mb-4 font-medium italic">
                            Official [NairobiPay](https://nairobiservices.go.ke) Portal
                        </p>
                        <button
                            onClick={() => { setVisible(false); navigate('/auth', { state: { mode: 'signup' } }); }}
                            className='w-full py-5 bg-emerald-600 text-white rounded-2xl font-bold shadow-lg shadow-emerald-100 active:scale-95 transition-transform'
                        >
                            Get Started
                        </button>
                        <button
                            onClick={() => { setVisible(false); navigate('/auth', { state: { mode: 'login' } }); }}
                            className='w-full py-5 bg-slate-900 text-white rounded-2xl font-bold active:scale-95 transition-transform'
                        >
                            Sign In
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar
