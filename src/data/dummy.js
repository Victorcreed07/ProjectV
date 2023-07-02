import { AiOutlineCalendar, AiOutlineShoppingCart, AiOutlineAreaChart, AiOutlineBarChart, AiOutlineStock } from 'react-icons/ai';
import { FiShoppingBag, FiEdit, FiPieChart, FiBarChart, FiCreditCard, FiStar, FiShoppingCart } from 'react-icons/fi';
import { BsKanban, BsBarChart, BsBoxSeam, BsCurrencyDollar, BsShield, BsChatLeft,BsFire } from 'react-icons/bs';
import { FaAws,FaQuora,FaTools} from "react-icons/fa";
import { GiCargoShip,GiShipBow,GiShipWreck,GiPoliceOfficerHead } from "react-icons/gi";
import { VscAzure } from "react-icons/vsc";
import { BiColorFill,BiHelpCircle } from 'react-icons/bi';
import { IoMdContacts,IoPeople } from 'react-icons/io';
import { RiContactsLine, RiStockLine } from 'react-icons/ri';
import { MdOutlineSupervisorAccount,MdPeople } from 'react-icons/md';
import { HiOutlineRefresh } from 'react-icons/hi';
import { TiTick } from 'react-icons/ti';
import { GiLouvrePyramid } from 'react-icons/gi';
import { GrLocation } from 'react-icons/gr';

export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];

export const earningData = [
  {
    icon: <MdOutlineSupervisorAccount />,
    amount: '9,354',
    percentage: '100%',
    title: 'Ships',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'red-600',
  },
  {
    icon: <BsBoxSeam />,
    amount: '4,396',
    percentage: '+23%',
    title: 'Operations',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
    pcColor: 'green-600',
  },
  {
    icon: <FiBarChart />,
    amount: '43,369',
    percentage: '+38%',
    title: 'Personnel',
    iconColor: 'rgb(228, 106, 118)',
    iconBg: 'rgb(255, 244, 229)',

    pcColor: 'green-600',
  },
  {
    icon: <HiOutlineRefresh />,
    amount: '3980',
    percentage: '-12%',
    title: 'Security Rating',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
    pcColor: 'red-600',
  },
];

export const userdata = [

{
  No:'76598932',
  Details:{
    Name:'Varsha',
    Rank:'Sailor'
  }
},
{
  No:'812399861124',
  Details:{
    Name:'Geoffrick',
    Rank:'Civilian'
  }
}


]


export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'dashboard',
        icon: <FiShoppingBag />,
      },
    ],
  },

  {
    title: 'Access',
    links: [
      {
        name: 'Sailors',
        icon: <GiPoliceOfficerHead />,
      },
      {
        name: 'Civilians',
        icon: <MdPeople />,
      },
      {
        name: 'Analytics',
        icon: <FaTools />,
      }
    ],
  }
  // {
  //   title: 'Others',
  //   links: [
  //     {
  //       name: 'Dockyard',
  //       icon: <GiCargoShip />,
  //     },
  //     {
  //       name: 'Sailing',
  //       icon: <GiShipBow />,
  //     },
  //     {
  //       name: 'Emergency',
  //       icon: <GiShipWreck />,
  //     },
  //     {
  //       name:'Help and Info',
  //       icon: <BiHelpCircle />
  //     }
      
  //   ],
  // },
  
];

export const stackedplot = [
  {
    x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',],
    y: [100, 120, 150, 130, 160, 180, 200, 190, 220],
    type: 'bar',
    name: 'Product A'
  },
  {
    x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    y: [80, 90, 100, 110, 120, 130, 140, 150, 160],
    type: 'bar',
    name: 'Product B'
  },
  {
    x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    y: [60, 70, 80, 90, 100, 110, 120, 130, 140],
    type: 'bar',
    name: 'Product C'
  }
];

export const SparklineAreaData = [
  { x: 1, yval: 2 },
  { x: 2, yval: 6 },
  { x: 3, yval: 8 },
  { x: 4, yval: 5 },
  { x: 5, yval: 10 },

];
