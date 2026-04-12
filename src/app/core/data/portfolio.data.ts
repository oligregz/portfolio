import { IPortfolioData } from '../models/portfolio.models';

export const PORTFOLIO_DATA: IPortfolioData = {
	name: 'Gregory Oliveira Souza',
	title: 'Fullstack Developer',
	location: 'São Paulo, SP, Brazil',
	phone: '+55 75 991689780',
	email: 'gregorysak90@gmail.com',
	linkedin: 'linkedin.com/in/gregory-oliveira',
	github: 'github.com/oligregz',
	about: 'Fullstack developer focused on designing and implementing scalable web applications. I have extensive experience across the entire development lifecycle, from microservices architecture and event-driven systems (EDA) to deployment in cloud infrastructures. Passionate about clean code, performance, and continuous delivery.',
	technologies: [
		{ name: 'TypeScript' }, { name: 'Angular' }, { name: 'React' }, { name: 'Node.js' },
		{ name: 'NestJS' }, { name: 'Spring Boot' }, { name: 'Java' }, { name: 'AWS' },
		{ name: 'Oracle Cloud' }, { name: 'Docker' }, { name: 'RabbitMQ' }, { name: 'PostgreSQL' }
	],
	experiences: [
		{
			id: 'exp-1',
			role: 'Fullstack Developer',
			company: 'Tokenlab',
			location: 'São Paulo, SP (Remote)',
			period: '2025 - Present',
			description: [
				'Developed scalable web applications utilizing TypeScript, Angular, React, and NestJS, ensuring clean code and high performance.',
				'Designed RESTful APIs and microservices with JWT authentication, managing containerized infrastructure (Docker) and AWS deployments (EC2, Lambda, API Gateway, S3, RDS).',
				'Built automated (CI/CD) and reliable manual release pipelines, ensuring system stability through rigorous unit and integration testing with Jest.'
			],
			technologies: [{ name: 'Angular' }, { name: 'React' }, { name: 'NestJS' }, { name: 'AWS' }, { name: 'Docker' }, { name: 'Jest' }]
		},
		{
			id: 'exp-2',
			role: 'Backend Developer',
			company: 'Enacom',
			location: 'Santo Antônio de Jesus, BA (Remote)',
			period: '2024 - 2025',
			description: [
				'Optimized task initialization times by 66% and reduced user costs by 28% through internal system improvements in the steel industry.',
				'Developed a debt renegotiation portal for the energy sector, offering intelligent algorithms that increased successful renegotiations by 31%.',
				'Automated report generation, reducing processing time from 8 minutes to 2 minutes (75% improvement).'
			],
			technologies: [{ name: 'Node.js' }, { name: 'AWS' }, { name: 'MongoDB' }, { name: 'Azure DevOps' }]
		},
		{
			id: 'exp-3',
			role: 'IT Support',
			company: 'Unifrio LTDA',
			location: 'Santo Antônio de Jesus, BA (On-site)',
			period: '2023 - 2024',
			description: [
				'Led the technology department, establishing standardized workflows for support tickets, increasing problem resolution efficiency by 18%.',
				'Optimized monthly expenses with external services by 7% through strategic management.'
			],
			technologies: []
		},
		{
			id: 'exp-4',
			role: 'Fullstack Developer (Volunteer)',
			company: 'Skill Labs',
			location: 'Santo Antônio de Jesus, BA (Remote)',
			period: '2022 - 2023',
			description: [
				'Developed applications across two projects using TypeScript, Fastify, React, and PostgreSQL, with deployment via Render.',
				'Collaborated within Scrum frameworks, implementing SOLID principles, SMTPS services, and CI/CD workflows.'
			],
			technologies: [{ name: 'React' }, { name: 'Fastify' }, { name: 'PostgreSQL' }, { name: 'TypeScript' }]
		}
	],
	projects: [
		{
			id: 'proj-1',
			title: 'PDF Processor',
			description: 'Fullstack, distributed, event-driven system for background text extraction. Architected with concurrency limits, rate limiting, and WebSockets. Developed in collaboration with advanced AI tools (gemini cli).',
			technologies: [{ name: 'Angular 21' }, { name: 'NestJS' }, { name: 'Spring Boot' }, { name: 'RabbitMQ' }, { name: 'Cloudflare R2' }],
			repositoryUrl: 'github.com/oligregz/pdf-processor',
			liveUrl: 'https://pdf-processor-kappa-two.vercel.app',
			isHighlight: true
		},
		{
			id: 'proj-2',
			title: 'Chega Fácil App',
			description: 'Application to simulate trip request flow by integrating external Google APIs (DistanceMatrix, Geocode) with PostgreSQL persistence.',
			technologies: [{ name: 'React' }, { name: 'NestJS' }, { name: 'Prisma' }, { name: 'Docker' }],
			repositoryUrl: 'github.com/oligregz/chega-facil-app',
			isHighlight: false
		},
		{
			id: 'proj-3',
			title: 'Phoenician Manager',
			description: 'Tool for capturing data from CSV files and updating the database, inspired by Phoenician pricing.',
			technologies: [{ name: 'React' }, { name: 'Express' }, { name: 'Prisma' }, { name: 'MySQL' }],
			repositoryUrl: 'github.com/oligregz/phoenician-manager',
			isHighlight: false
		}
	],
	education: [
		{ institution: 'University Estácio de Sá', degree: 'Bachelor\'s Degree in Software Engineering', period: '07/2023 - 07/2027' },
		{ institution: 'Trybe, Feat com SCC4', degree: 'Programa de Aceleração JAVA', period: '01/2022 - 04/2022' }
	],
	languages: [
		{ language: 'Português', proficiency: 'Fluent/C2' },
		{ language: 'Inglês', proficiency: 'B1' },
		{ language: 'Espanhol', proficiency: 'B1' }
	],
	profilePicture: 'https://media.licdn.com/dms/image/v2/D4E03AQGwLwoPxCEPZw/profile-displayphoto-scale_400_400/B4EZw6l7a.HgAk-/0/1770509553746?e=1777507200&v=beta&t=8nDHf7MDXt0VNUOVpuDhtsorxGC-im03A6NU8wu2K10',
	publications: [
		{
			title: 'PDF Processor App',
			url: 'https://www.linkedin.com/pulse/pdf-processor-app-gregory-oliveira-7enyf/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B1fAcDMF9T82Tn0FRaYO04w%3D%3D',
			imageUrl: 'https://media.licdn.com/dms/image/v2/D4D12AQE8djOGG_a7jQ/article-cover_image-shrink_720_1280/B4DZ1fsWeJHkAI-/0/1775426960729?e=1777507200&v=beta&t=ApUlEOHLH0wTJuINpuRXwzTmtjVidtPb7HLdaYZHO08',
			date: 'Março 2026',
			platform: 'LinkedIn'
		},
		{
			title: 'Custom exception with @Decorator',
			url: 'https://www.linkedin.com/pulse/decorator-gregory-oliveira-3s1uf/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B1fAcDMF9T82Tn0FRaYO04w%3D%3D',
			imageUrl: 'https://media.licdn.com/dms/image/v2/D4D12AQH0ierwB4Nbsg/article-cover_image-shrink_720_1280/B4DZzDTFmzJ4AI-/0/1772803096727?e=1777507200&v=beta&t=OisrhbjeAJkiki9fYiibqN1AlVzleO4L4HNZ0T32lMY',
			date: 'Janeiro 2026',
			platform: 'LinkedIn'
		}
	]
};