var app = angular.module('yardSale', ['ionic', 'ionic.contrib.ui.cards', 'ngFx', "ngAnimate", 'ngCordova', 'ux', 'base64']);

app.factory('Camera', ['$q', '$base64',
    function($q, $base64) {

        return {
            getPicture: function(options) {
                var q = $q.defer();

                navigator.camera.getPicture(function(result) {
                    // Do any magic you need
                    console.log("This is the result " + result);
                    q.resolve(result);
                }, function(err) {
                    q.reject(err);
                }, {
                    quality: 75,
                    targetWidth: 320,
                    targetHeight: 320,
                    saveToPhotoAlbum: false,
                    destinationType: Camera.DestinationType.DATA_URL
                });

                return q.promise;
            }
        }
    }
])

app.factory('userFactory', [

    function() {
        var isLoggedIn = false;
        var firstName = "";
        var lastName = "";
        var idNumber = "";
        var sellObject = [];
        var email = "";
        var idNumber = "";
        return {
            getIsLoggedIn: function() {
                return isLoggedIn;
            },
            setIsLoggedIn: function(input) {
                isLoggedIn = input;
            },
            setFirstName: function(input) {
                firstName = input;
            },
            setLastName: function(input) {
                lastName = input;
            },
            getFullName: function() {
                return firstName + " " + lastName;
            },
            setIdNumber: function(input) {
                idNumber = input;
            },
            getIdNumber: function() {
                return idNumber;
            },
            getSellObject: function() {
                return sellObject;
            },
            setSellObject: function(input) {
                sellObject = input;
            },
            setEmail: function(input) {
                email = input;
            },
            getEmail: function() {
                return email;
            }
        };
    }
]);

app.factory('allArray', function() {

    //this is all of the array
    var currentArray = [];
    var apartmentArray = [];
    var bikeArray = [];
    var electronicArray = [];
    var freeArray = [];
    var furnitureArray = [];
    var petArray = [];

    //limit tells how much should be shown in the page
    var upperLimit = 10;
    var lowerLimit = 0;

    //canGoForeward and canGoBack 
    var canGoForeward = true;
    var goBack = false;
    var goForeward = true;

    //currentItem for currentItem view
    var currentItem = {
        title: "",
        image: [],
        link: "",
        price: "",
        objectInfo: "",
        contact: ""
    };

    //current type

    var currentType = "";

    //getter and setter methods
    return {
        getRandomArray: function() {
            var allArray = apartmentArray.concat(bikeArray, electronicArray, freeArray, furnitureArray, petArray);
            return _.shuffle(allArray);
        },
        getCurrentArray: function() {
            return currentArray;
        },
        setCurrentArray: function(input) {
            currentArray = input;
        },
        getArrayType: function(input) {
            if (input == "Apartment") {
                return apartmentArray;
            } else if (input == "Bike") {
                return bikeArray;
            } else if (input == "Electronic") {
                return electronicArray;
            } else if (input == "Free") {
                return freeArray;
            } else if (input == "Furniture") {
                return furnitureArray;
            } else if (input == "Pet") {
                return petArray;
            }
        },
        setArrayType: function(input, data) {
            if (input == "Apartment") {
                apartmentArray = data;
            } else if (input == "Bike") {
                bikeArray = data;
            } else if (input == "Electronic") {
                electronicArray = data;
            } else if (input == "Free") {
                freeArray = data;
            } else if (input == "Furniture") {
                furnitureArray = data;
            } else if (input == "Pet") {
                petArray = data;
            }
        },
        addArrayType: function(input, data) {
            if (input == "Apartment") {
                apartmentArray = apartmentArray.concat(data);
            } else if (input == "Bike") {
                bikeArray = bikeArray.concat(data);
            } else if (input == "Electronic") {
                electronicArray = electronicArray.concat(data);
            } else if (input == "Free") {
                freeArray = freeArray.concat(data);
            } else if (input == "Furniture") {
                furnitureArray = furnitureArray.concat(data);
            } else if (input == "Pet") {
                petArray = petArray.concat(data);
            }
        },
        setLowerLimit: function(input) {
            lowerLimit = input;
        },
        getLowerLimit: function() {
            return lowerLimit;
        },
        setUpperLimit: function(input) {
            upperLimit = input;
        },
        getUpperLimit: function() {
            return upperLimit;
        },
        getCanGoForeward: function() {
            return goForeward;
        },
        getCanGoBack: function() {
            return goBack;
        },
        setCanGoBack: function(input) {
            goBack = input;
        },
        setCanGoForeward: function(input) {
            goForeward = input;
        },
        setCurrentItem: function(nameI, imageI, linkI, priceI, infoI, contactI) {
            currentItem.title = nameI;
            currentItem.image = imageI;
            currentItem.link = linkI;
            currentItem.price = priceI;
            currentItem.objectInfo = infoI;
            currentItem.contact = contactI;
        },
        getCurrentItem: function() {
            return currentItem;
        },
        getCurrentType: function() {
            return currentType;
        },
        setCurrentType: function(input) {
            currentType = input;
        }
    }
});

