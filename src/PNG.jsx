import React, { useState } from 'react';
import Image from 'react-image-webp';
import imageCompression from 'browser-image-compression';

const PNG = () => {
  const [file, setFile] = useState(null);
  const [webpFile, setWebpFile] = useState(null);

  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(URL.createObjectURL(selectedFile));
      const webpImage = await convertToWebP(selectedFile);
      setWebpFile(URL.createObjectURL(webpImage));
    }
  };

  const convertToWebP = async (file) => {
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1024,
      useWebWorker: true,
      fileType: 'image/png',
    };
    try {
      const compressedFile = await imageCompression(file, options);
      return compressedFile;
    } catch (error) {
      console.error('Error converting to WebP:', error);
    }
  };

  return (
    <div className="pt-24 bg-[#121420] py-28 ">
      <div className="ml-3">
        <h1 className="text-3xl font-bold text-[#fff]">Image Converter</h1>
        <h1 className="font-medium text-[#979797] py-5">
          Convert your image files to PNG
        </h1>
      </div>
      <div className="bg-[#48CAE4] w-[400px] p-2 rounded-3xl m-auto">
        <label className="text-center ml-36 font-medium cursor-pointer">
          <input
            type="file"
            hidden
            onChange={handleFileChange}
          />
          Choose Image
        </label>
      </div>
      <div className="mt-5 text-center">
        {file && (
          <>
            <h2 className="text-[#fff]">Original Image</h2>
            <img src={file} alt="Original" className="m-auto my-3 max-w-full h-auto" />
          </>
        )}
        {webpFile && (
          <>
            <h2 className="text-[#fff]">Converted to PNG</h2>
            <Image src={webpFile} webp={webpFile} alt="WebP" className="m-auto my-3 max-w-full h-auto" />
          </>
        )}
      </div>
    </div>
  );
};

export default PNG;