import React from 'react';
import { SocialIcon } from 'react-social-icons';

function SocialMediaBar() {
  return (
    <div className="bg-gray-100 p-4 flex flex-col md:flex-row justify-around items-center rounded-lg shadow-md">
      <div className="flex flex-col items-center mb-4 md:mb-0">
        <SocialIcon url="#" className="mb-2" fgColor="#25D366" style={{ height: 50, width: 50 }} />
        <span className="text-lg font-semibold">WhatsApp</span>
      </div>
      <div className="flex flex-col items-center mb-4 md:mb-0">
        <SocialIcon url="#" className="mb-2" fgColor="#E1306C" style={{ height: 50, width: 50 }} />
        <span className="text-lg font-semibold">Instagram</span>
      </div>
      <div className="flex flex-col items-center mb-4 md:mb-0">
        <SocialIcon url="#" className="mb-2" fgColor="#4267B2" style={{ height: 50, width: 50 }} />
        <span className="text-lg font-semibold">Facebook</span>
      </div>
      <div className="flex flex-col items-center">
        <SocialIcon url="#" className="mb-2" fgColor="#FF0000" style={{ height: 50, width: 50 }} />
        <span className="text-lg font-semibold">Channel</span>
      </div>
    </div>
  );
}

export default SocialMediaBar;
