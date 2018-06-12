Animation(true);
let MCI1 = new Integration(400,400,300);
let PIap = 0;
let increase = 1;
function setup() {
	MCI1.render();
	PIap = MCI1.approx();
}

function draw() {
	MCI1.SpawnPoints(increase);
	PIap = MCI1.approx();
	document.getElementById("Count").innerHTML = "Red:"+MCI1.inCircle+" / Total:"+MCI1.inSquare+MCI1.inCircle+" / PI approx.:"+PIap;;
}

function NoLoop() {
	Animation(false);
}
function Loop() {
	Animation(true);
}
function reload() {
	location.reload();
}

let incr = () => {
	increase = prompt("Points per Frame",100);
}
