# Roteiro de comandos — Ex2 (na ordem em que são digitados)

> Execute **dentro da pasta `exercicio`**. A coluna "saída esperada" mostra o essencial; números de versão podem variar.

| # | Comando | O que faz | Saída esperada |
|---|---------|-----------|----------------|
| 1 | `npm ls -g --depth=0` | Lista só os pacotes **globais** (profundidade 0 = sem as dependências deles) | Caminho do prefixo + `npm@x.y.z` (e `corepack`, se houver) |
| 2 | `npm root -g` | Mostra a **pasta** dos pacotes globais | Ex.: `C:\Users\voce\AppData\Roaming\npm\node_modules` |
| 3 | `npm config get prefix` | Pasta-base das instalações globais (e dos executáveis) | Ex.: `C:\Users\voce\AppData\Roaming\npm` |
| 4 | `npm install -g nodemon` | Instala o nodemon **na máquina toda** | `added 29 packages` (aprox.) |
| 5 | `nodemon saudacao.js` | Roda e **reinicia ao salvar** | `[nodemon] starting node saudacao.js` + a saudação |
| 6 | *(edite o texto em `saudacao.js` e salve)* | | `[nodemon] restarting due to changes...` |
| 7 | `Ctrl + C` | Para o nodemon | |
| 8 | `npm init -y` | Cria o `package.json` | `Wrote to ...package.json` |
| 9 | *(abra o `package.json`)* | Procure `nodemon`: **não está lá** | O global não é registrado no projeto |
| 10 | `npm install --save-dev nodemon` | Instala **local** e anota em `devDependencies` | `added N packages` |
| 11 | `npm ls --depth=0` | Mostra o que o **projeto** tem | `nodemon@3.x` em `devDependencies` |
| 12 | *(no `package.json`, em `scripts`, acrescente)* `"dev": "nodemon saudacao.js"` | Atalho para desenvolvimento | |
| 13 | `npm run dev` | Roda o script `dev` (usa o nodemon **local**) | Mesmo comportamento do passo 5 |
| 14 | `npx nodemon --version` | `npx` procura primeiro a cópia **local** | `3.x.x` |
| 15 | `npx cowsay "Copa 2026"` | Baixa, **executa uma vez** e descarta; não grava no `package.json` | Uma vaquinha de ASCII com o texto |
| 16 | `npm uninstall -g nodemon` | Remove o global | `removed N packages` |

### Por que o passo 9 importa
Se você mandar o projeto ao colega **sem** o nodemon no `package.json`, ele roda `npm install` e **não recebe** a ferramenta.
O que está no `package.json` (e no `package-lock.json`) viaja com o projeto; o que está só na sua máquina, não.

### Comandos úteis para ter à mão
- `npm outdated` — mostra pacotes com versão nova disponível.
- `npm uninstall <pacote>` — remove local (e tira do `package.json`).
- `npm ls <pacote>` — mostra se e onde o pacote está instalado.
