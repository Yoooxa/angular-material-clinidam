'use strict';

(function(){

class IsiComponent{
  constructor() {
    this.sleepingDifficulties = [
        {label: "Aucunement", value: "Aucunement"},
        {label: "Légèrement", value: "Légerement"},
        {label: "Moyennement", value: "Moyennement"},
        {label: "Considérablement", value: "Considérablement"},
        {label: "Extrêmement", value: "Extrêmement"}
    ];
    this.cardNumber = 1;

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

  createPdf() {
    var date = new Date();
    var today = date.toLocaleDateString();

    var isFilledIn = this.isFilledIn;

    var docDefinition = {
      header: 'Formulaire ISI - ' + today,

      content: [

        {text: 'Identité du patient', style: 'header' },
        {
          style: 'border',
          text: '____________________________________________________________________'
        },

        'Nom : ' + isFilledIn(this.patientLastname),
        'Prénom : ' + isFilledIn(this.patientFirstname),

        {text: 'Difficultés du sommeil', style: 'header' },
        {
          style: 'border',
          text: '____________________________________________________________________'
        },

        'Difficultés à s\'endormir : ' + isFilledIn(this.sleepingDifficulty),
        'Difficultés à rester endormi(e) : ' + isFilledIn(this.stayingSleepDifficulty),
        'Difficultés à se réveiller le matin : ' + isFilledIn(this.wakeUpProblem),

        {text: 'Satisfaction/ Insatisfaction du sommeil', style: 'header' },
        {
          style: 'border',
          text: '____________________________________________________________________'
        },

        'Satisfaction du sommeil actuel : ' + isFilledIn(this.sleepingSatisfaction),
        'Inquiétude par rapport aux difficultés de sommeil actuelles: ' + isFilledIn(this.sleepingWorries),
        'Évaluation de la qualité du sommeil : ' + isFilledIn(this.sleepingQuality),
        'Sensation lors du réveil le matin : ' + isFilledIn(this.morningMood),

        {text: 'Visibilité des difficultés de sommeil', style: 'header' },
        {
          style: 'border',
          text: '____________________________________________________________________'
        },

        'Perturbation du fonctionnement quotidien : ' + isFilledIn(this.dailyPerturbation),
        'Diminution de la qualité de vie apparente pour les autres: ' + isFilledIn(this.badLifeQuality),
        'Détérioration de la qualité de vie : ' + isFilledIn(this.lifeQualityDecrease),
        'Fatigue durant la journée : ' + isFilledIn(this.dayTired),
        'Impact sur la concentration ou la mémoire : ' + isFilledIn(this.concentrationProblem),
        'Impact sur les relations interpersonnelles : ' + isFilledIn(this.persoRelationProblem),
        'Impact sur l\'humeur : ' + isFilledIn(this.moodProblem),
        'Impact sur les activités sociales ou de loisir : ' + isFilledIn(this.activityProblem),



      ],

      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 20, 0, -10]
        },
        subheader: {
          fontSize: 15,
          bold: true,
          margin: [0, 20, 0, -10]
        },
        border: {
          margin: [0, 0, 0, 10]
        }
      }
    }

    this.pdf = docDefinition;
  }
}

angular.module('angularMaterialClinidamApp')
  .component('isi', {
    templateUrl: 'app/forms/isi/isi.html',
    controller: IsiComponent,
    controllerAs: 'vm'
  });

})();
