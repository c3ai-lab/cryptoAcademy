<template>
  <div>
    <h1>Ethereum</h1>

    <div class="card">
      <div class="card-body">
        <h2><img src="/images/coins/eth.png" />$ETH</h2>
        <p> Währung der Ethereum Blockchain, eines dezentralen Computers bzw. einer “State-Machine”.</p>
        <ul>
          <li>Kürzel Eth / Zirkulierende Menge ~118 Millionen ohne Obergrenze der Anzahl</li>
          <li>Erste Blockchain die Smart-Contracts ermöglicht hat.</li>
          <li>Start der Blockchain am 30 Juli 2015</li>
          <li>Technische Basis für viele andere Kryptoprojekte</li>
        </ul>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <h2>Vorteile</h2>
        <ul>
          <li>Erste Smart-Contract Blockchain</li>
          <li>Turing-vollständiger Code möglich</li>
          <li>Umstellung von Proof of Work zu Proof-of-Stake geplant</li>
          <li>Ermöglicht Transfer von anderen Assets als nur Ethereum</li>
          <li>Zweithöchste Marktkapitalisierung</li>
          <li>Größtes DeFi-Ökosystem</li>
        </ul>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <h2>Nachteile</h2>
        <ul>
          <li>Hohe Nutzungskosten durch Gebühren (Gas)</li>
          <li>Vorläufig begrenzt auf 2000 Transaktionen pro Sekunde</li>
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
    name: AcademyTopic.TOP_FIVE_COINS__ETH,
  };

</script>
