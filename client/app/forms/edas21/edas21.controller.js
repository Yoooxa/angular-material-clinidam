'use strict';

(function(){

class Edas21Component{
  constructor() {
    this.inputsGroup = [
      {label: "Pas du tout", value: "Pas du tout"},
      {label: "Peu", value: "Peu"},
      {label: "Beaucoup", value: "Beaucoup"},
      {label: "Totalement", value: "Totalement"},
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

    var docDefinition =  {
      header:'Formulaire PSQI - ' + today,

      content: [

        { text: 'Identité du patient', style: 'header' },
        {
          style: 'border',
          text: '____________________________________________________________________'
        },

        'Nom : ' + isFilledIn(this.patientLastname),
        'Prénom : ' + isFilledIn(this.patientFirstname),

        { text: 'Au cours du dernier mois : ', style: 'header' },
        {
          style: 'border',
          text: '____________________________________________________________________'
        },

        'Difficultés à décompresser : ' + isFilledIn(this.decompressProblem),
        'Conscient(e) d\'avoir la bouche sèche : ' + isFilledIn(this.mouthProblem),
        'Impression de ne pas ressentir d\'émotion positive : ' + isFilledIn(this.noPositiveMood),
        'Difficultés à respirer sans faire d\'effort physique : ' + isFilledIn(this.hardBreath),
        'Difficultés à commencer de nouvelles activités : ' + isFilledIn(this.hardNewActivities),
        'Tendance à réagir de façon exagérée : ' + isFilledIn(this.reactExaggeratedly),
        'Tremblements (ex: mains, ...) : ' + isFilledIn(this.tremblingProblem),
        'Pensées à des situations de paniques : ' + isFilledIn(this.situationsWorry),
        'Sentiment de ne rien envisager avec le plaisir : ' + isFilledIn(this.noPleasure),
        'S\'est aperçu(e) qu\'il(elle) devenait agité(e) : ' + isFilledIn(this.beAgitated),
        'Difficultés à se détendre : ' + isFilledIn(this.loosenProblem),
        'S\'est senti(e) triste et déprimé(e) : ' + isFilledIn(this.beSad),
        'S\'est aperçu qu\'il(elle) impatient(e) lorsque retardé(e) : ' + isFilledIn(this.beLate),
        'Sentiment d\'être prise(e) de panique : ' + isFilledIn(this.bePanicked),
        'Incapable de se sentir enthousiaste : ' + isFilledIn(this.beEnthusiastic),
        'Sentiment de ne pas valoir grand chose : ' + isFilledIn(this.beNothing),
        ' S\'est aperçu(e) qu\'il(elle) était très irritable : ' + isFilledIn(this.beIrritable),
        'A eu conscience de palpitations cardiaques en l\'absence d\'effort physique : ' + isFilledIn(this.heartPalpitations),
        'A eu peur sans bonne raison : ' + isFilledIn(this.beScared),
        'A eu l\'impression que la vie n\'avait pas de sens : ' + isFilledIn(this.lifeNoSense)


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
  .component('edas21', {
    templateUrl: 'app/forms/edas21/edas21.html',
    controller: Edas21Component,
    controllerAs: 'vm'
  });

})();
