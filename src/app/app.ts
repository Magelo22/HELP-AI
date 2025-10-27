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
            'Imagine que você está elaborando um relatório sobre [tema] voltado para [público-alvo]. Apresente uma introdução que contextualize o assunto e destaque a tese central de forma clara e envolvente. Em seguida, desenvolva uma conclusão que sintetize os principais resultados e apresente uma recomendação final bem fundamentada, coerente com os objetivos do relatório e com as necessidades do público.',
            'Analise o [tipo de mídia] que apresenta [descrição dos dados] e identifique os principais padrões, tendências ou oportunidades observadas. A partir dessa análise, elabore de três a cinco insights estratégicos relevantes para [público], explicando o que cada um revela e como pode orientar decisões práticas. Organize o resultado em uma tabela com as colunas: Insight | Descrição | Ação Recomendada.',
            'Produza um roteiro dinâmico de 60 segundos para TikTok ou YouTube Shorts que explique [tema complexo] de maneira clara e envolvente para [público]. Divida o conteúdo em blocos de 15 segundos, e em cada parte descreva a narração principal, o texto que deve aparecer como legenda e a sugestão visual correspondente. O objetivo é garantir que o vídeo mantenha ritmo, clareza e impacto do início ao fim.',
            'Leia e resuma o artigo sobre [assunto] em até 150 palavras, destacando as três descobertas mais relevantes. A partir desse resumo, proponha cinco temas de debate que incentivem reflexão e discussão entre [público-alvo]. O objetivo é fornecer uma visão concisa do conteúdo, ao mesmo tempo que estimula engajamento crítico e análise profunda.',
            'Escreva um e-mail profissional e persuasivo para [destinatário/cargo], solicitando [tipo de recurso] para [projeto]. Apresente o contexto, benefícios esperados (ROI), riscos de não aprovação e conclua com uma chamada para ação direta e convincente.Redija um e-mail profissional e persuasivo para [destinatário/cargo] solicitando [tipo de recurso] para [projeto]. Contextualize a necessidade, descrevendo brevemente o projeto e seus objetivos. Explique os benefícios esperados, incluindo o retorno sobre investimento (ROI), e destaque os riscos de não aprovação. Conclua com uma chamada à ação clara e direta, incentivando uma resposta positiva e imediata.',
            'Compare [Empresa 1] e [Empresa 2] em relação a [tema], analisando seu desempenho nos três critérios mais relevantes. Para cada critério, descreva os pontos fortes e fracos de cada empresa, apresentando tudo em uma tabela organizada. Conclua indicando qual empresa demonstra melhor desempenho global e explique de forma clara a justificativa para essa avaliação.',
            'Crie um cronograma de 4 semanas usando a metodologia Ágil/Scrum para desenvolver [projeto/produto]. Para cada Sprint, indique o nome, as tarefas principais, os entregáveis esperados e os resultados finais planejados. O objetivo é fornecer um plano estruturado e visualizável que facilite o acompanhamento do progresso e a entrega de valor em cada etapa do projeto.',
            'Traduza o texto sobre [assunto] do [idioma] para o português do Brasil, garantindo que o vocabulário e os exemplos estejam adaptados para [público-alvo]. Mantenha a fluidez e o contexto cultural original, de modo que a mensagem seja clara, natural e facilmente compreendida pelo público brasileiro.',
            'Explique como a Inteligência Artificial pode transformar [setor], destacando três aplicações práticas que gerem valor. Aponte também três riscos éticos ou operacionais associados à implementação da IA e proponha estratégias claras para mitigar esses riscos. O objetivo é fornecer uma visão equilibrada, prática e fundamentada, que auxilie na tomada de decisão e planejamento estratégico'
        ]
    },
    {
        nome: 'DeepSeek',
        melhorArea: 'Codificação, programação e tarefas de raciocínio lógico profundo.',
        imagemUrl: '/assets/download.png', // Caminho absoluto
        prompts: [
            'Desenvolva um script em Python usando Pandas para processar o arquivo [arquivo.csv] (colunas: [colunas]). Filtre os registros por [coluna desejada] e calcule a média de [coluna desejada]. Inclua no script cabeçalho formatado e comentários explicativos que facilitem a compreensão do código. Salve os resultados em relatorio.txt, de forma organizada e pronta para análise.',
            'Crie uma fórmula no Excel para calcular [imposto/índice] em C2, seguindo as regras: A2 < 1000 = 5%; 1000–5000 = 10%; >5000 = 15%. Garanta que a fórmula funcione ao ser arrastada para outras linhas e que o resultado seja exibido em porcentagem com duas casas decimais. Inclua uma breve explicação sobre como a fórmula funciona, facilitando compreensão e reutilização.',
            'Analise o código da função calcular_total() em [linguagem], identifique o erro que impede que [função desejada] funcione corretamente e apresente uma versão corrigida. Inclua comentários explicativos no código e descreva a solução aplicada de forma clara, para que qualquer pessoa compreenda a lógica da correção.',
            'Explique o conceito de [tecnologia/algoritmo] de maneira acessível, detalhando sua arquitetura básica, apresentando um caso real de aplicação e destacando três benefícios principais para [setor]. O objetivo é fornecer uma visão clara, prática e compreensível, que auxilie tanto iniciantes quanto profissionais a entender o valor e a funcionalidade da tecnologia.',
            'Analise a query SQL [query] usada para buscar [dados específicos] e proponha três melhorias de desempenho, como ajustes de índices, filtros ou joins. Para cada melhoria sugerida, explique a justificativa e como ela contribui para otimizar a execução da consulta, garantindo resultados mais rápidos e eficientes.',
            'Avalie diferentes cenários futuros relacionados a [tema] e identifique impactos, probabilidades e consequências de cada um. Organize a análise de forma comparativa, destacando riscos e oportunidades para apoiar decisões estratégicas.',
            'Investigue as tendências atuais em [mercado/área] para apoiar decisões estratégicas, identificando padrões relevantes e oportunidades emergentes. Analise os dados disponíveis, sinais de mercado e informações setoriais, organizando os insights de forma clara em relatório ou tabela visual, de modo a fornecer uma síntese estratégica completa que facilite o planejamento e permita antecipar oportunidades futuras.',
            'Analise os dados disponíveis sobre [processo ou operação] para identificar áreas críticas que necessitam de intervenção. Com base nessa análise, sugira três ações fundamentadas em evidências, detalhando a lógica por trás de cada decisão e os benefícios esperados ao implementá-las, de forma que as soluções sejam práticas e facilmente aplicáveis.',
            'Identifique cinco erros comuns em [linguagem], mostrando o código incorreto e a versão corrigida de cada caso. Para cada erro, explique de forma breve a causa do problema e como a correção resolve a questão, oferecendo um guia claro e prático para aprendizado e prevenção de falhas.',
            'Crie um script em Python usando [biblioteca] para automatizar [tarefa repetitiva], garantindo tratamento de erros, geração de logs e comentários explicativos. O objetivo é entregar uma solução funcional, confiável e facilmente compreensível, que facilite a execução da tarefa e sirva como referência para futuras automações.'
        ]
    },
    {
        nome: 'Grok',
        melhorArea: 'Informações atuais, debates críticos e tendências em tempo real.',
        imagemUrl: '/assets/download1.jpg', // Caminho absoluto
        prompts: [
            'Resuma as três notícias mais relevantes das últimas 48 horas sobre [tema] em [país], incluindo para cada uma a fonte, um resumo conciso de uma linha e o tom geral da matéria (positivo, negativo ou neutro). O objetivo é fornecer uma visão rápida e precisa dos acontecimentos, permitindo compreender o contexto e identificar tendências importantes.',
            'Crie um post de até três frases para X (Twitter) sobre [tema polêmico], utilizando um tom provocativo e inteligente. Inclua hashtags relevantes e termine com uma pergunta que estimule o debate, de modo a gerar engajamento e reflexão entre diferentes públicos.',
            'Analise a reação do público ao lançamento de [produto/evento] nas últimas 24 horas, identificando dois sentimentos predominantes e incluindo dois exemplos reais de comentários resumidos. O objetivo é fornecer uma visão clara e prática da percepção do público, permitindo compreender o impacto imediato e tendências de engajamento.',
            'Crie cinco perguntas controversas sobre [tema] que promovam discussões éticas, políticas ou sociais entre diferentes públicos, estimulando reflexão e debate construtivo a partir de perspectivas variadas.',
            'Resuma os cinco tópicos centrais e três decisões-chave do [evento/conferência] em [data], destacando os impactos futuros e as tendências observadas, de modo a fornecer uma visão clara e estratégica que apoie análises e decisões informadas.',
            'Crie uma declaração ousada e provocativa que um CEO do setor de [setor] poderia fazer sobre [tema]. A frase deve ser curta, memorável e de alto impacto, transmitindo confiança, visão e uma pitada de controvérsia, como uma citação capaz de chamar atenção da mídia e do público.',
            'Transforme a criação de manchetes em algo envolvente e de alto impacto: desenvolva três manchetes altamente virais sobre [tema], com foco em despertar curiosidade e emoção genuína, adaptando o tom, a linguagem e o estilo para [público]. Cada manchete deve ser envolvente, instigante e provocar interesse imediato para gerar cliques e compartilhamentos.',
            'Analise de forma crítica a [proposta], desenvolvendo quatro argumentos sólidos contrários a ela. Considere cuidadosamente os possíveis impactos financeiros, os desafios logísticos e as implicações de longo prazo, apresentando cada argumento de modo claro, fundamentado e convincente, como se estivesse construindo uma análise estratégica para tomada de decisão.',
            'Descreva o significado de [jargão atual] em duas frases curtas e diretas, usando ironia leve e humor inteligente, de forma que qualquer executivo entenda o conceito sem precisar de explicações técnicas — como se fosse uma definição de bastidor no mundo corporativo.',
            'Explore o cenário atual de [área] e destaque duas tecnologias emergentes que estão transformando esse campo. Para cada uma, descreva de forma clara um benefício marcante, que evidencia seu potencial de inovação, e um desafio relevante, que mostra as limitações ou riscos que precisam ser superados para alcançar resultados sustentáveis.'
        ]
    },
    {
        nome: 'Perplexity',
        melhorArea: 'Pesquisa aprofundada, fontes confiáveis e validação de informações.',
        imagemUrl: '/assets/download4.png', // Caminho absoluto
        prompts: [
            'Realize uma busca atualizada e criteriosa sobre [tema], identificando três artigos revisados por pares publicados nos últimos seis meses. Apresente cada um com a referência completa no formato ABNT ou APA, incluindo autores, ano e um breve resumo de uma frase que destaque o principal achado ou contribuição do estudo, garantindo clareza, relevância e rigor acadêmico.',
            'Realize um levantamento preciso das cinco principais normas oficiais emitidas pela [órgão regulador] que se relacionam diretamente a [tema/produto]. Para cada norma, apresente de forma organizada o título completo, o número identificador, o ano de publicação e um resumo claro do escopo de aplicação, destacando sua importância prática e relevância regulatória no contexto atual.',
            'Avalie a afirmação “[frase]” com base em evidências de estudos revisados por pares, destacando os que a confirmam ou refutam. Para cada estudo, forneça periódico, ano, autores e uma conclusão em uma frase, mostrando de forma clara se os resultados apoiam ou contradizem a afirmação.',
            'Pesquise o tamanho do mercado global de [setor], indicando o valor em USD e o CAGR projetado para os próximos cinco anos. Inclua uma fonte confiável, com ano de publicação e link, garantindo que os dados sejam atuais, precisos e facilmente verificáveis.',
            'Explique [tema técnico] de forma clara e acessível, estruturando a resposta em três parágrafos: o primeiro apresenta o conceito, o segundo oferece um exemplo real que ilustra a aplicação, e o terceiro destaca o impacto prático, mostrando como o tema influencia decisões, processos ou resultados do dia a dia.',
            'Desenvolva uma proposta de estudo sobre [tema] com duas metodologias complementares: uma qualitativa e outra quantitativa. Para cada abordagem, indique um autor de referência que fundamenta o método e descreva o método de coleta de dados mais adequado, destacando como ele permite obter informações relevantes e confiáveis para a pesquisa.',
            'Identifique três dados estatísticos recentes e relevantes de [fonte oficial: IBGE, FMI ou OMS], relacionados a [tema ou indicador específico], indicando claramente o valor, a data de coleta e a fonte completa. Apresente-os de forma clara e resumida, pronta para ser usada em apresentações, permitindo que o usuário substitua facilmente os campos entre colchetes por informações específicas do seu contexto.',
            'Identifique três autores clássicos de [tema], destacando para cada um a obra principal e fornecendo um resumo breve da tese central, de forma clara e objetiva. Estruture o conteúdo para que possa ser facilmente usado em apresentações ou estudos.',
            'Apresente a composição técnica de [produto], destacando quatro componentes principais e indicando o órgão regulador responsável no Brasil. Estruture a informação de forma clara e objetiva, permitindo compreensão rápida tanto do aspecto técnico quanto da regulamentação aplicável.',
            'Desenvolva uma tese original para um artigo sobre [tema], indicando três fontes de referência que sustentem a ideia e formulando uma hipótese testável. Apresente o conteúdo de forma clara e estruturada, destacando a relevância da tese e a possibilidade de investigação empírica.'
        ]
    },
    {
        nome: 'Copilot',
        melhorArea: 'Produtividade diária, integração com Microsoft Office e automação de documentos.',
        imagemUrl: '/assets/download2.jpg', // Caminho absoluto
        prompts: [
            'Elabore um roteiro de apresentação com 10 slides sobre [tema], direcionado para [público]. Para cada slide, inclua um título, um objetivo claro e três tópicos principais, garantindo uma progressão lógica ao longo da apresentação e mantendo um tom profissional e envolvente.',
            'Explique de forma prática como criar um gráfico de funil no Excel utilizando dados de [contexto]. Descreva a estrutura ideal da tabela, passo a passo para configurar o gráfico, e indique boas práticas visuais, como escolha de cores, ordenação dos dados e destaque de etapas críticas, para que o gráfico seja claro e fácil de interpretar.',
            'Resuma uma reunião sobre [assunto] em três parágrafos claros e objetivos. No primeiro, destaque os principais tópicos discutidos; no segundo, registre as decisões tomadas e os responsáveis por cada ação; e no terceiro, apresente os próximos passos, prazos e responsáveis, estruturando o conteúdo de forma que seja fácil de consultar e compartilhar como ata ou resumo executivo.',
            'Crie o sumário e a estrutura de um guia prático de 5 páginas sobre [tema], organizando-o em cinco seções temáticas que cubram os aspectos essenciais do tema. Inclua ao final um checklist de revisão, destacando pontos-chave que devem ser conferidos, garantindo que o guia seja claro, objetivo e facilmente utilizável pelo leitor.',
            'Elabore um e-mail profissional para [destinatário] abordando [situação], estruturando-o de forma clara: primeiro apresente o problema identificado, em seguida detalhe a solução proposta e, por fim, forneça a justificativa com base em dados objetivos, garantindo um tom formal, direto e convincente.',
            'Desenvolva uma fórmula no Excel para calcular [indicador] utilizando os valores das colunas A e B, exibindo o resultado na célula C1. Inclua um comentário explicativo na célula que descreva de forma clara o raciocínio por trás do cálculo, permitindo que qualquer usuário compreenda rapidamente como o indicador foi obtido.',
            'Crie uma tabela comparativa com 5 linhas e 4 critérios para avaliar [opções], apresentando os dados de forma clara e organizada. Destaque a opção mais eficiente para [propósito], facilitando a visualização das diferenças entre alternativas e permitindo uma tomada de decisão rápida e fundamentada.',
            'Analise e aprimore uma proposta sobre [tema], melhorando clareza, concisão e fluidez do texto. Inclua duas frases persuasivas de impacto que reforcem os pontos principais e aumentem o poder de convencimento da proposta, mantendo um tom profissional e envolvente.',
            'Explique como configurar uma automação no Power Automate para enviar lembretes diários de [tarefa] sempre que [gatilho ocorrer]. Detalhe cada etapa do fluxo, desde a definição do gatilho até a ação de envio, e destaque o benefício final, mostrando como a automação melhora a organização, a pontualidade e a eficiência no acompanhamento da tarefa.',
            'Crie 5 títulos atrativos e 5 subtópicos H2 para um artigo educativo de blog sobre [assunto], garantindo que sejam otimizados para SEO e proporcionem uma leitura fluida e envolvente. Os títulos devem despertar curiosidade e relevância, enquanto os subtópicos organizam o conteúdo de forma lógica, facilitando a compreensão e retenção da informação pelo leitor.'
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