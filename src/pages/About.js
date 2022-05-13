import { ScrollView, Heading } from "@aws-amplify/ui-react";
import React from "react";

export default function About() {
  return (
    <div style={styles.container}>
      <div style={styles.headingContainer}>
        <Heading level={4} fontFamily="azonix">
          A Altinha
        </Heading>
      </div>
      <ScrollView orientation="vertical" style={styles.scrollview}>
        <p style={styles.description}>
          A Altinha é um Patrimônio Cultural Imaterial da cidade do Rio de
          Janeiro. Tem como propósito deixar a bola no ar pelo maior tempo
          possível, sem utilizar as mãos. Mas...EAE, seria só isso? O que faz,
          então, dela uma prática de lazer tão comum nas areias Cariocas,
          tornando-se, há algum tempo, o esporte que mais cresce em praias,
          praças, parques e áreas de lazer?
          <br />
          <br />
          O nome praia provém do latim tardio - “plagia”. A palavra faz
          referência à beira-mar, à margem de um rio, de um lago ou de outro
          curso de d’água de grandes dimensões. Isto é, guarda total semelhança
          com a Alta, que se afeiçoa a uma imensidão de fluências pessoais e
          demográficas.
          <br />
          <br />
          Esse esporte que transcendeu as areias e, atualmente, é praticado em
          qualquer lugar que tenha uma bola e, no mínimo, duas pessoas dispostas
          a, literalmente, "voltar à infância".
          <br />
          <br />
          Passar um tempo ao ar livre pode fazer muito bem para a nossa saúde
          física e mental. Na Altinha, a conexão existente entre a mente e o
          corpo nos mantém no momento presente. Um instante de felicidade
          expressado em um círculo, com pessoas praticando atividade física,
          fortalecendo a coletividade, união e interação. Esporte amistoso que
          não visa à competição e agrega pessoas de todo jeito: geral junto!
          <br />
          <br />
          A prática da Altinha poderia ser definida como “Estado alterado de
          consciência”, pois existe um momento em que cada pessoa consegue
          transcender aos pensamentos e libertar a própria mente.
          <br />
          <br />
          Uma poética expressão do corpo e da mente, com o cérebro convergindo
          para um estado de foco, hipnose, “um fluxo do agora”.
          <br />
          <br />
          Um Patrimônio Cultural que a Cidade do Rio de Janeiro precisa expor,
          lançar luz a sua beleza, haja vista que, na Altinha, o “Rio” expressa
          grande parte da sua Natureza e da sua inquestionável maravilhosa
          beleza.
          <br />
          <br />
          Leandro "Russo" Falcão
          <br />
        </p>
      </ScrollView>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
  headingContainer: {
    flex: 1,
    display: "flex",
    maxWidth: "90vw",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollview: {
    flex: 10,
    maxHeight: "55vh",
    maxWidth: "90vw",
    backgroundColor: "#fff",
    borderRadius: "5px",
    padding: "0 15px",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "2vh",
  },
  description: {
    fontSize: "1.1rem",
    color: "#000",
  },
};
