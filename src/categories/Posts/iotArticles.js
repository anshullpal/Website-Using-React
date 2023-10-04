import React from 'react';
import iotImage1 from '../Posts/images/iot1.png';
import iotImage2 from '../Posts/images/iot2.jpg'; 
import iotImage3 from '../Posts/images/BlockDiagramIot.jpg';
import iotImage4 from '../Posts/images/iot4.jpg';
import iotImage5 from '../Posts/images/FUNDAMENTAL-BLOCKS-OF-IOT.jpg';
import iotImage6 from '../Posts/images/rr-model.jpg';
import iotImage7 from '../Posts/images/ps-model.jpg';
import iotImage8 from '../Posts/images/pp-model.jpg';
import iotImage9 from '../Posts/images/ep-model.jpg';

const iotArticles = [
  {
    id: 1,
    title: 'What is IoT? Internet of Things',
    content: (
      <div>
        <p>
          Internet of things (IoT) provides IP connectivity to various Things apart from general Desktops, Laptops, and Mobile Devices. The term <strong>“things” </strong>means any physical parameter that could be sensed and connected to the Internet.<b>For example,</b> a device monitoring temperature and humidity at a certain location and relaying the data will become a “thing” in the IoT domain.

          Internet of things is a connecting bridge between the physical world and the cyber world, and Machine to Machine communication i.e. without human intervention is one of the subsets of it.</p> <p> IoT Refers to uniquely identifiable objects and their virtual representations in an Internet-like structure. IoT altogether is a new environment in which the current Internet will be smartly utilized by all new ranges of embedded connected things.

          Sensors are the building blocks of the Internet of Things, which can collect parameters and low-power wireless embedded systems transmit information to gateway devices. The gateway device will make the parameters available over the internet so that parameters are globally accessible. Till now, there is no dedicated network stack defined for IoT, as it is a heterogeneous network of networks. The most popular protocols used for the realization of IoT are <strong><i>Zigbee and 6lowPAN (IEEE 802.15.4), Bluetooth, and Wi-Fi.</i></strong> -By CDAC INDIA
        </p>
        <img
          src={iotImage1}
          alt="IoT Device"
          width={'800px'}
          height={'800px'}
          style={{
              display: 'block', 
              margin: '0 auto', 
              marginTop: '20px', 
              marginBottom: '20px', 
          }}
        />
        <b><h3 style={{ fontSize: '30px' }}>What is an example of an Internet of Things device?</h3></b>

        <p>
          Any physical object can be transformed into an IoT device if it can be connected to the internet to be controlled or communicate information. A lightbulb that can be switched on using a smartphone app is an IoT device, as is a motion sensor or a smart thermostat in your office or a connected streetlight. An IoT device could be as fluffy as a child’s toy or as serious as a driverless truck. Some larger objects may themselves be filled with many smaller IoT components, such as a jet engine that’s now filled with thousands of sensors collecting and transmitting data back to make sure it is operating efficiently. At an even bigger scale, smart cities projects are filling entire regions with sensors to help us understand and control the environment.
        </p>
        <img
          src={iotImage2}
          alt="IoT Device"
          width={'600px'}
          height={'600px'}
          style={{
              display: 'block', 
              margin: '0 auto', 
              marginTop: '20px', 
              marginBottom: '20px',
          }}
        />
        <p>
        Above picture is an Equation of Internet of things. IoT Sensors and Actuators plays main role in any IoT Projects. Without IoT Sensors and Actuators, there’s no IoT.

      Generally speaking, a Sensor is a device that is able to detect changes in an environment. By itself, a sensor is useless, but when we use it in an electronic system, it plays a key role. A sensor is able to measure a physical phenomenon (like temperature, pressure, and so on) and transform it into an electric signal. So Sensors are hardware components that can detect events or changes in its surroundings, and then provide a corresponding output. Sensors are the eyes and ears of any IoT Project.

        An Actuator is a device that converts energy into motion. It is usually used to apply a force on some thing. In our example, the actuator would apply force to switch on the motor of the water pump. Actuators can create linear, oscillatory or rotatory motion based on how they are designed.
        </p>
        <b><h3 style={{ fontSize: '30px' }}>What is the scope of Internet of things?</h3></b>
        <p>Internet of Things can connect devices embedded in various systems to the internet. When devices/objects can represent themselves digitally, they can be controlled from anywhere. The connectivity then helps us capture more data from more places, ensuring more ways of increasing efficiency and improving safety and IoT security.

          IoT is a transformational force that can help companies improve performance through IoT analytics and IoT Security to deliver better results. Businesses in the utilities, oil & gas, insurance, manufacturing, transportation, infrastructure and retail sectors can reap the benefits of IoT by making more informed decisions, aided by the torrent of interactional and transactional data at their disposal.</p>
      </div>

    ),
  },
  {
    id: 2,
    title: 'Physical Design of IoT',
    content: (
      <div>
        <p>
        Physical Design of IoT refers to IoT Devices and IoT Protocols. Things are Node device which have unique identities and can perform remote sensing, actuating and monitoring capabilities. IoT Protocols helps Communication established between things and cloud based server over the Internet.</p>
        <b><h3 style={{ fontSize: '30px', textAlign: 'center',}}>Things</h3></b>
        <p>Basically Things refers to IoT Devices which have unique identities and can perform remote sensing, actuating and monitoring capabilities. Things are is main part of IoT Application. IoT Devices can be various type, Sensing Devices, Smart Watches, Smart Electronics appliances, Wearable Sensors, Automobiles, and industrial machines. These devices generate data in some forms or the other which when processed by data analytics systems leads to useful information to guide further actions locally or remotely.</p>
        
        {/* Use the imported image */}
        <img
          src={iotImage3}
          alt="IoT Device"
          width={'600px'}
          height={'600px'}
          style={{
              display: 'block', // Make the image a block element to center it
              margin: '0 auto', // Center-align the image horizontally
              marginTop: '20px', // Add margin to the top
              marginBottom: '20px', // Add margin to the bottom
          }}
        />
        <p>For example, Temperature data generated by a Temperature Sensor in Home or other place, when processed can help in determining temperature and take action according to users.

Above picture, shows a generic block diagram of IoT device. It may consist of several interfaces for connections to other devices. IoT Device has I/O interface for Sensors, Similarly for Internet connectivity, Storage and Audio/Video.

IoT Device collect data from on-board or attached Sensors and Sensed data communicated either to other device or Cloud based sever. Today many cloud servers available for especially IoT System. These Platfrom known as IoT Platform. Actually these cloud especially design for IoT purpose. So here we can analysis and processed data easily.

How it works ? For example if relay switch connected to an IoT device can turn On/Off an appliance on the commands sent to the IoT device over the Internet.</p>
        {/* ...continue with more content... */}
        <b><h3 style={{ fontSize: '30px', textAlign: 'center', }}>IoT Protocols</h3></b>

        <p>
        IoT protcols help to establish Communication between IoT Device (Node Device) and Cloud based Server over the Internet. It help to sent commands to IoT Device and received data from an IoT device over the Internet. An image is given below. By this image you can understand which protocols used.</p>
        <img
          src={iotImage4}
          alt="IoT Device"
          width={'600px'}
          height={'600px'}
          style={{
              display: 'block', // Make the image a block element to center it
              margin: '0 auto', // Center-align the image horizontally
              marginTop: '20px', // Add margin to the top
              marginBottom: '20px', // Add margin to the bottom
          }}
        />
        <b><h3 style={{ fontSize: '30px' }}>Link Layer</h3></b>
        <p>Link layer protocols determine how data is physically sent over the network’s physical layer or medium (Coxial calbe or other or radio wave). Link Layer determines how the packets are coded and signaled by the hardware device over the medium to which the host is attached (eg. coxial cable).</p>
        <p>Here we explain some Link Layer Protocols:</p>
        <li><b>802.3 — Ethernet :</b> Ethernet is a set of technologies and protocols that are used primarily in LANs. It was first standardized in 1980s by IEEE 802.3 standard. IEEE 802.3 defines the physical layer and the medium access control (MAC) sub-layer of the data link layer for wired Ethernet networks. Ethernet is classified into two categories: classic Ethernet and switched Ethernet.</li>
       <li><b>802.11 — WiFi :</b> IEEE 802.11 is part of the IEEE 802 set of LAN protocols, and specifies the set of media access control (MAC) and physical layer (PHY) protocols for implementing wireless local area network (WLAN) Wi-Fi computer communication in various frequencies, including but not limited to 2.4 GHz, 5 GHz, and 60 GHz frequency bands.</li>
        <li><b>802.16 — Wi-Max :</b> The standard for WiMAX technology is a standard for Wireless Metropolitan Area Networks (WMANs) that has been developed by working group number 16 of IEEE 802, specializing in point-to-multipoint broadband wireless access. Initially 802.16a was developed and launched, but now it has been further refined. 802.16d or 802.16–2004 was released as a refined version of the 802.16a standard aimed at fixed applications. Another version of the standard, 802.16e or 802.16–2005 was also released and aimed at the roaming and mobile markets.</li>
        <li><b>802.15.4 -LR-WPAN :</b> A collection of standards for Low-rate wireless personal area network. The IEEE’s 802.15.4 standard defines the MAC and PHY layer used by, but not limited to, networking specifications such as Zigbee ®, 6LoWPAN, Thread, WiSUN and MiWi™ protocols. The standards provide low-cost and low-speed communication for power constrained devices.</li>
        <li><b>2G/3G/4G- Mobile Communication :</b> These are different types of telecommunication generations. IoT devices are based on these standards can communicate over the celluer networks.</li>
        <b><h3 style={{ fontSize: '30px' }}>Network Layer</h3></b>
        <p>
        Responsible for sending of IP datagrams from the source network to the destination network. Network layer performs the host addressing and packet routing. We used IPv4 and IPv6 for Host identification. IPv4 and IPv6 are hierarchical IP addrssing schemes.
        </p>
        <li><b>IPv4 :</b>An Internet Protocol address ( IP address) is a numerical label assigned to each device connected to a computer network that uses the Internet Protocol for communication. An IP address serves two main functions: host or network interface identification and location addressing.

Internet Protocol version 4 (IPv4) defines an IP address as a 32-bit number. However, because of the growth of the Internet and the depletion of available IPv4 addresses, a new version of IP (IPv6), using 128 bits for the IP address, was standardized in 1998. IPv6 deployment has been ongoing since the mid-2000s.</li>
        <li><b>IPv6 :</b> Internet Protocol version 6 ( IPv6) is the most recent version of the Internet Protocol (IP), the communications protocol that provides an identification and location system for computers on networks and routes traffic across the Internet. IPv6 was developed by the Internet Engineering Task Force (IETF) to deal with the long-anticipated problem of IPv4 address exhaustion. IPv6 is intended to replace IPv4. In December 1998, IPv6 became a Draft Standard for the IETF, who subsequently ratified it as an Internet Standard on 14 July 2017. IPv6 uses a 128-bit address, theoretically allowing 2 128, or approximately addresses.</li>
        <b><h3 style={{ fontSize: '30px' }}>Application Layer</h3></b>
        <p>Application layer protocols define how the applications interface with the lower layer protocols to send over the network.</p><br></br>
        <p><b>HTTP :</b> Hypertext Transfer Protocol (HTTP) is an application-layer protocol for transmitting hypermedia documents, such as HTML. It was designed for communication between web browsers and web servers, but it can also be used for other purposes. HTTP follows a classical client-server model, with a client opening a connection to make a request, then waiting until it receives a response. HTTP is a stateless protocol, meaning that the server does not keep any data (state) between two requests. Though often based on a TCP/IP layer, it can be used on any reliable transport layer, that is, a protocol that doesn’t lose messages silently like UDP does. RUDP — the reliable update of UDP — is a suitable alternative.</p>
          <p><b>CoAP :</b> CoAP-Constrained Application Protocol is a specialized Internet Application Protocol for constrained devices, as defined in RFC 7252. It enables devices to communicate over the Internet. It is defined as Contrained Application Protocol, and is a protocol intended to be used in very simple hardware. The protocol is especially targeted for constrained hardware such as 8-bits microcontrollers, low power sensors and similar devices that can’t run on HTTP or TLS. It is a simplification of the HTTP protocol running on UDP, that helps save bandwidth. It is designed for use between devices on the same constrained network (e.g., low-power, lossy networks), between devices and general nodes on the Internet, and between devices on different constrained networks both joined by an internet. CoAP is also being used via other mechanisms, such as SMS on mobile communication networks.</p>
          <p><b>WebSocket</b> : The WebSocket Protocol enables two-way communication between a client running untrusted code in a controlled environment to a remote host that has opted-in to communications from that code. The security model used for this is the origin-based security model commonly used by web browsers. The protocol consists of an opening handshake followed by basic message framing, layered over TCP. The goal of this technology is to provide a mechanism for browser-based applications that need two-way communication with servers that does not rely on opening multiple HTTP connections (e.g., using XMLHttpRequest or iframe and long polling).</p>
          <p><b>MQTT :</b> MQTT is a machine-to-machine (M2M)/”Internet of Things” connectivity protocol. It was designed as an extremely lightweight publish/subscribe messaging transport and useful for connections with remote locations where a small code footprint is required and/or network bandwidth is at a premium. For example, it has been used in sensors communicating to a broker via satellite link, over occasional dial-up connections with healthcare providers, and in a range of home automation and small device scenarios.
          MQTT protocol runs on top of the TCP/IP networking stack. When clients connect and publish/subscribe, MQTT has different message types that help with the handshaking of that process. The MQTT header is two bytes and first byte is constant. In the first byte, you specify the type of message being sent as well as the QoS level, retain, and DUP (duplication) flags. The second byte is the remaining length field.</p>
          <p><b>XMPP :</b> Extensible Messaging and Presence Protocol (XMPP) is a communication protocol for message-oriented middleware based on XML (Extensible Markup Language). It enables the near-real-time exchange of structured yet extensible data between any two or more network entities. Originally named Jabber, the protocol was developed by the eponymous open-source community in 1999 for near real-time instant messaging (IM), presence information, and contact list maintenance. Designed to be extensible, the protocol has been used also for publish-subscribe systems, signalling for VoIP, video, file transfer, gaming, the Internet of Things (IoT) applications such as the smart grid, and social networking services.</p>
          <p><b>DDS :</b> The Data Distribution Service (DDS™) is a middleware protocol and API standard for data-centric connectivity from the Object Management Group® (OMG®). It integrates the components of a system together, providing low-latency data connectivity, extreme reliability, and a scalable architecture that business and mission-critical Internet of Things (IoT) applications need.

In a distributed system, middleware is the software layer that lies between the operating system and applications. It enables the various components of a system to more easily communicate and share data. It simplifies the development of distributed systems by letting software developers focus on the specific purpose of their applications rather than the mechanics of passing information between applications and systems.</p>
      <p><b>AMQP :</b> The AMQP — IoT protocols consist of a hard and fast of components that route and save messages within a broker carrier, with a set of policies for wiring the components together. The AMQP protocol enables patron programs to talk to the dealer and engage with the AMQP model. AMQP has the following three additives, which might link into processing chains in the server to create the favored capability.</p>
      <li><b>Exchange:</b> Receives messages from publisher primarily based programs and routes them to ‘message queues’.</li>
      <li><b>Message Queue:</b> Stores messages until they may thoroughly process via the eating client software.</li>
      <li><b>Binding:</b> States the connection between the message queue and the change.</li>
      </div>
            
    ),
  },




  {
    id: 3,
    title: 'Logical Design of IoT',
    content: (
      <div>
        <p>
        Logical design of IoT system refers to an abstract representation of the entities & processes without going into the low-level specifies of the implementation. For understanding Logical Design of IoT, we describes given below terms.
</p>
           <li> IoT Functional Blocks</li>
            <li>IoT Communication Models</li>
            <li>IoT Communication APIs</li>
        <b><h3 style={{ fontSize: '30px', textAlign: 'center',}}>IoT Functional Blocks</h3></b>
        <p>An IoT system comprises of a number of functional blocks that provide the system the capabilities for identification, sensing, actuation, communication and management.

functional blocks are:

<li><b>Device:</b> An IoT system comprises of devices that provide sensing, actuation, monitoring and control functions.</li>

<li><b>Communication:</b> Handles the communication for the IoT system.</li>


<li><b>Services:</b> services for device monitoring, device control service, data publishing services and services for device discovery.</li>

<li><b>Management:</b> this blocks provides various functions to govern the IoT system.</li>

<li><b>Security:</b> this block secures the IoT system and by providing functions such as authentication , authorization, message and content integrity, and data security.</li>

<li><b>Application:</b> This is an interface that the users can use to control and monitor various aspects of the IoT system. Application also allow users to view the system status and view or analyze the processed data.</li></p>
        
        {/* Use the imported image */}
        <img
          src={iotImage5}
          alt="IoT Device"
          width={'600px'}
          height={'600px'}
          style={{
              display: 'block', // Make the image a block element to center it
              margin: '0 auto', // Center-align the image horizontally
              marginTop: '20px', // Add margin to the top
              marginBottom: '20px', // Add margin to the bottom
          }}
        />
        <b><h3 style={{ fontSize: '30px', textAlign: 'center', }}>IoT Communication Models</h3></b>

        <b><h3 style={{ fontSize: '20px', }}>Request-Response Model</h3></b>
        <p>Request-response model is communication model in which the client sends requests to the server and the server responds to the requests. When the server receives a request, it decides how to respond, fetches the data, retrieves resource representation, prepares the response, and then sends the response to the client. Request-response is a stateless communication model and each request-response pair is independent of others.

HTTP works as a request-response protocol between a client and server. A web browser may be the client, and an application on a computer that hosts a web site may be the server.
Example: A client (browser) submits an HTTP request to the server; then the server returns a response to the client. The response contains status information about the request and may also contain the requested content.

</p>
<img
          src={iotImage6}
          alt="IoT Device"
          width={'600px'}
          height={'600px'}
          style={{
              display: 'block', // Make the image a block element to center it
              margin: '0 auto', // Center-align the image horizontally
              marginTop: '20px', // Add margin to the top
              marginBottom: '20px', // Add margin to the bottom
          }}
        />
        {/* ...continue with more content... */}
        <b><h3 style={{ fontSize: '20px', }}>Publish-Subscribe Model</h3></b>

        <p>
        Publish-Subscribe is a communication model that involves publishers, brokers and consumers. Publishers are the source of data. Publishers send the data to the topics which are managed by the broker. Publishers are not aware of the consumers. Consumers subscribe to the topics which are managed by the broker. When the broker receive data for a topic from the publisher, it sends the data to all the subscribed consumers.</p>
        <img
          src={iotImage7}
          alt="IoT Device"
          width={'600px'}
          height={'600px'}
          style={{
              display: 'block', // Make the image a block element to center it
              margin: '0 auto', // Center-align the image horizontally
              marginTop: '20px', // Add margin to the top
              marginBottom: '20px', // Add margin to the bottom
          }}
        />
        <b><h3 style={{ fontSize: '20px' }}>Push-Pull Model</h3></b>
       
        <p>
        Push-Pull is a communication model in which the data producers push the data to queues and the consumers Pull the data from the Queues. Producers do not need to be aware of the consumers. Queues help in decoupling the messaging between the Producers and Consumers. Queues also act as a buffer which helps in situations when there is a mismatch between the rate at which the producers push data and the rate rate at which the consumer pull data.
</p>
<img
          src={iotImage8}
          alt="IoT Device"
          width={'600px'}
          height={'600px'}
          style={{
              display: 'block', // Make the image a block element to center it
              margin: '0 auto', // Center-align the image horizontally
              marginTop: '20px', // Add margin to the top
              marginBottom: '20px', // Add margin to the bottom
          }}
        />
        
        <b><h3 style={{ fontSize: '20px' }}>Exclusive Pair Model</h3></b>
       
        <p>
        Exclusive Pair is a bidirectional, fully duplex communication model that uses a persistent connection between the client and server. Connection is setup it remains open until the client sends a request to close the connection. Client and server can send messages to each other after connection setup. Exclusive pair is stateful communication model and the server is aware of all the open connections.
</p>
<img
          src={iotImage9}
          alt="IoT Device"
          width={'600px'}
          height={'600px'}
          style={{
              display: 'block', // Make the image a block element to center it
              margin: '0 auto', // Center-align the image horizontally
              marginTop: '20px', // Add margin to the top
              marginBottom: '20px', // Add margin to the bottom
          }}
        />
        
     


      </div>
            
    ),
  },
  // ...other articles...
];

export default iotArticles;
