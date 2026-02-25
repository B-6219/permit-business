import React from 'react';
import { Mail, Phone, MapPin, Clock, Globe, MessageSquare } from 'lucide-react';

const ContactPage = () => {
    const contactMethods = [
        {
            icon: <Phone className="w-6 h-6 text-emerald-600" />,
            title: "Call Us",
            details: ["+254 725 624 489", "+254 730 047 047"],
            description: "Available for general inquiries."
        },
        {
            icon: <Mail className="w-6 h-6 text-emerald-600" />,
            title: "Email Us",
            details: ["info@nairobi.go.ke"],
            description: "Official correspondence and feedback."
        },
        {
            icon: <MapPin className="w-6 h-6 text-emerald-600" />,
            title: "Visit Us",
            details: ["City Hall, City Hall Way", "P.O Box 30075-00100, Nairobi"],
            description: "Headquarters & Administrative offices."
        }
    ];

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Hero Header */}
            <section className="bg-slate-900 text-white py-20 px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Nairobi City County</h1>
                <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                    We are committed to providing transparent and accessible services. Reach out to our team for assistance or visit the [Nairobi eServices Portal](
                    ) for digital payments.
                </p>
            </section>

            <div className="max-w-7xl mx-auto px-6 mt-16">
                {/* Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {contactMethods.map((method, idx) => (
                        <div key={idx} className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center transition-transform hover:-translate-y-2 duration-300">
                            <div className="bg-emerald-50 p-5 rounded-2xl mb-6">{method.icon}</div>
                            <h3 className="text-xl font-bold text-slate-800 mb-3">{method.title}</h3>
                            {method.details.map((line, i) => (
                                <p key={i} className="text-slate-600 font-medium text-lg">{line}</p>
                            ))}
                            <p className="text-slate-400 text-sm mt-4">{method.description}</p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
                    {/* Service-Specific Help Desks */}
                    <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-slate-200">
                        <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                            <MessageSquare className="text-emerald-600" /> Departmental Contacts
                        </h2>
                        <ul className="space-y-8">
                            {[
                                { label: "Parking Complaints", sub: "Issues or payment errors", info: "0709 013 943" },
                                { label: "Public Health", sub: "Food hygiene & medical certificates", info: "City Hall 3rd Floor" },
                                { label: "Land & Planning", sub: "Building permits & inspections", info: "City Hall Annex" }
                            ].map((item, i) => (
                                <li key={i} className="flex justify-between items-start group">
                                    <div>
                                        <h4 className="font-bold text-slate-800 group-hover:text-emerald-700 transition-colors">{item.label}</h4>
                                        <p className="text-slate-500 text-sm">{item.sub}</p>
                                    </div>
                                    <span className="bg-emerald-50 text-emerald-700 px-4 py-2 rounded-xl font-bold text-sm border border-emerald-100">
                                        {item.info}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-10 pt-8 border-t border-slate-100">
                            <p className="text-sm text-slate-400 italic leading-relaxed">
                                For a comprehensive list of specific office extensions, please refer to the [Nairobi City County Help Desks](
                                ) document.
                            </p>
                        </div>
                    </div>

                    {/* Map & Office Hours */}
                    <div className="bg-[#e0daad] p-12 rounded-[3rem] shadow-sm flex flex-col justify-between border border-emerald-900/5">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                                <Clock className="text-emerald-700" /> Operating Hours
                            </h2>
                            <div className="space-y-5">
                                <div className="flex justify-between text-slate-800 text-lg border-b border-black/5 pb-2">
                                    <span className="font-semibold">Monday – Friday</span>
                                    <span>8:00 AM – 5:00 PM</span>
                                </div>
                                <div className="flex justify-between text-slate-800 text-lg border-b border-black/5 pb-2">
                                    <span className="font-semibold">Saturday</span>
                                    <span>8:00 AM – 12:00 PM</span>
                                </div>
                                <div className="flex justify-between text-red-700 font-bold text-lg">
                                    <span>Sunday & Holidays</span>
                                    <span>Closed</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 bg-white/40 p-8 rounded-4x1 border border-white/60">
                            <h3 className="text-xl font-bold mb-3 text-slate-900">Quick Support via USSD</h3>
                            <p className="text-slate-800 mb-6 leading-relaxed">
                                Need immediate payment assistance? Dial <strong className="text-emerald-800 text-xl">*647#</strong> on your mobile to access NairobiPay services instantly.
                            </p>
                            <button className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold hover:bg-emerald-800 hover:shadow-lg transition-all duration-300">
                                Log a Support Ticket
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
