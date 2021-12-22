<template>
  <div>
    <h1>Blockchain und Transaktionen</h1>
    <div class="card">
      <div class="card-body" ref="container">
        <p>
          Sobald ein Nutzer eine Transaktion tätigt, wird eine Transaktion Anfrage zur Validierung an die Nodes des
          Peer-to-Peer Netzwerk gesendet. Der Validierungsprozess verläuft bei verschiedenen Kryptowährungen unterschiedlich,
          dies wird unter „Konsens“ noch näher erläutert. Nach der Validierung wird die Transaktion mit weiteren Transaktionen
          zu einem Datenblock zusammengefasst und dieser Block wird zur Blockchain hinzugefügt. Im Optimalfall ist die
          Transaktion nun endgültig. Im weiteren Verlauf werden immer neue Transaktions-Blöcke an die Blockchain angefügt und
          die Kette wächst immer weiter. Jede Node im Netzwerk erhält eine Kopie der Blockchain, dadurch ist jede Transaktion
          dokumentiert und kann im Nachhinein nicht mehr verändert werden.
        </p>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <img alt="Blockchain schematisch" src="/images/academy/blockchainundtransaktionen_blockchain.png" />

        <p>Eine Blockchain bietet also die folgenden Eigenschaften:</p>
        <ul>
          <li><b>Dezentralität</b> Da die Blockchain für jeden sichtbar ist und nur durch den Konsens der Gemeinschaft
            verwaltet wird, kann eine zentrale Verwaltung der Transaktionen vermieden werden.</li>
          <li><b>Irreversibilität</b> Alle Informationen, die innerhalb einer Blockchain gespeichert wurden, sind
            unveränderbar, da die Informationen aufeinander aufbauen.</li>
          <li><b>Transparenz</b> Alle Interaktionen werden öffentlich dokumentiert. Alle Zugriffe und Änderungen können
            nachvollzogen werden.</li>
          <li><b>Pseudonymität</b> Die Teilnehmer einer Blockchain werden durch kryptographisch verschlüsselte Zahlenreihen
            dargestellt. So lassen sich reale Identitäten nicht ohne weiteres nachvollziehen.</li>
        </ul>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <h2>Weiterführende Informationen:</h2>
        <a href="/academy/crypto--blockchain--fees">Transaktionsgebühren</a>
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
    name: AcademyTopic.CRYPTO__BLOCKCHAIN__TRANSACTIONS,
  };

</script>
