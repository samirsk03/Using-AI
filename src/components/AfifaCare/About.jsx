import { Users, Award, Clock } from 'lucide-react'

const About = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            About AfifaCare
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-gray-600 lg:mx-auto">
            Dedicated to providing exceptional healthcare services for over two decades
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-medium text-gray-900">Expert Team</h3>
              <p className="mt-2 text-gray-600">
                Our healthcare professionals bring years of experience and expertise
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-medium text-gray-900">Quality Care</h3>
              <p className="mt-2 text-gray-600">
                Committed to maintaining the highest standards of medical care
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-medium text-gray-900">24/7 Support</h3>
              <p className="mt-2 text-gray-600">
                Round-the-clock healthcare services for your peace of mind
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
          <p className="text-gray-600">
            To provide accessible, high-quality healthcare services that improve the
            well-being of our community. We strive to deliver personalized care
            with compassion and excellence.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About