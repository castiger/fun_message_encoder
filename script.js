
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
 var encryptionmatrixcharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0','=','-','+','_','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','Y','Z','!','@','#','$','%','^','&','*','(',')','}','{','<','>','~','♦','•','◘','♣','○','♠','♥','☼','*','→','b','÷','~','╖','±','ƒ','↔','╚','T','µ','Ö','¬','≈','c','<'];

const encmatrixcontainer = {
  "Veggie" : [['Amaranth ','Arugula ','Beet ','Bok choy ','Borage greens ','Broccoli ','Brooklime ','Brussels sprouts ','Cabbage ','Catsear ','Celtuce ','Chaya ','Chickweed ','Chicory ','Chinese mallow ','Garland Chrysanthemum ','Collard greens ','Common purslane ','Corn salad ','Cress ','Dandelion ','Dill ','Endive ','Fat hen ','Fiddlehead ','Fluted pumpkin ','Golden samphire ','Good King Henry ','Grape ','Greater plantain ','Kai-lan ','Kale ','Komatsuna ','Kuka ','Lagos bologi ','Lambs lettuce ','Lambs quarters ','Land cress ','Lettuce ','Lizards tail ','Malabar spinach ','Mallow ','Melokhia ','Miners lettuce ','Mizuna greens ','Mustard ','Napa cabbage ','New Zealand Spinach ','Orache ','Pak choy ','Paracress ','Pea ','Poke ','Radicchio ','Rapini ','Samphire ','Sculpit Stridolo ','Sea beet ','Sea kale ','Shepherds purse ','Sierra Leone bologi ','Soko ','Sorrel ','Sour cabbage ','Spinach ','Summer purslane ','Swiss chard ','Tatsoi ','Turnip greens ','Watercress ','Water spinach ','Wheatgrass ','Yarrow ','Asparagus ','Cardoon ','Celeriac ','Celery ','Chives ','Elephant garlic ','Florence fennel ','Garlic ','Garlic chives ','Kohlrabi ','Kurrat ','Lemongrass ','Leek ','Lotus root ','Nopal ','Onion ','Pearl onion ','Potato onion ','Prussian asparagus ','Spring onion Scallion ','Shallot ','Tree onion[2] Welsh onion ','Wild leek ','Manchurian wild rice ','Ahipa ','Arracacha ','Bamboo shoot ','Beetroot ','Burdock ','Broadleaf arrowhead ','Camas ','Canna ','Carrot ','Cassava ','Chinese artichoke ','Daikon ','Earthnut pea ','Elephant foot yam ','Ensete ','Galangal ','Ginger ','Hamburg parsley ','Horseradish ','Jerusalem artichoke ','Jícama ','Mashua ','Parsnip ','Pignut ','Potato ','Prairie turnip ','Radish ','Rutabaga ','Salsify ','Scorzonera ','Skirret ','Swede ','Sweet potato ','Taro ','Ti ','Tigernut ','Turmeric ','Turnip ','Ulluco ','Wasabi ','Water caltrop ','Water chestnut ','Yacón ','Yam ','Aonori ','Arame ','Carola ','Dabberlocks ','Dulse ','Hijiki ','Kombu ','Laver Gim ','Mozuku ','Nori ','Ogonori ','Sea grape ','Sea lettuce ','Wakame']],
  "Fruit" : [['Apple ','Apricot ','Avocado ','Banana ','Bilberry ','Blackberry ','Blackcurrant ','Blueberry ','Boysenberry ','Currant ','Cherry ','Cherimoya ','Chico fruit ','Cloudberry ','Coconut ','Cranberry ','Cucumber ','Custard apple ','Damson ','Date ','Dragonfruit ','Durian ','Elderberry ','Feijoa ','Fig ','Goji berry ','Gooseberry ','Grape ','Raisin ','Grapefruit ','Guava ','Honeyberry ','Huckleberry ','Jabuticaba ','Jackfruit ','Jambul ','Jujube ','Juniper berry ','Kiwano ','Kiwifruit ','Kumquat ','Lemon ','Lime ','Loquat ','Longan ','Lychee ','Mango ','Mangosteen ','Marionberry ','Melon ','Cantaloupe ','Honeydew ','Watermelon ','Miracle fruit ','Mulberry ','Nectarine ','Nance ','Olive ','Orange ','Blood orange ','Clementine ','Mandarine ','Tangerine ','Papaya ','Passionfruit ','Peach ','Pear ','Persimmon ','Physalis ','Plantain ','Plum ','Prune ','Pineapple ','Plumcot ','Pomegranate ','Pomelo ', 'Purple mangosteen ','Quince ','Raspberry ','Salmonberry ','Rambutan ','Redcurrant ','Salal berry ','Salak ','Satsuma ','Soursop ','Star fruit ','Solanum quitoense ','Strawberry ','Tamarillo ','Tamarind ','Ugli fruit ','Yuzu ']],
  "Tree" : [['acacia ' ,'alder ' ,'arborvitae ' ,'ash ' ,'aspen ' ,'avocado ' ,'balsam ' ,'bamboo ' ,'baobab ' ,'bay ' ,'beech ' ,'birch ' ,'blackthorn ' ,'bluegum ' ,'buckeye ' ,'butternut ' ,'cedar ' ,'cherry ' ,'chestnut ' ,'chinkapin ' ,'cork ' ,'cottonwood ' ,'cucumber ' ,'cypress ' ,'dogwood ' ,'elder ' ,'elm ' ,'fir ' ,'guava ' ,'hackberry ' ,'hawthorn ' ,'hemlock ' ,'hickory ' ,'holly ' ,'hophornbean ' ,'hornbean ' ,'jacaranda ' ,'juniper ' ,'larch ' ,'laurel ' ,'lemon ' ,'lime ' ,'locust ' ,'madrone ' ,'magnolia ' ,'maple ' ,'moosewood ' ,'mulberry ' ,'myrtle ' ,'nutmeg ' ,'oak ' ,'orange ' ,'palm ' ,'pear ' ,'persimmon ' ,'pine ' ,'pineapple ' ,'piñon ' ,'pomegranate ' ,'poplar ' ,'redwood ' ,'sassafras ' ,'sequoia ' ,'shadbush ' ,'spruce ' ,'sumac ' ,'sycamore ' ,'tamarind ' ,'torreya ' ,'tupelo ' ,'walnut ' ,'willow ' ,'yew ']],
  "Character" : [['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0','=','-','+','_','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','Y','Z','!','@','#','$','%','^','&','*','(',')','}','{','<','>','~','♦','•','◘','♣','○','♠','♥','☼','*','→','b','÷','~','╖','±','ƒ','↔','╚','T','µ','Ö','¬','≈','c','<']],
  "Military" : [['One ','Two ','Three ','Four ','Five ','Six ','Seven ','Eight ','Nine ','Zero ','Ten ','Sierra ','Tango ','Charlie ', 'Alpha ', 'Beta ', 'Gamma ', 'Delta ', 'Epsilon ', 'Digamma ', 'Zeta ', 'Eta ', 'Theta ', 'Iota ', 'Omicron ','Kappa ','Omega ']],
  "Animal" : [['aardvark', 'abyssinian', 'adelie penguin', 'affenpinscher', 'afghan hound', 'african bush elephant', 'african civet', 'african clawed frog', 'african forest elephant', 'african palm civet', 'african penguin', 'african tree toad', 'african wild dog', 'ainu dog', 'airedale terrier', 'akbash', 'akita', 'alaskan malamute', 'albatross', 'aldabra giant tortoise', 'alligator', 'alpine dachsbracke', 'american bulldog', 'american cocker spaniel', 'american coonhound', 'american eskimo dog', 'american foxhound', 'american pit bull terrier', 'american staffordshire terrier', 'american water spaniel', 'anatolian shepherd dog', 'angelfish', 'ant', 'anteater', 'antelope', 'appenzeller dog', 'arctic fox', 'arctic hare', 'arctic wolf', 'armadillo', 'asian elephant', 'asian giant hornet', 'asian palm civet', 'asiatic black bear', 'australian cattle dog', 'australian kelpie dog', 'australian mist', 'australian shepherd', 'australian terrier', 'avocet', 'axolotl', 'aye aye', 'baboon', 'bactrian camel', 'badger', 'balinese', 'banded palm civet', 'bandicoot', 'barb', 'barn owl', 'barnacle', 'barracuda', 'basenji dog', 'basking shark', 'basset hound', 'bat', 'bavarian mountain hound', 'beagle', 'bear', 'bearded collie', 'bearded dragon', 'beaver', 'bedlington terrier', 'beetle', 'bengal tiger', 'bernese mountain dog', 'bichon frise', 'binturong', 'bird', 'birds of paradise', 'birman', 'bison', 'black bear', 'black rhinoceros', 'black russian terrier', 'black widow spider', 'bloodhound', 'blue lacy dog', 'blue whale', 'bluetick coonhound', 'bobcat', 'bolognese dog', 'bombay', 'bongo', 'bonobo', 'booby', 'border collie', 'border terrier', 'bornean orang-utan', 'borneo elephant', 'boston terrier', 'bottle nosed dolphin', 'boxer dog', 'boykin spaniel', 'brazilian terrier', 'brown bear', 'budgerigar', 'buffalo', 'bull mastiff', 'bull shark', 'bull terrier', 'bulldog', 'bullfrog', 'bumble bee', 'burmese', 'burrowing frog', 'butterfly', 'butterfly fish', 'caiman', 'caiman lizard', 'cairn terrier', 'camel', 'canaan dog', 'capybara', 'caracal', 'carolina dog', 'cassowary', 'cat', 'caterpillar', 'catfish', 'cavalier king charles spaniel', 'centipede', 'cesky fousek', 'chameleon', 'chamois', 'cheetah', 'chesapeake bay retriever', 'chicken', 'chihuahua', 'chimpanzee', 'chinchilla', 'chinese crested dog', 'chinook', 'chinstrap penguin', 'chipmunk', 'chow chow', 'cichlid', 'clouded leopard', 'clown fish', 'clumber spaniel', 'coati', 'cockroach', 'collared peccary', 'collie', 'common buzzard', 'common frog', 'common loon', 'common toad', 'coral', 'cottontop tamarin', 'cougar', 'cow', 'coyote', 'crab', 'crab-eating macaque', 'crane', 'crested penguin', 'crocodile', 'cross river gorilla', 'curly coated retriever', 'cuscus', 'cuttlefish', 'dachshund', 'dalmatian', 'darwins frog', 'deer', 'desert tortoise', 'deutsche bracke', 'dhole', 'dingo', 'discus', 'doberman pinscher', 'dodo', 'dog', 'dogo argentino', 'dogue de bordeaux', 'dolphin', 'donkey', 'dormouse', 'dragonfly', 'drever', 'duck', 'dugong', 'dunker', 'dusky dolphin', 'dwarf crocodile', 'eagle', 'earwig', 'eastern gorilla', 'eastern lowland gorilla', 'echidna', 'edible frog', 'egyptian mau', 'electric eel', 'elephant', 'elephant seal', 'elephant shrew', 'emperor penguin', 'emperor tamarin', 'emu', 'english cocker spaniel', 'english shepherd', 'english springer spaniel', 'entlebucher mountain dog', 'epagneul pont audemer', 'eskimo dog', 'estrela mountain dog', 'falcon', 'fennec fox', 'ferret', 'field spaniel', 'fin whale', 'finnish spitz', 'fire-bellied toad', 'fish', 'fishing cat', 'flamingo', 'flat coat retriever', 'flounder', 'fly', 'flying squirrel', 'fossa', 'fox', 'fox terrier', 'french bulldog', 'frigatebird', 'frilled lizard', 'frog', 'fur seal', 'galapagos penguin', 'galapagos tortoise', 'gar', 'gecko', 'gentoo penguin', 'geoffroys tamarin', 'gerbil', 'german pinscher', 'german shepherd', 'gharial', 'giant african land snail', 'giant clam', 'giant panda bear', 'giant schnauzer', 'gibbon', 'gila monster', 'giraffe', 'glass lizard', 'glow worm', 'goat', 'golden lion tamarin', 'golden oriole', 'golden retriever', 'goose', 'gopher', 'gorilla', 'grasshopper', 'great dane', 'great white shark', 'greater swiss mountain dog', 'green bee-eater', 'greenland dog', 'grey mouse lemur', 'grey reef shark', 'grey seal', 'greyhound', 'grizzly bear', 'grouse', 'guinea fowl', 'guinea pig', 'guppy', 'hammerhead shark', 'hamster', 'hare', 'harrier', 'havanese', 'hedgehog', 'hercules beetle', 'hermit crab', 'heron', 'highland cattle', 'himalayan', 'hippopotamus', 'honey bee', 'horn shark', 'horned frog', 'horse', 'horseshoe crab', 'howler monkey', 'humboldt penguin', 'hummingbird', 'humpback whale', 'hyena', 'ibis', 'ibizan hound', 'iguana', 'impala', 'indian elephant', 'indian palm squirrel', 'indian rhinoceros', 'indian star tortoise', 'indochinese tiger', 'indri', 'insect', 'irish setter', 'irish wolfhound', 'jack russel', 'jackal', 'jaguar', 'japanese chin', 'japanese macaque', 'javan rhinoceros', 'javanese', 'jellyfish', 'kakapo', 'kangaroo', 'keel billed toucan', 'killer whale', 'king crab', 'king penguin', 'kingfisher', 'kiwi', 'koala', 'komodo dragon', 'kudu', 'labradoodle', 'labrador retriever', 'ladybird', 'leaf-tailed gecko', 'lemming', 'lemur', 'leopard', 'leopard cat', 'leopard seal', 'leopard tortoise', 'liger', 'lion', 'lionfish', 'little penguin', 'lizard', 'llama', 'lobster', 'long-eared owl', 'lynx', '', 'macaroni penguin', 'macaw', 'magellanic penguin', 'magpie', 'maine coon', 'malayan civet', 'malayan tiger', 'maltese', 'manatee', 'mandrill', 'manta ray', 'marine toad', 'markhor', 'marsh frog', 'masked palm civet', 'mastiff', 'mayfly', 'meerkat', 'millipede', 'minke whale', 'mole', 'molly', 'mongoose', 'mongrel', 'monitor lizard', 'monkey', 'monte iberia eleuth', 'moorhen', 'moose', 'moray eel', 'moth', 'mountain gorilla', 'mountain lion', 'mouse', 'mule', 'neanderthal', 'neapolitan mastiff', 'newfoundland', 'newt', 'nightingale', 'norfolk terrier', 'norwegian forest', 'numbat', 'nurse shark', 'ocelot', 'octopus', 'okapi', 'old english sheepdog', 'olm', 'opossum', 'orang-utan', 'ostrich', 'otter', 'oyster', 'pademelon', 'panther', 'parrot', 'patas monkey', 'peacock', 'pekingese', 'pelican', 'penguin', 'persian', 'pheasant', 'pied tamarin', 'pig', 'pika', 'pike', 'pink fairy armadillo', 'piranha', 'platypus', 'pointer', 'poison dart frog', 'polar bear', 'pond skater', 'poodle', 'pool frog', 'porcupine', 'possum', 'prawn', 'proboscis monkey', 'puffer fish', 'puffin', 'pug', 'puma', 'purple emperor', 'puss moth', 'pygmy hippopotamus', 'pygmy marmoset', 'quail', 'quetzal', 'quokka', 'quoll', 'rabbit', 'raccoon', 'raccoon dog', 'radiated tortoise', 'ragdoll', 'rat', 'rattlesnake', 'red knee tarantula', 'red panda', 'red wolf', 'red-handed tamarin', 'reindeer', 'rhinoceros', 'river dolphin', 'river turtle', 'robin', 'rock hyrax', 'rockhopper penguin', 'roseate spoonbill', 'rottweiler', 'royal penguin', 'russian blue', 'sabre-toothed tiger', 'saint bernard', 'salamander', 'sand lizard', 'saola', 'scorpion', 'scorpion fish', 'sea dragon', 'sea lion', 'sea otter', 'sea slug', 'sea squirt', 'sea turtle', 'sea urchin', 'seahorse', 'seal', 'serval', 'sheep', 'shih tzu', 'shrimp', 'siamese', 'siamese fighting fish', 'siberian', 'siberian husky', 'siberian tiger', 'silver dollar', 'skunk', 'sloth', 'slow worm', 'snail', 'snake', 'snapping turtle', 'snowshoe', 'snowy owl', 'somali', 'south china tiger', 'spadefoot toad', 'sparrow', 'spectacled bear', 'sperm whale', 'spider monkey', 'spiny dogfish', 'sponge', 'squid', 'squirrel', 'squirrel monkey', 'sri lankan elephant', 'staffordshire bull terrier', 'stag beetle', 'starfish', 'stellers sea cow', 'stick insect', 'stingray', 'stoat', 'striped rocket frog', 'sumatran elephant', 'sumatran orang-utan', 'sumatran rhinoceros', 'sumatran tiger', 'sun bear', 'swan', 'tang', 'tapanuli orang-utan', 'tapir', 'tarsier', 'tasmanian devil', 'tawny owl', 'termite', 'tetra', 'thorny devil', 'tibetan mastiff', 'tiffany', 'tiger', 'tiger salamander', 'tiger shark', 'tortoise', 'toucan', 'tree frog', 'tropicbird', 'tuatara', 'turkey', 'turkish angora', 'uakari', 'uguisu', 'umbrellabird', 'vampire bat', 'vervet monkey', 'vulture', 'wallaby', 'walrus', 'warthog', 'wasp', 'water buffalo', 'water dragon', 'water vole', 'weasel', 'welsh corgi', 'west highland terrier', 'western gorilla', 'western lowland gorilla', 'whale shark', 'whippet', 'white faced capuchin', 'white rhinoceros', 'white tiger', 'wild boar', 'wildebeest', 'wolf', 'wolverine', 'wombat', 'woodlouse', 'woodpecker', 'woolly mammoth', 'woolly monkey', 'wrasse', 'x-ray tetra', 'yak', 'yellow-eyed penguin', 'yorkshire terrier', 'zebra', 'zebra shark', 'zebu', 'zonkey', 'zorse']],
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

case 'Super':
  var encryptionmatrix = [[]];
  var keylist = Object.keys(encmatrixcontainer);
  var k = 0;
  for (;k < keylist.length;k++){
    var j = 0;
    for (;j < encmatrixcontainer[keylist[k]].length;j++){
      encryptionmatrix[0].concat(encmatrixcontainer[keylist[k]][j]);
    }
  }
nocharacters = 1;

break;

  default:
}
};

