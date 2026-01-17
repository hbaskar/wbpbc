import { Injectable } from '@angular/core';

export interface NavigationItem {
  label: string;
  route?: string;
  children?: NavigationItem[];
}

export interface FooterLink {
  label: string;
  route: string;
}

export interface CompanyInfo {
  tagline: string;
  address: string;
  email: string;
  phone1: string;
  phone2: string;
  socialMedia: {
    facebook: string;
    instagram: string;
  };
}

export interface HeroSection {
  title: string;
  description: string;
  videoPreview?: string;
}

export interface Service {
  title: string;
  description: string;
  image?: string;
}

export interface WhyChooseUs {
  title: string;
  description: string;
  icon?: string;
}

export interface Review {
  message: string;
  personName: string;
  personDesignation: string;
  companyLogo?: string;
  personPhoto?: string;
}

export interface AboutUsSection {
  title: string;
  description: string;
  image?: string;
}

export interface Principle {
  title: string;
  description: string;
  icon?: string;
}

export interface Project {
  title: string;
  image: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  featuredImage?: string;
  content: string;
  date?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqBlogLink {
  title: string;
  slug: string;
  featuredImage?: string;
  date?: string;
}

export interface ContactFormField {
  name: string;
  label: string;
  type: string;
  required: boolean;
  options?: string[];
}

export interface ContactFormData {
  title: string;
  subtitle: string;
  fields: ContactFormField[];
}

export interface ResidentialPageSection {
  title?: string;
  subtitle?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  buttonText?: string;
  buttonLink?: string;
  items?: { title: string; description: string; image?: string }[];
  subSections?: ResidentialPageSection[];
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export interface TrustBadge {
  rating?: string;
  title?: string;
  verified?: string;
  images?: string[];
}

export interface ResidentialPageContent {
  header: {
    title: string;
    subtitle?: string;
  };
  hero?: ResidentialPageSection;
  sections?: ResidentialPageSection[];
  faqs?: FaqItem[];
  gallery?: string[];
  cta?: {
    title: string;
    buttonText: string;
    buttonLink: string;
  };
  processSteps?: ProcessStep[];
  trustBadges?: TrustBadge;
}

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  private readonly navigationItems: NavigationItem[] = [
    {
      label: 'Home',
      route: '/',
    },
    {
      label: 'Residential',
      route: '/residential',
      children: [
        {
          label: 'Pickleball Courts Construction',
          route: '/residential/pickleball-courts-construction',
        },
        {
          label: 'Multi Sport Construction',
          route: '/residential/multi-sport-construction',
        },
        {
          label: 'Basketball Courts',
          route: '/residential/basketball-courts',
        },
        {
          label: 'Artificial Turf and Putting Greens',
          route: '/residential/artificial-turf-putting-greens',
        },
        {
          label: 'Court Fencing',
          route: '/residential/court-fencing',
        },
        {
          label: 'Hoops and Nets',
          route: '/residential/hoops-nets',
        },
        {
          label: 'Custom Courts',
          route: '/residential/custom-courts',
        },
        {
          label: 'Pickleball Court Resurfacing',
          route: '/residential/pickleball-court-resurfacing',
        },
      ],
    },
    {
      label: 'Commercial',
      route: '/commercial',
      children: [
        {
          label: 'Indoor Pickleball Court',
          route: '/commercial/indoor-pickleball-court',
        },
        {
          label: 'Tennis Court Resurfacing',
          route: '/commercial/tennis-court-resurfacing',
        },
        {
          label: 'Court Fencing',
          route: '/commercial/court-fencing',
        },
        {
          label: 'Court Resurfacing',
          route: '/commercial/court-resurfacing',
        },
        {
          label: 'Adding Pickleball Lines to Tennis Court',
          route: '/commercial/adding-pickleball-lines',
        },
        {
          label: 'Tennis Court Construction',
          route: '/commercial/tennis-court-construction',
        },
      ],
    },
    {
      label: 'Court Designer',
      route: '/court-designer',
    },
    {
      label: 'About Us',
      route: '/about-us',
    },
    {
      label: 'Portfolio',
      route: '/portfolio',
    },
    {
      label: 'Blog',
      route: '/blog',
    },
    {
      label: 'FAQ',
      route: '/faq',
    },
    {
      label: 'Contact Us',
      route: '/contact-us',
    },
  ];

  private readonly companyInfo: CompanyInfo = {
    tagline: "Recognized as Texas's #1 Court Builder with 800+ satisfied homeowners.",
    address: '4444 Westheimer rd Houston, Tx 77027',
    email: 'Webuildpickleballcourts@gmail.com',
    phone1: '832.922.7597',
    phone2: '4095049910',
    socialMedia: {
      facebook: '#',
      instagram: '#',
    },
  };

  private readonly footerResidentialLinks: FooterLink[] = [
    {
      label: 'Pickleball',
      route: '/residential/pickleball-courts-construction',
    },
    {
      label: 'Multi-Sport',
      route: '/residential/multi-sport-construction',
    },
    {
      label: 'Artificial Turf & Putting Greens',
      route: '/residential/artificial-turf-putting-greens',
    },
    {
      label: 'Court Fencing',
      route: '/residential/court-fencing',
    },
    {
      label: 'Hoops and Nets',
      route: '/residential/hoops-nets',
    },
    {
      label: 'Custom Courts',
      route: '/residential/custom-courts',
    },
    {
      label: 'Tennis Court Construction',
      route: '/residential/pickleball-court-resurfacing',
    },
  ];

  private readonly footerCommercialLinks: FooterLink[] = [
    {
      label: 'Pickleball Courts',
      route: '/commercial/indoor-pickleball-court',
    },
    {
      label: 'Court Fencing',
      route: '/commercial/court-fencing',
    },
    {
      label: 'Resurfacing',
      route: '/commercial/court-resurfacing',
    },
    {
      label: 'Adding Pickleball Lines',
      route: '/commercial/adding-pickleball-lines',
    },
    {
      label: 'Tennis Court Resurfacing',
      route: '/commercial/tennis-court-resurfacing',
    },
    {
      label: 'Pickleball Court Resurfacing',
      route: '/commercial/court-resurfacing',
    },
  ];

  private readonly footerCompanyLinks: FooterLink[] = [
    {
      label: 'Home',
      route: '/',
    },
    {
      label: 'About',
      route: '/about-us',
    },
    {
      label: 'Portfolio',
      route: '/portfolio',
    },
    {
      label: 'Blog',
      route: '/blog',
    },
    {
      label: 'Faq',
      route: '/faq',
    },
    {
      label: 'Contact',
      route: '/contact-us',
    },
  ];

  getNavigationItems(): NavigationItem[] {
    return this.navigationItems;
  }

  getCompanyInfo(): CompanyInfo {
    return this.companyInfo;
  }

  getFooterResidentialLinks(): FooterLink[] {
    return this.footerResidentialLinks;
  }

  getFooterCommercialLinks(): FooterLink[] {
    return this.footerCommercialLinks;
  }

  getFooterCompanyLinks(): FooterLink[] {
    return this.footerCompanyLinks;
  }

  getCurrentYear(): number {
    return new Date().getFullYear();
  }

  // Home Page Data
  private readonly heroSection: HeroSection = {
    title: 'Professional Pickleball & Tennis Courts construction for residential & commercial',
    description:
      'From private backyards to professional clubs, we specialize in custom tennis court builds, resurfacing, and full-service installations.',
    videoPreview:
      'https://webuildpickleballcourts.com/wp-content/uploads/2025/09/Lorena-Video_x264.mp4',
  };

  private readonly clientsList: string[] = [
    'clients/Client1.png',
    'clients/Client2.png',
    'clients/Client3.png',
    'clients/Client4.png',
    'clients/Client5.png',
    'clients/Client6.png',
    'clients/Client7.png',
  ];

  private readonly welcomeMessage = {
    title: 'Welcome to "We Build Pickleball Courts"',
    subtitle: 'YOUR DREAM COURT, OUR EXPERTISE!',
    description:
      "Whether you need a new court surface or want to revitalize an existing one, we've got you covered. Specializing in Pickleball, Basketball, and Tennis Court Surfaces, along with Multi-Use Courts, we're experts in every aspect. As PPA certified paint installers, we've received top-tier training to deliver the best surfacing products and techniques. Our combination of superior products, skilled installation, repairs, and custom designs ensures durable and visually pleasing court surfaces, with coatings lasting 4-6 years.",
    videoLink: 'https://webuildpickleballcourts.com/wp-content/uploads/2025/11/WhatsApp-Video-2025-11-06-at-10.33.27-AM.mp4',
  };

  private readonly services: Service[] = [
    {
      title: 'Pickleball Courts',
      description:
        'Elevate your pickleball game to a new level with our meticulously crafted courts. Precision surfaces and professional markings for the ultimate playing experience.',
      image: 'our-services/pickleball-courts.webp',
    },
    {
      title: 'Basketball Courts',
      description:
        'Experience the thrill of hoops on courts designed for excellence. From slam dunks to three-pointers, our basketball courts are built for action.',
      image: 'our-services/basketball-court.webp',
    },
    {
      title: 'Putting Greens & Artificial Turf',
      description:
        'Embrace hassle-free greenery with our top-grade artificial turf solutions. Enjoy lush surroundings without the upkeep.',
      image: 'our-services/artificial-truf.jpeg',
    },
    {
      title: 'Chain Link Fences',
      description:
        'Combining safety and aesthetics, our chain link fences define boundaries while maintaining an open feel. Security meets style in every link.',
      image: 'our-services/chain-link-fences.webp',
    },
  ];

  private readonly whyChooseUsItems: WhyChooseUs[] = [
    {
      title: 'Expertise That Matters',
      description:
        'Our seasoned professionals bring years of experience to every project, ensuring excellence from planning to execution.',
      icon: 'why-choose-us/expertise.svg',
    },
    {
      title: 'Customization Unleashed',
      description:
        "Your court, your way. We tailor designs to match your vision, resulting in a court that's uniquely yours.",
      icon: 'why-choose-us/customisation.svg',
    },
    {
      title: 'Quality Redefined',
      description:
        'Only the finest materials grace our courts. We build for longevity, ensuring your court remains a reliable play haven.',
      icon: 'why-choose-us/quality.svg',
    },
    {
      title: 'Passion for Play',
      description:
        "We're not just builders; we're sports enthusiasts. The love for the game drives us to create courts that enhance your play.",
      icon: 'why-choose-us/passion.svg',
    },
  ];

