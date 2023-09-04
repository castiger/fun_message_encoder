
function MurmurHash3(string) {
    let i = 0;
    for (i, hash = 1779033703 ^ string.length; i < string.length; i++) {
        let bitwise_xor_from_character = hash ^ string.charCodeAt(i);
        hash = Math.imul(bitwise_xor_from_character, 3432918353);
        hash = hash << 13 | hash >>> 19;
    } return () => {
       // Return the hash that you can use as a seed
        hash = Math.imul(hash ^ (hash >>> 16), 2246822507);
        hash = Math.imul(hash ^ (hash >>> 13), 3266489909);
        return (hash ^= hash >>> 16) >>> 0;
    }
}

function SimpleFastCounter32(seed_1, seed_2, seed_3, seed_4) {
    return () => {
      seed_1 >>>= 0; seed_2 >>>= 0; seed_3 >>>= 0; seed_4 >>>= 0;
      let cast32 = (seed_1 + seed_2) | 0;
      seed_1 = seed_2 ^ seed_2 >>> 9;
      seed_2 = seed_3 + (seed_3 << 3) | 0;
      seed_3 = (seed_3 << 21 | seed_3 >>> 11);
      seed_4 = seed_4 + 1 | 0;
      cast32 = cast32 + seed_4 | 0;
      seed_3 = seed_3 + cast32 | 0;
      return (cast32 >>> 0) / 4294967296;
    }
}



function GenerateRandomPersonalSeed(seedlength) {
  var seedpool = 'abcdefghijklmnopqrstuvwxyz1234567890=-+_ABCDEFGHIJKLMNOPQRSTUVWYZ!@#$%^&*()}{<>~♦•◘♣○♠♥☼*→b÷~╖±ƒ↔╚TµÖ¬≈c<';
  if (typeof seedlength == 'undefined') {
    seedlength = 14
  };
  var seedpoollength = seedpool.length;
  var s = 0;
  var seedtarget = '';
  for (; s < seedlength; s++) {
    var targetcharacter = seedpool[Math.floor(random_number() * seedpoollength)];
    seedtarget += targetcharacter
  };
  console.log(seedtarget);
};

