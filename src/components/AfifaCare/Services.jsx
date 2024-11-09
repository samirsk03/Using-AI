import { Stethoscope, Heart, Brain, Activity,  UserCog } from 'lucide-react'
import ServiceCard from './ServiceCard'

const Services = () => {
  const services = [
    {
      title: "Primary Care",
      description: "Comprehensive health services for individuals and families.",
      icon: Stethoscope
    },
    {
      title: "Cardiology",
      description: "Expert care for heart and cardiovascular conditions.",
      icon: Heart
    },
    {
      title: "Neurology",
      description: "Specialized treatment for neurological disorders.",
      icon: Brain
    },
    {
      title: "Diagnostics",
      description: "Advanced testing and diagnostic services.",
      icon: Activity
    },
    {
      title: "Specialist Care",
      description: "Access to a network of specialized medical professionals.",
      icon: UserCog
    }
  ]

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Comprehensive healthcare solutions tailored to your needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services