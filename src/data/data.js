// data.js

import One from '../assets/TopSlider/One.png';
import Two from '../assets/TopSlider/Two.png';
import Three from '../assets/TopSlider/Three.png';
import Four from '../assets/TopSlider/Four.png';
import Five from '../assets/TopSlider/Five.jpg';

  import SBI from '../assets/Partners/SBI.png';
  import HDFC from '../assets/Partners/HDFC.png'
  import ICICI from '../assets/Partners/ICICI.png'
  import BajajFin from '../assets/Partners/BajajFin.png'
  import Axis from '../assets/Partners/Axis.png'
  import LIC from '../assets/Partners/LIC.png'
  import Kotak from '../assets/Partners/Kotak.png'
  import IDFC from '../assets/Partners/IDFC.png'
  import AdityaBirla from '../assets/Partners/AdityaBirla.png'
  import TataCap from '../assets/Partners/TataCapital.png'
  import TruHome from '../assets/Partners/TruHome.png'
  import Yes from '../assets/Partners/Yes.png'
  import DBS from '../assets/Partners/DBS.png'
  import DMI from '../assets/Partners/DMI.png'
  import IOB from '../assets/Partners/IOB.png'
  import Chola from '../assets/Partners/Chola.png'
  import Larsen from '../assets/Partners/Larsen.png'
  import Poonawala from '../assets/Partners/Poonawala.png'
  import BOI from '../assets/Partners/BOI.png'
  import Canara from '../assets/Partners/Canara.png'
  import BOB from '../assets/Partners/BOB.png'
  import Credit from '../assets/Partners/Credit.png'
  import Royal from '../assets/Partners/Royal.png'
  import Standard from '../assets/Partners/Standard.png'
  import AU from '../assets/Partners/AU.png'
  import Jana from '../assets/Partners/Jana.png'
  import Indusland from '../assets/Partners/Indusland.png'
  import Bandhan from '../assets/Partners/Bandhan.png'
  import NeoGrowth from '../assets/Partners/NeoGrowth.png'
  import Godrej from '../assets/Partners/Godrej.png'

// Partners
export const partners = [
  {
    name: "SBI",
    logo: SBI
  },
  {
    name: "HDFC",
    logo: HDFC
  },
  {
    name: "ICICI", 
    logo: ICICI
  },
  {
    name: "Bajaj Finserv",
    logo: BajajFin
  },
  {
    name: "Axis Bank",
    logo: Axis
  },
  {
    name: "LIC",
    logo: LIC
  },
  {
    name: "Kotak",
    logo: Kotak
  },
  {
    name: "IDFC First Bank",
    logo: IDFC
  },
  {
    name: "Aditya Birla",
    logo: AdityaBirla
  },
  {
    name: "Tata Capital",
    logo: TataCap
  },
  {
    name: "TruHome",
    logo: TruHome
  },
  {
    name: "Yes Bank",
    logo: Yes
  },
  {
    name: "DBS",
    logo: DBS
  },
  {
    name: "DMI Finance",
    logo: DMI
  },
  {
    name: "Indian Overseas Bank",
    logo: IOB
  },
  {
    name: "Chola",
    logo: Chola
  },
  {
    name: "L&T Finance",
    logo: Larsen
  },
  {
    name: "Poonawala Fincorp",
    logo: Poonawala
  },
  {
    name: "Bank of India",
    logo: BOI
  },
  {
    name: "Canara Bank",
    logo: Canara
  },
  {
    name: "Bank of Baroda",
    logo: BOB
  },
  {
    name: "Credit Fair",
    logo: Credit
  },
  {
    name: "Royal Sundaram",
    logo: Royal
  },
  {
    name: "Standard Chartered",
    logo: Standard
  },
  {
    name: "AU Small Finance Bank",
    logo: AU
  },
  {
    name: "Jana Small Finance Bank",
    logo: Jana
  },
  {
    name: "IndusInd Bank",
    logo: Indusland
  },
  {
    name: "Bandhan Bank",
    logo: Bandhan
  },
  {
    name: "NeoGrowth",
    logo: NeoGrowth
  },
  {
    name: "Godrej Housing Finance",
    logo: Godrej
  }
]

