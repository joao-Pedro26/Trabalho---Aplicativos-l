class DetalhesLinguagem extends HTMLElement {
    constructor() {
        super();
        this.linguagens = [
            {
            titulo: "Ruby",
            texto: 'O Ruby é uma linguagem de programação dinâmica, reflexiva e totalmente orientada a objetos, projetada para tornar o desenvolvimento de software mais simples e agradável. Criada por Yukihiro Matsumoto em meados da década de 1990, Ruby combina uma sintaxe elegante e intuitiva com uma poderosa capacidade de abstração, permitindo que os desenvolvedores se concentrem mais na lógica do problema do que nos detalhes técnicos. Uma das características mais marcantes do Ruby é sua filosofia de design, que prioriza a produtividade e a felicidade do programador. A linguagem é amplamente utilizada no desenvolvimento web, sendo o framework Ruby on Rails um dos exemplos mais notáveis de sua aplicação. Com Ruby on Rails, é possível criar aplicações web robustas, escaláveis e de alta qualidade em um curto espaço de tempo, graças à sua abordagem baseada em convenções e à vasta comunidade de suporte. Além do desenvolvimento web, Ruby também é utilizado em automação de tarefas, análise de dados, prototipagem e até mesmo em aplicações de inteligência artificial. Sua versatilidade, combinada com uma comunidade ativa e uma ampla gama de bibliotecas e ferramentas, faz do Ruby uma escolha popular entre desenvolvedores de todo o mundo. Ruby também é conhecido por sua filosofia de "otimização para a felicidade do programador", que se reflete em sua sintaxe natural e legível. A linguagem incentiva práticas de programação limpas e organizadas, permitindo que equipes de desenvolvimento colaborem de forma eficiente. Além disso, a comunidade Ruby é conhecida por ser acolhedora e colaborativa, oferecendo suporte a novos desenvolvedores e promovendo o compartilhamento de conhecimento. Com o passar dos anos, Ruby evoluiu para atender às demandas modernas de desenvolvimento, mantendo sua essência de simplicidade e elegância. Seja para criar aplicações web, realizar automações ou explorar novas áreas da tecnologia, Ruby continua sendo uma ferramenta poderosa e relevante no cenário da programação. Uma das razões pelas quais Ruby se destaca é sua abordagem centrada no desenvolvedor. A linguagem foi projetada para ser intuitiva e expressiva, permitindo que os programadores escrevam código que seja não apenas funcional, mas também bonito e fácil de entender. Isso é especialmente importante em projetos colaborativos, onde a clareza do código pode fazer uma grande diferença na produtividade da equipe. Ruby também possui uma rica coleção de bibliotecas e gems (pacotes reutilizáveis de código), que facilitam a implementação de funcionalidades complexas sem a necessidade de reinventar a roda. Desde bibliotecas para manipulação de dados até ferramentas para integração com APIs, a comunidade Ruby oferece uma solução para quase todos os desafios de desenvolvimento. Além disso, Ruby é frequentemente elogiado por sua flexibilidade e capacidade de adaptação. Ele permite que os desenvolvedores personalizem e estendam a linguagem de acordo com suas necessidades específicas, tornando-a uma escolha ideal para projetos que exigem soluções sob medida. Essa flexibilidade, combinada com sua sintaxe expressiva, faz do Ruby uma linguagem que incentiva a criatividade e a inovação. Por fim, o impacto do Ruby vai além de sua aplicação prática. A linguagem inspirou uma geração de desenvolvedores a adotar uma abordagem mais humana e empática para a programação, enfatizando a importância de criar ferramentas que sejam agradáveis de usar e que promovam a colaboração. Com sua combinação única de simplicidade, poder e comunidade, Ruby continua a ser uma das linguagens de programação mais queridas e influentes do mundo.',
            logo: "imagens/logo-ruby.png",
            exemplo: `# Este é um exemplo simples de código em Ruby
        def saudacao(nome)
          "Olá, #{nome}!"
        end

        puts saudacao('Mundo')`,
            video: "https://www.youtube.com/embed/t_ispmWmdjY",
            },
            {
            titulo: "JavaScript",
            texto: 'O JavaScript é uma linguagem de programação amplamente utilizada para desenvolvimento web, permitindo a criação de interfaces dinâmicas e interativas. Criada em 1995 por Brendan Eich, a linguagem rapidamente se tornou uma das principais tecnologias da web, ao lado de HTML e CSS. Sua versatilidade permite que seja utilizada tanto no lado do cliente quanto no lado do servidor, com o advento de plataformas como Node.js. Uma das maiores vantagens do JavaScript é sua capacidade de criar experiências de usuário ricas e responsivas, como animações, validações de formulário e atualizações de conteúdo em tempo real. Além disso, a linguagem possui uma vasta coleção de bibliotecas e frameworks, como React, Angular e Vue.js, que facilitam o desenvolvimento de aplicações modernas e escaláveis. O JavaScript também é conhecido por sua comunidade ativa e vibrante, que constantemente contribui com novas ferramentas, recursos e boas práticas. Apesar de sua simplicidade inicial, a linguagem evoluiu significativamente ao longo dos anos, incorporando recursos avançados como programação assíncrona, módulos e tipagem opcional com TypeScript. Essa evolução tornou o JavaScript uma escolha poderosa e flexível para uma ampla gama de aplicações, desde sites simples até sistemas complexos. Com sua combinação de acessibilidade, desempenho e suporte comunitário, o JavaScript continua a ser uma das linguagens mais populares e influentes do mundo.',
            logo: "imagens/logo-javascript.png",
            exemplo: `// Este é um exemplo simples de código em JavaScript
        function saudacao(nome) {
          return \`Olá, \${nome}!\`;
        }

        console.log(saudacao('Mundo'));`,
            video: "https://www.youtube.com/embed/W6NZfCO5SIk",
            },
            {
            titulo: "Python",
            texto: 'O Python é uma linguagem de programação de alto nível, conhecida por sua sintaxe clara e legível. Criada por Guido van Rossum no final da década de 1980, o Python foi projetado para ser fácil de aprender e usar, tornando-se uma escolha popular tanto para iniciantes quanto para desenvolvedores experientes. Sua versatilidade permite que seja utilizado em uma ampla gama de aplicações, incluindo ciência de dados, inteligência artificial, desenvolvimento web, automação de tarefas e muito mais. Uma das principais razões para sua popularidade é a vasta coleção de bibliotecas e frameworks disponíveis, como NumPy, Pandas, TensorFlow e Django, que simplificam o desenvolvimento de soluções complexas. Além disso, o Python possui uma comunidade ativa e acolhedora, que constantemente contribui com novos recursos, documentação e suporte. A linguagem também é conhecida por sua filosofia de design, que prioriza a simplicidade e a legibilidade do código, permitindo que os desenvolvedores se concentrem mais na lógica do problema do que nos detalhes técnicos. Com sua combinação de poder, simplicidade e suporte comunitário, o Python continua a ser uma das linguagens de programação mais amadas e amplamente utilizadas no mundo.',
            logo: "imagens/logo-python.png",
            exemplo: `# Este é um exemplo simples de código em Python
        def saudacao(nome):
            return f"Olá, {nome}!"

        print(saudacao('Mundo'))`,
            video: "https://www.youtube.com/embed/_uQrJ0TkZlc",
            },
            {
            titulo: "Java",
            texto: 'O Java é uma linguagem de programação robusta e amplamente utilizada, especialmente em aplicações corporativas, desenvolvimento Android e sistemas de grande escala. Criada por James Gosling e sua equipe na Sun Microsystems em 1995, o Java foi projetado com a filosofia de "escreva uma vez, execute em qualquer lugar", graças à sua máquina virtual (JVM). Essa portabilidade tornou o Java uma escolha popular para aplicações que precisam ser executadas em diferentes plataformas. Além disso, a linguagem é conhecida por sua segurança, desempenho e escalabilidade, sendo amplamente adotada em setores como bancos, telecomunicações e comércio eletrônico. O Java também possui uma rica coleção de bibliotecas e frameworks, como Spring, Hibernate e JavaFX, que facilitam o desenvolvimento de aplicações modernas e eficientes. Apesar de sua longa história, o Java continua a evoluir, incorporando novos recursos e melhorias para atender às demandas do desenvolvimento contemporâneo. Com sua combinação de estabilidade, flexibilidade e suporte comunitário, o Java permanece como uma das linguagens de programação mais confiáveis e amplamente utilizadas no mundo.',
            logo: "imagens/logo-java.png",
            exemplo: `// Este é um exemplo simples de código em Java
        public class Saudacao {
            public static void main(String[] args) {
            System.out.println("Olá, Mundo!");
            }
        }`,
            video: "https://www.youtube.com/embed/grEKMHGYyns",
            },
            {
            titulo: "C++",
            texto: 'O C++ é uma linguagem de programação poderosa e versátil, amplamente utilizada para desenvolvimento de sistemas, jogos, motores gráficos e aplicações de alto desempenho. Criada por Bjarne Stroustrup em 1983 como uma extensão da linguagem C, o C++ introduziu conceitos de programação orientada a objetos, como classes e herança, que revolucionaram o desenvolvimento de software. Sua eficiência e controle sobre os recursos do sistema tornam o C++ uma escolha ideal para aplicações que exigem alto desempenho e baixa latência. Além disso, a linguagem possui uma rica coleção de bibliotecas e frameworks, como Boost e Qt, que facilitam o desenvolvimento de soluções complexas. Apesar de sua complexidade, o C++ continua a ser amplamente utilizado em áreas como desenvolvimento de jogos, sistemas embarcados, computação científica e inteligência artificial. Com sua combinação de poder, flexibilidade e desempenho, o C++ permanece como uma das linguagens de programação mais influentes e amplamente utilizadas no mundo.',
            logo: "imagens/logo-c++.png",
            exemplo: `// Este é um exemplo simples de código em C++
        #include <iostream>
        using namespace std;

        void saudacao(string nome) {
            cout << "Olá, " << nome << "!" << endl;
        }

        int main() {
            saudacao("Mundo");
            return 0;
        }`,
            video: "https://www.youtube.com/embed/vLnPwxZdW4Y",
            },
            {
                titulo: "Go",
                texto: "Go, também conhecida como Golang, é uma linguagem de programação criada pelo Google em 2009. Ela foi projetada para ser simples, eficiente e altamente escalável, com suporte nativo a concorrência. Go é amplamente utilizada em sistemas distribuídos, servidores web e aplicações de alto desempenho.",
                logo: "imagens/logo-go.png",
                exemplo: `// Este é um exemplo simples de código em Go
              package main
              
              import "fmt"
              
              func saudacao(nome string) string {
                  return "Olá, " + nome + "!"
              }
              
              func main() {
                  fmt.Println(saudacao("Mundo"))
              }`,
                video: "https://www.youtube.com/embed/YS4e4q9oBaU",
              },
              {
                titulo: "Kotlin",
                texto: "Kotlin é uma linguagem de programação moderna e concisa, desenvolvida pela JetBrains. Ela é amplamente utilizada para desenvolvimento Android e aplicações multiplataforma. Kotlin é conhecida por sua interoperabilidade com Java, segurança contra null pointer exceptions e suporte a programação funcional.",
                logo: "imagens/logo-kotlin.png",
                exemplo: `// Este é um exemplo simples de código em Kotlin
              fun saudacao(nome: String): String {
                  return "Olá, $nome!"
              }
              
              fun main() {
                  println(saudacao("Mundo"))
              }`,
                video: "https://www.youtube.com/embed/F9UC9DY-vIU",
              },
              {
                titulo: "Swift",
                texto: "Swift é uma linguagem de programação desenvolvida pela Apple para criar aplicativos para iOS, macOS, watchOS e tvOS. Ela combina segurança, desempenho e uma sintaxe amigável, tornando o desenvolvimento mais rápido e eficiente.",
                logo: "imagens/logo-swift.png",
                exemplo: `// Este é um exemplo simples de código em Swift
              func saudacao(nome: String) -> String {
                  return "Olá, \(nome)!"
              }
              
              print(saudacao(nome: "Mundo"))`,
                video: "https://www.youtube.com/embed/comQ1-x2a1Q",
              },
              {
            titulo: "PHP",
            texto: "PHP é uma linguagem de programação amplamente utilizada para desenvolvimento web. Criada em 1994 por Rasmus Lerdorf, ela é conhecida por sua simplicidade e eficiência na criação de sites dinâmicos e aplicações web. PHP é frequentemente usado em conjunto com bancos de dados como MySQL e frameworks como Laravel.",
            logo: "imagens/logo-php.png",
            exemplo: `// Este é um exemplo simples de código em PHP
            <?php
            function saudacao($nome) {
                return "Olá, " . $nome . "!";
            }

            echo saudacao("Mundo");
            ?>`,
            video: "https://www.youtube.com/embed/OK_JCtrrv-c",
            },
            {
            titulo: "Rust",
            texto: "Rust é uma linguagem de programação moderna, focada em segurança e desempenho. Criada pela Mozilla em 2010, Rust é amplamente utilizada para desenvolvimento de sistemas, jogos e aplicações de alto desempenho. Sua principal característica é a garantia de segurança de memória sem a necessidade de um coletor de lixo.",
            logo: "imagens/logo-rust.png",
            exemplo: `// Este é um exemplo simples de código em Rust
            fn saudacao(nome: &str) -> String {
                format!("Olá, {}!", nome)
            }

            fn main() {
                println!("{}", saudacao("Mundo"));
            }`,
            video: "https://www.youtube.com/embed/zF34dRivLOw",
            },
            {
            titulo: "TypeScript",
            texto: "TypeScript é uma linguagem de programação baseada em JavaScript, mas com suporte a tipagem estática. Criada pela Microsoft, TypeScript é amplamente utilizada para desenvolvimento de aplicações web modernas, oferecendo maior segurança e produtividade ao desenvolvedor.",
            logo: "imagens/logo-typescript.png",
            exemplo: `// Este é um exemplo simples de código em TypeScript
            function saudacao(nome: string): string {
                return \`Olá, \${nome}!\`;
            }

            console.log(saudacao("Mundo"));`,
            video: "https://www.youtube.com/embed/BwuLxPH8IDs",
            },
            {
            titulo: "C#",
            texto: "C# é uma linguagem de programação desenvolvida pela Microsoft, amplamente utilizada para desenvolvimento de aplicações desktop, web e jogos. Combinando simplicidade e poder, C# é uma escolha popular para desenvolvimento na plataforma .NET.",
            logo: "imagens/logo-csharp.png",
            exemplo: `// Este é um exemplo simples de código em C#
            using System;

            class Program {
                static void Main() {
                    Console.WriteLine(Saudacao("Mundo"));
                }

                static string Saudacao(string nome) {
                    return $"Olá, {nome}!";
                }
            }`,
            video: "https://www.youtube.com/embed/GhQdlIFylQ8",
            },
           
        ];
    }

    connectedCallback() {
        const params = new URLSearchParams(window.location.search);
        const titulo = params.get('titulo');
        const linguagem = this.linguagens.find(lang => lang.titulo === titulo);
        this.render(linguagem);
    }

    render(linguagem) {
        if (linguagem) {
            this.innerHTML = `
                <main>
        <div class="detalheContainer">
          <img src="${linguagem.logo}" alt="Logo" class="logoDetalhes">
          <h1 class="tituloDetalhes">${linguagem.titulo}</h1>
        </div>
        <div  class="divVideo">
          <iframe class="video" src="${linguagem.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="detalheConteudo">
          <div class="detalheExemplo">
              <h2>Exemplo de uso</h2>
              <div>
              <pre class="codigoExemplo">
        <code>
            ${linguagem.exemplo}
        </code>
              </pre>
              </div>
          </div>
            <div class="detalheExemploTexto">
            <h2>Descrição</h2>
            <div class="detalheTexto">
                <p>${linguagem.texto}</p> 
            </div>
          </div>
        </div>
        
    </main>
            `;
        } else {
            this.innerHTML = `<p>Linguagem não encontrada.</p>`;
        }
    }
}


customElements.define('detalhes-linguagem', DetalhesLinguagem);

document.addEventListener('busca', (event) => {
    // Aqui você pode redirecionar para a página principal com o termo buscado,
    // ou implementar uma busca local, ou mostrar uma mensagem.
    // Exemplo: redirecionar para index.html com o termo de busca
    window.location.href = `index.html?busca=${encodeURIComponent(event.detail)}`;
});
