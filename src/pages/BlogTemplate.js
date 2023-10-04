import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BlogTemplate = () => {
  return (
    <>
      <div className="px-4" data-aos="fade-down" data-aos-delay="600">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
            <div className="m-2 text-justify text-sm">
              <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Internet of Things</h4>
              <p className="text-md font-medium leading-5 h-auto md:h-48">
                The Internet of Things (IoT) is a transformative technology that interconnects everyday objects and devices to the internet, allowing them to collect, transmit, and exchange data. This connectivity enables remote monitoring, automation, and enhanced decision-making in various sectors like healthcare, agriculture, smart cities, and manufacturing. IoT's potential extends to improving efficiency, reducing costs, and enhancing our quality of life, making it a pivotal force in the digital age.
              </p>
              <div className="flex justify-center my-4">
                <Link to="/blogs/iot" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                  Read More
                  <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
            <div className="m-2 text-justify text-sm">
              <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Electronics</h4>
              <p className="text-md font-medium leading-5 h-auto md:h-48">
                Electronics is the branch of physics and engineering that deals with the study and manipulation of electrical currents and the control of electrical energy. It encompasses the design, development, and application of electronic components and systems, such as semiconductors, integrated circuits, transistors, and printed circuit boards. Electronics plays a pivotal role in modern technology, influencing everything from communication devices to computing, entertainment, healthcare, and automation.
              </p>
              <div className="flex justify-center my-4">
                <Link to="/blogs/electronics" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                  Read More
                  <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </Link>
              </div>

            </div>
          </div>

          <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
            <div className="m-2 text-justify text-sm">
              <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Tech Talks</h4>
              <p className="text-md font-medium leading-5 h-auto md:h-48">
                Tech talks are informative discussions or presentations centered around technology-related topics. They serve as a platform for experts, enthusiasts, and professionals to share insights, innovations, and knowledge. These talks often cover emerging trends, industry developments, and solutions to technical challenges. Tech talks foster learning, networking, and collaboration within the technology community, making them an essential medium for staying updated and engaged in the ever-evolving world of technology
              </p>
              <div className="flex justify-center my-4">
                <Link to="/blogs/talks" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                  Read More
                  <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
            <div className="m-2 text-justify text-sm">
              <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Programming</h4>
              <p className="text-md font-medium leading-5 h-auto md:h-48">
                Programming is the art and science of instructing computers to perform tasks through a set of coded instructions. It's a fundamental pillar of software development, encompassing various languages like Python, Java, and C++. Programming enables the creation of applications, websites, and software systems, influencing nearly every aspect of modern life. It demands problem-solving skills, logical thinking, and creativity, making it a crucial skill in the digital age.
              </p>
              <div className="flex justify-center my-4">
                <Link to="/blogs/programming" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                  Read More
                  <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center my-8">
        <h2 className="text-3xl font-bold text-green-900 underline italic">Thanks For Visting! We Value Our Visitors' Precious Time</h2>
      </div>
        </>
    )
}



export default BlogTemplate;