// app.factory('allObject', function() {
//     var allItems = [];
//     var currentType = null;
//     var currentArray = [];
//     var lowerLimit = 0;
//     var upperLimit = 10;
//     var currentItem = {
//         title: "",
//         image: [],
//         link: "",
//         price: "",
//         objectInfo: "",
//         contact: ""
//     };
//     var currentValue = 0;
//     var canGoForeward = false;
//     var canGoBack = true;
//     //getter and setter
//     return {
//         getRandomArray: function() {
//             return _.shuffle(allItems);
//         },
//         getCanGoForeward: function() {
//             return canGoForeward;
//         },
//         getCanGoBack: function() {
//             return canGoBack;
//         },
//         setCanGoBack: function(input) {
//             canGoBack = input;
//         },
//         setCanGoForeward: function(input) {
//             canGoForeward = input;
//         },
//         getCurrentValue: function() {
//             return currentValue;
//         },
//         setCurrentValue: function(input) {
//             currentValue = input;
//         },
//         addItems: function(input) {
//             allItems = allItems.concat(input);
//         },
//         getItems: function() {
//             return allItems;
//         },
//         setItems: function(input) {
//             allItems = input;
//         },
//         setCurrentType: function(input) {
//             currentType = input;
//         },
//         getCurrentType: function() {
//             return currentType;
//         },
//         getCurrentArray: function() {
//             return currentArray;
//         },
//         setCurrentArray: function(input) {
//             currentArray = input;
//         },
//         resetCurrentArray: function() {
//             currentArray = [];
//         },
//         setCurrentItem: function(nameI, imageI, linkI, priceI, infoI, contactI) {
//             currentItem.title = nameI;
//             currentItem.image = imageI;
//             currentItem.link = linkI;
//             currentItem.price = priceI;
//             currentItem.objectInfo = infoI;
//             currentItem.contact = contactI;
//         },
//         getCurrentItem: function() {
//             return currentItem;
//         },
//         setLowerLimit: function(input) {
//             lowerLimit = input;
//         },
//         getLowerLimit: function() {
//             return lowerLimit;
//         },
//         setUpperLimit: function(input) {
//             upperLimit = input;
//         },
//         getUpperLimit: function() {
//             return upperLimit;
//         }

//     }

// });

app.constant("loadFirstUrl", "http://localhost:3000/api/twenty_all");

app.run(function($ionicPlatform, allArray, loadFirstUrl, $http) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });

    //when the app first starts, you get the initial data
    $http.get(loadFirstUrl)
        .success(function(data) {
            //add to each category
            // allObject.addItems(data);
            for (var key in data) {
                allArray.setArrayType(key, data[key]);
            }

        }).error(function(data) {
            console.log("not working");
        });
})

