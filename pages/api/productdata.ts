// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  _id: number;
  title: string;
  description: string;
  oldPrice: number;
  price: number;
  brand: string;
  image: string;
  isNew: boolean;
  category: string;
}[];
const productData = [
  {
    _id: 101,
    title: "Canon EOS Rebel T100",
    description:
      "Canon EOS Rebel T100 Digital SLR Camera with 18-55mm Lens Kit, 18 Megapixel Sensor, Wi-Fi, DIGIC4+, SanDisk 32GB Memory Card and Live View Shooting",
    oldPrice: 38750.95,
    price: 31000.21,
    brand: "Canon",
    image: "https://i.ibb.co/1r28gMk/1.webp",
    isNew: true,
    category: "Electronics",
  },

  {
    _id: 102,
    title: "DJI Air",
    description:
      "DJI Mini 2 Fly More Combo - Ultralight Foldable Drone, 3-Axis Gimbal with 4K Camera, 12MP Photos, 31 Min Flight Time",
    oldPrice: 58126.42,
    price: 55303.14,
    brand: "DJI",
    image: "https://i.ibb.co/qdfB3s6/2.webp",
    isNew: true,
    category: "Electronics",
  },
  {
    _id: 103,
    title: "Apple 10.2-inch iPad",
    description:
      "2021 Apple 10.2-inch iPad Wi-Fi 64GB - Space Gray (9th Generation)",
    oldPrice: 18212.95,
    price: 14891.44,
    brand: "Apple",
    image: "https://i.ibb.co/VL1Dnv1/4.webp",
    isNew: true,
    category: "Electronics",
  },
  {
    _id: 104,
    title: "iPhone 14",
    description: "AT&T iPhone 14 128GB Midnight",
    oldPrice: 96655.39,
    price: 66430.20,
    brand: "Apple",
    image: "https://i.ibb.co/5F3nWv6/7.webp",
    isNew: true,
    category: "Electronics",
  },
  {
    _id: 105,
    title: "Apple Watch SE",
    description:
      "Apple Watch SE (2nd Gen) GPS 40mm Midnight Aluminum Case with Midnight Sport Band - S/M",
    oldPrice: 19375.47,
    price: 13784.27,
    brand: "Apple",
    image: "https://i.ibb.co/xgZWmdq/8.jpg",
    isNew: true,
    category: "Electronics",
  },
  {
    _id: 106,
    title: "Beats Solo3",
    description:
      "Beats Solo3 Wireless On-Ear Headphones with Apple W1 Headphone Chip, Black, MX432LL/A",
    oldPrice: 6697.82,
    price: 7201.59,
    brand: "Beats by Dr. Dre",
    image: "https://i.ibb.co/rQKjVC2/5.webp",
    isNew: true,
    category: "Electronics",
  },
  {
    _id: 107,
    title: "uhomepro TV Stand Cabinet",
    description:
      "uhomepro TV Stand Cabinet for Living Room up to 55 Television, Entertainment Center with RGB LED Lights and Storage Shelves Furniture, Black High Gloss TV Cabinet Console Table, Q15709",
    oldPrice: 12178.32,
    price: 6974.62,
    brand: "uhomepro",
    image: "https://i.ibb.co/Ycz8hkV/6.webp",
    isNew: true,
    category: "Home Decoration",
  },
  {
    _id: 108,
    title: "T-Shirt Men",
    description:
      "St Patricks Day T-Shirt Men -Image by Shutterstock, Male XX-Large",
    oldPrice: 830.38,
    price: 1051.26,
    brand: "Smartprints",
    image: "https://i.ibb.co/BLCDw7v/3.webp",
    isNew: true,
    category: "Fashion",
  },
  {
    _id: 109,
    title: "Picnic Table Bench Set",
    description:
      "Costway Picnic Table Bench Set Outdoor Backyard Patio Garden Party Dining All Weather Black",
    oldPrice: 9410.39,
    price: 16496.83,
    brand: "Costway",
    image: "https://i.ibb.co/qCXcPhq/8.webp",
    isNew: true,
    category: "Home Decoration",
  },
  {
    _id: 110,
    title: "Grill Heavy Duty",
    description: "Expert Grill Heavy Duty 24-Inch Charcoal Grill, Black",
    oldPrice: 6697.82,
    price: 5923.36,
    brand: "Expert Grill",
    image: "https://i.ibb.co/TTS9wY4/9.webp",
    isNew: true,
    category: "Equipments",
  },
  {
    _id: 111,
    title: "Girls Cropped",
    description:
      "Free Assembly Girls Cropped Mixed Cable Knit Fair Isle Sweater, Sizes 4-18",
    oldPrice: 1107.17,
    price: 847.54,
    brand: "Free Assembly",
    image: "https://i.ibb.co/BVzsqvz/10.webp",
    isNew: true,
    category: "Fashion",
  },
  {
    _id: 112,
    title: "Night of Olay Firming Night Cream Face Moisturizer, 1.9 oz",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    oldPrice: 719.11,
    price: 441.76,
    brand: "Olay",
    image: "https://i.ibb.co/zPDcCQY/top4.webp",
    isNew: true,
    category: "Beauty Product",
  },
  {
    _id: 113,
    title: "Face LiquidSweet Lightweight Beauty Products for Women",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    oldPrice: 530.89,
    price: 421.83,
    brand: "unknown",
    image: "https://i.ibb.co/QC4L3RF/top8.jpg",
    isNew: true,
    category: "Beauty Product",
  },
  {
    _id: 114,
    title:
      "L'Oreal Paris Revitalift Triple Power Anti-Aging Cream Face Moisturizer 1.7 oz",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    oldPrice: 1937.55,
    price: 1212.90,
    brand: "L'Oreal Paris",
    image: "https://i.ibb.co/dKmw2sC/top2.webp",
    isNew: true,
    category: "Beauty Product",
  },
  {
    _id: 115,
    title:
      "L'Oreal Paris 55+ Moisturizer Anti-Aging Face Moisturizer, Wrinkle Expert, 1.7 oz",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    oldPrice: 1309.23,
    price: 588.46,
    brand: "L'Oreal Paris",
    image: "https://i.ibb.co/sJwg0YF/top1.webp",
    isNew: true,
    category: "Beauty Product",
  },
  {
    _id: 116,
    title:
      "Vaseline Intensive Care™ Advanced Repair Unscented Body Lotion, 20.3 oz",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    oldPrice: 553.03,
    price: 386.40,
    brand: "Vaseline",
    image: "https://i.ibb.co/v1sPXLq/top5.webp",
    isNew: true,
    category: "Beauty Product",
  },
  {
    _id: 117,
    title: "CeraVe Healing Ointment, Protects and Soothes Cracked Skin, 12 oz",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    oldPrice: 1403.34,
    price: 1155.33,
    brand: "CeraVe",
    image: "https://i.ibb.co/yPJjB3r/top6.webp",
    isNew: false,
    category: "Beauty Product",
  },
  {
    _id: 118,
    title:
      "Neutrogena Hydro Boost Hyaluronic Acid Water Gel Face Moisturizer, 1.7 oz",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    oldPrice: 1605.40,
    price: 1105.51,
    brand: "Neutrogena",
    image: "https://i.ibb.co/zmw8xFY/top7.webp",
    isNew: true,
    category: "Beauty Product",
  },
  {
    _id: 119,
    title:
      "L'Oreal Paris Collagen Moisture Filler Facial Treatment Day Night Cream, Anti-Aging, 1.7 oz",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    oldPrice: 775.02,
    price: 497.12,
    brand: "L'Oreal Paris",
    image: "https://i.ibb.co/vHJkwzt/top3.webp",
    isNew: false,
    category: "Beauty Product",
  },
  {
    _id: 120,
    title: "Girls Sleeveless Cutout",
    description: "Free Assembly Girls Sleeveless Cutout Jumpsuit, Sizes 4-18",
    oldPrice: 2878.64,
    price: 1217.89,
    brand: "Free Assembly",
    image: "https://i.ibb.co/BNXTLkq/12.webp",
    isNew: false,
    category: "Fashion",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(productData);
}
