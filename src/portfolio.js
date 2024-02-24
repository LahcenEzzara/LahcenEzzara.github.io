/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Lahcen Ezzara's Portfolio",
  description:
    "Artificial Intelligence & Computer Engineering Student at ENSAM Casablanca, Hassan II University of Casablanca | Python Enthusiast.",
  og: {
    title: "Lahcen Ezzara's Portfolio",
    type: "website",
    url: "https://LahcenEzzara.github.io",
  },
};

//Home Page
const greeting = {
  title: "Lahcen EZZARA",
  logo_name: "LahcenEzzara",
  nickname: "",
  subTitle:
    "Artificial Intelligence & Computer Engineering Student at ENSAM Casablanca, Hassan II University of Casablanca | Python Enthusiast.",
  resumeLink: "/lahcen_ezzara_cv.pdf",
  portfolio_repository:
    "https://github.com/LahcenEzzara/LahcenEzzara.github.io",
  githubProfile: "https://github.com/LahcenEzzara",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/LahcenEzzara",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "Gmail",
    link: "mailto:ezzara.lahcen@gmail.com",
    fontAwesomeIcon: "fas fa-envelope", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/lahcenezzara",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@LahcenEzzara",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com/LahcenEzzara",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Facebook",
    link: "https://web.facebook.com/profile.php?id=61556601060264",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/lahcenezzara",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Software Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Enterprise Software Development",
        "⚡ Web Development",
        "⚡ Mobile Development",
        "⚡ Desktop Development",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },

        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },

        {
          skillName: "Spring",
          fontAwesomeClassname: "simple-icons:spring",
          style: {
            color: "#6DB33F",
          },
        },

        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },

        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Oracle",
          fontAwesomeClassname: "simple-icons:oracle",
          style: {
            color: "#F80000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/LahcenEzzara",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/LahcenEzzara",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/lahcenezzara",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://codeforces.com/profile/LahcenEzzara",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@LahcenEzzara",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/lahcenezzara",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "ENSAM Casablanca",
      subtitle: "State Engineer",
      logo_path: "ensam.svg",
      alt_name: "ENSAM CASA",
      duration: "2022 - 2025",
      descriptions: ["⚡ Artificial Intelligence & Computer Engineering."],
      website_link: "http://www.ensam-casa.ma",
    },
    {
      title: "CPGE - Classes Préparatoires aux Grandes Ecoles",
      subtitle: "Preparatory Classes",
      logo_path: "cpge.svg",
      alt_name: "CPGE",
      duration: "2020 - 2022",
      descriptions: [
        "⚡ Preparatory Classes - Mathematics, Physics and Engineering Sciences (MPSI).",
      ],
      website_link: "https://www.cpge.ac.ma",
    },
    {
      title: "Ministry of National Education (Morocco) - Abatih High School",
      subtitle: "Baccalaureate Certificate",
      logo_path: "mne.svg",
      alt_name: "MNE",
      duration: "2019 - 2020",
      descriptions: [
        "⚡ Mathematics - International Branch of Mathematical Sciences A French Option.",
      ],
      website_link: "https://www.men.gov.ma/en/Pages/Accueil.aspx",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Python for beginners",
      subtitle: "Microsoft",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1W1zmoE7lMx8CJdHTkAY0WK92p-Jd82Bl/view?usp=share_link",
      alt_name: "Microsoft",
      color_code: "#4285F499",
    },
    {
      title: "Learn the basics of the Python Language",
      subtitle: "OpenClassrooms",
      logo_path: "OpenClassrooms.png",
      certificate_link:
        "https://drive.google.com/file/d/1TRbsdtFlcpOzajzUGPP6fmWNrnwNMncU/view?usp=share_link",
      alt_name: "OpenClassrooms",
      color_code: "#4285F499",
    },
    {
      title: "Manage code with Git and GitHub",
      subtitle: "OpenClassrooms",
      logo_path: "OpenClassrooms.png",
      certificate_link:
        "https://drive.google.com/file/d/1pzsxr1kR9BALzmtlKPGrMsA-q7HZTPBr/view?usp=share_link",
      alt_name: "OpenClassrooms",
      color_code: "#4285F499",
    },
    {
      title: "Learn to program in C",
      subtitle: "OpenClassrooms",
      logo_path: "OpenClassrooms.png",
      certificate_link:
        "https://drive.google.com/file/d/1VwKG1k_2evyqFzmTWUFr5iGpY3MYdFVb/view?usp=share_link",
      alt_name: "OpenClassrooms",
      color_code: "#4285F499",
    },
    {
      title: "Get started with Linux",
      subtitle: "OpenClassrooms",
      logo_path: "OpenClassrooms.png",
      certificate_link:
        "https://drive.google.com/file/d/1EmI2SVk2Cav_GDFukCNySf2B-ncwIZdg/view?usp=share_link",
      alt_name: "OpenClassrooms",
      color_code: "#4285F499",
    },
    {
      title: "Set up your front-end environment",
      subtitle: "OpenClassrooms",
      logo_path: "OpenClassrooms.png",
      certificate_link:
        "https://drive.google.com/file/d/1VIJcTte0OrsNp-q3Fb5_NC1wXNL1XNhG/view?usp=share_link",
      alt_name: "OpenClassrooms",
      color_code: "#4285F499",
    },
    {
      title: "Build a Full Website using WordPress",
      subtitle: "Coursera",
      logo_path: "coursera.png",
      certificate_link: "https://coursera.org/verify/8UGGLYKSGLPT",
      alt_name: "Coursera",
      color_code: "#4285F499",
    },
    {
      title: "Create a modern and professional website with WordPress 5",
      subtitle: "OpenClassrooms",
      logo_path: "OpenClassrooms.png",
      certificate_link:
        "https://drive.google.com/file/d/15rFPlpZ_numQCEjo2R--gKAYfmA7utGZ/view?usp=share_link",
      alt_name: "OpenClassrooms",
      color_code: "#4285F499",
    },
    {
      title: "Create a Profile and Network on LinkedIn",
      subtitle: "Coursera",
      logo_path: "coursera.png",
      certificate_link: "https://coursera.org/verify/5LZSN92ZJGDC",
      alt_name: "Coursera",
      color_code: "#4285F499",
    },
    {
      title: "Small Business Marketing Using LinkedIn",
      subtitle: "Coursera",
      logo_path: "coursera.png",
      certificate_link: "https://coursera.org/verify/2W42DWNE54GD",
      alt_name: "Coursera",
      color_code: "#4285F499",
    },
    {
      title: "Create a Facebook Business Page",
      subtitle: "Coursera",
      logo_path: "coursera.png",
      certificate_link: "https://coursera.org/verify/YSR62ZP3G5FY",
      alt_name: "Coursera",
      color_code: "#4285F499",
    },
    {
      title: "How to Create an Instagram Business Account",
      subtitle: "Coursera",
      logo_path: "coursera.png",
      certificate_link: "https://coursera.org/verify/RSHE247B8JE4",
      alt_name: "Coursera",
      color_code: "#4285F499",
    },
    {
      title: "Effective Leadership",
      subtitle: "HP LIFE",
      logo_path: "hp-life.svg",
      certificate_link:
        "https://www.life-global.org/certificate/cd847f1d-9041-4e0f-94b8-6d9956d7af19",
      alt_name: "Coursera",
      color_code: "#4285F499",
    },
    {
      title: "Small Business Skills 101",
      subtitle: "Alison - Empower Yourself",
      logo_path: "Alison.svg",
      certificate_link:
        "https://drive.google.com/file/d/1-sJ1abt-Ks_Kr5ROKvN1g_zyJhyQo8Ix/view?usp=share_link",
      alt_name: "Alison",
      color_code: "#4285F499",
    },
    {
      title: "Build your professional project",
      subtitle: "OpenClassrooms",
      logo_path: "OpenClassrooms.png",
      certificate_link:
        "https://drive.google.com/file/d/1XaHnIKZ5oNVJx5uUcboFrH30hip3s--6/view?usp=share_link",
      alt_name: "OpenClassrooms",
      color_code: "#4285F499",
    },
    {
      title: "Master the fundamentals of Excel",
      subtitle: "OpenClassrooms",
      logo_path: "OpenClassrooms.png",
      certificate_link:
        "https://drive.google.com/file/d/15JYp5zWbB3cZLa1o_puwQteazLOXYCe1/view?usp=share_link",
      alt_name: "OpenClassrooms",
      color_code: "#4285F499",
    },
    {
      title: "Baccalaureate Certificate",
      subtitle: "Ministry of National Education (Morocco)",
      logo_path: "mne.svg",
      certificate_link: "",
      alt_name: "MNE",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description: "",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Head of the Club",
          company: "A&C PowerSkills Club",
          company_url: "https://www.instagram.com/aec.powerskills/",
          logo_path: "aec.jpg",
          duration: "January 2024 - Present",
          location: "CasaBlanca, Morocco",
          description:
            "I am responsible for the management of the club, the organization of events and the supervision of the club's activities.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Software Engineer Intern",
          company: "HE GROUPE",
          company_url: "https://www.linkedin.com/company/he-groupe/",
          logo_path: "hegroupe.png",
          duration: "August 15, 2023 - September 15, 2023",
          location: "Marrakech, Morocco",
          description:
            "I worked on the development of a web application for the management of the company's store.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Python Trainer",
          company: "Python for CPGE",
          company_url: "/",
          logo_path: "Python-for-CPGE.png",
          duration: "February 2023 - Present",
          location: "Online",
          description:
            "I am responsible for the training of students in the use of Python programming language.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Web Projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "1",
      name: "Propagation du Covid-19 : Approche mathématique",
      createdAt: "2022-07-22",
      description:
        "Modéliser l’épidémie de COVID-19 en se basant sur le modèle SIR.\nCalcul et interprétation des paramètres de COVID-19.\nRéalisation d'un Portail de surveillance et de sensibilisation COVID-19 dans un centre CPGE. ",
      url:
        "https://drive.google.com/drive/folders/1VoUEgbHp_sHnLz5MPnlAmonNS1oU0dn9",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "lahcen.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "ENSAM Casablanca, 150 Bd du Nil, Casablanca 20670, Prefecture of Casablanca, Casablanca-Settat, Morocco.",
    locality: "Casablanca",
    country: "Morocco",
    region: "Africa",
    postalCode: "20670",
    streetAddress: "150 Bd du Nil",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/iDYpii4j3mai1zWk9",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
