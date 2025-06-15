// src/components/FloatingElements.jsx

import React from "react";
export default function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Background Gradient Blobs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-float-delay-1"></div>
      <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl animate-float-delay-2"></div>
      
      {/* Geometric Shapes */}
      <div className="absolute top-20 right-20 w-4 h-4 bg-purple-400 rotate-45 animate-float"></div>
      <div className="absolute bottom-32 left-20 w-6 h-6 bg-pink-400 rounded-full animate-float-delay-1"></div>
      <div className="absolute top-1/2 left-10 w-3 h-3 bg-blue-400 animate-float-delay-2"></div>
    </div>
  )
}
