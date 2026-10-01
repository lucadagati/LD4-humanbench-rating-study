// Rating study: consent -> instructions -> 40 days (random order) -> questionnaire -> submit.
(function () {
  const C = window.STUDY_CONFIG, ITEMS = window.STUDY_ITEMS;
  const S = {
    it: {
      title: "Valutazione di giornate di controllo domestico",
      pilot: "Versione pilota: non distribuire prima dell'approvazione etica.",
      start: "Inizia", next: "Avanti", submit: "Invia le risposte", agree: "Accetto e proseguo",
      infoTitle: "Informativa e consenso",
      info: [
        ["Scopo dello studio", "Lo studio raccoglie giudizi umani su giornate simulate di una casa intelligente, per verificare se una misura automatica della struttura temporale dei comandi concorda con la percezione delle persone. I risultati saranno usati a fini di ricerca e pubblicati in forma aggregata."],
        ["In che cosa consiste", "Vedrà 40 giornate simulate. Per ciascuna risponderà a due domande su una scala da 1 a 7 e, alla fine, ad alcune domande generali. Servono circa 25 minuti. Non sono previsti rischi oltre a quelli di una normale attività di lettura."],
        ["Volontarietà", "La partecipazione è volontaria e non retribuita. Può interrompere in qualsiasi momento chiudendo la pagina: nessun dato viene inviato finché non preme «Invia le risposte». Le risposte sono anonime e, dopo l'invio, non possono essere associate a lei né ritirate."],
        ["Trattamento dei dati", "Non vengono raccolti nome, e-mail o indirizzo IP: le risposte sono associate solo a un codice casuale generato da questa pagina. I dati sono trattati ai sensi del Regolamento (UE) 2016/679 e del D.Lgs. 196/2003, conservati presso il Dipartimento di Ingegneria dell'Università degli Studi di Messina (titolare del trattamento) e possono essere resi disponibili in forma anonima con la pubblicazione."],
      ],
      pi: "Responsabile scientifico", ethics: "Approvazione etica", dpo: "Responsabile Protezione Dati",
      consent: ["Ho almeno 18 anni.", "Ho letto e compreso l'informativa.", "Partecipo volontariamente e so di poter interrompere in qualsiasi momento.", "Acconsento al trattamento dei dati anonimi a fini di ricerca e alla loro pubblicazione in forma aggregata."],
      howTitle: "Come leggere una giornata",
      how: "Ogni giornata è un grafico con le ore del giorno in orizzontale e i quattro dispositivi della casa in verticale. Ogni simbolo è un comando inviato a quell'ora. Le fasce grigie indicano le ore in cui nessuno è attivo in casa (fuori casa o a dormire). Il suo compito è giudicare come sono distribuiti i comandi nel tempo, non se le scelte siano giuste o efficienti. Non ci sono risposte giuste o sbagliate.",
      q1: "Quanto le sembra che questi comandi siano stati dati da una persona che vive nella casa?",
      q1l: "chiaramente automatico", q1r: "indistinguibile da una persona",
      q2: "Quanto le sembrano prevedibili i comandi di questa giornata?",
      q2l: "impossibili da prevedere", q2r: "del tutto prevedibili",
      day: "Giornata", of: "di", weekday: "giorno feriale", weekend: "fine settimana",
      noBack: "Non è possibile tornare alle giornate precedenti.",
      finalTitle: "Qualche domanda su di lei",
      age: ["Età", ["18-24", "25-34", "35-49", "50-64", "65 o più"]],
      gender: ["Genere (facoltativo)", ["donna", "uomo", "altro", "preferisco non rispondere"]],
      fam: ["Quanto usa dispositivi domestici intelligenti?", ["mai", "raramente", "a volte", "spesso", "ogni giorno"]],
      tech: ["Lavora o studia in ambito informatico o ingegneristico?", ["sì", "no"]],
      live: ["Con quante persone vive?", ["da solo/a", "1", "2", "3 o più"]],
      open: "Che cosa le ha fatto pensare che una giornata fosse gestita da una persona? (facoltativo)",
      doneTitle: "Grazie!",
      doneMail: "Per completare la partecipazione invii le risposte con il pulsante qui sotto (si apre il programma di posta con il messaggio già compilato). In alternativa scarichi il file e lo invii a",
      mail: "Invia per e-mail", download: "Scarica le risposte", posted: "Risposte inviate. Grazie per la partecipazione: non deve fare altro.", sending: "Invio in corso, non chiuda la pagina (può richiedere qualche decina di secondi)…",
      postFail: "Invio automatico non riuscito: usi l'e-mail o il download.", code: "Codice partecipante",
    },
    en: {
      title: "Rating days of home control",
      pilot: "Pilot version: do not distribute before ethics approval.",
      start: "Start", next: "Next", submit: "Submit answers", agree: "I agree and continue",
      infoTitle: "Information and consent",
      info: [
        ["Purpose of the study", "The study collects human judgments of simulated days of a smart home, to test whether an automatic measure of the temporal structure of commands agrees with people's perception. The results will be used for research and published in aggregate form."],
        ["What participation involves", "You will see 40 simulated days. For each day you will answer two questions on a scale from 1 to 7 and, at the end, a few general questions. It takes about 25 minutes. There are no risks beyond those of an ordinary reading task."],
        ["Voluntary participation", "Participation is voluntary and unpaid. You may stop at any time by closing the page: no data are sent until you press “Submit answers”. Answers are anonymous and, once submitted, cannot be linked to you or withdrawn."],
        ["Data protection", "No name, e-mail or IP address is collected: answers carry only a random code generated by this page. Data are processed under Regulation (EU) 2016/679 and Italian Legislative Decree 196/2003, stored at the Department of Engineering of the University of Messina (data controller), and may be shared in anonymous form with the publication."],
      ],
      pi: "Principal investigator", ethics: "Ethics approval", dpo: "Data Protection Officer",
      consent: ["I am at least 18 years old.", "I have read and understood the information.", "I take part voluntarily and know that I can stop at any time.", "I consent to the processing of anonymous data for research and to their publication in aggregate form."],
      howTitle: "How to read a day",
      how: "Each day is a chart with the hours of the day on the horizontal axis and the four devices of the home on the vertical axis. Each symbol is a command sent at that time. Grey bands mark the hours when nobody is active at home (away or asleep). Your task is to judge how the commands are distributed over time, not whether the choices are correct or efficient. There are no right or wrong answers.",
      q1: "How much does it look as if these commands were given by a person living in the home?",
      q1l: "clearly automatic", q1r: "indistinguishable from a person",
      q2: "How predictable do the commands of this day seem to you?",
      q2l: "impossible to anticipate", q2r: "completely predictable",
      day: "Day", of: "of", weekday: "weekday", weekend: "weekend",
      noBack: "You cannot go back to earlier days.",
      finalTitle: "A few questions about you",
      age: ["Age", ["18-24", "25-34", "35-49", "50-64", "65 or older"]],
      gender: ["Gender (optional)", ["woman", "man", "other", "prefer not to say"]],
      fam: ["How often do you use smart home devices?", ["never", "rarely", "sometimes", "often", "every day"]],
      tech: ["Do you work or study in computing or engineering?", ["yes", "no"]],
      live: ["How many people do you live with?", ["alone", "1", "2", "3 or more"]],
      open: "What made you think that a day was managed by a person? (optional)",
      doneTitle: "Thank you!",
      doneMail: "To complete your participation, send your answers with the button below (your e-mail program opens with the message already filled in). Alternatively, download the file and send it to",
      mail: "Send by e-mail", download: "Download answers", posted: "Answers submitted. Thank you for taking part: nothing else is needed.", sending: "Sending, please do not close the page (it can take up to a minute)…",
      postFail: "Automatic submission failed: please use e-mail or download.", code: "Participant code",
    },
  };
  const el = (tag, attrs = {}, ...kids) => {
    const e = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (k === "on") for (const [ev, f] of Object.entries(v)) e.addEventListener(ev, f);
      else if (k === "html") e.innerHTML = v; else e.setAttribute(k, v);
    }
    for (const k of kids) e.append(k);
    return e;
  };
  const rand = () => crypto.getRandomValues(new Uint32Array(1))[0] / 2 ** 32;
  const code = "P-" + Array.from(crypto.getRandomValues(new Uint8Array(4)), b => b.toString(16).padStart(2, "0")).join("").toUpperCase();
  const order = ITEMS.map(x => x.item_id);
  for (let i = order.length - 1; i > 0; i--) { const j = Math.floor(rand() * (i + 1)); [order[i], order[j]] = [order[j], order[i]]; }
  const dayType = Object.fromEntries(ITEMS.map(x => [x.item_id, x.day_type]));
  const state = { lang: (navigator.language || "en").startsWith("it") ? "it" : "en", step: "consent", pos: 0, answers: [], final: {}, started: null };
  const app = document.getElementById("app");

  function setLang(l) {
    if (state.step !== "consent" && state.step !== "instructions") return;  // keep one language per session
    state.lang = l; render();
  }
  document.querySelectorAll(".lang button").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));

  function scale(t, q, name, onchange) {
    const opts = el("div", { class: "opts" }, el("span", { class: "end left" }, t[q + "l"]));
    for (let v = 1; v <= 7; v++) {
      const input = el("input", { type: "radio", name, value: v, on: { change: onchange } });
      opts.append(el("label", {}, String(v), input));
    }
    opts.append(el("span", { class: "end" }, t[q + "r"]));
    return el("div", { class: "scale" }, el("div", { class: "q" }, t[q]), opts);
  }
  function choice(name, [label, opts]) {
    const box = el("div", { class: "choices" });
    opts.forEach(o => box.append(el("label", {}, el("input", { type: "radio", name, value: o, on: { change: () => state.final[name] = o } }), " " + o)));
    return el("div", {}, el("h2", {}, label), box);
  }

  function render() {
    const t = S[state.lang];
    document.documentElement.lang = state.lang;
    document.getElementById("title").textContent = t.title;
    const banner = document.getElementById("banner");
    banner.hidden = !C.pilot; banner.textContent = t.pilot;
    app.innerHTML = "";
    if (state.step === "consent") {
      const card = el("div", { class: "card" }, el("h2", {}, t.infoTitle));
      t.info.forEach(([h, p]) => card.append(el("h2", {}, h), el("p", {}, p)));
      const boxes = t.consent.map((c, i) => el("input", { type: "checkbox", id: "c" + i }));
      const go = el("button", { disabled: "", on: { click: () => { state.step = "instructions"; state.started = new Date().toISOString(); render(); } } }, t.agree);
      boxes.forEach((b, i) => { b.addEventListener("change", () => { go.disabled = !boxes.every(x => x.checked); }); card.append(el("div", { class: "check" }, b, el("label", { for: "c" + i }, t.consent[i]))); });
      card.append(go);
      app.append(card);
    } else if (state.step === "instructions") {
      app.append(el("div", { class: "card" }, el("h2", {}, t.howTitle), el("p", {}, t.how),
        el("img", { class: "chart", src: `figures/${state.lang}/legend.png`, alt: "legend" }),
        el("p", {}, el("b", {}, "Q1 "), t.q1), el("p", {}, el("b", {}, "Q2 "), t.q2), el("p", { class: "small" }, t.noBack),
        el("button", { on: { click: () => { state.step = "items"; render(); } } }, t.start)));
    } else if (state.step === "items") {
      const id = order[state.pos], ans = {};
      const next = el("button", { disabled: "" }, t.next);
      const upd = e => { ans[e.target.name] = Number(e.target.value); next.disabled = !(ans.Q1 && ans.Q2); };
      next.addEventListener("click", () => {
        state.answers.push({ position: state.pos + 1, item_id: id, Q1: ans.Q1, Q2: ans.Q2, time: new Date().toISOString() });
        state.pos += 1; if (state.pos === order.length) state.step = "final"; render(); window.scrollTo(0, 0);
      });
      app.append(el("div", { class: "progress" }, el("div", { style: `width:${100 * state.pos / order.length}%` })),
        el("div", { class: "card" }, el("div", {}, el("b", {}, `${t.day} ${state.pos + 1} ${t.of} ${order.length}`), " ",
          el("span", { class: "daytype" }, "· " + t[dayType[id]])),
          el("img", { class: "chart", src: `figures/${state.lang}/${id}.png`, alt: `${t.day} ${state.pos + 1}` }),
          scale(t, "q1", "Q1", upd), scale(t, "q2", "Q2", upd), next));
    } else if (state.step === "final") {
      const ta = el("textarea", { on: { input: e => state.final.open = e.target.value } });
      app.append(el("div", { class: "card" }, el("h2", {}, t.finalTitle), choice("age", t.age), choice("gender", t.gender),
        choice("familiarity", t.fam), choice("tech_background", t.tech), choice("household", t.live),
        el("h2", {}, t.open), ta, el("p", {}),
        el("button", { on: { click: () => { state.step = "done"; render(); } } }, t.submit)));
    } else if (state.step === "done") {
      const payload = { study: "cps-humanbench-rating", version: 1, participant_code: code, language: state.lang,
        consent: true, started: state.started, finished: new Date().toISOString(), order, answers: state.answers, questionnaire: state.final };
      const json = JSON.stringify(payload);
      const card = el("div", { class: "card" }, el("h2", {}, t.doneTitle), el("p", {}, `${t.code}: `, el("code", { class: "pc" }, code)));
      const msg = el("p", {});
      const compact = state.answers.map(a => `${a.item_id}:${a.Q1}${a.Q2}`).join(",");
      const body = `code=${code}\nlang=${state.lang}\nanswers=${compact}\nq=${JSON.stringify(state.final)}\n\n${json}`;
      const mail = el("button", { on: { click: () => { location.href = `mailto:${C.contactEmail}?subject=${encodeURIComponent("CPS-HumanBench rating " + code)}&body=${encodeURIComponent(body)}`; } } }, t.mail);
      const dl = el("button", { class: "secondary", on: { click: () => {
        const a = el("a", { href: URL.createObjectURL(new Blob([json], { type: "application/json" })), download: `rating_${code}.json` }); a.click(); } } }, t.download);
      const fallback = el("div", {}, el("p", {}, `${t.doneMail} ${C.contactEmail}.`), mail, " ", dl);
      card.append(msg, fallback);
      if (C.submitUrl) {
        fallback.hidden = true; msg.textContent = t.sending;
        const fail = () => { msg.textContent = t.postFail; fallback.hidden = false; };
        fetch(C.submitUrl, { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: json })
          .then(r => r.ok ? r.json() : { ok: false }).then(j => { if (j && j.ok) msg.textContent = t.posted; else fail(); }).catch(fail);
      }
      app.append(card);
    }
  }
  window.addEventListener("beforeunload", e => { if (state.step === "items" || state.step === "final") { e.preventDefault(); e.returnValue = ""; } });
  render();
})();
