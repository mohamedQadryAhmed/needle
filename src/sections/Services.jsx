import { TbCircleArrowDown } from "react-icons/tb";
import { big_imgs } from "../assets/data";
import ImgCard from "../components/ImgCard";
import { useState } from "react";
const Services = () => {
  

  const [bigImg, setBigImg] = useState(big_imgs[1]);

  return (
    <section id="services" className="w-full">
      <div className="w-full text-center items-center relative">
        <h2 className="text-4xl text-primary-txt font-messiri absolute top-0">
          خدماتنا
        </h2>
        <span className="h-1 w-28 bg-yellow block absolute right-5 top-12"></span>
      </div>
      <div className="flex xl:flex-row md:flex-row flex-col justify-center gap-10 pb-18">
        <div
          className="relative xl:w-2/5 md:w-1/2 flex flex-col justify-center items-start w-full sm:px-16 px-8 pt-28"
          data-aos="fade-down-left"
        >
          <h2 className="text-3xl font-cairo font-semibold mb-8">
            بلمسات دافئة ننسج معاً{" "}
            <span className="text-primary-700">ذكرايات</span> لتستمر معنا في
            رحلة الحياة
          </h2>
          <button className="flex gap-1 primary-btn ">
            عرض الكل <TbCircleArrowDown className="text-lg" />
          </button>
        </div>
        
        <div className="relative flex-1 flex justify-center items-center  xl:min-h-screen py-8 md:py-20 max-xl:py-40 bg-primary bg-hero bg-cover bg-center rounded-2xl">
            <img src={bigImg} alt="" className="object-contain relative z-10 w-[60%]" />
            <div className='flex sm:gap-6 gap-4 absolute -bottom-[8%] md:-bottom-[15%] xl:left-[25%] md:left-[0%] max-sm:px-6'>
                {
                    big_imgs.map((img, index) => (
                        <div key={index}>
                            <ImgCard 
                                index={index}
                                imgURL={img}
                                changeBigImg={(i) => setBigImg(i)}
                                bigImg={bigImg}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
          
        
      </div>
    </section>
  );
};

export default Services;
