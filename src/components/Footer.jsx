import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-white shadow font-body">
    <div className="w-full mx-auto max-w-screen-xl p-4 sm:flex sm:items-center sm:justify-between">
    <ul className="flex flex-wrap items-center mt-3 text-sm  sm:mt-0">
        <li>
            <a href="https://github.com/luke-h42" target='_blank'className="hover:underline me-4 md:me-6">Facebook </a>
        </li>
        <li>
            <a href="https://www.linkedin.com/in/lukehancock42/" target='_blank' className="hover:underline me-4 md:me-6">Instagram</a>
        </li>
    </ul>
      <span className="text-sm sm:text-center">© 2024 SwimSuccess. All Rights Reserved.
    </span>

    </div>
</footer>
  )
}
