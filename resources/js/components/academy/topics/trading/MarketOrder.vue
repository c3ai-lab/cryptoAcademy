<template>
  <div>
    <h1>Market-Order</h1>
    <div class="card">
      <div class="card-body" ref="container">
        <p>Eine Markt-Order wird sofort zum gegenwärtigen Bestpreis ausgeführt. Sofern das Orderbuch ausreichende Tiefe hat, kann man mit einem fairen Kaufpreis rechnen. Es kann zu mehreren Teilausführungen kommen, sofern der erste Handelspartner weniger Volumen handeln möchte als in der eigenen Order beauftragt ist. In diesem Fall wird der Rest der Order zu den zweitbesten Kondidionen ausgeführt. Falls auch der zweitbeste Prreis ein zu kleines Volumen bietet, wird jeweils das nächstbeste Angebot angenommen, bis das gesamte Ordervolumen gehandelt wurde. Wer eine Marktorder ausführt wird auch "Taker" genannt, weil er das Preisangebot eines anderen annimmt. Im Einsteiger-Modus kann in der App nur dieser Ordertyp genutzt werden.</p>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <h2>Weiterführende Informationen:</h2>
        <a href="/academy/trading--slippage">Slippage</a><br />
        <a href="/academy/trading--market_order">Limit-Order</a>
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
  } from "../../../../../enums";

  export default {
    name: AcademyTopic.TRADING__MARKET_ORDER,
  };

</script>
