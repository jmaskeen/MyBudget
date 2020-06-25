angular.module('BudgetApp.controller',["ngRoute"])

.controller('MainCTRL', function MainCTRL($scope){
    $scope.test = 'Main';

    // $scope.phones = [
    //     {name: 'iPhone XS Max', snippet: 'The best'},
    //     {name: 'Galaxy', snippet: 'shit'}
    // ];
})
.controller('LogInCTRL', ['$scope', '$location', function($scope, $location){

    $scope.test = 'Log in';
    // var titleDB;
	// var login = {};
	// $scope.login = login;
        
	// $scope.appName = 'BudgetApp';
	
    // var loginDBRef = new Firebase('https://dbtitles.firebaseio.com/loginDBs');
	// var fb = loginDBRef.orderByChild("appName").startAt($scope.appName).endAt($scope.appName);
    // $scope.loginDBs = $firebaseArray(fb);

	// $scope.SignIn = function(event){
	// 	var firebaseObj = new Firebase($scope.myDbTitle);
	// 	var loginObj = $firebaseAuth(firebaseObj);
		
	//     loginObj.$onAuth(function(authData){
	// 		if(authData){
	// 			CommonProp.setUser(authData.password.email);
	//             $location.path('/Main');
	//         }
	//     })

	// 	login.loading = true;

		event.preventDefault();   // To Prevent Form Referesh

	// 	var username = $scope.user.email;
	// 	var password = $scope.user.password;

	// 	loginObj.$authWithPassword({
	// 		email: username,
	// 		password: password
	// 	})

	// 	.then(function(user){
	// 		//Success callback
	// 		login.loading = false;
	// 		console.log('Authentication Successful');
	// 		CommonProp.setUser(user.password.email);

	// 		/*if (user.password.email=='almeskeen.jassem@gmail.com') {
	// 			var userID = '1';
	// 		}
	// 		else {
	// 			var userID='2';
	// 		};

	// 		CommonProp.setUserID(userID);*/
	// 		$location.path('/Main');
	// 	},
	// 	function(error){
	// 		//Failure callback
	// 		login.loading = false;
	// 		console.log('Authentication Failure');
	// 	});
	// }

	// $scope.changeDB = function(myValue){
	// 	CommonProp.setDbTitle(myValue.URL);
	// 	$scope.myDbTitle = CommonProp.getDbTitle();
	// }
}])

.controller('SignUpCTRL', ['$scope', '$location', 'CommonProp', function($scope, $location, CommonProp){

    $scope.test = 'Sign up';

	// var login = {};
	// $scope.login = login;

	// $scope.appName = 'BudgetApp';

	// var loginDBRef = new Firebase('https://dbtitles.firebaseio.com/loginDBs');
    // var fb = loginDBRef.orderByChild("appName").startAt($scope.appName).endAt($scope.appName);
	// $scope.loginDBs = $firebaseArray(fb);

	// $scope.myDbTitle = "";
	
	// $scope.signUp = function(){
	// 	var firebaseObj = new Firebase($scope.myDbTitle);
	// 	var auth = $firebaseAuth(firebaseObj);


	// 	login.loading = true;

	// 	if (!$scope.regForm.$invalid) {
	// 		//console.log('Valid form submission');
	// 		var email = $scope.user.email;
	// 		var password = $scope.user.password;
	// 		var uname = $scope.user.name;

	// 		if(email && password && uname){
	// 			//auth.$createUser(email, password).then(function(){
	// 			auth.$createUser({
	// 				email: email,
	// 				password: password
	// 			}).then(function(){
	// 				// if success
	// 				if($scope.myDbTitle != ""){
	// 					var userDetailsRef = new Firebase($scope.myDbTitle+'userDetails');
	// 					var fb = userDetailsRef.orderByChild("email").startAt($scope.user.email).endAt($scope.user.email);
	// 					$scope.userDetails = $firebaseArray(fb);
	// 					$scope.userDetails.$add({
	// 						email: email,
	// 						name: uname,
	// 						'.priority': email
	// 					}).then(function(firebaseObj){
	// 						var id = firebaseObj.key();
	// 						console.log(id);
	// 					}, function(error){
	// 						console.log("Error: ", error);
	// 					});
	// 				}
					
	// 				login.loading = false;
	// 				console.log('user creation success');
	// 				$location.path('/Login');
	// 			}, function(error){
	// 					// if fail
	// 					login.loading = false;
	// 					console.log(error);
	// 					$scope.regError = true;
	// 					$scope.regErrorMessage = error.message;
	// 				}
	// 			)
	// 		}
	// 	};
	// }

	// $scope.changeDB = function(myValue){
	// 	CommonProp.setDbTitle(myValue.URL);
	// 	$scope.myDbTitle = CommonProp.getDbTitle();
	// }
}])

.service('CommonProp',['$location', function($location){
	var user = '';
	var userId = '';
	// var dbTitle = '';

	return {
		// getDbTitle: function(){
        //     if(dbTitle == ''){
		// 		dbTitle = localStorage.getItem('databaseTitle');
        //     }
		// 	return dbTitle;
		// },
		// setDbTitle: function(value){
        //     localStorage.setItem("databaseTitle", value);
		// 	dbTitle = value;
		// },
		getUser: function(){
            if(user == ''){
				user = localStorage.getItem('userEmail');
            }
			return user;
		},
		setUser: function(value){
            localStorage.setItem("userEmail", value);
			user = value;
		},
		getUserRealName: function(){
            if(userRealName == ''){
				userRealName = localStorage.getItem('userRealName');
            }
			return userRealName;
		},
		setUserRealName: function(value){
            localStorage.setItem("userRealName", value);
			userRealName = value;
		},
		getUserID: function(){
			return userId;
		},
		setUserID: function(value){
			userId = value;
		},
        logoutUser:function(){
        	// var firebaseObj = new Firebase(dbTitle);
    		// var loginObj = $firebaseAuth(firebaseObj);
			// loginObj.$unauth();
            user = '';
            dbTitle = '';
            localStorage.removeItem('userEmail');
            localStorage.removeItem('databaseTitle');
            console.log('Logout Successful');
            $location.path('/Login');
        }
	};
}])