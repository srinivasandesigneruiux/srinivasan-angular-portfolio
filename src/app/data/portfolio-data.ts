export interface CarouselCard {
  index: string;
  title: string;
  description: string;
  image: string;
  /** matches a PortfolioItem.id — used to route to that project's detail page */
  slug: string;
}

export interface GalleryTab {
  label: string;
  images: string[];
}

export interface ModalGallery {
  id: string;
  title: string;
  images?: string[];
  tabs?: GalleryTab[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  thumb: string;
  /** isotope-style filter categories this card belongs to */
  filters: string[];
  modalId: string;
}

export const FILTERS: { label: string; value: string }[] = [
  { label: 'All', value: '*' },
  { label: 'HTML/CSS | Angular | React', value: 'html' },
  { label: 'Mobile', value: 'mobile' },
  { label: 'Photoshop', value: 'photoshop' },
  { label: 'Figma', value: 'figma' },
];

export const CAROUSEL_CARDS: CarouselCard[] = [
  { index: '01', image: 'assets/images/thumbline/upexcise.webp', title: 'UP Excise', description: 'Government platform for managing excise operations, licenses, and related services digitally.', slug: 'upexcise' },
  { index: '02', image: 'assets/images/thumbline/tnpds.webp', title: 'TNPDS', description: 'Digital public distribution system designed to manage ration cards, commodities, and citizen services.', slug: 'tnpds' },
  { index: '03', image: 'assets/images/thumbline/primetrip.webp', title: 'Primetrip', description: 'Online bus ticket booking platform designed for a simple and seamless travel experience.', slug: 'primetrip' },
  { index: '04', image: 'assets/images/thumbline/pharma.webp', title: 'Oasys Pharma', description: 'Pharma inventory management system for efficiently managing medicines, stock, and business operations.', slug: 'pharma' },
  { index: '05', image: 'assets/images/thumbline/pms.webp', title: 'PMS', description: 'Project management system for tracking projects, tasks, activities, and overall business progress.', slug: 'oasys-pms' },
  { index: '06', image: 'assets/images/thumbline/uiux.webp', title: 'UI/UX', description: 'UI/UX designs and interactive prototypes created in Figma with a focus on usability and modern interfaces.', slug: 'figma-designs' },
  { index: '07', image: 'assets/images/thumbline/ocx.webp', title: 'OCX Battery Passport', description: 'Digital battery lifecycle platform for tracking battery information, history, and traceability.', slug: 'battery-passport' },
  { index: '08', image: 'assets/images/thumbline/ocx-labs.webp', title: 'OCX Labs', description: 'Technology platform focused on innovative digital solutions and connected business operations.', slug: 'ocx-labs' },
  { index: '09', image: 'assets/images/thumbline/grapic-design.webp', title: 'Graphic Design Works', description: 'Creative visual designs including branding, promotional materials, social media, and digital assets.', slug: 'graphic-design' },
  { index: '10', image: 'assets/images/thumbline/emp-portal.webp', title: 'Employee Portal', description: 'Employee management portal for accessing workplace information, services, and resources.', slug: 'emp-portal' },
  { index: '11', image: 'assets/images/thumbline/emp-portal-app.webp', title: 'Employee Portal App', description: 'Mobile application designed to provide employees with quick and convenient access to essential services.', slug: 'emp-portal-app' },
  { index: '12', image: 'assets/images/thumbline/coptex.webp', title: 'CoPtex', description: 'Digital platform supporting textile and handloom operations, products, and customer services.', slug: 'coptex' },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'primetrip',
    title: 'Primetrip',
    description: 'Online bus ticket booking platform designed for a simple and seamless travel experience.',
    thumb: 'assets/images/thumbline/primetrip.webp',
    filters: ['mobile'],
    modalId: 'primetripapp',
  },
  {
    id: 'upexcise',
    title: 'UP Excise',
    description: 'Government platform for managing excise operations, licenses, and related services digitally.',
    thumb: 'assets/images/thumbline/upexcise.webp',
    filters: ['html', 'mobile'],
    modalId: 'upexcise',
  },
  {
    id: 'emp-portal',
    title: 'Employee Portal',
    description: 'Employee management portal for accessing workplace information, services, and resources.',
    thumb: 'assets/images/thumbline/emp-portal.webp',
    filters: ['html'],
    modalId: 'empportalweb',
  },
  {
    id: 'emp-portal-app',
    title: 'Employee Portal App',
    description: 'Mobile application designed to provide employees with quick and convenient access to essential services.',
    thumb: 'assets/images/thumbline/emp-portal-app.webp',
    filters: ['mobile'],
    modalId: 'empportalapp',
  },
  {
    id: 'pharma',
    title: 'Oasys Pharma',
    description: 'Pharma inventory management system for efficiently managing medicines, stock, and business operations.',
    thumb: 'assets/images/thumbline/pharma.webp',
    filters: [],
    modalId: 'oasyspharmaapp',
  },
  {
    id: 'tnpds',
    title: 'TNPDS',
    description: 'Digital public distribution system designed to manage ration cards, commodities, and citizen services.',
    thumb: 'assets/images/thumbline/tnpds.webp',
    filters: [],
    modalId: 'myModal',
  },
  {
    id: 'ocx-labs',
    title: 'OCX Labs',
    description: 'Technology platform focused on innovative digital solutions and connected business operations.',
    thumb: 'assets/images/thumbline/ocx-labs.webp',
    filters: ['html'],
    modalId: 'ocx',
  },
  {
    id: 'coptex',
    title: 'Coptex',
    description: 'Digital platform supporting textile and handloom operations, products, and customer services.',
    thumb: 'assets/images/thumbline/coptex.webp',
    filters: ['html'],
    modalId: 'coptext',
  },
  {
    id: 'oasys-pms',
    title: 'Oasys PMS',
    description: 'Project management system for tracking projects, tasks, activities, and overall business progress.',
    thumb: 'assets/images/thumbline/pms.webp',
    filters: ['html'],
    modalId: 'pms',
  },
  {
    id: 'battery-passport',
    title: 'Battery Passport',
    description: 'Digital battery lifecycle platform for tracking battery information, history, and traceability.',
    thumb: 'assets/images/thumbline/ocx.webp',
    filters: ['mobile'],
    modalId: 'ocxmobileapp',
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    description: 'Creative visual designs including branding, promotional materials, social media, and digital assets.',
    thumb: 'assets/images/thumbline/grapic-design.webp',
    filters: ['photoshop'],
    modalId: 'gdwork',
  },
  {
    id: 'figma-designs',
    title: 'Figma Designs',
    description: 'UI/UX designs and interactive prototypes created in Figma with a focus on usability and modern interfaces.',
    thumb: 'assets/images/thumbline/uiux.webp',
    filters: ['figma'],
    modalId: 'figma',
  },
];

