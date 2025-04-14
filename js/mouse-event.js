const btn = document.querySelector("#addTaskButton");
// btn.addEventListener("mouseleave", runEvent);
// btn.addEventListener("mouseover", runEvent);
// btn.addEventListener("mousedown", runEvent);
// btn.addEventListener("mouseup", runEvent);
// btn.addEventListener("mouseenter", runEvent);
// btn.addEventListener("mouseleave", runEvent);
// btn.addEventListener("mousemove", runEvent);
// btn.addEventListener("mouseout", runEvent);
btn.addEventListener("click", runEvent);
// btn.addEventListener("dblclick", runEvent);

function runEvent(event){
    console.log(event);
console.log(`Event Type: ${event.type}`);
}