import SolonHero from '@/components/marketing/solon-hero'
import { FourPillars } from '@/components/marketing/four-pillars'
import { TransparencyDemo } from '@/components/marketing/transparency-demo'

export default function Home() {
  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="pt-16">
        <SolonHero language="en" />
      </section>

      {/* Four Pillars Section */}
      <section id="pillars" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              The Four Pillars of Bitcoin-Native Governance
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Solon revolutionizes organizational governance through complete transparency,
              cryptographic democracy, and Bitcoin-native financial operations.
            </p>
          </div>
          <FourPillars />
        </div>
      </section>

      {/* Live Demo Section */}
      <section id="demo" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              See Transparency in Action
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every transaction, decision, and vote is permanently recorded on the Bitcoin blockchain
              for complete auditability and public verification.
            </p>
          </div>
          <TransparencyDemo />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-solon-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Revolutionize Your Organization?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Join the future of transparent governance. Every decision, every transaction,
            every vote - cryptographically verified and permanently auditable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-solon-orange text-white px-8 py-3 rounded-lg hover:bg-solon-orange-dark transition-colors font-semibold">
              Start Your Organization
            </button>
            <button className="border border-gray-400 text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors font-semibold">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded-full solon-gradient flex items-center justify-center">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
                <span className="font-bold text-xl">Solon</span>
              </div>
              <p className="text-gray-400 mb-4">
                Bitcoin-Native Governance for the Digital Age. Complete transparency,
                cryptographic democracy, and revolutionary organizational governance.
              </p>
              <div className="flex space-x-4">
                <span className="text-gray-400">🇨🇭 Made in Switzerland</span>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Four Pillars</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Bitcoin Integration</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Solon. All rights reserved. Powered by Bitcoin.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