app.config(function($stateProvider, $urlRouterProvider, $provide, $compileProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    .state('home', {
        url: '/',
        controller: function($scope) {

        },
        templateUrl: 'templates/main.html'
    })
        .state('login', {
            url: '/login',
            controller: 'homeCtrl',
            templateUrl: 'templates/login.html'
        })
        .state('search', {
            url: '/search',
            controller: 'homeCtrl',
            templateUrl: 'templates/search.html'
        })
        .state('quickshop', {
            url: '/quickshop',
            controller: 'homeCtrl',
            templateUrl: 'templates/quickshop.html'
        })
        .state('sell', {
            url: '/sell',
            controller: 'homeCtrl',
            templateUrl: 'templates/sell.html'
        })
        .state('item', {
            url: '/item',
            controller: 'homeCtrl',
            templateUrl: 'templates/item.html'
        })

    .state('message', {
        url: '/message',
        controller: 'homeCtrl',
        templateUrl: 'templates/message.html'
    })
        .state('setting', {
            url: '/setting',
            controller: 'homeCtrl',
            templateUrl: 'templates/setting.html'
        })
        .state('signup', {
            url: '/signup',
            controller: 'homeCtrl',
            templateUrl: 'templates/signup.html'
        })
        .state('list', {
            url: '/list',
            controller: 'homeCtrl',
            templateUrl: 'templates/list.html'
        })
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/');

    $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);

});

