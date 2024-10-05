import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <main className="flex flex-col min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="fixed w-full bg-gray-800 shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Portfolio</h1>
          <ul className="flex space-x-4">
            <li><a href="#about" className="hover:text-gray-400">About</a></li>
            <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
            <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/random/1920x1080?nature')" }}>
        <div className="bg-black bg-opacity-50 p-10 rounded-lg text-center">
          <h2 className="text-4xl font-bold">Sreevasan Sivasubramanian</h2>
          <p className="mt-4 text-lg">I'm a passionate computer science student.</p>
        </div>

        <div className="mt-6">
          <Link href="/Sreevasan_Sivasubramanian___Resume.pdf" target="_blank" rel="noopener noreferrer">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
              Download My Resume
            </button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 text-center">
        <h3 className="text-3xl font-bold">About Me</h3>
        <p className="mt-4 max-w-xl mx-auto">I am a sophomore at the University of Dallas majoring in Computer Science with a minor in Statistics. Passionate about leveraging technology to solve complex problems, I have experience in programming languages like Python, Java, and C++. My involvement in the Artificial Intelligence Society has allowed me to work on real-world projects, enhancing my skills in software development and data analysis. I am eager to continue learning and applying my knowledge to create innovative solutions.</p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-800">
        <h3 className="text-3xl font-bold text-center">Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
          <div className="bg-gray-700 p-4 rounded-lg">
            <h4 className="text-xl font-semibold">Docuvoice</h4>
            <p> - <strong>Developed a full-stack application</strong> for the Breaking Barriers GenAI Hackathon that scans documents and verbally conveys information, enabling users to ask questions and receive spoken responses in multiple languages, enhancing accessibility for diverse users.
        <br />
        <br />
        - <strong>Collaborated with a team</strong> to design and implement dynamic features, resulting in an intuitive and user-friendly interface that facilitates seamless interaction with documents.
        <br />
        <br />
        - <strong>Leveraged AWS services</strong> such as Polly for text-to-speech, Textract for document analysis, Transcribe for speech recognition, Translate for multilingual support, and Bedrock for analyzing user speech. This integration significantly improved the user experience and broadened accessibility.
        <br />
        <br />
        - <strong>Utilized React</strong> for a responsive frontend and <strong>Flask with Python</strong> for backend processing, ensuring a cohesive and functional application architecture that supports seamless user interactions.
        </p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h4 className="text-xl font-semibold">Aerovista</h4>
            <p>
            - <strong>Collaborated with a multidisciplinary team</strong> to develop and deploy advanced deep learning models, including Mask R-CNN and RTMDet, utilizing PyTorch to significantly enhance object detection capabilities for search and rescue vehicles. This effort optimized real-time inference performance and accuracy through the implementation of GPU acceleration and dynamic batching techniques.
        <br />
        <br />
        - <strong>Integrated detection systems</strong> with DJI drones using OpenCV and the DJITello API, conducting rigorous field tests that led to measurable improvements in accuracy metrics and operational efficiency.
        <br />
        <br />
        - <strong>Presented our groundbreaking findings</strong> at the ACM Research Symposium, where we were honored to receive the ACM Research People’s Choice Award for excellence in innovation and application, underscoring the impact of our work in the field.
            </p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h4 className="text-xl font-semibold">Circuitseer</h4>
            <p>
            - <strong>Collaborated on the development of a full-stack application</strong> aimed at automating circuit problem-solving, leveraging a deep learning model for component detection that achieved an impressive accuracy of 84% at Intersection over Union (IoU) 0.5. This project was a part of the UTD Artificial Intelligence Society Mentee program.
        <br />
        <br />
        - <strong>Enhanced detection capabilities</strong> by integrating advanced techniques such as Canny Edge Detection and Hough Transform within a TensorFlow environment, significantly improving the model's performance.
        <br />
        <br />
        - <strong>Engineered the solution</strong> with a React frontend and a Flask backend, presenting our work to industry experts for valuable feedback, which contributed to further refinement and optimization of the application.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 text-center">
        <h3 className="text-3xl font-bold">Contact Me</h3>
        <p className="mt-4">Feel free to reach out!</p>
        <form className="mt-8 max-w-lg mx-auto">
          <input type="text" placeholder="Your Name" className="w-full p-2 mb-4 rounded" />
          <input type="email" placeholder="Your Email" className="w-full p-2 mb-4 rounded" />
          <textarea placeholder="Your Message" className="w-full p-2 mb-4 rounded" rows="4"></textarea>
          <button type="submit" className="bg-blue-500 p-2 rounded text-white">Send Message</button>
        </form>
      </section>

       {/* Journey Section */}
       <section id="journey" className="py-20 px-4 text-center">
        <h3 className="text-3xl font-bold">My Journey</h3>
        <p className="mt-4 max-w-xl mx-auto">
          In my recent project, I utilized <strong>Next.js</strong> and <strong>Tailwind CSS</strong> to create a responsive and visually appealing web application. Next.js provided a robust framework for server-side rendering and static site generation, enabling me to optimize performance and improve SEO. Tailwind CSS complemented this by offering a utility-first approach to styling, allowing for rapid design iteration without leaving the HTML. However, I encountered several challenges when deploying the Next.js application to GitHub Pages. One significant issue was that GitHub Pages primarily serves static files, while Next.js applications typically require a Node.js server to handle dynamic routing and API requests. This discrepancy necessitated the use of a custom build process to export the application as static files. Additionally, I faced difficulties with configuring the paths correctly in the `next.config.js` file, as the default routing expected a different structure than what GitHub Pages supports. Despite these hurdles, the experience enhanced my understanding of deployment processes and the intricacies of working with modern web frameworks, ultimately leading to a successful deployment of the application.
        </p>
      </section>
    </main>
  );
};

export default Home;