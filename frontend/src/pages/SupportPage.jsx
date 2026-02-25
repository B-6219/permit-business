import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Search, PhoneCall } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick }) => (
    <div className="border-b border-slate-200 last:border-0">
        <button
            onClick={onClick}
            className="w-full py-6 flex justify-between items-center text-left hover:text-emerald-700 transition-colors"
        >
            <span className="text-lg font-semibold text-slate-800">{question}</span>
            {isOpen ? <ChevronUp className="text-emerald-600" /> : <ChevronDown className="text-slate-400" />}
        </button>
        <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
            <p className="text-slate-600 leading-relaxed whitespace-pre-line">{answer}</p>
        </div>
    </div>
);

const SupportPage = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "How do I pay for daily parking in Nairobi?",
            answer: "You can pay via the official USSD code: \n1. Dial *647# \n2. Select 'Parking Services' then 'Daily Parking' \n3. Enter your Vehicle License Plate and select the Parking Zone. \n4. Complete the M-Pesa prompt that appears on your phone."
        },
        {
            question: "What is the Unified Business Permit (UBP)?",
            answer: "The UBP combines multiple licenses (Trade License, Fire, Health, and Advertising) into one single permit to simplify the renewal process for business owners. You can apply for or renew it online via the [Nairobi eServices Portal]()."
        },
        {
            question: "Can I pay for county services using cash?",
            answer: "No. Nairobi City County operates a strictly NO CASH policy for revenue collection. All payments must be made digitally through [NairobiPay (*647#)]() or authorized bank accounts."
        },
        {
            question: "How do I check for outstanding land rates?",
            answer: "Visit the [Nairobi Pay Portal](), log into your account, and select 'Land & Property Services'. You can also dial *647# and follow the prompts for 'Land Services' to check your balance."
        },
        {
            question: "Who do I contact for parking complaints or payment errors?",
            answer: "For immediate assistance with parking issues, call the [Nairobi County Customer Care]() at: \n• 0709 013 943 \n• 0709 013 942"
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Header */}
            <section className="bg-slate-50 border-b border-slate-200 py-16 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl font-extrabold text-slate-900 mb-4">How can we help you?</h1>
                    <p className="text-slate-500 text-lg mb-8">Search our help center for quick answers to common questions.</p>
                    <div className="relative max-w-2xl mx-auto">
                        <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search services (e.g., 'parking', 'business permit')..."
                            className="w-full py-4 pl-14 pr-6 rounded-2xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none shadow-sm"
                        />
                    </div>
                </div>
            </section>

            {/* FAQ Accordion */}
            <div className="max-w-4xl mx-auto py-16 px-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
                    <HelpCircle className="text-emerald-600" /> Frequently Asked Questions
                </h2>
                <div className="bg-white rounded-3xl border border-slate-200 px-8 shadow-sm">
                    {faqs.map((faq, idx) => (
                        <FAQItem
                            key={idx}
                            {...faq}
                            isOpen={openIndex === idx}
                            onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                        />
                    ))}
                </div>

                {/* Call to Action */}
                <div className="mt-16 bg-[#e0daad] rounded-[2.5rem] p-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Still need help?</h3>
                        <p className="text-slate-700">Our customer service agents are available Monday to Friday, 8am - 5pm.</p>
                    </div>
                    <a
                        href="tel:+254725624489"
                        className="flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all"
                    >
                        <PhoneCall size={20} /> Contact Support
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SupportPage;
