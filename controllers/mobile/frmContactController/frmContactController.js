define({ 
  
  flag: true,
	
  onViewCreated: function() {
    this.view.preShow = this.preShow;
    this.view.onNavigate = this.onNavigate;
  },
  
  preShow: function(){
    this.view.lblContacts.onTouchStart = this.backToContacts;
    this.view.lblEdit.onTouchStart = this.editDetails;
    this.view.imgEditDone.onTouchStart = this.finishEditing;
    this.view.lblMobileNum.setEnabled(true);
    
    this.view.btnChangeTheme.onClick = this.onClick;
  },
  
  onNavigate: function(contactData){
    this.view.lblName.text = contactData.name ? contactData.name : "N/A";
	this.view.imgContact.src = contactData.img ? contactData.img : "option3.png";
    this.view.lblMobileNum.text = contactData.phone ? contactData.phone : "N/A";
    this.view.lblEmail.text = contactData.email ? contactData.email : "N/A";
    this.view.lblDetails.text = contactData.notes ? contactData.notes : "N/A";
  },
  
  backToContacts: function(){
    const ntf = new kony.mvc.Navigation("frmSegList");
    ntf.navigate();
  },
  
  editDetails: function() {
    if(this.flag){
      this.view.lblEdit.isVisible = false;
      this.view.imgEditDone.isVisible = true;
    
      this.view.lblMobileNum.setEnabled(true);
      this.view.lblEmail.setEnabled(true);
      this.view.lblDetails.setEnabled(true);
      
      this.flag = false;
    }else {
      this.view.lblEdit.isVisible = true;
      this.view.imgEditDone.isVisible = false;
    
      this.view.lblMobileNum.setEnabled(false);
      this.view.lblEmail.setEnabled(false);
      this.view.lblDetails.setEnabled(false);
      
      this.flag = true;
    }
    
  },
  
  finishEditing: function() {
    this.view.lblEdit.isVisible = true;
    this.view.imgEditDone.isVisible = false;
  },
  
  onClick: function(){
      let currTheme = kony.theme.getCurrentTheme();
      
      if(currTheme === "thmLight"){
        kony.theme.setCurrentTheme("thmDark", function () {}, function () {}); 
        this.view.btnChangeTheme.backgroundColor = "ffffff";
      }else {
        kony.theme.setCurrentTheme("thmLight", function () {}, function () {});
        this.view.btnChangeTheme.backgroundColor = "000000";
      }  
  }

 });