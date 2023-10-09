import { Terminal, terminal } from 'terminal-kit'
import TerminalFactory from '../factories/TerminalColorFactory'

interface ResponseSelected {
    value: number,
    label: string
}

interface OptionsInputField extends Terminal.InputFieldOptions {

}

export default class TerminalHelper {

    static clear() {
        terminal.clear()
    }

    static title(text: string): void {
        TerminalHelper.clear()
        TerminalHelper.showText('magenta', `${text}\n`)
        TerminalHelper.showText('magenta', '-'.repeat(text.length) + '\n')
    }

    static showText(color: string = 'red', text: string): void {
        TerminalFactory.GerarCor(color, text)
    }

    static danger(text: string): void {
        terminal.red(`${text}`)
    }

    static showKeyAndValue(key: string, value: string) {
        terminal.yellow(key).green(value).white("\n")
    }

    static async wait(): Promise<void> {
        TerminalFactory.GerarCor('white', '\nPressione [ENTER] para continuar...')
        await terminal.inputField({ echo: false }).promise
    }

    static async singleColumn(options: string[]): Promise<ResponseSelected> {
        var result = await terminal.singleColumnMenu(options).promise

        var response: ResponseSelected = {
            value: result.selectedIndex,
            label: result.selectedText
        }
        return response
    }

    static async confirmation(text: string): Promise<boolean> {
        return (await TerminalHelper.selected(text, ['Sim', 'Não'])).value === 0
    }

    static async selected(text: string, options: string[]): Promise<ResponseSelected> {
        TerminalHelper.showText('yellow', `\n${text}`)
        const result = await terminal.singleLineMenu(options).promise

        var response: ResponseSelected = {
            value: result.selectedIndex,
            label: result.selectedText
        }
        return response
    }

    static async fieldRequired(label: string, options: OptionsInputField | undefined): Promise<string> {
        TerminalHelper.showText('yellow', `\n${label}`)

        const result = await terminal.inputField(options).promise

        return result ? result : TerminalHelper.fieldRequired(label, options)
    }
}