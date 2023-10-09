import Fuscar from "@/core/models/Fusca";
import CarroBase from "@/core/models/fundamentos/CarroBase";
import Ferrari from "@/core/models/fundamentos/Ferrari";

export default class TipoCarroFactory {

    static EscolherModelo (tipo: number) : CarroBase {

        switch(tipo) {
            case 0:
                return new Ferrari()
            default:
                return new Fuscar()
        }
    }
}