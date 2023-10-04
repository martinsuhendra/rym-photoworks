import Image from 'next/image'
import Facebook from 'public/facebook.png'
import Instagram from 'public/instagram.png'
import Tiktok from 'public/tiktok.png'
import Youtube from 'public/youtube.png'

function Footer() {
  return (
    <div className="mt-12 py-5 flex flex-wrap gap-5 justify-between">
      <div className="flex flex-col gap-4 w-full lg:w-3/6">
        <div className="flex gap-2">
          <Image src={Facebook} width={18} height={18} alt="facebook" />
          <Image src={Instagram} width={18} height={18} alt="instagram" />
          <Image src={Tiktok} width={18} height={18} alt="tiktok" />
          <Image src={Youtube} width={18} height={18} alt="youtube" />
        </div>
      </div>
    </div>
  )
}

export default Footer
