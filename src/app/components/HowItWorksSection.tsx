"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Users,
  Shield,
  BarChart3,
  TrendingUp,
  FileText,
  Settings,
  Activity,
  Play,
  Target,
  Route,
  Package,
  ChevronRight,
  Star,
  CheckCircle,
  ArrowRight,
  LucideIcon,
} from "lucide-react";

type AnimatedNumbers = {
  revenue?: number;
  efficiency?: number;
  uptime?: number;
  users?: number;
};

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type Role = {
  title: string;
  description: string;
  features: string[];
  gradient: string;
};

type Step = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [animatedNumbers, setAnimatedNumbers] = useState<AnimatedNumbers>({});

  useEffect(() => {
    const targets: AnimatedNumbers = {
      revenue: 47,
      efficiency: 92,
      uptime: 99.9,
      users: 15000,
    };

    Object.entries(targets).forEach(([key, target]) => {
      let current = 0;
      const increment = target! / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target!) {
          current = target!;
          clearInterval(timer);
        }
        setAnimatedNumbers((prev) => ({ ...prev, [key]: current }));
      }, 30);
    });

    const stepInterval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 4000);

    return () => clearInterval(stepInterval);
  }, []);

  const features: Feature[] = [
    {
      icon: Users,
      title: "Customer Management",
      description:
        "360° customer view with interaction history and advanced analytics.",
    },
    {
      icon: FileText,
      title: "Transaction Management",
      description: "Automated invoicing and real-time payment tracking.",
    },
    {
      icon: Package,
      title: "Inventory & VAT",
      description: "Real-time stock levels with integrated VAT compliance.",
    },
    {
      icon: Route,
      title: "Field Operations",
      description: "Smart route planning and mobile workforce tracking.",
    },
    {
      icon: Shield,
      title: "Security & Access",
      description: "JWT authentication with role-based permissions.",
    },
    {
      icon: BarChart3,
      title: "Analytics & Reports",
      description: "Real-time dashboards with actionable business insights.",
    },
  ];

  const roles: Role[] = [
    {
      title: "Sales Teams",
      description:
        "Pipeline management, customer insights, and mobile CRM access.",
      features: ["Lead scoring", "Mobile check-ins", "Performance analytics"],
      gradient: "from-blue-500 to-blue-600",
    },
    {
      title: "Field Operations",
      description: "Route optimization, visit tracking, and real-time updates.",
      features: ["GPS tracking", "Visit logging", "Offline sync"],
      gradient: "from-green-500 to-green-600",
    },
    {
      title: "Finance Teams",
      description: "Automated invoicing, VAT management, and payment tracking.",
      features: ["VAT compliance", "Payment tracking", "Financial reports"],
      gradient: "from-purple-500 to-purple-600",
    },
  ];

  const steps: Step[] = [
    {
      icon: Settings,
      title: "Quick Setup",
      description: "Import data and configure in minutes",
    },
    {
      icon: Users,
      title: "Team Onboarding",
      description: "Add users with role-based access",
    },
    {
      icon: Activity,
      title: "Go Live",
      description: "Start managing operations immediately",
    },
    {
      icon: TrendingUp,
      title: "Scale & Optimize",
      description: "Grow with advanced analytics",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Complete CRM for{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block">
                Modern Businesses
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-6 max-w-xl mx-auto lg:mx-0">
              Streamline sales, manage customers, and optimize operations with
              our all-in-one CRM platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-6">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center gap-2">
                Start Free Trial <ArrowRight className="w-4 h-4" />
              </button>
              <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center justify-center gap-2">
                <Play className="w-4 h-4" />
                Watch Demo
              </button>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-gray-500">
              {["14-day free trial", "No setup fees", "Cancel anytime"].map(
                (text, i) => (
                  <div key={i} className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    {text}
                  </div>
                )
              )}
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop"
                alt="CRM Dashboard"
                width={600}
                height={400}
                className="w-full h-64 sm:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg p-3 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="bg-green-100 p-1.5 rounded">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <div className="text-xs text-gray-600">Revenue</div>
                  <div className="text-lg font-bold text-green-600">+47%</div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-white rounded-lg p-3 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="bg-blue-100 p-1.5 rounded">
                  <Users className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <div className="text-xs text-gray-600">Active Users</div>
                  <div className="text-lg font-bold text-blue-600">15K+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Everything you need in one platform
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive CRM tools designed for modern business operations
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-6 border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                {React.createElement(feature.icon, {
                  className: "w-6 h-6 text-blue-600",
                })}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Role-Based Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Built for every team
          </h2>
          <p className="text-lg text-gray-600">
            Specialized tools for different roles in your organization
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {roles.map((role, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div
                className={`bg-gradient-to-r ${role.gradient} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}
              >
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {role.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm">{role.description}</p>
              <ul className="space-y-2">
                {role.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center gap-2 text-sm text-gray-600"
                  >
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Get started in minutes
          </h2>
          <p className="text-lg text-gray-600">
            Simple onboarding process to get your team productive quickly
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative p-6 rounded-xl transition-all ${
                activeStep === index
                  ? "bg-blue-600 text-white transform scale-105"
                  : "bg-white text-gray-900 border border-gray-100 hover:shadow-md"
              }`}
            >
              <div className="absolute -top-3 left-6 bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                {index + 1}
              </div>
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 mt-2 ${
                  activeStep === index ? "bg-white/20" : "bg-gray-100"
                }`}
              >
                {React.createElement(step.icon, {
                  className: `w-5 h-5 ${
                    activeStep === index ? "text-white" : "text-gray-700"
                  }`,
                })}
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p
                className={`text-sm ${
                  activeStep === index ? "text-blue-100" : "text-gray-600"
                }`}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl lg:text-4xl font-bold text-blue-400 mb-2">
              {Math.round(animatedNumbers.revenue || 0)}%
            </div>
            <div className="text-gray-300 text-sm">Average Revenue Growth</div>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-bold text-green-400 mb-2">
              {Math.round(animatedNumbers.efficiency || 0)}%
            </div>
            <div className="text-gray-300 text-sm">Efficiency Improvement</div>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-bold text-yellow-400 mb-2">
              {animatedNumbers.uptime?.toFixed(1) || 0}%
            </div>
            <div className="text-gray-300 text-sm">System Uptime</div>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-bold text-purple-400 mb-2">
              {Math.round(animatedNumbers.users || 0).toLocaleString()}+
            </div>
            <div className="text-gray-300 text-sm">Active Users</div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <Image
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
            alt="Customer"
            width={80}
            height={80}
            className="w-16 h-16 rounded-full mx-auto mb-6 object-cover"
          />
          <blockquote className="text-xl font-medium text-gray-900 mb-4 max-w-3xl mx-auto">
            CRMPro transformed our operations completely. The integrated
            approach boosted our efficiency by 47% in just 6 months.
          </blockquote>
          <div className="text-gray-600">
            <div className="font-medium">Stefan Persson</div>
            <div className="text-sm">Operations Director</div>
          </div>
          <div className="flex justify-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to grow your business?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses streamlining operations with our CRM
            platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2">
              Start Free Trial <ChevronRight className="w-4 h-4" />
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Schedule Demo
            </button>
          </div>
          <p className="text-sm text-blue-200 mt-4">
            14-day free trial • No credit card required
          </p>
        </div>
      </section>
    </div>
  );
}
