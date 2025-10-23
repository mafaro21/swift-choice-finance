// app/page.tsx
'use client'
import Image from 'next/image'
import { useState } from 'react'
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
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                {/* <div className="w-8 h-8 bg-blue-600 rounded-full mr-3"></div> */}
                <Image src={Logo} alt='Swift Choice Logo' height={45} />
                <h1 className="text-2xl font-bold text-blue-800">Swift Choice Finance</h1>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium">Services</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 font-medium">How It Works</a>
              <a href="#faq" className="text-gray-700 hover:text-blue-600 font-medium">FAQ</a>
            </nav>
            <div className="flex items-center">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200 font-semibold">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Personal Loans in Harare,
              <span className="text-blue-600"> Made Simple</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Get the funds you need with Swift Choice Finance. Reliable personal loans from $500 to $10,000.
              Apply online or visit our office in Harare for personalized service.
            </p>
            <div className="flex space-x-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-200 font-semibold">
                Apply Online
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition duration-200 font-semibold">
                Visit Office
              </button>
            </div>
            <div className="mt-8 flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
                Transparent pricing
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
                Flexible repayment
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
                Online & In-person
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Quick Loan Estimate</h3>
            <div className="space-y-6">
              {/* Loan Amount */}
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3 text-center">
                  I need: ${amount.toLocaleString()}
                </label>
                <input
                  type="range"
                  min="500"
                  max="10000"
                  step="100"
                  value={amount}
                  onChange={(e) => setAmount(parseInt(e.target.value))}
                  className="w-full h-3 bg-blue-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm font-medium text-gray-700 mt-2">
                  <span>$500</span>
                  <span>$10,000</span>
                </div>
              </div>

              {/* Loan Term */}
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3 text-center">
                  Pay back in: {loanTerm} months
                </label>
                <input
                  type="range"
                  min="3"
                  max="24"
                  step="1"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(parseInt(e.target.value))}
                  className="w-full h-3 bg-blue-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm font-medium text-gray-700 mt-2">
                  <span>3 months</span>
                  <span>24 months</span>
                </div>
              </div>

              {/* Calculation Results */}
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">Monthly Payment:</span>
                    <span className="text-xl font-bold text-blue-700">${calculation.monthlyPayment}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">Establishment Fee:</span>
                    <span className="text-lg font-semibold text-gray-800">${calculation.establishmentFee}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">Interest Rate:</span>
                    <span className="text-lg font-semibold text-gray-800">9% per month</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">Total Repayment:</span>
                    <span className="text-lg font-semibold text-gray-800">${calculation.totalPayment}</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition duration-200 font-semibold text-lg shadow-lg">
                Get Started Today
              </button>
              <p className="text-center text-sm text-gray-600 font-medium">
                Apply online or visit our Harare office
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Swift Choice Finance?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to providing reliable, transparent, and affordable personal loan solutions for Harare residents.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-lg transition duration-200">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Choose your preferred way to apply - online or in-person</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                💻
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Apply Online</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1 mr-3">1</div>
                  <p className="text-gray-600">Fill out our simple online application form</p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1 mr-3">2</div>
                  <p className="text-gray-600">Submit required documents digitally</p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1 mr-3">3</div>
                  <p className="text-gray-600">Receive decision and get funds deposited</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                🏢
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Apply In-Person</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1 mr-3">1</div>
                  <p className="text-gray-600">Visit our Harare office at 61 Mbuya Nehanda</p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1 mr-3">2</div>
                  <p className="text-gray-600">Meet with our loan specialists</p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1 mr-3">3</div>
                  <p className="text-gray-600">Get personalized assistance and funding</p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Office Location:</strong><br />
                  61 Mbuya Nehanda, Harare<br />
                  <strong>Hours:</strong> Mon-Fri 8AM-5PM, Sat 9AM-1PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Get answers to common questions about our personal loan process</p>
          </div>
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column */}
            <div className="flex-1 space-y-4">
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
                <div key={index} className="bg-gray-50 rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                  <details className="group">
                    <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-100 transition duration-200">
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                      <span className="flex-shrink-0 ml-2">
                        <svg className="w-5 h-5 text-blue-600 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </details>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="flex-1 space-y-4">
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
                <div key={index} className="bg-gray-50 rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                  <details className="group">
                    <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-100 transition duration-200">
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                      <span className="flex-shrink-0 ml-2">
                        <svg className="w-5 h-5 text-blue-600 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Get the funds you need with transparent terms and personal service.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition duration-200 font-semibold text-lg">
              Apply Online
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-200 font-semibold text-lg">
              Visit Our Office
            </button>
          </div>
          <div className="mt-6 text-blue-100">
            <p>📞 +263 78 123 4567 • 📍 61 Mbuya Nehanda, Harare</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-400">Swift Choice Finance</h3>
              <p className="text-gray-400">
                Providing reliable personal loan solutions with transparent terms and excellent customer service to Harare residents.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-blue-400 transition">Services</a></li>
                <li><a href="#how-it-works" className="hover:text-blue-400 transition">How It Works</a></li>
                <li><a href="#faq" className="hover:text-blue-400 transition">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-gray-400">
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
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-400 transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Disclosures</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Compliance</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {currentYear} Swift Choice Finance. All rights reserved.</p>
            <p className="mt-2 text-sm">Swift Choice Finance is a registered financial services provider in Zimbabwe.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #2563eb;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #2563eb;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  )
}