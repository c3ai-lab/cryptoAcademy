<template>
  <div>
    <h1>Smart Contracts</h1>
    <div class="card">
      <div class="card-body" ref="container">
        <p>Ein Smart-Contract ist ein Programm auf der Blockchain. Der Code ist öffentlich einsehbar, damit der Anwender vor
          der Interaktion mit dem Smart-Contract die Folgen abschätzen kann. Mit Smart-Contracts können beispielsweise
          Transaktionen definitert werden, die immer wieder reproduziert werden können, ohne dass ein Dritter als neutrale
          Partei sie durchführen muss. Da der Ablauf transparent ist, entfällt zudem die Kontrolle dieser dritten Stelle. Die
          Ausführung kommt nur zustande, wenn die Bedingungen erfüllt sind. Sie ist unmittelbar, gegenseitig und endgültig,
          deshalb entfällt eine zusätzliche Rolle, die die Ausführung durchsetzt, falls ein Vertragspartner unaufrichtig ist.
        </p>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <h2>Weiterführende Informationen:</h2>
        <a href="/academy/crypto--blockchain">Blockchain</a>
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
    name: AcademyTopic.CRYPTO__INTRO__SMART_CONTRACTS,
  };

</script>
