angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.page2', {
    url: '/sa_enroll',
    views: {
      'tab1': {
        templateUrl: 'templates/page2.html',
        controller: 'page2Ctrl'
      }
    }
  })

  .state('tabsController.page5', {
    url: '/forum',
    views: {
      'tab6': {
        templateUrl: 'templates/page5.html',
        controller: 'page5Ctrl'
      }
    }
  })

  .state('tabsController.page6', {
    url: '/setting',
    views: {
      'tab3': {
        templateUrl: 'templates/page6.html',
        controller: 'page6Ctrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('page7', {
    url: '/login',
    templateUrl: 'templates/page7.html',
    controller: 'page7Ctrl'
  })

  .state('SkyLighter', {
    url: '/register',
    templateUrl: 'templates/SkyLighter.html',
    controller: 'SkyLighterCtrl'
  })

  .state('page9', {
    url: '/sa_select',
    templateUrl: 'templates/page9.html',
    controller: 'page9Ctrl'
  })

  .state('page10', {
    url: '/sa_result',
    templateUrl: 'templates/page10.html',
    controller: 'page10Ctrl'
  })

  .state('tabsController.page11', {
    url: '/smh_register',
    views: {
      'tab4': {
        templateUrl: 'templates/page11.html',
        controller: 'page11Ctrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.page12'
      2) Using $state.go programatically:
        $state.go('tabsController.page12');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab2/smh_friends
      /page1/tab5/smh_friends
  */
  .state('tabsController.page12', {
    url: '/smh_friends',
    views: {
      'tab2': {
        templateUrl: 'templates/page12.html',
        controller: 'page12Ctrl'
      },
      'tab5': {
        templateUrl: 'templates/page12.html',
        controller: 'page12Ctrl'
      }
    }
  })

  .state('page13', {
    url: '/smh_meet',
    templateUrl: 'templates/page13.html',
    controller: 'page13Ctrl'
  })

  .state('page14', {
    url: '/smh_chat',
    templateUrl: 'templates/page14.html',
    controller: 'page14Ctrl'
  })

  .state('page15', {
    url: '/page15',
    templateUrl: 'templates/page15.html',
    controller: 'page15Ctrl'
  })

$urlRouterProvider.otherwise('/login')

  

});