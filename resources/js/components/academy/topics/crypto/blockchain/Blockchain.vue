<template>
  <div>
    <h1>Blockchain und Transaktionen</h1>
    <div class="card">
      <div class="card-body" ref="container">
        <p>
          Die Blockchain ist die Basis der meisten Kryptowährungen. Dabei handelt es sich um eine Art verteilte, öffentliche
          Datenbank, die genutzt wird, um Transaktionen unveränderbar zu archivieren. Man kann sich eine Blockchain wie eine
          Art Kette vorstellen, die regelmäßig um ein weiteres Glied verlängert wird. So ein Glied wird “Block” genannt und
          speichert eine gewisse Anzahl an Transaktionen, die zwischenzeitlich in Auftrag gegeben wurden. Es handelt sich also
          um eine Kette von Blöcken, die Transaktionsinformationen enthält.
        </p>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <h2>Weiterführende Informationen:</h2>
        <a href="/academy/crypto--blockchain--transactions">Transaktionen</a>
        <a href="/academy/crypto--blockchain--fees">Transaktionsgebühren</a>
        <a href="/academy/crypto--blockchain--advanced">Fortgeschrittene Themen</a>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    AcademyTopic
  } from "../../../../../enums";

  export default {
    name: AcademyTopic.CRYPTO__BLOCKCHAIN,
  };

</script>