const P = 'assets/images/';

export const MODAL_GALLERIES: Record<string, ModalGallery> = {
  myModal: {
    id: 'myModal',
    title: 'TNPDS (Public Distribution System)',
    images: [
      P + 'tnpds/Home-Public-Distribution-System-08-10-2026-02-17-PM.png',
      P + 'tnpds/Home-Public-Distribution-System-08-10-2026-02-18-PM.png',
      P + 'tnpds/Home-Public-Distribution-System.png',
    ],
  },
  coptext: {
    id: 'coptext',
    title: 'Coptex',
    images: [P + 'tnpds/Co-optex.webp'],
  },
  empportalweb: {
    id: 'empportalweb',
    title: 'OASYS Employee Portal',
    images: [
      P + 'tnpds/emp-web-login.png',
      P + 'tnpds/emp-web-dashboard.png',
      P + 'tnpds/emp-portal-profile.png',
    ],
  },
  upexcise: {
    id: 'upexcise',
    title: 'UP Excise',
    images: [
      P + 'tnpds/UP-Excise-Department-Admin.png',
      P + 'tnpds/UP-Excise-login.webp',
      P + 'tnpds/UP-Excise-page2.png',
      P + 'tnpds/up.png',
    ],
  },
  empportalapp: {
    id: 'empportalapp',
    title: 'Employee Portal App',
    images: [P + 'emp-full-screen.webp'],
  },
  ocx: {
    id: 'ocx',
    title: 'OCX Labs',
    images: [
      P + 'tnpds/OCX-Labs-1.webp',
      P + 'tnpds/OCX-Labs-2.webp',
      P + 'tnpds/OCX-Labs-3.png',
    ],
  },
  gdwork: {
    id: 'gdwork',
    title: 'Graphic Design',
    tabs: [
      {
        label: 'Home',
        images: [
          P + 'broucher/tri-front.webp',
          P + 'broucher/tri-back.webp',
          P + 'broucher/tri-2-front.webp',
          P + 'broucher/tri-2-back.webp',
          P + 'broucher/tri-3-front.webp',
          P + 'broucher/tri-3-back.webp',
          P + 'broucher/tri-4-front.jpg',
          P + 'broucher/tri-4-back.webp',
          P + 'broucher/b-1.webp',
          P + 'broucher/b-2.webp',
          P + 'broucher/b-3.webp',
          P + 'broucher/b-4.webp',
        ],
      },
      {
        label: 'Website Design',
        images: [
          P + 'webdesign/web-2.webp',
          P + 'webdesign/web-3.webp',
          P + 'webdesign/web-4.webp',
          P + 'webdesign/web-5.webp',
          P + 'webdesign/web-6.webp',
          P + 'webdesign/web-7.webp',
          P + 'webdesign/web-8.webp',
          P + 'webdesign/web-9.webp',
          P + 'webdesign/web-10.webp',
          P + 'webdesign/web-11.webp',
        ],
      },
      {
        label: 'Cover Design',
        images: [
          P + 'coverdesign/001-312487211528411-6724a4f39e478.webp',
          P + 'coverdesign/002-cb521b211528411-6724a4f39ecba.webp',
          P + 'coverdesign/003-Image-may-contain-cartoon-and-illustration.webp',
          P + 'coverdesign/004-Image-may-contain-screenshot.webp',
          P + 'coverdesign/005-63a6d7211528411-6724a4f3a2213.webp',
          P + 'coverdesign/006-2c606b211528411-6724a4f39bc1f.webp',
          P + 'coverdesign/007-9838b9211528411-6724a4f39cebb.webp',
          P + 'coverdesign/008-712465211528411-6724a4f3a2932.webp',
          P + 'coverdesign/009-cc0b45211528411-6724a4f3a18fd.webp',
          P + 'coverdesign/010-e59cca211528411-6724a4f3a515a.webp',
          P + 'coverdesign/011-5474fc211528411-6724a4f39dccf.webp',
          P + 'coverdesign/012-Image-may-contain-screenshot.webp',
          P + 'coverdesign/013-188af3211528411-6724a4f39b480.webp',
          P + 'coverdesign/014-b8c35b211528411-6724a4f3a03f3.webp',
          P + 'coverdesign/015-ff5e45211528411-6724a4f39c1d5.webp',
          P + 'coverdesign/016-c32e0d211528411-6724a4f39d4af.webp',
          P + 'coverdesign/017-318290211528411-6724a4f39c994.webp',
          P + 'coverdesign/018-ac4f2e211528411-6724a4f39ac2c.webp',
          P + 'coverdesign/019-c5f09b211528411-6724a4f3a0cf8.webp',
          P + 'coverdesign/020-4cb897211528411-6724a4f3a11ea.webp',
          P + 'coverdesign/021-2c4daa211528411-6724a4f39fbce.webp',
          P + 'coverdesign/022-5b29fb211528411-6724a4f3a1d8e.webp',
          P + 'coverdesign/023-ce4938211528411-6724a4f39a73d.webp',
          P + 'coverdesign/024-792e87211528411-6724a4f3a2f53.webp',
          P + 'coverdesign/025-Image-may-contain-illustration-screenshot-and-vector.webp',
          P + 'coverdesign/026-bb781e211528411-6724a4f3a3e16.webp',
          P + 'coverdesign/027-570ccb211528411-6724a4f3a454d.webp',
          P + 'coverdesign/028-e32d9f211528411-6724a4f3a4c93.webp',
          P + 'coverdesign/029-Image-may-contain-screenshot-cartoon-and-art.webp',
          P + 'coverdesign/030-Cover-Image-for-Project-Dairy-Cover-Design.webp',
        ],
      },
    ],
  },
  ocxmobileapp: {
    id: 'ocxmobileapp',
    title: 'OCX Battery Passport',
    images: [
      P + 'mobile-app/battery-passport/1.jpg',
      P + 'mobile-app/battery-passport/2.jpg',
      P + 'mobile-app/battery-passport/3.jpg',
      P + 'mobile-app/battery-passport/4.jpg',
    ],
  },
  primetripapp: {
    id: 'primetripapp',
    title: 'Prime Trip Mobile App',
    images: [
      P + 'mobile-app/primetrip/1.webp',
      P + 'mobile-app/primetrip/2.webp',
      P + 'mobile-app/primetrip/3.webp',
      P + 'mobile-app/primetrip/4.webp',
      P + 'mobile-app/primetrip/5.webp',
      P + 'mobile-app/primetrip/6.webp',
    ],
  },
  pms: {
    id: 'pms',
    title: 'OASYS PMS Manager Login',
    images: [
      P + 'redmine/login-1.webp',
      P + 'redmine/dashboard-2.webp',
      P + 'redmine/task-list-3.png',
      P + 'redmine/timesheet-4.png',
      P + 'redmine/submit-5.png',
      P + 'redmine/approve-6.png',
      P + 'redmine/add-new-7.png',
      P + 'redmine/createtask-8.png',
      P + 'redmine/tab-1.png',
      P + 'redmine/tab-2.png',
      P + 'redmine/tab-3.png',
    ],
  },
  oasyspharmaapp: {
    id: 'oasyspharmaapp',
    title: 'OASYS Pharma App',
    images: [P + 'oasys-pharma-app/OASYS-Pharma-App-Portfolio-Mockup-White-BG.webp'],
  },
  figma: {
    id: 'figma',
    title: 'Figma Works',
    images: [
  P + 'figma/figma-ecomerce-1.webp',
  P + 'figma/figma-ecomerce-2.webp',
  P + 'figma/figma-ecomerce-3.webp',
  P + 'figma/figma-ecomerce-4.webp',
  P + 'figma/figma-ecomerce-5.webp'
],
  },
};

