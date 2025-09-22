"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Users,
  Shield,
  MapPin,
  Receipt,
  UserCheck,
  BarChart3,
  Lock,
  Truck,
  Database,
  Clock,
  Smartphone,
  Globe,
  CheckCircle,
  Zap,
  Eye,
  TrendingUp,
  FileText,
  CreditCard,
  Bell,
  Settings,
  Activity,
} from "lucide-react";

export default function FeaturesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [setHoveredFeature] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const featureTabs = [
    {
      id: "sales",
      title: "Sales Management",
      icon: TrendingUp,
      color: "from-blue-500 to-indigo-600",
      description: "Complete sales pipeline management",
      features: [
        {
          icon: Users,
          title: "Customer Management",
          description:
            "Comprehensive customer profiles with interaction history, credit limits, and relationship tracking.",
          benefits: [
            "360° customer view",
            "Credit limit tracking",
            "Interaction history",
          ],
          highlight: "Real-time updates",
        },
        {
          icon: MapPin,
          title: "Route Planning",
          description:
            "AI-powered route optimization for field sales teams with GPS tracking and visit scheduling.",
          benefits: [
            "Optimized travel routes",
            "Visit scheduling",
            "Real-time tracking",
          ],
          highlight: "Save 30% travel time",
        },
        {
          icon: Smartphone,
          title: "Mobile Sales App",
          description:
            "Complete CRM functionality on mobile devices for field sales representatives.",
          benefits: [
            "Offline capability",
            "GPS check-ins",
            "Mobile order creation",
          ],
          highlight: "Works offline",
        },
        {
          icon: FileText,
          title: "Sales Orders",
          description:
            "Create, manage, and track sales orders with automated pricing and inventory checks.",
          benefits: [
            "Automated pricing",
            "Inventory validation",
            "Order tracking",
          ],
          highlight: "Instant processing",
        },
      ],
    },
    {
      id: "finance",
      title: "Financial Control",
      icon: Receipt,
      color: "from-emerald-500 to-teal-600",
      description: "Advanced financial management and compliance",
      features: [
        {
          icon: Receipt,
          title: "VAT Management",
          description:
            "Automated VAT calculations with configurable rates and compliance reporting for multiple jurisdictions.",
          benefits: [
            "Multi-rate VAT support",
            "Compliance reporting",
            "Automated calculations",
          ],
          highlight: "Tax compliant",
        },
        {
          icon: CreditCard,
          title: "Invoice Automation",
          description:
            "Generate and send invoices automatically from sales orders with payment tracking.",
          benefits: ["Auto-generation", "Payment tracking", "Overdue alerts"],
          highlight: "Reduce manual work by 80%",
        },
        {
          icon: BarChart3,
          title: "Financial Reporting",
          description:
            "Comprehensive financial reports including P&L, cash flow, and VAT returns.",
          benefits: ["Real-time reports", "Cash flow analysis", "VAT returns"],
          highlight: "Live financial data",
        },
        {
          icon: Clock,
          title: "Payment Tracking",
          description:
            "Monitor outstanding invoices, payment status, and automated reminder systems.",
          benefits: [
            "Payment reminders",
            "Aging reports",
            "Cash flow forecasting",
          ],
          highlight: "Never miss payments",
        },
      ],
    },
    {
      id: "security",
      title: "Security & Access",
      icon: Shield,
      color: "from-violet-500 to-purple-600",
      description: "Enterprise-grade security and user management",
      features: [
        {
          icon: Lock,
          title: "JWT Authentication",
          description:
            "Secure, stateless authentication system with token-based access control.",
          benefits: [
            "Stateless security",
            "Token-based auth",
            "Session management",
          ],
          highlight: "Bank-level security",
        },
        {
          icon: UserCheck,
          title: "Role-Based Access",
          description:
            "Granular permission system with predefined roles for Admin, Salesperson, and Accountant.",
          benefits: [
            "Granular permissions",
            "Predefined roles",
            "Access control",
          ],
          highlight: "Principle of least privilege",
        },
        {
          icon: Activity,
          title: "Audit Logging",
          description:
            "Complete audit trail of all system activities with immutable logs for compliance.",
          benefits: [
            "Complete audit trail",
            "Compliance ready",
            "Immutable logs",
          ],
          highlight: "Full accountability",
        },
        {
          icon: Settings,
          title: "System Configuration",
          description:
            "Flexible system settings with environment-specific configurations and security policies.",
          benefits: [
            "Environment configs",
            "Security policies",
            "Flexible settings",
          ],
          highlight: "Highly configurable",
        },
      ],
    },
    {
      id: "operations",
      title: "Operations Hub",
      icon: Database,
      color: "from-orange-500 to-red-600",
      description: "Streamlined operational workflows",
      features: [
        {
          icon: Truck,
          title: "Inventory Management",
          description:
            "Real-time inventory tracking with automated stock updates and reorder alerts.",
          benefits: [
            "Real-time tracking",
            "Auto stock updates",
            "Reorder alerts",
          ],
          highlight: "Never run out of stock",
        },
        {
          icon: Database,
          title: "Product Catalog",
          description:
            "Centralized product management with pricing, descriptions, and VAT categories.",
          benefits: [
            "Centralized catalog",
            "Dynamic pricing",
            "VAT categorization",
          ],
          highlight: "Single source of truth",
        },
        {
          icon: Bell,
          title: "Automated Workflows",
          description:
            "Smart automation for routine tasks including order processing and notifications.",
          benefits: [
            "Process automation",
            "Smart notifications",
            "Workflow triggers",
          ],
          highlight: "Reduce manual tasks by 70%",
        },
        {
          icon: Globe,
          title: "Multi-Location Support",
          description:
            "Manage multiple business locations with centralized control and local customization.",
          benefits: [
            "Multi-location",
            "Centralized control",
            "Local customization",
          ],
          highlight: "Scale globally",
        },
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-0 bg-gradient-to-b from-white to-gray-50/50 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-72 h-72 bg-blue-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-purple-100/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-100/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full mb-6">
            <Zap className="w-4 h-4 text-blue-600" />
            <span className="text-blue-600 font-semibold text-sm">
              Powerful Features
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-6 leading-tight">
            Everything You Need to
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Scale Your Business
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From sales automation to financial compliance, our comprehensive CRM
            platform provides all the tools your growing business needs in one
            unified system.
          </p>
        </div>

        {/* Feature Tabs */}
        <div
          className={`mb-16 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {featureTabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`group relative px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? "text-white shadow-2xl transform scale-105"
                    : "text-gray-600 bg-white/60 backdrop-blur-sm shadow-lg hover:bg-white/80 hover:scale-105"
                }`}
              >
                {activeTab === index && (
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${tab.color} rounded-2xl`}
                  />
                )}
                <div className="relative flex items-center space-x-3">
                  <tab.icon className="w-5 h-5" />
                  <span>{tab.title}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Active Feature Content */}
        <div
          className={`transition-all duration-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {featureTabs[activeTab].title}
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {featureTabs[activeTab].description}
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {featureTabs[activeTab].features.map((feature, index) => (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${featureTabs[activeTab].color} rounded-3xl blur opacity-20 group-hover:opacity-30 transition-all duration-300`}
                />
                <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-white/50 hover:bg-white transition-all duration-300 h-full">
                  {/* Feature Header */}
                  <div className="flex items-start space-x-4 mb-6">
                    <div
                      className={`p-3 bg-gradient-to-br ${featureTabs[activeTab].color} text-white rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {/* Benefits List */}
                  <div className="space-y-3 mb-6">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div
                        key={benefitIndex}
                        className="flex items-center space-x-3"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Highlight Badge */}
                  <div
                    className={`inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r ${featureTabs[activeTab].color} text-white rounded-full text-sm font-semibold shadow-lg`}
                  >
                    <Eye className="w-4 h-4" />
                    <span>{feature.highlight}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
