'use strict';

function Menu() {
  // Service logic
  // ...

    var self = this;

    self.links = {};

    self.links['simple-sheet'] = {
        sref: "simple-sheet",
        title: "Fiche clinique dépistage systématique",
        picture: "http://byrushan.com/projects/ma/1-6-1/jquery/light/img/headers/sm/2.png",
        hassubmenu: false,
        blockedRoles: []
    };

    self.links['complex-sheet'] = {
        sref: "complex-sheet",
        title: "Fiche clinique complète",
        picture: "http://byrushan.com/projects/ma/1-6-1/jquery/light/img/headers/sm/2.png",
        hassubmenu: false,
        blockedRoles: []
    };

    self.links['dn4-form'] = {
        sref: "dn4",
        title: "Formulaire DN4",
        blockedRoles: []
    };

    self.links['isi-form'] = {
        sref: "isi",
        title: "Formulaire ISI",
        blockedRoles: []
    };

    self.links['psqi-form'] = {
        sref: "psqi",
        title: "Formulaire PSQI",
        blockedRoles: []
    };

    self.links['edas21-form'] = {
        sref: "edas21",
        title: "Formulaire EDAS21",
        blockedRoles: []
    };

    self.links['annex-forms'] = {
        sref: "annex-forms",
        title: "Fiches annexes de la fiche clinique",
        picture: "http://byrushan.com/projects/ma/1-6-1/jquery/light/img/headers/sm/2.png",
        hassubmenu: true,
        submenu: [
            self.links['dn4-form'],
            self.links['isi-form'],
            self.links['psqi-form'],
            self.links['edas21-form']
        ],
        blockedRoles: []
    };

    self.links['stats'] = {
        sref: "stats",
        title: "Statistiques",
        picture: "http://byrushan.com/projects/ma/1-6-1/jquery/light/img/headers/sm/2.png",
        hassubmenu: false,
        blockedRoles: []
    };

    self.links['patient-sheets'] = {
        sref: "patient-sheets",
        title: "Fiches des patients",
        picture: "http://byrushan.com/projects/ma/1-6-1/jquery/light/img/headers/sm/2.png",
        hassubmenu: false,
        blockedRoles: []
    };

    self.links['admin-panel'] = {
        sref: "admin-panel",
        title: "Administration",
        picture: "http://byrushan.com/projects/ma/1-6-1/jquery/light/img/headers/sm/2.png",
        hassubmenu: false,
        blockedRoles: []
    };

    self.menu = {};
    self.menu['main'] = [
        self.links['simple-sheet'],
        self.links['complex-sheet'],
        self.links['annex-forms'],
        self.links['stats'],
        self.links['patient-sheets'],
        self.links['admin-panel']

    ];


    function get(string) {
        return self.menu[string.toLowerCase()];
    }


    // Public API here
  return {
    get: get
  };
}


angular.module('angularMaterialClinidamApp')
  .factory('Menu', Menu);
