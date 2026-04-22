import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App', () => {
  it('renders the main heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /hola mundo ci\/cd/i })).toBeInTheDocument()
  })

  it('renders the project badge', () => {
    render(<App />)
    expect(screen.getByText(/proyecto final devops/i)).toBeInTheDocument()
  })
})