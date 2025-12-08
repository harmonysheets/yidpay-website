import React from 'react';
import { MessageSquare } from 'lucide-react';

export default function Logo({ className = "", showText = true, size = "default" }) {
  const sizes = {
    small: { icon: "w-4 h-4", container: "w-8 h-8", text: "text-lg" },
    default: { icon: "w-5 h-5", container: "w-10 h-10", text: "text-2xl" },
    large: { icon: "w-8 h-8", container: "w-16 h-16", text: "text-3xl" }
  };
  
  const sizeConfig = sizes[size] || sizes.default;
  
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className={`${sizeConfig.container} bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/25`}>
        <MessageSquare className={`${sizeConfig.icon} text-white`} strokeWidth={2} />
      </div>
      {showText && (
        <span className={`${sizeConfig.text} font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent`}>
          YidPay
        </span>
      )}
    </div>
  );
}
