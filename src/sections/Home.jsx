import { Carousel } from "flowbite-react";
import banner1 from '../assets/images/vector_11.jpg';
import banner2 from '../assets/images/vector_06.jpg';

const Home = () => {
  return (
    <section className="bg-bg-white pb-12" id="home" data-aos="fade-down">
      <div id="slider" className="px-4 lg:px-14 max-w-screen-2xl mx-auto max-h-screen h-screen">
        <Carousel className="w-full mx-auto transition-all ease-in-out duration-300" >
          <div className="my-20 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-9">
            <div className="w-[300px] md:w-1/2">
                <img src={banner1} alt="" />
            </div>
            <div className="md:w-1/2 pr-16 font-cairo info">
                <h1 className="text-2xl md:text-4xl xl:text-5xl font-semibold mb-1 md:mb-4 text-primary-txt md:w-3/4">كل قطعة ورائها <span className="text-primary-700">قصة حياة</span></h1>
                <p className="text-secondary-txt text-base mb-8">صُنعت بكل شَغف, صُنعت بإبداع خصيصاً لأجلك. كل قطعة لديها قصتها الخاصة</p>
                <button className="primary-btn">تواصل معنا</button>
            </div>
          </div>
          <div className="my-20 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-8">
            <div className="w-[300px] md:w-1/2">
                <img src={banner2} alt="" className="rounded-xl"/>
            </div>
            <div className="md:w-1/2 pr-16 font-cairo info">
                <h1 className="text-2xl md:text-4xl xl:text-5xl font-semibold mb-4 text-primary-txt md:w-3/4 leading-snug">لمسة<span className="text-primary-700">إبداع </span>في كل قطعة </h1>
                <p className="text-secondary-txt text-base mb-8 tracking-wider">ذوق رفيع وتصميم أنيق . نغزل القصة معاً نبدأها بك ونرجوا ألا تنتهي</p>
                <button className="primary-btn">تواصل معنا</button>
            </div>
          </div>
          
        </Carousel>
      </div>
    </section>
  );
};

export default Home;
