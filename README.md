# Pulso Festival

Landing page conceitual de portfólio para o segmento de **Eventos e música**. Marca, serviços e dados são fictícios.

**Demonstração:** Line-up e agenda interativos. Não há envio de dados pessoais, sistema de cadastro ou pagamento.

## Rodar localmente

Requisitos: Node.js 22+ e npm.

```sh
npm ci
npm run dev
```

Abra http://localhost:3000 para ver a landing page.

## Publicar

O projeto usa Next.js App Router, TypeScript e exportação estática. `npm run build` gera `out/`.
Para GitHub Pages, em **Settings → Pages**, selecione **GitHub Actions**, então execute o fluxo “Publicar demonstração no GitHub Pages”. O fluxo configura o caminho público do repositório automaticamente.
Para Vercel, importe o repositório como projeto Next.js sem definir `PAGES_BASE_PATH`.

### Funil demonstrativo

A landing mostra dois palcos e convida a escolher atrações para um roteiro. Quem seleciona atrações pode copiar um link com a seleção, sem enviar nada pelo site. A pessoa que abre recebe a lista e decide se quer adicioná-la à própria seleção. O fragmento da URL é uma máscara de IDs de atrações, não transmite dados pessoais e não é enviado ao servidor HTTP. O download independente em texto continua disponível.

Experimento futuro: comparar o texto “Copiar link do roteiro” com “Compartilhar minha programação” em testes com duplas, verificando se a segunda pessoa consegue importar e modificar o roteiro. Nenhum rastreamento ou compartilhamento automático está instalado.
