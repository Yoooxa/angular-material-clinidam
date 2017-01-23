'use strict';

(function(){

class Dn4Component{
    constructor($http) {
        this.answers = [
            {label: "Oui", value: 'OUI'},
            {label: "Non", value: 'NON'}
        ];
        this.cardNumber = 1;

        this.form = {};
        this.http = $http;
    }

    setPreviousCardNumber() {
        this.cardNumber --;
    }

    setNextCardNumber() {
        this.cardNumber ++;
    }

    isFilledIn(field) {
        if( typeof field !== 'undefined' ) {
            return field;
        } else {
            return "N/D";
        }
    }

    openPdf() {
        this.createPdf();
        pdfMake.createPdf(this.pdf).open();
    }

    downloadPdf() {
      this.createPdf();
      pdfMake.createPdf(this.pdf).download();
    }

    createPdf() {
       var date = new Date();
       var today = date.toLocaleDateString();

       var isFilledIn = this.isFilledIn;

       var docDefinition = {
           header: 'Formulaire DN4 - ' + today,

           content: [

               { text: 'Identité du patient', style: 'header' },
               {
                   style: 'border',
                   text: '____________________________________________________________________'
               },

                  'Nom : ' + isFilledIn(this.form.patientLastname),
                  'Prénom : ' + isFilledIn(this.form.patientFirstname),


               { text: 'La douleur présente-t-elle des :', style: 'header' },
               {
                   style: 'border',
                   text: '____________________________________________________________________'
               },

               'Brûlures ? ' + isFilledIn(this.form.hasBurns),

               'Sensations de froid douloureux ? ' + isFilledIn(this.form.hasPainCold),

               'Décharges électriques ? ' + isFilledIn(this.form.hasElectricShock),

               { text: 'La douleur est-elle associée dans la même région à des :', style: 'header' },
               {
                   style: 'border',
                   text: '____________________________________________________________________'
               },

               'Fourmillements ? ' + isFilledIn(this.form.swarming),

               'Picotements ? ' + isFilledIn(this.form.tingling),

               'Engourdissements ? ' + isFilledIn(this.form.numbness),

               'Démangeaisons ? ' + isFilledIn(this.form.itching),

               { text: 'La douleur est-elle localisée dans un territoire où l\'examen met en évidence une :', style: 'header' },
               {
                   style: 'border',
                   text: '____________________________________________________________________'
               },

               'Hypoesthésie au tact ? ' + isFilledIn(this.form.tactHypoesthesia),

               'Hypoesthésie à la piqûre ? ' + isFilledIn(this.form.stingHypoesthesia),

               {
                   style: 'border',
                   text: '____________________________________________________________________'
               },

               'La douleur est-elle provoquée ou augmentée par un frottement ? ' + isFilledIn(this.form.friction)

           ],

           styles: {
               header: {
                   fontSize: 18,
                   bold: true,
                   margin: [0, 20, 0, -10]
               },
               border: {
                   margin: [0, 0, 0, 10]
               }
           }
       };

      this.pdf =  docDefinition;
  }

  sendForm() {
    var $http = this.http;

    var config = {};

    $http.post('/api/formDn4', this.form, config)
      .then(
        function(response){
          // success callback

        },
        function(error){
          // failure callback
          console.error(error);
        }
      );

  }
}

angular.module('angularMaterialClinidamApp')
  .component('dn4', {
    templateUrl: 'app/forms/dn4/dn4.html',
    controller: Dn4Component,
    controllerAs: 'vm'
  });

})();
