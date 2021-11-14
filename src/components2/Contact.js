import React from "react";

function Contact() {
  return (
    <div>
      <header className="flex items-center mt-16 mb-6">
        <i className="text-3xl text-transparent bg-clip-text bg-gradient-to-tr from-purple-400 to-pink-500 far fa-address-card"></i>
        <span className="text-3xl pl-3 font-bold text-gray-700">Contact</span>
      </header>

      <div className="space-y-2">
        <div className="px-2 sm:px-4 sm:text-xl">
          <i className="fas fa-phone-alt text-purple-600"></i>
          <span className="font-semibold ml-2 sm:ml-4">9677728298</span>
        </div>
        <div className="px-2 sm:px-4 flex-no-wrap flex items-center sm:text-xl">
          <i className="fas fa-at text-red-600"></i>
          <span className="font-semibold ml-2 sm:ml-4">
            langesh705@gmail.com
          </span>
        </div>
        <div className="px-2 sm:px-4 sm:text-xl">
          <i className="fab fa-twitter text-blue-600"></i>
          <span className="font-semibold ml-2 sm:ml-4">Langesh001</span>
        </div>
        <div className="px-2 sm:px-4 sm:text-xl">
          <i className="fab fa-github"></i>
          <span className="font-semibold ml-2 sm:ml-4">lingeshwaran705</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
