import { Store } from '../types';

export type SetLang = {type: 'SetLang', lang: Store['lang']};

export function setLang(lang: Store['lang']): SetLang {
    return {type: 'SetLang', lang};
}
