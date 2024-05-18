
import img1 from "../../../../public/1.jpg";
import img2 from "../../../../public/2.jpg";
import img3 from "../../../../public/3.jpg";
import img4 from "../../../../public/4.jpeg";
const Banner = () => {
    return (
      <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full h-[600px]">
        <img src={img1} className="w-full rounded-xl" />
        <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] rounded-xl">
         <div className=" text-white pl-4">
          <h1 className="text-6xl font-bold">Build <br />Your New  <br /> Project</h1>
          <p>Welcome to Our World of Endless Possibility </p>
           <div className="flex mt-4 ">
         <button className="btn btn-secondary mr-5">Explore More</button>
         
         </div>
          </div>
                
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle mr-4">❮</a> 
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div> 
      <div id="slide2" className="carousel-item relative w-full h-[600px]">
        <img src={img2} className="w-full rounded-xl" />
        <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] rounded-xl">
         <div className=" text-white pl-4">
         <h1 className="text-6xl font-bold">Build <br />Your New  <br /> Project</h1>
          <p>Welcome to Our World of Endless Possibility </p>
           <div className="flex mt-4 ">
         <button className="btn btn-secondary mr-5">Explore More</button>
         
         </div>
          </div>
                
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle mr-4">❮</a> 
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div> 
      <div id="slide3" className="carousel-item relative w-full h-[600px]">
      <img src={img3} className="w-full rounded-xl" />
      <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] rounded-xl">
         <div className=" text-white pl-4">
         <h1 className="text-6xl font-bold">Build <br />Your New  <br /> Project</h1>
          <p>Welcome to Our World of Endless Possibility </p>
           <div className="flex mt-4 ">
         <button className="btn btn-secondary mr-5">Explore More</button>
        
         </div>
          </div>
                
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle mr-4">❮</a> 
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div> 
      <div id="slide4" className="carousel-item relative w-full h-[600px]">
        <img src={img4} className="w-full rounded-xl" />
        <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] rounded-xl">
         <div className=" text-white pl-4">
         <h1 className="text-6xl font-bold">Build <br />Your New  <br /> Project</h1>
          <p>Welcome to Our World of Endless Possibility </p>
           <div className="flex mt-4 ">
         <button className="btn btn-secondary mr-5">Explore More</button>
        
         </div>
          </div>
                
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle mr-4">❮</a> 
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
    );
};

export default Banner;