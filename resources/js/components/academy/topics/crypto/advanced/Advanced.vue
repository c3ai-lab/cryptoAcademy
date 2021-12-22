<template>
  <div>
    <h1>Fortgeschrittene Themen</h1>
    <div class="card">
      <div class="card-body" ref="container">
        <p>
          Um weiter in die Technologie hinter Kryptowährungen einzusteigen, behandelt diese Kategorie tiefergehende technische Themen. Artikel in dieser Kategorie sind für den Handel an zentralisierten Marktplätzen (wie durch diese App simuliert) oder dezentralen Marktplätzen nicht zwingend erforderlich.
        </p>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <h2>Weiterführende Informationen:</h2>
        <a href="/academy/crypto--advanced--transactions">Transaktionen</a><br/>
        <a href="/academy/crypto--advanced--merkle_trees">Merkle Trees und Merkle Roots</a><br/>
        <a href="/academy/crypto--advanced--consensus">Konsens</a><br/>
        <a href="/academy/crypto--advanced--proof-of-work">Proof-of-Work</a><br/>
        <a href="/academy/crypto--advanced--proof-of-stake">Proof-of-Stake</a>
        
      </div>
    </div>
  </div>
</template>

<script>
  import {
    AcademyTopic
  } from "../../../../../enums";

  export default {
    name: AcademyTopic.CRYPTO__ADVANCED,
  };

</script>
