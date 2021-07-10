define({ 
	
  onViewCreated: function() {
    this.view.preShow = this.preShow;
    this.view.onNavigate = this.onNavigate;
  },
  
  preShow: function(){
    this.view.lblContacts.onTouchStart = this.moveToPage.bind(this, "frmSegList");
    this.view.lblNext.onTouchStart = this.moveToPage.bind(this, "frmChooseColor");
    
    this.view.lblEdit.onTouchStart = this.editDetails;
    this.view.imgEditDone.onTouchStart = this.finishEditing;
    
    this.view.txtMobileNum.setEnabled(false);
    this.view.txtEmail.setEnabled(false);
    this.view.txtDetails.setEnabled(false);
    
    this.view.swtchTheme.onSlide = this.changeTheme;
  },
  
  onNavigate: function(contactData){
    this.view.lblName.text = contactData.name ? contactData.name : "N/A";
	this.view.imgContact.src = contactData.img ? contactData.img : "option3.png";
    this.view.txtMobileNum.text = contactData.phone ? contactData.phone : "N/A";
    this.view.txtEmail.text = contactData.email ? contactData.email : "N/A";
    this.view.txtDetails.text = contactData.notes ? contactData.notes : "N/A";
  },
  
  moveToPage: function(page){
    let ntf = new kony.mvc.Navigation(page);
    ntf.navigate();  
  },
  
  editDetails: function() {
      this.view.lblEdit.isVisible = false;
      this.view.imgEditDone.isVisible = true;
    
      this.view.txtMobileNum.setEnabled(true);
      this.view.txtEmail.setEnabled(true);
      this.view.txtDetails.setEnabled(true);
  },
  
  finishEditing: function() {
      this.view.lblEdit.isVisible = true;
      this.view.imgEditDone.isVisible = false;
    
      this.view.txtMobileNum.setEnabled(false);
      this.view.txtEmail.setEnabled(false);
      this.view.txtDetails.setEnabled(false);
  },
  
  changeTheme: function(){
    let currTheme = kony.theme.getCurrentTheme();
    
    if(currTheme === "thmLight"){
        kony.theme.setCurrentTheme("thmDark", function () {}, function () {}); 
    }else {
        kony.theme.setCurrentTheme("thmLight", function () {}, function () {});
    }
  }

 });