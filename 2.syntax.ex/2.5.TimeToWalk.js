function timeToWalk(steps, foot_length, speed) {
    let distance = (steps * foot_length)
    let speedPerMeter = speed / 3.6;
    let brakes = Math.floor(distance / 500)
    let time = distance / speedPerMeter;
    let timeMin = Math.floor(time / 60)
    let timeSec = Math.round(time - (timeMin * 60));
    let timeHr = Math.floor(time / 3600)

    console.log((timeHr < 10 ? "0" : "") + timeHr + ":" + (timeMin + brakes < 10 ? "0" : "") + (timeMin + brakes) + ":" +
        (timeSec < 10 ? "0" : "") + timeSec)
}

timeToWalk(4000, 0.60, 5)