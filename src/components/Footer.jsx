import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-blue-petrol text-white py-6 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="font-header text-lg">Nutritrackers</div>
        <div className="space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-green-mint">Instagram</a>
          <a href="#" className="hover:text-green-mint">LinkedIn</a>
        </div>
        <div className="mt-4 md:mt-0">© 2025 Nutritrackers. Todos los derechos reservados.</div>
      </div>
    </footer>
  )
}
