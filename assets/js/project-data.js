/* ========================================
   PORTFOLIO - PROJECT DATA
   Project information and metadata
   ======================================== */

// ========================================
// PROJECTS DATA STRUCTURE
// ========================================

const projectsData = [
    {
        id: 1,
        title: 'Silent Drop-Off',
        category: 'UX Case Study',
        description: 'Reducing Commuter Anxiety Through UX',
        slug: 'silent-drop-off',
        image: 'assets/images/projects/silent-drop-off.jpg',
        thumbnail: 'assets/images/projects/silent-drop-off-thumb.jpg',
        duration: '8 weeks',
        tools: ['Figma', 'FigJam', 'Maze'],
        tags: ['UX Research', 'Wireframing', 'Mobile App', 'User Testing'],
        featured: true,
        overview: 'A mobile application designed to reduce anxiety for commuters when dropping off passengers, providing real-time tracking and seamless communication.',
        problem: 'Commuters experience anxiety during drop-off situations due to poor communication, timing uncertainty, and safety concerns.',
        challenge: 'Design a solution that addresses the emotional and practical challenges of the drop-off experience.',
        solution: 'Developed a user-centric app with real-time tracking, predictive arrival times, and in-app communication features.',
        impact: '40% reduction in user anxiety, 85% user satisfaction rate',
        link: 'projects/silent-drop-off.html',
        caseStudyLink: '/projects/silent-drop-off.html'
    },
    {
        id: 2,
        title: 'E-Wallet Error Recovery',
        category: 'UI/UX Design',
        description: 'Error Recovery UX',
        slug: 'ewallet-error',
        image: 'assets/images/projects/ewallet-error.jpg',
        thumbnail: 'assets/images/projects/ewallet-error-thumb.jpg',
        duration: '4 weeks',
        tools: ['Figma', 'FigJam', 'Protopie'],
        tags: ['Error States', 'User Flow', 'Financial App', 'Micro-interactions'],
        featured: true,
        overview: 'Redesigned error handling for a financial application, transforming frustrating error messages into helpful, contextual guidance.',
        problem: 'Users struggled with cryptic error messages during payment transactions, leading to confusion and abandonment.',
        challenge: 'Create error states that are helpful, clear, and guide users toward successful resolution.',
        solution: 'Implemented contextual error messages, clear next steps, and visual indicators to help users recover from errors.',
        impact: '35% reduction in support tickets, 92% error recovery rate',
        link: 'projects/ewallet-error.html',
        caseStudyLink: '/projects/ewallet-error.html'
    },
    {
        id: 3,
        title: 'FaelTwist',
        category: 'Web Design',
        description: 'Landing Page Design',
        slug: 'faeltwist',
        image: 'assets/images/projects/faeltwist.jpg',
        thumbnail: 'assets/images/projects/faeltwist-thumb.jpg',
        duration: '6 weeks',
        tools: ['Figma', 'Adobe XD', 'Webflow'],
        tags: ['Landing Page', 'Web Design', 'Conversion Focused', 'Animation'],
        featured: true,
        overview: 'A conversion-optimized landing page for a creative agency, combining stunning visuals with strategic copywriting.',
        problem: 'Agency needed a landing page to attract clients and showcase their creative work effectively.',
        challenge: 'Design a landing page that stands out in a competitive market while driving conversions.',
        solution: 'Created an interactive, visually stunning landing page with clear CTAs and portfolio showcase.',
        impact: '200% increase in qualified leads, 3.2% conversion rate',
        link: 'projects/faeltwist.html',
        caseStudyLink: '/projects/faeltwist.html'
    },
    {
        id: 4,
        title: 'InDrive Redesign',
        category: 'Product Design',
        description: 'End-to-end Product Design',
        slug: 'indrive',
        image: 'assets/images/projects/indrive.jpg',
        thumbnail: 'assets/images/projects/indrive-thumb.jpg',
        duration: '12 weeks',
        tools: ['Figma', 'Protopie', 'User Testing'],
        tags: ['Full Design', 'Research', 'Mobility App', 'Large Scale'],
        featured: true,
        overview: 'A comprehensive redesign of a ride-sharing platform, improving user experience across driver and passenger interfaces.',
        problem: 'The existing platform had high abandonment rates and poor user retention metrics.',
        challenge: 'Redesign the entire platform to improve usability, retention, and user satisfaction.',
        solution: 'Conducted extensive research, created new information architecture, and redesigned all key user flows.',
        impact: '45% improvement in retention, 4.8 star rating, 500K+ active users',
        link: 'projects/indrive.html',
        caseStudyLink: '/projects/indrive.html'
    }
];

