<template>
  <div>
    <h1>Transaktionskosten</h1>
    <div class="card">
      <div class="card-body" ref="container">
        <p>Bei der Transaktion einer Kryptowährung fallen immer Transaktionsgebühren an. Der Grund dafür ist, einen Anreiz für
          die Netzwerkteilnehmer zu schaffen, sich an der Erzeugung der Blöcke zu beteiligen. Denn die Transaktionsgebühren
          sind Bestandteil der Belohnung, die die Validatoren für ihren Aufwand erhalten. Die Höhe der Transaktionsgebühren
          variiert zwischen den verschiedenen Kryptowährungen. Unter <a href="http://cryptofees.net/">Cryptofees.net</a> ist
          eine Auflistung an kürzlich aufgegebenen Transaktionen verschiedener Währungen zu finden, die die Höhe der
          Transaktion und die Höhe der Transaktionskosten in USD darstellt.</p>
        <p>Die Transaktionsgebühr legt der Überweisende selbst fest. Hier ist es jedoch wichtig zu beachten, dass die
          Transaktionen in einem Pool landen, bevor sie validiert und einem Block hinzugefügt werden. Die Validatoren wählen
          dann in der Regel Transaktionen nach Gebührenhöhe aus, da diese ihre Belohnung darstellt. Bietet man also zu
          niedrige Gebühren, kann es sein dass die Transaktion für lange Zeit nicht validiert wird, da die Validatoren eine
          geringere Belohnung erhalten.</p>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <h2>Weiterführende Informationen:</h2>
        <a href="/academy/crypto--blockchain--transactions">Transaktionen</a>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    AcademyTopic
  } from "../../../../../enums";

  export default {
    name: AcademyTopic.CRYPTO__BLOCKCHAIN__FEES,
  };

</script>
