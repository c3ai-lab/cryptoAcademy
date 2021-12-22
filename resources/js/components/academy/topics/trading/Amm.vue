<template>
  <div>
    <h1>Automated Market Maker</h1>
    <div class="card">
      <div class="card-body" ref="container">
        <p>Ein Spezialfall der Preisfindung ist im Krypto-Bereich der AMM (Automated Market Maker). Ein AMM ist ein Pool eines Währungspaares in den man eine Währung legen kann, um sich von der anderen den entsprechenden Wert zu nehmen. Durch mehr und mehr Tauschprozesse stellt sich heraus in welchem Verhältnis die Werte beider Währungen zueinander stehen.</p>
      </div>
    </div>

    <div class="card">
      <div class="card-body" ref="container">
        <p>Angenommen es gäbe zwei Töpfe mit Salz und Pfeffer in einer WG-Küche. In beiden sind 1000g. Jemand möchte 100g Salz gegen Pfeffer tauschen. Er füllt die 100g Salz in den Salz-Topf. Die Eingabe beträgt 10%. Er nimmt sich 10% aus dem Pfeffer-Topf, also 100g Pfeffer.
          Jetzt kommt ein zweiter, um wieder 100g Salz gegen Pfeffer zu tauschen. Er schüttet 100g Salz zum Salz. Seine Beitrag zum Salz entspricht jetzt nur noch ~9,09% vom Salz. Er darf sich deshalb nur 9,09% vom Pfeffer nehmen. Da nur noch 900g Pfeffer übrig sind, bekommt er nur 81,81g Pfeffer zurück. </p>
        <p>Wenn sich dieser Vorgang oft genug wiederholt, steigt der Preis von Pfeffer gemessen in Salz immer weiter an. Sofern niemand zufällig Pfeffer gegen Salz tauscht und sich über das günstige Tauschverhältnis freut, lockt das Ungleichgewicht irgendwann einen Pfeffer-Salz-Arbitrage-Händler an, der sich einen Haufen Salz für eine Prise Pfeffer sichern kann. Mit dem Salz kann er unter Umständen in einer anderen WG einen Pfeffer-Überschuss so günstig eintauschen, dass er am Ende von beiden Gewürzen etwas übrig hat.</p>
      </div>
    </div>

    <div class="card">
      <div class="card-body" ref="container">
        <p>Sofern es sich abzeichnet, dass in allen WG-Küchen mehr Pfeffer als Salz nachgefragt wird, hat sich der relative Preis geändert und ein Arbitragehandel lohnt sich nicht. Dann ärgert man sich, dass man eingangs, als es noch Pfeffer zu Salzpreisen gab, nicht richtig zugeschlagen hat. </p>
        <p>Dieses Prinzip funktioniert mit Kryptowährungen in Pools auf DeFi-Plattformen ganz genau so. Beim Tausch wird dort zusätzlich nur eine kleine Gebühr verlangt, die allen zufällt, die ihre Coins (Pfeffer und Salz im richtigen Wertverhältnis) in die Pools gelegt haben. Für diese Liquidity-Provider ist das eine Art Zins. Ein Risiko des Liquidity Providers ist es, dass sich, wie im Pfeffer-Salz-Beispiel, der Wert der zur Verfügung gestellten Währungen stark im Verhältnis ändert, so dass er weniger "Zins" durch die Gebühren verdient als seine Wertsteigerung durch das behalten vom Pfeffer gewesen wäre (ihm gehört nur ein fester Prozentsatz des Pfeffers und des Salzes, nicht aber eine fixe Menge). </p>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <h2>Weiterführende Informationen:</h2>
        <a href="/academy/trading--price">Preisfindung</a><br />
        <a href="/academy/trading--slippage">Slippage</a>
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
    name: AcademyTopic.TRADING__AMM,
  };

</script>
