import Link from 'next/link'

const Logo = () => (
  <Link className='logo' href='/'>
    <img className='logo__img' style={{width:'100px'}} src='/img/logo.png' alt='Rostelecom Logo' />
  </Link>
)

export default Logo
