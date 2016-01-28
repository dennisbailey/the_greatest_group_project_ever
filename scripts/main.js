//appends images of featured animals to index.html - KD
$(document).ready(function() {
  $.ajax({
    url: 'data/inventory.json',
    method: 'GET'

	  }).then(function(data) {
	$('#item1').html('<img class="img-responsive center-block" src=' + data.sloths[0].image + '>' + '<figcaption>' + data.sloths[0].name + "<br>$" + data.sloths[1].price + "</figcaption>");
    $('#item2').html('<img class="img-responsive center-block" src=' + data.sloths[3].image + '>' + '<figcaption>' + data.sloths[3].name + "<br>$" + data.sloths[3].price + "</figcaption>");
    $('#item3').html('<img class="img-responsive center-block" src=' + data.sloths[2].image + '>' + '<figcaption>' + data.sloths[2].name + "<br>$" + data.sloths[2].price + "</figcaption>");
   });
   
  // Carousel
  $(function(){
      $('#myCarousel').carousel({
        interval: 2000
      });
  });

  // Hover actions
  
  $(document).on('mouseenter', '.hover', function() {
    $(this).css('opacity', .5);
  })
  
  $(document).on('mouseleave', '.hover', function() {
    $(this).css('opacity', 1);
  })   
  
});