// ========================================
// CASE STUDY DATA
// ========================================

const caseStudies = {
    'silent-drop-off': {
        title: 'Silent Drop-Off',
        subtitle: 'Reducing Commuter Anxiety Through UX',
        category: 'UX Case Study',
        duration: '8 weeks',
        team: ['UX Researcher', 'UI Designer', 'Product Manager'],
        tools: ['Figma', 'FigJam', 'Maze', 'Figma Prototype'],
        
        sections: {
            overview: {
                title: 'Overview',
                content: 'Silent Drop-Off is a mobile application designed to reduce anxiety for commuters during passenger drop-off situations. The app provides real-time tracking, seamless communication, and a sense of security for both drivers and passengers.'
            },
            problem: {
                title: 'The Problem',
                content: 'Commuters experience significant anxiety during drop-off situations due to unclear communication, uncertainty about timing, and safety concerns. Existing solutions failed to address the emotional aspects of the experience.'
            },
            research: {
                title: 'Research & Insights',
                highlights: [
                    '15+ user interviews with regular commuters',
                    '2 competitive analysis sessions',
                    '50+ survey responses',
                    '3 key user personas identified'
                ],
                findings: [
                    'Users want real-time updates on driver location',
                    'Anxiety peaks 5-10 minutes before expected arrival',
                    'Trust is built through transparency and communication',
                    'Mobile-first is essential for this demographic'
                ]
            },
            solution: {
                title: 'Solution',
                description: 'Developed a comprehensive mobile app with the following features:'
            },
            features: [
                {
                    name: 'Real-Time Tracking',
                    description: 'Live map showing driver location and ETA with accuracy indicators'
                },
                {
                    name: 'Two-Way Communication',
                    description: 'In-app messaging system for quick coordination'
                },
                {
                    name: 'Safety Notifications',
                    description: 'Proactive notifications about driver arrival and any changes'
                },
                {
                    name: 'Rating & Reviews',
                    description: 'Transparent feedback system building trust'
                }
            ],
            impact: {
                title: 'Impact & Results',
                metrics: [
                    { label: 'User Anxiety Reduction', value: '40%' },
                    { label: 'User Satisfaction', value: '85%' },
                    { label: 'App Retention (30 days)', value: '72%' },
                    { label: 'Average Rating', value: '4.6/5' }
                ]
            },
            reflection: {
                title: 'Key Learnings',
                points: [
                    'Emotional design is as important as functional design',
                    'Real-time feedback significantly reduces user anxiety',
                    'Transparency builds user trust and engagement',
                    'Iterative testing with real users is invaluable'
                ]
            }
        }
    },
    
    'ewallet-error': {
        title: 'E-Wallet Error Recovery',
        subtitle: 'Transforming Error States into Helpful Guidance',
        category: 'UI/UX Design',
        duration: '4 weeks',
        team: ['UX Designer', 'UI Designer', 'QA'],
        tools: ['Figma', 'FigJam', 'Protopie'],
        
        sections: {
            overview: {
                title: 'Overview',
                content: 'Redesigned error handling for a financial mobile application, transforming confusing error messages into clear, helpful guidance that guides users toward successful transaction completion.'
            },
            problem: {
                title: 'The Problem',
                content: 'Users encountered cryptic error messages during payment transactions, leading to confusion, frustration, and abandoned transactions. Support tickets related to errors increased by 60% month-over-month.'
            },
            research: {
                title: 'Research & Analysis',
                highlights: [
                    'Analyzed 500+ error logs and support tickets',
                    '8 user interviews focused on error experiences',
                    'Competitive analysis of error handling in fintech apps',
                    'Identified 12 critical error scenarios'
                ]
            },
            solution: {
                title: 'Error Recovery Strategy',
                description: 'Implemented a comprehensive error handling system:'
            },
            features: [
                {
                    name: 'Clear Error Messages',
                    description: 'Plain language explanations of what went wrong'
                },
                {
                    name: 'Actionable Solutions',
                    description: 'Specific steps users can take to resolve issues'
                },
                {
                    name: 'Visual Indicators',
                    description: 'Color-coded severity levels and icons'
                },
                {
                    name: 'Progressive Disclosure',
                    description: 'Additional details available if users need more information'
                }
            ],
            impact: {
                title: 'Measurable Impact',
                metrics: [
                    { label: 'Support Tickets Reduction', value: '35%' },
                    { label: 'Error Recovery Rate', value: '92%' },
                    { label: 'Successful Transactions', value: '+18%' },
                    { label: 'User Confidence', value: '88%' }
                ]
            },
            reflection: {
                title: 'Takeaways',
                points: [
                    'Error states are critical touchpoints in user experience',
                    'Empathy and clarity reduce user frustration significantly',
                    'Proactive communication prevents future errors',
                    'Testing error scenarios is essential'
                ]
            }
        }
    },
    
    'faeltwist': {
        title: 'FaelTwist',
        subtitle: 'Creative Agency Landing Page',
        category: 'Web Design',
        duration: '6 weeks',
        team: ['UX Designer', 'UI Designer', 'Motion Designer'],
        tools: ['Figma', 'Adobe XD', 'Webflow'],
        
        sections: {
            overview: {
                title: 'Overview',
                content: 'A conversion-optimized landing page for a creative design agency, combining stunning visuals with strategic copywriting to attract and convert ideal clients.'
            },
            problem: {
                title: 'The Challenge',
                content: 'The agency needed a landing page to differentiate themselves in a crowded market, showcase their work, and generate qualified leads from their target audience.'
            },
            strategy: {
                title: 'Design Strategy',
                approach: [
                    'Hero section with compelling value proposition',
                    'Portfolio showcase highlighting best work',
                    'Social proof with client testimonials',
                    'Clear CTA for lead generation',
                    'Smooth scrolling with micro-interactions'
                ]
            },
            sections_list: [
                'Hero with animated background',
                'Services overview with icons',
                'Project showcase in grid layout',
                'Client testimonials carousel',
                'Team introduction section',
                'Contact CTA section'
            ],
            impact: {
                title: 'Results',
                metrics: [
                    { label: 'Lead Generation', value: '+200%' },
                    { label: 'Conversion Rate', value: '3.2%' },
                    { label: 'Avg. Time on Page', value: '3m 45s' },
                    { label: 'Bounce Rate', value: '28%' }
                ]
            }
        }
    },
    
    'indrive': {
        title: 'InDrive Redesign',
        subtitle: 'End-to-End Mobility Platform Redesign',
        category: 'Product Design',
        duration: '12 weeks',
        team: ['UX Lead', 'Researchers', 'UI Designers', 'Product Managers'],
        tools: ['Figma', 'Protopie', 'User Testing Tools'],
        
        sections: {
            overview: {
                title: 'Overview',
                content: 'A comprehensive redesign of a ride-sharing platform, addressing usability issues and improving the experience for both drivers and passengers across the entire platform.'
            },
            problem: {
                title: 'The Problem',
                content: 'The platform suffered from high user abandonment (35%), poor retention rates (40% after 30 days), and low user satisfaction scores (3.2/5). Navigation was confusing, and core flows were poorly designed.'
            },
            research: {
                title: 'Extensive Research Phase',
                highlights: [
                    '50+ user interviews (drivers and passengers)',
                    '2 weeks of in-field research',
                    'Large-scale surveys with 500+ participants',
                    'Competitive benchmarking against 5 competitors',
                    'Analytics review and user journey mapping'
                ],
                keyFindings: [
                    'Users found booking flow too complex (8+ steps)',
                    'Driver acceptance rate varied greatly by interface clarity',
                    'Trust was a primary concern for new users',
                    'Mobile experience was significantly worse than web'
                ]
            },
            designProcess: {
                title: 'Design Process',
                phases: [
                    'Research & Discovery (2 weeks)',
                    'Information Architecture Redesign (1 week)',
                    'Wireframing & Flows (2 weeks)',
                    'High-Fidelity Design (2 weeks)',
                    'Prototyping & Testing (2 weeks)',
                    'Refinement & Handoff (1 week)'
                ]
            },
            solution: {
                title: 'Solution Overview',
                improvements: [
                    'Simplified booking flow from 8 steps to 4',
                    'New driver interface with better acceptance rates',
                    'Improved safety features and trust indicators',
                    'Mobile-first responsive design',
                    'Consistent design system across platforms'
                ]
            },
            features: [
                {
                    name: 'Smart Booking Flow',
                    description: 'Streamlined 4-step booking process with predictive suggestions'
                },
                {
                    name: 'Driver Dashboard',
                    description: 'New interface showing earnings, ratings, and trip history'
                },
                {
                    name: 'Enhanced Safety',
                    description: 'Emergency contact, ride sharing, and in-app calling features'
                },
                {
                    name: 'Payment Flexibility',
                    description: 'Multiple payment options and transparent pricing'
                },
                {
                    name: 'Loyalty Program',
                    description: 'Rewards system to improve retention and engagement'
                }
            ],
            impact: {
                title: 'Impressive Results',
                metrics: [
                    { label: 'User Retention (30 days)', value: '+45%' },
                    { label: 'App Rating', value: '4.8/5' },
                    { label: 'Active Users', value: '500K+' },
                    { label: 'User Satisfaction', value: '92%' },
                    { label: 'Booking Completion', value: '+38%' }
                ]
            },
            reflection: {
                title: 'Key Learnings',
                points: [
                    'Platforms with multiple user types need specialized research',
                    'Simplification is the most powerful design principle',
                    'Continuous testing and iteration is essential at scale',
                    'Design systems ensure consistency across large platforms',
                    'User trust directly impacts adoption and retention'
                ]
            }
        }
    }
};

