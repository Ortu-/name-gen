name-gen
========

Random Name Generator


The biggest problem that I have with Procedurally Generated content on large scales is that with enough rules to get intelligible results from a generator, repetition is inevitable and glaring. What use is an infinite world if everything is just a reconfiguration of a relatively few and identifable components again and again, the see one youve seen them all effect. On the other hand, without enough rules or with conflicting rules you get untilligible nonsense far too often.

This isn't meant to be negative on PG, rather what im getting at is that it is an important consideration when designing a system to find a way to balance the 'magic vs machine, thinking vs feeling, automation vs art,' how much should actually be given over to the machine, how much should be crafted in fixed form and provided to the sytem, how much should be left to the user? How do you give true depth and soul to automation and make it more than a paper mask imitating something it has no true understanding of?

Some work is best done by factories, some work is best done by craftsmen.

That being said, names fill a somewhat unique role in the array of randomly generated content in that names really are not all that unique and for this, repetition can be a good thing. There are many people named John, Mary, Mike, and Sarah etc.

The most important thing towards creating identifiably distinct cultures in a name generator is the repetition of patterns unique and common to that culture. Each culture should have a different rule and pattern set to reinforce this.

Here's the method I'm using in a simple little rpg. It's not 100% procedurally generated as it relies on a seeded data set, though there are some advantages to this, especially when the cultures themselves are not procedural and the name sets need to fit with the existing overall cultural definition that's been created. This is where automation vs art comes into play.

By manually defining a set of modular components, you have a very high level of control over the flavor and feel of the culture being represented. The challenge of course is to define a rule and patternset for yourself and stick to it.

The interesting thought is that you could build the components (generally 2-4 letters) procedurally with randomized parameters for the ruleset to define common small patterns for a new culture, then plug those generated seed components into this system if you wanted to fully automate the process, but then of course things can quickly get rather complex. You start to run into the issues inherent in random PG: unintelligble or repetitive results. While the identifiable repetition of common names and components are a good thing within a single culture, you do not want this to happen across multiple cultures as they then lose a good deal of their unique identity.

So, this system is built around hand crafted components which are randomly assembled by the system to generate a 'First' or 'Common' name. Last names are left to the user to define. It is always good to engage the user and allow for creative personal input.

The generator itself is quite simple, the bulk of the work is seeding the component data set. For each culture, a set is defined each gender. A name can be assembled using either 2 or 3 parts. A first part and a last part will always be selected, a middle part will be randomly included or not. The generator simply selects a random index for each part in the specified culture/gender set.


Using the included seed file will give results such as follows:

'Celish' (Typical western fantasy rpg themed):
========

Male:

```
Ondelsric
Timtraevoc
Haldan
Bulderwyc
Aldyn
Gwydott
Indor
Meddarion
Alellot
Canradvyc
Mertrin
Birin
Oroc
Culdaerane
Ulguront
Elton
Hallonic
Dalin
Korrelas
Daloair
```

For this culture, masculine names will commonly start with consonants, and masculine vowels U, O, while others can appaer with varying frequency, it is rare for a male to start with Y
Endings are usually a shorter, sharper, harder sounds ic, oc, ot, in, on, an

Female:

```
Eilynell
Yrila
Leria
Erisyn
Isrea
Ailrea
Gwinoa
Camorrese
Ginidira
Cylolla
Sarbral
Janiboa
Seriamyl
Salesa
Eloa
Ainryna
Anneigh
Janabea
Lyadasa
Jinedrese
```

Feminine will more often start with vowel, commonly A, E, Y, and rarely with a masculine U, O
Endings are longer, softer, more breathy, often vowel a, ia, ea, eigh, ese, el

'Xichan' (Eastern themed):
========

Male:

```
Xunga lo
Chuxupo
Kamato
Xi lu
Ta' lan
Zankka
Zhago
Langkakku
Yunlachan
Hulon
Tsanchan
Tzunxichan
Lu'ga 'to
Yatnuchan
Kashan
Huxun tsu
Yannuta
Shosha lin
Xaolan tzo
Yungsu
```

For this culture as a whole, I've introduced the ' character as a short sharp pause marker, as well as allowing a space to break a name into further pieces. 
The uncommon for western consonents X, Q, Z, W etc have been made far more common on the whole while G, H, J and such are less
Masculine will rarely begin with a vowel, and Y is treated more as a consonant, with endings not as sharp and hard as the western culture but still following a U, O masculine theme as well as setting an, in to masculine

Female:

```
Yingkime
Tsingsun
Quiyamai
Keikke 'tei
Lennirti
Zei 'te
Chikko
Qeshi lun
Onime
Xipi
Yinsi
Yitkise
Shixemi
Shikimei
Jexi le
Wenchun
Oekki 'te
Peichechen
Osesi
Quilensi
```

Feminine more often starts with a vowel, and O in the front is considered feminine while o at the end is still masculine and uncommon. 
Endings are still commonly a vowel, though here it is shorter, much less breathy. frequently e, i, as well as setting en, un to feminine opposite the masculine an, in

'Uziiri' (Desert themed):
========

Male:

```
Zedunn
Irzaheek
Tureek
Rhavizzahd
Malonij
Kaloridd
Zahehk
Shareyidd
Sinduon
Zaddunek
Shiyad
Almorek
Talohm
Zeddsaerr
Sarruntidd
Irzim
Arrim
Salad
Suleyiir
Zemmariz
```

For this culture, double letters are common, rr, ii, ee, dd, mm, zz etc, and breathiness is prevailant throughout.
For masculine starters, Z, S are common consonants, while A, U, I appear for the vowels. Masculine names tend to start a bit softer than males of other cultures moving to harder at the end, somewhere in the breathy mid ranges id, on, ek, un, um, iz

Female:

```
Shayerryahn
Suayara
Seyas
Sariah
Yamallyn
Saryin
Sunyahn
Sameyahd
Shazahd
Sullorian
Maryeh
Selifahr
Sullanyah
Malahz
Seyissann
Alia
Milloh
Fahlorrloh
Zelyihn
Mina
```

For feminine starters Z, S are still common as with the males, though S a bit more so here. Y also appears much more frequently. Endings are softer and somewhat breathier than the males, in, ahd, ahn, ah, oh, eh

========

In a full seed file, I'm generally targetting 100 options per part per gender per race giving slightly over 1 million possibilites for each gender/race.
As far as randomality goes, it is a small data set with a relatively small range of possibilities. Remember however, names are not unique. An important part of defining a cultural pattern is actually the repetition of common names, and so it becomes desireable to have a large enough data set that every third name isn't the same, but that you might expect to find a couple of duplicates in 1,000.
