import Man from "../../assets/man.jpg"
function About(){

    return  (
        <>
            
            <div className="md:container px-2 pt-5 text-center flex flex-col items-center justify-center space-y-10">
          <div className="w-full md:w-2/3">
            <div className="relative inline-block p-4 bg-gray-700 text-white rounded-md shadow-md hover:shadow-lg">
              <p>
                Bem-vindo ao nosso playground educacional! Aqui, transformamos o Ensino de Jovens e Adultos (EJA) em uma jornada empolgante, onde cada desafio é uma aventura e cada conquista é celebrada como um troféu. Aprender conosco é como explorar um universo de conhecimento, personalizado para cada aluno, porque, afinal, na EJA, cada história é única e merece ser contada com brilho nos olhos.
              </p>
            </div>
          </div>
          <div className="w-full md:w-2/3 flex items-center space-x-6">
            <img src={Man} className="w-1/4 mx-auto mb-6" alt="Imagem de um homem" />
    
            <div className="relative inline-block p-4 bg-gray-700 text-white rounded-md shadow-md hover:shadow-lg">
              <p>
                "Nossa abordagem na Educação de Jovens e Adultos (EJA) é como um café brasileiro: forte, envolvente e cheio de sabor. Aqui, a sala de aula é um palco, os livros são guias e cada aluno é o protagonista de sua própria história educacional. Descomplicamos o aprendizado, transformando o EJA em uma experiência descontraída, onde o conhecimento não é apenas transmitido, mas vivido com entusiasmo, porque na EJA, o aprendizado é uma celebração da resiliência e do potencial infinito."
              </p>
            </div>
          </div>
    
          <div className="w-full md:w-2/3">
            <div className="text-[#d2d8f9] font-extralight text-sm md:pl-1 leading-6 tracking-wide pb-10 border-b-[0.5px] border-[#ffffff66]">
              <p>
                Em nosso sistema de ensino focado em Educação de Jovens e Adultos (EJA), acreditamos que aprender não é apenas adquirir conhecimento, mas também é abraçar experiências e celebrar descobertas. Rompemos as barreiras do convencional, tornando o aprendizado uma jornada emocionante, onde o EJA é mais do que um diploma; é uma celebração da coragem de reiniciar a trajetória educacional, com a certeza de que nunca é tarde para brilhar.
              </p>
            </div>
          </div>
        </div>
        </>
        
      );
}

export default About