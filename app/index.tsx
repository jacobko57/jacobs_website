import Image from 'next/image'
import UIUC from './uiuc2.png'
import Link from 'next/link'
import Navbar from './Components/NavBar'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      {/* <Navbar/> */}

      <div
        style={{
          position:'fixed',
          top:'35px',
          right:'500px'
        }}
      >
        <a href='https://github.com/jacobko57'>Github</a>
      </div>

      <div
        style={{
          position:'fixed',
          top:'35px',
          right:'380px'
        }}
      >
        <a href='https://www.linkedin.com/in/jacobjko/'>LinkedIn</a>
      </div>

      <div
        style={{
          position:'fixed',
          top:'35px',
          right:'260px'
        }}
      >
        <Link href='/about'>About Me</Link>
      </div>

      <div
        style={{
          position:'fixed',
          top:'50%'
        }}
      >
        <Image
          src={UIUC}
          width={150}
          height={150}
          alt="Jacob Homepage Picture"
          placeholder='blur'
        />
      </div>

      <div style={{position:'fixed', top:'25%', fontSize:'30px', color:'blue'}}>
        <strong>
          Welcome to My Website
        </strong>
      </div>

      <div style={{
          position:'fixed', 
          top:'3px', 
          left:'18px', 
          fontSize:'50px',
          backgroundImage:'linear-gradient(45deg, red, blue)', 
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
          }}>
        <strong>
          Hi! I'm Jacob!
        </strong>
      </div>

    </main>
  )
}