app.controller('homeCtrl', function($http, $scope, $ionicScrollDelegate, allArray, userFactory, $location) {

    // $scope.lowerLimit = allObject.getLowerLimit();
    // $scope.upperLimit = allObject.getUpperLimit();
    //get all objects
    // $scope.allItems = allObject.getItems();
    // $scope.canGoBack = allObject.getCanGoBack();
    // $scope.canGoForeward = allObject.getCanGoForeward();
    //current category of the array
    // $scope.currentArrayS = allObject.getCurrentArray();

    //get the limit for each page
    $scope.lowerLimit = allArray.getLowerLimit();
    $scope.upperLimit = allArray.getUpperLimit();

    //this changes everytime the user clicks a new page
    if (allArray.getCurrentType() == "search") {
        $scope.currentArray = allArray.getCurrentArray();
        console.log("I got here");
    } else {
        $scope.currentArray = allArray.getArrayType(allArray.getCurrentType());
    }

    //needs a current type because we cann add it to both currentArray and the type so you don't have to add it again
    $scope.currentType = allArray.getCurrentType();

    //determine if a page can go foreward or backward
    $scope.canGoBack = allArray.getCanGoBack();
    $scope.canGoForeward = allArray.getCanGoForeward();

    $scope.currentOrder = "New-Old";
    $scope.allCat = [{
        name: 'Apartment'
    }, {
        name: 'Pet'
    }, {
        name: 'Furniture'
    }, {
        name: 'Electronic'
    }, {
        name: 'Bike'
    }, {
        name: 'Free'
    }];

    $scope.orderSelect = [{
        name: 'New-Old'
    }, {
        name: 'Old-New'
    }];

    var nameInterval = setInterval(function() {
        $scope.testClick()
    }, 1000);
    var increment = 0;
    $scope.testClick = function() {
        $scope.fullName = userFactory.getFullName();
    }

    $scope.error = false;
    $scope.fullName = "";
    $scope.testClick();


    //this changes the category on the main button
    //this sets the current array which will be used in the template
    $scope.changeCategory = function(input) {
        // allObject.setUpperLimit(10);
        // allObject.setLowerLimit(0);
        // allObject.setCurrentType(input);
        // allObject.setCurrentArray(_.where(allObject.getItems(), {
        //     category: input
        // }));
        // $scope.currentArrayS = allObject.getCurrentArray();

        //change currentArray to this one
        allArray.setCurrentType(input);

        //changes the current array to the array of the current type
        allArray.setCurrentArray(allArray.getArrayType(input));
        allArray.setLowerLimit(0);
        allArray.setUpperLimit(10);
        allArray.setCanGoBack(false);
        allArray.setCanGoForeward(true);
        $location.path('/list');

        //change current Type
    }

    $scope.getItemHeight = function(item) {
        return '100%';
    };
    $scope.getItemWidth = function(item) {
        return '100%';
    };

    //this goes to the next page
    $scope.nextPage = function() {
        // if ($scope.upperLimit + 10 >= $scope.currentArrayS.length) {
        //     $http.get("http://localhost:3000/api/twenty/" + allObject.getCurrentType() + "/skip/" + $scope.currentArrayS.length)
        //         .success(function(data) {

        //             //you concat to the big array
        //             console.log("Before all objects ", allObject.getItems().length);
        //             $scope.currentArrayS = $scope.currentArrayS.concat(data);
        //             allObject.addItems(data);
        //             console.log("After all objects ", allObject.getItems().length);
        //             $scope.lowerLimit += 10;
        //             $scope.upperLimit += 10;
        //             $ionicScrollDelegate.scrollTop();
        //             $scope.canGoBack = false;
        //             allObject.setCanGoBack(false);
        //             console.log(data.length);
        //             if (data.length == 0) {
        //                 console.log("It's working");
        //                 $scope.canGoForeward = true;
        //                 allObject.setCanGoForeward(true);
        //             }
        //         }).error(function(data) {
        //             console.log("not working");
        //         });
        // } else {
        //     $scope.lowerLimit += 10;
        //     $scope.upperLimit += 10;
        //     $ionicScrollDelegate.scrollTop();
        //     $scope.canGoBack = false;
        //     allObject.setCanGoBack(false);
        // }

        if ($scope.upperLimit + 10 >= $scope.currentArray.length) {
            // console.log("Have to load more ");
            // console.log("This is the current upper limit " + $scope.upperLimit);
            // console.log("This is the current array length " + $scope.currentArray.length);

            // console.log("http://localhost:3000/api/twenty/" + allArray.getCurrentType() + "/skip/" + $scope.currentArray.length);
            $http.get("http://localhost:3000/api/twenty/" + allArray.getCurrentType() + "/skip/" + $scope.currentArray.length)
                .success(function(data) {
                    //concat to the current array
                    $scope.currentArray = $scope.currentArray.concat(data);
                    //add to the array of this type
                    allArray.addArrayType(allArray.getCurrentType(), data);

                    //check when you can go foreward

                    if (data.length == 0) {
                        $scope.canGoForeward = false;
                        allArray.setCanGoForeward(false);
                    }
                }).error(function(data) {
                    console.log("There is an error");
                });
        }

        $scope.lowerLimit += 10;
        $scope.upperLimit += 10;

        //this sets the upper and lower limit
        allArray.setLowerLimit($scope.lowerLimit);
        allArray.setUpperLimit($scope.upperLimit);

        $ionicScrollDelegate.scrollTop();
        $scope.canGoBack = true;
        allArray.setCanGoBack(true);
    }

    //this goes to the previous page
    $scope.previousPage = function() {
        if ($scope.lowerLimit - 10 >= 0) {
            $scope.lowerLimit -= 10;
            $scope.upperLimit -= 10;

            //this sets the upper and lower limit
            allArray.setLowerLimit($scope.lowerLimit);
            allArray.setUpperLimit($scope.upperLimit);

            $ionicScrollDelegate.scrollTop();
            $scope.canGoForeward = true;
            allArray.setCanGoForeward(true);

            //can't go back anymore
            if ($scope.lowerLimit == 0) {
                $scope.canGoBack = false;
                allArray.setCanGoBack(false);
                $ionicScrollDelegate.scrollTop();
            }
        }
        // else {
        //     console.log($scope.lowerLimit);
        //     console.log($scope.upperLimit);

        //     $scope.setCanGoBack = false;
        //     allArray.setCanGoBack(false);
        //     $ionicScrollDelegate.scrollTop();
        // }
    }

    //this sets the item
    $scope.setItem = function(nameIn, imageIn, webIn, priceIn, detailIn, emailIn) {
        allArray.setCurrentItem(nameIn, imageIn, webIn, priceIn, detailIn, emailIn);
        allArray.setUpperLimit($scope.upperLimit);
        allArray.setLowerLimit($scope.lowerLimit);
        $ionicScrollDelegate.scrollTop();
    }

    //this changes the category drop down
    $scope.changeCategoryTwo = function(input) {
        $scope.lowerLimit = 0;
        $scope.upperLimit = 10;
        $scope.canGoBack = false;
        $scope.canGoForeward = true;
        allArray.setCanGoBack(false);
        allArray.setCanGoForeward(true);
        allArray.setUpperLimit(10);
        allArray.setLowerLimit(0);
        allArray.setCurrentType(input.name);
        allArray.setCurrentArray(allArray.getArrayType(input.name));
        $scope.currentArray = allArray.getArrayType(input.name);

        document.getElementById('objectOrder').selectedIndex = 1;
    }

    $scope.changeOrder = function(input) {
        console.log("This is input name " + input.name);
        console.log("This is current Order name " + $scope.currentOrder);
        if (input.name != $scope.currentOrder && input.name != "") {
            $scope.currentOrder = input.name;
            $scope.currentArrayS.reverse();
        }
        console.log("This is new input name " + input.name);
        console.log("This is new current Order name " + $scope.currentOrder);
    }

});

