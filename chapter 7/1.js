// run this code in https://eloquentjavascript.net/code/#7.1

function count(state, robot, memory) {
  for(let turns = 0;; turns++) {
    if(state.parcels.length === 0) {
      return turns;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
  }
}

function compareRobots(robot1, memory1, robot2, memory2) {
  const iterations = 100;
  let robot1Acc = 0;
  let robot2Acc = 0;
  for(i = 0; i < iterations; i++) {
    const state = VillageState.random();
    robot1Acc += count(state, robot1, memory1);
    robot2Acc += count(state, robot2, memory2);
  }
  
  console.log(robot1Acc/iterations)
  console.log(robot2Acc/iterations)
}

compareRobots(routeRobot, [], goalOrientedRobot, []);