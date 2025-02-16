import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="border-4 border-t-4 border-gray-200 border-t-transparent rounded-full w-16 h-16 animate-spin"></div>
    </div>
  );
};

export default Loader;
