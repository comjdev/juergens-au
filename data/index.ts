export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Technologies", link: "#technologies" },
    { name: "Contact", link: "#contact" },
];

export const gridItems = [
    {
        id: 1,
        title: "Full Stack Engineering",
        description: "",
        className: "md:col-span-3 md:row-span-4 lg:col-span-3 lg:min-h-[60vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: "/background.jpg",
        spareImg: "",
    },
    {
        id: 2,
        title: "Christoph Jürgens",
        description: "Senior Software Engineer",
        className: "md:col-span-3 md:row-span-2 lg:col-span-2",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
    {
        id: 3,
        title: "My tech stack",
        description: "Web and mobile",
        className: "md:col-span-3 md:row-span-2 lg:col-span-2",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: "Web, Mobile and Cloud",
        description: "13+ years of experience in ",
        className: "md:col-span-3 md:row-span-1 lg:col-span-2",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/grid.svg",
        spareImg: "/b4.svg",
    },
    {
        id: 5,
        title: "Currently building BJJ React Native App",
        description: "The Inside Scoop",
        className: "md:col-span-3 md:row-span-2",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: "/b5.svg",
        spareImg: "/grid.svg",
    },
    {
        id: 6,
        title: "Do you want to start a project together?",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },
];

export const skills = [
    {
        id: 1,
        title: "Frontend Development",
        description: "Building responsive and performant user interfaces with modern frontend technologies.",
        skills: [
            "Angular",
            "React",
            "Next.js",
            "Tailwind CSS",
            "TypeScript",
            "Material UI",
        ],
    },
    {
        id: 2,
        title: "Backend and API Development",
        description: "Creating scalable backend systems and APIs with a focus on performance and reliability.",
        skills: [
            "Node.js",
            "PHP",
            "Nest.js",
            "Express.js",
            "SQL and NoSQL databases",
            "Redis",
        ],
    },
    {
        id: 3,
        title: "Mobile Development",
        description: "Developing cross-platform mobile applications with smooth user experiences.",
        skills: [
            "React Native",
            "Expo",
            "Ionic",
            "Capacitor",
            "RevenueCat"
        ],
    },
    {
        id: 4,
        title: "Testing and DevOps",
        description: "Improving code quality and delivery through testing and automated pipelines.",
        skills: [
            "GitHub Actions",
            "AWS CodePipeline",
            "Jest",
            "React Testing Library",
            "Cypress",
            "Playwright",
            "Vitest",
        ],
    },
    {
        id: 5,
        title: "AI and Tooling",
        description: "Using AI and developer tools to boost productivity and code quality.",
        skills: [
            "Cursor",
            "CodeRabbit",
            "Sentry",
            "GitHub Copilot",
            "OpenAI API",
        ],
    },
    {
        id: 6,
        title: "Hosting and Deployment",
        description: "Deploying and managing applications across modern cloud platforms.",
        skills: [
            "AWS",
            "Vercel",
            "Firebase",
            "Supabase",
            "Heroku",
            "Railway",
        ],
    },
];



export const projects = [
    {
        id: 1,
        title: "Kubota MyAdman",
        des: "Advertisement Management System for Kubota Australia and New Zealand, including image and media management, print collateral creation and custom shop system.",
        img: "/myadman.png",
        iconLists: ["/angular.svg", "/firebase.svg", "/ts.svg", "/material-ui.svg", "/stripe.svg"],
        link: "https://myadman.com.au",
    },
    {
        id: 2,
        title: "Kubota Connect",
        des: "Kubota Connect headless CMS powering six AU and NZ websites with dealer APIs, server-side rendering, scalable architecture, high performance, and strong SEO.",
        img: "/kubota.png",
        iconLists: ["/angular.svg", "/nestjs.svg", "/ts.svg", "/wordpress.svg", "/express.svg", "/aws.svg"],
        link: "https://kubota.com.au",
    },
    {
        id: 3,
        title: "Sleep Maestro Mobile App",
        des: "Sleep Maestro uses hypnosis and calming audio sessions to help you deeply relax, beat insomnia and improve sleep quality with curated soundscapes and mindset resets.",
        img: "/sleep.png",
        iconLists: ["/re.svg", "/firebase.svg", "/ts.svg", "/expo.svg"],
        link: "https://apps.apple.com/au/app/sleep-maestro/id1560045556",
    },
    {
        id: 4,
        title: "Kando Martial Arts",
        des: "High-performance web presence for Kando Martial Arts Knox, optimised for fast loading, strong SEO and local search visibility to boost classes and community engagement.",
        img: "/kando.png",
        iconLists: ["/re.svg", "/astro.svg", "/tail.svg", "/aws.svg", "/gsap.svg"],
        link: "https://d1a2zyku2pp97h.cloudfront.net/",
        // link: "https://knoxmartialarts.com.au",
    },
    {
        id: 5,
        title: "Grounded Marketing",
        des: "Highly animated and engaging web presence for Grounded Marketing, showcasing dynamic visuals, fast interactions, strong SEO, and standout performance to captivate and convert visitors.",
        img: "/grounded.png",
        iconLists: ["/javascript.svg", "/aws.svg", "/gsap.svg"],
        link: "https://grounded360.com.au/",
    },
    {
        id: 6,
        title: "AHS Group",
        des: "Lightning-fast headless SPA for AHS Group featuring server-side rendering, optimal SEO, high engagement, and a CMS with APIs for live data.",
        img: "/ahs-website.png",
        iconLists: ["/angular.svg", "/nestjs.svg", "/ts.svg", "/wordpress.svg", "/aws.svg"],
        link: "https://www.ahsgroup.com.au",
    },
];

export const testimonials = [
    {
        quote:
            "Collaborating with Christoph was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Christoph's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Christoph is the ideal partner.",
        name: "Benjamin Holzner",
        title: "Managing Director of Pearlgolf",
    },
    {
        quote:
            "Christoph delivered a high-performance solution that exceeded our expectations. His technical expertise and attention to detail made the development process smooth and efficient. The final product is both beautiful and functional.",
        name: "John Mull",
        title: "Product Manager at Assyst GmbH",
    },
    {
        quote:
            "Working with Christoph transformed our digital presence. His ability to translate complex requirements into elegant solutions is remarkable. We couldn't be happier with the results.",
        name: "David Martinez",
        title: "CEO of Digital Solutions Inc.",
    },
    {
        quote:
            "Christoph's expertise in modern web technologies and his commitment to quality is unmatched. He delivered our project on time and within budget, with exceptional attention to user experience and performance.",
        name: "Emily Watson",
        title: "Founder of Creative Agency",
    },
    {
        quote:
            "The level of professionalism and technical skill Christoph brings to every project is outstanding. He consistently delivers solutions that are both innovative and practical, making him an invaluable partner.",
        name: "James Thompson",
        title: "CTO of Startup Ventures",
    },
];

export const companies = [
    {
        id: 1,
        name: "assyst",
        img: "/assyst.svg",
    },
    {
        id: 2,
        name: "kubota",
        img: "/kubota.svg",
    },
    {
        id: 3,
        name: "denso",
        img: "/denso.svg",
    },
    {
        id: 4,
        name: "hindsight",
        img: "/hindsight.svg",
    },
    {
        id: 5,
        name: "theapphub",
        img: "/theapphub.svg",

    },

    {
        id: 6,
        name: "ahs",
        img: "/ahs.svg",

    },
    {
        id: 7,
        name: "pearlgolf",
        img: "/pearlgolf.svg",

    },
    {
        id: 8,
        name: "quest",
        img: "/quest.svg",

    },
    {
        id: 9,
        name: "krone",
        img: "/krone.svg",

    },
    {
        id: 10,
        name: "greatplains",
        img: "/greatplains.svg",

    },
    {
        id: 11,
        name: "redheads",
        img: "/redheads.svg",

    },
];

export const workExperience = [
    {
        id: 1,
        title: "Tech Lead & Solutions Architect",
        desc: "Leading development and driving architectural decisions for scalable web products for Kubota Australia and New Zealand.",
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
    {
        id: 2,
        title: "Development Manager",
        desc: "Oversaw frontend and full-stack delivery, mentoring engineers and improving code quality.",
        className: "md:col-span-2",
        thumbnail: "/exp2.svg",
    },
    {
        id: 3,
        title: "Senior Software Developer",
        desc: "Delivered high-impact features across web platforms, focusing on performance and maintainability.",
        className: "md:col-span-2",
        thumbnail: "/exp3.svg",
    },
    {
        id: 4,
        title: "Software Developer",
        desc: "Built robust backend APIs and frontend interfaces, contributing to key product launches and iterations.",
        className: "md:col-span-2",
        thumbnail: "/exp4.svg",
    }
];


export const socialMedia = [
    {
        id: 1,
        img: "/git.svg",
        link: "https://github.com/comjdev",
    },
    {
        id: 2,
        img: "/dev-academy.svg",
        link: "https://dev-academy.com/contributors/christoph-juergens/",
    },
    {
        id: 3,
        img: "/link.svg",
        link: "https://www.linkedin.com/in/christoph-juergens/",
    },
];

// Get email from environment variable
// Supports both NEXT_PUBLIC_EMAIL (for client-side access) and EMAIL (server-side)
const getEmailFromEnv = (): string => {
    const email =
        process.env.NEXT_PUBLIC_EMAIL || process.env.EMAIL || "";
    if (!email && process.env.NODE_ENV === "production") {
        console.warn(
            "Email address not configured. Set NEXT_PUBLIC_EMAIL or EMAIL environment variable.",
        );
    }
    return email;
};

// Convert email to obfuscated parts
// Format: [reversedDomain, reversedUsername]
// For "[email removed]": domain="juergens.au" -> "ua.snegreuj", username="contact" -> "tcatnoc"
const emailToObfuscatedParts = (email: string): [string, string] => {
    const [username, domain] = email.split("@");
    if (!username || !domain) {
        return ["", ""];
    }
    return [
        domain.split("").reverse().join(""),
        username.split("").reverse().join(""),
    ];
};

const emailAddress = getEmailFromEnv();
export const emailAddressParts: [string, string] = emailAddress
    ? emailToObfuscatedParts(emailAddress)
    : (["", ""] as [string, string]);

export { emailAddress };