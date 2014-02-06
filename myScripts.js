console.log('document is ready ;)');

//SETUP: HIDING BUTTONS NOT NEEDED AT FIRST
$('#cropPhoto').show();
$('#save').hide();
$('#cancel').hide();


// start cropping the photo
$('#cropPhoto').click(function(){
	// make new image object out of original image
	var $cropboxImage = $('<img id="croppedImage">');
	var originalImageSrc = $('#originalImageContainer').css('background-image');
	originalImageSrc = originalImageSrc.slice(4,(originalImageSrc.length-1));
	$cropboxImage.attr('src', originalImageSrc);
	
	//hide original
	//$('#originalImageContainer').hide();
	
	// insert new image into the dom, hidden
	$('#croppedImagePlaceholder').replaceWith($cropboxImage);
	
	// apply .cropbox to the new image	
    $('#croppedImage').cropbox({
    	width: 288,
		height: 288,
		showControls: 'always'
	}).on('cropbox', function(e, data) {
    	console.log(data);
	});
	
	//show / hide necessary buttons
	$('#cropPhoto').hide();
	$('#save').show();
	$('#cancel').show();
});


// save changes
$('#save').click(function(){
	var crop = $('#croppedImage').data('cropbox');
	
	var originalImageSrc = $('#originalImageContainer').css('background-image');
	originalImageSrc = originalImageSrc.slice(4,(originalImageSrc.length-1));
		
	var newWidth = $("#croppedImage").css('width');
	var newLeft = $("#croppedImage").css('left');;
	var newTop = $("#croppedImage").css('top');
	
	$('#originalImageContainer')
	.css('background-image', "url(" +originalImageSrc + ")")
	.css('background-size', newWidth)
	.css('background-position', (newLeft) + " " + (newTop) );
	
	crop.remove();
	var croppedImagePlaceholder = '<img id="croppedImagePlaceholder" src="" />';
	$('#croppedImageContainer').html(croppedImagePlaceholder);
	
	//$('#originalImageContainer').show();
	
	//show / hide necessary buttons
	$('#save').hide();
	$('#cancel').hide();
	$('#cropPhoto').show();
	
});


// discard changes
$('#cancel').click(function(){
	var crop = $('#croppedImage').data('cropbox');
	crop.remove();
	var croppedImagePlaceholder = '<img id="croppedImagePlaceholder" src="" />';
	$('#croppedImageContainer').html(croppedImagePlaceholder);
	
	//show / hide necessary buttons
	$('#save').hide();
	$('#cancel').hide();
	$('#cropPhoto').show();
});



    



