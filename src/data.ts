import { ExperienceItem, EducationItem, SkillItem, ProjectItem } from './types';

export const PERSONAL_INFO = {
  name: "Rujal Tamrakar",
  title: "Freelance Product Designer | Developer",
  email: "rujal404@gmail.com",
  contact: "+977 9860906702",
  location: "Patan, Lalitpur, Nepal (Remote Friendly)",
  bioLong: "I’m Rujal Tamrakar a frontend developer, designer, and creative artist focused on building modern, responsive, and user-centered digital experiences. From sleek portfolio websites to interactive web applications, I transform ideas into clean, functional, and visually engaging solutions.",
  bioExtra: "My approach combines creativity with performance, emphasizing intuitive interfaces, scalable design systems, and smooth user experiences. I believe great design is not only about aesthetics but also about usability, speed, and meaningful interaction that leaves a lasting impression.",
  profileImage: "https://github.com/rujal404/portfolio-website/blob/master/img/me1.jpg?raw=true",
};

export const EXPERIENCE_DATA: ExperienceItem[] = [
  
  {
    id: "exp4",
    period: "Feb 2025 - Apr 2025",
    role: "E-commerce Specialist",
    company: "Green Computing Nepal (Giftmart Nepal)",
    bullets: [
      "Handled Giftmart website with web optimised image and contents",
      "Product listing, managing and updating",
      "Content Management System(CMS, Wordpress).",
      "Web content creation",
      "SEO (Search Engine Optimization).",
      "Photoshop"
    ]
  },
  {
    id: "exp3",
    period: "2024 — PRESENT",
    role: "Freelance",
    company: "Self",
    bullets: [
      "Developing front-end e-commerce platforms using HTML, CSS, JavaScript, React, and TypeScript with a focus on responsive design and smooth user experience.",
      "Content Management System(CMS).",
      "Web content creation",
      "SEO (Search Engine Optimization).",
      "Photoshop"
      
    ]
  },
  {
    id: "exp2",
    period: "Feb 2024 - June 2024",
    role: "Front-end Developer",
    company: "Longtail E-media",
    bullets: [
      "Design and developing the front-end of an e-commerce platform using HTML, CSS, JavaScript.",
      "Worked on various web application targeting customers, selling vendors, and admin user; design and build responsive web applications.",
      "Content Management System(CMS).",
      "Web content creation",
      "SEO (Search Engine Optimization).",
      "Photoshop"
    ]
  },
  {
    id: "exp2",
    period: "May 2023 - PRESENT",
    role: "Director of Operations",
    company: "Babu Metal Crafts",
    bullets: [
      "Design products",
      "Customer Service: Managing relationships and talking with customers",
      "Content Management System(CMS).",
      "Web content creation",
      "SEO (Search Engine Optimization).",
      "Photoshop"
    ]
  },
  {
    id: "exp1",
    period: "March 2021 — July 2023",
    role: "Owner",
    company: "Flite Tec",
    bullets: [
      "Customized and build drones according to customers request.",
      "Ship drones and other electronics stuffs form different fulfillment centers form around the globe according the customers request.",
      "FPV Drone pilot training. Teaching how to fly the drones and assembly trainings.",
      "Drone videography and photography."
    ]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "edu1",
    degree: "Bachelor In Computer Application",
    institution: "Mega National College (Tribhuvan University)",
    period: "2019 — 2024",
    highlight: "Specialized in Web Developemant, Cloud Computing and Computer Networking."
  },
  {
    id: "edu2",
    degree: "Computer Science",
    institution: "Mega National College +2 (NEB)",
    period: "2017 — 2019",
    highlight: "Graduated with First Division. Focus on Computer Science with basics of c/c++ and HTML."
  },
  {
    id: "edu3",
    degree: "Secondary School",
    institution: "lalitpur madhyamik vidyalaya",
    period: "... - 2017",
    highlight: ""
  }
];

export const SKILL_ITEMS: SkillItem[] = [
  { id: "sk1", name: "UI/UX Design", category: "design", iconName: "draw", proficiency: 90 },
  { id: "sk2", name: "Frontend Dev", category: "dev", iconName: "code", proficiency: 85 },
  { id: "sk2", name: "Backend Dev", category: "dev", iconName: "code", proficiency: 30 },
  { id: "sk3", name: "User Research", category: "research", iconName: "psychology", proficiency: 85 },
  { id: "sk4", name: "Design Systems", category: "systems", iconName: "layers", proficiency: 85 },
  { id: "sk5", name: "Web Content Creation", category: "web", iconName: "notebookpen", proficiency: 95 },
];

