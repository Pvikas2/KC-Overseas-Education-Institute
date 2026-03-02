
import './App.css'
import Hero from './components/Hero'
import LatestUpdates from './components/LatestUpdates'
import NewsletterSubscribe from './components/NewsletterSubscribe'
import Services from './components/Services'
import Steps from './components/Steps'
import StudentTestimonials from './components/StudentTestimonials '
import WebinarsEvents from './components/WebinarsEvents'

function App() {

  return (
    <div className="App">
      <Hero/>
      <Services/>
      <Steps/>
      <WebinarsEvents />
      <StudentTestimonials />
      <LatestUpdates />
      <NewsletterSubscribe/>
    </div>
  )
}

export default App
