import { ExperienceItem, EducationItem, SkillItem, ProjectItem } from './types';

export const PERSONAL_INFO = {
  name: "Rujal Tamrakar",
  title: "Freelance Product Designer | Developer",
  email: "rujal404@gmail.com",
  contact: "+977 9860906702",
  location: "Patan, Lalitpur, Nepal (Remote Friendly)",
  bioLong: "I’m Rujal Tamrakar a frontend developer, designer, and creative artist focused on building modern, responsive, and user-centered digital experiences. From sleek portfolio websites to interactive web applications, I transform ideas into clean, functional, and visually engaging solutions.",
  bioExtra: "My approach combines creativity with performance, emphasizing intuitive interfaces, scalable design systems, and smooth user experiences. I believe great design is not only about aesthetics but also about usability, speed, and meaningful interaction that leaves a lasting impression.",
  profileImage: "https://rujaltamrakar.com.np/img/me1.jpg",
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
  { id: "sk2", name: "Backend Dev", category: "dev", iconName: "code", proficiency: 50 },
  { id: "sk3", name: "User Research", category: "research", iconName: "psychology", proficiency: 85 },
  { id: "sk4", name: "Design Systems", category: "systems", iconName: "layers", proficiency: 85 },
  { id: "sk5", name: "Web Content Creation", category: "web", iconName: "notebookpen", proficiency: 95 },
];

