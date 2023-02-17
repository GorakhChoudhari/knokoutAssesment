$(document).ready(function() {
    var viewModel = {
        Units: ko.observableArray([
            ["kilogram (kg)", " Miligram(mg)", "gram(g)"]
        ]),
    }
    ko.applyBindings(viewModel);
});