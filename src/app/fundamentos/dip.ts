import corrida from "@/core/shared/Helpers/CorridaHelper";
import TerminalHelper from "@/core/shared/Helpers/TerminalHelper";
import TipoCarroFactory from "../factories/fundamentos/TipoCarroFactory";

export default async function menuDip() {
    TerminalHelper.title("DIP")

    const { value } = await TerminalHelper.selected("Selecione um carro: ", ["Ferrari", "Fusca"])

    var carroSelecionado = TipoCarroFactory.EscolherModelo(value)

    corrida(carroSelecionado, TerminalHelper.danger)

    await TerminalHelper.wait()
}