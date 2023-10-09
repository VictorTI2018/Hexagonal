import { terminal } from "terminal-kit";

export default class TerminalFactory {
    static GerarCor(color: string, text: string): void {
        switch (color) {
            case 'magenta':
                terminal.magenta(`${text}`)
                break;
            case 'red':
                terminal.red(`${text}`); break;
            case 'white': terminal.white(`${text}`); break;
            default:
                terminal.yellow(`${text}`)
        }
    }
}