<template>
  <div>
    <h1>Binance Coin</h1>

    <div class="card">
      <div class="card-body">
        <h2><img src="/images/coins/bnb.png" />$BNB</h2>
        <p>Ein Platform-Coin der Kryptobörse Binance</p>
        <ul>
          <li>Kürzel BNB / Zirkulierende Menge ~168 Millionen von ~168 Millionen</li>
          <li>Smart-Contract-Fähigkeiten</li>
          <li>Start der eigenen Blockchain April 2019</li>
          <li>Teilweise Kopie von Ethereum</li>
        </ul>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <h2>Vorteile</h2>
        <ul>
          <li>Gebührenzahlung mit BNB gibt Rabatt auf Binance</li>
          <li>Smart-Contract-fähig</li>
          <li>Umfangreiches Ökosystem jenseits von Binance</li>
          <li>Bedienung bekannt von Ethereum</li>
        </ul>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <h2>Nachteile</h2>
        <ul>
          <li>Nur 21 von Binance bestimmte Validatoren</li>
          <li>Durch Zentralisierung ähnliche Gefahren wie Bankguthaben</li>
          <li>Wert nicht unabhängig von Binances Markterfolg</li>
          <li>Politische Maßnahmen gegen Binance könnten Wert beeinflussen</li>
        </ul>
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
  h2 img {
    width: 25px;
  }

</style>

<script>
  import {
    AcademyTopic
  } from "../../../../enums";

  export default {
    name: AcademyTopic.TOP_FIVE_COINS__BNB,
  };

</script>
