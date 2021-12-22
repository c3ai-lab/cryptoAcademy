<template>
  <div>
    <h1>Konsens</h1>
    <div class="card">
      <div class="card-body" ref="container">
        <p>In Bezug auf Kryptowährungen ist der Konsensus, oder einfach Konsens, dafür gedacht, eine allgemeine
          Übereinstimmung dafür zu geben, welche Transaktionen validiert werden. Bei einem zentralen Finanzmarkt überprüft
          eine Bank beispielsweise, ob das Konto eines Nutzers ausreichend gedeckt ist, um eine Bezahlung vorzunehmen. Das
          sogenannte <em>Double Spending Problem</em> beschreibt eine Situation, die bei der Gesprächen über dezentrale
          Geldsysteme immer wieder erwähnt wird. Hierbei geht es um das Problem, dass Nutzer ohne eine Kontrollinstanz das
          Geld, was er zur Verfügung hat, mehrfach versenden kann. Beispiel: Bob besitzt 1 Bitcoin und sendet dieses zunächst
          an Alice,
          will dann aber diesen Bitcoin ebenfalls an Eve versenden, obwohl der Bitcoin eigentlich bereits Alice gehört. Da es
          bei dezentralen Finanzmärkten keine zentrale Institution - wie eine Bank - gibt, die für die Validierung von
          Transaktionen zuständig ist, wird diese Rolle vom Netzwerk selbst übernommen.</p>
        <p>Es gibt verschiedene Arten von Konsens-Mechanismen, denn die zahlreichen unterschiedlichen Kryptowährungen haben
          sich auf unterschiedliche Mechanismen festgelegt. Diese Mechanismen haben den Zweck festzulegen, welcher der Nodes
          in einem Netzwerk den nächsten Block in der Blockchain validieren darf. Da der Validator als Belohnung für seine
          Arbeit die Transaktionsgebühren erhält, ist eine Vielzahl an Nodes daran interessiert, der nächste Validator zu
          werden. Zwei der meistgenutzten Konsens-Mechanismen sind Proof-of-Work und Proof-of-Stake.</p>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <h2>Weiterführende Informationen:</h2>
        <a href="/academy/crypto--advanced--proof-of-work">Proof-of-Work</a>
        <a href="/academy/crypto--advanced--proof-of-stake">Proof-of-Stake</a>
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
    name: AcademyTopic.CRYPTO__ADVANCED__CONSENSUS,
  };

</script>
