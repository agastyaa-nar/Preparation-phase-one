// Tambahkan tombol close ke setiap item
var myNodelist = document.getElementsByTagName("LI");
for (let i = 0; i < myNodelist.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("×");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Event untuk menghapus item
document.addEventListener('click', function (e) {
  if (e.target.classList.contains('close')) {
    e.target.parentElement.style.display = "none";
  }
});

// Toggle checked
document.querySelector('ul').addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
});

// Tambahkan item baru
function newElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("myInput").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);

  if (inputValue === '') {
    alert("You must write something!");
    return;
  }

  document.getElementById("myUL").appendChild(li);
  document.getElementById("myInput").value = "";

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("×");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
}

// Fungsi pencarian
function searchFunction() {
  let input = document.getElementById("searchInput");
  let filter = input.value.toUpperCase();
  let ul = document.getElementById("myUL");
  let li = ul.getElementsByTagName("li");

  for (let i = 0; i < li.length; i++) {
    let txtValue = li[i].textContent || li[i].innerText;
    li[i].style.display = txtValue.toUpperCase().includes(filter) ? "" : "none";
  }
}
