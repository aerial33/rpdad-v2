// Type pour les données d'emploi
export type Emploi = {
  id: string
  titre: string
  contrat: string
  temps: string
  service: string
  description: string
  profil: string
  avantages: string
  annonce?: string
  image?: string
  contact: {
    responsable: string
    email: string
    telephone: string
    adresse: string
  }
}

// Données des offres d'emploi
export const emplois: Emploi[] = [
  {
    id: "aide-a-domicile-bordeaux",
    titre: "Aide à domicile",
    contrat: "CDI",
    temps: "Temps plein",
    service: "CCAS de Bordeaux",
    description:
      "Nous recherchons un(e) aide à domicile pour intervenir auprès de personnes âgées et en situation de handicap sur Bordeaux. Vous serez chargé(e) d'accompagner les bénéficiaires dans les actes essentiels de la vie quotidienne, l'entretien du cadre de vie et le maintien du lien social.",
    profil:
      "Diplôme d'État d'Accompagnant Éducatif et Social (DEAES) ou expérience significative dans le domaine. Permis B et véhicule souhaités. Qualités relationnelles, autonomie et sens des responsabilités.",
    avantages:
      "Mutuelle d'entreprise, tickets restaurant, indemnités kilométriques, téléphone professionnel",
    image:
      "https://sandbox-tailwind-template.netlify.app/assets/img/photos/co3@2x.png",
    contact: {
      responsable: "Marie Dupont",
      email: "recrutement@ccas-bordeaux.fr",
      telephone: "05 56 XX XX XX",
      adresse: "Rue du CCAS, 33000 Bordeaux",
    },
  },
  {
    id: "auxiliaire-vie-merignac",
    titre: "Auxiliaire de vie sociale",
    contrat: "CDD 6 mois",
    temps: "Temps partiel (28h)",
    service: "CCAS de Mérignac",
    description:
      "Le CCAS de Mérignac recrute un(e) auxiliaire de vie sociale pour accompagner des personnes en perte d'autonomie. Vous interviendrez auprès de personnes âgées et/ou en situation de handicap pour les aider dans la réalisation des actes essentiels de la vie quotidienne.",
    profil:
      "DEAES ou équivalent, permis B obligatoire. Expérience auprès des personnes âgées et/ou en situation de handicap. Qualités requises : bienveillance, patience, écoute, discrétion.",
    avantages:
      "Prime de fin d'année, RTT, CNAS, planning adapté aux contraintes personnelles",
    image:
      "https://sandbox-tailwind-template.netlify.app/assets/img/photos/co3@2x.png",
    contact: {
      responsable: "Jean Martin",
      email: "rh@ccas-merignac.fr",
      telephone: "05 57 XX XX XX",
      adresse: "Avenue du Maréchal Leclerc, 33700 Mérignac",
    },
  },
  {
    id: "responsable-saad-arcachon",
    titre: "Responsable de SAAD",
    contrat: "CDI",
    temps: "Temps plein",
    service: "CIAS du Bassin d'Arcachon Sud",
    description:
      "Le CIAS du Bassin d'Arcachon Sud recherche un(e) responsable pour son Service d'Aide et d'Accompagnement à Domicile. Vous serez chargé(e) de la gestion administrative et financière du service, du management de l'équipe, et de l'organisation des prestations auprès des bénéficiaires.",
    profil:
      "CAFERUIS ou équivalent, expérience en management d'équipe médico-sociale. Connaissance du secteur de l'aide à domicile et des dispositifs d'aide aux personnes âgées et handicapées. Capacités managériales et organisationnelles.",
    avantages:
      "Rémunération attractive, télétravail partiel possible, véhicule de service, 13ème mois",
    image:
      "https://sandbox-tailwind-template.netlify.app/assets/img/photos/co3@2x.png",
    contact: {
      responsable: "Direction des Ressources Humaines",
      email: "recrutement@cias-bas.fr",
      telephone: "05 57 XX XX XX",
      adresse: "2 allée d'Arcachon, 33380 Biganos",
    },
  },
  {
    id: "agent-administratif-ares",
    titre: "Agent administratif SAAD",
    contrat: "CDD 1 an",
    temps: "Temps plein",
    service: "CCAS d'Arès",
    description:
      "Le CCAS d'Arès recrute un(e) agent administratif pour son Service d'Aide et d'Accompagnement à Domicile. Vous serez en charge de l'accueil téléphonique et physique, de la gestion des plannings des intervenants, du suivi administratif des dossiers des bénéficiaires et de la facturation.",
    profil:
      "Bac+2 en gestion administrative ou expérience équivalente. Maîtrise des outils informatiques (logiciel de télégestion apprécié). Qualités requises : rigueur, organisation, discrétion, aisance relationnelle.",
    avantages:
      "Horaires réguliers, possibilité de CDI à l'issue du contrat, accès aux prestations du CNAS",
    image:
      "https://sandbox-tailwind-template.netlify.app/assets/img/photos/co3@2x.png",
    contact: {
      responsable: "Sophie Durand",
      email: "recrutement@ccas-ares.fr",
      telephone: "05 56 XX XX XX",
      adresse: "7 rue Pierre Pauilhac, 33740 Arès",
    },
  },
]
