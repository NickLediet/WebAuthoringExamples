
class Door {
    handle;
    use() {
        this.handle.turn();
    }
}

class Justin extends People {
   
    isFacingDoor;
    feet;
    inChar = true;
    width;
    lean(bodytarget) {/* ... */ }
    step(direction){/* ... */}
    turn(degrees) {/* ... */}
    stand (direction) { /* ... */}
    step () {/* ... */}
    pull(/* ... */)
    useDoor(door) {
        this.atDoor = true; 
        this.reach(door.target).use();
        while (door.opening != this.width ) {
            this.pull();
            this.step(backwards);
        }
        this.pull(door);
    }   
}

/* Position */

var justin = new Justin();
var door = new Door();

/* Position */
if( !Justin.isFacingDoor ) {
    justin.turn(90.0); 
}

/* Stand */
do {
    justin.lean();
    if (justin.isSecure) {
        justin.stand();
        justin.setinChair(true);
    }    
} while( justin.inChair)

/* walking */
while( !atDoor ){
    justin.step(straight);
} 

/* leaving room */
while( justin.inRoom ){
    justin.step(straight);
}


door.addEventListener("collision", justin.useDoor, false);

justin.addEventListener("outOfRoom", ()=>{
    alert("Sucess");
}, false);