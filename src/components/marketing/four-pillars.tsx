'use client'

import { useState } from 'react'
import { Bitcoin, Scale, ShoppingCart, Users, ArrowRight, CheckCircle } from 'lucide-react'

export function FourPillars() {
  const [activePillar, setActivePillar] = useState<number | null>(null)

  const pillars = [
    {
      id: 1,
      icon: Bitcoin,
      title: "Transparent Transaction System",
      shortDesc: "All finances on Bitcoin blockchain",
      description: "Every financial transaction is permanently recorded on the Bitcoin blockchain, ensuring complete transparency and auditability. No more hidden spending or questionable financial decisions.",
      features: [
        "Real-time Bitcoin balance tracking",
        "Immutable transaction history",
        "Multi-signature wallet security",
        "Automated budget enforcement",
        "Cost reduction through Bitcoin efficiency"
      ],
      color: "from-orange-400 to-yellow-400",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      textColor: "text-orange-700"
    },
    {
      id: 2,
      icon: Scale,
      title: "Law Transparency Framework",
      shortDesc: "Cryptographically signed decisions",
      description: "Every organizational decision is cryptographically signed and tracked with effectiveness KPIs. Create transparent policies and measure their real-world impact.",
      features: [
        "Cryptographic decision signatures",
        "KPI effectiveness tracking",
        "Decision origin traceability",
        "Policy lifecycle management",
        "Impact measurement dashboard"
      ],
      color: "from-blue-400 to-indigo-400",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-700"
    },
    {
      id: 3,
      icon: ShoppingCart,
      title: "Open Service Marketplace",
      shortDesc: "Bitcoin-native procurement",
      description: "Transparent service procurement with Bitcoin payments. Open bidding, fair evaluation, and automated contract execution through smart contracts.",
      features: [
        "Open service request posting",
        "Transparent bidding process",
        "Bitcoin payment automation",
        "Vendor performance tracking",
        "Automated contract execution"
      ],
      color: "from-green-400 to-emerald-400",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      textColor: "text-green-700"
    },
    {
      id: 4,
      icon: Users,
      title: "Open Vote System",
      shortDesc: "Cryptographically verified democracy",
      description: "Democratic decision-making with cryptographic verification. Every vote is signed with Bitcoin keys and permanently recorded for complete auditability.",
      features: [
        "Cryptographic vote verification",
        "Real-time consensus tracking",
        "Flexible voting mechanisms",
        "Weighted voting by Bitcoin holdings",
        "Complete audit trail"
      ],
      color: "from-purple-400 to-pink-400",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      textColor: "text-purple-700"
    }
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {pillars.map((pillar) => {
        const IconComponent = pillar.icon
        const isActive = activePillar === pillar.id

        return (
          <div
            key={pillar.id}
            className={`relative group cursor-pointer transition-all duration-300 transform hover:scale-105 ${
              isActive ? 'z-10' : ''
            }`}
            onMouseEnter={() => setActivePillar(pillar.id)}
            onMouseLeave={() => setActivePillar(null)}
          >
            <div className={`rounded-2xl border-2 p-8 h-full transition-all duration-300 ${
              isActive
                ? `${pillar.bgColor} ${pillar.borderColor} shadow-2xl scale-105`
                : 'bg-white border-gray-200 shadow-lg hover:shadow-xl'
            }`}>

              {/* Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center shadow-lg`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{pillar.title}</h3>
                  <p className="text-gray-600 font-medium">{pillar.shortDesc}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                {pillar.description}
              </p>

              {/* Features */}
              <div className="space-y-3 mb-6">
                {pillar.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <CheckCircle className={`w-5 h-5 flex-shrink-0 ${pillar.textColor}`} />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex items-center space-x-2 text-sm font-semibold">
                <span className={`text-${pillar.textColor.split('-')[1]}-600`}>Learn more</span>
                <ArrowRight className={`w-4 h-4 ${pillar.textColor} transform group-hover:translate-x-1 transition-transform`} />
              </div>

              {/* Bitcoin Integration Note */}
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-100 transition-opacity">
                <Bitcoin className="w-6 h-6 text-orange-500" />
              </div>
            </div>
          </div>
        )
      })}

      {/* Integration Note */}
      <div className="lg:col-span-2 mt-8">
        <div className="bg-gradient-to-r from-solon-orange/10 to-solon-bitcoin/10 rounded-2xl p-8 border border-solon-orange/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Revolutionary Integration
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-4xl mx-auto">
              Unlike traditional governance platforms,               Solon doesn&apos;t just add transparency as an afterthought.
              Every pillar is designed from the ground up to leverage Bitcoin&apos;s revolutionary properties:
              <strong className="text-solon-orange"> decentralization, immutability, and cryptographic security</strong>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-solon-orange rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Decentralized</h4>
                <p className="text-gray-600 text-sm">No single point of failure or control</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-solon-orange rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Immutable</h4>
                <p className="text-gray-600 text-sm">Permanent record of all activities</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-solon-orange rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Cryptographic</h4>
                <p className="text-gray-600 text-sm">Mathematically verifiable security</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
