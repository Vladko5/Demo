define(function() {
	
	return {
      	onViewCreated: function() {
          this.view.onTouchStart = this.alertTxt;
        },
      	
		alertTxt: function() {
          alert(this.view.lblSocialTxt.text);
        }
	};
});