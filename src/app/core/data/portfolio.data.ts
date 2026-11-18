import { IPortfolioData } from '../models/portfolio.models';

export const PORTFOLIO_DATA_PT: IPortfolioData = {
	name: 'Gregory Oliveira',
	title: 'Software Developer | Fullstack | AI | TypeScript - Node.js | AWS | JAVA - Spring Boot',
	location: 'São Paulo, São Paulo, Brazil',
	phone: '+55 75 9 91689780',
	whatsapp: '+55 11 91189-2868',
	email: 'gregorysak90@gmail.com',
	linkedin: 'www.linkedin.com/in/gregory-oliveira',
	github: 'github.com/oligregz',
	about: 'Engenheiro de Software Backend com base Fullstack consolidada, focado em converter complexidade técnica em eficiência operacional. Minha trajetória inclui o desenvolvimento de sistemas críticos para as indústrias siderúrgica, de energia e processos legais, priorizando estabilidade e resultados de negócio mensuráveis — com destaque, em projetos recentes, para a redução de 28% em custos operacionais em nuvem e o ganho de 75% na performance de processamento de dados. Com domínio dos ecossistemas Node.js, TypeScript e Java na construção de microsserviços e APIs resilientes, atuo de ponta a ponta no ciclo de desenvolvimento de software, da modelagem de bancos de dados (SQL/NoSQL) à orquestração de infraestrutura com AWS e Docker, em evolução contínua na Engenharia de Software.',
	profilePicture: '/assets/aistudio/profile-pic_74b74833.png',
	technologies: [
		{ name: 'TypeScript' }, { name: 'Node.js' }, { name: 'NestJS' }, { name: 'Fastify' },
		{ name: 'Express' }, { name: 'Java (Spring Boot)' }, { name: 'Angular' }, { name: 'React' },
		{ name: 'AWS (SQS, SNS, Lambda, EC2, S3)' }, { name: 'Docker' }, { name: 'PostgreSQL' }, { name: 'MongoDB' },
		{ name: 'RabbitMQ' }, { name: 'Jest' }, { name: 'CI/CD' }, { name: 'Azure DevOps' }
	],
	experiences: [
		{
			id: 'exp-1',
			role: 'Back End Developer',
			company: 'Tokenlab',
			location: 'São Paulo, SP, Brazil',
			period: 'Janeiro 2026 - Presente (11 meses)',
			description: [
				'Foco exclusivo no ecossistema backend, responsável pelo design, desenvolvimento e manutenção de arquitetura distribuída e escalável.',
				'Arquitetura Distribuída & API Core: Desenvolvimento do core e microsserviços usando TypeScript, garantindo alta disponibilidade, tipagem estática rigorosa e aplicação de princípios SOLID e Clean Code.',
				'Regras de Negócio Complexas: Engenharia de serviços isolados para domínios específicos, incluindo a construção de um motor de cálculo para correção monetária baseado em índices do mercado financeiro brasileiro e um microsserviço dedicado a processamento massivo de PDFs.',
				'Mensageria & Arquitetura Orientada a Eventos (EDA): Design de comunicação assíncrona, resiliente e tolerante a falhas entre serviços usando filas AWS SQS e tópicos AWS SNS.',
				'Otimização Cloud & Serverless: Criação de rotinas automatizadas com AWS Lambda para controle inteligente das janelas operacionais de microsserviços (horário comercial), visando alta eficiência operacional e redução drástica de custos com infraestrutura ociosa.',
				'Qualidade & Entrega: Manutenção de padrões de qualidade de código através de testes automatizados e integração contínua (CI/CD), garantindo escala segura do ecossistema de microsserviços.'
			],
			technologies: [{ name: 'TypeScript' }, { name: 'Node.js' }, { name: 'Microservices' }, { name: 'AWS (SQS, SNS, Lambda)' }, { name: 'RESTful APIs' }, { name: 'EDA' }, { name: 'Automated Testing' }]
		},
		{
			id: 'exp-2',
			role: 'Full Stack Developer',
			company: 'Tokenlab',
			location: 'São Paulo, Brazil',
			period: 'Abril 2025 - Janeiro 2026 (10 meses)',
			description: [
				'Desenvolvimento de aplicações web escaláveis usando TypeScript, Angular, React, Node.js, Nest.js e AWS, abrangendo todo o ciclo de vida de desenvolvimento.',
				'Desenvolvimento Frontend: Criação de UIs responsivas com Angular e React, utilizando Bootstrap e TypeScript. Gestão de deploys frontend na AWS S3.',
				'Desenvolvimento Backend: Desenvolvimento de APIs RESTful com Node.js, Express e Nest.js, implementação de autenticação JWT, microsserviços e deploys na AWS EC2, Lambda e API Gateway.',
				'Testes & Qualidade: Escrita de testes unitários e de integração com Jest para garantir confiabilidade e manutenibilidade.',
				'Cloud & DevOps: Gestão de infraestrutura AWS e gerenciamento de containers com Docker para serviços backend.',
				'Colaboração Ágil: Atuação em ambientes ágeis usando Jira, Scrum e Kanban.'
			],
			technologies: [{ name: 'TypeScript' }, { name: 'Angular' }, { name: 'React' }, { name: 'Node.js' }, { name: 'Nest.js' }, { name: 'Express' }, { name: 'Jest' }, { name: 'Docker' }, { name: 'AWS (S3, EC2, Lambda)' }]
		},
		{
			id: 'exp-3',
			role: 'Back-end Developer',
			company: 'Enacom Group',
			location: 'Santo Antônio de Jesus, BA, Brazil',
			period: 'Janeiro 2024 - Outubro 2024 (10 meses)',
			description: [
				'Atuação em 3 projetos de alta complexidade: 1 no nicho da indústria siderúrgica e 2 no setor de energia.',
				'Projeto Siderurgia: Implementação de features que aumentaram a otimização do tempo de lançamento de tarefas em 66% e reduziram custos dos usuários em 28%.',
				'Projetos Energia: 1. Portal de renegociação de dívidas com descontos inteligentes (aumento de 31% em renegociações bem-sucedidas). 2. Automação de relatórios (otimização de tempo de 8 minutos para 2 minutos, melhoria de 75%).',
				'Boas práticas de programação, criptografia de dados para clientes, restrições de acessibilidade de usuários, serviços de log (OpenShift) e AWS (EC2, SQS, S3).'
			],
			technologies: [{ name: 'JavaScript' }, { name: 'Mongoose' }, { name: 'MongoDB' }, { name: 'Sonar' }, { name: 'Azure DevOps' }, { name: 'Docker' }, { name: 'OpenShift' }, { name: 'AWS' }]
		},
		{
			id: 'exp-4',
			role: 'IT Technician',
			company: 'Unifrio Refrigeração Ltda',
			location: 'Santo Antônio de Jesus, Bahia, Brazil',
			period: 'Novembro 2023 - Janeiro 2024 (3 meses)',
			description: [
				'Suporte a hardware de servidores, CPUs e sistema Winthor na Unifrio Ltda.'
			],
			technologies: [{ name: 'TOTVS Winthor' }, { name: 'Hardware Support' }, { name: 'Linux' }]
		},
		{
			id: 'exp-5',
			role: 'Back-end Developer',
			company: 'Skill Labs.',
			location: 'Santo Antônio de Jesus, BA, Brazil',
			period: 'Julho 2023 - Janeiro 2024 (7 meses)',
			description: [
				'Atuação em 2 projetos: 1 no nicho de app store e 1 portal de apresentação.',
				'Aprendizado e aplicação de Scrum, fluxo CI/CD, serviços SMTPS, princípios SOLID e integração frontend.'
			],
			technologies: [{ name: 'TypeScript' }, { name: 'Fastify' }, { name: 'Postgres' }, { name: 'Render' }, { name: 'React' }]
		}
	],
	projects: [
		{
			id: 'proj-1',
			title: 'PDF Processor',
			description: 'Sistema distribuído full-stack construído para lidar com a extração de texto de arquivos PDF em segundo plano. Arquitetado com limite estrito de concorrência (5 simultâneos), rate limit em memória (3 uploads a cada 24h), mensageria RabbitMQ entre NestJS API Gateway e Java Spring Boot background worker, armazenamento no Cloudflare R2 e frontend em Angular 21.',
			technologies: [
				{ name: 'Angular 21' }, { name: 'NestJS' }, { name: 'Java 17' }, { name: 'Spring Boot' },
				{ name: 'RabbitMQ' }, { name: 'Cloudflare R2' }, { name: 'PostgreSQL' }, { name: 'Docker' }
			],
			repositoryUrl: 'github.com/oligregz/pdf-processor',
			liveUrl: 'https://pdf-processor-kappa-two.vercel.app',
			isHighlight: true
		},
		{
			id: 'proj-2',
			title: 'Chega Fácil App',
			description: 'Aplicação para simular fluxo de solicitação de viagens integrando APIs externas do Google (DistanceMatrix, Geocode) com persistência em PostgreSQL.',
			technologies: [{ name: 'React' }, { name: 'NestJS' }, { name: 'Prisma' }, { name: 'Docker' }],
			repositoryUrl: 'github.com/oligregz/chega-facil-app',
			isHighlight: false
		},
		{
			id: 'proj-3',
			title: 'Phoenician Manager',
			description: 'Ferramenta para captura de dados de arquivos CSV e atualização do banco de dados, inspirada na precificação fenícia.',
			technologies: [{ name: 'React' }, { name: 'Express' }, { name: 'Prisma' }, { name: 'MySQL' }],
			repositoryUrl: 'github.com/oligregz/phoenician-manager',
			isHighlight: false
		}
	],
	education: [
		{
			institution: 'Estácio',
			degree: 'Bacharelado, Engenharia de Software',
			period: 'Julho 2023 - Julho 2027'
		},
		{
			institution: 'Trybe',
			degree: 'Desenvolvedor de Software Web',
			period: 'Agosto 2021 - Agosto 2022'
		}
	],
	languages: [
		{ language: 'Português', proficiency: 'Nativo' },
		{ language: 'Inglês', proficiency: 'B2 / Intermediário Avançado' }
	],
	publications: [
		{
			title: 'PDF Processor App: Construindo um Sistema Distribuído Resiliente',
			url: 'https://www.linkedin.com/pulse/pdf-processor-app-gregory-oliveira-7enyf/',
			imageUrl: 'https://media.licdn.com/dms/image/v2/D4D12AQE8djOGG_a7jQ/article-cover_image-shrink_720_1280/B4DZ1fsWeJHkAI-/0/1775426960729?e=1777507200&v=beta&t=ApUlEOHLH0wTJuINpuRXwzTmtjVidtPb7HLdaYZHO08',
			date: 'Março 2026',
			platform: 'LinkedIn'
		},
		{
			title: 'Custom exception with @Decorator',
			url: 'https://www.linkedin.com/pulse/decorator-gregory-oliveira-3s1uf/',
			imageUrl: 'https://media.licdn.com/dms/image/v2/D4D12AQH0ierwB4Nbsg/article-cover_image-shrink_720_1280/B4DZzDTFmzJ4AI-/0/1772803096727?e=1777507200&v=beta&t=OisrhbjeAJkiki9fYiibqN1AlVzleO4L4HNZ0T32lMY',
			date: 'Janeiro 2026',
			platform: 'LinkedIn'
		}
	]
};

