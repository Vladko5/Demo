define(function() {
  
  	const colors = {
      	red: "f50a0a",
       	blue: "0aa3f5",
      	green: "31f50a",
      	default: "a8a8a8"
    };
  
  	const paint = function() {
       const color = this.view.txtBxColors.text;
      
       switch(color) {
         case "red":
           this.view.flxContPaint.backgroundColor = colors.red;
           break;
         case "blue":
           this.view.flxContPaint.backgroundColor = colors.blue;
           break;
         case "green":
           this.view.flxContPaint.backgroundColor = colors.green;
           break;
         default:
           this.view.flxContPaint.backgroundColor = colors.default;
       }
    };
  
  	const goBack = function(){
      const ntf = new kony.mvc.Navigation("frmSegList");
      ntf.navigate();
    };
	
	return {
		constructor: function(baseConfig, layoutConfig, pspConfig) {
            this.view.lblBack.onTouchStart = goBack;
          	this.view.btnPaint.onClick = paint.bind(this);
            
		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {
  		
		}
	};
});