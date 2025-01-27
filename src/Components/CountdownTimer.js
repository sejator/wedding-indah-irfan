import React, { useEffect, useState } from 'react';
import { tanggal_expired } from '../Constants/global';
import moment from 'moment/moment';
import 'moment/locale/id'
moment.locale('id')

const CountdownTimer = ({ expiryTime = null }) => {
  const dateTime = moment(expiryTime ? expiryTime : tanggal_expired, 'DD MMM YYYY HH:mm:ss').toDate();
  const [countdownTime, setCountdownTime] = useState({
    countdownDays: '',
    countdownHours: '',
    countdownMinutes: '',
    countdownSeconds: '',
  });

  useEffect(() => {
    const countdownTimer = () => {
      const timeInterval = setInterval(() => {
        const countdownDateTime = new Date(dateTime).getTime();
        const currentTime = new Date().getTime();
        const remainingDayTime = countdownDateTime - currentTime;
        const totalDays = Math.floor(remainingDayTime / (1000 * 60 * 60 * 24));
        const totalHours = Math.floor((remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const totalMinutes = Math.floor((remainingDayTime % (1000 * 60 * 60)) / (1000 * 60));
        const totalSeconds = Math.floor((remainingDayTime % (1000 * 60)) / 1000);

        const runningCountdownTime = {
          countdownDays: totalDays,
          countdownHours: totalHours,
          countdownMinutes: totalMinutes,
          countdownSeconds: totalSeconds,
        };

        setCountdownTime(runningCountdownTime);

        if (remainingDayTime < 0) {
          clearInterval(timeInterval);
        }
      }, 1000);
    };

    countdownTimer();
  }, [dateTime]);

  return (
    <div className='flex justify-center gap-4 mb-8'>
      <div className='rounded-xl md:w-[200px] w-[80px] py-6 bg-[#413327] text-center custom-font-3 text-white'>
        <h1 className='md:text-5xl text-xl font-bold'>{countdownTime.countdownDays}</h1>
        <p className='md:text-lg text-xs font-semibold'>Hari</p>
      </div>
      <div className='rounded-xl md:w-[200px] w-[80px] py-6 bg-[#413327] text-center custom-font-3 text-white'>
        <h1 className='md:text-5xl text-xl font-bold'>{countdownTime.countdownHours}</h1>
        <p className='md:text-lg text-xs font-semibold'>Jam</p>
      </div>
      <div className='rounded-xl md:w-[200px] w-[80px] py-6 bg-[#413327] text-center custom-font-3 text-white'>
        <h1 className='md:text-5xl text-xl font-bold'>{countdownTime.countdownMinutes}</h1>
        <p className='md:text-lg text-xs font-semibold'>Menit</p>
      </div>
      <div className='rounded-xl md:w-[200px] w-[80px] py-6 bg-[#413327] text-center custom-font-3 text-white'>
        <h1 className='md:text-5xl text-xl font-bold'>{countdownTime.countdownSeconds}</h1>
        <p className='md:text-lg text-xs font-semibold'>Detik</p>
      </div>
    </div>
  );
};

export default CountdownTimer;
