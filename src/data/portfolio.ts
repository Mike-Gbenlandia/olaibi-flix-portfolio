// Portfolio data structure
export interface ScriptProject {
  id: string;
  title: string;
  brand: string;
  thumbnail: string;
  description: string;
  script: string;
  caseStudy: {
    overview: string;
    problem: string;
    approach: string;
    output: string;
    rationale: string;
    role: string;
  };
}

export interface CopyProject {
  id: string;
  title: string;
  brand: string;
  thumbnail: string;
  description: string;
  caseStudy: {
    overview: string;
    problem: string;
    approach: string;
    output: string;
    rationale: string;
    role: string;
  };
}

export const scriptProjects: ScriptProject[] = [
  {
    id: 'smath-kids',
    title: 'Educational Content Series',
    brand: 'Smath-Kids',
    thumbnail: '/src/assets/smath-kids.jpg',
    description: 'Interactive educational scripts that make mathematics fun and engaging for young learners.',
    script: `SMATH-KIDS EDUCATIONAL SERIES - EPISODE 1
"The Magic of Numbers"

FADE IN:

INT. COLORFUL MATH CLASSROOM - DAY

A vibrant classroom filled with floating numbers and geometric shapes. MAYA (8), an curious student, sits at her desk looking puzzled.

MAYA
(sighing)
Math is so hard! These numbers just don't make sense.

Suddenly, NUMBER 7 springs to life, bouncing around the classroom.

NUMBER 7
(cheerfully)
Hey Maya! I heard you're having trouble with math. Want to go on an adventure?

MAYA
(surprised)
Numbers can talk?!

NUMBER 7
Of course! We numbers love to play games and solve puzzles. Come on, let me show you how fun math can be!

The classroom transforms into a mathematical wonderland...

[Script continues with interactive educational content, mathematical games, and character development that makes learning engaging and memorable.]

FADE OUT.

THE END

[This script is designed to be part of a series that combines entertainment with education, making complex mathematical concepts accessible to young minds through storytelling and character interaction.]`,
    caseStudy: {
      overview: 'Created an engaging educational script series that transforms mathematics from a feared subject into an exciting adventure for children aged 6-10.',
      problem: 'Traditional math education often fails to engage young students, leading to math anxiety and poor academic performance in foundational concepts.',
      approach: 'Developed character-driven narratives that personify numbers and mathematical concepts, making abstract ideas tangible and relatable through storytelling.',
      output: 'A complete script series featuring talking numbers, interactive scenarios, and problem-solving adventures that maintain educational integrity while maximizing entertainment value.',
      rationale: 'By combining emotional engagement with educational content, children develop positive associations with mathematics, improving retention and enthusiasm for learning.',
      role: 'Lead Scriptwriter and Educational Consultant - Responsible for curriculum alignment, character development, and ensuring age-appropriate content delivery.'
    }
  },
  {
    id: 'flawless-beauty',
    title: 'Brand Documentary Series',
    brand: 'Flawless By Beauty',
    thumbnail: '/src/assets/flawless-beauty.jpg',
    description: 'Compelling brand storytelling scripts that showcase authentic beauty journeys and product narratives.',
    script: `FLAWLESS BY BEAUTY - BRAND DOCUMENTARY
"The Journey to Authentic Beauty"

FADE IN:

INT. MODERN BEAUTY STUDIO - GOLDEN HOUR

Soft, warm lighting filters through large windows. SARAH (28), founder of Flawless by Beauty, sits surrounded by her product line.

SARAH (V.O.)
Beauty isn't about perfection. It's about authenticity, confidence, and embracing who you are.

CLOSE-UP: Sarah's hands gently applying a moisturizer, her movements deliberate and caring.

SARAH
(to camera)
When I started Flawless by Beauty, I wasn't trying to create another beauty brand. I was trying to solve a problem I'd lived with my entire life.

MONTAGE - SARAH'S BEAUTY JOURNEY:
- Young Sarah struggling with skin issues
- Trying countless products with no success
- The moment of realization in her kitchen, mixing natural ingredients

SARAH (V.O.)
Every product in our line tells a story. Not just of ingredients and formulations, but of real people with real struggles finding real solutions.

[Script continues with customer testimonials, behind-the-scenes product development, and the brand's mission to redefine beauty standards.]

FADE OUT.

THE END

[This documentary script captures the authentic brand story while showcasing products in context, building emotional connection with the audience.]`,
    caseStudy: {
      overview: 'Developed a documentary-style script series that positions Flawless by Beauty as an authentic, customer-centric brand in the competitive beauty market.',
      problem: 'The beauty industry is saturated with brands making similar claims. Flawless by Beauty needed to differentiate through authentic storytelling rather than generic marketing.',
      approach: 'Created intimate, documentary-style narratives focusing on real customer journeys and founder authenticity, avoiding typical beauty advertising clichés.',
      output: 'A series of brand documentary scripts that humanize the brand, showcase genuine customer transformations, and establish emotional connections with the target audience.',
      rationale: 'Authentic storytelling builds trust and loyalty in an industry where consumers are increasingly skeptical of traditional advertising approaches.',
      role: 'Brand Storytelling Specialist - Conducted customer interviews, developed narrative structure, and ensured brand voice consistency across all scripts.'
    }
  },
  {
    id: 'gbenlandia-tech',
    title: 'Startup Pitch Series',
    brand: 'Gbenlandia GrowthTech',
    thumbnail: '/src/assets/gbenlandia-tech.jpg',
    description: 'Dynamic pitch presentations and investor storytelling that secured funding for innovative growth solutions.',
    script: `GBENLANDIA GROWTHTECH - INVESTOR PITCH
"Scaling Success Through Smart Technology"

FADE IN:

INT. MODERN CONFERENCE ROOM - DAY

A sleek presentation setup. GBENGA (32), CEO and founder, stands confidently before a panel of investors.

GBENGA
(clicking remote)
Every business owner faces the same critical question: How do we scale without losing what made us successful in the first place?

SCREEN DISPLAYS: Statistics showing 70% of businesses fail when scaling.

GBENGA (CONT'D)
The answer isn't more capital, more people, or more time. The answer is smarter growth technology.

He walks to the center of the room, making eye contact with each investor.

GBENGA (CONT'D)
GrowthTech doesn't just provide tools. We provide intelligence. Our AI-driven platform identifies growth bottlenecks before they become roadblocks.

MONTAGE - PLATFORM DEMONSTRATION:
- Real-time analytics dashboards
- Predictive growth modeling
- Automated scaling recommendations

GBENGA (V.O.)
We've already helped 150+ businesses increase their revenue by an average of 340% within 18 months.

[Script continues with market opportunity, competitive advantages, and financial projections, building toward a compelling call to action.]

FADE OUT.

THE END

[This pitch script balances technical innovation with emotional storytelling, creating investor confidence and excitement.]`,
    caseStudy: {
      overview: 'Crafted compelling investor pitch scripts that successfully communicated GrowthTech\'s value proposition and secured Series A funding.',
      problem: 'Complex technical solutions are difficult to communicate clearly to non-technical investors, often resulting in missed funding opportunities.',
      approach: 'Developed a narrative structure that leads with business pain points, demonstrates clear solutions, and provides concrete evidence of success.',
      output: 'A series of pitch scripts optimized for different investor audiences, from angel investors to venture capital firms, each tailored to specific interests and concerns.',
      rationale: 'Successful fundraising requires more than good technology - it requires compelling storytelling that helps investors visualize market opportunity and return potential.',
      role: 'Pitch Development Consultant - Collaborated with founding team to refine messaging, structure presentations, and prepare for investor Q&A sessions.'
    }
  },
  {
    id: 'apt-scholars',
    title: 'Institutional Brand Story',
    brand: 'Apt Scholars Universal College',
    thumbnail: '/src/assets/apt-scholars.jpg',
    description: 'Academic excellence narratives that position the institution as a leader in innovative education.',
    script: `APT SCHOLARS UNIVERSAL COLLEGE - INSTITUTIONAL FILM
"Where Potential Meets Purpose"

FADE IN:

EXT. UNIVERSITY CAMPUS - SUNRISE

Golden light illuminates a modern campus where students walk purposefully between buildings, books in hand, engaged in animated discussions.

NARRATOR (V.O.)
(warm, authoritative)
Education is not about filling vessels. It's about igniting fires.

INT. LECTURE HALL - DAY

DR. WILLIAMS (45) facilitates a dynamic discussion where students debate complex theories with passion and insight.

DR. WILLIAMS
The best learning happens when curiosity meets challenge, when questions matter more than answers.

STUDENT SARAH (20) raises her hand eagerly.

SARAH
But what if the traditional approach isn't working for modern problems?

DR. WILLIAMS
(smiling)
That's exactly the kind of thinking that changes the world.

MONTAGE - CAMPUS LIFE:
- State-of-the-art laboratories
- Collaborative study spaces
- Student research presentations
- Community service projects

NARRATOR (V.O.)
At Apt Scholars Universal College, we don't just prepare students for careers. We prepare them for life.

[Script continues showcasing faculty excellence, student achievements, and the institution's commitment to holistic education.]

FADE OUT.

THE END

[This institutional script balances academic prestige with accessibility, appealing to prospective students and their families.]`,
    caseStudy: {
      overview: 'Created institutional storytelling scripts that elevated Apt Scholars Universal College\'s brand positioning and increased enrollment by 45%.',
      problem: 'The institution struggled to differentiate itself in a competitive higher education market, with declining enrollment and limited brand recognition.',
      approach: 'Developed narratives focusing on student success stories, innovative teaching methods, and real-world impact rather than traditional academic metrics.',
      output: 'A comprehensive script library for recruitment videos, campus tours, and promotional materials that consistently communicate the institution\'s unique value proposition.',
      rationale: 'Modern students and families seek educational experiences that combine academic excellence with personal growth and practical application.',
      role: 'Educational Brand Strategist - Conducted stakeholder interviews, developed messaging hierarchy, and ensured alignment with institutional goals and values.'
    }
  }
];

