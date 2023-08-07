import core7 from "../media/items/Computers/core7.png"
import GamingNexus from "../media/items/Computers/GamingNexus.png"
import MiniFusionPC from "../media/items/Computers/Minifusion.png"
import RyzenBeast from "../media/items/Computers/RyzenBeast.png"
import WorkForcePro from "../media/items/Computers/Workforce.png"
import AllInOneElite from "../media/items/Computers/All-in-one.png"
//
import Ultrablade from "../media/items/Notebooks/1.png"
import GamingFury from "../media/items/Notebooks/2.png"
import FlexiBook from "../media/items/Notebooks/3.png"
import ZenBookAir from "../media/items/Notebooks/4.png"
import SwiftBookPro from "../media/items/Notebooks/5.png"
import ProBookPhoenix from "../media/items/Notebooks/6.png"
//
import Asus from "../media/items/Monitors/Asus.png"
import Dell from "../media/items/Monitors/Dell.png"
import ViewSonic from "../media/items/Monitors/viewSonic.png"
import Samsung from "../media/items/Monitors/samsung.png"
import Acer from "../media/items/Monitors/acer.png"
import Lg from "../media/items/Monitors/LG.png"
import CorsairVoyager from "../media/items/Notebooks/7.png"
//
import Cloud2 from "../media/items/Headsets/Cloud2 cable.png"
import Razer from "../media/items/Headsets/Razer.png"
import Sennheiser from "../media/items/Headsets/senn.png"
import SteelSeries from "../media/items/Headsets/SteelS.png"
import Logitech from "../media/items/Headsets/logitech.png"
import Corsair from "../media/items/Headsets/corsair.png"
import HyperX from "../media/items/Headsets/Cloud2.png"
import Astro from "../media/items/Headsets/Astro.png"
//
import ps5 from "../media/items/Consoles/ps5.png"
import XboxSeriesX from "../media/items/Consoles/Xbox series x.png"
import XboxSeriesS from "../media/items/Consoles/xbox series S.png"
import NintendoSwitch from "../media/items/Consoles/switch.png"
import NintendoSwitchOLED from "../media/items/Consoles/switchOled.png"

