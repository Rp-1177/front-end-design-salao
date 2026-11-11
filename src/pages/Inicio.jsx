import Mechas from "../components/Mechas"
import BotaoWhatsapp from "../components/BotaoWhatsapp"

export default function Inicio() {
    return(
        <>
        <section className="mx-auto max-w-5xl px-6 pt-16 pb-10 md:pt-24">
            <p className="text-sm font-bold uppercase tracking-widest text-cereja">
                Salão de beleza feminino
            </p>
            <h1 className="mt-4 font-display text-6xl leading-none text-ameixa md:text-8xl">

{/* leading-none aperta a entrelinha do título, que em fonte display grande fica solta demais com o padrão. */}

                Cecília
                <span className="block">Ramos</span>
            </h1>
            <p className="mt-6 max-w-prose text-lg">
                Corte, cor e cuidado para o seu cabelo. Escolha seu tom, escolha seu corte e agende pelo WhatsApp.
            </p>
            <div className="mt-8">
                <BotaoWhatsapp />
            </div>
        </section>
        
        <Mechas />
        </>      
    )
}