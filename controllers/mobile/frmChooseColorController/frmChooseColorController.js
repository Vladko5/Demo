define({ 
	onViewCreated: function(){
      this.view.preShow = this.preShow;
    },
  
  	preShow: function(){
      this.view.flxChooseColor.onTouchStart1 = this.click;
      this.view.flxChooseColor.goBack = this.goBack;
      
    },
  
  	click: function() {  
      switch(this.view.flxChooseColor.text){
        case "red":
          this.view.flxChooseColor.color = "sknRed";
          break;
        case "blue":
          this.view.flxChooseColor.color = "sknBlue";
          break;
        default:
          this.view.flxChooseColor.color = "sknBtnPaint";
      }
	},
  
  	goBack: function(){
      var nvg = new kony.mvc.Navigation("frmSegList");
      nvg.navigate();
    }

 });