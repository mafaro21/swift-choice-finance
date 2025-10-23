// app/page.tsx
'use client'
import { useState } from 'react'
import Image from 'next/image'
import Logo from '@/public/img/swift.png'

export default function Home() {
  const [amount, setAmount] = useState(5000)
  const [loanTerm, setLoanTerm] = useState(12)

  const features = [
    {
      icon: '🤝',
      title: 'Personal Service',
      description: 'Get dedicated support from our friendly team throughout your loan journey.'
    },
    {
      icon: '💳',
      title: 'Flexible Terms',
      description: 'Choose repayment terms from 3 to 24 months that work for your budget.'
    },
    {
      icon: '🛡️',
      title: 'Secure & Safe',
      description: 'Your information is protected with bank-level security encryption.'
    },
    {
      icon: '📊',
      title: 'Transparent Rates',
      description: 'No hidden fees. Know exactly what you\'ll pay from day one.'
    }
  ]

  const calculateMonthlyPayment = () => {
    const monthlyRate = 0.09 // 9% monthly interest
    const establishmentFee = amount * 0.04 // 4% establishment fee
    const principalWithFee = amount + establishmentFee
    const payment = (principalWithFee * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -loanTerm))
    return {
      monthlyPayment: payment.toFixed(2),
      establishmentFee: establishmentFee.toFixed(2),
      totalPayment: (payment * loanTerm).toFixed(2)
    }
  }

  const currentYear = new Date().getFullYear()
  const calculation = calculateMonthlyPayment()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Image
                  src={Logo}
                  alt='Swift Choice Logo'
                  height={45}
                  className="h-8 w-auto md:h-10"
                />
                <h1 className="hidden md:block text-xl lg:text-2xl font-bold text-[#2A3E9D] ml-3">
                  Swift Choice Finance
                </h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
              <a href="#services" className="text-gray-800 hover:text-[#2A3E9D] font-medium transition duration-200">Services</a>
              <a href="#how-it-works" className="text-gray-800 hover:text-[#2A3E9D] font-medium transition duration-200">How It Works</a>
              <a href="#faq" className="text-gray-800 hover:text-[#2A3E9D] font-medium transition duration-200">FAQ</a>
            </nav>

            {/* Apply Now Button */}
            <div className="flex items-center">
              <button className="bg-[#2A3E9D] text-white px-4 py-2 md:px-6 md:py-2 rounded-lg hover:bg-[#1E2E7A] transition duration-200 font-semibold shadow-md text-sm md:text-base">
                Apply Now
              </button>
            </div>
          </div>

          {/* Mobile Navigation - Simple horizontal */}
          <div className="lg:hidden bg-white border-t border-gray-200 py-3">
            <nav className="flex justify-center space-x-6 px-2">
              <a href="#services" className="text-gray-800 hover:text-[#2A3E9D] font-medium transition duration-200 text-sm">
                Services
              </a>
              <a href="#how-it-works" className="text-gray-800 hover:text-[#2A3E9D] font-medium transition duration-200 text-sm">
                How It Works
              </a>
              <a href="#faq" className="text-gray-800 hover:text-[#2A3E9D] font-medium transition duration-200 text-sm">
                FAQ
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
              Personal Loans in Harare,
              <span className="text-[#2A3E9D] block"> Made Simple</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 mb-6 md:mb-8 leading-relaxed">
              Get the funds you need with Swift Choice Finance. Reliable personal loans from $500 to $10,000.
              Apply online or visit our office in Harare for personalized service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-[#2A3E9D] text-white px-6 py-3 md:px-8 md:py-3 rounded-lg hover:bg-[#1E2E7A] transition duration-200 font-semibold shadow-lg text-base md:text-lg">
                Apply Online
              </button>
              <button className="border border-[#2A3E9D] text-[#2A3E9D] px-6 py-3 md:px-8 md:py-3 rounded-lg hover:bg-[#2A3E9D] hover:text-white transition duration-200 font-semibold text-base md:text-lg">
                Visit Office
              </button>
            </div>
            <div className="mt-6 md:mt-8 flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 text-sm text-gray-700">
              <div className="flex items-center">
                <div className="w-3 h-3 md:w-4 md:h-4 bg-green-600 rounded-full mr-2"></div>
                Transparent pricing
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 md:w-4 md:h-4 bg-green-600 rounded-full mr-2"></div>
                Flexible repayment
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 md:w-4 md:h-4 bg-green-600 rounded-full mr-2"></div>
                Online & In-person
              </div>
            </div>
          </div>
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-200 max-w-md mx-auto lg:max-w-none w-full">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 text-center">Quick Loan Estimate</h3>
            <div className="space-y-4 md:space-y-6">
              {/* Loan Amount */}
              <div>
                <label className="block text-base md:text-lg font-semibold text-gray-800 mb-2 md:mb-3 text-center">
                  I need: ${amount.toLocaleString()}
                </label>
                <input
                  type="range"
                  min="500"
                  max="10000"
                  step="100"
                  value={amount}
                  onChange={(e) => setAmount(parseInt(e.target.value))}
                  className="w-full h-2 md:h-3 bg-[#2A3E9D]/20 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs md:text-sm font-medium text-gray-700 mt-1 md:mt-2">
                  <span>$500</span>
                  <span>$10,000</span>
                </div>
              </div>

              {/* Loan Term */}
              <div>
                <label className="block text-base md:text-lg font-semibold text-gray-800 mb-2 md:mb-3 text-center">
                  Pay back in: {loanTerm} months
                </label>
                <input
                  type="range"
                  min="3"
                  max="24"
                  step="1"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(parseInt(e.target.value))}
                  className="w-full h-2 md:h-3 bg-[#2A3E9D]/20 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs md:text-sm font-medium text-gray-700 mt-1 md:mt-2">
                  <span>3 months</span>
                  <span>24 months</span>
                </div>
              </div>

              {/* Calculation Results */}
              <div className="bg-[#2A3E9D]/10 p-3 md:p-4 rounded-lg border border-[#2A3E9D]/20">
                <div className="space-y-2 md:space-y-3 text-sm md:text-base">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800 font-medium">Monthly Payment:</span>
                    <span className="text-lg md:text-xl font-bold text-[#2A3E9D]">${calculation.monthlyPayment}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800 font-medium">Establishment Fee:</span>
                    <span className="font-semibold text-gray-800">${calculation.establishmentFee}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800 font-medium">Interest Rate:</span>
                    <span className="font-semibold text-gray-800">9% per month</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800 font-medium">Total Repayment:</span>
                    <span className="font-semibold text-gray-800">${calculation.totalPayment}</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-[#2A3E9D] text-white py-3 md:py-4 rounded-lg hover:bg-[#1E2E7A] transition duration-200 font-semibold text-base md:text-lg shadow-lg">
                Get Started Today
              </button>
              <p className="text-center text-xs md:text-sm text-gray-600 font-medium">
                Apply online or visit our Harare office
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Swift Choice Finance?</h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto px-4">
              We're committed to providing reliable, transparent, and affordable personal loan solutions for Harare residents.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-4 md:p-6 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-lg transition duration-200 group hover:border-[#2A3E9D]/30">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#2A3E9D]/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 text-xl md:text-2xl group-hover:bg-[#2A3E9D]/20 transition duration-200">
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">{feature.title}</h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-12 md:py-20 bg-[#2A3E9D]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg md:text-xl text-gray-700">Choose your preferred way to apply - online or in-person</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-200 hover:shadow-xl transition duration-200">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#2A3E9D]/10 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 text-xl md:text-2xl">
                💻
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 md:mb-4 text-center">Apply Online</h3>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-[#2A3E9D] text-white rounded-full flex items-center justify-center text-xs md:text-sm font-bold mt-1 mr-3 flex-shrink-0">1</div>
                  <p className="text-sm md:text-base text-gray-700">Fill out our simple online application form</p>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-[#2A3E9D] text-white rounded-full flex items-center justify-center text-xs md:text-sm font-bold mt-1 mr-3 flex-shrink-0">2</div>
                  <p className="text-sm md:text-base text-gray-700">Submit required documents digitally</p>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-[#2A3E9D] text-white rounded-full flex items-center justify-center text-xs md:text-sm font-bold mt-1 mr-3 flex-shrink-0">3</div>
                  <p className="text-sm md:text-base text-gray-700">Receive decision and get funds deposited</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-200 hover:shadow-xl transition duration-200">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#2A3E9D]/10 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 text-xl md:text-2xl">
                🏢
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 md:mb-4 text-center">Apply In-Person</h3>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-[#2A3E9D] text-white rounded-full flex items-center justify-center text-xs md:text-sm font-bold mt-1 mr-3 flex-shrink-0">1</div>
                  <p className="text-sm md:text-base text-gray-700">Visit our Harare office at 61 Mbuya Nehanda</p>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-[#2A3E9D] text-white rounded-full flex items-center justify-center text-xs md:text-sm font-bold mt-1 mr-3 flex-shrink-0">2</div>
                  <p className="text-sm md:text-base text-gray-700">Meet with our loan specialists</p>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-[#2A3E9D] text-white rounded-full flex items-center justify-center text-xs md:text-sm font-bold mt-1 mr-3 flex-shrink-0">3</div>
                  <p className="text-sm md:text-base text-gray-700">Get personalized assistance and funding</p>
                </div>
              </div>
              <div className="mt-4 md:mt-6 p-3 md:p-4 bg-[#2A3E9D]/10 rounded-lg border border-[#2A3E9D]/20">
                <p className="text-xs md:text-sm text-gray-700">
                  <strong className="text-gray-900">Office Location:</strong><br />
                  61 Mbuya Nehanda, Harare<br />
                  <strong className="text-gray-900">Hours:</strong> Mon-Fri 8AM-5PM, Sat 9AM-1PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg md:text-xl text-gray-700">Get answers to common questions about our personal loan process</p>
          </div>
          <div className="flex flex-col lg:flex-row gap-4 md:gap-8 max-w-6xl mx-auto">
            {/* Left Column */}
            <div className="flex-1 space-y-3 md:space-y-4">
              {[
                {
                  question: "What are the eligibility requirements?",
                  answer: "You must be at least 18 years old, a resident of Harare or surrounding areas, have a valid bank account, and provide proof of income."
                },
                {
                  question: "How long does the application process take?",
                  answer: "Online applications take about 15 minutes to complete. In-person applications at our Harare office typically take 30-45 minutes including consultation."
                },
                {
                  question: "What are the interest rates and fees?",
                  answer: "We charge 9% monthly interest with a 4% establishment fee. All fees are clearly disclosed before you accept the loan."
                },
                {
                  question: "What is the late payment penalty?",
                  answer: "Late payments incur a penalty of 1% per day of the outstanding amount, not exceeding 10% per month."
                },
                {
                  question: "Can I apply both online and in-person?",
                  answer: "Yes! You can start your application online and visit our office to complete it, or apply entirely in-person. We're flexible to meet your needs."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition duration-200">
                  <details className="group">
                    <summary className="flex justify-between items-center p-4 md:p-6 cursor-pointer hover:bg-gray-100 transition duration-200">
                      <h3 className="text-base md:text-lg font-semibold text-gray-900 pr-4 leading-relaxed">{faq.question}</h3>
                      <span className="flex-shrink-0 ml-2">
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-[#2A3E9D] transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <div className="px-4 md:px-6 pb-4 md:pb-6">
                      <p className="text-sm md:text-base text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </details>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="flex-1 space-y-3 md:space-y-4">
              {[
                {
                  question: "What is the maximum loan amount?",
                  answer: "We offer personal loans from $500 to $10,000. The exact amount you qualify for depends on your income and financial situation."
                },
                {
                  question: "Do I need to provide any collateral?",
                  answer: "No, our personal loans are unsecured and do not require any collateral or security."
                },
                {
                  question: "What documents do I need to apply?",
                  answer: "You'll need proof of identity (ID/passport), proof of income (payslips or bank statements), and proof of residence in Harare."
                },
                {
                  question: "Can I pay off my loan early?",
                  answer: "Yes, you can pay off your personal loan at any time without any prepayment penalties. Early repayment can save you on interest costs."
                },
                {
                  question: "Where is your office located?",
                  answer: "Our office is located at 61 Mbuya Nehanda, Harare. We're open Monday to Friday 8AM-5PM and Saturday 9AM-1PM."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition duration-200">
                  <details className="group">
                    <summary className="flex justify-between items-center p-4 md:p-6 cursor-pointer hover:bg-gray-100 transition duration-200">
                      <h3 className="text-base md:text-lg font-semibold text-gray-900 pr-4 leading-relaxed">{faq.question}</h3>
                      <span className="flex-shrink-0 ml-2">
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-[#2A3E9D] transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <div className="px-4 md:px-6 pb-4 md:pb-6">
                      <p className="text-sm md:text-base text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-[#2A3E9D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-lg md:text-xl text-blue-100 mb-6 md:mb-8">
            Get the funds you need with transparent terms and personal service.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-[#2A3E9D] px-6 py-3 md:px-8 md:py-3 rounded-lg hover:bg-blue-50 transition duration-200 font-semibold text-base md:text-lg shadow-lg">
              Apply Online
            </button>
            <button className="border border-white text-white px-6 py-3 md:px-8 md:py-3 rounded-lg hover:bg-white hover:text-[#2A3E9D] transition duration-200 font-semibold text-base md:text-lg">
              Visit Our Office
            </button>
          </div>
          <div className="mt-4 md:mt-6 text-blue-100 text-sm md:text-base">
            <p>📞 +263 78 123 4567 • 📍 61 Mbuya Nehanda, Harare</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="md:col-span-2 lg:col-span-1">
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-[#2A3E9D]">Swift Choice Finance</h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                Providing reliable personal loan solutions with transparent terms and excellent customer service to Harare residents.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 md:mb-4 text-gray-300 text-sm md:text-base">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                <li><a href="#services" className="hover:text-[#2A3E9D] transition duration-200">Services</a></li>
                <li><a href="#how-it-works" className="hover:text-[#2A3E9D] transition duration-200">How It Works</a></li>
                <li><a href="#faq" className="hover:text-[#2A3E9D] transition duration-200">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 md:mb-4 text-gray-300 text-sm md:text-base">Contact Us</h4>
              <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                <li className="flex items-center">
                  <span className="mr-2">📞</span>
                  +263 78 123 4567
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✉️</span>
                  info@swiftchoicefinance.co.zw
                </li>
                <li className="flex items-center">
                  <span className="mr-2">📍</span>
                  61 Mbuya Nehanda
                </li>
                <li>Harare, Zimbabwe</li>
              </ul>
            </div>
            <div className="md:col-span-2 lg:col-span-1">
              <h4 className="font-semibold mb-3 md:mb-4 text-gray-300 text-sm md:text-base">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                <li><a href="#" className="hover:text-[#2A3E9D] transition duration-200">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[#2A3E9D] transition duration-200">Terms of Service</a></li>
                <li><a href="#" className="hover:text-[#2A3E9D] transition duration-200">Disclosures</a></li>
                <li><a href="#" className="hover:text-[#2A3E9D] transition duration-200">Compliance</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {currentYear} Swift Choice Finance. All rights reserved.</p>
            <p className="mt-2 text-xs md:text-sm">Swift Choice Finance is a registered financial services provider in Zimbabwe.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 18px;
          width: 18px;
          border-radius: 50%;
          background: #2A3E9D;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        .slider::-moz-range-thumb {
          height: 18px;
          width: 18px;
          border-radius: 50%;
          background: #2A3E9D;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        
        @media (min-width: 768px) {
          .slider::-webkit-slider-thumb {
            height: 20px;
            width: 20px;
          }
          .slider::-moz-range-thumb {
            height: 20px;
            width: 20px;
          }
        }
      `}</style>
    </div>
  )
}