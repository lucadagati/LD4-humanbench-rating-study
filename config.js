// Study configuration. Edit before distribution.
window.STUDY_CONFIG = {
  // true shows a banner: the study must not be distributed before ethics approval.
  pilot: true,
  // E-mail that receives the answers (mailto) and contact shown to participants.
  contactEmail: "ldagati@unime.it",
  // Optional HTTPS endpoint that accepts a JSON POST of the answers (for example an
  // institutional survey server). Empty: answers are sent by e-mail or downloaded.
  submitUrl: "https://script.google.com/macros/s/AKfycbwJKX4pNlu-LzuFo3PoT9Xg6ir8JGdA-8GEk6aHiVPhPDSfCj6eehio8lR-2ruVSO2O/exec",
  // Ethics approval reference and Data Protection Officer contact, shown in the information sheet.
  ethicsReference: { it: "[DA COMPILARE: comitato etico, numero e data del parere]",
                     en: "[TO BE COMPLETED: ethics committee, reference number and date]" },
  dpoContact: { it: "[DA COMPILARE: contatto RPD]", en: "[TO BE COMPLETED: DPO contact]" },
};
