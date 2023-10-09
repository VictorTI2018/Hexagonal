import CarroBase from "@/core/models/fundamentos/CarroBase";

export default function corrida (carro: CarroBase, logger: (text: string) => void = console.log){
    Array.from({ length : 10 })
    .forEach(() => {
        carro.run()
        logger(`\nVelocidade: ${carro.velocidadeAtual}`)
    }) 

    Array.from({ length: 10 })
    .forEach(() => {
        carro.break()
        logger(`\nVelocidade: ${carro.velocidadeAtual}`)
    })
}