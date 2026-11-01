import {
  Brain,
  Cloud,
  Coffee,
  Cpu,
  Database,
  FileText,
  GraduationCap,
  Globe,
  Layers,
  Lightbulb,
  Network,
  Presentation,
  Radio,
  Code2,
  Sparkles,
  Target,
  Terminal,
  UserCheck,
  MessagesSquare,
  ChartColumn,
  type LucideIcon,
} from 'lucide-react';

export type Service = { title: string; text: string; icon: LucideIcon };

export const SERVICES: Service[] = [
  {
    title: 'Final-Year Project Development Support',
    text: 'Hands-on help to turn your project idea into a working build, one clear step at a time.',
    icon: GraduationCap,
  },
  {
    title: 'AI & Machine Learning Projects',
    text: 'Data preparation, model building and integration, explained so you can present it.',
    icon: Brain,
  },
  {
    title: 'Full-Stack Web Development',
    text: 'Responsive frontends, backend APIs and working web applications.',
    icon: Layers,
  },
  {
    title: 'Java & Python Projects',
    text: 'Application and software projects with clean, readable code.',
    icon: Code2,
  },
  {
    title: 'Database Design and Integration',
    text: 'Plan your schema and connect it properly to your application.',
    icon: Database,
  },
  {
    title: 'Project Documentation and Technical Guidance',
    text: 'Technical notes, diagrams and guidance that help you understand every part.',
    icon: FileText,
  },
  {
    title: 'Project Demonstration Preparation',
    text: 'Test your project, walk through it and get ready to explain it with confidence.',
    icon: Presentation,
  },
];

export type Domain = { name: string; hint: string; icon: LucideIcon };

export const DOMAINS: Domain[] = [
  { name: 'Artificial Intelligence', hint: 'Chatbots, assistants, decision systems', icon: Brain },
  { name: 'Machine Learning', hint: 'Prediction, classification, recommendations', icon: Cpu },
  { name: 'Deep Learning', hint: 'Image recognition, NLP, neural networks', icon: Network },
  { name: 'Web Development', hint: 'Responsive websites and web portals', icon: Globe },
  { name: 'Full-Stack Applications', hint: 'Frontend, backend and database together', icon: Layers },
  { name: 'Internet of Things', hint: 'Sensors, microcontrollers, smart monitoring', icon: Radio },
  { name: 'Cloud Computing', hint: 'Hosting, storage and cloud deployment', icon: Cloud },
  { name: 'Data Science', hint: 'Analysis, visualisation and insights', icon: ChartColumn },
  { name: 'Python Applications', hint: 'Automation, tools and data apps', icon: Terminal },
  { name: 'Java Applications', hint: 'Desktop apps and management systems', icon: Coffee },
];

export const STEPS = [
  { title: 'Share Your Idea', text: 'Tell us your project topic and requirements.' },
  { title: 'Discuss', text: 'We understand your requirements and suggest an approach.' },
  { title: 'Develop', text: 'Work on implementation with technical guidance and development support.' },
  { title: 'Demonstrate', text: 'Understand, test and prepare your project for demonstration.' },
];

export type Reason = { title: string; text: string; icon: LucideIcon };

export const REASONS: Reason[] = [
  { title: 'Practical technical guidance', text: 'Real implementation help, not just theory.', icon: Target },
  { title: 'Multiple technology domains', text: 'AI, web, Java, Python, IoT, cloud and more.', icon: Layers },
  { title: 'Clear communication', text: 'Simple explanations in friendly, easy English.', icon: MessagesSquare },
  { title: 'Modern development practices', text: 'Current tools and clean, maintainable code.', icon: Sparkles },
  { title: 'Individual project discussions', text: 'Every idea is discussed on its own requirements.', icon: UserCheck },
  {
    title: 'Understand and explain your work',
    text: 'Support with understanding and explaining the implementation.',
    icon: Lightbulb,
  },
];

export const FAQS = [
  {
    q: 'What types of final-year projects do you support?',
    a: 'We support projects in Artificial Intelligence, Machine Learning, Deep Learning, web and full-stack development, Java and Python applications, Internet of Things, cloud computing and data science.',
  },
  {
    q: 'Do you help with AI and Machine Learning projects?',
    a: 'Yes. We can guide you through preparing data, building and training a model, evaluating it, and connecting it to an application so it works as a complete project.',
  },
  {
    q: 'Can I bring my own project idea?',
    a: 'Absolutely. Bring your idea even if it is still rough. We discuss your requirements, the scope and the best technical approach together. If you are still choosing a topic, we can talk through options too.',
  },
  {
    q: 'Do you provide technical mentoring?',
    a: 'Yes. Mentoring is a core part of what we do. We explain the concepts, the architecture and the code so you understand how your project works and can explain it confidently.',
  },
  {
    q: 'Can you help with frontend and backend development?',
    a: 'Yes. We can help with user interfaces, backend logic, APIs, database design and connecting all the parts into one working application.',
  },
  {
    q: 'How can I discuss my project requirements?',
    a: 'Message us on Instagram at @irsha.ai. Tell us your project topic, your branch and what kind of help you need, and we will take the discussion forward from there.',
  },
  {
    q: 'How do I get pricing information?',
    a: 'Pricing depends on the project scope, complexity and timeline, so we discuss it individually. Message us on Instagram with your requirements to get pricing information.',
  },
];
