import { Shield, Eye, Bell, Lock, Video, Zap } from 'lucide-react'

const features = [
  {
    name: 'Advanced Video Analytics',
    description: 'AI-powered video analysis for intelligent threat detection and prevention.',
    icon: Eye,
  },
  {
    name: 'Real-Time Alerts',
    description: 'Instant notifications for any suspicious activity or security breaches.',
    icon: Bell,
  },
  {
    name: 'Access Control Integration',
    description: 'Seamless integration with access control systems for comprehensive security.',
    icon: Lock,
  },
  {
    name: 'High-Definition Cameras',
    description: 'Crystal-clear video quality for detailed monitoring and evidence collection.',
    icon: Video,
  },
  {
    name: 'Cloud Storage',
    description: 'Secure cloud storage for easy access to your surveillance footage from anywhere.',
    icon: Shield,
  },
  {
    name: 'Energy-Efficient Systems',
    description: 'Low-power consumption cameras and systems for cost-effective operation.',
    icon: Zap,
  },
]

export default function Features() {
  return (
    <div className="bg-white dark:bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-lg font-semibold leading-8 text-indigo-600">Features</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Everything you need to secure your world</p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300">
            Discover the cutting-edge features that make MyWatchdog the ultimate choice for your security needs.
          </p>
        </div>

        <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">
                  <feature.icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <div className="sm:min-w-0 sm:flex-1">
                  <p className="text-lg font-semibold leading-8 text-gray-900 dark:text-white">{feature.name}</p>
                  <p className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

