# Davidson Conceição - Personal Portfolio

This repository contains the source code for my personal portfolio website, built to showcase my skills and projects as an Infrastructure Solutions Architect and Full-Stack Developer.

The live version can be accessed at [portfolio.davidson.dev.br](https://portfolio.davidson.dev.br).

## About This Project

This portfolio is a modern, responsive, and internationalized (i18n) web application built with a focus on performance, clean code, and a great user experience. It highlights my professional journey, technical skills, and key projects. It was developed with the assistance of an AI coding partner in Firebase Studio.

## Tech Stack

This project is built with the following technologies:.

*   **Framework:** [Next.js](https://nextjs.org/) (with App Router)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components:** [ShadCN/UI](https://ui.shadcn.com/)
*   **Data Source:** A custom Java API for projects and skills.

### 📸 Galeria e Mídia (Novo)

Integração com Object Storage (MinIO) para servir ativos de mídia dinamicamente.

* **`GET /api/gallery`**:
    * **Descrição:** Lista as URLs públicas de todas as imagens armazenadas no bucket `portfolio-image`.
    * **Resposta:** JSON Array de Strings `["https://s3.../img1.jpg", "https://s3.../img2.jpg"]`.
    * **Uso:** Consumido pelo Frontend para renderizar a seção de fotos/certificados.

## Getting Started

To run the project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/davidsoncabista/Portifolio.git
    cd Portifolio
    ```

2.  **Install dependencies:**
    This project uses `npm` as the package manager.
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

Open [http://localhost:9002](http://localhost:9002) in your browser to see the result.

pct exec 117 -- docker exec -u root portfolio-frontend bash -c "npm run build"

1. Limpar o cache e fazer o Build (Mestre):

Bash
pct exec 117 -- docker exec -u root portfolio-frontend bash -c "rm -rf .next && npm run build"
2. Reiniciar o container para aplicar:

Bash
pct exec 117 -- docker restart portfolio-frontend

## Envio de mensagens ao Telegram (Contato)

Adicionei uma rota API local em `src/app/api/contact/route.ts` que encaminha o formulário de contato diretamente para a API do Bot do Telegram. Isso evita problemas de CORS e chamadas a um backend externo do cliente.

Configuração necessária (não comitar): crie um arquivo `.env.local` na raiz do projeto Next.js com as variáveis abaixo:

```
TELEGRAM_BOT_TOKEN=seu_bot_token_aqui
TELEGRAM_CHAT_ID=seu_chat_id_aqui
```

Observações:
- Se suas variáveis estiverem nomeadas no estilo do backend Spring (ex.: `telegram.bot.token` ou `telegram.chat.id`), a rota API também tenta fazer fallback nesses nomes, mas é mais simples copiar os valores para `TELEGRAM_BOT_TOKEN` e `TELEGRAM_CHAT_ID`.
- Reinicie o servidor Next.js após adicionar/atualizar o `.env.local`.

Como testar localmente:

1. Inicie o servidor de desenvolvimento:
```powershell
npm run dev
```
2. Teste a rota diretamente (substitua a porta se usar outra):
```bash
curl -X POST http://localhost:3000/api/contact \
    -H "Content-Type: application/json" \
    -d '{"name":"Teste","email":"teste@example.com","message":"mensagem de teste"}'
```
3. Ou use a interface: abra a página, clique em `Entrar em contato`, preencha o formulário e envie; verifique o painel Network e os logs do servidor para mensagens de erro.

Dica: você executou `npm rum dev` — o comando correto é `npm run dev`.