  private readonly reviews: Review[] = [
    {
      message:
        'Not enough space in my backyard but Webuildpickleballcourts helped with landscaping and got the job done in 3 days. They did a great job! I would highly recommend them!',
      personName: 'Cynthia Choi',
      personDesignation: '',
      personPhoto:
        'https://webuildpickleballcourts.com/wp-content/uploads/2025/09/327A3B41-8CAA-4D56-9890-99FCE91FF9DA-300x300-1.jpeg',
    },
    {
      message:
        'Professional and detailed. Our chain link fence from We Build Pickle Ball Courts exceeded expectations. Highly recommended',
      personName: 'Eduardo Meadows',
      personDesignation: '',
      personPhoto:
        'https://webuildpickleballcourts.com/wp-content/uploads/2025/09/testimonial-N8572T7-1.jpg',
    },
    {
      message:
        'Wow! I did not think you two would be able to come thru by my deadline but you two made it happen. Thank you Kazi and Rajeev for helping put together Elite Pickleball Club by our soft opening.',
      personName: 'Shelton Jean Baptiste',
      personDesignation: 'Owner (Elite Pickleball Club)',
      personPhoto:
        'https://webuildpickleballcourts.com/wp-content/uploads/2025/09/IMG_1032.png',
    },
    {
      message:
        'Great builder, great price, very professional I would recommend.',
      personName: 'John NGO',
      personDesignation: 'Owner (Houston Medical group)',
      personPhoto:
        'https://webuildpickleballcourts.com/wp-content/uploads/2025/09/IMG_1031.jpg',
    },
  ];

  private readonly galleryImages: string[] = [
    'gallery/WhatsApp-Image-2025-11-04-at-2.31.55-PM-e1762254796611.jpeg',
    'gallery/WhatsApp-Image-2025-11-04-at-2.31.55-PM-1-e1762254775244.jpeg',
    'gallery/WhatsApp-Image-2025-11-04-at-2.31.54-PM.jpeg',
    'gallery/WhatsApp-Image-2025-11-04-at-2.31.54-PM-1-e1762254758579.jpeg',
    'gallery/WhatsApp-Image-2025-11-04-at-2.31.53-PM-e1762254744676.jpeg',
    'gallery/WhatsApp-Image-2025-11-04-at-2.31.53-PM-2.jpeg',
    'gallery/WhatsApp-Image-2025-11-04-at-2.31.53-PM-1-e1762254721497.jpeg',
    'gallery/WhatsApp-Image-2025-11-04-at-2.31.52-PM.jpeg',
    'gallery/WhatsApp-Image-2025-09-30-at-6.23.42-PM.webp',
    'gallery/d5b1d514-8772-4369-8a2a-f3e7f4d209b9.jpg',
    'gallery/imgi_21_540066907_17948747679009322_6864728825337390653_n-1.webp',
    'gallery/imgi_38_491896506_17934732156009322_6539299713507800939_n-1.webp',
    'gallery/WhatsApp-Image-2025-09-30-at-6.21.57-PM-2.webp',
    'gallery/WhatsApp-Image-2025-09-30-at-6.21.50-PM-3.webp',
    'gallery/WhatsApp-Image-2025-09-30-at-6.21.48-PM-e1759310317401.webp',
    'gallery/IMG_7075-scaled-2.jpg',
    'gallery/dji_0102-scaled-1.jpeg',
    'gallery/imagejpeg_0-1.jpeg',
    'gallery/1a65cdb3-0558-4372-832a-a683d8c64356-1.jpeg',
    'gallery/FullSizeRender-scaled-1-1.jpeg',
  ];

  private readonly aboutUsHeader: AboutUsSection = {
    title: 'About Us',
    description:
      'At We build pickleball Courts, we specialize in creating exceptional sport courts tailored to your vision. With a commitment to quality and innovation, we bring your dream courts and recreational spaces to life.',
  };

  private readonly aboutUsMain: AboutUsSection = {
    title: "Texas' Leading Sport Court Construction Experts",
    description:
      "At We build pickleball Courts, we specialize in designing, constructing, and resurfacing high-performance sports courts across Texas. With expertise in pickleball courts, tennis courts, and basketball court installations, we provide tailored solutions that meet the needs of homeowners, communities, businesses, and athletic facilities.\n\nWith years of experience and a commitment to excellence, we have established ourselves as a trusted partner for residential and commercial sports court construction. From private backyard courts to large-scale athletic complexes, our team ensures every project is built for durability, performance, and long-term value.",
    image: 'about-us/WhatsApp-Image-2025-11-05-at-9.58.56-AM.jpeg',
  };

  private readonly aboutUsServiceArea: AboutUsSection = {
    title: 'Serving All of Texas – Based in Houston, Focused on Quality',
    description:
      'Pickleball, Tennis, and Basketball Court Construction Across All of Texas\n\nAt We build pickleball Courts, we specialize in residential and commercial pickleball court construction, tennis court construction, and basketball court installation throughout the entire state of Texas. Our headquarters is located in Houston, and we proudly serve every major city and region across Texas, including Houston, Dallas, Austin, San Antonio, Fort Worth, El Paso, Plano, and Corpus Christi.\n\nWe are the trusted local court builders for homeowners, HOAs, private communities, and commercial properties. In the Greater Houston area, we serve all key neighborhoods and suburbs, including:\n\nSugar Land, Cypress, Katy, Tomball, Pearland, The Woodlands, Spring, Richmond, Conroe, Missouri City, Humble, Kingwood, League City, Baytown, Friendswood, Clear Lake, and Pasadena.',
    image: 'about-us/WhatsApp-Image-2025-11-05-at-9.58.57-AM.jpeg',
  };

  private readonly aboutUsFaqs: Array<{ question: string; answer: string }> = [
    {
      question: 'What makes we build pickleball Courts different?',
      answer:
        'We have a full in-house construction and design team, ensuring top-quality craftsmanship, seamless project management, and a hassle-free experience from start to finish.\n\nWe also provide free court consultations for every quote to ensure that the final price is the final price.',
    },
    {
      question: 'Who do you build for?',
      answer:
        "At We Build Pickleball Courts, we specialize in creating high-quality pickleball courts for homeowners, sports clubs, and recreational facilities. Whether you're looking for a backyard court or a full-scale sports facility, we bring expert design and construction to every project, ensuring it meets your needs and enhances your space.\n\nWe also offer services for existing facilities and homeowners, including tennis court resurfacing and adding pickleball court lines to existing courts. No matter the project size, our team is here to provide professional craftsmanship and personalized service.",
    },
    {
      question: 'What services do you offer?',
      answer:
        'At We Build Pickleball Courts, we offer a variety of custom services to complete your court and elevate your playing experience. From personalized logos to fencing, lighting, turf installation, and more, we provide everything you need to make your court functional, stylish, and perfect for play at any time of day.',
    },
  ];

  private readonly aboutUsStats = {
    people: {
      title: 'PEOPLE',
      subtitle: 'From homeowners to business owners',
      value: 100,
    },
    courts: {
      title: 'COURTS',
      subtitle: 'Built and hundreds more resurfaced',
      value: 300,
    },
  };

  private readonly aboutUsWhoWeAre: AboutUsSection = {
    title: 'Who We Are?',
    description:
      "At We build pickleball Courts, our journey started with a passion for tennis and pickleball. As avid players, we constantly encountered low-quality courts that didn't meet the standards of durability, performance, or safety. Instead of settling for less, we decided to take action—creating high-quality sports courts that players deserve.",
  };

  private readonly aboutUsMission: AboutUsSection = {
    title: 'Our Mission',
    description:
      'Our goal is simple: to create premium sports courts that inspire people of all ages to play, exercise, and connect. We are committed to quality craftsmanship, innovative designs, and customer satisfaction in every project we undertake.',
  };

  private readonly aboutUsPrinciples: Principle[] = [
    {
      title: 'Teamwork',
      description: 'We handle your project from A-Z from start to finish',
      icon: 'about-us/svg/teamwork.svg',
    },
    {
      title: 'Value',
      description: 'Cost effective expertise for uncompromising quality and facility design',
      icon: 'about-us/svg/value.svg',
    },
    {
      title: 'Professional',
      description: 'Service above and beyond the scope of work',
      icon: 'about-us/svg/professional.svg',
    },
    {
      title: 'Client Focus',
      description: '"Whatever it Takes" attitude and mindset to meet goals of our client',
      icon: 'about-us/svg/client-focus.svg',
    },
  ];

  private readonly aboutUsProjects: Project[] = [
    {
      title: 'Elite Pickleball',
      image: 'about-us/28ef696e-b1f1-4aeb-8c60-06f5a5a54e3d.webp',
    },
    {
      title: 'pickle mania downtown',
      image: 'about-us/imgi_53_540678378_17948747688009322_4244788793269151873_n.webp',
    },
    {
      title: 'Lifetime Sugarland',
      image: 'about-us/14720766-f9aa-413e-909e-835298f4d174.webp',
    },
    {
      title: 'Picklepoint Katy',
      image: 'about-us/pickball-1.webp',
    },
  ];

  private readonly blogHeader = {
    title: 'Blog',
    description:
      'Stay informed and inspired with the latest insights, tips, and trends in athletic facility design and construction. Explore our blog for expert advice and updates from We build pickleball courts.',
  };

