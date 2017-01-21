'use strict';

(function(){

class Dn4Component extends Card{
    constructor() {
        super();
        this.answers = [
            {label: "Oui", value: 'OUI'},
            {label: "Non", value: 'NON'}
        ];
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

    createPdf() {
       var date = new Date();
       var today = date.toLocaleDateString();

       var docDefinition = {
           header: 'Formulaire DN4 - ' + today,

           content: [

               { text: 'Identité du patient', style: 'header' },
               {
                   style: 'border',
                   text: '____________________________________________________________________'
               },

                  'Nom : ' + this.isFilledIn(this.patientLastname),
                  'Prénom : ' + this.isFilledIn(this.patientFirstname),


               { text: 'La douleur présente-t-elle des :', style: 'header' },
               {
                   style: 'border',
                   text: '____________________________________________________________________'
               },

               'Brûlures ? ' + this.isFilledIn(this.hasBurns),

               'Sensations de froid douloureux ? ' + this.isFilledIn(this.hasPainCold),

               'Décharges électriques ? ' + this.isFilledIn(this.hasElectricShock),

               { text: 'La douleur est-elle associée dans la même région à des :', style: 'header' },
               {
                   style: 'border',
                   text: '____________________________________________________________________'
               },

               'Fourmillements ? ' + this.isFilledIn(this.swarming),

               'Picotements ? ' + this.isFilledIn(this.tingling),

               'Engourdissements ? ' + this.isFilledIn(this.numbness),

               'Démangeaisons ? ' + this.isFilledIn(this.itching),

               { text: 'La douleur est-elle localisée dans un territoire où l\'examen met en évidence une :', style: 'header' },
               {
                   style: 'border',
                   text: '____________________________________________________________________'
               },

               'Hypoesthésie au tact ? ' + this.isFilledIn(this.tactHypoesthesia),

               'Hypoesthésie à la piqûre ? ' + this.isFilledIn(this.stingHypoesthesia),

               {
                   style: 'border',
                   text: '____________________________________________________________________'
               },

               'La douleur est-elle provoquée ou augmentée par un frottement ? ' + this.isFilledIn(this.friction)

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
}

angular.module('angularMaterialClinidamApp')
  .component('dn4', {
    templateUrl: 'app/forms/dn4/dn4.html',
    controller: Dn4Component,
    controllerAs: 'vm'
  });

})();
