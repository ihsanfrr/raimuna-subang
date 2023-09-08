"use client"
import Image from 'next/image'

import logoBrand from './../../public/icons/logo-brand.png'
import logoRaican from './../../public/icons/raican.png'
import { useEffect, useState } from 'react';

export default function Home() {
  const countdownDate = new Date('2023-10-09T00:00:00').getTime();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const timeDifference = countdownDate - now;

    if (timeDifference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return {
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);


return (
<main>
  <nav className="bg-white border-b border-gray-200">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="/" className="flex items-center">
        <Image src={logoBrand} alt={''} height={50} className='mr-3' />
        <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
          DKC Subang
        </span>
      </a>
      <div className="flex md:order-2">
        <a href="https://www.facebook.com/Dkcsubang" target='_blank'>
          <div className='ml-2 border-gray-400 border h-8 w-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#EDB11E] hover:border-[#EDB11E] text-gray-400 hover:text-white'>
            <i className="ri-facebook-fill"></i>
          </div>
        </a>
        <a href="https://twitter.com/dkc_subang0913" target='_blank'>
          <div className='ml-2 border-gray-400 border h-8 w-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#EDB11E] hover:border-[#EDB11E] text-gray-400 hover:text-white'>
            <i className="ri-twitter-x-fill"></i>
          </div>
        </a>
        <a href="https://www.instagram.com/dkc_subang0913" target='_blank'>
          <div className='ml-2 border-gray-400 border h-8 w-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#EDB11E] hover:border-[#EDB11E] text-gray-400 hover:text-white'>
            <i className="ri-instagram-line"></i>
          </div>
        </a>
        {/* <a href="https://wa.me/6281214189789" target='_blank'>
          <div className='ml-2 border-gray-400 border h-8 w-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#EDB11E] hover:border-[#EDB11E] text-gray-400 hover:text-white'>
            <i className="ri-whatsapp-line"></i>
          </div>
        </a> */}
      </div>
    </div>
  </nav>

  {/* Section Hero */}
  <section className="bg-white min-h-screen overflow-hidden">
  <div className="py-8 px-4 mx-auto max-w-screen-xl text-center flex flex-col lg:flex-row-reverse justify-around items-center h-full">
    <div>
      <Image src={logoRaican} alt={""} className='h-[377px] w-[201px] md:h-[377px] md:w-[201px] lg:h-[600px] lg:w-[321px]'/>
    </div>
    <div>
      <div className="grid grid-flow-col gap-5 text-center justify-center auto-cols-max my-10">
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content border rounded text-black">
          <span className="countdown text-5xl">
            <span>{timeLeft.days}</span>
          </span>
          Hari
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content border rounded text-black">
          <span className="countdown text-5xl">
            <span>{timeLeft.hours}</span>
          </span>
          Jam
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content border rounded text-black">
          <span className="countdown text-5xl">
            <span>{timeLeft.minutes}</span>
          </span>
          Menit
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content border rounded text-black">
          <span className="countdown text-5xl">
            <span>{timeLeft.seconds}</span>
          </span>
          Detik
        </div>
      </div>
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
        Raimuna Subang 2023
      </h1>
      <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">
        Buper Ranggawulung, 09-13 Oktober 2023
      </p>
      <a href="#required_files" onClick={handleScroll} 
        className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-[#EDB11E] hover:bg-[#E2A712] focus:ring-4 focus:ring-[#F6D88E]">
        Ikut Berpartisipasi
        <i className="ri-arrow-right-line"></i>
      </a>
    </div>
  </div>
</section>


  {/* Section Required Files */}
  <section className="bg-white max-h-full" id='required_files'>
  <div className='flex flex-col items-center justify-center text-center py-8'>
    <p className='p-0 mb-5 text-[#EDB11E]'>TATA CARA</p>
    <h2 className="text-4xl font-bold mb-10 text-black">Berpartisipasi di Raimuna Subang</h2>
    <div className="w-2/3 py-10 text-left">
      <div className='inline text-4xl font-bold text-black'>1. </div>
      <div className='inline text-lg text-black'>Pastikan untuk membaca dengan cermat petunjuk teknis dan pelaksanaan yang tersedia.</div>
      <hr className='my-10' />
      <div className='inline text-4xl font-bold text-black'>2. </div>
      <div className='inline text-lg text-black'>Ada beberapa berkas yang perlu Anda persiapkan dengan seksama, berikut adalah berkas dokumen seputar kegiatan RAIMUNA SUBANG 2023, bisi diunduh <a href="https://linktr.ee/dkcsubang" className='text-[#EDB11E] underline' target='_blank'>disini</a></div>
      <hr className='my-10' />
      <div className='inline text-4xl font-bold text-black'>3. </div>
      <div className='inline text-lg text-black'>Setelah Anda memastikan bahwa semua persiapan telah selesai, saatnya untuk melanjutkan dengan melakukan pengisian data yang diperlukan pada link berikut <a href="https://forms.gle/TThVm1Ettrqu7CrZ9" className='text-[#EDB11E] underline' target='_blank'>Formulir Pendaftaran RAIMUNA SUBANG 2023</a> </div>
    </div>
  </div>
  </section>

  <footer>
    <div className='bg-black py-10 text-center'>
      <div className="flex justify-center mb-10">
        <a href="https://www.facebook.com/Dkcsubang" target='_blank'>
          <div
            className='ml-4 border-gray-400 border h-8 w-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#EDB11E] hover:border-[#EDB11E] text-gray-400 hover:text-white'>
            <i className="ri-facebook-fill"></i>
          </div>
        </a>
        <a href="https://twitter.com/dkc_subang0913" target='_blank'>
          <div
            className='ml-4 border-gray-400 border h-8 w-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#EDB11E] hover:border-[#EDB11E] text-gray-400 hover:text-white'>
            <i className="ri-twitter-x-fill"></i>
          </div>
        </a>
        <a href="https://www.instagram.com/dkc_subang0913" target='_blank'>
          <div
            className='ml-4 border-gray-400 border h-8 w-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#EDB11E] hover:border-[#EDB11E] text-gray-400 hover:text-white'>    
            <i className="ri-instagram-line"></i>
          </div>
        </a>
        <a href="https://wa.me/6281214189789" target='_blank'>
          <div
            className='ml-4 border-gray-400 border h-8 w-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#EDB11E] hover:border-[#EDB11E] text-gray-400 hover:text-white'>    
            <i className="ri-whatsapp-line"></i>
          </div>
        </a>
      </div>
      <p className='text-gray-100 font-extralight'>© 2023 - Raimuna Subang Tahun 2023. <span className='text-[#EDB11E]'>by JhonyLandis</span></p>
    </div>
  </footer>
</main>
)
}