import Avatar from '../../assets/avatar.jpg'

function User(props){
    return (
        <>
            <figure className="md:flex w-40 bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-700">
            <img className="w-24  md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={Avatar} alt="" width="384" height="512" />
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                <p className="text-lg font-medium">
                    Dados do usuário
                </p>
                </blockquote>
                <figcaption className="font-medium">
                <div className="text-sky-500 dark:text-sky-400">
                    Nome de usuário
                </div>
                <div className="text-slate-700 dark:text-slate-500">
                    Profissão
                </div>
                <div>
                    Pontos: {props.points ? props.points : 0}
                </div>
                </figcaption>
            </div>
            </figure>
        </>
    )
}

export default User;