define(function(require, exports, module) {



	var leftmenuviewTemplate = require('baseurl/website/templates/webmanagement/leftmenu.tpl');
	
	window.LeftMenuView = Backbone.View.extend({
		
		initialize: function () {
	        this.render();
	    },
	
	    render: function () {
   
			var template = _.template( leftmenuviewTemplate );
			
			$(this.el).html(template);
			
	        return this;
	    }
	});


})


