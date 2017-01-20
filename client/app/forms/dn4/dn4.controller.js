'use strict';

(function(){

class Dn4Component extends Card{
    constructor() {
        super();
        this.answers = [
            {label: "Oui", value: 'OUI'},
            {label: "Non", value: 'NON'}
        ]
    }

    openPdf() {

        this.createPdf();
        pdfMake.createPdf(this.pdf).open();
    }

    createPdf() {
         var docDefinition = {
             header: 'Formulaire DN4',

             content: [

                 { text: 'Identité du patient', style: 'header' },
                 {
                     style: 'border',
                     text: '____________________________________________________________________'
                 },

                    'Nom : ' + this.patientLastname,
                    'Prénom : ' + this.patientFirstname,


                 { text: 'La douleur présente-t-elle des :', style: 'header' },
                 {
                     style: 'border',
                     text: '____________________________________________________________________'
                 },

                 'Brûlures ? ' + this.hasBurns,

                 'Sensations de froid douloureux ? ' + this.hasPainCold,

                 'Décharges électriques ? ' + this.hasElectricShock,

                 { text: 'La douleur est-elle associée dans la même région à des :', style: 'header' },
                 {
                     style: 'border',
                     text: '____________________________________________________________________'
                 },

                 'Fourmillements ? ' + this.swarming,

                 'Picotements ? ' + this.tingling,

                 'Engourdissements ? ' + this.numbness,

                 'Démangeaisons ? ' + this.itching,

                 { text: 'La douleur est-elle localisée dans un territoire où l\'examen met en évidence une :', style: 'header' },
                 {
                     style: 'border',
                     text: '____________________________________________________________________'
                 },

                 'Hypoesthésie au tact ? ' + this.tactHypoesthesia,

                 'Hypoesthésie à la piqûre ? ' + this.stingHypoesthesia,

                 {
                     style: 'border',
                     text: '____________________________________________________________________'
                 },

                 {text: 'La douleur est-elle provoquée ou augmentée par un frottement ? ' + this.friction, style: 'header' }

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
