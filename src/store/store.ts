import { atom } from 'nanostores';

export const theme = atom("pastel");

export function setTheme(theme: string) {
    theme.set(theme);
}