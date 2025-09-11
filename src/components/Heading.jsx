import React from 'react'

function Heading({heading,para}) {
  return (
    <div>
       <div className="max-w-4xl mx-auto text-center px-4 mb-10">
        <h1 className="font-bold text-4xl text-gray-900 dark:text-white">
          {heading}
        </h1>
        <p className="mt-3 text-lg text-gray-600 dark:text-gray-300">
            {para}
        </p>
      </div>
    </div>
  )
}

export default Heading
