define({ 
	segDataList: [
      {
        name: "H. Stoichkov",
        phone: "0896123321",
        email: "hristo@abv.bg",
        img: "stoichkov.png",
        notes: "aincu cvaincu drun"
      },
      {
        name: "Lionel Messi",
        phone: "0896111222",
        email: "messi@abv.bg",
        img: "messi.png",
        notes: "meskata"
      },
      {
        name: "Cosmin Moti",
        phone: "0896113211",
      	email: "moci@abv.bg",
      	img: "moci.png",
      	notes: "Ludogorec"
      },
      {
        name: "Kubrat Pulev",
      	phone: "0897876123",
      	email: "kobra@abv.bg",
      	img: "kobrata.png",
      	notes: "produljavame napred"
      },
      {
        name: "K. Domuschiev",
      	phone: "0897345678",
      	email: "kiro@abv.bg",
      	img: "kiro.png",
      	notes: "domus aga"
      },
      {
        name: "Tisho Peshev",
      	phone: "0896111222",
      	email: "tisho@abv.bg",
      	img: "dwayne.png",
      	notes: "dasfafafsffaqfdasf"
      },
      {
        name: "Pesho Peshev",
      	phone: "0896111222",
      	email: "pesho@abv.bg",
      	img: "dwayne.png",
      	notes: "dasfafafsffaqfdasf"
      },
      {
        name: "Pesho Peshev",
      	phone: "0896111222",
      	email: "pesho@abv.bg",
      	img: "dwayne.png",
      	notes: "dasfafafsffaqfdasf"
      },
      {
        name: "Pesho Peshev",
      	phone: "0896111222",
      	email: "pesho@abv.bg",
      	img: "dwayne.png"
      }
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
          "imgPersonFace": {"src": contact.img},
          "lblStrip": {"width": "1%"}
        });
      });
    }

});