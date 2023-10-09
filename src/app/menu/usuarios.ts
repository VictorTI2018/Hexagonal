import TerminalHelper from "@/core/shared/Helpers/TerminalHelper";
import registrarUsuario from "../usuarios/registrar";

export default async function menuUsuarios () {
    TerminalHelper.title("Menu Usuários")

    const { value } = await TerminalHelper.singleColumn([
        '1 - Registrar',
        'Voltar'
    ])

    switch(value) {
        case 0: await registrarUsuario(); break;
        default:
            return
    }

    await menuUsuarios()
}