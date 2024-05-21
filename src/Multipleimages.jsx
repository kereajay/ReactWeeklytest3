import React, { useState, useEffect } from 'react'
import { saveAs } from "file-saver";
import { useNavigate } from 'react-router-dom';

function Multipleimages() {
    const navigate = useNavigate();
    const [searchval, setSearchval] = useState("");
    const [images, setImages] = useState([]);
    // useEffect(() => {
    //     fetchimages();
    // },[])
    const page = 1;
    const URL = `https://api.unsplash.com/search/photos?page=${page}&query=${searchval}&client_id=IRcDe-vvFMkNzakMpH1Fh6UA5IqgkX0P7ciInvlblcg`
    const fetchimages = async () => {
        const res = await fetch(URL);
        const data = await res.json();
        setImages(data.results);
        console.log(data.results)

    }
    const downloadImage = async (url, description) => {
        try {
          const response = await fetch(url);
          const blob = await response.blob();
          saveAs(blob, description || "downloaded_image.jpg"); // Set a default filename if description is not available
        } catch (error) {
          console.error("Error downloading image:", error);
        }
      };
      const handleview = (id) => {
           navigate(`/Multipledetail/${id}`)

      }

    return (
        <>
            <br />
            <div className='mt-28 text-center '>
                <input type="search" placeholder="search" onChange={(e) => setSearchval(e.target.value)} className='bg-white w-[30%] py-3 rounded-3xl px-3 text-lg' />
                <button className='bg-blue-500 text-white px-4 py-2 text-lg rounded-3xl ml-4' onClick={fetchimages}>Search</button>
            </div>
            <br />
            <br />
            <div className='w-[95%] m-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 '>
                {images &&
                    images.map((image) => {


                        return (
                            <>
                                <div className=''>

                                    <div key={image.id} className=''>

                                        <img src={image.urls.small} alt="" className='w-[500px] h-[300px]' />
                                        <button className='bg-blue-500 text-white px-4 py-2 text-lg rounded-xl ' onClick={() => downloadImage(image.urls.full, image.description)}>Download</button>
                                        <button className='bg-blue-500 text-white px-4 py-2 text-lg rounded-xl ' onClick={()=>handleview(image.id)}>View Images</button>

                                    </div>
                                </div>

                            </>
                        )
                    })
                }


            </div>


        </>
    )
}

export default Multipleimages