  private readonly blogPosts: BlogPost[] = [
    {
      slug: 'the-benefits-of-professional-pickleball-court-installation',
      title: 'The Benefits of Professional Pickleball Court Installation',
      excerpt:
        "Building a professional pickleball court is about more than just the surface—it's about creating a long-lasting, high-quality space for your enjoyment.",
      featuredImage: 'blog-images/The Benefits of Professional Pickleball Court Installation.webp',
      content: `<p>Building a <strong>professional pickleball court</strong> is about more than just the surface—it's about creating a long-lasting, high-quality space for your enjoyment.</p>

<h2><strong>1. Expertise in Design and Construction</strong></h2>

<p>With years of experience, <strong>We Build Pickleball Courts</strong> ensures your court is expertly designed and constructed for optimal play and durability.</p>

<h2><strong>2. Durable Materials</strong></h2>

<p>We use top-tier materials that stand up to wear and tear, ensuring your court, fencing, and lighting remain in great condition for years.</p>

<h2><strong>3. Customized Features</strong></h2>

<p>From <strong>LED lighting</strong> to <strong>custom markings</strong> and <strong>specialized fencing</strong>, we offer a variety of features to personalize your court and enhance your playing experience.</p>

<h2><strong>4. Time and Cost Efficiency</strong></h2>

<p>While DIY might seem cost-effective, professional installation from <strong>We Build Pickleball Courts</strong> saves time and ensures a high-quality finish, providing you with a <strong>turnkey solution</strong>.</p>`,
    },
    {
      slug: 'how-to-choose-the-right-size-for-your-pickleball-court',
      title: 'How to Choose the Right Size for Your Pickleball Court',
      excerpt:
        'When planning to build a pickleball court in your backyard, one of the most important factors to consider is the size of the court. The right dimensions ensure a comfortable playing experience while fitting seamlessly into your space.',
      featuredImage: 'blog-images/How to Choose the Right Size for Your Pickleball Court.webp',
      content: `<p>When planning to build a <strong>pickleball court</strong> in your backyard, one of the most important factors to consider is the size of the court. The right dimensions ensure a comfortable playing experience while fitting seamlessly into your space.</p>

<h2><strong>Standard Court Dimensions</strong></h2>

<p>A regulation-size pickleball court measures <strong>20 feet wide by 44 feet long</strong>, which works for both <strong>singles</strong> and <strong>doubles</strong> play. If your backyard space is limited, this size is typically a great option.</p>

<h2><strong>Expanding the Space</strong></h2>

<p>If you have additional space and want to create a more spacious environment, we recommend expanding to <strong>30 feet by 60 feet</strong>. This gives you extra buffer zones around the court, which are ideal for movement and safety during high-intensity play.</p>

<h2><strong>Factors to Consider</strong></h2>

<p>Consider your available yard space, how many players you expect, and your long-term goals for the court. At <strong>We Build Pickleball Courts</strong>, we'll guide you through every decision to ensure your court is functional and enjoyable.</p>`,
    },
    {
      slug: 'why-pickleball-courts-are-the-best-addition-to-your-backyard',
      title: 'Why Pickleball Courts Are the Best Addition to Your Backyard',
      excerpt:
        'Are you looking to enhance your outdoor space? Building a pickleball court in your backyard is a great way to bring family and friends together, enjoy some exercise, and add a fun element to your home.',
      featuredImage: 'blog-images/Why Pickleball Courts Are the Best Addition to Your Backyard.webp',
      content: `<p>Are you looking to enhance your outdoor space? Building a <strong>pickleball court</strong> in your backyard is a great way to bring family and friends together, enjoy some exercise, and add a fun element to your home. Whether you're a pickleball enthusiast or simply enjoy hosting gatherings, a backyard court offers countless benefits.</p>

<h2><strong>1. Increased Property Value</strong></h2>

<p>Adding a pickleball court can increase the value of your home, making it more attractive to potential buyers. It's a unique feature that adds to the overall appeal of your property, especially for families looking for a recreational space.</p>

<h2><strong>2. Active Lifestyle for the Whole Family</strong></h2>

<p>Pickleball is one of the fastest-growing sports in the world. It's a game for all ages and fitness levels, making it a perfect family activity. With a court right in your backyard, it's easier than ever to stay active and engaged as a family.</p>

<h2><strong>3. Customizable Design</strong></h2>

<p>At <strong>We Build Pickleball Courts</strong>, we tailor every project to fit your available space, preferences, and style. Whether you're looking for a compact design or a full-sized court, we can make it happen.</p>`,
    },
  ];

  getHeroSection(): HeroSection {
    return this.heroSection;
  }

  getClientsList(): string[] {
    return this.clientsList;
  }

  getWelcomeMessage() {
    return this.welcomeMessage;
  }

  getServices(): Service[] {
    return this.services;
  }

  getWhyChooseUsItems(): WhyChooseUs[] {
    return this.whyChooseUsItems;
  }

  getReviews(): Review[] {
    return this.reviews;
  }

  getGalleryImages(): string[] {
    return this.galleryImages;
  }

  getAboutUsHeader(): AboutUsSection {
    return this.aboutUsHeader;
  }

  getAboutUsMain(): AboutUsSection {
    return this.aboutUsMain;
  }

  getAboutUsServiceArea(): AboutUsSection {
    return this.aboutUsServiceArea;
  }

  getAboutUsFaqs(): Array<{ question: string; answer: string }> {
    return this.aboutUsFaqs;
  }

  getAboutUsStats() {
    return this.aboutUsStats;
  }

  getAboutUsWhoWeAre(): AboutUsSection {
    return this.aboutUsWhoWeAre;
  }

  getAboutUsMission(): AboutUsSection {
    return this.aboutUsMission;
  }

  getAboutUsPrinciples(): Principle[] {
    return this.aboutUsPrinciples;
  }

  getAboutUsProjects(): Project[] {
    return this.aboutUsProjects;
  }

  getBlogHeader() {
    return this.blogHeader;
  }

  getBlogPosts(): BlogPost[] {
    return this.blogPosts;
  }

  getBlogPostBySlug(slug: string): BlogPost | undefined {
    return this.blogPosts.find((post) => post.slug === slug);
  }

  private readonly faqHeader = {
    title: 'FAQ',
  };

  private readonly faqBlogLinks: FaqBlogLink[] = [
    {
      title: 'The Benefits of Professional Pickleball Court Installation',
      slug: 'the-benefits-of-professional-pickleball-court-installation',
      featuredImage: 'blog-images/The Benefits of Professional Pickleball Court Installation.webp',
      date: 'September 23, 2025',
    },
    {
      title: 'How to Choose the Right Size for Your Pickleball Court',
      slug: 'how-to-choose-the-right-size-for-your-pickleball-court',
      featuredImage: 'blog-images/How to Choose the Right Size for Your Pickleball Court.webp',
      date: 'September 23, 2025',
    },
  ];

  private readonly faqItems: FaqItem[] = [
    {
      question: "I don't think I have enough space for a court. How much room do I really need?",
      answer:
        'Our custom courts and packages are designed to fit any area. From mini-basketball and mini-dinking courts at 12×10 and 20×10 to regulation pickleball at 30×60 to 34×64 and even full-size tennis courts at 120×60 with fencing. We have sport court options for any project size and need.',
    },
    {
      question: 'What is the time frame to install a court?',
      answer:
        "At We Build Pickleball Courts, we understand you don't want to experience long delays or disruptions. Our standard pickleball court installations typically take around 5 weeks to complete. The majority of this time is spent allowing the concrete to cure (30-40 days).",
    },
    {
      question: "I've heard game courts are expensive. How much will mine cost?",
      answer:
        'The cost of building your pickleball court depends on the size, materials, and any custom features you choose. At We Build Pickleball Courts, we work within your budget to provide the best value. We offer a variety of turn-key and custom options, ensuring you get the perfect court that fits your needs and budget.',
    },
    {
      question: 'How many different sports can I play on a multi-sport court?',
      answer:
        'Our multi-sport courts are designed with flexibility in mind! Depending on the size and layout of your space, you can play basketball, pickleball, tennis, volleyball, badminton, futsal, and more—all on the same surface.\n\nWe offer customizable features like adjustable nets, multi-sport lines, and removable goals to maximize the variety of sports you can enjoy in one court.',
    },
    {
      question: 'Are there court accessories available for purchase?',
      answer:
        "At We Build Pickleball Courts, we offer a complete sports experience. We not only design and build pickleball courts, but we also sell and install basketball hoops, pickleball nets, tennis nets, and more.\n\nWe can seamlessly integrate any accessories into your court, bringing your dream design to life. Whether you're looking for a permanent solution or a temporary/rollaway net, we've got you covered!",
    },
    {
      question: 'May I pick more than one color for my court?',
      answer:
        'At We Build Pickleball Courts, we offer 19 vibrant color options that can be mixed and matched to create the perfect look for your court. If you have a specific color in mind, we can also provide a custom color to suit your vision.\n\nTry out our Court Color Designer to explore our top-choice colors and find the perfect combination for your court: We Build Pickleball Courts Color Designer.',
    },
    {
      question: 'Do you offer custom court designs for residential and commercial properties?',
      answer:
        "At We Build Pickleball Courts, we specialize in fully customized court designs for both residential homes and commercial facilities. Whether you're looking for a private backyard court or a professional-grade sports facility, we handle every detail to ensure the design fits your space, needs, and aesthetic preferences.\n\nFor Residential Courts\nWe offer customizations such as colors, logos, and multi-sport configurations to make your court a perfect fit for your home. Our goal is to ensure your court looks great and maximizes playability for family and friends.\n\nFor Commercial Facilities\nWe design high-performance courts for schools, sports complexes, and clubs. From regulation-sized layouts to professional surfacing and branding elements like team logos and facility colors, we create courts that stand out and perform at the highest level.",
    },
    {
      question: 'Is it difficult to maintain the court?',
      answer:
        "At We Build Pickleball Courts, we design our courts for easy maintenance. The open surface allows water, dirt, and debris to flow through, making it simple to keep your court in top condition. All you need is a hose, leaf blower, or broom to maintain its appearance and ensure it's always ready for play.",
    },
    {
      question: 'Is the court surface durable, and what materials do you use for construction?',
      answer:
        'At We Build Pickleball Courts, our courts are designed for long-term durability and superior performance. We use post-tension or rebar-reinforced concrete to create a stable, crack-resistant foundation that can handle heavy use and fluctuating weather conditions.\n\nFor the playing surface, we apply 100% acrylic sports paint, offering excellent traction, UV resistance, and vibrant, long-lasting color. This premium finish ensures that your court maintains its professional look and optimal performance for years to come.\n\nWhether for residential or commercial use, our courts are engineered to deliver durability, safety, and top-tier playability.',
    },
  ];

  getFaqHeader() {
    return this.faqHeader;
  }

  getFaqBlogLinks(): FaqBlogLink[] {
    return this.faqBlogLinks;
  }

  getFaqItems(): FaqItem[] {
    return this.faqItems;
  }

