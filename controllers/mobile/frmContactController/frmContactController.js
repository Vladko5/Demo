define({ 
	
  onViewCreated: function() {
    this.view.onNavigate = this.onNavigate;
  },
  
  onNavigate: function(contactData){
    this.view.lblContacts.onTouchStart = this.onTouchStart;

    this.view.lblName.text = contactData.name ? contactData.name : "N/A";
	this.view.imgContact.src = contactData.img ? contactData.img : "option3.png";
    this.view.lblMobileNum.text = contactData.phone ? contactData.phone : "N/A";
    this.view.lblEmail.text = contactData.email ? contactData.email : "N/A";
    this.view.lblDetails.text = contactData.notes ? contactData.notes : "N/A";
  },
  
  onTouchStart: function(){
    const ntf = new kony.mvc.Navigation("frmSegList");
    ntf.navigate();
  }

 });