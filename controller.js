angular.module('app', ['ngCart'])
    .controller('myCtrl', ['$scope', '$location', 'ngCart', function ($scope, $location, ngCart) {
        ngCart.setTaxRate(0);
        ngCart.setShipping(0);
        $scope.$watch(function(){return $location.path();},function(val){
            $scope.showCart = val == '/cart';
        });
        $scope.items = [
        {
            id: 'item1',
            price: 75,
            lastprice: 90,
            name: 'ring',
            img: 'shop_files/product1.png'
        },
        {
            id: 'item2',
            price: 75,
            lastprice: 90,
            name: 'ring',
            img: 'shop_files/product2.png',
            isnew: true
        },
        {
            id: 'item3',
            price: 75,
            lastprice: 90,
            name: 'ring',
            img: 'shop_files/product3.png'
        },
        {
            id: 'item4',
            price: 75,
            lastprice: 90,
            name: 'ring',
            img: 'shop_files/product1.png',
            isnew: true
        },
        {
            id: 'item5',
            price: 75,
            lastprice: 90,
            name: 'ring',
            img: 'shop_files/product2.png'
        },
        {
            id: 'item6',
            price: 75,
            lastprice: 90,
            name: 'ring',
            img: 'shop_files/product1.png',
            isnew: true
        },
        {
            id: 'item7',
            price: 75,
            lastprice: 90,
            name: 'ring',
            img: 'shop_files/product3.png'
        },
        {
            id: 'item8',
            price: 75,
            lastprice: 90,
            name: 'ring',
            img: 'shop_files/product1.png'
        }
    ];


}]);