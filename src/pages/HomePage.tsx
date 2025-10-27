import { Leaf, Brain, Heart, Activity } from 'lucide-react';
import bg from "../assets/pp/bg.jpg";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative text-black py-20 overflow-hidden h-[35rem]">
        {/* Background image layer */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bg})`, opacity: 0.25 }}
        ></div>

        {/* Emerald gradient overlay */}

        {/* Soft light blur effects */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-64 h-64 bg-black rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-black rounded-full blur-3xl"></div>
        </div>

        {/* Main content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Leaf className="text-black" size={20} />
              <span className="text-sm font-medium">IT4010 – Research Project</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-black">
              Ayushasthra
            </h1>
            <p className="text-xl md:text-2xl mb-6 max-w-4xl mx-auto text-black">
              Ayurvedic Medicine Identification and Health Management System
            </p>

            {/* <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-300 rounded-full"></div>
                <span>Faculty of Computing, SLIIT</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-300 rounded-full"></div>
                <span>2024/25 June Intake</span>
              </div>
            </div> */}

            <div className="mt-6 text-black">
              <p className="font-medium">Research Supervisor</p>
              <p className="text-lg">Ms. Sanjeevi Chandrasiri</p>
            </div>
          </div>
        </div>
      </div>

      {/* Abstract and Highlights */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Abstract */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border-t-4 border-emerald-600">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="w-1 h-8 bg-emerald-600 mr-3"></span>
            Abstract
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-4">
              The <strong>Ayushasthra – Ayurvedic Medicine Identification and Health Management System</strong> represents
              a pioneering integration of artificial intelligence and traditional Ayurvedic medicine principles. This research
              project addresses a critical gap in modern healthcare by developing a comprehensive, AI-powered mobile platform
              that combines diagnostic precision with holistic, preventive wellness guidance rooted in centuries-old Ayurvedic wisdom.
            </p>
            <p className="mb-4">
              In an era where healthcare is increasingly reactive and specialized, our system offers a proactive, user-centric
              approach to health management. By leveraging advanced deep learning architectures including Convolutional Neural
              Networks (CNNs), InceptionV3, and MobileNetV2, the platform analyzes multiple diagnostic indicators such as tongue
              morphology, skin conditions, and facial emotional states to provide comprehensive health assessments.
            </p>
            <p className="mb-4">
              The system's innovation lies in its ability to translate AI-generated diagnostic insights into personalized
              Ayurvedic recommendations, including herbal remedies, dietary plans, lifestyle modifications, and wellness practices.
              This bridges the divide between modern diagnostic technology and traditional holistic medicine, making preventive
              healthcare accessible, culturally relevant, and scientifically validated.
            </p>
            <p>
              Developed for the IT4010 Research Project module, this work demonstrates the potential of integrated digital
              health solutions that respect both technological advancement and traditional medical wisdom, ultimately empowering
              individuals to take greater control of their well-being through a unified, privacy-conscious mobile application.
            </p>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-xl border border-emerald-200 hover:shadow-lg transition-shadow">
            <div className="bg-emerald-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Brain className="text-white" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">AI-Powered Diagnostics</h3>
            <p className="text-gray-600 text-sm">
              Advanced deep learning models for tongue, skin, and emotion analysis with up to 95% accuracy
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-xl border border-teal-200 hover:shadow-lg transition-shadow">
            <div className="bg-teal-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Leaf className="text-white" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Ayurvedic Integration</h3>
            <p className="text-gray-600 text-sm">
              Personalized herbal remedies, dietary plans, and wellness practices based on traditional wisdom
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 hover:shadow-lg transition-shadow">
            <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Heart className="text-white" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Holistic Wellness</h3>
            <p className="text-gray-600 text-sm">
              Comprehensive health management addressing physical, mental, and emotional well-being
            </p>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-xl border border-amber-200 hover:shadow-lg transition-shadow">
            <div className="bg-amber-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Activity className="text-white" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Real-Time Monitoring</h3>
            <p className="text-gray-600 text-sm">
              Continuous health tracking with progress analytics and personalized feedback mechanisms
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
