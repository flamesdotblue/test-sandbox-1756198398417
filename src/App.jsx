import React, { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
          Vibe Minimal Template
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Testing sandbox deployment with minimal template
        </p>
        
        <div className="space-y-6">
          <div className="text-center">
            <div className="text-6xl font-bold text-purple-600 mb-4">
              {count}
            </div>
            <button
              onClick={() => setCount(count + 1)}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Click me!
            </button>
          </div>
          
          <div className="pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500 text-center">
              This app was created with the minimal Vibe template
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App