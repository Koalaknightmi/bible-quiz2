//console.log("blanks.js 1.0");
var season = localStorage.playerseason;
var chlist = {
  hebrews: {
    books: [
      { bk: "Hebrews", len: 13, abr: "h" },
      { bk: "1Peter", len: 5, abr: "1p" },
      { bk: "2Peter", len: 3, abr: "2p" }
    ],
    t: function() {
      for (var i = 0; i < this.books.length; i++) {
        for (var j = 1; j < this.books[i].len + 1; j++) {
          this.chs.push({
            abr: this.books[i].abr + j,
            full: this.books[i].bk + " " + j
          });
        }
      }
      //console.log(this);
    },
    chs: [],
    getchnum: function() {
      let s = 0;
      for (var i = 0; i < this.books.length; i++) {
        s += this.books[i].len;
      }
      return s;
    },
    used1: [
      /\s(puts)\s/i,
      /\s(position)\s/i,
      /\s(forewarned)\s/i,
      /\s(scriptures)\s/i,
      /\s(distort)\s/i,
      /\s(contain)\s/i,
      /\s(writes)\s/i,
      /\s(wisdom)\s/i,
      /\s(wrote)\s/i,
      /\s(paul)\s/i,
      /\s(spotless)\s/i,
      /\s(dwells)\s/i,
      /\s(heat)\s/i,
      /\s(melt)\s/i,
      /\s(speed)\s/i,
      /\s(roar)\s/i,
      /\s(wanting)\s/i,
      /\s(patient)\s/i,
      /\s(slowness)\s/i,
      /\s(slow)\s/i,
      /\s(deluged)\s/i,
      /\s(waters)\s/i,
      /\s(goes)\s/i,
      /\s(scoffing)\s/i,
      /\s(scoffers)\s/i,
      /\s(apostles)\s/i,
      /\s(recall)\s/i,
      /\s(wholesome)\s/i,
      /\s(stimulate)\s/i,
      /\s(reminders)\s/i,
      /\s(radiance)\s/i,
      /\s(letter)\s/i,
      /\s(exact)\s/i,
      /\s(representation)\s/i,
      /\s(mud)\s/i,
      /\s(sustaining)\s/i,
      /\s(wallowing)\s/i,
      /\s(sow)\s/i,
      /\s(vomit)\s/i,
      /\s(provided)\s/i,
      /\s(purification)\s/i,
      /\s(dog)\s/i,
      /\s(proverbs)\s/i,
      /\s(backs)\s/i,
      /\s(worse)\s/i,
      /\s(overcome)\s/i,
      /\s(entangled)\s/i,
      /\s(mastered)\s/i,
      /\s(depravity)\s/i,
      /\s(escaping)\s/i,
      /\s(entice)\s/i,
      /\s(lustful)\s/i,
      /\s(appealing)\s/i,
      /\s(boastful)\s/i,
      /\s(inherited)\s/i,
      /\s(blackest)\s/i,
      /\s(driven)\s/i,
      /\s(mists)\s/i,
      /\s(springs)\s/i,
      /\s(madness)\s/i,
      /\s(restrained)\s/i,
      /\s(donkey)\s/i,
      /\s(wrongdoing)\s/i,
      /\s(rebuked)\s/i,
      /\s(wages)\s/i,
      /\s(bezer)\s/i,
      /\s(balaam)\s/i,
      /\s(straight)\s/i,
      /\s(brood)\s/i,
      /\s(accursed)\s/i,
      /\s(experts)\s/i,
      /\s(seduce)\s/i,
      /\s(stop)\s/i,
      /\s(adultery)\s/i,
      /\s(feast)\s/i,
      /\s(reveling)\s/i,
      /\s(blemishes)\s/i,
      /\s(blots)\s/i,
      /\s(daylight)\s/i,
      /\s(broad)\s/i,
      /\s(carouse)\s/i,
      /\s(servants)\s/i,
      /\s(idea)\s/i,
      /\s(caught)\s/i,
      /\s(instinct)\s/i,
      /\s(creatures)\s/i,
      /\s(unreasoning)\s/i,
      /\s(hated)\s/i,
      /\s(blaspheme)\s/i,
      /\s(stronger)\s/i,
      /\s(although)\s/i,
      /\s(companions)\s/i,
      /\s(anointing)\s/i,
      /\s(celestial)\s/i,
      /\s(oil)\s/i,
      /\s(arrogant)\s/i,
      /\s(bold)\s/i,
      /\s(despise)\s/i,
      /\s(corrupt)\s/i,
      /\s(especially)\s/i,
      /\s(rescue)\s/i,
      /\s(knows)\s/i,
      /\s(tormented)\s/i,
      /\s(distressed)\s/i,
      /\s(lot)\s/i,
      /\s(rescued)\s/i,
      /\s(happen)\s/i,
      /\s(gomorrah)\s/i,
      /\s(wear)\s/i,
      /\s(sodom)\s/i,
      /\s(cities)\s/i,
      /\s(preacher)\s/i,
      /\s(roll)\s/i,
      /\s(protected)\s/i,
      /\s(flood)\s/i,
      /\s(robe)\s/i,
      /\s(ancient)\s/i,
      /\s(hell)\s/i,
      /\s(sleeping)\s/i,
      /\s(hanging)\s/i,
      /\s(condemnation)\s/i,
      /\s(sit)\s/i,
      /\s(fabricated)\s/i,
      /\s(exploit)\s/i,
      /\s(disrepute)\s/i,
      /\s(ministering)\s/i,
      /\s(swift)\s/i,
      /\s(bought)\s/i,
      /\s(sovereign)\s/i,
      /\s(denying)\s/i,
      /\s(heresies)\s/i,
      /\s(destructive)\s/i,
      /\s(introduce)\s/i,
      /\s(secretly)\s/i,
      /\s(origin)\s/i,
      /\s(interpretation)\s/i,
      /\s(drift)\s/i,
      /\s(rises)\s/i,
      /\s(star)\s/i,
      /\s(morning)\s/i,
      /\s(dawns)\s/i,
      /\s(binding)\s/i,
      /\s(dark)\s/i,
      /\s(violation)\s/i,
      /\s(shining)\s/i,
      /\s(reliable)\s/i,
      /\s(prophetic)\s/i,
      /\s(ourselves)\s/i,
      /\s(majestic)\s/i,
      /\s(eyewitnesses)\s/i,
      /\s(ignore)\s/i,
      /\s(devised)\s/i,
      /\s(cleverly)\s/i,
      /\s(announced)\s/i,
      /\s(departure)\s/i,
      /\s(signs)\s/i,
      /\s(wonders)\s/i,
      /\s(miracles)\s/i,
      /\s(tent)\s/i,
      /\s(memory)\s/i,
      /\s(refresh)\s/i,
      /\s(distributed)\s/i,
      /\s(remind)\s/i,
      /\s(subjected)\s/i,
      /\s(welcome)\s/i,
      /\s(rich)\s/i,
      /\s(election)\s/i,
      /\s(confirm)\s/i,
      /\s(forgetting)\s/i,
      /\s(mankind)\s/i,
      /\s(mindful)\s/i,
      /\s(blind)\s/i,
      /\s(nearsighted)\s/i,
      /\s(unproductive)\s/i,
      /\s(ineffective)\s/i,
      /\s(measure)\s/i,
      /\s(increasing)\s/i,
      /\s(qualities)\s/i,
      /\s(possess)\s/i,
      /\s(add)\s/i,
      /\s(caused)\s/i,
      /\s(ours)\s/i,
      /\s(simon)\s/i,
      /\s(kiss)\s/i,
      /\s(mark)\s/i,
      /\s(sends)\s/i,
      /\s(babylon)\s/i,
      /\s(fast)\s/i,
      /\s(taste)\s/i,
      /\s(stand)\s/i,
      /\s(testifying)\s/i,
      /\s(silas)\s/i,
      /\s(steadfast)\s/i,
      /\s(fitting)\s/i,
      /\s(strong)\s/i,
      /\s(restore)\s/i,
      /\s(undergoing)\s/i,
      /\s(standing)\s/i,
      /\s(resist)\s/i,
      /\s(devour)\s/i,
      /\s(lion)\s/i,
      /\s(roaring)\s/i,
      /\s(prowls)\s/i,
      /\s(sing)\s/i,
      /\s(trust)\s/i,
      /\s(enemy)\s/i,
      /\s(cares)\s/i,
      /\s(anxiety)\s/i,
      /\s(cast)\s/i,
      /\s(due)\s/i,
      /\s(lift)\s/i,
      /\s(mighty)\s/i,
      /\s(humanity)\s/i,
      /\s(break)\s/i,
      /\s(favor)\s/i,
      /\s(holds)\s/i,
      /\s(shows)\s/i,
      /\s(proud)\s/i,
      /\s(opposes)\s/i,
      /\s(humility)\s/i,
      /\s(slavery)\s/i,
      /\s(clothe)\s/i,
      /\s(younger)\s/i,
      /\s(helps)\s/i,
      /\s(crown)\s/i,
      /\s(chief)\s/i,
      /\s(examples)\s/i,
      /\s(lording)\s/i,
      /\s(dishonest)\s/i,
      /\s(pursuing)\s/i,
      /\s(wants)\s/i,
      /\s(willing)\s/i,
      /\s(merciful)\s/i,
      /\s(watching)\s/i,
      /\s(shepherds)\s/i,
      /\s(service)\s/i,
      /\s(elder)\s/i,
      /\s(appeal)\s/i,
      /\s(creator)\s/i,
      /\s(commit)\s/i,
      /\s(sinner)\s/i,
      /\s(begins)\s/i,
      /\s(household)\s/i,
      /\s(fix)\s/i,
      /\s(begin)\s/i,
      /\s(acknowledge)\s/i,
      /\s(christian)\s/i,
      /\s(meddler)\s/i,
      /\s(criminal)\s/i,
      /\s(murderer)\s/i,
      /\s(overjoyed)\s/i,
      /\s(inasmuch)\s/i,
      /\s(happening)\s/i,
      /\s(test)\s/i,
      /\s(ordeal)\s/i,
      /\s(fiery)\s/i,
      /\s(praised)\s/i,
      /\s(provides)\s/i,
      /\s(forms)\s/i,
      /\s(stewards)\s/i,
      /\s(grumbling)\s/i,
      /\s(multitude)\s/i,
      /\s(covers)\s/i,
      /\s(standards)\s/i,
      /\s(testing)\s/i,
      /\s(judged)\s/i,
      /\s(wild)\s/i,
      /\s(reckless)\s/i,
      /\s(generation)\s/i,
      /\s(join)\s/i,
      /\s(idolatry)\s/i,
      /\s(detestable)\s/i,
      /\s(carousing)\s/i,
      /\s(orgies)\s/i,
      /\s(drunkenness)\s/i,
      /\s(lust)\s/i,
      /\s(debauchery)\s/i,
      /\s(choose)\s/i,
      /\s(enough)\s/i,
      /\s(unbelieving)\s/i,
      /\s(spent)\s/i,
      /\s(turns)\s/i,
      /\s(suffers)\s/i,
      /\s(attitude)\s/i,
      /\s(encourage)\s/i,
      /\s(arm)\s/i,
      /\s(daily)\s/i,
      /\s(authorities)\s/i,
      /\s(gone)\s/i,
      /\s(pledge)\s/i,
      /\s(hardened)\s/i,
      /\s(dirt)\s/i,
      /\s(deceitfulness)\s/i,
      /\s(original)\s/i,
      /\s(conviction)\s/i,
      /\s(removal)\s/i,
      /\s(rebelled)\s/i,
      /\s(led)\s/i,
      /\s(baptism)\s/i,
      /\s(symbolizes)\s/i,
      /\s(perished)\s/i,
      /\s(eight)\s/i,
      /\s(disobeyed)\s/i,
      /\s(few)\s/i,
      /\s(unbelief)\s/i,
      /\s(waited)\s/i,
      /\s(entering)\s/i,
      /\s(imprisoned)\s/i,
      /\s(proclamation)\s/i,
      /\s(maliciously)\s/i,
      /\s(gentleness)\s/i,
      /\s(believed)\s/i,
      /\s(asks)\s/i,
      /\s(finished)\s/i,
      /\s(answer)\s/i,
      /\s(somewhere)\s/i,
      /\s(revere)\s/i,
      /\s(frightened)\s/i,
      /\s(rested)\s/i,
      /\s(prayer)\s/i,
      /\s(formerly)\s/i,
      /\s(attentive)\s/i,
      /\s(certain)\s/i,
      /\s(ears)\s/i,
      /\s(pursue)\s/i,
      /\s(quoted)\s/i,
      /\s(joshua)\s/i,
      /\s(sabbath)\s/i,
      /\s(deceitful)\s/i,
      /\s(tongue)\s/i,
      /\s(contrary)\s/i,
      /\s(compassionate)\s/i,
      /\s(sympathetic)\s/i,
      /\s(minded)\s/i,
      /\s(active)\s/i,
      /\s(sharper)\s/i,
      /\s(finally)\s/i,
      /\s(double)\s/i,
      /\s(edged)\s/i,
      /\s(hinder)\s/i,
      /\s(penetrates)\s/i,
      /\s(gracious)\s/i,
      /\s(dividing)\s/i,
      /\s(partner)\s/i,
      /\s(joints)\s/i,
      /\s(marrow)\s/i,
      /\s(weaker)\s/i,
      /\s(attitudes)\s/i,
      /\s(hidden)\s/i,
      /\s(treat)\s/i,
      /\s(uncovered)\s/i,
      /\s(submitted)\s/i,
      /\s(adorn)\s/i,
      /\s(quiet)\s/i,
      /\s(gentle)\s/i,
      /\s(ascended)\s/i,
      /\s(unfading)\s/i,
      /\s(unable)\s/i,
      /\s(empathize)\s/i,
      /\s(weaknesses)\s/i,
      /\s(approach)\s/i,
      /\s(clothes)\s/i,
      /\s(fine)\s/i,
      /\s(jewelry)\s/i,
      /\s(selected)\s/i,
      /\s(wearing)\s/i,
      /\s(represent)\s/i,
      /\s(hairstyles)\s/i,
      /\s(related)\s/i,
      /\s(elaborate)\s/i,
      /\s(adornment)\s/i,
      /\s(deal)\s/i,
      /\s(gently)\s/i,
      /\s(outward)\s/i,
      /\s(purity)\s/i,
      /\s(won)\s/i,
      /\s(overseer)\s/i,
      /\s(becoming)\s/i,
      /\s(returned)\s/i,
      /\s(wounds)\s/i,
      /\s(justly)\s/i,
      /\s(petitions)\s/i,
      /\s(fervent)\s/i,
      /\s(cries)\s/i,
      /\s(retaliate)\s/i,
      /\s(insults)\s/i,
      /\s(learned)\s/i,
      /\s(obedience)\s/i,
      /\s(hurled)\s/i,
      /\s(source)\s/i,
      /\s(designated)\s/i,
      /\s(steps)\s/i,
      /\s(leaving)\s/i,
      /\s(beating)\s/i,
      /\s(try)\s/i,
      /\s(credit)\s/i,
      /\s(conscious)\s/i,
      /\s(pain)\s/i,
      /\s(bears)\s/i,
      /\s(truths)\s/i,
      /\s(harsh)\s/i,
      /\s(infant)\s/i,
      /\s(acquainted)\s/i,
      /\s(teaching)\s/i,
      /\s(mature)\s/i,
      /\s(constant)\s/i,
      /\s(masters)\s/i,
      /\s(distinguish)\s/i,
      /\s(proper)\s/i,
      /\s(move)\s/i,
      /\s(beyond)\s/i,
      /\s(foolish)\s/i,
      /\s(maturity)\s/i,
      /\s(foundation)\s/i,
      /\s(talk)\s/i,
      /\s(silence)\s/i,
      /\s(commend)\s/i,
      /\s(instruction)\s/i,
      /\s(cleansing)\s/i,
      /\s(rites)\s/i,
      /\s(punish)\s/i,
      /\s(governors)\s/i,
      /\s(supreme)\s/i,
      /\s(permitting)\s/i,
      /\s(enlightened)\s/i,
      /\s(whether)\s/i,
      /\s(visits)\s/i,
      /\s(glorify)\s/i,
      /\s(accuse)\s/i,
      /\s(war)\s/i,
      /\s(loss)\s/i,
      /\s(crucifying)\s/i,
      /\s(subjecting)\s/i,
      /\s(public)\s/i,
      /\s(wage)\s/i,
      /\s(abstain)\s/i,
      /\s(drinks)\s/i,
      /\s(rain)\s/i,
      /\s(often)\s/i,
      /\s(falling)\s/i,
      /\s(wonderful)\s/i,
      /\s(crop)\s/i,
      /\s(useful)\s/i,
      /\s(farmed)\s/i,
      /\s(possession)\s/i,
      /\s(thorns)\s/i,
      /\s(thistles)\s/i,
      /\s(worthless)\s/i,
      /\s(danger)\s/i,
      /\s(cursed)\s/i,
      /\s(special)\s/i,
      /\s(nation)\s/i,
      /\s(convinced)\s/i,
      /\s(royal)\s/i,
      /\s(disobey)\s/i,
      /\s(rock)\s/i,
      /\s(causes)\s/i,
      /\s(builders)\s/i,
      /\s(helped)\s/i,
      /\s(trusts)\s/i,
      /\s(lay)\s/i,
      /\s(diligence)\s/i,
      /\s(realized)\s/i,
      /\s(lazy)\s/i,
      /\s(acceptable)\s/i,
      /\s(swore)\s/i,
      /\s(stones)\s/i,
      /\s(bless)\s/i,
      /\s(confirms)\s/i,
      /\s(guard)\s/i,
      /\s(argument)\s/i,
      /\s(unchanging)\s/i,
      /\s(purpose)\s/i,
      /\s(humans)\s/i,
      /\s(crave)\s/i,
      /\s(unchangeable)\s/i,
      /\s(lie)\s/i,
      /\s(fled)\s/i,
      /\s(encouraged)\s/i,
      /\s(anchor)\s/i,
      /\s(babies)\s/i,
      /\s(newborn)\s/i,
      /\s(envy)\s/i,
      /\s(hypocrisy)\s/i,
      /\s(forerunner)\s/i,
      /\s(behalf)\s/i,
      /\s(malice)\s/i,
      /\s(returning)\s/i,
      /\s(defeat)\s/i,
      /\s(kings)\s/i,
      /\s(rid)\s/i,
      /\s(endures)\s/i,
      /\s(withers)\s/i,
      /\s(field)\s/i,
      /\s(mother)\s/i,
      /\s(genealogy)\s/i,
      /\s(resembling)\s/i,
      /\s(imperishable)\s/i,
      /\s(patriarch)\s/i,
      /\s(plunder)\s/i,
      /\s(seed)\s/i,
      /\s(obeying)\s/i,
      /\s(collect)\s/i,
      /\s(glorified)\s/i,
      /\s(trace)\s/i,
      /\s(descent)\s/i,
      /\s(defect)\s/i,
      /\s(doubt)\s/i,
      /\s(lesser)\s/i,
      /\s(blemish)\s/i,
      /\s(lamb)\s/i,
      /\s(collects)\s/i,
      /\s(handed)\s/i,
      /\s(ancestor)\s/i,
      /\s(perfection)\s/i,
      /\s(attained)\s/i,
      /\s(levitical)\s/i,
      /\s(redeemed)\s/i,
      /\s(belonged)\s/i,
      /\s(different)\s/i,
      /\s(silver)\s/i,
      /\s(served)\s/i,
      /\s(impartially)\s/i,
      /\s(person)\s/i,
      /\s(ancestry)\s/i,
      /\s(indestructible)\s/i,
      /\s(former)\s/i,
      /\s(conform)\s/i,
      /\s(useless)\s/i,
      /\s(introduced)\s/i,
      /\s(serving)\s/i,
      /\s(glories)\s/i,
      /\s(sworn)\s/i,
      /\s(messiah)\s/i,
      /\s(predicted)\s/i,
      /\s(guarantor)\s/i,
      /\s(pointing)\s/i,
      /\s(circumstances)\s/i,
      /\s(prevented)\s/i,
      /\s(continuing)\s/i,
      /\s(office)\s/i,
      /\s(trying)\s/i,
      /\s(permanent)\s/i,
      /\s(intently)\s/i,
      /\s(searched)\s/i,
      /\s(intercede)\s/i,
      /\s(glorious)\s/i,
      /\s(truly)\s/i,
      /\s(meets)\s/i,
      /\s(inexpressible)\s/i,
      /\s(apart)\s/i,
      /\s(exalted)\s/i,
      /\s(filled)\s/i,
      /\s(unlike)\s/i,
      /\s(refined)\s/i,
      /\s(perishes)\s/i,
      /\s(appoints)\s/i,
      /\s(men)\s/i,
      /\s(main)\s/i,
      /\s(genuineness)\s/i,
      /\s(proven)\s/i,
      /\s(grief)\s/i,
      /\s(prescribed)\s/i,
      /\s(build)\s/i,
      /\s(pattern)\s/i,
      /\s(shielded)\s/i,
      /\s(old)\s/i,
      /\s(spoil)\s/i,
      /\s(fault)\s/i,
      /\s(birth)\s/i,
      /\s(neighbor)\s/i,
      /\s(least)\s/i,
      /\s(forgive)\s/i,
      /\s(sanctifying)\s/i,
      /\s(outdated)\s/i,
      /\s(foreknowledge)\s/i,
      /\s(bithynia)\s/i,
      /\s(lampstand)\s/i,
      /\s(table)\s/i,
      /\s(consecrated)\s/i,
      /\s(bread)\s/i,
      /\s(asia)\s/i,
      /\s(golden)\s/i,
      /\s(incense)\s/i,
      /\s(cappadocia)\s/i,
      /\s(covered)\s/i,
      /\s(galatia)\s/i,
      /\s(contained)\s/i,
      /\s(jar)\s/i,
      /\s(manna)\s/i,
      /\s(budded)\s/i,
      /\s(pontus)\s/i,
      /\s(tablets)\s/i,
      /\s(cherubim)\s/i,
      /\s(overshadowing)\s/i,
      /\s(provinces)\s/i,
      /\s(discuss)\s/i,
      /\s(detail)\s/i,
      /\s(arranged)\s/i,
      /\s(regularly)\s/i,
      /\s(outer)\s/i,
      /\s(carry)\s/i,
      /\s(scattered)\s/i,
      /\s(showing)\s/i,
      /\s(disclosed)\s/i,
      /\s(functioning)\s/i,
      /\s(illustration)\s/i,
      /\s(indicating)\s/i,
      /\s(elect)\s/i,
      /\s(worshiper)\s/i,
      /\s(matter)\s/i,
      /\s(drink)\s/i,
      /\s(washings)\s/i,
      /\s(external)\s/i,
      /\s(applying)\s/i,
      /\s(part)\s/i,
      /\s(thus)\s/i,
      /\s(obtaining)\s/i,
      /\s(redemption)\s/i,
      /\s(heifer)\s/i,
      /\s(send)\s/i,
      /\s(ceremonially)\s/i,
      /\s(unclean)\s/i,
      /\s(sanctify)\s/i,
      /\s(outwardly)\s/i,
      /\s(clean)\s/i,
      /\s(unblemished)\s/i,
      /\s(consciences)\s/i,
      /\s(italy)\s/i,
      /\s(ransom)\s/i,
      /\s(prove)\s/i,
      /\s(force)\s/i,
      /\s(somebody)\s/i,
      /\s(arrives)\s/i,
      /\s(timothy)\s/i,
      /\s(scarlet)\s/i,
      /\s(wool)\s/i,
      /\s(branches)\s/i,
      /\s(hyssop)\s/i,
      /\s(quite)\s/i,
      /\s(ceremonies)\s/i,
      /\s(nearly)\s/i,
      /\s(exhortation)\s/i,
      /\s(forgiveness)\s/i,
      /\s(copies)\s/i,
      /\s(presence)\s/i,
      /\s(pleasing)\s/i,
      /\s(appeared)\s/i,
      /\s(culmination)\s/i,
      /\s(ages)\s/i,
      /\s(equip)\s/i,
      /\s(restored)\s/i,
      /\s(realities)\s/i,
      /\s(particularly)\s/i,
      /\s(repeated)\s/i,
      /\s(endlessly)\s/i,
      /\s(stopped)\s/i,
      /\s(worshipers)\s/i,
      /\s(felt)\s/i,
      /\s(annual)\s/i,
      /\s(reminder)\s/i,
      /\s(honorably)\s/i,
      /\s(sure)\s/i,
      /\s(burden)\s/i,
      /\s(watch)\s/i,
      /\s(openly)\s/i,
      /\s(accordance)\s/i,
      /\s(sets)\s/i,
      /\s(performs)\s/i,
      /\s(religious)\s/i,
      /\s(duties)\s/i,
      /\s(offers)\s/i,
      /\s(waits)\s/i,
      /\s(testifies)\s/i,
      /\s(adds)\s/i,
      /\s(fruit)\s/i,
      /\s(forgiven)\s/i,
      /\s(opened)\s/i,
      /\s(continually)\s/i,
      /\s(unswervingly)\s/i,
      /\s(spur)\s/i,
      /\s(gate)\s/i,
      /\s(giving)\s/i,
      /\s(meeting)\s/i,
      /\s(habit)\s/i,
      /\s(carries)\s/i,
      /\s(approaching)\s/i,
      /\s(eat)\s/i,
      /\s(minister)\s/i,
      /\s(fearful)\s/i,
      /\s(expectation)\s/i,
      /\s(raging)\s/i,
      /\s(consume)\s/i,
      /\s(testimony)\s/i,
      /\s(foods)\s/i,
      /\s(severely)\s/i,
      /\s(deserves)\s/i,
      /\s(punished)\s/i,
      /\s(trampled)\s/i,
      /\s(underfoot)\s/i,
      /\s(unholy)\s/i,
      /\s(eating)\s/i,
      /\s(sanctified)\s/i,
      /\s(mine)\s/i,
      /\s(avenge)\s/i,
      /\s(strengthened)\s/i,
      /\s(dreadful)\s/i,
      /\s(earlier)\s/i,
      /\s(yesterday)\s/i,
      /\s(conflict)\s/i,
      /\s(mortals)\s/i,
      /\s(sometimes)\s/i,
      /\s(publicly)\s/i,
      /\s(exposed)\s/i,
      /\s(helper)\s/i,
      /\s(persecution)\s/i,
      /\s(stood)\s/i,
      /\s(forsake)\s/i,
      /\s(leave)\s/i,
      /\s(joyfully)\s/i,
      /\s(accepted)\s/i,
      /\s(confiscation)\s/i,
      /\s(property)\s/i,
      /\s(knew)\s/i,
      /\s(content)\s/i,
      /\s(lasting)\s/i,
      /\s(possessions)\s/i,
      /\s(richly)\s/i,
      /\s(rewarded)\s/i,
      /\s(persevere)\s/i,
      /\s(money)\s/i,
      /\s(delay)\s/i,
      /\s(adulterer)\s/i,
      /\s(bed)\s/i,
      /\s(shrinks)\s/i,
      /\s(belong)\s/i,
      /\s(shrink)\s/i,
      /\s(honored)\s/i,
      /\s(ancients)\s/i,
      /\s(loving)\s/i,
      /\s(visible)\s/i,
      /\s(consuming)\s/i,
      /\s(cain)\s/i,
      /\s(awe)\s/i,
      /\s(enoch)\s/i,
      /\s(experience)\s/i,
      /\s(please)\s/i,
      /\s(comes)\s/i,
      /\s(rewards)\s/i,
      /\s(earnestly)\s/i,
      /\s(acceptably)\s/i,
      /\s(thankful)\s/i,
      /\s(home)\s/i,
      /\s(stranger)\s/i,
      /\s(tents)\s/i,
      /\s(created)\s/i,
      /\s(removing)\s/i,
      /\s(indicate)\s/i,
      /\s(shake)\s/i,
      /\s(architect)\s/i,
      /\s(childbearing)\s/i,
      /\s(enabled)\s/i,
      /\s(shook)\s/i,
      /\s(considered)\s/i,
      /\s(numerous)\s/i,
      /\s(stars)\s/i,
      /\s(sky)\s/i,
      /\s(countless)\s/i,
      /\s(sand)\s/i,
      /\s(seashore)\s/i,
      /\s(distance)\s/i,
      /\s(admitting)\s/i,
      /\s(warns)\s/i,
      /\s(opportunity)\s/i,
      /\s(return)\s/i,
      /\s(less)\s/i,
      /\s(longing)\s/i,
      /\s(embraced)\s/i,
      /\s(offspring)\s/i,
      /\s(reckoned)\s/i,
      /\s(reasoned)\s/i,
      /\s(raise)\s/i,
      /\s(manner)\s/i,
      /\s(dying)\s/i,
      /\s(worshiped)\s/i,
      /\s(leaned)\s/i,
      /\s(top)\s/i,
      /\s(exodus)\s/i,
      /\s(instructions)\s/i,
      /\s(burial)\s/i,
      /\s(bones)\s/i,
      /\s(parents)\s/i,
      /\s(hid)\s/i,
      /\s(months)\s/i,
      /\s(refuse)\s/i,
      /\s(ordinary)\s/i,
      /\s(child)\s/i,
      /\s(names)\s/i,
      /\s(edict)\s/i,
      /\s(grown)\s/i,
      /\s(pharaoh)\s/i,
      /\s(daughter)\s/i,
      /\s(chose)\s/i,
      /\s(church)\s/i,
      /\s(joyful)\s/i,
      /\s(enjoy)\s/i,
      /\s(fleeting)\s/i,
      /\s(regarded)\s/i,
      /\s(upon)\s/i,
      /\s(treasures)\s/i,
      /\s(ahead)\s/i,
      /\s(reward)\s/i,
      /\s(fearing)\s/i,
      /\s(persevered)\s/i,
      /\s(invisible)\s/i,
      /\s(passover)\s/i,
      /\s(application)\s/i,
      /\s(destroyer)\s/i,
      /\s(touch)\s/i,
      /\s(red)\s/i,
      /\s(sea)\s/i,
      /\s(dry)\s/i,
      /\s(egyptians)\s/i,
      /\s(drowned)\s/i,
      /\s(walls)\s/i,
      /\s(jericho)\s/i,
      /\s(fell)\s/i,
      /\s(army)\s/i,
      /\s(marched)\s/i,
      /\s(prostitute)\s/i,
      /\s(rahab)\s/i,
      /\s(spies)\s/i,
      /\s(tell)\s/i,
      /\s(gideon)\s/i,
      /\s(barak)\s/i,
      /\s(samson)\s/i,
      /\s(jephthah)\s/i,
      /\s(samuel)\s/i,
      /\s(conquered)\s/i,
      /\s(kingdoms)\s/i,
      /\s(administered)\s/i,
      /\s(gained)\s/i,
      /\s(shut)\s/i,
      /\s(mouths)\s/i,
      /\s(lions)\s/i,
      /\s(quenched)\s/i,
      /\s(fury)\s/i,
      /\s(jerusalem)\s/i,
      /\s(edge)\s/i,
      /\s(battle)\s/i,
      /\s(routed)\s/i,
      /\s(armies)\s/i,
      /\s(tortured)\s/i,
      /\s(refusing)\s/i,
      /\s(faced)\s/i,
      /\s(jeers)\s/i,
      /\s(flogging)\s/i,
      /\s(imprisonment)\s/i,
      /\s(stoning)\s/i,
      /\s(sawed)\s/i,
      /\s(sheepskins)\s/i,
      /\s(goatskins)\s/i,
      /\s(destitute)\s/i,
      /\s(persecuted)\s/i,
      /\s(deserts)\s/i,
      /\s(mountains)\s/i,
      /\s(caves)\s/i,
      /\s(holes)\s/i,
      /\s(ground)\s/i,
      /\s(40)\s/i,
      /\s(planned)\s/i,
      /\s(surrounded)\s/i,
      /\s(cloud)\s/i,
      /\s(hinders)\s/i,
      /\s(easily)\s/i,
      /\s(entangles)\s/i,
      /\s(run)\s/i,
      /\s(mount)\s/i,
      /\s(race)\s/i,
      /\s(marked)\s/i,
      /\s(fixing)\s/i,
      /\s(perfecter)\s/i,
      /\s(scorning)\s/i,
      /\s(opposition)\s/i,
      /\s(trembling)\s/i,
      /\s(weary)\s/i,
      /\s(struggle)\s/i,
      /\s(terrifying)\s/i,
      /\s(resisted)\s/i,
      /\s(forgotten)\s/i,
      /\s(encouragement)\s/i,
      /\s(stoned)\s/i,
      /\s(rebukes)\s/i,
      /\s(loves)\s/i,
      /\s(chastens)\s/i,
      /\s(accepts)\s/i,
      /\s(touches)\s/i,
      /\s(hardship)\s/i,
      /\s(treating)\s/i,
      /\s(undergoes)\s/i,
      /\s(legitimate)\s/i,
      /\s(moreover)\s/i,
      /\s(fathers)\s/i,
      /\s(respected)\s/i,
      /\s(further)\s/i,
      /\s(thought)\s/i,
      /\s(best)\s/i,
      /\s(seems)\s/i,
      /\s(pleasant)\s/i,
      /\s(painful)\s/i,
      /\s(harvest)\s/i,
      /\s(strengthen)\s/i,
      /\s(feeble)\s/i,
      /\s(arms)\s/i,
      /\s(knees)\s/i,
      /\s(level)\s/i,
      /\s(paths)\s/i,
      /\s(lame)\s/i,
      /\s(disabled)\s/i,
      /\s(falls)\s/i,
      /\s(bitter)\s/i,
      /\s(root)\s/i,
      /\s(grows)\s/i,
      /\s(cause)\s/i,
      /\s(trouble)\s/i,
      /\s(defile)\s/i,
      /\s(godless)\s/i,
      /\s(single)\s/i,
      /\s(meal)\s/i,
      /\s(sold)\s/i,
      /\s(rights)\s/i,
      /\s(oldest)\s/i,
      /\s(afterward)\s/i,
      /\s(touched)\s/i,
      /\s(begged)\s/i,
      /\s(gloom)\s/i,
      /\s(trumpet)\s/i,
      /\s(blast)\s/i
    ],
    used2: [
      /(\Wfellow\W)/i,
      /(\Wthief\W)/i,
      /(\Wthrow\W)/i,
      /(\Wparticipate\W)/i,
      /(\Wpioneer\W)/i,
      /(\Wletters\W)/i,
      /(\Wpleasure\W)/i,
      /(\Wexists\W)/i,
      /(\Wcall\W)/i,
      /(\Winsulted\W)/i,
      /(\Wformed\W)/i,
      /(\Wtreated\W)/i,
      /(\Wdeclare\W)/i,
      /(\Wwitnesses\W)/i,
      /(\Wthree\W)/i,
      /(\Wassembly\W)/i,
      /(\Wwhatever\W)/i,
      /(\Wpraises\W)/i,
      /(\Wsinning\W)/i,
      /(\Wseek\W)/i,
      /(\Wcondemned\W)/i,
      /(\Wdeliberately\W)/i,
      /(\Wencouraging\W)/i,
      /(\Wforeign\W)/i,
      /(\Wlived\W)/i,
      /(\Wsarah\W)/i,
      /(\Wwashed\W)/i,
      /(\Wassurance\W)/i,
      /(\Wsincere\W)/i,
      /(\Welders\W)/i,
      /(\Wwelcomed\W)/i,
      /(\Wsurprised\W)/i,
      /(\Wstrangers\W)/i,
      /(\Wthinking\W)/i,
      /(\Wburnt\W)/i,
      /(\Wtoo\W)/i,
      /(\Wshared\W)/i,
      /(\Wguilty\W)/i,
      /(\Wflock\W)/i,
      /(\Wface\W)/i,
      /(\Wesau\W)/i,
      /(\Wdestined\W)/i,
      /(\Wjoseph\W)/i,
      /(\Wdevil\W)/i,
      /(\Wways\W)/i,
      /(\Wotherwise\W)/i,
      /(\Wnor\W)/i,
      /(\Wappear\W)/i,
      /(\Wconcerning\W)/i,
      /(\Wpurified\W)/i,
      /(\Wshedding\W)/i,
      /(\Wused\W)/i,
      /(\Welements\W)/i,
      /(\Wcommanded\W)/i,
      /(\Wscroll\W)/i,
      /(\Wrefused\W)/i,
      /(\Wheld\W)/i,
      /(\Weffect\W)/i,
      /(\Wsurely\W)/i,
      /(\Wputting\W)/i,
      /(\Wcleanse\W)/i,
      /(\Wpleasures\W)/i,
      /(\Washes\W)/i,
      /(\Wbulls\W)/i,
      /(\Wcalves\W)/i,
      /(\Wcrowned\W)/i,
      /(\Wceremonial\W)/i,
      /(\Wlower\W)/i,
      /(\Wsaves\W)/i,
      /(\Wignorance\W)/i,
      /(\Wpassed\W)/i,
      /(\Wthousand\W)/i,
      /(\Wcover\W)/i,
      /(\Wstaff\W)/i,
      /(\Watonement\W)/i,
      /(\Wago\W)/i,
      /(\Wunrighteous\W)/i,
      /(\Wearthly\W)/i,
      /(\Waround\W)/i,
      /(\Wseven\W)/i,
      /(\Wregulations\W)/i,
      /(\Wdisappear\W)/i,
      /(\Wthoughts\W)/i,
      /(\Wkilled\W)/i,
      /(\Wdisobedient\W)/i,
      /(\Wobsolete\W)/i,
      /(\Wgreatest\W)/i,
      /(\Wwrite\W)/i,
      /(\Wlaws\W)/i,
      /(\Westablish\W)/i,
      /(\Wturned\W)/i,
      /(\Wtook\W)/i,
      /(\Wsought\W)/i,
      /(\Weager\W)/i,
      /(\Wheir\W)/i,
      /(\Wstrength\W)/i,
      /(\Wministry\W)/i,
      /(\Wwomen\W)/i,
      /(\Wraised\W)/i,
      /(\Wshadow\W)/i,
      /(\Wcopy\W)/i,
      /(\Wreleased\W)/i,
      /(\Wgain\W)/i,
      /(\Wtestified\W)/i,
      /(\Wconfirmed\W)/i,
      /(\Wmere\W)/i,
      /(\Wchains\W)/i,
      /(\Wuniverse\W)/i,
      /(\Wserves\W)/i,
      /(\Wpoint\W)/i,
      /(\Wreturns\W)/i,
      /(\Wsacrificed\W)/i,
      /(\Wwandered\W)/i,
      /(\Wsinners\W)/i,
      /(\Wspeech\W)/i,
      /(\Wblameless\W)/i,
      /(\Werror\W)/i,
      /(\Wworthy\W)/i,
      /(\Wchange\W)/i,
      /(\Wescape\W)/i,
      /(\Wweak\W)/i,
      /(\Wregulation\W)/i,
      /(\Wbasis\W)/i,
      /(\Wappears\W)/i,
      /(\Wcross\W)/i,
      /(\Wshame\W)/i,
      /(\Wjudah\W)/i,
      /(\Wlose\W)/i,
      /(\Witself\W)/i,
      /(\Waddresses\W)/i,
      /(\Wservant\W)/i,
      /(\Wbearing\W)/i,
      /(\Wdisciplines\W)/i,
      /(\Wpaid\W)/i,
      /(\Wreserved\W)/i,
      /(\Wwitness\W)/i,
      /(\Wcollected\W)/i,
      /(\Wfuture\W)/i,
      /(\Wdescended\W)/i,
      /(\Wisraelites\W)/i,
      /(\Wside\W)/i,
      /(\Wpunishment\W)/i,
      /(\Wrequires\W)/i,
      /(\Wholiness\W)/i,
      /(\Wdivine\W)/i,
      /(\Wtheirs\W)/i,
      /(\Wmet\W)/i,
      /(\Wsalem\W)/i,
      /(\Whealed\W)/i,
      /(\Wbehind\W)/i,
      /(\Wsecure\W)/i,
      /(\Wgreatly\W)/i,
      /(\Wsexually\W)/i,
      /(\Wimmoral\W)/i,
      /(\Wnature\W)/i,
      /(\Wwanted\W)/i,
      /(\Wpatiently\W)/i,
      /(\Wwaiting\W)/i,
      /(\Wunstable\W)/i,
      /(\Wburning\W)/i,
      /(\Wcorruption\W)/i,
      /(\Wpatience\W)/i,
      /(\Wstorm\W)/i,
      /(\Wimitate\W)/i,
      /(\Wanimal\W)/i,
      /(\Wbrings\W)/i,
      /(\Wrebellion\W)/i,
      /(\Wunjust\W)/i,
      /(\Wzion\W)/i,
      /(\Wduring\W)/i,
      /(\Wthousands\W)/i,
      /(\Wcontrol\W)/i,
      /(\Wbeings\W)/i,
      /(\Wwilderness\W)/i,
      /(\Wspeak\W)/i,
      /(\Wburned\W)/i,
      /(\Wbeauty\W)/i,
      /(\Wtested\W)/i,
      /(\Wbehavior\W)/i,
      /(\Wtried\W)/i,
      /(\Wage\W)/i,
      /(\Wreceiving\W)/i,
      /(\Wpowers\W)/i,
      /(\Wreverence\W)/i,
      /(\Wknowing\W)/i,
      /(\Wmarriage\W)/i,
      /(\Wflames\W)/i,
      /(\Wgodliness\W)/i,
      /(\Wlaying\W)/i,
      /(\Wforty\W)/i,
      /(\Woutcome\W)/i,
      /(\Wentrusted\W)/i,
      /(\Wkinds\W)/i,
      /(\Wstrange\W)/i,
      /(\Wteachings\W)/i,
      /(\Wthreats\W)/i,
      /(\Wscepter\W)/i,
      /(\Wbenefit\W)/i,
      /(\Wtrained\W)/i,
      /(\Wjustice\W)/i,
      /(\Wcamp\W)/i,
      /(\Wbore\W)/i,
      /(\Wenduring\W)/i,
      /(\Wsolid\W)/i,
      /(\Wangry\W)/i,
      /(\Wlips\W)/i,
      /(\Welementary\W)/i,
      /(\Wmutual\W)/i,
      /(\Wteach\W)/i,
      /(\Wmouth\W)/i,
      /(\Wsheep\W)/i,
      /(\Wloved\W)/i,
      /(\Waffection\W)/i,
      /(\Wobey\W)/i,
      /(\Wbriefly\W)/i,
      /(\Wsubmission\W)/i,
      /(\Wgreet\W)/i,
      /(\Wgreetings\W)/i,
      /(\Wpeter\W)/i,
      /(\Wexiles\W)/i,
      /(\Wtears\W)/i,
      /(\Wthroughout\W)/i,
      /(\Wprayers\W)/i,
      /(\Wcommendable\W)/i,
      /(\Wspare\W)/i,
      /(\Wfoundations\W)/i,
      /(\Wreceives\W)/i,
      /(\Wobedient\W)/i,
      /(\Wyours\W)/i,
      /(\Wabundance\W)/i,
      /(\Wtakes\W)/i,
      /(\Wattention\W)/i,
      /(\Wfade\W)/i,
      /(\Wgreed\W)/i,
      /(\Wready\W)/i,
      /(\Wrejoice\W)/i,
      /(\Wtrials\W)/i,
      /(\Wconduct\W)/i,
      /(\Wworth\W)/i,
      /(\Wdepraved\W)/i,
      /(\Wconsiderate\W)/i,
      /(\Wfind\W)/i,
      /(\Wsouls\W)/i,
      /(\Wbelievers\W)/i,
      /(\Wsinful\W)/i,
      /(\Wfreedom\W)/i,
      /(\Wcareful\W)/i,
      /(\Wbare\W)/i,
      /(\Wtold\W)/i,
      /(\Wlook\W)/i,
      /(\Wpay\W)/i,
      /(\Wstories\W)/i,
      /(\Wperishable\W)/i,
      /(\Wemperor\W)/i,
      /(\Wempty\W)/i,
      /(\Wfollowing\W)/i,
      /(\Wgarment\W)/i,
      /(\Wrests\W)/i,
      /(\Wdeeply\W)/i,
      /(\Wfalse\W)/i,
      /(\Wgrass\W)/i,
      /(\Wflowers\W)/i,
      /(\Wdavid\W)/i,
      /(\Wdeceit\W)/i,
      /(\Wpassage\W)/i,
      /(\Wslander\W)/i,
      /(\Wsinned\W)/i,
      /(\Wprophet\W)/i,
      /(\Wprophecy\W)/i,
      /(\Wseventh\W)/i,
      /(\Wscripture\W)/i,
      /(\Wpagans\W)/i,
      /(\Wcornerstone\W)/i,
      /(\Wvalue\W)/i,
      /(\Wnews\W)/i,
      /(\Wshort\W)/i,
      /(\Wfallen\W)/i,
      /(\Wstands\W)/i,
      /(\Wfootstool\W)/i,
      /(\Wsacred\W)/i
    ],
    abrtofull: function(abr) {
      let full = "";
      for (var i = 0; i < this.books.length; i++) {
        if (abr.indexOf(this.books[i].abr) !== -1) {
          full = this.books[i].bk + " " + abr.split(this.books[i].abr)[1];
        }
      }
      return full;
    }
  },
  matthew: {
    books: [{ bk: "Matthew", len: 28, abr: "m" }],
    t: function() {
      for (var i = 0; i < this.books.length; i++) {
        for (var j = 1; j < this.books[i].len + 1; j++) {
          this.chs.push({
            abr: this.books[i].abr + j,
            full: this.books[i].bk + " " + j
          });
        }
      }
      //console.log(this);
    },
    chs: [],
    getchnum: function() {
      let s = 0;
      for (var i = 0; i < this.books.length; i++) {
        s += this.books[i].len;
      }
      return s;
    },
    used1: [
      /\s(doubted)\s/i,
      /\s(genealogy)\s/i,
      /\s(zerah)\s/i,
      /\s(tamar)\s/i,
      /\s(rahab)\s/i,
      /\s(ruth)\s/i,
      /\s(uriah)\s/i,
      /\s(generations)\s/i,
      /\s(pledged)\s/i,
      /\s(expose)\s/i,
      /\s(public)\s/i,
      /\s(disgrace)\s/i,
      /\s(quietly)\s/i,
      /\s(conceived)\s/i,
      /\s(virgin)\s/i,
      /\s(conceive)\s/i,
      /\s(immanuel)\s/i,
      /\s(consummate)\s/i,
      /\s(disturbed)\s/i,
      /\s(ruler)\s/i,
      /\s(exact)\s/i,
      /\s(carefully)\s/i,
      /\s(overjoyed)\s/i,
      /\s(bowed)\s/i,
      /\s(presented)\s/i,
      /\s(frankincense)\s/i,
      /\s(myrrh)\s/i,
      /\s(route)\s/i,
      /\s(stayed)\s/i,
      /\s(realized)\s/i,
      /\s(outwitted)\s/i,
      /\s(boys)\s/i,
      /\s(ramah)\s/i,
      /\s(mourning)\s/i,
      /\s(rachel)\s/i,
      /\s(refusing)\s/i,
      /\s(archelaus)\s/i,
      /\s(reigning)\s/i,
      /\s(district)\s/i,
      /\s(nazarene)\s/i,
      /\s(straight)\s/i,
      /\s(paths)\s/i,
      /\s(leather)\s/i,
      /\s(belt)\s/i,
      /\s(waist)\s/i,
      /\s(locusts)\s/i,
      /\s(wild)\s/i,
      /\s(honey)\s/i,
      /\s(confessing)\s/i,
      /\s(river)\s/i,
      /\s(wrath)\s/i,
      /\s(keeping)\s/i,
      /\s(ax)\s/i,
      /\s(powerful)\s/i,
      /\s(winnowing)\s/i,
      /\s(fork)\s/i,
      /\s(clear)\s/i,
      /\s(threshing)\s/i,
      /\s(floor)\s/i,
      /\s(burning)\s/i,
      /\s(chaff)\s/i,
      /\s(unquenchable)\s/i,
      /\s(tried)\s/i,
      /\s(deter)\s/i,
      /\s(consented)\s/i,
      /\s(descending)\s/i,
      /\s(dove)\s/i,
      /\s(alighting)\s/i,
      /\s(tempted)\s/i,
      /\s(tempter)\s/i,
      /\s(concerning)\s/i,
      /\s(showed)\s/i,
      /\s(kingdoms)\s/i,
      /\s(bow)\s/i,
      /\s(attended)\s/i,
      /\s(area)\s/i,
      /\s(shadow)\s/i,
      /\s(dawned)\s/i,
      /\s(beside)\s/i,
      /\s(preparing)\s/i,
      /\s(syria)\s/i,
      /\s(severe)\s/i,
      /\s(pain)\s/i,
      /\s(decapolis)\s/i,
      /\s(meek)\s/i,
      /\s(hunger)\s/i,
      /\s(thirst)\s/i,
      /\s(merciful)\s/i,
      /\s(shown)\s/i,
      /\s(pure)\s/i,
      /\s(peacemakers)\s/i,
      /\s(insult)\s/i,
      /\s(falsely)\s/i,
      /\s(rejoice)\s/i,
      /\s(glad)\s/i,
      /\s(saltiness)\s/i,
      /\s(salty)\s/i,
      /\s(trampled)\s/i,
      /\s(underfoot)\s/i,
      /\s(hill)\s/i,
      /\s(glorify)\s/i,
      /\s(letter)\s/i,
      /\s(stroke)\s/i,
      /\s(pen)\s/i,
      /\s(accomplished)\s/i,
      /\s(sets)\s/i,
      /\s(accordingly)\s/i,
      /\s(practices)\s/i,
      /\s(surpasses)\s/i,
      /\s(murders)\s/i,
      /\s(angry)\s/i,
      /\s(raca)\s/i,
      /\s(answerable)\s/i,
      /\s(fool)\s/i,
      /\s(danger)\s/i,
      /\s(offering)\s/i,
      /\s(reconciled)\s/i,
      /\s(officer)\s/i,
      /\s(lustfully)\s/i,
      /\s(victim)\s/i,
      /\s(divorced)\s/i,
      /\s(vows)\s/i,
      /\s(footstool)\s/i,
      /\s(black)\s/i,
      /\s(simply)\s/i,
      /\s(resist)\s/i,
      /\s(slaps)\s/i,
      /\s(sue)\s/i,
      /\s(coat)\s/i,
      /\s(forces)\s/i,
      /\s(mile)\s/i,
      /\s(miles)\s/i,
      /\s(borrow)\s/i,
      /\s(sends)\s/i,
      /\s(unrighteous)\s/i,
      /\s(greet)\s/i,
      /\s(announce)\s/i,
      /\s(trumpets)\s/i,
      /\s(honored)\s/i,
      /\s(room)\s/i,
      /\s(close)\s/i,
      /\s(babbling)\s/i,
      /\s(hallowed)\s/i,
      /\s(daily)\s/i,
      /\s(debts)\s/i,
      /\s(debtors)\s/i,
      /\s(somber)\s/i,
      /\s(disfigure)\s/i,
      /\s(obvious)\s/i,
      /\s(unhealthy)\s/i,
      /\s(within)\s/i,
      /\s(air)\s/i,
      /\s(reap)\s/i,
      /\s(barns)\s/i,
      /\s(feeds)\s/i,
      /\s(worrying)\s/i,
      /\s(add)\s/i,
      /\s(flowers)\s/i,
      /\s(labor)\s/i,
      /\s(spin)\s/i,
      /\s(measure)\s/i,
      /\s(measured)\s/i,
      /\s(sawdust)\s/i,
      /\s(hypocrite)\s/i,
      /\s(clearly)\s/i,
      /\s(remove)\s/i,
      /\s(trample)\s/i,
      /\s(knock)\s/i,
      /\s(seeks)\s/i,
      /\s(knocks)\s/i,
      /\s(snake)\s/i,
      /\s(sums)\s/i,
      /\s(broad)\s/i,
      /\s(destruction)\s/i,
      /\s(clothing)\s/i,
      /\s(inwardly)\s/i,
      /\s(ferocious)\s/i,
      /\s(grapes)\s/i,
      /\s(thornbushes)\s/i,
      /\s(figs)\s/i,
      /\s(thistles)\s/i,
      /\s(likewise)\s/i,
      /\s(plainly)\s/i,
      /\s(evildoers)\s/i,
      /\s(puts)\s/i,
      /\s(foundation)\s/i,
      /\s(sand)\s/i,
      /\s(crash)\s/i,
      /\s(taught)\s/i,
      /\s(lies)\s/i,
      /\s(roof)\s/i,
      /\s(myself)\s/i,
      /\s(feast)\s/i,
      /\s(subjects)\s/i,
      /\s(believed)\s/i,
      /\s(bed)\s/i,
      /\s(wait)\s/i,
      /\s(infirmities)\s/i,
      /\s(bore)\s/i,
      /\s(foxes)\s/i,
      /\s(dens)\s/i,
      /\s(nests)\s/i,
      /\s(storm)\s/i,
      /\s(drown)\s/i,
      /\s(calm)\s/i,
      /\s(gadarenes)\s/i,
      /\s(torture)\s/i,
      /\s(feeding)\s/i,
      /\s(rushed)\s/i,
      /\s(steep)\s/i,
      /\s(bank)\s/i,
      /\s(tending)\s/i,
      /\s(including)\s/i,
      /\s(pleaded)\s/i,
      /\s(blaspheming)\s/i,
      /\s(entertain)\s/i,
      /\s(awe)\s/i,
      /\s(booth)\s/i,
      /\s(doctor)\s/i,
      /\s(sews)\s/i,
      /\s(unshrunk)\s/i,
      /\s(skins)\s/i,
      /\s(burst)\s/i,
      /\s(preserved)\s/i,
      /\s(bleeding)\s/i,
      /\s(herself)\s/i,
      /\s(noisy)\s/i,
      /\s(playing)\s/i,
      /\s(pipes)\s/i,
      /\s(laughed)\s/i,
      /\s(indoors)\s/i,
      /\s(sternly)\s/i,
      /\s(driven)\s/i,
      /\s(harassed)\s/i,
      /\s(helpless)\s/i,
      /\s(plentiful)\s/i,
      /\s(names)\s/i,
      /\s(apostles)\s/i,
      /\s(bartholomew)\s/i,
      /\s(thomas)\s/i,
      /\s(alphaeus)\s/i,
      /\s(thaddaeus)\s/i,
      /\s(zealot)\s/i,
      /\s(instructions)\s/i,
      /\s(samaritans)\s/i,
      /\s(cleanse)\s/i,
      /\s(copper)\s/i,
      /\s(belts)\s/i,
      /\s(extra)\s/i,
      /\s(worker)\s/i,
      /\s(greeting)\s/i,
      /\s(deserving)\s/i,
      /\s(welcome)\s/i,
      /\s(shake)\s/i,
      /\s(dust)\s/i,
      /\s(gomorrah)\s/i,
      /\s(shrewd)\s/i,
      /\s(local)\s/i,
      /\s(councils)\s/i,
      /\s(governors)\s/i,
      /\s(rebel)\s/i,
      /\s(parents)\s/i,
      /\s(finish)\s/i,
      /\s(student)\s/i,
      /\s(students)\s/i,
      /\s(concealed)\s/i,
      /\s(disclosed)\s/i,
      /\s(dark)\s/i,
      /\s(daylight)\s/i,
      /\s(whispered)\s/i,
      /\s(roofs)\s/i,
      /\s(hairs)\s/i,
      /\s(numbered)\s/i,
      /\s(acknowledges)\s/i,
      /\s(acknowledge)\s/i,
      /\s(disowns)\s/i,
      /\s(instructing)\s/i,
      /\s(else)\s/i,
      /\s(deaf)\s/i,
      /\s(proclaimed)\s/i,
      /\s(palaces)\s/i,
      /\s(messenger)\s/i,
      /\s(subjected)\s/i,
      /\s(violence)\s/i,
      /\s(raiding)\s/i,
      /\s(compare)\s/i,
      /\s(played)\s/i,
      /\s(pipe)\s/i,
      /\s(dance)\s/i,
      /\s(sang)\s/i,
      /\s(dirge)\s/i,
      /\s(glutton)\s/i,
      /\s(drunkard)\s/i,
      /\s(proved)\s/i,
      /\s(denounce)\s/i,
      /\s(chorazin)\s/i,
      /\s(bethsaida)\s/i,
      /\s(sackcloth)\s/i,
      /\s(ashes)\s/i,
      /\s(lifted)\s/i,
      /\s(chooses)\s/i,
      /\s(reveal)\s/i,
      /\s(weary)\s/i,
      /\s(burdened)\s/i,
      /\s(souls)\s/i,
      /\s(easy)\s/i,
      /\s(grainfields)\s/i,
      /\s(grain)\s/i,
      /\s(unlawful)\s/i,
      /\s(consecrated)\s/i,
      /\s(desecrate)\s/i,
      /\s(shriveled)\s/i,
      /\s(charges)\s/i,
      /\s(stretch)\s/i,
      /\s(stretched)\s/i,
      /\s(sound)\s/i,
      /\s(plotted)\s/i,
      /\s(delight)\s/i,
      /\s(quarrel)\s/i,
      /\s(bruised)\s/i,
      /\s(smoldering)\s/i,
      /\s(wick)\s/i,
      /\s(snuff)\s/i,
      /\s(till)\s/i,
      /\s(victory)\s/i,
      /\s(hope)\s/i,
      /\s(judges)\s/i,
      /\s(ties)\s/i,
      /\s(plunder)\s/i,
      /\s(scatters)\s/i,
      /\s(empty)\s/i,
      /\s(acquitted)\s/i,
      /\s(belly)\s/i,
      /\s(huge)\s/i,
      /\s(nineveh)\s/i,
      /\s(queen)\s/i,
      /\s(south)\s/i,
      /\s(ends)\s/i,
      /\s(arid)\s/i,
      /\s(seeking)\s/i,
      /\s(arrives)\s/i,
      /\s(unoccupied)\s/i,
      /\s(final)\s/i,
      /\s(condition)\s/i,
      /\s(pointing)\s/i,
      /\s(farmer)\s/i,
      /\s(scattering)\s/i,
      /\s(sprang)\s/i,
      /\s(shallow)\s/i,
      /\s(scorched)\s/i,
      /\s(grew)\s/i,
      /\s(choked)\s/i,
      /\s(produced)\s/i,
      /\s(knowledge)\s/i,
      /\s(secrets)\s/i,
      /\s(prophecy)\s/i,
      /\s(understanding)\s/i,
      /\s(perceiving)\s/i,
      /\s(calloused)\s/i,
      /\s(hardly)\s/i,
      /\s(closed)\s/i,
      /\s(heartsand)\s/i,
      /\s(sower)\s/i,
      /\s(snatches)\s/i,
      /\s(persecution)\s/i,
      /\s(worries)\s/i,
      /\s(deceitfulness)\s/i,
      /\s(unfruitful)\s/i,
      /\s(understands)\s/i,
      /\s(produces)\s/i,
      /\s(yielding)\s/i,
      /\s(sprouted)\s/i,
      /\s(formed)\s/i,
      /\s(pulling)\s/i,
      /\s(uproot)\s/i,
      /\s(bundles)\s/i,
      /\s(seeds)\s/i,
      /\s(grows)\s/i,
      /\s(largest)\s/i,
      /\s(garden)\s/i,
      /\s(becomes)\s/i,
      /\s(perch)\s/i,
      /\s(pounds)\s/i,
      /\s(flour)\s/i,
      /\s(dough)\s/i,
      /\s(using)\s/i,
      /\s(utter)\s/i,
      /\s(sows)\s/i,
      /\s(weed)\s/i,
      /\s(merchant)\s/i,
      /\s(value)\s/i,
      /\s(collected)\s/i,
      /\s(baskets)\s/i,
      /\s(storeroom)\s/i,
      /\s(hometown)\s/i,
      /\s(carpenter)\s/i,
      /\s(tetrarch)\s/i,
      /\s(reports)\s/i,
      /\s(birthday)\s/i,
      /\s(danced)\s/i,
      /\s(promised)\s/i,
      /\s(prompted)\s/i,
      /\s(distressed)\s/i,
      /\s(oaths)\s/i,
      /\s(beheaded)\s/i,
      /\s(carried)\s/i,
      /\s(buried)\s/i,
      /\s(solitary)\s/i,
      /\s(late)\s/i,
      /\s(considerable)\s/i,
      /\s(buffeted)\s/i,
      /\s(shortly)\s/i,
      /\s(ghost)\s/i,
      /\s(fear)\s/i,
      /\s(courage)\s/i,
      /\s(walked)\s/i,
      /\s(toward)\s/i,
      /\s(sink)\s/i,
      /\s(climbed)\s/i,
      /\s(gennesaret)\s/i,
      /\s(surrounding)\s/i,
      /\s(declares)\s/i,
      /\s(nullify)\s/i,
      /\s(far)\s/i,
      /\s(vain)\s/i,
      /\s(teachings)\s/i,
      /\s(rules)\s/i,
      /\s(defiles)\s/i,
      /\s(offended)\s/i,
      /\s(plant)\s/i,
      /\s(roots)\s/i,
      /\s(dull)\s/i,
      /\s(enters)\s/i,
      /\s(stomach)\s/i,
      /\s(theft)\s/i,
      /\s(unwashed)\s/i,
      /\s(canaanite)\s/i,
      /\s(urged)\s/i,
      /\s(keeps)\s/i,
      /\s(toss)\s/i,
      /\s(crumbs)\s/i,
      /\s(collapse)\s/i,
      /\s(afterward)\s/i,
      /\s(magadan)\s/i,
      /\s(fair)\s/i,
      /\s(weather)\s/i,
      /\s(stormy)\s/i,
      /\s(overcast)\s/i,
      /\s(forgot)\s/i,
      /\s(discussion)\s/i,
      /\s(caesarea)\s/i,
      /\s(philippi)\s/i,
      /\s(gates)\s/i,
      /\s(overcome)\s/i,
      /\s(keys)\s/i,
      /\s(rebuke)\s/i,
      /\s(stumbling)\s/i,
      /\s(block)\s/i,
      /\s(deny)\s/i,
      /\s(gain)\s/i,
      /\s(forfeit)\s/i,
      /\s(exchange)\s/i,
      /\s(taste)\s/i,
      /\s(six)\s/i,
      /\s(transfigured)\s/i,
      /\s(shone)\s/i,
      /\s(wish)\s/i,
      /\s(shelters)\s/i,
      /\s(bright)\s/i,
      /\s(covered)\s/i,
      /\s(facedown)\s/i,
      /\s(sure)\s/i,
      /\s(restore)\s/i,
      /\s(wished)\s/i,
      /\s(unbelieving)\s/i,
      /\s(perverse)\s/i,
      /\s(private)\s/i,
      /\s(grief)\s/i,
      /\s(doesn)\s/i,
      /\s(taxes)\s/i,
      /\s(exempt)\s/i,
      /\s(line)\s/i,
      /\s(catch)\s/i,
      /\s(change)\s/i,
      /\s(lowly)\s/i,
      /\s(position)\s/i,
      /\s(millstone)\s/i,
      /\s(hung)\s/i,
      /\s(neck)\s/i,
      /\s(drowned)\s/i,
      /\s(depths)\s/i,
      /\s(maimed)\s/i,
      /\s(owns)\s/i,
      /\s(wanders)\s/i,
      /\s(hills)\s/i,
      /\s(wandered)\s/i,
      /\s(happier)\s/i,
      /\s(wander)\s/i,
      /\s(perish)\s/i,
      /\s(fault)\s/i,
      /\s(won)\s/i,
      /\s(matter)\s/i,
      /\s(established)\s/i,
      /\s(pagan)\s/i,
      /\s(seventy)\s/i,
      /\s(settlement)\s/i,
      /\s(repay)\s/i,
      /\s(pity)\s/i,
      /\s(grabbed)\s/i,
      /\s(owe)\s/i,
      /\s(demanded)\s/i,
      /\s(outraged)\s/i,
      /\s(shouldn)\s/i,
      /\s(anger)\s/i,
      /\s(jailers)\s/i,
      /\s(tortured)\s/i,
      /\s(creator)\s/i,
      /\s(male)\s/i,
      /\s(female)\s/i,
      /\s(united)\s/i,
      /\s(joined)\s/i,
      /\s(permitted)\s/i,
      /\s(wives)\s/i,
      /\s(situation)\s/i,
      /\s(choose)\s/i,
      /\s(hinder)\s/i,
      /\s(inquired)\s/i,
      /\s(needle)\s/i,
      /\s(renewal)\s/i,
      /\s(thrones)\s/i,
      /\s(judging)\s/i,
      /\s(tribes)\s/i,
      /\s(houses)\s/i,
      /\s(fields)\s/i,
      /\s(hire)\s/i,
      /\s(agreed)\s/i,
      /\s(marketplace)\s/i,
      /\s(foreman)\s/i,
      /\s(wages)\s/i,
      /\s(expected)\s/i,
      /\s(grumble)\s/i,
      /\s(equal)\s/i,
      /\s(borne)\s/i,
      /\s(heat)\s/i,
      /\s(unfair)\s/i,
      /\s(envious)\s/i,
      /\s(generous)\s/i,
      /\s(kneeling)\s/i,
      /\s(favor)\s/i,
      /\s(indeed)\s/i,
      /\s(belong)\s/i,
      /\s(officials)\s/i,
      /\s(exercise)\s/i,
      /\s(slave)\s/i,
      /\s(served)\s/i,
      /\s(ransom)\s/i,
      /\s(jericho)\s/i,
      /\s(roadside)\s/i,
      /\s(quiet)\s/i,
      /\s(bethphage)\s/i,
      /\s(tied)\s/i,
      /\s(untie)\s/i,
      /\s(zion)\s/i,
      /\s(riding)\s/i,
      /\s(foal)\s/i,
      /\s(stirred)\s/i,
      /\s(buying)\s/i,
      /\s(overturned)\s/i,
      /\s(tables)\s/i,
      /\s(changers)\s/i,
      /\s(benches)\s/i,
      /\s(den)\s/i,
      /\s(robbers)\s/i,
      /\s(wonderful)\s/i,
      /\s(shouting)\s/i,
      /\s(infants)\s/i,
      /\s(forth)\s/i,
      /\s(spent)\s/i,
      /\s(wither)\s/i,
      /\s(baptism)\s/i,
      /\s(changed)\s/i,
      /\s(entering)\s/i,
      /\s(wall)\s/i,
      /\s(winepress)\s/i,
      /\s(watchtower)\s/i,
      /\s(rented)\s/i,
      /\s(farmers)\s/i,
      /\s(stoned)\s/i,
      /\s(treated)\s/i,
      /\s(heir)\s/i,
      /\s(wretches)\s/i,
      /\s(wretched)\s/i,
      /\s(rent)\s/i,
      /\s(builders)\s/i,
      /\s(rejected)\s/i,
      /\s(cornerstone)\s/i,
      /\s(marvelous)\s/i,
      /\s(crushed)\s/i,
      /\s(held)\s/i,
      /\s(oxen)\s/i,
      /\s(fattened)\s/i,
      /\s(cattle)\s/i,
      /\s(butchered)\s/i,
      /\s(business)\s/i,
      /\s(mistreated)\s/i,
      /\s(enraged)\s/i,
      /\s(army)\s/i,
      /\s(destroyed)\s/i,
      /\s(murderers)\s/i,
      /\s(hall)\s/i,
      /\s(noticed)\s/i,
      /\s(wearing)\s/i,
      /\s(speechless)\s/i,
      /\s(herodians)\s/i,
      /\s(integrity)\s/i,
      /\s(truth)\s/i,
      /\s(opinion)\s/i,
      /\s(imperial)\s/i,
      /\s(intent)\s/i,
      /\s(paying)\s/i,
      /\s(image)\s/i,
      /\s(inscription)\s/i,
      /\s(dies)\s/i,
      /\s(widow)\s/i,
      /\s(offspring)\s/i,
      /\s(seventh)\s/i,
      /\s(error)\s/i,
      /\s(silenced)\s/i,
      /\s(expert)\s/i,
      /\s(hang)\s/i,
      /\s(handuntil)\s/i,
      /\s(dared)\s/i,
      /\s(questions)\s/i,
      /\s(cumbersome)\s/i,
      /\s(loads)\s/i,
      /\s(shoulders)\s/i,
      /\s(finger)\s/i,
      /\s(phylacteries)\s/i,
      /\s(tassels)\s/i,
      /\s(garments)\s/i,
      /\s(banquets)\s/i,
      /\s(seats)\s/i,
      /\s(greeted)\s/i,
      /\s(instructors)\s/i,
      /\s(instructor)\s/i,
      /\s(exalt)\s/i,
      /\s(humbled)\s/i,
      /\s(exalted)\s/i,
      /\s(travel)\s/i,
      /\s(win)\s/i,
      /\s(convert)\s/i,
      /\s(succeeded)\s/i,
      /\s(twice)\s/i,
      /\s(fools)\s/i,
      /\s(dwells)\s/i,
      /\s(tenth)\s/i,
      /\s(spices)\s/i,
      /\s(mint)\s/i,
      /\s(dill)\s/i,
      /\s(cumin)\s/i,
      /\s(neglected)\s/i,
      /\s(faithfulness)\s/i,
      /\s(practiced)\s/i,
      /\s(latter)\s/i,
      /\s(neglecting)\s/i,
      /\s(former)\s/i,
      /\s(strain)\s/i,
      /\s(gnat)\s/i,
      /\s(swallow)\s/i,
      /\s(greed)\s/i,
      /\s(indulgence)\s/i,
      /\s(pharisee)\s/i,
      /\s(whitewashed)\s/i,
      /\s(bones)\s/i,
      /\s(unclean)\s/i,
      /\s(hypocrisy)\s/i,
      /\s(decorate)\s/i,
      /\s(graves)\s/i,
      /\s(shedding)\s/i,
      /\s(testify)\s/i,
      /\s(descendants)\s/i,
      /\s(complete)\s/i,
      /\s(started)\s/i,
      /\s(sages)\s/i,
      /\s(flog)\s/i,
      /\s(pursue)\s/i,
      /\s(shed)\s/i,
      /\s(abel)\s/i,
      /\s(zechariah)\s/i,
      /\s(berekiah)\s/i,
      /\s(hen)\s/i,
      /\s(gathers)\s/i,
      /\s(chicks)\s/i,
      /\s(wings)\s/i,
      /\s(desolate)\s/i,
      /\s(buildings)\s/i,
      /\s(deceives)\s/i,
      /\s(claiming)\s/i,
      /\s(rumors)\s/i,
      /\s(alarmed)\s/i,
      /\s(famines)\s/i,
      /\s(earthquakes)\s/i,
      /\s(pains)\s/i,
      /\s(increase)\s/i,
      /\s(abomination)\s/i,
      /\s(desolation)\s/i,
      /\s(daniel)\s/i,
      /\s(reader)\s/i,
      /\s(mountains)\s/i,
      /\s(housetop)\s/i,
      /\s(dreadful)\s/i,
      /\s(nursing)\s/i,
      /\s(mothers)\s/i,
      /\s(flight)\s/i,
      /\s(winter)\s/i,
      /\s(unequaled)\s/i,
      /\s(equaled)\s/i,
      /\s(survive)\s/i,
      /\s(shortened)\s/i,
      /\s(messiahs)\s/i,
      /\s(wonders)\s/i,
      /\s(tells)\s/i,
      /\s(inner)\s/i,
      /\s(rooms)\s/i,
      /\s(visible)\s/i,
      /\s(carcass)\s/i,
      /\s(vultures)\s/i,
      /\s(darkened)\s/i,
      /\s(moon)\s/i,
      /\s(stars)\s/i,
      /\s(shaken)\s/i,
      /\s(peoples)\s/i,
      /\s(trumpet)\s/i,
      /\s(lesson)\s/i,
      /\s(twigs)\s/i,
      /\s(tender)\s/i,
      /\s(summer)\s/i,
      /\s(marrying)\s/i,
      /\s(ark)\s/i,
      /\s(grinding)\s/i,
      /\s(mill)\s/i,
      /\s(thief)\s/i,
      /\s(returns)\s/i,
      /\s(staying)\s/i,
      /\s(begins)\s/i,
      /\s(drunkards)\s/i,
      /\s(assign)\s/i,
      /\s(however)\s/i,
      /\s(jars)\s/i,
      /\s(drowsy)\s/i,
      /\s(midnight)\s/i,
      /\s(rang)\s/i,
      /\s(trimmed)\s/i,
      /\s(ability)\s/i,
      /\s(hole)\s/i,
      /\s(settled)\s/i,
      /\s(harvesting)\s/i,
      /\s(lazy)\s/i,
      /\s(deposit)\s/i,
      /\s(bankers)\s/i,
      /\s(worthless)\s/i,
      /\s(separates)\s/i,
      /\s(clothed)\s/i,
      /\s(depart)\s/i,
      /\s(cursed)\s/i,
      /\s(punishment)\s/i,
      /\s(palace)\s/i,
      /\s(schemed)\s/i,
      /\s(riot)\s/i,
      /\s(leper)\s/i,
      /\s(alabaster)\s/i,
      /\s(jar)\s/i,
      /\s(expensive)\s/i,
      /\s(waste)\s/i,
      /\s(bothering)\s/i,
      /\s(memory)\s/i,
      /\s(counted)\s/i,
      /\s(watched)\s/i,
      /\s(opportunity)\s/i,
      /\s(unleavened)\s/i,
      /\s(preparations)\s/i,
      /\s(certain)\s/i,
      /\s(celebrate)\s/i,
      /\s(dipped)\s/i,
      /\s(betrays)\s/i,
      /\s(covenant)\s/i,
      /\s(forgiveness)\s/i,
      /\s(vine)\s/i,
      /\s(sung)\s/i,
      /\s(hymn)\s/i,
      /\s(flock)\s/i,
      /\s(gethsemane)\s/i,
      /\s(sorrowful)\s/i,
      /\s(troubled)\s/i,
      /\s(overwhelmed)\s/i,
      /\s(sorrow)\s/i,
      /\s(farther)\s/i,
      /\s(weak)\s/i,
      /\s(resting)\s/i,
      /\s(armed)\s/i,
      /\s(arranged)\s/i,
      /\s(signal)\s/i,
      /\s(kiss)\s/i,
      /\s(kissed)\s/i,
      /\s(drew)\s/i,
      /\s(cutting)\s/i,
      /\s(draw)\s/i,
      /\s(disposal)\s/i,
      /\s(legions)\s/i,
      /\s(leading)\s/i,
      /\s(rebellion)\s/i,
      /\s(capture)\s/i,
      /\s(writings)\s/i,
      /\s(deserted)\s/i,
      /\s(fled)\s/i,
      /\s(outcome)\s/i,
      /\s(sanhedrin)\s/i,
      /\s(evidence)\s/i,
      /\s(rebuild)\s/i,
      /\s(silent)\s/i,
      /\s(mighty)\s/i,
      /\s(tore)\s/i,
      /\s(fists)\s/i,
      /\s(slapped)\s/i,
      /\s(hit)\s/i,
      /\s(gateway)\s/i,
      /\s(accent)\s/i,
      /\s(swore)\s/i,
      /\s(crowed)\s/i,
      /\s(remembered)\s/i,
      /\s(wept)\s/i,
      /\s(bitterly)\s/i,
      /\s(remorse)\s/i,
      /\s(sinned)\s/i,
      /\s(hanged)\s/i,
      /\s(treasury)\s/i,
      /\s(decided)\s/i,
      /\s(foreigners)\s/i,
      /\s(meanwhile)\s/i,
      /\s(accused)\s/i,
      /\s(amazement)\s/i,
      /\s(custom)\s/i,
      /\s(suffered)\s/i,
      /\s(deal)\s/i,
      /\s(persuaded)\s/i,
      /\s(crime)\s/i,
      /\s(nowhere)\s/i,
      /\s(uproar)\s/i,
      /\s(starting)\s/i,
      /\s(washed)\s/i,
      /\s(released)\s/i,
      /\s(praetorium)\s/i,
      /\s(company)\s/i,
      /\s(stripped)\s/i,
      /\s(scarlet)\s/i,
      /\s(twisted)\s/i,
      /\s(crown)\s/i,
      /\s(hail)\s/i,
      /\s(cyrene)\s/i,
      /\s(forced)\s/i,
      /\s(golgotha)\s/i,
      /\s(skull)\s/i,
      /\s(gall)\s/i,
      /\s(tasting)\s/i,
      /\s(lots)\s/i,
      /\s(passed)\s/i,
      /\s(hurled)\s/i,
      /\s(shaking)\s/i,
      /\s(trusts)\s/i,
      /\s(rescue)\s/i,
      /\s(heaped)\s/i,
      /\s(lema)\s/i,
      /\s(sabachthani)\s/i,
      /\s(forsaken)\s/i,
      /\s(sponge)\s/i,
      /\s(vinegar)\s/i,
      /\s(curtain)\s/i,
      /\s(torn)\s/i,
      /\s(top)\s/i,
      /\s(bottom)\s/i,
      /\s(rocks)\s/i,
      /\s(split)\s/i,
      /\s(guarding)\s/i,
      /\s(exclaimed)\s/i,
      /\s(watching)\s/i,
      /\s(arimathea)\s/i,
      /\s(wrapped)\s/i,
      /\s(linen)\s/i,
      /\s(big)\s/i,
      /\s(entrance)\s/i,
      /\s(opposite)\s/i,
      /\s(next)\s/i,
      /\s(preparation)\s/i,
      /\s(alive)\s/i,
      /\s(deceiver)\s/i,
      /\s(deception)\s/i,
      /\s(putting)\s/i,
      /\s(seal)\s/i,
      /\s(posting)\s/i,
      /\s(week)\s/i,
      /\s(snow)\s/i,
      /\s(hurried)\s/i,
      /\s(clasped)\s/i,
      /\s(devised)\s/i,
      /\s(plan)\s/i,
      /\s(sum)\s/i,
      /\s(stole)\s/i,
      /\s(gets)\s/i,
      /\s(satisfy)\s/i,
      /\s(story)\s/i,
      /\s(widely)\s/i,
      /\s(circulated)\s/i,
      /\s(eleven)\s/i
    ],
    used2: [
      /\s(perez)\s/i,
      /\s(perez)\s/i,
      /\s(hezron)\s/i,
      /\s(hezron)\s/i,
      /\s(ram)\s/i,
      /\s(ram)\s/i,
      /\s(amminadab)\s/i,
      /\s(amminadab)\s/i,
      /\s(nahshon)\s/i,
      /\s(nahshon)\s/i,
      /\s(salmon)\s/i,
      /\s(salmon)\s/i,
      /\s(boaz)\s/i,
      /\s(boaz)\s/i,
      /\s(obed)\s/i,
      /\s(obed)\s/i,
      /\s(jesse)\s/i,
      /\s(jesse)\s/i,
      /\s(rehoboam)\s/i,
      /\s(rehoboam)\s/i,
      /\s(abijah)\s/i,
      /\s(abijah)\s/i,
      /\s(asa)\s/i,
      /\s(asa)\s/i,
      /\s(jehoshaphat)\s/i,
      /\s(jehoshaphat)\s/i,
      /\s(jehoram)\s/i,
      /\s(jehoram)\s/i,
      /\s(uzziah)\s/i,
      /\s(uzziah)\s/i,
      /\s(jotham)\s/i,
      /\s(jotham)\s/i,
      /\s(ahaz)\s/i,
      /\s(ahaz)\s/i,
      /\s(hezekiah)\s/i,
      /\s(hezekiah)\s/i,
      /\s(manasseh)\s/i,
      /\s(manasseh)\s/i,
      /\s(amon)\s/i,
      /\s(amon)\s/i,
      /\s(josiah)\s/i,
      /\s(josiah)\s/i,
      /\s(jeconiah)\s/i,
      /\s(jeconiah)\s/i,
      /\s(shealtiel)\s/i,
      /\s(shealtiel)\s/i,
      /\s(zerubbabel)\s/i,
      /\s(zerubbabel)\s/i,
      /\s(abihud)\s/i,
      /\s(abihud)\s/i,
      /\s(eliakim)\s/i,
      /\s(eliakim)\s/i,
      /\s(azor)\s/i,
      /\s(azor)\s/i,
      /\s(zadok)\s/i,
      /\s(zadok)\s/i,
      /\s(akim)\s/i,
      /\s(akim)\s/i,
      /\s(elihud)\s/i,
      /\s(elihud)\s/i,
      /\s(eleazar)\s/i,
      /\s(eleazar)\s/i,
      /\s(matthan)\s/i,
      /\s(matthan)\s/i,
      /\s(pregnant)\s/i,
      /\s(pregnant)\s/i,
      /\s(considered)\s/i,
      /\s(considered)\s/i,
      /\s(rulers)\s/i,
      /\s(rulers)\s/i,
      /\s(secretly)\s/i,
      /\s(secretly)\s/i,
      /\s(too)\s/i,
      /\s(too)\s/i,
      /\s(stopped)\s/i,
      /\s(stopped)\s/i,
      /\s(country)\s/i,
      /\s(country)\s/i,
      /\s(gone)\s/i,
      /\s(gone)\s/i,
      /\s(escape)\s/i,
      /\s(escape)\s/i,
      /\s(furious)\s/i,
      /\s(furious)\s/i,
      /\s(orders)\s/i,
      /\s(orders)\s/i,
      /\s(years)\s/i,
      /\s(years)\s/i,
      /\s(accordance)\s/i,
      /\s(accordance)\s/i,
      /\s(learned)\s/i,
      /\s(learned)\s/i,
      /\s(comforted)\s/i,
      /\s(comforted)\s/i,
      /\s(preaching)\s/i,
      /\s(preaching)\s/i,
      /\s(hair)\s/i,
      /\s(hair)\s/i,
      /\s(baptizing)\s/i,
      /\s(baptizing)\s/i,
      /\s(repentance)\s/i,
      /\s(repentance)\s/i,
      /\s(stones)\s/i,
      /\s(stones)\s/i,
      /\s(trees)\s/i,
      /\s(trees)\s/i,
      /\s(baptize)\s/i,
      /\s(baptize)\s/i,
      /\s(sandals)\s/i,
      /\s(sandals)\s/i,
      /\s(gathering)\s/i,
      /\s(gathering)\s/i,
      /\s(barn)\s/i,
      /\s(barn)\s/i,
      /\s(proper)\s/i,
      /\s(proper)\s/i,
      /\s(forty)\s/i,
      /\s(forty)\s/i,
      /\s(highest)\s/i,
      /\s(highest)\s/i,
      /\s(strike)\s/i,
      /\s(strike)\s/i,
      /\s(test)\s/i,
      /\s(test)\s/i,
      /\s(splendor)\s/i,
      /\s(splendor)\s/i,
      /\s(zebulun)\s/i,
      /\s(zebulun)\s/i,
      /\s(naphtali)\s/i,
      /\s(naphtali)\s/i,
      /\s(beyond)\s/i,
      /\s(beyond)\s/i,
      /\s(andrew)\s/i,
      /\s(andrew)\s/i,
      /\s(casting)\s/i,
      /\s(casting)\s/i,
      /\s(net)\s/i,
      /\s(net)\s/i,
      /\s(fishermen)\s/i,
      /\s(fishermen)\s/i,
      /\s(nets)\s/i,
      /\s(nets)\s/i,
      /\s(throughout)\s/i,
      /\s(throughout)\s/i,
      /\s(proclaiming)\s/i,
      /\s(proclaiming)\s/i,
      /\s(healing)\s/i,
      /\s(healing)\s/i,
      /\s(ill)\s/i,
      /\s(ill)\s/i,
      /\s(various)\s/i,
      /\s(various)\s/i,
      /\s(diseases)\s/i,
      /\s(diseases)\s/i,
      /\s(seizures)\s/i,
      /\s(seizures)\s/i,
      /\s(across)\s/i,
      /\s(across)\s/i,
      /\s(theirs)\s/i,
      /\s(theirs)\s/i,
      /\s(inherit)\s/i,
      /\s(inherit)\s/i,
      /\s(persecute)\s/i,
      /\s(persecute)\s/i,
      /\s(kinds)\s/i,
      /\s(kinds)\s/i,
      /\s(salt)\s/i,
      /\s(salt)\s/i,
      /\s(longer)\s/i,
      /\s(longer)\s/i,
      /\s(lamp)\s/i,
      /\s(lamp)\s/i,
      /\s(bowl)\s/i,
      /\s(bowl)\s/i,
      /\s(shine)\s/i,
      /\s(shine)\s/i,
      /\s(abolish)\s/i,
      /\s(abolish)\s/i,
      /\s(disappear)\s/i,
      /\s(disappear)\s/i,
      /\s(smallest)\s/i,
      /\s(smallest)\s/i,
      /\s(commands)\s/i,
      /\s(commands)\s/i,
      /\s(teaches)\s/i,
      /\s(teaches)\s/i,
      /\s(court)\s/i,
      /\s(court)\s/i,
      /\s(offer)\s/i,
      /\s(offer)\s/i,
      /\s(settle)\s/i,
      /\s(settle)\s/i,
      /\s(matters)\s/i,
      /\s(matters)\s/i,
      /\s(adversary)\s/i,
      /\s(adversary)\s/i,
      /\s(taking)\s/i,
      /\s(taking)\s/i,
      /\s(paid)\s/i,
      /\s(paid)\s/i,
      /\s(penny)\s/i,
      /\s(penny)\s/i,
      /\s(commit)\s/i,
      /\s(commit)\s/i,
      /\s(looks)\s/i,
      /\s(looks)\s/i,
      /\s(gouge)\s/i,
      /\s(gouge)\s/i,
      /\s(certificate)\s/i,
      /\s(certificate)\s/i,
      /\s(marries)\s/i,
      /\s(marries)\s/i,
      /\s(commits)\s/i,
      /\s(commits)\s/i,
      /\s(swear)\s/i,
      /\s(swear)\s/i,
      /\s(tooth)\s/i,
      /\s(tooth)\s/i,
      /\s(cheek)\s/i,
      /\s(cheek)\s/i,
      /\s(shirt)\s/i,
      /\s(shirt)\s/i,
      /\s(needy)\s/i,
      /\s(needy)\s/i,
      /\s(giving)\s/i,
      /\s(giving)\s/i,
      /\s(street)\s/i,
      /\s(street)\s/i,
      /\s(corners)\s/i,
      /\s(corners)\s/i,
      /\s(unseen)\s/i,
      /\s(unseen)\s/i,
      /\s(lead)\s/i,
      /\s(lead)\s/i,
      /\s(temptation)\s/i,
      /\s(temptation)\s/i,
      /\s(deliver)\s/i,
      /\s(deliver)\s/i,
      /\s(faces)\s/i,
      /\s(faces)\s/i,
      /\s(wash)\s/i,
      /\s(wash)\s/i,
      /\s(moths)\s/i,
      /\s(moths)\s/i,
      /\s(vermin)\s/i,
      /\s(vermin)\s/i,
      /\s(thieves)\s/i,
      /\s(thieves)\s/i,
      /\s(healthy)\s/i,
      /\s(healthy)\s/i,
      /\s(masters)\s/i,
      /\s(masters)\s/i,
      /\s(devoted)\s/i,
      /\s(devoted)\s/i,
      /\s(despise)\s/i,
      /\s(despise)\s/i,
      /\s(valuable)\s/i,
      /\s(valuable)\s/i,
      /\s(dressed)\s/i,
      /\s(dressed)\s/i,
      /\s(grass)\s/i,
      /\s(grass)\s/i,
      /\s(run)\s/i,
      /\s(run)\s/i,
      /\s(seek)\s/i,
      /\s(seek)\s/i,
      /\s(judged)\s/i,
      /\s(judged)\s/i,
      /\s(use)\s/i,
      /\s(use)\s/i,
      /\s(pearls)\s/i,
      /\s(pearls)\s/i,
      /\s(tear)\s/i,
      /\s(tear)\s/i,
      /\s(receives)\s/i,
      /\s(receives)\s/i,
      /\s(narrow)\s/i,
      /\s(narrow)\s/i,
      /\s(wide)\s/i,
      /\s(wide)\s/i,
      /\s(leads)\s/i,
      /\s(leads)\s/i,
      /\s(wolves)\s/i,
      /\s(wolves)\s/i,
      /\s(pick)\s/i,
      /\s(pick)\s/i,
      /\s(bears)\s/i,
      /\s(bears)\s/i,
      /\s(prophesy)\s/i,
      /\s(prophesy)\s/i,
      /\s(perform)\s/i,
      /\s(perform)\s/i,
      /\s(streams)\s/i,
      /\s(streams)\s/i,
      /\s(blew)\s/i,
      /\s(blew)\s/i,
      /\s(cleansed)\s/i,
      /\s(cleansed)\s/i,
      /\s(terribly)\s/i,
      /\s(terribly)\s/i,
      /\s(deserve)\s/i,
      /\s(deserve)\s/i,
      /\s(following)\s/i,
      /\s(following)\s/i,
      /\s(west)\s/i,
      /\s(west)\s/i,
      /\s(lying)\s/i,
      /\s(lying)\s/i,
      /\s(fever)\s/i,
      /\s(fever)\s/i,
      /\s(drove)\s/i,
      /\s(drove)\s/i,
      /\s(lay)\s/i,
      /\s(lay)\s/i,
      /\s(bury)\s/i,
      /\s(bury)\s/i,
      /\s(suddenly)\s/i,
      /\s(suddenly)\s/i,
      /\s(swept)\s/i,
      /\s(swept)\s/i,
      /\s(re)\s/i,
      /\s(re)\s/i,
      /\s(completely)\s/i,
      /\s(completely)\s/i,
      /\s(kind)\s/i,
      /\s(kind)\s/i,
      /\s(obey)\s/i,
      /\s(obey)\s/i,
      /\s(appointed)\s/i,
      /\s(appointed)\s/i,
      /\s(reported)\s/i,
      /\s(reported)\s/i,
      /\s(stepped)\s/i,
      /\s(stepped)\s/i,
      /\s(crossed)\s/i,
      /\s(crossed)\s/i,
      /\s(mat)\s/i,
      /\s(mat)\s/i,
      /\s(knowing)\s/i,
      /\s(knowing)\s/i,
      /\s(easier)\s/i,
      /\s(easier)\s/i,
      /\s(walk)\s/i,
      /\s(walk)\s/i,
      /\s(praised)\s/i,
      /\s(praised)\s/i,
      /\s(desire)\s/i,
      /\s(desire)\s/i,
      /\s(sacrifice)\s/i,
      /\s(sacrifice)\s/i,
      /\s(patch)\s/i,
      /\s(patch)\s/i,
      /\s(cloth)\s/i,
      /\s(cloth)\s/i,
      /\s(garment)\s/i,
      /\s(garment)\s/i,
      /\s(pull)\s/i,
      /\s(pull)\s/i,
      /\s(pour)\s/i,
      /\s(pour)\s/i,
      /\s(ruined)\s/i,
      /\s(ruined)\s/i,
      /\s(leader)\s/i,
      /\s(leader)\s/i,
      /\s(behind)\s/i,
      /\s(behind)\s/i,
      /\s(edge)\s/i,
      /\s(edge)\s/i,
      /\s(touch)\s/i,
      /\s(touch)\s/i,
      /\s(turned)\s/i,
      /\s(turned)\s/i,
      /\s(restored)\s/i,
      /\s(restored)\s/i,
      /\s(talk)\s/i,
      /\s(talk)\s/i,
      /\s(prince)\s/i,
      /\s(prince)\s/i,
      /\s(villages)\s/i,
      /\s(villages)\s/i,
      /\s(impure)\s/i,
      /\s(impure)\s/i,
      /\s(philip)\s/i,
      /\s(philip)\s/i,
      /\s(iscariot)\s/i,
      /\s(iscariot)\s/i,
      /\s(rather)\s/i,
      /\s(rather)\s/i,
      /\s(lost)\s/i,
      /\s(lost)\s/i,
      /\s(freely)\s/i,
      /\s(freely)\s/i,
      /\s(worth)\s/i,
      /\s(worth)\s/i,
      /\s(village)\s/i,
      /\s(village)\s/i,
      /\s(return)\s/i,
      /\s(return)\s/i,
      /\s(sending)\s/i,
      /\s(sending)\s/i,
      /\s(snakes)\s/i,
      /\s(snakes)\s/i,
      /\s(doves)\s/i,
      /\s(doves)\s/i,
      /\s(hated)\s/i,
      /\s(hated)\s/i,
      /\s(firm)\s/i,
      /\s(firm)\s/i,
      /\s(members)\s/i,
      /\s(members)\s/i,
      /\s(ear)\s/i,
      /\s(ear)\s/i,
      /\s(sparrows)\s/i,
      /\s(sparrows)\s/i,
      /\s(care)\s/i,
      /\s(care)\s/i,
      /\s(suppose)\s/i,
      /\s(suppose)\s/i,
      /\s(loves)\s/i,
      /\s(loves)\s/i,
      /\s(cold)\s/i,
      /\s(cold)\s/i,
      /\s(reed)\s/i,
      /\s(reed)\s/i,
      /\s(swayed)\s/i,
      /\s(swayed)\s/i,
      /\s(prophesied)\s/i,
      /\s(prophesied)\s/i,
      /\s(marketplaces)\s/i,
      /\s(marketplaces)\s/i,
      /\s(repented)\s/i,
      /\s(repented)\s/i,
      /\s(heavens)\s/i,
      /\s(heavens)\s/i,
      /\s(hades)\s/i,
      /\s(hades)\s/i,
      /\s(remained)\s/i,
      /\s(remained)\s/i,
      /\s(praise)\s/i,
      /\s(praise)\s/i,
      /\s(revealed)\s/i,
      /\s(revealed)\s/i,
      /\s(yoke)\s/i,
      /\s(yoke)\s/i,
      /\s(gentle)\s/i,
      /\s(gentle)\s/i,
      /\s(humble)\s/i,
      /\s(humble)\s/i,
      /\s(burden)\s/i,
      /\s(burden)\s/i,
      /\s(duty)\s/i,
      /\s(duty)\s/i,
      /\s(pit)\s/i,
      /\s(pit)\s/i,
      /\s(hold)\s/i,
      /\s(hold)\s/i,
      /\s(cry)\s/i,
      /\s(cry)\s/i,
      /\s(strong)\s/i,
      /\s(strong)\s/i,
      /\s(slander)\s/i,
      /\s(slander)\s/i,
      /\s(recognized)\s/i,
      /\s(recognized)\s/i,
      /\s(stored)\s/i,
      /\s(stored)\s/i,
      /\s(adulterous)\s/i,
      /\s(adulterous)\s/i,
      /\s(none)\s/i,
      /\s(none)\s/i,
      /\s(order)\s/i,
      /\s(order)\s/i,
      /\s(takes)\s/i,
      /\s(takes)\s/i,
      /\s(wanting)\s/i,
      /\s(wanting)\s/i,
      /\s(shore)\s/i,
      /\s(shore)\s/i,
      /\s(path)\s/i,
      /\s(path)\s/i,
      /\s(rocky)\s/i,
      /\s(rocky)\s/i,
      /\s(withered)\s/i,
      /\s(withered)\s/i,
      /\s(abundance)\s/i,
      /\s(abundance)\s/i,
      /\s(otherwise)\s/i,
      /\s(otherwise)\s/i,
      /\s(longed)\s/i,
      /\s(longed)\s/i,
      /\s(short)\s/i,
      /\s(short)\s/i,
      /\s(choke)\s/i,
      /\s(choke)\s/i,
      /\s(harvesters)\s/i,
      /\s(harvesters)\s/i,
      /\s(mustard)\s/i,
      /\s(mustard)\s/i,
      /\s(branches)\s/i,
      /\s(branches)\s/i,
      /\s(mixed)\s/i,
      /\s(mixed)\s/i,
      /\s(worked)\s/i,
      /\s(worked)\s/i,
      /\s(creation)\s/i,
      /\s(creation)\s/i,
      /\s(blazing)\s/i,
      /\s(blazing)\s/i,
      /\s(furnace)\s/i,
      /\s(furnace)\s/i,
      /\s(bought)\s/i,
      /\s(bought)\s/i,
      /\s(caught)\s/i,
      /\s(caught)\s/i,
      /\s(moved)\s/i,
      /\s(moved)\s/i,
      /\s(miraculous)\s/i,
      /\s(miraculous)\s/i,
      /\s(powers)\s/i,
      /\s(powers)\s/i,
      /\s(isn)\s/i,
      /\s(isn)\s/i,
      /\s(offense)\s/i,
      /\s(offense)\s/i,
      /\s(lack)\s/i,
      /\s(lack)\s/i,
      /\s(attendants)\s/i,
      /\s(attendants)\s/i,
      /\s(herodias)\s/i,
      /\s(herodias)\s/i,
      /\s(platter)\s/i,
      /\s(platter)\s/i,
      /\s(request)\s/i,
      /\s(request)\s/i,
      /\s(granted)\s/i,
      /\s(granted)\s/i,
      /\s(privately)\s/i,
      /\s(privately)\s/i,
      /\s(landed)\s/i,
      /\s(landed)\s/i,
      /\s(remote)\s/i,
      /\s(remote)\s/i,
      /\s(getting)\s/i,
      /\s(getting)\s/i,
      /\s(directed)\s/i,
      /\s(directed)\s/i,
      /\s(satisfied)\s/i,
      /\s(satisfied)\s/i,
      /\s(number)\s/i,
      /\s(number)\s/i,
      /\s(besides)\s/i,
      /\s(besides)\s/i,
      /\s(dismissed)\s/i,
      /\s(dismissed)\s/i,
      /\s(dawn)\s/i,
      /\s(dawn)\s/i,
      /\s(doubt)\s/i,
      /\s(doubt)\s/i,
      /\s(curses)\s/i,
      /\s(curses)\s/i,
      /\s(lips)\s/i,
      /\s(lips)\s/i,
      /\s(merely)\s/i,
      /\s(merely)\s/i,
      /\s(crying)\s/i,
      /\s(crying)\s/i,
      /\s(laid)\s/i,
      /\s(laid)\s/i,
      /\s(feed)\s/i,
      /\s(feed)\s/i,
      /\s(tested)\s/i,
      /\s(tested)\s/i,
      /\s(red)\s/i,
      /\s(red)\s/i,
      /\s(interpret)\s/i,
      /\s(interpret)\s/i,
      /\s(appearance)\s/i,
      /\s(appearance)\s/i,
      /\s(signs)\s/i,
      /\s(signs)\s/i,
      /\s(discussed)\s/i,
      /\s(discussed)\s/i,
      /\s(telling)\s/i,
      /\s(telling)\s/i,
      /\s(bind)\s/i,
      /\s(bind)\s/i,
      /\s(loose)\s/i,
      /\s(loose)\s/i,
      /\s(loosed)\s/i,
      /\s(loosed)\s/i,
      /\s(suffer)\s/i,
      /\s(suffer)\s/i,
      /\s(concerns)\s/i,
      /\s(concerns)\s/i,
      /\s(cloud)\s/i,
      /\s(cloud)\s/i,
      /\s(greatly)\s/i,
      /\s(greatly)\s/i,
      /\s(boy)\s/i,
      /\s(boy)\s/i,
      /\s(couldn)\s/i,
      /\s(couldn)\s/i,
      /\s(impossible)\s/i,
      /\s(impossible)\s/i,
      /\s(drachma)\s/i,
      /\s(drachma)\s/i,
      /\s(cause)\s/i,
      /\s(cause)\s/i,
      /\s(coin)\s/i,
      /\s(coin)\s/i,
      /\s(yours)\s/i,
      /\s(yours)\s/i,
      /\s(ninety)\s/i,
      /\s(ninety)\s/i,
      /\s(refuse)\s/i,
      /\s(refuse)\s/i,
      /\s(treat)\s/i,
      /\s(treat)\s/i,
      /\s(agree)\s/i,
      /\s(agree)\s/i,
      /\s(accounts)\s/i,
      /\s(accounts)\s/i,
      /\s(knees)\s/i,
      /\s(knees)\s/i,
      /\s(patient)\s/i,
      /\s(patient)\s/i,
      /\s(canceled)\s/i,
      /\s(canceled)\s/i,
      /\s(coins)\s/i,
      /\s(coins)\s/i,
      /\s(belongs)\s/i,
      /\s(belongs)\s/i,
      /\s(commandments)\s/i,
      /\s(commandments)\s/i,
      /\s(young)\s/i,
      /\s(young)\s/i,
      /\s(sell)\s/i,
      /\s(sell)\s/i,
      /\s(sad)\s/i,
      /\s(sad)\s/i,
      /\s(sits)\s/i,
      /\s(sits)\s/i,
      /\s(glorious)\s/i,
      /\s(glorious)\s/i,
      /\s(noon)\s/i,
      /\s(noon)\s/i,
      /\s(being)\s/i,
      /\s(being)\s/i,
      /\s(grant)\s/i,
      /\s(grant)\s/i,
      /\s(louder)\s/i,
      /\s(louder)\s/i,
      /\s(needs)\s/i,
      /\s(needs)\s/i,
      /\s(cloaks)\s/i,
      /\s(cloaks)\s/i,
      /\s(selling)\s/i,
      /\s(selling)\s/i,
      /\s(prayer)\s/i,
      /\s(prayer)\s/i,
      /\s(bethany)\s/i,
      /\s(bethany)\s/i,
      /\s(leaves)\s/i,
      /\s(leaves)\s/i,
      /\s(origin)\s/i,
      /\s(origin)\s/i,
      /\s(prostitutes)\s/i,
      /\s(prostitutes)\s/i,
      /\s(dug)\s/i,
      /\s(dug)\s/i,
      /\s(respect)\s/i,
      /\s(respect)\s/i,
      /\s(inheritance)\s/i,
      /\s(inheritance)\s/i,
      /\s(plans)\s/i,
      /\s(plans)\s/i,
      /\s(trap)\s/i,
      /\s(trap)\s/i,
      /\s(finally)\s/i,
      /\s(finally)\s/i,
      /\s(power)\s/i,
      /\s(power)\s/i,
      /\s(commandment)\s/i,
      /\s(commandment)\s/i,
      /\s(calls)\s/i,
      /\s(calls)\s/i,
      /\s(seat)\s/i,
      /\s(seat)\s/i,
      /\s(heavy)\s/i,
      /\s(heavy)\s/i,
      /\s(important)\s/i,
      /\s(important)\s/i,
      /\s(shut)\s/i,
      /\s(shut)\s/i,
      /\s(dish)\s/i,
      /\s(dish)\s/i,
      /\s(self)\s/i,
      /\s(self)\s/i,
      /\s(beautiful)\s/i,
      /\s(beautiful)\s/i,
      /\s(wickedness)\s/i,
      /\s(wickedness)\s/i,
      /\s(ancestors)\s/i,
      /\s(ancestors)\s/i,
      /\s(murdered)\s/i,
      /\s(murdered)\s/i,
      /\s(wars)\s/i,
      /\s(wars)\s/i,
      /\s(nation)\s/i,
      /\s(nation)\s/i,
      /\s(gospel)\s/i,
      /\s(gospel)\s/i,
      /\s(preached)\s/i,
      /\s(preached)\s/i,
      /\s(distress)\s/i,
      /\s(distress)\s/i,
      /\s(lightning)\s/i,
      /\s(lightning)\s/i,
      /\s(bodies)\s/i,
      /\s(bodies)\s/i,
      /\s(clouds)\s/i,
      /\s(clouds)\s/i,
      /\s(noah)\s/i,
      /\s(noah)\s/i,
      /\s(flood)\s/i,
      /\s(flood)\s/i,
      /\s(happiness)\s/i,
      /\s(happiness)\s/i,
      /\s(interest)\s/i,
      /\s(interest)\s/i,
      /\s(goats)\s/i,
      /\s(goats)\s/i,
      /\s(needed)\s/i,
      /\s(needed)\s/i,
      /\s(visit)\s/i,
      /\s(visit)\s/i,
      /\s(needing)\s/i,
      /\s(needing)\s/i,
      /\s(assembled)\s/i,
      /\s(assembled)\s/i,
      /\s(caiaphas)\s/i,
      /\s(caiaphas)\s/i,
      /\s(reclining)\s/i,
      /\s(reclining)\s/i,
      /\s(price)\s/i,
      /\s(price)\s/i,
      /\s(burial)\s/i,
      /\s(burial)\s/i,
      /\s(crows)\s/i,
      /\s(crows)\s/i,
      /\s(declared)\s/i,
      /\s(declared)\s/i,
      /\s(die)\s/i,
      /\s(die)\s/i,
      /\s(betrayer)\s/i,
      /\s(betrayer)\s/i,
      /\s(swords)\s/i,
      /\s(swords)\s/i,
      /\s(clubs)\s/i,
      /\s(clubs)\s/i,
      /\s(greetings)\s/i,
      /\s(greetings)\s/i,
      /\s(courtyard)\s/i,
      /\s(courtyard)\s/i,
      /\s(spit)\s/i,
      /\s(spit)\s/i,
      /\s(denied)\s/i,
      /\s(denied)\s/i,
      /\s(executed)\s/i,
      /\s(executed)\s/i,
      /\s(responsibility)\s/i,
      /\s(responsibility)\s/i,
      /\s(potter)\s/i,
      /\s(potter)\s/i,
      /\s(set)\s/i,
      /\s(set)\s/i,
      /\s(prisoner)\s/i,
      /\s(prisoner)\s/i,
      /\s(robe)\s/i,
      /\s(robe)\s/i,
      /\s(offered)\s/i,
      /\s(offered)\s/i,
      /\s(rebels)\s/i,
      /\s(rebels)\s/i,
      /\s(insults)\s/i,
      /\s(insults)\s/i,
      /\s(eli)\s/i,
      /\s(eli)\s/i,
      /\s(shook)\s/i,
      /\s(shook)\s/i,
      /\s(earthquake)\s/i,
      /\s(earthquake)\s/i,
      /\s(rolled)\s/i,
      /\s(rolled)\s/i
    ],
    abrtofull: function(abr) {
      let full = "";
      for (var i = 0; i < this.books.length; i++) {
        if (abr.indexOf(this.books[i].abr) !== -1) {
          full = this.books[i].bk + " " + abr.split(this.books[i].abr)[1];
        }
      }
      return full;
    }
  },
  acts: {
    books: [{ bk: "Acts", len: 28, abr: "a" }],
    t: function() {
      for (var i = 0; i < this.books.length; i++) {
        for (var j = 1; j < this.books[i].len + 1; j++) {
          this.chs.push({
            abr: this.books[i].abr + j,
            full: this.books[i].bk + " " + j
          });
        }
      }
      //console.log(this);
    },
    chs: [],
    getchnum: function() {
      let s = 0;
      for (var i = 0; i < this.books.length; i++) {
        s += this.books[i].len;
      }
      return s;
    }
  },
  romans: {
    books: [
      { bk: "Romans", len: 16, abr: "r" },
      { bk: "James", len: 5, abr: "j" }
    ],
    t: function() {
      for (var i = 0; i < this.books.length; i++) {
        for (var j = 1; j < this.books[i].len + 1; j++) {
          this.chs.push({
            abr: this.books[i].abr + j,
            full: this.books[i].bk + " " + j
          });
        }
      }
      //console.log(this);
    },
    chs: [],
    getchnum: function() {
      let s = 0;
      for (var i = 0; i < this.books.length; i++) {
        s += this.books[i].len;
      }
      return s;
    }
  }
};
chlist[season].t();
var log = window.log;
var localsave = window.localsave;
var error = new Audio(
  "https://cdn.glitch.com/7942a189-4df2-4068-8077-3c39a76c0db1%2FComputer%20Error%20Alert.mp3?v=1580768453999"
);
var endverse = new Audio(
  "https://cdn.glitch.com/7942a189-4df2-4068-8077-3c39a76c0db1%2FUI_Quirky27.mp3?v=1585075175931"
);
var random = function random(a, b) {
  return Math.floor(Math.random() * b) + a;
};
var time = 0;
var prompterizer = false;
var started = false;
var up = 1;
var domver = document.getElementById("verse");
var domref = document.getElementById("refrence");
var dtimer = document.getElementById("timer");
var tq = document.getElementById("t-q");
var chset = document.getElementById("ch-select");
var qset = document.getElementById("ch-type");
var pset = document.getElementById("ch-lvl");
var sbtn = document.getElementById("type-start-btn");
var set = document.getElementById("settings");
var lvl;
var text = "";
var ch = ""
function setup(s) {
  for (var i = 0; i < chlist[s].chs.length; i++) {
    let e = document.createElement("option");
    e.setAttribute("value", chlist[s].chs[i].abr);
    e.innerText = chlist[s].chs[i].full;
    chset.appendChild(e);
  }
}
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
setup(season);
function postData(url, data, then) {
  // Default options are marked with *
  return fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json"
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: data,
    cache: "default" // body data type must match "Content-Type" header
  })
    .then(response => {
      then(response);
    })
    .catch(function(error) {
      //console.log("no internet doing default", error, data);
      location.reload();
    });
}
pset.addEventListener("change", function(e) {
  lvl = e.target.value;
});
qset.addEventListener("input", function(e) {
  if (e.target.value === "b") {
    prompterizer = false;
  } else {
    prompterizer = true;
  }
});
sbtn.addEventListener("click", function(e) {
  lvl = JSON.parse(pset.value);
  //console.log(prompterizer, lvl);
  var doc = window.nlp(text[chset.options.selectedIndex]);
  let djson = doc.json();
  //console.log(djson);
  let ver = "<li>";
  ch = 
  started = true;
  tq.style.display = "block";
  set.style.display = "none";
  var prop = prompterizer ? "prompterizer: " : "blanks: ";
  domref.innerHTML = prop + chset.options[chset.options.selectedIndex].label;
  if (prompterizer) {
    for (var i = 0; i < djson.length; i++) {
      for (var j = 0; j < djson[i].terms.length; j++) {
        if (/[0-9]/g.test(djson[i].terms[j].text)) {
          djson[i].terms[j].text = djson[i].terms[j].text;
        } else {
          djson[i].terms[j].text =
            djson[i].terms[j].text.charAt(0) +
            djson[i].terms[j].post.replace(/\s/g, "");
        }
        if (
          djson[i].terms[j].tags.indexOf("NumericValue")!==-1 &&
          djson[i].terms[j].text !== "1"
        ) {
          ver = ver + "</li>";
          domver.innerHTML += ver;
          ver = "<li>";
        } else if (i === djson.length - 1 && j === djson[i].terms.length - 1) {
          ver +=
            djson[i].terms[j].text.replace(
              /([0-9]+)/g,
              "<br> $1 &nbsp;&nbsp;&nbsp;"
            ) + " ";
          ver = ver + "</li>";
          domver.innerHTML += ver;
          ver = "<li>";
        } else {
          ver += djson[i].terms[j].text + " ";
        }
      }
    }
  } else {
    if (lvl === 1) {
      for (var i = 0; i < djson.length; i++) {
        for (var j = 0; j < djson[i].terms.length; j++) {
          if (djson[i].terms[j].text.length > 7) {
            let _ssss = "";
            for (var l = 0; l < djson[i].terms[j].text.length; l++) {
              _ssss += "_";
            }
            djson[i].terms[j].text =
              djson[i].terms[j].text.charAt(0) +
              _ssss +
              djson[i].terms[j].post.replace(/\s/g, "");
          }
          //console.log(djson[i].terms[j], ver);
          if (
            djson[i].terms[j].tags.indexOf("NumericValue")!==-1 &&
            djson[i].terms[j].text !== "1"
          ) {
            ver = ver + "</li>";
            domver.innerHTML += ver;
            ver = "<li>";
          } else if (
            i === djson.length - 1 &&
            j === djson[i].terms.length - 1
          ) {
            ver += djson[i].terms[j].text.replace(/([0-9]+)/g, "") + " ";
            ver = ver + "</li>";
            domver.innerHTML += ver;
            ver = "<li>";
          } else {
            ver += djson[i].terms[j].text.replace(/([0-9]+)/g, "") + " ";
          }
        }
      }
    } else if (lvl === 2) {
      for (var i = 0; i < djson.length; i++) {
        for (var j = 0; j < djson[i].terms.length; j++) {
          if (
            djson[i].terms[j].tags.indexOf("ProperNoun") !== -1
          ) {
            let _ssss = "";
            for (var l = 0; l < djson[i].terms[j].text.length; l++) {
              _ssss += "_";
            }
            djson[i].terms[j].text =
              djson[i].terms[j].text.charAt(0) +
              _ssss +
              djson[i].terms[j].post.replace(/\s/g, "");
          }
          //console.log(djson[i].terms[j], ver);
          if (
            djson[i].terms[j].tags.indexOf("NumericValue")!==-1 &&
            djson[i].terms[j].text !== "1"
          ) {
            ver = ver + "</li>";
            domver.innerHTML += ver;
            ver = "<li>";
          } else if (
            i === djson.length - 1 &&
            j === djson[i].terms.length - 1
          ) {
            ver += djson[i].terms[j].text.replace(/([0-9]+)/g, "") + " ";
            ver = ver + "</li>";
            domver.innerHTML += ver;
            ver = "<li>";
          } else {
            ver += djson[i].terms[j].text.replace(/([0-9]+)/g, "") + " ";
          }
        }
      }
    } else if (lvl === 3) {
      for (var i = 0; i < djson.length; i++) {
        for (var j = 0; j < djson[i].terms.length; j++) {
          if (djson[i].terms[j].tags.indexOf("ProperNoun") !== -1||djson[i].terms[j].tags.indexOf("Pronoun") !== -1) {
            let _ssss = "";
            for (var l = 0; l < djson[i].terms[j].text.length; l++) {
              _ssss += "_";
            }
            djson[i].terms[j].text =
              djson[i].terms[j].text.charAt(0) +
              _ssss +
              djson[i].terms[j].post.replace(/\s/g, "");
          }
          //console.log(djson[i].terms[j], ver);
          if (
            djson[i].terms[j].tags.indexOf("NumericValue")!==-1 &&
            djson[i].terms[j].text !== "1"
          ) {
            ver = ver + "</li>";
            domver.innerHTML += ver;
            ver = "<li>";
          } else if (
            i === djson.length - 1 &&
            j === djson[i].terms.length - 1
          ) {
            ver += djson[i].terms[j].text.replace(/([0-9]+)/g, "") + " ";
            ver = ver + "</li>";
            domver.innerHTML += ver;
            ver = "<li>";
          } else {
            ver += djson[i].terms[j].text.replace(/([0-9]+)/g, "") + " ";
          }
        }
      }
    } else if (lvl === 4) {
      for (var i = 0; i < djson.length; i++) {
        for (var j = 0; j < djson[i].terms.length; j++) {
          if (
            djson[i].terms[j].tags.indexOf("Noun") !== -1
          ) {
            let _ssss = "";
            for (var l = 0; l < djson[i].terms[j].text.length; l++) {
              _ssss += "_";
            }
            djson[i].terms[j].text =
              djson[i].terms[j].text.charAt(0) +
              _ssss +
              djson[i].terms[j].post.replace(/\s/g, "");
          }
          //console.log(djson[i].terms[j], ver);
          if (
            djson[i].terms[j].tags.indexOf("NumericValue")!==-1 &&
            djson[i].terms[j].text !== "1"
          ) {
            ver = ver + "</li>";
            domver.innerHTML += ver;
            ver = "<li>";
          } else if (
            i === djson.length - 1 &&
            j === djson[i].terms.length - 1
          ) {
            ver += djson[i].terms[j].text.replace(/([0-9]+)/g, "") + " ";
            ver = ver + "</li>";
            domver.innerHTML += ver;
            ver = "<li>";
          } else {
            ver += djson[i].terms[j].text.replace(/([0-9]+)/g, "") + " ";
          }
        }
      }
    } else if (lvl === 5) {
      for (var i = 0; i < djson.length; i++) {
        for (var j = 0; j < djson[i].terms.length; j++) {
          if (
            djson[i].terms[j].tags.indexOf("Noun") !== -1 ||
            djson[i].terms[j].tags.indexOf("Verb") !== -1
          ) {
            let _ssss = "";
            for (var l = 0; l < djson[i].terms[j].text.length; l++) {
              _ssss += "_";
            }
            djson[i].terms[j].text =
              djson[i].terms[j].text.charAt(0) +
              _ssss +
              djson[i].terms[j].post.replace(/\s/g, "");
          }
          //console.log(djson[i].terms[j], ver);
          if (
            djson[i].terms[j].tags.indexOf("NumericValue")!==-1 &&
            djson[i].terms[j].text !== "1"
          ) {
            ver = ver + "</li>";
            domver.innerHTML += ver;
            ver = "<li>";
          } else if (
            i === djson.length - 1 &&
            j === djson[i].terms.length - 1
          ) {
            ver += djson[i].terms[j].text.replace(/([0-9]+)/g, "") + " ";
            ver = ver + "</li>";
            domver.innerHTML += ver;
            ver = "<li>";
          } else {
            ver += djson[i].terms[j].text.replace(/([0-9]+)/g, "") + " ";
          }
        }
      }
    } else if (lvl === 6) {
      for (var i = 0; i < djson.length; i++) {
        for (var j = 0; j < djson[i].terms.length; j++) {
          if (
            djson[i].terms[j].tags.indexOf("Noun") !== -1 ||
            djson[i].terms[j].tags.indexOf("Verb") !== -1 ||
            djson[i].terms[j].text.length > 3
          ) {
            let _ssss = "";
            for (var l = 0; l < djson[i].terms[j].text.length; l++) {
              _ssss += "_";
            }
            djson[i].terms[j].text =
              djson[i].terms[j].text.charAt(0) +
              _ssss +
              djson[i].terms[j].post.replace(/\s/g, "");
          }
          //console.log(djson[i].terms[j], ver);
          if (
            djson[i].terms[j].tags.indexOf("NumericValue")!==-1 &&
            djson[i].terms[j].text !== "1"
          ) {
            ver = ver + "</li>";
            domver.innerHTML += ver;
            ver = "<li>";
          } else if (
            i === djson.length - 1 &&
            j === djson[i].terms.length - 1
          ) {
            ver += djson[i].terms[j].text.replace(/([0-9]+)/g, "") + " ";
            ver = ver + "</li>";
            domver.innerHTML += ver;
            ver = "<li>";
          } else {
            ver += djson[i].terms[j].text.replace(/([0-9]+)/g, "") + " ";
          }
        }
      }
    } else if (lvl === 7) {
      for (var i = 0; i < djson.length; i++) {
        for (var j = 0; j < djson[i].terms.length; j++) {
          if (djson[i].terms[j].text.length > 7) {
            let _ssss = "";
            for (var l = 0; l < djson[i].terms[j].text.length; l++) {
              _ssss += "_";
            }
            djson[i].terms[j].text =
              _ssss + djson[i].terms[j].post.replace(/\s/g, "");
          }
          //console.log(djson[i].terms[j], ver);
          if (
            djson[i].terms[j].tags.indexOf("NumericValue")!==-1 &&
            djson[i].terms[j].text !== "1"
          ) {
            ver = ver + "</li>";
            domver.innerHTML += ver;
            ver = "<li>";
          } else if (
            i === djson.length - 1 &&
            j === djson[i].terms.length - 1
          ) {
            ver += djson[i].terms[j].text.replace(/([0-9]+)/g, "") + " ";
            ver = ver + "</li>";
            domver.innerHTML += ver;
            ver = "<li>";
          } else {
            ver += djson[i].terms[j].text.replace(/([0-9]+)/g, "") + " ";
          }
        }
      }
    } else if (lvl === 8) {
      for (var i = 0; i < djson.length; i++) {
        for (var j = 0; j < djson[i].terms.length; j++) {
          if (
            djson[i].terms[j].tags.indexOf("ProperNoun") !== -1
          ) {
            let _ssss = "";
            for (var l = 0; l < djson[i].terms[j].text.length; l++) {
              _ssss += "_";
            }
            djson[i].terms[j].text =
              _ssss + djson[i].terms[j].post.replace(/\s/g, "");
          }
          //console.log(djson[i].terms[j], ver);
          if (
            djson[i].terms[j].tags.indexOf("NumericValue")!==-1 &&
            djson[i].terms[j].text !== "1"
          ) {
            ver = ver + "</li>";
            domver.innerHTML += ver;
            ver = "<li>";
          } else if (
            i === djson.length - 1 &&
            j === djson[i].terms.length - 1
          ) {
            ver += djson[i].terms[j].text.replace(/([0-9]+)/g, "") + " ";
            ver = ver + "</li>";
            domver.innerHTML += ver;
            ver = "<li>";
          } else {
            ver += djson[i].terms[j].text.replace(/([0-9]+)/g, "") + " ";
          }
        }
      }
    } else if (lvl === 9) {
      for (var i = 0; i < djson.length; i++) {
        for (var j = 0; j < djson[i].terms.length; j++) {
          if (djson[i].terms[j].tags.indexOf("Noun") !== -1) {
            let _ssss = "";
            for (var l = 0; l < djson[i].terms[j].text.length; l++) {
              _ssss += "_";
            }
            djson[i].terms[j].text =
              _ssss + djson[i].terms[j].post.replace(/\s/g, "");
          }
          //console.log(djson[i].terms[j], ver);
          if (
            djson[i].terms[j].tags.indexOf("NumericValue")!==-1 &&
            djson[i].terms[j].text !== "1"
          ) {
            ver = ver + "</li>";
            domver.innerHTML += ver;
            ver = "<li>";
          } else if (
            i === djson.length - 1 &&
            j === djson[i].terms.length - 1
          ) {
            ver += djson[i].terms[j].text.replace(/([0-9]+)/g, "") + " ";
            ver = ver + "</li>";
            domver.innerHTML += ver;
            ver = "<li>";
          } else {
            ver += djson[i].terms[j].text.replace(/([0-9]+)/g, "") + " ";
          }
        }
      }
    } else if (lvl === 10) {
      for (var i = 0; i < djson.length; i++) {
        for (var j = 0; j < djson[i].terms.length; j++) {
          if (
            djson[i].terms[j].tags.indexOf("Noun") !== -1 ||
            djson[i].terms[j].text.length > 5
          ) {
            let _ssss = "";
            for (var l = 0; l < djson[i].terms[j].text.length; l++) {
              _ssss += "_";
            }
            djson[i].terms[j].text =
              _ssss + djson[i].terms[j].post.replace(/\s/g, "");
          }
          //console.log(djson[i].terms[j], ver);
          if (
            djson[i].terms[j].tags.indexOf("NumericValue")!==-1 &&
            djson[i].terms[j].text !== "1"
          ) {
            ver = ver + "</li>";
            domver.innerHTML += ver;
            ver = "<li>";
          } else if (
            i === djson.length - 1 &&
            j === djson[i].terms.length - 1
          ) {
            ver += djson[i].terms[j].text.replace(/([0-9]+)/g, "") + " ";
            ver = ver + "</li>";
            domver.innerHTML += ver;
            ver = "<li>";
          } else {
            ver += djson[i].terms[j].text.replace(/([0-9]+)/g, "") + " ";
          }
        }
      }
    } else if (lvl === 11) {
      for (var i = 0; i < djson.length; i++) {
        for (var j = 0; j < djson[i].terms.length; j++) {
          if (
            djson[i].terms[j].tags.indexOf("Noun") !== -1 ||
            djson[i].terms[j].tags.indexOf("Verb") !== -1
          ) {
            let _ssss = "";
            for (var l = 0; l < djson[i].terms[j].text.length; l++) {
              _ssss += "_";
            }
            djson[i].terms[j].text =
              _ssss + djson[i].terms[j].post.replace(/\s/g, "");
          }
          //console.log(djson[i].terms[j], ver);
          if (
            djson[i].terms[j].tags.indexOf("NumericValue")!==-1 &&
            djson[i].terms[j].text !== "1"
          ) {
            ver = ver + "</li>";
            domver.innerHTML += ver;
            ver = "<li>";
          } else if (
            i === djson.length - 1 &&
            j === djson[i].terms.length - 1
          ) {
            ver += djson[i].terms[j].text.replace(/([0-9]+)/g, "") + " ";
            ver = ver + "</li>";
            domver.innerHTML += ver;
            ver = "<li>";
          } else {
            ver += djson[i].terms[j].text.replace(/([0-9]+)/g, "") + " ";
          }
        }
      }
    } else if (lvl === 12) {
      for (var i = 0; i < djson.length; i++) {
        for (var j = 0; j < djson[i].terms.length; j++) {
          if (
            djson[i].terms[j].tags.indexOf("Noun") !== -1 ||
            djson[i].terms[j].tags.indexOf("Verb") !== -1 ||
            djson[i].terms[j].text.length > 3
          ) {
            let _ssss = "";
            for (var l = 0; l < djson[i].terms[j].text.length; l++) {
              _ssss += "_";
            }
            djson[i].terms[j].text =
              _ssss + djson[i].terms[j].post.replace(/\s/g, "");
          }
          //console.log(djson[i].terms[j], ver);
          if (
            djson[i].terms[j].tags.indexOf("NumericValue")!==-1 &&
            djson[i].terms[j].text !== "1"
          ) {
            ver = ver + "</li>";
            domver.innerHTML += ver;
            ver = "<li>";
          } else if (
            i === djson.length - 1 &&
            j === djson[i].terms.length - 1
          ) {
            ver += djson[i].terms[j].text.replace(/([0-9]+)/g, "") + " ";
            ver = ver + "</li>";
            domver.innerHTML += ver;
            ver = "<li>";
          } else {
            ver += djson[i].terms[j].text.replace(/([0-9]+)/g, "") + " ";
          }
        }
      }
    }
  }
});
/*
document.addEventListener("keydown", function(e) {
  e.preventDefault();
  if (started) {
    var key = keys[e.keyCode];
    var boxverse = verse.slice(w, verse.length);
    //console.log(verse, w, verses[v], v, boxverse);
    if (verse[w].substr(0, 1).toLowerCase() === key) {
      score += 10;
      domver.innerHTML = "";
      domscore.innerHTML = "score: " + score;
      w++;
      for (var i = 0; i < w; i++) {
        domver.innerHTML += verse[i] + " ";
      }
      if (keysright[key] === undefined) {
        keysright[key] = 0;
      }
      keysright[key] += 1;
      right++;
      if (w >= verse.length) {
        w = complete ? 0 : 3;
        endverse.play();
        versesdone2.push(book + " " + chapter + ":" + verses[v].ver);
        //console.log(vchange, v);
        verses[v].inc++;
        versesdone++;
        if (!quote) {
          shuffleArray(verses);
          verses.sort(function(a, b) {
            return a.inc - b.inc;
          });
        }
        v = vchange;
        if (v < verses.length) {
          vchange = quote ? vchange + 1 : 0;
          verse = verses[v].str.split(" ").filter(word => word.length !== 0);
          var boxverse = verse.slice(w, verse.length);
          fillbox(boxverse);
          //console.log(verse, w, verses[v], v);
          domver.innerHTML = "";
          domver.innerHTML = verses[v].str
            .split(" ")
            .slice(0, w)
            .toString()
            .replace(/,/g, " ");
          domref.innerHTML = book + " " + chapter + ":" + verses[v].ver;
        }
      }
    } else {
      if (keyswrong[key] === undefined) {
        keyswrong[key] = 0;
      }
      keyswrong[key] += 1;
      errors++;
      //console.log("wrong");
      score -= 5;
      domscore.innerHTML = "score: " + score;
      error.play();
    }
  }
  if (e.keyCode === 13 && !started) {
    if (chset.value !== "" && qset.value !== "" && pset.value !== "") {
      for (var i = 0; i < str[c].length; i++) {
        verses.push({ str: str[c][i], inc: 1, ver: i + 1 });
      }
      if (!quote) {
        shuffleArray(verses);
      }
      w = complete ? 0 : 3;
      v = 0;
      time = quote ? 0 : 300;
      up = quote ? 1 : -1;
      dtimer.textContent =
        Math.floor(time / 60) + ":" + (time % 60 ? time % 60 : "00");
      vchange = quote ? vchange + 1 : 0;
      started = true;
      domref.innerHTML = book + " " + chapter + ":" + verses[0].ver;
      domver.innerHTML = "";
      domscore.innerHTML = "score: " + score;
      tq.style.display = "block";
      set.style.display = "none";
      domver.innerHTML = verses[0].str
        .split(" ")
        .slice(0, w)
        .toString()
        .replace(/,/g, " ");
      verse = verses[v].str.split(" ").filter(word => word.length !== 0);
      var boxverse = verse.slice(w, verse.length);
      fillbox(boxverse);
    }
  }
});
*/
var gettextListener = function gettextListener() {
  text = this.responseText;
  text = text.replace(/([0-9]+)/g, " $1");
  text = text.replace(/([“”\?\.\,\?]+)/g, "$1 ");
  text = text.split(/(?<![0-9])1(?![0-9])/g);
  text.shift();
};
/*
var countIt = function countIt() {
  ////console.log(parseFloat(time))
  if (started) {
    if (prompterizer) {
      if (v < verses.length) {
        time = time + up;
        dtimer.textContent =
          Math.floor(time / 60) + ":" + (time % 60 ? time % 60 : "00");
      } else {
        window.clearInterval(timer);
        postData(
          "/postprompter",
          JSON.stringify({
            ch: ch,
            score: time,
            prompt: complete ? 0 : 3,
            user: JSON.parse(localsave("userdata", "get")).name,
            pass: JSON.parse(localsave("userdata", "get")).pass,
            right: right,
            wrong: errors,
            keyswrong: keyswrong,
            keysright: keysright,
            versesdone: versesdone,
            versesdone2: versesdone2
          }),
          function(data) {
            //console.log(JSON.stringify(data));
            location.reload();
          }
        );
      }
    } else {
      if (time > 0) {
        time = time + up;
        dtimer.textContent =
          Math.floor(time / 60) + ":" + (time % 60 ? time % 60 : "00");
      } else {
        //console.log(
          JSON.stringify({
            ch: ch,
            score: score,
            prompt: complete ? 0 : 3,
            name: JSON.parse(localsave("userdata", "get")).name,
            pw: JSON.parse(localsave("userdata", "get")).pass,
            right: right,
            wrong: errors,
            keyswrong: keyswrong,
            keysright: keysright,
            versesdone: versesdone,
            versesdone2: versesdone2
          })
        );
        window.clearInterval(timer);
        //console.log(JSON.parse(localsave("userdata", "get")));
        postData(
          "/postcomplete",
          JSON.stringify({
            ch: ch,
            score: score,
            prompt: complete ? 0 : 3,
            user: JSON.parse(localsave("userdata", "get")).name,
            pass: JSON.parse(localsave("userdata", "get")).pass,
            right: right,
            wrong: errors,
            keyswrong: keyswrong,
            keysright: keysright,
            versesdone: versesdone,
            versesdone2: versesdone2
          }),
          function(data) {
            //console.log(JSON.stringify(data));
            location.reload();
          }
        );
      }
    }
  }
};

var timer = window.setInterval(countIt, 1000);*/

var hebrewsRequest = new XMLHttpRequest();
hebrewsRequest.onload = gettextListener;
hebrewsRequest.open("get", "/gettext/" + localStorage.playerseason);
hebrewsRequest.send();
