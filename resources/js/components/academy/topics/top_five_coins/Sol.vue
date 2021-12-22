<template>
  <div>
    <h1>Solana</h1>

    <div class="card">
      <div class="card-body">
        <h2><img src="/images/coins/sol.png" /> $SOL</h2>
        <p>Währung der Solana-Blockchain, einer alternativen Smart-Contract-Chain.</p>
        <ul>
          <li>Kürzel SOL / Zirkulierende Menge ~304 Millionen von 508 Millionen</li>
          <li>Um Proof-of-History erweiterten Proof-of-Stake</li>
          <li>Befindet sich noch in der Beta-Phase</li>
        </ul>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <h2>Vorteile</h2>
        <ul>
          <li>Schnelle Finalisierung von Transaktionen durch 400ms Blocktime</li>
          <li>Gegenwärtig 65000 Transaktionen pro Sekunde</li>
          <li>Wachsendes Ökosystem</li>
        </ul>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <h2>Nachteile</h2>
        <ul>
          <li>Relativ neu</li>
          <li>Ausfall des Gesamtnetzes ist möglich</li>
          <li>Keine Roadmap</li>
          <li>Auftauchen unerwarteter 13,5 Mio SOL-Wallet</li>
          <li>Transparenzmangel wer die Solana-Stiftung führt</li>
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
    name: AcademyTopic.TOP_FIVE_COINS__SOL,
  };

</script>
