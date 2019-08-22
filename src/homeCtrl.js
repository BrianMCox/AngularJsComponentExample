(function() {
    angular
        .module('myApp')
        .controller('HomeCtrl', HomeCtrlFn);
    
        //HomeCtrlFn.$inject = ['$scope'];
        function HomeCtrlFn() {
            var vm = this;

            vm.characters = ['Biff', 'Doc', 'Lorraine', 'George', 'Marty'];
            vm.selectedCharacter = null;
            vm.isSpeedEightyEightMph = false;
            vm.quoteCount = 0;

            vm.onQuoteSelected = function() {
                vm.quoteCount += 1;
            }

            vm.hitTheGas = function() {
                vm.isSpeedEightyEightMph = true;
            }
        }
})();