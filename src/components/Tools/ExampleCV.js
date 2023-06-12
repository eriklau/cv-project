import uniqid from "uniqid";

const ExampleCV = {

    generalInfo: 
    {
        firstName: "JOE",
        lastName: "SCHMOE",
        email: "joeschmoe2@gmail.com",
        phoneNumber: "1352467890",
        gibhub: "https://github.com/jolube",
        linkedin: "https://ca.linkedin.com/in/joe-schmoe-038112257",
    },

    education: [
        {
            id: uniqid(),
            universityName: "HARVARD UNIVERSITY",
            subject: "Business and Information Systems",
            degree: "Bachelor of Liberal Arts",
            from: "2015",
            to: "2019",
        },
        {
            id: uniqid(),
            universityName: "UNIVERSITY OF TORONTO",
            subject: "Computer Science",
            degree: "Masters of Science",
            from: "2019",
            to: "2021",
        },
    ],

    experience: [
        {
            id: uniqid(),
            companyName: "McDonald's",
            jobPosition: "Business Analytics",
            from: "May 2021",
            to: "May 2022",
            jobDescription: "Analyzed weekly reports on net revenue via descriptive modelling",
        },

        {
            id: uniqid(),
            companyName: "Berkshire Hathaway",
            jobPosition: "Customer Service Representative",
            from: "June 2022",
            to: "Present",
            jobDescription: "supported customers by providing helpful information, answering questions, and responding to complaints",
        },
    ],

    projects: [
        {
            id: uniqid(),
            projectName: "THE ALMIGHTY PROJECT",
            skillsUsed: "Python",
            projectDescription: "random project ...",
        },
        {
            id: uniqid(),
            projectName: "ML PROJECT",
            skillsUsed: "Python, numpy, pandas, matplotlib",
            projectDescription: "random project ...",
        },
    ],

    skills: [
        {
            id: uniqid(),
            skillDescription: "Procient at MS Excel",
        },
        {
            id: uniqid(),
            skillDescription: "Amateur Juggler",
        },
    ]
};

export default ExampleCV;