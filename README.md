# Tópico Importante para Avaliação

O que é Framework?
É um conjunto de recursos ou ferramentas para resolver problemas.
Framework é uma estrutura pronta que ajuda a desenvolver aplicações de forma mais rápida e organizada.

Qual a diferença entre biblioteca e framework?
R: Uma biblioteca fornece ferramentas que você usa quando quiser. Um framework define a estrutura do projeto e controla como o código é organizado.

O que é o JavaScript?
Linguagem de programação
JavaScript é uma linguagem de programação usada para criar páginas e aplicações interativas.

O que é o Node.js?
R: Node.js é um ambiente que permite executar JavaScript fora do navegador, como em servidores.(Run Time é a mesma coisa de ambiente de execução)

O que é a biblioteca React? (core - coração, núcleo, base)
R: React é uma biblioteca JavaScript usada para criar interfaces de usuário de forma rápida e organizada.

o que é biblioteca React Native?
R: É uma biblioteca que fornece os componentes necessários para desenvolver aplicativos para dispositivos moveis. (Componentes nativos).

O que é a Framework Expo?
R: Expo é um framework que facilita o desenvolvimento de aplicativos móveis com React Native. Framework fornece um ecossistema para facilitar nosso desenvolvimento.

Expo --> é um framework que usa como base react native. (usa react native)
    -->  
React Native --> é uma biblioteca que usa como base o react. (usa react)

React --> é uma biblioteca JavaScript.

O que é npm (NODE PACKAGE MANAGER)?
R: É um gerenciador de pacotes do Node.( Permite instalar, desintalar, atualizar e executar escripts) (Pacote de códigos que serão usados no projeto). Ex: A camera do celular, o GPS, oAccelerometer, etc.

Comando de instalação do Expo:
npx create-expo-app@lastest --template

Opções:
- Blank
- nome do App
- For learning with Expo Go (SDK 54 ) ** mais estável do q a versão 57

comando paea rodar o app:
npm start ou npm run web

O StyleSheet do React Natiove tem todas as propriedades da Web? (CSS)
R: Não. Mas possui as principais, já que o foco é mobile.
Não. O StyleSheet do React Native possui muitas propriedades semelhantes ao CSS, mas não todas. Algumas propriedades da Web não são suportadas.

Todos as propriedades do StyleSheet funcionam para IOs e Android?
R: Não. Algumas propriedades são específicas para IOS e outras para Android, mas a maioria funciona para os dois sistemas.
Não. A maioria funciona nos dois sistemas, mas algumas propriedades são exclusivas ou se comportam de forma diferente no iOS e no Android.

Quais as pricipais formas de navegação com Expor Router?
- Stack
-Tabs
- Drawer 
-Modal
As principais formas de navegação com Expo Router são:

Stack: organiza as telas em uma sequência. É como entrar em uma tela e depois poder voltar para a anterior.
Tabs: cria uma navegação por abas, geralmente na parte inferior do aplicativo. É muito usada para separar áreas como Início, Perfil e Configurações.
Drawer: cria um menu lateral que pode ser aberto deslizando ou clicando em um botão.
Modal: abre uma tela sobre a tela atual, geralmente para mostrar uma informação, formulário ou confirmação.

Resumindo: o Expo Router oferece diferentes formas de organizar a navegação, e cada uma pode ser usada de acordo com a necessidade do aplicativo.

### Instalação do Expo
npx cerate-expo-app@latest -- template
 - Blank
 - nome do app
 - for learning with expo go (SDK 54 ) **mais estável do q a versão 57**

 ### Instalação do Expo Router

- https://docs.expo.dev/router/installation/

 - Fazer as etapas 1, 2, 3
 - Criar pastra app dentro de scr
- Colocar a tela inicial ( componentes ) dentro da pasta app ( index.js )   
- Rodar a etapa 6 (npx expo start --clear)
