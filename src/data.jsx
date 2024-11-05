// src/data.js
import profileImage from './assets/Zin.jpeg'
import projectImage1 from './assets/Projectpic.jpg';
import projectImage2 from './assets/Projectpic1.jpg';

const data = {
  profileImage,
  name: 'Ezinne Chiwueze',
  role: 'Front-end Developer',
  about: `I am a passionate developer with experience in building web applications.
           My expertise lies in React, Node.js, and CSS frameworks.`,
  projects: [
    { title: 'Project One', description: 'A great project', image: projectImage1, link: '#' },
    { title: 'Project Two', description: 'Another amazing project', image: projectImage2, link: '#' },
  ],
  skills: ['JavaScript', 'React', 'Node.js', 'CSS', 'HTML'],
  contact: { email: 'ezinne4emma@gmail.com', phone: '+2347069178184' },
};

export default data;

  