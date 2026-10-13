import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { content } from './content';
import './styles.css';

function Icon({ name = 'arrow', size = 20, ...props }) {
	const paths = {
		arrow: (
			<>
				<path d="M5 12h14M13 6l6 6-6 6" />
			</>
		),
		check: <path d="m5 12 4 4L19 6" />,
		spark: (
			<>
				<path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5Z" />
			</>
		),
		book: (
			<>
				<path d="M3 4h6a4 4 0 0 1 3 2 4 4 0 0 1 3-2h6v15h-6a4 4 0 0 0-3 2 4 4 0 0 0-3-2H3Z" />
				<path d="M12 6v15" />
			</>
		),
		layers: (
			<>
				<path d="m12 3 10 6-10 6L2 9Z" />
				<path d="m2 14 10 6 10-6M2 19l10 6 10-6" />
			</>
		),
		play: <path d="m9 5 11 7-11 7Z" />,
		close: <path d="m6 6 12 12M6 18 18 6" />,
		menu: <path d="M4 6h16M4 12h16M4 18h16" />,
	};
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.7"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
			{...props}
		>
			{paths[name]}
		</svg>
	);
}
function Logo() {
	return (
		<span className="logo">
			<span
				className="tlif-mark"
				aria-hidden="true"
			>
				T
			</span>
			{content.name}
		</span>
	);
}
const nav = [
	['Product', 'product'],
	['Research', 'research'],
	['Development', 'development'],
	['Roadmap', 'roadmap'],
	['Team', 'team'],
];
const features = {
	students: [
		[
			'book',
			'01',
			'Understand your feedback',
			'View personalized feedback and learning suggestions in the student-facing interface.',
		],
		[
			'spark',
			'02',
			'See your learning journey',
			'Explore learning profiles and progression over time, with insights linked to course learning objectives.',
		],
		[
			'arrow',
			'03',
			'Know what to do next',
			'Use concrete next steps and relevant resources to guide preparation and learning.',
		],
	],
	teachers: [
		[
			'layers',
			'01',
			'Explore cohort evidence',
			'View submission overviews, cohort progression and individual learning data.',
		],
		[
			'spark',
			'02',
			'Work in the Feedback Studio',
			'Use analytics and AI drafts to craft contextual, learner-centred feedback.',
		],
		[
			'check',
			'03',
			'Review and approve',
			'Check the evidence, edit the narrative and approve feedback before delivery in the documented flow.',
		],
	],
};
function App() {
	const [menu, setMenu] = useState(false),
		[tab, setTab] = useState('teachers'),
		[research, setResearch] = useState(null),
		[step, setStep] = useState(0),
		[tutorialAudience, setTutorialAudience] = useState('teachers');
	const [flow, setFlow] = useState('submission');
	const mode = content.flows[flow];
	const tutorial = content.tutorials[tutorialAudience];
	useEffect(() => {
		if (!research) return;
		const previous = document.activeElement;
		const handler = (e) => {
			if (e.key === 'Escape') setResearch(null);
			if (e.key === 'Tab') {
				const focusable = [
					...document.querySelectorAll('.dialog button,.dialog a[href]'),
				];
				const first = focusable[0],
					last = focusable.at(-1);
				if (e.shiftKey && document.activeElement === first) {
					e.preventDefault();
					last.focus();
				} else if (!e.shiftKey && document.activeElement === last) {
					e.preventDefault();
					first.focus();
				}
			}
		};
		window.addEventListener('keydown', handler);
		document.querySelector('.dialog-close')?.focus();
		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = 'hidden';
		return () => {
			window.removeEventListener('keydown', handler);
			document.body.style.overflow = previousOverflow;
			previous?.focus();
		};
	}, [research]);
	return (
		<>
			<header inert={research ? true : undefined}>
				<a
					href="#"
					className="brand"
					aria-label="T-LIF DOC home"
				>
					<Logo />
				</a>
				<nav
					aria-label="Main navigation"
					className={menu ? 'open' : ''}
				>
					{nav.map(([label, id]) => (
						<a
							key={id}
							href={'#' + id}
							onClick={() => setMenu(false)}
						>
							{label}
						</a>
					))}
					<a
						href="#demo"
						className="nav-cta"
						onClick={() => setMenu(false)}
					>
						Feedback demo <Icon size={16} />
					</a>
				</nav>
				<button
					className="menu-toggle"
					aria-label={menu ? 'Close menu' : 'Open menu'}
					aria-expanded={menu}
					onClick={() => setMenu(!menu)}
				>
					<Icon name={menu ? 'close' : 'menu'} />
				</button>
			</header>
			<main inert={research ? true : undefined}>
				<section className="hero wrap">
					<div className="hero-copy">
						<span className="eyebrow">
							<span className="status-dot" /> T-LIF PROJECT DOCUMENTATION
						</span>
						<h1>
							Learning evidence.
							<br />
							AI assistance.
							<br />
							<span>Teacher judgement.</span>
						</h1>
						<p>{content.description}</p>
						<div className="button-row">
							<a
								className="button primary"
								href="#demo"
							>
								Explore the feedback flow <Icon />
							</a>
							<a
								className="text-link"
								href={content.projectUrl}
								target="_blank"
								rel="noreferrer"
							>
								TU/e project page <Icon size={17} />
							</a>
						</div>
						<div className="hero-note">
							<span className="project-badge">TU/e</span>
							<span>
								Electrical Engineering · IE&IS
								<br />
								<strong>Eindhoven School of Education</strong>
							</span>
						</div>
					</div>
					<div className="hero-art">
						<div className="orbit orbit-one" />
						<div className="orbit orbit-two" />
						<span className="art-label">TEACHER–LLMs INTEGRATED FEEDBACK</span>
						<div className="product-window">
							<div className="window-bar">
								<span className="window-dots">● ● ●</span>
								<span>T-LIF · FEEDBACK STUDIO</span>
								<Icon
									name="layers"
									size={16}
								/>
							</div>
							<div className="mock-heading">
								<span className="mock-logo">
									<Icon name="spark" />
								</span>
								<div>
									<b>Evidence into feedback.</b>
									<small>Submission-based · example preview</small>
								</div>
								<span className="mock-user">T</span>
							</div>
							<div className="mock-tabs">
								<span className="selected">Learning evidence</span>
								<span>AI draft</span>
								<span>Teacher review</span>
							</div>
							<div className="assignment">
								<small>ILLUSTRATIVE FEEDBACK DRAFT</small>
								<h3>Engineering application</h3>
								<p>
									Your submission{' '}
									<mark>explains the selected approach clearly.</mark>{' '}
									Strengthen the argument by{' '}
									<em>connecting evidence to the result.</em>
								</p>
								<div className="chips">
									<span className="chip strength">Strength identified</span>
									<span className="chip opportunity">Next step suggested</span>
								</div>
							</div>
							<div className="next-action">
								<span className="action-icon">
									<Icon
										name="check"
										size={17}
									/>
								</span>
								<div>
									<small>TEACHER REVIEW</small>
									<b>Review, edit and approve before delivery</b>
								</div>
								<Icon size={17} />
							</div>
							<div className="mock-bottom">
								<span>
									<i /> Teacher remains in control
								</span>
								<span>Fictional example</span>
							</div>
						</div>
						<div className="floating-note">
							<span>
								<Icon name="spark" />
							</span>
							<div>
								<b>Feedback students can use.</b>
								<small>Context, strengths and a concrete next step.</small>
							</div>
						</div>
						<div className="art-caption">
							EVIDENCE → ANALYTICS → DRAFT → REVIEW → FEEDBACK
						</div>
					</div>
				</section>
				<div className="principles wrap">
					<span>
						Teacher–LLMs
						<br />
						<b>Integrated Feedback System</b>
					</span>
					<div>
						<Icon name="layers" /> Learning analytics
					</div>
					<div>
						<Icon name="spark" /> AI-assisted drafting
					</div>
					<div>
						<Icon name="check" /> Teacher oversight
					</div>
				</div>
				<section
					className="section wrap"
					id="product"
				>
					<div className="section-heading">
						<div>
							<span className="eyebrow">01 / WHAT IS T-LIF?</span>
							<h2>
								Personalized feedback,
								<br />
								grounded in learning data.
							</h2>
						</div>
						<p>
							T-LIF connects a student interface, a teacher dashboard and a core
							analytics system. Together they support teacher decision-making
							and students’ learning journeys.
						</p>
					</div>
					<div
						className="audience-tabs"
						role="tablist"
						aria-label="Product audience"
					>
						{['teachers', 'students'].map((t) => (
							<button
								key={t}
								role="tab"
								id={t + '-tab'}
								aria-controls="audience-panel"
								aria-selected={tab === t}
								onClick={() => setTab(t)}
							>
								For {t}
							</button>
						))}
					</div>
					<div
						className="feature-grid"
						role="tabpanel"
						id="audience-panel"
						aria-labelledby={tab + '-tab'}
					>
						{features[tab].map(([icon, n, title, text]) => (
							<article
								className="feature"
								key={n}
							>
								<div className="feature-top">
									<span className="feature-icon">
										<Icon
											name={icon}
											size={25}
										/>
									</span>
									<span>{n}</span>
								</div>
								<h3>{title}</h3>
								<p>{text}</p>
							</article>
						))}
					</div>
				</section>
				<section
					className="research-section"
					id="research"
				>
					<div className="wrap section">
						<div className="section-heading">
							<div>
								<span className="eyebrow">02 / RESEARCH</span>
								<h2>
									Educational needs
									<br />
									shape the system.
								</h2>
							</div>
							<p>
								The project brings learning analytics into the feedback workflow
								and uses a design thinking approach with students and teachers.
								Evaluation remains an aim, not a proven result.
							</p>
						</div>
						<div className="research-grid">
							{content.research.map((r, i) => (
								<button
									className="research-card"
									key={r.title}
									onClick={() => setResearch(r)}
								>
									<div
										className={'research-graphic graphic-' + i}
										aria-hidden="true"
									>
										{i === 0 ? (
											<>
												<i />
												<i />
												<i />
											</>
										) : i === 1 ? (
											<>
												<span />
												<span />
												<span />
												<span />
											</>
										) : (
											<>
												<b />
												<b />
												<b />
												<b />
												<b />
											</>
										)}
									</div>
									<div className="research-body">
										<span className="eyebrow">{r.tag}</span>
										<h3>{r.title}</h3>
										<p>{r.text}</p>
										<span className="text-link">
											Read the background <Icon size={17} />
										</span>
									</div>
								</button>
							))}
						</div>
					</div>
				</section>
				<section
					className="section wrap"
					id="development"
				>
					<div className="section-heading">
						<div>
							<span className="eyebrow">03 / DEVELOPMENT & SYSTEM DESIGN</span>
							<h2>
								Two interfaces.
								<br />
								One integrated analytics core.
							</h2>
						</div>
						<p>
							The backend combines individual learning evidence with analytics
							and feedback generation. Role-specific interfaces present insights
							to students and teachers.
						</p>
					</div>
					<div className="architecture-layout">
						<figure>
							<img
								src="/images/system-architecture.png"
								alt="T-LIF architecture: student and teacher interfaces connected to a core analytics system, with external learning data retrieved through APIs."
								loading="lazy"
							/>
							<figcaption>
								System architecture.{' '}
								<a
									href="/images/system-architecture.png"
									target="_blank"
									rel="noreferrer"
								>
									Open full diagram ↗
								</a>
							</figcaption>
						</figure>
						<div className="architecture-notes">
							<article>
								<span className="eyebrow">LEARNING EVIDENCE</span>
								<h3>Multiple sources, course context</h3>
								<p>
									Learning evidence can come from Canvas LMS, Athena assessment,
									Osiris and YUJA. Inputs include quizzes, submissions, video
									engagement and course results.
								</p>
							</article>
							<article>
								<span className="eyebrow">ANALYTICS LAYERS</span>
								<h3>Profiles and progression</h3>
								<p>
									Learning profiles describe an individual at a point in time.
									Learning progression analysis follows development across
									learning cycles.
								</p>
							</article>
							<article>
								<span className="eyebrow">FEEDBACK STUDIO</span>
								<h3>Evidence supports teacher decisions</h3>
								<p>
									The documented flow lets a teacher inspect evidence, review
									the AI narrative and approve feedback for the student
									interface.
								</p>
							</article>
						</div>
					</div>
					<div className="workflow-doc">
						<div className="section-heading">
							<div>
								<span className="eyebrow">DOCUMENTED FEEDBACK FLOWS</span>
								<h3>A submission or a learning trajectory</h3>
							</div>
							<p>Choose a flow to see its trigger and review steps.</p>
						</div>
						<div
							className="audience-tabs"
							role="tablist"
							aria-label="Documented feedback flow"
						>
							{Object.entries(content.flows).map(([key, f]) => (
								<button
									key={key}
									id={'flow-' + key}
									role="tab"
									aria-selected={flow === key}
									aria-controls="workflow-panel"
									onClick={() => setFlow(key)}
								>
									{f.label}
								</button>
							))}
						</div>
						<div
							id="workflow-panel"
							role="tabpanel"
							aria-labelledby={'flow-' + flow}
						>
							<p className="flow-trigger">{mode.trigger}</p>
							<ol className="flow-steps">
								{mode.steps.map((s, i) => (
									<li key={s}>
										<span>0{i + 1}</span>
										<p>{s}</p>
									</li>
								))}
							</ol>
						</div>
					</div>
				</section>
				<section
					className="demo-section"
					id="demo"
				>
					<div className="wrap section">
						<div className="section-heading">
							<div>
								<span className="eyebrow">04 / INTERACTIVE DEMO</span>
								<h2>
									Explore T-LIF.
									<br />
									Choose your experience.
								</h2>
							</div>
							<p>Open the teacher or student interface to explore T-LIF.</p>
						</div>
						<div className="portal-grid">
							<article className="portal-card">
								<span className="portal-icon">
									<Icon
										name="layers"
										size={28}
									/>
								</span>
								<span className="eyebrow">FOR TEACHERS</span>
								<h3>Teacher dashboard</h3>
								<p>
									Explore learning evidence, cohort insights and the Feedback
									Studio.
								</p>
								<a
									className="button lime"
									href={content.portals.teachers}
									target="_blank"
									rel="noopener noreferrer"
								>
									Open teacher demo <Icon size={18} />
								</a>
							</article>
							<article className="portal-card">
								<span className="portal-icon">
									<Icon
										name="book"
										size={28}
									/>
								</span>
								<span className="eyebrow">FOR STUDENTS</span>
								<h3>Student dashboard</h3>
								<p>
									Explore personalized feedback, learning progress and suggested
									next steps.
								</p>
								<a
									className="button lime"
									href={content.portals.students}
									target="_blank"
									rel="noopener noreferrer"
								>
									Open student demo <Icon size={18} />
								</a>
							</article>
						</div>
					</div>
				</section>
				<section
					className="section wrap tutorial"
					id="tutorial"
				>
					<div>
						<span className="eyebrow">QUICK TUTORIAL</span>
						<h2>The teacher and student guide.</h2>
						<p>Get started with the T-LIF experience that fits your role.</p>
					</div>
					<div>
						<div
							className="audience-tabs"
							role="tablist"
							aria-label="Tutorial audience"
						>
							{['teachers', 'students'].map((a) => (
								<button
									key={a}
									id={'tutorial-' + a}
									role="tab"
									aria-selected={tutorialAudience === a}
									aria-controls="tutorial-audience-panel"
									onClick={() => {
										setTutorialAudience(a);
										setStep(0);
									}}
								>
									For {a}
								</button>
							))}
						</div>
						<div
							className="tutorial-panel"
							id="tutorial-audience-panel"
							role="tabpanel"
							aria-labelledby={'tutorial-' + tutorialAudience}
						>
							<div
								className="step-tabs"
								role="tablist"
								aria-label="Tutorial steps"
							>
								{tutorial.map((t, i) => (
									<button
										key={i}
										id={'step-' + i}
										role="tab"
										aria-selected={step === i}
										aria-controls="tutorial-panel"
										onClick={() => setStep(i)}
									>
										0{i + 1}
										<span>{t.shortTitle}</span>
									</button>
								))}
							</div>
							<div
								role="tabpanel"
								id="tutorial-panel"
								aria-labelledby={'step-' + step}
							>
								<span className="eyebrow">
									{tutorialAudience.toUpperCase()} · STEP 0{step + 1} OF 03
								</span>
								<h3>{tutorial[step].title}</h3>
								<p>{tutorial[step].text}</p>
								{step < 2 ? (
									<button
										className="text-link"
										onClick={() => setStep(step + 1)}
									>
										Next step <Icon size={17} />
									</button>
								) : (
									<a
										className="text-link"
										href={content.portals[tutorialAudience]}
										target="_blank"
										rel="noopener noreferrer"
									>
										Open{' '}
										{tutorialAudience === 'teachers' ? 'teacher' : 'student'}{' '}
										demo <Icon size={17} />
									</a>
								)}
							</div>
						</div>
					</div>
				</section>
				<section
					className="roadmap-section"
					id="roadmap"
				>
					<div className="section wrap">
						<div className="section-heading">
							<div>
								<span className="eyebrow">05 / DEVELOPMENT PLAN</span>
								<h2>Priorities and the path ahead.</h2>
							</div>
							<p>
								Development priorities for October 2026 and the two-year plan.
								Planned activities will evolve as the project progresses.
							</p>
						</div>
						<div className="priority-grid">
							{content.priorities.map((p) => (
								<article key={p.level}>
									<span
										className={
											'priority-label priority-' + p.level.toLowerCase()
										}
									>
										{p.level} priority
									</span>
									<ul>
										{p.items.map((item) => (
											<li key={item}>{item}</li>
										))}
									</ul>
								</article>
							))}
						</div>
						<p className="source-note">
							Prioritization weights: importance 70%, frequency of use 30%.
						</p>
						<div className="roadmap-grid">
							{content.roadmap.map((r, i) => (
								<article key={r.stage}>
									<span className={'roadmap-stage stage-' + i}>
										<i />
										{r.stage}
									</span>
									<p className="roadmap-dates">{r.dates}</p>
									<h3>{r.title}</h3>
									<ul>
										{r.items.map((item) => (
											<li key={item}>
												<Icon
													name="check"
													size={15}
												/>
												{item}
											</li>
										))}
									</ul>
								</article>
							))}
						</div>
					</div>
				</section>
				<section
					className="section wrap"
					id="team"
				>
					<div className="section-heading">
						<div>
							<span className="eyebrow">06 / TEAM & PROJECT CONTACTS</span>
							<h2>The people behind T-LIF.</h2>
						</div>
						<p>
							Meet the development team and project contacts across engineering
							and education.
						</p>
					</div>
					<div className="team-grid">
						{content.team.map((t) => (
							<article key={t.name}>
								<div className={'team-portrait ' + t.color}>
									<span>{t.initials}</span>
									<div className="portrait-orbit" />
									<span className="portrait-label">
										{t.group.toUpperCase()}
									</span>
								</div>
								<h3>{t.name}</h3>
								<span className="team-role">{t.role}</span>
								<p>{t.text}</p>
								<a
									className="team-email"
									href={'mailto:' + t.email}
								>
									{t.email} <Icon size={13} />
								</a>
							</article>
						))}
					</div>
				</section>
				<section className="closing wrap">
					<div>
						<span className="eyebrow">T-LIF DOCUMENTATION & DEMONSTRATION</span>
						<h2>
							Explore the system.
							<br />
							Understand the workflow.
						</h2>
						<p>
							See how learning evidence informs a draft
							<br />
							and how teacher review shapes student feedback.
						</p>
						<a
							className="button lime"
							href="#demo"
						>
							Try the Feedback Studio <Icon />
						</a>
					</div>
					<div
						className="closing-art"
						aria-hidden="true"
					>
						<i />
						<i />
						<span>
							Teacher
							<br />
							in control ↗
						</span>
					</div>
				</section>
			</main>
			<footer
				className="wrap"
				inert={research ? true : undefined}
			>
				<div>
					<a
						className="brand"
						href="#"
					>
						<Logo />
					</a>
					<p>{content.tagline}</p>
				</div>
				<div className="footer-links">
					<a
						href={content.projectUrl}
						target="_blank"
						rel="noreferrer"
					>
						TU/e project
					</a>
					<a href="#research">Research</a>
					<a href="#team">Contact</a>
					<a href="#tutorial">Tutorial</a>
				</div>
				<div className="footer-bottom">
					<span>
						© {new Date().getFullYear()} T-LIF DOC · Project documentation
					</span>
					<span>Learning analytics · AI assistance · Teacher judgement</span>
				</div>
			</footer>
			{research && (
				<div
					className="modal-backdrop"
					onClick={() => setResearch(null)}
				>
					<div
						className="dialog"
						role="dialog"
						aria-modal="true"
						aria-labelledby="dialog-title"
						onClick={(e) => e.stopPropagation()}
					>
						<button
							className="dialog-close"
							aria-label="Close research details"
							onClick={() => setResearch(null)}
						>
							<Icon name="close" />
						</button>
						<span className="eyebrow">{research.tag}</span>
						<h2 id="dialog-title">{research.title}</h2>
						<p>{research.detail}</p>
						{research.url && (
							<a
								className="text-link dialog-source-link"
								href={research.url}
								target="_blank"
								rel="noreferrer"
							>
								{research.linkLabel} <Icon size={16} />
							</a>
						)}
					</div>
				</div>
			)}
		</>
	);
}
createRoot(document.getElementById('root')).render(<App />);
