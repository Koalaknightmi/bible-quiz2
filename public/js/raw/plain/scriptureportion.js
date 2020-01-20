"use strict";
var responsiveVoice = window.responsiveVoice;
import log from "./log";
var dreams = [];
// define variables that reference elements on our page
var dreamsList = document.getElementById('dreams');
var unique = [/\s(puts)\s/i,/\s(position)\s/i,/\s(forewarned)\s/i,/\s(scriptures)\s/i,/\s(distort)\s/i,/\s(contain)\s/i,/\s(writes)\s/i,/\s(wisdom)\s/i,/\s(wrote)\s/i,/\s(paul)\s/i,/\s(spotless)\s/i,/\s(dwells)\s/i,/\s(heat)\s/i,/\s(melt)\s/i,/\s(speed)\s/i,/\s(roar)\s/i,/\s(wanting)\s/i,/\s(patient)\s/i,/\s(slowness)\s/i,/\s(slow)\s/i,/\s(deluged)\s/i,/\s(waters)\s/i,/\s(goes)\s/i,/\s(scoffing)\s/i,/\s(scoffers)\s/i,/\s(apostles)\s/i,/\s(recall)\s/i,/\s(wholesome)\s/i,/\s(stimulate)\s/i,/\s(reminders)\s/i,/\s(radiance)\s/i,/\s(letter)\s/i,/\s(exact)\s/i,/\s(representation)\s/i,/\s(mud)\s/i,/\s(sustaining)\s/i,/\s(wallowing)\s/i,/\s(sow)\s/i,/\s(vomit)\s/i,/\s(provided)\s/i,/\s(purification)\s/i,/\s(dog)\s/i,/\s(proverbs)\s/i,/\s(backs)\s/i,/\s(worse)\s/i,/\s(overcome)\s/i,/\s(entangled)\s/i,/\s(mastered)\s/i,/\s(depravity)\s/i,/\s(escaping)\s/i,/\s(entice)\s/i,/\s(lustful)\s/i,/\s(appealing)\s/i,/\s(boastful)\s/i,/\s(inherited)\s/i,/\s(blackest)\s/i,/\s(driven)\s/i,/\s(mists)\s/i,/\s(springs)\s/i,/\s(madness)\s/i,/\s(restrained)\s/i,/\s(donkey)\s/i,/\s(wrongdoing)\s/i,/\s(rebuked)\s/i,/\s(wages)\s/i,/\s(bezer)\s/i,/\s(balaam)\s/i,/\s(straight)\s/i,/\s(brood)\s/i,/\s(accursed)\s/i,/\s(experts)\s/i,/\s(seduce)\s/i,/\s(stop)\s/i,/\s(adultery)\s/i,/\s(feast)\s/i,/\s(reveling)\s/i,/\s(blemishes)\s/i,/\s(blots)\s/i,/\s(daylight)\s/i,/\s(broad)\s/i,/\s(carouse)\s/i,/\s(servants)\s/i,/\s(idea)\s/i,/\s(caught)\s/i,/\s(instinct)\s/i,/\s(creatures)\s/i,/\s(unreasoning)\s/i,/\s(hated)\s/i,/\s(blaspheme)\s/i,/\s(stronger)\s/i,/\s(although)\s/i,/\s(companions)\s/i,/\s(anointing)\s/i,/\s(celestial)\s/i,/\s(oil)\s/i,/\s(arrogant)\s/i,/\s(bold)\s/i,/\s(despise)\s/i,/\s(corrupt)\s/i,/\s(especially)\s/i,/\s(rescue)\s/i,/\s(knows)\s/i,/\s(tormented)\s/i,/\s(distressed)\s/i,/\s(lot)\s/i,/\s(rescued)\s/i,/\s(happen)\s/i,/\s(gomorrah)\s/i,/\s(wear)\s/i,/\s(sodom)\s/i,/\s(cities)\s/i,/\s(preacher)\s/i,/\s(roll)\s/i,/\s(protected)\s/i,/\s(flood)\s/i,/\s(robe)\s/i,/\s(ancient)\s/i,/\s(hell)\s/i,/\s(sleeping)\s/i,/\s(hanging)\s/i,/\s(condemnation)\s/i,/\s(sit)\s/i,/\s(fabricated)\s/i,/\s(exploit)\s/i,/\s(disrepute)\s/i,/\s(ministering)\s/i,/\s(swift)\s/i,/\s(bought)\s/i,/\s(sovereign)\s/i,/\s(denying)\s/i,/\s(heresies)\s/i,/\s(destructive)\s/i,/\s(introduce)\s/i,/\s(secretly)\s/i,/\s(origin)\s/i,/\s(interpretation)\s/i,/\s(drift)\s/i,/\s(rises)\s/i,/\s(star)\s/i,/\s(morning)\s/i,/\s(dawns)\s/i,/\s(binding)\s/i,/\s(dark)\s/i,/\s(violation)\s/i,/\s(shining)\s/i,/\s(reliable)\s/i,/\s(prophetic)\s/i,/\s(ourselves)\s/i,/\s(majestic)\s/i,/\s(eyewitnesses)\s/i,/\s(ignore)\s/i,/\s(devised)\s/i,/\s(cleverly)\s/i,/\s(announced)\s/i,/\s(departure)\s/i,/\s(signs)\s/i,/\s(wonders)\s/i,/\s(miracles)\s/i,/\s(tent)\s/i,/\s(memory)\s/i,/\s(refresh)\s/i,/\s(distributed)\s/i,/\s(remind)\s/i,/\s(subjected)\s/i,/\s(welcome)\s/i,/\s(rich)\s/i,/\s(election)\s/i,/\s(confirm)\s/i,/\s(forgetting)\s/i,/\s(mankind)\s/i,/\s(mindful)\s/i,/\s(blind)\s/i,/\s(nearsighted)\s/i,/\s(unproductive)\s/i,/\s(ineffective)\s/i,/\s(measure)\s/i,/\s(increasing)\s/i,/\s(qualities)\s/i,/\s(possess)\s/i,/\s(add)\s/i,/\s(caused)\s/i,/\s(ours)\s/i,/\s(simon)\s/i,/\s(kiss)\s/i,/\s(mark)\s/i,/\s(sends)\s/i,/\s(babylon)\s/i,/\s(fast)\s/i,/\s(taste)\s/i,/\s(stand)\s/i,/\s(testifying)\s/i,/\s(silas)\s/i,/\s(steadfast)\s/i,/\s(fitting)\s/i,/\s(strong)\s/i,/\s(restore)\s/i,/\s(undergoing)\s/i,/\s(standing)\s/i,/\s(resist)\s/i,/\s(devour)\s/i,/\s(lion)\s/i,/\s(roaring)\s/i,/\s(prowls)\s/i,/\s(sing)\s/i,/\s(trust)\s/i,/\s(enemy)\s/i,/\s(cares)\s/i,/\s(anxiety)\s/i,/\s(cast)\s/i,/\s(due)\s/i,/\s(lift)\s/i,/\s(mighty)\s/i,/\s(humanity)\s/i,/\s(break)\s/i,/\s(favor)\s/i,/\s(holds)\s/i,/\s(shows)\s/i,/\s(proud)\s/i,/\s(opposes)\s/i,/\s(humility)\s/i,/\s(slavery)\s/i,/\s(clothe)\s/i,/\s(younger)\s/i,/\s(helps)\s/i,/\s(crown)\s/i,/\s(chief)\s/i,/\s(examples)\s/i,/\s(lording)\s/i,/\s(dishonest)\s/i,/\s(pursuing)\s/i,/\s(wants)\s/i,/\s(willing)\s/i,/\s(merciful)\s/i,/\s(watching)\s/i,/\s(shepherds)\s/i,/\s(service)\s/i,/\s(elder)\s/i,/\s(appeal)\s/i,/\s(creator)\s/i,/\s(commit)\s/i,/\s(sinner)\s/i,/\s(begins)\s/i,/\s(household)\s/i,/\s(fix)\s/i,/\s(begin)\s/i,/\s(acknowledge)\s/i,/\s(christian)\s/i,/\s(meddler)\s/i,/\s(criminal)\s/i,/\s(murderer)\s/i,/\s(overjoyed)\s/i,/\s(inasmuch)\s/i,/\s(happening)\s/i,/\s(test)\s/i,/\s(ordeal)\s/i,/\s(fiery)\s/i,/\s(praised)\s/i,/\s(provides)\s/i,/\s(forms)\s/i,/\s(stewards)\s/i,/\s(grumbling)\s/i,/\s(multitude)\s/i,/\s(covers)\s/i,/\s(standards)\s/i,/\s(testing)\s/i,/\s(judged)\s/i,/\s(wild)\s/i,/\s(reckless)\s/i,/\s(generation)\s/i,/\s(join)\s/i,/\s(idolatry)\s/i,/\s(detestable)\s/i,/\s(carousing)\s/i,/\s(orgies)\s/i,/\s(drunkenness)\s/i,/\s(lust)\s/i,/\s(debauchery)\s/i,/\s(choose)\s/i,/\s(enough)\s/i,/\s(unbelieving)\s/i,/\s(spent)\s/i,/\s(turns)\s/i,/\s(suffers)\s/i,/\s(attitude)\s/i,/\s(encourage)\s/i,/\s(arm)\s/i,/\s(daily)\s/i,/\s(authorities)\s/i,/\s(gone)\s/i,/\s(pledge)\s/i,/\s(hardened)\s/i,/\s(dirt)\s/i,/\s(deceitfulness)\s/i,/\s(original)\s/i,/\s(conviction)\s/i,/\s(removal)\s/i,/\s(rebelled)\s/i,/\s(led)\s/i,/\s(baptism)\s/i,/\s(symbolizes)\s/i,/\s(perished)\s/i,/\s(eight)\s/i,/\s(disobeyed)\s/i,/\s(few)\s/i,/\s(unbelief)\s/i,/\s(waited)\s/i,/\s(entering)\s/i,/\s(imprisoned)\s/i,/\s(proclamation)\s/i,/\s(maliciously)\s/i,/\s(gentleness)\s/i,/\s(believed)\s/i,/\s(asks)\s/i,/\s(finished)\s/i,/\s(answer)\s/i,/\s(somewhere)\s/i,/\s(revere)\s/i,/\s(frightened)\s/i,/\s(rested)\s/i,/\s(prayer)\s/i,/\s(formerly)\s/i,/\s(attentive)\s/i,/\s(certain)\s/i,/\s(ears)\s/i,/\s(pursue)\s/i,/\s(quoted)\s/i,/\s(joshua)\s/i,/\s(sabbath)\s/i,/\s(deceitful)\s/i,/\s(tongue)\s/i,/\s(contrary)\s/i,/\s(compassionate)\s/i,/\s(sympathetic)\s/i,/\s(minded)\s/i,/\s(active)\s/i,/\s(sharper)\s/i,/\s(finally)\s/i,/\s(double)\s/i,/\s(edged)\s/i,/\s(hinder)\s/i,/\s(penetrates)\s/i,/\s(gracious)\s/i,/\s(dividing)\s/i,/\s(partner)\s/i,/\s(joints)\s/i,/\s(marrow)\s/i,/\s(weaker)\s/i,/\s(attitudes)\s/i,/\s(hidden)\s/i,/\s(treat)\s/i,/\s(uncovered)\s/i,/\s(submitted)\s/i,/\s(adorn)\s/i,/\s(quiet)\s/i,/\s(gentle)\s/i,/\s(ascended)\s/i,/\s(unfading)\s/i,/\s(unable)\s/i,/\s(empathize)\s/i,/\s(weaknesses)\s/i,/\s(approach)\s/i,/\s(clothes)\s/i,/\s(fine)\s/i,/\s(jewelry)\s/i,/\s(selected)\s/i,/\s(wearing)\s/i,/\s(represent)\s/i,/\s(hairstyles)\s/i,/\s(related)\s/i,/\s(elaborate)\s/i,/\s(adornment)\s/i,/\s(deal)\s/i,/\s(gently)\s/i,/\s(outward)\s/i,/\s(purity)\s/i,/\s(won)\s/i,/\s(overseer)\s/i,/\s(becoming)\s/i,/\s(returned)\s/i,/\s(wounds)\s/i,/\s(justly)\s/i,/\s(petitions)\s/i,/\s(fervent)\s/i,/\s(cries)\s/i,/\s(retaliate)\s/i,/\s(insults)\s/i,/\s(learned)\s/i,/\s(obedience)\s/i,/\s(hurled)\s/i,/\s(source)\s/i,/\s(designated)\s/i,/\s(steps)\s/i,/\s(leaving)\s/i,/\s(beating)\s/i,/\s(try)\s/i,/\s(credit)\s/i,/\s(conscious)\s/i,/\s(pain)\s/i,/\s(bears)\s/i,/\s(truths)\s/i,/\s(harsh)\s/i,/\s(infant)\s/i,/\s(acquainted)\s/i,/\s(teaching)\s/i,/\s(mature)\s/i,/\s(constant)\s/i,/\s(masters)\s/i,/\s(distinguish)\s/i,/\s(proper)\s/i,/\s(move)\s/i,/\s(beyond)\s/i,/\s(foolish)\s/i,/\s(maturity)\s/i,/\s(foundation)\s/i,/\s(talk)\s/i,/\s(silence)\s/i,/\s(commend)\s/i,/\s(instruction)\s/i,/\s(cleansing)\s/i,/\s(rites)\s/i,/\s(punish)\s/i,/\s(governors)\s/i,/\s(supreme)\s/i,/\s(permitting)\s/i,/\s(enlightened)\s/i,/\s(whether)\s/i,/\s(visits)\s/i,/\s(glorify)\s/i,/\s(accuse)\s/i,/\s(war)\s/i,/\s(loss)\s/i,/\s(crucifying)\s/i,/\s(subjecting)\s/i,/\s(public)\s/i,/\s(wage)\s/i,/\s(abstain)\s/i,/\s(drinks)\s/i,/\s(rain)\s/i,/\s(often)\s/i,/\s(falling)\s/i,/\s(wonderful)\s/i,/\s(crop)\s/i,/\s(useful)\s/i,/\s(farmed)\s/i,/\s(possession)\s/i,/\s(thorns)\s/i,/\s(thistles)\s/i,/\s(worthless)\s/i,/\s(danger)\s/i,/\s(cursed)\s/i,/\s(special)\s/i,/\s(nation)\s/i,/\s(convinced)\s/i,/\s(royal)\s/i,/\s(disobey)\s/i,/\s(rock)\s/i,/\s(causes)\s/i,/\s(builders)\s/i,/\s(helped)\s/i,/\s(trusts)\s/i,/\s(lay)\s/i,/\s(diligence)\s/i,/\s(realized)\s/i,/\s(lazy)\s/i,/\s(acceptable)\s/i,/\s(swore)\s/i,/\s(stones)\s/i,/\s(bless)\s/i,/\s(confirms)\s/i,/\s(guard)\s/i,/\s(argument)\s/i,/\s(unchanging)\s/i,/\s(purpose)\s/i,/\s(humans)\s/i,/\s(crave)\s/i,/\s(unchangeable)\s/i,/\s(lie)\s/i,/\s(fled)\s/i,/\s(encouraged)\s/i,/\s(anchor)\s/i,/\s(babies)\s/i,/\s(newborn)\s/i,/\s(envy)\s/i,/\s(hypocrisy)\s/i,/\s(forerunner)\s/i,/\s(behalf)\s/i,/\s(malice)\s/i,/\s(returning)\s/i,/\s(defeat)\s/i,/\s(kings)\s/i,/\s(rid)\s/i,/\s(endures)\s/i,/\s(withers)\s/i,/\s(field)\s/i,/\s(mother)\s/i,/\s(genealogy)\s/i,/\s(resembling)\s/i,/\s(imperishable)\s/i,/\s(patriarch)\s/i,/\s(plunder)\s/i,/\s(seed)\s/i,/\s(obeying)\s/i,/\s(collect)\s/i,/\s(glorified)\s/i,/\s(trace)\s/i,/\s(descent)\s/i,/\s(defect)\s/i,/\s(doubt)\s/i,/\s(lesser)\s/i,/\s(blemish)\s/i,/\s(lamb)\s/i,/\s(collects)\s/i,/\s(handed)\s/i,/\s(ancestor)\s/i,/\s(perfection)\s/i,/\s(attained)\s/i,/\s(levitical)\s/i,/\s(redeemed)\s/i,/\s(belonged)\s/i,/\s(different)\s/i,/\s(silver)\s/i,/\s(served)\s/i,/\s(impartially)\s/i,/\s(person)\s/i,/\s(ancestry)\s/i,/\s(indestructible)\s/i,/\s(former)\s/i,/\s(conform)\s/i,/\s(useless)\s/i,/\s(introduced)\s/i,/\s(serving)\s/i,/\s(glories)\s/i,/\s(sworn)\s/i,/\s(messiah)\s/i,/\s(predicted)\s/i,/\s(guarantor)\s/i,/\s(pointing)\s/i,/\s(circumstances)\s/i,/\s(prevented)\s/i,/\s(continuing)\s/i,/\s(office)\s/i,/\s(trying)\s/i,/\s(permanent)\s/i,/\s(intently)\s/i,/\s(searched)\s/i,/\s(intercede)\s/i,/\s(glorious)\s/i,/\s(truly)\s/i,/\s(meets)\s/i,/\s(inexpressible)\s/i,/\s(apart)\s/i,/\s(exalted)\s/i,/\s(filled)\s/i,/\s(unlike)\s/i,/\s(refined)\s/i,/\s(perishes)\s/i,/\s(appoints)\s/i,/\s(men)\s/i,/\s(main)\s/i,/\s(genuineness)\s/i,/\s(proven)\s/i,/\s(grief)\s/i,/\s(prescribed)\s/i,/\s(build)\s/i,/\s(pattern)\s/i,/\s(shielded)\s/i,/\s(old)\s/i,/\s(spoil)\s/i,/\s(fault)\s/i,/\s(birth)\s/i,/\s(neighbor)\s/i,/\s(least)\s/i,/\s(forgive)\s/i,/\s(sanctifying)\s/i,/\s(outdated)\s/i,/\s(foreknowledge)\s/i,/\s(bithynia)\s/i,/\s(lampstand)\s/i,/\s(table)\s/i,/\s(consecrated)\s/i,/\s(bread)\s/i,/\s(asia)\s/i,/\s(golden)\s/i,/\s(incense)\s/i,/\s(cappadocia)\s/i,/\s(covered)\s/i,/\s(galatia)\s/i,/\s(contained)\s/i,/\s(jar)\s/i,/\s(manna)\s/i,/\s(budded)\s/i,/\s(pontus)\s/i,/\s(tablets)\s/i,/\s(cherubim)\s/i,/\s(overshadowing)\s/i,/\s(provinces)\s/i,/\s(discuss)\s/i,/\s(detail)\s/i,/\s(arranged)\s/i,/\s(regularly)\s/i,/\s(outer)\s/i,/\s(carry)\s/i,/\s(scattered)\s/i,/\s(showing)\s/i,/\s(disclosed)\s/i,/\s(functioning)\s/i,/\s(illustration)\s/i,/\s(indicating)\s/i,/\s(elect)\s/i,/\s(worshiper)\s/i,/\s(matter)\s/i,/\s(drink)\s/i,/\s(washings)\s/i,/\s(external)\s/i,/\s(applying)\s/i,/\s(part)\s/i,/\s(thus)\s/i,/\s(obtaining)\s/i,/\s(redemption)\s/i,/\s(heifer)\s/i,/\s(send)\s/i,/\s(ceremonially)\s/i,/\s(unclean)\s/i,/\s(sanctify)\s/i,/\s(outwardly)\s/i,/\s(clean)\s/i,/\s(unblemished)\s/i,/\s(consciences)\s/i,/\s(italy)\s/i,/\s(ransom)\s/i,/\s(prove)\s/i,/\s(force)\s/i,/\s(somebody)\s/i,/\s(arrives)\s/i,/\s(timothy)\s/i,/\s(scarlet)\s/i,/\s(wool)\s/i,/\s(branches)\s/i,/\s(hyssop)\s/i,/\s(quite)\s/i,/\s(ceremonies)\s/i,/\s(nearly)\s/i,/\s(exhortation)\s/i,/\s(forgiveness)\s/i,/\s(copies)\s/i,/\s(presence)\s/i,/\s(pleasing)\s/i,/\s(appeared)\s/i,/\s(culmination)\s/i,/\s(ages)\s/i,/\s(equip)\s/i,/\s(restored)\s/i,/\s(realities)\s/i,/\s(particularly)\s/i,/\s(repeated)\s/i,/\s(endlessly)\s/i,/\s(stopped)\s/i,/\s(worshipers)\s/i,/\s(felt)\s/i,/\s(annual)\s/i,/\s(reminder)\s/i,/\s(honorably)\s/i,/\s(sure)\s/i,/\s(burden)\s/i,/\s(watch)\s/i,/\s(openly)\s/i,/\s(accordance)\s/i,/\s(sets)\s/i,/\s(performs)\s/i,/\s(religious)\s/i,/\s(duties)\s/i,/\s(offers)\s/i,/\s(waits)\s/i,/\s(testifies)\s/i,/\s(adds)\s/i,/\s(fruit)\s/i,/\s(forgiven)\s/i,/\s(opened)\s/i,/\s(continually)\s/i,/\s(unswervingly)\s/i,/\s(spur)\s/i,/\s(gate)\s/i,/\s(giving)\s/i,/\s(meeting)\s/i,/\s(habit)\s/i,/\s(carries)\s/i,/\s(approaching)\s/i,/\s(eat)\s/i,/\s(minister)\s/i,/\s(fearful)\s/i,/\s(expectation)\s/i,/\s(raging)\s/i,/\s(consume)\s/i,/\s(testimony)\s/i,/\s(foods)\s/i,/\s(severely)\s/i,/\s(deserves)\s/i,/\s(punished)\s/i,/\s(trampled)\s/i,/\s(underfoot)\s/i,/\s(unholy)\s/i,/\s(eating)\s/i,/\s(sanctified)\s/i,/\s(mine)\s/i,/\s(avenge)\s/i,/\s(strengthened)\s/i,/\s(dreadful)\s/i,/\s(earlier)\s/i,/\s(yesterday)\s/i,/\s(conflict)\s/i,/\s(mortals)\s/i,/\s(sometimes)\s/i,/\s(publicly)\s/i,/\s(exposed)\s/i,/\s(helper)\s/i,/\s(persecution)\s/i,/\s(stood)\s/i,/\s(forsake)\s/i,/\s(leave)\s/i,/\s(joyfully)\s/i,/\s(accepted)\s/i,/\s(confiscation)\s/i,/\s(property)\s/i,/\s(knew)\s/i,/\s(content)\s/i,/\s(lasting)\s/i,/\s(possessions)\s/i,/\s(richly)\s/i,/\s(rewarded)\s/i,/\s(persevere)\s/i,/\s(money)\s/i,/\s(delay)\s/i,/\s(adulterer)\s/i,/\s(bed)\s/i,/\s(shrinks)\s/i,/\s(belong)\s/i,/\s(shrink)\s/i,/\s(honored)\s/i,/\s(ancients)\s/i,/\s(loving)\s/i,/\s(visible)\s/i,/\s(consuming)\s/i,/\s(cain)\s/i,/\s(awe)\s/i,/\s(enoch)\s/i,/\s(experience)\s/i,/\s(please)\s/i,/\s(comes)\s/i,/\s(rewards)\s/i,/\s(earnestly)\s/i,/\s(acceptably)\s/i,/\s(thankful)\s/i,/\s(home)\s/i,/\s(stranger)\s/i,/\s(tents)\s/i,/\s(created)\s/i,/\s(removing)\s/i,/\s(indicate)\s/i,/\s(shake)\s/i,/\s(architect)\s/i,/\s(childbearing)\s/i,/\s(enabled)\s/i,/\s(shook)\s/i,/\s(considered)\s/i,/\s(numerous)\s/i,/\s(stars)\s/i,/\s(sky)\s/i,/\s(countless)\s/i,/\s(sand)\s/i,/\s(seashore)\s/i,/\s(distance)\s/i,/\s(admitting)\s/i,/\s(warns)\s/i,/\s(opportunity)\s/i,/\s(return)\s/i,/\s(less)\s/i,/\s(longing)\s/i,/\s(embraced)\s/i,/\s(offspring)\s/i,/\s(reckoned)\s/i,/\s(reasoned)\s/i,/\s(raise)\s/i,/\s(manner)\s/i,/\s(dying)\s/i,/\s(worshiped)\s/i,/\s(leaned)\s/i,/\s(top)\s/i,/\s(exodus)\s/i,/\s(instructions)\s/i,/\s(burial)\s/i,/\s(bones)\s/i,/\s(parents)\s/i,/\s(hid)\s/i,/\s(months)\s/i,/\s(refuse)\s/i,/\s(ordinary)\s/i,/\s(child)\s/i,/\s(names)\s/i,/\s(edict)\s/i,/\s(grown)\s/i,/\s(pharaoh)\s/i,/\s(daughter)\s/i,/\s(chose)\s/i,/\s(church)\s/i,/\s(joyful)\s/i,/\s(enjoy)\s/i,/\s(fleeting)\s/i,/\s(regarded)\s/i,/\s(upon)\s/i,/\s(treasures)\s/i,/\s(ahead)\s/i,/\s(reward)\s/i,/\s(fearing)\s/i,/\s(persevered)\s/i,/\s(invisible)\s/i,/\s(passover)\s/i,/\s(application)\s/i,/\s(destroyer)\s/i,/\s(touch)\s/i,/\s(red)\s/i,/\s(sea)\s/i,/\s(dry)\s/i,/\s(egyptians)\s/i,/\s(drowned)\s/i,/\s(walls)\s/i,/\s(jericho)\s/i,/\s(fell)\s/i,/\s(army)\s/i,/\s(marched)\s/i,/\s(prostitute)\s/i,/\s(rahab)\s/i,/\s(spies)\s/i,/\s(tell)\s/i,/\s(gideon)\s/i,/\s(barak)\s/i,/\s(samson)\s/i,/\s(jephthah)\s/i,/\s(samuel)\s/i,/\s(conquered)\s/i,/\s(kingdoms)\s/i,/\s(administered)\s/i,/\s(gained)\s/i,/\s(shut)\s/i,/\s(mouths)\s/i,/\s(lions)\s/i,/\s(quenched)\s/i,/\s(fury)\s/i,/\s(jerusalem)\s/i,/\s(edge)\s/i,/\s(battle)\s/i,/\s(routed)\s/i,/\s(armies)\s/i,/\s(tortured)\s/i,/\s(refusing)\s/i,/\s(faced)\s/i,/\s(jeers)\s/i,/\s(flogging)\s/i,/\s(imprisonment)\s/i,/\s(stoning)\s/i,/\s(sawed)\s/i,/\s(sheepskins)\s/i,/\s(goatskins)\s/i,/\s(destitute)\s/i,/\s(persecuted)\s/i,/\s(deserts)\s/i,/\s(mountains)\s/i,/\s(caves)\s/i,/\s(holes)\s/i,/\s(ground)\s/i,/\s(40)\s/i,/\s(planned)\s/i,/\s(surrounded)\s/i,/\s(cloud)\s/i,/\s(hinders)\s/i,/\s(easily)\s/i,/\s(entangles)\s/i,/\s(run)\s/i,/\s(mount)\s/i,/\s(race)\s/i,/\s(marked)\s/i,/\s(fixing)\s/i,/\s(perfecter)\s/i,/\s(scorning)\s/i,/\s(opposition)\s/i,/\s(trembling)\s/i,/\s(weary)\s/i,/\s(struggle)\s/i,/\s(terrifying)\s/i,/\s(resisted)\s/i,/\s(forgotten)\s/i,/\s(encouragement)\s/i,/\s(stoned)\s/i,/\s(rebukes)\s/i,/\s(loves)\s/i,/\s(chastens)\s/i,/\s(accepts)\s/i,/\s(touches)\s/i,/\s(hardship)\s/i,/\s(treating)\s/i,/\s(undergoes)\s/i,/\s(legitimate)\s/i,/\s(moreover)\s/i,/\s(fathers)\s/i,/\s(respected)\s/i,/\s(further)\s/i,/\s(thought)\s/i,/\s(best)\s/i,/\s(seems)\s/i,/\s(pleasant)\s/i,/\s(painful)\s/i,/\s(harvest)\s/i,/\s(strengthen)\s/i,/\s(feeble)\s/i,/\s(arms)\s/i,/\s(knees)\s/i,/\s(level)\s/i,/\s(paths)\s/i,/\s(lame)\s/i,/\s(disabled)\s/i,/\s(falls)\s/i,/\s(bitter)\s/i,/\s(root)\s/i,/\s(grows)\s/i,/\s(cause)\s/i,/\s(trouble)\s/i,/\s(defile)\s/i,/\s(godless)\s/i,/\s(single)\s/i,/\s(meal)\s/i,/\s(sold)\s/i,/\s(rights)\s/i,/\s(oldest)\s/i,/\s(afterward)\s/i,/\s(touched)\s/i,/\s(begged)\s/i,/\s(gloom)\s/i,/\s(trumpet)\s/i,/\s(blast)\s/i]
var dbls = [/(\Wfellow\W)/i,/(\Wthief\W)/i,/(\Wthrow\W)/i,/(\Wparticipate\W)/i,/(\Wpioneer\W)/i,/(\Wletters\W)/i,/(\Wpleasure\W)/i,/(\Wexists\W)/i,/(\Wcall\W)/i,/(\Winsulted\W)/i,/(\Wformed\W)/i,/(\Wtreated\W)/i,/(\Wdeclare\W)/i,/(\Wwitnesses\W)/i,/(\Wthree\W)/i,/(\Wassembly\W)/i,/(\Wwhatever\W)/i,/(\Wpraises\W)/i,/(\Wsinning\W)/i,/(\Wseek\W)/i,/(\Wcondemned\W)/i,/(\Wdeliberately\W)/i,/(\Wencouraging\W)/i,/(\Wforeign\W)/i,/(\Wlived\W)/i,/(\Wsarah\W)/i,/(\Wwashed\W)/i,/(\Wassurance\W)/i,/(\Wsincere\W)/i,/(\Welders\W)/i,/(\Wwelcomed\W)/i,/(\Wsurprised\W)/i,/(\Wstrangers\W)/i,/(\Wthinking\W)/i,/(\Wburnt\W)/i,/(\Wtoo\W)/i,/(\Wshared\W)/i,/(\Wguilty\W)/i,/(\Wflock\W)/i,/(\Wface\W)/i,/(\Wesau\W)/i,/(\Wdestined\W)/i,/(\Wjoseph\W)/i,/(\Wdevil\W)/i,/(\Wways\W)/i,/(\Wotherwise\W)/i,/(\Wnor\W)/i,/(\Wappear\W)/i,/(\Wconcerning\W)/i,/(\Wpurified\W)/i,/(\Wshedding\W)/i,/(\Wused\W)/i,/(\Welements\W)/i,/(\Wcommanded\W)/i,/(\Wscroll\W)/i,/(\Wrefused\W)/i,/(\Wheld\W)/i,/(\Weffect\W)/i,/(\Wsurely\W)/i,/(\Wputting\W)/i,/(\Wcleanse\W)/i,/(\Wpleasures\W)/i,/(\Washes\W)/i,/(\Wbulls\W)/i,/(\Wcalves\W)/i,/(\Wcrowned\W)/i,/(\Wceremonial\W)/i,/(\Wlower\W)/i,/(\Wsaves\W)/i,/(\Wignorance\W)/i,/(\Wpassed\W)/i,/(\Wthousand\W)/i,/(\Wcover\W)/i,/(\Wstaff\W)/i,/(\Watonement\W)/i,/(\Wago\W)/i,/(\Wunrighteous\W)/i,/(\Wearthly\W)/i,/(\Waround\W)/i,/(\Wseven\W)/i,/(\Wregulations\W)/i,/(\Wdisappear\W)/i,/(\Wthoughts\W)/i,/(\Wkilled\W)/i,/(\Wdisobedient\W)/i,/(\Wobsolete\W)/i,/(\Wgreatest\W)/i,/(\Wwrite\W)/i,/(\Wlaws\W)/i,/(\Westablish\W)/i,/(\Wturned\W)/i,/(\Wtook\W)/i,/(\Wsought\W)/i,/(\Weager\W)/i,/(\Wheir\W)/i,/(\Wstrength\W)/i,/(\Wministry\W)/i,/(\Wwomen\W)/i,/(\Wraised\W)/i,/(\Wshadow\W)/i,/(\Wcopy\W)/i,/(\Wreleased\W)/i,/(\Wgain\W)/i,/(\Wtestified\W)/i,/(\Wconfirmed\W)/i,/(\Wmere\W)/i,/(\Wchains\W)/i,/(\Wuniverse\W)/i,/(\Wserves\W)/i,/(\Wpoint\W)/i,/(\Wreturns\W)/i,/(\Wsacrificed\W)/i,/(\Wwandered\W)/i,/(\Wsinners\W)/i,/(\Wspeech\W)/i,/(\Wblameless\W)/i,/(\Werror\W)/i,/(\Wworthy\W)/i,/(\Wchange\W)/i,/(\Wescape\W)/i,/(\Wweak\W)/i,/(\Wregulation\W)/i,/(\Wbasis\W)/i,/(\Wappears\W)/i,/(\Wcross\W)/i,/(\Wshame\W)/i,/(\Wjudah\W)/i,/(\Wlose\W)/i,/(\Witself\W)/i,/(\Waddresses\W)/i,/(\Wservant\W)/i,/(\Wbearing\W)/i,/(\Wdisciplines\W)/i,/(\Wpaid\W)/i,/(\Wreserved\W)/i,/(\Wwitness\W)/i,/(\Wcollected\W)/i,/(\Wfuture\W)/i,/(\Wdescended\W)/i,/(\Wisraelites\W)/i,/(\Wside\W)/i,/(\Wpunishment\W)/i,/(\Wrequires\W)/i,/(\Wholiness\W)/i,/(\Wdivine\W)/i,/(\Wtheirs\W)/i,/(\Wmet\W)/i,/(\Wsalem\W)/i,/(\Whealed\W)/i,/(\Wbehind\W)/i,/(\Wsecure\W)/i,/(\Wgreatly\W)/i,/(\Wsexually\W)/i,/(\Wimmoral\W)/i,/(\Wnature\W)/i,/(\Wwanted\W)/i,/(\Wpatiently\W)/i,/(\Wwaiting\W)/i,/(\Wunstable\W)/i,/(\Wburning\W)/i,/(\Wcorruption\W)/i,/(\Wpatience\W)/i,/(\Wstorm\W)/i,/(\Wimitate\W)/i,/(\Wanimal\W)/i,/(\Wbrings\W)/i,/(\Wrebellion\W)/i,/(\Wunjust\W)/i,/(\Wzion\W)/i,/(\Wduring\W)/i,/(\Wthousands\W)/i,/(\Wcontrol\W)/i,/(\Wbeings\W)/i,/(\Wwilderness\W)/i,/(\Wspeak\W)/i,/(\Wburned\W)/i,/(\Wbeauty\W)/i,/(\Wtested\W)/i,/(\Wbehavior\W)/i,/(\Wtried\W)/i,/(\Wage\W)/i,/(\Wreceiving\W)/i,/(\Wpowers\W)/i,/(\Wreverence\W)/i,/(\Wknowing\W)/i,/(\Wmarriage\W)/i,/(\Wflames\W)/i,/(\Wgodliness\W)/i,/(\Wlaying\W)/i,/(\Wforty\W)/i,/(\Woutcome\W)/i,/(\Wentrusted\W)/i,/(\Wkinds\W)/i,/(\Wstrange\W)/i,/(\Wteachings\W)/i,/(\Wthreats\W)/i,/(\Wscepter\W)/i,/(\Wbenefit\W)/i,/(\Wtrained\W)/i,/(\Wjustice\W)/i,/(\Wcamp\W)/i,/(\Wbore\W)/i,/(\Wenduring\W)/i,/(\Wsolid\W)/i,/(\Wangry\W)/i,/(\Wlips\W)/i,/(\Welementary\W)/i,/(\Wmutual\W)/i,/(\Wteach\W)/i,/(\Wmouth\W)/i,/(\Wsheep\W)/i,/(\Wloved\W)/i,/(\Waffection\W)/i,/(\Wobey\W)/i,/(\Wbriefly\W)/i,/(\Wsubmission\W)/i,/(\Wgreet\W)/i,/(\Wgreetings\W)/i,/(\Wpeter\W)/i,/(\Wexiles\W)/i,/(\Wtears\W)/i,/(\Wthroughout\W)/i,/(\Wprayers\W)/i,/(\Wcommendable\W)/i,/(\Wspare\W)/i,/(\Wfoundations\W)/i,/(\Wreceives\W)/i,/(\Wobedient\W)/i,/(\Wyours\W)/i,/(\Wabundance\W)/i,/(\Wtakes\W)/i,/(\Wattention\W)/i,/(\Wfade\W)/i,/(\Wgreed\W)/i,/(\Wready\W)/i,/(\Wrejoice\W)/i,/(\Wtrials\W)/i,/(\Wconduct\W)/i,/(\Wworth\W)/i,/(\Wdepraved\W)/i,/(\Wconsiderate\W)/i,/(\Wfind\W)/i,/(\Wsouls\W)/i,/(\Wbelievers\W)/i,/(\Wsinful\W)/i,/(\Wfreedom\W)/i,/(\Wcareful\W)/i,/(\Wbare\W)/i,/(\Wtold\W)/i,/(\Wlook\W)/i,/(\Wpay\W)/i,/(\Wstories\W)/i,/(\Wperishable\W)/i,/(\Wemperor\W)/i,/(\Wempty\W)/i,/(\Wfollowing\W)/i,/(\Wgarment\W)/i,/(\Wrests\W)/i,/(\Wdeeply\W)/i,/(\Wfalse\W)/i,/(\Wgrass\W)/i,/(\Wflowers\W)/i,/(\Wdavid\W)/i,/(\Wdeceit\W)/i,/(\Wpassage\W)/i,/(\Wslander\W)/i,/(\Wsinned\W)/i,/(\Wprophet\W)/i,/(\Wprophecy\W)/i,/(\Wseventh\W)/i,/(\Wscripture\W)/i,/(\Wpagans\W)/i,/(\Wcornerstone\W)/i,/(\Wvalue\W)/i,/(\Wnews\W)/i,/(\Wshort\W)/i,/(\Wfallen\W)/i,/(\Wstands\W)/i,/(\Wfootstool\W)/i,/(\Wsacred\W)/i]
var smemlist = ["H4:16", "H9:14", "H1:3", "H5:7", "H9:15", "H12:1", "1P2:9", "2P1:3", "H1:10", "H9:22", "H12:3", "1P2:10", "H2:1", "H6:10", "H9:24", "H12:7", "1P2:12", "2P1:16", "H2:3", "H6:17", "H12:14", "2P1:19", "H2:9", "H10:14", "H2:10", "H10:23", "1P3:15", "2P2:21", "H2:11", "H13:4", "H2:18", "H7:26", "H13:5", "1P4:8", "H3:1", "H7:27", "H10:39", "H13:8", "1P4:10", "2P3:18", "H11:1", "1P4:11", "H8:6", "H11:3", "H4:12", "H8:10", "H11:6", "1P5:6", "H4:13", "H11:9", "1P5:7", "H9:12", "H11:26", "1P1:22", "1P5:9"];
var mmemlist = [{
  "r1": "H1:1",
  "r2": "H1:2"
}, {
  "r1": "H11:39",
  "r2": "H11:40"
}, {
  "r1": "1P2:4",
  "r2": "1P2:5"
}, {
  "r1": "1P5:10",
  "r2": "1P5:11"
}, {
  "r1": "H5:8",
  "r2": "H5:10"
}, {
  "r1": "2P1:5",
  "r2": "2P1:7"
}, {
  "r1": "H9:27",
  "r2": "H9:28"
}, {
  "r1": "1P2:24",
  "r2": "1P2:25"
}, {
  "r1": "H6:19",
  "r2": "H6:20"
}, {
  "r1": "H12:28",
  "r2": "H12:29"
}, {
  "r1": "1P3:8",
  "r2": "1P3:9"
}, {
  "r1": "2P1:20",
  "r2": "2P1:21"
}, {
  "r1": "H7:18",
  "r2": "H7:19"
}, {
  "r1": "H13:1",
  "r2": "H13:2"
}, {
  "r1": "H7:24",
  "r2": "H7:25"
}, {
  "r1": "H10:24",
  "r2": "H10:25"
}, {
  "r1": "1P3:17",
  "r2": "1P3:18"
}, {
  "r1": "2P3:8",
  "r2": "2P3:9"
}, {
  "r1": "H10:26",
  "r2": "H10:27"
}, {
  "r1": "2P3:11",
  "r2": "2P3:12"
}, {
  "r1": "H3:12",
  "r2": "H3:13"
}, {
  "r1": "H8:1",
  "r2": "H8:2"
}, {
  "r1": "H13:15",
  "r2": "H13:16"
}, {
  "r1": "H4:9",
  "r2": "H4:10"
}, {
  "r1": "1P1:3",
  "r2": "1P1:4"
}, {
  "r1": "1P5:2",
  "r2": "1P5:3"
}, {
  "r1": "1P1:8",
  "r2": "1P1:9"
}, {
  "r1": "H8:11",
  "r2": "H8:12"
}, {
  "r1": "1P1:15",
  "r2": "1P1:16"
}, {
  "r1": "H4:14",
  "r2": "H4:15"
}];
var hi_d = true;
var hi_u = true;
var hi_sm = true;
var hi_mm = true;
var hi_mm_d = document.querySelector('#m-verse-h');
var hi_sm_d = document.querySelector('#s-verse-h');
var hi_u_d = document.querySelector('#u-word');
var hi_d_d = document.querySelector('#u-word');
var hi_mm_c = document.querySelector('#m-m-c');
var hi_sm_c = document.querySelector('#s-m-c');
var hi_u_c = document.querySelector('#u-w-c');
var hi_d_c = document.querySelector('#d-w-c');
var mylocalkey = "koalastrikermi-bbqo-";
var ScriptureAudioBtn = document.querySelector('#s-audio-btn');
var ch_set = document.querySelector('#ch-select');
var lss = function lss(vare, gs, t) {
  if (gs === "set") {
    localStorage.setItem(mylocalkey + vare, t);
    //if(l){
    log("localstorage item " + mylocalkey + vare + " is now set to: " + localStorage.getItem(mylocalkey + vare));
    //}
  } else if (gs === "get") {
    //if(l){log("localstorage item " + mylocalkey + vare + " was returned as: " + localStorage.getItem(mylocalkey + vare));}
    return localStorage.getItem(mylocalkey + vare);
  } else if (gs === "dv") {
    //if(l){log(mylocalkey + vare + "  was deleted");}
    localStorage.removeItem(mylocalkey + vare);
  }
};
log("hilight memory verses?" + lss('hi_mm_d', "get"), "color:red", "normal");

