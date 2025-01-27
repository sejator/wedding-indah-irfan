import { faClose, faPause, faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function MusicBg({ onClick, statsPlay, visible, onClose }) {

    return (
        <>
            <div className={`fixed z-10 bottom-2 right-2 `}>
                <div className='flex'>
                    <button onClick={onClick} className={`text-white ${visible === true ? 'translate-y-[0px]' : 'translate-y-[200px]'} duration-300 text-md flex items-center max-w-[150px] bg-black/75 hover:bg-black font-bold rounded-xl px-5 py-3.5 mr-2 mb-2`}>
                        <div className='text-sm overflow-hidden'>
                            <div className='animate-marquee'>ANDMESH_ANUGERAH_TERINDAH.mp3</div>
                        </div>
                        <FontAwesomeIcon className='ml-2' icon={statsPlay === true ? faPause : faPlay} />
                    </button>
                    <button onClick={onClose} className={`text-white ${visible === true ? 'translate-y-[0px]' : 'translate-y-[200px]'} duration-300 text-md flex items-center max-w-[150px] bg-black/75 hover:bg-black font-bold rounded-xl px-5 py-3.5 mr-2 mb-2`}>
                        <FontAwesomeIcon icon={faClose} />
                    </button>
                </div>
            </div>
        </>
    )
}
