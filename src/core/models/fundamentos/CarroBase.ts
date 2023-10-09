import ICarro from "@/core/interfaces/fundamentos/ICarro";

export default abstract class CarroBase implements ICarro {
    
    constructor(readonly velocidadeMaxima: number,
        private _velocidadeAtual: number, private quantoAcelerar: number,
        private quantoFrear: number) {
    }

    get velocidadeAtual () { return this._velocidadeAtual }

    run(): void {
        this._velocidadeAtual = Math.min(
            this.velocidadeAtual + this.quantoAcelerar,
            this.velocidadeMaxima
        )
    }

    break(): void {
        this._velocidadeAtual = Math.max(
            this.velocidadeAtual - this.quantoFrear,
            0
        )
    }
}