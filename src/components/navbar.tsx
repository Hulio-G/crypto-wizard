'use client'

import Link from 'next/link'

export function Navbar() {
  return (
    <div className="bg-white">
      {/* Top Navigation Bar */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-gray-200">
        {/* Left side - Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 59" className="w-full h-full">
              <path fill="#141542" d="M89.1219 239.044C93.5196 227.717 99.194 215.829 104.09 204.629L129.291 146.686L145.268 109.968C147.448 104.968 149.896 98.6231 152.343 93.8326C153.401 91.7602 158.469 85.55 160.106 83.4966L172.468 67.891L187.707 48.4612C191.347 43.7667 195.539 36.8792 200.849 34.0875C203.225 32.8384 206.558 33.7051 208.873 34.6783C214.223 37.1098 219.594 40.1676 224.827 42.9017L258.824 60.7415L307.327 86.1502C315.634 90.5027 324.034 94.719 332.228 99.2744C333.305 99.8735 335.002 101.116 335.936 101.908C337.543 103.271 338.2 106.327 338.285 108.288C338.664 117.015 338.41 125.751 338.495 134.484C338.447 141.872 338.596 149.281 338.434 156.666C338.415 157.529 338.103 159.546 337.702 160.277C335.049 165.113 328.994 167.741 323.911 164.958C319.756 162.683 317.203 159.361 313.805 156.197C309.316 151.956 304.795 147.647 300.329 143.417C297.665 140.894 293.013 135.968 290.147 134.067C286.237 131.474 278.486 129.272 273.742 127.547L251.743 119.461C245.912 117.354 240.409 115.569 234.652 113.156C232.129 118.444 228.855 123.688 225.969 128.798C224.906 130.683 223.508 132.716 222.565 134.607C224.531 139.826 226.953 144.928 229.233 150.022L236.928 167.559L269.665 241.707C278.703 240.351 287.424 238.951 296.311 236.617C300.974 235.557 307.895 233.942 311.402 238.335C315.014 242.861 315.863 250.856 317.661 256.035C325.741 279.317 315.59 279.573 295.586 279.515C279.195 279.467 264.036 278.88 247.486 274.4C246.461 275.379 246.47 276.313 246.393 277.671C247.1 286.016 247.482 293.278 243.536 301.127C240.034 307.791 233.079 313.942 225.767 316.069C206.926 321.551 190.606 311.761 184.988 293.534C180.589 293.669 176.295 293.132 171.854 293.89L171.564 294.879C169.113 303.112 163.281 310.436 155.759 314.538C150.37 317.564 144.807 317.62 138.863 317.552C127.676 317.423 118.325 310.713 113.926 300.251C109.527 289.789 110.081 277.578 115.699 267.116C121.317 256.654 131.998 248.941 144.185 245.915C156.372 242.889 169.559 244.551 180.746 250.903C191.933 257.255 200.621 267.297 205.02 279.759C209.419 292.221 208.865 305.432 203.247 315.894C197.629 326.356 186.948 334.069 174.761 337.095C162.574 340.121 149.387 338.459 138.2 332.107C127.013 325.755 118.325 315.713 113.926 303.251C109.527 290.789 110.081 277.578 115.699 267.116C121.317 256.654 131.998 248.941 144.185 245.915C156.372 242.889 169.559 244.551 180.746 250.903C191.933 257.255 200.621 267.297 205.02 279.759C209.419 292.221 208.865 305.432 203.247 315.894C197.629 326.356 186.948 334.069 174.761 337.095C162.574 340.121 149.387 338.459 138.2 332.107C127.013 325.755 118.325 315.713 113.926 303.251C109.527 290.789 110.081 277.578 115.699 267.116C121.317 256.654 131.998 248.941 144.185 245.915C156.372 242.889 169.559 244.551 180.746 250.903C191.933 257.255 200.621 267.297 205.02 279.759C209.419 292.221 208.865 305.432 203.247 315.894C197.629 326.356 186.948 334.069 174.761 337.095C162.574 340.121 149.387 338.459 138.2 332.107C127.013 325.755 118.325 315.713 113.926 303.251C109.527 290.789 110.081 277.578 115.699 267.116C121.317 256.654 131.998 248.941 144.185 245.915" transform="scale(0.166667 0.163889)"/>
            </svg>
          </div>
          <span className="text-2xl font-bold text-blue-600">Crypto Wizard</span>
        </div>

        {/* Right side - User Navigation */}
        <div className="flex items-center space-x-6 text-sm">
          <Link href="/dashboard" className="text-gray-600 hover:text-gray-900">Dashboard</Link>
          <Link href="/promoter" className="flex items-center space-x-1 text-orange-600">
            <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
            <span>Promoter</span>
          </Link>
          <Link href="/influencer" className="flex items-center space-x-1 text-blue-600">
            <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
            <span>Influencer</span>
          </Link>
          <Link href="/recruiter" className="flex items-center space-x-1 text-red-600">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span>Recruiter</span>
          </Link>
          <Link href="/bounties" className="flex items-center space-x-1 text-yellow-600">
            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span>BountiesAds</span>
          </Link>
          <Link href="/scoreboard" className="flex items-center space-x-1 text-green-600">
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            <span>Scoreboard</span>
          </Link>
          <Link href="/earnings" className="flex items-center space-x-1 text-purple-600">
            <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
            <span>Earnings</span>
          </Link>
          <Link href="/profile" className="flex items-center space-x-1 text-gray-600">
            <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
            <span>Profile</span>
          </Link>
        </div>
      </div>

      {/* Secondary Navigation Bar - Purple */}
      <div className="bg-purple-600 px-6 py-2">
        <div className="flex items-center justify-between">
          {/* Left side navigation */}
          <div className="flex items-center space-x-6 text-white text-sm">
            <Link href="/pull" className="flex items-center space-x-1 hover:text-purple-200">
              <span className="text-red-400">📊</span>
              <span>Pull Narratives</span>
            </Link>
            <Link href="/push" className="flex items-center space-x-1 hover:text-purple-200">
              <span className="text-purple-300">📈</span>
              <span>Push Narratives</span>
            </Link>
            <Link href="/tools" className="flex items-center space-x-1 hover:text-purple-200">
              <span className="text-gray-300">🔧</span>
              <span>Tools</span>
            </Link>
            <Link href="/directories" className="flex items-center space-x-1 hover:text-purple-200">
              <span className="text-yellow-300">📁</span>
              <span>Directories</span>
            </Link>
          </div>

          {/* Right side navigation */}
          <div className="flex items-center space-x-6 text-white text-sm">
            <Link href="/blog" className="flex items-center space-x-1 hover:text-purple-200">
              <span className="text-orange-300">📝</span>
              <span>Blog</span>
            </Link>
            <Link href="/job-board" className="hover:text-purple-200">Job Board</Link>
            <Link href="/store" className="flex items-center space-x-1 hover:text-purple-200">
              <span className="text-blue-300">🏪</span>
              <span>Store</span>
            </Link>
            <Link href="/feedback" className="flex items-center space-x-1 hover:text-purple-200">
              <span className="text-green-300">💬</span>
              <span>Feedback</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
