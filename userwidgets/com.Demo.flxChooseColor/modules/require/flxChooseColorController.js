define(function() {

  	var paint = function() {
       this.view.btnPaint.skin = this._color;
    };
  
	return {
		constructor: function(baseConfig, layoutConfig, pspConfig) {
          	this._color = "sknBtnPaint";
          	this._paint = paint;
          
          	this.view.btnPaint.onClick = this._paint.bind(this);    
		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {     
          	defineGetter(this, 'color', function() {
              return this._color;
            });
          
          	defineSetter(this, "color", function(value){
              this._color = value;
            });
		}
	};
});