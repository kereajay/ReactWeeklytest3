import React from 'react'
import { useNavigate } from 'react-router-dom'
function Body() {
    const navigate = useNavigate()
  
    return (
        <div>
            <div className='p-28'>
                <div className='m-auto text-center bg-sky-400 w-[32%] p-8'>
                    <img src="https://badass-app.vercel.app/static/media/hero-img-2.aecae7980905c700e4ca.png" alt="" className=' m-auto' />
                </div>
                <br />
                <h1 className='text-3xl text-center font-bold text-white'>Remove Image <span className='text-sky-400'>Background</span></h1>
                <br />
                <p className='text-center text-lg text-sky-200'>Get a transparent background for any image</p>
                <br />
                <br />
                <div className='text-center'>
                    <button className='px-48 bg-white py-2 rounded-2xl text-xl font-bold m-auto' onClick={() => navigate('/Removebg')} >Upload Image</button>
                </div>
                <br />
                <br />


            </div>
            <div>
                <div className='m-auto text-center  w-[32%] p-8'>
                    <img src="https://badass-app.vercel.app/static/media/chain.e33754ea5500ca9abefd.png" alt="" className=' m-auto' />
                </div>
                <br />
                <h1 className='text-3xl text-center font-bold text-white'><span className='text-sky-400'>Convert </span>Your Images | Files</h1>
                <br />
                <p className='text-center text-lg text-sky-200'>With Badass, you can convert your files to any format</p>
                <br />
                <br />
                <div className='text-center'>
                    <button className='px-48 bg-white py-2 rounded-2xl text-xl font-bold m-auto' onClick={() => navigate('/Filechange')}>Choose Files</button>
                </div>
                <br />
                <br />


            </div>
            <div>
                <div className='m-auto text-center w-[32%] p-8'>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAYAAABNEqduAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAQvklEQVR42u3de5BU5ZnH8bc1KAGT2qxxL6BVGk1MJKALoUgEa2FXKo6EMSGZESKgIywm2AoEkJVEdlScYQDJZCKyE0bFW4gTLg4wPZceuocZQGfLSlV2i2RTtRuZO3NLYJCbQ/ezf3S/3adPn3O6G9lKn+H7qTp/xKhUPV3983me857TSgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcCWQ/ZNGXai9c9wF37g7xDfls1QEuMKcfffWm84f/M52acoRqRkr0jhTpClH5MC0z1Ed4IroBMaMutBUsEN842WoyiMSzBV5b5HI0bkiTTlysWbyHKoEDHODe8Zef7ZxmZze6RHxTxA5NC8WAtKUIxLIldDeu4qoFDCMndl7a86f3/DI2cpoEARyI1fjzPiIEMgVqfzKIqoFDFPnd9/6RH+5kvN7PJH9QCBX5OBMkYZpyWFQNeF2KgYMx9HgV/+wWwdB2KciAWC+GmdGwiGQK+LLuZaqAcPMn177cmNCENSMFfFPjF/GMAjkigTyRUR5qBwwTIjvtmv7dtz5x74Kj5zb5ZGhqmgY+CdEr0mJnUG0Kwj7809SPWC4BEHljZ8eeHPKib6KyLIwFgQ1Yw1hYOgK6mfEw6Auby8VBIZLELw1tb+73COnd3pi40FiGEwUqb87ciWEQb5I/f1fo4qA24NAlKfv9SntXdviQaC7AscwiI8Ip6giMAwMvPKlA21lHjn1VuKewHJESOoKckWqp/8bVQRc3hEMVtzwdGepEn2oaKjKoSswh4F/VmRE2P9PY6km4OaOYNt1+a0lSgZ2WI8HiXcRDGGguwL/bAnvv+8DKgm42MlXR36htURJz/bE8SBlV6DDINYVzLifagIuNfj6Z67vLFXStc0TGw8suwK7MIh2BdIw7yPZP3sUFQVcuifo/fn1bW1lHul/NTIe2HYFvvEpuoKct6ko4FL9L131k85SJX0VkfHAsSvwjY8HQkIYzBYJFoj4cqZSUcCF/vzKyBmtJUq6yyPjQcquwDIIol1B3bx2nkUAXOj0G9f9TesGdbFja2Q8MHcFtmHgmxwPgvrpka4gkC9SO2clVQXcticIqk+1vqD+q63MIz3b0+gKqsdFg+CriWGgu4LagiGpzftrKgu4TG+pWtNaErl7MLDDvisYqvI4dAWGMNiTs4GqAi4zsFXd1FqixDgenN5pHQaJXcF4664gsPCi1D1wE5UF3DQelKsRHRvVgB4P9ElDcxDoyzYI9B2EQL7I/lk7qSzgMt3FaqUeD4xdwbldGXYFNfdGw+CRsPhy7qCygJvGg39Xd7SWKGkr80hfRXxpeLYyOQwsdwW+yYYgiI4I737rCJUFXKTvFfUZHQTd5fGlYXpdgSEIjF1B5JDRrVQXcNN4UKK2tpV5pGtbBl2BVRjExoN8kZq8/6WygJu6gpfV7bor6NmefAfBHAaxIKgelxwEhq5g6MD31lJdwCWkUl3dXqy6dFfQ/2qkK9DnCqzuIqTVFVTP/ZP4HmREANzixGa1WJ8pSKcriN1ONHYFvslJXYHsvu95qgu4xGC5+rweD8xdgd3ZAsuuQIdBbFcw/yOpy5tEhQGX6HpWlbaVeT55V2C+g3Ag9x2eTgRcoq80vjTsLk/uCs7tSnwoKWlxaAwEY1dQv1ik5sE5VBhwic7S+HjQVxEPA90VWI4IxiDQYWDuCvY9eEzqFoymwoAL9G5W08xLQ/OuwHFEMHcFNffGu4Lds5ZQYcAFPnxNjTxepM5ZdQUZny0w30EI/OCC1M7/e6oMuED3BrWqs9S+KziXzohgFQb1iyW87+FmKgy4wIlNavTxDSp0WboC8yGj+sVycW9+PlUG3NAVlCivDgLdFRgfSEoZBr7xErYKgmCBSN3SQanMu4YqA9neFbyhRh8vVhf1rUS7rsA8ItjuCvQjysGCyOLw3YcOUGXADV3BJpWvfxHJvCtIa0TwjU9+r6EOg0avSFX+o1QZcIHjxWrIaVdgDAPL15olvdcwGgQ6DGoX8eZjINt1laivpeoKrJ5FiL/JaHL8nYaH5sVDIFgg0uIVaV52nioDWU4K1VXtRarTblfguC8wnjI0dgIt3sTr8I9CVBrIcie2qPHm04YDO9IMA70nMHYExhB4b1HkOrwyLB8sGUG1gWweEV4c9T/GR5SdRgTjviA2Iuiu4NA8+ytYIFL7nQekIfdvqTiQhdq3qE/r1547dQXmMIj9UlL1uOiPqM6wvvyzolf0vIFv/h9k9zdfll9/Y6HsnvZ92XvPt2X31AflnSnz5Zd3LQ7tnLA2tHPShtCbd2wKvfmFNaE3bn76YuWN37/49o33y69vuUf23TZR6qd8UXz33MAj0MBl1FGkHtOLQ+OuIJ3OIOF3FM2PLpuus5WG48pVU+PHlKumxi/fZIunHqN3KQ7OFAnkxrqM8MGHPgxV318hNff9sxQWXsUnCXzSMHhRfWy1K7ALA7tfTdKXfseB/nv1pf8d+t9ptYswnl9ICBr/RJGGaSKNMyNXU47I0bki7y2ScJP3TKh2zuvSxMNPwCVrLVafS3dEMF76i3vW4Yuv//mTb8XDxXjZdR1JYeCfEA8AfR2dG79a/kWkxSvhhnl7pKngBj5V4BJ0vqBWW91ONH5ZjV9Yu4Aw/r36n9eLSKvLKhBsw8A4Hug7E8YweG9RJAyal18Q//zpfKrAJWjfqE7pEcEpDMxf9FMW/7XXX/S+Cvur/7X432d369IcCNIwLY0wiHQHoZo5RXyqQIakUl1tHhHMOwOra2BH5DL/115/4Xu2J1+xMNB/RopASAgD/4RIGBydGw8EmzAI+xe8zycLZOhYobrGfPxYf9GtAsDuy28XAFaBYDUyGAPB3B3EFogHZ0aCwBgC0Susu4UWr4SbV53ikwUy1FGkvmH13gJjGFiFgDEM0gkBq87AaYdg/hHXhFHh6FzrJWIsDJ48wycLZKhrrXpOLw/NY4JdCGTSCdgFglUwGLuDQctRYaLzHQUdBkfWXuCTBTL04Rp1qGNrchg4dwLqkoIgnS7B7leaEm4vGgPBPCq0eCV8dB1PRgKZai9SPcYwsPuSfpJuIJMdguOY4J8QP3Tk1Bm8/1w/nyyQaRhsUh91bI3vDJJbeRX7a8b/73IGglMYJB08ShUGR1ZJuOW5fXyyQKZhUKJOmsPA/F9up5k/k3DoLo93IHbdwSWHgb7deGSVSPPy6XyyQIZaC9XvdRhYfVEvRxDoEOjaZv3n9FYkLxDNT0amDIPoiCBHVonUreIn24BMHV+t1uow0FfCl/kXybsEuyA4kUYI6P9tDASruwnmMEh6UMkuDI7+pJVPFbiUMWG9GqsPHcW/sMpy659OZ2D88ttd5nHBHAaWdxKcwiBhRFj9OJ8qcIl6StRpq67A6fkCu/Eg3TAw/llp7wvMYaAPIMVuKf54SI6u4M3LwKXqLVZ5ujsw32JMOCBUrhKuVF/6yBV5p6JxFLHqDMzHkdMOA0NXEG5ZE+DTBD6hvhI15qOfqjPmL3yqq2ubx/Rlj3/5zZdVGNj9WlPyiGBYHurHmfWIECyIjAiHvWP4JIHLFQrFatLpjergmZ+pc2dfUmK+jEHQWRq5OkqVtJUlfvHbyuKXORCs9gWOh43M+wLzuw1avCIHH/tPPj3g/5EUqpEnN6lbzrygJp5er757tlhtPvez0S1nSuNhoUPBGABOYZBqX2D5liMdBgctwuDIKpEj3gI+LeAvFRSiPIMb1OzB9eq3ToFg7grMI4Lx150dRwQdBjoIDs2L/Fxb04o+eX8Zr14H/tL616uxvZvUx05hYHXgyOkuguWIYA4DvSsILFnBpwBkiTNb1LF0wsBpRLA+aGS6ixB4IB4GjV4JN63ok6blvBEZyBaD61VJ3xblOCKYb12mfRfBuC8wdwX+JaupPpBFTj2nnrXaG6TbFVieLTCOCObFYaNXwk0r+6XpCV6LDmST00XqV1ZBYNcV6Dcp2XUFlncRTF3BUMPCGVQeyDI9RaonnV1BqseVLUcEq66g7iEfVQeyzECZ+mzvZnXR6Xai+d0FTrsCyxHB2BU0rxgS/4JvUnkgy/QVqrlOuwKrcwUJXcFuh64gFgb5sfEgVDd/p3ywZASVB7JM9zPqWDpnC9J56aljV9DolXDjYz0SXDqNqgNZprdQXWe+pZiqKzD+cpLjrkD/ToKhK5CGRU/z0+tAFupcox43jghWuwKnpWFGXYF/8X9I8Ac3U3Ugy0i5GtFTrE7ZdQVOZwqMpw2TbifW3y1SPyP5gNHhZblUHchC7evUQ3aLQ+PdA+PPtWXcFUSDIHx47S4JFn6KqgPZOCL8WH1gFQSp7h5YdQWxXUH93UnjgRxc+js5uvLLVBzIQh1F6kvmxaHVeGAOAnNXYPl0onFpePhHIWleMZuKA1mq7Un1inlxaBUEVl2BdRCYugJ9piD4ZKkcK7yGigNZ6MNC9XdWXcGljAcJXYFxadjolXDgh81y5MmvUnEgS7WuVMXmriDVS0t0EDiOB4aThuHm5Rc4XARksWOF6hqnrsDcERjvHjjeSjQdOZbGpUupNpDF2p9KvJ1o3BUY9wTGIEjZFZjGg1BwcYVU5l1NtYEs1VWoRp0oUgNWQZBqT5Dy7oEOggPffo3zBEC27wqeUflOXYHdnsB6PLgzeTxoWPgbqZ3P+wyBbCaiPF3r1O/SCQLzniDleKD3BHULbqHSQJY78YyaYuwK9NLQ/LKStMYD3/jkIGh4dC1VBlyge536vdPSMNV4EAsD3/jIeOCfFT9uXLdgFxUGXKDrGXVPp+H3FHVXYLcnsOoKhqo8IvUT4kEQyI8EQf3CI9JUwBuOAVeMCM+rDqsDRuYgsBsPhqo88T2BXhg2ekX8D/9Ggo/cTIUBF2h/Xn3R3BVkEgR6TxCO7QkMB4sCj95JhQG3dAXrVZd5aWj+sdSUHYEOAv/s6JOIK8MSXHQf1QXcEwRfT6crsNsTWAZBo1dCjd4VIspDhQGX6F6n/tvYFWQSBENVHpHqcfGFYbBAJPh4ONS0bKPULRhNdQGX6N0Yf0y5Y2v8yHHaQVAzNjEIGr0iAW+ZHPaOobqAi/zxKfWWHhG6tsXfZZjuwtAcBOHD/7pLgsv/isoCLtJVrkaZu4J0njuw6whCzavfluDS66gs4DJtz6ofOnUFxiBIWhiadwSBJ16W4CMjqSrgQj0bIr+FYOwKMg6CRq+Empb/VHxPXEtFATeOCJvV581dQar3E0RuIU6O3T4M181rk7q8SVQTcLHjT6mfd5aqhFuJKYOg/u54EFTn/lZqc2+jkoDL9b6owuauwDYIqsclHDEOV39rn9Q9cBNVBFyus0TdrrsCq6WhUxCE6r63U3w57AeAYTEiFKs/dJYq6S9XSeNBUhDU3BvdDxRclOrZC6geMIz0bVGW48HZ6FmC83s80UXhrGgQzO+WuryZVA4YbmOCqSsw/gJSZFEYHQvqF0u4Nq9KfHNupGrAMNRfrhK6glgQ6LEgkC/hhoJBqf1uPtUChnkYmO8e6PMD4dqHP5ZdX+fXkIErwdDrY2Ljge4Gwv68wdA7dz0twekcKQauFFKmrh0sVYvOvKTWnfuF+kcpVyOoCgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlv4PJ5nJIzTxEmwAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMDgtMDJUMDM6NTM6MDUrMDA6MDDOd6d8AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTA4LTAyVDAzOjUzOjA1KzAwOjAwvyofwAAAAABJRU5ErkJggg==" alt="" className=' m-auto' />
                </div>
                <br />
                <h1 className='text-3xl text-center font-bold text-white'><span className='text-sky-400'>Download</span> Multiple Images At Once</h1>
                <br />
                <p className='text-center text-lg text-sky-200'>Get a transparent background for any image</p>
                <br />
                <br />
                <div className='text-center'>
                    <button className='px-44 bg-white py-2 rounded-2xl text-xl font-bold m-auto' onClick={() => navigate('/Multipleimages')}>Download Images</button>
                </div>
                <br />
                <br />


            </div>

        </div>
    )
}

export default Body
