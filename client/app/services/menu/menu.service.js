'use strict';

function Menu() {
  // Service logic
  // ...

    var self = this;

    self.links = {};

    self.links['simple-sheet'] = {
        sref: "simple-sheet",
        title: "Fiche clinique simple",
        picture: "http://byrushan.com/projects/ma/1-6-1/jquery/light/img/headers/sm/2.png",
        hassubmenu: false,
        blockedRoles: [],
        isVisibleByGuest: true,
        isVisibleByUser: true
    };

    self.links['complex-sheet'] = {
        sref: "complex-sheet",
        title: "Fiche clinique complexe",
        picture: "http://byrushan.com/projects/ma/1-6-1/jquery/light/img/headers/sm/2.png",
        hassubmenu: false,
        blockedRoles: [],
        isVisibleByGuest: false,
        isVisibleByUser: true
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
        title: "Fiches annexes",
        picture: "http://byrushan.com/projects/ma/1-6-1/jquery/light/img/headers/sm/2.png",
        hassubmenu: true,
        submenu: [
            self.links['dn4-form'],
            self.links['isi-form'],
            self.links['psqi-form'],
            self.links['edas21-form']
        ],
        blockedRoles: [],
        isVisibleByGuest: true,
        isVisibleByUser: true
    };

    self.links['stats'] = {
        sref: "stats",
        title: "Statistiques",
        picture: "http://byrushan.com/projects/ma/1-6-1/jquery/light/img/headers/sm/2.png",
        hassubmenu: false,
        blockedRoles: [],
        isVisibleByGuest: false,
        isVisibleByUser: true
    };

    self.links['patient-sheets'] = {
        sref: "patient-sheets",
        title: "Fiches patients",
        picture: "http://byrushan.com/projects/ma/1-6-1/jquery/light/img/headers/sm/2.png",
        hassubmenu: false,
        blockedRoles: [],
        isVisibleByGuest: false,
        isVisibleByUser: true
    };

    self.links['admin-panel'] = {
        sref: "admin",
        title: "Administration",
        picture: "http://byrushan.com/projects/ma/1-6-1/jquery/light/img/headers/sm/2.png",
        hassubmenu: false,
        blockedRoles: [],
        isVisibleByGuest: false,
        isVisibleByUser: false
    };

    self.links['contact'] = {
        sref: "contact",
        title: "Contact",
        picture: "http://byrushan.com/projects/ma/1-6-1/jquery/light/img/headers/sm/2.png",
        hassubmenu: false,
        blockedRoles: [],
        isVisibleByGuest: true,
        isVisibleByUser: true
    };

    self.menu = {};
    self.menu['main'] = [
        self.links['simple-sheet'],
        self.links['complex-sheet'],
        self.links['annex-forms'],
        self.links['stats'],
        self.links['patient-sheets'],
        self.links['admin-panel'],
        self.links['contact']

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
