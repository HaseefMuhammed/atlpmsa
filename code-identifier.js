const codeName = {
  100: 'Uxcell Adjust IR Pyroelectric PIR Motion Sensor Detector Module Hc-sr501',
  101: 'USB 2.0 A Male to B Male',
  102: 'Test'
};

function performSearch() {
  const inputValue = parseInt(document.getElementById('searchInput').value);
  const name = codeName[inputValue];

  if (name) {
    alert(name);
  } else {
    alert('No match found for that number.');
  }
}

document.getElementById('searchBtn').addEventListener('click', performSearch);

document.getElementById('searchInput').addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    performSearch();
  }
});