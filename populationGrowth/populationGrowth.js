function populationGrowth (simulationLength) {
    /**
     * Initial Condition is the there will be one child Ameoba added at Year 0
     **/
    let adultsAmoeba = 0;
    let babyAmoeba = 1;

    /**
     * For Every Year Simulated
     **/
    for (let i = 0; i < simulationLength; i++) {
        let babiesBecomingAdults = babyAmoeba;
        /**
         * All the Adults will have children
         **/
        babyAmoeba = adultsAmoeba;
        /**
         * All the `babyAmoeba` will become adults
         **/
        adultsAmoeba+=babiesBecomingAdults;
    }

    return adultsAmoeba + babyAmoeba;
}
