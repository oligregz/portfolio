export interface ITechnology {
	name: string;
	icon?: string;
}

export interface IProject {
	id: string;
	title: string;
	description: string;
	technologies: ITechnology[];
	repositoryUrl: string;
	liveUrl?: string;
	isHighlight: boolean;
}

export interface IExperience {
	id: string;
	role: string;
	company: string;
	location: string;
	period: string;
	description: string[];
	technologies: ITechnology[];
}

export interface IEducation {
	institution: string;
	degree: string;
	period: string;
}

export interface ILanguage {
	language: string;
	proficiency: string;
}

export interface IPublication {
	title: string;
	url: string;
	imageUrl: string;
	date: string;
	platform: string;
}

export interface IPortfolioData {
	name: string;
	title: string;
	location: string;
	phone: string;
	email: string;
	linkedin: string;
	github: string;
	about: string;
	profilePicture: string;
	technologies: ITechnology[];
	experiences: IExperience[];
	projects: IProject[];
	education: IEducation[];
	languages: ILanguage[];
	publications: IPublication[];
}