  private readonly contactHeader = {
    title: 'Contact us',
    description: 'Trusted to build 1000+ courts for homeowners, communities, families, and organizations across Texas.',
  };

  private readonly contactFormData: ContactFormData = {
    title: 'Start Your Court Project — Any Sport, Any Size',
    subtitle: 'Speak with Our Designers for a Custom Layout & Turn-Key Proposal, Residential or Commercial',
    fields: [
      {
        name: 'firstName',
        label: 'First Name',
        type: 'text',
        required: true,
      },
      {
        name: 'lastName',
        label: 'Last Name',
        type: 'text',
        required: true,
      },
      {
        name: 'email',
        label: 'Email',
        type: 'email',
        required: true,
      },
      {
        name: 'phone',
        label: 'Phone Number',
        type: 'tel',
        required: true,
      },
      {
        name: 'address',
        label: 'Address',
        type: 'text',
        required: true,
      },
      {
        name: 'company',
        label: 'Company',
        type: 'text',
        required: false,
      },
      {
        name: 'courtLocation',
        label: 'Court Location',
        type: 'radio',
        required: true,
        options: ['Residential', 'Commercial', 'Other (please describe)'],
      },
      {
        name: 'projectType',
        label: 'Project Type',
        type: 'select',
        required: true,
        options: ['Basketball', 'Commercial', 'Mini Basketball', 'Multi-Sport', 'Pickleball', 'Residential', 'Tennis'],
      },
      {
        name: 'startDate',
        label: 'When are you looking to start?',
        type: 'text',
        required: true,
      },
      {
        name: 'message',
        label: 'Message',
        type: 'textarea',
        required: true,
      },
    ],
  };

  private readonly contactRating = {
    rating: '4.9',
    title: 'Top Rated Service 2025',
    verified: 'verified by Trustindex',
  };

  getContactHeader() {
    return this.contactHeader;
  }

  getContactFormData(): ContactFormData {
    return this.contactFormData;
  }

  getContactRating() {
    return this.contactRating;
  }

  private readonly portfolioHeader = {
    title: 'Latest Projects Completed',
  };

  private readonly portfolioImages: string[] = [
    'portfolio/images/WhatsApp-Image-2025-09-23-at-3.20.39-AM-1.jpeg',
    'portfolio/images/WhatsApp-Image-2025-09-23-at-3.20.39-AM-2-e1758625151523.jpeg',
    'portfolio/images/WhatsApp-Image-2025-09-23-at-3.20.39-AM.jpeg',
    'portfolio/images/WhatsApp-Image-2025-09-23-at-3.20.40-AM-1.jpeg',
    'portfolio/images/WhatsApp-Image-2025-09-23-at-3.20.40-AM-2.jpeg',
    'portfolio/images/WhatsApp-Image-2025-09-23-at-3.20.40-AM-e1758624669303.jpeg',
    'portfolio/images/WhatsApp-Image-2025-09-23-at-3.20.41-AM.jpeg',
    'portfolio/images/025545fb7f4e68a6f353b5ca8c273959f5129f1a-1.webp',
    'portfolio/images/7e221a8927925932ae74ebf54add8fe4d1483b97.webp',
    'portfolio/images/43ea3fea279985c5c492690812304c1778444be8.webp',
    'portfolio/images/7d8961e8b61e56c5d4137907d5670ff2b50b67d5.webp',
    'portfolio/images/0fb8ed55d9e4bc079f09e26e1ea0599789d665ad.webp',
    'portfolio/images/fd49441647bee4033fdce54b426f6d23f596173f-1.webp',
    'portfolio/images/41dcac409e340239385336931d98df8c6154dff8-1.webp',
    'portfolio/images/bce9c964fc55a47521dc1ac0165c2aa6e5cafeda.webp',
    'portfolio/images/460d55200e67d25c0a81879a21a71b9bb71f110b-2.webp',
    'portfolio/images/590f6683-8134-4621-81b6-236b821821fd.jpg',
    'portfolio/images/7fae49ebfad6cfa8ec6fbc5182259fd8249e100d.webp',
    'portfolio/images/ac6ba53e74e74cdc03bbc1dbc36e391b6250b4b5.webp',
    'portfolio/images/5a9c6a46b314b2202b282653b63363eba82b9a37.webp',
    'portfolio/images/e5ee523b1c0aacb8076a5632b43c66fed6aa2b53-2.webp',
    'portfolio/images/d1b4e11a6f0652adc7ea66f0f34366cd419d36ec.webp',
    'portfolio/images/01c6738692f1420a764c454a7c4cad5559fd3e54.webp',
    'portfolio/images/de02118703c8307265a908668482797d0b63fbbd.webp',
    'portfolio/images/262b069392b4b1d51c4d9a543fe4f3a9aef84571-e1758533569857.webp',
    'portfolio/images/1d609b8968625474e855404d448278287a62376f.webp',
    'portfolio/images/b690df7dd21b7cb4c4eac3ac29ed15fab0b4b291.webp',
    'portfolio/images/dd138de72590926a548fd5a4557211fe2d8ecda1.webp',
    'portfolio/images/590f6683-8134-4621-81b6-236b821821fd-1.jpg',
    'portfolio/images/adff93679553d64ab8a6abe3b43ded8be862569b.webp',
    'portfolio/images/8686dbbb-620d-4cca-af3a-39f30a4fefa7-1.jpg',
    'portfolio/images/859a65ddebb5199ad6e67a21caef4cba59e32af8.webp',
    'portfolio/images/3f44b2ff740cfde4b9cb1fa694b79cfa1a1fcb25.webp',
    'portfolio/images/d11d51df84e577ae0cee59023420c88a8b2b6b47.webp',
    'portfolio/images/6e47d76b-0b94-4e11-be8b-e12e9946f10f.jpg',
    'portfolio/images/3898f889-7b1b-4bdb-b85f-7e0d294d4a19.jpg',
    'portfolio/images/331910e5da78d5a709c19bfc4d5f4feacc4fba9b.webp',
    'portfolio/images/4a4baa25-4f2c-4ba4-964d-f4dca682fe7f.jpg',
    'portfolio/images/999625187d37e1ea32f53ae056cb733c3b4fa6e1.webp',
    'portfolio/images/78cca675781df9f1d0f4fd2826f21a9b2c54fd45.webp',
    'portfolio/images/WhatsApp-Image-2025-09-29-at-8.11.14-PM.jpeg',
    'portfolio/images/WhatsApp-Image-2025-09-29-at-8.11.15-PM-1.jpeg',
    'portfolio/images/WhatsApp-Image-2025-09-29-at-8.11.15-PM-2.jpeg',
    'portfolio/images/WhatsApp-Image-2025-09-29-at-8.11.15-PM.jpeg',
    'portfolio/images/WhatsApp-Image-2025-09-30-at-6.21.47-PM.webp',
    'portfolio/images/WhatsApp-Image-2025-09-30-at-6.21.48-PM-1-e1759310351969.webp',
    'portfolio/images/WhatsApp-Image-2025-09-30-at-6.21.48-PM-2.webp',
    'portfolio/images/WhatsApp-Image-2025-09-30-at-6.21.48-PM-3.webp',
    'portfolio/images/WhatsApp-Image-2025-09-30-at-6.21.48-PM-e1759310317401.webp',
    'portfolio/images/WhatsApp-Image-2025-09-30-at-6.21.50-PM-1.webp',
    'portfolio/images/WhatsApp-Image-2025-09-30-at-6.21.50-PM-2.webp',
    'portfolio/images/WhatsApp-Image-2025-09-30-at-6.21.50-PM-3.webp',
    'portfolio/images/WhatsApp-Image-2025-09-30-at-6.21.50-PM-4.webp',
    'portfolio/images/WhatsApp-Image-2025-09-30-at-6.21.50-PM.webp',
    'portfolio/images/WhatsApp-Image-2025-09-30-at-6.21.53-PM-1.webp',
    'portfolio/images/WhatsApp-Image-2025-09-30-at-6.21.53-PM.webp',
    'portfolio/images/WhatsApp-Image-2025-09-30-at-6.21.56-PM.webp',
    'portfolio/images/WhatsApp-Image-2025-09-30-at-6.22.47-PM-1.webp',
    'portfolio/images/WhatsApp-Image-2025-09-30-at-6.22.47-PM.webp',
    'portfolio/images/imgi_52_355816060_989423848887622_6241926722230033659_n.webp',
    'portfolio/images/imgi_50_355249066_786748719587697_8062438169485612679_n.webp',
    'portfolio/images/imgi_44_355447377_250400204387731_6696890686458879900_n.webp',
    'portfolio/images/imgi_36_366384812_17856217977009322_5814675237376642366_n.webp',
    'portfolio/images/imgi_45_503734563_565270086351116_1209267607955489317_n-1.webp',
    'portfolio/images/WhatsApp-Image-2025-10-06-at-2.14.38-PM-e1759744620419.jpeg',
    'portfolio/images/WhatsApp-Image-2025-10-06-at-2.14.37-PM-1.jpeg',
    'portfolio/images/WhatsApp-Image-2025-10-06-at-2.14.37-PM-2-e1759744665160.jpeg',
    'portfolio/images/WhatsApp-Image-2025-10-06-at-2.14.37-PM.jpeg',
    'portfolio/images/WhatsApp-Image-2025-10-06-at-2.14.36-PM-1.jpeg',
    'portfolio/images/WhatsApp-Image-2025-10-06-at-2.14.36-PM.jpeg',
    'portfolio/images/328b3413-4ad9-4616-b3e8-6bb70231b035.jpg',
    'portfolio/images/14a3638b-4fd2-4582-abb0-7f13f82af69f.jpg',
    'portfolio/images/d58e04cd-a0bf-49e9-b957-9a2aeed644bd.jpg',
    'portfolio/images/c3ef97a7-77bb-4256-bf4f-9928dabb588c.jpg',
    'portfolio/images/fadf7405-b4af-4d53-a229-3d8f49ec317e.jpg',
    'portfolio/images/4a4baa25-4f2c-4ba4-964d-f4dca682fe7f-1.jpg',
    'portfolio/images/cf85f056-319a-45be-aac0-277114659b08.jpg',
    'portfolio/images/d022b5b1-d723-44a9-8a1a-fef9759dfb0c.jpg',
    'portfolio/images/be64a9b7-5c3d-4284-a839-e28bd2409db8.jpg',
    'portfolio/images/86fac050-8090-44a9-bbd4-745b4958c972.jpg',
    'portfolio/images/54cce224-5bf8-4fa7-9b98-e5a185566606.jpg',
    'portfolio/images/65872b80-550c-4feb-8dcd-3118dac78522.jpg',
    'portfolio/images/8e985a72-025f-4e1b-a7d0-582b157613d8.jpg',
    'portfolio/images/4c0c786f-9c81-4c99-afdd-d69e19c5c49b.jpg',
    'portfolio/images/b04292bc-6d48-4d67-b8e0-6a9339f74c8c.jpg',
    'portfolio/images/d5b1d514-8772-4369-8a2a-f3e7f4d209b9.jpg',
    'portfolio/images/403666f85be77e7d7ee13a9a6528f2ecfadfaf52.webp',
    'portfolio/images/c5373bb8f957b0aba9b8f0a741eab2bacd839cef.webp',
    'portfolio/images/4ce7874eeaba37ce7936113969b32326bea660f9.webp',
    'portfolio/images/78008aa7c5bfbc06f73ff21b1c9f058dc59aa6e9-1.webp',
    'portfolio/images/46dbfad36066f7755687f7ba9bfa8bca488433bd.webp',
  ];

