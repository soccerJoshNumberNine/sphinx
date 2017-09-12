    // Welcome to sphinx.js!
    // To learn how to use, drop by the GitHub repo: https://github.com/soccerJoshNumberNine/sphinx
    
    var phadesTriggered = 0;
    $(document).ready(function () {
      $('.frame').css({height: new windowDimensions().height + 'px'});
      $('.container').css({height: new windowDimensions().height + 1 + 'px'});
      $('.spacer').css({height: new windowDimensions().height + 1 + 'px'});
      $('.phade').css({height: new windowDimensions().height + 'px'});
    });

    function documentDimensions () {
      this.height = $(document).height();
      this.width = $(document).width();
    }

    function windowDimensions () {
      this.height = $(window).height();
      this.width = $(window).width();
    }

    function getScroll () {
      return $('#page').scrollTop();
    }

    $('#page').scroll(function () {
      var scroll = Math.floor(getScroll() / new windowDimensions().height) * new windowDimensions().height;
      var scrollRaw = $('#page').scrollTop();
      var currentPhade = document.getElementsByClassName('phade')[scroll / new windowDimensions().height];
      var previousPhade = document.getElementsByClassName('phade')[phadesTriggered - 1];
      $(currentPhade).offset({top: scrollRaw / new windowDimensions().height});
      if ($(currentPhade).css('display') === 'none') {
        $(currentPhade).css('display', 'block');
        $('#page').scrollTop(scroll, 0);
        $(currentPhade).animate({opacity: '1'}, 3000);
        $('.spacer').css({height: new windowDimensions().height + new windowDimensions().height + 'px'});
        phadesTriggered++;
        
        if (phadesTriggered >= document.getElementsByClassName('phade').length) {
          $('.spacer').css('display', 'none');
        }
      }
    });
