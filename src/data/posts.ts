import { Bot, Layers, Compass, type LucideIcon } from 'lucide-react';

export interface PostSection {
  heading?: string;
  paragraphs: string[];
}

export interface Post {
  slug: string;
  icon: LucideIcon;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  intro: string[];
  sections: PostSection[];
  closing: string[];
}

export const posts: Post[] = [
  {
    slug: 'building-ai-features-into-a-production-lms',
    icon: Bot,
    title: 'Building AI Features Into a Production LMS',
    excerpt:
      'Notes on integrating AI-powered content assistance and Career Compass into wele.in what worked, what didn’t.',
    date: 'August 2026',
    readTime: '7 min read',
    tags: ['AI', 'LMS', 'wele.in'],
    intro: [
      "Okay, real talk. The first time someone said “let’s bolt AI onto the LMS,” my stomach did a little flip. Not excitement dread. Because everyone wants “AI features” and almost nobody wants to sit through the boring part where you figure out what the AI is actually for. This is my messy, honest recap of shipping AI into wele.in the platform I’ve been building on not a polished case study, just what actually happened.",
    ],
    sections: [
      {
        heading: 'The content-creation piece',
        paragraphs: [
          "First thing we tackled was helping our content and trainer team move faster drafting lesson outlines, quiz questions, explainer snippets, that kind of thing, with AI doing the first pass. Sounds simple. It was not simple.",
          "The problem is nobody wants an LMS that teaches confidently wrong things. So most of my time wasn’t spent on the “generate text” part that’s the easy 20%. It was spent grounding the AI in our actual course material so it stopped inventing stuff that sounded right but wasn’t, and building a review loop so a real trainer always signs off before anything reaches a student. We landed on the philosophy the product now says out loud on the site: AI supports learning, but humans lead it. I didn’t come up with that line, but I lived it while building the feature every time I tried to let the AI go fully autonomous, the output got weird within a day.",
        ],
      },
      {
        heading: 'Career Compass my favorite thing I’ve shipped',
        paragraphs: [
          "This one I actually love talking about. A huge number of students land on wele.in with zero clue what domain to go into cybersecurity, product, design, AI, automation, whatever. They’re not lazy, they’re just genuinely uncertain, and every generic “take this quiz” thing online feels like a BuzzFeed personality test.",
          "So Career Compass is our attempt at turning that confusion into something structured a short, adaptive journey of AI-generated questions where each next question actually depends on how you answered the last one, instead of a static form. Under the hood it’s reading the signal in your answers what excites you, what bores you, where you hesitate and slowly narrowing toward a domain that fits, instead of just spitting out a label.",
          "The hard part was making the questions feel like a conversation and not a survey. My early drafts read like a job application. I rewrote them so many times, tested them on actual students, and kept the ones that made people go “oh wait, that’s a good question” instead of “next.” That feedback loop real students, real reactions was worth more than any amount of me guessing alone at my desk.",
        ],
      },
      {
        heading: 'What actually broke',
        paragraphs: [
          "In no particular order: latency spikes when too many students hit the AI companion during peak evening hours, one memorable incident where a prompt tweak made responses way too chatty and support tickets went up, and the classic cost. AI calls are not free, and “just let the model handle it” is a great way to get a scary bill at the end of the month. We added caching, guardrails, and a lot of “do we really need AI here or would a simple rule work fine” conversations. Usually a simple rule worked fine. That stung a little, but it was the right call.",
        ],
      },
    ],
    closing: [
      "If you want to see where some of this landed, wele.in is live Career Compass and the AI learning companion are both out there being used by real students, which still feels a bit surreal to say. It’s not perfect. I catch things I’d rewrite constantly. But it’s real, it’s shipped, and that’s the part I’m proudest of.",
    ],
  },
  {
    slug: 'full-stack-architecture-choices-that-age-well',
    icon: Layers,
    title: 'Full-Stack Architecture Choices That Age Well',
    excerpt:
      'It starts with Purble Place, the cake-decorating game I was obsessed with as a kid, and somehow ends with how I actually decide between React, Next.js, and Node.',
    date: 'August 2026',
    readTime: '8 min read',
    tags: ['Architecture', 'MERN', 'JavaScript'],
    intro: [
      "I’ve rebuilt the same mental checklist so many times that I finally just wrote it down. This isn’t “the right way” to architect a full-stack app it’s just how I decide, project by project, without defaulting to whatever I used last time out of pure habit. But before the checklist, I have to explain the bias underneath it, because it starts somewhere kind of silly.",
    ],
    sections: [
      {
        heading: 'Purble Place',
        paragraphs: [
          "When I was a kid there was this Windows game called Purble Place the cake-decorating room specifically, drag the frosting, place the sprinkles exactly where you want them, watch it update instantly. I was obsessed. Not because it was deep or hard, but because every tiny action had an immediate, visible, satisfying result. Click, drag, done, it looks nicer now.",
          "Building UI in JavaScript gives me that exact feeling. I nudge a padding value, save, the browser hot-reloads, and there’s my little instant reward the layout breathes better now. I animate a hover state and it just feels good, the same dumb satisfaction as placing a sprinkle exactly where it belonged. I genuinely think that’s why frontend work never feels like a chore to me the way some other programming does. It’s playful. It’s tactile. It’s a game I never got bored of.",
        ],
      },
      {
        heading: 'Why I started front-end and never really left',
        paragraphs: [
          "I started as a frontend dev because that instant feedback loop hooked me first see it, touch it, fix it. Backend work is satisfying in its own quieter way, but you don’t get that same dopamine hit of “I moved a slider and the universe visibly changed.”",
          "That’s honestly the real reason I gravitate toward MERN. It’s not some grand architectural philosophy it’s that JavaScript lets me stay in the same headspace, the same language, the same “click and see it happen” mode, whether I’m touching the database, the API, or the button someone actually clicks. The whole stack feels like one continuous game board instead of three different games stitched together. Which brings me to the actual point of this post because loving JavaScript is not the same thing as using it correctly.",
        ],
      },
      {
        heading: 'Next.js vs. plain React the actual question',
        paragraphs: [
          "I don’t ask “is Next.js better.” I ask “does this thing need to be found by Google, and does it need to load fast for someone with a slow connection who’s never heard of it before.” If yes marketing site, blog, anything public-facing and SEO-sensitive Next.js earns its complexity. If the app lives behind a login and nobody’s Googling their way into it, a plain Vite + React app is lighter, boots faster in dev, and I’m not fighting the framework’s opinions about data fetching for no reason. This portfolio, for instance, is Vite. No SSR to justify, so why carry it.",
        ],
      },
      {
        heading: 'Why Node keeps winning for me',
        paragraphs: [
          "I could reach for other backend languages and sometimes I should. But honestly, staying in JavaScript/TypeScript end to end means I share types between frontend and backend, I don’t context-switch my brain mid-feature, and I can move a junior teammate between the two layers without retraining them. That’s not a technical argument, it’s a team-velocity one and velocity is an architecture decision too, people just forget that.",
          "Where I break from Node is background jobs that are genuinely CPU-heavy image processing, heavy number crunching. Node’s single-threaded event loop will happily choke on that, and no amount of clever code changes the math. That’s when I’ll spin out a worker in something better suited, and let Node stay the orchestrator it’s actually good at being.",
        ],
      },
      {
        heading: 'The rule I actually use',
        paragraphs: [
          "Pick the stack for the problem in front of you, not the stack from your last project. I started as a frontend dev, so I have a real gravitational pull toward MERN it’s comfortable, it’s fast to prototype in, and I can hold the whole system in my head. That’s a fine default. It stops being fine the moment I use it as an excuse to skip the five minutes of actually thinking about what this specific project needs.",
        ],
      },
    ],
    closing: [
      "So yeah underneath every one of these “rational” architecture decisions is just the Purble Place kid who liked placing sprinkles exactly where they belonged, still chasing that same instant, visible payoff. None of this is a hot take. It’s just the checklist, and the reason behind it, that’s saved me from a few decisions I would’ve regretted a year later.",
    ],
  },
  {
    slug: 'chasing-the-fde-title',
    icon: Compass,
    title: 'Chasing the FDE Title: What I’m Actually Learning',
    excerpt:
      'Trying to figure out what it really takes to be a Forward Deployed Engineer and learning it in public.',
    date: 'August 2026',
    readTime: '5 min read',
    tags: ['Career', 'FDE', 'Learning'],
    intro: [
      "I don’t have this one figured out yet, which is kind of the point of writing it down. FDE Forward Deployed Engineer is a title that got popular enough that everyone half-knows what it means and nobody fully agrees on the definition. Here’s my honest, in-progress attempt at learning what it actually takes.",
    ],
    sections: [
      {
        heading: 'What I think it actually means',
        paragraphs: [
          "From what I can tell, an FDE isn’t just “engineer who talks to customers.” It’s someone who can sit in front of a client who has a messy, half-explained problem, and turn that into working software fast often bending the product to fit a real use case instead of waiting for a roadmap slot. Part engineer, part consultant, part translator between “what the customer said” and “what the customer actually needs.”",
        ],
      },
      {
        heading: 'The skills I’m actively working on',
        paragraphs: [
          "Fast prototyping is the obvious one being able to stand something up in hours, not sprints, without it falling apart the moment someone touches it. I’m also deliberately practicing explaining technical tradeoffs to non-technical people without dumbing it down into nothing, because that’s a completely different muscle than writing clean code.",
          "The uncomfortable one is client-facing communication. I’m naturally more “give me the ticket and leave me alone,” and FDE work is the opposite of that it’s live, it’s in the room, it’s improvising when the demo breaks in front of the person you’re trying to impress. I’m not naturally smooth at that yet. I’m working on it the same way I’d debug anything else reps, feedback, iterate.",
        ],
      },
      {
        heading: 'Where the LMS work actually helps',
        paragraphs: [
          "Funny enough, shipping Career Compass on wele.in taught me a sliver of this already sitting with real student feedback, watching where a feature confused someone, and reshaping it on the fly instead of defending my first version. That’s a small taste of the FDE loop: build, sit with the real user, adjust, repeat. I want more of that, at a bigger scale, with messier problems.",
        ],
      },
    ],
    closing: [
      "No neat conclusion here I’m mid-way through figuring this out. But I’d rather write about it while I’m still learning than wait until I have a tidy answer that isn’t true yet.",
    ],
  },
];

export function getPostBySlug(slug: string | undefined): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