if (lss('visited', "get") === null) {
  lss('hi_mm_d', "set", "true");
}
if (lss('visited', "get") === null) {
  lss('hi_sm_d', "set", "true");
}
if (lss('visited', "get") === null) {
  lss('hi_u_d', "set", "true");
}
if (lss('visited', "get") === null) {
  lss('hi_d_d', "set", "true");
}
if (lss('visited', "get") === null) {
  lss('c_mm_d', "set", "#808000");
}
if (lss('visited', "get") === null) {
  lss('c_sm_d', "set", "#00bb00");
}
if (lss('visited', "get") === null) {
  lss('c_u_d', "set", "#ff0000");
}
if (lss('visited', "get") === null) {
  lss('c_d_d', "set", "#ff9800");
}
lss('visited', "set", "true");

var hi_u = lss('hi_u_d', "get");
var hi_d = lss('hi_d_d', "get");
var hi_sm = lss('hi_sm_d', "get");
var hi_mm = lss('hi_mm_d', "get");
var c_u = lss('c_u_d', "get");
var c_d = lss('c_d_d', "get");
var c_sm = lss('c_sm_d', "get");
var c_mm = lss('c_mm_d', "get");
const hexToRgb = hex => {
    // turn hex val to RGB
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result
        ? {
              r: parseInt(result[1], 16),
              g: parseInt(result[2], 16),
              b: parseInt(result[3], 16)
          }
        : null
}

