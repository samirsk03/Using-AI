import { ArrowRight } from 'lucide-react'

const ServiceCard = ({ title, description, icon: Icon }) => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href="#" className="text-blue-600 flex items-center hover:text-blue-700">
        Learn more <ArrowRight className="ml-2 w-4 h-4" />
      </a>
    </div>
  )
}

export default ServiceCard