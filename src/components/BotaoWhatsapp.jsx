import { contato } from "../data/contato";

export default function BotaoWhatsapp({ texto = 'Agendar no WhatsApp'}) {

// texto = 'Agendar no WhatsApp' é um valor padrão de prop: sem passar nada, usa esse texto; se passar, troca. Reutilizável.

    const link =
    'https://wa.me/' + contato.whatsapp + '?text' + encodeURIComponent(contato.mensagem)

// O link wa.me abre o WhatsApp já com a mensagem escrita. O encodeURIComponent converte espaços e acentos num formato seguro pra URL

    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"

// target="_blank" abre em nova aba, e o rel="noopener noreferrer" é obrigatório junto: impede a página aberta de mexer na sua (segurança).

            className="inline-block rounded-full bg-cereja px-7 py-3 font-bold text-nevoa transition-colors hover:bg-ameixa focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ameixa"

// focus-visible:outline-...: quem navega por teclado vê onde está o foco.

        >
            {texto}
        </a>
    )
}