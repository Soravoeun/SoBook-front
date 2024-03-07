import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UserPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/users/create" element={<CreateUserPage />} />
        <Route path="/subscribers" element={<SubscriberPage />} />
        <Route path="/courses" element={<CoursePage />} />
      </Routes>
    </Router>
  );
}

export default App
