// ============================================================
// ranking.js — MÓDULO DO RANKING (ESM) — GABARITO COMENTADO
// ============================================================

// TODO 1 resolvido: funções de arquivo do Node. "node:fs" é o módulo NATIVO de sistema de arquivos.
//   existsSync   -> o arquivo existe? (true/false)
//   readFileSync -> lê o conteúdo do arquivo (síncrono)
//   writeFileSync-> grava (ou sobrescreve) o arquivo
import { existsSync, readFileSync, writeFileSync } from "node:fs";

// TODO 2 resolvido: utilitários para montar o caminho do arquivo.
import { fileURLToPath } from "node:url";
import path from "node:path";

// TODO 3 resolvido: o ESM não tem __dirname, então o recriamos.
// import.meta.url = endereço deste módulo; fileURLToPath o transforma em caminho; path.dirname pega a pasta.
const pastaDoModulo = path.dirname(fileURLToPath(import.meta.url));

// path.join monta o caminho com o separador certo do sistema (\\ no Windows, / no Linux/Mac).
const ARQUIVO = path.join(pastaDoModulo, "ranking.json");

// TODO 4 resolvido: lê o ranking salvo.
export function carregarRanking() {
  // 1ª execução: o arquivo ainda não existe -> lista vazia (o equivalente ao "|| []" do localStorage).
  if (!existsSync(ARQUIVO)) {
    return [];
  }
  // Lê o conteúdo como TEXTO (utf-8)...
  const texto = readFileSync(ARQUIVO, "utf-8");
  // ...e reconstrói o array com JSON.parse.
  return JSON.parse(texto);
}

// TODO 5 resolvido: acrescenta uma pontuação e grava só as 5 melhores.
export function salvarPontuacao(nome, acertos) {
  // Parte do que já estava salvo.
  const lista = carregarRanking();
  // Acrescenta o novo resultado; toISOString() grava a data em formato padrão de texto.
  lista.push({ nome, acertos, data: new Date().toISOString() });
  // sort com comparador numérico: maior número de acertos primeiro (b - a = ordem decrescente).
  lista.sort(function (a, b) {
    return b.acertos - a.acertos;
  });
  // slice(0, 5) mantém só as 5 primeiras posições.
  const top5 = lista.slice(0, 5);
  // JSON.stringify(valor, null, 2) gera texto JSON com 2 espaços de indentação (legível).
  writeFileSync(ARQUIVO, JSON.stringify(top5, null, 2), "utf-8");
}

// TODO 6 resolvido: devolve o ranking para exibição.
export function melhoresDoRanking() {
  return carregarRanking();
}
