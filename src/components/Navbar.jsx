import React from 'react'

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-header text-blue-petrol">Nutritrackers</div>
        <div className="space-x-6 text-blue-petrol font-sans">
          <a href="#features" className="hover:text-green-mint">Funcionalidades</a>
          <a href="#how" className="hover:text-green-mint">Cómo funciona</a>
          <a href="#contact" className="hover:text-green-mint">Contacto</a>
        </div>
      </div>
    </nav>
  )
}
