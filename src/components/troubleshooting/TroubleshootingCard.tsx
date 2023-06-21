import React from 'react'
import CardTop from '@/public/troubleshooting/img-1.png';
import Image from 'next/image';

const TroubleshootingCard = ({ item }: any) => {
  return (
    <div className="py-[35px] px-[85px] rounded-lg bg-white shadow-[0px_10px_30px_rgba(17,38,146,0.05)] relative">
      <div className="w-[100px] h-[100px] absolute top-0 right-0">
        <Image src={CardTop} alt="Card" />
      </div>
      <h6 className="font-normal text-base leading-[19.36px] text-[#DE0B0B] pt-6 pl-6">{item.troubleshootingNumber}</h6>
      <div className="p-6">
        <h5 className="font-medium text-[19px] leading-[22.99px] text-[#141414] mb-2">{item.title}</h5>
        <p className="max-w-[255px] font-normal text-base leading-[19.36px] text-[#777777] mb-4">{item.summary}</p>
        <button type='button' className='py-2 px-6 bg-[#DE0B0B] shadow-[0px_2px_4px_rgba(58,87,232,0.3)] rounded-xl font-normal text-base leading-7 text-white hover:bg-[rgba(222,11,11,0.7)]'>
          See Solution
        </button>
      </div>
    </div>
  )
}

export default TroubleshootingCard