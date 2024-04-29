export enum TrailDifficultyEnum {
	'easy',
	'moderate',
	'difficult',
	'extreme',
}

export interface TrailSignModel {
	//Field will be Rich Text coming from GraphQL
	description: string;

	//Simple Integar value
	distance: number;

	//enum
	difficulty: TrailDifficultyEnum;
}