var characterstomutate = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0','=','-','+','_','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','Y','Z','!','@','#','$','%','^','&','*','(',')','}','{','<','>','~','♦','•','◘','♣','○','♠','♥','☼','*','→','b','÷','~','╖','±','ƒ','↔','╚','T','µ','Ö','¬','≈','c','<', ' ', '.', ',']
var characterstomutatelength = characterstomutate.length;
var mutatedcharacters = [];
var m = 0;

for (;m < characterstomutatelength;){
 var wordarrayindex = Math.floor(random_number()*encryptionmatrix.length);
 var wordindex1 = Math.floor(random_number()*encryptionmatrix[wordarrayindex].length);
 if (nocharacters == 0){
 var EncCharIndex1 = Math.floor(random_number()*encryptionmatrixcharacters.length);
 var EncCharIndex2 = Math.floor(random_number()*encryptionmatrixcharacters.length);

 } else {
 var EncWordIndex1 = Math.floor(random_number()*encryptionmatrix[wordarrayindex].length);
 var EncWordIndex2 = Math.floor(random_number()*encryptionmatrix[wordarrayindex].length);

 };
 var ChosenEnc = encryptionmatrix[wordarrayindex][wordindex1];
if (!mutatedcharacters.includes(ChosenEnc)){

  
  if (Math.floor(random_number()*2) == 1 && nocharacters == 0 || theme == 'Character'){
    ChosenEnc = ChosenEnc + encryptionmatrixcharacters[EncCharIndex1] + encryptionmatrixcharacters[EncCharIndex2]
  };

  switch (theme) {
    case "Tree":
 var enc5 = Math.floor(random_number()*encryptionmatrixcharacters.length);
    ChosenEnc = ChosenEnc + encryptionmatrix[wordarrayindex][EncWordIndex1] + encryptionmatrix[wordarrayindex][EncWordIndex2] + encryptionmatrixcharacters[enc5];
      
      break;
    
    case "Military":
 var enc5 = Math.floor(random_number()*encryptionmatrixcharacters.length);
    ChosenEnc = ChosenEnc + encryptionmatrix[wordarrayindex][EncWordIndex1] + encryptionmatrix[wordarrayindex][EncWordIndex2]  + encryptionmatrixcharacters[enc5];
      
      break;
    
    case "Veggie":
 var enc5 = Math.floor(random_number()*encryptionmatrix[wordarrayindex].length);
    ChosenEnc = ChosenEnc + encryptionmatrix[wordarrayindex][EncWordIndex2]  + encryptionmatrix[wordarrayindex][enc5];
      
      break;
    
    case "Fruit":
 var enc5 = Math.floor(random_number()*encryptionmatrix[wordarrayindex].length);
    ChosenEnc = ChosenEnc + encryptionmatrix[wordarrayindex][EncWordIndex2]  + encryptionmatrix[wordarrayindex][enc5];
      
      break;

    case "Animal":
 var enc5 = Math.floor(random_number()*encryptionmatrix[wordarrayindex].length);
    ChosenEnc = ChosenEnc + " " + encryptionmatrix[wordarrayindex][EncWordIndex2] + " " + encryptionmatrix[wordarrayindex][enc5] + " ";


      break;
    case "Super":
 var enc5 = Math.floor(random_number()*encryptionmatrix[wordarrayindex].length);
    ChosenEnc = ChosenEnc + encryptionmatrix[wordarrayindex][EncWordIndex2]  + encryptionmatrix[wordarrayindex][enc5];

  
    default:
      break;
  }

 mutatedcharacters.push(ChosenEnc);
 m++;
};
};

