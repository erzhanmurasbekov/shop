import Link from 'next/link'
import Image from 'next/image'

const Logo = () => (
  <Link className='logo' href='/' passHref>
    <Image
      className='logo__img'
      src='/img/logo.png'
      alt='Rostelecom Logo'
      width={100}
      height={100}
    />
  </Link>
)

export default Logo
