import img1 from "../assets/ac1.jpg";
import img2 from "../assets/ac2.jpg";
import img3 from "../assets/cleaning.jpg";
import img4 from "../assets/carwash.jpg";
import img5 from "../assets/salon1.jpg";
import img6 from "../assets/salon2.jpg";
import img7 from "../assets/electric.jpg";

const services = [
  {
    id: "1",
    name: "AC Repair",
    description: "Expert AC repair and maintenance service at your doorstep.",
    price: 1500,
    img: img1,
    category: "AC Services",
    faqs: [
      { q: "Do you provide gas refill?", a: "Yes, we do at extra cost." },
      { q: "How long does it take?", a: "Usually 1-2 hours." }
    ],
    reviews: [
      { user: "Mim", comment: "Very professional!", rating: 5 },
      { user: "Korim", comment: "Fast and clean work.", rating: 4 }
    ]
  },
  {
    id: "2",
    name: "Electrician",
    description: "Professional electrical installation and fixing.",
    price: 1000,
    img: img7,
    category: "Electrical",
    faqs: [
      { q: "Do you provide gas refill?", a: "Yes, we do at extra cost." },
      { q: "How long does it take?", a: "Usually 1-2 hours." }
    ],
    reviews: [
      { user: "Rahim", comment: "Very professional!", rating: 5 },
      { user: "Nusrat", comment: "Fast and clean work.", rating: 4 }
    ]
  },
  {
    id: "3",
    name: "Cleaning Service",
    description: "Deep home cleaning including kitchen and bathroom.",
    price: 1200,
    img: img3,
    category: "Cleaning",
    faqs: [
      { q: "Do you provide gas refill?", a: "Yes, we do at extra cost." },
      { q: "How long does it take?", a: "Usually 1-2 hours." }
    ],
    reviews: [
      { user: "Rahim", comment: "Very professional!", rating: 4 },
      { user: "Nusrat", comment: "Fast and clean work.", rating: 5 }
    ]
  },
   {
    id: "4",
    name: "AC Doctor",
    description: "Expert AC repair and maintenance service at your doorstep.",
    price: 1500,
    img: img2,
    category: "AC Services",
    faqs: [
      { q: "Do you provide gas refill?", a: "Yes, we do at extra cost." },
      { q: "How long does it take?", a: "Usually 1-2 hours." }
    ],
    reviews: [
      { user: "Mim", comment: "Very professional!", rating: 4 },
      { user: "Korim", comment: "Fast and clean work.", rating: 4 }
    ]
  },
  {
    id: "5",
    name: "Car Wash",
    description: "Expert Car Wash and maintenance service at your doorstep.",
    price: 1500,
    img: img4,
    category: "Cleaning",
    faqs: [
      { q: "Do you provide gas refill?", a: "Yes, we do at extra cost." },
      { q: "How long does it take?", a: "Usually 1-2 hours." }
    ],
    reviews: [
      { user: "Mim", comment: "Very professional!", rating: 4 },
      { user: "Korim", comment: "Fast and clean work.", rating: 5 }
    ]
  },
  {
    id: "6",
    name: "Salon Service",
    description: "Relaxed Comfortable Services with disposable items, eg. towel, sachet products",
    price: 1200,
    img: img5,
    category: "Salon Services",
    faqs: [
      { q: "Do you provide gas refill?", a: "Yes, we do at extra cost." },
      { q: "How long does it take?", a: "Usually 1-2 hours." }
    ],
    reviews: [
      { user: "Rahim", comment: "Very professional!", rating: 3 },
      { user: "Nusrat", comment: "Fast and clean work.", rating: 4 }
    ]
  },
  {
    id: "7",
    name: "Salon Care",
    description: "Every women deserves time for self care. Appreciate you for choosing us for taking your care.",
    price: 1200,
    img: img6,
    category: "Salon Services",
    faqs: [
      { q: "Do you provide gas refill?", a: "Yes, we do at extra cost." },
      { q: "How long does it take?", a: "Usually 1-2 hours." }
    ],
    reviews: [
      { user: "Rahim", comment: "Very professional!", rating: 5 },
      { user: "Nusrat", comment: "Fast and clean work.", rating: 5 }
    ]
  },
  {
    id: "8",
    name: "Cleaning Service",
    description: "Deep home cleaning including kitchen and bathroom.",
    price: 1200,
    img: img3,
    category: "Cleaning",
    faqs: [
      { q: "Do you provide gas refill?", a: "Yes, we do at extra cost." },
      { q: "How long does it take?", a: "Usually 1-2 hours." }
    ],
    reviews: [
      { user: "Rahim", comment: "Very professional!", rating: 4 },
      { user: "Nusrat", comment: "Fast and clean work.", rating: 4 }
    ]
  },
];

export default services;

