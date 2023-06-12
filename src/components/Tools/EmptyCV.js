import uniqid from "uniqid";

const EmptyCV = {

    generalInfo: 
    {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        gibhub: "",
        linkedin: "",
    },

    education: [
        {
            id: uniqid(),
            universityName: "",
            subject: "",
            degree: "",
            from: "",
            to: "",
        },
    ],

    experience: [
        {
            id: uniqid(),
            companyName: "",
            jobPosition: "",
            from: "",
            to: "",
            jobDescription: "",
        },
    ],

    projects: [
        {
            id: uniqid(),
            projectName: "",
            skillsUsed: "",
            projectDescription: "",
        },
    ],

    skills: [
        {
            id: uniqid(),
            skillDescription: "",
        },
    ]
};

export default EmptyCV;