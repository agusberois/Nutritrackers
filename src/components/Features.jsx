import React from 'react'

const features = [
  { title: 'Seguimiento de clientes', description: 'Controla la evolución de cada paciente fácilmente.' },
  { title: 'Análisis nutricional', description: 'Obtén reportes detallados y personalizados.' },
  { title: 'Informes automáticos', description: 'Genera estadísticas y gráficos de progreso al instante.' },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-header text-blue-petrol mb-12">Funcionalidades</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, idx) => (
            <div key={idx} className="p-6 border rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-header text-green-mint mb-4">{f.title}</h3>
              <p className="text-blue-petrol">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
