'use strict';

(function(){

class PsqiComponent{
  constructor() {
    this.inputsGroup = [
      {label: "Pas au cours du dernier mois", value: "Pas au cours du dernier mois"},
      {label: "Moins d'une fois par semaine", value: "Moins d'une fois par semaine"},
      {label: "1 à 2 fois par semaine", value: "1 à 2 fois par semaine"},
      {label: "3 ou 4 fois par semaine", value: "3 ou 4 fois par semaine"}
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

  getTwoDigitsHour(date) {
    if (typeof date !== 'undefined') {
      return ('0'+ date.getHours() ).slice(-2);
    }
  }

  getTwoDigitsMinutes(date) {
    if (typeof date !== 'undefined') {
      return ('0'+ date.getMinutes() ).slice(-2);
    }
  }

  getFormattedTime(date) {
    if(typeof date !== 'undefined') {
      var hours = this.getTwoDigitsHour(date);
      var minutes = this.getTwoDigitsMinutes(date);
      return hours + "h" + minutes;
    }
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

    var docDefinition =  {
        header:'Formulaire PSQI - ' + today,

        content: [
          { text: 'Identité du patient', style: 'header' },
          {
            style: 'border',
            text: '____________________________________________________________________'
          },

          'Nom : ' + isFilledIn(this.form.patientLastname),
          'Prénom : ' + isFilledIn(this.form.patientFirstname),

          { text: 'Temps de sommeil', style: 'header' },
          {
            style: 'border',
            text: '____________________________________________________________________'
          },

          'Heure de coucher habituelle au cours du mois dernier : ' + isFilledIn(this.getFormattedTime(this.form.usualSleepingHour)),
          'Minutes  avant de s\'endormir le soir au cours du mois dernier : ' + isFilledIn(this.form.minutesBeforeSleep),
          'Heure de réveil habituelle au cours du mois dernier : ' + isFilledIn(this.getFormattedTime(this.form.usualWakeUpHour)),
          'Nombre d\'heures de sommeil effectif par nuit au cours du mois dernier : ' + isFilledIn(this.form.effectiveSleep),

          { text: 'Troubles du sommeil au cours du mois dernier', style: 'header' },
          {
            style: 'border',
            text: '____________________________________________________________________'
          },

          'Difficultés à s\endormir en moins de 30 minutes : ' + isFilledIn(this.form.sleepAfter30Minutes),
          'Réveil avant l\'heure souhaitée : ' + isFilledIn(this.form.wakeUpBeforeEstimatedHour),
          'Réveil pour aller aux toilettes : ' + isFilledIn(this.form.wakeUpToGoToToilet),
          'Difficultés respiratoires durant le sommeil : ' + isFilledIn(this.form.breathingDifficultiesWhileSleeping),
          'Toux pendant la nuit : ' + isFilledIn(this.form.coughWhileSleeping),
          'Trop froid pendant le sommeil : ' + isFilledIn(this.form.coldWhileSleeping),
          'Trop chaud pendant le sommeil : ' + isFilledIn(this.form.warmWhileSleeping),
          'Mauvais rêves : ' + isFilledIn(this.form.badDreamsWhileSleeping),
          'Douleurs pendant le sommeil : ' + isFilledIn(this.form.painWhileSleeping),
          'Autres troubles : ' + isFilledIn(this.form.otherSleepTroubleReason),
          'Si autres troubles, fréquence d\apparition au cours du moins dernier : ' + isFilledIn(this.form.otherSleepTroubleReasonFrequency),
          'Évaluation de la qualité du sommeil du mois dernier (1-4): ' + isFilledIn(this.form.lastMonthSleepingQuality),

          { text: 'Questions complémentaires ', style: 'header' },
          {
            style: 'border',
            text: '____________________________________________________________________'
          },

          'Achat(s) de médicaments pour faciliter le sommeil au cours du dernier mois : ' + isFilledIn(this.form.medicineTakenToSleep),
          'Difficultés à rester éveiller pendant conduite, repas, ou autre au cours du dernier mois : ' + isFilledIn(this.form.difficultiesToStayAwake),
          'Degré auquel cela a représenté un problème pour avoir assez d\'enthousiasme : ' + isFilledIn(this.form.enthusiasmProblem),

          { text: 'Conjoint ou camarade de chambre ', style: 'header' },
          {
            style: 'border',
            text: '____________________________________________________________________'
          },

          'Conjoint(e) ou un(e) camarade de chambre : ' + isFilledIn(this.form.hasRoomMate),


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

    // Si le patient a un camarade de chambre, on rajoute une section au pdf
    if (this.hasRoomMate && this.hasRoomMate != 'NON') {
      docDefinition.content.push(
        { text: 'Vous ont-ils dit que vous aviez présenté : ', style: 'subheader' },
        {
          style: 'border',
          text: '____________________________________________________________________'
        },
        'Forts ronflements : ' + isFilledIn(this.form.noisySnoring),
        'Longues pauses repsiratoires pendant le sommeil : ' + isFilledIn(this.form.breathingBreaks),
        'Saccades ou secousses des jambes pendant le sommeil : ' + isFilledIn(this.form.leggsShakeWhileSleeping),
        'Épisodes de désorientation/ confusion pendant sommeil : ' + isFilledIn(this.form.periodsOfConfusion),
        'Autre(s) motif(s) d\'agitation : ' + isFilledIn(this.form.otherAgitation)
      );
    }

    this.pdf = docDefinition;
  }
}

angular.module('angularMaterialClinidamApp')
  .component('psqi', {
    templateUrl: 'app/forms/psqi/psqi.html',
    controller: PsqiComponent,
    controllerAs: 'vm'
  });

})();
