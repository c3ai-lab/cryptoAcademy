<template>
  <div>
    <h1>Preisfindung</h1>
    <div class="card">
      <div class="card-body" ref="container">
        <p>
          Wie entsteht der Preis für einen Bitcoin? Die Bepreisung von Anlagegütern oder Kryptowährungen an öffentlichen Handelsplätzen findet auf gleichem Wege statt. Gehandelt werden kann nur, wenn sich zwei Parteien auf einen Preis einigen und Fiat-währung gegen Kryptogeld tauschen wollen. Es gibt keinen Handel ohne jemanden, der den gegenteiligen Handel ausführen möchte. Zeitungsmeldungen die besagen, dass an den Börsen gerade viel verkauft wird, sind irreführend, weil immer auch jemand die gleiche Menge kauft. Die Schwankungsgrößen sind Preis und Volumen. Volumen bedeutet wie viele Bitcoin gehandelt werden und Preis zu welchen Konditionen.
        </p>
      </div>
    </div>
    <div class="card">
      <div class="card-body" ref="container">
        <p>
          Die Vorstellung darüber was ein fairer Preis für einen Bitcoin ist, unterscheiden sich unter Umständen von Person zu Person und von Sekunde zu Sekunde. Deswegen treffen sich alle die Bitcoin handeln wollen, ob nun kaufen oder verkaufen an einem Handelsplatz bzw. einer Börse. Dort kann jeder sein Gebot abgeben. Also zu welchem Preis er wieviel kaufen möchte bzw. zu welchem Preis er wieviel verkaufen möchte. Die Marktteilnehmer, die einen Preis vorschlagen werden Market-Maker genannt. Sie machen einen Preisvorschlag und müssen diesen Preis auch zahlen können, bzw. die Bitcoin herausgeben können. Da es sich um verbindliche Vorschläge handelt, nennt man sie Orders, wie Bestellungen. Sobald jemand die Bestellung erfüllt, können sie nicht mehr zurücktreten. Alle Orders werden im Orderbuch gesammelt. Das Orderbuch ist selbstverständlich elektronisch. Ein Computer vergleicht jetzt jede Sekunde zu welchem Preis der meiste Handel stattfindet. Also die meisten Käufe und Verkäufe gleichzeitig und gegenseitig. Dieser Preis ist in der Sekunde dann der Preis von Bitcoin. Da es mehrere Handelsplätze mit unterschiedlichen Orderbüchern gibt, muss dieser Preis nicht überall identisch sein. Eine Handel bei dem man zugleich etwas auf einer Börse kauft und auf einer anderen verkauft, um an dieser Preisspanne zu verdienen, nennt man Arbitrage. Die professionellen Arbitrage-Händler sorgen dafür, dass alle Börsen in etwa den gleichen Preis haben. Die Abweichung ist so gering, dass die Händler daran nichts mehr verdienen.
        </p>
      </div>
    </div>
    <div class="card">
      <div class="card-body" ref="container">
        <p>
          Außer dem Market-Maker gibt es noch Taker. Wer keine konkrete Preisvorstellung hat, kann einfach das günstigste Angebot im Orderbuch beanspruchen. Der Vorteil daran ist, dass man so schnell wie möglich handelt und nicht erst auf seinen Wunschpreis warten muss.
        </p>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <h2>Weiterführende Informationen:</h2>
        <a href="/academy/trading--amm">Automated Maket Maker</a><br />
        <a href="/academy/trading--market_order">Market-Order</a><br />
        <a href="/academy/trading--limit_order">Limit-Order</a>
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
  img {
    width: 100%;
  }

</style>

<script>
  import {
    AcademyTopic
  } from "../../../../enums";

  export default {
    name: AcademyTopic.TRADING__PRICE,
  };

</script>
