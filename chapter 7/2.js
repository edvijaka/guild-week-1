// run this code in https://eloquentjavascript.net/code/#7.2

const memory = [];
function yourRobot({place, parcels}, route) {
  let shortestRoute = []
  if (route.length == 0) {
    const routes = parcels.map((parcel) => {
      if (parcel.place != place) {
        return findRoute(roadGraph, place, parcel.place);
      } else {
        return findRoute(roadGraph, place, parcel.address);
      }
    });

    shortestRoute =  routes.reduce((a, b) => a.length < b.length ? a : b);
  }

  return {direction: shortestRoute[0], memory: route.slice(1)};
}

runRobotAnimation(VillageState.random(), yourRobot, memory);