function SeedEncrypt(decrypting) {
  
String.prototype.replaceAt = function(index, replacement, stringlength) {
    return this.substr(index + 1, 0) + replacement + this.substr(index + 1, stringlength);
}


String.prototype.replaceAtDeep = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

String.prototype.replaceAtCustomLength = function(index, replacement, length) {
    return this.substr(0, index) + replacement + this.substr(index + length);
}


var generate_seed = MurmurHash3(document.getElementById('keyseed').value);
var random_number = SimpleFastCounter32(generate_seed(), generate_seed());
var string = document.getElementById('textboxinput').value;
var theme = document.getElementById('chosentheme').getAttribute("name");
var nocharacters = 0;
var stringlength = string.length;
var complexity = document.getElementById('complexity').value;


const encmatrixcontainer = {
  "Veggie" : [['Amaranth ','Arugula ','Beet ','Bok choy ','Borage greens ','Broccoli ','Brooklime ','Brussels sprouts ','Cabbage ','Catsear ','Celtuce ','Chaya ','Chickweed ','Chicory ','Chinese mallow ','Garland Chrysanthemum ','Collard greens ','Common purslane ','Corn salad ','Cress ','Dandelion ','Dill ','Endive ','Fat hen ','Fiddlehead ','Fluted pumpkin ','Golden samphire ','Good King Henry ','Grape ','Greater plantain ','Kai-lan ','Kale ','Komatsuna ','Kuka ','Lagos bologi ','Lambs lettuce ','Lambs quarters ','Land cress ','Lettuce ','Lizards tail ','Malabar spinach ','Mallow ','Melokhia ','Miners lettuce ','Mizuna greens ','Mustard ','Napa cabbage ','New Zealand Spinach ','Orache ','Pak choy ','Paracress ','Pea ','Poke ','Radicchio ','Rapini ','Samphire ','Sculpit Stridolo ','Sea beet ','Sea kale ','Shepherds purse ','Sierra Leone bologi ','Soko ','Sorrel ','Sour cabbage ','Spinach ','Summer purslane ','Swiss chard ','Tatsoi ','Turnip greens ','Watercress ','Water spinach ','Wheatgrass ','Yarrow ','Asparagus ','Cardoon ','Celeriac ','Celery ','Chives ','Elephant garlic ','Florence fennel ','Garlic ','Garlic chives ','Kohlrabi ','Kurrat ','Lemongrass ','Leek ','Lotus root ','Nopal ','Onion ','Pearl onion ','Potato onion ','Prussian asparagus ','Spring onion Scallion ','Shallot ','Tree onion[2] Welsh onion ','Wild leek ','Manchurian wild rice ','Ahipa ','Arracacha ','Bamboo shoot ','Beetroot ','Burdock ','Broadleaf arrowhead ','Camas ','Canna ','Carrot ','Cassava ','Chinese artichoke ','Daikon ','Earthnut pea ','Elephant foot yam ','Ensete ','Galangal ','Ginger ','Hamburg parsley ','Horseradish ','Jerusalem artichoke ','Jícama ','Mashua ','Parsnip ','Pignut ','Potato ','Prairie turnip ','Radish ','Rutabaga ','Salsify ','Scorzonera ','Skirret ','Swede ','Sweet potato ','Taro ','Ti ','Tigernut ','Turmeric ','Turnip ','Ulluco ','Wasabi ','Water caltrop ','Water chestnut ','Yacón ','Yam ','Aonori ','Arame ','Carola ','Dabberlocks ','Dulse ','Hijiki ','Kombu ','Laver Gim ','Mozuku ','Nori ','Ogonori ','Sea grape ','Sea lettuce ','Wakame']],
  "Fruit" : [['Apple ','Apricot ','Avocado ','Banana ','Bilberry ','Blackberry ','Blackcurrant ','Blueberry ','Boysenberry ','Currant ','Cherry ','Cherimoya ','Chico fruit ','Cloudberry ','Coconut ','Cranberry ','Cucumber ','Custard apple ','Damson ','Date ','Dragonfruit ','Durian ','Elderberry ','Feijoa ','Fig ','Goji berry ','Gooseberry ','Grape ','Raisin ','Grapefruit ','Guava ','Honeyberry ','Huckleberry ','Jabuticaba ','Jackfruit ','Jambul ','Jujube ','Juniper berry ','Kiwano ','Kiwifruit ','Kumquat ','Lemon ','Lime ','Loquat ','Longan ','Lychee ','Mango ','Mangosteen ','Marionberry ','Melon ','Cantaloupe ','Honeydew ','Watermelon ','Miracle fruit ','Mulberry ','Nectarine ','Nance ','Olive ','Orange ','Blood orange ','Clementine ','Mandarine ','Tangerine ','Papaya ','Passionfruit ','Peach ','Pear ','Persimmon ','Physalis ','Plantain ','Plum ','Prune ','Pineapple ','Plumcot ','Pomegranate ','Pomelo ', 'Purple mangosteen ','Quince ','Raspberry ','Salmonberry ','Rambutan ','Redcurrant ','Salal berry ','Salak ','Satsuma ','Soursop ','Star fruit ','Solanum quitoense ','Strawberry ','Tamarillo ','Tamarind ','Ugli fruit ','Yuzu ']],
  "Tree" : [['acacia ' ,'alder ' ,'arborvitae ' ,'ash ' ,'aspen ' ,'avocado ' ,'balsam ' ,'bamboo ' ,'baobab ' ,'bay ' ,'beech ' ,'birch ' ,'blackthorn ' ,'bluegum ' ,'buckeye ' ,'butternut ' ,'cedar ' ,'cherry ' ,'chestnut ' ,'chinkapin ' ,'cork ' ,'cottonwood ' ,'cucumber ' ,'cypress ' ,'dogwood ' ,'elder ' ,'elm ' ,'fir ' ,'guava ' ,'hackberry ' ,'hawthorn ' ,'hemlock ' ,'hickory ' ,'holly ' ,'hophornbean ' ,'hornbean ' ,'jacaranda ' ,'juniper ' ,'larch ' ,'laurel ' ,'lemon ' ,'lime ' ,'locust ' ,'madrone ' ,'magnolia ' ,'maple ' ,'moosewood ' ,'mulberry ' ,'myrtle ' ,'nutmeg ' ,'oak ' ,'orange ' ,'palm ' ,'pear ' ,'persimmon ' ,'pine ' ,'pineapple ' ,'piñon ' ,'pomegranate ' ,'poplar ' ,'redwood ' ,'sassafras ' ,'sequoia ' ,'shadbush ' ,'spruce ' ,'sumac ' ,'sycamore ' ,'tamarind ' ,'torreya ' ,'tupelo ' ,'walnut ' ,'willow ' ,'yew ']],
  "Character" : [['的','一','是','不','了','人','我','在','有','他','这','为','之','大','来','以','个','中','上','们','到','说','国','和','地','也','子','时','道','出','而','要','于','就','下','得','可','你','年','生','自','会','那','后','能','对','着','事','其','里','所','去','行','过','家','十','用','发','天','如','然','作','方','成','者','多','日','都','三','小','军','二','无','同','么','经','法','当','起','与','好','看','学','进','种','将','还','分','此','心','前','面','又','定','见','只','主','没','公','从','¿','ü','ú','ó','ñ','í','é','á','☼','◙','♂','♀','♪','♫','‼','§','↨','↑','↓','→','←','↔','▼','▲','¾','½','¼','¿','»','«','•','♠','♣','♦','♥','☻','☺','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0','=','-','+','_','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','Y','Z','!','@','#','$','%','^','&','*','(',')','}','{','<','>','~','♦','•','◘','♣','○','♠','♥','☼','*','→','b','÷','~','╖','±','ƒ','↔','╚','T','µ','Ö','¬','≈','c','<']],
  "Military" : [['Juliett ','Kilo ','Victor ','Whiskey ','Zulu ','Echo ','Foxtrot ','Bravo ','One ','Two ','Three ','Four ','Five ','Six ','Seven ','Eight ','Nine ','Zero ','Ten ','Sierra ','Tango ','Charlie ', 'Alpha ', 'Beta ', 'Gamma ', 'Delta ', 'Epsilon ', 'Digamma ', 'Zeta ', 'Eta ', 'Theta ', 'Iota ', 'Omicron ','Kappa ','Omega ','Storm ','Volcano ','Thunder ','Lightning ','Patriot ','March ','April ','May ','June ','July ','August ','September ', 'October ','Novemember ','December ','January ','February ','First ','Second ','Third ','Fourth ','Fifth ','Sixth ','Seventh ','Eighth ','Ninth ','Tenth ','Eleventh ','Twelth ','Recon ','Patrol ', 'Scout ','Metal ','Solid ','Gear ','Frosty ','Hot ','Zone ','Sharp ','Niner ','Truth ','Hope ','Final ','Last ','Complete ']],
  "Animal": [['aardvark ', 'abyssinian ', 'adelie penguin ', 'affenpinscher ', 'afghan hound ', 'african bush elephant ', 'african civet ', 'african clawed frog ', 'african forest elephant ', 'african palm civet ', 'african penguin ', 'african tree toad ', 'african wild dog ', 'ainu dog ', 'airedale terrier ', 'akbash ', 'akita ', 'alaskan malamute ', 'albatross ', 'aldabra giant tortoise ', 'alligator ', 'alpine dachsbracke ', 'american bulldog ', 'american cocker spaniel ', 'american coonhound ', 'american eskimo dog ', 'american foxhound ', 'american pit bull terrier ', 'american staffordshire terrier ', 'american water spaniel ', 'anatolian shepherd dog ', 'angelfish ', 'ant ', 'anteater ', 'antelope ', 'appenzeller dog ', 'arctic fox ', 'arctic hare ', 'arctic wolf ', 'armadillo ', 'asian elephant ', 'asian giant hornet ', 'asian palm civet ', 'asiatic black bear ', 'australian cattle dog ', 'australian kelpie dog ', 'australian mist ', 'australian shepherd ', 'australian terrier ', 'avocet ', 'axolotl ', 'aye aye ', 'baboon ', 'bactrian camel ', 'badger ', 'balinese ', 'banded palm civet ', 'bandicoot ', 'barb ', 'barn owl ', 'barnacle ', 'barracuda ', 'basenji dog ', 'basking shark ', 'basset hound ', 'bat ', 'bavarian mountain hound ', 'beagle ', 'bear ', 'bearded collie ', 'bearded dragon ', 'beaver ', 'bedlington terrier ', 'beetle ', 'bengal tiger ', 'bernese mountain dog ', 'bichon frise ', 'binturong ', 'bird ', 'birds of paradise ', 'birman ', 'bison ', 'black bear ', 'black rhinoceros ', 'black russian terrier ', 'black widow spider ', 'bloodhound ', 'blue lacy dog ', 'blue whale ', 'bluetick coonhound ', 'bobcat ', 'bolognese dog ', 'bombay ', 'bongo ', 'bonobo ', 'booby ', 'border collie ', 'border terrier ', 'bornean orang-utan ', 'borneo elephant ', 'boston terrier ', 'bottle nosed dolphin ', 'boxer dog ', 'boykin spaniel ', 'brazilian terrier ', 'brown bear ', 'budgerigar ', 'buffalo ', 'bull mastiff ', 'bull shark ', 'bull terrier ', 'bulldog ', 'bullfrog ', 'bumble bee ', 'burmese ', 'burrowing frog ', 'butterfly ', 'butterfly fish ', 'caiman ', 'caiman lizard ', 'cairn terrier ', 'camel ', 'canaan dog ', 'capybara ', 'caracal ', 'carolina dog ', 'cassowary ', 'cat ', 'caterpillar ', 'catfish ', 'cavalier king charles spaniel ', 'centipede ', 'cesky fousek ', 'chameleon ', 'chamois ', 'cheetah ', 'chesapeake bay retriever ', 'chicken ', 'chihuahua ', 'chimpanzee ', 'chinchilla ', 'chinese crested dog ', 'chinook ', 'chinstrap penguin ', 'chipmunk ', 'chow chow ', 'cichlid ', 'clouded leopard ', 'clown fish ', 'clumber spaniel ', 'coati ', 'cockroach ', 'collared peccary ', 'collie ', 'common buzzard ', 'common frog ', 'common loon ', 'common toad ', 'coral ', 'cottontop tamarin ', 'cougar ', 'cow ', 'coyote ', 'crab ', 'crab-eating macaque ', 'crane ', 'crested penguin ', 'crocodile ', 'cross river gorilla ', 'curly coated retriever ', 'cuscus ', 'cuttlefish ', 'dachshund ', 'dalmatian ', 'darwins frog ', 'deer ', 'desert tortoise ', 'deutsche bracke ', 'dhole ', 'dingo ', 'discus ', 'doberman pinscher ', 'dodo ', 'dog ', 'dogo argentino ', 'dogue de bordeaux ', 'dolphin ', 'donkey ', 'dormouse ', 'dragonfly ', 'drever ', 'duck ', 'dugong ', 'dunker ', 'dusky dolphin ', 'dwarf crocodile ', 'eagle ', 'earwig ', 'eastern gorilla ', 'eastern lowland gorilla ', 'echidna ', 'edible frog ', 'egyptian mau ', 'electric eel ', 'elephant ', 'elephant seal ', 'elephant shrew ', 'emperor penguin ', 'emperor tamarin ', 'emu ', 'english cocker spaniel ', 'english shepherd ', 'english springer spaniel ', 'entlebucher mountain dog ', 'epagneul pont audemer ', 'eskimo dog ', 'estrela mountain dog ', 'falcon ', 'fennec fox ', 'ferret ', 'field spaniel ', 'fin whale ', 'finnish spitz ', 'fire-bellied toad ', 'fish ', 'fishing cat ', 'flamingo ', 'flat coat retriever ', 'flounder ', 'fly ', 'flying squirrel ', 'fossa ', 'fox ', 'fox terrier ', 'french bulldog ', 'frigatebird ', 'frilled lizard ', 'frog ', 'fur seal ', 'galapagos penguin ', 'galapagos tortoise ', 'gar ', 'gecko ', 'gentoo penguin ', 'geoffroys tamarin ', 'gerbil ', 'german pinscher ', 'german shepherd ', 'gharial ', 'giant african land snail ', 'giant clam ', 'giant panda bear ', 'giant schnauzer ', 'gibbon ', 'gila monster ', 'giraffe ', 'glass lizard ', 'glow worm ', 'goat ', 'golden lion tamarin ', 'golden oriole ', 'golden retriever ', 'goose ', 'gopher ', 'gorilla ', 'grasshopper ', 'great dane ', 'great white shark ', 'greater swiss mountain dog ', 'green bee-eater ', 'greenland dog ', 'grey mouse lemur ', 'grey reef shark ', 'grey seal ', 'greyhound ', 'grizzly bear ', 'grouse ', 'guinea fowl ', 'guinea pig ', 'guppy ', 'hammerhead shark ', 'hamster ', 'hare ', 'harrier ', 'havanese ', 'hedgehog ', 'hercules beetle ', 'hermit crab ', 'heron ', 'highland cattle ', 'himalayan ', 'hippopotamus ', 'honey bee ', 'horn shark ', 'horned frog ', 'horse ', 'horseshoe crab ', 'howler monkey ', 'humboldt penguin ', 'hummingbird ', 'humpback whale ', 'hyena ', 'ibis ', 'ibizan hound ', 'iguana ', 'impala ', 'indian elephant ', 'indian palm squirrel ', 'indian rhinoceros ', 'indian star tortoise ', 'indochinese tiger ', 'indri ', 'insect ', 'irish setter ', 'irish wolfhound ', 'jack russel ', 'jackal ', 'jaguar ', 'japanese chin ', 'japanese macaque ', 'javan rhinoceros ', 'javanese ', 'jellyfish ', 'kakapo ', 'kangaroo ', 'keel billed toucan ', 'killer whale ', 'king crab ', 'king penguin ', 'kingfisher ', 'kiwi ', 'koala ', 'komodo dragon ', 'kudu ', 'labradoodle ', 'labrador retriever ', 'ladybird ', 'leaf-tailed gecko ', 'lemming ', 'lemur ', 'leopard ', 'leopard cat ', 'leopard seal ', 'leopard tortoise ', 'liger ', 'lion ', 'lionfish ', 'little penguin ', 'lizard ', 'llama ', 'lobster ', 'long-eared owl ', 'lynx ', ' ', 'macaroni penguin ', 'macaw ', 'magellanic penguin ', 'magpie ', 'maine coon ', 'malayan civet ', 'malayan tiger ', 'maltese ', 'manatee ', 'mandrill ', 'manta ray ', 'marine toad ', 'markhor ', 'marsh frog ', 'masked palm civet ', 'mastiff ', 'mayfly ', 'meerkat ', 'millipede ', 'minke whale ', 'mole ', 'molly ', 'mongoose ', 'mongrel ', 'monitor lizard ', 'monkey ', 'monte iberia eleuth ', 'moorhen ', 'moose ', 'moray eel ', 'moth ', 'mountain gorilla ', 'mountain lion ', 'mouse ', 'mule ', 'neanderthal ', 'neapolitan mastiff ', 'newfoundland ', 'newt ', 'nightingale ', 'norfolk terrier ', 'norwegian forest ', 'numbat ', 'nurse shark ', 'ocelot ', 'octopus ', 'okapi ', 'old english sheepdog ', 'olm ', 'opossum ', 'orang-utan ', 'ostrich ', 'otter ', 'oyster ', 'pademelon ', 'panther ', 'parrot ', 'patas monkey ', 'peacock ', 'pekingese ', 'pelican ', 'penguin ', 'persian ', 'pheasant ', 'pied tamarin ', 'pig ', 'pika ', 'pike ', 'pink fairy armadillo ', 'piranha ', 'platypus ', 'pointer ', 'poison dart frog ', 'polar bear ', 'pond skater ', 'poodle ', 'pool frog ', 'porcupine ', 'possum ', 'prawn ', 'proboscis monkey ', 'puffer fish ', 'puffin ', 'pug ', 'puma ', 'purple emperor ', 'puss moth ', 'pygmy hippopotamus ', 'pygmy marmoset ', 'quail ', 'quetzal ', 'quokka ', 'quoll ', 'rabbit ', 'raccoon ', 'raccoon dog ', 'radiated tortoise ', 'ragdoll ', 'rat ', 'rattlesnake ', 'red knee tarantula ', 'red panda ', 'red wolf ', 'red-handed tamarin ', 'reindeer ', 'rhinoceros ', 'river dolphin ', 'river turtle ', 'robin ', 'rock hyrax ', 'rockhopper penguin ', 'roseate spoonbill ', 'rottweiler ', 'royal penguin ', 'russian blue ', 'sabre-toothed tiger ', 'saint bernard ', 'salamander ', 'sand lizard ', 'saola ', 'scorpion ', 'scorpion fish ', 'sea dragon ', 'sea lion ', 'sea otter ', 'sea slug ', 'sea squirt ', 'sea turtle ', 'sea urchin ', 'seahorse ', 'seal ', 'serval ', 'sheep ', 'shih tzu ', 'shrimp ', 'siamese ', 'siamese fighting fish ', 'siberian ', 'siberian husky ', 'siberian tiger ', 'silver dollar ', 'skunk ', 'sloth ', 'slow worm ', 'snail ', 'snake ', 'snapping turtle ', 'snowshoe ', 'snowy owl ', 'somali ', 'south china tiger ', 'spadefoot toad ', 'sparrow ', 'spectacled bear ', 'sperm whale ', 'spider monkey ', 'spiny dogfish ', 'sponge ', 'squid ', 'squirrel ', 'squirrel monkey ', 'sri lankan elephant ', 'staffordshire bull terrier ', 'stag beetle ', 'starfish ', 'stellers sea cow ', 'stick insect ', 'stingray ', 'stoat ', 'striped rocket frog ', 'sumatran elephant ', 'sumatran orang-utan ', 'sumatran rhinoceros ', 'sumatran tiger ', 'sun bear ', 'swan ', 'tang ', 'tapanuli orang-utan ', 'tapir ', 'tarsier ', 'tasmanian devil ', 'tawny owl ', 'termite ', 'tetra ', 'thorny devil ', 'tibetan mastiff ', 'tiffany ', 'tiger ', 'tiger salamander ', 'tiger shark ', 'tortoise ', 'toucan ', 'tree frog ', 'tropicbird ', 'tuatara ', 'turkey ', 'turkish angora ', 'uakari ', 'uguisu ', 'umbrellabird ', 'vampire bat ', 'vervet monkey ', 'vulture ', 'wallaby ', 'walrus ', 'warthog ', 'wasp ', 'water buffalo ', 'water dragon ', 'water vole ', 'weasel ', 'welsh corgi ', 'west highland terrier ', 'western gorilla ', 'western lowland gorilla ', 'whale shark ', 'whippet ', 'white faced capuchin ', 'white rhinoceros ', 'white tiger ', 'wild boar ', 'wildebeest ', 'wolf ', 'wolverine ', 'wombat ', 'woodlouse ', 'woodpecker ', 'woolly mammoth ', 'woolly monkey ', 'wrasse ', 'x-ray tetra ', 'yak ', 'yellow-eyed penguin ', 'yorkshire terrier ', 'zebra ', 'zebra shark ', 'zebu ', 'zonkey ', 'zorse ']],
  "Location": [["Kongo ","Colorado Springs ","Long Beach ","Kansas City ","Branson ","Louisville ","Memphis ","Detroit ","Las Vegas ","El Paso ","Nashville ","Denver ","Seattle ","San Francisco ","Necropolis ","Indianapolis ","Charlotte ","Colombus ","Jacksonville ","Fort Worth ","San Diego ","San Antonio ","Phoenix ","Houston ","Dallas ","San Jose ","Bejing ","Dhaka ","Delhi ","Shanghai ","San Paulo ","Mexico City ","Tokyo ","North Pole ", "South Pole ", "North America ", "South America ", "Mexico ", "Europe ", "Great Britain ", "Asia ", "Canada ", "Australia ", "Hawaii ", "Rhode Island ", "Tahiti ", "Porto Rico ", "China ", "Japan ", "Jamaica ", "Costa Rica ", "Argentina ", "Austria ", "Turkey ", "Bangladesh ", "Belgium ", "Brazil ", "Bulgaria ", "Cambodia ", "Cayman Islands ", "Canada ", "Africa ", "Egypt ", "Chile ", "Congo ", "Croatia ", "Czech Republic ", "Cube ", "Portugal ", "Denmark ", "Ecuador ", "El Salvador ", "Finland ", "St.Louis ", "Chicago ", "New York ", "Los Angeles ", "Miami ", "Portland ", "France ", "Italy ", "Spain ", "Fiji ", "Germany ", "Greece ", "Greenland ", "Iceland ", "Guam ", "Guyana ", "Guinea ", "Vatican ", "Hong Kong ", "Kentucky ", "Hungary ", "Indonesia ", "India ", "Ivory Coast ", "Jordan ", "Kenya ", "Korea ", "Madagascar ", "Malta ", "Monaco ", "Morocoo ", "Mongolia ", "Myamar ", "Burma ", "Nauru ", "Nepal ", "Netherlands ", "New Zealand ", "Niger ", "Nigeria ", "Nicaragua ", "North Macedonia ", "Norway ", "Panama ", "Paraguay ", "Peru ", "Philippines ", "Poland ", "Romania ", "Samoa ", "Singapore ", "Slovakia ", "Sweden ", "Taiwan ", "Thailand ", "Uganda ", "Ukraine ", "Uruguay ", "Venice ", "Venezuela ", "Vietnam ", "Virgin Islands ", "Sahara Desert ", "Australian Outback ", "Zambia ", "Zimbabwe ", "city ","town ","forest ","desert ","lake ","jungle ","swamps ","ghetto ","stables ","farm ","church ","alleys ","downtown areas ","restaurants ","suburbs ","pyramid ","temple ","highway ","overpass ","bridge ","port ","factory ","studio ","supermarket ","convenient store ","warehouse ","tower ","castle ","fortress ","bunker ","basement ","attic ","bastion ","gatehouse ","stables ","workshop ","space station ","ocean ","beach ","lagoon ","mountains ","river ","pond ","junkyard ","bank ","coffee shop ","tea shop ","herbal remedies store ","burger joint ","fast food place ","local church ","cathedral ","monastary ","running track ","football field ","stadium ","park ","local lemonade stand ","bar ","tavern ","body of water ","sewers ","bathroom ","restroom ","lobby ","mcdonalds ","burger king ","kmart ","circle k ","convenient store ","dollar store ","farmers market ","beekeeper facility ","watermelon patch ","pumpkin patch ","horse stall ","luxury cruiseship ","vacation resort ","theme park ","amusement park ","flower meadow ","grass meadow ","mall ","clothing store ","gaming store ","tundra ","golf course ","baseball field ","soccer field ","basketball court "]],
  "Object" : [["pouch ","purse ","backpack ","piece of wood ","tire ","wheel ","drape ","curtain ","chair ","glove ","shirt ","belt ","shoe ","sock ","pillow case ","pillow ","blanket ","trophy ","elven rope ","metal ingot ","spool of string ","rope ","hay bale ","teddy bear ","orokin catalyst ","orokin reactor ","mote ","exotic engram ","rare engram ","uncommon engram ","umbral engram ","spoon ","wrench ","two by four ","plank ","log ","pipe ","brick ","stick ","jar ","toy ","radio ","binocular pair ","telescope ","rock ","stone ","window ","door ","doorframe ","painting ","bottle ","lamp ","artifact ","spellbook ","staff ","dummy ","walking stick ","glass pipe ","bongo ","drum ","ring ","necklace ","amulet ","medallion ","coin ","ball ","basket ","cart ","scale ","beaker ","phial ","vial ","machine ","robot ","golf club ","dollar bill ","antenna ","satelite ","ratchet ","jack ","bolt ","powersuit ","bench ","pair of tweezers ","pair of tongs ","cache ","boulder ","shield ","diamond ","gold ingot ","tent ","tree trunk ","tree ","sprinkler ","gemstone ","jewel ","crystal ","crystal ball ","magical scroll ","scroll ","historical record ","boom box ","keyboard ","mouse ","laptop ","tv ","computer ","water dish ","bowl ","plate ","battery ","flashlight ","cable ","camera ","microphone ","phone ","web cam ","tv reporter camera ","magnifier ","glass ","goblet "]],
  "Spice" : [["ajwain ","akudjura ","alexanders ","alkanet ","alligator pepper ","allspice ","angelica ","anise ","anise hyssop ","aniseed myrtle ","annattor ","apple mint ","artemisia ","asafoetida ","asarabacca ","avens ","avocado leaf ","barberry  ","basil ","bay leaf ","bee balm ","boldo ","borage ","black cardamom ","black mustard ","blue fenugreek ","brown mustard ","caraway ","cardamom ","carob ","catnip ","cassia ","cayenne pepper ","celery leaf ","celery seed ","chervil ","chicory ","chili pepper ","chili powder ","chives ","cicely ","cilantro ","cinnamon ","clary ","clove ","coriander ","costmary ","cuban oregano ","cubeb pepper ","cudweed ","culantro ","cumin ","curry ","dill ","elderflower ","epazote ","fennel ","fenugreek ","file powder ","fingerroot ","five-spice ","galangal ","galingale ","garlic chives ","garlic ","garlic salt ","ginger ","golpar ","grains of paradise ","grains of selim ","green chili ","horseradish ","houttuynia cordata ","huacatay ","hyssop ","indonesian bay leaf ","italian seasoning ","jasmine flowers ","jimbu ","juniper berry ","kaffir lime leaves ","kala zeera ","kawakawa seeds ","kencur ","keluak ","kinh gioi ","kokam seed ","korarima  ","koseret leaves ","lavender ","lemon balm ","lemongrass ","lemon ironbark ","lemon myrtle ","lemon verbena ","leptotes bicolor ","lesser calamint ","licorice ","lime flower ","lovage ","mace ","mahlab ","marjoram ","marsh mallow ","mastic ","mint ","mountain horopito ","musk mallow ","mustard ","nasturtium ","nigella ","njangsa ","nutmeg ","neem ","olida ","onion powder ","oregano ","orris root ","pandan flower ","pandan leaf ","paprika ","paracress ","parsley ","pepper ","peppermint ","peppermint gum leaf ","perilla ","peruvian pepper ","pandanus amaryllifolius ","brazilian pepper ","quassia ","ramsons ","rice paddy herb ","rosemary ","rue ","rowan ","safflower ","saffron ","sage ","saigon cinnamon ","salad burnet ","salep ","salt ","sassafras ","savory ","sesame ","silphium ","shiso ","sorrel ","spearmint ","spikenard ","star anise ","sumac sweet woodruff ","szechuan pepper ","tarragon ","thyme ","turmeric ","vanilla ","vietnamese cinnamon ","vietnamese coriander ","voatsiperifery ","wasabi ","water pepper ","watercress ","wattleseed ","white mustard ","wild betel ","wild thyme ","willow herb ","wintergreen ","wood avens ","woodruff ","wormwood ","yellow mustard ","yerba buena ","zaatar ","zedoary ","weed ","grass ","earthroot ","peacebloom ","mageroyal ","silverleaf ","bloodthistle ","stranglekelp ","bruiseweed ","grave moss ","briarthorn ","wild steelbloom ","kingsblood ","liferoot ","fadeleaf ","goldthorn ","dragon's teeth ","firebloom ","khadgar's whisker ","sungrass ","purple lotus ","mushrooms ","ghost mushrooms ","gromsblood ","dreamfoil ","golden sansam ","mountain silversage ","sorrowmoss ","icecap ","black lotus ","felweed ","dreaming glory ","ragveil ","flame cap ","terocone ","pinecones ","ceder ","pine needles ","dried leaves ","dirt ","rocks ","ancient lichen ","netherbloom ","netherdust ","nightmare vine ","mana thistle ","fel lotus ","goldclover ","fire leaf ","tiger lily ","talandra's rose ","rose petals ","ice ","granite ","adder's tongue ","deadnettle ","lichbloom ","icethorn ","frost lotus ","cinderloom ","azshara's veil ","stormvine ","heartblossom ","whiptail ","twilight jasmine ","green tea leaves ","silkweed ","snow lily ","fool's cap ","golden lotus ","sha-touched herb ","herbs ","desecrated herbs ","tomatoes ","sugar cane ","frostweed ","fireweed ","starflower ","gorgrond flytrap ","talador orchid ","nagrand arrowbloom ","aethril ","astral glory ","dreamleaf ","fjarnskaggl ","foxflower ","starlight rose ","felwort ","akunda's bite ","riverbud ","sea stalk ","sirens pollen ","star moss ","winter's kiss ","anchor weed ","Zin'anthid ","death blossom ","marrowroot ","rising glory ","vigil's torch ","widowbloom ","nightshade ","bubble poppy ","hochenblume ","saxifrage ","tree bark ","writhebark ","dreambloom "]],
  "Profession" : [["electrician ","carpenter ","carpet layer ","air duct cleaner ","pig keeper ","soldier ","drill sargeant ","minesweeper ","butler ","waiter ","waitress ","gatekeeper ", "doorman ", "cleric ", "sorceror ", "mage ", "archer ", "majesty ", "lord ", "principal ", "custodian ", "traveling merchant ", "door to door merchant ", "alien ", "ascendant being ", "bodyguard ", "savior ", "professor ", "biologist ", "botanist ", "programmer ", "computer avatar ", "AI ", "nanobot ", "chronicon ", "cybernetic organism ", "giant ", "golem ", "ogre ", "troll ", "hobbit ", "gnome ", "dwarf ", "orc ", "human ", "night elf ", "sentinel ", "cyborg ", "android ", "country music fan ", "death metal music fan ", "alternative rock music fan ", "k pop music fan ", "pop music fan ", "classical music fan ", "rap music fan ", "rock music fan ", "drunk ", "brute ", "guardian ", "boyfriend ", "girlfriend ", "husband ", "wife ", "housewife ", "olympian ", "idiot ", "moron ", "retard ", "fool ", "lunatic ", "gourmand ", "plumber ", "mechanic ", "farmer ", "gardener ", "cashier ", "janitor ", "knight ", "warrior ", "hero ", "wizard ", "priest ", "pastor ", "barbarian ", "driver ", "cop ", "astronaut ", "artist ", "chef ", "construction worker ", "doctor ", "firefighter ", "teacher ", "dentist ", "receptionist ", "secretary ", "barber ", "hairdresser ", "cleaner ", "biologist ", "scientist ", "mailman ", "pharmacist ", "taxi driver ", "travel guide ", "programmer ", "dancer ", "salesman ", "car salesman ", "lawyer ", "jockey ", "gymnist ", "bodybuilder ", "acrobat ", "athlete ", "stripper ", "madman ", "pcychopath ", "engineer ", "baker ", "master ", "coal miner ", "metal miner ", "road worker ", "pilot ", "woman ", "lady ", "man ", "guy ", "stalker ", "clerk ", "priestess ", "sorceror ", "demon ", "angel ", "follower ", "manager ", "commander ", "general ", "leader ", "eunich ", "amputee ", "patient ", "paramedic ", "medic ", "dominatrix ", "banshee ", "ghost ", "succubus ", "biker ", "gangster ", "sissy ", "panzy ", "thimbledick ", "sociopath ", "narcissist ", "racist ", "pacifist ", "jockey ", "rancher ", "addict ", "junkie ", "freak ", "belly dancer ", "iron miner ", "psychiatrist ", "therapist ", "king ", "prince ", "princess ", "vampire hunter ", "hunter ", "horse handler ", "zoo keeper ", "lion tamer ", "fortune teller ", "prophet ", "clown ", "jester ", "mayor ", "librarian ", "bar tender ", "inn keeper ", "dragon tamer ", "messenger ", "motorcross champion ", "dare devil ","skateboarder ","bicyclist ","accountant ","actor ","advocate ","appraiser ","architect ","astrologer ","apothecary ","astronomer ","auctioneer ","auditor ","author ","attender ","fanatic ","fan ","blacksmith ","boxer ","booking clerk ","boatman ","brick layer ","broker ","bursar ","teller ","chauffer ","chaprassi ","chemist ","cleaner ","cobbler ","compounder ","dealer ","debtor ","dhoby ","draughtsman ","drummer ","dyer ","edtior ","examiner ","driver ","fisherman ","goldsmith ","grass cutter ","grocer ","inspector ","horseman ","hawker ","labourer ","mediator ","midwife ","milkman ","mortgager ","mason ","minister ","musician ","rockstar ","navigator ","operator ","novelist ","observer ","pedestrian ","painter ","circus master ","carnival master ","ring leader ","photographer ","poet ","playwright ","porter ","post master ","postman ","pot maker ","potter ","printer ","publisher ","reader ", "repairman ","shoemaker ","shop keeper ","silversmith ","singer ","superintendent ","surgeon ","surveyor ","tailor ","tinker ","translator ","tutor ","watchman ","weaver ","writer ","psychologist ","enchanter ","alchemist "]]
}

 // var encryptionmatrix = WordMatrixFunction.CallMassiveWordArray();
 if (theme !== 0){
switch(theme){
case 'Veggie':
var encryptionmatrix = encmatrixcontainer["Veggie"]
nocharacters = 1;
break;

case 'Fruit':
var encryptionmatrix = encmatrixcontainer["Fruit"]
nocharacters = 1;

break;

case 'Tree':
var encryptionmatrix = encmatrixcontainer["Tree"]
nocharacters = 1;

break;


case 'Character':
 var encryptionmatrix = encmatrixcontainer["Character"]

break;

case 'Military':
 var encryptionmatrix = encmatrixcontainer["Military"];
 nocharacters = 1;

break;

case 'Animal':
  var encryptionmatrix = encmatrixcontainer["Animal"];
nocharacters = 1;


break;

case 'Object':
var encryptionmatrix = encmatrixcontainer["Object"]
nocharacters = 1;
break;

case 'Location':
var encryptionmatrix = encmatrixcontainer["Location"]
nocharacters = 1;
break;

case 'Spice':
var encryptionmatrix = encmatrixcontainer["Spice"]
nocharacters = 1;
break;

case 'Profession':
var encryptionmatrix = encmatrixcontainer["Profession"]
nocharacters = 1;
break;

case 'Super':
  var encryptionmatrix = [[]];
  var keylist = Object.keys(encmatrixcontainer);
  var k = 0;
  for (;k < keylist.length;k++){
    var j = 0;
    for (;j < encmatrixcontainer[keylist[k]].length;j++){
      if (keylist[k] == "Animal"){
      encryptionmatrix[1] = encmatrixcontainer[keylist[k]][j];
         
      } else if (keylist[k] == "Spice") {
      encryptionmatrix[2] = encmatrixcontainer[keylist[k]][j];

      } else if (keylist[k] == "Profession") {
      encryptionmatrix[3] = encmatrixcontainer[keylist[k]][j];

      } else if (keylist[k] == "Location") {
      encryptionmatrix[4] = encmatrixcontainer[keylist[k]][j];

      } 
      else {
      encryptionmatrix[0] = encryptionmatrix[0].concat(encmatrixcontainer[keylist[k]][j]);

      }
    }
  }

break;

  default:
}
};

var characterstomutate = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0','=','-','+','_','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','Y','Z','!','#','$','%','÷','<', ' ', '.', ',', '?']
var characterstomutatelength = characterstomutate.length;
var mutatedcharacters = [];
var m = 0;
var p = 0;
var CurrentEncString = "";
var failedattempts = 0;
var z;
var complexityroll;
var failed = 0;
var contains = 0;


mutateloop1:
for (;m < characterstomutatelength;){
  contains = 0;
 var wordarrayindex = Math.floor(random_number()*encryptionmatrix.length);
  CurrentEncString = "";
   p = 0
   complexityroll = Math.floor(random_number()*complexity + 1);
  for (;p < complexityroll; p++){
    CurrentEncString = CurrentEncString + encryptionmatrix[wordarrayindex][Math.floor(random_number()*encryptionmatrix[wordarrayindex].length)];
  
z = 0;

for(;z < (complexityroll * 4); z++){
 if (Math.floor(random_number()*2) == 1 && nocharacters == 0 && theme !== 'Character'){
    CurrentEncString = CurrentEncString + encmatrixcontainer["Character"][0][Math.floor(random_number()*encmatrixcontainer["Character"][0].length)];

 }

}

  }
  var a = 0;

for (;a < mutatedcharacters.length; a++){
 if (mutatedcharacters[a].startsWith(CurrentEncString)){
  contains = 1;
  break;
 }
}

if (contains == 0){
failedattempts = 0;
 mutatedcharacters.push(CurrentEncString);
 m++;
} else {
failedattempts++
if (failedattempts >= 300){
document.getElementById('phrasedisplay').innerHTML = 'Key is invalid or message is incomplete.'
  failed = 1;
  break;
}
};
};


if (decrypting !== 0){
var mutatedcharacterslength = mutatedcharacters.length;
var d = 0;
failedattempts = 0;
loop3:
for (;d < stringlength;){
var t = 0;
loop4:
for (;t < mutatedcharacterslength; t++){
    if (string.startsWith(mutatedcharacters[t])){
        failedattempts = 0;
        t = mutatedcharacterslength;
        d = stringlength;
    } else if (t == mutatedcharacterslength){
        d = stringlength;
document.getElementById('phrasedisplay').innerHTML = 'Key is invalid or message is incomplete.';
        console.log("Key is invalid or message is incomplete.")
        var invalidkey = 1;
    } else {
        failedattempts++
        if (failedattempts >= 3000){
document.getElementById('phrasedisplay').innerHTML = 'Key is invalid or message is incomplete.'
        console.log("Key is invalid or message is incomplete.")

            break loop3;
            break loop4;
            break;  
        }
    };
};
};

};

var modifiedstring = [];
failedattempts = 0;
if (typeof invalidkey == 'undefined'){
if (decrypting == 0){
var e = 0;
for (; e < stringlength; e++){
var charactertoreplace = string[e];
var charactertoreplaceindex = characterstomutate.indexOf(charactertoreplace);

modifiedstring.push(mutatedcharacters[charactertoreplaceindex]);

};
modifiedstring = modifiedstring.join("");
} else {
var mutatedcharacterslength = mutatedcharacters.length;
var d = 0;

loop1:
for (;d < stringlength;){
var t = 0;

loop2:
for (;t < mutatedcharacterslength; t++){
    if (string.startsWith(mutatedcharacters[t])){
      console.log(mutatedcharacters)
      failedattempts = 0;
var wordlength = mutatedcharacters[t].length;
d += wordlength;
string = string.replaceAtCustomLength(0, '', wordlength);
modifiedstring.push(characterstomutate[t]);
    } else {
failedattempts++
if (failedattempts >= 500){
document.getElementById('phrasedisplay').innerHTML = 'Key is invalid or message is incomplete.'
 failed = 1;
  break loop1;
  break loop2;
  break;
    };
  };
};
if (d == 0){
failedattempts++
if (failedattempts >= 500){
document.getElementById('phrasedisplay').innerHTML = 'Key is invalid or message is incomplete.'
 failed = 1;
  break loop1;
  break;
    };

}

};
modifiedstring = modifiedstring.join("");
};

if (failed == 0){
console.log("This is the string after. :    '", modifiedstring + "'");
  const el = document.createElement('textarea');
  el.value = modifiedstring;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
document.getElementById('phrasedisplay').innerHTML = modifiedstring;

}
};
};



function SetTheme(theme, themecolor){
document.getElementById('chosentheme').setAttribute("name",theme)
document.getElementById('chosentheme').innerHTML = theme;
document.getElementById('chosentheme').style.color = themecolor;

}
