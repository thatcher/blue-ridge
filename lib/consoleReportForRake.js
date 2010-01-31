(function($) {
  $(Screw).bind("before", function(){
    $('.it')
    var colors = {'pass': '32', 'fail': '31'};
    function colorize(text, status){
        return "\u001B[" + colors[status] + "m" + text + "\u001B[0m";
    }
    $('.it')
      .bind('passed', function(){ 
        java.lang.System.out.print(colorize('.', 'pass'));
      })
      .bind('failed', function(e, reason){
        print(colorize("\nFAILED: " + BlueRidge.CommandLine.exampleName(this), 'fail'));
        print(colorize("          " + reason + "\n", 'fail'));
      });
  });

  $(Screw).bind("after", function(){
    var testCount = $('.passed').length + $('.failed').length;
    var failures = $('.failed').length;
    var elapsedTime = ((new Date() - Screw.suite_start_time)/1000.0);
    
    print("\n")
    print(testCount + ' test(s), ' + failures + ' failure(s)');
    print(elapsedTime.toString() + " seconds elapsed");
    
    if(failures > 0) { java.lang.System.exit(1) };
  });
})(jQuery);
