import ImageOne from '../images/bna-ignacio.jpg';
import ImageTwo from '../images/kilyan-sockalingum.jpg';
import ImageThree from '../images/lerone-pieters.jpg';
import ImageFour from '../images/martin-katler.jpg';
import ImageFive from '../images/max-whitehead.jpg';

export type SliderData = {
  title: string;
  price: string;
  path: string;
  label: string;
  image: any;
  alt: string;
}[];

export const sliderData: SliderData = [
  {
    title: 'Luxury Villa in Bali, Indonesia',
    price: '$4,280,000',
    path: '/homes',
    label: 'View Home',
    image: ImageOne,
    alt: 'House',
  },
  {
    title: 'House in San Jose, Costa Rica',
    price: '$2,860,000',
    path: '/homes',
    label: 'View Home',
    image: ImageTwo,
    alt: 'House',
  },
  {
    title: 'House in Calabasas, California',
    price: '$8,420,000',
    path: '/homes',
    label: 'View Home',
    image: ImageThree,
    alt: 'House',
  },
  {
    title: 'House in Houston, Texas',
    price: '$6,660,000',
    path: '/homes',
    label: 'View Home',
    image: ImageFour,
    alt: 'House',
  },
];

export const sliderDataTwo: SliderData = [
  {
    title: 'House in Las Vigas, Nevada',
    price: '$8,980,000',
    path: '/homes',
    label: 'View Home',
    image: ImageFive,
    alt: 'House',
  },
  {
    title: 'House in Houston, Texas',
    price: '$3,460,000',
    path: '/homes',
    label: 'View Home',
    image: ImageOne,
    alt: 'House',
  },
  {
    title: 'House in Alujuela, Costa Rica',
    price: '$5,420,000',
    path: '/homes',
    label: 'View Home',
    image: ImageTwo,
    alt: 'House',
  },
];
