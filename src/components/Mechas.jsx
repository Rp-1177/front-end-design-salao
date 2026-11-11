import { motion, useReducedMotion } from 'motion/react'
import { tons } from '../data/tons'

export default function Mechas() {
    const reduzir = useReducedMotion()

// useReducedMotion respeita quem ativou “reduzir movimento” no sistema: pra essas pessoas, initial={false}

    return (
        <section
            aria-label="Cartela de tons de cabelo"
            className="mx-auto max-w-5xl px-6 pb-20"
        >
            <div className="h-3 rounded-full bg-ameixa" />

{/* A barra Ameixa no topo é o “suporte” da cartela, e as mechas pendem dela */}

            <ul className="mx-4 flex items-start gap-2 sm:gap-3">
                {tons.map((tom, i) => (
                    <li key={tom.nome} className="flex-1">

{/* flex-1 nas mechas: cada uma ocupa fração igual do espaço. */}

                        <motion.div

// motion.div é uma div com superpoderes de animação. initial é o estado de partida (scaleY: 0, achatada), animate é o destino (scaleY: 1).

                            className="rounded-b-full"
                            style={{
                                backgroundColor: tom.cor,
                                height: tom.altura + 'rem',
                                originY: 0,

// originY: 0 faz a escala crescer a partir do topo, e não do centro. Sem isso, as mechas cresceriam do meio pra fora.

                            }}
                        initial={reduzir ? false : { scaleY: 0 }}
                        animate={{ scaleY: 1 }}

// existem dois gatilhos diferentes:

// Gatilho	            Quando toca	                             Bom pra
// animate	            ao montar o componente                  (carregar a página)	o que está no topo da tela
// whileInView	        quando o elemento entra na tela	        studo que está abaixo da dobra

                        transition={{ duration: 0.7, delay: i * 0.09, ease: 'easeOut' }}

// delay: i * 0.09 escalona a entrada: cada mecha começa 90ms depois da anterior, criando o efeito de leque.

                        />
                        <span className="sr-only sm:not-sr-only sm:mt-2 sm:block sm:text-center sm:text-xs">

{/* sr-only sm:not-sr-only: no celular os nomes ficam escondidos visualmente (mas lidos por leitor de tela), porque 7 colunas estreitas não comportam texto. Do tamanho sm pra cima, aparecem. */}

                            {tom.nome}
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    )
}