app.controller('cardsCtrl', function($location, $http, $scope, $ionicScrollDelegate, allArray) {

    // $scope.allItems = allObject.getRandomArray();
    $scope.currentIndex = 0;
    $scope.index = 0;

    $scope.allItems = allArray.getRandomArray();

    $scope.clickNo = function() {
        var cElem = document.getElementById('cardId');
        cElem.className = 'animated fadeOutDown';

        //this detects once the animation ends

        angular.element(cElem).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            var item = $scope.allItems[$scope.currentIndex];
            console.log(item);
            $scope.currentIndex++;
            $scope.$apply();
        });
    };

    $scope.showDetail = function() {
        var item = $scope.allItems[$scope.currentIndex];
        $scope.setItem(item.name, item.image, item.weblink, item.price, item.detail, item.email);
        $location.path('/item');
    };

    $scope.clickYes = function() {
        var item = $scope.allItems[$scope.currentIndex];
        var cElem = document.getElementById('cardId');
        cElem.className = 'animated fadeOutUp';
        angular.element(cElem).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $scope.currentIndex++;
            $scope.$apply();
        });

        $http.get('http://localhost:3000/sendmail/rodch100@mail.chapman.edu')
            .success(function(data) {
                console.log(data);
            }).error(function(data) {
                console.log("not working");
            });

    };

    $scope.dragUp = function() {
        $scope.index++;
        if ($scope.index == 5) {
            var item = $scope.allItems[$scope.currentIndex];
            var cElem = document.getElementById('cardId');
            cElem.className = 'animated fadeOutUp';
            angular.element(cElem).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                $scope.currentIndex++;
                $scope.$apply();
            });

            $http.get('http://localhost:3000/sendmail/rodch100@mail.chapman.edu')
                .success(function(data) {
                    console.log(data);
                    $scope.index = 0;
                }).error(function(data) {
                    console.log("not working");
                    $scope.index = 0;
                });
        }
    }

    $scope.dragDown = function() {
        $scope.index++;
        if ($scope.index == 5) {
            var cElem = document.getElementById('cardId');
            cElem.className = 'animated fadeOutDown';

            //this detects once the animation ends

            angular.element(cElem).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                var item = $scope.allItems[$scope.currentIndex];
                $scope.currentIndex++;
                $scope.index = 0;
                $scope.$apply();
            });
        }
    }

    $scope.release = function() {
        // console.log("release");
        // $scope.index = 0;
    };
});

