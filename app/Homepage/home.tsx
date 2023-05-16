import Image from 'next/image'
import UIUC from './uiuc2.png'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

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

      <div style={{position:'fixed', top:'35%', fontSize:'30px', color:'blue'}}>
        <strong>
          Welcome to My Website
        </strong>
      </div>

      <div style={{
          position:'fixed', 
          top:'5px', 
          left:'5px', 
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