if (decrypting !== 0){
var mutatedcharacterslength = mutatedcharacters.length;
var d = 0;
for (;d < stringlength;){
var t = 0;
for (;t < mutatedcharacterslength; t++){
    if (string.startsWith(mutatedcharacters[t])){
        t = mutatedcharacterslength;
        d = stringlength;
    } else if (t == mutatedcharacterslength - 1){
        d = stringlength;
        document.getElementById('phrasedisplay').innerHTML = 'invalid key to decrypt';
        console.log('invalid key to decrypt');
        var invalidkey = 1;
    };
};
};

};

var modifiedstring = [];
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
for (;d < stringlength;){
var t = 0;
for (;t < mutatedcharacterslength; t++){
    if (string.startsWith(mutatedcharacters[t])){
var wordlength = mutatedcharacters[t].length;
d += wordlength;
string = string.replaceAtCustomLength(0, '', wordlength);
modifiedstring.push(characterstomutate[t]);
    };
};

};
modifiedstring = modifiedstring.join("");
};

console.log("This is the string after. :    '", modifiedstring + "'");
  const el = document.createElement('textarea');
  el.value = modifiedstring;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
document.getElementById('phrasedisplay').innerHTML = modifiedstring;
};
};


function SetTheme(theme){
document.getElementById('chosentheme').setAttribute("name",theme)
document.getElementById('chosentheme').innerHTML = theme;
switch (theme) {
  
  case "Character":
document.getElementById('chosentheme').style.color = 'purple';
    
    break;

  
  case "Veggie":
document.getElementById('chosentheme').style.color = 'yellow';
    
    break;

  
  case "Fruit":
document.getElementById('chosentheme').style.color = 'orange';
    
    break;

  
  case "Military":
document.getElementById('chosentheme').style.color = 'cyan';
    
    break;


  case "Tree":
document.getElementById('chosentheme').style.color = 'green';
    
    break;


  case "Animal":
document.getElementById('chosentheme').style.color = 'pink';
    
    break;


  case "Super":
document.getElementById('chosentheme').style.color = 'white';
    
    break;

  default:
    break;
}

}