  private readonly portfolioVideos: string[] = [
    'https://webuildpickleballcourts.com/wp-content/uploads/2025/09/Houston-get-ready-46000-sq-feet-of-pure-pickleball-bliss-🥒😎-@elitepickleballclub.mp4',
    'https://webuildpickleballcourts.com/wp-content/uploads/2025/09/@elitepickleballclub-When-owners-ask-us-when-we-can-start-painting-we-tell-them-the-prep-is-the-.mp4',
    'https://webuildpickleballcourts.com/wp-content/uploads/2025/09/We-specialize-in-creating-top-notch-pickleball-facilities-handling-everything-from-start-to-fin.mp4',
    'https://webuildpickleballcourts.com/wp-content/uploads/2025/09/@houstonfoodbaby-enjoying-his-new-court-Houstonpickleball-Houstonpickleballbuilder-houstonp.mp4',
    'https://webuildpickleballcourts.com/wp-content/uploads/2025/09/High.mp4',
    'https://webuildpickleballcourts.com/wp-content/uploads/2025/09/High-2.mp4',
    'https://webuildpickleballcourts.com/wp-content/uploads/2025/09/High-3.mp4',
    'https://webuildpickleballcourts.com/wp-content/uploads/2025/09/High-4.mp4',
    'https://webuildpickleballcourts.com/wp-content/uploads/2025/09/High-5.mp4',
    'https://webuildpickleballcourts.com/wp-content/uploads/2025/09/High-6.mp4',
    'https://webuildpickleballcourts.com/wp-content/uploads/2025/09/High-7.mp4',
    'https://webuildpickleballcourts.com/wp-content/uploads/2025/09/High-8.mp4',
    'https://webuildpickleballcourts.com/wp-content/uploads/2025/09/High-9.mp4',
    'https://webuildpickleballcourts.com/wp-content/uploads/2025/09/High-10.mp4',
    'https://webuildpickleballcourts.com/wp-content/uploads/2025/10/WhatsApp-Video-2025-10-01-at-12.19.44_f6f16e3f.mp4',
    'https://webuildpickleballcourts.com/wp-content/uploads/2025/10/WhatsApp-Video-2025-10-01-at-12.19.41_4b858aa1.mp4',
    'https://webuildpickleballcourts.com/wp-content/uploads/2025/10/WhatsApp-Video-2025-10-01-at-12.19.42_41a3a6e5.mp4',
    'https://webuildpickleballcourts.com/wp-content/uploads/2025/10/WhatsApp-Video-2025-10-31-at-9.27.55-AM.mp4',
    'https://webuildpickleballcourts.com/wp-content/uploads/2025/10/WhatsApp-Video-2025-10-31-at-9.27.55-AM-1.mp4',
    'https://webuildpickleballcourts.com/wp-content/uploads/2025/11/WhatsApp-Video-2025-11-04-at-2.31.54-PM.mp4',
  ];

  private readonly portfolioAccordion = [
    {
      question: 'What makes buildmycourts different?',
      answer: 'We have a full in-house construction and design team, ensuring top-quality craftsmanship, seamless project management, and a hassle-free experience from start to finish.\n\nWe also provide free court consultations for every quote to ensure that the final price is the final price.',
    },
    {
      question: 'Who do you build for?',
      answer: 'At We Build Pickleball Courts, we specialize in creating high-quality pickleball courts for homeowners, sports clubs, and recreational facilities. Whether you\'re looking for a backyard court or a full-scale sports facility, we bring expert design and construction to every project, ensuring it meets your needs and enhances your space.\n\nWe also offer services for existing facilities and homeowners, including tennis court resurfacing and adding pickleball court lines to existing courts. No matter the project size, our team is here to provide professional craftsmanship and personalized service.',
    },
    {
      question: 'What makes buildmycourts different?',
      answer: 'At We Build Pickleball Courts, we offer a variety of custom services to complete your court and elevate your playing experience. From personalized logos to fencing, lighting, turf installation, and more, we provide everything you need to make your court functional, stylish, and perfect for play at any time of day.',
    },
  ];

  private readonly portfolioStats = {
    title: "We're proud to be the best at building",
    people: {
      label: 'PEOPLE',
      title: 'From homeowners to business owners',
      value: '100',
      suffix: '+',
    },
    courts: {
      label: 'COURTS',
      title: 'Built and hundreds more resurfaced',
      value: '300',
      suffix: '+',
    },
  };

  getPortfolioHeader() {
    return this.portfolioHeader;
  }

  getPortfolioImages(): string[] {
    return this.portfolioImages;
  }

  getPortfolioVideos(): string[] {
    return this.portfolioVideos;
  }

  getPortfolioAccordion() {
    return this.portfolioAccordion;
  }

  getPortfolioStats() {
    return this.portfolioStats;
  }

  // Residential Pages Data
  private readonly residentialMain: ResidentialPageContent = {
    header: {
      title: 'Residential Sport Courts',
      subtitle: 'Upgrade your home or property with a custom Pickleball or Basketball court',
    },
    hero: {
      title: 'Backyard Courts for Your Home',
      description:
        'Have you been searching for pickleball court construction near you, hoping to find a trusted team nearby? Look no further!\n\nAt We Build Pickleball Courts, we specialize in pickleball court construction and basketball court installation for residential properties. Whether you\'re a pickleball enthusiast or enjoy shooting hoops, we can design and build the perfect court to transform your outdoor living space.\n\nWhy Homeowners Choose We Build Pickleball Courts:\n\n✅ Experienced Pickleball Court Builders: Our skilled team specializes in designing and installing custom pickleball courts that fit your space and budget perfectly.\n\n✅ Custom Basketball Court Installation: From full-sized courts to half-courts, we offer basketball court installation that maximizes your space while providing endless fun and functionality.\n\n✅ Top-Quality Craftsmanship: We use premium materials that stand the test of time, ensuring your court stays in excellent condition for years to come.\n\n✅ Lighting & Accessories: Add optional LED lighting for evening games or custom markings for a multi-sport experience.',
      image: '/residential/wepik-bilal-project-20240108073632KDlv.jpeg',
      buttonText: 'Get a Free, No-Obligation Consultation & Quote',
      buttonLink: '/contact-us',
    },
    faqs: [
      {
        question: 'Can pickleball and basketball courts be built in backyards?',
        answer:
          'Yes, both pickleball and basketball courts can be designed and installed in residential backyards. Our team at We Build Pickleball Courts specializes in customizing courts to fit various backyard sizes, ensuring they are functional and enjoyable for everyone. We work with your available space to deliver the best possible layout.',
      },
      {
        question: 'How much space do I need to build a pickleball court?',
        answer:
          'A standard pickleball court requires a minimum of 30 feet by 60 feet of space, including room for safe movement around the court. However, we can work with your available area and design a court that fits your space while maintaining the proper playing dimensions.',
      },
      {
        question: 'How much space do I need to build a basketball court?',
        answer:
          'For a full-sized basketball court, you\'ll need about 50 feet by 94 feet. If you are limited by space, we can also design a half-court option, typically measuring 50 feet by 47 feet, which works well for most residential backyards.',
      },
      {
        question: 'What are the dimensions for a mini court?',
        answer:
          'A mini court typically ranges from 20 feet by 40 feet to 25 feet by 50 feet. These smaller courts are great for compact spaces while still offering the essential features for both pickleball and basketball play.',
      },
      {
        question: 'How much does the pickleball court cost?',
        answer:
          'The cost of constructing a pickleball court depends on factors such as the size of the court, surface materials, and additional features like lighting and fencing. To get an accurate estimate, we recommend scheduling a free consultation with our team, where we\'ll provide a personalized quote based on your specific requirements and preferences.',
      },
    ],
    gallery: [
      '/residential/3DDEE4F1-04C0-4669-AF09-6DB99E5DEDEA-scaled-1-1.jpg',
      '/residential/imgi_43_448417379_1218258926212757_5396553830350765637_n.webp',
      '/residential/imgi_48_484655693_17930334681009322_1001597747528906792_n.webp',
      '/residential/556465113_17951899245009322_4163966656285548438_n.jpg',
      '/residential/imgi_29_455111673_519862387152756_507185166191645006_n.webp',
    ],
  };

  getResidentialMain(): ResidentialPageContent {
    return this.residentialMain;
  }

