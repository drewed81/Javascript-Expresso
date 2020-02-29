const myCarousel = $('#carouselStore');
var myNav = myCarousel.prev();

  $('#carouselStore').on('slide.bs.carousel', function onSlide (ev) {
    var id = ev.relatedTarget.id;
    switch (id) {
      case "1":
        // do something the id is 1
        $('#light').prop('checked', true);
        alert("Slide is at position 1");
        console.log('id worked')
        break;
      case "2":
        // do something the id is 2
        $('#medium').prop('checked', true);
        break;
      case "3":
        // do something the id is 3
        $('#dark').prop('checked', true);
        break;
      default:
        //the id is none of the above
    }
  })

  $('#carouselStore').on('slide.bs.carousel', function () {
    const myCarousel = $('#carouselStore');
    // let carouselIndex = myCarousel.getItemIndex(myCarousel.$element.find('.item.active'));
    // console.log(carouselIndex);
    console.log('slide');
  })

  
