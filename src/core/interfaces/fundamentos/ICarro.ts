export default interface ICarro {
    
    readonly velocidadeMaxima: number
    velocidadeAtual: number

    run (): void

    break(): void
}