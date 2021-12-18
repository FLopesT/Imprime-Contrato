let info = [
    "NOME FANTASIA :",
    "RAZÃO SOCIAL :",
    "CNPJ Nº. :",
    "ENDEREÇO :",
    "TELEFONE FIXO :",
    "NOME COMPLETO :",
    "CPF Nº. :",
    "RG Nº. :",
    "DATA DE NASCIMENTO :",
    "TELEFONE CELULAR :",
    "E-MAIL :"
]

let backupData = [];

let itensS = [

    {           //segundo item da array é referente a altura toltal
        //do elemento, para que seja posicionado corretamente nas páginas
        //não consegui automatizar tal processo; 
        titulo: "SUPORTE À USUÁRIO",
        conteudo: [
            "Gerenciamento atualizações (Windows update);",
            "Automatização de tarefas nos equipamentos;",
            "Controle de ativos de rede;",
            "Administração do servidor de e-mail",
            "Configuração de e-mails nas estações de trabalho;",
            "Administração e gerenciamento dos serviços de backup;",
            "Manutenção preventiva e corretiva de equipamentos;",
            "Formatação de sistemas operacionais;",
            "Substituição de equipamento;",
            "Realocação de equipamentos;",
            "Suporte REMOTO - N1;",
            "Verificação e instalação de softwares;",
            "Verificação e instalação de impressoras;"
        ]

    },

    {
        titulo: "GESTÃO DE INFRAESTRUTURA N3 (AVANÇADO)",
        conteudo: [
            "Gerenciamento do storage com alta disponibilidade;",
            "Gerenciamento de servidores físicos;",
            "Gerenciamento ambiente virtual nas plataformas XenServer, Vmware e Hyper-v;",
            "Gerenciamento de ambiente MySQL;",
            "Gerenciamento de ambiente SQL Server;",
            "Configuração de políticas de acesso à internet;",
            "Alterações de escopo de endereçamento IP;",
            "Restauração de serviços e servidores;",
            "Gerenciamento de backup de dados e configurações em storage;",
            "Gerenciamento e administração do Active Directory;",
            "Implementação do servidor de arquivos em nuvem;",
            "Gerenciamento de ativos de rede;",
            "Gerenciamento dos links de comunicação de dados e voz;",
            "Gerenciamento de ambiente TS;",
            "Gerenciamento de DNS interno;",
            "Gerenciamento de DNS externo;",
            "Gerenciamento de ambiente HTTP;",
            "Gerenciamento de servidor de arquivos.",
            "Gerenciamento de segurança e confidencialidade da informação",
            "Filtro de conteúdo;",
            "Administração de VPN;",
            "Administração de permissões do file server;",
            "Gestão de acesso e identidade.",
            "N3 Service",
            "Suporte REMOTO - N3;",
            "Administração do servidor de arquivos local e em nuvem;",
            "Criação de base de conhecimento dos serviços prestados;",
            "Backup de dados, homologação de hardwares e softwares;",
            "Levantamento de requisitos para projetos internos;",
            "Administração de antivírus - pack de atualizações;",
            "Manutenção em Sistema Operacional – cliente e servidores;",
            "Instalação, desinstalação e configuração de softwares e serviços;",
            "Instalação, atualização e configuração de plugins;",
            "Instalação de Sistema Operacional (Windows, Linux);",
            "Diagnóstico e resolução de problemas de hardware e software;",
            "Acionamento e mediação de fornecedores e prestadores de serviços."
        ]
    },

    {
        titulo: "MONITORAMENTO DE INFRAESTRUTURA DE TI",
        conteudo: [
            "Monitoramento de servidores e ativos de rede;",
            "Gerenciamento de carga de processamento;",
            "Gerenciamento de utilização de memória;",
            "Gestão de capacidade de armazenamento;",
            "Gestão de tráfego de rede;",
            "Monitoramento de nobreaks;",
            "Alarmística baseada em dependência entre os serviços;",
            "Notificação por e-mail, SMS, Telegram;",
            "Dashboard de gerenciamento do ambiente;",
            "Automatização de ações baseada em eventos;",
            "Automação de acesso a portais e sistemas."
        ]
    },

    {
        titulo: "TELEFONIA IP",
        conteudo: [
            "Gerenciamento de call center;",
            "Gerenciamento de relatórios já implementados de KPI para medir produtividade da equipe (Asternic);",
            "Gerenciamento dos ramais;",
            "Gerenciamento da URA outomática;",
            "Gerenciamento das integrações já implementadas (Suporte);"
        ]
    },

    {
        titulo: "MARKETING DIGITAL",
        conteudo: [
            "ETAPA 01 - PLANEJAMENTO DE MARKETING FOCADO NAS CAMPANHAS",
            "plano de marketing é composto de três etapas que, se bem aplicadas, possibilitam ao CONTRATANTE mais informações para tomada de decisões com oobjetivo de atingir o real público de interesse. A ideia é termos campanhas mensaisfocadas no aumento de receita, exemplo: Você confia na sua contabilidade ?",
            "ETAPA 02 - CONHECER PERSONAS (CLIENTES)",
            "Mapear clientes em potencial e personas;",
            "Mapear concorrentes e seus diferenciais;",
            "ETAPA 03 - PRODUÇÃO E VINCULAÇÃO DO PLANEJAMENTO",
            "Produção do Material gráfico para as campanhas mensais digitais;",
            "Produção de um planejamento mensal de conteúdo estratégico;",
            "Gestão do tráfego pago nas plataformas Google e Facebook ads;",
            "Produção dos canais de retenção como E-mail Marketing e Mala direta."
        ]
    },

    {
        titulo: "BACKUP EM NUVEM",
        conteudo: [
            "Backup em nuvem 01TB;",
            "Servidor: Máquina AWS em Cloud;",
            "Ferramenta de gestão e alertas FULL."
        ]
    },

    {
        titulo: "DESENVOLVIMENTO E GESTÃO DE WEBSITE",
        conteudo: [
            "Menu com categorização e busca;",
            "Rebranding da logomarca;",
            "Tela inicial com (imagens, título e breve descritivo);",
            "Tela para visualização individual de posts (SEO personalizado para cada postagem);",
            "O layout do site será todo o modelo gráfico do site, já programado e dimensionado para apágina. Vamos desenvolver uma identidade visual padrão da empresa, ou seja, um padrãode cores, imagens e texto que será replicado em outras redes."
        ]
    },
]

