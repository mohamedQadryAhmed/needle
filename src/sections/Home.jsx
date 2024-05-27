import { Carousel } from "flowbite-react";
import banner1 from '../assets/images/vector_11.jpg';
import banner2 from '../assets/images/vector_06.jpg';

const Home = () => {
  return (
    <div className="bg-bg-white" id="slider" data-aos="fade-down">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
        <Carousel className="w-full mx-auto transition-all ease-in-out duration-500" slideInterval={5000}>
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-14">
            <div className="md:w-1/2">
                <img src={banner1} alt="" />
            </div>
            <div className="md:w-1/2 pr-16 font-cairo info">
                <h1 className="text-4xl font-semibold mb-4 text-primary-txt md:w-3/4 leading-snug">كل قطعة ورائها <span className="text-primary-700">قصة حياة</span></h1>
                <p className="text-secondary-txt text-base mb-8">صُنعت بكل شَغف, صُنعت بإبداع خصيصاً لأجلك. كل قطعة لديها قصتها الخاصة</p>
                <button className="primary-btn">تواصل معنا</button>
            </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-14">
            <div className="md:w-1/2">
                <img src={banner2} alt="" className="rounded-xl"/>
            </div>
            <div className="md:w-1/2 pr-16 font-cairo info">
                <h1 className="text-4xl font-semibold mb-4 text-primary-txt md:w-3/4 leading-snug">لمسة<span className="text-primary-700">إبداع </span>في كل قطعة </h1>
                <p className="text-secondary-txt text-base mb-8 lett tracking-wider">ذوق رفيع وتصميم أنيق . نغزل القصة معاً نبدأها بك ونرجوا ألا تنتهي</p>
                <button className="primary-btn">تواصل معنا</button>
            </div>
          </div>
          
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
