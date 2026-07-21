import React, { useState, useEffect } from "react";

const images = [
    "https://images.unsplash.com/photo-1486286701208-1d58e9338013?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vdGJhbGx8ZW58MHwwfDB8fHww",
    "https://images.unsplash.com/photo-1434648957308-5e6a859697e8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vdGJhbGx8ZW58MHwwfDB8fHww",
    "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vdGJhbGx8ZW58MHwwfDB8fHww",
    "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb3RiYWxsfGVufDB8MHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1587329310686-91414b8e3cb7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb3RiYWxsfGVufDB8MHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZvb3RiYWxsfGVufDB8MHwwfHx8MA%3D%3D",

];

const Gallary = () => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='flex flex-col lg:flex-row px-[20px] py-[30px] md:p-[70px]  lg:px-[80px] lg:py-[70px] gap-4'>
            <div className="w-[100%] lg:w-[50%]">
                <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-xl">
                    {/* Images */}
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${current * 100}%)`,
                        }}
                    >
                        {images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-[250px] sm:h-[400px] md:h-[500px] object-cover flex-shrink-0"
                            />
                        ))}
                    </div>

                    {/* Previous Button */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full"
                    >
                        ❮
                    </button>

                    {/* Next Button */}
                    <button
                        onClick={nextSlide}
                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full"
                    >
                        ❯
                    </button>

                    {/* Dots */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrent(index)}
                                className={`h-3 w-3 rounded-full ${current === index ? "bg-white" : "bg-gray-400"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className='w-[100%] lg:w-[50%] px-[20px] py-[30px] lg:p-[30px]'>
                <div className='mb-[30px] lg:mb-[60px] border-l-4 border-red-600 px-6 py-2'>
                    <h1 className='text-2xl md:text-3xl font-bold text-black'>ABOUT <span className='text-[#B53232]'>US</span> </h1>
                </div>

                <p className='text-[12px] md:text-[14px] text-black/50'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type .
                    <br />
                    <br />
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentials.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eum nam consequatur quidem earum deserunt libero, nulla ut sunt repudiandae ullam minima assumenda sed eligendi veritatis voluptates. Officiis, illo! Debitis.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, adipisci. Quam nobis exercitationem cumque necessitatibus pariatur tempora repellendus qui, dolores, hic reiciendis optio id sunt natus rerum fugiat, architecto incidunt.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam necessitatibus voluptate vitae neque mollitia, ipsa laudantium accusantium minus soluta a officia cupiditate, voluptatum tempore harum ab tenetur fuga. Explicabo, eveniet.
                </p>
            </div>
        </div>
    )
}

export default Gallary
