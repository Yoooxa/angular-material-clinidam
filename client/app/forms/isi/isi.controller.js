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

    this.form = {};

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
      header: 'Formulaire ISI - ' + today,

      content: [

        {text: 'Identité du patient', style: 'header' },
        {
          style: 'border',
          text: '____________________________________________________________________'
        },

        'Nom : ' + isFilledIn(this.form.patientLastname),
        'Prénom : ' + isFilledIn(this.form.patientFirstname),

        {text: 'Difficultés du sommeil', style: 'header' },
        {
          style: 'border',
          text: '____________________________________________________________________'
        },

        'Difficultés à s\'endormir : ' + isFilledIn(this.form.sleepingDifficulty),
        'Difficultés à rester endormi(e) : ' + isFilledIn(this.form.stayingSleepDifficulty),
        'Difficultés à se réveiller le matin : ' + isFilledIn(this.form.wakeUpProblem),

        {text: 'Satisfaction/ Insatisfaction du sommeil', style: 'header' },
        {
          style: 'border',
          text: '____________________________________________________________________'
        },

        'Satisfaction du sommeil actuel : ' + isFilledIn(this.form.sleepingSatisfaction),
        'Inquiétude par rapport aux difficultés de sommeil actuelles: ' + isFilledIn(this.form.sleepingWorries),
        'Évaluation de la qualité du sommeil : ' + isFilledIn(this.form.sleepingQuality),
        'Sensation lors du réveil le matin : ' + isFilledIn(this.form.morningMood),

        {text: 'Visibilité des difficultés de sommeil', style: 'header' },
        {
          style: 'border',
          text: '____________________________________________________________________'
        },

        'Perturbation du fonctionnement quotidien : ' + isFilledIn(this.form.dailyPerturbation),
        'Diminution de la qualité de vie apparente pour les autres: ' + isFilledIn(this.form.badLifeQuality),
        'Détérioration de la qualité de vie : ' + isFilledIn(this.form.lifeQualityDecrease),
        'Fatigue durant la journée : ' + isFilledIn(this.form.dayTired),
        'Impact sur la concentration ou la mémoire : ' + isFilledIn(this.form.concentrationProblem),
        'Impact sur les relations interpersonnelles : ' + isFilledIn(this.form.persoRelationProblem),
        'Impact sur l\'humeur : ' + isFilledIn(this.form.moodProblem),
        'Impact sur les activités sociales ou de loisir : ' + isFilledIn(this.form.activityProblem),



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
