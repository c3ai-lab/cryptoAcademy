<template>
  <div>
    <h1>Versteuerung von kryptowährungen</h1>
    <div class="card">
      <div class="card-body" ref="container">
        <p>Aus steuerlicher Sicht gelten Kryptowährungen nicht als Währung und Gewinne durch den Verkauf von Bitcoin und co. werden nicht als Einkünfte
          aus Kapitalvermögen gezählt. Stattdessen handelt es sich hier um ein privates Veräußerungsgeschäft und Kryptowährungen werden steuerrechtlich
          als <i>sonstige Wirtschaftsgüter</i> behandelt. Wird also bei dem Verkauf von Kryptowährungen ein steuerpflichtiger Gewinn erzielt,
          muss dieser auch versteuert werden.
        </p>
        <p>Dabei ist jedoch besonders wichtig zu beachten, dass die Gewinne aus dem Handeln mit Kryptowährungen nur unter zwei Bedingungen versteuert
          werden müssen:</p>
        <h2>1. Die Coins werden nach weniger als einem Jahr nach Kauf wieder verkauft</h2>
        <p>Idealerweise wird die Anschaffung von Kryptowährungen umfangreich dokumentiert, um beim Verkauf der Coins den zu versteuernden Gewinn
          zu ermitteln und dokumentieren zu können, ob die veräußerten Coins bereits vor über einem Jahr angeschafft wurden. Hier kann die so
          genannte <i>FIFO-Methode</i> (First-in-first-out) verwendet werden. Das bedeutet, dass die zuerst erworbenen Coins auch als erstes wieder
          verkauft werden.
        </p>
      </div>
    </div>

    <div class="card">
      <div class="card-body" ref="container">
        <img alt="Beispiel FIFO-Methode" src="/images/academy/fifo.png" />
        <p>
          Es ist hier jedoch auch wichtig zu beachten, dass diese so eben genannte Spekulationsfrist von einem Jahr auf zehn Jahre erhöhen kann.
          Das passiert dann, wenn die Coins der jeweiligen Währung innerhalb dieses einen Jahres genutzt werden, zum Beispiel, wenn diese in
          andere Kryptowährungen umgetauscht werden.</p>
          <h2>2. Der Gewinn überschreitet die Freigrenze von 600 Euro</h2>
          <p>In Bezug auf die Freigrenze von 600 Euro ist zu beachten, dass diese Grenze die Summe aller Gewinne aus Verkäufen im aktuellen Steuerjahr
          beschreibt. Das heißt, wenn bereits Gewinne durch den Verkauf von beispielsweise Immobilien, Kunstwerken oder Oldtimern erzielt wurden,
          werden diese bei diesem Freibetrag ebenfalls mit eingerechnet.
        </p>
      </div>
    </div>

    <div class="card">
      <div class="card-body" ref="container">
        <h2>Steuern auf Staking, Mining und co.</h2>
        <p>
          Auch bei passivem Einkommen durch Kryptowährungen können Steuerzahlungen anfallen. Diese sind unter <i>sonstige Leistungen</i> zu
          versteuern und fallen an, sobald die Freigrenze von 256 Euro pro Kalenderjahr überschritten wird.
          Ebenfalls ist hier zu beachten, dass für die Einkünfte, die aus Mining und co. unter Umständen ein Gewerbe angemeldet werden muss.
          <i>Eine gewerbliche Tätigkeit betreibt, wer nachhaltig, selbständig und mit Gewinnabsicht am allgemeinen wirtschaftlichen Verkehr
            teilnimmt. In diesem Fall sind die Einkünfte aus dem Mining Einkünfte aus Gewerbebetrieb (§ 15 EStG). </i>
          Es kann also durchaus zu einer gewerblichen Handlung komen, wenn Hardware dauerhaft zum durchführen von Mining verwendet wird.
        </p>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <p>
          Bei weiterem Interesse zu diesem Thema bietet sich die möglichkeit, einen online-Rechner zu nutzen, um den potentiellen Steuersatz für
          den Trading-Gewinn zu ermitteln. Unter diesem
          <a href="https://www.steuerschroeder.de/Bitcoin-und-die-Steuer.html">Link</a>
          geht dies Beispielsweise für die Kryptowährung Bitcoin.
        </p>
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
  } from "../../../../enums";

  export default {
    name: AcademyTopic.TRADING__TAXES,
  };

</script>
