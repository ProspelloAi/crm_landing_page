"use client";

import React, { useState } from "react";
import {
  Check,
  X,
  Star,
  Zap,
  Crown,
  Users,
  Database,
  Shield,
  BarChart3,
  Globe,
  Smartphone,
  FileText,
  Route,
  CreditCard,
  Package,
  ChevronRight,
  LucideIcon,
} from "lucide-react";

// Define interfaces for type safety
interface Feature {
  name: string;
  included: boolean;
}

interface Plan {
  name: string;
  description: string;
  price: { monthly: number; annual: number };
  icon: LucideIcon;
  color: "gray" | "blue" | "purple";
  popular: boolean;
  features: Feature[];
  cta: string;
  highlight: boolean;
}

interface AdditionalFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FAQ {
  question: string;
  answer: string;
}

export default function Prices() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">(
    "monthly"
  );

  const plans: Plan[] = [
    {
      name: "Free",
      description: "Perfect for getting started",
      price: { monthly: 0, annual: 0 },
      icon: Star,
      color: "gray",
      popular: false,
      features: [
        { name: "Up to 3 users", included: true },
        { name: "100 customer records", included: true },
        { name: "Basic CRM features", included: true },
        { name: "Email support", included: true },
        { name: "Mobile app access", included: true },
        { name: "API access", included: false },
        { name: "Advanced reporting", included: false },
        { name: "Route optimization", included: false },
        { name: "VAT management", included: false },
        { name: "Custom integrations", included: false },
        { name: "Priority support", included: false },
        { name: "Advanced analytics", included: false },
      ],
      cta: "Get Started Free",
      highlight: false,
    },
    {
      name: "Professional",
      description: "For growing businesses",
      price: { monthly: 29, annual: 290 },
      icon: Zap,
      color: "blue",
      popular: true,
      features: [
        { name: "Up to 25 users", included: true },
        { name: "Unlimited customer records", included: true },
        { name: "Full CRM suite", included: true },
        { name: "Email & chat support", included: true },
        { name: "Mobile app access", included: true },
        { name: "API access", included: true },
        { name: "Advanced reporting", included: true },
        { name: "Route optimization", included: true },
        { name: "VAT management", included: true },
        { name: "Standard integrations", included: true },
        { name: "Priority support", included: false },
        { name: "Advanced analytics", included: false },
      ],
      cta: "Start Free Trial",
      highlight: true,
    },
    {
      name: "Enterprise",
      description: "For large organizations",
      price: { monthly: 99, annual: 990 },
      icon: Crown,
      color: "purple",
      popular: false,
      features: [
        { name: "Unlimited users", included: true },
        { name: "Unlimited customer records", included: true },
        { name: "Full CRM suite", included: true },
        { name: "24/7 phone support", included: true },
        { name: "Mobile app access", included: true },
        { name: "API access", included: true },
        { name: "Advanced reporting", included: true },
        { name: "Route optimization", included: true },
        { name: "VAT management", included: true },
        { name: "Custom integrations", included: true },
        { name: "Priority support", included: true },
        { name: "Advanced analytics", included: true },
      ],
      cta: "Contact Sales",
      highlight: false,
    },
  ];

  const additionalFeatures: AdditionalFeature[] = [
    {
      icon: Users,
      title: "Customer Management",
      description: "Complete 360° customer view",
    },
    {
      icon: FileText,
      title: "Invoice Generation",
      description: "Automated billing and invoicing",
    },
    {
      icon: Route,
      title: "Route Planning",
      description: "Optimize field operations",
    },
    {
      icon: Package,
      title: "Inventory Tracking",
      description: "Real-time stock management",
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Business intelligence insights",
    },
    {
      icon: CreditCard,
      title: "Payment Processing",
      description: "Integrated payment solutions",
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "iOS and Android native apps",
    },
  ];

  const faqs: FAQ[] = [
    {
      question: "Can I change plans anytime?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, PayPal, and bank transfers for annual plans.",
    },
    {
      question: "Is there a setup fee?",
      answer:
        "No setup fees ever. We also provide free data migration assistance for new customers.",
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 30-day money-back guarantee on all paid plans.",
    },
  ];

  const getColorClasses = (color: Plan["color"], highlight = false) => {
    const colors = {
      gray: {
        bg: highlight ? "bg-gray-50" : "bg-white",
        border: highlight ? "border-gray-200" : "border-gray-100",
        icon: "bg-gray-100 text-gray-600",
        button: "bg-gray-900 text-white hover:bg-gray-800",
        accent: "text-gray-600",
      },
      blue: {
        bg: highlight ? "bg-blue-50" : "bg-white",
        border: highlight
          ? "border-blue-200 ring-2 ring-blue-100"
          : "border-gray-100",
        icon: "bg-blue-100 text-blue-600",
        button: "bg-blue-600 text-white hover:bg-blue-700",
        accent: "text-blue-600",
      },
      purple: {
        bg: highlight ? "bg-purple-50" : "bg-white",
        border: highlight ? "border-purple-200" : "border-gray-100",
        icon: "bg-purple-100 text-purple-600",
        button: "bg-purple-600 text-white hover:bg-purple-700",
        accent: "text-purple-600",
      },
    };
    return colors[color];
  };

  const calculateSavings = (monthly: number, annual: number) => {
    const monthlyCost = monthly * 12;
    const savings = monthlyCost - annual;
    const percentage = Math.round((savings / monthlyCost) * 100);
    return { amount: savings, percentage };
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Choose the perfect plan for your business. Start free, upgrade when
            you need more.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-white rounded-lg p-1 border border-gray-200">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                billingCycle === "monthly"
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors relative ${
                billingCycle === "annual"
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Annual
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                Save 17%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => {
            const colors = getColorClasses(plan.color, plan.highlight);
            const currentPrice = plan.price[billingCycle];
            const savings =
              billingCycle === "annual"
                ? calculateSavings(plan.price.monthly, plan.price.annual)
                : null;

            return (
              <div
                key={index}
                className={`relative rounded-2xl p-8 transition-all duration-300 hover:shadow-lg ${
                  colors.bg
                } ${colors.border} border-2 ${
                  plan.highlight ? "transform scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-3 py-1 text-sm font-medium rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${colors.icon}`}
                  >
                    <plan.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>

                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">
                      ${currentPrice}
                    </span>
                    <span className="text-gray-600">
                      {currentPrice === 0
                        ? "/forever"
                        : billingCycle === "monthly"
                        ? "/month"
                        : "/year"}
                    </span>
                  </div>

                  {savings && savings.amount > 0 && (
                    <div className="text-sm text-green-600 font-medium mb-4">
                      Save ${savings.amount}/year ({savings.percentage}% off)
                    </div>
                  )}

                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${colors.button}`}
                  >
                    {plan.cta}
                  </button>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">
                    What&apos;s included
                  </h4>
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                      )}
                      <span
                        className={`text-sm ${
                          feature.included ? "text-gray-700" : "text-gray-400"
                        }`}
                      >
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Everything you need to grow your business
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-xl border border-gray-100"
              >
                <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Frequently asked questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-100"
              >
                <h4 className="font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h4>
                <p className="text-gray-600 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Enterprise CTA */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Need something custom?</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a tailored solution with dedicated support, custom integrations,
            and enterprise-grade security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2">
              Contact Sales
              <ChevronRight className="w-4 h-4" />
            </button>
            <button className="border border-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
              Schedule Demo
            </button>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            Custom pricing • Dedicated support • SLA guarantee
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Trusted by over 15,000+ businesses worldwide
          </p>
          <div className="flex items-center justify-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span className="text-sm">Enterprise Security</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5" />
              <span className="text-sm">Global Support</span>
            </div>
            <div className="flex items-center gap-2">
              <Database className="w-5 h-5" />
              <span className="text-sm">99.9% Uptime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
