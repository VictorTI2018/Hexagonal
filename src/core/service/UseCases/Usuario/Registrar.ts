import Usuarios from "@/core/models/usuarios/Usuario";
import UseCaseBase from "../interfaces/UseCaseBase";


export default class RegistrarUsuario implements UseCaseBase<Usuarios, void> {

    async execute(payload: Usuarios): Promise<void> {
        payload.senha = payload.senha.split('').reverse().join('')
        console.log('\n')
        console.log(payload)
    }


}