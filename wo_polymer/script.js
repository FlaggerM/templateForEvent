function yaMap() {
	ymaps.ready(init);
    var myMap,
        myPlacemark;

    function init(){     
        myMap = new ymaps.Map("map", {
            center: [-33.899522, 151.234140],
            zoom: 13
        });

        myPlacemark = new ymaps.Placemark([-33.9005227,151.2301086], { 
            hintContent: 'This is the place!', 
        });

        myMap.geoObjects.add(myPlacemark);
    }
}


 function sendForm(form){ 
	var that = form,
		url = 'something.php',
		type = 'post',
		data = {};

	that.find('[name]').each(function(index, value) {
		var that = form,
			name = that.attr('name'),
			value = that.val();

		data[name] = value;
	});

	console.log(data);
	$.ajax({
		url: url,
		type: type,
		data: data,
		success: function(response) {
			console.log(response);
		}
	});
}

function mobileNavbar(){
	var x = document.getElementById("mobNavbar");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else { 
        x.className = x.className.replace(" w3-show", "");
    }
}



$(document).ready(function(){
	yaMap();
    $('form.mainForm').on('submit', function() {
        sendForm($(this));      
    });
    $('form.modalForm').on('submit', function() {
        sendForm($(this));
    });
});