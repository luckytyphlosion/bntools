const DATA_3_chips = [
    null,
    {
        "section": "standard",
        "index": 1,
        "name": {
            "en": "Cannon",
            "ja": "キャノン"
        },
        "description": {
            "en": "Cannon to\nattack\n1 enemy",
            "ja": "前方のてき1たいを\n攻撃できる\nキャノンほう"
        },
        "element": "null",
        "codes": "ABCDE*",
        "mb": 12,
        "version": null,
        "stars": 1,
        "damage": 40,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 2,
        "name": {
            "en": "HiCannon",
            "ja": "ハイキャノン"
        },
        "description": {
            "en": "Cannon to\nattack\n1 enemy",
            "ja": "前方のてき1たいを\n攻撃できる\nキャノンほう"
        },
        "element": "null",
        "codes": "HIJKL*",
        "mb": 24,
        "version": null,
        "stars": 2,
        "damage": 60,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 3,
        "name": {
            "en": "M-Cannon",
            "ja": "メガキャノン"
        },
        "description": {
            "en": "Cannon to\nattack\n1 enemy",
            "ja": "前方のてき1たいを\n攻撃できる\nキャノンほう"
        },
        "element": "null",
        "codes": "OPQRS",
        "mb": 36,
        "version": null,
        "stars": 3,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 4,
        "name": {
            "en": "AirShot1",
            "ja": "エアシュート1"
        },
        "description": {
            "en": "Knocks\nenemy\nback 1",
            "ja": "ヒットしたあいてを\n1マスおくへおす\nくうきほう"
        },
        "element": "null",
        "codes": "*",
        "mb": 4,
        "version": null,
        "stars": 1,
        "damage": 20,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 5,
        "name": {
            "en": "AirShot2",
            "ja": "エアシュート2"
        },
        "description": {
            "en": "Knocks\nenemy\nback 1",
            "ja": "ヒットしたあいてを\n1マスおくへおす\nくうきほう"
        },
        "element": "null",
        "codes": "*",
        "mb": 12,
        "version": null,
        "stars": 2,
        "damage": 30,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 6,
        "name": {
            "en": "AirShot3",
            "ja": "エアシュート3"
        },
        "description": {
            "en": "Knocks\nenemy\nback 1",
            "ja": "ヒットしたあいてを\n1マスおくへおす\nくうきほう"
        },
        "element": "null",
        "codes": "*",
        "mb": 18,
        "version": null,
        "stars": 2,
        "damage": 40,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 7,
        "name": {
            "en": "LavaCan1",
            "ja": "マグマキャノン1"
        },
        "description": {
            "en": "Fires\nlava\nfr. area",
            "ja": "自エリアのマグマを\nすいこんでハッシャ\nするキャノンほう"
        },
        "element": "fire",
        "codes": "AGSTV",
        "mb": 34,
        "version": null,
        "stars": 1,
        "damage": 90,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 8,
        "name": {
            "en": "LavaCan2",
            "ja": "マグマキャノン2"
        },
        "description": {
            "en": "Fires\nlava\nfr. area",
            "ja": "自エリアのマグマを\nすいこんでハッシャ\nするキャノンほう"
        },
        "element": "fire",
        "codes": "BDFMO",
        "mb": 42,
        "version": null,
        "stars": 2,
        "damage": 120,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 9,
        "name": {
            "en": "LavaCan3",
            "ja": "マグマキャノン3"
        },
        "description": {
            "en": "Fires\nlava\nfr. area",
            "ja": "自エリアのマグマを\nすいこんでハッシャ\nするキャノンほう"
        },
        "element": "fire",
        "codes": "EHJRW",
        "mb": 60,
        "version": null,
        "stars": 3,
        "damage": 150,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 11,
        "name": {
            "en": "ShotGun",
            "ja": "ショットガン"
        },
        "description": {
            "en": "Explodes\n1 square\nbehind",
            "ja": "ヒットすると\nおくの1マスに\nゆうばくする"
        },
        "element": "null",
        "codes": "BFJNT*",
        "mb": 8,
        "version": null,
        "stars": 1,
        "damage": 30,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 12,
        "name": {
            "en": "V-Gun",
            "ja": "ブイガン"
        },
        "description": {
            "en": "Explodes\n2 diag.\nsquares",
            "ja": "ヒットすると\nななめおく2マスに\nゆうばくする"
        },
        "element": "null",
        "codes": "DGLPV*",
        "mb": 8,
        "version": null,
        "stars": 1,
        "damage": 30,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 13,
        "name": {
            "en": "SideGun",
            "ja": "サイドガン"
        },
        "description": {
            "en": "Explodes\nup,down\non hit",
            "ja": "ヒットすると\nじょうげの2マスに\nゆうばくする"
        },
        "element": "null",
        "codes": "CHMSY*",
        "mb": 8,
        "version": null,
        "stars": 1,
        "damage": 30,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 14,
        "name": {
            "en": "Spreader",
            "ja": "スプレッドガン"
        },
        "description": {
            "en": "Creates a\nlarge\nexplosion",
            "ja": "ヒットすると\nまわりの1マスに\nゆうばく！"
        },
        "element": "null",
        "codes": "MNOPQ*",
        "mb": 16,
        "version": null,
        "stars": 2,
        "damage": 30,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 15,
        "name": {
            "en": "Bubbler",
            "ja": "バブルショット"
        },
        "description": {
            "en": "Explodes\n1 square\nbehind",
            "ja": "ヒットすると\nおくの1マスに\nゆうばくする"
        },
        "element": "aqua",
        "codes": "ACDEP*",
        "mb": 14,
        "version": null,
        "stars": 1,
        "damage": 60,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 16,
        "name": {
            "en": "Bub-V",
            "ja": "バブルブイ"
        },
        "description": {
            "en": "Explodes\n2 diag.\nsquares",
            "ja": "ヒットすると\nななめおく2マスに\nゆうばくする"
        },
        "element": "aqua",
        "codes": "DEFSV*",
        "mb": 22,
        "version": null,
        "stars": 2,
        "damage": 60,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 17,
        "name": {
            "en": "BublSide",
            "ja": "バブルサイド"
        },
        "description": {
            "en": "Explodes\nup,down\non hit",
            "ja": "ヒットすると\n上下の2マスに\nゆうばくする"
        },
        "element": "aqua",
        "codes": "BEFGR*",
        "mb": 30,
        "version": null,
        "stars": 3,
        "damage": 60,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 18,
        "name": {
            "en": "HeatShot",
            "ja": "ヒートショット"
        },
        "description": {
            "en": "Explodes\n1 square\nbehind",
            "ja": "ヒットすると\nおくの1マスに\nゆうばくする"
        },
        "element": "fire",
        "codes": "BHIJP*",
        "mb": 16,
        "version": null,
        "stars": 1,
        "damage": 40,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 19,
        "name": {
            "en": "Heat-V",
            "ja": "ヒートブイ"
        },
        "description": {
            "en": "Explodes\n2 diag.\nsquares",
            "ja": "ヒットすると\nななめおく2マスに\nゆうばくする"
        },
        "element": "fire",
        "codes": "FIJKV*",
        "mb": 24,
        "version": null,
        "stars": 2,
        "damage": 40,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 20,
        "name": {
            "en": "HeatSide",
            "ja": "ヒートサイド"
        },
        "description": {
            "en": "Explodes\nup,down\non hit",
            "ja": "ヒットすると\n上下の2マスに\nゆうばくする"
        },
        "element": "fire",
        "codes": "CJKLT*",
        "mb": 32,
        "version": null,
        "stars": 3,
        "damage": 40,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 21,
        "name": {
            "en": "MiniBomb",
            "ja": "ミニボム"
        },
        "description": {
            "en": "Throws a\nbomb 3\nsquares",
            "ja": "3マス前におちる\nボムをなげつける"
        },
        "element": "null",
        "codes": "BGLOS*",
        "mb": 6,
        "version": null,
        "stars": 1,
        "damage": 50,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 22,
        "name": {
            "en": "SnglBomb",
            "ja": "シングルボム"
        },
        "description": {
            "en": "Throws a\nbig bomb\n3 squares",
            "ja": "3マス前に上下に\nひろがるボムを\nなげつける"
        },
        "element": "null",
        "codes": "DFHJT*",
        "mb": 12,
        "version": null,
        "stars": 1,
        "damage": 50,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 23,
        "name": {
            "en": "DublBomb",
            "ja": "ダブルボム"
        },
        "description": {
            "en": "Throws 2\nbig bombs\n3 squares",
            "ja": "3マス前に上下に\nひろがるボムを\n2発なげつける"
        },
        "element": "null",
        "codes": "ACHKQ*",
        "mb": 24,
        "version": null,
        "stars": 2,
        "damage": 50,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 24,
        "name": {
            "en": "TrplBomb",
            "ja": "トリプルボム"
        },
        "description": {
            "en": "Throws 3\nbig bombs\n3 squares",
            "ja": "3マス前に上下に\nひろがるボムを\n3発なげつける"
        },
        "element": "null",
        "codes": "EINPW",
        "mb": 36,
        "version": null,
        "stars": 3,
        "damage": 50,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 25,
        "name": {
            "en": "CannBall",
            "ja": "ホウガン"
        },
        "description": {
            "en": "Breaks\n3rd panel\nahead",
            "ja": "3マス前に\nホウガンをなげる！\nパネルはかい攻撃！"
        },
        "element": "null",
        "codes": "ADFLP*",
        "mb": 33,
        "version": null,
        "stars": 3,
        "damage": 160,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 26,
        "name": {
            "en": "IceBall",
            "ja": "コオリホウガン"
        },
        "description": {
            "en": "Freezes\n3rd sqr.\nahead",
            "ja": "3マス前に\nホウガンをなげる！\nパネルはこおりつく"
        },
        "element": "aqua",
        "codes": "FIMQS*",
        "mb": 18,
        "version": null,
        "stars": 3,
        "damage": 120,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 27,
        "name": {
            "en": "LavaBall",
            "ja": "ヨウガンホウガン"
        },
        "description": {
            "en": "Shoot\nlava 3rd\nsq. ahead",
            "ja": "3マス前に\nホウガンをなげる！\nパネルはマグマに！"
        },
        "element": "fire",
        "codes": "BCHNW*",
        "mb": 20,
        "version": null,
        "stars": 3,
        "damage": 140,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 28,
        "name": {
            "en": "BlkBomb1",
            "ja": "ブラックボム1"
        },
        "description": {
            "en": "Firebomb\nhits 3rd\nsq ahead!",
            "ja": "ふはつだんを\n3マス前になげる！\n炎攻撃でバクハツ！"
        },
        "element": "fire",
        "codes": "FLNPZ",
        "mb": 60,
        "version": null,
        "stars": 2,
        "damage": 120,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 29,
        "name": {
            "en": "BlkBomb2",
            "ja": "ブラックボム2"
        },
        "description": {
            "en": "Firebomb\nhits 3rd\nsq ahead!",
            "ja": "ふはつだんを\n3マス前になげる！\n炎攻撃でバクハツ！"
        },
        "element": "fire",
        "codes": "DIKQS",
        "mb": 70,
        "version": null,
        "stars": 3,
        "damage": 170,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 30,
        "name": {
            "en": "BlkBomb3",
            "ja": "ブラックボム3"
        },
        "description": {
            "en": "Firebomb\nhits 3rd\nsq ahead!",
            "ja": "ふはつだんを\n3マス前になげる！\n炎攻撃でバクハツ！"
        },
        "element": "fire",
        "codes": "CGLUY",
        "mb": 80,
        "version": null,
        "stars": 4,
        "damage": 220,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 31,
        "name": {
            "en": "Sword",
            "ja": "ソード"
        },
        "description": {
            "en": "Cuts enmy\nin front!\nRange: 1",
            "ja": "目の前のてきを\nきりつける！\n攻撃はんいは1マス"
        },
        "element": "null",
        "codes": "EHLSY",
        "mb": 10,
        "version": null,
        "stars": 1,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 32,
        "name": {
            "en": "WideSwrd",
            "ja": "ワイドソード"
        },
        "description": {
            "en": "Cuts enmy\nin front!\nRange: 3",
            "ja": "目の前のてきを\nきりつける！攻撃\nはんいはたて3マス"
        },
        "element": "null",
        "codes": "CELQY",
        "mb": 16,
        "version": null,
        "stars": 2,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 33,
        "name": {
            "en": "LongSwrd",
            "ja": "ロングソード"
        },
        "description": {
            "en": "Cuts enmy\nin front!\nRange: 2",
            "ja": "目の前のてきを\nきりつける！攻撃\nはんいはよこ2マス"
        },
        "element": "null",
        "codes": "EILRY",
        "mb": 24,
        "version": null,
        "stars": 3,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 34,
        "name": {
            "en": "FireSwrd",
            "ja": "フレイムソード"
        },
        "description": {
            "en": "Fire:\nCuts fwd\n3 squares",
            "ja": "目の前のたて3マス\nをきりつける\n炎のソード"
        },
        "element": "fire",
        "codes": "FNPRU",
        "mb": 20,
        "version": null,
        "stars": 3,
        "damage": 130,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 35,
        "name": {
            "en": "AquaSwrd",
            "ja": "アクアソード"
        },
        "description": {
            "en": "Water:\nCuts fwd\n3 squares",
            "ja": "目の前のたて3マス\nをきりつける\n水のソード"
        },
        "element": "aqua",
        "codes": "AHNPT",
        "mb": 25,
        "version": null,
        "stars": 3,
        "damage": 150,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 36,
        "name": {
            "en": "ElecSwrd",
            "ja": "エレキソード"
        },
        "description": {
            "en": "Elec:\nCuts fwd\n3 squares",
            "ja": "目の前のたて3マス\nをきりつける\n電気のソード"
        },
        "element": "elec",
        "codes": "EKNPV",
        "mb": 23,
        "version": null,
        "stars": 3,
        "damage": 130,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 37,
        "name": {
            "en": "BambSwrd",
            "ja": "バンブーソード"
        },
        "description": {
            "en": "Wood:\nCuts fwd\n3 squares",
            "ja": "目の前のたて3マス\nをきりつける\n木のソード"
        },
        "element": "wood",
        "codes": "BLNPW",
        "mb": 18,
        "version": null,
        "stars": 3,
        "damage": 140,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 38,
        "name": {
            "en": "CustSwrd",
            "ja": "カスタムソード"
        },
        "description": {
            "en": "Cust\nGauge=\nAtk Str",
            "ja": "カスタムゲージが\nマンタンにちかい\nほど攻撃力アップ！"
        },
        "element": "null",
        "codes": "BFRVZ",
        "mb": 21,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 39,
        "name": {
            "en": "VarSwrd",
            "ja": "バリアブルソード"
        },
        "description": {
            "en": "A magical\nshifting\nsword",
            "ja": "へんげんじざいの\nテクニカルソード"
        },
        "element": "null",
        "codes": "BCDEF",
        "mb": 68,
        "version": null,
        "stars": 4,
        "damage": 160,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 41,
        "name": {
            "en": "StepSwrd",
            "ja": "フミコミザン"
        },
        "description": {
            "en": "2 steps,\nthen uses\nwide swrd",
            "ja": "2マス前に\nふみこんで\nワイドソード！"
        },
        "element": "null",
        "codes": "LMNOP",
        "mb": 43,
        "version": null,
        "stars": 4,
        "damage": 130,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 42,
        "name": {
            "en": "StepCros",
            "ja": "フミコミクロス"
        },
        "description": {
            "en": "2 steps,\nthen uses\ncross atk",
            "ja": "2マス前に\nふみこんで\nクロスにきる！"
        },
        "element": "null",
        "codes": "PQRST",
        "mb": 74,
        "version": null,
        "stars": 4,
        "damage": 130,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 158,
        "name": {
            "en": "Panic",
            "ja": "パニックムード"
        },
        "description": {
            "en": "Confuses\nenmies if\nyou are",
            "ja": "こんらんじょうたい\nでつかうとあいても\nこんらんしてしまう"
        },
        "element": "null",
        "codes": "ACLRZ*",
        "mb": 14,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 40,
        "name": {
            "en": "AirSwrd",
            "ja": "フウアツケン"
        },
        "description": {
            "en": "Wide swrd\nwith air\nattack!",
            "ja": "とっぷうをおこして\nあいてをふきとばす\nワイドソード！"
        },
        "element": "null",
        "codes": "CEHJR*",
        "mb": 30,
        "version": null,
        "stars": 3,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 43,
        "name": {
            "en": "Slasher",
            "ja": "イアイフォーム"
        },
        "description": {
            "en": "Cut while\nA Button\nis held!",
            "ja": "Aボタンをおして\nいる間に入ってくる\nてきをきる！"
        },
        "element": "null",
        "codes": "BDGRS",
        "mb": 12,
        "version": null,
        "stars": 3,
        "damage": 240,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 44,
        "name": {
            "en": "ShockWav",
            "ja": "ショックウェーブ"
        },
        "description": {
            "en": "Shock\nthrough\nenemies",
            "ja": "地面をはってすすむ\nかんつう攻撃"
        },
        "element": "null",
        "codes": "DHJLR",
        "mb": 10,
        "version": null,
        "stars": 1,
        "damage": 60,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 45,
        "name": {
            "en": "SonicWav",
            "ja": "ソニックウェーブ"
        },
        "description": {
            "en": "Shock\nthrough\nenemies",
            "ja": "地面をはってすすむ\nかんつう攻撃"
        },
        "element": "null",
        "codes": "GIMSW",
        "mb": 26,
        "version": null,
        "stars": 2,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 46,
        "name": {
            "en": "DynaWave",
            "ja": "ダイナウェーブ"
        },
        "description": {
            "en": "Shock\nthrough\nenemies",
            "ja": "地面をはってすすむ\nかんつう攻撃"
        },
        "element": "null",
        "codes": "ENQTV",
        "mb": 42,
        "version": null,
        "stars": 3,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 48,
        "name": {
            "en": "GutPunch",
            "ja": "ガッツパンチ"
        },
        "description": {
            "en": "Punch\npushes 1\nsquare",
            "ja": "目の前の1マスに\nパンチ攻撃\nものを前におせる"
        },
        "element": "null",
        "codes": "BCDEF",
        "mb": 14,
        "version": null,
        "stars": 1,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 49,
        "name": {
            "en": "GutStrgt",
            "ja": "ガッツストレート"
        },
        "description": {
            "en": "Punch\n2 square\nrange",
            "ja": "2マス前までとどく\nパンチ攻撃\nものを前におせる"
        },
        "element": "null",
        "codes": "OPQRS",
        "mb": 30,
        "version": null,
        "stars": 2,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 50,
        "name": {
            "en": "GutImpct",
            "ja": "ガッツインパクト"
        },
        "description": {
            "en": "Punch\npushes 1\nsquare",
            "ja": "目の前の1マスに\nひっさつパンチ！\nものを前におせる"
        },
        "element": "null",
        "codes": "GHIJK",
        "mb": 50,
        "version": null,
        "stars": 3,
        "damage": 160,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 64,
        "name": {
            "en": "AirStrm1",
            "ja": "エアストーム1"
        },
        "description": {
            "en": "Creates 3\nwhrlwinds\n",
            "ja": "すいこんでから\n3つのたつまきを\n発生させる"
        },
        "element": "null",
        "codes": "AFHOS",
        "mb": 26,
        "version": null,
        "stars": 1,
        "damage": 50,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 65,
        "name": {
            "en": "AirStrm2",
            "ja": "エアストーム2"
        },
        "description": {
            "en": "Creates 3\nwhrlwinds\n",
            "ja": "すいこんでから\n3つのたつまきを\n発生させる"
        },
        "element": "null",
        "codes": "CGHMW",
        "mb": 35,
        "version": null,
        "stars": 2,
        "damage": 60,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 66,
        "name": {
            "en": "AirStrm3",
            "ja": "エアストーム3"
        },
        "description": {
            "en": "Creates 3\nwhrlwinds\n",
            "ja": "すいこんでから\n3つのたつまきを\n発生させる"
        },
        "element": "null",
        "codes": "AGINV",
        "mb": 44,
        "version": null,
        "stars": 3,
        "damage": 70,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 51,
        "name": {
            "en": "DashAtk",
            "ja": "ダッシュアタック"
        },
        "description": {
            "en": "Dash\nthrough\nenemies!",
            "ja": "てきをかんつうする\nとっしん攻撃！"
        },
        "element": "null",
        "codes": "CDGJZ*",
        "mb": 11,
        "version": null,
        "stars": 1,
        "damage": 90,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 52,
        "name": {
            "en": "Burner",
            "ja": "バーニングボディ"
        },
        "description": {
            "en": "Envelops\nyou in\nflame!",
            "ja": "自分のいるマスと\nその上下左右を\n炎にまきこむ！"
        },
        "element": "fire",
        "codes": "BFQSW",
        "mb": 15,
        "version": null,
        "stars": 3,
        "damage": 130,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 115,
        "name": {
            "en": "Totem1",
            "ja": "トーテム1"
        },
        "description": {
            "en": "Creates a\ntotem to\nblow fire",
            "ja": "目の前のマスに\n3マスの炎をはく\nトーテムをおく"
        },
        "element": "fire",
        "codes": "GHMOV",
        "mb": 29,
        "version": null,
        "stars": 1,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 116,
        "name": {
            "en": "Totem2",
            "ja": "トーテム2"
        },
        "description": {
            "en": "Creates a\ntotem to\nblow fire",
            "ja": "目の前のマスに\n3マスの炎をはく\nトーテムをおく"
        },
        "element": "fire",
        "codes": "ACETZ",
        "mb": 38,
        "version": null,
        "stars": 2,
        "damage": 140,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 117,
        "name": {
            "en": "Totem3",
            "ja": "トーテム3"
        },
        "description": {
            "en": "Creates a\ntotem to\nblow fire",
            "ja": "目の前のマスに\n3マスの炎をはく\nトーテムをおく"
        },
        "element": "fire",
        "codes": "DIKNQ",
        "mb": 47,
        "version": null,
        "stars": 3,
        "damage": 180,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 70,
        "name": {
            "en": "Ratton1",
            "ja": "ラットン1"
        },
        "description": {
            "en": "Crawling\nrat,turns\nonce",
            "ja": "地面をはってすすむ\nねずみミサイル\n1どだけ まがれる"
        },
        "element": "null",
        "codes": "ACFHJ",
        "mb": 14,
        "version": null,
        "stars": 1,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 71,
        "name": {
            "en": "Ratton2",
            "ja": "ラットン2"
        },
        "description": {
            "en": "Crawling\nrat,turns\nonce",
            "ja": "地面をはってすすむ\nねずみミサイル\n1どだけ まがれる"
        },
        "element": "null",
        "codes": "ACFNO",
        "mb": 24,
        "version": null,
        "stars": 2,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 72,
        "name": {
            "en": "Ratton3",
            "ja": "ラットン3"
        },
        "description": {
            "en": "Crawling\nrat,turns\nonce",
            "ja": "地面をはってすすむ\nねずみミサイル\n1どだけ まがれる"
        },
        "element": "null",
        "codes": "ACFRS",
        "mb": 34,
        "version": null,
        "stars": 3,
        "damage": 120,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 74,
        "name": {
            "en": "Wave",
            "ja": "ツナミ"
        },
        "description": {
            "en": "Creates a\nwave that\nmoves 3sq",
            "ja": "たて3マスをすすむ\nツナミをおこす"
        },
        "element": "aqua",
        "codes": "EILST",
        "mb": 60,
        "version": null,
        "stars": 3,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 75,
        "name": {
            "en": "RedWave",
            "ja": "アカツナミ"
        },
        "description": {
            "en": "Creates a\n3sq wave\nof lava",
            "ja": "たて3マスをすすむ\nようがんのツナミを\nおこす"
        },
        "element": "fire",
        "codes": "BFJRU",
        "mb": 72,
        "version": null,
        "stars": 3,
        "damage": 90,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 76,
        "name": {
            "en": "MudWave",
            "ja": "ドロツナミ"
        },
        "description": {
            "en": "Mud wave\nadvances\n3 squares",
            "ja": "たて3マスをすすむ\nどろのツナミを\nおこす"
        },
        "element": "wood",
        "codes": "DGMVZ",
        "mb": 84,
        "version": null,
        "stars": 3,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 87,
        "name": {
            "en": "Hammer",
            "ja": "ブレイクハンマー"
        },
        "description": {
            "en": "Hammer\nsmashes\nfront!",
            "ja": "目の前にハンマー\n攻撃！ ぶったいを\n一撃でうちくだく！"
        },
        "element": "null",
        "codes": "BGLPT*",
        "mb": 16,
        "version": null,
        "stars": 2,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 77,
        "name": {
            "en": "Tornado",
            "ja": "トルネード"
        },
        "description": {
            "en": "An 8-hit\ntornado 2\nsq ahead",
            "ja": "2マス前にたつまき\n発生！\nたつまきは8ヒット"
        },
        "element": "null",
        "codes": "CLRTU",
        "mb": 18,
        "version": null,
        "stars": 2,
        "damage": 20,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 55,
        "name": {
            "en": "ZapRing1",
            "ja": "ラビリング1"
        },
        "description": {
            "en": "Pralyzing\nelectric\nring atk!",
            "ja": "電気のわなげ攻撃！\nあたったあいては\nしばらくマヒする！"
        },
        "element": "elec",
        "codes": "AMPQS*",
        "mb": 8,
        "version": null,
        "stars": 1,
        "damage": 20,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 56,
        "name": {
            "en": "ZapRing2",
            "ja": "ラビリング2"
        },
        "description": {
            "en": "Pralyzing\nelectric\nring atk!",
            "ja": "電気のわなげ攻撃！\nあたったあいては\nしばらくマヒする！"
        },
        "element": "elec",
        "codes": "BGNRW",
        "mb": 18,
        "version": null,
        "stars": 2,
        "damage": 40,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 57,
        "name": {
            "en": "ZapRing3",
            "ja": "ラビリング3"
        },
        "description": {
            "en": "Pralyzing\nelectric\nring atk!",
            "ja": "電気のわなげ攻撃！\nあたったあいては\nしばらくマヒする！"
        },
        "element": "elec",
        "codes": "CEOTZ",
        "mb": 28,
        "version": null,
        "stars": 3,
        "damage": 60,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 61,
        "name": {
            "en": "Yo-Yo1",
            "ja": "ヨーヨー1"
        },
        "description": {
            "en": "3-square\nyo-yo\nattack!",
            "ja": "3マス前までとぶ\nヨーヨーで\nおうふく攻撃！"
        },
        "element": "null",
        "codes": "CDEFG*",
        "mb": 72,
        "version": null,
        "stars": 1,
        "damage": 40,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 62,
        "name": {
            "en": "Yo-Yo2",
            "ja": "ヨーヨー2"
        },
        "description": {
            "en": "3-square\nyo-yo\nattack!",
            "ja": "3マス前までとぶ\nヨーヨーで\nおうふく攻撃！"
        },
        "element": "null",
        "codes": "HIJKL",
        "mb": 80,
        "version": null,
        "stars": 2,
        "damage": 50,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 63,
        "name": {
            "en": "Yo-Yo3",
            "ja": "ヨーヨー3"
        },
        "description": {
            "en": "3-square\nyo-yo\nattack!",
            "ja": "3マス前までとぶ\nヨーヨーで\nおうふく攻撃！"
        },
        "element": "null",
        "codes": "MNOPQ",
        "mb": 88,
        "version": null,
        "stars": 3,
        "damage": 60,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 78,
        "name": {
            "en": "Spice1",
            "ja": "バッドスパイス1"
        },
        "description": {
            "en": "Dangerous\npowder on\nall grass",
            "ja": "すべてのくさむら\nパネルにキケンな\nこなを発生させる"
        },
        "element": "wood",
        "codes": "BDISZ*",
        "mb": 22,
        "version": null,
        "stars": 1,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 79,
        "name": {
            "en": "Spice2",
            "ja": "バッドスパイス2"
        },
        "description": {
            "en": "Dangerous\npowder on\nall grass",
            "ja": "すべてのくさむら\nパネルにキケンな\nこなを発生させる"
        },
        "element": "wood",
        "codes": "CFIKR",
        "mb": 34,
        "version": null,
        "stars": 2,
        "damage": 110,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 80,
        "name": {
            "en": "Spice3",
            "ja": "バッドスパイス3"
        },
        "description": {
            "en": "Dangerous\npowder on\nall grass",
            "ja": "すべてのくさむら\nパネルにキケンな\nこなを発生させる"
        },
        "element": "wood",
        "codes": "DFJOQ",
        "mb": 46,
        "version": null,
        "stars": 3,
        "damage": 140,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 131,
        "name": {
            "en": "Lance",
            "ja": "バンブーランス"
        },
        "description": {
            "en": "Lances\nthrough\nback line",
            "ja": "てきエリアの右はし\nたてれつにとつぜん\nたけやりが発生！"
        },
        "element": "wood",
        "codes": "DEHRZ",
        "mb": 46,
        "version": null,
        "stars": 3,
        "damage": 130,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 182,
        "name": {
            "en": "Scuttlst",
            "ja": "ドリームビット"
        },
        "description": {
            "en": "Summons a\nScuttlest\nto fight!",
            "ja": "ドリームビットを\nよびだす！"
        },
        "element": "null",
        "codes": "ADEMR",
        "mb": 52,
        "version": null,
        "stars": 5,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 180,
        "name": {
            "en": "Momogra",
            "ja": "モモグラン"
        },
        "description": {
            "en": "Summons a\nMomogra\nto fight!",
            "ja": "モモグランを\nよびだす！"
        },
        "element": "null",
        "codes": "GMORU",
        "mb": 38,
        "version": null,
        "stars": 5,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 89,
        "name": {
            "en": "Rope1",
            "ja": "グリーンロープ1"
        },
        "description": {
            "en": "Entwines\nadjacent\nenemies!",
            "ja": "自分のまわりにいる\nてきにツタ攻撃！"
        },
        "element": "wood",
        "codes": "DGJMO*",
        "mb": 45,
        "version": null,
        "stars": 1,
        "damage": 50,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 90,
        "name": {
            "en": "Rope2",
            "ja": "グリーンロープ2"
        },
        "description": {
            "en": "Entwines\nadjacent\nenemies!",
            "ja": "自分のまわりにいる\nてきにツタ攻撃！"
        },
        "element": "wood",
        "codes": "EGOTU",
        "mb": 55,
        "version": null,
        "stars": 2,
        "damage": 70,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 91,
        "name": {
            "en": "Rope3",
            "ja": "グリーンロープ3"
        },
        "description": {
            "en": "Entwines\nadjacent\nenemies!",
            "ja": "自分のまわりにいる\nてきにツタ攻撃！"
        },
        "element": "wood",
        "codes": "HITUV",
        "mb": 65,
        "version": null,
        "stars": 3,
        "damage": 90,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 103,
        "name": {
            "en": "Magnum1",
            "ja": "マグナム1"
        },
        "description": {
            "en": "Cursor\ndestroys\npanel!",
            "ja": "カーソルをとめて\nパネルをはかいする\nマグナムをハッシャ"
        },
        "element": "fire",
        "codes": "ACHTV",
        "mb": 35,
        "version": null,
        "stars": 1,
        "damage": 120,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 104,
        "name": {
            "en": "Magnum2",
            "ja": "マグナム2"
        },
        "description": {
            "en": "Cursor\ndestroys\npanel!",
            "ja": "カーソルをとめて\nパネルをはかいする\nマグナムをハッシャ"
        },
        "element": "fire",
        "codes": "BGNOZ",
        "mb": 55,
        "version": null,
        "stars": 2,
        "damage": 150,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 105,
        "name": {
            "en": "Magnum3",
            "ja": "マグナム3"
        },
        "description": {
            "en": "Cursor\ndestroys\npanel!",
            "ja": "カーソルをとめて\nパネルをはかいする\nマグナムをハッシャ"
        },
        "element": "fire",
        "codes": "DFISW",
        "mb": 75,
        "version": null,
        "stars": 3,
        "damage": 180,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 92,
        "name": {
            "en": "Boomer1",
            "ja": "ブーメラン1"
        },
        "description": {
            "en": "Boomerang\nencircles\nfield",
            "ja": "バトルフィールドの\nはしにそってとぶ\nかんつうブーメラン"
        },
        "element": "wood",
        "codes": "FHJMT*",
        "mb": 15,
        "version": null,
        "stars": 1,
        "damage": 60,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 93,
        "name": {
            "en": "Boomer2",
            "ja": "ブーメラン2"
        },
        "description": {
            "en": "Boomerang\nencircles\nfield",
            "ja": "バトルフィールドの\nはしにそってとぶ\nかんつうブーメラン"
        },
        "element": "wood",
        "codes": "EIKNV*",
        "mb": 22,
        "version": null,
        "stars": 2,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 94,
        "name": {
            "en": "Boomer3",
            "ja": "ブーメラン3"
        },
        "description": {
            "en": "Boomerang\nencircles\nfield",
            "ja": "バトルフィールドの\nはしにそってとぶ\nかんつうブーメラン"
        },
        "element": "wood",
        "codes": "LOPUZ",
        "mb": 30,
        "version": null,
        "stars": 3,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 109,
        "name": {
            "en": "RndmMetr",
            "ja": "ランダムメテオ"
        },
        "description": {
            "en": "Meteors\nsmash\nenemies!",
            "ja": "目の前にツエをおき\nいんせきがてきを\nねらってふりそそぐ"
        },
        "element": "fire",
        "codes": "EISVZ",
        "mb": 28,
        "version": null,
        "stars": 3,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 110,
        "name": {
            "en": "HoleMetr",
            "ja": "ホールメテオ"
        },
        "description": {
            "en": "Meteors\nsmash\ninto sq",
            "ja": "目の前にツエをおき\nてきエリアぜんたい\nにいんせき攻撃"
        },
        "element": "fire",
        "codes": "CHJNQ",
        "mb": 48,
        "version": null,
        "stars": 3,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 111,
        "name": {
            "en": "ShotMetr",
            "ja": "シュートメテオ"
        },
        "description": {
            "en": "Meteors\nshoot out\nforward",
            "ja": "目の前においたツエ\nのむこうがわのたて\nれつにいんせき攻撃"
        },
        "element": "fire",
        "codes": "ADFSY",
        "mb": 38,
        "version": null,
        "stars": 3,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 58,
        "name": {
            "en": "IceWave1",
            "ja": "アイスウェーブ1"
        },
        "description": {
            "en": "Creates a\n2 sq wide\nice wave!",
            "ja": "2マスはばでゆれる\nこおりをとばして\n攻撃！"
        },
        "element": "aqua",
        "codes": "AKMQW*",
        "mb": 14,
        "version": null,
        "stars": 1,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 59,
        "name": {
            "en": "IceWave2",
            "ja": "アイスウェーブ2"
        },
        "description": {
            "en": "Creates a\n2 sq wide\nice wave!",
            "ja": "2マスはばでゆれる\nこおりをとばして\n攻撃！"
        },
        "element": "aqua",
        "codes": "DHLPR*",
        "mb": 22,
        "version": null,
        "stars": 2,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 60,
        "name": {
            "en": "IceWave3",
            "ja": "アイスウェーブ3"
        },
        "description": {
            "en": "Creates a\n2 sq wide\nice wave!",
            "ja": "2マスはばでゆれる\nこおりをとばして\n攻撃！"
        },
        "element": "aqua",
        "codes": "CDJRV",
        "mb": 30,
        "version": null,
        "stars": 3,
        "damage": 140,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 106,
        "name": {
            "en": "Plasma1",
            "ja": "プラズマボール1"
        },
        "description": {
            "en": "Launches\nelectric\nattack",
            "ja": "まわりに電気を発生\nさせるパラボールを\n目の前におく"
        },
        "element": "elec",
        "codes": "BDJRT",
        "mb": 14,
        "version": null,
        "stars": 1,
        "damage": 30,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 107,
        "name": {
            "en": "Plasma2",
            "ja": "プラズマボール2"
        },
        "description": {
            "en": "Launches\nelectric\nattack",
            "ja": "まわりに電気を発生\nさせるパラボールを\n目の前におく"
        },
        "element": "elec",
        "codes": "AGKMQ",
        "mb": 26,
        "version": null,
        "stars": 2,
        "damage": 60,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 108,
        "name": {
            "en": "Plasma3",
            "ja": "プラズマボール3"
        },
        "description": {
            "en": "Launches\nelectric\nattack",
            "ja": "まわりに電気を発生\nさせるパラボールを\n目の前におく"
        },
        "element": "elec",
        "codes": "FINPS",
        "mb": 34,
        "version": null,
        "stars": 3,
        "damage": 90,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 67,
        "name": {
            "en": "Arrow1",
            "ja": "ビーアロー1"
        },
        "description": {
            "en": "Bee fly\ndiagonal\npaths",
            "ja": "てきエリアに入ると\nななめにまがる\nハチをハッシャ！"
        },
        "element": "elec",
        "codes": "BEMQT",
        "mb": 40,
        "version": null,
        "stars": 1,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 68,
        "name": {
            "en": "Arrow2",
            "ja": "ビーアロー2"
        },
        "description": {
            "en": "Bee fly\ndiagonal\npaths",
            "ja": "てきエリアに入ると\nななめにまがる\nハチをハッシャ！"
        },
        "element": "elec",
        "codes": "FRSUZ",
        "mb": 60,
        "version": null,
        "stars": 2,
        "damage": 130,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 69,
        "name": {
            "en": "Arrow3",
            "ja": "ビーアロー3"
        },
        "description": {
            "en": "Bee fly\ndiagonal\npaths",
            "ja": "てきエリアに入ると\nななめにまがる\nハチをハッシャ！"
        },
        "element": "elec",
        "codes": "AHJNP",
        "mb": 80,
        "version": null,
        "stars": 3,
        "damage": 160,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 129,
        "name": {
            "en": "TimeBomb",
            "ja": "カウントボム"
        },
        "description": {
            "en": "An area-\nwide time\nbomb",
            "ja": "てきエリアにじげん\nばくだんをセットし\nエリア中にばくはつ"
        },
        "element": "null",
        "codes": "JKLMN",
        "mb": 32,
        "version": null,
        "stars": 3,
        "damage": 150,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 130,
        "name": {
            "en": "Mine",
            "ja": "ステルスマイン"
        },
        "description": {
            "en": "Places a\nmine in\nenmy area",
            "ja": "てきエリアのどこか\nに見えないじらいを\nセットする！"
        },
        "element": "null",
        "codes": "ADLRS*",
        "mb": 16,
        "version": null,
        "stars": 3,
        "damage": 300,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 118,
        "name": {
            "en": "Sensor1",
            "ja": "キラーセンサー1"
        },
        "description": {
            "en": "Sensor to\nwatch sq\nahead",
            "ja": "目の前のマスに\n前方をつねに見る\nキラーズアイをおく"
        },
        "element": "elec",
        "codes": "CKLOP",
        "mb": 62,
        "version": null,
        "stars": 3,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 119,
        "name": {
            "en": "Sensor2",
            "ja": "キラーセンサー2"
        },
        "description": {
            "en": "Watch sq\nahead or\ndiagonal",
            "ja": "はしではナナメを\nまん中では前を見る\nキラーズアイをおく"
        },
        "element": "elec",
        "codes": "AGHNS",
        "mb": 70,
        "version": null,
        "stars": 3,
        "damage": 130,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 120,
        "name": {
            "en": "Sensor3",
            "ja": "キラーセンサー3"
        },
        "description": {
            "en": "Watch sq\nahead or\ndiagonal",
            "ja": "はしではナナメを\nまん中では前を見る\nキラーズアイをおく"
        },
        "element": "elec",
        "codes": "BEJOP",
        "mb": 72,
        "version": null,
        "stars": 3,
        "damage": 130,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 100,
        "name": {
            "en": "CrsShld1",
            "ja": "カースシールド1"
        },
        "description": {
            "en": "Guard,and\nbite into\nthe enemy",
            "ja": "タイミングガード後\n前方のてきに\nかみつくシールド"
        },
        "element": "null",
        "codes": "ACHLP*",
        "mb": 25,
        "version": null,
        "stars": 1,
        "damage": 160,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 101,
        "name": {
            "en": "CrsShld2",
            "ja": "カースシールド2"
        },
        "description": {
            "en": "Guard,and\nbite into\nthe enemy",
            "ja": "タイミングガード後\n前方のてきに\nかみつくシールド"
        },
        "element": "null",
        "codes": "BCLST",
        "mb": 33,
        "version": null,
        "stars": 2,
        "damage": 210,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 102,
        "name": {
            "en": "CrsShld3",
            "ja": "カースシールド3"
        },
        "description": {
            "en": "Guard,and\nbite into\nthe enemy",
            "ja": "タイミングガード後\n前方のてきに\nかみつくシールド"
        },
        "element": "null",
        "codes": "CELNR",
        "mb": 41,
        "version": null,
        "stars": 3,
        "damage": 260,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 88,
        "name": {
            "en": "Geyser",
            "ja": "カンケツセン"
        },
        "description": {
            "en": "Geyser 3\nsquares\nforward",
            "ja": "3マス前になげつけ\nあなマスにおちると\n水がふきだす！"
        },
        "element": "aqua",
        "codes": "BCLSW",
        "mb": 22,
        "version": null,
        "stars": 4,
        "damage": 200,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 95,
        "name": {
            "en": "PoisMask",
            "ja": "ポイズンマスク"
        },
        "description": {
            "en": "Poison\narea w/\nA Button!",
            "ja": "Aボタンをおしつづ\nけてマスクをかまえ\n前方にどく攻撃！"
        },
        "element": "null",
        "codes": "AFNQV*",
        "mb": 30,
        "version": null,
        "stars": 1,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 96,
        "name": {
            "en": "PoisFace",
            "ja": "ポイズンフェイス"
        },
        "description": {
            "en": "Spread\npoison w/\nA Button!",
            "ja": "Aボタンをおしつづ\nけてマスクをかまえ\nまわりにどく攻撃！"
        },
        "element": "null",
        "codes": "ANQVW*",
        "mb": 38,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 81,
        "name": {
            "en": "Shake1",
            "ja": "ヘビーシェイク1"
        },
        "description": {
            "en": "Vertical\nshaking\n3sq ahead",
            "ja": "上下にゆれて攻撃を\nする てつアレイを\n3マス前になげる"
        },
        "element": "null",
        "codes": "EGRSU",
        "mb": 34,
        "version": null,
        "stars": 1,
        "damage": 90,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 82,
        "name": {
            "en": "Shake2",
            "ja": "ヘビーシェイク2"
        },
        "description": {
            "en": "Vertical\nshaking\n3sq ahead",
            "ja": "上下にゆれて攻撃を\nする てつアレイを\n3マス前になげる"
        },
        "element": "null",
        "codes": "BFILQ",
        "mb": 40,
        "version": null,
        "stars": 2,
        "damage": 110,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 83,
        "name": {
            "en": "Shake3",
            "ja": "ヘビーシェイク3"
        },
        "description": {
            "en": "Vertical\nshaking\n3sq ahead",
            "ja": "上下にゆれて攻撃を\nする てつアレイを\n3マス前になげる"
        },
        "element": "null",
        "codes": "DMRTZ",
        "mb": 50,
        "version": null,
        "stars": 3,
        "damage": 140,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 47,
        "name": {
            "en": "BigWave",
            "ja": "グレートウェーブ"
        },
        "description": {
            "en": "Shck wave\ncracks\npanels",
            "ja": "ちょうはかい力の\nショックウェーブ！\nパネルはヒビわれに"
        },
        "element": "null",
        "codes": "EJMPY",
        "mb": 82,
        "version": null,
        "stars": 4,
        "damage": 190,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 10,
        "name": {
            "en": "Volcano",
            "ja": "ボルカノキャノン"
        },
        "description": {
            "en": "Fire lava\nfrom your\narea",
            "ja": "自エリアのマグマを\nすいこんでハッシャ\nするワイドキャノン"
        },
        "element": "fire",
        "codes": "AGJYZ",
        "mb": 75,
        "version": null,
        "stars": 4,
        "damage": 150,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 53,
        "name": {
            "en": "Condor",
            "ja": "ダッシュコンドル"
        },
        "description": {
            "en": "Chrge atk\npierces\nenemies",
            "ja": "てきをかんつうする\nとっしん攻撃！"
        },
        "element": "null",
        "codes": "BILSZ",
        "mb": 44,
        "version": null,
        "stars": 4,
        "damage": 180,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 54,
        "name": {
            "en": "Burning",
            "ja": "バーニングクロス"
        },
        "description": {
            "en": "Fire atk\nin cross\nshape!",
            "ja": "自分のいるマスと\nその前方に十字の\n炎をまきおこす！"
        },
        "element": "fire",
        "codes": "AFLRS",
        "mb": 42,
        "version": null,
        "stars": 4,
        "damage": 150,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 73,
        "name": {
            "en": "FireRatn",
            "ja": "ラットンハナビ"
        },
        "description": {
            "en": "Activates\nwhen hit\nw/ fire!",
            "ja": "炎攻撃があたると\nハッシンする\nすごいラットン！"
        },
        "element": "null",
        "codes": "BFHMY",
        "mb": 35,
        "version": null,
        "stars": 3,
        "damage": 230,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 133,
        "name": {
            "en": "Guard",
            "ja": "メットガード"
        },
        "description": {
            "en": "Repels\nenemy's\nattack",
            "ja": "タイミングガードし\n攻撃をしょうげきは\nにしてはねかえす！"
        },
        "element": "null",
        "codes": "*",
        "mb": 5,
        "version": null,
        "stars": 1,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 134,
        "name": {
            "en": "PanlOut1",
            "ja": "パネルアウト1"
        },
        "description": {
            "en": "Destroys\n1 panel\nin front",
            "ja": "パネルはかい攻撃！\n目の前の1マスを\nけしさってしまう"
        },
        "element": "null",
        "codes": "ABDLS*",
        "mb": 4,
        "version": null,
        "stars": 1,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 135,
        "name": {
            "en": "PanlOut3",
            "ja": "パネルアウト3"
        },
        "description": {
            "en": "Destroys\n3 panels\nin front",
            "ja": "パネルはかい攻撃！\n目の前のたて3マス\nをけしさってしまう"
        },
        "element": "null",
        "codes": "CENRY*",
        "mb": 7,
        "version": null,
        "stars": 1,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 147,
        "name": {
            "en": "Recov10",
            "ja": "リカバリー10"
        },
        "description": {
            "en": "Recovers\n10HP",
            "ja": "HPを10\nかいふくする"
        },
        "element": "null",
        "codes": "ACEGL*",
        "mb": 5,
        "version": null,
        "stars": 1,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 148,
        "name": {
            "en": "Recov30",
            "ja": "リカバリー30"
        },
        "description": {
            "en": "Recovers\n30HP",
            "ja": "HPを30\nかいふくする"
        },
        "element": "null",
        "codes": "BDFHM*",
        "mb": 8,
        "version": null,
        "stars": 1,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 149,
        "name": {
            "en": "Recov50",
            "ja": "リカバリー50"
        },
        "description": {
            "en": "Recovers\n50HP",
            "ja": "HPを50\nかいふくする"
        },
        "element": "null",
        "codes": "CEGIN*",
        "mb": 14,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 150,
        "name": {
            "en": "Recov80",
            "ja": "リカバリー80"
        },
        "description": {
            "en": "Recovers\n80HP",
            "ja": "HPを80\nかいふくする"
        },
        "element": "null",
        "codes": "DFHJO*",
        "mb": 20,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 151,
        "name": {
            "en": "Recov120",
            "ja": "リカバリー120"
        },
        "description": {
            "en": "Recovers\n120HP",
            "ja": "HPを120\nかいふくする"
        },
        "element": "null",
        "codes": "OQSUW*",
        "mb": 35,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 152,
        "name": {
            "en": "Recov150",
            "ja": "リカバリー150"
        },
        "description": {
            "en": "Recovers\n150HP",
            "ja": "HPを150\nかいふくする"
        },
        "element": "null",
        "codes": "NPRTV*",
        "mb": 50,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 153,
        "name": {
            "en": "Recov200",
            "ja": "リカバリー200"
        },
        "description": {
            "en": "Recovers\n200HP",
            "ja": "HPを200\nかいふくする"
        },
        "element": "null",
        "codes": "MNUVW",
        "mb": 65,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 154,
        "name": {
            "en": "Recov300",
            "ja": "リカバリー300"
        },
        "description": {
            "en": "Recovers\n300HP",
            "ja": "HPを300\nかいふくする"
        },
        "element": "null",
        "codes": "ORVWZ",
        "mb": 80,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 136,
        "name": {
            "en": "PanlGrab",
            "ja": "パネルスチール"
        },
        "description": {
            "en": "Steals 1\nenemy\nsquare!",
            "ja": "前方のてきエリアの\n1マスを 自分の\nエリアにぬりかえる"
        },
        "element": "null",
        "codes": "AHLSY*",
        "mb": 10,
        "version": null,
        "stars": 1,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 137,
        "name": {
            "en": "AreaGrab",
            "ja": "エリアスチール"
        },
        "description": {
            "en": "Steals\nleft edge\nfrom enmy",
            "ja": "てきエリアの左はし\nたて1れつを自分の\nエリアにぬりかえる"
        },
        "element": "null",
        "codes": "ELRSY*",
        "mb": 15,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 132,
        "name": {
            "en": "Snake",
            "ja": "カモンスネーク"
        },
        "description": {
            "en": "Snake\nfrom hole\nin area",
            "ja": "自分のエリアの\nあなマスから\nこヘビがとんでいく"
        },
        "element": "wood",
        "codes": "DEIRY",
        "mb": 20,
        "version": null,
        "stars": 3,
        "damage": 40,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 127,
        "name": {
            "en": "Team1",
            "ja": "ブラザーフッド1"
        },
        "description": {
            "en": "Powers up\nwhen ally\nis hit",
            "ja": "なかまがダメージを\nうけると よりはげ\nしく攻撃してくれる"
        },
        "element": "null",
        "codes": "ACETZ*",
        "mb": 16,
        "version": null,
        "stars": 2,
        "damage": 10,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 121,
        "name": {
            "en": "MetaGel1",
            "ja": "スチールゼリー1"
        },
        "description": {
            "en": "Gel atk\nsteals a\npanel!",
            "ja": "てきエリア左はしに\nパネルをぬりかえる\nゼリー攻撃！"
        },
        "element": "aqua",
        "codes": "BCDKY*",
        "mb": 18,
        "version": null,
        "stars": 1,
        "damage": 90,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 122,
        "name": {
            "en": "MetaGel2",
            "ja": "スチールゼリー2"
        },
        "description": {
            "en": "Gel atk\nsteals a\npanel!",
            "ja": "てきエリア左はしに\nパネルをぬりかえる\nゼリー攻撃！"
        },
        "element": "aqua",
        "codes": "EFGPS",
        "mb": 28,
        "version": null,
        "stars": 2,
        "damage": 130,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 123,
        "name": {
            "en": "MetaGel3",
            "ja": "スチールゼリー3"
        },
        "description": {
            "en": "Gel atk\nsteals a\npanel!",
            "ja": "てきエリア左はしに\nパネルをぬりかえる\nゼリー攻撃！"
        },
        "element": "aqua",
        "codes": "GHSTU",
        "mb": 38,
        "version": null,
        "stars": 3,
        "damage": 170,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 138,
        "name": {
            "en": "GrabBack",
            "ja": "スチールパニシュ"
        },
        "description": {
            "en": "Retaliate\nstolen\npanels!",
            "ja": "ぬすまれたパネルの\nかずだけ あいてに\nてんばつがくだる！"
        },
        "element": "null",
        "codes": "AEIKN",
        "mb": 10,
        "version": null,
        "stars": 3,
        "damage": 40,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 139,
        "name": {
            "en": "GrabRvng",
            "ja": "スチールリベンジ"
        },
        "description": {
            "en": "Retaliate\nstolen\npanels!",
            "ja": "ぬすまれたパネルの\nかずだけ あいてに\nてんばつがくだる！"
        },
        "element": "null",
        "codes": "CGPRY",
        "mb": 30,
        "version": null,
        "stars": 4,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 159,
        "name": {
            "en": "Geddon1",
            "ja": "デスマッチ1"
        },
        "description": {
            "en": "Cracks\nall\npanels!",
            "ja": "パネルのあるマスが\nすべてひびに！"
        },
        "element": "null",
        "codes": "DJMOS*",
        "mb": 10,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 160,
        "name": {
            "en": "Geddon2",
            "ja": "デスマッチ2"
        },
        "description": {
            "en": "Breaks\nall empty\nsquares!",
            "ja": "あいているマスが\nすべてこわれる！"
        },
        "element": "null",
        "codes": "FHNOW",
        "mb": 50,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 161,
        "name": {
            "en": "Geddon3",
            "ja": "デスマッチ3"
        },
        "description": {
            "en": "Turns all\npanels to\nswamp!",
            "ja": "パネルのあるマスが\nすべてどくぬまに！"
        },
        "element": "null",
        "codes": "CMUWY",
        "mb": 90,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 140,
        "name": {
            "en": "RockCube",
            "ja": "ストーンキューブ"
        },
        "description": {
            "en": "Places a\nrock cube\nin front",
            "ja": "目の前のマスに\nストーンキューブを\n発生させる"
        },
        "element": "null",
        "codes": "ACEHR*",
        "mb": 9,
        "version": null,
        "stars": 1,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 141,
        "name": {
            "en": "Prism",
            "ja": "プリズム"
        },
        "description": {
            "en": "Prism\nfires\nrandomly",
            "ja": "攻撃をらんはんしゃ\nさせるプリズムを\n3マス前になげる！"
        },
        "element": "null",
        "codes": "HJKQW",
        "mb": 60,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 142,
        "name": {
            "en": "Wind",
            "ja": "トップウ"
        },
        "description": {
            "en": "WindBox\nblows at\nenmy area",
            "ja": "ウインドボックスを\nおき てきエリアに\n風をふかせる"
        },
        "element": "null",
        "codes": "AEHOS*",
        "mb": 14,
        "version": null,
        "stars": 1,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 143,
        "name": {
            "en": "Fan",
            "ja": "スイコミ"
        },
        "description": {
            "en": "Vacuum\npulls\nenemies",
            "ja": "バキュームファンを\nおき 風でてきを\nすいよせる"
        },
        "element": "null",
        "codes": "AGLRT*",
        "mb": 14,
        "version": null,
        "stars": 1,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 97,
        "name": {
            "en": "RockArm1",
            "ja": "ストーンアーム1"
        },
        "description": {
            "en": "Paralyzes\nenemy w/\nerthquake",
            "ja": "目の前にクエイク\n攻撃！ゆれている間\nあいてはうごけない"
        },
        "element": "null",
        "codes": "DHJOP*",
        "mb": 23,
        "version": null,
        "stars": 1,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 98,
        "name": {
            "en": "RockArm2",
            "ja": "ストーンアーム2"
        },
        "description": {
            "en": "Paralyzes\nenemy w/\nerthquake",
            "ja": "目の前にクエイク\n攻撃！ゆれている間\nあいてはうごけない"
        },
        "element": "null",
        "codes": "GMPSV*",
        "mb": 35,
        "version": null,
        "stars": 2,
        "damage": 150,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 99,
        "name": {
            "en": "RockArm3",
            "ja": "ストーンアーム3"
        },
        "description": {
            "en": "Paralyzes\nenemy w/\nerthquake",
            "ja": "目の前にクエイク\n攻撃！ゆれている間\nあいてはうごけない"
        },
        "element": "null",
        "codes": "CILTZ",
        "mb": 47,
        "version": null,
        "stars": 3,
        "damage": 200,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 84,
        "name": {
            "en": "NoBeam1",
            "ja": "NOビーム1"
        },
        "description": {
            "en": "Fires if\nsomething\nbehind",
            "ja": "なにかをせにした\nときにすごいパワー\nをはっして攻撃！"
        },
        "element": "null",
        "codes": "CFGKW",
        "mb": 66,
        "version": null,
        "stars": 2,
        "damage": 200,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 85,
        "name": {
            "en": "NoBeam2",
            "ja": "NOビーム2"
        },
        "description": {
            "en": "Fires if\nsomething\nbehind",
            "ja": "なにかをせにした\nときにすごいパワー\nをはっして攻撃！"
        },
        "element": "null",
        "codes": "EISUY",
        "mb": 77,
        "version": null,
        "stars": 3,
        "damage": 260,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 86,
        "name": {
            "en": "NoBeam3",
            "ja": "NOビーム3"
        },
        "description": {
            "en": "Fires if\nsomething\nbehind",
            "ja": "なにかをせにした\nときにすごいパワー\nをはっして攻撃！"
        },
        "element": "null",
        "codes": "HMVWZ",
        "mb": 88,
        "version": null,
        "stars": 4,
        "damage": 300,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 124,
        "name": {
            "en": "Pawn",
            "ja": "ポーン"
        },
        "description": {
            "en": "Attack by\npressing\nA Button",
            "ja": "目の前にポーンを\nおき Aボタンを\nおすたびけんをふる"
        },
        "element": "null",
        "codes": "BENRY",
        "mb": 44,
        "version": null,
        "stars": 3,
        "damage": 90,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 125,
        "name": {
            "en": "Knight",
            "ja": "ナイト"
        },
        "description": {
            "en": "Jumps fwd\nand\nattacks",
            "ja": "ジャンプ攻撃しなが\nらすすむナイトを\n目の前のマスにおく"
        },
        "element": "null",
        "codes": "CHMUV",
        "mb": 64,
        "version": null,
        "stars": 3,
        "damage": 150,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 126,
        "name": {
            "en": "Rook",
            "ja": "ルーク"
        },
        "description": {
            "en": "Protects\nyou from\nattacks",
            "ja": "じょうへきとなって\nまもってくれる\nルークをおく"
        },
        "element": "null",
        "codes": "DFNQU*",
        "mb": 30,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 112,
        "name": {
            "en": "Needler1",
            "ja": "ニードルマシン1"
        },
        "description": {
            "en": "Advance\nw/ A,stop\nto attack",
            "ja": "Aをおしつづける間\nぜんしん！止めると\n三方にニードル攻撃"
        },
        "element": "null",
        "codes": "IJMRS",
        "mb": 32,
        "version": null,
        "stars": 1,
        "damage": 30,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 113,
        "name": {
            "en": "Needler2",
            "ja": "ニードルマシン2"
        },
        "description": {
            "en": "Advance\nw/ A,stop\nto attack",
            "ja": "Aをおしつづける間\nぜんしん！止めると\n三方にニードル攻撃"
        },
        "element": "null",
        "codes": "FHMTV",
        "mb": 52,
        "version": null,
        "stars": 2,
        "damage": 40,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 114,
        "name": {
            "en": "Needler3",
            "ja": "ニードルマシン3"
        },
        "description": {
            "en": "Advance\nw/ A,stop\nto attack",
            "ja": "Aをおしつづける間\nぜんしん！止めると\n三方にニードル攻撃"
        },
        "element": "null",
        "codes": "DLOUZ",
        "mb": 72,
        "version": null,
        "stars": 3,
        "damage": 50,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 156,
        "name": {
            "en": "SloGauge",
            "ja": "ヘビーゲージ"
        },
        "description": {
            "en": "CustGauge\nslow down\nin battle",
            "ja": "バトル中ずっと\nカスタムゲージの\nスピードがおちる"
        },
        "element": "null",
        "codes": "ACRSZ*",
        "mb": 20,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 157,
        "name": {
            "en": "FstGauge",
            "ja": "クイックゲージ"
        },
        "description": {
            "en": "CustGauge\nspeeds up\nin battle",
            "ja": "バトル中ずっと\nカスタムゲージの\nスピードがあがる"
        },
        "element": "null",
        "codes": "BEJRY*",
        "mb": 40,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 155,
        "name": {
            "en": "Repair",
            "ja": "パネルリターン"
        },
        "description": {
            "en": "Fix your\narea's\npanels",
            "ja": "自分のエリアの\nパネルをノーマルに\nもどす！"
        },
        "element": "null",
        "codes": "ACDFS*",
        "mb": 8,
        "version": null,
        "stars": 1,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 163,
        "name": {
            "en": "Invis",
            "ja": "インビジブル"
        },
        "description": {
            "en": "Invisible\nfor a\nwhile",
            "ja": "少しの間とうめいに\nなって ほとんどの\n攻撃にあたらない"
        },
        "element": "null",
        "codes": "BEFS*",
        "mb": 11,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 183,
        "name": {
            "en": "Hole",
            "ja": "ダークホール"
        },
        "description": {
            "en": "Open hole\nto dark\nworld",
            "ja": "やみの世界に\nつうじるあなが\nいっしゅんひらく"
        },
        "element": "null",
        "codes": "ABSTZ*",
        "mb": 55,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 165,
        "name": {
            "en": "Mole1",
            "ja": "ユカシタモグラ1"
        },
        "description": {
            "en": "Attacks\nfr. under\nground!",
            "ja": "地中にもぐり\n攻撃のときだけ\nすがたをあらわす"
        },
        "element": "null",
        "codes": "ADHJO*",
        "mb": 28,
        "version": null,
        "stars": 1,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 166,
        "name": {
            "en": "Mole2",
            "ja": "ユカシタモグラ2"
        },
        "description": {
            "en": "Attacks\nfr. under\nground!",
            "ja": "地中にもぐり\n攻撃のときだけ\nすがたをあらわす"
        },
        "element": "null",
        "codes": "BGIKR*",
        "mb": 35,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 167,
        "name": {
            "en": "Mole3",
            "ja": "ユカシタモグラ3"
        },
        "description": {
            "en": "Attacks\nfr. under\nground!",
            "ja": "地中にもぐり\n攻撃のときだけ\nすがたをあらわす"
        },
        "element": "null",
        "codes": "CELMQ",
        "mb": 42,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 164,
        "name": {
            "en": "Shadow",
            "ja": "カゲブンシン"
        },
        "description": {
            "en": "Only swrd\nattacks\nhurt you",
            "ja": "しばらくの間\nソードけいいがいの\n攻撃にあたらない"
        },
        "element": "null",
        "codes": "HJNQU*",
        "mb": 60,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 174,
        "name": {
            "en": "Mettaur",
            "ja": "メットール"
        },
        "description": {
            "en": "Summons a\nMettaur\nto fight!",
            "ja": "メットールを\nよびだして攻撃！"
        },
        "element": "null",
        "codes": "ELMOT",
        "mb": 30,
        "version": null,
        "stars": 5,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 175,
        "name": {
            "en": "Bunny",
            "ja": "ラビリー"
        },
        "description": {
            "en": "Summons a\nBunny\nto fight!",
            "ja": "ラビリーを\nよびだして攻撃！"
        },
        "element": "elec",
        "codes": "ABILR",
        "mb": 32,
        "version": null,
        "stars": 5,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 168,
        "name": {
            "en": "AirShoes",
            "ja": "エアシューズ"
        },
        "description": {
            "en": "Can stand\non empty\nsquares",
            "ja": "パネルのないマスに\nいどうできるように\nなる！"
        },
        "element": "null",
        "codes": "HINUY*",
        "mb": 26,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 128,
        "name": {
            "en": "Team2",
            "ja": "ブラザーフッド2"
        },
        "description": {
            "en": "Ally's HP\nrecovered\nif hurt",
            "ja": "なかまがダメージを\nうけてヤバクなると\nHPかいふくさせる"
        },
        "element": "null",
        "codes": "DLPSZ*",
        "mb": 20,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 144,
        "name": {
            "en": "Fanfare",
            "ja": "オウエンカ"
        },
        "description": {
            "en": "Take no\ndmg for a\nwhile",
            "ja": "ララパッパをおく\nえんそう中は\nムテキじょうたいに"
        },
        "element": "null",
        "codes": "CEGLY*",
        "mb": 32,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 145,
        "name": {
            "en": "Discord",
            "ja": "ディスコード"
        },
        "description": {
            "en": "Confuses\nenemies\nw/ music",
            "ja": "ララチューバをおく\nえんそう中は\nあいてがこんらん！"
        },
        "element": "null",
        "codes": "DFNTZ*",
        "mb": 38,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 146,
        "name": {
            "en": "Timpani",
            "ja": "ティンパニー"
        },
        "description": {
            "en": "Paralyzes\nenemies\nw/ music",
            "ja": "ララボーンをおく！\nえんそう中は\nあいてがうごけない"
        },
        "element": "null",
        "codes": "AMNQU*",
        "mb": 42,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 169,
        "name": {
            "en": "Barrier",
            "ja": "バリア"
        },
        "description": {
            "en": "Nullifies\n10HP of\ndamage!",
            "ja": "10HPぶんの\nダメージをむこうか"
        },
        "element": "null",
        "codes": "CELRS*",
        "mb": 7,
        "version": null,
        "stars": 1,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 170,
        "name": {
            "en": "Barr100",
            "ja": "100バリア"
        },
        "description": {
            "en": "Nullifies\n100HP of\ndamage!",
            "ja": "100HPぶんの\nダメージをむこうか"
        },
        "element": "null",
        "codes": "EJMRT*",
        "mb": 25,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 171,
        "name": {
            "en": "Barr200",
            "ja": "200バリア"
        },
        "description": {
            "en": "Nullifies\n200HP of\ndamage!",
            "ja": "200HPぶんの\nダメージをむこうか"
        },
        "element": "null",
        "codes": "EFHRU",
        "mb": 50,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 172,
        "name": {
            "en": "Aura",
            "ja": "オーラ"
        },
        "description": {
            "en": "Repels\nattacks\nunder 100",
            "ja": "攻撃力が100より\nひくい攻撃を\nむこうかするオーラ"
        },
        "element": "null",
        "codes": "FISUY",
        "mb": 55,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 173,
        "name": {
            "en": "NrthWind",
            "ja": "スーパーキタカゼ"
        },
        "description": {
            "en": "Wind\nremoves\nauras,etc",
            "ja": "すさまじいキタカゼ\nがバリアやオーラを\nふきとばしてしまう"
        },
        "element": "null",
        "codes": "ACNSZ",
        "mb": 43,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 184,
        "name": {
            "en": "HolyPanl",
            "ja": "ホーリーパネル"
        },
        "description": {
            "en": "Creates a\nholy pnl\nin front",
            "ja": "目の前のパネルを\nホーリーパネルに\nしてしまう"
        },
        "element": "null",
        "codes": "EJLRU*",
        "mb": 14,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 185,
        "name": {
            "en": "LavaStge",
            "ja": "マグマステージ"
        },
        "description": {
            "en": "Changes\nall panls\nto lava",
            "ja": "すべてのパネルを\nマグマパネルに\nしてしまう"
        },
        "element": "null",
        "codes": "AERTY*",
        "mb": 22,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 186,
        "name": {
            "en": "IceStage",
            "ja": "アイスステージ"
        },
        "description": {
            "en": "Changes\nall panls\nto ice",
            "ja": "すべてのパネルを\nこおりパネルに\nしてしまう"
        },
        "element": "null",
        "codes": "CGMQT*",
        "mb": 20,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 187,
        "name": {
            "en": "GrassStg",
            "ja": "クサムラステージ"
        },
        "description": {
            "en": "Changes\nall panls\nto grass",
            "ja": "すべてのパネルを\nくさむらパネルに\nしてしまう"
        },
        "element": "null",
        "codes": "EJRWZ*",
        "mb": 10,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 188,
        "name": {
            "en": "SandStge",
            "ja": "サンドステージ"
        },
        "description": {
            "en": "Changes\nall panls\nto sand",
            "ja": "すべてのパネルを\nすなパネルに\nしてしまう"
        },
        "element": "null",
        "codes": "BCQUW*",
        "mb": 18,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 189,
        "name": {
            "en": "MetlStge",
            "ja": "メタルステージ"
        },
        "description": {
            "en": "Changes\nall panls\nto metal",
            "ja": "すべてのパネルを\nメタルパネルに\nしてしまう"
        },
        "element": "null",
        "codes": "DGMOS*",
        "mb": 26,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 190,
        "name": {
            "en": "Snctuary",
            "ja": "サンクチュアリ"
        },
        "description": {
            "en": "Change\nown panls\nto holy",
            "ja": "自分のエリアの\nすべてのマスを\nホーリーパネルに！"
        },
        "element": "null",
        "codes": "ACELS",
        "mb": 54,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 177,
        "name": {
            "en": "Swordy",
            "ja": "スウォーディン"
        },
        "description": {
            "en": "Summons a\nSwordy\nto fight!",
            "ja": "スウォーディンを\nよびだして攻撃！"
        },
        "element": "null",
        "codes": "DIOSW",
        "mb": 30,
        "version": null,
        "stars": 5,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 176,
        "name": {
            "en": "Spikey",
            "ja": "ガルー"
        },
        "description": {
            "en": "Summons a\nSpikey\nto fight!",
            "ja": "ガルーを\nよびだして攻撃！"
        },
        "element": "fire",
        "codes": "AEGRU",
        "mb": 34,
        "version": null,
        "stars": 5,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 179,
        "name": {
            "en": "Mushy",
            "ja": "チャマッシュ"
        },
        "description": {
            "en": "Summons a\nMushy\nto fight!",
            "ja": "チャマッシュを\nよびだして攻撃！"
        },
        "element": "wood",
        "codes": "CHMSY",
        "mb": 38,
        "version": null,
        "stars": 5,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 178,
        "name": {
            "en": "Jelly",
            "ja": "ジェリー"
        },
        "description": {
            "en": "Summons a\nJelly\nto fight!",
            "ja": "ジェリーを\nよびだして攻撃！"
        },
        "element": "null",
        "codes": "EJLRY",
        "mb": 46,
        "version": null,
        "stars": 5,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 181,
        "name": {
            "en": "KillrEye",
            "ja": "キラーズアイ"
        },
        "description": {
            "en": "Summons a\nKillerEye\nto fight!",
            "ja": "キラーズアイを\nよびだして攻撃！"
        },
        "element": "null",
        "codes": "EIKLR",
        "mb": 50,
        "version": null,
        "stars": 5,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 193,
        "name": {
            "en": "AntiNavi",
            "ja": "ナビスカウト"
        },
        "description": {
            "en": "Takes the\nenemy's\nNavi away",
            "ja": "てきにワナをはる\nよびだしたナビを\nねがえらせる"
        },
        "element": "null",
        "codes": "AMNVW",
        "mb": 60,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 191,
        "name": {
            "en": "AntiDmg",
            "ja": "カワリミ"
        },
        "description": {
            "en": "Sets trap\n& throws\nstars!",
            "ja": "てきにワナをはる\n攻撃にあたると\nしゅりけん攻撃！"
        },
        "element": "null",
        "codes": "CFHMS",
        "mb": 45,
        "version": null,
        "stars": 3,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 192,
        "name": {
            "en": "AntiSwrd",
            "ja": "シラハドリ"
        },
        "description": {
            "en": "Retaliate\nfor sword\ndamage",
            "ja": "てきにワナをはる\nソード攻撃をうけ\nながしてはんげき！"
        },
        "element": "null",
        "codes": "BKRUY",
        "mb": 68,
        "version": null,
        "stars": 3,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 194,
        "name": {
            "en": "AntiRecv",
            "ja": "バッドメディスン"
        },
        "description": {
            "en": "Punish\nrecovery\nof HPs!",
            "ja": "てきにワナをはる\nてきのリカバリーが\nぎゃくにダメージに"
        },
        "element": "null",
        "codes": "BDEOS",
        "mb": 73,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 162,
        "name": {
            "en": "CopyDmg",
            "ja": "コピーダメージ"
        },
        "description": {
            "en": "Duplicate\ndamage on\n2nd enemy",
            "ja": "カーソルのあいてに\nほかのてきがうけた\nダメージをコピー！"
        },
        "element": "null",
        "codes": "AFHLY*",
        "mb": 18,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 195,
        "name": {
            "en": "Atk+10",
            "ja": "アタック+10"
        },
        "description": {
            "en": "+10 for\nselected\natk chip",
            "ja": "攻撃チップのあとに\nえらぶと 攻撃力を\n+10できる"
        },
        "element": "null",
        "codes": "*",
        "mb": 4,
        "version": null,
        "stars": 1,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 196,
        "name": {
            "en": "Fire+30",
            "ja": "ファイア+30"
        },
        "description": {
            "en": "+30 for\nFire atk\nchip",
            "ja": "炎属性のチップの\nあとにえらぶと\n攻撃力を+30！"
        },
        "element": "null",
        "codes": "*",
        "mb": 20,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 197,
        "name": {
            "en": "Aqua+30",
            "ja": "アクア+30"
        },
        "description": {
            "en": "+30 for\nAqua atk\nchip",
            "ja": "水属性のチップの\nあとにえらぶと\n攻撃力を+30！"
        },
        "element": "null",
        "codes": "*",
        "mb": 21,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 198,
        "name": {
            "en": "Elec+30",
            "ja": "エレキ+30"
        },
        "description": {
            "en": "+30 for\nElec atk\nchip",
            "ja": "電気属性のチップの\nあとにえらぶと\n攻撃力を+30！"
        },
        "element": "null",
        "codes": "*",
        "mb": 23,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 199,
        "name": {
            "en": "Wood+30",
            "ja": "ウッド+30"
        },
        "description": {
            "en": "+30 for\nWood atk\nchip",
            "ja": "木属性のチップの\nあとにえらぶと\n攻撃力を+30！"
        },
        "element": "null",
        "codes": "*",
        "mb": 26,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 200,
        "name": {
            "en": "Navi+20",
            "ja": "ナビ+20"
        },
        "description": {
            "en": "+20 for\nselected\nNavi chip",
            "ja": "ナビチップの\nあとにえらぶと\n攻撃力を+20！"
        },
        "element": "null",
        "codes": "*",
        "mb": 34,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "mega",
        "index": 19,
        "name": {
            "en": "LifeAura",
            "ja": "ドリームオーラ"
        },
        "description": {
            "en": "Repel all\nattacks\nunder 200",
            "ja": "攻撃力が200より\nひくい攻撃を\nむこうかするオーラ"
        },
        "element": "null",
        "codes": "D",
        "mb": 77,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 1,
        "name": {
            "en": "Muramasa",
            "ja": "ムラマサブレード"
        },
        "description": {
            "en": "Power=\namount of\nHP lost!",
            "ja": "へっているHP分が\n攻撃力になる\nのろいのブレード！"
        },
        "element": "null",
        "codes": "M",
        "mb": 74,
        "version": null,
        "stars": 5,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 13,
        "name": {
            "en": "Guardian",
            "ja": "オジゾウサン"
        },
        "description": {
            "en": "Statue\npunishes\nwhen hit",
            "ja": "目の前のマスに\nこわしてはいけない\nオジゾウサンをおく"
        },
        "element": "null",
        "codes": "O",
        "mb": 82,
        "version": null,
        "stars": 5,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 14,
        "name": {
            "en": "Anubis",
            "ja": "ポイズンアヌビス"
        },
        "description": {
            "en": "Anubis\npoisons\nenemies",
            "ja": "てきエリアにどくを\n発生させる\nアヌビスぞうをおく"
        },
        "element": "null",
        "codes": "A",
        "mb": 90,
        "version": null,
        "stars": 5,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 21,
        "name": {
            "en": "Atk+30",
            "ja": "アタック+30"
        },
        "description": {
            "en": "+30 for\nselected\natk chip",
            "ja": "攻撃チップのあとに\nえらぶと 攻撃力を\n+30できる"
        },
        "element": "null",
        "codes": "*",
        "mb": 50,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 22,
        "name": {
            "en": "Navi+40",
            "ja": "ナビ+40"
        },
        "description": {
            "en": "+40 for\nselected\nNavi chip",
            "ja": "ナビチップの\nあとにえらぶと\n攻撃力を+40！"
        },
        "element": "null",
        "codes": "*",
        "mb": 60,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 2,
        "name": {
            "en": "HeroSwrd",
            "ja": "パラディンソード"
        },
        "description": {
            "en": "Legendary\nswrd cuts\n3 sq!",
            "ja": "でんせつのせいきし\nのソード！\nよこ3マスをきる！"
        },
        "element": "null",
        "codes": "P",
        "mb": 65,
        "version": null,
        "stars": 4,
        "damage": 180,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 3,
        "name": {
            "en": "ZeusHamr",
            "ja": "ゼウスハンマー"
        },
        "description": {
            "en": "Damages\nanyone on\na panel",
            "ja": "パネルのあるマスに\nてきみかたをとわず\n大ダメージ！"
        },
        "element": "null",
        "codes": "Z",
        "mb": 90,
        "version": null,
        "stars": 5,
        "damage": 250,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 15,
        "name": {
            "en": "GodStone",
            "ja": "ゴッドストーン"
        },
        "description": {
            "en": "Summons a\nGodStone\nfrom hole",
            "ja": "目の前のあなから\nゴッドストーンを\nよびだす！"
        },
        "element": "wood",
        "codes": "S",
        "mb": 66,
        "version": null,
        "stars": 4,
        "damage": 150,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 16,
        "name": {
            "en": "OldWood",
            "ja": "オールドウッド"
        },
        "description": {
            "en": "Summons\nOldWood\nfrom hole",
            "ja": "目の前のあなから\nオールドウッドを\nよびだす！"
        },
        "element": "wood",
        "codes": "W",
        "mb": 72,
        "version": null,
        "stars": 4,
        "damage": 100,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 20,
        "name": {
            "en": "FullCust",
            "ja": "フルカスタム"
        },
        "description": {
            "en": "CustGauge\ninstantly\nrefills!",
            "ja": "カスタムゲージが\nいっしゅんで\nマンタンになる！"
        },
        "element": "null",
        "codes": "*",
        "mb": 10,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 12,
        "name": {
            "en": "Meteors",
            "ja": "リュウセイグン"
        },
        "description": {
            "en": "Drop many\nmeteors\non enemy",
            "ja": "あいてエリアに\nむすうのリュウセイ\nがふりそそぐ！"
        },
        "element": "fire",
        "codes": "R",
        "mb": 86,
        "version": null,
        "stars": 4,
        "damage": 40,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 18,
        "name": {
            "en": "Poltrgst",
            "ja": "ポルターガイスト"
        },
        "description": {
            "en": "Objects\nthrown at\nenemies!",
            "ja": "すべてのぶったいが\nまいあがり､てきに\nとつげきする！"
        },
        "element": "null",
        "codes": "G",
        "mb": 58,
        "version": null,
        "stars": 5,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 17,
        "name": {
            "en": "Jealousy",
            "ja": "ジェラシー"
        },
        "description": {
            "en": "More dmg\nif enemy\nhas chips",
            "ja": "チップをもつてきに\n枚数におうじた\nダメージをあたえる"
        },
        "element": "null",
        "codes": "J",
        "mb": 64,
        "version": null,
        "stars": 3,
        "damage": 100,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 4,
        "name": {
            "en": "StandOut",
            "ja": "プロミネンス"
        },
        "description": {
            "en": "Heat:\nSend Fire\ninto hole",
            "ja": "ヒートせんよう\nあなの方へすすむ\n炎をはっせいさせる"
        },
        "element": "fire",
        "codes": "P*",
        "mb": 22,
        "version": null,
        "stars": 4,
        "damage": 220,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 6,
        "name": {
            "en": "WatrLine",
            "ja": "チカスイミャク"
        },
        "description": {
            "en": "Water:\nDraw wter\nfrom hole",
            "ja": "アクアせんよう\n目の前のあなから\n水が前方へすすむ"
        },
        "element": "aqua",
        "codes": "C*",
        "mb": 18,
        "version": null,
        "stars": 3,
        "damage": 180,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 8,
        "name": {
            "en": "Ligtning",
            "ja": "ライトニング"
        },
        "description": {
            "en": "Elec:Dmgs\nobject &\narea",
            "ja": "エレキせんよう\nものにらくらい！\nまわりもかんでん！"
        },
        "element": "elec",
        "codes": "L*",
        "mb": 30,
        "version": null,
        "stars": 3,
        "damage": 160,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 10,
        "name": {
            "en": "GaiaSwrd",
            "ja": "ガイアソード"
        },
        "description": {
            "en": "Wood:Take\npower frm\nnext chip",
            "ja": "ウッドせんよう\n後にえらんだチップ\nの攻撃力をすいとる"
        },
        "element": "wood",
        "codes": "G*",
        "mb": 28,
        "version": null,
        "stars": 3,
        "damage": 100,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 23,
        "name": {
            "en": "Roll",
            "ja": "ロール"
        },
        "description": {
            "en": "Attack an\nenemy,\nheal you",
            "ja": "てき1たいを攻撃\nかいふくのハートで\nいやしてくれる"
        },
        "element": "null",
        "codes": "R",
        "mb": 10,
        "version": null,
        "stars": 3,
        "damage": 20,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 24,
        "name": {
            "en": "RollV2",
            "ja": "ロールV2"
        },
        "description": {
            "en": "Attack an\nenemy,\nheal you",
            "ja": "てき1たいを攻撃\nかいふくのハートで\nいやしてくれる"
        },
        "element": "null",
        "codes": "R",
        "mb": 22,
        "version": null,
        "stars": 4,
        "damage": 30,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 25,
        "name": {
            "en": "RollV3",
            "ja": "ロールV3"
        },
        "description": {
            "en": "Attack an\nenemy,\nheal you",
            "ja": "てき1たいを攻撃\nかいふくのハートで\nいやしてくれる"
        },
        "element": "null",
        "codes": "R",
        "mb": 34,
        "version": null,
        "stars": 5,
        "damage": 40,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 26,
        "name": {
            "en": "GutsMan",
            "ja": "ガッツマン"
        },
        "description": {
            "en": "Sneaks up\nto smash\npanels!",
            "ja": "前方に地をはう\nしょうげきは攻撃！\nパネルはひびわれに"
        },
        "element": "null",
        "codes": "G",
        "mb": 15,
        "version": null,
        "stars": 3,
        "damage": 50,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 27,
        "name": {
            "en": "GutsManV2",
            "ja": "ガッツマンV2"
        },
        "description": {
            "en": "Sneaks up\nto smash\npanels!",
            "ja": "前方に地をはう\nしょうげきは攻撃！\nパネルはひびわれに"
        },
        "element": "null",
        "codes": "G",
        "mb": 41,
        "version": null,
        "stars": 4,
        "damage": 70,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 28,
        "name": {
            "en": "GutsManV3",
            "ja": "ガッツマンV3"
        },
        "description": {
            "en": "Sneaks up\nto smash\npanels!",
            "ja": "前方に地をはう\nしょうげきは攻撃！\nパネルはひびわれに"
        },
        "element": "null",
        "codes": "G",
        "mb": 57,
        "version": null,
        "stars": 5,
        "damage": 90,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 29,
        "name": {
            "en": "GutsManV4",
            "ja": "ガッツマンV4"
        },
        "description": {
            "en": "Sneaks up\nto smash\npanels!",
            "ja": "前方に地をはう\nしょうげきは攻撃！\nパネルはひびわれに"
        },
        "element": "null",
        "codes": "G",
        "mb": 63,
        "version": null,
        "stars": 5,
        "damage": 100,
        "class": "mega"
    },
    {
        "section": "giga",
        "index": 6,
        "name": {
            "en": "GutsManV5",
            "ja": "ガッツマンV5"
        },
        "description": {
            "en": "Sneaks up\nto smash\npanels!",
            "ja": "前方に地をはう\nしょうげきは攻撃！\nパネルはひびわれに"
        },
        "element": "null",
        "codes": "G",
        "mb": 79,
        "version": null,
        "stars": 5,
        "damage": 120,
        "class": "giga"
    },
    {
        "section": "mega",
        "index": 30,
        "name": {
            "en": "ProtoMan",
            "ja": "ブルース"
        },
        "description": {
            "en": "Moves in\nto slice\nthe enemy",
            "ja": "てきの前にいって\nきりつけてまわる\nいけないばあいも"
        },
        "element": "null",
        "codes": "B",
        "mb": 68,
        "version": null,
        "stars": 3,
        "damage": 160,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 31,
        "name": {
            "en": "ProtoMnV2",
            "ja": "ブルースV2"
        },
        "description": {
            "en": "Moves in\nto slice\nthe enemy",
            "ja": "てきの前にいって\nきりつけてまわる\nいけないばあいも"
        },
        "element": "null",
        "codes": "B",
        "mb": 76,
        "version": null,
        "stars": 4,
        "damage": 180,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 32,
        "name": {
            "en": "ProtoMnV3",
            "ja": "ブルースV3"
        },
        "description": {
            "en": "Moves in\nto slice\nthe enemy",
            "ja": "てきの前にいって\nきりつけてまわる\nいけないばあいも"
        },
        "element": "null",
        "codes": "B",
        "mb": 82,
        "version": null,
        "stars": 5,
        "damage": 200,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 33,
        "name": {
            "en": "ProtoMnV4",
            "ja": "ブルースV4"
        },
        "description": {
            "en": "Moves in\nto slice\nthe enemy",
            "ja": "てきの前にいって\nきりつけてまわる\nいけないばあいも"
        },
        "element": "null",
        "codes": "B",
        "mb": 90,
        "version": null,
        "stars": 5,
        "damage": 220,
        "class": "mega"
    },
    {
        "section": "giga",
        "index": 7,
        "name": {
            "en": "ProtoMnV5",
            "ja": "ブルースV5"
        },
        "description": {
            "en": "Moves in\nto slice\nthe enemy",
            "ja": "てきの前にいって\nきりつけてまわる\nいけないばあいも"
        },
        "element": "null",
        "codes": "B",
        "mb": 98,
        "version": null,
        "stars": 5,
        "damage": 240,
        "class": "giga"
    },
    {
        "section": "mega",
        "index": 34,
        "name": {
            "en": "FlashMan",
            "ja": "フラッシュマン"
        },
        "description": {
            "en": "Flash atk\nparalyzes\nenemy",
            "ja": "すべてをてらしだす\nフラッシュ攻撃！\nあいてをマヒさせる"
        },
        "element": "elec",
        "codes": "F",
        "mb": 39,
        "version": null,
        "stars": 3,
        "damage": 50,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 35,
        "name": {
            "en": "FlashMnV2",
            "ja": "フラッシュマンV2"
        },
        "description": {
            "en": "Flash atk\nparalyzes\nenemy",
            "ja": "すべてをてらしだす\nフラッシュ攻撃！\nあいてをマヒさせる"
        },
        "element": "elec",
        "codes": "F",
        "mb": 59,
        "version": null,
        "stars": 4,
        "damage": 70,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 36,
        "name": {
            "en": "FlashMnV3",
            "ja": "フラッシュマンV3"
        },
        "description": {
            "en": "Flash atk\nparalyzes\nenemy",
            "ja": "すべてをてらしだす\nフラッシュ攻撃！\nあいてをマヒさせる"
        },
        "element": "elec",
        "codes": "F",
        "mb": 69,
        "version": null,
        "stars": 5,
        "damage": 90,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 37,
        "name": {
            "en": "FlashMnV4",
            "ja": "フラッシュマンV4"
        },
        "description": {
            "en": "Flash atk\nparalyzes\nenemy",
            "ja": "すべてをてらしだす\nフラッシュ攻撃！\nあいてをマヒさせる"
        },
        "element": "elec",
        "codes": "F",
        "mb": 79,
        "version": null,
        "stars": 5,
        "damage": 120,
        "class": "mega"
    },
    {
        "section": "giga",
        "index": 8,
        "name": {
            "en": "FlashMnV5",
            "ja": "フラッシュマンV5"
        },
        "description": {
            "en": "Flash atk\nparalyzes\nenemy",
            "ja": "すべてをてらしだす\nフラッシュ攻撃！\nあいてをマヒさせる"
        },
        "element": "elec",
        "codes": "F",
        "mb": 89,
        "version": null,
        "stars": 5,
        "damage": 150,
        "class": "giga"
    },
    {
        "section": "mega",
        "index": 38,
        "name": {
            "en": "BeastMan",
            "ja": "ビーストマン"
        },
        "description": {
            "en": "Claw atk\n3 squares\nahead!",
            "ja": "3マス前めがけて\nするどいツメとキバ\nがおそいかかる！"
        },
        "element": "null",
        "codes": "B",
        "mb": 38,
        "version": null,
        "stars": 3,
        "damage": 40,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 39,
        "name": {
            "en": "BeastMnV2",
            "ja": "ビーストマンV2"
        },
        "description": {
            "en": "Claw atk\n3 squares\nahead!",
            "ja": "3マス前めがけて\nするどいツメとキバ\nがおそいかかる！"
        },
        "element": "null",
        "codes": "B",
        "mb": 60,
        "version": null,
        "stars": 4,
        "damage": 50,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 40,
        "name": {
            "en": "BeastMnV3",
            "ja": "ビーストマンV3"
        },
        "description": {
            "en": "Claw atk\n3 squares\nahead!",
            "ja": "3マス前めがけて\nするどいツメとキバ\nがおそいかかる！"
        },
        "element": "null",
        "codes": "B",
        "mb": 68,
        "version": null,
        "stars": 5,
        "damage": 60,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 41,
        "name": {
            "en": "BeastMnV4",
            "ja": "ビーストマンV4"
        },
        "description": {
            "en": "Claw atk\n3 squares\nahead!",
            "ja": "3マス前めがけて\nするどいツメとキバ\nがおそいかかる！"
        },
        "element": "null",
        "codes": "B",
        "mb": 76,
        "version": null,
        "stars": 5,
        "damage": 70,
        "class": "mega"
    },
    {
        "section": "giga",
        "index": 9,
        "name": {
            "en": "BeastMnV5",
            "ja": "ビーストマンV5"
        },
        "description": {
            "en": "Claw atk\n3 squares\nahead!",
            "ja": "3マス前めがけて\nするどいツメとキバ\nがおそいかかる！"
        },
        "element": "null",
        "codes": "B",
        "mb": 84,
        "version": null,
        "stars": 5,
        "damage": 80,
        "class": "giga"
    },
    {
        "section": "mega",
        "index": 42,
        "name": {
            "en": "BubblMan",
            "ja": "バブルマン"
        },
        "description": {
            "en": "Fires\nseveral\nAquaShots",
            "ja": "同じれつの前方に\nアクアシュートを\nれんしゃ！"
        },
        "element": "aqua",
        "codes": "B",
        "mb": 50,
        "version": null,
        "stars": 3,
        "damage": 20,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 43,
        "name": {
            "en": "BubblMnV2",
            "ja": "バブルマンV2"
        },
        "description": {
            "en": "Fires\nseveral\nAquaShots",
            "ja": "同じれつの前方に\nアクアシュートを\nれんしゃ！"
        },
        "element": "aqua",
        "codes": "B",
        "mb": 62,
        "version": null,
        "stars": 4,
        "damage": 20,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 44,
        "name": {
            "en": "BubblMnV3",
            "ja": "バブルマンV3"
        },
        "description": {
            "en": "Fires\nseveral\nAquaShots",
            "ja": "同じれつの前方に\nアクアシュートを\nれんしゃ！"
        },
        "element": "aqua",
        "codes": "B",
        "mb": 74,
        "version": null,
        "stars": 5,
        "damage": 20,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 45,
        "name": {
            "en": "BubblMnV4",
            "ja": "バブルマンV4"
        },
        "description": {
            "en": "Fires\nseveral\nAquaShots",
            "ja": "同じれつの前方に\nアクアシュートを\nれんしゃ！"
        },
        "element": "aqua",
        "codes": "B",
        "mb": 80,
        "version": null,
        "stars": 5,
        "damage": 20,
        "class": "mega"
    },
    {
        "section": "giga",
        "index": 10,
        "name": {
            "en": "BubblMnV5",
            "ja": "バブルマンV5"
        },
        "description": {
            "en": "Fires\nseveral\nAquaShots",
            "ja": "同じれつの前方に\nアクアシュートを\nれんしゃ！"
        },
        "element": "aqua",
        "codes": "B",
        "mb": 86,
        "version": null,
        "stars": 5,
        "damage": 20,
        "class": "giga"
    },
    {
        "section": "mega",
        "index": 46,
        "name": {
            "en": "DesrtMan",
            "ja": "デザートマン"
        },
        "description": {
            "en": "Launches\nfists at\nenemies!",
            "ja": "りょうななめ前に\nあらわれたウデが\nまっすぐとっしん！"
        },
        "element": "null",
        "codes": "D",
        "mb": 38,
        "version": null,
        "stars": 3,
        "damage": 120,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 47,
        "name": {
            "en": "DesrtMnV2",
            "ja": "デザートマンV2"
        },
        "description": {
            "en": "Launches\nfists at\nenemies!",
            "ja": "りょうななめ前に\nあらわれたウデが\nまっすぐとっしん！"
        },
        "element": "null",
        "codes": "D",
        "mb": 52,
        "version": null,
        "stars": 4,
        "damage": 140,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 48,
        "name": {
            "en": "DesrtMnV3",
            "ja": "デザートマンV3"
        },
        "description": {
            "en": "Launches\nfists at\nenemies!",
            "ja": "りょうななめ前に\nあらわれたウデが\nまっすぐとっしん！"
        },
        "element": "null",
        "codes": "D",
        "mb": 64,
        "version": null,
        "stars": 5,
        "damage": 160,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 49,
        "name": {
            "en": "DesrtMnV4",
            "ja": "デザートマンV4"
        },
        "description": {
            "en": "Launches\nfists at\nenemies!",
            "ja": "りょうななめ前に\nあらわれたウデが\nまっすぐとっしん！"
        },
        "element": "null",
        "codes": "D",
        "mb": 72,
        "version": null,
        "stars": 5,
        "damage": 180,
        "class": "mega"
    },
    {
        "section": "giga",
        "index": 11,
        "name": {
            "en": "DesrtMnV5",
            "ja": "デザートマンV5"
        },
        "description": {
            "en": "Launches\nfists at\nenemies!",
            "ja": "りょうななめ前に\nあらわれたウデが\nまっすぐとっしん！"
        },
        "element": "null",
        "codes": "D",
        "mb": 80,
        "version": null,
        "stars": 5,
        "damage": 210,
        "class": "giga"
    },
    {
        "section": "mega",
        "index": 50,
        "name": {
            "en": "PlantMan",
            "ja": "プラントマン"
        },
        "description": {
            "en": "Vines\nharm all\nenemies!",
            "ja": "地中をつたって\nすべてのてきに\nツタ攻撃！"
        },
        "element": "wood",
        "codes": "P",
        "mb": 60,
        "version": null,
        "stars": 3,
        "damage": 20,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 51,
        "name": {
            "en": "PlantMnV2",
            "ja": "プラントマンV2"
        },
        "description": {
            "en": "Vines\nharm all\nenemies!",
            "ja": "地中をつたって\nすべてのてきに\nツタ攻撃！"
        },
        "element": "wood",
        "codes": "P",
        "mb": 65,
        "version": null,
        "stars": 4,
        "damage": 30,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 52,
        "name": {
            "en": "PlantMnV3",
            "ja": "プラントマンV3"
        },
        "description": {
            "en": "Vines\nharm all\nenemies!",
            "ja": "地中をつたって\nすべてのてきに\nツタ攻撃！"
        },
        "element": "wood",
        "codes": "P",
        "mb": 70,
        "version": null,
        "stars": 5,
        "damage": 40,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 53,
        "name": {
            "en": "PlantMnV4",
            "ja": "プラントマンV4"
        },
        "description": {
            "en": "Vines\nharm all\nenemies!",
            "ja": "地中をつたって\nすべてのてきに\nツタ攻撃！"
        },
        "element": "wood",
        "codes": "P",
        "mb": 75,
        "version": null,
        "stars": 5,
        "damage": 50,
        "class": "mega"
    },
    {
        "section": "giga",
        "index": 12,
        "name": {
            "en": "PlantMnV5",
            "ja": "プラントマンV5"
        },
        "description": {
            "en": "Vines\nharm all\nenemies!",
            "ja": "地中をつたって\nすべてのてきに\nツタ攻撃！"
        },
        "element": "wood",
        "codes": "P",
        "mb": 80,
        "version": null,
        "stars": 5,
        "damage": 60,
        "class": "giga"
    },
    {
        "section": "mega",
        "index": 54,
        "name": {
            "en": "FlamMan",
            "ja": "フレイムマン"
        },
        "description": {
            "en": "Flames\nburn all\nenemies!",
            "ja": "しゃくねつの炎を\nあやつり､すべてを\nやきつくす！"
        },
        "element": "fire",
        "codes": "F",
        "mb": 32,
        "version": null,
        "stars": 3,
        "damage": 120,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 55,
        "name": {
            "en": "FlamManV2",
            "ja": "フレイムマンV2"
        },
        "description": {
            "en": "Flames\nburn all\nenemies!",
            "ja": "しゃくねつの炎を\nあやつり､すべてを\nやきつくす！"
        },
        "element": "fire",
        "codes": "F",
        "mb": 52,
        "version": null,
        "stars": 4,
        "damage": 150,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 56,
        "name": {
            "en": "FlamManV3",
            "ja": "フレイムマンV3"
        },
        "description": {
            "en": "Flames\nburn all\nenemies!",
            "ja": "しゃくねつの炎を\nあやつり､すべてを\nやきつくす！"
        },
        "element": "fire",
        "codes": "F",
        "mb": 62,
        "version": null,
        "stars": 5,
        "damage": 180,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 57,
        "name": {
            "en": "FlamManV4",
            "ja": "フレイムマンV4"
        },
        "description": {
            "en": "Flames\nburn all\nenemies!",
            "ja": "しゃくねつの炎を\nあやつり､すべてを\nやきつくす！"
        },
        "element": "fire",
        "codes": "F",
        "mb": 72,
        "version": null,
        "stars": 5,
        "damage": 210,
        "class": "mega"
    },
    {
        "section": "giga",
        "index": 13,
        "name": {
            "en": "FlamManV5",
            "ja": "フレイムマンV5"
        },
        "description": {
            "en": "Flames\nburn all\nenemies!",
            "ja": "しゃくねつの炎を\nあやつり､すべてを\nやきつくす！"
        },
        "element": "fire",
        "codes": "F",
        "mb": 82,
        "version": null,
        "stars": 5,
        "damage": 240,
        "class": "giga"
    },
    {
        "section": "mega",
        "index": 58,
        "name": {
            "en": "DrillMan",
            "ja": "ドリルマン"
        },
        "description": {
            "en": "3 drills\nfly at\nenemies!",
            "ja": "3つのドリルが\nとつげき､さくがん\nそしてガレキ攻撃！"
        },
        "element": "null",
        "codes": "D",
        "mb": 66,
        "version": null,
        "stars": 3,
        "damage": 70,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 59,
        "name": {
            "en": "DrillMnV2",
            "ja": "ドリルマンV2"
        },
        "description": {
            "en": "3 drills\nfly at\nenemies!",
            "ja": "3つのドリルが\nとつげき､さくがん\nそしてガレキ攻撃！"
        },
        "element": "null",
        "codes": "D",
        "mb": 70,
        "version": null,
        "stars": 4,
        "damage": 90,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 60,
        "name": {
            "en": "DrillMnV3",
            "ja": "ドリルマンV3"
        },
        "description": {
            "en": "3 drills\nfly at\nenemies!",
            "ja": "3つのドリルが\nとつげき､さくがん\nそしてガレキ攻撃！"
        },
        "element": "null",
        "codes": "D",
        "mb": 74,
        "version": null,
        "stars": 5,
        "damage": 110,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 61,
        "name": {
            "en": "DrillMnV4",
            "ja": "ドリルマンV4"
        },
        "description": {
            "en": "3 drills\nfly at\nenemies!",
            "ja": "3つのドリルが\nとつげき､さくがん\nそしてガレキ攻撃！"
        },
        "element": "null",
        "codes": "D",
        "mb": 78,
        "version": null,
        "stars": 5,
        "damage": 130,
        "class": "mega"
    },
    {
        "section": "giga",
        "index": 14,
        "name": {
            "en": "DrillMnV5",
            "ja": "ドリルマンV5"
        },
        "description": {
            "en": "3 drills\nfly at\nenemies!",
            "ja": "3つのドリルが\nとつげき､さくがん\nそしてガレキ攻撃！"
        },
        "element": "null",
        "codes": "D",
        "mb": 82,
        "version": null,
        "stars": 5,
        "damage": 150,
        "class": "giga"
    },
    {
        "section": "mega",
        "index": 62,
        "name": {
            "en": "MetalMan",
            "ja": "メタルマン"
        },
        "description": {
            "en": "Iron fist\nsmashes\n1 square!",
            "ja": "目の前の1マスに\nこうてつのコブシを\nふりおろす！"
        },
        "element": "null",
        "codes": "M",
        "mb": 40,
        "version": null,
        "stars": 3,
        "damage": 100,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 63,
        "name": {
            "en": "MetalMnV2",
            "ja": "メタルマンV2"
        },
        "description": {
            "en": "Iron fist\nsmashes\n1 square!",
            "ja": "目の前の1マスに\nこうてつのコブシを\nふりおろす！"
        },
        "element": "null",
        "codes": "M",
        "mb": 60,
        "version": null,
        "stars": 4,
        "damage": 130,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 64,
        "name": {
            "en": "MetalMnV3",
            "ja": "メタルマンV3"
        },
        "description": {
            "en": "Iron fist\nsmashes\n1 square!",
            "ja": "目の前の1マスに\nこうてつのコブシを\nふりおろす！"
        },
        "element": "null",
        "codes": "M",
        "mb": 70,
        "version": null,
        "stars": 5,
        "damage": 160,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 65,
        "name": {
            "en": "MetalMnV4",
            "ja": "メタルマンV4"
        },
        "description": {
            "en": "Iron fist\nsmashes\n1 square!",
            "ja": "目の前の1マスに\nこうてつのコブシを\nふりおろす！"
        },
        "element": "null",
        "codes": "M",
        "mb": 80,
        "version": null,
        "stars": 5,
        "damage": 190,
        "class": "mega"
    },
    {
        "section": "giga",
        "index": 15,
        "name": {
            "en": "MetalMnV5",
            "ja": "メタルマンV5"
        },
        "description": {
            "en": "Iron fist\nsmashes\n1 square!",
            "ja": "目の前の1マスに\nこうてつのコブシを\nふりおろす！"
        },
        "element": "null",
        "codes": "M",
        "mb": 90,
        "version": null,
        "stars": 5,
        "damage": 250,
        "class": "giga"
    },
    {
        "section": "mega",
        "index": 86,
        "name": {
            "en": "Punk",
            "ja": "パンク"
        },
        "description": {
            "en": "Spins and\nsmashes\nenemies!",
            "ja": "てきめがけて\nかいてんたいあたり\nマッドローラー攻撃"
        },
        "element": "null",
        "codes": "P",
        "mb": 92,
        "version": null,
        "stars": 5,
        "damage": 180,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 5,
        "name": {
            "en": "Salamndr",
            "ja": "サラマンダー"
        },
        "description": {
            "en": "Heat:\nSend Fire\ninto hole",
            "ja": "ヒートせんよう\nあなの方へすすむ\n炎をはっせいさせる"
        },
        "element": "fire",
        "codes": "S*",
        "mb": 50,
        "version": null,
        "stars": 4,
        "damage": 300,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 7,
        "name": {
            "en": "Fountain",
            "ja": "ダイフンスイ"
        },
        "description": {
            "en": "Water:\nDraw wter\nfrom hole",
            "ja": "アクアせんよう\n目の前のあなから\n水が前方へすすむ"
        },
        "element": "aqua",
        "codes": "D*",
        "mb": 48,
        "version": null,
        "stars": 3,
        "damage": 240,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 9,
        "name": {
            "en": "Bolt",
            "ja": "サンダーボルト"
        },
        "description": {
            "en": "Elec:Dmgs\nobject &\narea",
            "ja": "エレキせんよう\nものにらくらい！\nまわりもかんでん！"
        },
        "element": "elec",
        "codes": "T*",
        "mb": 52,
        "version": null,
        "stars": 3,
        "damage": 210,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 11,
        "name": {
            "en": "GaiaBlad",
            "ja": "ガイアブレード"
        },
        "description": {
            "en": "Wood:Take\npower fr.\nnext chip",
            "ja": "ウッドせんよう\n後にえらんだチップ\nの攻撃力をすいとる"
        },
        "element": "wood",
        "codes": "G*",
        "mb": 55,
        "version": null,
        "stars": 4,
        "damage": 100,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 66,
        "name": {
            "en": "KingMan",
            "ja": "キングマン"
        },
        "description": {
            "en": "Move up 3\nsquare &\n4-way hit",
            "ja": "3マス前のあいてる\nマスにとんでいき\n上下左右に攻撃！"
        },
        "element": "null",
        "codes": "K",
        "mb": 36,
        "version": null,
        "stars": 3,
        "damage": 140,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 67,
        "name": {
            "en": "KingManV2",
            "ja": "キングマンV2"
        },
        "description": {
            "en": "Move up 3\nsquare &\n4-way hit",
            "ja": "3マス前のあいてる\nマスにとんでいき\n上下左右に攻撃！"
        },
        "element": "null",
        "codes": "K",
        "mb": 48,
        "version": null,
        "stars": 4,
        "damage": 170,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 68,
        "name": {
            "en": "KingManV3",
            "ja": "キングマンV3"
        },
        "description": {
            "en": "Move up 3\nsquare &\n4-way hit",
            "ja": "3マス前のあいてる\nマスにとんでいき\n上下左右に攻撃！"
        },
        "element": "null",
        "codes": "K",
        "mb": 60,
        "version": null,
        "stars": 5,
        "damage": 200,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 69,
        "name": {
            "en": "KingManV4",
            "ja": "キングマンV4"
        },
        "description": {
            "en": "Move up 3\nsquare &\n4-way hit",
            "ja": "3マス前のあいてる\nマスにとんでいき\n上下左右に攻撃！"
        },
        "element": "null",
        "codes": "K",
        "mb": 72,
        "version": null,
        "stars": 5,
        "damage": 240,
        "class": "mega"
    },
    {
        "section": "giga",
        "index": 16,
        "name": {
            "en": "KingManV5",
            "ja": "キングマンV5"
        },
        "description": {
            "en": "Move up 3\nsquare &\n4-way hit",
            "ja": "3マス前のあいてる\nマスにとんでいき\n上下左右に攻撃！"
        },
        "element": "null",
        "codes": "K",
        "mb": 84,
        "version": null,
        "stars": 5,
        "damage": 280,
        "class": "giga"
    },
    {
        "section": "mega",
        "index": 70,
        "name": {
            "en": "MistMan",
            "ja": "ミストマン"
        },
        "description": {
            "en": "Appears\nfrom mist\n& attacks",
            "ja": "てきの前後にキリが\nあらわれ マジンに\nへんしんしてパンチ"
        },
        "element": "null",
        "codes": "M",
        "mb": 68,
        "version": null,
        "stars": 3,
        "damage": 90,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 71,
        "name": {
            "en": "MistManV2",
            "ja": "ミストマンV2"
        },
        "description": {
            "en": "Appears\nfrom mist\n& attacks",
            "ja": "てきの前後にキリが\nあらわれ マジンに\nへんしんしてパンチ"
        },
        "element": "null",
        "codes": "M",
        "mb": 71,
        "version": null,
        "stars": 4,
        "damage": 110,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 72,
        "name": {
            "en": "MistManV3",
            "ja": "ミストマンV3"
        },
        "description": {
            "en": "Appears\nfrom mist\n& attacks",
            "ja": "てきの前後にキリが\nあらわれ マジンに\nへんしんしてパンチ"
        },
        "element": "null",
        "codes": "M",
        "mb": 74,
        "version": null,
        "stars": 5,
        "damage": 130,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 73,
        "name": {
            "en": "MistManV4",
            "ja": "ミストマンV4"
        },
        "description": {
            "en": "Appears\nfrom mist\n& attacks",
            "ja": "てきの前後にキリが\nあらわれ マジンに\nへんしんしてパンチ"
        },
        "element": "null",
        "codes": "M",
        "mb": 77,
        "version": null,
        "stars": 5,
        "damage": 150,
        "class": "mega"
    },
    {
        "section": "giga",
        "index": 17,
        "name": {
            "en": "MistManV5",
            "ja": "ミストマンV5"
        },
        "description": {
            "en": "Appears\nfrom mist\n& attacks",
            "ja": "てきの前後にキリが\nあらわれ マジンに\nへんしんしてパンチ"
        },
        "element": "null",
        "codes": "M",
        "mb": 80,
        "version": null,
        "stars": 5,
        "damage": 170,
        "class": "giga"
    },
    {
        "section": "mega",
        "index": 74,
        "name": {
            "en": "BowlMan",
            "ja": "ボウルマン"
        },
        "description": {
            "en": "Lines up\npins for\na strike!",
            "ja": "前方のてきとの間に\nピンをならべて\nボウリング攻撃！"
        },
        "element": "null",
        "codes": "B",
        "mb": 80,
        "version": null,
        "stars": 3,
        "damage": 100,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 75,
        "name": {
            "en": "BowlManV2",
            "ja": "ボウルマンV2"
        },
        "description": {
            "en": "Lines up\npins for\na strike!",
            "ja": "前方のてきとの間に\nピンをならべて\nボウリング攻撃！"
        },
        "element": "null",
        "codes": "B",
        "mb": 82,
        "version": null,
        "stars": 4,
        "damage": 120,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 76,
        "name": {
            "en": "BowlManV3",
            "ja": "ボウルマンV3"
        },
        "description": {
            "en": "Lines up\npins for\na strike!",
            "ja": "前方のてきとの間に\nピンをならべて\nボウリング攻撃！"
        },
        "element": "null",
        "codes": "B",
        "mb": 84,
        "version": null,
        "stars": 5,
        "damage": 140,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 77,
        "name": {
            "en": "BowlManV4",
            "ja": "ボウルマンV4"
        },
        "description": {
            "en": "Lines up\npins for\na strike!",
            "ja": "前方のてきとの間に\nピンをならべて\nボウリング攻撃！"
        },
        "element": "null",
        "codes": "B",
        "mb": 86,
        "version": null,
        "stars": 5,
        "damage": 160,
        "class": "mega"
    },
    {
        "section": "giga",
        "index": 18,
        "name": {
            "en": "BowlManV5",
            "ja": "ボウルマンV5"
        },
        "description": {
            "en": "Lines up\npins for\na strike!",
            "ja": "前方のてきとの間に\nピンをならべて\nボウリング攻撃！"
        },
        "element": "null",
        "codes": "B",
        "mb": 88,
        "version": null,
        "stars": 5,
        "damage": 180,
        "class": "giga"
    },
    {
        "section": "mega",
        "index": 78,
        "name": {
            "en": "DarkMan",
            "ja": "ダークマン"
        },
        "description": {
            "en": "Creates 3\ncaves in\nenmy area",
            "ja": "てきエリアのはしに\n3つのどうくつ！\nくろいツバサ攻撃！"
        },
        "element": "null",
        "codes": "D",
        "mb": 72,
        "version": null,
        "stars": 3,
        "damage": 30,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 79,
        "name": {
            "en": "DarkManV2",
            "ja": "ダークマンV2"
        },
        "description": {
            "en": "Creates 3\ncaves in\nenmy area",
            "ja": "てきエリアのはしに\n3つのどうくつ！\nくろいツバサ攻撃！"
        },
        "element": "null",
        "codes": "D",
        "mb": 76,
        "version": null,
        "stars": 4,
        "damage": 30,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 80,
        "name": {
            "en": "DarkManV3",
            "ja": "ダークマンV3"
        },
        "description": {
            "en": "Creates 3\ncaves in\nenmy area",
            "ja": "てきエリアのはしに\n3つのどうくつ！\nくろいツバサ攻撃！"
        },
        "element": "null",
        "codes": "D",
        "mb": 80,
        "version": null,
        "stars": 5,
        "damage": 30,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 81,
        "name": {
            "en": "DarkManV4",
            "ja": "ダークマンV4"
        },
        "description": {
            "en": "Creates 3\ncaves in\nenmy area",
            "ja": "てきエリアのはしに\n3つのどうくつ！\nくろいツバサ攻撃！"
        },
        "element": "null",
        "codes": "D",
        "mb": 84,
        "version": null,
        "stars": 5,
        "damage": 30,
        "class": "mega"
    },
    {
        "section": "giga",
        "index": 19,
        "name": {
            "en": "DarkManV5",
            "ja": "ダークマンV5"
        },
        "description": {
            "en": "Creates 3\ncaves in\nenmy area",
            "ja": "てきエリアのはしに\n3つのどうくつ！\nくろいツバサ攻撃！"
        },
        "element": "null",
        "codes": "D",
        "mb": 88,
        "version": null,
        "stars": 5,
        "damage": 30,
        "class": "giga"
    },
    {
        "section": "mega",
        "index": 82,
        "name": {
            "en": "JapanMan",
            "ja": "ヤマトマン"
        },
        "description": {
            "en": "Multiple\nattacks\nw/ spear",
            "ja": "ひゃくれつスピアと\nさんだんスピアの\nれんぞく攻撃！"
        },
        "element": "null",
        "codes": "Y",
        "mb": 82,
        "version": null,
        "stars": 3,
        "damage": 40,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 83,
        "name": {
            "en": "JapanMnV2",
            "ja": "ヤマトマンV2"
        },
        "description": {
            "en": "Multiple\nattacks\nw/ spear",
            "ja": "ひゃくれつスピアと\nさんだんスピアの\nれんぞく攻撃！"
        },
        "element": "null",
        "codes": "Y",
        "mb": 85,
        "version": null,
        "stars": 4,
        "damage": 45,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 84,
        "name": {
            "en": "JapanMnV3",
            "ja": "ヤマトマンV3"
        },
        "description": {
            "en": "Multiple\nattacks\nw/ spear",
            "ja": "ひゃくれつスピアと\nさんだんスピアの\nれんぞく攻撃！"
        },
        "element": "null",
        "codes": "Y",
        "mb": 88,
        "version": null,
        "stars": 5,
        "damage": 50,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 85,
        "name": {
            "en": "JapanMnV4",
            "ja": "ヤマトマンV4"
        },
        "description": {
            "en": "Multiple\nattacks\nw/ spear",
            "ja": "ひゃくれつスピアと\nさんだんスピアの\nれんぞく攻撃！"
        },
        "element": "null",
        "codes": "Y",
        "mb": 91,
        "version": null,
        "stars": 5,
        "damage": 55,
        "class": "mega"
    },
    {
        "section": "giga",
        "index": 20,
        "name": {
            "en": "JapanMnV5",
            "ja": "ヤマトマンV5"
        },
        "description": {
            "en": "Multiple\nattacks\nw/ spear",
            "ja": "ひゃくれつスピアと\nさんだんスピアの\nれんぞく攻撃！"
        },
        "element": "null",
        "codes": "Y",
        "mb": 94,
        "version": null,
        "stars": 5,
        "damage": 60,
        "class": "giga"
    },
    {
        "section": "giga",
        "index": 4,
        "name": {
            "en": "DeltaRay",
            "ja": "デルタレイエッジ"
        },
        "description": {
            "en": "Use A btn\nfor up to\n3 attacks",
            "ja": "きりつけるときに\nAボタンでさいこう\n3だんのソード攻撃"
        },
        "element": "null",
        "codes": "Z",
        "mb": 92,
        "version": "blue",
        "stars": 5,
        "damage": 220,
        "class": "giga"
    },
    {
        "section": "giga",
        "index": 1,
        "name": {
            "en": "FoldrBak",
            "ja": "フォルダリターン"
        },
        "description": {
            "en": "Restores\nall chips\n& folders",
            "ja": "つかったチップが\nふっかつしフォルダ\nが30枚にもどる！"
        },
        "element": "null",
        "codes": "*",
        "mb": 99,
        "version": "blue",
        "stars": 5,
        "damage": null,
        "class": "giga"
    },
    {
        "section": "giga",
        "index": 1,
        "name": {
            "en": "NavRcycl",
            "ja": "ナビリサイクル"
        },
        "description": {
            "en": "Recalls\nlast Navi\nused",
            "ja": "ちょくぜんに\nつかわれたナビを\nもういちどよび出す"
        },
        "element": "null",
        "codes": "*",
        "mb": 50,
        "version": "white",
        "stars": 5,
        "damage": null,
        "class": "giga"
    },
    {
        "section": "giga",
        "index": 5,
        "name": {
            "en": "AlphArmΣ",
            "ja": "プロトアームΣ"
        },
        "description": {
            "en": "3-stage\nelectric\nattack!",
            "ja": "よみがえるあくむ！\nプロトの3れつ\n電撃攻撃！"
        },
        "element": "null",
        "codes": "V",
        "mb": 97,
        "version": "white",
        "stars": 5,
        "damage": 50,
        "class": "giga"
    },
    {
        "section": "giga",
        "index": 2,
        "name": {
            "en": "Bass",
            "ja": "フォルテ"
        },
        "description": {
            "en": "Dark chip\nExplodes\nfor 3 sq",
            "ja": "やみのチップ\nたて3れつに\nエクスプロージョン"
        },
        "element": "null",
        "codes": "X",
        "mb": 98,
        "version": "white",
        "stars": 5,
        "damage": 90,
        "class": "giga"
    },
    {
        "section": "giga",
        "index": 3,
        "name": {
            "en": "Serenade",
            "ja": "セレナード"
        },
        "description": {
            "en": "Dark chip\nHoly pwr\nto front",
            "ja": "やみのチップ\n前方のくうかんに\nホーリーパワー攻撃"
        },
        "element": "null",
        "codes": "S",
        "mb": 97,
        "version": "white",
        "stars": 5,
        "damage": 100,
        "class": "giga"
    },
    {
        "section": "giga",
        "index": 4,
        "name": {
            "en": "Balance",
            "ja": "リョウセイバイ"
        },
        "description": {
            "en": "Both HP\nreduced\nby half!",
            "ja": "りょうしゃともに\nてんばつがくだり\nHPがはんぶんに！"
        },
        "element": "null",
        "codes": "Y",
        "mb": 60,
        "version": "white",
        "stars": 5,
        "damage": null,
        "class": "giga"
    },
    {
        "section": "giga",
        "index": 3,
        "name": {
            "en": "DarkAura",
            "ja": "ダークネスオーラ"
        },
        "description": {
            "en": "Dark chip\nrepels\n<300 atks",
            "ja": "やみのチップ\n攻撃力が300より\nひくい攻撃をふせぐ"
        },
        "element": "null",
        "codes": "A",
        "mb": 55,
        "version": "blue",
        "stars": 5,
        "damage": null,
        "class": "giga"
    },
    {
        "section": "giga",
        "index": 5,
        "name": {
            "en": "AlphArmΩ",
            "ja": "プロトアームΩ"
        },
        "description": {
            "en": "Launches\na giant\nrocket!",
            "ja": "よみがえるあくむ！\nプロトのきょだい\nロケットはっしん！"
        },
        "element": "null",
        "codes": "V",
        "mb": 97,
        "version": "blue",
        "stars": 5,
        "damage": 500,
        "class": "giga"
    },
    {
        "section": "giga",
        "index": 2,
        "name": {
            "en": "Bass+",
            "ja": "フォルテアナザー"
        },
        "description": {
            "en": "Dark chip\nSmashes\npanels!",
            "ja": "やみのチップ\nパネルごとこわす\nアースブレイカー！"
        },
        "element": "null",
        "codes": "X",
        "mb": 98,
        "version": "blue",
        "stars": 5,
        "damage": 550,
        "class": "giga"
    },
    {
        "section": "giga",
        "index": 2,
        "name": {
            "en": "BassGS",
            "ja": "フォルテGS"
        },
        "description": {
            "en": "Bass'\nsecret\nweapon",
            "ja": "ゴスペルのパワーを\nとりこんだフォルテ\nのリーサルウエポン"
        },
        "element": "null",
        "codes": "X",
        "mb": 99,
        "version": null,
        "stars": 5,
        "damage": 700,
        "class": "giga"
    },
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
        "section": "pa",
        "index": 1,
        "name": {
            "en": "Z-Canon1",
            "ja": "ゼータキャノン1"
        },
        "description": {
            "en": "Unlimited\nCannon\nfor 5 sec",
            "ja": "5びょうかん\nキャノンが\nうちほうだい！"
        },
        "pa": [
            [
                {
                    "id": 1,
                    "variant": 0
                },
                {
                    "id": 1,
                    "variant": 1
                },
                {
                    "id": 1,
                    "variant": 2
                }
            ],
            [
                {
                    "id": 1,
                    "variant": 1
                },
                {
                    "id": 1,
                    "variant": 2
                },
                {
                    "id": 1,
                    "variant": 3
                }
            ],
            [
                {
                    "id": 1,
                    "variant": 2
                },
                {
                    "id": 1,
                    "variant": 3
                },
                {
                    "id": 1,
                    "variant": 4
                }
            ]
        ],
        "damage": 40
    },
    {
        "section": "pa",
        "index": 2,
        "name": {
            "en": "Z-Canon2",
            "ja": "ゼータキャノン2"
        },
        "description": {
            "en": "Unlimited\nHiCannon\nfor 5 sec",
            "ja": "5びょうかん\nハイキャノンが\nうちほうだい！"
        },
        "pa": [
            [
                {
                    "id": 2,
                    "variant": 0
                },
                {
                    "id": 2,
                    "variant": 1
                },
                {
                    "id": 2,
                    "variant": 2
                }
            ],
            [
                {
                    "id": 2,
                    "variant": 1
                },
                {
                    "id": 2,
                    "variant": 2
                },
                {
                    "id": 2,
                    "variant": 3
                }
            ],
            [
                {
                    "id": 2,
                    "variant": 2
                },
                {
                    "id": 2,
                    "variant": 3
                },
                {
                    "id": 2,
                    "variant": 4
                }
            ]
        ],
        "damage": 60
    },
    {
        "section": "pa",
        "index": 3,
        "name": {
            "en": "Z-Canon3",
            "ja": "ゼータキャノン3"
        },
        "description": {
            "en": "Unlimited\nMegaCanon\nfor 5 sec",
            "ja": "5びょうかん\nメガキャノンが\nうちほうだい！"
        },
        "pa": [
            [
                {
                    "id": 3,
                    "variant": 0
                },
                {
                    "id": 3,
                    "variant": 1
                },
                {
                    "id": 3,
                    "variant": 2
                }
            ],
            [
                {
                    "id": 3,
                    "variant": 1
                },
                {
                    "id": 3,
                    "variant": 2
                },
                {
                    "id": 3,
                    "variant": 3
                }
            ],
            [
                {
                    "id": 3,
                    "variant": 2
                },
                {
                    "id": 3,
                    "variant": 3
                },
                {
                    "id": 3,
                    "variant": 4
                }
            ]
        ],
        "damage": 80
    },
    {
        "section": "pa",
        "index": 4,
        "name": {
            "en": "Z-Punch",
            "ja": "ゼータパンチ"
        },
        "description": {
            "en": "Unlimited\nGutPunch\nfor 5 sec",
            "ja": "5びょうかん\nガッツパンチが\nうちほうだい！"
        },
        "pa": [
            [
                {
                    "id": 47,
                    "variant": 0
                },
                {
                    "id": 47,
                    "variant": 1
                },
                {
                    "id": 47,
                    "variant": 2
                }
            ],
            [
                {
                    "id": 47,
                    "variant": 1
                },
                {
                    "id": 47,
                    "variant": 2
                },
                {
                    "id": 47,
                    "variant": 3
                }
            ],
            [
                {
                    "id": 47,
                    "variant": 2
                },
                {
                    "id": 47,
                    "variant": 3
                },
                {
                    "id": 47,
                    "variant": 4
                }
            ]
        ],
        "damage": 80
    },
    {
        "section": "pa",
        "index": 5,
        "name": {
            "en": "Z-Strght",
            "ja": "ゼータストレート"
        },
        "description": {
            "en": "Unlimited\nGutStrgt\nfor 5 sec",
            "ja": "5びょうかん\nガッツストレートが\nうちほうだい！"
        },
        "pa": [
            [
                {
                    "id": 48,
                    "variant": 0
                },
                {
                    "id": 48,
                    "variant": 1
                },
                {
                    "id": 48,
                    "variant": 2
                }
            ],
            [
                {
                    "id": 48,
                    "variant": 1
                },
                {
                    "id": 48,
                    "variant": 2
                },
                {
                    "id": 48,
                    "variant": 3
                }
            ],
            [
                {
                    "id": 48,
                    "variant": 2
                },
                {
                    "id": 48,
                    "variant": 3
                },
                {
                    "id": 48,
                    "variant": 4
                }
            ]
        ],
        "damage": 100
    },
    {
        "section": "pa",
        "index": 6,
        "name": {
            "en": "Z-Impact",
            "ja": "ゼータインパクト"
        },
        "description": {
            "en": "Unlimited\nGutImpct\nfor 5 sec",
            "ja": "5びょうかん\nガッツインパクトが\nうちほうだい！"
        },
        "pa": [
            [
                {
                    "id": 49,
                    "variant": 0
                },
                {
                    "id": 49,
                    "variant": 1
                },
                {
                    "id": 49,
                    "variant": 2
                }
            ],
            [
                {
                    "id": 49,
                    "variant": 1
                },
                {
                    "id": 49,
                    "variant": 2
                },
                {
                    "id": 49,
                    "variant": 3
                }
            ],
            [
                {
                    "id": 49,
                    "variant": 2
                },
                {
                    "id": 49,
                    "variant": 3
                },
                {
                    "id": 49,
                    "variant": 4
                }
            ]
        ],
        "damage": 160
    },
    {
        "section": "pa",
        "index": 7,
        "name": {
            "en": "Z-Varibl",
            "ja": "ゼータバリアブル"
        },
        "description": {
            "en": "Unlimited\nVarSwrd\nfor 5 sec",
            "ja": "5びょうかん\nバリアブルソードが\nつかいほうだい！"
        },
        "pa": [
            [
                {
                    "id": 38,
                    "variant": 0
                },
                {
                    "id": 38,
                    "variant": 1
                },
                {
                    "id": 38,
                    "variant": 2
                }
            ],
            [
                {
                    "id": 38,
                    "variant": 1
                },
                {
                    "id": 38,
                    "variant": 2
                },
                {
                    "id": 38,
                    "variant": 3
                }
            ],
            [
                {
                    "id": 38,
                    "variant": 2
                },
                {
                    "id": 38,
                    "variant": 3
                },
                {
                    "id": 38,
                    "variant": 4
                }
            ]
        ],
        "damage": 160
    },
    {
        "section": "pa",
        "index": 8,
        "name": {
            "en": "Z-Yoyo1",
            "ja": "ゼータヨーヨー1"
        },
        "description": {
            "en": "Unlimited\nYo-Yo\nfor 5 sec",
            "ja": "5びょうかん\nヨーヨー1が\nうちほうだい！"
        },
        "pa": [
            [
                {
                    "id": 69,
                    "variant": 0
                },
                {
                    "id": 69,
                    "variant": 1
                },
                {
                    "id": 69,
                    "variant": 2
                }
            ],
            [
                {
                    "id": 69,
                    "variant": 1
                },
                {
                    "id": 69,
                    "variant": 2
                },
                {
                    "id": 69,
                    "variant": 3
                }
            ],
            [
                {
                    "id": 69,
                    "variant": 2
                },
                {
                    "id": 69,
                    "variant": 3
                },
                {
                    "id": 69,
                    "variant": 4
                }
            ]
        ],
        "damage": 40
    },
    {
        "section": "pa",
        "index": 9,
        "name": {
            "en": "Z-Yoyo2",
            "ja": "ゼータヨーヨー2"
        },
        "description": {
            "en": "Unlimited\nYo-Yo2\nfor 5 sec",
            "ja": "5びょうかん\nヨーヨー2が\nうちほうだい！"
        },
        "pa": [
            [
                {
                    "id": 70,
                    "variant": 0
                },
                {
                    "id": 70,
                    "variant": 1
                },
                {
                    "id": 70,
                    "variant": 2
                }
            ],
            [
                {
                    "id": 70,
                    "variant": 1
                },
                {
                    "id": 70,
                    "variant": 2
                },
                {
                    "id": 70,
                    "variant": 3
                }
            ],
            [
                {
                    "id": 70,
                    "variant": 2
                },
                {
                    "id": 70,
                    "variant": 3
                },
                {
                    "id": 70,
                    "variant": 4
                }
            ]
        ],
        "damage": 50
    },
    {
        "section": "pa",
        "index": 10,
        "name": {
            "en": "Z-Yoyo3",
            "ja": "ゼータヨーヨー3"
        },
        "description": {
            "en": "Unlimited\nYo-Yo3\nfor 5 sec",
            "ja": "5びょうかん\nヨーヨー3が\nうちほうだい！"
        },
        "pa": [
            [
                {
                    "id": 71,
                    "variant": 0
                },
                {
                    "id": 71,
                    "variant": 1
                },
                {
                    "id": 71,
                    "variant": 2
                }
            ],
            [
                {
                    "id": 71,
                    "variant": 1
                },
                {
                    "id": 71,
                    "variant": 2
                },
                {
                    "id": 71,
                    "variant": 3
                }
            ],
            [
                {
                    "id": 71,
                    "variant": 2
                },
                {
                    "id": 71,
                    "variant": 3
                },
                {
                    "id": 71,
                    "variant": 4
                }
            ]
        ],
        "damage": 60
    },
    {
        "section": "pa",
        "index": 11,
        "name": {
            "en": "Z-Step1",
            "ja": "ゼータフミコミ1"
        },
        "description": {
            "en": "Unlimited\nStepSwrd\nfor 5 sec",
            "ja": "5びょうかん\nフミコミザンが\nつかいほうだい！"
        },
        "pa": [
            [
                {
                    "id": 39,
                    "variant": 0
                },
                {
                    "id": 39,
                    "variant": 1
                },
                {
                    "id": 39,
                    "variant": 2
                }
            ],
            [
                {
                    "id": 39,
                    "variant": 1
                },
                {
                    "id": 39,
                    "variant": 2
                },
                {
                    "id": 39,
                    "variant": 3
                }
            ],
            [
                {
                    "id": 39,
                    "variant": 2
                },
                {
                    "id": 39,
                    "variant": 3
                },
                {
                    "id": 39,
                    "variant": 4
                }
            ]
        ],
        "damage": 130
    },
    {
        "section": "pa",
        "index": 12,
        "name": {
            "en": "Z-Step2",
            "ja": "ゼータフミコミ2"
        },
        "description": {
            "en": "Unlimited\nStepCros\nfor 5 sec",
            "ja": "5びょうかん\nフミコミクロスが\nつかいほうだい！"
        },
        "pa": [
            [
                {
                    "id": 40,
                    "variant": 0
                },
                {
                    "id": 40,
                    "variant": 1
                },
                {
                    "id": 40,
                    "variant": 2
                }
            ],
            [
                {
                    "id": 40,
                    "variant": 1
                },
                {
                    "id": 40,
                    "variant": 2
                },
                {
                    "id": 40,
                    "variant": 3
                }
            ],
            [
                {
                    "id": 40,
                    "variant": 2
                },
                {
                    "id": 40,
                    "variant": 3
                },
                {
                    "id": 40,
                    "variant": 4
                }
            ]
        ],
        "damage": 130
    },
    {
        "section": "pa",
        "index": 20,
        "name": {
            "en": "TimeBom+",
            "ja": "ギガカウントボム"
        },
        "description": {
            "en": "Sets Time\nBomb in\nenmy area",
            "ja": "あいてエリアに\nギガカウントボムを\nおく！"
        },
        "pa": [
            [
                {
                    "id": 99,
                    "variant": 0
                },
                {
                    "id": 99,
                    "variant": 1
                },
                {
                    "id": 99,
                    "variant": 2
                }
            ],
            [
                {
                    "id": 99,
                    "variant": 1
                },
                {
                    "id": 99,
                    "variant": 2
                },
                {
                    "id": 99,
                    "variant": 3
                }
            ],
            [
                {
                    "id": 99,
                    "variant": 2
                },
                {
                    "id": 99,
                    "variant": 3
                },
                {
                    "id": 99,
                    "variant": 4
                }
            ]
        ],
        "damage": 500
    },
    {
        "section": "pa",
        "index": 15,
        "name": {
            "en": "H-Burst",
            "ja": "ハイパーバースト"
        },
        "description": {
            "en": "Creates\na giant\nexplosion",
            "ja": "まわり1マスに\nばくふうがひろがる\nさくれつだん！"
        },
        "pa": [
            [
                {
                    "id": 13,
                    "variant": 0
                },
                {
                    "id": 13,
                    "variant": 1
                },
                {
                    "id": 13,
                    "variant": 2
                }
            ],
            [
                {
                    "id": 13,
                    "variant": 1
                },
                {
                    "id": 13,
                    "variant": 2
                },
                {
                    "id": 13,
                    "variant": 3
                }
            ],
            [
                {
                    "id": 13,
                    "variant": 2
                },
                {
                    "id": 13,
                    "variant": 3
                },
                {
                    "id": 13,
                    "variant": 4
                }
            ]
        ],
        "damage": 100
    },
    {
        "section": "pa",
        "index": 13,
        "name": {
            "en": "BubSprd",
            "ja": "バブルスプレッド"
        },
        "description": {
            "en": "Attks w/\nspreading\nbubbles!",
            "ja": "まわり1マスに\nあわがひろがる\nこうはんい攻撃！"
        },
        "pa": [
            [
                {
                    "id": 14,
                    "variant": 1
                },
                {
                    "id": 14,
                    "variant": 2
                },
                {
                    "id": 14,
                    "variant": 3
                }
            ],
            [
                {
                    "id": 15,
                    "variant": 0
                },
                {
                    "id": 15,
                    "variant": 1
                },
                {
                    "id": 15,
                    "variant": 2
                }
            ],
            [
                {
                    "id": 16,
                    "variant": 1
                },
                {
                    "id": 16,
                    "variant": 2
                },
                {
                    "id": 16,
                    "variant": 3
                }
            ],
            [
                {
                    "id": 14,
                    "variant": 3
                },
                {
                    "id": 15,
                    "variant": 1
                },
                {
                    "id": 16,
                    "variant": 1
                }
            ]
        ],
        "damage": 300
    },
    {
        "section": "pa",
        "index": 14,
        "name": {
            "en": "HeatSprd",
            "ja": "ヒートスプレッド"
        },
        "description": {
            "en": "Attks w/\nspreading\nfireball!",
            "ja": "まわり1マスに\nばくえんがひろがる\nこうはんい攻撃！"
        },
        "pa": [
            [
                {
                    "id": 17,
                    "variant": 1
                },
                {
                    "id": 17,
                    "variant": 2
                },
                {
                    "id": 17,
                    "variant": 3
                }
            ],
            [
                {
                    "id": 18,
                    "variant": 1
                },
                {
                    "id": 18,
                    "variant": 2
                },
                {
                    "id": 18,
                    "variant": 3
                }
            ],
            [
                {
                    "id": 19,
                    "variant": 1
                },
                {
                    "id": 19,
                    "variant": 2
                },
                {
                    "id": 19,
                    "variant": 3
                }
            ],
            [
                {
                    "id": 17,
                    "variant": 3
                },
                {
                    "id": 18,
                    "variant": 2
                },
                {
                    "id": 19,
                    "variant": 1
                }
            ]
        ],
        "damage": 300
    },
    {
        "section": "pa",
        "index": 16,
        "name": {
            "en": "LifeSwrd",
            "ja": "ドリームソード"
        },
        "description": {
            "en": "Swings a\nhuge 2x3\nsword!",
            "ja": "よこ2たて3の\nきょだいソードで\nてきをぶったぎる！"
        },
        "pa": [
            [
                {
                    "id": 30,
                    "variant": 0
                },
                {
                    "id": 31,
                    "variant": 1
                },
                {
                    "id": 32,
                    "variant": 0
                }
            ],
            [
                {
                    "id": 30,
                    "variant": 2
                },
                {
                    "id": 31,
                    "variant": 2
                },
                {
                    "id": 32,
                    "variant": 2
                }
            ],
            [
                {
                    "id": 30,
                    "variant": 4
                },
                {
                    "id": 31,
                    "variant": 4
                },
                {
                    "id": 32,
                    "variant": 4
                }
            ]
        ],
        "damage": 400
    },
    {
        "section": "pa",
        "index": 17,
        "name": {
            "en": "ElemSwrd",
            "ja": "エレメントソード"
        },
        "description": {
            "en": "Wide swrd\ncontains\n4 elemnts",
            "ja": "4つの属性の\nワイドソードで\nれんぞくぎり！"
        },
        "pa": [
            [
                {
                    "id": 33,
                    "variant": 1
                },
                {
                    "id": 34,
                    "variant": 2
                },
                {
                    "id": 35,
                    "variant": 2
                },
                {
                    "id": 36,
                    "variant": 2
                }
            ],
            [
                {
                    "id": 33,
                    "variant": 2
                },
                {
                    "id": 34,
                    "variant": 3
                },
                {
                    "id": 35,
                    "variant": 3
                },
                {
                    "id": 36,
                    "variant": 3
                }
            ]
        ],
        "damage": 150
    },
    {
        "section": "pa",
        "index": 18,
        "name": {
            "en": "EvilCut",
            "ja": "アクレツザン"
        },
        "description": {
            "en": "Step up 2\n& make 4\nattacks!",
            "ja": "2マス前へふみこみ\n4かいれんぞくで\nアクをきりつける！"
        },
        "pa": [
            [
                {
                    "id": 39,
                    "variant": 4
                },
                {
                    "id": 207,
                    "variant": 0
                },
                {
                    "id": 40,
                    "variant": 0
                }
            ]
        ],
        "damage": 150
    },
    {
        "section": "pa",
        "index": 30,
        "name": {
            "en": "2xHero",
            "ja": "ダブルヒーロー"
        },
        "description": {
            "en": "MegaMan &\nProtoMan\ndual atk",
            "ja": "ロックマンと\nブルースのがったい\n攻撃！"
        },
        "pa": [
            [
                {
                    "id": 43,
                    "variant": 0
                },
                {
                    "id": 37,
                    "variant": 0
                },
                {
                    "id": 38,
                    "variant": 0
                },
                {
                    "id": 227,
                    "variant": 0
                }
            ],
            [
                {
                    "id": 43,
                    "variant": 0
                },
                {
                    "id": 37,
                    "variant": 0
                },
                {
                    "id": 38,
                    "variant": 0
                },
                {
                    "id": 228,
                    "variant": 0
                }
            ],
            [
                {
                    "id": 43,
                    "variant": 0
                },
                {
                    "id": 37,
                    "variant": 0
                },
                {
                    "id": 38,
                    "variant": 0
                },
                {
                    "id": 229,
                    "variant": 0
                }
            ],
            [
                {
                    "id": 43,
                    "variant": 0
                },
                {
                    "id": 37,
                    "variant": 0
                },
                {
                    "id": 38,
                    "variant": 0
                },
                {
                    "id": 230,
                    "variant": 0
                }
            ]
        ],
        "damage": 70
    },
    {
        "section": "pa",
        "index": 19,
        "name": {
            "en": "HyperRat",
            "ja": "ハイパーラットン"
        },
        "description": {
            "en": "A giant\nRatton\ncharges!",
            "ja": "きょだいラットンが\nもうとっしんする！"
        },
        "pa": [
            [
                {
                    "id": 58,
                    "variant": 0
                },
                {
                    "id": 59,
                    "variant": 0
                },
                {
                    "id": 60,
                    "variant": 0
                }
            ],
            [
                {
                    "id": 58,
                    "variant": 1
                },
                {
                    "id": 59,
                    "variant": 1
                },
                {
                    "id": 60,
                    "variant": 1
                }
            ],
            [
                {
                    "id": 58,
                    "variant": 2
                },
                {
                    "id": 59,
                    "variant": 2
                },
                {
                    "id": 60,
                    "variant": 2
                }
            ]
        ],
        "damage": 500
    },
    {
        "section": "pa",
        "index": 22,
        "name": {
            "en": "EverCrse",
            "ja": "エンドレスカース"
        },
        "description": {
            "en": "Shield\nchases\nenemies",
            "ja": "のろいのたてが\nてきをひたすら\nおいつづける"
        },
        "pa": [
            [
                {
                    "id": 104,
                    "variant": 1
                },
                {
                    "id": 105,
                    "variant": 1
                },
                {
                    "id": 106,
                    "variant": 0
                }
            ],
            [
                {
                    "id": 104,
                    "variant": 3
                },
                {
                    "id": 105,
                    "variant": 2
                },
                {
                    "id": 106,
                    "variant": 2
                }
            ]
        ],
        "damage": 100
    },
    {
        "section": "pa",
        "index": 21,
        "name": {
            "en": "GelRain",
            "ja": "レイニングゼリー"
        },
        "description": {
            "en": "Gel\nsteals\nsquares",
            "ja": "パネルをぬりかえる\nゼリーがあめのよう\nにふりそそぐ"
        },
        "pa": [
            [
                {
                    "id": 133,
                    "variant": 0
                },
                {
                    "id": 133,
                    "variant": 1
                },
                {
                    "id": 133,
                    "variant": 2
                }
            ],
            [
                {
                    "id": 134,
                    "variant": 0
                },
                {
                    "id": 134,
                    "variant": 1
                },
                {
                    "id": 134,
                    "variant": 2
                }
            ],
            [
                {
                    "id": 135,
                    "variant": 2
                },
                {
                    "id": 135,
                    "variant": 3
                },
                {
                    "id": 135,
                    "variant": 4
                }
            ]
        ],
        "damage": 150
    },
    {
        "section": "pa",
        "index": 24,
        "name": {
            "en": "PoisPhar",
            "ja": "ポイズンファラオ"
        },
        "description": {
            "en": "Pharaoh\ngenerates\npoison",
            "ja": "てきエリアにどくを\nはっせいさせる\nファラオぞうをおく"
        },
        "pa": [
            [
                {
                    "id": 108,
                    "variant": 0
                },
                {
                    "id": 109,
                    "variant": 0
                },
                {
                    "id": 204,
                    "variant": 0
                }
            ]
        ],
        "damage": null
    },
    {
        "section": "pa",
        "index": 25,
        "name": {
            "en": "BodyGrd",
            "ja": "ボディガード"
        },
        "description": {
            "en": "Bodyguard\ntakes out\nenemies",
            "ja": "ウラのあんさつしゃ\nをやとい てきを\nはいじょしてもらう"
        },
        "pa": [
            [
                {
                    "id": 191,
                    "variant": 3
                },
                {
                    "id": 190,
                    "variant": 1
                },
                {
                    "id": 202,
                    "variant": 0
                }
            ]
        ],
        "damage": 100
    },
    {
        "section": "pa",
        "index": 26,
        "name": {
            "en": "500Barr",
            "ja": "500バリア"
        },
        "description": {
            "en": "Barrier\nabsorbs\n500HP dmg",
            "ja": "500HP分の\nダメージまでたえる\nバリア！"
        },
        "pa": [
            [
                {
                    "id": 173,
                    "variant": 1
                },
                {
                    "id": 174,
                    "variant": 0
                },
                {
                    "id": 175,
                    "variant": 0
                }
            ],
            [
                {
                    "id": 173,
                    "variant": 3
                },
                {
                    "id": 174,
                    "variant": 3
                },
                {
                    "id": 175,
                    "variant": 3
                }
            ]
        ],
        "damage": 0
    },
    {
        "section": "pa",
        "index": 27,
        "name": {
            "en": "BigHeart",
            "ja": "ビッグハート"
        },
        "description": {
            "en": "Attacks,\nthen\nheals HP!",
            "ja": "てきを攻撃したあと\nきょだいなハートで\nHPをかいふく！"
        },
        "pa": [
            [
                {
                    "id": 178,
                    "variant": 3
                },
                {
                    "id": 128,
                    "variant": 1
                },
                {
                    "id": 219,
                    "variant": 0
                }
            ],
            [
                {
                    "id": 178,
                    "variant": 3
                },
                {
                    "id": 128,
                    "variant": 1
                },
                {
                    "id": 220,
                    "variant": 0
                }
            ],
            [
                {
                    "id": 178,
                    "variant": 3
                },
                {
                    "id": 128,
                    "variant": 1
                },
                {
                    "id": 221,
                    "variant": 0
                }
            ]
        ],
        "damage": 50
    },
    {
        "section": "pa",
        "index": 28,
        "name": {
            "en": "GtsShoot",
            "ja": "ガッツシュート"
        },
        "description": {
            "en": "GutsMan\nthrows\nMegaMan!",
            "ja": "ガッツマンが\nロックマンをなげる\nたいあたり攻撃！"
        },
        "pa": [
            [
                {
                    "id": 118,
                    "variant": 0
                },
                {
                    "id": 53,
                    "variant": 2
                },
                {
                    "id": 222,
                    "variant": 0
                }
            ],
            [
                {
                    "id": 118,
                    "variant": 0
                },
                {
                    "id": 53,
                    "variant": 2
                },
                {
                    "id": 223,
                    "variant": 0
                }
            ],
            [
                {
                    "id": 118,
                    "variant": 0
                },
                {
                    "id": 53,
                    "variant": 2
                },
                {
                    "id": 224,
                    "variant": 0
                }
            ],
            [
                {
                    "id": 118,
                    "variant": 0
                },
                {
                    "id": 53,
                    "variant": 2
                },
                {
                    "id": 225,
                    "variant": 0
                }
            ]
        ],
        "damage": 300
    },
    {
        "section": "pa",
        "index": 29,
        "name": {
            "en": "DeuxHero",
            "ja": "ダプルヒーロー"
        },
        "description": {
            "en": "MegaMan &\nProtoMan\nteam up!",
            "ja": "ロックマンと\nブルースのがったい\n攻撃！"
        },
        "pa": [
            [
                {
                    "id": 37,
                    "variant": 0
                },
                {
                    "id": 38,
                    "variant": 0
                },
                {
                    "id": 227,
                    "variant": 0
                }
            ],
            [
                {
                    "id": 37,
                    "variant": 0
                },
                {
                    "id": 38,
                    "variant": 0
                },
                {
                    "id": 228,
                    "variant": 0
                }
            ],
            [
                {
                    "id": 37,
                    "variant": 0
                },
                {
                    "id": 38,
                    "variant": 0
                },
                {
                    "id": 229,
                    "variant": 0
                }
            ],
            [
                {
                    "id": 37,
                    "variant": 0
                },
                {
                    "id": 38,
                    "variant": 0
                },
                {
                    "id": 230,
                    "variant": 0
                }
            ]
        ],
        "damage": 70
    },
    {
        "section": "pa",
        "index": 23,
        "name": {
            "en": "MomQuake",
            "ja": "マザーズクエイク"
        },
        "description": {
            "en": "Awakens\nMother\nEarth!",
            "ja": "だいちのいかりが\nじしんをおこし\nらくせき攻撃！"
        },
        "pa": [
            [
                {
                    "id": 141,
                    "variant": 5
                },
                {
                    "id": 141,
                    "variant": 5
                },
                {
                    "id": 209,
                    "variant": 0
                }
            ]
        ],
        "damage": 200
    },
    {
        "section": "pa",
        "index": 31,
        "name": {
            "en": "PrixPowr",
            "ja": "グランプリパワー"
        },
        "description": {
            "en": "3 Navis\nattack\nat once!",
            "ja": "3たいのナビの\nゆめのきょうえん！"
        },
        "pa": [
            [
                {
                    "id": 132,
                    "variant": 5
                },
                {
                    "id": 169,
                    "variant": 5
                },
                {
                    "id": 281,
                    "variant": 0
                }
            ],
            [
                {
                    "id": 132,
                    "variant": 5
                },
                {
                    "id": 169,
                    "variant": 5
                },
                {
                    "id": 286,
                    "variant": 0
                }
            ],
            [
                {
                    "id": 132,
                    "variant": 5
                },
                {
                    "id": 169,
                    "variant": 5
                },
                {
                    "id": 291,
                    "variant": 0
                }
            ]
        ],
        "damage": 600
    },
    {
        "section": "pa",
        "index": 32,
        "name": {
            "en": "MstrStyl",
            "ja": "マスタースタイル"
        },
        "description": {
            "en": "MegaMan\nunleashes\nhis power",
            "ja": "ロックマンの\nすべてのパワーを\nほうしゅつする！"
        },
        "pa": [
            [
                {
                    "id": 273,
                    "variant": 1
                },
                {
                    "id": 274,
                    "variant": 1
                },
                {
                    "id": 275,
                    "variant": 1
                },
                {
                    "id": 276,
                    "variant": 1
                }
            ]
        ],
        "damage": 100
    }
];