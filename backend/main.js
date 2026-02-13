let nav_toggled = false;
let filter_toggled = false;

const reservations = [];

const side_nav = document.getElementById("in-side-nav");
const hamburger = document.getElementById("hamburger-btn");
const filter_btn = document.getElementById("filter-btn")
const filter_cls_btn = document.getElementById("filter-close-btn");
const filter_save_btn = document.getElementById("filter-save-btn");
const reserve_page_no = document.getElementById("reserve-page-no");

function toggleNav() {
    if (nav_toggled) {
        side_nav.style.width = "0px";
        side_nav.style.padding = "0px";
    } else {
        side_nav.style.width = "300px";
        side_nav.style.padding = "20px";
    }
    nav_toggled = !nav_toggled;
}

function toggleFilter() {
    var filter_box = document.getElementById("filter-box");
    if (filter_toggled) {
        filter_box.classList.remove('flex');
        filter_box.classList.add('hidden');
    } else {
        filter_box.classList.remove('hidden');
        filter_box.classList.add('flex');
    }
    filter_toggled = !filter_toggled;
}

function Reservation(name, building, room, date, seats, start_time, end_time) {
    this.name = name;
    this.building = building;
    this.room = room;
    this.date = date;
    this.start_time = start_time;
    this.end_time = end_time;
    this.seats = seats;
}

function addReservation(name, building, room, date, seats, start_time, end_time) {
    const reservation = new Reservation(name, building, room, date, seats, start_time, end_time);
    reservations.push(reservation);
    console.log(reservations);
}

function writeReservations() {
    const reservation_list = document.getElementById("reservation-list");

    reservations.forEach(reservation => {
        const reservation_item = document.createElement("div");
        const seat_list = document.createElement("div");
        const right_most_btn = document.createElement("div");
        const save_edit_btn = document.createElement("button");

        reservation_item.classList.add('reservation-item');
        right_most_btn.classList.add('right-most-btn');
        seat_list.classList.add('seat-list');
        save_edit_btn.id = "save-edit-btn";

        save_edit_btn.innerHTML = `Save Edited Reservation`;

        reservation_item.innerHTML = `
            <h3> <span class="font-bold">${reservation.building}</span></h3>
            <p>Room: <span class="font-bold">${reservation.room}</span></p>
            <p>Date: <span class="font-bold">${reservation.date}</span></p>
            <p>Time: <span class="font-bold">${reservation.start_time} - ${reservation.end_time}</span></p>
            <p>Seats: </p>
        `;
        reservation.seats.forEach(seat=> {
            const seat_item = document.createElement("div");
            seat_item.classList.add('seat-item');
            seat_item.innerHTML = `
                <p id="seat-name">${seat}</p>
                <button class="cross-btn" id="remove-seat-btn">&#128941</button>
            `;
            seat_list.appendChild(seat_item);
        });

        right_most_btn.appendChild(save_edit_btn);
        reservation_list.appendChild(reservation_item);
        reservation_list.appendChild(seat_list);
        reservation_list.appendChild(right_most_btn);
    });
}

function navigateReservation() {

}

function toggleEditReservation() {

}

const seats = [1, 2, 3, 4, 5];
addReservation("Joramm Dela Torre", "Gokongwei Building", "Room 204", "2024-06-15", seats, "07:30", "9:30");
writeReservations();
hamburger.addEventListener("click", toggleNav);
if (filter_btn) filter_btn.addEventListener("click", toggleFilter);
if (filter_cls_btn) filter_cls_btn.addEventListener("click", toggleFilter);
if (filter_save_btn) filter_save_btn.addEventListener("click", toggleFilter);
