$(document).ready(function(){
  //variables
  var play = true;
  var turn = 0;
  var turns = 0;
  var array = ['0','1','2','3','4','5','6','7','8'];
  console.log(array + ' ' + array.length);

  $("#reset").click(function() {
    $(".house").html('-');
    turn = 0;
    turns = 0;
    play = true;
    array = ['0','1','2','3','4','5','6','7','8'];
  });

  function check_first_row() {
    var a0 = $("#0").html();
    var a1 = $("#1").html();
    var a2 = $("#2").html();
    //console.log(a0 + ' ' + a1 + ' ' + a2);
    if ( a0 === a1 && a1 === a2 && a2 != '-' ) {
      console.log(a0 + " wins");
      play = false;
    }
  }

  function check_second_row() {
    var a0 = $("#3").html();
    var a1 = $("#4").html();
    var a2 = $("#5").html();
    //console.log(a0 + ' ' + a1 + ' ' + a2);
    if ( a0 === a1 && a1 === a2 && a2 != '-' ) {
      console.log(a0 + " wins");
      play = false;
    }
  }

  function check_third_row() {
    var a0 = $("#6").html();
    var a1 = $("#7").html();
    var a2 = $("#8").html();
    //console.log(a0 + ' ' + a1 + ' ' + a2);
    if ( a0 === a1 && a1 === a2 && a2 != '-' ) {
      console.log(a0 + " wins");
      play = false;
    }
  }

  function check_first_column() {
    var a0 = $("#0").html();
    var a1 = $("#3").html();
    var a2 = $("#6").html();
    //console.log(a0 + ' ' + a1 + ' ' + a2);
    if ( a0 === a1 && a1 === a2 && a2 != '-' ) {
      console.log(a0 + " wins");
      play = false;
    }
  }

  function check_second_column() {
    var a0 = $("#1").html();
    var a1 = $("#4").html();
    var a2 = $("#7").html();
    //console.log(a0 + ' ' + a1 + ' ' + a2);
    if ( a0 === a1 && a1 === a2 && a2 != '-' ) {
      console.log(a0 + " wins");
      play = false;
    }
  }

  function check_third_column() {
    var a0 = $("#2").html();
    var a1 = $("#5").html();
    var a2 = $("#8").html();
    //console.log(a0 + ' ' + a1 + ' ' + a2);
    if ( a0 === a1 && a1 === a2 && a2 != '-' ) {
      console.log(a0 + " wins");
      play = false;
    }
  }

  function check_first_diagonal() {
    var a0 = $("#0").html();
    var a1 = $("#4").html();
    var a2 = $("#8").html();
    //console.log(a0 + ' ' + a1 + ' ' + a2);
    if ( a0 === a1 && a1 === a2 && a2 != '-' ) {
      console.log(a0 + " wins");
      play = false;
    }
  }

  function check_second_diagonal() {
    var a0 = $("#6").html();
    var a1 = $("#4").html();
    var a2 = $("#2").html();
    //console.log(a0 + ' ' + a1 + ' ' + a2);
    if ( a0 === a1 && a1 === a2 && a2 != '-' ) {
      console.log(a0 + " wins");
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
      console.log("tie");
    }
  };

  function write_move(coord) {
    //console.log(coord);
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
    write_move(array[computer]);    
    array.splice(computer,1);
    console.log(array + ' ' + array.length + ' ' + computer + ' ' + array[computer]);
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
    array.splice(coord,1);
    console.log(array + ' ' + array.length + ' ' + coord);
    computer_move();
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

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

});