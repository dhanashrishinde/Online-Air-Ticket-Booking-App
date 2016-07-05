var app = angular.module('sanitizer', []);
        app.controller('SanitizerController', function($scope) {

        $scope.airFly = [{dept:'LA',arriv:'TX', date:'05/11/2012', timings:'15:15 pm', airline:'Southwest', fare:'$ 60'},
                         {dept:'LA',arriv:'TX', date:'09/10/2012', timings:'09:30 am', airline:'United', fare:'$ 70'},
                         {dept:'NY',arriv:'FL', date:'06/09/2012', timings:'23:00 pm', airline:'Delta', fare:'$ 130'}];
          
        $scope.getDetails = function() {

                $scope.details = [];
                $scope.schedule = [];
                $scope.prices = [];
                $scope.dates = [];

                if (!$scope.deptf)
                {
                    alert("Enter Departure!!");
                }
                else if (!$scope.arrivf)
                {
                    alert("Enter Arrival!!");
                }
                else if (!$scope.datef)
                {
                    alert("Enter Date!!");
                } 
                else
                {
                for(var i=0; i < $scope.airFly.length; i++) 
                {                   
                    if(validator.contains($scope.airFly[i].dept, validator.blacklist($scope.deptf,"~!@#$%^&_+=-|,.<>;:`/")))
                    {
                        if(validator.contains($scope.airFly[i].arriv, validator.whitelist($scope.arrivf,"a-z A-Z")))
                        {                      
                            if(validator.contains(validator.toDate($scope.airFly[i].date), validator.toDate($scope.datef)))
                            {
                                    $scope.details.push(" On Date : " + $scope.airFly[i].airline);
                                    $scope.schedule.push($scope.airFly[i].timings);
                                    $scope.prices.push($scope.airFly[i].fare);
                                    $scope.dates.push($scope.airFly[i].date);                         
                            }
                            else if(validator.isAfter(validator.toDate($scope.airFly[i].date), validator.toDate($scope.datef)))
                            {
                                    $scope.details.push(" After Date : " + $scope.airFly[i].airline);
                                    $scope.schedule.push($scope.airFly[i].timings);
                                    $scope.prices.push($scope.airFly[i].fare);
                                    $scope.dates.push($scope.airFly[i].date);
                                    
                            }
                            else if(validator.isBefore(validator.toDate($scope.airFly[i].date), validator.toDate($scope.datef)))
                            {
                                    $scope.details.push(" Before Date : " + $scope.airFly[i].airline);
                                    $scope.schedule.push($scope.airFly[i].timings);
                                    $scope.prices.push($scope.airFly[i].fare); 
                                    $scope.dates.push($scope.airFly[i].date);                                   
                            }
                            else
                            {
                                    $scope.details = "Sorry!! There are no flights for this route on that day!!";
                                    $scope.schedule = [];
                                    $scope.prices = [];
                            }
                        }
                    }
                }
            }
        }            
});