export interface CaseStudy {
  projectTitle: string;
  tags: string[];
  overview: string;
  client?: string;
  team: string;
  services: string[];
  category: string;
  challenge: string;
  approach: string[];
  highlights: string[];
}

export const CASE_STUDIES: Record<string, CaseStudy> = {
  primetrip: {
    projectTitle: 'PrimeTrip — Online Bus Ticket Booking Platform',
    tags: ['UI/UX DESIGN', 'WEB APPLICATION', 'TRAVEL & TRANSPORTATION'],
    overview:
      'PrimeTrip is an online bus ticket booking platform designed to simplify the complete travel booking experience. The platform allows users to search buses, compare available services, select seats, make payments, and manage their bookings through a simple interface.',
    client: 'PrimeTrip',
    team: 'UI/UX Designer & Front-End Developer',
    services: ['UI/UX Design', 'User Flow', 'Wireframing', 'Prototyping', 'Front-End Development'],
    category: 'Travel & Transportation',
    challenge:
      'The main challenge was creating a smooth booking experience while presenting a large amount of travel information such as routes, bus timings, seat availability, boarding points, and ticket details without overwhelming users.',
    approach: [
      'User journey & requirement analysis',
      'Bus search and filtering experience',
      'Seat selection interface',
      'Booking flow design',
      'Payment experience',
      'Responsive interface design',
      'Front-end implementation',
    ],
    highlights: [
      'Simplified bus search experience',
      'Clear route and timing information',
      'Interactive seat selection',
      'Streamlined booking journey',
      'User-friendly booking confirmation',
    ],
  },
  upexcise: {
    projectTitle: 'UP Excise — Online Excise Management System',
    tags: ['UI/UX DESIGN', 'GOVERNMENT SYSTEM', 'WEB APPLICATION'],
    overview:
      'UP Excise is an online management system designed to support excise-related operations through a centralized digital platform. The system provides users with access to licenses, permits, reports, applications, and other administrative functions.',
    client: 'Uttar Pradesh Excise Department',
    team: 'UI/UX Designer & Front-End Developer',
    services: ['UI/UX Design', 'Dashboard Design', 'User Flow', 'Prototyping', 'Front-End Development'],
    category: 'Government / Enterprise Application',
    challenge:
      'The system contains multiple complex administrative processes and large amounts of information. The challenge was to organize these workflows into an interface that is easy to understand and efficient for different types of users.',
    approach: [
      'Requirement analysis',
      'Information architecture',
      'Dashboard design',
      'Form and application design',
      'Data visualization',
      'Navigation system',
      'Responsive UI development',
    ],
    highlights: [
      'Centralized management dashboard',
      'Organized administrative workflows',
      'Clear data visualization',
      'Structured forms and application screens',
      'Improved navigation and information hierarchy',
    ],
  },
  'emp-portal': {
    projectTitle: 'OASYS Employee Portal — Employee Management Platform',
    tags: ['UI/UX DESIGN', 'HR', 'ENTERPRISE APPLICATION'],
    overview:
      'OASYS Employee Portal is an employee management platform designed to bring essential workplace services into one centralized system. Employees and administrators can manage attendance, leave, payroll-related information, reports, profiles, and other employee activities.',
    client: 'OASYS',
    team: 'UI/UX Designer & Front-End Developer',
    services: ['UX Research', 'User Flow', 'UI Design', 'Dashboard Design', 'Prototyping', 'Front-End Development'],
    category: 'HR / Employee Management',
    challenge:
      'Employees need quick access to frequently used services while administrators require detailed information and management capabilities. The challenge was balancing simplicity for employees with functionality for administrators.',
    approach: [
      'Employee journey mapping',
      'Dashboard architecture',
      'Attendance experience',
      'Leave management',
      'Employee profile',
      'Reports and analytics',
      'Responsive UI',
    ],
    highlights: [
      'Centralized employee services',
      'Clean dashboard experience',
      'Easy access to attendance and leave',
      'Organized employee information',
      'Role-based interface structure',
    ],
  },
  'emp-portal-app': {
    projectTitle: 'OASYS Employee Portal App — Employee Service Application',
    tags: ['UI/UX DESIGN', 'MOBILE APP', 'EMPLOYEE SERVICES'],
    overview:
      'The OASYS Employee Portal App brings essential employee services to mobile devices. The application provides quick access to profiles, attendance, leave, payroll information, documents, notifications, and other workplace services.',
    client: 'OASYS',
    team: 'UI/UX Designer',
    services: ['Mobile UX', 'UI Design', 'User Flow', 'Wireframes', 'Prototyping', 'Design System'],
    category: 'Mobile Application',
    challenge:
      'The challenge was to convert a feature-rich employee portal into a mobile-first experience while keeping navigation simple and ensuring that frequently used features were accessible within a few taps.',
    approach: [
      'Mobile-first information architecture',
      'User flow creation',
      'Feature prioritization',
      'Dashboard design',
      'Bottom/navigation system',
      'Component design',
      'Interactive prototype',
    ],
    highlights: [
      'Mobile-first employee experience',
      'Simple navigation',
      'Quick-access dashboard',
      'Organized employee services',
      'Consistent reusable UI components',
    ],
  },
  pharma: {
    projectTitle: 'OASYS Pharma — Smart Inventory Management',
    tags: ['UI/UX DESIGN', 'PHARMA', 'INVENTORY MANAGEMENT'],
    overview:
      'OASYS Pharma is an inventory management solution designed for pharmaceutical operations. The platform helps users manage inventory, stock movement, reports, products, and other operational activities through a centralized interface.',
    client: 'OASYS',
    team: 'UI/UX Designer & Front-End Developer',
    services: ['UX Design', 'Dashboard Design', 'Data Visualization', 'UI Design', 'Prototyping', 'Front-End Development'],
    category: 'Healthcare / Inventory Management',
    challenge:
      'Pharmaceutical inventory contains large amounts of product and stock information. The interface needed to make important inventory information easy to understand while supporting day-to-day operational workflows.',
    approach: [
      'Inventory workflow analysis',
      'Information architecture',
      'Dashboard design',
      'Stock management screens',
      'Data tables',
      'Reports and analytics',
      'Responsive UI',
    ],
    highlights: [
      'Structured inventory dashboard',
      'Clear stock information',
      'Easy product management',
      'Reports and analytics',
      'Improved information hierarchy',
    ],
  },
  tnpds: {
    projectTitle: 'TNPDS — Tamil Nadu Public Distribution System',
    tags: ['UI/UX DESIGN', 'GOVERNMENT', 'PUBLIC SERVICE'],
    overview:
      "TNPDS is a digital platform supporting Tamil Nadu's Public Distribution System. The project focuses on presenting essential public distribution information and services through a structured and accessible digital experience.",
    client: 'Tamil Nadu Public Distribution System',
    team: 'UI/UX Designer & Front-End Developer',
    services: ['UI/UX Design', 'User Flow', 'Web Design', 'Dashboard Design', 'Front-End Development'],
    category: 'Government / Public Service',
    challenge:
      'Government service platforms need to serve users with different levels of technical familiarity. The challenge was creating a straightforward interface while organizing information related to ration cards, beneficiaries, inventory, reports, and distribution.',
    approach: [
      'User flow analysis',
      'Information architecture',
      'Service-focused navigation',
      'Dashboard design',
      'Data visualization',
      'Responsive interface',
      'Accessibility-focused layouts',
    ],
    highlights: [
      'Clear public-service navigation',
      'Organized beneficiary information',
      'Ration card management interface',
      'Inventory and reporting sections',
      'Simple information hierarchy',
    ],
  },
  'ocx-labs': {
    projectTitle: 'OCX Labs — Smarter Scans. Stronger Operations.',
    tags: ['UI/UX DESIGN', 'LOGISTICS', 'QR TECHNOLOGY'],
    overview:
      'OCX Labs is a technology-focused solution designed around smart scanning and operational tracking. The platform uses digital scanning workflows to help users capture and manage information efficiently during operational processes.',
    client: 'OCX Labs',
    team: 'UI/UX Designer & Front-End Developer',
    services: ['UX Design', 'UI Design', 'Workflow Design', 'Dashboard Design', 'Prototyping'],
    category: 'Technology / Operations',
    challenge:
      'Scanning-based workflows need to be fast and highly intuitive. Users should be able to scan, verify, and access information without unnecessary steps.',
    approach: [
      'Workflow analysis',
      'QR scanning experience',
      'Mobile interaction design',
      'Data capture flows',
      'Dashboard design',
      'Status and verification UI',
    ],
    highlights: [
      'Simple scanning workflow',
      'Clear information presentation',
      'Quick verification experience',
      'Operational dashboard',
      'Mobile-friendly interactions',
    ],
  },
  coptex: {
    projectTitle: 'CO-OPTEX — Digital Textile Experience',
    tags: ['UI/UX DESIGN', 'E-COMMERCE', 'TEXTILES'],
    overview:
      'CO-OPTEX is a digital experience designed around textile products and collections. The design focuses on presenting products, categories, collections, and brand information through a visually engaging interface.',
    client: 'CO-OPTEX',
    team: 'UI/UX Designer',
    services: ['UI Design', 'Visual Design', 'Product Presentation', 'Web Design', 'Prototyping'],
    category: 'Textile / E-Commerce',
    challenge:
      'Textile products depend heavily on visual presentation. The challenge was to create an interface where colours, patterns, collections, and product details receive strong visual emphasis while maintaining easy navigation.',
    approach: [
      'Visual hierarchy',
      'Product presentation',
      'Category structure',
      'Collection layouts',
      'Promotional sections',
      'Responsive design',
    ],
    highlights: [
      'Visual product presentation',
      'Collection-focused layouts',
      'Strong colour and imagery usage',
      'Clean product hierarchy',
      'Responsive web experience',
    ],
  },
  'oasys-pms': {
    projectTitle: 'OASYS PMS — Project Management System',
    tags: ['UI/UX DESIGN', 'PROJECT MANAGEMENT', 'ENTERPRISE'],
    overview:
      'OASYS PMS is a project management platform designed to help teams manage projects, tasks, progress, users, and related operational information from a centralized dashboard.',
    client: 'OASYS',
    team: 'UI/UX Designer & Front-End Developer',
    services: ['UX Design', 'Dashboard Design', 'Data Visualization', 'UI Design', 'Front-End Development'],
    category: 'Project Management / Enterprise',
    challenge:
      'Project management systems contain multiple layers of information including projects, tasks, priorities, users, deadlines, and progress. The challenge was creating a dashboard that gives users an immediate understanding of project status.',
    approach: [
      'Project workflow mapping',
      'Dashboard architecture',
      'Task management',
      'Status indicators',
      'Data tables',
      'Reports and analytics',
      'Responsive UI',
    ],
    highlights: [
      'Centralized project dashboard',
      'Task and status management',
      'Clear priority indicators',
      'Organized project information',
      'Data-driven dashboard design',
    ],
  },
  'battery-passport': {
    projectTitle: 'OCX Battery Passport — Battery Lifecycle Traceability',
    tags: ['UI/UX DESIGN', 'BATTERY TECHNOLOGY', 'TRACEABILITY'],
    overview:
      'OCX Battery Passport is a digital solution focused on battery lifecycle traceability. The platform provides structured information about batteries and their lifecycle through digital records and scanning-based interactions.',
    client: 'OCX',
    team: 'UI/UX Designer & Front-End Developer',
    services: ['UX Design', 'UI Design', 'QR Experience', 'Dashboard Design', 'Data Visualization'],
    category: 'Technology / Battery Lifecycle',
    challenge:
      'Battery lifecycle information can include technical specifications, status, ownership, history, and sustainability-related information. The challenge was presenting this complex information in a clear and understandable format.',
    approach: [
      'Lifecycle journey mapping',
      'QR-based information access',
      'Battery profile design',
      'Data visualization',
      'Status indicators',
      'Traceability interface',
    ],
    highlights: [
      'Digital battery profile',
      'Lifecycle information structure',
      'QR-based access',
      'Clear battery status',
      'Traceability-focused interface',
    ],
  },
  'graphic-design': {
    projectTitle: 'Graphic Design — Creative Visual Communication',
    tags: ['GRAPHIC DESIGN', 'BRANDING', 'VISUAL DESIGN'],
    overview:
      'A collection of graphic design projects created for different digital and visual communication requirements. The work includes promotional creatives, social media designs, banners, marketing visuals, and other branded communication materials.',
    team: 'Graphic Designer',
    services: ['Graphic Design', 'Branding', 'Social Media Design', 'Marketing Creatives', 'Visual Communication'],
    category: 'Graphic Design',
    challenge:
      'Every creative requires a different visual direction while still communicating the intended message clearly. The goal was to balance typography, imagery, colour, composition, and brand identity.',
    approach: [
      'Concept development',
      'Visual composition',
      'Typography',
      'Colour selection',
      'Image manipulation',
      'Brand consistency',
      'Marketing-focused layouts',
    ],
    highlights: [
      'Promotional creatives',
      'Social media designs',
      'Marketing banners',
      'Brand-focused graphics',
      'Creative visual compositions',
    ],
  },
  'figma-designs': {
    projectTitle: 'Figma Designs — UI/UX Design Collection',
    tags: ['UI/UX DESIGN', 'FIGMA', 'PROTOTYPING'],
    overview:
      'A curated collection of UI/UX design explorations created in Figma. The collection demonstrates interface design, wireframes, prototypes, dashboards, mobile applications, design systems, and visual experiments.',
    team: 'UI/UX Designer',
    services: ['Wireframing', 'UI Design', 'UX Design', 'Prototyping', 'Design Systems', 'Interaction Design'],
    category: 'UI/UX Design',
    challenge:
      'Each design exploration focuses on solving a different user-interface or user-experience problem. The goal was to create interfaces that are visually appealing while maintaining usability, consistency, and clear information hierarchy.',
    approach: [
      'User flow',
      'Wireframing',
      'UI exploration',
      'Component design',
      'Design systems',
      'Interactive prototyping',
      'Responsive layouts',
    ],
    highlights: [
      'Web application designs',
      'Mobile application interfaces',
      'Dashboard concepts',
      'Interactive prototypes',
      'Reusable UI components',
    ],
  },
};

