'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Link from 'next/link'
import { HomeIcon, Building2, Factory, Wifi, CheckCircle, Bell, Camera, HardDrive, Network, Cpu, Lock, Shield } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  const carouselItems = [
    {
      image: '/carousel-1.jpg',
      title: 'Advanced Surveillance Systems',
      description: 'State-of-the-art technology for unparalleled security',
    },
    {
      image: '/carousel-2.jpg',
      title: 'Real-Time Monitoring',
      description: 'Keep an eye on your property from anywhere, anytime',
    },
    {
      image: '/carousel-3.jpg',
      title: 'Intelligent Analytics',
      description: 'AI-powered insights for proactive security measures',
    },
  ]

  const productCategories = [
    { title: 'Home Security Cameras', icon: HomeIcon, description: 'Protect your home with our advanced security cameras' },
    { title: 'Business Surveillance Solutions', icon: Building2, description: 'Comprehensive security systems for businesses of all sizes' },
    { title: 'Industrial Monitoring Systems', icon: Factory, description: 'Robust monitoring solutions for industrial environments' },
    { title: 'Outdoor/Indoor Cameras', icon: Camera, description: 'Versatile cameras for both indoor and outdoor use' },
    { title: 'Wireless Security Systems', icon: Wifi, description: 'Easy-to-install wireless security solutions' },
  ]

  const howItWorks = [
    { title: 'Selecting the Right System', icon: CheckCircle, description: 'Our experts help you choose the perfect security solution' },
    { title: 'Installation Services', icon: HardDrive, description: 'Professional installation by our trained technicians' },
    { title: 'Accessing Monitoring Interface', icon: Cpu, description: 'User-friendly interface for easy monitoring and control' },
    { title: 'Receiving Alerts & Maintenance', icon: Bell, description: 'Real-time alerts and ongoing system maintenance' },
  ]

  return (
    <div className="bg-white dark:bg-gray-900">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        className="h-[600px]"
      >
        {carouselItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-full bg-cover bg-center flex items-center"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="container mx-auto px-4 text-center text-white">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">{item.title}</h2>
                <p className="text-xl md:text-2xl mb-8">{item.description}</p>
                <Link
                  href="/features"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300"
                >
                  Explore Our Systems
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Product Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 transition duration-300 hover:shadow-lg">
                <div className="flex items-center mb-4">
                  <category.icon className="h-10 w-10 text-blue-600 mr-4" />
                  <h3 className="text-xl font-semibold dark:text-white">{category.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">How It Works</h2>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-4">
            {howItWorks.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center max-w-xs">
                <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-4 mb-4">
                  <step.icon className="h-10 w-10 text-blue-600 dark:text-blue-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                {index < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">AI-Based Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 dark:text-white">FRS, VMS-VA, Visitor Management Solution</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our mission is your protection not only in Home but also in business places with our security monitors and Systems certified by the highest standards.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 dark:text-white">ANPR Solution</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Automatic Number Plate Recognition (ANPR) technology for enhanced vehicle security and management.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'CCTV Camera', icon: Camera, description: 'Our mission is your protection not only in Home but also in business places with our security monitors and Systems certified by the highest standards.' },
              { title: 'Video Recorder DVR/NVR', icon: HardDrive, description: 'High-quality digital and network video recorders for reliable storage and playback of surveillance footage.' },
              { title: 'Network Switches (L2 & L3 Series)', icon: Network, description: 'Cloud/Smart/Fully Managed/PoE Industrial Switches (4 Port to 48 Port with Console) are available with different specifications.' },
              { title: 'Fiber Module (SFP) 1G to 400G', icon: Cpu, description: 'All type Fiber Module (Single mode and multi mode range 100m to 120Km for SFP and Copper SFP) are available with Solution.' },
              { title: 'AI FRS, VMS-VA, ANPR', icon: Shield, description: 'Advanced AI-powered solutions including Facial Recognition Systems, Video Management Systems with Video Analytics, and Automatic Number Plate Recognition.' },
              { title: 'Visitor Management Solution', icon: Lock, description: 'Streamline visitor check-in processes and enhance security with our comprehensive visitor management system.' },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <item.icon className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold dark:text-white">{item.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Solutions: Protect Your Business With Our Unique Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 dark:text-white">CCTV and Video Surveillance</h3>
              <p className="text-gray-600 dark:text-gray-300">
                No matter the size, type and location of your company, our surveillance system will protect your business.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 dark:text-white">Network Security Solutions</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nam varius consectetur elementum.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 dark:text-white">Access Control Solutions</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Effective and simple to use door access system, we offer a decade of experience in planning, customization and installation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

