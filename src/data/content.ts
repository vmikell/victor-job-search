export const profile = {
  name: 'Victor Mikell',
  title: 'Product, Operations & AI-Enabled Delivery',
  tagline:
    'Product-minded operator focused on discovery, requirements, cross-functional delivery, and practical AI-enabled solutions.',
  intro:
    'I bring a product-oriented lens shaped by operations, service, and digital execution. Across retail, brand, B2B support, and front-end web development, I\'ve spent my career listening closely to real user needs, translating ambiguity into requirements, and helping cross-functional teams deliver with clarity, especially in environments where AI and automation create meaningful leverage.',
  about:
    'I speak the language of the floor and the language of the build. I know what breaks in the real world, and I use AI to get from idea to working prototype fast, so teams spend less time guessing and more time shipping.',
  email: 'victormikell@gmail.com',
  linkedin: 'https://www.linkedin.com/in/victor-mikell/',
  location: 'Lynn, MA',
}

export const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '6', label: 'Industries' },
  { value: '2', label: 'Active Product Builds' },
]

export const experiences = [
  {
    date: '2022 – Present',
    role: 'Operations Leadership & Workflow Execution',
    company: "Dick's Sporting Goods",
    location: 'Danvers, MA',
    description:
      'Managed execution across departments in a high-volume retail environment, scoping priorities in real time, aligning teams around shifting operational requirements, and building repeatable workflows where none existed. Hands-on discovery work: identifying what\'s broken, what\'s missing, and what needs to be built.',
    tags: ['Workflow Design', 'Operational Discovery', 'Cross-Functional Alignment', 'Requirements Scoping'],
  },
  {
    date: '2019 – 2022',
    role: 'People Development, Engagement & User Insight',
    company: 'Nike',
    location: 'Various Locations',
    description:
      'Worked at the intersection of training, adoption, and community engagement, developing sensitivity to how people actually experience systems versus how they\'re intended to work. That gap is where most product problems live.',
    tags: ['User Insight', 'Adoption', 'Behavioral Research', 'Training Design'],
  },
  {
    date: '2017 – 2019',
    role: 'Dealer Service, Product Coordination & Requirements Translation',
    company: 'LOWA Boots',
    location: 'Stamford, CT',
    description:
      'Coordinated field testing for hunting and wildland firefighting boots across U.S. dealer networks and German manufacturing, surfacing real-world performance feedback, translating it across a language and standards gap, and keeping product and support aligned on what actually needed to change.',
    tags: ['Requirements Translation', 'Stakeholder Communication', 'Partner Support', 'Product Coordination'],
  },
  {
    date: 'Prior',
    role: 'Front-End Development Engineer',
    company: 'Base22',
    location: 'Remote',
    description:
      'Built responsive, accessible interfaces for enterprise web projects, developing enough technical fluency to collaborate meaningfully with engineers on scope, feasibility, and tradeoffs without losing the user experience thread.',
    tags: ['Front-End Dev', 'HTML/CSS/JS', 'Technical Fluency', 'Accessibility'],
  },
]

export const skillGroups = [
  {
    title: 'Product & Delivery',
    items: [
      'User and workflow discovery',
      'Requirements translation',
      'Cross-functional delivery',
      'Process and workflow improvement',
      'Executing without a roadmap',
    ],
  },
  {
    title: 'Clients, Users & Communication',
    items: [
      'Stakeholder communication',
      'User-centered thinking',
      'Client and partner support',
      'Training, onboarding, and adoption',
      'Communication that moves things forward',
    ],
  },
  {
    title: 'Technical & AI-Adjacent',
    items: [
      'HTML, CSS, JavaScript',
      'Web development and deployment',
      'Prompt-driven product prototyping',
      'Feasibility-minded collaboration with engineers',
      'UI and workflow pattern recognition',
    ],
  },
]

export const projects = [
  {
    slug: 'maison',
    title: 'Maison',
    eyebrow: 'AI-Assisted Household Operations Product',
    summary:
      'Maison is a household operations app that turns your home\'s features into a personalized maintenance schedule.',
    challenge:
      'Most people do not need more generic reminders. They need a household system that reflects the actual shape of their home, what is in it, and what needs recurring care.',
    approach:
      'Describe your square footage and appliances during setup and the app auto-populates recurring tasks specific to your home, filterable by list or calendar, shareable with everyone under your roof, and fully customizable from day one.',
    outcome:
      'The result is a household operations experience that feels tailored instead of generic, giving users a faster path from setup to a usable shared maintenance system.',
    role:
      'Product concept, onboarding logic, workflow design, AI-assisted prototyping, and implementation direction.',
    proofPoints: [
      'Turns home profile details into a personalized recurring maintenance system.',
      'Supports both list and calendar views for the same household workload.',
      'Makes the schedule shareable across the household and customizable from day one.',
    ],
    links: [],
  },
  {
    slug: 'the-shortlist',
    title: 'The Shortlist',
    eyebrow: 'ML Restaurant Discovery Product',
    summary:
      'The Shortlist is a restaurant discovery app that gets smarter the more you eat.',
    challenge:
      'Most restaurant discovery experiences are noisy, generic, and overloaded with options that do not actually fit the user.',
    approach:
      'Set your preferences at signup, explore restaurants within a 5-mile radius, and rate each visit. After 9 trips, the ML model kicks in and classifies every restaurant in your area as Shortlist, Worth a Shot, or Let\'s Explore.',
    outcome:
      'No noise. No generic top-10 lists. Just a tighter set of choices that actually fit you.',
    role:
      'Product concept development, experience design, ML-assisted product framing, and prototyping direction.',
    proofPoints: [
      'Uses ratings and repeat use to improve recommendation quality over time.',
      'Constrains discovery to a tighter radius so choices stay relevant and actionable.',
      'Frames output as clearer decision buckets instead of endless ranked clutter.',
    ],
    links: [],
  },
]
