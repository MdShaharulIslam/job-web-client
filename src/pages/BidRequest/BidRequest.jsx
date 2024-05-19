import blogimg from "../../../public/blog1.png"
import blogimg2 from "../../../public/blog2.png"
import blogimg3 from "../../../public/blog3.png"
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
        <br /><br />
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">How do they work and where should we store them on the client side?</h1>
            <p className="font-normal text-base leading-6 text-gray-600 ">Refresh Token: A refresh token is a long-lived credential used to obtain a new access token when the current one expires. It is securely stored on the client side and exchanged for a new access token without requiring the user to re-authenticate. Refresh tokens have a longer lifespan compared to access tokens and are used to obtain new access tokens when they expire.

              Refresh tokens are more sensitive because they can be used to obtain new access tokens without requiring the users credentials. Therefore, they should be stored in a more secure manner. Common approaches include using HttpOnly cookies (which cannot be accessed by JavaScript) or in secure browser storage mechanisms such as localStorage or sessionStorage with appropriate security measures (e.g., encryption).

              It s important to note that storing tokens securely is crucial to prevent unauthorized access to user data. Additionally, proper token management practices should be followed to minimize security risks, such as token expiration, token revocation, and token rotation.

              Access tokens are typically stored in memory (e.g., as a variable) or in a secure storage mechanism such as browser cookies or localStorage. They should be kept secure to prevent unauthorized access.</p>
          </div>
          <div className="w-full lg:w-8/12 ">
            <img className="w-full h-full" src={blogimg2} alt="A group of People" />
          </div>
        </div>
        <br /><br />
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">What is express js? What is Nest JS</h1>
            <p className="font-normal text-base leading-6 text-gray-600 ">Express.js and NestJS are both popular frameworks used for building server-side applications in JavaScript and TypeScript, respectively. Here s a brief overview of each

            </p> <br /><br />
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Express.js:</h1>
            <p className="font-normal text-base leading-6 text-gray-600 ">Express.js is a minimalist web application framework for Node.js. It is one of the most widely used frameworks for building web servers and APIs in Node.js.
              Express.js provides a simple and flexible API for handling HTTP requests, routing, middleware, and templating.

              It is lightweight, unopinionated, and highly extensible, allowing developers to build applications ranging from simple APIs to complex web applications.
              Express.js follows the middleware pattern, where each incoming request passes through a series of middleware functions before reaching the final route handler.

            </p>
          </div>
          <div className="w-full lg:w-8/12 ">
            <img className="w-full h-full" src={blogimg3} alt="A group of People" />
          </div>
        </div>


      </div>
    </div>
  );
};

export default BidRequest;