export const ItemData = [
  [
    {
      name: "Core i7 Desktop PC",
      price: 1800,
      category: "Desktop Computer",
      imgSrc: core7,
      processor: "Intel Core i7-11700K",
      rams: [
        { name: "32GB DDR4", priceDifference: 0 },
        { name: "64GB DDR4", priceDifference: 300 },
        { name: "128GB DDR4", priceDifference: 600 },
      ],
      storages: [
        { name: "1TB NVMe SSD", priceDifference: 0 },
        { name: "2TB NVMe SSD", priceDifference: 200 },
        { name: "4TB NVMe SSD", priceDifference: 500 },
      ],
      gpu: "Nvidia RTX 3070",
      colors: ["Black", "Silver", "White"],
      discount: 0,
      rating: "4.7",
      reviews: 145,
      finalPrice: 1800,
    },
    {
      name: "Gaming Nexus",
      price: 2300,
      category: "Desktop Computer",
      imgSrc: GamingNexus,
      processor: "AMD Ryzen 9 5900X",
      rams: [
        { name: "64GB DDR4", priceDifference: 0 },
        { name: "128GB DDR4", priceDifference: 400 },
        { name: "256GB DDR4", priceDifference: 800 },
      ],
      storages: [
        { name: "2TB NVMe SSD", priceDifference: 0 },
        { name: "4TB NVMe SSD", priceDifference: 300 },
        { name: "8TB NVMe SSD", priceDifference: 800 },
      ],
      gpu: "Nvidia RTX 3080",
      colors: ["Black", "Red", "Blue"],
      discount: 200,
      rating: "4.9",
      reviews: 210,
      finalPrice: 2100,
    },
    {
      name: "MiniFusion PC",
      price: 1200,
      category: "Desktop Computer",
      imgSrc: MiniFusionPC,
      processor: "Intel Core i5-11600",
      rams: [
        { name: "16GB DDR4", priceDifference: 0 },
        { name: "32GB DDR4", priceDifference: 200 },
      ],
      storages: [
        { name: "512GB NVMe SSD", priceDifference: 0 },
        { name: "1TB NVMe SSD", priceDifference: 100 },
      ],
      gpu: "Nvidia GTX 1660 Super",
      colors: ["Black", "White"],
      discount: 0,
      rating: "4.5",
      reviews: 98,
      finalPrice: 1200,
    },
    {
      name: "All-in-One Elite",
      price: 1700,
      category: "Desktop Computer",
      imgSrc: AllInOneElite,
      processor: "Intel Core i9-11900",
      rams: [
        { name: "32GB DDR4", priceDifference: 0 },
        { name: "64GB DDR4", priceDifference: 400 },
      ],
      storages: [
        { name: "1TB NVMe SSD", priceDifference: 0 },
        { name: "2TB NVMe SSD", priceDifference: 200 },
      ],
      gpu: "Nvidia RTX 3060",
      colors: ["Silver", "Black"],
      discount: 0,
      rating: "4.6",
      reviews: 128,
      finalPrice: 1700,
    },
    {
      name: "WorkForce Pro",
      price: 1400,
      category: "Desktop Computer",
      imgSrc: WorkForcePro,
      processor: "AMD Ryzen 7 5800X",
      rams: [
        { name: "32GB DDR4", priceDifference: 0 },
        { name: "64GB DDR4", priceDifference: 300 },
      ],
      storages: [
        { name: "512GB NVMe SSD + 2TB HDD", priceDifference: 0 },
        { name: "1TB NVMe SSD + 4TB HDD", priceDifference: 200 },
      ],
      gpu: "AMD Radeon RX 6700 XT",
      colors: ["Black", "Red"],
      discount: 0,
      rating: "4.3",
      reviews: 75,
      finalPrice: 1400,
    },
    {
      name: "Ryzen Beast",
      price: 2000,
      category: "Desktop Computer",
      imgSrc: RyzenBeast,
      processor: "AMD Ryzen 9 5950X",
      rams: [
        { name: "64GB DDR4", priceDifference: 0 },
        { name: "128GB DDR4", priceDifference: 600 },
      ],
      storages: [
        { name: "2TB NVMe SSD", priceDifference: 0 },
        { name: "4TB NVMe SSD", priceDifference: 300 },
      ],
      gpu: "Nvidia RTX 3090",
      colors: ["Black", "Silver"],
      discount: 0,
      rating: "4.8",
      reviews: 195,
      finalPrice: 2000,
    },
  ],
  [
    {
      name: "Corsair VOYAGER a1600",
      price: 2000,
      category: "Laptop and Notebook",
      imgSrc: CorsairVoyager,
      processor: "Intel Core i7-11700H",
      rams: [
        { name: "16GB DDR4", priceDifference: 0 },
        { name: "32GB DDR4", priceDifference: 200 },
      ],
      storages: [
        { name: "512GB NVMe SSD", priceDifference: 0 },
        { name: "1TB NVMe SSD", priceDifference: 100 },
      ],
      gpu: "Nvidia RTX 3060",
      colors: ["Black"],
      discount: 200,
      rating: "4.8",
      reviews: 15,
      finalPrice: 2000,
      new:true,
    },
    {
      name: "Ultrablade",
      price: 1600,
      category: "Laptop and Notebook",
      imgSrc: Ultrablade,
      processor: "Intel Core i7-11800H",
      rams: [
        { name: "16GB DDR4", priceDifference: 0 },
        { name: "32GB DDR4", priceDifference: 200 },
      ],
      storages: [
        { name: "1TB NVMe SSD", priceDifference: 0 },
        { name: "2TB NVMe SSD", priceDifference: 150 },
      ],
      gpu: "Nvidia GTX 3060",
      colors: ["Gray", "Black"],
      discount: 300,
      rating: "4.6",
      reviews: 132,
      finalPrice: 1300,
    },
    {
      name: "Gaming Fury",
      price: 2100,
      category: "Laptop and Notebook",
      imgSrc: GamingFury,
      processor: "AMD Ryzen 7 5800H",
      rams: [
        { name: "32GB DDR4", priceDifference: 0 },
        { name: "64GB DDR4", priceDifference: 300 },
      ],
      storages: [
        { name: "2TB NVMe SSD", priceDifference: 0 },
        { name: "4TB NVMe SSD", priceDifference: 200 },
      ],
      gpu: "Nvidia RTX 3070",
      colors: ["Black", "Red"],
      discount: 0,
      rating: "4.7",
      reviews: 165,
      finalPrice: 2100,
    },
    {
      name: "FlexiBook Pro",
      price: 1800,
      category: "Laptop and Notebook",
      imgSrc: FlexiBook,
      processor: "Intel Core i9-11900H",
      rams: [
        { name: "32GB DDR4", priceDifference: 0 },
        { name: "64GB DDR4", priceDifference: 400 },
      ],
      storages: [
        { name: "1TB NVMe SSD", priceDifference: 0 },
        { name: "2TB NVMe SSD", priceDifference: 200 },
      ],
      gpu: "Nvidia RTX 3060",
      colors: ["Silver", "Black", "Blue"],
      discount: 150,
      rating: "4.5",
      reviews: 88,
      finalPrice: 1650,
    },
    {
      name: "ZenBook Air",
      price: 1500,
      category: "Laptop and Notebook",
      imgSrc: ZenBookAir,
      processor: "Intel Core i7-1165G7",
      rams: [
        { name: "16GB DDR4", priceDifference: 0 },
        { name: "32GB DDR4", priceDifference: 200 },
      ],
      storages: [
        { name: "512GB NVMe SSD", priceDifference: 0 },
        { name: "1TB NVMe SSD", priceDifference: 100 },
      ],
      gpu: "Intel Iris Xe Graphics",
      colors: ["Silver", "Blue", "Pink"],
      discount: 0,
      rating: "4.9",
      reviews: 198,
      finalPrice: 1500,
    },
    {
      name: "SwiftBook Pro",
      price: 1700,
      category: "Laptop and Notebook",
      imgSrc: SwiftBookPro,
      processor: "AMD Ryzen 9 5900HS",
      rams: [
        { name: "32GB DDR4", priceDifference: 0 },
        { name: "64GB DDR4", priceDifference: 300 },
      ],
      storages: [
        { name: "1TB NVMe SSD", priceDifference: 0 },
        { name: "2TB NVMe SSD", priceDifference: 150 },
      ],
      gpu: "Nvidia GTX 1650",
      colors: ["Silver", "Black", "Green"],
      discount: 0,
      rating: "4.7",
      reviews: 178,
      finalPrice: 1700,
    },
    {
      name: "ProBook Phoenix",
      price: 2200,
      category: "Laptop and Notebook",
      imgSrc: ProBookPhoenix,
      processor: "Intel Core i9-11900H",
      rams: [
        { name: "32GB DDR4", priceDifference: 0 },
        { name: "64GB DDR4", priceDifference: 400 },
      ],
      storages: [
        { name: "1TB NVMe SSD", priceDifference: 0 },
        { name: "2TB NVMe SSD", priceDifference: 200 },
      ],
      gpu: "Nvidia RTX 3070",
      colors: ["Black", "Red"],
      discount: 0,
      rating: "4.8",
      reviews: 220,
      finalPrice: 2200,
    }
  ],
  [
    {
      name: "PlayStation 5",
      price: 500,
      category: "Console",
      imgSrc: ps5,
      processor: "Custom AMD Ryzen Zen 2",
      storage: "825GB SSD",
      gpu: "AMD Radeon RDNA 2",
      colors: ["White", "Black"],
      discount: 0,
      rating: "4.8",
      reviews: 189,
      finalPrice: 500,
    },
    {
      name: "Xbox Series X",
      price: 550,
      category: "Console",
      imgSrc: XboxSeriesX,
      processor: "Custom AMD Ryzen Zen 2",
      storage: "1TB NVMe SSD",
      gpu: "AMD Radeon RDNA 2",
      colors: ["Black"],
      discount: 50,
      rating: "4.7",
      reviews: 205,
      finalPrice: 500,
    },
    {
      name: "Nintendo Switch",
      price: 300,
      category: "Console",
      imgSrc: NintendoSwitch,
      processor: "Custom NVIDIA Tegra X1",
      storage: "32GB eMMC",
      gpu: "NVIDIA Maxwell",
      colors: ["Red/Blue", "Gray"],
      discount: 0,
      rating: "4.5",
      reviews: 128,
      finalPrice: 300,
    },
    {
      name: "PlayStation 5 Digital Edition",
      price: 400,
      category: "Console",
      imgSrc: ps5,
      processor: "Custom AMD Ryzen Zen 2",
      storage: "825GB SSD",
      gpu: "AMD Radeon RDNA 2",
      colors: ["White", "Black"],
      discount: 0,
      rating: "4.6",
      reviews: 152,
      finalPrice: 400,
    },
    {
      name: "Xbox Series S",
      price: 300,
      category: "Console",
      imgSrc: XboxSeriesS,
      processor: "Custom AMD Ryzen Zen 2",
      storage: "512GB NVMe SSD",
      gpu: "AMD Radeon RDNA 2",
      colors: ["White"],
      discount: 40,
      rating: "4.4",
      reviews: 95,
      finalPrice: 260,
    },
    {
      name: "Nintendo Switch OLED",
      price: 350,
      category: "Console",
      imgSrc: NintendoSwitchOLED,
      processor: "Custom NVIDIA Tegra X1",
      storage: "64GB eMMC",
      gpu: "NVIDIA Maxwell",
      colors: ["White", "Black"],
      discount: 0,
      rating: "4.9",
      reviews: 210,
      finalPrice: 350,
    },
  ],
  [
    {
      name: "Dell UltraSharp U2419H",
      price: 250,
      category: "Monitor",
      imgSrc: Dell,
      displaySize: "24 inches",
      resolution: "1920 x 1080 (Full HD)",
      refreshRate: "60Hz",
      panelType: "IPS",
      colors: ["Black"],
      discount: 0,
      rating: "4.5",
      reviews: 105,
      finalPrice: 250,
    },
    {
      name: "ASUS ROG Swift PG279Q",
      price: 700,
      category: "Monitor",
      imgSrc: Asus,
      displaySize: "27 inches",
      resolution: "2560 x 1440 (Quad HD)",
      refreshRate: "165Hz",
      panelType: "IPS",
      colors: ["Black"],
      discount: 130,
      rating: "4.8",
      reviews: 210,
      finalPrice: 570,
    },
    {
      name: "LG 27GL850-B",
      price: 450,
      category: "Monitor",
      imgSrc: Lg,
      displaySize: "27 inches",
      resolution: "2560 x 1440 (Quad HD)",
      refreshRate: "144Hz",
      panelType: "Nano IPS",
      colors: ["Black"],
      discount: 0,
      rating: "4.7",
      reviews: 128,
      finalPrice: 450,
    },
    {
      name: "Acer R240HY",
      price: 150,
      category: "Monitor",
      imgSrc: Acer,
      displaySize: "23.8 inches",
      resolution: "1920 x 1080 (Full HD)",
      refreshRate: "60Hz",
      panelType: "IPS",
      colors: ["Black"],
      discount: 0,
      rating: "4.4",
      reviews: 95,
      finalPrice: 150,
    },
    {
      name: "Samsung Odyssey G7",
      price: 800,
      category: "Monitor",
      imgSrc: Samsung,
      displaySize: "27 inches",
      resolution: "2560 x 1440 (Quad HD)",
      refreshRate: "240Hz",
      panelType: "VA",
      colors: ["Black"],
      discount: 150,
      rating: "4.9",
      reviews: 215,
      finalPrice: 650,
    },
    {
      name: "ViewSonic XG2402",
      price: 250,
      category: "Monitor",
      imgSrc: ViewSonic,
      displaySize: "24 inches",
      resolution: "1920 x 1080 (Full HD)",
      refreshRate: "144Hz",
      panelType: "TN",
      colors: ["Black"],
      discount: 0,
      rating: "4.2",
      reviews: 75,
      finalPrice: 250,
    },
  ],
  [
    {
      name: "HyperX Cloud Alpha Wireless",
      price: 150,
      category: "Headset",
      imgSrc: HyperX,
      connectionType: "Wireless (2.4 GHz USB Dongle)",
      compatibility: "PC, PS4, PS5, Xbox One",
      soundType: "Virtual Surround Sound",
      microphone: "Detachable Noise-Canceling",
      colors: ["Black"],
      discount: 0,
      rating: "4.8",
      reviews: 42,
      finalPrice: 150,
      new: true,
    },
    {
      name: "Astro A30 Wireless",
      price: 200,
      category: "Headset",
      imgSrc: Astro,
      connectionType: "Wireless (2.4 GHz USB Dongle)",
      compatibility: "PC, PS4, Xbox One",
      soundType: "Stereo",
      microphone: "Detachable Noise-Canceling",
      colors: ["Black", "White"],
      discount: 0,
      rating: "4.5",
      reviews: 35,
      finalPrice: 200,
      new: true,
    },
    {
      name: "HyperX Cloud II",
      price: 100,
      category: "Headset",
      imgSrc: Cloud2,
      connectionType: "Wired (USB)",
      compatibility: "PC, PS4, Xbox One",
      soundType: "7.1 Virtual Surround Sound",
      microphone: "Detachable Noise-Canceling",
      colors: ["Black", "Red"],
      discount: 20,
      rating: "4.6",
      reviews: 132,
      finalPrice: 80,
    },
    {
      name: "SteelSeries Arctis Pro Wireless",
      price: 330,
      category: "Headset",
      imgSrc: SteelSeries,
      connectionType: "Wireless (Lossless 2.4 GHz)",
      compatibility: "PC, PS4, PS5",
      soundType: "DTS Headphone:X v2.0",
      microphone: "Retractable ClearCast",
      colors: ["Black"],
      discount: 0,
      rating: "4.8",
      reviews: 198,
      finalPrice: 330,
    },
    {
      name: "Razer BlackShark V2 Pro",
      price: 180,
      category: "Headset",
      imgSrc: Razer,
      connectionType: "Wireless (2.4 GHz USB Dongle)",
      compatibility: "PC, PS4",
      soundType: "THX Spatial Audio",
      microphone: "Detachable HyperClear",
      colors: ["Black"],
      discount: 0,
      rating: "4.7",
      reviews: 175,
      finalPrice: 180,
    },
    {
      name: "Corsair HS60 PRO",
      price: 60,
      category: "Headset",
      imgSrc: Corsair,
      connectionType: "Wired (USB)",
      compatibility: "PC, PS4, Xbox One",
      soundType: "Virtual 7.1 Surround Sound",
      microphone: "Detachable Noise-Canceling",
      colors: ["Carbon", "Yellow", "White"],
      discount: 0,
      rating: "4.5",
      reviews: 92,
      finalPrice: 60,
    },
    {
      name: "Logitech G Pro X",
      price: 130,
      category: "Headset",
      imgSrc: Logitech,
      connectionType: "Wired (USB)",
      compatibility: "PC, PS4, Xbox One, Nintendo Switch",
      soundType: "DTS Headphone:X 2.0",
      microphone: "Blue VO!CE Technology",
      colors: ["Black"],
      discount: 0,
      rating: "4.8",
      reviews: 215,
      finalPrice: 130,
    },
    {
      name: "Sennheiser HD 660 S",
      price: 430,
      category: "Headset",
      imgSrc: Sennheiser,
      connectionType: "Wired (3.5mm)",
      compatibility: "PC, Mac, PS4, Xbox One, Mobile",
      soundType: "Open-Back Audiophile Headphones",
      microphone: "No microphone",
      colors: ["Black"],
      discount: 80,
      rating: "4.9",
      reviews: 168,
      finalPrice: 350,
    }
  ]

      // Add more categories...
    ];
    