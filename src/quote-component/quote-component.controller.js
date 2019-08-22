(function () {
    function QuoteComponentController() {
        var ctrl = this;

        ctrl.selectedQuote = null;
        ctrl.selectedCharacter = null;
        ctrl.quotes = [
            { character: 'Doc', text: 'Great Scott!' },
            { character: 'Marty', text: 'Hey, Doc, we better back up. We don\'t have enough road to get up to 88.' },
            { character: 'Doc', text: 'Roads? Where we\'re going, we don\'t need roads.' },
            { character: 'Marty', text: 'Whoa. Wait a minute, Doc. Are you trying to tell me that my mother has got the hots for me?' },
            { character: 'Lorraine', text: 'Well, that is your name, isn\'t it? Calvin Klein? It\'s written all over your underwear.' },
            { character: 'Biff', text: 'Since you\'re new here, I-I\'m gonna cut you a break, today. So, why don\'t you make like a tree and get outta here?' },
            { character: 'George', text: 'Last night, Darth Vader came down from Planet Vulcan and told me that if I didn’t take Lorraine out, that he’d melt my brain.' },
            { character: 'Biff', text: 'What are you looking at, butthead?' },
            { character: 'Doc', text: 'There’s that word again: ‘heavy.’ Why are things so heavy in the future? Is there a problem with the Earth’s gravitational pull?' },
            { character: 'George', text: 'I’m your density. I mean, your destiny.' },
            { character: 'Doc', text: '1.21 gigawatts!' },
            { character: 'Marty', text: 'I g-guess you guys aren\'t ready for that yet. But your kids are gonna love it.' },
        ];

        ctrl.$onChanges = function(changes) {
            if (!changes.character.currentValue) { return; }
            
            var selectedCharacter = changes.character.currentValue;
            var filteredQuotes = ctrl.quotes.filter(q => q.character === selectedCharacter);
            var randomIndex = Math.floor(Math.random() * (filteredQuotes.length));
            ctrl.selectedQuote = filteredQuotes[randomIndex];
            ctrl.onQuoteRetrieved(ctrl.selectedQuote);
        }
    }

    angular
        .module('myApp')
        .component('bttfQuotes', {
            bindings: {
                character: '<',
                onQuoteRetrieved: '&'
            },
            controller: QuoteComponentController,
            templateUrl: 'src/quote-component/quote-component.html'
        });
})();