export const PORTFOLIO_DATA_EN: IPortfolioData = {
	name: 'Gregory Oliveira',
	title: 'Software Developer | Fullstack | AI | TypeScript - Node.js | AWS | JAVA - Spring Boot',
	location: 'São Paulo, São Paulo, Brazil',
	phone: '+55 75 9 91689780',
	whatsapp: '+55 11 91189-2868',
	email: 'gregorysak90@gmail.com',
	linkedin: 'www.linkedin.com/in/gregory-oliveira',
	github: 'github.com/oligregz',
	about: 'Backend Developer with a solid Fullstack background, driven by the challenge of turning technical complexity into operational efficiency. Throughout my career, I have worked on critical systems in industries such as steel and energy, focusing on delivering stability and measurable business results: in recent projects, I reduced operational cloud costs by 28% and improved data processing performance by 75%. With solid experience in the Node.js, TypeScript, and Java ecosystems, I focus on delivering resilient microservices and APIs. I manage the entire software development life cycle, from database modeling (SQL/NoSQL) to infrastructure orchestration (AWS and Docker). Driven by quick adaptation to different environments and clear technical communication, I work with a strong focus on code quality and automated testing.',
	profilePicture: '/assets/aistudio/profile-pic_74b74833.png',
	technologies: [
		{ name: 'TypeScript' }, { name: 'Node.js' }, { name: 'NestJS' }, { name: 'Fastify' },
		{ name: 'Express' }, { name: 'Java (Spring Boot)' }, { name: 'Angular' }, { name: 'React' },
		{ name: 'AWS (SQS, SNS, Lambda, EC2, S3)' }, { name: 'Docker' }, { name: 'PostgreSQL' }, { name: 'MongoDB' },
		{ name: 'RabbitMQ' }, { name: 'Jest' }, { name: 'CI/CD' }, { name: 'Azure DevOps' }
	],
	experiences: [
		{
			id: 'exp-1',
			role: 'Back End Developer',
			company: 'Tokenlab',
			location: 'São Paulo, SP, Brazil',
			period: 'January 2026 - Present (11 months)',
			description: [
				'Exclusive focus on the backend ecosystem, responsible for the design, development, and maintenance of a distributed and scalable architecture.',
				'Distributed Architecture & Core API: Develop the system core and microservices using TypeScript, ensuring high availability, strict static typing, and SOLID/Clean Code principles.',
				'Complex Business Rules: Engineer isolated services for specific domains, including building a calculation engine for monetary correction based on Brazilian financial market indices, and a dedicated microservice for massive PDF processing.',
				'Messaging & Event-Driven Architecture (EDA): Design asynchronous, resilient, and fault-tolerant communication between services using AWS SQS queues and AWS SNS topics.',
				'Cloud Optimization & Serverless: Create automated routines with AWS Lambda for intelligent control of microservices operating windows (business hours), reducing idle infrastructure costs.',
				'Quality & Delivery: Maintain code quality standards through automated testing and continuous integration (CI/CD), ensuring the microservices ecosystem scales securely.'
			],
			technologies: [{ name: 'TypeScript' }, { name: 'Node.js' }, { name: 'Microservices' }, { name: 'AWS (SQS, SNS, Lambda)' }, { name: 'RESTful APIs' }, { name: 'EDA' }, { name: 'Automated Testing' }]
		},
		{
			id: 'exp-2',
			role: 'Full Stack Developer',
			company: 'Tokenlab',
			location: 'São Paulo, Brazil',
			period: 'April 2025 - January 2026 (10 months)',
			description: [
				'Designed and implemented scalable web applications using TypeScript, Angular, React, Node.js, Nest.js, and AWS across the entire development lifecycle.',
				'Frontend Development: Built responsive UIs with Angular and React, leveraging Bootstrap and TypeScript. Managed frontend deployments to AWS S3.',
				'Backend Development: Developed RESTful APIs with Node.js, Express, and Nest.js, implementing JWT authentication, microservices architecture, and deployments on AWS EC2, Lambda, and API Gateway.',
				'Testing & Quality: Wrote unit and integration tests using Jest to ensure reliability, stability, and maintainability.',
				'Cloud & DevOps: Designed and maintained automated and manual deploy pipelines, managed AWS infrastructure, and handled Docker container management for backend services.',
				'Agile Collaboration: Worked in Agile environments using Jira for task tracking, participating in Scrum and Kanban workflows.'
			],
			technologies: [{ name: 'TypeScript' }, { name: 'Angular' }, { name: 'React' }, { name: 'Node.js' }, { name: 'Nest.js' }, { name: 'Express' }, { name: 'Jest' }, { name: 'Docker' }, { name: 'AWS (S3, EC2, Lambda)' }]
		},
		{
			id: 'exp-3',
			role: 'Back-end Developer',
			company: 'Enacom Group',
			location: 'Santo Antônio de Jesus, BA, Brazil',
			period: 'January 2024 - October 2024 (10 months)',
			description: [
				'Worked on 3 high-complexity projects: 1 in the steel industry niche and 2 in the energy industry niche.',
				'Steel industry project: Implemented features that increased task launch time optimization by 66% and reduced user costs by 28%.',
				'Energy industry projects: 1. Implemented features in a debt renegotiation portal offering intelligent discounts, resulting in a 31% increase in successful renegotiations. 2. Implemented automation features for reporting, optimizing user time from 8 minutes to 2 minutes (75% improvement).',
				'Followed best programming practices, client data encryption, user accessibility restrictions, log services (OpenShift), and AWS (EC2, SQS, S3).'
			],
			technologies: [{ name: 'JavaScript' }, { name: 'Mongoose' }, { name: 'MongoDB' }, { name: 'Sonar' }, { name: 'Azure DevOps' }, { name: 'Docker' }, { name: 'OpenShift' }, { name: 'AWS' }]
		},
		{
			id: 'exp-4',
			role: 'IT Technician',
			company: 'Unifrio Refrigeração Ltda',
			location: 'Santo Antônio de Jesus, Bahia, Brazil',
			period: 'November 2023 - January 2024 (3 months)',
			description: [
				'Support for server hardware, CPUs, and Winthor system at Unifrio Ltda.'
			],
			technologies: [{ name: 'TOTVS Winthor' }, { name: 'Hardware Support' }, { name: 'Linux' }]
		},
		{
			id: 'exp-5',
			role: 'Back-end Developer',
			company: 'Skill Labs.',
			location: 'Santo Antônio de Jesus, BA, Brazil',
			period: 'July 2023 - January 2024 (7 months)',
			description: [
				'Worked on 2 projects: 1 in app store niche and 1 presentation portal.',
				'Learned Scrum, CI/CD flow, SMTPS services, SOLID principles, and frontend integration.'
			],
			technologies: [{ name: 'TypeScript' }, { name: 'Fastify' }, { name: 'Postgres' }, { name: 'Render' }, { name: 'React' }]
		}
	],
	projects: [
		{
			id: 'proj-1',
			title: 'PDF Processor',
			description: 'Full-stack distributed system built to handle background text extraction from PDF files. Architected with strict concurrency limits (5 simultaneous), memory-based rate limiting (3 uploads per 24h), RabbitMQ message broker between NestJS API Gateway and Java Spring Boot background worker, Cloudflare R2 storage, and Angular 21 frontend.',
			technologies: [
				{ name: 'Angular 21' }, { name: 'NestJS' }, { name: 'Java 17' }, { name: 'Spring Boot' },
				{ name: 'RabbitMQ' }, { name: 'Cloudflare R2' }, { name: 'PostgreSQL' }, { name: 'Docker' }
			],
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
			description: 'Tool for capturing data from CSV files and updating database, inspired by Phoenician pricing.',
			technologies: [{ name: 'React' }, { name: 'Express' }, { name: 'Prisma' }, { name: 'MySQL' }],
			repositoryUrl: 'github.com/oligregz/phoenician-manager',
			isHighlight: false
		}
	],
	education: [
		{
			institution: "Estácio",
			degree: "Bachelor's, Software Engineering",
			period: 'July 2023 - July 2027'
		},
		{
			institution: 'Trybe',
			degree: 'Web Software Developer',
			period: 'August 2021 - August 2022'
		}
	],
	languages: [
		{ language: 'Portuguese', proficiency: 'Native' },
		{ language: 'English', proficiency: 'B2 / Upper Intermediate' }
	],
	publications: [
		{
			title: 'PDF Processor App: Building a Resilient Distributed System',
			url: 'https://www.linkedin.com/pulse/pdf-processor-app-gregory-oliveira-7enyf/',
			imageUrl: 'https://media.licdn.com/dms/image/v2/D4D12AQE8djOGG_a7jQ/article-cover_image-shrink_720_1280/B4DZ1fsWeJHkAI-/0/1775426960729?e=1777507200&v=beta&t=ApUlEOHLH0wTJuINpuRXwzTmtjVidtPb7HLdaYZHO08',
			date: 'March 2026',
			platform: 'LinkedIn'
		},
		{
			title: 'Custom exception with @Decorator',
			url: 'https://www.linkedin.com/pulse/decorator-gregory-oliveira-3s1uf/',
			imageUrl: 'https://media.licdn.com/dms/image/v2/D4D12AQH0ierwB4Nbsg/article-cover_image-shrink_720_1280/B4DZzDTFmzJ4AI-/0/1772803096727?e=1777507200&v=beta&t=OisrhbjeAJkiki9fYiibqN1AlVzleO4L4HNZ0T32lMY',
			date: 'January 2026',
			platform: 'LinkedIn'
		}
	]
};