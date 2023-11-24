import React from "react";
import Woman from '../../assets/woman.jpg'

function Start(){
    return(
        <>
        <div className="flex flex-col gap-20 w-full mt-[-150px] justify-center items-center">

        <div className="relative inline-block p-4 bg-gray-700 text-white rounded-md shadow-md w-[70%] hover:shadow-lg">
                <p>
                    Bem vindo ao nosso playground do saber!
                    <p>
                        Aqui transformamos o ensino dos Jovens e 
                        <p>Adultos desse grande Brasil.</p>
                    </p>
                </p>
            </div>
            <div className="relative inline-block p-4 bg-gray-700 text-white w-[70%] rounded-md shadow-md hover:shadow-lg">
                <p>
                    Mapa interativo, jornada de usuário e muito mais!
                    <p>
                        Nossa proposta é trazer um jeito descontraído 
                        <p>e organizado, para melhorar o aproveitamento</p>
                        <p>dos estudos de alunos do EJA. Clique em sobre para mais informações!</p>
                    </p>
                </p>
            </div>

        </div>
        <img src={Woman} className="w-96 mt-[-100px] mx-auto mr-20 mb-6"/>
        </>
    )
}

export default Start;