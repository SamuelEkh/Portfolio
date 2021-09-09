import { IProject } from './types';

export const Projects: IProject[] = [
  {
    title: 'Portfolio',
    date: 'September 2021',
    img: 'https://i.postimg.cc/gJZMp43k/portfolio.jpg',
    description: 'A react app built in TypeScript to showcase my projects.',
    tech: 'TypeScript, React, Node.js',
    codelink: 'Somegithublink'
  },
  {
    title: 'REST API',
    date: 'September 2021',
    img: 'https://i.postimg.cc/0j77WBDD/REST-API.jpg',
    description: 'A Rest API built with Express, made to handle requests from all of my front-end apps.',
    tech: 'TypeScript, Node.js, mongoDB',
    codelink: 'https://github.com/SamuelEkh/heroku-server'
  },
  {
    title: 'Reminders - To-do application',
    date: 'August 2021',
    img: 'https://i.postimg.cc/3w8vmv2Z/todoreminders.jpg',
    description: 'A react app built in TypeScript. Users may create todo-lists and fill them with tasks and subtasks. Supports functionality such as real-time collaboration, creating different kind of lists and much more.',
    tech: 'Typescript, React, Node.js, mongoDB, Socket.io',
    codelink: 'https://github.com/SamuelEkh/todoreminders',
    deploylink: 'https://samuelekh.github.io/todoreminders/'
  },
  {
    title: 'VisiMusic - Ecommerce',
    date: 'Juli 2021',
    img: 'https://i.postimg.cc/4NhCWbYP/visimusic.jpg',
    description: 'A react app built out of my passion for music. Made with the intention to simplify customers shopping experience when looking for musical equipment.',
    tech: 'React, Node.js, mongoDB',
    codelink: 'https://github.com/SamuelEkh/visimusic',
    deploylink: 'https://samuelekh.github.io/visimusic/'
  },
  {
    title: 'Derecho - Weather Application',
    date: 'June 2021',
    img: 'https://i.postimg.cc/FKWDhx4k/Derecho.jpg',
    description: 'A react app built during a hackday. Users may input a city and get relevant information about weather and air quality.',
    tech: 'React, Node.js',
    codelink: 'https://github.com/SamuelEkh/derecho-weather-app',
    deploylink: 'https://samuelekh.github.io/derecho-weather-app/'
  }
]