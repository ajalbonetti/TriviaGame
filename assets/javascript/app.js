
// Questions and Answers 

var questions = [{
    question: 'Which musician does J.D. McNugent refer to as the "Greatest singer/songwriter of this, or any generation" in the movie Saving Silverman?',
    choices: ['Sir Elton John', 'Neil Diamond', 'John Lennon', 'Prince'],
    correctAnswer: 'Neil Diamond'
  }, {
    question: "Lance Brumder—portrayed by Jack Black in the movie Orange County—interrupts his brother's Stanford interview looking for what?",
    choices: ['His pants', 'A joint in the couch cushion', 'His Stussy hat', 'A cup of piss'],
    correctAnswer: 'A cup of piss'
  }, {
    question: 'Which educational Jack Black character tells his pupil\'s parents, "I have been touched by your kids...and I\'m pretty sure that I\'ve touched them...?"',
    choices: ['Dewey Finn', 'Bernie Tiede', 'Lemuel Gulliver', 'Jeff Portnoy'],
    correctAnswer: 'Dewey Finn'
  }, {
    question: 'What song does Barry—portrayed by Jack Black in the movie High Fidelity—play when he comes into work on Monday morning as part of his special Monday Morning Tape?',
    choices: ['Who Loves the Sun by The Velvet Underground', 'Dry the Rain by The Beta Band', 'Walking on Sunshine by Katrina and the Waves', 'I just Called to Say I Love You by Stevie Wonder'],
    correctAnswer: 'Walking on Sunshine by Katrina and the Waves'
  }, {
    question: 'Jack Black\'s character in Tropic Thunder, Jeff Portnoy, describes his drugs using which alias?',
    choices: ['Good Stuff', 'Jelly Beans', 'Bun Bun', 'Bug Spray'],
    correctAnswer: 'Jelly Beans'
  }];

  var time = 90;
  var questionsCorrect = 0;
  var questionsIncorrect = 0;
  var unanswered = 0;

// HIDE QUIZ AND TIMER BEFORE BUTTON CLICK

  $('#quiz').hide();
  $('#time-left').hide();

// START QUIZ AND TIMER ON BUTTON CLICK

  $('#startButton').on('click', function() {
    $('#startButton').hide();
    $('#description').hide();
    $('#quiz').show();
    $('#time-left').show();
    run();
  });
  
 
// START TIMER AND COUNT DOWN BY SECONDS

  function run() {
    counter = setInterval(decrement, 1000);
  }

  function decrement() {
    time--;
    $('.timedisplay').html(time);
    if (time === 0) {
      $('#time-left').remove();
      $('#quiz').html('<h2>You Ran Out of Time!</h2><img src="assets/images/Jack-Black-4.gif" alt="Jack-Black-4"/>');
    }
  }



$('#submitButton').on('click', function() {

// DETERMINE VALUES OF THE BUTTONS CLICKED 

    var testValue1 = $('#question1 input:radio:checked').val();
    if (testValue1 === 'true') {
      questionsCorrect++;
    } else if (testValue1 === 'false') {
      questionsIncorrect++;
    } else {
      unanswered++;
    }

    var testValue2 = $('#question2 input:radio:checked').val();
    if (testValue2 === 'true') {
      questionsCorrect++;
    } else if (testValue2 === 'false') {
      questionsIncorrect++;
    } else {
      unanswered++;
    }

    var testValue3 = $('#question3 input:radio:checked').val();
    if (testValue3 === 'true') {
      questionsCorrect++;
    } else if (testValue3 === 'false') {
      questionsIncorrect++;
    } else {
      unanswered++;
    }

    var testValue4 = $('#question4 input:radio:checked').val();
    if (testValue4 === 'true') {
      questionsCorrect++;
    } else if (testValue4 === 'false') {
      questionsIncorrect++;
    } else {
      unanswered++;
    }

    var testValue5 = $('#question5 input:radio:checked').val();
    if (testValue5 === 'true') {
      questionsCorrect++;
    } else if (testValue5 === 'false') {
      questionsIncorrect++;
    } else {
      unanswered++;
    }

// DETERMINE AND DISPLAY OVERALL RESULT
  
    if (questionsCorrect >= 4) {
      $('#quiz').html('<h2>You Really Do Know Jack!</h2><img src="assets/images/Jack-Black-1.gif" alt="Jack-Black-1"/>');

    } else if (questionsCorrect === 3) {
      $('#quiz').html('<h2>You Sort of Know Jack</h2><img src="assets/images/Jack-Black-2.gif" alt="Jack-Black-2"/>');
    } else {
      $('#quiz').html('<h2>You Really Don\'t Know Jack At All</h2><img src="assets/images/Jack-Black-3.gif" alt="Jack-Black-3"/>');
    }



// END TIMER AND REVEAL SCORE ON SUBMIT BUTTON CLICK
    
    $('#time-left').remove();
    $('#quiz').append('<h3>Correct Answers: ' + questionsCorrect + '</h3>');
    $('#quiz').append('<h3>Incorrect Answers: ' + questionsIncorrect + '</h3>');
    $('#quiz').append('<h3>Unanswered Questions: ' + unanswered + '<h3>');

});



