<template>
  <div class="card">
    <div class="card-body" ref="container">
    
    <slot>
      <!--- ToDO: die Überschrift über der Card anzeigen, wie auf allen anderen Seiten --->
    </slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* custom-style für die Inhalte */
</style>

<script>
export default {
  name: "AcademyContent",

  mounted() {
    const content = document.createElement("div");
    content.innerHTML = `
        <h1>Ethereum</h1>

        <p><b>Zweck:</b> Währung der Ethereum Blockchain, eines dezentralen Computers bzw. einer “State-Machine”.</p>
        <ul>
            <li>Kürzel Eth  / Zirkulierende Menge ~118 Millionen ohne Obergrenze der Anzahl</li>
            <li>Erste Blockchain die Smart-Contracts ermöglicht hat.</li>
            <li>Start der Blockchain am 30 Juli 2015</li>
            <li>Technische Basis für viele andere Kryptoprojekte</li>
        </ul>

        <h3>Vorteile</h3>
        <ul>
            <li>Erste Smart-Contract Blockchain</li>
            <li>Turing-vollständiger Code möglich</li>
            <li>Umstellung von Proof of Work zu Proof-of-Stake geplant</li>
            <li>Ermöglicht Transfer von anderen Assets als nur Ethereum</li>
            <li>Zweithöchste Marktkapitalisierung</li>
            <li>Größtes DeFi-Ökosystem</li>
        </ul>

        <h3>Nachteile</h3>
        <ul>
            <li>Hohe Nutzungskosten durch Gebühren (Gas)</li>
            <li>vorläufig begrenzt auf 2000 Transaktionen pro Sekunde</li>
        </ul>

        <h3>Weiterführende Informationen:</h3>
        <a href="proofofwork_advanced.html">Proof of Work (Advanced)</a><br/>
        <a href="proofofstake_advanced.html">Proof of Stake (Advanced)</a>
        `;
    this.$refs.container.appendChild(content);
  },
};
</script>