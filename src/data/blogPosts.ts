import { BlogPost } from '../types';

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "TTT Models Might Be the Next Frontier in Generative AI",
    description: "Desc",
    fullDescription: `After years of dominance by the form of AI known as the transformer, the hunt is on for new architectures.

Transformers underpin OpenAI’s video-generating model Sora, and they’re at the heart of text-generating models like Anthropic’s Claude, Google’s Gemini and GPT-4o. But they’re beginning to run up against technical roadblocks — in particular, computation-related roadblocks.

Transformers aren’t especially efficient at processing and analyzing vast amounts of data, at least running on off-the-shelf hardware. And that’s leading to steep and perhaps unsustainable increases in power demand as companies build and expand infrastructure to accommodate transformers’ requirements.

A promising architecture proposed this month is test-time training (TTT), which was developed over the course of a year and a half by researchers at Stanford, UC San Diego, UC Berkeley and Meta. The research team claims that TTT models can not only process far more data than transformers, but that they can do so without consuming nearly as much compute power.`,
    image: "/images/img_1.png",
    date: "16 July 2024",
    author: "Kyle Wiggers",
    badges: [
      { color: 'indigo', text: 'Badge 1' },
      { color: 'indigo', text: 'Badge 2' },
      { color: 'indigo', text: 'Badge 3' },
    ],
  },
    {
      id: 2,
      title: "Instagram will help researchers study if it's hurting teen mental health",
      description: "Desc",
      fullDescription: `Instagram will let a select group of researchers access its data to study how the platform affects the mental health of teens and young adults. The pilot program, launched in partnership with the Center for Open Science (COS), could produce independent studies that offer insight into the relationship between social media and a teen’s well-being.
      
      Researchers will gain access to Instagram data for up to six months, which may include information on how many accounts a teen follows, how much they use Instagram, their account settings, and more. However, Meta notes it won’t provide access to a user’s demographic information, nor will it include the contents of their posts, comments, or messages.
      
      Through the program, first reported by The Atlantic, COS will choose up to seven research proposals in different areas related to the mental health of teens. (Meta will not be involved in the process.) Researchers must also recruit the teen participants and get their parents’ permission. COS says the study of data directly from Instagram could help “contribute to understanding of well-being when combined with other sources of data,” such as surveys and other types of studies.
      
      “Parents, policymakers, academics and technology companies are grappling with how best to support young people as they navigate online spaces, but we need more data to understand the full picture,” Curtiss Cobb, Meta’s vice president of research, said in a statement.
      
      Instagram’s effect on the mental health of teens has been in the spotlight for a while now. In 2021, Facebook whistleblower Frances Haugen came forward with a trove of leaked documents, including internal research that suggested “teens blame Instagram for increases in the rate of anxiety and depression.” Scientists later called on Meta to make its mental health research more accessible.
      
      Instagram has since rolled out features intended to protect kids on the app, but concerns about Instagram — and other online platforms — remain, leading to a deluge of child safety bills and age verification laws across the US.`,
      image: "/images/img_2.png",
      date: "16 July 2024",
      author: "Kylie Robison",
      badges: [
        { color: 'indigo', text: 'Badge 1' },
        { color: 'indigo', text: 'Badge 2' },
        { color: 'indigo', text: 'Badge 3' },
      ],
    },
    {
      id: 3,
      title: "The ‘godmother of AI’ has a new startup already worth $1 billion",
      description: "Desc",
      fullDescription: `Fei-Fei Li, the renowned computer scientist known as the “godmother of AI,” has created a startup dubbed World Labs. In just four months, it’s already valued at more than $1 billion, the Financial Times reported.
      
      World Labs hopes to use human-like processing of visual data to make AI capable of advanced reasoning, Reuters reported in May. The research to make it human-like, much like what ChatGPT is trying to do with generative AI, is still ongoing.
      
      Li is best known for her contributions to computer vision, a branch of AI dedicated to helping machines interpret and comprehend visual information. She also spearheaded the development of ImageNet, an extensive visual database used for visual object recognition research. Li headed AI at Google Cloud from 2017 to 2018 and currently advises the White House task force on AI.
      
      “[World Labs] is developing a model that understands the three-dimensional physical world; essentially the dimensions of objects, where things are and what they do,” an anonymous venture capitalist with knowledge of Li’s work told the Financial Times.
      
      The startup has had two funding rounds, the latest was about $100 million, and it’s backed by Andreessen Horowitz and the AI fund Radical Ventures (which Li joined as a partner last year). Li founded World Labs while on partial leave from Stanford, where she co-directs the university’s Human-Centered AI Institute.
      
      In a Ted Talk in April, Li further explained the field of research her startup will work on advancing, which involves algorithms capable of realistically extrapolating images and text into three-dimensional environments and acting on those predictions, using a concept known as “spatial intelligence.” This could bolster work in various fields such as robotics, augmented reality, virtual reality, and computer vision. If these capabilities continue to advance in the ambitious ways Li plans, it has the potential to transform industries like healthcare and manufacturing.
      
      The investment in World Labs reflects a trend where venture capitalists eagerly align themselves with ambitious AI companies, spurred by the surprise success of OpenAI’s ChatGPT, which rapidly achieved a valuation exceeding $80 billion.`,
      image: "/images/img_3.png",
      date: "16 July 2024",
      author: "Allison Johnson",
      badges: [
        { color: 'indigo', text: 'Badge 1' },
        { color: 'indigo', text: 'Badge 2' },
        { color: 'indigo', text: 'Badge 3' },
      ],
    },
    {
      id: 4,
      title: "Samsung’s new image-generating AI tool is a little too good",
      description: "Desc",
      fullDescription: `The pirate ship in Elliott Bay was one thing, but it was a little blurry bee that sent me over the edge.
      
      Samsung would very much like us (and its shareholders) to know that its new phones are the AI-est phones that ever AI-ed, and the Fold 6 that I’m testing comes with a new tool called “sketch to image.” Draw a rough sketch on a photo or an empty note page, and it will use generative AI to turn that thing into an image. I shrugged it off as just another AI thing when Samsung announced it onstage at Unpacked — but y’all, it’s really good. So good that it worries me a little.
      
      Using the sketch to image tool in a note is pretty harmless: you draw something, highlight it, and choose from a handful of styles like “3D cartoon” and “illustration” to turn your doodle into something more detailed. Your image is sent to the cloud, and after a few moments, you’ll see a handful of options to choose from. The results are usually cute and fun; I took requests from my two-year-old, and we drew goofy-looking dump trucks and school buses. Sometimes you get a teddy bear with too many arms, but nothing serious.`,
      image: "/images/img_4.png",
      date: "16 July 2024",
      author: "Emma Roth",
      badges: [
        { color: 'indigo', text: 'Badge 1' },
        { color: 'indigo', text: 'Badge 2' },
        { color: 'indigo', text: 'Badge 3' },
      ],
    },
  ];