//id de itens selecionados
let selectedItens = [];

let divs = [
    '<h2 class="itemH2"></h2>',
    '<p class="radioP"><input class="checkInputs" type="checkbox"></p>',
    '<p class="radioP destaque"><input checked="true" type="checkbox"></p>',
    '<div class="pag"><img class="cabecalhoImg" src="./images/Cabeçalho arte.png" alt=""><div class="pageContainer"></div><img class="rodapeImg" src="./images/Rodapé arte.png" alt=""></div>'
]

let pósItens = [
    ['<p class="g roboto">Os serviços cobrem ainda qualquer configuração e modificação, desde que seja tecnicamente viável, seguindo os seguintes prazos de atendimento:</p>',58.667],
    ['<img class="g" src="./images/tabela1.png" height="120px" width="690">',120],
    ['<p class="g roboto" >* Em casos de mudanças consideradas estruturais, e que dependam de projeto, a <strong>CONTRATADA</strong> notificará a contratante sobre o tipo da mudança, escopo, etapas e prazo para execução, encerrando o chamado de <strong>suporte técnico</strong>, e abrindo um chamado de <strong>mudança estrutural</strong>.</p>',80],   
    ['<p class="g roboto" style="text-decoration: underline; margin-top: 20px;"><strong>Locais de execução dos serviços</strong></p>',41.333],
    ['<div class="g roboto editBorder" id="local"><img id="localImg" src="./images/tabela2.png" style="position: absolute;" width="690px" height="47.955px"><input class="noBorderInput" id="address" value="ENDEREÇO AQUI" type="text"><select class="noBorderInput" name="uff" id="uff"><option>DF</option><option>RJ</option><option>SP</option><option>MG</option><option>PR</option><option>SC</option><option>RS</option><option>RO</option><option>AC</option><option>AM</option><option>PA</option><option>AP</option><option>TO</option><option>MA</option><option>PI</option><option>CE</option><option>RN</option><option>PB</option><option>PE</option><option>ES</option><option>MS</option><option>MT</option><option>GO</option></select><h4 id="addressText" >ENDEREÇO AQUI</h4><div id="divAddress" class="flexCenter"><p id="uf">UF</p></div><button id="localEditBtn">Editar</button></div>',49.938],
    ['<p class="g roboto">O acréscimo de unidades / filiais / ativos / recursos e equipamentos deverão passar por uma análise de impacto entre as partes para validar a viabilidade de execução dos serviços.</p>',58.667],
    ['<h2 class="g Blue-h2">4. &nbsp; &nbsp; CENTRAL DE ATENDIMENTO – EMPRESA</h2>',38.667],
    ['<h2 style="margin-top: 0;" class="g Red-h2">COMO FUNCIONA?</h2>',18.667],
    ['<p class="roboto g margin2"><strong>4.1.</strong>&nbsp;&nbsp; Central de atendimento e suporte a infraestrutura física e lógica, consultoria em tecnologia da informação, gerenciamento dos servidores e serviços, gerenciamento de serviços de TI combase na ITSM e gerenciamento de segurança e confidencialidade da informação.</p>',66],
    [' <div class="g margin2 roboto"><strong>4.2.</strong>&nbsp;&nbsp;Demandas e demais solicitações deverão ser feitas a partir de chamado junto a CONTRATADA através dos canais de atendimento: e-mail ( <a href="">suporte@empresa.com</a> , telefone <h2 style="margin-top:0; display: inline;" class="Red-h2">(32) 3571-9999 - OPÇÃO 02 </h2>e whatsapp<h2 style="margin-top:0; display: inline;" class="Red-h2"> (32) 3571-9999.</h2></div>',66],
    ['<p class="g margin2 roboto"><strong>4.3.</strong>&nbsp;&nbsp;Horário de atendimento: das 08 às 18h, segunda a sexta, com plantonistas para atendimento fora do horário comercial, em finais de semana e feriados para demandas intituladas “URGENTES”. O plantão deve ser acordado em CONTRATO e tem custo.</p>',66],
    ['<h2 class="g Blue-h2">5. &nbsp; &nbsp;NÃO ESCOPO</h2>',38.667],
    ['<ul class="g roboto" style="margin:8px"><li>Passagem de cabos;</li><li>Atendimento fora do horário comercial e horas extras sem autorização prévia;</li><li>Aquisição de licenças de software;</li><li> Investimento em tráfego pago (adwords, facebook e instagram).</li></ul>',93.333],
    ['<h2 style="margin-bottom:2px;" class="g Blue-h2">6. &nbsp; &nbsp;PROPOSTA DE INVESTIMENTO E CONDIÇÕES FINANCEIRAS</h2>',38.667],
    ['<h2 style="margin-bottom:2px;" class="Blue-h2">7. &nbsp; &nbsp;DISPOSIÇÕES GERAIS</h2>',38],
    ['<p class="margin2 roboto marginLeft"><strong>7.1.</strong>&nbsp;&nbsp;O presente documento dá direito ao CONTRATANTE para emitir notas fiscais de serviços e produtos aqui tratados.</p>',44],
    ['<p class="margin2 roboto marginLeft"><strong>7.2.</strong>&nbsp;&nbsp;Os códigos, banco de dados e demais informações da ferramenta a ser desenvolvida serão de posse da CONTRATADA.</p>',44],
    ['<p class="margin2 roboto marginLeft"><strong>7.3.</strong>&nbsp;&nbsp;O descumprimento de qualquer compromisso por parte da CONTRATANTE retira seu direito a qualquer bonificação e/ou carência.</p>',44],
    ['<p class="margin2 roboto marginLeft"><strong>7.4.</strong>&nbsp;&nbsp;Ao assinar essa PROPOSTA a CONTRATANTE declara que leu e concordou com todas as cláusulas e condições.</p>',44],
    ['<p class="margin2 roboto marginLeft"><strong>7.5.</strong>&nbsp;&nbsp;Este instrumento particular tem força de título executivo extrajudicial</p>',23],
    ['<p class="margin2 roboto marginLeft"><strong>7.6.</strong>&nbsp;&nbsp;Havendo controvérsias fica designado o foro da Seção Judiciária de Rio Pomba-MG - Justiça Federal com exclusão de qualquer outro, por mais privilegiado que seja, para dirimir quaisquer questões oriundas da presente proposta.</p>',65],
    ['<p class="margin2 roboto marginLeft"><strong>7.7.</strong>&nbsp;&nbsp;A presente PROPOSTA obriga as partes, seus herdeiros e sucessores.</p>',23]
]

