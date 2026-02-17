import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BsStars } from 'react-icons/bs'
import Navbar from '../components/Navbar'

const Landing = () => {
  const navigate = useNavigate()

  return (
    <>
      <Navbar />

      <div className="min-h-[90vh] flex items-center justify-center px-6">
        <div className="max-w-4xl text-center">

          <h1 className="text-[45px] md:text-[60px] font-extrabold leading-tight">
            Build <span className="sp-text">Stunning UI Components</span><br />
            Using AI in Seconds ⚡
          </h1>

          <p className="text-gray-400 text-lg mt-5">
            GenUI helps developers instantly generate beautiful, responsive, and
            production-ready UI components using AI.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button
              onClick={() => navigate('/generate')}
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl 
              bg-gradient-to-r from-purple-400 to-purple-600 font-semibold text-lg
              hover:scale-105 transition-all"
            >
              <BsStars />
              Start Generating
            </button>

            <a
              href="https://github.com/"
              target="_blank"
              className="px-8 py-4 rounded-xl border border-gray-700 text-lg
              hover:bg-[#141319] transition-all"
            >
              View on GitHub
            </a>
          </div>

        </div>
      </div>
    </>
  )
}

export default Landing
