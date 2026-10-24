# Ponte-do-Bem

# Ponte do Bem — Rede Solidária de Doações 

> Aplicação em Java desenvolvida com conceitos de Programação Orientada a Objetos (POO) para gestão, controle e destinação prioritária de doações para famílias e indivíduos em situação de vulnerabilidade.

---

##  Sobre o Projeto

O **Ponte do Bem** é um sistema desenvolvido em **Java** para organizar e intermediar o fluxo de doações entre doadores e beneficiários. Ele gerencia o cadastro de usuários, categorização de itens doados (alimentos, roupas e produtos de higiene), controle dos estados de cada doação e a aplicação de algoritmos de priorização social e logística.

Este projeto foi concebido no âmbito da disciplina de **Programação Orientada a Objetos (POO)** ministrada pelo professor **Luiz Santos**.

---

## Equipe de Desenvolvimento

* Suyane Silva de Oliveira
* Camila Lima Jesus
* Lucas Vinicius Ribeiro
* Pedro Henrique Ferreira


---

##  Principais Funcionalidades

- **Gestão de Pessoas:** Cadastro e consulta de *Doadores* e *Beneficiários*.
- **Gestão de Doações:** Cadastro e acompanhamento de itens divididos nas categorias:
  -  *Alimentos* (com indicação de perecibilidade)
  -  *Roupas*
  -  *Produtos de Higiene* (com verificação de lacre)
- **Ciclo de Vida da Doação:** Controle rigoroso dos status (`DISPONIVEL`, `RESERVADA`, `ENTREGUE`, `CANCELADA`).
- **Priorização Inteligente:**
  - **Prioridade Social:** Identificação de beneficiários com renda familiar até R$ 1.500,00 ou famílias com 5+ integrantes.
  - **Prioridade de Item:** Algoritmos específicos por categoria (ex: alimentos perecíveis e itens de higiene lacrados possuem prioridade de saída).

---

##  Conceitos de POO Aplicados

| Conceito | Aplicação no Projeto |
| :--- | :--- |
| **Herança** | `Pessoa` é a classe base para `Doador` e `Beneficiario`. `Doacao` é a classe base para `DoacaoAlimento`, `DoacaoRoupa` e `DoacaoHigiene`. |
| **Polimorfismo** | Sobrescrita da lógica do cálculo de prioridade nas subclasse de `Doacao`, permitindo tratamento polimórfico de itens. |
| **Encapsulamento** | Proteção dos atributos e controle do ciclo de estados das doações através de métodos acessores e mutadores validadores. |
| **Sobrecarga** | Construtores e métodos auxiliares parametrizados para flexibilidade na instanciação dos objetos. |

---

##  Regras de Negócio

1. **Beneficiário Prioritário:** Famílias com renda de até R$ 1.500,00 ou com 5 ou mais integrantes recebem tag de alta prioridade.
2. **Ciclo de Estados:**
   - Toda nova doação entra como `DISPONIVEL`.
   - Uma doação `RESERVADA` fica vinculada a um único beneficiário e não pode sofrer nova reserva.
   - Doações `ENTREGUE` ou `CANCELADA` possuem estado final e não podem ser reabertas.
3. **Prioridade dos Itens:**
   - Alimentos **perecíveis** têm maior urgência que não perecíveis.
   - Produtos de higiene **lacrados** têm prioridade no fluxo sobre itens não lacrados.

---

##  Estrutura do Código (Visão Geral)

```text
src/
 └── br/com/pontedobem/
      ├── enums/
      │    └── StatusDoacao.java
      ├── models/
      │    ├── Pessoa.java
      │    ├── Doador.java
      │    ├── Beneficiario.java
      │    ├── Doacao.java
      │    ├── DoacaoAlimento.java
      │    ├── DoacaoRoupa.java
      │    └── DoacaoHigiene.java
      └── Main.java
```

##  Licença

Este projeto é de uso acadêmico e de livre estudo para a comunidade.
