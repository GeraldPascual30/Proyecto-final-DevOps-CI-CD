import { motion } from 'framer-motion'

const features = [
  {
    title: 'CI Automatizado',
    description: 'Instalación de dependencias y ejecución de pruebas con GitHub Actions.'
  },
  {
    title: 'Docker',
    description: 'Empaquetado de la aplicación en una imagen lista para producción.'
  },
  {
    title: 'CD a Producción',
    description: 'Publicación automática en Render usando Docker Hub.'
  },
  {
    title: 'Testing',
    description: 'Prueba unitaria para validar que la app renderiza correctamente.'
  }
]

export default function App() {
  return (
    <div className="page">
      <motion.div
        className="background-glow glow-1"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="background-glow glow-2"
        animate={{ x: [0, -25, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <main className="container">
        <motion.section
          className="hero"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="badge">Proyecto Final DevOps</span>
          <h1>Hola Mundo CI/CD</h1>
          <p>
            Aplicación moderna desarrollada con React, dockerizada y desplegada
            automáticamente con GitHub Actions, Docker Hub y Render.
          </p>

          <motion.a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="hero-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Ver Repositorio
          </motion.a>
        </motion.section>

        <section className="cards">
          {features.map((feature, index) => (
            <motion.article
              className="card"
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.15, duration: 0.5 }}
            >
              <h2>{feature.title}</h2>
              <p>{feature.description}</p>
            </motion.article>
          ))}
        </section>
      </main>
    </div>
  )
}