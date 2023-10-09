import Usuarios from "@/core/models/usuarios/Usuario";
import RegistrarUsuario from "@/core/service/UseCases/Usuario/Registrar";
import TerminalHelper from "@/core/shared/Helpers/TerminalHelper";

export default async function registrarUsuario() {
    TerminalHelper.title("Registrar Usuário")

    const id = await TerminalHelper.fieldRequired("Id: ", undefined)
    const nome = await TerminalHelper.fieldRequired("Nome: ", undefined)
    const email = await TerminalHelper.fieldRequired("Email: ", undefined)
    const senha = await TerminalHelper.fieldRequired("Senha: ", {
        echoChar: '*'
    })

    const usuario : Usuarios = { id, nome, email, senha }

    await new RegistrarUsuario().execute(usuario)

    await TerminalHelper.wait()
}