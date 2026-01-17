import SessionsSection from './sessions'
import RegistrationForm from './registeration/form'

const Home = () => {
  return (
    <div className='container mx-auto grid grid-cols-1 xl:grid-cols-3 gap-3'>
      <SessionsSection />
      <RegistrationForm />
    </div>
  )
}

export default Home
