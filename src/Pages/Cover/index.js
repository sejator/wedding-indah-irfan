import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useEffect } from 'react'
import { nama_pasangan } from '../../Constants/global'
import hiasan1 from '../../Img/hiasan-1.png'

export default function Cover({ transformUp, onClick }) {
    const [recipient, setRecipient] = useState(null);

    useEffect(() => {
        let url = new URL(window.location.href);
        let searchParams = new URLSearchParams(url.search);
        let toParam = searchParams.get('to');
        if (toParam) {
            setRecipient(toParam);
        }
    }, []);

    return (
        <>
            <div className={`fixed w-full h-full z-20 ${transformUp === true ? 'translate-y-[-700px] opacity-0' : ''} duration-700 cover-1`}>
                <div className='absolute bg-[#dfc4a7] w-full h-full'></div>
                <div className='absolute w-full h-full'>
                    <div className='absolute top-1/4 left-0 right-0'>
                        <div className='text-center'>
                            <div className='flex justify-center mb-8'>
                                <img src={hiasan1} alt='hiasan1' className='w-[100px]' />
                            </div>
                            <div className='text-[#413327] custom-font-2 font-semibold text-5xl mb-4'>
                                {nama_pasangan}
                            </div>
                            <div className='text-[#413327] text-lg mb-4'>
                                Kepada Yth Bpk/Ibu/Saudara/i
                            </div>
                            {recipient && <div className='text-[#413327] font-bold text-xl mb-4'>{recipient}</div>}
                            <button type="button" onClick={onClick} className="text-white text-md bg-[#413327] hover:bg-[#31261d] font-bold rounded-xl px-5 py-3.5 mr-2 mb-2">
                                <FontAwesomeIcon icon={faEnvelopeOpen} /> Buka Undangan
                            </button>
                            <p className='text-[#413327] text-sm md:text-lg italic mb-3 lg:mx-96 md:mx-32 mx-8'>
                                Mohon maaf apabila ada kesalahan penulisan nama/gelar pada undangan ini.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