// calc to work out if it will match on black or white better
const setContrast = rgb =>
    (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000 > 125 ? 'black' : 'white'

var ch = "h1";
var c = 1;
  if (ch.indexOf("1p") !== -1) {
    c = 13 + parseFloat(ch.split("p")[1]);
    console.log(c);
  } else if (ch.indexOf("2p") !== -1) {
    c = 18 + parseFloat(ch.split("p")[1]);
    console.log(c);
  } else {
    c = ch.split("h")[1];
    console.log(c);
  }

ch_set.addEventListener('change', function (event) {
  console.log(ch_set.value);
  ch = ch_set.value;
  if (ch.indexOf("1p") !== -1) {
    c = 13 + parseFloat(ch.split("p")[1]);
    console.log(c);
  } else if (ch.indexOf("2p") !== -1) {
    c = 18 + parseFloat(ch.split("p")[1]);
    console.log(c);
  } else {
    c = ch.split("h")[1];
    console.log(c);
  }
  dreamsList.innerHTML = "";
  console.log(c);
  var dream = dreams[c].split(/[0-9]+/);

  for (var j = 0; j < dream.length; j++) {
    if (c <= 13) {
      append("Hebrews " + c + ":" + (j + 1) + " " + dream[j], "H" + c + ":" + (j + 1),"Hebrews " + c + ":" + (j + 1));
    } else if (c <= 18 && c > 13) {
      append("1Peter " + (c - 13) + ":" + (j + 1) + " " + dream[j], "1P" + (c - 13) + ":" + (j + 1),"1Peter " + (c - 13) + ":" + (j + 1));
    } else {
      append("2Peter " + (c - 18) + ":" + (j + 1) + " " + dream[j], "2P" + (c - 18) + ":" + (j + 1),"2Peter " + (c - 18) + ":" + (j + 1));
    }
  }
  var un1 = document.querySelectorAll('.memory-verse-m');
  for (var i = 0; i < un1.length; i++) {
    un1[i].style.background = c_mm;
  }
  var un2 = document.querySelectorAll('.memory-verse-s');
  for (var i = 0; i < un2.length; i++) {
    un2[i].style.background = c_sm;
  }
  var un3 = document.querySelectorAll('.uniqueword');
  for (var i = 0; i < un3.length; i++) {
    un3[i].style.color = c_u;
  }
  var un4 = document.querySelectorAll('.dblword');
  for (var i = 0; i < un4.length; i++) {
    un4[i].style.color = c_d;
  }
});

hi_mm_d.addEventListener('input', function (event) {
  lss('hi_mm_d', "set", hi_mm_d.checked);
  if (hi_mm_d.checked) {
    hi_mm = true;
  } else {
    hi_mm = false;
  }
  console.log(ch_set.value);
  ch = ch_set.value;
  if (ch.indexOf("1p") !== -1) {
    c = 13 + parseFloat(ch.split("p")[1]);
    console.log(c);
  } else if (ch.indexOf("2p") !== -1) {
    c = 18 + parseFloat(ch.split("p")[1]);
    console.log(c);
  } else {
    c = ch.split("h")[1];
    console.log(c);
  }
  dreamsList.innerHTML = "";
  console.log(c);
  var dream = dreams[c].split(/[0-9]+/);

  for (var j = 0; j < dream.length; j++) {
    if (c <= 13) {
      append("Hebrews " + c + ":" + (j + 1) + " " + dream[j], "H" + c + ":" + (j + 1));
    } else if (c <= 18 && c > 13) {
      append("1Peter " + (c - 13) + ":" + (j + 1) + " " + dream[j], "1P" + (c - 13) + ":" + (j + 1));
    } else {
      append("2Peter " + (c - 18) + ":" + (j + 1) + " " + dream[j], "2P" + (c - 18) + ":" + (j + 1));
    }
  }
  var un1 = document.querySelectorAll('.memory-verse-m');
  for (var i = 0; i < un1.length; i++) {
    un1[i].style.background = c_mm;
  }
  var un2 = document.querySelectorAll('.memory-verse-s');
  for (var i = 0; i < un2.length; i++) {
    un2[i].style.background = c_sm;
  }
  var un3 = document.querySelectorAll('.uniqueword');
  for (var i = 0; i < un3.length; i++) {
    un3[i].style.color = c_u;
  }
  var un4 = document.querySelectorAll('.dblword');
  for (var i = 0; i < un4.length; i++) {
    un4[i].style.color = c_d;
  }
});
hi_sm_d.addEventListener('input', function (event) {
  lss('hi_sm_d', "set", hi_sm_d.checked);
  if (hi_sm_d.checked) {
    hi_sm = true;
  } else {
    hi_sm = false;
  }
  console.log(ch_set.value);
  ch = ch_set.value;
  if (ch.indexOf("1p") !== -1) {
    c = 13 + parseFloat(ch.split("p")[1]);
    console.log(c);
  } else if (ch.indexOf("2p") !== -1) {
    c = 18 + parseFloat(ch.split("p")[1]);
    console.log(c);
  } else {
    c = ch.split("h")[1];
    console.log(c);
  }
  dreamsList.innerHTML = "";
  console.log(c);
  var dream = dreams[c].split(/[0-9]+/);

  for (var j = 0; j < dream.length; j++) {
    if (c <= 13) {
      append("Hebrews " + c + ":" + (j + 1) + " " + dream[j], "H" + c + ":" + (j + 1));
    } else if (c <= 18 && c > 13) {
      append("1Peter " + (c - 13) + ":" + (j + 1) + " " + dream[j], "1P" + (c - 13) + ":" + (j + 1));
    } else {
      append("2Peter " + (c - 18) + ":" + (j + 1) + " " + dream[j], "2P" + (c - 18) + ":" + (j + 1));
    }
  }
  var un1 = document.querySelectorAll('.memory-verse-m');
  for (var i = 0; i < un1.length; i++) {
    un1[i].style.background = c_mm;
  }
  var un2 = document.querySelectorAll('.memory-verse-s');
  for (var i = 0; i < un2.length; i++) {
    un2[i].style.background = c_sm;
  }
  var un3 = document.querySelectorAll('.uniqueword');
  for (var i = 0; i < un3.length; i++) {
    un3[i].style.color = c_u;
  }
  var un4 = document.querySelectorAll('.dblword');
  for (var i = 0; i < un4.length; i++) {
    un4[i].style.color = c_d;
  }
});
hi_u_d.addEventListener('input', function (event) {
  lss('hi_u_d', "set", event.target.checked.toString());
  console.log(event.target.checked.toString());
  if (event.target.checked) {
    hi_u = true;
  } else {
    hi_u = false;
  }
  console.log(ch_set.value);
  ch = ch_set.value;
  if (ch.indexOf("1p") !== -1) {
    c = 13 + parseFloat(ch.split("p")[1]);
    console.log(c);
  } else if (ch.indexOf("2p") !== -1) {
    c = 18 + parseFloat(ch.split("p")[1]);
    console.log(c);
  } else {
    c = ch.split("h")[1];
    console.log(c);
  }
  dreamsList.innerHTML = "";
  console.log(c);
  var dream = dreams[c].split(/[0-9]+/);

  for (var j = 0; j < dream.length; j++) {
    if (c <= 13) {
      append("Hebrews " + c + ":" + (j + 1) + " " + dream[j], "H" + c + ":" + (j + 1));
    } else if (c <= 18 && c > 13) {
      append("1Peter " + (c - 13) + ":" + (j + 1) + " " + dream[j], "1P" + (c - 13) + ":" + (j + 1));
    } else {
      append("2Peter " + (c - 18) + ":" + (j + 1) + " " + dream[j], "2P" + (c - 18) + ":" + (j + 1));
    }
  }
  var un1 = document.querySelectorAll('.memory-verse-m');
  for (var i = 0; i < un1.length; i++) {
    un1[i].style.background = c_mm;
  }
  var un2 = document.querySelectorAll('.memory-verse-s');
  for (var i = 0; i < un2.length; i++) {
    un2[i].style.background = c_sm;
  }
  var un3 = document.querySelectorAll('.uniqueword');
  for (var i = 0; i < un3.length; i++) {
    un3[i].style.color = c_u;
  }
  var un4 = document.querySelectorAll('.dblword');
  for (var i = 0; i < un4.length; i++) {
    un4[i].style.color = c_d;
  }
});
hi_d_d.addEventListener('input', function (event) {
  lss('hi_d_d', "set", event.target.checked.toString());
  console.log(event.target.checked.toString());
  if (event.target.checked) {
    hi_d = true;
  } else {
    hi_d = false;
  }
  console.log(ch_set.value);
  ch = ch_set.value;
  if (ch.indexOf("1p") !== -1) {
    c = 13 + parseFloat(ch.split("p")[1]);
    console.log(c);
  } else if (ch.indexOf("2p") !== -1) {
    c = 18 + parseFloat(ch.split("p")[1]);
    console.log(c);
  } else {
    c = ch.split("h")[1];
    console.log(c);
  }
  dreamsList.innerHTML = "";
  console.log(c);
  var dream = dreams[c].split(/[0-9]+/);

  for (var j = 0; j < dream.length; j++) {
    if (c <= 13) {
      append("Hebrews " + c + ":" + (j + 1) + " " + dream[j], "H" + c + ":" + (j + 1));
    } else if (c <= 18 && c > 13) {
      append("1Peter " + (c - 13) + ":" + (j + 1) + " " + dream[j], "1P" + (c - 13) + ":" + (j + 1));
    } else {
      append("2Peter " + (c - 18) + ":" + (j + 1) + " " + dream[j], "2P" + (c - 18) + ":" + (j + 1));
    }
  }
  var un1 = document.querySelectorAll('.memory-verse-m');
  for (var i = 0; i < un1.length; i++) {
    un1[i].style.background = c_mm;
  }
  var un2 = document.querySelectorAll('.memory-verse-s');
  for (var i = 0; i < un2.length; i++) {
    un2[i].style.background = c_sm;
  }
  var un3 = document.querySelectorAll('.uniqueword');
  for (var i = 0; i < un3.length; i++) {
    un3[i].style.color = c_u;
  }
  var un4 = document.querySelectorAll('.dblword');
  for (var i = 0; i < un4.length; i++) {
    un4[i].style.color = c_d;
  }
});
hi_mm_c.addEventListener('change', function (event) {
  var un1 = document.querySelectorAll('.memory-verse-m');
  for (var i = 0; i < un1.length; i++) {
    un1[i].style.background = event.target.value;
    un1[i].style.color = setContrast(hexToRgb(event.target.value))
  }
  lss('hi_mm_c', "set", hi_mm_c.value);
});
hi_sm_c.addEventListener('change', function (event) {
  var un2 = document.querySelectorAll('.memory-verse-s');
  for (var i = 0; i < un2.length; i++) {
    un2[i].style.background = event.target.value;
    un2[i].style.color = setContrast(hexToRgb(event.target.value))
  }
  lss('hi_sm_c', "set", hi_sm_c.value);
});
hi_u_c.addEventListener('change', function (event) {
  var un3 = document.querySelectorAll('.uniqueword');
  for (var i = 0; i < un3.length; i++) {
    un3[i].style.color = event.target.value;
  }
  lss('hi_u_c', "set", hi_u_c.value);
});
hi_d_c.addEventListener('change', function (event) {
  var un4 = document.querySelectorAll('.dblword');
  for (var i = 0; i < un4.length; i++) {
    un4[i].style.color = event.target.value;
  }
  lss('hi_d_c', "set", hi_d_c.value);
});
var playing = false;
var speak = function(){
  let ver = document.querySelectorAll(".verse");
  console.log(ver);
  let tospeak = [];
  for (var i = 0; i < ver.length; i++) {
    tospeak.push(ver[i].innerText.replace(/([0-9]+):([0-9]+)/g, "$1 verse $2,"));
  }
  if (!playing) {
    console.log(tospeak);
    for (var j = 0; j < tospeak.length; j++) {
      responsiveVoice.speak(tospeak[j], "US English Male", { pitch: 1, volume: 0.5, rate: 1 });
    }
    console.log(responsiveVoice.utterances);
    playing = true;
    responsiveVoice.utterances[responsiveVoice.utterances.length - 1].onend = function () {
      //playing = false;
      /**/for (var j = 0; j < tospeak.length; j++) {
        responsiveVoice.speak(tospeak[j], "US English Male", { pitch: 1, volume: 0.5, rate: 1 });
      }
      console.log("restarted")
      
    }
  } else {
    playing = false;
    responsiveVoice.cancel();
  }
}
ScriptureAudioBtn.addEventListener("click", function (e) {
  speak()
});
// a helper function to call when our request for dreams is done
var gettextListener = function gettextListener() {
  dreamsList.innerHTML = "";
  dreams = this.responseText.split(" 1 ");
  var dream = dreams[c].split(/[0-9]+/);
  for (var j = 0; j < dream.length; j++) {
    if (c <= 13) {
      append("Hebrews " + c + ":" + (j + 1) + " " + dream[j], "H" + c + ":" + (j + 1),"Hebrews " + c + ":" + (j + 1));
    } else if (c <= 19 && c > 13) {
      append("1Peter " + c + ":" + (j + 1) + " " + dream[j], "1P" + c + ":" + (j + 1),"1Peter " + c + ":" + (j + 1));
    } else {
      append("2Peter " + c + ":" + (j + 1) + " " + dream[j], "2P" + c + ":" + (j + 1),"2Peter " + c + ":" + (j + 1));
    }
  }
};

// request the dreams from our app's sqlite database
var hebrewsRequest = new XMLHttpRequest();
hebrewsRequest.onload = gettextListener;
hebrewsRequest.open('get', '/gettext');
hebrewsRequest.send();

var extractwords = function extractwords(string) {
  return string.match(/\w+/g);
};
RegExp.escape = function (string) {
  return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
};
var sms = [],mmqs = [],mmrs = [],mmvs = [];
// a helper function that creates a list item for a given dream
var append = function append(dream, id,r) {
  var newListItem = document.createElement('div');
    /*for (var i = 0; i < smemlist.length; i++) {
    if (id === smemlist[i]) {
      console.log(r)
      let d = dream.split(/:[0-9]+/)
      let d2 = d[0];
      let q1 = d[1].split(/\s/);
      let q2 = q1.slice(0,6),q3 = q1.toString().replace(/,/g," ")
      let d3 = {
        question:"quote "+r,
        type:"quote",
        answer:d[1].toString().replace(/,/g," "),
        refrence:r,
        creator:"koalastrikermi"
      }, d4 = {
        question:"finish this verse and give the refrence "+q2.toString().replace(/,/g," "),
        type:"refrence",
        answer:q3.toString().replace(/,/g," ") + " " + r,
        refrence:r,
        creator:"koalastrikermi"
      }, d5 = {
        question:"finish this verse "+q2.toString().replace(/,/g," "),
        type:"verse",
        answer:q3.toString().replace(/,/g," "),
        refrence:r,
        creator:"koalastrikermi"
      }
      sms.push(d3)
      sms.push(d4)
      sms.push(d5)
    }
  }
  for (var i = 0; i < mmemlist.length; i++) {
    if (id === mmemlist[i].r1 || id === mmemlist[i].r2) {
      let d = dream.split(/:[0-9]+/)
      let d2 = d[0];
      let q1 = d[1].split(/\s/);
      let q2 = q1.slice(0,6),q3 = q1.toString().replace(/,/g," ")
      let d3 = {
        question:"quote "+r,
        type:"quote",
        answer:d[1].toString().replace(/,/g," "),
        refrence:r,
        creator:"koalastrikermi"
      }, d4 = {
        question:"finish these verses and give the refrence "+q2.toString().replace(/,/g," ").trim(),
        type:"refrence",
        answer:q3.toString().replace(/,/g," "),
        refrence:r,
        creator:"koalastrikermi"
      }, d5 = {
        question:"finish these verses "+q2.toString().replace(/,/g," ").trim(),
        type:"verse",
        answer:q3.toString().replace(/,/g," "),
        refrence:r,
        creator:"koalastrikermi"
      }
      mmqs.push(d3)
      mmvs.push(d4)
      mmrs.push(d5)
    }
  }*/
  if (hi_u) {
    for (var k = 0; k < unique.length; k++) {
      if (unique[k].test(dream)) dream = dream;
      dream = dream.replace(unique[k], " <b style = 'color:" + lss('c_u_d', "get") + ";' class = 'uniqueword'> $1 </b> ");
    }
  }
  if (hi_d) {
    for (var e = 0; e < dbls.length; e++) {
      if (dbls[e].test(dream)) dream = dream;
      dream = dream.replace(dbls[e], " <b style = 'color:" + lss('c_d_d', "get") + ";' class = 'dblword'> $1 </b> ");
    }
  }
  newListItem.innerHTML = dream;
  newListItem.id = id;
  newListItem.className = "verse";
  if (hi_sm) {
    for (var i = 0; i < smemlist.length; i++) {
      if (id === smemlist[i]) {
        newListItem.classList.add("memory-verse-s");
        newListItem.style.background = lss('c_sm_d', "get");
      }
    }
  }
  if (hi_mm) {
    for (var i = 0; i < mmemlist.length; i++) {
      if (id === mmemlist[i].r1 || id === mmemlist[i].r2) {
        newListItem.classList.add("memory-verse-m");
        newListItem.style.background = lss('c_mm_d', "get");
      }
    }
  }
  //console.log(sms,mmqs,mmrs,mmvs)
  dreamsList.appendChild(newListItem);
};
/*function postData(url, data, then) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function () {
      return resolve(xhr.responseText);
    };
    xhr.onerror = function () {
      return reject(xhr.statusText);
    };
    xhr.send(data);
  }).then(function (successMessage) {
    then(successMessage);
  }).catch(function (error) {
    console.log("no internet doing default", error, JSON.stringify(data));
    //location.reload();
  });
}
window.addEventListener("keydown", function (event) {
  if(event.keyCode === 13){
    sms.forEach(function(i){
      postData("/createquestion", JSON.stringify(i),function(){
        console.log(i)
      });
    })
    for(var i = 0;i<mmvs.length;i+=2){
      let v1 = mmvs[i],v2 = mmvs[i+1];
      let ref1 = v1.refrence,ref2 = v2.refrence;
      ref2 = ref2.split(":")[1]
      ref1 = ref1+"-"+ref2
      mmvs[i].refrence = ref1;
      mmvs[i].answer = mmvs[i].answer+" "+mmvs[i+1].answer;
      postData("/createquestion", JSON.stringify(mmvs[i]),function(){
        console.log(mmvs[i])
      });
    }
    for(var i = 0;i<mmrs.length;i+=2){
      let v1 = mmrs[i],v2 = mmrs[i+1];
      let ref1 = v1.refrence,ref2 = v2.refrence;
      ref2 = ref2.split(":")[1]
      ref1 = ref1+"-"+ref2
      mmrs[i].refrence = ref1;
      mmrs[i].answer = mmrs[i].answer+" "+ mmrs[i+1].answer+" "+ref1;
      postData("/createquestion", JSON.stringify(mmrs[i]),function(){
        console.log(mmrs[i])
      });
    }
    for(var i = 0;i<mmqs.length;i+=2){
      let v1 = mmqs[i],v2 = mmqs[i+1];
      let ref1 = v1.refrence,ref2 = v2.refrence;
      ref2 = ref2.split(":")[1]
      ref1 = ref1+"-"+ref2
      mmqs[i].refrence = ref1;
      mmqs[i].question += "-"+ref2;
      mmqs[i].answer = mmqs[i].answer+" "+ mmqs[i+1].answer
      postData("/createquestion", JSON.stringify(mmqs[i]),function(){
        console.log(mmqs[i])
      });
    }
  }
});*/