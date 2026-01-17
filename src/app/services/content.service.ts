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
}

