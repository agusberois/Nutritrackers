import React from 'react'

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gray-light text-center px-4">
      <h1 className="text-5xl font-header text-blue-petrol mb-4">Bienvenido a Nutritrackers</h1>
      <p className="text-lg text-blue-petrol mb-8 max-w-xl">
        La plataforma para nutricionistas que quieren trackear y acompañar a sus clientes de forma simple y eficiente.
      </p>
      <a 
        href="#contact" 
        className="bg-green-mint text-white px-6 py-3 rounded-lg font-bold hover:brightness-90 transition"
      >
        Solicitar demo
      </a>
    </section>
  )
}
