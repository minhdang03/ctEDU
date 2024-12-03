'use client';
import { useState, useEffect } from "react";
import Image from 'next/image';

export default function Home() {
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 83) {
          clearInterval(timer);
          return 83;
        }
        return prevProgress + 1;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left backdrop-blur-sm p-8 rounded-2xl">
            {/* Logo section */}
            <div className="mb-8 inline-block relative group">
              <div className="absolute inset-0 bg-blue-100/50 rounded-full blur-md transform scale-110 group-hover:scale-125 transition-transform duration-300"></div>
              <Image
                src="/logo.jpg"
                alt="Logo"
                width={120}
                height={120}
                className="relative object-contain rounded-full hover:scale-105 transition-all duration-300 drop-shadow-lg"
                style={{
                  background: 'transparent',
                  padding: '0.5rem',
                }}
              />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            THPT Phan Châu Trinh
            </h1>
            <h2 className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              Hải Châu - Đà Nẵng
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
              Chào mừng đến với website mới của trường THPT Phan Châu Trinh. 
              Nơi chia sẻ thông tin và kết nối cộng đồng giáo dục.
            </p>
            
            {/* Progress Bar */}
            <div className="max-w-md mx-auto lg:mx-0">
              <div className="relative w-full">
                <div className="w-full bg-gray-200 rounded-full h-6 dark:bg-gray-700">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-6 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  >
                    <span className="absolute inset-0 flex items-center justify-center text-white font-medium text-sm">
                      {progress}%
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-center lg:text-left text-sm mt-4 text-gray-500 dark:text-gray-400">
                Website đang trong quá trình hoàn thiện
              </p>
            </div>
          </div>

          {/* Right Content - Coming Soon Section */}
          <div className="flex-1 relative">
            <div className="relative w-full h-[400px] bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-blue-100 hover:border-blue-200 transition-all duration-300">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8 w-full">
                  <h3 className="text-3xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                    Sắp ra mắt
                  </h3>
                  <p className="text-gray-600 font-medium text-lg mb-8">
                    Với nhiều tính năng mới:
                  </p>
                  <ul className="space-y-4 max-w-xs mx-auto">
                    <li className="flex items-center space-x-3 bg-blue-50/50 p-3 rounded-lg hover:bg-blue-50 transition-all duration-300">
                      <span className="text-blue-500">•</span>
                      <span className="text-gray-700 font-medium">Thông tin trường học</span>
                    </li>
                    <li className="flex items-center space-x-3 bg-blue-50/50 p-3 rounded-lg hover:bg-blue-50 transition-all duration-300">
                      <span className="text-blue-500">•</span>
                      <span className="text-gray-700 font-medium">Tin tức & Sự kiện</span>
                    </li>
                    <li className="flex items-center space-x-3 bg-blue-50/50 p-3 rounded-lg hover:bg-blue-50 transition-all duration-300">
                      <span className="text-blue-500">•</span>
                      <span className="text-gray-700 font-medium">Tài nguyên học tập</span>
                    </li>
                    <li className="flex items-center space-x-3 bg-blue-50/50 p-3 rounded-lg hover:bg-blue-50 transition-all duration-300">
                      <span className="text-blue-500">•</span>
                      <span className="text-gray-700 font-medium">Cổng thông tin</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}