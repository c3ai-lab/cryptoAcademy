<template>
  <div class="card">
      <div class="card-body">
          <h4 class="card-title mb-4">Buy / Sell</h4>

          <b-tabs
              pills
              nav-class="bg-light rounded"
              content-class="mt-4"
          >
              <b-tab title="Buy" active>
                  <b-card-text>
                      <div class="float-end ms-2">
                          <h5 class="font-size-14">
                              <i
                                  class="bx bx-wallet text-primary font-size-16 align-middle me-1"
                              ></i>
                              $4235.23
                          </h5>
                      </div>
                      <h5 class="font-size-14 mb-4">Buy Coin</h5>

                      <div>
                          <div class="form-group mb-3">
                              <label>Payment method :</label>
                              <select class="form-select">
                                  <option
                                      >Credit / Debit Card</option
                                  >
                                  <option>Paypal</option>
                              </select>
                          </div>

                          <div>
                              <label>Add Amount :</label>
                              <div class="input-group mb-3">
                                  <label class="input-group-text"
                                      >Amount</label
                                  >
                                  <select
                                      class="form-select"
                                      style="max-width: 90px"
                                  >
                                      <option value="BT" selected
                                          >BTC</option
                                      >
                                      <option value="ET"
                                          >ETH</option
                                      >
                                      <option value="LT"
                                          >LTC</option
                                      >
                                  </select>
                                  <input
                                      type="text"
                                      class="form-control"
                                  />
                              </div>

                              <div class="input-group mb-3">
                                  <div
                                      class="input-group-prepend"
                                  >
                                      <label
                                          class="input-group-text"
                                          >Price</label
                                      >
                                  </div>
                                  <input
                                      type="text"
                                      class="form-control"
                                  />
                                  <div class="input-group-append">
                                      <label
                                          class="input-group-text"
                                          >$</label
                                      >
                                  </div>
                              </div>

                              <div class="input-group mb-3">
                                  <div
                                      class="input-group-prepend"
                                  >
                                      <label
                                          class="input-group-text"
                                          >Total</label
                                      >
                                  </div>
                                  <input
                                      type="text"
                                      class="form-control"
                                  />
                              </div>
                          </div>

                          <div class="text-center">
                              <button
                                  type="button"
                                  class="btn btn-success w-md"
                              >
                                  Buy Coin
                              </button>
                          </div>
                      </div>
                  </b-card-text>
              </b-tab>
              <b-tab title="Sell">
                  <b-card-text>
                      <div class="float-end ms-2">
                          <h5 class="font-size-14">
                              <i
                                  class="bx bx-wallet text-primary font-size-16 align-middle me-1"
                              ></i>
                              $4235.23
                          </h5>
                      </div>
                      <h5 class="font-size-14 mb-4">Sell Coin</h5>

                      <div>
                          <div class="form-group mb-3">
                              <label>Email :</label>
                              <input
                                  type="email"
                                  class="form-control"
                              />
                          </div>
                          <div>
                              <label>Add Amount :</label>
                              <div class="input-group mb-3">
                                  <label class="input-group-text"
                                      >Amount</label
                                  >

                                  <select
                                      class="form-select"
                                      style="max-width: 90px"
                                  >
                                      <option value="BT" selected
                                          >BTC</option
                                      >
                                      <option value="ET"
                                          >ETH</option
                                      >
                                      <option value="LT"
                                          >LTC</option
                                      >
                                  </select>
                                  <input
                                      type="text"
                                      class="form-control"
                                  />
                              </div>

                              <div class="input-group mb-3">
                                  <div
                                      class="input-group-prepend"
                                  >
                                      <label
                                          class="input-group-text"
                                          >Price</label
                                      >
                                  </div>
                                  <input
                                      type="text"
                                      class="form-control"
                                  />
                                  <div class="input-group-append">
                                      <label
                                          class="input-group-text"
                                          >$</label
                                      >
                                  </div>
                              </div>

                              <div class="input-group mb-3">
                                  <div
                                      class="input-group-prepend"
                                  >
                                      <label
                                          class="input-group-text"
                                          >Total</label
                                      >
                                  </div>
                                  <input
                                      type="text"
                                      class="form-control"
                                  />
                              </div>
                          </div>

                          <div class="text-center">
                              <button
                                  type="button"
                                  class="btn btn-danger w-md"
                              >
                                  Sell Coin
                              </button>
                          </div>
                      </div>
                  </b-card-text>
              </b-tab>
          </b-tabs>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
