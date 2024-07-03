import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'
import css from './RegistrationPage.module.css'

export default function RegistrationPage() {
  return (
      <div className={css.container}>
          <p className={css.title}>Please, register your account!</p>
          <RegistrationForm/>
    </div>
  )
}