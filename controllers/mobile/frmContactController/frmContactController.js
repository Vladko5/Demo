define({ 
	
  onViewCreated: function() {
    this.view.onNavigate = this.onNavigate;
  },
  
  onNavigate: function(contactData){
    this.view.lblContacts.onTouchStart = this.backToContacts;
    this.view.lblEdit.onTouchStart = this.editDetails;
    this.view.imgEditDone.onTouchStart = this.finishEditing;

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
    let editMobileBx = this.view.txtBxEditMobile;
    let mobileBx = this.view.lblMobileNum;
    editMobileBx.text = mobileBx.text;
    editMobileBx.isVisible = true;
    mobileBx.isVisible = false;
    this.view.lblEdit.isVisible = false;
    this.view.imgEditDone.isVisible = true;
  },
  
  finishEditing: function() {
    let editMobileBx = this.view.txtBxEditMobile;
    let mobileBx = this.view.lblMobileNum;
    mobileBx.text = editMobileBx.text;
    editMobileBx.isVisible = false;
    mobileBx.isVisible = true;
    this.view.lblEdit.isVisible = true;
    this.view.imgEditDone.isVisible = false;
  }

 });