import React, { useState } from 'react'
import axios from 'axios'


function Removebg() {
    const [inputimage, setinputimage] = useState(null);
    const [outputimage, setoutputimage] = useState(null);
    // console.log(inputimage);

    const Before = URL.createObjectURL(new Blob([inputimage], { type: 'image/png' }));
    console.log(Before);
    const handleremovebg = async () => {
        // console.log("clicked")
        const formData = new FormData();
        formData.append("image_file", inputimage);
        formData.append("size", "auto");
        const apikey = "68xCetbfKHEQj9vD4Lrnqyvz"
        const url = `
        https://api.remove.bg/v1.0/removebg`;
        // fetch(url, {
        //     method: "POST",
        //     headers: {
        //         "X-Api-Key": apikey

        //     },

        //     body: formData
        // }).then((res) => res.blob()).then((blob) => {
        //     const reader = new FileReader();
        //     reader.onloadend = () => setoutputimage(reader.result);
        //     reader.readAsDataURL(blob);
        // })
        // .catch((err)=> {
        //     console.log(err);
        // })


        axios({
            method: 'post',
            url: 'https://api.remove.bg/v1.0/removebg',
            data: formData,
            responseType: 'arraybuffer',
            headers: {

                'X-Api-Key': apikey,
            },
            encoding: null
        })
            .then((response) => {
                if (response.status != 200) return console.error('Error:', response.status, response.statusText);
                const imgsrc = URL.createObjectURL(new Blob([response.data], { type: 'image/png' }));
                setoutputimage(imgsrc);

                console.log(imgsrc);
            })
            .catch((error) => {
                console.error('Request failed:', error);
            });





    }
    const Downloadremovedbg = async (url) => {
        try {
            const response = await fetch(url);
            const blob = await response.blob();
            saveAs(blob, "downloaded_image.jpg" || "downloaded_image.jpg"); // Set a default filename if description is not available
        } catch (error) {
            console.error("Error downloading image:", error);
        }

    }


    return (
        <>
            <div className='py-28 text-center'>

                <br />
                <div className='w-[30%] mx-auto border-2 border-sky-500 py-2 bg-sky-500 rounded-3xl'>

                    <label className='text-lg text-[#fff]'> <input type="file" hidden className='' onChange={(e) => setinputimage(e.target.files[0])} />Choose File</label>
                </div>
                <br />
                <button className='px-2 bg-blue-400 py-2 rounded-xl' onClick={handleremovebg}>Removebg</button>

            </div>
            <div className='w-[80%] mx-auto grid lg:grid-cols-2'>
                <div>
                    <h1 className='text-2xl text-white font-bold text-center'>Before</h1>
                    <br />
                    <img src={Before} alt="" width={500} />
                </div>
                <div>
                    <h1 className='text-2xl text-white font-bold text-center'>After</h1>
                    <br />
                    {
                        outputimage && <img src={outputimage} alt="" className='' width={500} />
                    }
                </div>
                <br />
                <button onClick={() => Downloadremovedbg(outputimage)} className='px-2 bg-blue-400 py-2 rounded-xl text-lg text-white'>Download</button>
                <br />
                <br />
            </div>
        </>

    )
}

export default Removebg
