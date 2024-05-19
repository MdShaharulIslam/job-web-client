import blogimg from "../../../public/blog1.png"
const BidRequest = () => {
  
  return (
    <div className="mx-8">
   


    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
            <div className="w-full lg:w-5/12 flex flex-col justify-center">
                <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">What is an access token and refresh token?</h1>
                <p className="font-normal text-base leading-6 text-gray-600 ">Access tokens and refresh tokens are commonly used in authentication mechanisms, particularly in web applications utilizing OAuth or similar protocols.

Access Token: An access token is a credential used by an application to access an API or protected resource on behalf of a user. It represents the authorization granted to the application by the user. Access tokens are typically short-lived and have an expiration time. They are used to authenticate API requests.

Access tokens are typically stored in memory (e.g., as a variable) or in a secure storage mechanism such as browser cookies or localStorage. They should be kept secure to prevent unauthorized access.</p>
            </div>
            <div className="w-full lg:w-8/12 ">
                <img className="w-full h-full" src={blogimg} alt="A group of People" />
            </div>
        </div>

        <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
            <div className="w-full lg:w-5/12 flex flex-col justify-center">
                <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Our Client</h1>
                <p className="font-normal text-base leading-6 text-gray-600 ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
            </div>
            <div className="w-full lg:w-8/12 lg:pt-8">
                <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                    <div className="p-4 pb-6 flex justify-center flex-col items-center">
                        <img className="md:block hidden" src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png" alt="Alexa featured Img" />
                        <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Alexa</p>
                    </div>
                    <div className="p-4 pb-6 flex justify-center flex-col items-center">
                        <img className="md:block hidden" src="https://i.ibb.co/fGmxhVy/Rectangle-119.png" alt="Olivia featured Img" />

                        <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Olivia</p>
                    </div>
                    <div className="p-4 pb-6 flex justify-center flex-col items-center">
                        <img className="md:block hidden" src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png" alt="Liam featued Img" />

                        <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Liam</p>
                    </div>
                    <div className="p-4 pb-6 flex justify-center flex-col items-center">
                        <img className="md:block hidden" src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png" alt="Elijah featured img" />

                        <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Elijah</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
};

export default BidRequest;
