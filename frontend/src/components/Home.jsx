

import React from 'react'
import { assets } from '../assets/assets'
import Application from './Application'


const Home = () => {
    return (

        <div>
            <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">

                {/* Background Image */}
                <img
                    src={assets.banner}
                    className="absolute inset-0 w-full h-full object-cover brightness-50"
                    alt="Cover"
                />


                {/* Overlay (optional extra dim) */}
                <div className="absolute inset-0 bg-black/40" />

                {/* Foreground Content */}
                <div className="relative z-10 text-center max-w-2xl px-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-white">
                        Welcome to Nairobi eServices Portal
                    </h1>

                    <p className="mt-4 text-lg text-white/80">
                        Access our services easily and quickly. Create an account and get to enjoy Nairobi County services online.
                    </p>

                    <div className='gap-3 justify-center flex mt-6'>
                        <button className="mt-6 px-6 py-3 bg-green-400 text-black rounded-full font-semibold hover:bg-green-500 transition">
                            Sign Up
                        </button>
                        <button className="mt-6 px-6 py-3 bg-green-400 text-black rounded-full font-semibold hover:bg-green-500 transition">
                            Login
                        </button>
                    </div>

                </div>

            </section>

            <Application />
        </div>

    )
}

export default Home



