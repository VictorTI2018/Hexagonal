import TerminalHelper from "@/core/shared/Helpers/TerminalHelper";
import TipoCarroFactory from "../factories/fundamentos/TipoCarroFactory";

export default async function menuPolimorfismo() {
    TerminalHelper.title("Menu Polimorfismo")

    const { value } = await TerminalHelper.selected("Modelo de carro: ", ["Ferrari", "Fusca"])

    const carroSelecionado = TipoCarroFactory.EscolherModelo(value)

    let execute = true
    while (execute) {
        TerminalHelper.clear()

        TerminalHelper.showKeyAndValue("Velocidade Máxima: ", `${carroSelecionado.velocidadeMaxima} Km/h`)

        TerminalHelper.showKeyAndValue("Velocidade Atual: ", `${carroSelecionado.velocidadeAtual} Km/h`)

        const { value } = await TerminalHelper.selected("Escolha uma opção: ", ["Acelerar", "Frear"])

        value === 0 ? carroSelecionado.run() : carroSelecionado.break()


        execute = await TerminalHelper.confirmation("Deseja continuar? ")
    }
}