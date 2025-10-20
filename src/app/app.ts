import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// 1. Interface para tipar seus dados
interface IAData {
    nome: string;
    melhorArea: string;
    // URL agora inclui o prefixo /assets/ para robustez
    imagemUrl: string; 
    prompts: string[];
}

// 2. Variável de dados fora da classe, tipada corretamente
const iasData: IAData[] = [
    {
        nome: 'Gemini',
        melhorArea: 'Pesquisa, escrita criativa, planejamento multimídia e integração com o ecossistema Google.',
        imagemUrl: '/assets/download3.png', // Caminho absoluto para a pasta assets
        prompts: [
            'Você é um professor especialista em [disciplina]. Crie um plano de aula completo de 45 minutos sobre [tema] para alunos do [nível/idade], utilizando a metodologia [metodologia]. Inclua objetivo geral, recursos necessários, estrutura detalhada minuto a minuto, duas atividades práticas e um quiz com 5 perguntas relacionadas à [competência]. Finalize com um resumo dos aprendizados esperados.',
            'Redija uma introdução e uma conclusão para um relatório sobre [tema], destinado a [público-alvo] e com tom [formal/informal/persuasivo]. A introdução deve contextualizar e apresentar a tese principal; a conclusão deve sintetizar os resultados e propor uma recomendação fundamentada.',
            'Analise o [tipo de mídia] que apresenta [descrição dos dados] e extraia de 3 a 5 insights estratégicos relevantes para [público]. Organize o resultado em uma tabela com colunas: Insight | Descrição | Ação Recomendada.',
            'Crie um roteiro de vídeo de 60 segundos para TikTok ou YouTube Shorts que explique [tema complexo] de forma envolvente para [público]. Estruture o vídeo em blocos de 15 segundos, indicando narração, legenda e sugestão visual em cada parte.',
            'Resuma o artigo sobre [assunto] em até 150 palavras, destacando as 3 principais descobertas e sugerindo 5 temas de debate que estimulem reflexão entre [público-alvo].',
            'Escreva um e-mail profissional e persuasivo para [destinatário/cargo], solicitando [tipo de recurso] para [projeto]. Apresente o contexto, benefícios esperados (ROI), riscos de não aprovação e conclua com uma chamada para ação direta e convincente.',
            'Compare [Empresa 1] e [Empresa 2] em relação a [tema]. Crie uma tabela com 3 critérios principais, avalie cada um e conclua indicando qual empresa demonstra melhor desempenho segundo [critério].',
            'Monte um cronograma de 4 semanas (metodologia Ágil/Scrum) para desenvolver [projeto/produto]. Liste o nome de cada Sprint, tarefas principais, entregáveis e resultado esperado ao final do ciclo.',
            'Traduza o texto sobre [assunto] do [idioma] para o português do Brasil, adaptando vocabulário e exemplos para [público-alvo], preservando fluidez e contexto cultural.',
            'Explique como a Inteligência Artificial pode transformar [setor], apresentando 3 aplicações práticas, 3 riscos éticos ou operacionais e estratégias claras de mitigação.'
        ]
    },
    {
        nome: 'DeepSeek',
        melhorArea: 'Codificação, programação e tarefas de raciocínio lógico profundo.',
        imagemUrl: '/assets/download.png', // Caminho absoluto
        prompts: [
            'Desenvolva um script Python com Pandas que leia o arquivo dados_vendas.csv (colunas: [colunas]), filtre registros por [Região] e calcule a média de [coluna]. Salve o resultado em relatorio.txt, incluindo cabeçalho formatado e comentários explicativos no código.',
            'Crie uma fórmula no Excel para calcular [imposto/índice] em C2 com base nas regras: A2 < 1000 = 5%; 1000–5000 = 10%; >5000 = 15%;. A fórmula deve ser aplicável ao arrastar e exibir o resultado em porcentagem com duas casas decimais, acompanhada de uma breve explicação.',
            'Analise o código em [linguagem] da função calcular_total(), identifique o erro que impede [função desejada] e apresente a versão corrigida, comentada e com explicação da solução aplicada.',
            'Explique o conceito de [tecnologia/algoritmo] de maneira acessível, descrevendo sua arquitetura básica, um caso real de aplicação e três benefícios principais para [setor].',
            'Otimize a query SQL [query], utilizada para buscar [dados específicos]. Sugira três melhorias de desempenho (índices, filtros ou joins) e justifique cada ajuste.',
            'Escreva uma docstring completa para uma função em [linguagem] que realiza [tarefa]. Inclua descrição, parâmetros, tipo de retorno, exceções e exemplo de uso funcional.',
            'Projete a estrutura inicial de um projeto em [framework] voltado para [finalidade]. Liste diretórios e arquivos necessários e explique a função de cada componente.',
            'Descreva, em pseudocódigo, um algoritmo para classificar [produtos] em três categorias com base em [critérios]. Explique a lógica e as condições de decisão utilizadas.',
            'Liste 5 erros comuns em [linguagem], apresentando código incorreto e corrigido, com explicação breve de cada caso.',
            'Crie um script Python utilizando [biblioteca] para automatizar [tarefa repetitiva], incluindo tratamento de erros, geração de logs e comentários explicativos.'
        ]
    },
    {
        nome: 'Grok',
        melhorArea: 'Informações atuais, debates críticos e tendências em tempo real.',
        imagemUrl: '/assets/download1.jpg', // Caminho absoluto
        prompts: [
            'Resuma as 3 notícias mais relevantes das últimas 48 horas sobre [tema] em [país]. Para cada uma, inclua fonte, resumo de uma linha e tom geral (positivo, negativo ou neutro).',
            'Crie um post de até 3 frases para X (Twitter) sobre [tema polêmico], com tom provocativo e inteligente, hashtags relevantes e uma pergunta final que estimule o debate.',
            'Analise a reação do público ao lançamento de [produto/evento] nas últimas 24 horas, destacando 2 sentimentos predominantes e 2 exemplos reais de comentários resumidos.',
            'Liste 5 perguntas controversas sobre [tema] que gerem discussões éticas, políticas ou sociais entre diferentes públicos.',
            'Resuma os 5 tópicos centrais e 3 decisões-chave do [evento/conferência] em [data], destacando impactos futuros e tendências observadas.',
            'Escreva uma declaração ousada que um CEO de [setor] poderia fazer sobre [tema], com frase curta, provocativa e de alto impacto.',
            'Crie 3 manchetes virais sobre [tema], combinando curiosidade e emoção, direcionadas a [público].',
            'Liste 4 argumentos contrários à proposta [x], considerando consequências financeiras, logísticas e de longo prazo.',
            'Explique o termo [jargão atual] em até 2 frases curtas, com tom irônico e linguagem acessível para executivos.',
            'Apresente 2 tecnologias emergentes que influenciam [área], indicando um benefício e um desafio relevante de cada uma.'
        ]
    },
    {
        nome: 'Perplexity',
        melhorArea: 'Pesquisa aprofundada, fontes confiáveis e validação de informações.',
        imagemUrl: '/assets/download4.png', // Caminho absoluto
        prompts: [
            'Liste 3 artigos revisados por pares publicados nos últimos 6 meses sobre [tema], com referência completa (ABNT ou APA), autores, ano e resumo de uma frase.',
            'Apresente 5 normas oficiais da [órgão regulador] relacionadas a [tema/produto], com título, número, ano e escopo de aplicação.',
            'Verifique a afirmação: “[frase]”. Cite estudos revisados por pares que confirmem ou refutem a ideia, com periódico, ano, autores e conclusão resumida.',
            'Informe o tamanho do mercado global de [setor] (em USD), o CAGR projetado para 5 anos e a fonte confiável (com ano e link).',
            'Explique [tema técnico] em linguagem acessível, com 3 parágrafos: conceito, exemplo real e impacto prático.',
            'Proponha duas metodologias — uma qualitativa e outra quantitativa — para estudar [tema], indicando autor de referência e método de coleta ideal para cada.',
            'Liste 3 dados estatísticos atualizados de fontes oficiais (IBGE, FMI ou OMS), indicando fonte e data de coleta.',
            'Apresente 3 autores clássicos de [tema], com obra principal e resumo da tese central de cada um.',
            'Descreva a composição técnica de [produto], listando 4 componentes principais e o órgão regulador responsável no Brasil.',
            'Proponha uma tese original para artigo sobre [tema], incluindo 3 fontes de sustentação e uma hipótese testável.'
        ]
    },
    {
        nome: 'Copilot',
        melhorArea: 'Produtividade diária, integração com Microsoft Office e automação de documentos.',
        imagemUrl: '/assets/download2.jpg', // Caminho absoluto
        prompts: [
            'Crie um roteiro de apresentação com 10 slides sobre [tema], voltado para [público]. Inclua título, objetivo e três tópicos por slide, com progressão lógica e tom profissional.',
            'Explique como criar um gráfico de funil no Excel usando dados de [contexto]. Descreva a estrutura da tabela, as etapas de configuração e as boas práticas visuais.',
            'Resuma uma reunião sobre [assunto] em três parágrafos, destacando decisões tomadas, responsáveis e próximos passos.',
            'Elabore o sumário e a estrutura de um guia prático de 5 páginas sobre [tema], com 5 seções temáticas e um checklist de revisão final.',
            'Redija um e-mail profissional para [destinatário] sobre [situação], apresentando o problema, a solução proposta e a justificativa baseada em dados objetivos.',
            'Crie uma fórmula no Excel para calcular [indicador] usando colunas A e B, exibindo o resultado em C1 e incluindo comentário que explique o raciocínio.',
            'Monte uma tabela comparativa com 5 linhas e 4 critérios para avaliar [opções], destacando a mais eficiente para [propósito].',
            'Revise e melhore uma proposta sobre [tema], aprimorando clareza, concisão e acrescentando duas frases persuasivas de impacto.',
            'Descreva uma automação no Power Automate que envie lembretes diários de [tarefa] quando [gatilho ocorrer], detalhando as etapas e o benefício final.',
            'Sugira 5 títulos atrativos e 5 subtópicos H2 para um artigo educativo de blog sobre [assunto], otimizados para SEO e leitura fluida.'
        ]
    }
];


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit { 

  ngOnInit() {
    
    // Obter elementos do DOM
    const iaMenu = document.getElementById('ia-menu');
    const iaDisplay = document.getElementById('ia-display');

    if (!iaMenu || !iaDisplay) {
        console.error('Elementos ia-menu ou ia-display não encontrados no DOM.');
        return; 
    }

    const loadIACard = (iaName: string) => {
        const ia = iasData.find(item => item.nome === iaName); 
        if (!ia) return;

        const promptsListHtml = ia.prompts.map((prompt) => {
            // A classe 'fas fa-feather-alt' requer a importação da biblioteca FontAwesome no index.html
            const iconClass = 'fas fa-feather-alt'; 
            return `
                <li>
                    <span class="prompt-icon"><i class="${iconClass}"></i></span>
                    ${prompt}
                </li>
            `;
        }).join('');

        const iaCardHtml = `
            <div class="ia-card">
                <div class="ia-header">
                    <img src="${ia.imagemUrl}" alt="Logo da ${ia.nome}" class="ia-image">
                    <h3 class="ia-name">${ia.nome}</h3>
                </div>
                <div class="ia-body">
                    <p class="ia-area"><strong>Melhor para:</strong> ${ia.melhorArea}</p>
                    <h4 class="prompt-label">
                        10 Prompts Poderosos para Você Começar (Personalize o que estiver entre [ ])
                    </h4>
                    <ul class="ia-prompt-list">
                        ${promptsListHtml}
                    </ul>
                </div>
            </div>
        `;

        iaDisplay.innerHTML = iaCardHtml;
    };

    const createMenu = () => {
        
        iasData.forEach((ia: IAData) => { 
            const button = document.createElement('button') as HTMLButtonElement; 
            
            button.classList.add('ia-button');
            button.dataset['ia'] = ia.nome; 
            
            // Usando diretamente a URL do objeto (que já tem /assets/)
            button.innerHTML = `
                <img src="${ia.imagemUrl}" alt="Logo ${ia.nome}" class="ia-button-image">
                <span class="ia-button-name">${ia.nome}</span>
            `;

            button.addEventListener('click', () => {
                document.querySelectorAll('.ia-button').forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                loadIACard(ia.nome);
            });

            iaMenu.appendChild(button);
        });
        
        if (iasData.length > 0) {
            const firstButton = iaMenu.querySelector('.ia-button');
            if (firstButton) {
                firstButton.classList.add('active');
                loadIACard((firstButton as HTMLElement).dataset['ia']!); 
            }
        }
    };

    createMenu();
  }
}