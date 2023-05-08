import { createRoot } from 'react-dom/client'

const container = document.getElementById('root')
if (container != null) {
  const root = createRoot(container)
  root.render(<h1>Welcome to React Application!</h1>)
}