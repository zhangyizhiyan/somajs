var InfoView = new Class({

	Extends: soma.View,

	init: function() {
		ko.applyBindings(this, this.domElement);
	},

	changeCase: function() {
		console.log('changeCase');
		this.dispatchEvent(new CaseEvent(CaseEvent.CHANGE));
	},

	dispose: function() {
		ko.cleanNode(this.domElement);
	}

});
InfoView.NAME = "InfoView";