export const ALL_SKILLS_BADGES = [
  "Figma", "HTML", "CSS", "Bootstrap", "React.js", "TypeScript", "Tailwind CSS", "PHP", "MYSQL", "C++", "Git", "Webflow", "AWS", "Adobe Suite", "Typeform", "Prototyping", "SEO Strategy", "Web Content"
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "proj1",
    title: "Hotel Himalaya",
    subtitle: "Hotel Himalaya Website",
    category: "HOTEL",
    description: "Hotel Himalaya is an elegant, upscale hotel in Lalitpur set amidst landscaped gardens, offering comfortable accommodations with views of the Himalayas along with amenities like an outdoor pool, tennis courts, and fine dining.",
    image: "https://github.com/rujal404/portfolio-website/blob/master/img/himalaya.png?raw=true",
    details: {
      client: "Hotel Himalaya",
      role: "Development & Web Contents",
      timeline: "4 Months (2024)",
      challenge: "The Hotel Himalaya website needed a complete redesign to improve user engagement and streamline the booking process.",
      solution: "The redesign focused on creating a clean, modern interface with an intuitive booking system and responsive design.",
      impact: [
        "The redesigned website increased website visitors by 80%, boosted user engagement by 30%, and led to a 20% increase in bookings within the first month."
      ],
      tags: ["Figma", "php", "React", "Tailwind CSS", "MySQL", "Cloudflare"]
    }
  },
  {
    id: "proj2",
    title: "Hotel Country Villa",
    subtitle: "Hotel Country Villa Website",
    category: "HOTEL",
    description: "Hotel Country Villa is a peaceful hilltop resort in Nagarkot offering panoramic views of the Himalayas, comfortable modern rooms, an Asian restaurant, and a meditation center.",
    image: "https://github.com/rujal404/portfolio-website/blob/master/img/countryvilla.jpg?raw=true",
    details: {
      client: "Hotel Country Villa",
      role: "Development & Web Contents",
      timeline: "2 Months (2024)",
      challenge: "The Hotel Country Villa website needed a complete redesign to improve user engagement and streamline the booking process.",
      solution: "The redesign focused on creating a clean, modern interface with an intuitive booking system and responsive design.",
      impact: [
        "The redesigned website increased website visitors by 80%, boosted user engagement by 45%, and led to a 30% increase in bookings within the first month."
      ],
      tags: ["Figma", "HTML", "CSS", "JavaScript", "php, MySQL"]
    }
  },
  {
    id: "proj3",
    title: "Hotel Goodwill",
    subtitle: "Minimalist E-Commerce Platform",
    category: "HOTEL",
    description: "Hotel Goodwill is a traditional Newari-style hotel in Lalitpur offering casual rooms, an outdoor pool, an on-site restaurant and bar, and a peaceful courtyard setting near Patan Durbar Square.",
    image: "https://github.com/rujal404/portfolio-website/blob/master/img/hotelgoodwill.jpg?raw=true",
    details: {
      client: "Hotel Goodwill",
      role: "Developement & Web Contents",
      timeline: "2 Months (2024)",
      challenge: "",
      solution: "",
      impact: [
        ""
      ],
      tags: ["Figma", "HTML", "CSS", "JavaScript", "php, MySQL"]
    }
  },
  {
    id: "proj4",
    title: "Babu Raja Tamrakar",
    subtitle: "Minimalist Personal Portfolio",
    category: "Portfolio",
    description: "Babu Raja Tamrakar is a master metal artisan based in Patan, Nepal, renowned for handcrafting traditional Nepalese metalwork, cast bronze sculptures, and custom brass art objects.",
    image: "https://github.com/rujal404/portfolio-react/blob/master/src/img/baburajatamrakar.jpg?raw=true",
    details: {
      client: "Luxe Furnishings Inc.",
      role: "Art Director & UX Designer",
      timeline: "4 Months (2023)",
      challenge: "A premium designer boutique faced low digital conversion rates. Customers were reluctant to purchase high-ticket items online due to an uninspiring, flat grid shopping presentation that did not convey structural beauty and premium quality.",
      solution: "Restructured the storefront into an editorial gallery format with full-bleed lifestyle photography, modular product configurations, immersive 3D viewing frames, and a super smooth multi-step cart transition.",
      impact: [
        "E-commerce conversion rates elevated by 3.4%.",
        "Average basket value (AOV) grew by 45%.",
        "Perfect performance on mobile devices with smart media caching pipelines."
      ],
      tags: ["React", "Webflow", "Ecommerce", "Typography", "Art Direction"]
    }
  },
  {
    id: "proj5",
    title: "Babu Metal Crafts",
    subtitle: "Minimalist E-Commerce Platform",
    category: "E-COMMERCE",
    description: "A premium shopping experience for handicraft products, focusing on .",
    image: "https://github.com/rujal404/portfolio-website/blob/master/img/babu%20metal%20crafts_web.png?raw=true",
    details: {
      client: "Babu Metal Crafts",
      role: "Design, Development & Web Contents",
      timeline: "4 Months (2025)",
      challenge: "A premium designer boutique faced low digital conversion rates. Customers were reluctant to purchase high-ticket items online due to an uninspiring, flat grid shopping presentation that did not convey structural beauty and premium quality.",
      solution: "Restructured the storefront into an editorial gallery format with full-bleed lifestyle photography, modular product configurations, immersive 3D viewing frames, and a super smooth multi-step cart transition.",
      impact: [
        "E-commerce conversion rates elevated by 3.4%.",
        "Average basket value (AOV) grew by 45%.",
        "Perfect performance on mobile devices with smart media caching pipelines."
      ],
      tags: ["React", "Webflow", "Ecommerce", "Typography", "Art Direction"]
    }
  },
  {
    id: "proj6",
    title: "Jatra.CLO",
    subtitle: "Minimalist E-Commerce Platform",
    category: "E-COMMERCE",
    description: "A premium shopping experience for architectural furniture, focusing on high-conversion editorial layout.",
    image: "https://github.com/rujal404/portfolio-react/blob/master/src/img/jatraclo.jpg?raw=true",
    details: {
      client: "Luxe Furnishings Inc.",
      role: "Art Director & UX Designer",
      timeline: "4 Months (2023)",
      challenge: "A premium designer boutique faced low digital conversion rates. Customers were reluctant to purchase high-ticket items online due to an uninspiring, flat grid shopping presentation that did not convey structural beauty and premium quality.",
      solution: "Restructured the storefront into an editorial gallery format with full-bleed lifestyle photography, modular product configurations, immersive 3D viewing frames, and a super smooth multi-step cart transition.",
      impact: [
        "E-commerce conversion rates elevated by 3.4%.",
        "Average basket value (AOV) grew by 45%.",
        "Perfect performance on mobile devices with smart media caching pipelines."
      ],
      tags: ["React", "Webflow", "Ecommerce", "Typography", "Art Direction"]
    }
  },
  {
    id: "proj7",
    title: "Dhaa Baja",
    subtitle: "Minimalist E-Commerce Platform",
    category: "TRADITIONAL MUSIC",
    description: "A premium shopping experience for architectural furniture, focusing on high-conversion editorial layout.",
    image: "https://github.com/rujal404/portfolio-react/blob/master/src/img/dhaabaja.jpg?raw=true",
    details: {
      client: "Chakrabarti Dhaa Baja Khala",
      role: "UX Design, Development & Web Contents",
      timeline: "4 Months (2023)",
      challenge: "A premium designer boutique faced low digital conversion rates. Customers were reluctant to purchase high-ticket items online due to an uninspiring, flat grid shopping presentation that did not convey structural beauty and premium quality.",
      solution: "Restructured the storefront into an editorial gallery format with full-bleed lifestyle photography, modular product configurations, immersive 3D viewing frames, and a super smooth multi-step cart transition.",
      impact: [
        "E-commerce conversion rates elevated by 3.4%.",
        "Average basket value (AOV) grew by 45%.",
        "Perfect performance on mobile devices with smart media caching pipelines."
      ],
      tags: ["React", "Webflow", "Ecommerce", "Typography", "Art Direction"]
    }
  },
  {
    id: "proj8",
    title: "Vivanta Interiors",
    subtitle: "Minimalist E-Commerce Platform",
    category: "Interior Design Studio",
    description: "Vivanta Interiors Design Studio creates stylish, functional, and personalized spaces through thoughtful design, quality craftsmanship, and modern aesthetics",
    image: "https://dhaabajaform.infy.click/img/vivanta.jpg",
    details: {
      client: "Vivanta Interiors Design Studio",
      role: "UX Design, Development & Web Contents",
      timeline: "4 Months (2026)",
      challenge: "A premium interior design studio faced low digital engagement and conversion rates, as potential clients were hesitant to explore its projects through an uninspiring, flat grid layout that failed to showcase the spaces’ architectural beauty, refined details, and premium craftsmanship.",
      solution: "Restructured the studio’s portfolio into an editorial gallery experience with full-bleed interior photography, modular project layouts, immersive 3D visualizations, and seamless transitions that create a refined, engaging journey from inspiration to inquiry.",
      impact: [
        "Project inquiries increased by 34%.",
        "Average project value grew by 45%.",
        "Mobile performance improved with optimized, fast-loading visual content."
      ],
      tags: ["React", "Webflow", "Portfolio", "Typography", "Art Direction"]
    }
  }
];
