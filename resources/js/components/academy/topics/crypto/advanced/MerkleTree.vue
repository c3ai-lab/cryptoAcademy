<template>
  <div>
    <h1>Merkle Tree und Merkle Root</h1>
    <div class="card">
      <div class="card-body" ref="container">
        <p>Hash Trees werden zur effizienten und sicheren Verifikation von großen Datenstrukturen beziehungsweise ihrer
          Inhalte verwendet. Merkle Trees werden bei Kryptowährungen verwendet. Sie bieten Konsistenzprüfung,
          Datenverifizierung und Datensynchronisation. Mit Hilfe von Merkle Trees kann sichergestellt werden, dass die
          Datenblöcke einer Blockchain unbeschädigt und unverändert empfangen wurden.</p>
        <p>Eine Merkle Root wird gebildet, indem immer zwei Transaktions-IDs miteinander gehasht werden. Diese Merkle Root
          wird dann im Block Header angegeben, wodurch jeder Header eine kurze Info über alle im Block vorhandenen
          Transaktionen sowie einen kürzeren Weg zur Prüfung der Integrität bietet.</p>
        <img alt="Schema Merkle Tree" src="/images/academy/merkletreeundroot_schema.png" />
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <h2>Weiterführende Informationen:</h2>
        <a href="/academy/crypto--advanced--konsens">Konsens</a>
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
    name: AcademyTopic.CRYPTO__ADVANCED__MERKLETREE,
  };

</script>
