import TerminalHelper from "@/core/shared/Helpers/TerminalHelper";
import menuFundamentos from "./fundamentos";

export default async function menuPrincipal() {
    TerminalHelper.title("Menu Principal")

    const { value } = await TerminalHelper.singleColumn([
        '1- Fundamentos',
        'Sair'
    ])

    switch (value) {
        case 0: await menuFundamentos(); break;
        case 1:
            process.exit(0)
    }

    await menuPrincipal()
}