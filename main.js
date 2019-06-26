var stringInput = document.getElementById('searchInput');
const DiscoveryURL = 'https://discovery.nationalarchives.gov.uk/results/r?_q='
const TeessideURL = '&_hb=oth&_nrar=20'

document.querySelector('form.searchForm').addEventListener('submit', function (e) {

    //prevent the normal submission of the form
    e.preventDefault();

	// Show all Discovery records
	//destination = DiscoveryURL + searchInput.value;
	
	// Show just Teesside records
	destination = DiscoveryURL + searchInput.value + TeessideURL;
	
    console.log(DiscoveryURL + searchInput.value);
	
	window.location.href = destination;
});