export const copyProjects: CopyProject[] = [
  {
    id: 'karisma-nutrition',
    title: 'Wellness Brand Positioning',
    brand: 'Karisma Nutrition',
    thumbnail: '/src/assets/karisma-nutrition.jpg',
    description: 'Compelling health and wellness copy that drives conversions while building trust and authority.',
    caseStudy: {
      overview: 'Developed comprehensive website copy and marketing materials that positioned Karisma Nutrition as a trusted authority in personalized wellness solutions.',
      problem: 'The nutrition supplement market is crowded with questionable claims and low consumer trust. Karisma needed to stand out through credibility and personalization.',
      approach: 'Focused on evidence-based messaging, customer success stories, and personalized nutrition approaches rather than generic health claims.',
      output: 'Complete website copy, email sequences, and social media content that increased conversion rates by 280% and built a community of 50K+ engaged followers.',
      rationale: 'Trust-building through transparency and personalization creates stronger customer relationships than aggressive sales tactics in the wellness industry.',
      role: 'Wellness Copywriter and Content Strategist - Researched nutrition science, interviewed customers, and developed brand voice guidelines.'
    }
  },
  {
    id: 'gbenlandia-tech-copy',
    title: 'SaaS Platform Messaging',
    brand: 'Gbenlandia GrowthTech',
    thumbnail: '/src/assets/gbenlandia-tech.jpg',
    description: 'Technical copy that makes complex growth solutions accessible to business owners and decision-makers.',
    caseStudy: {
      overview: 'Created clear, compelling copy for a complex B2B SaaS platform that simplified technical concepts for non-technical business owners.',
      problem: 'The platform\'s advanced AI capabilities were difficult for potential customers to understand, leading to low trial-to-paid conversion rates.',
      approach: 'Developed a benefits-first messaging framework that leads with business outcomes before explaining technical features.',
      output: 'Website copy, feature descriptions, and onboarding content that increased trial-to-paid conversions by 150% and reduced customer support tickets by 40%.',
      rationale: 'Business owners buy solutions to problems, not technology. Clear communication of benefits drives better decision-making and customer satisfaction.',
      role: 'SaaS Copywriter and UX Content Strategist - Collaborated with product team to understand features and translate them into customer-centric messaging.'
    }
  },
  {
    id: 'crowded',
    title: 'EdTech Platform Copy',
    brand: 'CrowdED',
    thumbnail: '/src/assets/crowded.jpg',
    description: 'Educational platform copy that connects with both educators and students, driving engagement and retention.',
    caseStudy: {
      overview: 'Developed user-focused copy for an innovative EdTech platform that serves both educators and students with collaborative learning tools.',
      problem: 'The platform needed to appeal to two distinct user groups (teachers and students) with different motivations and pain points.',
      approach: 'Created dual messaging strategies that speak to educators\' need for efficiency and students\' desire for engaging, collaborative learning experiences.',
      output: 'Platform interface copy, onboarding flows, and help documentation that improved user activation by 90% and reduced churn by 35%.',
      rationale: 'Successful EdTech products must simultaneously solve problems for educators while creating engaging experiences for students.',
      role: 'EdTech Content Strategist - Conducted user research with both teacher and student segments to develop targeted messaging strategies.'
    }
  }
];

export function getProjectById(id: string): ScriptProject | CopyProject | undefined {
  const scriptProject = scriptProjects.find(p => p.id === id);
  if (scriptProject) return scriptProject;
  
  return copyProjects.find(p => p.id === id);
}

export function getScriptProjectById(id: string): ScriptProject | undefined {
  return scriptProjects.find(p => p.id === id);
}

export function getCopyProjectById(id: string): CopyProject | undefined {
  return copyProjects.find(p => p.id === id);
}