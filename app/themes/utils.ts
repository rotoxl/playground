import { Step } from '@app/themes/themes';

export const isStep = (value: string): value is Step => Object.values(Step).includes(value as Step);
