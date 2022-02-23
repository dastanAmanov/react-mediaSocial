import profilePicture from '../Assets/person/1.jpeg'
import profilePicture2 from '../Assets/person/2.jpeg'
import profilePicture3 from '../Assets/person/3.jpeg'
import profilePicture4 from '../Assets/person/4.jpeg'
import profilePicture5 from '../Assets/person/5.jpeg'
import profilePicture6 from '../Assets/person/6.jpeg'
import profilePicture7 from '../Assets/person/7.jpeg'
import profilePicture8 from '../Assets/person/8.jpeg'
import profilePicture9 from '../Assets/person/9.jpeg'
import profilePicture10 from '../Assets/person/10.jpeg'

import photo from "../Assets/post/1.jpeg"
import photo2 from "../Assets/post/2.jpeg"
import photo3 from "../Assets/post/3.jpeg"
import photo4 from "../Assets/post/4.jpeg"
import photo5 from "../Assets/post/5.jpeg"
import photo6 from "../Assets/post/6.jpeg"
import photo7 from "../Assets/post/7.jpeg"
import photo8 from "../Assets/post/8.jpeg"
import photo9 from "../Assets/post/9.jpeg"
import photo10 from "../Assets/post/10.jpeg"


export const Users = [
  {
    id:1,
    profilePicture: profilePicture,
    username: "Safak Kocaoglu",
    city: 'New York',
    from: 'Istanbul',
    relationship: 'Single',
  },
  {
    id:2,
    profilePicture: profilePicture2,
    username: "Janell Shrum",
    city: 'Paris',
    from: 'London',
    relationship: 'Married',
  },
  {
    id:3,
    profilePicture: profilePicture3,
    username: "Alex Durden",
    city: 'Paris',
    from: 'Kongo',
    relationship: 'Married',
  },
  {
    id:4,
    profilePicture: profilePicture4,
    username: "Dora Hawks",
    city: 'Berlin',
    from: 'Berlin',
    relationship: 'Sinle',
  },
  {
    id:5,
    profilePicture: profilePicture5,
    username: "Thomas Holden",
    city: 'Madrid',
    from: 'Lessabon',
    relationship: 'Single',
  },
  {
    id:6,
    profilePicture: profilePicture6,
    username: "Shirley Beauchamp",
    city: 'Sidney',
    from: 'Kuala-lumpur',
    relationship: 'Married',
  },
  {
    id:7,
    profilePicture: profilePicture7,
    username: "Travis Bennett",
    city: 'Afina',
    from: 'Afina',
    relationship: 'Married',
  },
  {
    id:8,
    profilePicture: profilePicture8,
    username: "Kristen Thomas",
    city: 'Texas',
    from: 'Colifornia',
    relationship: 'Single',
  },
  {
    id:9,
    profilePicture: profilePicture9,
    username: "Gary Duty",
    city: 'Mexico',
    from: 'Brasil',
    relationship: 'Single',
  },
  {
    id:10,
    profilePicture: profilePicture10,
    username: "Asli Yilmaz",
    city: 'Ankara',
    from: 'Antalia',
    relationship: 'Married',
  },
];

export const Posts = [
  {
    id: 1,
    desc: "Love For All, Hatred For None.",
    photo: photo,
    date: "5 mins ago",
    userId: 1,
    like: 32,
    comment: 9,
  },
  {
    id: 2,
    photo: photo2,
    date: "15 mins ago",
    userId: 2,
    like: 2,
    comment: 1,
  },
  {
    id: 3,
    desc: "Every moment is a fresh beginning.",
    photo: photo3,
    date: "1 hour ago",
    userId: 3,
    like: 61,
    comment: 2,
  },
  {
    id: 4,
    photo: photo4,
    date: "4 hours ago",
    userId: 4,
    like: 7,
    comment: 3,
  },
  {
    id: 5,
    photo: photo5,
    date: "5 hours ago",
    userId: 5,
    like: 23,
    comment: 5,
  },
  {
    id: 6,
    photo: photo6,
    date: "1 day ago",
    userId: 6,
    like: 44,
    comment: 6,
  },
  {
    id: 7,
    desc: "Never regret anything that made you smile.",
    photo: photo7,
    date: "2 days ago",
    userId: 7,
    like: 52,
    comment: 3,
  },
  {
    id: 8,
    photo: photo8,
    date: "3 days ago",
    userId: 8,
    like: 15,
    comment: 1,
  },
  {
    id: 9,
    desc: "Change the world by being yourself.",
    photo: photo9,
    date: "5 days ago",
    userId: 9,
    like: 11,
    comment: 2,
  },
  {
    id: 10,
    photo: photo10,
    date: "1 week ago",
    userId: 10,
    like: 104,
    comment: 12,
  },
];
