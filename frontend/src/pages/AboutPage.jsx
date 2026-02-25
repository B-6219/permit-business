import React from 'react';
import { Target, Eye, ShieldCheck, Users, Landmark, Award } from 'lucide-react';

const AboutPage = () => {
    const coreValues = [
        { icon: <ShieldCheck className="text-emerald-600" />, title: "Integrity", desc: "Upholding honesty and professional ethics in all undertakings." },
        { icon: <Eye className="text-emerald-600" />, title: "Transparency", desc: "Promoting openness and accountability for all decisions." },
        { icon: <Award className="text-emerald-600" />, title: "Excellence", desc: "Adhering to best practices to continuously improve service delivery." },
        { icon: <Users className="text-emerald-600" />, title: "Teamwork", desc: "Collaborating with stakeholders to realize our mandate." }
    ];

    return (
        <div className="bg-white min-h-screen font-sans">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 opacity-40 bg-[url('')] bg-cover bg-center"></div>
                <div className="relative z-10 text-center px-6">
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
                        The Green City <span className="text-emerald-400 font-serif italic text-4xl md:text-6xl block mt-2">Under the Sun</span>
                    </h1>
                    <p className="text-slate-200 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        Nairobi City County is the economic powerhouse of East Africa, contributing approximately **27.5% of Kenya's GDP**.
                    </p>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100 shadow-sm">
                        <div className="bg-emerald-600 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-200">
                            <Eye className="text-white" />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Vision</h2>
                        <p className="text-slate-600 text-lg leading-relaxed italic">
                            "To become the City of choice to invest, work and live in."
                        </p>
                    </div>
                    <div className="bg-[#e0daad] p-12 rounded-[3rem] border border-emerald-900/5 shadow-sm">
                        <div className="bg-slate-900 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-slate-200">
                            <Target className="text-white" />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Mission</h2>
                        <p className="text-slate-700 text-lg leading-relaxed">
                            To provide affordable, accessible and sustainable quality services, enhancing community participation and creating a secure climate for development.
                        </p>
                    </div>
                </div>
            </section>

            {/* History & Mandate */}
            <section className="py-24 bg-slate-50 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-bold mb-6">
                            <Landmark size={16} /> Est. March 2013
                        </div>
                        <h2 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">A Legacy of Growth & Devolution</h2>
                        <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                            <p>
                                Founded in 1899 as a simple railway depot, Nairobi—the "place of cool waters"—has grown into the most populous county in Kenya.
                            </p>
                            <p>
                                Following the [Constitution of Kenya 2010](https://www.klrc.go.ke), the defunct City Council was replaced by the **Nairobi City County Government**, established on **4 March 2013**.
                            </p>
                            <p>
                                Today, the County is led by the **Executive** (The Governor), the **Legislative Arm** (County Assembly), and the **Public Service Board**.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {coreValues.map((value, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-4xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                                <div className="mb-4">{value.icon}</div>
                                <h4 className="font-bold text-slate-900 mb-2">{value.title}</h4>
                                <p className="text-slate-500 text-sm">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 text-center px-6">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Want to learn more about our sectors?</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    <button className="px-10 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-emerald-800 transition-all">
                        View County Sectors
                    </button>
                    <button className="px-10 py-4 border-2 border-slate-900 text-slate-900 rounded-2xl font-bold hover:bg-slate-50 transition-all">
                        Download Service Charter
                    </button>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