// Home page main services cards data.
export const data = [
  {
    title: "Business Loans",
    tagline: "Fuel Your Business with the Capital You Need",
    description:
      "Whether you’re looking to grow your business, purchase new equipment, or manage working capital, SD Finance offers quick and easy business loan solutions. With flexible repayment plans and competitive interest rates, we are here to support your business’s growth.",
    whyChoose: [
      "Fast Approval",
      "Affordable Rates",
      "Flexible Repayment Options",
      "Easy Documentation"
    ],
    typesOffered: [
      "Working Capital Loans",
      "Business Expansion Loans",
      "Equipment Financing"
    ],
    image: One,
    buttonLabel: "Boost Your Business",
    buttonLink : "/services/business-loan"
  },
  {
    title: "Home Loans",
    tagline: "Make Your Dream Home a Reality",
    description:
      "At SD Finance, we understand how important it is to find the perfect home. Our home loans are designed to provide flexible, affordable financing with easy approval processes, helping you step into your dream home without the stress.",
    whyChoose: [
      "Low-Interest Rates",
      "Flexible EMI Options",
      "Quick Disbursement",
      "Expert Guidance"
    ],
    image: Two,
    buttonLabel: "Own Your Dream Home",
    buttonLink : "/services/home-loan",
  },
  {
    title: "Personal Loans",
    tagline: "Get the Funds You Need, When You Need Them",
    description:
      "Whether it’s for personal expenses, travel, or unexpected costs, SD Finance’s personal loans are designed to help you manage your finances with ease.",
    whyChoose: [
      "No Collateral Required",
      "Flexible Repayment Terms",
      "Competitive Rates"
    ],
    image: Three,
    buttonLabel: "Get Instant Funds",
    buttonLink : "services/personal-loan",
  },
  {
    title: "Property Loan",
    tagline: "Unlock the Value of Your Property",
    description:
      "Secure a loan using your property with SD Finance’s Loan Against Property options. Whether it’s for business expansion, home improvements, or personal needs, we provide fast approval and flexible repayment terms, so you can access the funds you need while keeping your property secure.",
    whyChoose: [
      "Quick Access to Funds",
      "Flexible Repayment Plans",
      "Competitive Rates"
    ],
    image: Five,
    buttonLabel: "Invest in Property",
    buttonLink : "/services/loan-against-property",
  },
  {
    title: "Auto Loans",
    tagline: "Drive Your Dream Car with SD Finance",
    description:
      "With SD Finance, buying your dream car is just a few steps away. Our auto loans come with quick approval, low-interest rates, and flexible EMI options to make your car purchase easy and affordable.",
    whyChoose: [
      "Quick Approvals",
      "Competitive Interest Rates",
      "Flexible Terms"
    ],
    image: Four,
    buttonLabel: "Drive Your Dream Car",
    buttonLink : "/services/auto-loan",
  }
];



// Awards
export const awards = [
  { title: 'Best Loan', subtitle: 'Provider' },
  { title: 'Best Third Party', subtitle: 'finance Provider' },
  { title: 'Best Loan', subtitle: 'Provider' },
  { title: 'Best Third Party', subtitle: 'Provider' },
];


// 
  export const steps = [
    {
      id: 1,
      title: "Choose Your Loan Product",
      description: "Explore our range of loan products that suit your needs, from business to home loans and more.",
    },
    {
      id: 2,
      title: "Submit Your Application",
      description: "Fill out a simple application form online.",
    },
    {
      id: 3,
      title: "Quick Processing & Approval",
      description: "Get quick approval with minimal documentation.",
    },
    {
      id: 4,
      title: "Funds Disbursed",
      description: "Receive your loan amount directly in your account.",
    },
  ];

  // Testimonials
