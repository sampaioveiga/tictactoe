$(document).ready(function(){
  //variables
  var play = true;
  var oponent = false;
  var turn = 0;
  var turns = 0;
  var array = ['0','1','2','3','4','5','6','7','8'];

  $("#reset").click(function() {
    $(".house").html('-');
    turn = 0;
    turns = 0;
    play = true;
    array = ['0','1','2','3','4','5','6','7','8'];
  });

  function have_winner(player) {
    if (player === "tie") {
      $("#modalEndGameTxt").html("The game is a tie");
      
    } else {
      $("#modalEndGameTxt").html("We have a winner: " + player);
    }
    $('#endGame').modal();
  }

  function check_first_row() {
    var a0 = $("#0").html();
    var a1 = $("#1").html();
    var a2 = $("#2").html();
    if ( a0 === a1 && a1 === a2 && a2 != '-' ) {
      have_winner(a0);
      play = false;
    }
  }

  function check_second_row() {
    var a0 = $("#3").html();
    var a1 = $("#4").html();
    var a2 = $("#5").html();
    if ( a0 === a1 && a1 === a2 && a2 != '-' ) {
      have_winner(a0);
      play = false;
    }
  }

  function check_third_row() {
    var a0 = $("#6").html();
    var a1 = $("#7").html();
    var a2 = $("#8").html();
    if ( a0 === a1 && a1 === a2 && a2 != '-' ) {
      have_winner(a0);
      play = false;
    }
  }

  function check_first_column() {
    var a0 = $("#0").html();
    var a1 = $("#3").html();
    var a2 = $("#6").html();
    if ( a0 === a1 && a1 === a2 && a2 != '-' ) {
      have_winner(a0);
      play = false;
    }
  }

  function check_second_column() {
    var a0 = $("#1").html();
    var a1 = $("#4").html();
    var a2 = $("#7").html();
    if ( a0 === a1 && a1 === a2 && a2 != '-' ) {
      have_winner(a0);
      play = false;
    }
  }

  function check_third_column() {
    var a0 = $("#2").html();
    var a1 = $("#5").html();
    var a2 = $("#8").html();
    if ( a0 === a1 && a1 === a2 && a2 != '-' ) {
      have_winner(a0);
      play = false;
    }
  }

  function check_first_diagonal() {
    var a0 = $("#0").html();
    var a1 = $("#4").html();
    var a2 = $("#8").html();
    if ( a0 === a1 && a1 === a2 && a2 != '-' ) {
      have_winner(a0);
      play = false;
    }
  }

  function check_second_diagonal() {
    var a0 = $("#6").html();
    var a1 = $("#4").html();
    var a2 = $("#2").html();
    if ( a0 === a1 && a1 === a2 && a2 != '-' ) {
      have_winner(a0);
      play = false;
    }
  }

  function win_condition() {
    check_first_row();
    check_second_row();
    check_third_row();
    check_first_column();
    check_second_column();
    check_third_column();
    check_first_diagonal();
    check_second_diagonal();
    if (turns === 9 && play) {
      play = false;
      have_winner("tie");
    }
  };

  function write_move(coord) {
    $("#" + coord).html(turn);
    if (turn === 0) {
      turn = 'X';
    } else {
      turn = 0;
    }
    turns += 1;

    if (turns >= 5) {
      win_condition();
    }
  };

  function computer_move() {
    if (play === false) {
      return;
    }
    var computer = getRandomInt(0,array.length-1);
    var array_computer = array[computer];
    write_move(array[computer]);    
    array.splice(computer,1);
  }

  $(".house").click(function() {
    if (play === false) {
      return;
    }
    var coord = ($(this).attr('id'));
    
    if ( $(this).html() !== '-' ) {
      return;
    }
    write_move(coord);
    var indexOf = array.indexOf(coord);
    array.splice(indexOf,1);
    if (oponent === false) {
      computer_move();
    }
  });

  $("#btn_X").click(function() {
    if (turns > 0) {
      return;
    }
    turn = 'X';
    $("#btn_0").removeClass('active');
    $("#btn_X").addClass('active');
  });

  $("#btn_0").click(function() {
    if (turns > 0) {
      return;
    }
    turn = 0;
    $("#btn_X").removeClass('active');
    $("#btn_0").addClass('active');
  });

  $("#oponent_false").click(function() {
    oponent = false;
    $("#oponent_true").removeClass('active');
    $("#oponent_false").addClass('active');
  });

  $("#oponent_true").click(function() {
    oponent = true;
    $("#oponent_false").removeClass('active');
    $("#oponent_true").addClass('active');
  });

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

});