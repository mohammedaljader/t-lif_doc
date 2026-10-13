// Grounded in the supplied July and September 2026 presentations.
// This documentation app is separate from the operational T-LIF system.
export const content = {
  name: 'T-LIF DOC',
  tagline: 'Teacher–LLMs Integrated Feedback System',
  description: 'T-LIF combines learning analytics and AI feedback drafting to support teachers in providing personalized feedback. Teachers review the evidence, refine the draft and approve what students receive.',
  portals: {teachers:'https://teacher.t-lif.com/', students:'https://student.t-lif.com/'},
  projectUrl: 'https://drive.tue.nl/projects/teacher-llms-integrated-feedback-t-lif-system/',
  research: [
    {tag:'PEDAGOGICAL FOUNDATION', title:'Feedback informed by learning evidence', text:'Combine achievement, qualitative information and learning analytics to support formative feedback.', detail:'The research foundation explores how achievement data, qualitative information and learning analytics can inform content-focused formative feedback. T-LIF builds on this approach to support feedback that reflects student learning evidence.', url:'https://doi.org/10.3390/educsci13101014', linkLabel:'Read the research paper'},
    {tag:'PARTICIPATORY DESIGN', title:'Design with students and teachers', text:'Use surveys, interviews, focus groups and design workshops to shape both interfaces.', detail:'The two-year design plan includes separate student and teacher activities. Year 1 (March 2026–February 2027) covers understanding needs, defining requirements, ideation, prototyping and laboratory/field testing. Year 2 (March 2027–February 2028) covers refinement, optimization, further testing and validation. These are planned activities, not claims of completed studies.'},
    {tag:'EVALUATION AIMS', title:'Study the quality and use of feedback', text:'Investigate personalized feedback, teacher workload and how students use learning suggestions.', detail:'The project aims to develop and validate T-LIF in Electrical Engineering and Industrial Engineering & Innovation Sciences. Evaluation priorities include feedback engagement monitoring and before/after learning comparisons. The aim is to examine feedback quality, student learning and teacher workload.'},
  ],
  priorities: [
    {level:'High', items:['Automated feedback platform','Actionable content suggestions','Rubric-based feedback','Learning progression analytics','Cohort analytics dashboard']},
    {level:'Medium', items:['Feedback engagement monitoring','Before/after learning evaluation']},
    {level:'Low', items:['AI transparency']},
  ],
  roadmap: [
    {stage:'Year 1', dates:'Mar 2026–Feb 2027', title:'Understand, prototype and test', items:['Student surveys and teacher interviews','Requirements and design workshops','Low- and high-fidelity functional prototypes','Laboratory and field testing']},
    {stage:'Year 2', dates:'Mar 2027–Feb 2028', title:'Refine, optimize and validate', items:['Post-pilot analysis and evaluation','Updated student and teacher designs','Further laboratory and field testing','Evaluation of the refined system']},
    {stage:'Discussion', dates:'Future iterations', title:'Questions for future iterations', items:['Feedback understanding ratings and reporting','Clear takeaways and next steps in charts','Historical-course comparisons','Generalizing T-LIF across contexts']},
  ],
  team: [
    {initials:'WL', name:'Weiwei Li', role:'Product Owner & Developer', text:'Eindhoven School of Education. Product and development contact.', email:'w.li@tue.nl', color:'green', group:'Development'},
    {initials:'MA', name:'Mohammed Aljader', role:'T-LIF Developer', text:'MSc Computer Science. Member of the T-LIF development team.', email:'m.aljader@student.tue.nl', color:'lavender', group:'Development'},
    {initials:'MB', name:'Mark Bentum', role:'Project contact · Electrical Engineering', text:'Dean, Electrical Engineering.', email:'m.j.bentum@tue.nl', color:'peach', group:'Project'},
    {initials:'EV', name:'Esther Ventura-Medina', role:'Project contact · Education', text:'Full Professor, Eindhoven School of Education.', email:'e.ventura.medina@tue.nl', color:'lavender', group:'Project'},
    {initials:'RS', name:'Ramiro Serra', role:'Project contact · Electrical Engineering', text:'Associate Professor, Electrical Engineering.', email:'r.serra@tue.nl', color:'green', group:'Project'},
    {initials:'PR', name:'Peter Ruijten-Dodoiu', role:'Project contact · IE&IS', text:'Assistant Professor, Industrial Engineering and Innovation Sciences.', email:'p.a.m.ruijten@tue.nl', color:'peach', group:'Project'},
  ],
  // Hardcoded introductory guides. Replace or extend when full tutorials are ready.
  tutorials: {
    teachers: [
      {shortTitle:'Open dashboard', title:'Explore the teacher dashboard', text:'Open the teacher interface to get familiar with the cohort overview and available learning evidence.'},
      {shortTitle:'Review evidence', title:'Review learning evidence and feedback', text:'Explore cohort progression and individual learning insights. In the Feedback Studio, compare the feedback draft with the evidence and refine its wording.'},
      {shortTitle:'Student feedback', title:'Prepare feedback for students', text:'Review the strengths, areas for improvement and suggested next steps. Follow the teacher workflow to prepare feedback for the student interface.'},
    ],
    students: [
      {shortTitle:'Open dashboard', title:'Explore the student dashboard', text:'Open the student interface to get familiar with your learning journey and the feedback available to you.'},
      {shortTitle:'Read feedback', title:'Understand your feedback', text:'Read the feedback alongside the learning insights. Identify your strengths and the areas that need more attention.'},
      {shortTitle:'Plan next steps', title:'Choose your next learning step', text:'Use the suggestions and relevant resources to decide what to work on next. Return to your learning journey to reflect on progress over time.'},
    ],
  },
  flows: {
    submission: {label:'Submission-based', trigger:'Triggered by an assignment submission', steps:['Student submits work','Process submission data','Generate an AI draft','Teacher reviews, edits and approves','Deliver personalized feedback']},
    trajectory: {label:'Trajectory-based', trigger:'Triggered on a scheduled learning cycle', steps:['Gather data over time','Analyze learning progression','Draft insights and suggestions','Teacher reviews and approves insights','Deliver trajectory feedback']},
  },
};
