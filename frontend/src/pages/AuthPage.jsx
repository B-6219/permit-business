import React, { useState } from 'react';
import { User, Lock, Phone, CreditCard, ArrowRight, ShieldCheck } from 'lucide-react';

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [userType, setUserType] = useState('Individual'); // Individual or Organisation

    return (
        <div className="min-h-screen grid lg:grid-cols-2 bg-white font-sans">
            {/* Visual Side */}
            <div className="hidden lg:flex flex-col justify-center bg-slate-900 p-20 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('')] bg-cover"></div>
                <div className="relative z-10">
                    <h2 className="text-5xl font-bold mb-6 leading-tight">Access Secure <br /><span className="text-emerald-400 font-serif italic">NairobiPay Services</span></h2>
                    <p className="text-slate-400 text-lg mb-12 max-w-md">
                        The official [Nairobi eServices Portal]() allows citizens to manage permits, parking, and land rates securely.
                    </p>
                    <div className="space-y-6">
                        <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                            <ShieldCheck className="text-emerald-500" />
                            <p className="text-sm">Secure 256-bit Encryption for all payments</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form Side */}
            <div className="flex items-center justify-center p-8 md:p-16">
                <div className="w-full max-w-md">
                    <div className="text-center mb-10">
                        <h1 className="text-3xl font-bold text-slate-900 mb-2">
                            {isLogin ? 'Welcome Back' : 'Create Account'}
                        </h1>
                        <p className="text-slate-500">
                            {isLogin ? 'Enter your details to access your dashboard' : 'Join the [Nairobi Pay]() ecosystem'}
                        </p>
                    </div>

                    {/* User Type Toggle (Sign Up Only) */}
                    {!isLogin && (
                        <div className="flex p-1 bg-slate-100 rounded-xl mb-8">
                            {['Individual', 'Organisation'].map((type) => (
                                <button
                                    key={type}
                                    onClick={() => setUserType(type)}
                                    className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${userType === type ? 'bg-white text-emerald-700 shadow-sm' : 'text-slate-500'}`}
                                >
                                    {type}
                                </button>
                            ))}
                        </div>
                    )}

                    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                        {!isLogin && (
                            <div className="relative">
                                <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder={userType === 'Individual' ? "National ID Number" : "KRA PIN / Business Reg No."}
                                    className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                                />
                            </div>
                        )}

                        <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder={isLogin ? "National ID / Phone Number" : "Full Name as per ID"}
                                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                            />
                        </div>

                        {!isLogin && (
                            <div className="relative">
                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                                <input
                                    type="tel"
                                    placeholder="Mobile Number (07xx xxx xxx)"
                                    className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                                />
                            </div>
                        )}

                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                            <input
                                type="password"
                                placeholder="Secure Password"
                                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                            />
                        </div>

                        {isLogin && (
                            <div className="text-right">
                                <button className="text-sm font-semibold text-emerald-700 hover:underline">Forgot Password?</button>
                            </div>
                        )}

                        <button className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-800 transition-all shadow-lg shadow-slate-200">
                            {isLogin ? 'Log In' : 'Proceed to OTP Verification'} <ArrowRight size={18} />
                        </button>
                    </form>

                    <div className="mt-10 text-center">
                        <p className="text-slate-500">
                            {isLogin ? "Don't have an account?" : "Already have an account?"}
                            <button
                                onClick={() => setIsLogin(!isLogin)}
                                className="ml-2 font-bold text-emerald-700 hover:underline"
                            >
                                {isLogin ? 'Register Here' : 'Log In'}
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
