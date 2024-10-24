const About = () => {
  return (
    <>
      <div className="  bg-gradient-to-r from-cyan-200 to-blue-300  h-full ">
        <h1 className=" font-extrabold text-5xl flex justify-center pt-10">
          About Our Editors
        </h1>
        <h2 className="font-extrabold text-5xl flex text-blue-950 justify-center mt-4">
          Vs Code
        </h2>
        <p className="mt-3 font-semibold text-2xl mr-96 ml-96 text-center ">
          Here are some cool things about VS Code: IntelliSense helps you write
          code faster by predicting what you'll type next. Git support means you
          can keep track of changes in your code without leaving the editor. You
          can add extensions to do even more, like work with different
          programming languages or tools.
        </p>

        <h2 className="font-extrabold text-5xl flex text-blue-950 justify-center mt-4">
       
          Sublime Text
        </h2>
        <p className="mt-3 font-semibold text-2xl mr-96 ml-96 text-center ">
          It natively supports many programming languages and markup languages.
          Users can customize it with themes and expand its functionality with
          plugins, typically community-built and maintained under free-software
          licenses. To facilitate plugins, Sublime Text features a Python API.
        </p>
      </div>
      <div className="bg-white h-2"></div>
    </>
  );
};

export default About;
