import React from 'react';
import Iotbyhvm from '../images/clients/Iotbyhvm-logo.png';
import APalgorithm from '../images/clients/APalgorithm-logo.png';
import Onion_Linux from '../images/clients/Onion_Linux-logo.png';

const clientImage = {
    height: '10rem',
    width: 'auto',
    // mixBlendMode: 'colorBurn'
}

const Clients = () => {
    return (
        <div className="mt-8 bg-gray-100">
            <section>
                <div className="my-4 py-4">
                    <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Our Blogs</h2>
                    <div className='flex justify-center'>
                        <div className='w-24 border-b-4 border-blue-900'></div>
                    </div>
                    <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">Some of our Blogs where you got the content promotions</h2>
                </div>

                <div className="p-16" data-aos-delay="60">
                    <div className="grid sm:grid-cols-3 lg:grid-cols-3">
                        <div style={clientImage} className="overflow-hidden flex justify-center  hover:opacity-100 w-1/6 hover:scale-105 transform transition-transform">
                         <a href="https://iotbyhvm.ooo/" target= "_blank"> <img src={Iotbyhvm}  alt="client" /></a>
                        </div>

                        <div style={clientImage} className="overflow-hidden flex justify-center  hover:opacity-100 w-1/6 hover:scale-105 transform transition-transform">
                        <a href="https://apalgorithm.com/" target="_blank">  <img src={Onion_Linux} alt="client" /></a> 
                        </div>

                        <div style={clientImage} className="overflow-hidden flex justify-center hover:opacity-100 w-1/6 hover:scale-105 transform transition-transform">
                        <a href="https://onionlinux.com/" target="_blank">  <img src={APalgorithm} alt="client"/></a>  
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Clients;