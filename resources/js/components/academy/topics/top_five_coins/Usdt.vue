<template>
  <div>
    <h1>Tether</h1>

    <div class="card">
      <div class="card-body">
        <h2><img src="/images/coins/usdt.png" /> $USDT</h2>
        <p>Ein Coin der den Wert eines US-Dollars repräsentiert. Erste Stablecoin.</p>
        <ul>
          <li>Kürzel USDT / Zirkulierende Menge ~73 Milliarden ohne Obergrenze</li>
          <li>Wird im Tausch gegen Dollars von der Firma Tether kreiert und transferiert</li>
          <li>Erste Tether wurden am 6. October 2014 herausgegeben</li>
          <li>Kann wieder in Dollar zurückgetauscht werden</li>
        </ul>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <h2>Vorteile</h2>
        <ul>
          <li>Einfache Verwendung von “Dollar” in DeFi oder auf Krypto-Börsen</li>
          <li>Verbreiteter Gegenwert in Swap-Pools</li>
          <li>Verfügbar auf vielen Smart-Contract-Chains</li>
        </ul>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <h2>Nachteile</h2>
        <ul>
          <li>Zentrale Verwaltung des Gegenwerts</li>
          <li>Begrenzte Transparenz über Form des Gegenwerts</li>
          <li>Ausfallmöglichkeit des Rücktauschs</li>
          <li>Zweifel der Community an Liquidität der Reserven</li>
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
    name: AcademyTopic.TOP_FIVE_COINS__USDT,
  };

</script>
