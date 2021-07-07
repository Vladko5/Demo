define({ 
	segDataList: [
      {name: "Pesho Peshev",
      phone: "0896123321",
      email: "pesho@abv.bg",
      img: "dwayne.jpg",
      notes: "dasfafafsffaqfdasf"},
      {name: "Ivo Peshev",
      phone: "0896111222",
      email: "ivo@abv.bg",
      img: "dwayne.jpg",
      notes: "dasfafafsffaqfdasf"},
      {name: "Moci Peshev",
      phone: "0896113211",
      email: "moci@abv.bg",
      img: "dwayne.jpg",
      notes: "dasfafafsffaqfdasf"},
      {name: "Sasho Peshev",
      phone: "0897876123",
      email: "sasho@abv.bg",
      img: "dwayne.jpg",
      notes: "dasfafafsffaqfdasf"},
      {name: "Miho Peshev",
      phone: "0897345678",
      email: "miho@abv.bg",
      img: "dwayne.jpg",
      notes: "dasfafafsffaqfdasf"},
      {name: "Tisho Peshev",
      phone: "0896111222",
      email: "tisho@abv.bg",
      img: "dwayne.jpg",
      notes: "dasfafafsffaqfdasf"},
      {name: "Pesho Peshev",
      phone: "0896111222",
      email: "pesho@abv.bg",
      img: "dwayne.jpg",
      notes: "dasfafafsffaqfdasf"},
      {name: "Pesho Peshev",
      phone: "0896111222",
      email: "pesho@abv.bg",
      img: "dwayne.jpg",
      notes: "dasfafafsffaqfdasf"},
      {name: "Pesho Peshev",
      phone: "0896111222",
      email: "pesho@abv.bg",
      img: "dwayne.jpg"}
    ],
  
  	formatedData: [],
  
  	onViewCreated: function() {
  	  this.view.init = this.init;
      this.view.preShow = this.preShow;
	},
  
  	init: function() {
      this.formatedSegmentData.call(this, this.segDataList, this.formatedData);
      this.view.segList.onRowClick = this.onRowClick;
    },
  
  	preShow: function() {
  	  this.view.segList.setData(this.formatedData);
	},
  
  	onRowClick: function() {
  	  const indexOfSelectedRow = this.view.segList.selectedRowIndex[1];
      const contactData = this.segDataList[indexOfSelectedRow];
      const ntf = new kony.mvc.Navigation("frmContact");
      ntf.navigate(contactData);
	},
  
  	formatedSegmentData: function(responseData, formatedData) {
      responseData.forEach(function(contact) {
        formatedData.push({
          "lblName": {"text": contact.name},
          "lblNumber": {"text": contact.phone},
          "lblEmail": {"text": contact.email},
          "lblImg": {"text": contact.img},
          "lblStrip": {"width": "1%"}
        });
      });
    }

});