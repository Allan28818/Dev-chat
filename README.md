<h1
align = "center"
style = "color: #00F9E0; font-weight: bolder"
>
  DevChat
</h1>

<img 
src = "https://ik.imagekit.io/jp1xbaqmsn6/principal-logo_Coqg8pCVH.png" 
alt = "DevChat - logo"
align = "center"/>

---

## Índice
- [O que é o DevChat](#o-que-é-o-DevChat?)
- [Quais são os primeiros passos?](#Quais-são-os-primeiros-passos?)
- [Cadastro](#Cadastro)
- [Login](#Login)
- [Adicionar contatos](#Adicionar-contatos)
- [Enviar mensagens](#Enviar-mensagens)
- [Navegando pela aplicação](#Navegando-pela-aplicação)
- [Procurando por contatos](#Procurando-por-contatos)
- [Por qual motivo temos um token?](#Por-qual-motivo-temos-um-token?)
- [Por que temos que fornecer tantos dados no cadastro?](#Por-que-temos-que-fornecer-tantos-dados-no-cadastro?)
- [Como clonar o repositório?](#Como-clonar-o-repositório?)
- [Como iniciar o projeto?](#Como-iniciar-o-projeto?)
- [Testes automatizados](#Testes-automatizados)
- [Tecnologias usadas](#Tecnologias-usadas)
- [Minhas redes sociais](#Minhas-redes-sociais)

---

## O que é o DevChat? 
## ❓
DevChat é uma aplicação feita para ajudar na comunicação, sempre visando a simplicidade e rapidez no processo. Ainda não é um projeto tão complexo mas ficou bastante interessante. Com DevChat você pode se comunicar em tempo real com mensagens sendo atualizadas automaticamente!

Também teremos testes automatizados, bancos de dados não relacionais (TypeORM), design responsivo e o uso de tecnologias atuais.

---

## Quais são os primeiros passos?
## 👣
Inicialmente você precisa criar uma conta no DevChat, depois fará o login para registrar seu token de forma instantânea, logo você poderá adicionar um contato através do código de conta e começar a conversar.

---

## Cadastro
## ✍
Para criar a sua conta no DevChat você deve clicar na aba sign up que está na página de login, depois disso, insira o seu nome de usuário, que é o sua palavra chave que aparecerá para os outros usuários quando você estiver conversando (**nomes de usuário não se repetem na aplicação**), depois insira seu nome e sobrenome, crie um código de conta que é um número de no mínimo **4** e no máximo **25** dígitos, depois você terá que criar uma senha de no mínimo **6** caracteres, **antenção**, não se esqueça do seu código de conta, nome de usuário e senha pois são através deles que você fará o login.

Seu código de conta é como se fosse seu número de celular, mas com um ponto positivo, não é necessário um chip, logo é com o código de conta que as pessoas lhe adicionarão para iniciar uma conversa.

Com o seu cadastro realizado, você será redirecionado(a) para a página de login, pois lá quando for feito o primeiro login, que você terá acesso ao seu token de rotas que é um meio de segurança durante o uso da aplicação e identifica cada usuário.

<img 
src = "https://media.giphy.com/media/hJbCjG0zlWhX4QUdiU/giphy.gif"
alt = "Como fazer o cadastro - gif"/>

---

## Login 
## 🔑
Para fazer o login é bem simples, afinal você é redirecionado(a) para essa página quando não está logado(a) e para ter acesso à plataforma, você terá que fornecer seu nome de usuário, código de conta e senha após isso você terá acesso a home, que apartir daí, você poderá adicionar contatos e conversar.

<img 
src = "https://media.giphy.com/media/s4Ya2AtIL7b2qjkjqw/giphy.gif"
alt = "Fazer login - gif" 
/>

---

## Adicionar contatos
## ➕👤
Uma coisa essencial para iniciar uma conversa é ter um contato adicionado, e isso vale para os dois usuários participantes da conversa. Para adicionar um contato vá na aba da barra de navegação e clique em "**Adicionar contatos**", depois disso forneça o código de conta de quem você quer conversar e crie um nome para esse contato. O nome não precisa ser necessariamente o nome de usuário do próprio contato, ou seu verdadeiro nome. 

Depois de adicionar o seu contato, você já poderá ir em "**Contatos**" na barra de navegação e começar a conversar com essa pessoa.

<img
src = "https://media.giphy.com/media/dLfiWm42YD6VQ9wkHu/giphy.gif"
alt = "Adicionar contatos - gif">

---

## Enviar mensagens 
## 📧📩
Após termos adicionado um contato podemos começar a conversar com ele indo em "**Contatos**" na barra de navegação e clicando no contato que queremos conversar. Lembrando que as mensagens são atualizadas em tempo real então não há necessidade de verificar se uma mensagem chegou com Ctrl + R, F5 ou dando _refresh_. Caso queira ir para o fim da página, clique no ícone no canto inferior direito que fica se movimentando.

<img 
src = "https://media.giphy.com/media/P4dcie2U5Z2qS6nLde/giphy.gif"
alt = "Enviando uma mensagem parte 1 - gif">

<img 
src = "https://media.giphy.com/media/zp6VQMnDyZp0LJB7Ze/giphy.gif"
alt = "Enviando uma mensagem parte 2 - gif">

---

## Navegando pela aplicação
## ⛵〰〰
Para acessar as páginas você terá um menu acima da página que você se encontra. Lá você poderá acessar qualquer rota exceto o login e o cadastro, pois tendo acesso a essa barra de navegação indica que você já está logado(a). 

Caso não ache a barra, provavelmente é porque você está vendo a aplicação com a janela reduzida ou em um dispositivo com o _display_ menor que 768 _pixels_, mas não se preocupe, você terá um menu hambúrguer no canto superior direito com todas as opções que você tinha no menu comum.

<img
src = "https://media.giphy.com/media/GG4VvirvfEgMtCjKfO/giphy.gif"
alt = "Navegando pela aplicação - gif">

---

## Procurando por contatos
## 🔍🔍
Caso você tenha muitos contatos, e queira achar um contato rapidamente, você pode usar a busca na parte de contatos. Com ela, o contato com quem você quer conversar será mostrado assim que houver correspondência com o que está sendo escrito.

<img
src = "https://media.giphy.com/media/9rqIwRETYOgfzY0cNt/giphy.gif"
alt = "Procurando contatos - gif">

---

## Por qual motivo temos um token?
## 🤔
O _token_ é usado para identificar o usuário que está na rota, ou seja, é através do _token_ que você tem acesso aos seus dados lá na _URL_ do navegador.

Mas mesmo com um _token_ que identifica qual usuário é qual, não é possível usar o _token_ para se passar por um outro usuário, pois o _token_ é fornecido apartir do login e é salvo no seu _Local_ _Storage_, e é de lá que a aplicação pega seu _token_ para usar nas rotas.

---

## Por que temos que fornecer tantos dados no cadastro?
## 🤔🎲
Pode ser um pouco monótono escrever tantas informações para ter um simples acesso, mas tudo isso é por uma questão de segurança. Se você perceber quando entramos no _chat_ de alguém, o nome que aparece não é o nome que adicionamos, mas sim o nome de usuário dessa pessoa, que assim como o código de conta não se repetem. Então se meu nome de usuário é @allan, e o código de conta é 1000, não pode haver nenhum usuário com o mesmo código de conta ou o nome de usuário.

Assim, ninguém podería mandar mensagens em um outro contato e se passar por você, pois o seu nome de usuário que é único está no _chat_ individual. Claro que essas situações seriam mais ocorrentes caso o _site_ da aplicação estivesse no ar, mas sempre é bom pensar em soluções para problemas que ainda não existem, não é mesmo?

---

## Como clonar o repositório?
## 📁📁
Para começar a usar e testar a aplicação em sua máquina local, basta você rodar em seu terminal na pasta onde você queira que o projeto fique, o seguinte comando:
```bash
$ git clone https://github.com/Allan28818/Dev-chat.git
```
Ou use ```git@github.com:Allan28818/Dev-chat.git```, caso você tenha a licença SSH.

---

## Como iniciar o projeto?
## ▶⏸

Para iniciar o projeto você tem que estar com
a _API_ e o front-end no ar, pois sem a _API_ você não tem a lógica da aplicação sendo executada para realizar processos como salvamento de dados e sem o front-end, a aplicação não ficará tão operável para um usuário comum e não terá _designs_ e _layouts_ bonitos.

Então para levantar a _API_, você terá que estar com seu terminal dentro do projeto e depois entrar na pasta da _API_, então vejamos o que temos que fazer:
```bash
$ cd DevChat
```
- Com isso você estará na pasta do projeto agora entraremos na _API_:
```bash
cd API
```
- Agora levante a _API_ com:
```bash
# para quem usa npm:
$ npm run dev

# para quem usa yarn:
$ yarn dev
```

Com a _API_ no ar, vamos abrir outra instância do terminal na pasta do projeto, então assim como fizemos na _API_ faremos aqui:
```bash
$ cd DevChat

$ cd project
``` 

- Agora rode vamos levantar o _front-end_ com:
```bash
# para quem usa npm:
$ npm run start

# para quem usa yarn:
$ yarn start
```

Pronto! Agora o nosso projeto está no ar no endereço: **http://localhost:3000**.

---

## Testes automatizados
## 🤖
No _back-end_ da nossa aplicação temos testes para basicamente todas as funcionalidades, infelizemente eu não implementei no _front-end_, mas segue abaixo o comando para rodar os testes no _back-end_:

```bash
#primeiro entre no projeto
$cd DevChat

#depois entre na API
$ cd API

#para quem usa npm:
$ npm run test

#para quem usa yarn:
$ yarn test
```

---

## Tecnologias usadas
## 💻👨‍💻👩‍💻
Nesta aplicaçãos usei muitas tecnologias, vejamos abaixo quais foram:

- [TypeScript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/pt-BR/)
- [TypeORM](https://typeorm.io/#/)
- [Node](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [JavaScript](https://www.javascript.com/)
- [HTML](https://html.com/)
- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [Formik](https://formik.org/docs/overview)
- [Json Web Token (JWT)](https://jwt.io/)
- [Express](https://expressjs.com/pt-br/)
- [Axios](https://www.npmjs.com/package/axios)
- [Yup](https://www.npmjs.com/package/yup?activeTab=readme)
- [Uuid](https://www.uuidgenerator.net/)
- [Cors](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CORS)
- [Supertest](https://www.npmjs.com/package/supertest)

---

## Minhas redes sociais
## 🤳📸
Para me seguir e me acompanhar nas redes sociais veja meu Linkedin e Instagram e caso queira entrar em contato via e-mail, veja meu e-mail abaixo também:
- [Linkedin](https://www.linkedin.com/in/allan-julie-b535811b4)
- [Instagram](https://www.instagram.com/allan120699/)
- Email - allanzinhofontes@gmail.com
