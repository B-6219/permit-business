
import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'


const applicationMenu = [
    {
        img: assets.parking,
        title: 'Parking Licensing Services',
        description: 'Manage parking permits, fines, and related fees for public parking throughout the county.'
    },
    {
        img: assets.health,
        title: 'Health Services',
        description: 'Access and pay for hospital services, SHIF contributions, health permits, public health licenses, and more'
    },
    {
        img: assets.business,
        title: 'Business Licensing Services',
        description: 'Apply for and manage business licenses, permits, and related fees for operating within Nairobi County.'
    },
    {
        img: assets.land,
        title: 'Land and Property Services',
        description: 'Access land records, pay for land rates, and manage property-related services within Nairobi County.'
    },
    {
        img: assets.education,
        title: 'Education Services',
        description: 'Pay for school fees, access educational resources, and manage education-related services within Nairobi County.'
    },
    {
        img: assets.essential,
        title: 'Transport and Vehicle Services',
        description: 'Manage vehicle registration, pay for road licenses, and access transport-related services within Nairobi County.'
    },
    {
        img: assets.property,
        title: 'Water and Sanitation Services',
        description: 'Pay for water bills, access sanitation services, and manage related services within Nairobi County.'
    },
    {
        img: assets.ad,
        title: 'Advertisement Services',
        description: 'Request advertising permits, pay billboard fees, and access other advertising-related services.'
    }
]

const Application = () => {

    const navigate = useNavigate()

    return (
        <div className="min-h-screen bg-gray-50/50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
            <section className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                        Nairobi City County
                        <span className="block text-emerald-600 mt-2 text-3xl md:text-4xl">Government Services</span>
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed">
                        The NairobiPay Portal enables you to access and make payments for a wide range of services. Please select a service below to proceed.
                    </p>
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {applicationMenu.map((item, index) => (
                        <div
                            key={index}
                            className="group relative flex flex-col bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out"
                        >
                            {/* Icon/Image Container */}
                            <div className="mb-6 w-10 h-10 bg-emerald-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <img src={item.img} alt={item.title} className="w-20 h-20" />
                            </div>

                            <h2 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-emerald-700 transition-colors">
                                {item.title}
                            </h2>

                            <p className="text-slate-500 text-sm leading-6 mb-8 grow">
                                {item.description}
                            </p>

                            <button
                                onClick={() => navigate('/auth', { state: { mode: 'signup' } })}
                                className="w-full py-4 px-6 font-semibold text-slate-800 border-2 border-slate-100 rounded-2xl bg-[#e0daad] hover:bg-slate-900 hover:text-white active:scale-95 transition-all duration-200">
                                Start Application
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Application
