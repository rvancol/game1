$(window).on("load", function () {
  $(".coordinate-plane").attr("style", "display: none");
  $("#choose-ship").attr("style", "display: none");
  $(".choose-status").attr("style", "display: none");
});

$(document).ready(function(){
  //------------------------------------------------------
  //Build Coordinate Plane
  //------------------------------------------------------
  for (var i = 0; i < 100; i++) {
    var newDivI = '<div class="square" id='+i+'I></div>';
    var newDivII = '<div class="square" id='+i+'II></div>';
    var newDivIII = '<div class="square" id='+i+'III></div>';
    var newDivIV = '<div class="square" id='+i+'IV></div>';
    $('#first-quadrant').append(newDivI);
    $('#second-quadrant').append(newDivII);
    $('#third-quadrant').append(newDivIII);
    $('#fourth-quadrant').append(newDivIV);
  }

  //------------------------------------------------------
  //Label Coordinate Plane
  // ------------------------------------------------------
  // for (var i=10; i<10; i--) {
  //   var posY = "<div class='y-axis-label "+i+"-y'><p>"+i+"</p></div>"
  // }

  //------------------------------------------------------
  //Click Start
  //------------------------------------------------------
  $("#play-button").on("click", function () {
    $(".rules-div").remove();
    $(".choose-status").attr("style", "");
    $("#choose-ship").attr("style", "");
    $(".coordinate-plane").attr("style", "");
    $("#play-button").attr("style", "display: none");
    $("#player-2-choose-ship").attr("style", "display: none");
    $("#player-2-details").attr("style", "display: none");
    $("#second-quadrant").css("z-index", "-1");
    $("#fourth-quadrant").css("z-index", "-1");
    $("#player-1-details").attr("style", "display: none");
    $("#player-2-details").attr("style", "display: none");
  });

  //------------------------------------------------------
  //Choose Ships Player 1
  //------------------------------------------------------
  var player1FirstShipType;
  var player1FirstShipOrientation;
  var player1FirstShipLeftPointX;
  var player1FirstShipLeftPointY;
  var player1FirstShipRightPointX;
  var player1FirstShipRightPointY;

  $("#player-1-points-submit").on("click", function () {
    player1FirstShipLeftPointX = parseInt($("#player-1-left-x-coordinate").val(),10);
    player1FirstShipLeftPointY = $("#player-1-left-y-coordinate").val();
    player1FirstShipRightPointX = $("#player-1-right-x-coordinate").val();
    player1FirstShipRightPointY = $("#player-1-right-y-coordinate").val();
    console.log("Player 1 First Ship Left Point is (" +player1FirstShipLeftPointX+ "," +player1FirstShipLeftPointY+")");
    console.log("Player 1 First Ship Right Point is (" +player1FirstShipRightPointX+ "," +player1FirstShipRightPointY+")");
    console.log(typeof"player1FirstShipLeftPointX")
  });

  $("#player-1-aircraft-carrier").on("click", function () {
    $("#player-1-details").attr("style", "");
    $("#player-1-slope-one").prop("disabled",false);
    $("#player-1-slope-neg-one").prop("disabled",false);
    $("#player-1-horizontal").prop("disabled",true);
    $("#player-1-vertical").prop("disabled", true);
    $("#player-1-left-point-text").attr("style", "display: none");
    $("#player-1-right-point-text").attr("style", "display: none");
    $("#player-1-left-point").attr("style", "display: none");
    $("#player-1-right-point").attr("style", "display: none");
    player1FirstShipType = "Aircraft-Carrier";
    console.log("Player 1 First Ship Type is " +player1FirstShipType);
  });

  $("#player-1-cruiser").on("click", function () {
    $("#player-1-details").attr("style", "");
    $("#player-1-horizontal").prop("disabled",false);
    $("#player-1-vertical").prop("disabled", false);
    $("#player-1-slope-one").prop("disabled",true);
    $("#player-1-slope-neg-one").prop("disabled", true);
    $("#player-1-left-point-text").attr("style", "display: none");
    $("#player-1-right-point-text").attr("style", "display: none");
    $("#player-1-left-point").attr("style", "display: none");
    $("#player-1-right-point").attr("style", "display: none");
    player1FirstShipType = "Cruiser";
    console.log("Player 1 First Ship Type is " +player1FirstShipType);
  });

  $("#player-1-destroyer").on("click", function () {
    $("#player-1-details").attr("style", "");
    $("#player-1-horizontal").prop("disabled",false);
    $("#player-1-vertical").prop("disabled", false);
    $("#player-1-slope-one").prop("disabled",true);
    $("#player-1-slope-neg-one").prop("disabled", true);
    $("#player-1-left-point-text").attr("style", "display: none");
    $("#player-1-right-point-text").attr("style", "display: none");
    $("#player-1-left-point").attr("style", "display: none");
    $("#player-1-right-point").attr("style", "display: none");
    player1FirstShipType = "Destroyer";
    console.log("Player 1 First Ship Type is " +player1FirstShipType);
  });

  $("#player-1-submarine").on("click", function () {
    $("#player-1-details").attr("style", "");
    $("#player-1-slope-one").prop("disabled",false);
    $("#player-1-slope-neg-one").prop("disabled",false);
    $("#player-1-horizontal").prop("disabled",true);
    $("#player-1-vertical").prop("disabled", true);
    $("#player-1-left-point-text").attr("style", "display: none");
    $("#player-1-right-point-text").attr("style", "display: none");
    $("#player-1-left-point").attr("style", "display: none");
    $("#player-1-right-point").attr("style", "display: none");
    player1FirstShipType = "Submarine";
    console.log("Player 1 First Ship Type is " +player1FirstShipType);
  });

  $("#player-1-slope-one").on("click", function () {
    $("#player-1-left-point-text").attr("style", "");
    $("#player-1-right-point-text").attr("style", "");
    $("#player-1-left-point").attr("style", "");
    $("#player-1-right-point").attr("style", "");
    player1FirstShipOrientation = "positive";
    console.log("Player 1 First Ship Orientation is " +player1FirstShipOrientation);
  });

  $("#player-1-slope-neg-one").on("click", function () {
    $("#player-1-left-point-text").attr("style", "");
    $("#player-1-right-point-text").attr("style", "");
    $("#player-1-left-point").attr("style", "");
    $("#player-1-right-point").attr("style", "");
    player1FirstShipOrientation = "negative";
    console.log("Player 1 First Ship Orientation is " +player1FirstShipOrientation);
  });

  $("#player-1-horizontal").on("click", function () {
    $("#player-1-left-point-text").attr("style", "");
    $("#player-1-right-point-text").attr("style", "");
    $("#player-1-left-point").attr("style", "");
    $("#player-1-right-point").attr("style", "");
    player1FirstShipOrientation = "horizontal";
    console.log("Player 1 First Ship Orientation is " +player1FirstShipOrientation);
  });

  $("#player-1-vertical").on("click", function () {
    $("#player-1-left-point-text").attr("style", "");
    $("#player-1-right-point-text").attr("style", "");
    $("#player-1-left-point").attr("style", "");
    $("#player-1-right-point").attr("style", "");
    player1FirstShipOrientation = "vertical";
    console.log("Player 1 First Ship Orientation is " +player1FirstShipOrientation);
  });

  //------------------------------------------------------
  //Choose Ships Player 2
  //------------------------------------------------------
  var player1FirstShipType;
  var player1FirstShipOrientation;
  var player1FirstShipLeftPointX;
  var player1FirstShhipLeftPointY;
  var player1FirstShipRightPointX;
  var player1FirstShipRightPointY;

  $("#player-2-right-point").on("click", function () {
    $("player-2-left-x-coordinate").val(player2FirstShipLeftPointX);
    $("player-2-left-y-coordinate").val(player2FirstShipLeftPointY);
    $("player-2-right-x-coordinate").val(player2FirstShipRightPointX);
    $("player-2-right-y-coordinate").val(player2FirstShipLeftPointY);
    console.log("Player 2 First Ship Left Point is " +player2FirstShipLeftPointX+ "," +player2FirstShipLeftPointY);
    console.log("Player 2 First Ship Right Point is " +player2FirstShipRightPointX+ "," +player2FirstShipRightPointY);
  });

  $("#player-2-points-submit").on("click", function () {
    $("#player-2-details").attr("style", "");
    $("#player-2-slope-one").prop("disabled",false);
    $("#player-2-slope-neg-one").prop("disabled",false);
    $("#player-2-horizontal").prop("disabled",true);
    $("#player-2-vertical").prop("disabled", true);
    $("#player-2-left-point-text").attr("style", "display: none");
    $("#player-2-right-point-text").attr("style", "display: none");
    $("#player-2-left-point").attr("style", "display: none");
    $("#player-2-right-point").attr("style", "display: none");
    player2FirstShipType = "Aircraft-Carrier";
    console.log("Player 2 First Ship Type is " +player2FirstShipType);
  });

  $("#player-2-cruiser").on("click", function () {
    $("#player-2-details").attr("style", "");
    $("#player-2-horizontal").prop("disabled",false);
    $("#player-2-vertical").prop("disabled", false);
    $("#player-2-slope-one").prop("disabled",true);
    $("#player-2-slope-neg-one").prop("disabled", true);
    $("#player-2-left-point-text").attr("style", "display: none");
    $("#player-2-right-point-text").attr("style", "display: none");
    $("#player-2-left-point").attr("style", "display: none");
    $("#player-2-right-point").attr("style", "display: none");
    player2FirstShipType = "Cruiser";
    console.log("Player 2 First Ship Type is " +player2FirstShipType);
  });

  $("#player-2-destroyer").on("click", function () {
    $("#player-2-details").attr("style", "");
    $("#player-2-horizontal").prop("disabled",false);
    $("#player-2-vertical").prop("disabled", false);
    $("#player-2-slope-one").prop("disabled",true);
    $("#player-2-slope-neg-one").prop("disabled", true);
    $("#player-2-left-point-text").attr("style", "display: none");
    $("#player-2-right-point-text").attr("style", "display: none");
    $("#player-2-left-point").attr("style", "display: none");
    $("#player-2-right-point").attr("style", "display: none");
    player2FirstShipType = "Destroyer";
    console.log("Player 2 First Ship Type is " +player2FirstShipType);
  });

  $("#player-2-submarine").on("click", function () {
    $("#player-2-details").attr("style", "");
    $("#player-2-slope-one").prop("disabled",false);
    $("#player-2-slope-neg-one").prop("disabled",false);
    $("#player-2-horizontal").prop("disabled",true);
    $("#player-2-vertical").prop("disabled", true);
    $("#player-2-left-point-text").attr("style", "display: none");
    $("#player-2-right-point-text").attr("style", "display: none");
    $("#player-2-left-point").attr("style", "display: none");
    $("#player-2-right-point").attr("style", "display: none");
    player2FirstShipType = "Submarine";
    console.log("Player 2 First Ship Type is " +player2FirstShipType);
  });

  $("#player-2-slope-one").on("click", function () {
    $("#player-2-left-point-text").attr("style", "");
    $("#player-2-right-point-text").attr("style", "");
    $("#player-2-left-point").attr("style", "");
    $("#player-2-right-point").attr("style", "");
    player2FirstShipOrientation = "positive";
    console.log("Player 2 First Ship Orientation is " +player2FirstShipOrientation);
  });

  $("#player-2-slope-neg-one").on("click", function () {
    $("#player-2-left-point-text").attr("style", "");
    $("#player-2-right-point-text").attr("style", "");
    $("#player-2-left-point").attr("style", "");
    $("#player-2-right-point").attr("style", "");
    player2FirstShipOrientation = "negative";
    console.log("Player 2 First Ship Orientation is " +player2FirstShipOrientation);
  });

  $("#player-2-horizontal").on("click", function () {
    $("#player-2-left-point-text").attr("style", "");
    $("#player-2-right-point-text").attr("style", "");
    $("#player-2-left-point").attr("style", "");
    $("#player-2-right-point").attr("style", "");
    player2FirstShipOrientation = "horizontal";
    console.log("Player 2 First Ship Orientation is " +player2FirstShipOrientation);
  });

  $("#player-2-vertical").on("click", function () {
    $("#player-2-left-point-text").attr("style", "");
    $("#player-2-right-point-text").attr("style", "");
    $("#player-2-left-point").attr("style", "");
    $("#player-2-right-point").attr("style", "");
    player2FirstShipOrientation = "vertical";
    console.log("Player 2 First Ship Orientation is " +player2FirstShipOrientation);
  });

  //------------------------------------------------------
  //Place Aircraft Carrier in Quadrant I
  //------------------------------------------------------


  //------------------------------------------------------
  //Create Ship
  //------------------------------------------------------
  function Ship (shipType, segmentStartPointX, segmentStartPointY, segmentEndPointX, segmentEndPointY) {
    if (shipType = "Submarine") {
      var partitions = 3;
    }
    if (shipType = "Destroyer") {
      var parititions = 3;
    }
    if (shipType = "Aircraft-Carrier") {
      var parititions = 4;
    }
    if (shipType = "Cruiser") {
      var partitions = 4;
    }
    this.shipType = shipType;
    this.partitions = partitions;
    this.segmentStartPointX = segmentStartPointX;
    this.segmentStartPointY = segmentStartPointY;
    this.segmentEndPointX = segmentEndPointX;
    this.segmentEndPointY = segmentEndPointY;
  };

  //Attack Ship Prototype
  Ship.prototype.attack = function () {
    return this.partitions;
  }

  //Receive Damage Prototype
  Ship.prototype.receiveDamage = function (torpedo) {
    this.partitions -= torpedo;
  }

  //------------------------------------------------------
  //Player 1 Navy
  //------------------------------------------------------
  function Player1Ship (shipType, segmentStartPointX, segmentStartPointY, segmentEndPointX, segmentEndPointY) {
    Ship.call(this, shipType, segmentStartPointX, segmentStartPointY, segmentEndPointX, segmentEndPointY)
    this.ship1LocationXArray = [];
    this.ship1LocationYArray = [];
    this.ship2LocationXArray = [];
    this.ship2LocationYArray = [];
  };

  Player1Ship.prototype.ship1Location = function () {
    this.ship1LocationXArray.push(this.segmentStartPointX);
    this.ship1LocationYArray.push(this.segmentStartPointY);

    if ((this.shipType == "Submarine" || this.shiptype == "Destroyer") && (this.segmentStartPointX < this.segmentEndPointX)) {
      var ship1MiddlePartitionX = this.segmentStartPointX +1;
      this.ship1LocationXArray.push(this.ship1MiddlePartitionX);
    }
    else if ((this.shipType == "Submarine" || this.shiptype == "Destroyer") && (this.segmentStartPointX > this.segmentEndPointX)) {
      var ship1MiddlePartitionX = this.segmentStartPointX -1;
      this.ship1LocationXArray.push(this.ship1MiddlePartitionX);
    }

    if ((this.shipType == "Submarine" || this.shiptype == "Destroyer") && (this.segmentStartPointY < this.segmentEndPointY)) {
      var ship1MiddlePartitionY = this.segmentStartPointY +1;
      this.ship1LocationYArray.push(this.ship1MiddlePartitionY);
    }
    else if ((this.shipType == "Submarine" || this.shiptype == "Destroyer") && (this.segmentStartPointY > this.segmentEndPointY)) {
      var ship1MiddlePartitionY = this.segmentStartPointY -1;
      this.ship1LocationYArray.push(this.ship1MiddlePartitionY);
    }

    if ((this.shipType == "Aircraft Carrier" || this.shiptype == "Battleship") && (this.segmentStartPointX < this.segmentEndPointX)) {
      var ship1MiddlePartition1X = this.segmentStartPointX +1;
      var ship1MiddlePartition2X = this.segmentStartPointX +2;
      this.ship1LocationXArray.push(this.ship1MiddlePartition1X);
      this.ship1LocationXArray.push(this.ship1MiddlePartition2X);
    }
    else if ((this.shipType == "Aircraft Carrier" || this.shiptype == "Battleship") && (this.segmentStartPointX > this.segmentEndPointX)) {
      var ship1MiddlePartition1X = this.segmentStartPointX -1;
      var ship1MiddlePartition2X = this.segmentStartPointX -2;
      this.ship1LocationXArray.push(this.ship1MiddlePartition1X);
      this.ship1LocationXArray.push(this.ship1MiddlePartition2X);
    }

    if ((this.shipType == "Aircraft Carrier" || this.shiptype == "Battleship") && (this.segmentStartPointY < this.segmentEndPointY)) {
      var ship1MiddlePartition1Y = this.segmentStartPointY +1;
      var ship1MiddlePartition2Y = this.segmentStartPointY +2;
      this.ship1LocationYArray.push(this.ship1MiddlePartition1Y);
      this.ship1LocationYArray.push(this.ship1MiddlePartition2Y);
    }
    else if ((this.shipType == "Aircraft Carrier" || this.shiptype == "Battleship") && (this.segmentStartPointY > this.segmentEndPointY)) {
      var ship1MiddlePartition1Y = this.segmentStartPointY -1 ;
      var ship1MiddlePartition2Y = this.segmentStartPointY -2;
      this.ship1LocationYArray.push(this.ship1MiddlePartition1Y);
      this.ship1LocationYArray.push(this.ship1MiddlePartition2Y);
    }

    this.ship1LocationXArray.push(this.segmentEndPointX);
    this.ship1LocationYArray.push(this.segmentEndPointY);
  }

  Player1Ship.prototype.ship2Location = function () {
    this.ship2LocationXArray.push(this.segmentStartPointX);
    this.ship2LocationYArray.push(this.segmentStartPointY);

    if ((this.shipType == "Submarine" || this.shiptype == "Destroyer") && (this.segmentStartPointX < this.segmentEndPointX)) {
      var ship2MiddlePartitionX = this.segmentStartPointX +1;
      this.ship2LocationXArray.push(this.ship1MiddlePartitionX);
    }
    else if ((this.shipType == "Submarine" || this.shiptype == "Destroyer") && (this.segmentStartPointX > this.segmentEndPointX)) {
      var ship2MiddlePartitionX = this.segmentStartPointX -1;
      this.ship2LocationXArray.push(this.ship1MiddlePartitionX);
    }

    if ((this.shipType == "Submarine" || this.shiptype == "Destroyer") && (this.segmentStartPointY < this.segmentEndPointY)) {
      var ship2MiddlePartitionY = this.segmentStartPointY +1;
      this.ship2LocationYArray.push(this.ship2MiddlePartitionY);
    }
    else if ((this.shipType == "Submarine" || this.shiptype == "Destroyer") && (this.segmentStartPointY > this.segmentEndPointY)) {
      var ship2MiddlePartitionY = this.segmentStartPointY -1;
      this.ship2LocationYArray.push(this.ship2MiddlePartitionY);
    }

    if ((this.shipType == "Aircraft Carrier" || this.shiptype == "Battleship") && (this.segmentStartPointX < this.segmentEndPointX)) {
      var ship2MiddlePartition1X = this.segmentStartPointX +1;
      var ship2MiddlePartition2X = this.segmentStartPointX +2;
      this.ship2LocationXArray.push(this.ship2MiddlePartition1X);
      this.ship2LocationXArray.push(this.ship2MiddlePartition2X);
    }
    else if ((this.shipType == "Aircraft Carrier" || this.shiptype == "Battleship") && (this.segmentStartPointX > this.segmentEndPointX)) {
      var ship2MiddlePartition1X = this.segmentStartPointX -1;
      var ship2MiddlePartition2X = this.segmentStartPointX -2;
      this.ship2LocationXArray.push(this.ship2MiddlePartition1X);
      this.ship2LocationXArray.push(this.ship2MiddlePartition2X);
    }

    if ((this.shipType == "Aircraft Carrier" || this.shiptype == "Battleship") && (this.segmentStartPointY < this.segmentEndPointY)) {
      var ship1MiddlePartition1Y = this.segmentStartPointY +1;
      var ship1MiddlePartition2Y = this.segmentStartPointY +2;
      this.ship2LocationYArray.push(this.ship2MiddlePartition1Y);
      this.ship2LocationYArray.push(this.ship2MiddlePartition2Y);
    }
    else if ((this.shipType == "Aircraft Carrier" || this.shiptype == "Battleship") && (this.segmentStartPointY > this.segmentEndPointY)) {
      var ship2MiddlePartition1Y = this.segmentStartPointY -1;
      var ship2MiddlePartition2Y = this.segmentStartPointY -2;
      this.ship2LocationYArray.push(this.ship2MiddlePartition1Y);
      this.ship2LocationYArray.push(this.ship2MiddlePartition2Y);
    }

    this.ship2LocationXArray.push(this.segmentEndPointX);
    this.ship2LocationYArray.push(this.segmentEndPointY);
  }


  Player1Ship.prototype = Object.create(Ship.prototype);
  Player1Ship.prototype.constructor = Player1Ship;

  Player1Ship.prototype.receiveDamage = function (torpedo) {
    this.partitions -= torpedo;
    if (this.partitions > 0) {
      return "Player 1's " + this.shipType + " has taken on damage but still floats";
    }
    else {
      return "Player 1's " + this.shipType + " has sunk";
    }
  };


  //------------------------------------------------------
  //Player 2 Navy
  //------------------------------------------------------
  function Player2Ship (shipType, segmentStartPoint, segmentEndPoint) {
    Ship.call(this, shipType, segmentStartPoint, segmentEndPoint)
    this.ship1LocationXArray = [];
    this.ship1LocationYArray = [];
    this.ship2LocationXArray = [];
    this.ship2LocationYArray = [];
  };

  Player2Ship.prototype.ship1Location = function () {
    this.ship1LocationXArray.push(this.segmentStartPointX);
    this.ship1LocationYArray.push(this.segmentStartPointY);

    if ((this.shipType == "Submarine" || this.shiptype == "Destroyer") && (this.segmentStartPointX < this.segmentEndPointX)) {
      var ship1MiddlePartitionX = this.segmentStartPointX +1;
      this.ship1LocationXArray.push(this.ship1MiddlePartitionX);
    }
    else if ((this.shipType == "Submarine" || this.shiptype == "Destroyer") && (this.segmentStartPointX > this.segmentEndPointX)) {
      var ship1MiddlePartitionX = this.segmentStartPointX -1;
      this.ship1LocationXArray.push(this.ship1MiddlePartitionX);
    }

    if ((this.shipType == "Submarine" || this.shiptype == "Destroyer") && (this.segmentStartPointY < this.segmentEndPointY)) {
      var ship1MiddlePartitionY = this.segmentStartPointY +1;
      this.ship1LocationYArray.push(this.ship1MiddlePartitionY);
    }
    else if ((this.shipType == "Submarine" || this.shiptype == "Destroyer") && (this.segmentStartPointY > this.segmentEndPointY)) {
      var ship1MiddlePartitionY = this.segmentStartPointY -1;
      this.ship1LocationYArray.push(this.ship1MiddlePartitionY);
    }

    if ((this.shipType == "Aircraft Carrier" || this.shiptype == "Battleship") && (this.segmentStartPointX < this.segmentEndPointX)) {
      var ship1MiddlePartition1X = this.segmentStartPointX +1;
      var ship1MiddlePartition2X = this.segmentStartPointX +2;
      this.ship1LocationXArray.push(this.ship1MiddlePartition1X);
      this.ship1LocationXArray.push(this.ship1MiddlePartition2X);

    }
    else if ((this.shipType == "Aircraft Carrier" || this.shiptype == "Battleship") && (this.segmentStartPointX > this.segmentEndPointX)) {
      var ship1MiddlePartition1X = this.segmentStartPointX -1;
      var ship1MiddlePartition2X = this.segmentStartPointX -2;
      this.ship1LocationXArray.push(this.ship1MiddlePartition1X);
      this.ship1LocationXArray.push(this.ship1MiddlePartition2X);
    }

    if ((this.shipType == "Aircraft Carrier" || this.shiptype == "Battleship") && (this.segmentStartPointY < this.segmentEndPointY)) {
      var ship1MiddlePartition1Y = this.segmentStartPointY +1;
      var ship1MiddlePartition2Y = this.segmentStartPointY +2;
      this.ship1LocationYArray.push(this.ship1MiddlePartition1Y);
      this.ship1LocationYArray.push(this.ship1MiddlePartition2Y);
    }
    else if ((this.shipType == "Aircraft Carrier" || this.shiptype == "Battleship") && (this.segmentStartPointY > this.segmentEndPointY)) {
      var ship1MiddlePartition1Y = this.segmentStartPointY -1;
      var ship1MiddlePartition2Y = this.segmentStartPointY -2;
      this.ship1LocationYArray.push(this.ship1MiddlePartition1Y);
      this.ship1LocationYArray.push(this.ship1MiddlePartition2Y);
    }

    this.ship1LocationXArray.push(this.segmentEndPointX);
    this.ship1LocationYArray.push(this.segmentEndPointY);
  }

  Player2Ship.prototype.ship2Location = function () {
    ship2LocationXArray.push(segmentStartPointX);
    ship2LocationYArray.push(segmentStartPointY);

    if ((this.shipType == "Submarine" || this.shiptype == "Destroyer") && (this.segmentStartPointX < this.segmentEndPointX)) {
      var ship2MiddlePartitionX = this.segmentStartPointX +1;
      this.ship2LocationXArray.push(this.ship1MiddlePartitionX);
    }
    else if ((this.shipType == "Submarine" || this.shiptype == "Destroyer") && (this.segmentStartPointX > this.segmentEndPointX)) {
      var ship2MiddlePartitionX = this.segmentStartPointX -1;
      this.ship2LocationXArray.push(this.ship1MiddlePartitionX);
    }

    if ((this.shipType == "Submarine" || this.shiptype == "Destroyer") && (this.segmentStartPointY < this.segmentEndPointY)) {
      var ship2MiddlePartitionY = this.segmentStartPointY +1;
      this.ship2LocationYArray.push(this.ship2MiddlePartitionY);
    }
    else if ((this.shipType == "Submarine" || this.shiptype == "Destroyer") && (this.segmentStartPointY > this.segmentEndPointY)) {
      var ship2MiddlePartitionY = this.segmentStartPointY -1;
      this.ship2LocationYArray.push(this.ship2MiddlePartitionY);
    }

    if ((this.shipType == "Aircraft Carrier" || this.shiptype == "Battleship") && (this.segmentStartPointX < this.segmentEndPointX)) {
      var ship2MiddlePartition1X = this.segmentStartPointX +1;
      var ship2MiddlePartition2X = this.segmentStartPointX +2;
      this.ship2LocationXArray.push(this.ship2MiddlePartition1X);
      this.ship2LocationXArray.push(this.ship2MiddlePartition2X);

    }
    else if ((this.shipType == "Aircraft Carrier" || this.shiptype == "Battleship") && (this.segmentStartPointX > this.segmentEndPointX)) {
      var ship2MiddlePartition1X = this.segmentStartPointX -1;
      var ship2MiddlePartition2X = this.segmentStartPointX -2;
      this.ship2LocationXArray.push(this.ship2MiddlePartition1X);
      this.ship2LocationXArray.push(this.ship2MiddlePartition2X);
    }

    if ((this.shipType == "Aircraft Carrier" || this.shiptype == "Battleship") && (this.segmentStartPointY < this.segmentEndPointY)) {
      var ship1MiddlePartition1Y = this.segmentStartPointY +1;
      var ship1MiddlePartition2Y = this.segmentStartPointY +2;
      this.ship2LocationYArray.push(this.ship2MiddlePartition1Y);
      this.ship2LocationYArray.push(this.ship2MiddlePartition2Y);
    }
    else if ((this.shipType == "Aircraft Carrier" || this.shiptype == "Battleship") && (this.segmentStartPointY > this.segmentEndPointY)) {
      var ship2MiddlePartition1Y = this.segmentStartPointY -1;
      var ship2MiddlePartition2Y = this.segmentStartPointY -2;
      this.ship2LocationYArray.push(this.ship2MiddlePartition1Y);
      this.ship2LocationYArray.push(this.ship2MiddlePartition2Y);
    }

    ship2LocationXArray.push(segmentEndPointX);
    ship2LocationYArray.push(segmentEndPointY);
  }

  Player2Ship.prototype = Object.create(Ship.prototype);
  Player2Ship.prototype.constructor = Player2Ship;

  Player2Ship.prototype.receiveDamage = function (torpedo) {
    this.partitions -= torpedo;
    if (this.partitions > 0) {
      return "Player 2's " + this.shipType + " has taken on damage but still floats";
    }
    else {
      return "Player 2's " + this.shipType + " has sunk";
    }
  };

  //------------------------------------------------------
  //War
  //------------------------------------------------------
  function War () {
    this.Player1Navy = []
    this.Player2Navy = []
    this.Player1Navy.push()
  };


  this.ship1LocationXArray = [];
  this.ship1LocationYArray = [];
  this.ship2LocationXArray = [];
  this.ship2LocationYArray = [];


  //??????????
  War.prototype.addPlayer1Ship = function (player1Ship) {
    this.Player1Navy.push(player1Ship);
  };

  //??????????
  War.prototype.addPlayer2Ship = function (player2Ship) {
    this.Player2Navy.push(player2Ship);
  };

  War.prototype.player1Attack = function () {
    var torpedoTargetX;
    var topedoTargetY;
    // var torpedoTargetX;
    // var shipAttacked;
  }

  // var player1FirstShip = new Player1Ship (shipType, segmentStartPointX, segmentStartPointY, segmentEndPointX, segmentEndPointY)


//End jquery
});