let ultimaPágina = '<div class="pag"><img class="cabecalhoImg" src="./images/Cabeçalho arte.png" alt=""><div class="pageContainer"><div id="printTab"><p>Após clicar no botão imprimir vá para mais definições ou configurações, em margens selecione a opção "nenhum/a", esse processo garante a correta impressão do documento.</p><button id="btnPrint">Imprimir</button></div><p style="margin-bottom: 0;" class="roboto padding50">Por estarem assim justos e contratados, firmam o presente instrumento, em 02 (duas) vias de igual teor, diante de 2 (duas) testemunhas, que também o subscrevem.</p><div id=asPage class="editBorder padding50 roboto"><button class="editButtonRight" id="editLastPage">Editar</button><div class="asDiv" id="contratante"><div class="asDiv2" ><img class="line" src="./images/line.png"><p>CONTRATANTE</p><p id="lFantasia"><strong>NOME FANTASIA</strong></p><p id="lName">NOME:</p><p id="lCpf">CPF N°:</p></div><div id="floatTest"><p>TESTEMUNHAS :</p></div><div class="asDiv2" ><img class="line" src="./images/line.png"><p><strong>TESTEMUNHA 1</strong></p><input class="nameInput" n="0" placeholder="Nome" type="text"> <p class="nameL">NOME:</p><input class="cpfInput" n="0" autocomplete="off" maxlength="14" placeholder="Cpf n°" type="text"> <p class="cpfL">CPF N°:</p></div></div><div class="asDiv" id="contratada"><div class="asDiv2"><img class="line" src="./images/line.png"><p>CONTRATADA</p><p><strong>EMPRESA LTDA</strong></p><input class="nameInput" n="1" placeholder="Nome" type="text"> <p class="nameL">NOME:</p><input class="cpfInput" n="1" autocomplete="off" maxlength="14" placeholder="Cpf n°" type="text"><p class="cpfL">CPF N°:</p></div><div class="asDiv2"><img class="line" src="./images/line.png"><p><strong>TESTEMUNHA 2</strong></p><input class="nameInput" n="2" placeholder="Nome" type="text"> <p class="nameL">NOME:</p><input class="cpfInput" n="2" autocomplete="off" maxlength="14" placeholder="Cpf n°" type="text"><p class="cpfL" >CPF N°:</p></div></div></div></div><img class="rodapeImg" src="./images/Rodapé arte.png" alt=""></div>'