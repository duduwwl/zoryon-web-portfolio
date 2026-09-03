/* Complementa o catálogo remoto com fotos reais e referências oficiais. */
(function () {
  const exactVariantFolders = {
    anne: ['anne', 'webp'], 'barroco-maxcolor': ['barroco-maxcolor', 'webp'],
    encanto: ['encanto', 'png'], 'meliah-premium-35': ['meliah-premium-35', 'webp'],
    'meliah-lux': ['meliah-lux', 'png'], 'unique-3': ['unique-3', 'png'],
    'unique-5': ['unique-5', 'png'], 'unique-8': ['unique-8', 'png']
  };
  const unavailableVariants = new Set(['unique-3|unique3-outono', 'unique-8|unique8-cookie']);
  const cleanPremium = new Set([
    'premium35-mel','premium35-geleia-de-damasco','premium35-abobora','premium35-verde-bebe',
    'premium35-pistache','premium35-verde-esmeralda','premium35-azul-oceano','premium35-azul-marinho',
    'premium35-cinza-prata','premium35-azul-maia','premium35-rosa-envelhecido','premium35-champanhe',
    'premium35-mousse-de-maracuja','premium35-rosa-barbie','premium35-pantone-viva-magenta',
    'premium35-lavanda','premium35-fucsia'
  ]);
  const catalogPhotos = Object.fromEntries([
    'fio-malha','amigurumi','amigurumi-chenille','anne','barroco-maxcolor','charme','clea-duplo',
    'duna','clea-1000','encanto','meliah-premium-35','meliah-lux','nautico-polipropileno',
    'unique-3','unique-5','unique-8','fischer-glow','meliah-pop','policromia'
  ].map(id => [id, `assets/catalog-transparent/${id}.png`]));
  Object.assign(catalogPhotos, {
    'barroco-maxcolor':'assets/barroco-maxcolor.webp',
    'meliah-premium-35':'assets/variants/meliah-premium-35/premium35-preto.webp',
    'meliah-lux':'assets/variants/meliah-lux/lux-preto-metalico.png',
    'unique-3':'assets/variants/unique-3/unique3-canela.png',
    'unique-5':'assets/variants/unique-5/unique5-rosa-gloss.png',
    'unique-8':'assets/variants/unique-8/unique8-preto.png',
    policromia:'assets/fischer-policromia.jpg'
  });

  const normalize = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .toLowerCase().replace(/^\d+\s*-\s*/, '').replace(/[^a-z0-9]+/g, ' ').trim();

  /* Tons conferidos nas fotos reais das variantes. */
  const colorHex = {
    'off white':'#f2eee5',natural:'#c4a276',preto:'#171719',chocolate:'#583729',creme:'#ead7ae',solar:'#f4c515',canario:'#f2bb16',azaleia:'#c63471','vermelho circulo':'#c92531','rosa candy':'#e58bad',greenery:'#72a844',aluminio:'#a9adb2','azul bic':'#2457a3','anil profundo':'#263b70',porcelana:'#e9e0d3',amendoa:'#bc9476',castanha:'#75503c',tabaco:'#63442f',orquidea:'#9b62ad',mostarda:'#c28b16',chiclete:'#dc4b88',pitaya:'#cc316e',pink:'#d92b7c',pessego:'#ed9879',turquesa:'#20aebb','neo mint':'#91c7ad',pistache:'#94b948',bale:'#db9aa9',bordo:'#72283a','rosa antigo':'#ae7279',ceu:'#73b9d6',hortensia:'#6953aa',tifanny:'#3bb8b3',tiffany:'#3bb8b3',musgo:'#62683b',terracota:'#b9583e',laranja:'#df6f24',
    'azul candy':'#7ba4d3',militar:'#58623b',paixao:'#bd233d',cafe:'#503429',branco:'#f6f5ef',castor:'#8c755e',bronze:'#a5713e',cromado:'#979ca1','cinza chumbo':'#53565a','verde candy':'#83c99d',malagueta:'#c83228',lavanda:'#9d8fd0',rapadura:'#bc9668',caqui:'#ab9677',acqua:'#43beb9',quartzo:'#bf8290','amarelo candy':'#efd45a',bandeira:'#207c3f',trevo:'#397449',ambar:'#cb871b',ouro:'#c79525',suspiro:'#eee0d4','lilas candy':'#b68dcc',hortalica:'#699451',netuno:'#285b91',marsala:'#793440',polar:'#e8e4dc',tamara:'#8c5c42',telha:'#b75f45',
    eucalipto:'#69937e','ouro velho':'#9d7627',saibro:'#b58a68','rosa pink':'#cb6187','capim dourado':'#ba8d30',licor:'#78364a',malva:'#9e7195',marmelada:'#ad5f35','vaga lume':'#d7d24e',apricot:'#e98f68',carmim:'#a91f32',camafeu:'#bd876f',mare:'#277893','dark cheddar':'#bd6428',
    'verde militar':'#555e3b','rosa bebe':'#e8aebe',nude:'#cda18f',camurca:'#9a765b',mel:'#c58c22','geleia de damasco':'#e78960',abobora:'#df6d20',vermelho:'#ca2c37','verde bebe':'#83cdb5','verde esmeralda':'#14784f','azul oceano':'#15738e','azul marinho':'#1c3765',fumaca:'#6d7073','cinza prata':'#a8adb3','cafe com leite':'#ad856a','pau de canela':'#7a4d39','erva doce':'#9ead73','azul maia':'#2585b5','rosa envelhecido':'#a87076',champanhe:'#cdbb98','mousse de maracuja':'#edc84f','rosa barbie':'#dd3184',coral:'#df6655','pantone viva magenta':'#bb1761',fucsia:'#bf2087',
    'preto metalico':'#20252b',diamante:'#e5ddcd','po de lua':'#cbb7a8',escarlate:'#ad2b31','cauda de acucar':'#bba8a9',purpurina:'#d55977',alcaparra:'#59613a','deep blue':'#315b76',mint:'#91b3a4','panna cotta':'#ded0aa',papaya:'#e36f49',roma:'#a51f32','rosa gloss':'#c96b72',acafrao:'#bd8515',cacau:'#a34420',cookie:'#7c5637',canela:'#a55b17',gergelim:'#c4a16d',melancia:'#d51f2e','nude rosa':'#b97970',outono:'#a94620',penelope:'#dc1461','verde bandeira':'#14783e'
  };

  const codes = {
    anne: {'off white':'8176',natural:'20',preto:'8990',chocolate:'7382',creme:'1074',solar:'1317',canario:'1289',azaleia:'6399','vermelho circulo':'3402','rosa candy':'3526',greenery:'5203',aluminio:'8473','azul bic':'2829','anil profundo':'2856',porcelana:'7684',amendoa:'7650',castanha:'7625',tabaco:'7311',orquidea:'6029',mostarda:'7030',chiclete:'3131',pitaya:'3182',pink:'6133',pessego:'4514',turquesa:'2194','neo mint':'5743',pistache:'5800',bale:'6085',bordo:'3794','rosa antigo':'3227',ceu:'2151',hortensia:'2137',tifanny:'5556',tiffany:'5556',musgo:'5398',terracota:'7529',laranja:'4456'},
    'barroco-maxcolor': {'azul candy':'2012',turquesa:'2194','azul bic':'2829',militar:'5718',castanha:'7625',paixao:'3635',tabaco:'7311',porcelana:'7684',cafe:'7738',branco:'8001',preto:'8990',bale:'6085',castor:'7603','vermelho circulo':'3402',bronze:'7259',cromado:'8212','cinza chumbo':'8336','verde candy':'2204',malagueta:'3501',lavanda:'6394',rapadura:'7389',caqui:'7727',acqua:'2500',quartzo:'3390','rosa candy':'3526',pessego:'4514',tiffany:'5669','amarelo candy':'1114',bandeira:'5767',trevo:'5242',ambar:'7207',ouro:'1449',pink:'6133',laranja:'4456',suspiro:'3346','lilas candy':'6006',hortalica:'5239',netuno:'2930',canario:'1289',marsala:'7136','anil profundo':'2856',tamara:'7220'},
    encanto: {ouro:'7577','off white':'8176','ouro velho':'7326',eucalipto:'5745',preto:'8990',musgo:'5398',aluminio:'8473',saibro:'7154','rosa pink':'3754',amendoa:'7650','capim dourado':'1013',licor:'7031',malva:'6802',marmelada:'7852','verde bandeira':'5767',canario:'1289',chocolate:'7382',bordo:'3794',carmim:'3528',camafeu:'3201',mare:'2307','azul bic':'2550'},
    'meliah-premium-35': {preto:'62','verde militar':'71','rosa bebe':'65',nude:'57',camurca:'44',mel:'54','geleia de damasco':'51',abobora:'37',terracota:'68',vermelho:'72','verde bebe':'69',pistache:'61','azul oceano':'41','azul marinho':'40',fumaca:'50','cinza prata':'46','cafe com leite':'43','pau de canela':'60','erva doce':'48','azul maia':'39','rosa envelhecido':'66',champanhe:'45','mousse de maracuja':'56','rosa barbie':'64','pantone viva magenta':'59',lavanda:'52',fucsia:'49'},
    'meliah-lux': {diamante:'10261','po de lua':'10159',escarlate:'10263','cauda de acucar':'10158',purpurina:'10262'},
    'unique-3': {acafrao:'184',alcaparra:'185',cacau:'188',canela:'190',cookie:'194','deep blue':'195',gergelim:'197',hortensia:'198',melancia:'201',mint:'202','nude rosa':'203',outono:'205','panna cotta':'206',papaya:'207',penelope:'208',preto:'210',roma:'211','rosa gloss':'212',suspiro:'214','verde bandeira':'216'},
    'unique-5': {acafrao:'217',alcaparra:'218',cacau:'221',canela:'223',cookie:'227','deep blue':'228',gergelim:'230',hortensia:'231',melancia:'234',mint:'235','nude rosa':'236',outono:'238','panna cotta':'239',papaya:'240',penelope:'241',preto:'243',roma:'244','rosa gloss':'245',suspiro:'247','verde bandeira':'249'},
    'unique-8': {acafrao:'250',alcaparra:'251',cacau:'254',canela:'256',cookie:'260','deep blue':'261',gergelim:'263',hortensia:'264',melancia:'267',mint:'268','nude rosa':'269',outono:'271','panna cotta':'272',papaya:'273',penelope:'274',preto:'276',roma:'277','rosa gloss':'278',suspiro:'280','verde bandeira':'282'}
  };

  const officialNames = {
    'anne-7625-preto':'Preto','anne-1449-azaleia':'Azaleia','anne-6394-greenery':'Greenery',
    'anne-2500-aluminio':'Alumínio','anne-2829-vermelho-circulo':'Azul Bic','anne-2856-creme':'Anil Profundo',
    'anne-5203-porcelana':'Porcelana','anne-5767-amendoa':'Amêndoa','anne-5718-castanha':'Castanha',
    'anne-8212-tabaco':'Tabaco','anne-8336-orquidea':'Orquídea','anne-8990-mostarda':'Mostarda',
    'anne-2204-turquesa':'Turquesa','anne-2930-neo-int-':'Neo Mint','anne-7136-bordo':'Bordô',
    'anne-7207-rosa-antigo':'Rosa Antigo','anne-5091-ceu':'Céu','anne-5669-tiffany':'Tifanny','anne-6875-musgo':'Musgo',
    'encanto-bandeira':'Verde Bandeira'
  };

  function patchProduct(product) {
    if (catalogPhotos[product.id]) product.image = catalogPhotos[product.id];
    if (product.id === 'barroco-maxcolor') Object.assign(product, {name:'Barroco Maxcolor 6',shortName:'Barroco Maxcolor 6'});
    if (product.id === 'meliah-premium-35') product.weight = '500 g';
    if (product.id === 'meliah-lux') Object.assign(product, {weight:'250 g',meterage:'aprox. 100 m',composition:'96% poliéster · 4% elastano',needle:'Crochê 4 a 5 mm'});
    const folder = exactVariantFolders[product.id];
    if (!folder || !Array.isArray(product.colors)) return;
    const [variantFolder, extension] = folder;
    product.colors = product.colors.filter(color => !unavailableVariants.has(`${product.id}|${color.id}`)).map(color => {
      const name = officialNames[color.id] || String(color.name).replace(/^\d+\s*-\s*/, '');
      const key = normalize(name);
      const code = codes[product.id]?.[key] || color.code || null;
      const image = product.id === 'anne' ? `assets/variants-clean/anne/${color.id}.png`
        : product.id === 'meliah-premium-35' && cleanPremium.has(color.id) ? `assets/variants-clean/meliah-premium-35/${color.id}.png`
        : `assets/variants/${variantFolder}/${color.id}.${extension}`;
      return {...color,name,code,hex:colorHex[key] || color.hex,image};
    });
    const preferred = product.id === 'unique-3' ? 'unique3-canela' : product.id === 'unique-8' ? 'unique8-preto' : null;
    if (preferred) product.colors.sort((a,b) => Number(b.id === preferred) - Number(a.id === preferred));
  }

  window.MundixReady = (window.MundixReady || Promise.resolve(window.Mundix)).then(catalog => {
    catalog.products.forEach(patchProduct);
    return catalog;
  });
})();
