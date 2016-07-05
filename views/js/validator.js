var app = angular.module('validator', []);
app.controller('ValidateController', function($scope) {

$scope.users = [{isuser:'neha20',pwd:'neha20'}, {isuser:'nischal25',pwd:'nischal25'}];
$scope.addUsers = function() {
    if($scope.isuser == null && $scope.pwd == null)
    {
        alert('Text field(s) cannot be empty!');
    }
    else
    {
        $scope.users.push({isuser:$scope.isuser, pwd:$scope.pwd});
        $scope.isuser = null;
        $scope.pwd = null;
    }
}

$scope.com = function() {
    for(var i=0; i < $scope.users.length; i++)
    {               
        if(validator.equals($scope.users[i].isuser, $scope.isuser1))
        {
            $scope.mes_comp = "Valid username";
            break;
        }
        else
        {
            $scope.mes_comp = "Invalid username";
        }
    }
}

$scope.pwdcom = function() {
    for(var i=0; i < $scope.users.length; i++)
    {
        if(validator.equals($scope.users[i].isuser, $scope.isuser1))
        {
            if(validator.equals($scope.users[i].pwd, $scope.pwd1))
            {
                $scope.mes_pwd = "Valid password";
                break;
            }
            else
            {
                $scope.mes_pwd = "Invalid password";
            }
        }
    }
}


$scope.equ = function() {
           
    if(validator.equals($scope.isuser1, $scope.isuser2))
    {
        $scope.mes_equ = "Valid";
    }
    else
    {
        $scope.mes_equ = "Invalid";
    }
}

validator.extend('isUsername', function (str) {
    var message = "";

    if(validator.isNull(str))
       return false;
    if(!validator.isAlphanumeric(str))
        return false;
    if(!validator.isLength(str, 5, 10))
        return false;
    return true;
});

$scope.valUser = function() {

   if(validator.isUsername($scope.isuser)) 
   {
        $scope.mes_user ="Valid username";
   }
   else
   {
        $scope.mes_user ="Invalid username";
   }
}

validator.extend('isPassword', function (str) {
    var message = "";

    if(validator.isNull(str))
        return false;
    if(!validator.isAlphanumeric(str))
        return false;
    if(!validator.isLength(str, 5, 10))
       return false;
    return true;
});


$scope.valPass = function() {
            
    if(validator.isPassword($scope.ispass))
    {
        $scope.mes_pass = "Valid password";
    }
    else
    {
        $scope.mes_pass = "Invalid password";
    }
}


$scope.valEmail = function() {
    console.log(validator.isEmail($scope.isemail));

    if(validator.isEmail($scope.isemail))
    {
        $scope.mes_alpha = "Valid Email";
    }
    else
    {
        $scope.mes_alpha = "Invalid Email";
    }
}

$scope.valCredit = function() {
    console.log(validator.isAlpha($scope.cname));

    if(validator.isAlpha($scope.cname))
    {
        $scope.mes_alpha1 = "Valid Name";
    }
    else
    {
        $scope.mes_alpha1 = "Invalid Name";
    }
}

validator.extend('isCreditCard', function (str,length) {

    if(validator.isNull(str))
    return false;
    if(!validator.isNumeric(str))
    return false;
    if(!validator.isLength(str, length, length))
    return false;
  
    return true;    
});


$scope.valCco = function() {
 
    console.log(validator.isCreditCard($scope.cnumber,16));
    
    if(validator.isCreditCard($scope.cnumber,16))
    {
        $scope.mes_cco = "Valid 16 digit credit card!";
    }
    else 
    {
        $scope.mes_cco = "Invalid! Enter a valid 16 digit credit card!";
    }
}

$scope.valCc = function() {
 
    console.log(validator.isCreditCard($scope.iscc,8));
    
    if(validator.isCreditCard($scope.iscc,8))
    {
        $scope.mes_cc = "Entered Value is valid 8 digit credit card!";
    }
    else 
    {
        $scope.mes_cc = "Entered value is not a valid 8 digit credit card!";
    }    
}

validator.extend('isMobilePhone', function (str) {
    
    if(validator.isNull(str))
    return false;
    if(!validator.isNumeric(str))
    return false;
    if(!validator.isLength(str, 10, 10))
    return false;

    return true;
}); 


$scope.valOver = function() {
    console.log(validator.isMobilePhone($scope.isover))
    if(validator.isMobilePhone($scope.isover))
    {
        $scope.mes_over = "Valid mobile phone number!" ;
    }
    else
    {
        $scope.mes_over = "Not a valid mobile phone number!";
    }
}

validator.extend('isAge', function (str) {
    var message = "";

    if(validator.isNull(str))
        return false;
    if(!validator.isNumeric(str))
        return false;
    if(!validator.isLength(str, 2, 2))
        return false;
    return true;
});


$scope.valAge = function() {
    if(validator.isAge($scope.isage1))
    {
        $scope.mes_age ="Valid";
    }
    else
    {
        $scope.mes_age ="Invalid";
    }
}

$scope.valDate = function() {

    console.log(validator.isDate($scope.isdate));

    if(validator.isDate($scope.isdate))
    {
        $scope.mes_date = "Entered Value is Date";
    }
    else
    {
        $scope.mes_date = "Entered Value is Not Date";
    }
}

$scope.valAmount = function() {

    console.log(validator.isCurrency($scope.amt));

    if(validator.isCurrency($scope.amt))
    {
        $scope.mes_amt = "Entered Currency is Valid";
    }
    else
    {
        $scope.mes_amt = "Entered Currency is not Valid";
    }
}

$scope.valURL = function() {
 
    console.log(validator.isURL($scope.isurl));

    if(validator.isURL($scope.isurl))
    {
        $scope.mes_url = "Entered Value is URL";
    }
    else 
    {
        $scope.mes_url = "Invalid!! Entered Value is Not URL";
    }   
}

$scope.mat = function() {
           
    if(validator.isDivisibleBy($scope.divuser1, $scope.divuser2))
    {
        $scope.mat_div = "Discount applicable";
    }
    else
    {
        $scope.mat_div = "Discount not applicable";
    }
}


    $scope.isLow = function() { 
    if(validator.isLowercase($scope.islower))
    {
        $scope.isLow_usr="correct";
    }
    else
    {
        $scope.isLow_usr = "enter valid username";
    }
}


    $scope.checkCrName = function() {
           
    if(validator.isUppercase($scope.isupper))
    {
        $scope.isUp_usr = "correct";
    }
    else
    {
        $scope.isUp_usr = "enter valid Credit/Debit card name";
    }
}

    $scope.checkAmount = function() {
           
    if(validator.isFloat($scope.isFloatU))
    {
        $scope.isFl_usr = "correct";
    }
    else
    {
        $scope.isFl_usr = "enter valid numbers";
    }
}


});