  private readonly residentialPickleballConstruction: ResidentialPageContent = {
    header: {
      title: 'Pickleball Court Construction',
      subtitle: 'Pickleball Court Installation for Any Space | Custom Pickleball Courts | Indoor Pickleball Courts | Outdoor Courts',
    },
    hero: {
      title: 'Professional Pickleball Court Construction and Installation',
      description:
        'A pickleball court in your backyard is more than just a place to play—it\'s where memories are created and laughter is shared. It\'s where family comes together. Whether it\'s a casual rally after dinner, a friendly match with neighbors, or teaching your kids a new skill, pickleball offers fun and fitness for everyone. Adding a court to your home encourages active living and togetherness, just steps from your door.\n\nAt We Build Pickleball Courts, we specialize in building custom pickleball courts for backyards. Our experienced team transforms outdoor spaces into courts designed around your area, your family\'s lifestyle, and your long-term vision. From compact layouts to full-size courts with buffer zones, we build your court with quality, care, and attention to detail—tailored just for you.',
      image: '/residential/imgi_66_505163386_17939667633009322_340826664726100334_n.webp',
      buttonText: 'Get a Free Quote',
      buttonLink: '/contact-us',
    },
    sections: [
      {
        title: 'What Are The Dimensions Of A Pickleball Court?',
        description:
          'To get the most from your backyard pickleball court, selecting the right layout and size is essential. The standard court size is 20 feet wide by 44 feet long, perfect for both singles and doubles play. This setup provides enough room for an exciting, competitive game while fitting comfortably into most residential backyards.\n\nIf you have more space available, we recommend expanding to 30 feet by 60 feet. This option includes buffer zones around the court, giving players extra room to move safely and comfortably. These zones are ideal for active play, family matches, and enhancing the overall playing experience.\n\nWhether you prefer a compact setup or a full-size layout, a backyard pickleball court brings daily fun, fitness, and family connection. Our team handles everything—from design and layout to surfacing and finishing touches.\n\nLooking for pickleball court construction near you? At We Build Pickleball Courts, we\'re your trusted local partner for high-quality residential courts. We create beautiful, professional-grade courts tailored to your home and lifestyle.',
        image: '/residential/dde4dbeb33096108fc901693249dad31cc73e90c.png',
      },
    ],
    processSteps: [
      {
        number: 1,
        title: 'Introduction Phase',
        description: 'Meet your Client Relations Manager. They will help survey the pickleball court location. Together, you can select the best court dimensions. You will then receive a detailed quote based on square footage.',
      },
      {
        number: 2,
        title: 'Pre-Construction Phase',
        description: 'Our Client Relations Manager will hand off to the construction team. Preparing documents & permits as well as a custom pickleball court diagram.',
      },
      {
        number: 3,
        title: 'Construction Phase',
        description: 'The pickleball court site is prepped, materials are sourced, vapor barrier and concrete base is completed, followed by prep work for the color coatings.',
      },
      {
        number: 4,
        title: 'Cure Times & Surface Preparation',
        description: 'The court surface cures properly, ensuring durability and performance. Final surface preparation and quality checks are completed.',
      },
      {
        number: 5,
        title: 'Hand Over to Client',
        description: 'The pickleball court is ready for use by any skill level! First timers to pros!',
      },
    ],
    trustBadges: {
      rating: '4.9',
      title: 'Top Rated Service 2025',
      verified: 'verified by Trustindex',
      images: ['/residential/XMLID_11_.png', '/residential/Group-35.png'],
    },
  };

  getResidentialPickleballConstruction(): ResidentialPageContent {
    return this.residentialPickleballConstruction;
  }

  private readonly residentialMultiSport: ResidentialPageContent = {
    header: {
      title: 'Multi Sport Courts: Perfect for the Whole Family',
    },
    hero: {
      title: 'Custom Multi-Sport Courts The Perfect Backyard Upgrade',
      description:
        'The all-in-one backyard court for basketball, pickleball, and more. This multi-purpose court is the perfect addition to any outdoor space and a great way to get the whole family involved in some friendly competition.\n\nWhether you\'re looking for a new custom court or upgrading an existing space, We Build Pickleball Courts multi-sport court delivers unmatched fun, flexibility, and functionality. Enjoy a space that supports different sports without compromise—designed for high performance, maximum enjoyment and low maintenance.',
      image: '/residential/imgi_31_505742772_17939667606009322_5116293362220830711_n.webp',
      buttonText: 'Book a Consultation',
      buttonLink: '/contact-us',
    },
    sections: [
      {
        title: 'Why Build a Multi-Sport Court?',
        description: 'Here are some of the features that make a multi-sport court the best choice for your backyard court with We Build Pickleball Courts:',
      },
      {
        title: 'What Makes we Build Pickleball Courts Custom Multi Sport Court So Different?',
        items: [
          {
            title: 'Multiple Size Options',
            description: 'Available in 25×30, 25×45, 35×55, 30×60, and 50×80 layouts. We offer flexible court size packages to fit any backyard or project requirements. Whether you\'re creating a compact space or a full size athletic court, we\'ve got options to suit your needs.',
          },
          {
            title: 'Accessories Add-ons',
            description: 'Take your court to the next level with premium accessories, including:\n• Rollaway Pickleball Net\n• In-ground Permanent Basketball Hoop (Ryval C660)\n• In-ground nets for volleyball and tennis\n• Overhead Lighting for nighttime games',
          },
          {
            title: 'Sport Options',
            description: 'We build custom multi-sport courts with pickleball, volleyball, tennis, and basketball—complete with high school lines, point lines, and regulation sizing. Add striping to create a outdoor multi-sport game court at a lower overall cost, tailored to your space. From Backyard Multi-Sport to Full Commercial Courts',
          },
        ],
      },
      {
        title: 'Endless Sports Options for the Whole Family',
        description:
          'A We Build Pickleball Courts multi-sport court offers the ultimate flexibility, allowing your family to enjoy multiple sports in one space. Whether it\'s a backyard basketball court, tennis, pickleball, or volleyball, our expertly designed outdoor courts provide a seamless playing surface for every game.\n\nWith clearly marked game lines and regulation-size custom layouts, our courts make switching between activities quick and easy. There\'s no need to choose just one—rotate between your favorite sports and keep everyone engaged year-round.\n\nComplete your dream backyard sports experience with professional hoops, adjustable nets, artificial turf, and integrated landscape design that brings it all together. Our courts are built for all skill levels—perfect for casual play, competitive games, or just staying active with family and friends.',
        image: '/residential/262b069392b4b1d51c4d9a543fe4f3a9aef84571-e1758533569857.webp',
        buttonText: 'Book a Consultation',
        buttonLink: '/contact-us',
      },
    ],
    faqs: [
      {
        question: 'All-weather durability',
        answer:
          'Our courts are built to withstand the intense Houston heat, sudden rain showers, and everything else the weather throws at them. You won\'t have to worry about excessive maintenance—these courts are made to handle it all.',
      },
      {
        question: 'Low maintenance, high reward',
        answer:
          'Forget about dedicating your weekends to pressure-washing or resealing. Our durable materials are built to last, requiring little maintenance to keep your court in top shape.',
      },
      {
        question: 'True versatility',
        answer:
          'Whether it\'s basketball, pickleball, volleyball, or tennis, our courts are designed to adapt to your needs. No need to choose just one sport—enjoy them all!',
      },
      {
        question: 'Custom colors and finishes',
        answer:
          'Whether you\'re complementing your home\'s style or showcasing your kid\'s school colors, we offer a variety of options. Bold, classic, modern—whatever suits your vision.',
      },
      {
        question: 'More sports per square foot',
        answer:
          'A backyard multi-sport court is the ideal solution for maximizing space and minimizing cost while accommodating multiple sports. A regulation-size pickleball court measures 44\'x20\', with a minimum recommended boundary area of 60\'x30\'. This space is also perfect for a half-court basketball setup, complete with a full 3-point line—whether it\'s for high school, college, or NBA-level play.',
      },
    ],
    trustBadges: {
      rating: '4.9',
      title: 'Top Rated Service 2025',
      verified: 'verified by Trustindex',
      images: ['/residential/XMLID_11_.png', '/residential/Group-35.png'],
    },
  };

  getResidentialMultiSport(): ResidentialPageContent {
    return this.residentialMultiSport;
  }

