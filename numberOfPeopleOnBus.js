var number = function(busStops){
  
  let onBoarding = 0
  let offBoarding = 0
  let onBus = 0
  for(i = 0; i <= busStops.length -1; i++){
    onBus += (busStops[i].slice(0,1)) - (busStops[i].slice(1))
  }
  return onBus
}