app.directive('noScroll', function($document) {

    return {
        restrict: 'A',
        link: function($scope, $element, $attr) {

            $document.on('touchmove', function(e) {
                e.preventDefault();
            });
        }
    }
});

app.controller('itemCtrl', function($scope, allArray, $ionicViewService, $http, $ionicModal, $location, $ionicPopup, userFactory) {
    $scope.currentObj = allArray.getCurrentItem();
    $scope.isLoggedIn = userFactory.getIsLoggedIn();

    //create a popup menu when clicked

    $scope.showPopup = function(email, title) {
        $scope.data = {}

        var myPopup = $ionicPopup.show({
            template: '<textarea ng-model="data.text"></textarea>',
            title: 'Email Body',
            subTitle: 'Please enter your email body here',
            scope: $scope,
            buttons: [{
                text: 'Cancel'
            }, {
                text: '<b>Save</b>',
                type: 'button-balanced',
                onTap: function(e) {
                    if (!$scope.data.text) {
                        e.preventDefault();
                    } else {
                        $http.get('http://localhost:3000/sendmail/' + email + '/title/' + title + '/body/' + $scope.data.text + '/usermail/' + userFactory.getEmail())
                            .success(function(data) {
                                $location.path('/');
                            }).error(function(data) {
                                console.log(data);
                            });
                    }
                }
            }]
        });
    }
    $scope.sendEmail = function(email, title) {
        // console.log("his is working");
        $http.get('http://localhost:3000/sendmail/' + email + '/title/' + title)
            .success(function(data) {
                $location.path('/');
            }).error(function(data) {
                console.log(data);
            });
        // $http.get('http://localhost:3000/sendmail/rodch100@mail.chapman.edu')
        //     .success(function(data) {
        //         // var item = $scope.allItems[$scope.currentIndex];
        //         // var cElem = document.getElementById('cardId);
        //         // cElem.className = 'animated fadeOutUp'
        //         // angular.element(cElem).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        //         // $scope.currentIndex++;
        //         // $scope.$apply();
        //         // });
        //     }).error(function(data) {
        //         console.log("not working");
        //         sentSuccess = false;
        //     });
    };


    $scope.goB = function() {
        var history = $ionicViewService.getBackView();
        //set the current array here 

        // $scope.upperLimit = allObject.getUpperLimit();
        // $scope.lowerLimit = allObject.getLowerLimit();
        // allObject.setCurrentArray(_.where(allObject.getItems(), {
        //     category: allObject.getCurrentType()
        // }));
        // $scope.currentArrayS = allObject.getCurrentArray();
        //set lower and upper limit here

        history.go(history.backViewId);
    };

    $ionicModal.fromTemplateUrl('templates/modal.html', function($ionicModal) {
        $scope.modal = $ionicModal;
    }, {
        scope: $scope,
        animation: 'slide-in-up'
    });
});

app.controller('modalCtrl', function($scope, allArray) {
    $scope.currentObject = allArray.getCurrentItem();
    $scope.currentPicture = $scope.currentObject.image[0];

    $scope.changeImage = function(inputI) {
        $scope.currentPicture = inputI;
    }
});

