define(function(require, exports, module) {


	
	var userviewTemplate = require('baseurl/website/templates/webmanagement/user/userview.tpl');

	window.UserView = Backbone.View.extend({		
	
		
	        
		initialize: function(){
			this.render();
		},

		render: function(){
/* 			var template = _.template( $("#userview_template").html(), this.model.toJSON() );   */
			var template = _.template( userviewTemplate, this.model.toJSON() );
			
			$(this.el).html(template);
	        return this;
		},			
		
		
		events: {
	        "change" : "change",
	        "click #modify_button" : "SaveUser",
	        "click #del_button" : "delUser"	        
	    },	
	    
        change: function (event) {
	
	        // Apply the change to the model
	        var target = event.target;
	        var change = {};
	        change[target.name] = target.value; 
	        console.log(change);
	        this.model.set(change);	
	    },

	    SaveUser: function () {
	        var self = this;
	        console.log(this.model);
	        this.model.save(null, {
	            success: function () {	  
	            console.log('11');              
/*
	                alert('用户信息保存成功了啊啊');
	                self.render();
*/
	            },
	            error: function () {
	                alert('用户信息保存失败');
	            }
	        });
	    },
	
	    delUser: function () {
	        this.model.destroy({
	            success: function () {
	                alert('User deleted successfully');
	                window.history.back();
	            }
	        });
	        
	    },
	    
	    
	});


})


