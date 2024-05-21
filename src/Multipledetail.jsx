import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Multipledetail = () => {

    const [images, setImages] = useState("")

    const { id } = useParams()
    // console.log(id);
    // setIds(id)

    // const page = 1;
    const URL = `https://api.unsplash.com/photos/${id}?client_id=${"IRcDe-vvFMkNzakMpH1Fh6UA5IqgkX0P7ciInvlblcg"}
    `
    const fetchimages = async () => {
        const res = await fetch(URL);
        const data = await res.json();
        return data;
        // console.log(data.urls.small);
        // setImages(data.urls.small);
        // console.log(images)
        // setLatest(data)

    }
    useEffect(() => {

        fetchimages().then((results) => {
            console.log(results);
            setImages(results)

            // { <img src="{results.urls.small}" alt="" /> }
        })
    }, [])
    console.log(images);




    return (
        <div className='p-28'>
            <div>
                {images &&
                    <div>
                        <h1 className='text-3xl text-bold text-white uppercase'>{images.alt_description}</h1>
                        <br />
                        <img src={images.urls.small} alt="" />
                    </div>
                }
            </div>

        </div>
    )
}

export default Multipledetail
