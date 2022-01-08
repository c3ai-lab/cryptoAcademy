<template>
  <div>
    <h1>Bitcoin</h1>

    <div class="card">
      <div class="card-body">
        <h2><img src="/images/coins/btc.png" /> $BTC</h2>
        <p>Bitcoin ermöglicht sichere digitale Zahlungen zwischen zwei Personen ohne Hilfe einer Bank.</p>
        <ul>
          <li>Kürzel BTC / Zirkulierende Menge ~19 Millionen von 21 Millionen</li>
          <li>Erste Kryptowährung mit breiter Akzeptanz</li>
          <li>Start der Blockchain am 3. Januar 2009</li>
          <li>Bekanntester Name, teilweise stellvertretend für den gesamten Kryptomarkt verwendet</li>
        </ul>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <h2>Vorteile</h2>
        <ul>
          <li>Höchste Marktkapitalisierung</li>
          <li>Vergleichsweise geringe Volatilität</li>
          <li>Höchste Quote von institutioneller Anerkennung als Währung / Asset-Klasse</li>
        </ul>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <h2>Nachteile</h2>
        <ul>
          <li>Hoher Energieverbrauch durch Proof-of-Work</li>
          <li>Lange Transaktionsdauer (~1 Stunde)</li>
          <li>Nur 5-7 Transaktionen pro Sekunde</li>
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
    name: AcademyTopic.TOP_FIVE_COINS__BTC,
  };

</script>