app.controller('sellCtrl', function(Camera, $location, $http, $scope, $cordovaCamera, allArray, userFactory, $base64) {
    $scope.isLoggedIn = userFactory.getIsLoggedIn();
    $scope.photoTaken = false;
    $scope.getPhoto = function() {
        Camera.getPicture().then(function(imageURI) {
            // var image = document.getElementById('myImage');
            // image.src = "data:image/jpeg;base64," + imageURI;
            $scope.photo = imageURI;
            // $scope.lastPhoto = imageURI;
            $scope.photoTaken = true;
            // console.log(imageURI);
        }, function(err) {
            console.err(err);
        }, {
            quality: 75,
            targetWidth: 320,
            targetHeight: 320,
            saveToPhotoAlbum: false
        });
    };

    function onSuccess(imageData) {
        // var image = document.getElementById('myImage');
        // image.src = "data:image/jpeg;base64," + imageData;
        console.log("The photo was taken");
        console.log("Look at this photo " + imageURI);
        $scope.lastPhoto = imageURI;
        $scope.photoTaken = true;
        console.log(imageURI);
    }

    function onFail(message) {
        alert('Failed because: ' + message);
    }

    $scope.login = function() {
        $http.post("http://localhost:3000/authentication/login", $scope.userTwo)
            .success(function(data) {
                userFactory.setFirstName(data.firstname);
                userFactory.setLastName(data.lastname);
                userFactory.setIdNumber(data._id);
                userFactory.setSellObject(data.current_sell);
                userFactory.setEmail(data.local.email);
                userFactory.setIsLoggedIn(true);
                $location.path('/');
                $scope.fullName = userFactory.getFullName();


            }).error(function(data) {                                                                                                               
                scope.error = true;
            });
    };

    $scope.addProduct = function() {
        if (!$scope.object.title || !$scope.object.price || !$scope.object.info || !$scope.object.email) {
            console.log("Please input all the field");
        } else {
            $http.post("http://localhost:3000/submit", $scope.object)
                .success(function(data) {
                    //add to each category
                    $http.get("http://localhost:3000/api/twenty_all")
                        .success(function(dataT) {
                            //add to each category
                            allObject.setItems(dataT);

                        }).error(function(data) {
                            console.log("not working");
                        });

                    console.log(allObject.getItems());
                    console.log("success");

                }).error(function(data) {
                    console.log("not working");
                });
        }
    };
});

app.controller('signupCtrl', function($scope, $http, $location) {
    $scope.error = false;
    $scope.signup = function() {
        $http.post("http://localhost:3000/authentication/signup", $scope.user)
            .success(function(data) {
                $location.path('/');
                //have to change the name and stuff
            }).error(function(data) {
                console.log(data);
                $scope.error = true;
            });
    }
});

app.controller('loginCtrl', function($scope, $http, $location, userFactory) {

    //this will show the login page or setting page
    $scope.isLoggedIn = userFactory.getIsLoggedIn();

    $scope.login = function() {
        $http.post("http://localhost:3000/authentication/login", $scope.userTwo)
            .success(function(data) {
                userFactory.setFirstName(data.firstname);
                userFactory.setLastName(data.lastname);
                userFactory.setIdNumber(data._id);
                userFactory.setSellObject(data.current_sell);
                userFactory.setEmail(data.local.email);
                userFactory.setIsLoggedIn(true);
                $location.path('/');
                $scope.fullName = userFactory.getFullName();


            }).error(function(data) {
                console.log(                                                                                                                   data);
                $scope.error = true;
            });
    }
});

app.controller('searchCtrl', function($http, $scope, allArray, $location) {

    $scope.isEmpty = false;

    //query the search
    $scope.testClick = function(input) {
        var iLowerCase = input.toLowerCase();
        $http.get("http://localhost:3000/api/search/" + iLowerCase)
            .success(function(data) {
                if (data.length == 0) {
                    $scope.isEmpty = true;
                } else {
                    //set current array
                    allArray.setCurrentArray(data);
                    allArray.setCurrentType("search");
                    allArray.setLowerLimit(0);
                    allArray.setUpperLimit(10);
                    // console.log(data);
                    allArray.setCanGoForeward(true);
                    allArray.setCanGoBack(false);
                    $location.path('/list');
                }
            }).error(function(data) {

            });
    }
});

app.controller('sample', function($scope) {
    var i = 0,
        records = 100;
    $scope.items = [];
    while (i < records) {
        $scope.items.push({
            id: i
        });
        i += 1;
    }
});