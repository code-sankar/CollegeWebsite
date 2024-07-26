import React from 'react';
import { FaWhatsapp, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';

function SocialMediaBar() {
  return (
    <div className="bg-gray-100 p-4 flex flex-col md:flex-row justify-around items-center rounded-lg shadow-md">
      <div className="flex flex-col items-center mb-4 md:mb-0">
        <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="w-12 h-12 mb-2 text-green-500" />
        </a>
        <span className="text-lg font-semibold">WhatsApp</span>
      </div>
      <div className="flex flex-col items-center mb-4 md:mb-0">
        <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="w-12 h-12 mb-2 text-pink-500" />
        </a>
        <span className="text-lg font-semibold">Instagram</span>
      </div>
      <div className="flex flex-col items-center mb-4 md:mb-0">
        <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="w-12 h-12 mb-2 text-blue-600" />
        </a>
        <span className="text-lg font-semibold">Facebook</span>
      </div>
      <div className="flex flex-col items-center">
        <a href="https://www.youtube.com/yourchannel" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="w-12 h-12 mb-2 text-red-600" />
        </a>
        <span className="text-lg font-semibold">Channel</span>
      </div>
    </div>
  );
}

export default SocialMediaBar;
