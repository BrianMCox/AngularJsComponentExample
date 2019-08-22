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

            vm.onQuoteSelected = function() {
                alert('quote selected yo!');
            }

            vm.hitTheGas = function() {
                vm.isSpeedEightyEightMph = true;
            }
        }
})();