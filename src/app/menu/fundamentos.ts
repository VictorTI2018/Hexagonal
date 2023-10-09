import TerminalHelper from "@/core/shared/Helpers/TerminalHelper";
import menuPolimorfismo from "../fundamentos/polimorfismo";
import menuDip from "../fundamentos/dip";

export default async function menuFundamentos() {
    TerminalHelper.title("Menu Fundamentos")

    const { value } = await TerminalHelper.singleColumn([
        '1 - Polimorfismo',
        '2 - DIP',
        'Voltar'
    ])

    switch (value) {
        case 0: await menuPolimorfismo(); break;
        case 1 : await menuDip(); break;
        default:
            return
    }

    await menuFundamentos()
}