<template>
  <div>
    <h1>Limit-Order</h1>
    <div class="card">
      <div class="card-body" ref="container">
        <p>Eine Limit-Order ist ein Ordertyp in dem man nicht nur das zu handelnde Volumen, sondern auch einen Preis und eventuell ein Verfallsdatum angeben muss. Man gibt diese Order auf und sie kommt ins Orderbuch der Börse. Man ist in diesem Moment ein Market-Maker. Jetzt muss man hoffen, dass jemand das Angebot annimmt. Wenn niemand den gegenteiligen Handel vollziehen will, dann verfällt die Order am Verfallsdatum oder man muss sie abbrechen.</p>
      </div>
    </div>

        <div class="card">
      <div class="card-body">
        <h2>Weiterführende Informationen:</h2>
        <a href="/academy/trading--price">Preisfindung</a><br />
        <a href="/academy/trading--market_order">Market-Order</a>
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
    name: AcademyTopic.TRADING__LIMIT_ORDER,
  };

</script>