// ========================================
// SKILLS TAXONOMY
// ========================================

const skillsData = {
    design_tools: [
        'Figma',
        'FigJam',
        'Adobe XD',
        'Adobe Photoshop',
        'Adobe Illustrator',
        'Sketch',
        'Protopie',
        'InVision'
    ],
    methodologies: [
        'UX Research',
        'User Testing',
        'Wireframing',
        'Prototyping',
        'Information Architecture',
        'Journey Mapping',
        'User Personas',
        'Competitive Analysis'
    ],
    specializations: [
        'Product Design',
        'Mobile App Design',
        'Web Design',
        'UI Design',
        'Design Systems',
        'Animation',
        'Interaction Design',
        'Accessibility'
    ],
    other: [
        'AI Tools',
        'Accessibility (WCAG)',
        'Motion Design',
        'Visual Design',
        'Communication',
        'Leadership',
        'Agile Methodology',
        'Figma Plugins'
    ]
};

// ========================================
// EXPERIENCE DATA
// ========================================

const experienceData = [
    {
        title: 'Senior Product Designer',
        company: 'Tech Company',
        duration: '2021 - Present',
        description: 'Leading design for multiple product teams, managing design systems, and mentoring junior designers.',
        achievements: [
            'Increased user retention by 45%',
            'Built comprehensive design system',
            'Mentored 3 junior designers'
        ]
    },
    {
        title: 'UX/UI Designer',
        company: 'Creative Agency',
        duration: '2019 - 2021',
        description: 'Designed digital products for various clients across fintech, mobility, and e-commerce sectors.',
        achievements: [
            'Delivered 20+ successful projects',
            'Improved client satisfaction to 95%',
            'Pioneered design research practices'
        ]
    },
    {
        title: 'Junior UX Designer',
        company: 'Startup',
        duration: '2018 - 2019',
        description: 'Started career designing mobile and web interfaces, learning the fundamentals of UX design.',
        achievements: [
            'Contributed to 5 major product launches',
            'Designed 100+ screens',
            'Conducted user research and testing'
        ]
    }
];

