import TerminalHelper from "@/core/shared/Helpers/TerminalHelper";
import menuFundamentos from "./fundamentos";
import menuUsuarios from "./usuarios";

export default async function menuPrincipal() {
    TerminalHelper.title("Menu Principal")

    const { value } = await TerminalHelper.singleColumn([
        '1- Fundamentos',
        '2 - Usuario',
        'Sair'
    ])

    switch (value) {
        case 0: await menuFundamentos(); break;
        case 1: await menuUsuarios(); break;
        default:
            process.exit(0)
    }

    await menuPrincipal()
}