export const testimonials = [
  {
    stars: 5,
    text: "SD Finance helped me start my boutique quickly. Super fast service, minimal documents, and friendly staff throughout!",
    name: "Ankita Mehra",
    company: "Individual Customer",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    stars: 5,
    text: "Their business loan process is fast and professional. SD Finance truly supports entrepreneurs when it matters the most.",
    name: "Rajeev Pratap Singh",
    company: "Bodhivriksh Venture Pvt Ltd",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    stars: 5,
    text: "Loan disbursal was smooth and transparent. They explained everything clearly and ensured I understood all repayment terms properly.",
    name: "Sneha Kulkarni",
    company: "Individual Customer",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    stars: 5,
    text: "We received funding within two days. SD Finance supported our growth with a flexible and customized loan plan.",
    name: "Arun Keshri",
    company: "Keshav Veneer Point",
    image: "https://randomuser.me/api/portraits/men/27.jpg",
  },
  {
    stars: 5,
    text: "Thanks to SD Finance, I was able to renovate my home with zero stress and great support from their team.",
    name: "Meena Joseph",
    company: "Individual Customer",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
  },
  {
    stars: 4,
    text: "Excellent service! They financed our equipment upgrade on time and without red tape. Very business-friendly team.",
    name: "Rahul Bansal",
    company: "COMMUNICATION",
    image: "https://randomuser.me/api/portraits/men/38.jpg",
  },
  {
    stars: 5,
    text: "I was worried about documentation, but SD Finance kept it simple. Got approval in just 3 days!",
    name: "Nidhi Chawla",
    company: "Individual Customer",
    image: "https://randomuser.me/api/portraits/women/71.jpg",
  },
  {
    stars: 5,
    text: "They tailored a financial plan perfectly to our business goals. Reliable and responsive throughout the process.",
    name: "Dinesh Verma",
    company: "Bodhivriksh Tradetech Pvt Ltd",
    image: "https://randomuser.me/api/portraits/men/49.jpg",
  },
  {
    stars: 5,
    text: "The best lending experience I’ve had. Transparent, friendly, and extremely quick in disbursement. 100% recommend.",
    name: "Tanvi Desai",
    company: "Individual Customer",
    image: "https://randomuser.me/api/portraits/women/40.jpg",
  },
  {
    stars: 5,
    text: "We’ve used SD Finance multiple times. They are consistent, efficient, and always customer-first in approach.",
    name: "Manish Tiwari",
    company: "Radikale Engineering Pvt Ltd",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    stars: 4,
    text: "Great experience! I was approved faster than expected. The team is friendly and very professional.",
    name: "Ritika Sharma",
    company: "Krishkart",
    image: "https://randomuser.me/api/portraits/women/29.jpg",
  },
  {
    stars: 5,
    text: "My loan was processed in just three days! Everything was clear and very well managed.",
    name: "Vikas Reddy",
    company: "Individual Customer",
    image: "https://randomuser.me/api/portraits/men/58.jpg",
  },
  {
    stars: 5,
    text: "Faced a medical emergency and SD Finance handled everything urgently. Grateful for their fast action.",
    name: "Prachi Nambiar",
    company: "Individual Customer",
    image: "https://randomuser.me/api/portraits/women/31.jpg",
  },
  {
    stars: 4,
    text: "Responsive service and flexible options. I felt well-supported and confident in their financial advice.",
    name: "Abhay Mishra",
    company: "Individual Customer",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    stars: 5,
    text: "Loan terms were fair and suited my exact needs. SD Finance truly delivers on its promises.",
    name: "Payal Agarwal",
    company: "Individual Customer",
    image: "https://randomuser.me/api/portraits/women/60.jpg",
  },
  {
    stars: 4,
    text: "Everything was handled professionally. I’ll definitely use SD Finance again and refer to my friends.",
    name: "Sourav Sinha",
    company: "Individual Customer",
    image: "https://randomuser.me/api/portraits/men/60.jpg",
  },
  {
    stars: 5,
    text: "Their expert guidance got me the best rate. Very smooth and fast process throughout my application.",
    name: "Farheen Shaikh",
    company: "Individual Customer",
    image: "https://randomuser.me/api/portraits/women/47.jpg",
  },
  {
    stars: 5,
    text: "Fantastic support team! My loan was approved quickly, and they followed up at every stage proactively.",
    name: "Neeraj Chauhan",
    company: "Individual Customer",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
  },
];


  // Blog Posts

  export const blogs = [
    {
      id: 1,
      date: 'July 4, 2021',
      title: 'Achieve Financial Stability With A Budget.',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
      image: 'https://img.freepik.com/free-vector/money-background-design_1078-123.jpg?t=st=1745378806~exp=1745382406~hmac=b3d6014a8847564350538aac72402b889833dca498b62921f8a9d2cb9610d047&w=826',
    },
    {
      id: 2,
      date: 'July 4, 2021',
      title: 'Achieve Financial Stability With A Budget.',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
      image: 'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 3,
      date: 'July 4, 2021',
      title: 'Achieve Financial Stability With A Budget.',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
      image: 'https://images.unsplash.com/photo-1713946598467-fcf9332c56ea?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];