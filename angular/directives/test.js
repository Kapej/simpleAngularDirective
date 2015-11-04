app.directive('myTest',function(){
  return{
    scope:{
      myTest: "=",
      przyklad: "@test"
    },
    templateUrl: 'templates/my_template.html',
    link: function(scope, element){
      scope.wartosc = 15;
      scope.click = function(){
        console.log("eheheeheh");
      };
      element.css("background-color", "yellow");
      element.css("width","150px");
      element.css("text-align","center");
      element.css("padding","15px");
    }
  };
});
