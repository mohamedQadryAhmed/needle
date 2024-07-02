const ImgCard = ({ imgURL, changeBigImg, bigImg }) => {

    const handleClick = () => {
        if (bigImg !== imgURL) {
          changeBigImg(imgURL);
          console.log(imgURL);
        }
      };

    return ( 
        <div
      className={`border-[3px] rounded-xl ${
        bigImg === imgURL
          ? "border-primary-600"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-35 sm:h-35 md:w-55 md:h-55 rounded-xl max-sm:p-4'>
        <img
          src={imgURL}
          alt=''
          width={120}
          height={100}
          className='object-contain'
        />
      </div>
    </div>
     );
}
 
export default ImgCard;