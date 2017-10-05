angular.module('swagShop').component('detailsComponent', {
    templateUrl: 'app/details/details.template.html',
    controllerAs: 'detailsCtrl',
    controller: function(swagSrvc, $stateParams, cartSrvc ){
        this.swag = swagSrvc.swag;
        this.item = swagSrvc.swag.find(swag=> swag.id == $stateParams.id);
        this.addToCart = function(item){
            cartSrvc.add(item);
        };
    }
});