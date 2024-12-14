import Image from 'next/image'

const team = [
  {
    name: 'John Doe',
    role: 'Founder & CEO',
    image: '/team-1.jpg',
  },
  {
    name: 'Jane Smith',
    role: 'CTO',
    image: '/team-2.jpg',
  },
  {
    name: 'Mike Johnson',
    role: 'Head of Sales',
    image: '/team-3.jpg',
  },
  {
    name: 'Sarah Brown',
    role: 'Lead Designer',
    image: '/team-4.jpg',
  },
]

export default function About() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">About Us</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Securing Your World
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500 dark:text-gray-300">
            MyWatchdog is committed to providing cutting-edge surveillance solutions for homes and businesses.
          </p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">Our Mission</h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
              To empower individuals and organizations with innovative security technologies, ensuring peace of mind and safety in an ever-changing world.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-900">
        <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight sm:text-4xl">Our Team</h2>
              <p className="text-xl text-gray-500 dark:text-gray-300">
                Meet the dedicated professionals behind MyWatchdog's success.
              </p>
            </div>
            <ul
              role="list"
              className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
            >
              {team.map((person) => (
                <li key={person.name}>
                  <div className="space-y-4">
                    <div className="aspect-w-3 aspect-h-2">
                      <Image
                        className="object-cover shadow-lg rounded-lg"
                        src={person.image}
                        alt=""
                        width={300}
                        height={200}
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="text-lg leading-6 font-medium space-y-1">
                        <h3 className="text-gray-900 dark:text-white">{person.name}</h3>
                        <p className="text-indigo-600">{person.role}</p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

