<template>
  <div>
    <h1>Slippage</h1>
    <div class="card">
      <div class="card-body" ref="container">
        <p>Wenn ein Pool bei einem Automated Market Maker nicht ausgeglichen ist, kommt es zu Preisfehlern. Welchen Gegenwert man beim Tauschen aus dem Pool bezieht ist rechnerisch festgelegt. Sollte der Gegenwert von dem abweichen, was man auf einer regulären Börse bekommen könnte, wird diese Abweichung Slippage genannt. Um die Slippage zu errechnen vergleicht der DeFi-Anbieter die Marktpreise von Kryptowährungen mit dem Tauschverhältnis das man aus dem Pool bezieht. Die Slippage kann auch positiv sein, so dass man einen besseren Preis bekommt als zu erwarten wäre.</p>
        <p>Die Slippage wird in der Regel vor dem Swap (dem Tausch der Währungen gegeneinander) auf der Plattform angezeigt. Beim Handel von Meme-Coins oder genereall mit kleineren Pools, ist es manchmal erforderlich eine höhere Slippage zu erlauben. Diese Einstellungen müssen mit Vorsicht vorgenommen werden, da es sogenannte Front-Running-Bots gibt, die den Memory-Pool überwachen und achtlos eingestellte Slippage-Regeln missbrauchen. Sie erkennen den Auftrag, bezahlen eine hohe Gas-Gebühr, um vor dem Swap das Verhältnis der Coins im Pool zu verändern, indem sie Liquidity abziehen.</p>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <h2>Weiterführende Informationen:</h2>
        <a href="/academy/trading--amm">Automated Maket Maker</a><br />
        <a href="/academy/trading--market_order">Market-Order</a>
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
    name: AcademyTopic.TRADING__SLIPPAGE,
  };

</script>
