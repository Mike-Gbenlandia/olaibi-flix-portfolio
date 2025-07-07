import smathKidsImg from '../assets/smath-kids.png';
import flawlessBeautyImg from '../assets/flawless-beauty.jpg';
import gbenlandiaTechImg from '../assets/gbenlandia-tech.jpeg';
import aptScholarsImg from '../assets/apt-scholars.jpg';
import karismaNutritionImg from '../assets/karisma-nutrition.jpeg';
import crowdedImg from '../assets/crowded.jpeg';

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
    title: 'THE FUTURE STARTS TODAY',
    brand: 'Smath-Kids',
    thumbnail: smathKidsImg,
    description: 'Educational Content Series',
    script: `
FADE IN:
INT. CHILD'S BEDROOM - NIGHT
KEMI (12 years old) sits at her desk, surrounded by math textbooks. She's frustrated, erasing equations repeatedly. Her desk lamp flickers. She looks tired.
KEMI (sighing):
"Why is this so hard?"
She stares at a complex fraction problem, then at a poster on her wall that reads "FUTURE DOCTOR."
KEMI (to the poster):
"How am I supposed to become a doctor if I can't even solve this?"
She closes her textbook in defeat.

INT. KEMI'S BEDROOM - MORNING
Kemi wakes up to sunlight streaming through her window. She sees her younger brother TUNDE (8 years old) at her desk, working on her math homework.
KEMI (curious):
"Tunde, what are you doing?"
TUNDE (excited):
"I'm helping! Look, I solved your math problem!"
Kemi looks at the work, amazed.
KEMI (shocked):
"But... but you're only in Primary 3! How did you...?"
TUNDE (proudly):
"SMATHS-Kids! They make everything easy. Watch!"
He shows her his tablet with the SMATHS-Kids online platform.

INT. KEMI'S BEDROOM - CONTINUOUS
Kemi watches as Tunde navigates the colorful, interactive learning platform.
TUNDE (explaining):
"See? They break it down into small pieces. Like building blocks!"
The screen shows animated explanations of math concepts.
KEMI (amazed):
"It's like... it's like the numbers are talking to me."
TUNDE (grinning):
"And there's a competition! Winner gets fantastic prizes!"
Kemi's eyes light up.
KEMI (determined):
"Show me everything."

MONTAGE - KEMI'S TRANSFORMATION
Quick shots of Kemi's journey over several weeks:

Kemi at her computer, following SMATHS-Kids lessons
Her notebook pages filling with neat, correct solutions
Her confidence growing as she raises her hand in class
Her studying with new enthusiasm
Her younger brother cheering her on

INT. KEMI'S BEDROOM - EVENING
Kemi sits at her computer, taking the SMATHS-Kids qualifying examination. She's focused, confident.
KEMI (to herself):
"Fractions... you're not my enemy anymore."
She clicks submit and waits. A notification appears: "CONGRATULATIONS! YOU'VE QUALIFIED FOR STAGE 2!"
KEMI (jumping up):
"Tunde! I did it!"
Tunde runs in, and they celebrate together.

INT. KEMI'S BEDROOM - LATER
Kemi sits calmly taking the Pre-Final examination. She's transformed from the frustrated girl we met at the beginning.
KEMI (voiceover):
"Funny how learning becomes fun when someone shows you the right way."
Another notification: "CONGRATULATIONS! YOU'VE QUALIFIED FOR THE FINAL!"

EXT. APT SCHOLARS UNIVERSAL COLLEGE OTA - DAY
Kemi walks confidently toward the impressive school building, carrying her materials for the physical final.
KEMI (voiceover):
"I used to think I wasn't smart enough. But SMATHS-Kids showed me something..."
She pauses at the entrance, looking up at the building.
KEMI (continuing):
"Every genius was once a beginner. Every expert was once a student."

INT. EXAMINATION HALL - DAY
Kemi sits among other young competitors, all focused on their papers. The atmosphere is intense but exciting.
KEMI (voiceover):
"And every dream starts with believing you can learn."
She writes confidently, occasionally smiling at problems that would have frustrated her before.

INT. EXAMINATION HALL - LATER
The examination ends. Kemi stretches, looking satisfied.
KEMI (to herself):
"Whatever happens, I'm proud of how far I've come."
She looks around at her fellow competitors.
KEMI (continuing):
"We're all winners here. We all chose to grow."

INT. EXAMINATION HALL - AWARDS CEREMONY
Kemi stands on stage with other winners, holding a trophy. But her biggest smile isn't for the prize - it's for the journey.
KEMI (to the audience):
"Six months ago, I wanted to quit. Math felt impossible. Science seemed too hard. English was confusing."
She holds up her trophy.
KEMI (continuing):
"But SMATHS-Kids didn't just teach me subjects. They taught me that learning is an adventure, not a punishment."
She looks directly at the camera.
KEMI (passionate):
"To every child watching this: You are smarter than you think. You are capable of more than you know. And your future? It starts today."
She pauses, then smiles.
KEMI (final words):
"The only thing standing between you and your dreams is the decision to start learning."
She raises her trophy, and the audience erupts in applause.
FADE TO BLACK.
ANIMATED TEXT APPEARS:
"SMATHS-Kids Initiative"
"Where Learning Becomes Adventure"
"Open to students ages 8-13"
"Three stages: Online Qualifying, Online Pre-Final, Physical Final"
"Proudly sponsored by Apt Scholars Universal College Ota"
"Register now at smathskids@gmail.com"
FINAL FADE OUT.

PRODUCTION NOTES:
DURATION: 2-3 minutes
CAST REQUIREMENTS:

1 Main actress (Kemi, 12 years old)
1 Supporting actor (Tunde, 8 years old, minimal dialogue)
Background students (for examination scenes)

LOCATIONS:

Child's bedroom (main location)
Apt Scholars Universal College Ota exterior
Examination hall/classroom

VISUAL ELEMENTS:

SMATHS-Kids online platform screenshots
Animated learning content
Transformation montage
Awards ceremony

PROPS:

Textbooks and notebooks
Tablet/computer
Trophies and certificates
Examination materials

THEME: Every child has potential - the right guidance unlocks it
EMOTIONAL ARC: Frustration → Discovery → Growth → Confidence → Success → Inspiration
`,
    caseStudy: null
  },
  {
    id: 'flawless-beauty',
    title: 'THE MISSING PIECE',
    brand: 'Flawless by Nature',
    thumbnail: flawlessBeautyImg,
    description: 'Compelling brand storytelling scripts that showcase authentic beauty journeys and product narratives.',
    script: `
"THE MISSING PIECE"
FLAWLESS BY NATURE - Single Character Script (Minimal Cast)

FADE IN:
INT. ADUNNI'S BEDROOM - MORNING
ADUNNI (mid-20s) jolts awake to her phone alarm. She reaches for a handwritten checklist on her nightstand.
ADUNNI (reading aloud, determined):
"Today is THE day. Dream job interview checklist..."
Quick montage: She ticks off items as she completes them.
ADUNNI (ticking off items):
"Wake up early." ✓
"Fresh breath." ✓
"Smell good." ✓
"Look professional." ✓
"Makeup on point." ✓
"All documents ready." ✓
She kneels beside her bed, closes her eyes.
ADUNNI (praying softly):
"Father, bless this interview. Let your favor shine upon me today."
ADUNNI (confident):
"Prayers said." ✓
She looks at herself in the full-length mirror.
ADUNNI (pumping herself up):
"Everything is perfect."

EXT. CORPORATE BUILDING - DAY
Adunni walks confidently toward a gleaming office building.

INT. CORPORATE BUILDING - HALLWAY
Adunni walks down a long hallway toward a door marked "INTERVIEWS."

EXT. CORPORATE BUILDING - LATER
Adunni exits the building, checks her phone. Her face falls.
ADUNNI (reading, devastated):
"We regret to inform you..."
She stares at her reflection in the building's glass, touching her hair.
ADUNNI (confused):
"But I did everything right..."
She pulls out her checklist, frantically reviewing it.
ADUNNI (desperate):
"What did I miss?"
She looks at her reflection again, really seeing her hair.
ADUNNI (realization):
"My crown..."

MAGICAL REALISM SEQUENCE
The world rewinds: cars move backward, people walk in reverse, clock hands spin counterclockwise.
ADUNNI (voiceover):
"If I could just... try again..."

INT. ADUNNI'S BEDROOM - MORNING (TAKE TWO)
Same morning routine, but this time she pauses at her reflection.
ADUNNI (to herself):
"This time will be different."
After her prayer, she looks at her hair in the mirror.
ADUNNI (touching her hair):
"My crown needs attention."
She picks up her phone.
ADUNNI (into phone):
"Hello, Flawless by Nature? I need you. Today."

INT. ADUNNI'S BEDROOM - LATER
Professional hands work on Adunni's hair. We see only the STYLIST's hands and tools, never her face.
Close-ups: Hair being washed, conditioned, styled. The transformation is remarkable.
Adunni watches in the mirror as her hair becomes a work of art.
ADUNNI (amazed):
"I... I look like myself. The best version."

EXT. CORPORATE BUILDING - DAY (TAKE TWO)
Same building, but now Adunni walks differently. Her hair catches the sunlight, her stride is confident.

INT. CORPORATE BUILDING - HALLWAY (TAKE TWO)
Same hallway, but now Adunni owns it.

EXT. CORPORATE BUILDING - LATER (TAKE TWO)
Adunni checks her phone, this time with a smile spreading across her face.
ADUNNI (reading):
"Congratulations! We're pleased to offer you the position."
She looks at her reflection in the building's glass.
ADUNNI (touching her styled hair):
"It was never about the checklist."
She takes out her old checklist and adds a new item at the top.
ADUNNI (writing):
"Number one: Crown yourself first."
She looks directly at the camera.
ADUNNI (confident):
"Sometimes the missing piece isn't what you do. It's how you see yourself."
She walks away, her hair moving beautifully in the wind.
FADE TO BLACK.
WHITE TEXT APPEARS:
"FLAWLESS BY NATURE"
"The Confidence You've Been Missing"
"Home Service Available"
Contact Information
FINAL FADE OUT.

PRODUCTION NOTES:
DURATION: 90-120 seconds
CAST REQUIREMENTS:

1 Main actress (Adunni)
1 Stylist (hands/body only, no face)
Background extras (optional, can be blurred)

LOCATIONS:

Bedroom
Corporate building exterior
Elevator
Hallway
Generic office space (for blurred background)

VISUAL TECHNIQUES:

Time reversal using reverse footage
Close-ups on hands, hair, and expressions
Blurred backgrounds for "crowd" scenes
Mirror reflections throughout
Split screen comparisons

DIALOGUE:

Minimal, mostly voice-over and self-talk
No additional cast dialogue needed

PROPS:

Handwritten checklist
Professional documents
Phone
Hair styling tools

THEME: Your crown is your confidence
`,
    caseStudy: null
  },
  {
    id: 'gbenlandia-tech',
    title: 'The Cost of Standing Still',
    brand: 'Gbenlandia GrowthTech',
    thumbnail: gbenlandiaTechImg,
    description: 'Dynamic pitch presentations and investor storytelling that secured funding for innovative growth solutions.',
    script: `Setting: Studio, black canvas background. White shirt.
Tone: Thoughtful, honest, bold

[INT. STUDIO – BLACK CANVAS BACKGROUND – DAY]
Soft ambient hum plays, like the subtle ticking of time. A single spotlight on Mike, standing calmly in a white shirt. The frame is minimal, cinematic.

MIKE (soft, thoughtful tone)
(beat)
You ever notice how life feels like it's moving faster these days?

(beat)
Opportunities... ideas... technology... growth.

Every day, something new is happening.

But here's the thing—
Not making a move? That's a decision too.

(beat)
And in this world, where businesses evolve overnight…
standing still doesn't keep you in the same place.
It puts you behind.

[LIGHTS FLICKER SUBTLY – SYMBOLIZING TIME PASSING]

MIKE (continuing)
While you're debating whether to adapt—
Your competitors?
They're automating workflows.
They're integrating AI.
They're scaling faster. Smarter. More efficiently.

And every second you hesitate…
That gap between where you are* and *where you could be?

It's growing.

But it doesn't have to.

[MIKE STEPS SLIGHTLY FORWARD – BREAKING FRAME, BRINGING VIEWER CLOSER]

MIKE (firm, sincere tone)
At Gbenlandia GrowthTech, we don't just talk about growth.

We engineer it.

AI automation. Streamlined systems. Smarter workflows.
All designed to not just keep up—
But to lead.

(beat)
Because when it's all said and done…

Success? Failure?

It's all black and white.

You either moved forward…
Or you didn't.

[PAUSE – MIKE HOLDS GAZE ON CAMERA]

MIKE (calm but powerful)
The only question left is...

(beat)
Which side will you be on?

[SCREEN FADES TO BLACK]
ON SCREEN TEXT: "Accelerating Business Growth from AI to ROI"
White text. No sound. Just silence.

[OPTIONAL GLITCH TWIST:]
A flicker on the black screen.
Quick flash of text:
"Loading Competitor Growth... 97%"
Then hard cut to black.

END
`,
    caseStudy: null
  },
  {
    id: 'apt-scholars',
    title: 'Institutional Brand Story',
    brand: 'Apt Scholars Universal College',
    thumbnail: aptScholarsImg,
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
    caseStudy: null
  }
];

export const copyProjects: CopyProject[] = [
  {
    id: 'karisma-nutrition',
    title: 'Wellness Brand Positioning',
    brand: 'Karisma Nutrition',
    thumbnail: karismaNutritionImg,
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
    thumbnail: gbenlandiaTechImg,
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
    thumbnail: crowdedImg,
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