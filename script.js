document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("greetBtn");
    const message = document.getElementById("message");

    button.addEventListener("click", function () {
        const name = document.getElementById("username").value.trim();
        const terrain = document.getElementById("terrain").value.trim();
        const style = document.getElementById("style").value.trim();

        if (name === "" || terrain === "" || style === ""){
            message.textContent = "Please fill out all fields before submitting.";
            message.style.color = "red";
            message.classList.remove("slide-in");
            return;
        }
        message.style.color = "#003366";

        // Reset animattion so it can replay
        message.classList.remove("slide-in");

        setTimeout(() => {
            message.textContent =
                `welcome, ${name}! sounds like you love riding on ${terrain} with a ${style} style. `+
                `That's exactly what the Can-Am Maverick X3 was built for.`;
            message.classList.add("slide-in");

        
        },10);
    });
});