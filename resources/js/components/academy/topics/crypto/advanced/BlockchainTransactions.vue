<template>
  <div>
    <h1>Funktionsweise Blockchain und Transaktionen</h1>
    <div class="card">
      <div class="card-body" ref="container">
        <p>Im Folgenden wird die genaue Technologie hinter der Blockchain erklärt, die auf Kryptographischen Berechnungen
          basiert. Hier wird im speziellen die Technologie erklärt, die bei der Kryptowährung Bitcoin verwendet wird.</p>
        <p>Hash-Funktionen sind ein wichtiger Bestandteil der Kryptographie. Hierbei werden aus Datensätzen beliebiger Länge
          eine Zeichenfolge mit fester Länge generiert. Bei Bitcoin ist der Hash-Algorithmus SHA-256 standard, die Ziffer
          bezieht sich auf die Länge der Ausgabe. Eine minimale Veränderung des originalen Datensatzes erzeugt einen komplett
          neuen Hash-Wert. Durch diese Eigenschaften werden Hash-Werte oft als “unique identifiers” verwendet.</p>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <img alt="Kette von signierten Transaktionen" src="/images/academy/blockchainundtransaktionentechnologie_transaktionskette.png" />

        <p>Jeder Nutzer hat eine Bitcoin-Adresse (Public Key) und einen privaten Schlüssel (Private Key). Der Public Key ist
          öffentlich, der Private Key muss geheim gehalten werden. Der Private Key wird verwendet, um eine Transaktion
          signieren.</p>
        <p>Ein Bitcoin-Transaction-Hash wird speziell für eine Transaktion generiert. Dieser Hash wird auch Transaction ID
          (TXID) genannt und enthält unter anderem:</p>
        <ul>
          <li>Den Transaktionsstatus</li>
          <li>Die Höhe des Betrags der Transaktion</li>
          <li>Bitcoin Adressen des Senders und Empfängers</li>
          <li>Informationen über die vorherige Transaktion des Coins</li>
          <li>Zeitpunkt der Transaktion</li>
        </ul>
        <p>Nachdem die Transaktion generiert und validiert wurde, wird sie einem Block beigefügt. Jeder Block enthält einen
          Block Header und Transaktionen. Der Header enthält unter anderem:</p>
        <ul>
          <li>Version des Blocks</li>
          <li>Den Hash-Wert des vorherigen Blocks</li>
          <li>Die Merkle Root</li>
          <li>Den Zeitpunkt, wann ein Miner den Block versucht zu Minen</li>
        </ul>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <p>Beispiel für einen Block Header:</p>
        <p>010000009500c43a25c624520b5100adf82cb9f9
          da72fd2447a496bc600b0000000000006cd86237
          0395dedf1da2841ccda0fc489e3039de5f1ccdde
          f0e834991a65600ea6c8cb4db3936a1ae3143991</p>
        <p>Der erste Block der Kette, der Genesis Block wurde zu Beginn der Währung fest im Quellcode verankert. Dieser
          enthält keinen Hash-Wert eines vorherigen Blocks.
          Um den Hash-Wert des aktuellen Blocks zu ermitteln, wird der Block Header zweimal nach SHA-256 gehasht.</p>
        <image alt="Blockchain schematisch" src="/images/academy/blockchainundtransaktionentechnologie_blockchain.png" />
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <h2>Weiterführende Informationen:</h2>
        <a href="/academy/crypto--advanced--merkle-trees">Merkle Trees und Merkle Roots</a>
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
    name: AcademyTopic.CRYPTO__ADVANCED__TRANSACTIONS,
  };

</script>
