import TerminalHelper from "@/core/shared/Helpers/TerminalHelper";
import menuPolimorfismo from "../fundamentos/polimorfismo";

export default async function menuFundamentos() {
    TerminalHelper.title("Menu Fundamentos")

    const { value } = await TerminalHelper.singleColumn([
        '1 - Polimorfismo',
        'Voltar'
    ])

    switch (value) {
        case 0: await menuPolimorfismo(); break;
        case 1:
            return
    }

    await menuFundamentos()
}