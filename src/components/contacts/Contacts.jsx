import Otavio from "../../assets/Otavio.jpeg"
import Francisco from  "../../assets/Francisco.jpeg"

function Contact(){

    return (
        <>
        <div className="flex flex-col gap-20 w-full mt-[-150px] justify-center items-center">
        <div>
            <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-gray-700">
            <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={Otavio} alt="" width="384" height="512" />
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                <p className="text-lg font-medium">
                "A educação básica é a chave mestra que desbloqueia as portas do progresso individual e coletivo, proporcionando aos jovens e adultos as ferramentas necessárias para moldar um amanhã mais brilhante."
                </p>
                </blockquote>
                <figcaption className="font-medium">
                <div className="text-sky-500 dark:text-sky-400">
                    Otavio Castelani
                </div>
                <div className="text-slate-700 dark:text-slate-500">
                    Mecânico de Aeronaves
                </div>
                <div className="text-slate-700 dark:text-slate-500">
                    Github: https://github.com/Castelani325/
                </div>

                </figcaption>
            </div>
            </figure>
        </div>
        <div>
            <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-gray-700">
            <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={Francisco} alt="" width="384" height="512" />
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                <p className="text-lg font-medium">
                "Investir na educação básica de jovens e adultos é construir alicerces sólidos para um futuro mais promissor,
                 onde cada indivíduo é capacitado a enfrentar os desafios e contribuir para o desenvolvimento da sociedade."
                </p>
                </blockquote>
                <figcaption className="font-medium">
                <div className="text-sky-500 dark:text-sky-400">
                    Francisco Moreira
                </div>
                <div className="text-slate-700 dark:text-slate-500">
                    Analista de Automação
                </div>
                <div className="text-slate-700 dark:text-slate-500">
                    Github: https://github.com/franciscomcosta
                </div>
                </figcaption>
            </div>
            </figure>
        </div>
        </div>
        
        </>
    )
}

export default Contact