export const ALL_SKILLS_BADGES = [
  "Figma", "HTML", "CSS", "Bootstrap", "React.js", "TypeScript", "Tailwind CSS", "PHP", "MYSQL", "Git", "Webflow", "AWS", "Adobe Suite", "Typeform", "Prototyping", "SEO Strategy", "Web Content"
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "proj1",
    title: "Hotel Himalaya",
    subtitle: "Hotel Himalaya Website",
    category: "HOTEL",
    description: "Redefining wealth management through intuitive data visualization and strategic UX architecture.",
    image: "https://rujaltamrakar.com.np/img/himalaya.png",
    details: {
      client: "Hotel Himalaya",
      role: "Lead UX Architect & UI Designer",
      timeline: "6 Months (2024)",
      challenge: "Wealth managers faced extreme cognitive load when parsing real-time market indicators and asset allocations on legacy tables. The interface suffered from visual noise, poor information density, and low-performance charts.",
      solution: "Designed a minimalist, highly responsive dashboard with dynamic workspace layouts, customizable data visualization configurations, and a robust design system optimized for high-intensity cognitive work.",
      impact: [
        "Reduced average manager task-completion time by 32%.",
        "Increased positive user feedback scores from 4.2 to 9.1 out of 10.",
        "Created custom D3 visual widgets scaling efficiently to over 20,000 real-time data ticks per second."
      ],
      tags: ["Figma", "React.js", "D3.js", "Tailwind CSS", "Fintech"]
    }
  },
  {
    id: "proj2",
    title: "Hotel Country Villa",
    subtitle: "HealthTech Patient Platform",
    category: "HOTEL",
    description: "An end-to-end patient care system designed to streamline clinical workflows and improve outcomes.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCaxvrdAoHPfLGG560h2dOsGuady8_8uxQ8zXNDMnQon0bkYvLbLipniD1zFaydMngBBvTxh0gGuKCfYT3nw1q1WOD8hGh-kqwYiUPuJJo-tKuw1X9LZCoZipqhUIbtmFUi2Cv3F5jqdrCWtnlgvGHFgSWHwLvAfgJKG4zLXfwsBYpJl-ZmwiuaPu4wBX3RXI3QeXaKm-zE4PT9BA8DXkang1CYPsA_Qr41tlFOS1iiBmLejfli8zBpd2br3QXc5mB3D1qK8bmsJkE",
    details: {
      client: "Pulse Medical Holdings",
      role: "Lead Mobile Product Designer",
      timeline: "8 Months (2022)",
      challenge: "Patients struggled to coordinate appointments, communicate with primary clinicians, and monitor medical metrics due to fragmented, confusing hospital applications. Medical errors frequently arose from misunderstood outpatient guidelines.",
      solution: "Spearheaded design for a central Patient Care Hub with friendly cognitive visuals, clear text, medical history visualizers, secure messaging tunnels, and streamlined booking micro-flows.",
      impact: [
        "42% drop in clinic call-center queues for appointment scheduling.",
        "Increased outpatient protocol compliance rate by 28% locally.",
        "Fully HIPAA/ADA WCAG 2.1 AAA accessible visual system."
      ],
      tags: ["Figma", "iOS & Android", "Design Systems", "Prototyping", "User Research"]
    }
  },
  {
    id: "proj3",
    title: "Hotel Goodwill",
    subtitle: "Minimalist E-Commerce Platform",
    category: "COMMERCE",
    description: "A premium shopping experience for architectural furniture, focusing on high-conversion editorial layout.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJ38WYOKYaplOc_QNpPdKSvDCV3GPjUQuIaLfCFDZ1-Vw8nIvYpQ0bRFaopfM0yw2nPaiQQE8Ziw-7fY05WaiJuEPfyJlgMyoIWbHZiy351foitKOA-97fm-ZOkZtiT3nbFZR6KQ4zISoHwHE3GyxWi8_FbNfSOu792njhXK1AN14DhNe5vqXCx0XE0o93D75K2QY8f-RSlx_6Nj9QfSoilQq2GBFiuM5nbkilVDxhm2EOGVk8-t4lRhM8FLXKxsnHiDPtv2NmTdg",
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
    id: "proj4",
    title: "Babu Raja Tamrakar",
    subtitle: "Minimalist E-Commerce Platform",
    category: "COMMERCE",
    description: "A premium shopping experience for architectural furniture, focusing on high-conversion editorial layout.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJ38WYOKYaplOc_QNpPdKSvDCV3GPjUQuIaLfCFDZ1-Vw8nIvYpQ0bRFaopfM0yw2nPaiQQE8Ziw-7fY05WaiJuEPfyJlgMyoIWbHZiy351foitKOA-97fm-ZOkZtiT3nbFZR6KQ4zISoHwHE3GyxWi8_FbNfSOu792njhXK1AN14DhNe5vqXCx0XE0o93D75K2QY8f-RSlx_6Nj9QfSoilQq2GBFiuM5nbkilVDxhm2EOGVk8-t4lRhM8FLXKxsnHiDPtv2NmTdg",
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
    category: "COMMERCE",
    description: "A premium shopping experience for architectural furniture, focusing on high-conversion editorial layout.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJ38WYOKYaplOc_QNpPdKSvDCV3GPjUQuIaLfCFDZ1-Vw8nIvYpQ0bRFaopfM0yw2nPaiQQE8Ziw-7fY05WaiJuEPfyJlgMyoIWbHZiy351foitKOA-97fm-ZOkZtiT3nbFZR6KQ4zISoHwHE3GyxWi8_FbNfSOu792njhXK1AN14DhNe5vqXCx0XE0o93D75K2QY8f-RSlx_6Nj9QfSoilQq2GBFiuM5nbkilVDxhm2EOGVk8-t4lRhM8FLXKxsnHiDPtv2NmTdg",
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
    id: "proj6",
    title: "Jatra.CLO",
    subtitle: "Minimalist E-Commerce Platform",
    category: "COMMERCE",
    description: "A premium shopping experience for architectural furniture, focusing on high-conversion editorial layout.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJ38WYOKYaplOc_QNpPdKSvDCV3GPjUQuIaLfCFDZ1-Vw8nIvYpQ0bRFaopfM0yw2nPaiQQE8Ziw-7fY05WaiJuEPfyJlgMyoIWbHZiy351foitKOA-97fm-ZOkZtiT3nbFZR6KQ4zISoHwHE3GyxWi8_FbNfSOu792njhXK1AN14DhNe5vqXCx0XE0o93D75K2QY8f-RSlx_6Nj9QfSoilQq2GBFiuM5nbkilVDxhm2EOGVk8-t4lRhM8FLXKxsnHiDPtv2NmTdg",
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
    id: "proj6",
    title: "Dhaa Baja",
    subtitle: "Minimalist E-Commerce Platform",
    category: "COMMERCE",
    description: "A premium shopping experience for architectural furniture, focusing on high-conversion editorial layout.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJ38WYOKYaplOc_QNpPdKSvDCV3GPjUQuIaLfCFDZ1-Vw8nIvYpQ0bRFaopfM0yw2nPaiQQE8Ziw-7fY05WaiJuEPfyJlgMyoIWbHZiy351foitKOA-97fm-ZOkZtiT3nbFZR6KQ4zISoHwHE3GyxWi8_FbNfSOu792njhXK1AN14DhNe5vqXCx0XE0o93D75K2QY8f-RSlx_6Nj9QfSoilQq2GBFiuM5nbkilVDxhm2EOGVk8-t4lRhM8FLXKxsnHiDPtv2NmTdg",
    details: {
      client: "Chakrabarti Dhaa Baja Khala",
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
  }
];
