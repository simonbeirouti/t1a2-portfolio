import MetaHead from '../components/MetaHead';
import Hero from '../components/Hero';
import Image from 'next/image';
import Link from 'next/link';

const hobbies = [
  {hobbieName: 'Exercising', link: 'https://www.risenation.com.au/'},
  {hobbieName: 'Learning', link: 'https://www.coderacademy.edu.au/'},
  {hobbieName: 'Travelling', link: 'https://en.wikipedia.org/wiki/Globe'},
  {hobbieName: 'Reading', link: 'https://www.booktopia.com.au/principles-ray-dalio/book/9781501124020.html'}
];
const technologies =[
  {techName: 'Oura Ring', link: 'https://ouraring.com/'}, 
  {techName: 'MacBook Pro', link: 'https://www.apple.com/au/macbook-pro-14-and-16/'}, 
  {techName: 'iPhone', link: 'https://www.apple.com/au/iphone-12/key-features/'},
  {techName: 'Infrared Saunas', link: 'https://infraredi.com.au/products/infraredi-mid'}
];
const foods = [
  {foodName: 'Organic Meat', link: 'https://hagensorganics.com.au/'}, 
  {foodName: 'Blue Dinosaur', link: 'https://bluedinosaur.com.au/'}, 
  {foodName: 'Life Cykel', link: 'https://lifecykel.com/'} 
];

export default function Home() {
  return (
    <>
      <MetaHead 
        page="Home"
        description="The home page to find some basic information about Simon"
      />
      <Hero 
        description="Hi! I am Simon"
      />
      <div className='avatar-space'>
        <Image className='avatar' width={200} height={200} src='/assets/avatar.png' />
      </div>
      <div className='holder'>
        <div>
          <h1 className='description'>HOBBIES</h1>
          <ul className='liked-ulist'>
            {hobbies.map((hobby) => {
              return (
                  <Link href={hobby.link}>
                    <li>{hobby.hobbieName}</li> 
                  </Link>
              )
            })}
          </ul>
        </div>
        <div>
          <h1 className='description'>TECHNOLOGIES</h1>
          <ul className='liked-ulist'>
            {technologies.map((thing) => {
              return (
                <Link href={thing.link}>
                  <li>{thing.techName}</li> 
                </Link>
              )
            })}
          </ul>
        </div>
        <div>
          <h1 className='description'>FOODS</h1>
          <ul className='liked-ulist'>
            {foods.map((food) => {
              return (
                <Link href={food.link}>
                  <li>{food.foodName}</li>
                </Link>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  )
}