export interface SkillItem {
  name: string;
  percent: number;
}

export const DESIGN_SKILLS: SkillItem[] = [
  { name: 'UI & UX Design', percent: 95 },
  { name: 'Figma', percent: 90 },
  { name: 'Adobe XD', percent: 85 },
  { name: 'Adobe Photoshop', percent: 85 },
  { name: 'Adobe Illustrator', percent: 85 },
  { name: 'Adobe Lightroom', percent: 70 },
  { name: 'Graphic Design', percent: 85 },
  { name: 'Design Systems', percent: 85 },
  { name: 'Wireframing & Prototyping', percent: 90 },
  { name: 'AI Design Tools', percent: 75 },
  { name: 'MS PowerPoint', percent: 85 },
];

export const IMPLEMENTATION_SKILLS: SkillItem[] = [
  { name: 'HTML', percent: 95 },
  { name: 'CSS', percent: 86 },
  { name: 'Bootstrap', percent: 86 },
  { name: 'Angular UI Development', percent: 60 },
  { name: 'React UI Development', percent: 50 },
  { name: 'JavaScript', percent: 45 },
  { name: 'TypeScript', percent: 40 },
  { name: 'Git / GitHub', percent: 70 },
  { name: 'Tailwind CSS', percent: 70 },
  { name: 'AI-Assisted Coding', percent: 60 },
  { name: 'Prompt Engineering', percent: 50 },
];