// ========================================
// TESTIMONIALS DATA
// ========================================

const testimonialsData = [
    {
        author: 'Sarah Johnson',
        title: 'Product Manager at TechCorp',
        quote: 'Elsa\'s approach to user research and design thinking transformed how we build products. Her work directly contributed to a 45% increase in user retention.',
        image: 'assets/images/testimonials/sarah.jpg'
    },
    {
        author: 'Marcus Chen',
        title: 'Founder at CreativeStudio',
        quote: 'Working with Elsa was a game-changer. She not only delivered stunning designs but also improved our entire design process. Highly recommended!',
        image: 'assets/images/testimonials/marcus.jpg'
    },
    {
        author: 'Emma Rodriguez',
        title: 'CEO at FinTech Innovations',
        quote: 'Elsa\'s design solutions are elegant, user-centric, and strategic. She understands business objectives and translates them into exceptional user experiences.',
        image: 'assets/images/testimonials/emma.jpg'
    }
];

// ========================================
// UTILITY FUNCTIONS
// ========================================

/**
 * Get project by slug
 */
function getProjectBySlug(slug) {
    return projectsData.find(project => project.slug === slug);
}

/**
 * Get all featured projects
 */
function getFeaturedProjects() {
    return projectsData.filter(project => project.featured);
}

/**
 * Get case study by slug
 */
function getCaseStudyBySlug(slug) {
    return caseStudies[slug];
}

/**
 * Get all projects
 */
function getAllProjects() {
    return projectsData;
}

/**
 * Get projects by category
 */
function getProjectsByCategory(category) {
    return projectsData.filter(project => project.category === category);
}

// ========================================
// EXPORT FOR USE
// ========================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        projectsData,
        caseStudies,
        skillsData,
        experienceData,
        testimonialsData,
        getProjectBySlug,
        getFeaturedProjects,
        getCaseStudyBySlug,
        getAllProjects,
        getProjectsByCategory
    };
}
