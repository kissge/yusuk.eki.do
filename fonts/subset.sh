#!/bin/bash

npx glyphhanger --css --jsdom \
  --whitelist 'Yusuke Kido' \
  --subset fonts/BarlowCondensed-Regular.ttf

npx glyphhanger --css --jsdom \
  --whitelist ' &,-.@CDEILNOPRST_acdefghiklmnoprstuwy' \
  --subset fonts/BarlowCondensed-Thin.ttf

npx glyphhanger --css --jsdom \
  --whitelist ' 、。「」あいうえおかがきくけげこごさしじすずせぜそたちっつづてでとどなにのはひふべほまめもやょよらりるれろわをんァアィイウェエォオカガキギクグケコゴサザシジスズセソタチッツテデトドナニネノハバパヒビピフブプベボポマミムメモャュユョラリルレロンヴ・ー一上与中久事京人今介付任企会伝体何作使価係修値健入全公処出分切刊初判利制刷創力動務化十印参取受同名向命和品問善器団国在域基報場壁士多大奴好始字学実室家宿寮対専小屋属山岡工市布師年庁広弁式引弾当形役徒従必性情成所手打技択担拓採推描提支改攻政教整文新方日明時景最期未本材東析果校株案械検業楽構機民気汎決法洋津活済渡港澤然版物独献率現理生産用田町画留発登的相省県短研示社福私科程究立等築簿米系級素索紹組経結緒締繁織義習考者職自舎般色芽萌葉行術表装製要見親解言計設証評語課談財責走踏車転込連週進遊選部配野開間関附限院隔隣離音順領題類養香験高（）城戸祐亮' \
  --subset fonts/ZenKakuGothicNew-Regular.ttf
# $$('.pubs li, :lang(en), img[alt]').forEach(e => e.remove());
# $$('*').forEach(e => { if ([...e.childNodes].some(n => n.nodeName === '#text') && getComputedStyle(e).fontWeight !== '400') e.remove(); });

npx glyphhanger --css --jsdom \
  --whitelist 'コンピュータがかかわるかもしれない困りごと？' \
  --subset fonts/ZenKakuGothicNew-Black.ttf

npx glyphhanger --css --jsdom \
  --whitelist ' あいきこすただでにのぶまるをんアイウエォオカクズトバプルレワンヴー世会務委式株業決現社解託（）' \
  --subset fonts/ZenKakuGothicNew-Light.ttf