  private readonly residentialBasketballCourts: ResidentialPageContent = {
    header: {
      title: 'Professional Basketball Court Construction',
      subtitle: 'Backyard Basketball Court | Mini Basketball Court | Full Court | Indoor And Outdoor Basketball Court',
    },
    hero: {
      title: 'Professional Basketball Court Construction and Installation',
      description:
        'Transform your outdoor space into the ultimate play zone with a custom basketball court installation right in your own backyard. More than just a home upgrade, a residential court is your personal arena for shooting hoops, staying active, and creating lasting memories with family and friends. Whether it\'s a casual game with the kids or a friendly neighborhood match, your backyard can be the heart of the action.\n\nAt We Build Pickleball Courts, we specialize in high-quality, family-oriented basketball court installations that fit your space, style, and budget. Our courts are designed for fun and built to last—perfect for homes across the country.',
      image: '/residential/e5eb271b-057f-4706-ab48-23b384a6561f.webp',
      buttonText: 'Book a Consultation',
      buttonLink: '/contact-us',
    },
    sections: [
      {
        title: 'Growing Popularity of Mini Basketball Courts in Houston',
        description:
          'The demand for mini basketball courts in Houston, Texas has seen a significant rise in recent years, driven by families looking to maximize limited backyard space while still enjoying the benefits of an active lifestyle. As urban areas grow and lot sizes shrink, homeowners are turning to compact, customizable mini basketball courts that offer convenience, safe play, and year-round entertainment for kids and adults alike. This growing trend reflects Houston\'s strong basketball culture and the increasing desire for private, at-home recreation spaces.\n\nReady to Get Started? Mini or full, Build My Courts delivers.',
        buttonText: 'Start Your Project',
        buttonLink: '/contact-us',
      },
      {
        title: 'Multiple Size Options',
        items: [
          {
            title: 'Multiple Size Options',
            description: '25×30 25×45 35×55 30×60 50×80. We have basketball court packages for any size backyard, commercial project or home gym',
          },
          {
            title: 'Accessories Add-ons',
            description: 'Rollaway Pickleball Net, In-ground Permentent Basketball Hoop Ryval C660, In-ground Nets, Overhead Lighting',
          },
          {
            title: 'Sport Options',
            description: 'We create a custom designs to combine Pickleball, Basketball, Volleyball, Tennis or even multiple of each type',
          },
        ],
      },
      {
        title: 'What are the dimensions of a basketball court and common setups',
        subSections: [
          {
            title: "25' x 25'\nMINI-COURT",
            image: '/residential/imgi_45_448935930_1702172140618888_1385270773452713620_n.webp',
          },
          {
            title: "30' x 60'\nHALF-COURT",
            image: '/residential/imgi_31_505742772_17939667606009322_5116293362220830711_n-1.webp',
          },
          {
            title: "94' x 50'\nFULL COURT",
            image: '/residential/77f3f5508e54cc08ae120f20040a9360e1852f76.webp',
          },
        ],
      },
      {
        title: 'Making your perfect dream-court',
        subSections: [
          {
            title: 'Nets and Hoops',
            image: '/residential/e5ee523b1c0aacb8076a5632b43c66fed6aa2b53-3.png',
            buttonLink: '/residential/hoops-nets',
          },
          {
            title: 'Artificial Turf and Putting Greens',
            image: '/residential/WhatsApp-Image-2025-11-02-at-11.24.12-PM-1.jpeg',
            buttonLink: '/residential/artificial-turf-putting-greens',
          },
        ],
      },
      {
        title: 'Bring Your Backyard Court Vision to Life',
        description:
          'Whether you\'re planning a mini court for the kids or a full-sized setup for family fun, We Build Pickleball Courts designs and installs basketball courts that perfectly match your space, budget, and lifestyle. Every court we build is designed for maximum fun and built to last.',
        buttonText: 'Request a FREE Custom Quote',
        buttonLink: '/contact-us',
      },
    ],
    faqs: [
      {
        question: 'What Are the Dimensions of a Full-Size Court?',
        answer:
          'We build outdoor courts in a variety of sizes to suit your available space and level of play. From compact to regulation, we\'ll match your needs perfectly.\n\nFull Size Court: 84\' x 50\' (Standard high school dimensions)\nHalf Courts: 30\' x 60\' (extended play space) or 30\' x 50\' (compact layout)\nMini Courts: 25\' x 20\' or 25\' x 25\'\n\nNot sure what fits? Our team will help determine the ideal court size and court dimensions for your own basketball court.',
      },
      {
        question: 'Is There More Than One 3-Point Line?',
        answer:
          'Absolutely! Depending on the level of play you want to replicate, we can install different 3-point arcs:\n\nHigh School: 19\' 9" from the basket\nCollege: 22\' 1¾" (recent update from previous 20\' 9")\nNBA/Pro: 23\' 9" at the top of the arc, 22\' in the corners\n\nWe can paint any of these to regulation—or even multiple arcs if you\'d like to train across levels. We\'ll help you create a high-performance practice space that suits any level of competition.\n\nWith our design team and our interactive court designer, we\'ll make sure you get the best court for your home, recreation center, or commercial facility.',
      },
      {
        question: 'What Areas Do You Service?',
        answer:
          'We proudly serve Austin, Dallas, Houston, and surrounding areas, including:\n\nRound Rock, Georgetown, Plano, Frisco, Fort Worth, Sugar Land, Katy, The Woodlands, Cypress, Pearland\n\nWhether you\'re searching for a backyard basketball court, pickleball court, or tennis court, we\'ve got Austin, Dallas, and Houston covered.',
      },
      {
        question: 'Custom Options & Add-Ons',
        answer:
          'Our courts are fully customizable. Here are just a few ways you can personalize your build:\n\nAdjustable basketball hoops\nPremium court surface with slip resistance\nPersonalized court color and layout\nLED light fixtures for nighttime play\nTeam logos or family emblems painted on court\nFence enclosures and ball containment\nMulti-sport lines for tennis court or pickleball court use\n\nWe only use the best materials to ensure your court lasts for years.',
      },
    ],
    gallery: [
      '/residential/imgi_45_448935930_1702172140618888_1385270773452713620_n.webp',
      '/residential/imgi_31_505742772_17939667606009322_5116293362220830711_n-1.webp',
      '/residential/77f3f5508e54cc08ae120f20040a9360e1852f76.webp',
    ],
  };

  getResidentialBasketballCourts(): ResidentialPageContent {
    return this.residentialBasketballCourts;
  }

  private readonly residentialArtificialTurf: ResidentialPageContent = {
    header: {
      title: 'Artificial Turf and Putting Greens',
    },
    hero: {
      title: 'Backyard Artificial Turf Installation: The Perfect Low-Maintenance Solution for Any Space',
      description:
        'Natural grass looks great—until it doesn\'t. Mowing, watering, and dealing with dead patches can quickly become a hassle. That\'s where artificial turf comes in. Whether you want to enhance your patio, surround your pickleball court, install a putting green, or eliminate lawn maintenance altogether, We Build Pickleball Courts has the perfect turf option for you.\n\nDifferent Turf Heights for Different Needs\nNot all turf is created equal. The best choice depends on how you plan to use it:\n\nShort & Dense (Putting Greens) – A smooth, tight-knit surface designed for golf enthusiasts who want a true roll.\n\nMedium-Pile (Patio & Landscaping) – The perfect balance of softness and durability, ideal for decorative outdoor spaces.\n\nHigh-Pile (Lawn Replacement) – A lush, natural-looking alternative to grass—without the watering, mowing, or upkeep.',
      image: '/residential/imgi_45_476477702_17925679176009322_6409327478488036409_n.webp',
      buttonText: 'Book a Consultation',
      buttonLink: '/contact-us',
    },
    sections: [
      {
        title: 'Where Can You Use Artificial Turf?',
        description:
          'Patio & Backyard Decor – Create a green, welcoming space that stays perfect year-round.\n\nSurrounding a Court – Keep the area around your pickleball or tennis court clean and polished.\n\nLawn Replacement – No more mowing, watering, or dealing with muddy patches.\n\nPutting Greens – Practice your short game with a professional-quality, customized green.',
        image: '/residential/imgi_43_442419565_941023901153601_4916241557654404256_n.webp',
      },
      {
        title: 'Why Choose We Build Pickleball Courts?',
        description:
          'We don\'t just sell turf—we help you find the best fit for your space. Our team offers custom consultations to match the right turf height, style, and installation to your needs.\n\nDurable, realistic turf options built for Houston\'s climate.\n\nProfessional installation that looks and feels natural.\n\nCustomer-focused service to bring your vision to life.\n\nLet\'s build something amazing together. Contact us today for a custom turf consultation with We Build Pickleball Courts.',
        image: '/residential/imgi_68_429893760_17884873011009322_8576729911865715622_n.webp',
        buttonText: 'Book a Consultation',
        buttonLink: '/contact-us',
      },
    ],
    gallery: [
      '/residential/WhatsApp-Image-2025-11-02-at-11.24.12-PM-1.jpeg',
      '/residential/WhatsApp-Image-2025-11-02-at-11.24.12-PM.jpeg',
      '/residential/imgi_68_429893760_17884873011009322_8576729911865715622_n.webp',
      '/residential/imgi_43_442419565_941023901153601_4916241557654404256_n.webp',
    ],
  };

  getResidentialArtificialTurf(): ResidentialPageContent {
    return this.residentialArtificialTurf;
  }

  private readonly residentialCourtFencing: ResidentialPageContent = {
    header: {
      title: 'Court Fencing',
      subtitle: 'Pickleball Court Fencing: Secure, Durable & Stylish',
    },
    hero: {
      title: 'Outdoor Court Fencing and Enclosures',
      description:
        'A backyard sports court isn\'t complete without a well-designed fencing system to enhance privacy, improve safety, and keep balls within the playing area. A properly installed fence adds both aesthetic appeal and functional value to your court, ensuring an optimal playing experience.\n\nFencing requirements vary based on the type of court and its location. For public courts, 10-foot-high fences are commonly installed to provide security and prevent unauthorized use. In residential settings, many homeowners prefer minimal fencing to maintain an open and modern look. Black fencing is the most popular choice due to its sleek, unobtrusive design, whereas green fencing is more visually prominent.\n\nFor a premium ball containment solution, soft netting systems offer a discreet and effective way to keep the game going without compromising the court\'s aesthetics. Whether for a home court or a professional facility, the right fencing ensures both functionality and style.',
      image: '/residential/imgi_53_540678378_17948747688009322_4244788793269151873_n.webp',
      buttonText: 'Book a Consultation',
      buttonLink: '/contact-us',
    },
    sections: [
      {
        title: 'Choosing the Right Fence for Your Court',
        description:
          'A backyard or facility pickleball court isn\'t complete without proper fencing. Whether you want to keep the game contained, add security, or create a private playing space, the right fencing makes all the difference.\n\nChoosing the Right Fence for Your Court\nAt We Build Pickleball Courts, we offer fencing options to match your needs—whether you want a minimalist open feel or full ball containment.\n\n✔ 4ft, 6ft, 8ft, and 10ft fencing – Ideal for everything from open backyard courts to secured facilities.\n\n✔ Available in black vinyl (our most popular, blends seamlessly) or galvanized steel (classic and durable).\n\n✔ Custom installation to fit your space and playing style.\n\nWhat Fence Height Do You Need?\n\n4ft & 6ft – Great for residential courts with a more open aesthetic.\n8ft & 10ft – Perfect for keeping balls in play and adding extra security, ideal for clubs and commercial facilities.',
        image: '/residential/imgi_53_540678378_17948747688009322_4244788793269151873_n.webp',
      },
      {
        title: 'Why Choose We Build Pickleball Courts?',
        description:
          'With years of experience designing and building over 300 courts in Houston, we know what works. Our team ensures top-quality materials, expert installation, and a court that looks great for years to come.\n\nCustom solutions for residential and commercial courts.\n\nDurable materials designed for Houston\'s climate.\n\nProfessional, customer-focused service from start to finish.\n\nWant to talk sport accessory options? Contact us today to get started!',
        image: '/residential/imgi_48_484655693_17930334681009322_1001597747528906792_n.webp',
        buttonText: 'Book a Consultation',
        buttonLink: '/contact-us',
      },
    ],
    gallery: [
      '/residential/imgi_29_455111673_519862387152756_507185166191645006_n.webp',
      '/residential/imgi_52_443228339_413403268199606_6480298804640317143_n.webp',
      '/residential/imgi_68_434570262_17888139771009322_9133723043087115051_n.webp',
      '/residential/imgi_66_437714091_17888961453009322_565305388930151652_n.webp',
      '/residential/imgi_43_448417379_1218258926212757_5396553830350765637_n.webp',
    ],
  };

  getResidentialCourtFencing(): ResidentialPageContent {
    return this.residentialCourtFencing;
  }

