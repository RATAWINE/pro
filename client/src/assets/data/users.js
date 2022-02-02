import Image from '../images/tech/fullstack.jpg'

export const users = [
    {
        id: 'u1',
        name : "Simona Designs",
        username : 'Simona',
        email: "somina@marketplace.com",
        phone: '+233557228597',
        about : "I'm Simona, a Visual and UI designer. I offer graphic design, logo design and UI design services and I also create simple and effective websites (based on Wordpress CMS). My main goal is creating projects with the best aesthetical and emotional touch. I do believe in collaboration and in a continuous exchange with my clients so to make every project unique and utterly memorable.",
        location : "Dansoman - Accra",
        gallery : [Image],
        portfolio : [],
        gig : {
            category : "Graphic & Design",
            subcategory : "Logo Design",
            desc : `I'm focused on the creation of visually compelling identities that will lead to brands having great and immediate impact on their target audience. My aim is to turn your message into attractive, minimalist and effective designs starting from the first and most recognizable element of a brand identity: the logo.
                    With a well designed and appealing logo, your brand presence on the market will be effective and strong as it should be! My creative process is based on a continuous collaboration with the client. I carefully analyze all the needs and requests to build a creative brief to get to the best design result. Design iteration is vital to make your logo and brand stand out.`,
            style: 'Flat/Minimalist',
            fileformat : ['AI', 'JPG', 'PDF','PNG', 'EPS', 'SVG'],
            reviews : [],
            package: [
                {
                    name: "Basic",
                    desc: "2 Concepts to define 1 Final Logo, Vector/Source files, HQ images.",
                    price : 580,
                    delivery: "12",
                    revisions: "2",
                    content : {
                        concept: '2',
                        sourcefile : 'yes',
                        logopng : 'yes',
                        highresolution : 'yes',
                        mockups : 'no',
                        vectorfile : 'yes'
                    }
                },
                {
                    name: "Standard",
                    desc: "3 Concepts to define 1 Final Logo, Vector/Source files, HQ images.",
                    price : 750,
                    delivery: "14",
                    revisions: "2",
                    content : {
                        concept: '3',
                        sourcefile : 'yes',
                        logopng : 'yes',
                        highresolution : 'yes',
                        mockups : 'yes',
                        vectorfile : 'yes'
                    }
                },
                {
                    name: "Premium",
                    desc: "4 Concepts to define 1 Final Logo, Vector/Source files, HQ images.",
                    price : 900,
                    delivery: "15",
                    revisions: "3",
                    content : {
                        concept: '4',
                        sourcefile : 'yes',
                        logopng : 'yes',
                        highresolution : 'yes',
                        mockups : 'yes',
                        vectorfile : 'yes'
                    }
                }
            ],
            faqs : [
                {
                    id : 'q1',
                    ques : 'What do you need to start the project?',
                    ans: `I need all the information that could be useful to know the company and its objectives (e.g.: mission, vision, target group, values, competitors etc...).`,
                },
                {
                    id : 'q2',
                    ques : 'What do you mean with revision?',
                    ans: `A revision is a tweak of a logo design release, which is not to be confused as a brand new design.`,
                },
                {
                    id : 'q3',
                    ques : `Is it possible to discuss and customize the pricing packages based on the client's needs?`,
                    ans: `Sure! As for all the phases of the project, we can also discuss the pricing and I can adapt and revise the packages based on the clients needs.`,
                }
            ]
        },
        seller : {
            active : true,
            level : 2
        },
        createdAt : 'August 2019'

    },

    {
        id: 'u2',
        name: "Patricia Lebsack",
        username : "Karianne",
        phone: '+233557228597',
        email: "Julianne.OConner@kory.org",
        about : "I'm Simona, a Visual and UI designer. I offer graphic design, logo design and UI design services and I also create simple and effective websites (based on Wordpress CMS). My main goal is creating projects with the best aesthetical and emotional touch. I do believe in collaboration and in a continuous exchange with my clients so to make every project unique and utterly memorable.",
        location : "North Kaneshie - Accra",
        gallery : [Image],
        portfolio : [],
        gig : {
            category : "Graphic & Design",
            subcategory : "Book Design",
            desc : `I'm focused on the creation of visually compelling identities that will lead to brands having great and immediate impact on their target audience. My aim is to turn your message into attractive, minimalist and effective designs starting from the first and most recognizable element of a brand identity: the logo.
                    With a well designed and appealing logo, your brand presence on the market will be effective and strong as it should be! My creative process is based on a continuous collaboration with the client. I carefully analyze all the needs and requests to build a creative brief to get to the best design result. Design iteration is vital to make your logo and brand stand out.`,
            style: 'Flat/Minimalist',
            fileformat : ['AI', 'JPG', 'PDF','PNG', 'EPS', 'SVG'],
            reviews : [],
            package: [
                {
                    name: "Basic",
                    desc: "2 Concepts to define 1 Final Logo, Vector/Source files, HQ images.",
                    price : 220,
                    delivery: "12",
                    revisions: "2",
                    content : {
                        concept: '2',
                        sourcefile : 'yes',
                        logopng : 'yes',
                        highresolution : 'yes',
                        mockups : 'no',
                        vectorfile : 'yes'
                    }
                },
                {
                    name: "Standard",
                    desc: "3 Concepts to define 1 Final Logo, Vector/Source files, HQ images.",
                    price : 500,
                    delivery: "14",
                    revisions: "2",
                    content : {
                        concept: '3',
                        sourcefile : 'yes',
                        logopng : 'yes',
                        highresolution : 'yes',
                        mockups : 'yes',
                        vectorfile : 'yes'
                    }
                },
                {
                    name: "Premium",
                    desc: "4 Concepts to define 1 Final Logo, Vector/Source files, HQ images.",
                    price : 650,
                    delivery: "15",
                    revisions: "3",
                    content : {
                        concept: '4',
                        sourcefile : 'yes',
                        logopng : 'yes',
                        highresolution : 'yes',
                        mockups : 'yes',
                        vectorfile : 'yes'
                    }
                }
            ],
            faqs : [
                {
                    id : 'q1',
                    ques : 'What do you need to start the project?',
                    ans: `I need all the information that could be useful to know the company and its objectives (e.g.: mission, vision, target group, values, competitors etc...).`,
                },
                {
                    id : 'q2',
                    ques : 'What do you mean with revision?',
                    ans: `A revision is a tweak of a logo design release, which is not to be confused as a brand new design.`,
                },
                {
                    id : 'q3',
                    ques : `Is it possible to discuss and customize the pricing packages based on the client's needs?`,
                    ans: `Sure! As for all the phases of the project, we can also discuss the pricing and I can adapt and revise the packages based on the clients needs.`,
                }
            ]
        },
        seller : {
            active : true,
            level : 2
        },
        createdAt : 'March 2021'

    },

    {
        id: 'u3',
        name: "Clementine Bauch",
        username : "Karianne",
        phone: '+233557228597',
        email: "Nathan@yesenia.net",
        about : "I'm Simona, a Visual and UI designer. I offer graphic design, logo design and UI design services and I also create simple and effective websites (based on Wordpress CMS). My main goal is creating projects with the best aesthetical and emotional touch. I do believe in collaboration and in a continuous exchange with my clients so to make every project unique and utterly memorable.",
        location : "Osu - Accra",
        gallery : [Image],
        portfolio : [],
        gig : {
            category : "Graphic & Design",
            subcategory : "Illustration",
            desc : `I'm focused on the creation of visually compelling identities that will lead to brands having great and immediate impact on their target audience. My aim is to turn your message into attractive, minimalist and effective designs starting from the first and most recognizable element of a brand identity: the logo.
                    With a well designed and appealing logo, your brand presence on the market will be effective and strong as it should be! My creative process is based on a continuous collaboration with the client. I carefully analyze all the needs and requests to build a creative brief to get to the best design result. Design iteration is vital to make your logo and brand stand out.`,
            style: 'Flat/Minimalist',
            fileformat : ['AI', 'JPG', 'PDF','PNG', 'EPS', 'SVG'],
            reviews : [],
            package: [
                {
                    name: "Basic",
                    desc: "2 Concepts to define 1 Final Logo, Vector/Source files, HQ images.",
                    price : 80,
                    delivery: "12",
                    revisions: "2",
                    content : {
                        concept: '2',
                        sourcefile : 'yes',
                        logopng : 'yes',
                        highresolution : 'yes',
                        mockups : 'no',
                        vectorfile : 'yes'
                    }
                },
                {
                    name: "Standard",
                    desc: "3 Concepts to define 1 Final Logo, Vector/Source files, HQ images.",
                    price : 500,
                    delivery: "14",
                    revisions: "2",
                    content : {
                        concept: '3',
                        sourcefile : 'yes',
                        logopng : 'yes',
                        highresolution : 'yes',
                        mockups : 'yes',
                        vectorfile : 'yes'
                    }
                },
                {
                    name: "Premium",
                    desc: "4 Concepts to define 1 Final Logo, Vector/Source files, HQ images.",
                    price : 650,
                    delivery: "15",
                    revisions: "3",
                    content : {
                        concept: '4',
                        sourcefile : 'yes',
                        logopng : 'yes',
                        highresolution : 'yes',
                        mockups : 'yes',
                        vectorfile : 'yes'
                    }
                }
            ],
            faqs : [
                {
                    id : 'q1',
                    ques : 'What do you need to start the project?',
                    ans: `I need all the information that could be useful to know the company and its objectives (e.g.: mission, vision, target group, values, competitors etc...).`,
                },
                {
                    id : 'q2',
                    ques : 'What do you mean with revision?',
                    ans: `A revision is a tweak of a logo design release, which is not to be confused as a brand new design.`,
                },
                {
                    id : 'q3',
                    ques : `Is it possible to discuss and customize the pricing packages based on the client's needs?`,
                    ans: `Sure! As for all the phases of the project, we can also discuss the pricing and I can adapt and revise the packages based on the clients needs.`,
                }
            ]
        },
        seller : {
            active : false,
            level : 0
        },
        createdAt : 'March 2021'

    },
    {
        id: 'u4',
        name: "Jeff Bansah",
        username : "Jeff",
        phone: '+233557228597',
        email: "jeff@focusppc.com",
        about : "I'm Jeff, a web designer and . I offer graphic design, logo design and UI design services and I also create simple and effective websites (based on Wordpress CMS). My main goal is creating projects with the best aesthetical and emotional touch. I do believe in collaboration and in a continuous exchange with my clients so to make every project unique and utterly memorable.",
        location : "Pokuase - Accra",
        gallery : [Image],
        portfolio : [],
        gig : {
            category : "Graphic & Design",
            subcategory : "Web Designer",
            desc : `I'm focused on the creation of visually compelling identities that will lead to brands having great and immediate impact on their target audience. My aim is to turn your message into attractive, minimalist and effective designs starting from the first and most recognizable element of a brand identity: the logo.
                    With a well designed and appealing logo, your brand presence on the market will be effective and strong as it should be! My creative process is based on a continuous collaboration with the client. I carefully analyze all the needs and requests to build a creative brief to get to the best design result. Design iteration is vital to make your logo and brand stand out.`,
            style: 'Flat/Minimalist',
            fileformat : ['AI', 'JPG', 'PDF','PNG', 'EPS', 'SVG'],
            reviews : [],
            package: [
                {
                    name: "Basic",
                    desc: "2 Concepts to define 1 Final Logo, Vector/Source files, HQ images.",
                    price : 80,
                    delivery: "12",
                    revisions: "2",
                    content : {
                        concept: '2',
                        sourcefile : 'yes',
                        logopng : 'yes',
                        highresolution : 'yes',
                        mockups : 'no',
                        vectorfile : 'yes'
                    }
                },
                {
                    name: "Standard",
                    desc: "3 Concepts to define 1 Final Logo, Vector/Source files, HQ images.",
                    price : 500,
                    delivery: "14",
                    revisions: "2",
                    content : {
                        concept: '3',
                        sourcefile : 'yes',
                        logopng : 'yes',
                        highresolution : 'yes',
                        mockups : 'yes',
                        vectorfile : 'yes'
                    }
                },
                {
                    name: "Premium",
                    desc: "4 Concepts to define 1 Final Logo, Vector/Source files, HQ images.",
                    price : 650,
                    delivery: "15",
                    revisions: "3",
                    content : {
                        concept: '4',
                        sourcefile : 'yes',
                        logopng : 'yes',
                        highresolution : 'yes',
                        mockups : 'yes',
                        vectorfile : 'yes'
                    }
                }
            ],
            faqs : [
                {
                    id : 'q1',
                    ques : 'What do you need to start the project?',
                    ans: `I need all the information that could be useful to know the company and its objectives (e.g.: mission, vision, target group, values, competitors etc...).`,
                },
                {
                    id : 'q2',
                    ques : 'What do you mean with revision?',
                    ans: `A revision is a tweak of a logo design release, which is not to be confused as a brand new design.`,
                },
                {
                    id : 'q3',
                    ques : `Is it possible to discuss and customize the pricing packages based on the client's needs?`,
                    ans: `Sure! As for all the phases of the project, we can also discuss the pricing and I can adapt and revise the packages based on the clients needs.`,
                }
            ]
        },
        seller : {
            active : false,
            level : 0
        },
        createdAt : 'March 2021'

    },
    {
        id: 'u5',
        name: "Augustine Focus",
        username : "Augustine",
        phone: '+233557228597',
        email: "augustine@focusppc.com",
        about : "I'm Augustine, a web designer. I offer Frontend design, logo design and UI design services and I also create simple and effective websites (based on Wordpress CMS). My main goal is creating projects with the best aesthetical and emotional touch. I do believe in collaboration and in a continuous exchange with my clients so to make every project unique and utterly memorable.",
        location : "Circle - Accra",
        gallery : [Image],
        portfolio : [],
        gig : {
            category : "Graphic & Design",
            subcategory : "Web Designer",
            desc : `I'm focused on the creation of visually compelling identities that will lead to brands having great and immediate impact on their target audience. My aim is to turn your message into attractive, minimalist and effective designs starting from the first and most recognizable element of a brand identity: the logo.
                    With a well designed and appealing logo, your brand presence on the market will be effective and strong as it should be! My creative process is based on a continuous collaboration with the client. I carefully analyze all the needs and requests to build a creative brief to get to the best design result. Design iteration is vital to make your logo and brand stand out.`,
            style: 'Flat/Minimalist',
            fileformat : ['AI', 'JPG', 'PDF','PNG', 'EPS', 'SVG'],
            reviews : [],
            package: [
                {
                    name: "Basic",
                    desc: "2 Concepts to define 1 Final Logo, Vector/Source files, HQ images.",
                    price : 1800,
                    delivery: "12",
                    revisions: "2",
                    content : {
                        concept: '2',
                        sourcefile : 'yes',
                        logopng : 'yes',
                        highresolution : 'yes',
                        mockups : 'no',
                        vectorfile : 'yes'
                    }
                },
                {
                    name: "Standard",
                    desc: "3 Concepts to define 1 Final Logo, Vector/Source files, HQ images.",
                    price : 2500,
                    delivery: "14",
                    revisions: "2",
                    content : {
                        concept: '3',
                        sourcefile : 'yes',
                        logopng : 'yes',
                        highresolution : 'yes',
                        mockups : 'yes',
                        vectorfile : 'yes'
                    }
                },
                {
                    name: "Premium",
                    desc: "4 Concepts to define 1 Final Logo, Vector/Source files, HQ images.",
                    price : 4650,
                    delivery: "15",
                    revisions: "3",
                    content : {
                        concept: '4',
                        sourcefile : 'yes',
                        logopng : 'yes',
                        highresolution : 'yes',
                        mockups : 'yes',
                        vectorfile : 'yes'
                    }
                }
            ],
            faqs : [
                {
                    id : 'q1',
                    ques : 'What do you need to start the project?',
                    ans: `I need all the information that could be useful to know the company and its objectives (e.g.: mission, vision, target group, values, competitors etc...).`,
                },
                {
                    id : 'q2',
                    ques : 'What do you mean with revision?',
                    ans: `A revision is a tweak of a logo design release, which is not to be confused as a brand new design.`,
                },
                {
                    id : 'q3',
                    ques : `Is it possible to discuss and customize the pricing packages based on the client's needs?`,
                    ans: `Sure! As for all the phases of the project, we can also discuss the pricing and I can adapt and revise the packages based on the clients needs.`,
                }
            ]
        },
        seller : {
            active : false,
            level : 0
        },
        createdAt : 'March 2021'

    },
    {
        id: 'u6',
        name: "ElHadj Focus",
        username : "Elhadj",
        phone: '+233557228597',
        email: "elhadj@focusppc.com",
        about : "I'm Elhadj, a web designer. I offer Frontend design, logo design and UI design services and I also create simple and effective websites (based on Wordpress CMS). My main goal is creating projects with the best aesthetical and emotional touch. I do believe in collaboration and in a continuous exchange with my clients so to make every project unique and utterly memorable.",
        location : "Circle - Accra",
        gallery : [Image],
        portfolio : [],
        gig : {
            category : "Graphic & Design",
            subcategory : "Online Strategy",
            desc : `I'm focused on the creation of visually compelling identities that will lead to brands having great and immediate impact on their target audience. My aim is to turn your message into attractive, minimalist and effective designs starting from the first and most recognizable element of a brand identity: the logo.
                    With a well designed and appealing logo, your brand presence on the market will be effective and strong as it should be! My creative process is based on a continuous collaboration with the client. I carefully analyze all the needs and requests to build a creative brief to get to the best design result. Design iteration is vital to make your logo and brand stand out.`,
            style: 'Flat/Minimalist',
            fileformat : ['AI', 'JPG', 'PDF','PNG', 'EPS', 'SVG'],
            reviews : [],
            package: [
                {
                    name: "Basic",
                    desc: "2 Concepts to define 1 Final Logo, Vector/Source files, HQ images.",
                    price : 880,
                    delivery: "12",
                    revisions: "2",
                    content : {
                        concept: '2',
                        sourcefile : 'yes',
                        logopng : 'yes',
                        highresolution : 'yes',
                        mockups : 'no',
                        vectorfile : 'yes'
                    }
                },
                {
                    name: "Standard",
                    desc: "3 Concepts to define 1 Final Logo, Vector/Source files, HQ images.",
                    price : 1500,
                    delivery: "14",
                    revisions: "2",
                    content : {
                        concept: '3',
                        sourcefile : 'yes',
                        logopng : 'yes',
                        highresolution : 'yes',
                        mockups : 'yes',
                        vectorfile : 'yes'
                    }
                },
                {
                    name: "Premium",
                    desc: "4 Concepts to define 1 Final Logo, Vector/Source files, HQ images.",
                    price : 2650,
                    delivery: "15",
                    revisions: "3",
                    content : {
                        concept: '4',
                        sourcefile : 'yes',
                        logopng : 'yes',
                        highresolution : 'yes',
                        mockups : 'yes',
                        vectorfile : 'yes'
                    }
                }
            ],
            faqs : [
                {
                    id : 'q1',
                    ques : 'What do you need to start the project?',
                    ans: `I need all the information that could be useful to know the company and its objectives (e.g.: mission, vision, target group, values, competitors etc...).`,
                },
                {
                    id : 'q2',
                    ques : 'What do you mean with revision?',
                    ans: `A revision is a tweak of a logo design release, which is not to be confused as a brand new design.`,
                },
                {
                    id : 'q3',
                    ques : `Is it possible to discuss and customize the pricing packages based on the client's needs?`,
                    ans: `Sure! As for all the phases of the project, we can also discuss the pricing and I can adapt and revise the packages based on the clients needs.`,
                }
            ]
        },
        seller : {
            active : true,
            level : 0
        },
        createdAt : 'March 2021'

    },
    {
        id: 'u7',
        name: "Jeremiah Mills",
        username : "Jeremiah",
        phone: '+233557228597',
        email: "jeremiah@focusppc.com",
        about : "I'm Jeremiah, a web developer. I offer Frontend & Backend design, logo design and UI design services and I also create simple and effective websites (based on Wordpress CMS). My main goal is creating projects with the best aesthetical and emotional touch. I do believe in collaboration and in a continuous exchange with my clients so to make every project unique and utterly memorable.",
        location : "Teshie - Accra",
        gallery : [Image],
        portfolio : [],
        gig : {
            category : "Graphic & Design",
            subcategory : "Web Programming",
            desc : `I'm focused on the creation of visually compelling identities that will lead to brands having great and immediate impact on their target audience. My aim is to turn your message into attractive, minimalist and effective designs starting from the first and most recognizable element of a brand identity: the logo.
                    With a well designed and appealing logo, your brand presence on the market will be effective and strong as it should be! My creative process is based on a continuous collaboration with the client. I carefully analyze all the needs and requests to build a creative brief to get to the best design result. Design iteration is vital to make your logo and brand stand out.`,
            style: 'Flat/Minimalist',
            fileformat : ['AI', 'JPG', 'PDF','PNG', 'EPS', 'SVG'],
            reviews : [],
            package: [
                {
                    name: "Basic",
                    desc: "2 Concepts to define 1 Final Logo, Vector/Source files, HQ images.",
                    price : 2800,
                    delivery: "12",
                    revisions: "2",
                    content : {
                        concept: '2',
                        sourcefile : 'yes',
                        logopng : 'yes',
                        highresolution : 'yes',
                        mockups : 'no',
                        vectorfile : 'yes'
                    }
                },
                {
                    name: "Standard",
                    desc: "3 Concepts to define 1 Final Logo, Vector/Source files, HQ images.",
                    price : 3500,
                    delivery: "14",
                    revisions: "2",
                    content : {
                        concept: '3',
                        sourcefile : 'yes',
                        logopng : 'yes',
                        highresolution : 'yes',
                        mockups : 'yes',
                        vectorfile : 'yes'
                    }
                },
                {
                    name: "Premium",
                    desc: "4 Concepts to define 1 Final Logo, Vector/Source files, HQ images.",
                    price : 4550,
                    delivery: "15",
                    revisions: "3",
                    content : {
                        concept: '4',
                        sourcefile : 'yes',
                        logopng : 'yes',
                        highresolution : 'yes',
                        mockups : 'yes',
                        vectorfile : 'yes'
                    }
                }
            ],
            faqs : [
                {
                    id : 'q1',
                    ques : 'What do you need to start the project?',
                    ans: `I need all the information that could be useful to know the company and its objectives (e.g.: mission, vision, target group, values, competitors etc...).`,
                },
                {
                    id : 'q2',
                    ques : 'What do you mean with revision?',
                    ans: `A revision is a tweak of a logo design release, which is not to be confused as a brand new design.`,
                },
                {
                    id : 'q3',
                    ques : `Is it possible to discuss and customize the pricing packages based on the client's needs?`,
                    ans: `Sure! As for all the phases of the project, we can also discuss the pricing and I can adapt and revise the packages based on the clients needs.`,
                }
            ]
        },
        seller : {
            active : true,
            level : 0
        },
        createdAt : 'March 2021'

    },
    {
        id: 'u8',
        name: "Ike Addo",
        username : "Ike",
        phone: '+233557228597',
        email: "ike@focusppc.com",
        about : "I'm Ike, a Content Strategist. I offer Frontend & Backend design, logo design and UI design services and I also create simple and effective websites (based on Wordpress CMS). My main goal is creating projects with the best aesthetical and emotional touch. I do believe in collaboration and in a continuous exchange with my clients so to make every project unique and utterly memorable.",
        location : "Teshie - Accra",
        gallery : [Image],
        portfolio : [],
        gig : {
            category : "Graphic & Design",
            subcategory : "Content Strategy",
            desc : `I'm focused on the creation of visually compelling identities that will lead to brands having great and immediate impact on their target audience. My aim is to turn your message into attractive, minimalist and effective designs starting from the first and most recognizable element of a brand identity: the logo.
                    With a well designed and appealing logo, your brand presence on the market will be effective and strong as it should be! My creative process is based on a continuous collaboration with the client. I carefully analyze all the needs and requests to build a creative brief to get to the best design result. Design iteration is vital to make your logo and brand stand out.`,
            style: 'Flat/Minimalist',
            fileformat : ['AI', 'JPG', 'PDF','PNG', 'EPS', 'SVG'],
            reviews : [],
            package: [
                {
                    name: "Basic",
                    desc: "2 Concepts to define 1 Final Logo, Vector/Source files, HQ images.",
                    price : 760,
                    delivery: "12",
                    revisions: "2",
                    content : {
                        concept: '2',
                        sourcefile : 'yes',
                        logopng : 'yes',
                        highresolution : 'yes',
                        mockups : 'no',
                        vectorfile : 'yes'
                    }
                },
                {
                    name: "Standard",
                    desc: "3 Concepts to define 1 Final Logo, Vector/Source files, HQ images.",
                    price : 4400,
                    delivery: "14",
                    revisions: "2",
                    content : {
                        concept: '3',
                        sourcefile : 'yes',
                        logopng : 'yes',
                        highresolution : 'yes',
                        mockups : 'yes',
                        vectorfile : 'yes'
                    }
                },
                {
                    name: "Premium",
                    desc: "4 Concepts to define 1 Final Logo, Vector/Source files, HQ images.",
                    price : 6050,
                    delivery: "15",
                    revisions: "3",
                    content : {
                        concept: '4',
                        sourcefile : 'yes',
                        logopng : 'yes',
                        highresolution : 'yes',
                        mockups : 'yes',
                        vectorfile : 'yes'
                    }
                }
            ],
            faqs : [
                {
                    id : 'q1',
                    ques : 'What do you need to start the project?',
                    ans: `I need all the information that could be useful to know the company and its objectives (e.g.: mission, vision, target group, values, competitors etc...).`,
                },
                {
                    id : 'q2',
                    ques : 'What do you mean with revision?',
                    ans: `A revision is a tweak of a logo design release, which is not to be confused as a brand new design.`,
                },
                {
                    id : 'q3',
                    ques : `Is it possible to discuss and customize the pricing packages based on the client's needs?`,
                    ans: `Sure! As for all the phases of the project, we can also discuss the pricing and I can adapt and revise the packages based on the clients needs.`,
                }
            ]
        },
        seller : {
            active : true,
            level : 0
        },
        createdAt : 'March 2021'

    },
    {
        id: 'u10',
        name: "Andrew A",
        username : "Andrew",
        phone: '+233557228597',
        email: "andrew@focusppc.com",
        about : "I'm Ike, a Graphic Designer. I offer beautiful design, logo design and UI design services and I also create simple and effective websites (based on Wordpress CMS). My main goal is creating projects with the best aesthetical and emotional touch. I do believe in collaboration and in a continuous exchange with my clients so to make every project unique and utterly memorable.",
        location : "Ashaiman - Tema",
        gallery : [Image],
        portfolio : [],
        gig : {
            category : "Graphic & Design",
            subcategory : "Logo Design",
            desc : `I'm focused on the creation of visually compelling identities that will lead to brands having great and immediate impact on their target audience. My aim is to turn your message into attractive, minimalist and effective designs starting from the first and most recognizable element of a brand identity: the logo.
                    With a well designed and appealing logo, your brand presence on the market will be effective and strong as it should be! My creative process is based on a continuous collaboration with the client. I carefully analyze all the needs and requests to build a creative brief to get to the best design result. Design iteration is vital to make your logo and brand stand out.`,
            style: 'Flat/Minimalist',
            fileformat : ['AI', 'JPG', 'PDF','PNG', 'EPS', 'SVG'],
            reviews : [],
            package: [
                {
                    name: "Basic",
                    desc: "2 Concepts to define 1 Final Logo, Vector/Source files, HQ images.",
                    price : 80,
                    delivery: "12",
                    revisions: "2",
                    content : {
                        concept: '2',
                        sourcefile : 'yes',
                        logopng : 'yes',
                        highresolution : 'yes',
                        mockups : 'no',
                        vectorfile : 'yes'
                    }
                },
                {
                    name: "Standard",
                    desc: "3 Concepts to define 1 Final Logo, Vector/Source files, HQ images.",
                    price : 500,
                    delivery: "14",
                    revisions: "2",
                    content : {
                        concept: '3',
                        sourcefile : 'yes',
                        logopng : 'yes',
                        highresolution : 'yes',
                        mockups : 'yes',
                        vectorfile : 'yes'
                    }
                },
                {
                    name: "Premium",
                    desc: "4 Concepts to define 1 Final Logo, Vector/Source files, HQ images.",
                    price : 650,
                    delivery: "15",
                    revisions: "3",
                    content : {
                        concept: '4',
                        sourcefile : 'yes',
                        logopng : 'yes',
                        highresolution : 'yes',
                        mockups : 'yes',
                        vectorfile : 'yes'
                    }
                }
            ],
            faqs : [
                {
                    id : 'q1',
                    ques : 'What do you need to start the project?',
                    ans: `I need all the information that could be useful to know the company and its objectives (e.g.: mission, vision, target group, values, competitors etc...).`,
                },
                {
                    id : 'q2',
                    ques : 'What do you mean with revision?',
                    ans: `A revision is a tweak of a logo design release, which is not to be confused as a brand new design.`,
                },
                {
                    id : 'q3',
                    ques : `Is it possible to discuss and customize the pricing packages based on the client's needs?`,
                    ans: `Sure! As for all the phases of the project, we can also discuss the pricing and I can adapt and revise the packages based on the clients needs.`,
                }
            ]
        },
        seller : {
            active : true,
            level : 3
        },
        createdAt : 'March 2021'

    },
    {
        id: 'u10',
        name: "Richard A",
        username : "Richard",
        phone: '+233557228597',
        email: "richard@focusppc.com",
        about : "I'm Ike, a Graphic Designer. I offer beautiful design, logo design and UI design services and I also create simple and effective websites (based on Wordpress CMS). My main goal is creating projects with the best aesthetical and emotional touch. I do believe in collaboration and in a continuous exchange with my clients so to make every project unique and utterly memorable.",
        location : "Ashaiman - Tema",
        gallery : [Image, Image],
        portfolio : [],
        gig : {
            category : "Graphic & Design",
            subcategory : "Logo Design",
            desc : `I'm focused on the creation of visually compelling identities that will lead to brands having great and immediate impact on their target audience. My aim is to turn your message into attractive, minimalist and effective designs starting from the first and most recognizable element of a brand identity: the logo.
                    With a well designed and appealing logo, your brand presence on the market will be effective and strong as it should be! My creative process is based on a continuous collaboration with the client. I carefully analyze all the needs and requests to build a creative brief to get to the best design result. Design iteration is vital to make your logo and brand stand out.`,
            style: 'Flat/Minimalist',
            fileformat : ['AI', 'JPG', 'PDF','PNG', 'EPS', 'SVG'],
            reviews : [],
            package: [
                {
                    name: "Basic",
                    desc: "2 Concepts to define 1 Final Logo, Vector/Source files, HQ images.",
                    price : 80,
                    delivery: "12",
                    revisions: "2",
                    content : {
                        concept: '2',
                        sourcefile : 'yes',
                        logopng : 'yes',
                        highresolution : 'yes',
                        mockups : 'no',
                        vectorfile : 'yes'
                    }
                },
                {
                    name: "Standard",
                    desc: "3 Concepts to define 1 Final Logo, Vector/Source files, HQ images.",
                    price : 500,
                    delivery: "14",
                    revisions: "2",
                    content : {
                        concept: '3',
                        sourcefile : 'yes',
                        logopng : 'yes',
                        highresolution : 'yes',
                        mockups : 'yes',
                        vectorfile : 'yes'
                    }
                },
                {
                    name: "Premium",
                    desc: "4 Concepts to define 1 Final Logo, Vector/Source files, HQ images.",
                    price : 650,
                    delivery: "15",
                    revisions: "3",
                    content : {
                        concept: '4',
                        sourcefile : 'yes',
                        logopng : 'yes',
                        highresolution : 'yes',
                        mockups : 'yes',
                        vectorfile : 'yes'
                    }
                }
            ],
            faqs : [
                {
                    id : 'q1',
                    ques : 'What do you need to start the project?',
                    ans: `I need all the information that could be useful to know the company and its objectives (e.g.: mission, vision, target group, values, competitors etc...).`,
                },
                {
                    id : 'q2',
                    ques : 'What do you mean with revision?',
                    ans: `A revision is a tweak of a logo design release, which is not to be confused as a brand new design.`,
                },
                {
                    id : 'q3',
                    ques : `Is it possible to discuss and customize the pricing packages based on the client's needs?`,
                    ans: `Sure! As for all the phases of the project, we can also discuss the pricing and I can adapt and revise the packages based on the clients needs.`,
                }
            ]
        },
        seller : {
            active : true,
            level : 3
        },
        createdAt : 'March 2021'

    }
]