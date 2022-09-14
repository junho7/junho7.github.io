/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Junho Park",
  title: "Hi all, I'm Junho",
  subTitle: emoji(
    "A passionate Full Stack Software Engineer loving Data."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1o0Vu38OvBdiEIhil-VkPIu-LmEDoLarv/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/junho7",
  linkedin: "https://www.linkedin.com/in/jpark7/",
  gmail: "junho7@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "EXPLORE EVERY ASPECT OF DATA",
  skills: [
    emoji(
      "⚡ Data Engineering: Spark, Python, SQL"
    ),
    emoji("⚡ Data Science: Scikit-learn, TensorFlow, PyTorch, Keras"),
    emoji(
      "⚡ Data Visualization: D3.js, Tableau"
      )
    ],
    
    /* Make Sure to include correct Font Awesome Classname to view your icon
    https://fontawesome.com/icons?d=gallery */
    
    softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass"
    // },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    // {
    //   skillName: "npm",
    //   fontAwesomeClassname: "fab fa-npm"
    // },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of California, Santa Cruz",
      logo: require("./assets/images/UCSCLogo.png"),
      subHeader: "Certificate of Database and Data Analytics",
      duration: "September 2016 - June 2017",
      // desc: "Machine Learning, Python, R",
      descBullets: [
        "Machine Learning, Python, R",
        // "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "KAIST (Korea Advanced Institute of Science and Technology)",
      logo: require("./assets/images/KAISTLogo.gif"),
      subHeader: "Master of Science in Culture Technology",
      duration: "March 2007 - June 2010",
      desc: "Full scholarship from Korean Government",
      descBullets: ["Video game analytics"]
    },
    {
      schoolName: "Carnegie Mellon University",
      logo: require("./assets/images/cmu-seal-r.png"),
      subHeader: "Visiting scholar at Entertainment Technology Center",
      duration: "March 2008 - June 2008",
      // desc: "Full scholarship from Korean Government",
      descBullets: ["Mixed media game project"]
    },
    {
      schoolName: "Seoul National University",
      logo: require("./assets/images/snu.svg"),
      subHeader: "Bachelor of Business Administration",
      duration: "March 1996 - February 2000",
      // desc: "Full scholarship from Korean Government",
      // descBullets: ["Bachelor of Business Administration"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "80%"
    },
    {
      Stack: "Backend(Node.js, Django, Flask)",
      progressPercentage: "70%"
    },
    {
      Stack: "React.js",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Oxygen",
      companylogo: require("./assets/images/stealth_startup_logo.jpeg"),
      date: "Apr 2022 – Aug 2022",
      desc: "Built SaaS service for DAO on Web3",
      descBullets: [
        "Backend(Django) for a SAML service provider and integrated with Dropbox, Google Drive, and Notion",
        "Developed a API server(Node.js)",
        "Frontend with React.js"
      ]
    },
    {
      role: "Software Engineer(Part-time)",
      company: "Ceeya",
      companylogo: require("./assets/images/ceeya.jpeg"),
      date: "Jun 2021 – Oct 2021",
      desc: "Platform for Solo-preneur",
      descBullets: [
        "Led mobile app development using React Native, TypeScript",
        "Implemented back-end using Node.js, TypeScript on AWS(DynamoDB, Lambda, Cognito, Pinpoint, CloudFront)"
      ]
    },
    {
      role: "Sr. Manager, Game Analytics",
      company: "Topgolf Media",
      companylogo: require("./assets/images/topgolf.jpeg"),
      date: "Mar 2020 – Mar 2022",
      desc: "Data Engineering/Science/Visualization",
      descBullets: [
        "Created and maintaining pipelines using Python and SQL on Snowflake, AWS(Athena), MSSQL Server, and Microsoft Power BI",
        "Producing automated high-level reports, dashboards, visualization, modeling and adhoc analysis"
      ]
    },
    {
      role: "Data Scientist",
      company: "Fox Cub Games",
      companylogo: require("./assets/images/foxcub.jpeg"),
      date: "Jul 2017 – Feb 2020",
      desc: "Data science for Game Development",
      descBullets: [
        "Defined business problems and Supported business decisions by data analytics; Led A/B Test Design, Assessment for in-game economy to optimize revenue",
        "Quantified KPIs; Statistical modeling for Customer Lifetime Value, User segmentation, Revenue prediction, Churn prediction"
      ]
    },
    {
      role: "Head of Business Analysis",
      company: "Riot Games",
      companylogo: require("./assets/images/riotgames.jpeg"),
      date: "Jan 2012 – Nov 2014",
      desc: "Analytics and Monetization",
      descBullets: [
        "Led analysis of key metrics on sales and user behaviors to provide actionable insights for strategic decisions",
        "Spearheaded the creation and execution of in-game store localization strategy for League of Legends; developed localized items and set pricing policies; managed user communications"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  // subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "To Do Webapp",
      projectDesc: "React / vanilla JS",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://junho7.github.io/todo-react/"
        },
        {
          name: "Github",
          url: "https://github.com/junho7/todo-react"
        }
        //  you can add extra buttons here.
      ]
    },
    // {
    //   image: require("./assets/images/nextuLogo.webp"),
    //   projectName: "Nextu",
    //   projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //   footerLink: [
    //     {
    //       name: "Visit Website",
    //       url: "http://nextu.se/"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
