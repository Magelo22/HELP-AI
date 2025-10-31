// prompts-exemplos.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
interface IAData {
  nome: string;
  melhorArea: string;
  imagemUrl: string;
  prompts: string[];
}

const iasData: IAData[] = [
  {
    nome: 'Gemini',
    melhorArea: 'Pesquisa, escrita criativa, planejamento multimídia e integração com o ecossistema Google.',
    imagemUrl: 'download3.png',
    prompts: [
      'Você é um professor especialista em [disciplina]. Crie um plano de aula completo de 45 minutos sobre [tema] para alunos do [nível/idade], utilizando a metodologia [metodologia]. Inclua objetivo geral, recursos necessários, estrutura detalhada minuto a minuto, duas atividades práticas e um quiz com 5 perguntas relacionadas à [competência]. Finalize com um resumo dos aprendizados esperados.',
      'Imagine que você está elaborando um relatório sobre [tema] voltado para [público-alvo]. Apresente uma introdução que contextualize o assunto e destaque a tese central de forma clara e envolvente. Em seguida, desenvolva uma conclusão que sintetize os principais resultados e apresente uma recomendação final bem fundamentada, coerente com os objetivos do relatório e com as necessidades do público.',
      'Analise o [tipo de mídia] que apresenta [descrição dos dados] e identifique os principais padrões, tendências ou oportunidades observadas. A partir dessa análise, elabore de três a cinco insights estratégicos relevantes para [público], explicando o que cada um revela e como pode orientar decisões práticas. Organize o resultado em uma tabela com as colunas: Insight | Descrição | Ação Recomendada.',
      'Produza um roteiro dinâmico de 60 segundos para TikTok ou YouTube Shorts que explique [tema complexo] de maneira clara e envolvente para [público]. Divida o conteúdo em blocos de 15 segundos, e em cada parte descreva a narração principal, o texto que deve aparecer como legenda e a sugestão visual correspondente. O objetivo é garantir que o vídeo mantenha ritmo, clareza e impacto do início ao fim.',
      'Leia e resuma o artigo sobre [assunto] em até 150 palavras, destacando as três descobertas mais relevantes. A partir desse resumo, proponha cinco temas de debate que incentivem reflexão e discussão entre [público-alvo]. O objetivo é fornecer uma visão concisa do conteúdo, ao mesmo tempo que estimula engajamento crítico e análise profunda.',
      'Escreva um e-mail profissional e persuasivo para [destinatário/cargo], solicitando [tipo de recurso] para [projeto]. Apresente o contexto, benefícios esperados (ROI), riscos de não aprovação e conclua com uma chamada para ação direta e convincente.',
      'Compare [Empresa 1] e [Empresa 2] em relação a [tema], analisando seu desempenho nos três critérios mais relevantes. Para cada critério, descreva os pontos fortes e fracos de cada empresa, apresentando tudo em uma tabela organizada. Conclua indicando qual empresa demonstra melhor desempenho global e explique de forma clara a justificativa para essa avaliação.',
      'Crie um cronograma de 4 semanas usando a metodologia Ágil/Scrum para desenvolver [projeto/produto]. Para cada Sprint, indique o nome, as tarefas principais, os entregáveis esperados e os resultados finais planejados.',
      'Traduza o texto sobre [assunto] do [idioma] para o português do Brasil, garantindo que o vocabulário e os exemplos estejam adaptados para [público-alvo].',
      'Explique como a Inteligência Artificial pode transformar [setor], destacando três aplicações práticas que gerem valor.'
    ]
  },
  {
    nome: 'DeepSeek',
    melhorArea: 'Codificação, programação e tarefas de raciocínio lógico profundo.',
    imagemUrl: 'download.png',
    prompts: [
      'Desenvolva um script em Python usando Pandas para processar o arquivo [arquivo.csv] (colunas: [colunas]). Filtre os registros por [coluna desejada] e calcule a média de [coluna desejada]. Inclua no script cabeçalho formatado e comentários explicativos.',
      'Crie uma fórmula no Excel para calcular [imposto/índice] em C2, seguindo as regras: A2 < 1000 = 5%; 1000–5000 = 10%; >5000 = 15%. Garanta que a fórmula funcione ao ser arrastada para outras linhas.',
      'Analise o código da função calcular_total() em [linguagem], identifique o erro que impede que [função desejada] funcione corretamente e apresente uma versão corrigida.',
      'Explique o conceito de [tecnologia/algoritmo] de maneira acessível, detalhando sua arquitetura básica, apresentando um caso real de aplicação e destacando três benefícios principais para [setor].',
      'Analise a query SQL [query] usada para buscar [dados específicos] e proponha três melhorias de desempenho, como ajustes de índices, filtros ou joins.',
      'Avalie diferentes cenários futuros relacionados a [tema] e identifique impactos, probabilidades e consequências de cada um.',
      'Investigue as tendências atuais em [mercado/área] para apoiar decisões estratégicas, identificando padrões relevantes e oportunidades emergentes.',
      'Analise os dados disponíveis sobre [processo ou operação] para identificar áreas críticas que necessitam de intervenção.',
      'Identifique cinco erros comuns em [linguagem], mostrando o código incorreto e a versão corrigida de cada caso.',
      'Crie um script em Python usando [biblioteca] para automatizar [tarefa repetitiva], garantindo tratamento de erros, geração de logs e comentários explicativos.'
    ]
  },
  {
    nome: 'Grok',
    melhorArea: 'Informações atuais, debates críticos e tendências em tempo real.',
    imagemUrl: 'download1.jpg',
    prompts: [
      'Resuma as três notícias mais relevantes das últimas 48 horas sobre [tema] em [país], incluindo para cada uma a fonte, um resumo conciso de uma linha e o tom geral da matéria.',
      'Crie um post de até três frases para X (Twitter) sobre [tema polêmico], utilizando um tom provocativo e inteligente.',
      'Analise a reação do público ao lançamento de [produto/evento] nas últimas 24 horas, identificando dois sentimentos predominantes.',
      'Crie cinco perguntas controversas sobre [tema] que promovam discussões éticas, políticas ou sociais entre diferentes públicos.',
      'Resuma os cinco tópicos centrais e três decisões-chave do [evento/conferência] em [data], destacando os impactos futuros.',
      'Crie uma declaração ousada e provocativa que um CEO do setor de [setor] poderia fazer sobre [tema].',
      'Transforme a criação de manchetes em algo envolvente: desenvolva três manchetes altamente virais sobre [tema].',
      'Analise de forma crítica a [proposta], desenvolvendo quatro argumentos sólidos contrários a ela.',
      'Descreva o significado de [jargão atual] em duas frases curtas e diretas, usando ironia leve e humor inteligente.',
      'Explore o cenário atual de [área] e destaque duas tecnologias emergentes que estão transformando esse campo.'
    ]
  },
  {
    nome: 'Perplexity',
    melhorArea: 'Pesquisa aprofundada, fontes confiáveis e validação de informações.',
    imagemUrl: 'download4.png',
    prompts: [
      'Realize uma busca atualizada sobre [tema], identificando três artigos revisados por pares publicados nos últimos seis meses.',
      'Realize um levantamento preciso das cinco principais normas oficiais emitidas pela [órgão regulador] que se relacionam diretamente a [tema/produto].',
      'Avalie a afirmação "[frase]" com base em evidências de estudos revisados por pares.',
      'Pesquise o tamanho do mercado global de [setor], indicando o valor em USD e o CAGR projetado para os próximos cinco anos.',
      'Explique [tema técnico] de forma clara e acessível, estruturando a resposta em três parágrafos.',
      'Desenvolva uma proposta de estudo sobre [tema] com duas metodologias complementares: uma qualitativa e outra quantitativa.',
      'Identifique três dados estatísticos recentes e relevantes de [fonte oficial], relacionados a [tema ou indicador específico].',
      'Identifique três autores clássicos de [tema], destacando para cada um a obra principal e fornecendo um resumo breve da tese central.',
      'Apresente a composição técnica de [produto], destacando quatro componentes principais e indicando o órgão regulador responsável no Brasil.',
      'Desenvolva uma tese original para um artigo sobre [tema], indicando três fontes de referência que sustentem a ideia.'
    ]
  },
  {
    nome: 'Copilot',
    melhorArea: 'Produtividade diária, integração com Microsoft Office e automação de documentos.',
    imagemUrl: 'download2.jpg',
    prompts: [
      'Elabore um roteiro de apresentação com 10 slides sobre [tema], direcionado para [público].',
      'Explique de forma prática como criar um gráfico de funil no Excel utilizando dados de [contexto].',
      'Resuma uma reunião sobre [assunto] em três parágrafos claros e objetivos.',
      'Crie o sumário e a estrutura de um guia prático de 5 páginas sobre [tema].',
      'Elabore um e-mail profissional para [destinatário] abordando [situação].',
      'Desenvolva uma fórmula no Excel para calcular [indicador] utilizando os valores das colunas A e B.',
      'Crie uma tabela comparativa com 5 linhas e 4 critérios para avaliar [opções].',
      'Analise e aprimore uma proposta sobre [tema], melhorando clareza, concisão e fluidez do texto.',
      'Explique como configurar uma automação no Power Automate para enviar lembretes diários de [tarefa].',
      'Crie 5 títulos atrativos e 5 subtópicos H2 para um artigo educativo de blog sobre [assunto].'
    ]
  }
];

@Component({
  selector: 'app-prompts-exemplos',
  templateUrl: './prompts-exemplos.component.html',
  styleUrls: ['./prompts-exemplos.component.css'],
  imports:[CommonModule]
})
export class PromptsExemplosComponent implements OnInit {
  iasData = iasData;
  selectedIA: IAData | null = null;
  activeIA: string = '';

  ngOnInit() {
    // Seleciona a primeira IA por padrão
    if (this.iasData.length > 0) {
      this.selectIA(this.iasData[0].nome);
    }
  }

  selectIA(iaName: string) {
    const ia = this.iasData.find(item => item.nome === iaName);
    if (ia) {
      this.selectedIA = ia;
      this.activeIA = iaName;
    }
  }

  getPromptsList(prompts: string[]): string {
    return prompts.map((prompt) => {
      return `
        <li>
          <span class="prompt-icon"><i class="fas fa-feather-alt"></i></span>
          ${prompt}
        </li>
      `;
    }).join('');
  }
}