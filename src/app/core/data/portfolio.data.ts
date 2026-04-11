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
			role: 'Desenvolvedor Fullstack',
			company: 'Tokenlab',
			location: 'São Paulo, SP (Remoto)',
			period: '2025 - Presente',
			description: [
				'Desenvolvimento de aplicações web escaláveis utilizando TypeScript, Angular, React e NestJS.',
				'Criação de APIs RESTful e microsserviços com autenticação JWT, gerenciando infraestrutura conteinerizada (Docker) e implantações na AWS (EC2, Lambda, API Gateway, S3, RDS).',
				'Criação de pipelines automatizados (CI/CD) e garantia de estabilidade via testes unitários e de integração com Jest.'
			],
			technologies: [{ name: 'Angular' }, { name: 'React' }, { name: 'NestJS' }, { name: 'AWS' }]
		},
		{
			id: 'exp-2',
			role: 'Desenvolvedor Backend',
			company: 'Enacom',
			location: 'Santo Antônio de Jesus, BA (Remoto)',
			period: '2024 - 2025',
			description: [
				'Otimização de tempo de inicialização de tarefas em 66% e redução de custos em 28% no setor siderúrgico.',
				'Desenvolvimento de portal de renegociação de dívidas no setor de energia, resultando em aumento de 31% nas renegociações.',
				'Automação de relatórios, reduzindo o processamento de 8 para 2 minutos.'
			],
			technologies: [{ name: 'Node.js' }, { name: 'AWS' }, { name: 'MongoDB' }, { name: 'Docker' }]
		},
		{
			id: 'exp-3',
			role: 'T.I - Suporte',
			company: 'Unifrio LTDA',
			location: 'Santo Antônio de Jesus, BA (Em loco)',
			period: '2023 - 2024',
			description: [
				'Liderança do departamento de TI, aumentando a eficiência na resolução de problemas em 18%.',
				'Otimização de despesas mensais com serviços externos em 7%.'
			],
			technologies: []
		},
		{
			id: 'exp-4',
			role: 'Desenvolvedor Fullstack (Voluntário)',
			company: 'Skill Labs',
			location: 'Santo Antônio de Jesus, BA (Remoto)',
			period: '2022 - 2023',
			description: [
				'Contribuição fullstack em projetos utilizando TypeScript, Fastify, React e PostgreSQL.'
			],
			technologies: [{ name: 'React' }, { name: 'Fastify' }, { name: 'PostgreSQL' }]
		}
	],
	projects: [
		{
			id: 'proj-1',
			title: 'PDF Processor',
			description: 'Sistema fullstack, distribuído e orientado a eventos para extração de texto em background. Arquitetado com limite de concorrência, Rate Limiting e WebSockets. Desenvolvido em parceria com ferramentas avançadas de IA (gemini cli).',
			technologies: [{ name: 'Angular 21' }, { name: 'NestJS' }, { name: 'Spring Boot' }, { name: 'RabbitMQ' }, { name: 'Cloudflare R2' }],
			repositoryUrl: 'github.com/oligregz/pdf-processor',
			liveUrl: 'https://pdf-processor-kappa-two.vercel.app',
			isHighlight: true
		},
		{
			id: 'proj-2',
			title: 'Chega Fácil App',
			description: 'Aplicação para simular fluxo de requisição de viagens integrando APIs externas do Google (DistanceMatrix, Geocode) e persistência em PostgreSQL.',
			technologies: [{ name: 'React' }, { name: 'NestJS' }, { name: 'Prisma' }, { name: 'Docker' }],
			repositoryUrl: 'github.com/oligregz/chega-facil-app',
			isHighlight: false
		},
		{
			id: 'proj-3',
			title: 'Phoenician Manager',
			description: 'Ferramenta para captura de dados de arquivos CSV e atualização de banco de dados, inspirada na precificação fenícia.',
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
		{ language: 'Português', proficiency: 'Nativo/C2' },
		{ language: 'Inglês', proficiency: 'B2' },
		{ language: 'Espanhol', proficiency: 'Básico' }
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