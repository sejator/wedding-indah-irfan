import React, { useEffect } from 'react'
import hiasan1 from '../../Img/hiasan-1.png'
import pria from '../../Img/compress/pria.webp'
import wanita from '../../Img/compress/wanita.webp'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { detail_pasangan } from '../../Constants/global';

export default function Couple() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <div className='my-16'>
        <div className='flex justify-center mb-8'>
          <img src={hiasan1} alt='hiasan1' className='w-[80px]' data-aos="fade-up" />
        </div>
        <h1 className='text-center text-3xl font-semibold arial mx-4 mb-2 text-[#413327]' data-aos="fade-up">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيْمِ</h1>
        <p className='text-center arial text-[#413327] font-bold mb-2' data-aos="fade-up">Assalamu'alaikum Warohmatullohi Wabarokatuh</p>
        <p className='text-center arial text-[#413327] text-sm mx-4 md:mx-48 mb-4' data-aos="fade-up">
          Maha suci Allah SWT yang telah menciptakan makhluk-Nya berpasang-pasangan. Tanpa mengurangi rasa hormat, dengan ini kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk hadir pada acara pernikahan kami :
        </p>
        <div id="mempelai" className='grid md:grid-cols-2 grid-cols-1 gap-4 lg:mx-32 mx-4'>
          <div>
            <div className='flex justify-center'>
              <img src={pria} alt='mempelai-pria' data-aos="fade-up" loading="lazy" className='w-[250px] rounded-full shadow-lg bg-white[#ab8a6d]' />
            </div>
            <h1 data-aos="fade-up" className='text-center custom-font-3 md:text-2xl text-lg text-[#413327] font-bold my-4'>Mempelai Pria</h1>
            <h1 data-aos="fade-up" className='text-center custom-font-2 lg:text-6xl text-4xl text-[#413327] font-bold mb-2'>{detail_pasangan.pria.nama}</h1>
            <p data-aos="fade-up" className='text-[#413327] font-semibold text-center md:text-lg text-sm'>Putra Pertama dari <br /> {detail_pasangan.pria.ortu}</p>
          </div>
          <div>
            <div className='flex justify-center'>
              <img src={wanita} alt='mempelai-pria' data-aos="fade-up" loading="lazy" className='w-[250px] rounded-full shadow-lg bg-white[#ab8a6d]' />
            </div>
            <h1 data-aos="fade-up" className='text-center custom-font-3 md:text-2xl text-lg text-[#413327] font-bold my-4'>Mempelai Wanita</h1>
            <h1 data-aos="fade-up" className='text-center custom-font-2 lg:text-6xl text-4xl text-[#413327] font-bold mb-2'>{detail_pasangan.wanita.nama}</h1>
            <p data-aos="fade-up" className='text-[#413327] font-semibold text-center md:text-lg text-sm'>Putri Kedua dari <br /> {detail_pasangan.wanita.ortu}</p>
          </div>
        </div>
      </div>
      <div className='mb-16 mt-24 bg-[#413327] flex justify-center'>
        <div className='py-16 max-w-xl'>
          <p data-aos="fade-up" className='text-center md:text-3xl text-2xl font-semibold arial mx-4 mb-8 text-white'>
            وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةً ۗاِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ
          </p>
          <p data-aos="fade-up" className='text-center md:text-lg text-sm font-semibold italic arial mx-4 mb-2 text-white'>
            " Dan di antara tanda-tanda kekuasaan-Nya diciptakan-Nya untukmu pasangan hidup dari jenismu sendiri supaya kamu dapat ketenangan hati dan dijadikannya kasih sayang di antara kamu. Sesungguhnya yang demikian menjadi tanda-tanda kebesaran-Nya bagi orang-orang yang berpikir. "
          </p>
          <p data-aos="fade-up" className='mx-4 mb-2 text-center text-white font-bold italic'>( Q.S. Ar-Rum: 21 )</p>
        </div>
      </div>
    </>
  )
}