  private readonly residentialHoopsNets: ResidentialPageContent = {
    header: {
      title: 'Hoops and Nets',
      subtitle: 'High-Quality Sport Accessories and Professional Installation',
    },
    hero: {
      title: 'Premium quality installed sport accessories',
      description:
        'We\'re more than just a concrete and paint company. We\'re a full service sports experience provider. We sell and install high-quality hoops and nets in-ground permanent or rollaway temporarily solutions.',
      image: '/residential/imgi_68_441622107_436100319002622_8314849039179710365_n.webp',
      buttonText: 'Book a Consultation',
      buttonLink: '/contact-us',
    },
    sections: [
      {
        title: 'Our Sport Accessories',
        subSections: [
          {
            title: 'In-Ground Installed Basketball Goal',
            description: 'Padding, Adjustable, High-Quality',
            image: '/residential/imgi_68_441622107_436100319002622_8314849039179710365_n.webp',
          },
          {
            title: 'Rollaway Pickleball Net',
            description: 'Perfect for Multi-Courts',
            image: '/residential/WhatsApp-Image-2025-11-04-at-2.31.59-PM.jpeg',
          },
          {
            title: 'In-Ground with Poles Tennis Nets',
            description: 'Professional installation for tennis courts',
            image: '/residential/WhatsApp-Image-2025-11-05-at-9.58.32-AM.jpeg',
          },
          {
            title: 'Permanent Installed Pickleball Nets',
            description: 'Durable, regulation-size nets',
            image: '/residential/imgi_59_514563725_17941705698009322_9004991449583410565_n.webp',
          },
        ],
      },
      {
        title: 'Why Choose We Build Pickleball Courts?',
        description:
          'With years of experience designing and building over 300 courts in Houston, we know what works. Our team ensures top-quality materials, expert installation, and a court that looks great for years to come.\n\nCustom solutions for residential and commercial courts.\n\nDurable materials designed for Houston\'s climate.\n\nProfessional, customer-focused service from start to finish.\n\nWant to talk sport accessory options? Contact us today to get started!',
        image: '/residential/imgi_19_556428991_17951899203009322_4912442090337726544_n-1.webp',
      },
    ],
    gallery: [
      '/residential/imgi_59_514563725_17941705698009322_9004991449583410565_n.webp',
      '/residential/imgi_53_540678378_17948747688009322_4244788793269151873_n.webp',
      '/residential/imgi_21_540066907_17948747679009322_6864728825337390653_n-1.webp',
      '/residential/1a65cdb3-0558-4372-832a-a683d8c64356-1.jpeg',
      '/residential/dji_0102-scaled-1.jpeg',
      '/residential/IMG_7075-scaled-2.jpg',
      '/residential/590f6683-8134-4621-81b6-236b821821fd.jpg',
      '/residential/d5b1d514-8772-4369-8a2a-f3e7f4d209b9.jpg',
      '/residential/imgi_47_449169480_460889309973909_3517765846346076211_n.webp',
    ],
  };

  getResidentialHoopsNets(): ResidentialPageContent {
    return this.residentialHoopsNets;
  }

  private readonly residentialCustomCourts: ResidentialPageContent = {
    header: {
      title: 'Custom Courts – Mini Basketball, MINI Dinking COURT, and More',
      subtitle: 'From the tiniest to the largest of projects',
    },
    hero: {
      title: 'From the tiniest to the largest of projects',
      description:
        'At We Build Pickleball Courts, we have an in-house design team ready to prepare custom proposals and diagrams for any project needs. From mini-courts in residential backyards to custom driveway courts to large 6+ court outdoor/indoor facilities, we can fit the needs of any sport court project. Check out some examples below:',
      image: '/residential/imgi_47_449169480_460889309973909_3517765846346076211_n.webp',
    },
    sections: [
      {
        title: 'What is a mini court?',
        description:
          'A mini court is a smaller version of a traditional sports court, designed to fit in compact spaces while still providing an excellent playing experience. These courts are perfect for residential backyards, driveways, small commercial properties, or indoor spaces. Mini courts can be customized for various sports, including basketball, pickleball, and multi-use recreational activities.',
      },
      {
        title: 'Benefits of a Mini Court',
        items: [
          {
            title: 'Customizable for Different Sports',
            description:
              'A mini court can be tailored for different sports, including Mini Basketball Courts, Mini Pickleball Courts, and Multi-Sport Courts that can accommodate multiple sports like basketball, tennis, and pickleball with adjustable lines and nets.',
          },
          {
            title: 'Lower Cost Compared to Full-Size Courts',
            description:
              'Since mini courts require less material and space, they are often more affordable than full-size installations, making them a great investment for families and property owners.',
          },
        ],
      },
      {
        title: 'LARGE FACILITY PROJECTS',
        description: 'Custom Outdoor Amenities for HOAs, Parks, Cities, and Country Clubs',
        image: '/residential/dji_0102-scaled-1.jpeg',
      },
      {
        title: 'Why Choose Us for Your Large Facility Projects?',
        items: [
          {
            title: 'Expertise in Large-Scale Pickleball Clubs',
            description:
              'We Build Pickleball Courts has a proven track record of building Houston\'s biggest pickleball clubs, ensuring facilities are constructed to meet the highest industry standards. From layout design to court surfacing, we handle every aspect with expertise.',
          },
          {
            title: 'Comprehensive In-House Design Team',
            description:
              'Our in-house design team works closely with clients to create customized sports complexes that maximize space, functionality, and aesthetic appeal. Whether you need multi-court installations, spectator seating, or lighting solutions, we bring your vision to life.',
          },
          {
            title: 'Tailored Solutions for Any Facility',
            description:
              'We understand that different organizations have unique needs. Whether you\'re looking for a private country club sports facility, a public park recreation center, or an HOA-managed pickleball complex, we tailor our designs to suit your specific requirements.',
          },
        ],
      },
      {
        title: 'Get Started on Your Large Facility Project',
        description:
          'Whether you\'re expanding an existing sports facility or developing a brand-new outdoor recreation area, we\'re here to help. Contact us today to discuss your project and discover how we can turn your vision into reality.',
        buttonText: 'Book a Consultation',
        buttonLink: '/contact-us',
      },
    ],
    gallery: [
      '/residential/dji_0102-scaled-1.jpeg',
      '/residential/539422028_17947883397009322_4188429181905877170_n.jpg',
      '/residential/528346716_17945910594009322_3161130766354221433_n.jpg',
    ],
  };

  getResidentialCustomCourts(): ResidentialPageContent {
    return this.residentialCustomCourts;
  }

  private readonly residentialPickleballResurfacing: ResidentialPageContent = {
    header: {
      title: 'Pickleball Court Resurfacing',
      subtitle: 'Courts Built Right the First Time',
    },
    hero: {
      title: 'Pickleball Court Resurfacing',
      description:
        'Pickleball is the fastest-growing sport in America, and its popularity is booming across Texas. That means more people are looking for clean, safe, and professional pickleball courts. We Build Pickleball Courts is an award-winning company that specializes in pickleball court resurfacing and painting. Whether you need to upgrade an old court or turn a tennis court into a new backyard pickleball court, we\'ve got you covered.\n\nWe use high-quality materials and proven techniques to make your court look and play great. Our team focuses on every detail and takes pride in doing the job right. We also offer free estimates so you can get started with confidence.',
      image: '/residential/6e47d76b-0b94-4e11-be8b-e12e9946f10f.webp',
      buttonText: 'Let\'s Bring Your Court Back to Life',
      buttonLink: '/contact-us',
    },
    faqs: [
      {
        question: 'Improved Safety and Performance',
        answer:
          'Resurfacing eliminates cracks and uneven surfaces, creating a consistent playing surface. A smooth court also allows proper application of pickleball court paint, which contributes to ball visibility, proper ball bounce and player safety.',
      },
      {
        question: 'Extended Lifespan of the Court',
        answer:
          'We prevent minor issues from becoming major ones by addressing them early—whether it\'s through crack repair, surface patching, or applying a new coating system. This preventative strategies make the acrylic surfaces require low maintenance',
      },
      {
        question: 'Enhanced Court Visibility',
        answer:
          'Fresh paint and a smooth surface improve line visibility, making it easier for players to see boundaries and play accurately.',
      },
    ],
    sections: [
      {
        title: 'When is pickleball court resurfacing necessary?',
        description:
          'Pickleball court resurfacing becomes necessary when the existing court surface shows signs of wear, such as cracks, uneven areas, or deterioration. It\'s especially essential when converting a tennis court to a pickleball court to meet USA Pickleball regulations and gameplay standards.\n\nOur team at We Build Pickleball Courts will assess the condition of your court and determine if resurfacing is needed to restore its functionality, safety, and aesthetics. We also perform crack repair using top-grade materials to ensure lasting results.\n\nRegular maintenance and timely resurfacing can prevent further damage and significantly extend the lifespan of the entire court. High traffic and exposure to the elements accelerate wear and tear, but proactive maintenance using best practices can save substantial costs in the long run.',
      },
      {
        title: 'The Benefits of Pickleball Court Resurfacing',
        description: 'Pickleball court resurfacing offers numerous benefits, including:',
      },
      {
        title: 'Understanding the Resurfacing Process',
        description:
          'Resurfacing the pickleball court involves several vital steps to ensure a smooth and durable playing surface. Our comprehensive process includes surface preparation, crack repair, application of acrylic resurfacer, and professional court painting.',
      },
      {
        title: 'Ready to Get Started on Your New Court or Existing Court?',
        description:
          'Whether you\'re planning a new court or upgrading an existing one, we\'re here to help. Contact us today to discuss your project and get a free estimate.',
        buttonText: 'Get a Free Quote',
        buttonLink: '/contact-us',
      },
    ],
    gallery: [
      '/residential/328b3413-4ad9-4616-b3e8-6bb70231b035.webp',
      '/residential/2da22cac-d6ed-4fff-a97e-69412bc9d629.webp',
      '/residential/d58e04cd-a0bf-49e9-b957-9a2aeed644bd.webp',
      '/residential/b77dfc3bf92e76210ed1f8ccebcc9bae231cddfa.webp',
      '/residential/6b9fde776db85f61159ae0cda4ede90dcf477f29.webp',
      '/residential/b35c8ab34004849801cf6c044a73996d3f90ecca.webp',
    ],
  };

  getResidentialPickleballResurfacing(): ResidentialPageContent {
    return this.residentialPickleballResurfacing;
  }
}

