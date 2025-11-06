import React from 'react'

const steps = [
  'Registro y creación de perfiles de clientes',
  'Trackeo de datos nutricionales',
  'Análisis y reportes automáticos',
]

export default function HowItWorks() {
  return (
    <section id="how" className="py-20 bg-gray-light">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-header text-blue-petrol mb-12">Cómo funciona</h2>
        <ol className="list-decimal list-inside space-y-6 text-blue-petrol text-lg">
          {steps.map((s, idx) => <li key={idx}>{s}</li>)}
        </ol>
      </div>
    </section>
  )
}
