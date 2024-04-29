export interface BlocksProp< T > {
	attributes: T;
	setAttributes: any;
}

export interface SimpleProps {
	attributes: any;
	setAttributes: ( val: any ) => void;
}
