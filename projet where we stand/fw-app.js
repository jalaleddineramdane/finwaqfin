// ═══════════════════════════════════════════════════════════
//  فين واقفين؟ — fw-app.js
//  Fixed: all French apostrophes use backtick strings
// ═══════════════════════════════════════════════════════════

// ─── PARTY DATA ─────────────────────────────────────────────
const PARTIES = {
  RNI: {
    name: 'التجمع الوطني للأحرار',
    nameFr: 'Rassemblement National des Indépendants',
    abbr: 'RNI', founded: 1978, color: '#0891B2', website: 'https://rni.ma',
    orientation: 'يمين-وسط', orientationFr: 'Centre-droit', orientationClass: 'tag-center-right',
    role: 'حكومة (قيادة)', roleFr: 'Gouvernement (coalition)', roleClass: 'gov',
    desc: 'يقود الائتلاف الحكومي الحالي. يركز على الاقتصاد الليبرالي والتحديث والانفتاح الدولي وتنمية القطاع الخاص.',
    descFr: `Dirige la coalition gouvernementale. Accent sur l'économie libérale, modernisation et développement du secteur privé.`,
    economy: 'اقتصاد ليبرالي، تشجيع الاستثمار الخاص، شراكات دولية، مليون منصب شغل.',
    education: 'رقمنة التعليم، رفع رواتب المعلمين، التكوين المهني.',
    health: 'التأمين الصحي الشامل، شراكات عامة-خاصة، رقمنة الخدمات الصحية.',
    youth: 'دعم ريادة الأعمال، المبادرة الوطنية للتنمية البشرية، برامج التدريب.',
    environment: 'النمو الأخضر، الطاقة الشمسية والريحية، استراتيجية الطاقات المتجددة 2030.',
    governance: 'الإصلاح الرقمي، تيسير الإجراءات الإدارية، إصلاحات انتخابية معلنة.'
  },
  PAM: {
    name: 'الأصالة والمعاصرة',
    nameFr: `Authenticité et Modernité`,
    abbr: 'PAM', founded: 2008, color: '#D97706', website: 'https://pam.ma',
    orientation: 'وسط', orientationFr: 'Centre', orientationClass: 'tag-center',
    role: 'حكومة', roleFr: 'Gouvernement', roleClass: 'gov',
    desc: 'حزب وسطي تحديثي يجمع بين الأصالة المغربية والانفتاح المعاصر. يولي اهتمامًا بالغًا لتمكين المرأة وحقوق الإنسان.',
    descFr: `Parti moderniste conjuguant authenticité marocaine et ouverture contemporaine. Accent sur les droits des femmes.`,
    economy: 'تحديث اقتصادي براغماتي، مناخ الاستثمار، اللامركزية، دعم المقاولة.',
    education: 'تحديث المنظومة التعليمية، تمكين المرأة، إدماج الشباب.',
    health: 'إصلاح المستشفيات، الوصول عبر اللامركزية، الطب الريفي.',
    youth: 'التمثيلية الشبابية، الحوكمة المحلية، دعم المجتمع المدني.',
    environment: 'التحول الطاقوي، وزير الطاقة من PAM، دعم الأجندة الوطنية للطاقات المتجددة.',
    governance: 'الحوكمة الجيدة، "ميثاق الشرف"، اللامركزية، محاربة الفساد.'
  },
  PI: {
    name: 'حزب الاستقلال',
    nameFr: `Parti de l'Istiqlal`,
    abbr: 'PI', founded: 1944, color: '#196F3D', website: 'https://istiqlal.org.ma',
    orientation: 'يمين-وسط', orientationFr: 'Centre-droit', orientationClass: 'tag-center-right',
    role: 'حكومة', roleFr: 'Gouvernement', roleClass: 'gov',
    desc: 'أقدم أحزاب المغرب وأعرقها، أسس عام 1944. يجمع بين المرجعية الوطنية والإسلامية. يدعم اقتصادًا مختلطًا مع حماية اجتماعية قوية.',
    descFr: `Le plus ancien parti du Maroc fondé en 1944. Économie mixte avec forte protection sociale.`,
    economy: 'اقتصاد مختلط يوازن القطاع الخاص والحماية الاجتماعية. نقد للميزانية، الدفاع عن القدرة الشرائية.',
    education: 'أولوية قصوى. "سنة 2025 للتطوع". ميثاق وطني للشباب في التشغيل والتعليم والسكن.',
    health: 'الوصول المتساوي للفئات الهشة، المناطق النائية. انتقاد وتيرة تطبيق الإصلاحات.',
    youth: 'الميثاق الوطني للشباب. الشباب ركيزة التنمية. التشغيل والتكوين والمشاركة السياسية.',
    environment: 'متكامل: توازن اقتصادي-اجتماعي-بيئي. اهتمام بالجفاف وتدبير الماء.',
    governance: 'محاسبة الحكومة. نقد مفصّل للميزانية. دفاع تاريخي عن محاربة الفساد.'
  },
  PJD: {
    name: 'العدالة والتنمية',
    nameFr: 'Justice et Développement',
    abbr: 'PJD', founded: 1998, color: '#7D3C98', website: 'https://pjd.ma',
    orientation: 'وسط-ديمقراطي إسلامي', orientationFr: 'Centre (démocratie islamique)', orientationClass: 'tag-center',
    role: 'معارضة', roleFr: 'Opposition', roleClass: 'opp',
    desc: 'حزب ديمقراطي إسلامي قاد الحكومة بين 2011 و2021. يتبنى قيم الشفافية ومحاربة الفساد والهوية الإسلامية-الديمقراطية للمغرب.',
    descFr: 'Parti démocratique islamique ayant dirigé le gouvernement 2011-2021. Valeurs de transparence et identité islamique.',
    economy: 'اقتصاد مختلط: تحرير مع شبكات حماية اجتماعية. دعم المقاولات الصغيرة والتحويلات المباشرة.',
    education: 'قضية محورية. التعليم العمومي الجيد. حملات إنسانية للأطفال في المناطق القروية.',
    health: 'الصحة حق أساسي. دعم الفئات الهشة وتوسيع التغطية الصحية. تخفيض أسعار الأدوية.',
    youth: 'التكوين المهني، برامج المرافقة. التشبيب السياسي. الشباب في قلب الخطاب.',
    environment: 'دعم عام للبيئة دون أولوية قصوى. التنمية المستدامة ضمن رؤية شاملة.',
    governance: 'هوية المحاسبة والشفافية. متطلبات الحضور والمساءلة. محاربة الفساد ثوابت راسخة.'
  },
  USFP: {
    name: 'الاتحاد الاشتراكي للقوات الشعبية',
    nameFr: 'Union Socialiste des Forces Populaires',
    abbr: 'USFP', founded: 1975, color: '#C0392B', website: 'https://usfp.ma',
    orientation: 'يسار-وسط', orientationFr: 'Centre-gauche', orientationClass: 'tag-center-left',
    role: 'معارضة', roleFr: 'Opposition', roleClass: 'opp',
    desc: 'الحزب الاشتراكي التاريخي للمغرب. يؤمن بدولة الرفاه والعدالة الاجتماعية وحقوق العمال. مقرون تاريخيًا بنقابة CDT.',
    descFr: `Parti socialiste historique. Croit en l'État-providence et la justice sociale. Lié au syndicat CDT.`,
    economy: 'ديمقراطية اجتماعية: أسواق منظمة، دور محوري للقطاع العام في الفلاحة والطاقة المتجددة.',
    education: 'مدافع قوي عن التعليم العمومي. دعم المعلمين والطلاب. رفع الميزانية التعليمية.',
    health: 'صحة عمومية متينة، تغطية شاملة. الأولوية للإنفاق العام على الخاص.',
    youth: 'حصص الشباب، الإدماج السياسي. سياسات اجتماعية للشباب العاطل.',
    environment: 'اليسار الأخضر: دور القطاع العام في الطاقات المتجددة. 2025: التنمية المستدامة والعدالة الاجتماعية.',
    governance: 'المشاركة المدنية وحقوق المواطن. تجديد المشروع الاشتراكي الديمقراطي.'
  },
  MP: {
    name: 'الحركة الشعبية',
    nameFr: 'Mouvement Populaire',
    abbr: 'MP', founded: 1957, color: '#1F618D', website: 'https://mouvementpopulaire.ma',
    orientation: 'وسط', orientationFr: 'Centre', orientationClass: 'tag-center',
    role: 'معارضة', roleFr: 'Opposition', roleClass: 'opp',
    desc: 'حزب عريق يمثل الأمازيغ والوسط القروي. يضع التنمية الريفية وتشجيع الفلاحة والبنى التحتية في صميم برنامجه.',
    descFr: 'Parti historique représentant les Amazighs et le monde rural. Développement rural, agriculture et infrastructure.',
    economy: 'الفلاحة والتنمية القروية. الاقتصاد الاجتماعي. التمويل الميكروي. الجهوية المتقدمة.',
    education: 'التعليم في المناطق القروية. التكوين المهني الفلاحي. إدماج اللغة الأمازيغية.',
    health: 'الصحة في الأرياف. المستشفيات الإقليمية. الخدمات الصحية النائية.',
    youth: 'التكوين المهني. الفلاحة الشبابية. التشغيل في المناطق القروية.',
    environment: 'إدارة الماء والجفاف. الفلاحة المستدامة. المحافظة على الموارد الطبيعية.',
    governance: 'اللامركزية والجهوية المتقدمة. الديمقراطية المحلية. تمثيلية القرى والبوادي.'
  },
  PPS: {
    name: 'حزب التقدم والاشتراكية',
    nameFr: 'Parti du Progrès et du Socialisme',
    abbr: 'PPS', founded: 1974, color: '#E74C3C', website: 'https://pps.ma',
    orientation: 'يسار', orientationFr: 'Gauche', orientationClass: 'tag-left',
    role: 'معارضة', roleFr: 'Opposition', roleClass: 'opp',
    desc: 'حزب يساري تقدمي تاريخي. يدافع عن العدالة الاجتماعية والبيئة وحقوق الإنسان والتعددية الثقافية.',
    descFr: `Parti progressiste de gauche. Défend la justice sociale, l'environnement et les droits humains.`,
    economy: 'يسار تقدمي: دور مركزي للدولة، تنظيم الأسواق، إعادة التوزيع الاجتماعي.',
    education: 'التعليم العمومي المجاني والجيد. محاربة الأمية. التعليم الشامل والتعددي.',
    health: 'حق دستوري. الصحة العمومية. إشراك المجتمع في الصحة.',
    youth: 'حصص الشباب والنساء. التمثيلية السياسية. دعم منظمات الشباب.',
    environment: 'بيئة في صميم البرنامج. الطاقات المتجددة. التنمية المستدامة والعدالة البيئية.',
    governance: 'المشاركة المواطنة. حرية الصحافة. دولة القانون. حقوق الإنسان.'
  },
  UC: {
    name: 'الاتحاد الدستوري',
    nameFr: 'Union Constitutionnelle',
    abbr: 'UC', founded: 1983, color: '#2C3E50', website: 'https://unionconstitutionnelle.ma',
    orientation: 'وسط-يمين', orientationFr: 'Centre-droit', orientationClass: 'tag-center-right',
    role: 'معارضة', roleFr: 'Opposition', roleClass: 'opp',
    desc: 'حزب ليبرالي معتدل يُعلي من شأن الاقتصاد الحر والاستقرار المؤسسي. يمثل قطاع الأعمال والطبقة المتوسطة الحضرية.',
    descFr: `Parti libéral modéré. Économie de marché, stabilité institutionnelle, classe moyenne urbaine.`,
    economy: 'الاقتصاد الحر، مناخ الأعمال، الاستقرار المؤسسي، جذب الاستثمارات.',
    education: 'التعليم كاستثمار للتنمية. الجامعة والبحث العلمي. الكفاءات.',
    health: 'الشراكات عامة-خاصة. الإدارة الجيدة للمؤسسات الصحية.',
    youth: 'ريادة الأعمال. المقاولة الشبابية. بيئة الأعمال المحفزة.',
    environment: 'التنمية المستدامة في الإطار الاقتصادي. الطاقات النظيفة للتنافسية.',
    governance: 'الاستقرار المؤسسي. دولة القانون. الإدارة العقلانية.'
  }
};

// ─── QUIZ DATA ───────────────────────────────────────────────
// ALL French strings use backticks to safely handle apostrophes
const QUIZ_QUESTIONS = [
  {
    topic: '💼 الاقتصاد', topicFr: 'Économie', icon: '💼',
    q: 'ما هو النهج الأنسب لتحفيز الاقتصاد الوطني وخلق فرص الشغل؟',
    qFr: `Quelle approche économique vous semble la plus appropriée pour stimuler l'emploi ?`,
    answers: [
      { t: 'تحرير السوق وتشجيع الاستثمار الخاص والشراكات الدولية',
        tFr: `Libéralisation du marché, investissement privé et partenariats internationaux`,
        w: {RNI:3, PAM:2, UC:3} },
      { t: 'اقتصاد مختلط يجمع بين القطاع الخاص والحماية الاجتماعية',
        tFr: `Économie mixte combinant secteur privé et forte protection sociale`,
        w: {PI:3, PJD:2, MP:2, USFP:1} },
      { t: 'دور محوري للدولة في الاقتصاد مع تنظيم قوي للأسواق',
        tFr: `Rôle central de l'État dans l'économie avec forte régulation des marchés`,
        w: {USFP:3, PPS:3, PI:1} },
      { t: 'التنمية القروية والفلاحة كركيزة للاقتصاد الوطني',
        tFr: `Développement rural et agriculture comme pilier de l'économie nationale`,
        w: {MP:3, PI:2, PJD:1} }
    ]
  },
  {
    topic: '📚 التعليم', topicFr: 'Éducation', icon: '📚',
    q: 'ما الذي يجب أن يكون أولوية في منظومة التعليم الوطنية؟',
    qFr: `Quelle devrait être la priorité du système éducatif national ?`,
    answers: [
      { t: 'الرقمنة والمهارات التكنولوجية وربط التعليم بالمقاولة',
        tFr: `Numérisation, compétences technologiques et lien avec l'entrepreneuriat`,
        w: {RNI:3, PAM:2, UC:2} },
      { t: 'التعليم العمومي المجاني والجيد لجميع المغاربة',
        tFr: `Enseignement public gratuit et de qualité pour tous les Marocains`,
        w: {USFP:3, PPS:3, PJD:2} },
      { t: 'التكوين المهني وربطه المباشر بسوق الشغل',
        tFr: `Formation professionnelle directement liée au marché du travail`,
        w: {MP:3, RNI:2, UC:2} },
      { t: 'تعزيز الهوية الثقافية واللغوية في المناهج الدراسية',
        tFr: `Renforcement de l'identité culturelle et linguistique dans les programmes`,
        w: {PI:3, PJD:2, MP:2} }
    ]
  },
  {
    topic: '🏥 الصحة', topicFr: 'Santé', icon: '🏥',
    multiSelect: true,
    q: 'ما النهج الأمثل لتطوير منظومة الرعاية الصحية في المغرب؟',
    qFr: `Quelle approche pour améliorer le système de santé au Maroc ?`,
    answers: [
      { t: 'تأمين صحي شامل عبر شراكات عامة-خاصة وتكنولوجيا الصحة',
        tFr: `Assurance universelle via partenariats public-privé et e-santé`,
        w: {RNI:3, PAM:2, UC:2} },
      { t: 'منظومة صحة عمومية قوية وتغطية شاملة لجميع المواطنين',
        tFr: `Système de santé public fort et couverture universelle des citoyens`,
        w: {USFP:3, PPS:3, PJD:2} },
      { t: 'الأولوية للمناطق القروية والفئات الهشة والمستضعفة',
        tFr: `Priorité aux zones rurales et aux populations vulnérables`,
        w: {MP:3, PI:2, PJD:2} },
      { t: 'الطب الوقائي ورقمنة الخدمات الصحية',
        tFr: `Médecine préventive et numérisation des services de santé`,
        w: {PAM:3, RNI:2, UC:2} }
    ]
  },
  {
    topic: '🌿 البيئة', topicFr: 'Environnement', icon: '🌿',
    q: 'كيف يجب على المغرب أن يتعامل مع قضايا البيئة والتغير المناخي؟',
    qFr: `Comment le Maroc devrait-il aborder les questions environnementales et climatiques ?`,
    answers: [
      { t: 'الاستثمار في الطاقات المتجددة كمحرك للنمو الاقتصادي',
        tFr: `Investissement dans les énergies renouvelables comme moteur de croissance`,
        w: {RNI:3, PAM:2, PPS:2} },
      { t: 'إدارة مستدامة للموارد المائية والزراعة في مواجهة الجفاف',
        tFr: `Gestion durable des ressources hydriques et agriculture face à la sécheresse`,
        w: {MP:3, PI:2, USFP:2} },
      { t: 'التوازن بين التنمية الاقتصادية وحماية البيئة',
        tFr: `Équilibre entre développement économique et protection environnementale`,
        w: {PI:2, PJD:2, UC:2, USFP:2} },
      { t: 'العدالة البيئية: حماية المجتمعات الأكثر تضررًا من التغير المناخي',
        tFr: `Justice environnementale pour les communautés les plus touchées par le climat`,
        w: {PPS:3, USFP:3, PJD:1} }
    ]
  },
  {
    topic: '👥 الشباب والتشغيل', topicFr: 'Jeunesse & Emploi', icon: '👥',
    multiSelect: true,
    q: 'ما الحل الأنجع لمعالجة البطالة في صفوف الشباب المغربي؟',
    qFr: `Quelle est la meilleure solution pour combattre le chômage des jeunes Marocains ?`,
    answers: [
      { t: 'تحفيز ريادة الأعمال وبيئة الإبداع والمقاولة الشبابية',
        tFr: `Encourager l'entrepreneuriat et créer un écosystème favorable à l'innovation`,
        w: {RNI:3, PAM:2, UC:3} },
      { t: 'الاستثمار في القطاع العام والوظيفة العمومية كرافعة للتشغيل',
        tFr: `Investissement dans le secteur public comme levier principal d'emploi`,
        w: {USFP:3, PPS:2, PJD:2} },
      { t: 'برامج التكوين المهني والتدريب المرافَق',
        tFr: `Programmes de formation professionnelle et d'apprentissage accompagné`,
        w: {MP:3, PI:2, PJD:2} },
      { t: 'ضمان حصص وتمثيلية الشباب في القرار الاقتصادي والسياسي',
        tFr: `Garantir des quotas de représentation des jeunes dans les décisions`,
        w: {PPS:3, USFP:2, PI:1} }
    ]
  },
  {
    topic: '🏛️ الحوكمة', topicFr: 'Gouvernance', icon: '🏛️',
    q: 'ما الذي يجب أن يكون أولوية في مجال الحوكمة والمؤسسات؟',
    qFr: `Quelle devrait être la priorité en matière de gouvernance et d'institutions ?`,
    answers: [
      { t: 'رقمنة الإدارة وتيسير الخدمات العمومية بالتكنولوجيا',
        tFr: `Numérisation de l'administration et simplification des services publics`,
        w: {RNI:3, PAM:2, UC:2} },
      { t: 'تعزيز المحاسبة والشفافية في المال العام ومكافحة الفساد',
        tFr: `Renforcer la responsabilité et la transparence dans la gestion des finances`,
        w: {PJD:3, PI:2, USFP:2} },
      { t: 'الجهوية المتقدمة واللامركزية كرافعة للتنمية المحلية',
        tFr: `Régionalisation avancée et décentralisation comme levier de développement local`,
        w: {MP:3, PI:2, PAM:1, USFP:2} },
      { t: 'تعزيز المشاركة المواطنة وتوسيع الحضور الشعبي في القرار',
        tFr: `Renforcer la participation citoyenne et la démocratie participative`,
        w: {PPS:3, USFP:3, PI:2} }
    ]
  },
  {
    topic: '⚖️ القيم الاجتماعية', topicFr: 'Valeurs sociales', icon: '⚖️',
    q: 'ما الذي تعتبره أولوية في مجال القيم والسياسات الاجتماعية؟',
    qFr: `Quelle est votre priorité en matière de valeurs et politiques sociales ?`,
    answers: [
      { t: 'الحريات الفردية والحقوق المدنية وتوسيع الحريات العامة',
        tFr: `Libertés individuelles, droits civils et élargissement des libertés publiques`,
        w: {PAM:3, USFP:2, PPS:3} },
      { t: 'الهوية الإسلامية والتماسك الأسري والقيم المغربية الأصيلة',
        tFr: `Identité islamique, cohésion familiale et valeurs marocaines authentiques`,
        w: {PJD:3, PI:2, MP:2} },
      { t: 'المساواة بين الجنسين وتمكين المرأة في جميع المجالات',
        tFr: `Égalité des genres et autonomisation des femmes dans tous les domaines`,
        w: {PAM:3, USFP:3, PPS:3} },
      { t: 'التعددية الثقافية والهوية الأمازيغية والتنوع الثقافي المغربي',
        tFr: `Pluralisme culturel, identité amazighe et diversité culturelle marocaine`,
        w: {MP:3, PAM:2, USFP:2, PPS:2} }
    ]
  },
  {
    topic: '💻 التحول الرقمي', topicFr: 'Transformation numérique', icon: '💻',
    q: 'ما الذي يجب إعطاؤه الأولوية في مجال التحول الرقمي؟',
    qFr: `Quelle priorité pour la transformation numérique du Maroc ?`,
    answers: [
      { t: 'الخدمات الحكومية الرقمية والإدارة الإلكترونية للمواطنين',
        tFr: `Services gouvernementaux numériques et e-administration citoyenne`,
        w: {RNI:3, PAM:2, UC:2} },
      { t: 'الإدماج الرقمي للمناطق النائية والفئات الأقل حظًا',
        tFr: `Inclusion numérique des zones rurales et des populations défavorisées`,
        w: {MP:3, PPS:2, USFP:2} },
      { t: 'السيادة الرقمية وحماية البيانات الشخصية للمغاربة',
        tFr: `Souveraineté numérique et protection des données personnelles des Marocains`,
        w: {PI:1, PJD:1, PPS:2} },
      { t: 'مراكز الابتكار والمجمعات التكنولوجية لريادة الأعمال',
        tFr: `Hubs d'innovation et pôles technologiques pour l'entrepreneuriat`,
        w: {RNI:3, PAM:3, UC:3} }
    ]
  },
  {
    topic: '🏘️ السكن والبنية التحتية', topicFr: 'Logement & Infrastructure', icon: '🏘️',
    q: 'ما النهج الأنسب لمعالجة أزمة السكن والبنية التحتية في المغرب؟',
    qFr: `Quelle approche pour traiter la crise du logement et des infrastructures ?`,
    answers: [
      { t: 'سوق العقار الحر مع تسهيل الإجراءات أمام المستثمرين',
        tFr: `Marché immobilier libre avec simplification des procédures pour les investisseurs`,
        w: {RNI:2, PAM:2, UC:3} },
      { t: 'برامج السكن الاجتماعي العمومي لضمان حق السكن للجميع',
        tFr: `Programmes publics de logement social pour garantir le droit au logement`,
        w: {USFP:3, PPS:3, PJD:2} },
      { t: 'البنية التحتية في المناطق القروية: الطرق والماء والكهرباء',
        tFr: `Infrastructures rurales: routes, eau et électricité pour les campagnes`,
        w: {MP:3, PI:2, PJD:1} },
      { t: 'التخطيط العمراني الذكي والمدن المستدامة وجودة الحياة',
        tFr: `Urbanisme intelligent, villes durables et amélioration de la qualité de vie`,
        w: {RNI:3, PAM:2, UC:2} }
    ]
  },
  {
    topic: '🌍 الأولويات الوطنية', topicFr: 'Priorités nationales', icon: '🌍',
    multiSelect: true,
    q: 'ما أبرز الأولويات التي تراها لمستقبل المغرب؟',
    qFr: `Quelles sont les priorités que vous voyez pour l'avenir du Maroc ?`,
    answers: [
      { t: 'التحديث الاقتصادي واستقطاب الاستثمارات الأجنبية',
        tFr: `Modernisation économique et attraction des investissements étrangers`,
        w: {RNI:3, PAM:2, UC:3} },
      { t: 'تقليص الفوارق الاجتماعية والإقليمية وتحقيق العدالة الاجتماعية',
        tFr: `Réduire les inégalités sociales et régionales, réaliser la justice sociale`,
        w: {USFP:3, PPS:3, PJD:2} },
      { t: 'الهوية الثقافية والسيادة الوطنية والدفاع عن مصالح المغرب',
        tFr: `Identité culturelle, souveraineté nationale et défense des intérêts du Maroc`,
        w: {PI:3, PJD:2, MP:2} },
      { t: 'الجهوية المتقدمة واللامركزية لخلق مغرب متوازن في تنميته',
        tFr: `Régionalisation avancée pour un Maroc équilibré dans son développement`,
        w: {MP:3, PI:2, USFP:2, PAM:1} }
    ]
  },

];

// ─── STATE ───────────────────────────────────────────────────
let currentQ = 0;
let userAnswers = new Array(QUIZ_QUESTIONS.length).fill(null);
let selectedParties = [];

// ─── INIT ────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function() {
  // Restore in-progress quiz from sessionStorage
  var savedQ = sessionStorage.getItem('fwInProgressQ');
  var savedA = sessionStorage.getItem('fwInProgressA');
  if (savedQ !== null && savedA !== null) {
    try {
      var restoredQ = parseInt(savedQ, 10);
      var restoredA = JSON.parse(savedA);
      if (!isNaN(restoredQ) && Array.isArray(restoredA) && restoredA.length === QUIZ_QUESTIONS.length) {
        currentQ = restoredQ;
        userAnswers = restoredA;
      }
    } catch(e) { /* ignore corrupt data */ }
  }

  renderQuestion();
  renderPartyChips();
  renderPartyCards();
  startCounters();
  setupNavHighlight();
  initHeroMap();
  initCursorGlow();
  initScrollProgress();
  initEntranceAnimations();
  initTypewriter();
  loadPreviousResult();
  renderTimeline();
  initFirebase();

  // ── Keyboard navigation for quiz ──
  document.addEventListener('keydown', function(e) {
    // Don't hijack keyboard when user is typing in an input/textarea
    var tag = document.activeElement ? document.activeElement.tagName : '';
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
    // Only active when quiz body is visible (not results screen)
    var quizBody = document.getElementById('quizBody');
    if (!quizBody) return;

    var key = e.key.toUpperCase();
    var answerMap = { 'A': 0, 'B': 1, 'C': 2, 'D': 3 };
    if (answerMap.hasOwnProperty(key)) {
      var btns = document.querySelectorAll('.answer-btn');
      if (btns[answerMap[key]]) {
        e.preventDefault();
        selectAnswer(answerMap[key]);
      }
    } else if (e.key === 'Enter') {
      var nb = document.getElementById('btnNext');
      if (nb && !nb.disabled) { e.preventDefault(); nextQuestion(); }
    } else if (e.key === 'Backspace') {
      var pb = document.getElementById('btnPrev');
      if (pb) { e.preventDefault(); prevQuestion(); }
    }
  });
});

// ─── QUIZ ────────────────────────────────────────────────────
function renderQuestion() {
  var qData = QUIZ_QUESTIONS[currentQ];
  var total = QUIZ_QUESTIONS.length;
  var isFr  = document.body.classList.contains('lang-fr');
  var pct = Math.round((currentQ + 1) / total * 100);

  document.getElementById('progressCount').textContent = (currentQ + 1) + '/' + total;
  var pfEl = document.getElementById('progressFill');
  if (pfEl) pfEl.style.width = pct + '%';
  var ring = document.getElementById('progressRing');
  if (ring) ring.style.strokeDashoffset = (163.36 - pct / 100 * 163.36).toFixed(2);

  var isMulti = !!qData.multiSelect;
  // For multi-select, userAnswers[currentQ] is an array; for single, it's a number
  var cur = userAnswers[currentQ]; // null | number | number[]

  var noticeHtml = isMulti
    ? '<div class="multi-notice">✦ يمكنك اختيار إجابتين كحد أقصى · <em>Vous pouvez choisir jusqu\'à 2 réponses</em></div>'
    : '';

  var letters   = ['أ', 'ب', 'ج', 'د'];
  var answersHtml = '';
  qData.answers.forEach(function(a, i) {
    var isSel = isMulti
      ? (Array.isArray(cur) && cur.indexOf(i) !== -1)
      : cur === i;
    var sel = isSel ? ' selected' : '';
    answersHtml += '<button class="answer-btn' + sel + '" onclick="selectAnswer(' + i + ')" role="radio" aria-checked="' + (isSel ? 'true' : 'false') + '" aria-label="' + (isFr ? (a.tFr || a.t) : a.t) + '">' +
      '<span class="answer-letter">' + letters[i] + '</span>' +
      '<span class="answer-text">' + a.t + '<br><small class="q-text-fr" style="font-weight:400;opacity:0.65;">' + (a.tFr || '') + '</small></span>' +
      '</button>';
  });

  var hasAnswer = isMulti ? (Array.isArray(cur) && cur.length > 0) : cur !== null;
  var disabled = hasAnswer ? '' : ' disabled';
  var nextLabel = currentQ < total - 1
    ? '<span class="ar-only">السؤال التالي ←</span><span class="fr-only">Suivant →</span>'
    : '<span class="ar-only">عرض النتائج ✓</span><span class="fr-only">Voir les résultats ✓</span>';
  var prevBtn = currentQ > 0
    ? '<button class="btn-prev" onclick="prevQuestion()"><span class="ar-only">← السابق</span><span class="fr-only">← Précédent</span></button>'
    : '';

  var exData = (typeof QUIZ_EXPLAINS !== 'undefined') ? QUIZ_EXPLAINS[currentQ] : null;
  var explainHtml = exData
    ? '<details class="q-explain"><summary><span class="ar-only">💡 لماذا يهم هذا السؤال؟</span><span class="fr-only">💡 Pourquoi cette question&#8239;?</span></summary>' +
      '<p class="q-explain-text"><span class="ar-only">' + exData.ar + '</span><span class="fr-only">' + exData.fr + '</span></p></details>'
    : '';

  document.getElementById('quizBody').innerHTML =
    '<div class="q-header-row"><span class="q-num-badge">' + (currentQ + 1) + '<span class="q-num-total">/' + total + '</span></span><div class="q-topic">' + (isFr && qData.topicFr ? qData.icon + ' ' + qData.topicFr : qData.topic) + '</div></div>' +
    '<div class="q-text">' + qData.q + '</div>' +
    '<div class="q-text-fr">' + (qData.qFr || '') + '</div>' +
    noticeHtml +
    '<div class="answers-grid">' + answersHtml + '</div>' +
    explainHtml +
    '<div class="quiz-nav">' +
      '<button class="btn-next" id="btnNext" onclick="nextQuestion()"' + disabled + '>' + nextLabel + '</button>' +
      prevBtn +
    '</div>';
}

function selectAnswer(idx) {
  var qData = QUIZ_QUESTIONS[currentQ];
  if (qData.multiSelect) {
    var arr = Array.isArray(userAnswers[currentQ]) ? userAnswers[currentQ].slice() : [];
    var pos = arr.indexOf(idx);
    if (pos !== -1) {
      arr.splice(pos, 1); // deselect
    } else {
      if (arr.length < 2) arr.push(idx); // select if under limit
    }
    userAnswers[currentQ] = arr;
    var btns = document.querySelectorAll('.answer-btn');
    for (var i = 0; i < btns.length; i++) {
      btns[i].className = 'answer-btn' + (arr.indexOf(i) !== -1 ? ' selected' : '');
    }
    var nextBtn = document.getElementById('btnNext');
    if (nextBtn) nextBtn.disabled = arr.length === 0;
  } else {
    userAnswers[currentQ] = idx;
    var btns2 = document.querySelectorAll('.answer-btn');
    for (var j = 0; j < btns2.length; j++) {
      btns2[j].className = 'answer-btn' + (j === idx ? ' selected' : '');
    }
    var nb = document.getElementById('btnNext');
    if (nb) nb.disabled = false;
  }
  // Persist in-progress state
  try {
    sessionStorage.setItem('fwInProgressQ', currentQ);
    sessionStorage.setItem('fwInProgressA', JSON.stringify(userAnswers));
  } catch(e) {}
}

function nextQuestion() {
  var ans = userAnswers[currentQ];
  if (ans === null || (Array.isArray(ans) && ans.length === 0)) return;
  if (currentQ < QUIZ_QUESTIONS.length - 1) {
    currentQ++;
    renderQuestion();
  } else {
    showResults();
  }
}

function prevQuestion() {
  if (currentQ > 0) {
    currentQ--;
    renderQuestion();
  }
}

function showResults() {
  // Clear in-progress quiz state — quiz is complete
  try { sessionStorage.removeItem('fwInProgressQ'); sessionStorage.removeItem('fwInProgressA'); } catch(e) {}
  // Calculate raw scores
  var scores = {};
  var maxPossible = {};
  Object.keys(PARTIES).forEach(function(p) { scores[p] = 0; maxPossible[p] = 0; });

  // Max possible score per party
  QUIZ_QUESTIONS.forEach(function(q) {
    Object.keys(PARTIES).forEach(function(p) {
      var maxW = 0;
      q.answers.forEach(function(a) { if ((a.w[p] || 0) > maxW) maxW = a.w[p] || 0; });
      // For multi-select: max is top-2 answers combined
      if (q.multiSelect) {
        var weights = q.answers.map(function(a) { return a.w[p] || 0; });
        weights.sort(function(a, b) { return b - a; });
        maxW = (weights[0] || 0) + (weights[1] || 0);
      }
      maxPossible[p] += maxW;
    });
  });

  // Add scores from chosen answers (handles both single and multi-select)
  QUIZ_QUESTIONS.forEach(function(q, qi) {
    var ans = userAnswers[qi];
    if (ans === null || ans === undefined) return;
    var indices = Array.isArray(ans) ? ans : [ans];
    indices.forEach(function(idx) {
      var chosen = q.answers[idx];
      if (!chosen) return;
      Object.keys(chosen.w).forEach(function(p) {
        scores[p] = (scores[p] || 0) + chosen.w[p];
      });
    });
  });

  // Calculate percentages
  var pcts = {};
  Object.keys(PARTIES).forEach(function(p) {
    pcts[p] = maxPossible[p] > 0 ? Math.round(scores[p] / maxPossible[p] * 100) : 0;
  });

  // Sort descending
  var sorted = Object.keys(pcts).sort(function(a, b) { return pcts[b] - pcts[a]; });
  var topKey = sorted[0];
  var topParty = PARTIES[topKey];

  // Hide quiz, show results
  document.getElementById('quizBody').style.display = 'none';
  document.getElementById('progressContainer').style.display = 'none';
  var resultsDiv = document.getElementById('quizResults');
  resultsDiv.style.display = 'block';

  var barsHtml = '';
  sorted.forEach(function(p) {
    var pct = pcts[p];
    barsHtml +=
      '<div class="result-row">' +
        '<div class="result-party-name">' + PARTIES[p].abbr + '</div>' +
        '<div class="result-bar-track">' +
          '<div class="result-bar-fill" style="width:0%;background:' + PARTIES[p].color + ';" id="rb_' + p + '"></div>' +
        '</div>' +
        '<div class="result-pct" style="color:' + PARTIES[p].color + ';">' + pct + '%</div>' +
      '</div>';
  });

  resultsDiv.innerHTML =
    '<div class="result-top-badge" style="border-color:' + topParty.color + ';background:' + topParty.color + '18;">' +
      '<div class="rtb-icon" style="color:' + topParty.color + ';">✦</div>' +
      '<div>' +
        '<div class="rtb-label">الحزب الأكثر توافقاً مع قيمك · Parti le plus compatible</div>' +
        '<div class="rtb-name" style="color:' + topParty.color + ';">' + topParty.name + ' (' + topKey + ') — ' + pcts[topKey] + '%</div>' +
      '</div>' +
    '</div>' +
    '<div class="results-title">نتائج الاختبار الكاملة · Résultats complets</div>' +
    '<div class="results-sub">توافق البرامج الرسمية للأحزاب مع إجاباتك</div>' +
    barsHtml +
    '<div class="disclaimer-box">' +
      '<strong>⚠️ ملاحظة مهمة:</strong> هذا الاختبار لأغراض تعليمية ويقدم نظرة مبسطة على البرامج الرسمية للأحزاب.' +
      ' نشجعكم على البحث أكثر قبل اتخاذ أي قرار.' +
      '<br><em>Ce quiz est éducatif et simplifié. Nous vous encourageons à approfondir vos recherches avant toute décision.</em>' +
    '</div>' +
    '<div class="results-actions">' +
      '<a class="btn-wa-share" id="btnWaShare" href="#" target="_blank" rel="noopener">&#128241; <span class="ar-only">واتساب</span><span class="fr-only">WhatsApp</span></a>' +
      '<button class="btn-ig-share" onclick="shareInstagramStory()">&#x1F4F8; <span class="ar-only">قصة انستغرام</span><span class="fr-only">Story Instagram</span></button>' +
      '<button class="btn-retake" onclick="retakeQuiz()">&#8635; <span class="ar-only">إعادة</span><span class="fr-only">Refaire</span></button>' +
      '<a href="#compare" class="btn-retake">&#x2696;&#xFE0F; <span class="ar-only">قارن</span><span class="fr-only">Comparer</span></a>' +
    '</div>';

  // Animate bars after a short delay (let DOM paint first)
  setTimeout(function() {
    sorted.forEach(function(p) {
      var el = document.getElementById('rb_' + p);
      if (el) el.style.width = pcts[p] + '%';
    });
  }, 80);

  // Confetti burst 🎉
  if (typeof fireConfetti === 'function') fireConfetti();
  // Save result to localStorage + store for Instagram share
  if (typeof _saveQuizResult === 'function') _saveQuizResult(topKey, pcts[topKey]);
  _lastResult = { topKey: topKey, pcts: pcts, sorted: sorted };

  // Firebase: increment quiz completion counter
  fbIncrement('quizCompleted');

  // Build WhatsApp share link
  var waBtn = document.getElementById('btnWaShare');
  if (waBtn) {
    var isFrWa = document.body.classList.contains('lang-fr');
    var waText = isFrWa
      ? ('Fein Waqfin? Mon parti compatible: ' + topParty.nameFr + ' (' + topKey + ') \u2014 ' + pcts[topKey] + '%\n' + window.location.href)
      : ('\u0641\u064a\u0646 \u0648\u0627\u0642\u0641\u064a\u0646\u061f \u0623\u062c\u0631\u064a\u062a \u0627\u0644\u0627\u062e\u062a\u0628\u0627\u0631 \u0648\u062a\u0628\u064a\u0651\u0646 \u0623\u0646 ' + topParty.name + ' (' + topKey + ') \u064a\u062a\u0648\u0627\u0641\u0642 \u0645\u0639 \u0642\u064a\u0645\u064a \u0628\u0646\u0633\u0628\u0629 ' + pcts[topKey] + '%\n' + window.location.href);
    waBtn.href = 'https://wa.me/?text=' + encodeURIComponent(waText);
    // Firebase: count WhatsApp shares (once per results view)
    waBtn.addEventListener('click', function() { fbIncrement('waShares'); }, { once: true });
  }
}

function retakeQuiz() {
  currentQ = 0;
  userAnswers = new Array(QUIZ_QUESTIONS.length).fill(null);
  document.getElementById('quizResults').style.display = 'none';
  document.getElementById('quizBody').style.display = 'block';
  document.getElementById('progressContainer').style.display = '';
  var ring = document.getElementById('progressRing');
  if (ring) ring.style.strokeDashoffset = '163.36';
  renderQuestion();
}

// ─── COMPARISON ──────────────────────────────────────────────
function renderPartyChips() {
  var container = document.getElementById('partySelector');
  if (!container) return;
  var html = '';
  Object.keys(PARTIES).forEach(function(key) {
    var p = PARTIES[key];
    var isSel = selectedParties.indexOf(key) !== -1;
    var style = isSel
      ? 'background:' + p.color + ';color:#fff;border-color:' + p.color + ';'
      : '';
    html += '<button class="party-chip' + (isSel ? ' selected' : '') + '" ' +
      'style="' + style + '" ' +
      'onclick="toggleParty(\'' + key + '\')">' +
      '<span class="chip-dot" style="background:' + (isSel ? '#fff' : p.color) + ';opacity:' + (isSel ? '0.7' : '1') + ';"></span>' +
      '<span class="chip-abbr">' + p.abbr + '</span>' +
      '</button>';
  });
  container.innerHTML = html;
}

function toggleParty(key) {
  var idx = selectedParties.indexOf(key);
  if (idx !== -1) {
    selectedParties.splice(idx, 1);
  } else if (selectedParties.length < 3) {
    selectedParties.push(key);
  } else {
    selectedParties.shift();
    selectedParties.push(key);
  }
  renderPartyChips();
  renderComparison();
}

var _lastComparisonTs = 0;

function renderComparison() {
  var out = document.getElementById('compareOutput');
  if (!out) return;

  if (selectedParties.length < 2) {
    out.innerHTML = '<div class="compare-hint">⬆ اختر حزبين على الأقل لعرض المقارنة · Sélectionnez au moins 2 partis</div>';
    return;
  }

  // Firebase: count comparison (debounced – once per second max)
  var now = Date.now();
  if (now - _lastComparisonTs > 1000) {
    _lastComparisonTs = now;
    fbIncrement('comparisons');
  }

  var topics = [
    { key: 'economy',    label: '💼 الاقتصاد' },
    { key: 'education',  label: '📚 التعليم' },
    { key: 'health',     label: '🏥 الصحة' },
    { key: 'youth',      label: '👥 الشباب والتشغيل' },
    { key: 'environment',label: '🌿 البيئة' },
    { key: 'governance', label: '🏛️ الحوكمة' }
  ];

  // Table header
  var theadHtml = '<tr><th class="topic-col">المجال</th>';
  selectedParties.forEach(function(key) {
    var p = PARTIES[key];
    theadHtml +=
      '<th class="party-col">' +
        '<div class="th-abbr" style="color:' + p.color + ';">' + p.abbr + '</div>' +
        '<div class="th-name">' + p.name + '</div>' +
        '<div class="th-badge"><span class="orient-tag ' + p.orientationClass + '">' + p.orientation + '</span></div>' +
      '</th>';
  });
  theadHtml += '</tr>';

  // Topic rows
  var tbodyHtml = '';
  topics.forEach(function(t) {
    tbodyHtml += '<tr><td class="topic-cell">' + t.label + '</td>';
    selectedParties.forEach(function(key) {
      tbodyHtml += '<td class="content-cell">' + (PARTIES[key][t.key] || '—') + '</td>';
    });
    tbodyHtml += '</tr>';
  });

  // Extra rows
  tbodyHtml += '<tr><td class="topic-cell">📅 سنة التأسيس</td>';
  selectedParties.forEach(function(key) {
    tbodyHtml += '<td class="content-cell year-cell">' + PARTIES[key].founded + '</td>';
  });
  tbodyHtml += '</tr>';

  tbodyHtml += '<tr><td class="topic-cell">🏛️ الوضع الراهن</td>';
  selectedParties.forEach(function(key) {
    var p = PARTIES[key];
    tbodyHtml += '<td class="content-cell"><span class="role-tag ' + p.roleClass + '">' + p.role + '</span></td>';
  });
  tbodyHtml += '</tr>';

  out.innerHTML =
    '<div class="compare-table-wrap">' +
      '<table class="compare-table">' +
        '<thead>' + theadHtml + '</thead>' +
        '<tbody>' + tbodyHtml + '</tbody>' +
      '</table>' +
    '</div>' +
    '<p class="compare-note">⚠️ جميع المعلومات مستقاة من البرامج الرسمية للأحزاب والوثائق العمومية.</p>';
}

// ─── PARTY CARDS ─────────────────────────────────────────────
function renderPartyCards() {
  var grid = document.getElementById('partiesGrid');
  if (!grid) return;
  var html = '';
  Object.keys(PARTIES).forEach(function(key) {
    var p = PARTIES[key];
    html +=
      '<div class="party-card" style="border-top-color:' + p.color + ';">' +
        '<div class="party-card-head">' +
          '<div class="party-logo" style="background:' + p.color + ';">' + p.abbr + '</div>' +
          '<div class="party-card-info">' +
            '<div class="party-card-name"><span class="ar-only">' + p.name + '</span><span class="fr-only">' + (p.nameFr || p.name) + '</span></div>' +
            '<div class="party-card-abbr">' + p.nameFr + '</div>' +
          '</div>' +
        '</div>' +
        '<div class="party-card-meta">' +
          '<span class="meta-tag"><span class="ar-only">\u062a\u0623\u0633\u0633 ' + p.founded + '</span><span class="fr-only">Fond\u00e9 en ' + p.founded + '</span></span>' +
          '<span class="orient-tag ' + p.orientationClass + '"><span class="ar-only">' + p.orientation + '</span><span class="fr-only">' + (p.orientationFr || p.orientation) + '</span></span>' +
          '<span class="meta-tag ' + p.roleClass + '"><span class="ar-only">' + p.role + '</span><span class="fr-only">' + (p.roleFr || p.role) + '</span></span>' +
        '</div>' +
        '<p class="party-card-desc"><span class="ar-only">' + p.desc + '</span><span class="fr-only">' + (p.descFr || p.desc) + '</span></p>' +
        (p.website ? '<div class="party-card-source"><a href="' + p.website + '" target="_blank" rel="noopener"><span class="ar-only">\u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0631\u0633\u0645\u064a \u2197</span><span class="fr-only">Site officiel \u2197</span></a></div>' : '') +
        '<button class="party-card-toggle" onclick="toggleCardPolicy(this)">' +
          '<span class="ar-only">📋 تفاصيل البرنامج</span><span class="fr-only">📋 Détails du programme</span>' +
          '<em class="pct-arrow">▾</em>' +
        '</button>' +
        '<div class="party-card-policy"><div class="pcp-inner">' +
          '<div class="pcb-item"><span class="pcb-ico">💼</span><span>' + (p.economy || '').slice(0, 90) + '…</span></div>' +
          '<div class="pcb-item"><span class="pcb-ico">📚</span><span>' + (p.education || '').slice(0, 90) + '…</span></div>' +
          '<div class="pcb-item"><span class="pcb-ico">🏥</span><span>' + (p.health || '').slice(0, 90) + '…</span></div>' +
          '<div class="pcb-item"><span class="pcb-ico">🌿</span><span>' + (p.environment || '').slice(0, 85) + '…</span></div>' +
          (p.website ? '<a class="pcb-link" href="' + p.website + '" target="_blank" rel="noopener"><span class="ar-only">الموقع الرسمي \u2197</span><span class="fr-only">Site officiel \u2197</span></a>' : '') +
        '</div></div>' +
      '</div>';
  });
  grid.innerHTML = html;
}

// ─── COUNTERS ────────────────────────────────────────────────
function startCounters() {
  var counters = document.querySelectorAll('[data-target]');
  if (!counters.length) return;

  if ('IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(function(c) { obs.observe(c); });
  } else {
    counters.forEach(function(c) { animateCounter(c); });
  }
}

function animateCounter(el) {
  var target = parseInt(el.getAttribute('data-target'), 10);
  var duration = 1600;
  var start = null;
  function step(ts) {
    if (!start) start = ts;
    var elapsed = ts - start;
    var progress = Math.min(elapsed / duration, 1);
    var eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target).toLocaleString();
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target.toLocaleString();
  }
  requestAnimationFrame(step);
}

// ─── NAV ─────────────────────────────────────────────────────
// toggleMenu() is defined in the inline <script> in fein-waqfin.html

function setupNavHighlight() {
  // Map: section-id → nav-link-id
  var sectionNavMap = {
    'quiz': 'nav-quiz',
    'compare': 'nav-compare',
    'map': 'nav-map',
    'parties': 'nav-parties',
    'about': 'nav-about',
    'youth-impact': 'nav-yimp'
  };
  if (!('IntersectionObserver' in window)) return;
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) {
        Object.keys(sectionNavMap).forEach(function(sid) {
          var navEl = document.getElementById(sectionNavMap[sid]);
          if (navEl) navEl.classList.toggle('active', sid === e.target.id);
        });
      }
    });
  }, { threshold: 0.4 });
  Object.keys(sectionNavMap).forEach(function(sid) {
    var el = document.getElementById(sid);
    if (el) obs.observe(el);
  });
}

// ─── SHARE ───────────────────────────────────────────────────
function copyLink() {
  var url = window.location.href;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(url)
      .then(function() { alert('تم نسخ الرابط! ✓ Lien copié!'); })
      .catch(function() { prompt('انسخ الرابط:', url); });
  } else {
    prompt('انسخ الرابط:', url);
  }
}

function shareNative() {
  if (navigator.share) {
    navigator.share({
      title: 'فين واقفين؟ — منصة التربية المدنية للشباب المغربي',
      text: 'اكتشف أي الأحزاب المغربية تتوافق مع قيمك',
      url: window.location.href
    });
  } else {
    copyLink();
  }
}

// ─── CURSOR GLOW ─────────────────────────────────────────────
function initCursorGlow() {
  if ('ontouchstart' in window) return;

  // Page-wide subtle glow
  var glow = document.createElement('div');
  glow.className = 'cursor-glow';
  document.body.appendChild(glow);
  document.addEventListener('mousemove', function(e) {
    glow.style.left = e.clientX + 'px';
    glow.style.top  = e.clientY + 'px';
  });

  // Hero-section glow — bigger, more dramatic, tracks across the whole green area
  var hero     = document.getElementById('hero');
  var heroGlow = document.getElementById('heroCursorGlow');
  if (!hero || !heroGlow) return;

  hero.addEventListener('mousemove', function(e) {
    var rect = hero.getBoundingClientRect();
    heroGlow.style.left = (e.clientX - rect.left) + 'px';
    heroGlow.style.top  = (e.clientY - rect.top)  + 'px';
    heroGlow.style.opacity = '1';
  });
  hero.addEventListener('mouseleave', function() {
    heroGlow.style.opacity = '0';
  });
}

// ─── HERO MAP ─────────────────────────────────────────────────
function hexToRgb(hex) {
  var r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return r ? { r: parseInt(r[1],16), g: parseInt(r[2],16), b: parseInt(r[3],16) } : null;
}

var _heroActiveRegion = null;

function closeHeroRegion() {
  var statsEl  = document.getElementById('heroStats');
  var detailEl = document.getElementById('heroRegionDetail');
  if (statsEl)  statsEl.classList.remove('hidden');
  if (detailEl) { detailEl.classList.remove('visible'); detailEl.innerHTML = ''; }
  var svgEl = document.getElementById('heroMap');
  if (svgEl) {
    svgEl.querySelectorAll('.hm-region').forEach(function(p) {
      p.classList.remove('hm-active');
      p.removeAttribute('transform');
      p.style.opacity = '1';
      p.style.filter  = '';
    });
  }
  _heroActiveRegion = null;
}

function initHeroMap() {
  var svgEl   = document.getElementById('heroMap');
  if (!svgEl) return;
  var regions  = svgEl.querySelectorAll('.hm-region');
  var tooltip  = document.getElementById('heroMapTip');
  var mapGlow  = document.getElementById('mapCursorGlow');
  var mapWrap  = svgEl.closest('.hero-map-wrap');

  // ── CURSOR GLOW on map ────────────────────────────────────────
  if (mapWrap && mapGlow && !('ontouchstart' in window)) {
    mapWrap.addEventListener('mousemove', function(e) {
      var r      = mapWrap.getBoundingClientRect();
      var el     = document.elementFromPoint(e.clientX, e.clientY);
      var winner = null;
      if (el && el.classList.contains('hm-region')) {
        var rid2 = el.getAttribute('data-id');
        for (var i = 0; i < REGIONS.length; i++) {
          if (REGIONS[i].id === rid2) { winner = REGIONS[i].winner; break; }
        }
      }
      var color = (winner && PARTIES[winner]) ? PARTIES[winner].color : '#22C55E';
      var rgb   = hexToRgb(color) || { r:34, g:197, b:94 };
      mapGlow.style.left       = (e.clientX - r.left) + 'px';
      mapGlow.style.top        = (e.clientY - r.top)  + 'px';
      mapGlow.style.background = 'radial-gradient(circle, rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ',0.42) 0%, transparent 70%)';
      mapGlow.style.opacity    = '1';
    });
    mapWrap.addEventListener('mouseleave', function() {
      mapGlow.style.opacity = '0';
    });
  }

  // Make SVG map accessible to screen readers
  svgEl.setAttribute('role', 'img');
  svgEl.setAttribute('aria-label', 'خريطة المغرب الانتخابية / Carte électorale du Maroc');

  regions.forEach(function(path) {
    var rid   = path.getAttribute('data-id');
    var rData = null;
    for (var i = 0; i < REGIONS.length; i++) {
      if (REGIONS[i].id === rid) { rData = REGIONS[i]; break; }
    }
    if (!rData) return;

    // ── ARIA ──────────────────────────────────────────────────────
    path.setAttribute('role', 'button');
    path.setAttribute('tabindex', '0');
    var winnerName = (rData.winner && PARTIES[rData.winner]) ? PARTIES[rData.winner].name : '';
    path.setAttribute('aria-label', rData.name + ' / ' + rData.nameFr + (winnerName ? ' — ' + winnerName : ''));

    // ── HOVER ────────────────────────────────────────────────────
    path.addEventListener('mouseenter', function() {
      if (path.classList.contains('hm-active')) return;
      path.style.opacity = '0.78';
      if (tooltip) {
        var isFr = document.body.classList.contains('lang-fr');
        tooltip.innerHTML = '<strong>' + (isFr ? rData.nameFr : rData.name) + '</strong>';
        tooltip.style.display = 'block';
      }
    });
    path.addEventListener('mousemove', function(e) {
      if (!tooltip || path.classList.contains('hm-active')) return;
      var r = mapWrap ? mapWrap.getBoundingClientRect() : svgEl.getBoundingClientRect();
      tooltip.style.left = Math.min(e.clientX - r.left + 12, r.width - 160) + 'px';
      tooltip.style.top  = Math.max(e.clientY - r.top  - 36, 4) + 'px';
    });
    path.addEventListener('mouseleave', function() {
      if (!path.classList.contains('hm-active')) path.style.opacity = '1';
      if (tooltip) tooltip.style.display = 'none';
    });

    // ── KEYBOARD: Enter/Space activates region (accessibility) ───
    path.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); path.click(); }
    });

    // ── CLICK: elevate + region detail in left column ────────────
    path.addEventListener('click', function() {
      if (_heroActiveRegion === rid) { closeHeroRegion(); return; }

      // Reset all regions
      regions.forEach(function(p) {
        p.classList.remove('hm-active');
        p.removeAttribute('transform');
        p.style.opacity = '0.40';
        p.style.filter  = '';
      });

      _heroActiveRegion = rid;
      path.classList.add('hm-active');
      path.style.opacity = '1';

      // Scale region around its centroid
      var cx = rData.cx, cy = rData.cy, s = 1.09;
      path.setAttribute('transform',
        'translate(' + cx + ' ' + cy + ') scale(' + s + ') translate(' + (-cx) + ' ' + (-cy) + ')'
      );

      // Build bar HTML
      var isFr     = document.body.classList.contains('lang-fr');
      var nm       = isFr ? rData.nameFr : rData.name;
      var wc       = (PARTIES[rData.winner] || {}).color || '#888';
      var statsEl  = document.getElementById('heroStats');
      var detailEl = document.getElementById('heroRegionDetail');

      var barsHtml = rData.top3.map(function(item) {
        var pc = (PARTIES[item.p] || {}).color || '#888';
        return '<div class="hrd-bar-row">' +
          '<span class="hrd-party" style="color:' + pc + ';">' + item.p + '</span>' +
          '<div class="hrd-track"><div class="hrd-fill" id="hf_' + rid + '_' + item.p + '" style="background:' + pc + ';width:0%;"></div></div>' +
          '<span class="hrd-seats">' + item.s + '</span>' +
          '</div>';
      }).join('');

      if (detailEl) {
        detailEl.innerHTML =
          '<button class="hrd-close" onclick="closeHeroRegion()">&times;</button>' +
          '<div class="hrd-name">' + nm + '</div>' +
          '<div class="hrd-winner" style="color:' + wc + ';">\u265b ' + rData.winner +
            ' \u00b7 ' + rData.winnerSeats + (isFr ? ' si\u00e8ges' : ' \u0645\u0642\u0639\u062f') +
            ' / ' + rData.totalSeats + '</div>' +
          '<div class="hrd-pop">' + rData.pop + ' ' + (isFr ? 'habitants' : '\u0646\u0633\u0645\u0629') + '</div>' +
          '<div class="hrd-bars">' + barsHtml + '</div>';

        if (statsEl) statsEl.classList.add('hidden');
        detailEl.classList.add('visible');

        requestAnimationFrame(function() {
          requestAnimationFrame(function() {
            rData.top3.forEach(function(item) {
              var el = document.getElementById('hf_' + rid + '_' + item.p);
              if (el) el.style.width = Math.round(item.s / rData.totalSeats * 100) + '%';
            });
          });
        });
      }
    });
  });
}

// ─── SCROLL PROGRESS ─────────────────────────────────────────
function initScrollProgress() {
  var bar = document.getElementById('scrollProgress');
  if (!bar) return;
  window.addEventListener('scroll', function() {
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    var docH      = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (docH > 0 ? Math.min(scrollTop / docH * 100, 100) : 0) + '%';
  }, { passive: true });
}

// ─── ENTRANCE ANIMATIONS ──────────────────────────────────────
function initEntranceAnimations() {
  var els = document.querySelectorAll('.js-reveal');
  if (!els.length) return;
  if (!('IntersectionObserver' in window)) {
    els.forEach(function(el) { el.classList.add('revealed'); });
    return;
  }
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.10, rootMargin: '0px 0px -30px 0px' });
  els.forEach(function(el) { obs.observe(el); });
}

// ─── MAP ─────────────────────────────────────────────────────
// Geographic Morocco map — sourced from Simplemaps, simplified, viewBox 0 0 500 540
var REGIONS = [
  { id:'TTA', cx:371.9, cy:43.1,
    name:'طنجة تطوان الحسيمة',       nameFr:'Tanger-Tétouan-Al Hoceïma',
    winner:'PAM', winnerSeats:28, totalSeats:75,
    top3:[{p:'PAM',s:28},{p:'RNI',s:22},{p:'PI',s:12}],
    pop:'3.6M',
    path:'M 407.1 34.9 L 406.9 47.1 L 400.8 48.7 L 397.5 51.8 L 394.4 49.4 L 388.8 54.5 L 379.9 52.6 L 378.1 48.1 L 371.1 49.6 L 366.3 51.9 L 366.2 57.6 L 363.3 60.2 L 358.9 59.4 L 359.1 56.7 L 355.9 55.6 L 354.0 52.6 L 348.4 52.1 L 348.1 44.8 L 338.7 41.7 L 334.4 42.2 L 343.8 13.0 L 348.3 13.4 L 359.6 8.0 L 364.5 21.9 L 378.3 33.5 L 390.6 36.8 L 403.9 32.6 L 407.1 34.9 Z' },
  { id:'OR',  cx:434.1, cy:95.9,
    name:'الجهة الشرقية',              nameFr:'Oriental',
    winner:'RNI', winnerSeats:26, totalSeats:63,
    top3:[{p:'RNI',s:26},{p:'PAM',s:15},{p:'MP',s:8}],
    pop:'2.3M',
    path:'M 424.3 161.5 L 428.4 157.0 L 426.0 158.0 L 423.7 152.3 L 426.0 145.0 L 421.8 147.5 L 416.5 146.1 L 413.3 147.4 L 412.4 146.4 L 414.3 144.2 L 409.2 144.1 L 409.2 142.0 L 407.4 142.1 L 404.2 132.2 L 401.2 129.5 L 413.7 112.0 L 421.6 113.2 L 434.6 109.0 L 432.4 104.5 L 424.1 96.7 L 430.5 87.6 L 422.8 87.1 L 416.3 82.4 L 406.1 93.9 L 408.0 95.2 L 406.5 96.9 L 405.6 94.7 L 403.4 96.7 L 400.0 96.3 L 398.1 91.3 L 403.0 88.8 L 405.0 80.2 L 407.0 78.8 L 407.3 71.4 L 404.9 70.8 L 404.3 68.0 L 406.8 66.7 L 406.2 62.7 L 409.4 59.0 L 408.6 56.3 L 412.6 55.8 L 414.1 53.3 L 413.7 48.1 L 407.2 46.4 L 407.1 34.9 L 410.6 31.6 L 421.7 35.4 L 429.3 31.9 L 432.9 26.0 L 432.9 31.6 L 436.1 34.5 L 433.9 33.0 L 435.3 37.4 L 439.5 38.1 L 436.2 34.5 L 442.4 39.0 L 445.9 39.1 L 449.1 36.8 L 453.0 37.9 L 469.7 51.8 L 466.5 56.2 L 471.3 61.1 L 468.4 64.6 L 472.6 75.2 L 471.9 87.3 L 469.8 90.0 L 474.0 93.4 L 471.8 105.2 L 477.7 112.7 L 477.5 115.8 L 475.6 116.9 L 480.5 124.7 L 492.0 132.9 L 484.5 139.5 L 484.7 144.0 L 482.9 145.4 L 486.3 145.3 L 487.4 147.3 L 485.8 148.3 L 474.5 148.0 L 461.4 144.8 L 435.6 147.3 L 434.0 150.3 L 437.2 158.7 L 424.3 161.5 Z' },
  { id:'FM',  cx:386.4, cy:83.1,
    name:'فاس مكناس',                  nameFr:'Fès-Meknès',
    winner:'RNI', winnerSeats:24, totalSeats:72,
    top3:[{p:'RNI',s:24},{p:'PI',s:18},{p:'PAM',s:10}],
    pop:'4.2M',
    path:'M 362.3 60.1 L 365.8 58.6 L 367.1 51.1 L 375.2 48.5 L 378.1 48.1 L 380.1 52.7 L 388.8 54.5 L 394.4 49.4 L 397.5 51.8 L 407.2 46.4 L 413.7 48.1 L 414.1 53.3 L 412.6 55.8 L 408.6 56.3 L 409.4 59.0 L 406.2 62.7 L 406.8 66.7 L 404.3 68.0 L 404.9 70.8 L 407.3 71.4 L 407.0 78.8 L 405.0 80.2 L 403.0 88.8 L 398.1 91.3 L 398.5 95.0 L 402.9 96.8 L 405.6 94.7 L 406.6 96.8 L 408.0 95.2 L 406.1 93.9 L 416.3 82.4 L 422.8 87.1 L 430.5 87.6 L 424.1 96.7 L 432.4 104.5 L 434.6 109.0 L 421.6 113.2 L 414.5 111.5 L 400.1 129.8 L 395.3 129.3 L 387.4 119.6 L 378.6 118.6 L 376.9 111.8 L 371.2 112.7 L 367.5 118.7 L 363.5 120.4 L 364.5 118.1 L 361.8 112.4 L 363.3 109.3 L 358.3 109.5 L 356.5 103.6 L 347.0 97.6 L 350.3 86.9 L 347.5 83.6 L 349.1 81.0 L 345.2 75.3 L 347.9 71.4 L 348.7 73.1 L 350.7 72.7 L 350.6 74.6 L 357.7 73.7 L 359.1 69.8 L 355.8 65.3 L 359.9 63.9 L 362.3 60.1 Z' },
  { id:'RSK', cx:339.5, cy:75.1,
    name:'الرباط سلا القنيطرة',        nameFr:'Rabat-Salé-Kénitra',
    winner:'RNI', winnerSeats:27, totalSeats:75,
    top3:[{p:'RNI',s:27},{p:'PAM',s:18},{p:'PI',s:12}],
    pop:'4.6M',
    path:'M 334.4 42.2 L 338.7 41.7 L 348.1 44.8 L 348.4 52.1 L 354.0 52.6 L 355.9 55.6 L 359.1 56.7 L 358.9 59.4 L 362.3 60.1 L 359.9 63.9 L 355.8 65.3 L 359.1 69.8 L 357.7 73.7 L 350.6 74.6 L 350.7 72.7 L 348.7 73.1 L 347.9 71.4 L 345.3 74.6 L 349.1 81.0 L 347.5 83.8 L 350.3 86.9 L 347.0 97.6 L 348.5 103.3 L 339.6 104.3 L 335.4 102.9 L 335.8 99.5 L 331.1 97.9 L 330.2 106.1 L 325.4 110.0 L 317.7 107.3 L 316.8 98.0 L 318.9 95.7 L 314.1 94.2 L 312.9 95.7 L 310.5 87.7 L 307.9 85.2 L 316.9 78.1 L 332.6 47.1 L 333.3 49.3 L 334.2 48.3 L 332.6 47.0 L 334.4 42.2 Z' },
  { id:'BMK', cx:332.5, cy:134.5,
    name:'بني ملال خنيفرة',            nameFr:'Béni Mellal-Khénifra',
    winner:'RNI', winnerSeats:22, totalSeats:54,
    top3:[{p:'RNI',s:22},{p:'MP',s:15},{p:'PAM',s:8}],
    pop:'2.5M',
    path:'M 364.1 120.1 L 362.4 122.4 L 361.1 132.9 L 355.6 135.1 L 358.3 143.5 L 351.4 143.6 L 345.8 147.4 L 345.1 151.9 L 347.6 153.5 L 347.2 156.4 L 341.2 161.3 L 320.6 170.2 L 319.7 174.5 L 307.9 173.8 L 306.1 171.7 L 307.6 167.0 L 305.9 167.0 L 302.1 161.6 L 304.8 159.4 L 310.2 159.8 L 311.6 157.7 L 308.1 149.8 L 307.6 139.9 L 311.6 134.4 L 312.0 128.5 L 310.0 126.2 L 311.4 117.3 L 316.1 107.4 L 321.7 107.7 L 325.7 110.0 L 330.2 106.1 L 331.1 97.9 L 335.8 99.5 L 335.6 103.0 L 347.4 104.2 L 348.1 98.3 L 356.5 103.6 L 358.3 109.5 L 363.3 109.3 L 361.8 112.4 L 364.1 120.1 Z' },
  { id:'CS',  cx:288.1, cy:115.7,
    name:'الدار البيضاء سطات',         nameFr:'Casablanca-Settat',
    winner:'RNI', winnerSeats:32, totalSeats:99,
    top3:[{p:'RNI',s:32},{p:'PAM',s:24},{p:'UC',s:14}],
    pop:'7.0M',
    path:'M 249.8 125.4 L 259.5 115.8 L 265.8 106.0 L 268.2 106.3 L 272.6 102.1 L 295.5 92.9 L 304.8 86.2 L 307.9 85.2 L 309.9 86.5 L 312.9 95.7 L 314.1 94.2 L 318.9 95.7 L 316.8 98.0 L 317.6 106.7 L 311.4 117.3 L 310.0 126.2 L 312.0 128.5 L 311.6 134.4 L 307.6 139.9 L 300.3 134.6 L 292.8 134.5 L 281.7 122.1 L 278.1 133.3 L 264.9 140.6 L 262.4 133.7 L 253.6 132.6 L 251.0 129.5 L 252.2 127.2 L 249.8 125.4 Z' },
  { id:'MS',  cx:269.5, cy:162.5,
    name:'مراكش آسفي',                 nameFr:'Marrakech-Safi',
    winner:'PAM', winnerSeats:27, totalSeats:81,
    top3:[{p:'PAM',s:27},{p:'RNI',s:23},{p:'MP',s:14}],
    pop:'4.5M',
    path:'M 306.1 171.7 L 302.5 175.6 L 294.1 178.2 L 290.2 182.2 L 286.9 180.9 L 281.2 190.0 L 277.5 189.0 L 270.6 191.7 L 261.7 190.3 L 259.3 193.5 L 256.7 187.7 L 250.9 193.2 L 244.2 193.8 L 241.5 190.8 L 238.2 192.5 L 235.3 190.9 L 230.8 194.4 L 226.7 188.1 L 227.6 175.2 L 226.4 172.3 L 231.2 162.0 L 243.7 145.1 L 242.8 138.3 L 244.6 134.1 L 243.0 131.9 L 249.8 125.4 L 252.2 127.2 L 251.0 129.5 L 253.6 132.6 L 261.7 132.9 L 264.9 140.6 L 278.1 133.3 L 281.7 122.1 L 293.0 134.6 L 300.3 134.6 L 301.6 136.8 L 308.1 139.6 L 308.1 149.8 L 311.6 157.7 L 310.2 159.8 L 303.9 159.7 L 302.0 162.3 L 307.6 167.0 L 306.1 171.7 Z' },
  { id:'DT',  cx:357.8, cy:179.9,
    name:'درعة تافيلالت',              nameFr:'Drâa-Tafilalet',
    winner:'PAM', winnerSeats:22, totalSeats:54,
    top3:[{p:'PAM',s:22},{p:'MP',s:16},{p:'RNI',s:10}],
    pop:'1.6M',
    path:'M 328.2 237.1 L 330.0 230.9 L 328.7 223.0 L 331.1 220.9 L 327.3 221.1 L 327.0 217.5 L 324.0 214.0 L 326.3 210.9 L 321.9 205.8 L 317.3 207.2 L 315.8 206.0 L 315.2 210.4 L 306.8 208.8 L 302.8 214.5 L 302.6 218.4 L 300.5 215.4 L 292.8 214.5 L 294.2 212.1 L 291.0 206.2 L 296.1 203.0 L 294.5 196.4 L 290.3 196.0 L 292.7 191.7 L 289.6 191.8 L 289.3 182.3 L 294.1 178.2 L 302.5 175.6 L 306.1 171.7 L 311.4 174.8 L 319.7 174.5 L 320.6 170.2 L 342.3 160.6 L 347.2 156.4 L 347.6 153.5 L 345.1 151.9 L 346.4 146.6 L 354.8 142.7 L 358.3 143.5 L 355.6 135.1 L 361.1 132.9 L 362.5 122.1 L 370.1 116.1 L 371.8 112.4 L 376.9 111.8 L 378.6 118.6 L 387.4 119.6 L 395.3 129.3 L 401.2 129.5 L 404.2 132.2 L 407.4 142.1 L 409.2 142.0 L 409.2 144.1 L 414.3 144.2 L 412.4 146.4 L 413.3 147.4 L 416.5 146.1 L 421.8 147.5 L 426.0 145.0 L 423.7 152.3 L 426.0 158.0 L 428.4 157.0 L 424.3 161.5 L 411.8 164.4 L 412.4 172.9 L 408.2 176.5 L 408.7 182.5 L 410.8 180.6 L 412.5 183.5 L 412.6 180.8 L 415.8 186.4 L 412.3 192.4 L 411.8 198.8 L 392.1 203.5 L 383.7 212.0 L 373.7 217.1 L 363.5 225.3 L 354.7 239.9 L 351.1 238.1 L 349.4 238.9 L 350.0 236.4 L 348.0 235.5 L 328.2 237.1 Z' },
  { id:'SM',  cx:270.9, cy:220.7,
    name:'سوس ماسة',                   nameFr:'Souss-Massa',
    winner:'RNI', winnerSeats:24, totalSeats:63,
    top3:[{p:'RNI',s:24},{p:'MP',s:18},{p:'PAM',s:10}],
    pop:'2.8M',
    path:'M 261.5 280.6 L 251.5 266.7 L 247.5 266.3 L 245.4 263.9 L 244.2 254.4 L 246.3 253.7 L 246.4 255.0 L 249.0 250.4 L 245.0 241.1 L 241.7 239.2 L 236.5 242.2 L 234.7 239.9 L 233.4 241.7 L 231.9 240.5 L 231.7 242.9 L 230.2 240.6 L 225.1 241.6 L 224.8 237.4 L 221.7 239.2 L 221.2 234.7 L 228.7 225.0 L 233.5 208.3 L 227.9 200.5 L 224.8 199.9 L 227.4 193.3 L 227.0 189.0 L 230.8 194.4 L 235.3 190.9 L 238.2 192.5 L 241.5 190.8 L 244.2 193.8 L 250.9 193.2 L 256.7 187.7 L 259.3 193.5 L 261.7 190.3 L 270.6 191.7 L 277.5 189.0 L 282.2 189.6 L 285.0 183.1 L 288.1 181.1 L 290.2 185.5 L 289.6 191.8 L 292.7 191.7 L 290.3 196.0 L 294.5 196.4 L 296.1 203.0 L 291.0 206.2 L 294.2 212.1 L 292.8 214.5 L 300.5 215.4 L 302.6 218.4 L 302.8 214.5 L 306.8 208.8 L 315.2 210.4 L 315.8 206.0 L 317.3 207.2 L 321.9 205.8 L 326.3 210.9 L 324.0 214.0 L 327.0 217.5 L 327.3 221.1 L 331.1 220.9 L 328.7 223.0 L 329.5 234.3 L 326.0 238.8 L 318.1 240.8 L 308.0 238.6 L 300.2 243.6 L 293.2 244.1 L 268.6 263.3 L 261.5 266.7 L 261.5 280.6 Z' },
  { id:'GON', cx:228.9, cy:270.0,
    name:'كلميم واد نون',              nameFr:'Guelmim-Oued Noun',
    winner:'PAM', winnerSeats:12, totalSeats:27,
    top3:[{p:'PAM',s:12},{p:'RNI',s:10},{p:'MP',s:3}],
    pop:'0.5M',
    path:'M 258.9 320.4 L 242.9 309.4 L 235.2 311.7 L 225.6 302.9 L 221.9 303.7 L 214.0 297.8 L 185.7 300.3 L 176.9 297.9 L 173.8 295.9 L 168.0 284.1 L 176.3 280.7 L 189.2 265.7 L 206.0 255.9 L 215.0 246.0 L 221.2 234.9 L 221.7 239.2 L 224.8 237.4 L 224.1 240.1 L 226.1 242.2 L 229.7 240.5 L 232.4 242.8 L 231.9 240.5 L 233.4 241.7 L 234.7 239.9 L 236.5 242.2 L 243.2 239.5 L 246.8 243.4 L 249.0 250.4 L 246.4 255.0 L 246.3 253.7 L 244.2 254.4 L 245.4 263.9 L 247.5 266.3 L 251.5 266.7 L 261.5 280.6 L 261.5 316.0 L 261.1 302.9 L 257.0 302.9 L 258.9 320.4 Z' },
  { id:'LSH', cx:159.7, cy:342.9,
    name:'العيون الساقية الحمراء',     nameFr:'Laâyoune-Sakia El Hamra',
    winner:'PAM', winnerSeats:9, totalSeats:18,
    top3:[{p:'PAM',s:9},{p:'RNI',s:6},{p:'UC',s:2}],
    pop:'0.4M',
    path:'M 258.9 320.4 L 261.1 320.7 L 260.9 359.3 L 160.9 359.5 L 160.9 413.2 L 153.5 411.6 L 143.0 413.4 L 127.8 408.6 L 110.7 413.2 L 99.0 410.1 L 86.1 412.3 L 74.7 404.8 L 76.4 382.9 L 86.3 359.8 L 87.1 353.2 L 95.8 345.0 L 102.2 343.3 L 114.3 334.4 L 126.4 301.8 L 129.8 299.9 L 133.9 292.8 L 158.9 288.3 L 168.0 284.1 L 173.8 295.9 L 176.9 297.9 L 185.7 300.3 L 214.0 297.8 L 221.9 303.7 L 225.6 302.9 L 235.2 311.7 L 242.9 309.4 L 258.9 320.4 Z' },
  { id:'DOD', cx:67.8, cy:448.5,
    name:'الداخلة واد الذهب',          nameFr:'Dakhla-Oued Ed-Dahab',
    winner:'RNI', winnerSeats:5, totalSeats:9,
    top3:[{p:'RNI',s:5},{p:'PAM',s:3},{p:'UC',s:1}],
    pop:'0.1M',
    path:'M 74.1 403.4 L 77.7 407.7 L 86.1 412.3 L 99.0 410.1 L 110.7 413.2 L 127.8 408.6 L 143.0 413.4 L 153.5 411.6 L 160.9 413.2 L 160.8 444.0 L 142.8 450.3 L 130.9 458.6 L 126.8 465.1 L 130.9 513.6 L 12.7 513.7 L 9.3 526.6 L 9.7 532.0 L 8.0 529.6 L 12.4 497.6 L 17.7 485.4 L 20.7 482.3 L 26.1 481.7 L 30.4 473.1 L 32.5 462.4 L 36.9 459.0 L 35.1 456.0 L 41.7 445.6 L 42.0 442.4 L 50.0 431.9 L 48.8 432.2 L 48.2 428.8 L 44.9 431.9 L 43.0 437.3 L 41.0 437.8 L 45.9 430.0 L 53.3 424.8 L 64.5 411.6 L 70.8 407.9 L 74.1 403.4 Z' }
];

function initMap() {
  var svg = document.getElementById('moroccoMap');
  if (!svg) return;
  var regG = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  var lblG = document.createElementNS('http://www.w3.org/2000/svg', 'g');

  REGIONS.forEach(function(r) {
    var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', r.path);
    path.setAttribute('class', 'map-region');
    var pColor = PARTIES[r.winner] ? PARTIES[r.winner].color : '#888';
    path.setAttribute('fill', pColor);
    path.setAttribute('data-id', r.id);
    path.addEventListener('mouseenter', function(e) { showMapTip(e, r); });
    path.addEventListener('mousemove',  function(e) { moveMapTip(e); });
    path.addEventListener('mouseleave', hideMapTip);
    path.addEventListener('click',      function()  { showRegionDetail(r); });
    regG.appendChild(path);

    var lbl = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    lbl.setAttribute('x', r.cx);
    lbl.setAttribute('y', r.cy);
    lbl.setAttribute('class', 'map-label');
    lbl.textContent = r.id;
    lblG.appendChild(lbl);
  });

  svg.appendChild(regG);
  svg.appendChild(lblG);
  renderMapLegend();
  buildNationalOverview();
}

function showMapTip(e, r) {
  var tip = document.getElementById('mapTooltip');
  if (!tip) return;
  var wp = PARTIES[r.winner];
  tip.innerHTML = '<strong>' + r.name + '</strong><br>' + r.nameFr + '<br>🏆 ' + (wp ? wp.abbr : r.winner);
  tip.classList.add('visible');
  moveMapTip(e);
}
function moveMapTip(e) {
  var tip = document.getElementById('mapTooltip');
  if (!tip) return;
  var rect = document.getElementById('moroccoMap').parentElement.getBoundingClientRect();
  tip.style.left = (e.clientX - rect.left + 14) + 'px';
  tip.style.top  = (e.clientY - rect.top  - 44) + 'px';
}
function hideMapTip() {
  var tip = document.getElementById('mapTooltip');
  if (tip) tip.classList.remove('visible');
}

function showRegionDetail(r) {
  document.querySelectorAll('.map-region').forEach(function(p) { p.classList.remove('active'); });
  var activeEl = document.querySelector('[data-id="' + r.id + '"]');
  if (activeEl) activeEl.classList.add('active');

  var panel = document.getElementById('mapPanel');
  if (!panel) return;
  var isFr = document.body.classList.contains('lang-fr');
  var wp = PARTIES[r.winner];
  var wc = wp ? wp.color : '#888';
  var maxS = r.top3[0].s;

  var barsHtml = '';
  r.top3.forEach(function(item) {
    var pp = PARTIES[item.p];
    var pc = pp ? pp.color : '#888';
    barsHtml +=
      '<div class="mrd-seat-row">' +
        '<div class="mrd-seat-abbr" style="color:' + pc + ';">' + item.p + '</div>' +
        '<div class="mrd-seat-track">' +
          '<div class="mrd-seat-fill" style="width:0%;background:' + pc + ';" id="msf_' + r.id + '_' + item.p + '"></div>' +
        '</div>' +
        '<div class="mrd-seat-num">' + item.s + '</div>' +
      '</div>';
  });

  panel.innerHTML =
    '<button class="mrd-back-btn" onclick="resetMap()">← ' + (isFr ? 'Vue nationale' : 'العرض الوطني') + '</button>' +
    '<div class="map-region-detail">' +
      '<div class="mrd-header">' +
        '<div class="mrd-name">' + (isFr ? r.nameFr : r.name) + '</div>' +
        '<div class="mrd-name-fr">' + (isFr ? r.name : r.nameFr) + '</div>' +
        '<div class="mrd-winner-badge" style="background:' + wc + '18;color:' + wc + ';border:1.5px solid ' + wc + '40;">' +
          '🏆 ' + (isFr ? 'Vainqueur : ' : 'الفائز: ') + r.winner + ' — ' + r.winnerSeats + (isFr ? ' sièges' : ' مقعدًا') +
        '</div>' +
      '</div>' +
      '<div class="mrd-seats-title">' + (isFr ? 'Répartition des sièges — Conseil régional 2021' : 'توزيع المقاعد — المجلس الجهوي 2021') + '</div>' +
      barsHtml +
      '<div class="mrd-meta">' +
        '<div class="mrd-meta-item">👥 ' + r.pop + '</div>' +
        '<div class="mrd-meta-item">🪑 ' + r.totalSeats + (isFr ? ' sièges' : ' مقعد') + '</div>' +
        '<div class="mrd-meta-item">📅 2021</div>' +
      '</div>' +
    '</div>';

  setTimeout(function() {
    r.top3.forEach(function(item) {
      var el = document.getElementById('msf_' + r.id + '_' + item.p);
      if (el) el.style.width = Math.round(item.s / maxS * 100) + '%';
    });
  }, 60);
}

function resetMap() {
  document.querySelectorAll('.map-region').forEach(function(p) { p.classList.remove('active'); });
  buildNationalOverview();
}

function renderMapLegend() {
  var leg = document.getElementById('mapLegend');
  if (!leg) return;
  var winners = {};
  REGIONS.forEach(function(r) { winners[r.winner] = true; });
  var isFr = document.body.classList.contains('lang-fr');
  var html = '<span class="legend-label">' + (isFr ? 'Vainqueurs — Conseils régionaux 2021 :' : 'الفائزون في انتخابات المجالس الجهوية 2021 :') + '</span>';
  Object.keys(winners).forEach(function(key) {
    var p = PARTIES[key];
    if (!p) return;
    html += '<div class="legend-item">' +
      '<div class="legend-dot" style="background:' + p.color + ';"></div>' +
      '<span>' + key + ' — ' + (isFr ? p.nameFr || p.name : p.name) + '</span>' +
    '</div>';
  });
  leg.innerHTML = html;
}

// ─── QUIZ EXPLANATIONS ────────────────────────────────────────
var QUIZ_EXPLAINS = [
  { ar: 'السياسة الاقتصادية تحدد توزيع الثروة وفرص الشغل — الأحزاب تتباين جوهريًا في دور الدولة مقابل السوق الحر.', fr: `La politique économique détermine la répartition des richesses — les partis divergent sur le rôle de l'État vs marché libre.` },
  { ar: 'التعليم ركيزة التنمية — هل الأولوية للرقمنة والمقاولة، أم للتعليم العمومي الجيد للجميع، أم للتكوين المهني؟', fr: `L'éducation est cruciale — numérique et entrepreneuriat ? Enseignement public pour tous ? Ou formation professionnelle ?` },
  { ar: 'التأمين الصحي الشامل موضع نقاش حاد — شراكة عامة-خاصة أم نظام عمومي قوي؟ والأولوية للحضر أم للقرى الهشة؟', fr: `L'assurance santé universelle est débattue — partenariat public-privé ou système entièrement public ? Villes ou zones rurales ?` },
  { ar: 'المغرب من أشد الدول تأثرًا بالجفاف — شُحّ الماء والأمن الغذائي وملف الطاقة المتجددة في صلب السياسات المناخية.', fr: `Le Maroc est très exposé à la sécheresse — pénurie d'eau, sécurité alimentaire et énergies renouvelables sont au cœur des politiques climatiques.` },
  { ar: 'بطالة الشباب تبلغ 35% في بعض المناطق — هل الحل في ريادة الأعمال، أم التكوين المهني، أم القطاع العام، أم الحصص السياسية؟', fr: `Le chômage des jeunes dépasse 35% dans certaines régions — entrepreneuriat, formation, emploi public, ou quotas de représentation ?` },
  { ar: 'الحوكمة الجيدة تُقلّص الفساد وتُعزّز ثقة المواطن — المغرب في مرحلة إصلاح إداري عميق بين جهوية متقدمة ورقمنة شاملة.', fr: `La bonne gouvernance réduit la corruption et renforce la confiance — le Maroc est en pleine réforme : régionalisation et numérisation.` },
  { ar: 'الهوية والقيم ساحة نقاش حقيقية — بين الديمقراطية الإسلامية، الحقوق المدنية، تمكين المرأة، والتعددية الثقافية الأمازيغية.', fr: `Identité et valeurs font l'objet d'un vrai débat — entre démocratie islamique, droits civils, féminisme et pluralisme amazigh.` },
  { ar: 'التحول الرقمي يعيد تشكيل الاقتصاد والإدارة — لكن الفجوة الرقمية بين الحضر والقرى وبين الأجيال لا تزال تحديًا حقيقيًا.', fr: `Le numérique refaçonne l'économie — mais la fracture numérique entre villes, campagnes et générations reste un défi réel.` },
  { ar: 'سوق السكن متأزم للشباب — أسعار الكراء في صعود مستمر، والفجوة بين العرض والطلب واسعة. سوق حر أم سكن اجتماعي عمومي؟', fr: `Le marché immobilier est tendu pour les jeunes — loyers en hausse, grand écart offre/demande. Marché libre ou logement social public ?` },
  { ar: 'الأولويات الكبرى تكشف القيم الجوهرية — بين التحديث الاقتصادي، العدالة الاجتماعية، الهوية الثقافية، والتوازن الجهوي.', fr: `Les grandes priorités révèlent les valeurs fondamentales — modernisation économique, justice sociale, identité ou équilibre régional.` }
];

// ─── ELECTION TIMELINE ────────────────────────────────────────
var TIMELINE = [
  { year: 1944, ar: 'تأسيس حزب الاستقلال — انطلاق حركة التحرر الوطني', fr: `Fondation du Parti de l'Istiqlal — début du nationalisme`, icon: '🏛️', type: 'party' },
  { year: 1956, ar: 'الاستقلال عن فرنسا وإسبانيا — ميلاد المملكة المغربية الحديثة', fr: `Indépendance vis-à-vis de la France et de l'Espagne — naissance du Maroc moderne`, icon: '🇲🇦', type: 'milestone' },
  { year: 1963, ar: 'أول انتخابات تشريعية في المغرب المستقل', fr: `Premières élections législatives du Maroc indépendant`, icon: '🗳️', type: 'election' },
  { year: 1975, ar: 'تأسيس الاتحاد الاشتراكي (USFP) — قوة معارضة يسارية تاريخية', fr: `Fondation de l'USFP — force d'opposition socialiste historique`, icon: '✊', type: 'party' },
  { year: 1993, ar: 'أول تمثيل نسائي مباشر في البرلمان المغربي', fr: `Première représentation directe des femmes au Parlement`, icon: '♀️', type: 'milestone' },
  { year: 1996, ar: 'إصلاح دستوري — إنشاء مجلس المستشارين وتكريس الثنائية البرلمانية', fr: `Réforme constitutionnelle — création de la Chambre des Conseillers`, icon: '📜', type: 'reform' },
  { year: 1998, ar: 'حكومة التناوب — قيادة USFP لأول مرة بعد سنوات في المعارضة', fr: `Gouvernement d'alternance — l'USFP dirige pour la première fois`, icon: '🔄', type: 'milestone' },
  { year: 2008, ar: 'تأسيس حزب الأصالة والمعاصرة (PAM) — لاعب جديد في المشهد', fr: `Fondation du PAM — nouveau parti dans le paysage politique`, icon: '🌟', type: 'party' },
  { year: 2011, ar: 'دستور جديد — حراك 20 فبراير، PJD يفوز ويقود الحكومة لأول مرة', fr: `Nouvelle Constitution — Mouvement 20 Février, PJD remporte les élections`, icon: '✊', type: 'reform' },
  { year: 2016, ar: 'انتخابات 7 أكتوبر — PJD يُجدّد ولايته الحكومية', fr: `7 octobre — le PJD renouvelle son mandat gouvernemental`, icon: '🗳️', type: 'election' },
  { year: 2021, ar: 'انتخابات 8 سبتمبر — صعود RNI الكبير بـ 102 مقعدًا وتشكيل الحكومة', fr: `8 septembre — le RNI arrive 1er avec 102 sièges, forme le gouvernement`, icon: '🏆', type: 'election' }
];

function renderTimeline() {
  var cont = document.getElementById('electionTimeline');
  if (!cont) return;
  var isFr = document.body.classList.contains('lang-fr');
  var html = '';
  TIMELINE.forEach(function(ev) {
    html +=
      '<div class="tl-item tl-' + ev.type + '">' +
        '<div class="tl-year">' + ev.year + '</div>' +
        '<div class="tl-line-dot"><div class="tl-dot-inner"></div></div>' +
        '<div class="tl-card">' +
          '<span class="tl-icon">' + ev.icon + '</span>' +
          '<span class="tl-text">' + (isFr ? ev.fr : ev.ar) + '</span>' +
        '</div>' +
      '</div>';
  });
  cont.innerHTML = html;
}

// ─── TYPEWRITER ───────────────────────────────────────────────
function initTypewriter() {
  var em = document.querySelector('h1.fade-in em');
  if (!em) return;
  var text = em.textContent.trim();
  em.textContent = '';
  em.style.minWidth = '2ch';
  var i = 0;
  function type() {
    if (i < text.length) {
      em.textContent += text.charAt(i++);
      setTimeout(type, 75);
    }
  }
  setTimeout(type, 600);
}

// ─── CONFETTI ─────────────────────────────────────────────────
function fireConfetti() {
  var colors = ['#1B5E20', '#22C55E', '#B71C1C', '#FFD700', '#86EFAC', '#fff', '#D97706'];
  for (var i = 0; i < 55; i++) {
    (function(idx) {
      setTimeout(function() {
        var el = document.createElement('div');
        el.className = 'confetti-piece';
        el.style.cssText =
          'left:' + (12 + Math.random() * 76) + 'vw;' +
          'background:' + colors[Math.floor(Math.random() * colors.length)] + ';' +
          'width:' + (5 + Math.random() * 7) + 'px;' +
          'height:' + (8 + Math.random() * 10) + 'px;' +
          'animation-duration:' + (1.3 + Math.random() * 1.6) + 's;' +
          'border-radius:' + (Math.random() > 0.4 ? '50%' : '2px') + ';' +
          'transform:rotate(' + Math.floor(Math.random() * 360) + 'deg);';
        document.body.appendChild(el);
        setTimeout(function() { if (el.parentNode) el.parentNode.removeChild(el); }, 3500);
      }, idx * 28);
    })(i);
  }
}

// ─── PREVIOUS RESULT BANNER ───────────────────────────────────
function loadPreviousResult() {
  try {
    var stored = localStorage.getItem('fw_last_result');
    if (!stored) return;
    var data = JSON.parse(stored);
    var banner = document.getElementById('returnBanner');
    if (!banner || !data.party || !data.pct) return;
    var p = PARTIES[data.party];
    if (!p) return;
    var isFr = document.body.classList.contains('lang-fr');
    var daysAgo = Math.floor((Date.now() - (data.ts || 0)) / 86400000);
    var timeLabel = daysAgo === 0 ? (isFr ? "aujourd'hui" : 'اليوم') :
                    daysAgo === 1 ? (isFr ? 'hier' : 'أمس') :
                    (isFr ? 'il y a ' + daysAgo + ' j' : 'منذ ' + daysAgo + ' أيام');
    banner.innerHTML =
      '<div class="rb-inner">' +
        '<span class="rb-dot" style="background:' + p.color + ';"></span>' +
        '<span class="rb-text">' +
          (isFr
            ? 'Résultat précédent (' + timeLabel + '): <strong style="color:' + p.color + '">' + p.abbr + '</strong> — ' + data.pct + '%'
            : 'نتيجتك السابقة (' + timeLabel + '): <strong style="color:' + p.color + '">' + p.abbr + '</strong> — ' + data.pct + '%') +
        '</span>' +
        '<a href="#quiz" class="rb-link">' + (isFr ? '↩ Refaire' : 'إعادة ←') + '</a>' +
        '<button class="rb-close" onclick="document.getElementById(\'returnBanner\').style.display=\'none\'">×</button>' +
      '</div>';
    banner.style.display = 'block';
  } catch(e) {}
}

function _saveQuizResult(partyKey, pct) {
  try { localStorage.setItem('fw_last_result', JSON.stringify({ party: partyKey, pct: pct, ts: Date.now() })); } catch(e) {}
}

// ─── PARTY CARD ACCORDION ────────────────────────────────────
function toggleCardPolicy(btn) {
  var card = btn.closest('.party-card');
  if (!card) return;
  card.classList.toggle('expanded');
}

// ─── INSTAGRAM STORY SHARE ───────────────────────────────────
var _lastResult = null;

function shareInstagramStory() {
  var isFr = document.body.classList.contains('lang-fr');
  var siteUrl = 'https://finwaqfin.netlify.app/';
  var resultText = '';
  if (_lastResult) {
    var topKey = _lastResult.topKey;
    var pct    = _lastResult.pcts[topKey];
    var p      = PARTIES[topKey];
    if (p) {
      resultText = isFr
        ? 'Mon résultat: ' + p.nameFr + ' (' + topKey + ') — ' + pct + '%\n'
        : 'نتيجتي: ' + p.name + ' (' + topKey + ') — ' + pct + '%\n';
    }
  }
  var shareTitle = 'فين واقفين؟';
  var shareText  = resultText + siteUrl;
  _igShareLink(siteUrl, shareTitle, shareText, isFr);
}

function shareInstagramStoryGeneral() {
  var isFr = document.body.classList.contains('lang-fr');
  var siteUrl = 'https://finwaqfin.netlify.app/';
  var shareTitle = 'فين واقفين؟';
  var shareText  = isFr
    ? 'Découvre quel parti correspond à tes valeurs 👉 ' + siteUrl
    : 'اكتشف أي الأحزاب يتوافق مع قيمك 👉 ' + siteUrl;
  _igShareLink(siteUrl, shareTitle, shareText, isFr);
}

/**
 * Share the site URL via native share sheet (mobile) or fallback modal (desktop).
 * Silently copies URL to clipboard first so user can paste it as an IG link sticker.
 */
function _igShareLink(siteUrl, shareTitle, shareText, isFr) {
  // Always show the Story instruction modal.
  // navigator.share() sends to Instagram DM, NOT Stories — so we skip it entirely.
  _igShowStoryModal(siteUrl, isFr);
}

/**
 * Instagram Story instruction modal.
 * Copies URL to clipboard + shows 3-step guide + "Open Instagram" button.
 */
function _igShowStoryModal(siteUrl, isFr) {
  if (!siteUrl) siteUrl = 'https://finwaqfin.netlify.app/';
  var old = document.getElementById('igStoryModal');
  if (old) old.remove();

  // Copy URL to clipboard immediately
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(siteUrl).catch(function(){});
    } else {
      var ta = document.createElement('textarea');
      ta.value = siteUrl; ta.style.cssText = 'position:fixed;top:-9999px;opacity:0;';
      document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy'); } catch(e) {}
      document.body.removeChild(ta);
    }
  } catch(e) {}

  var isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  var igHref = isMobile ? 'instagram://' : 'https://www.instagram.com/';

  var t = isFr ? {
    title:  'Partager en Story Instagram',
    copied: '🔗 Lien copié dans le presse-papiers !',
    url:    siteUrl.replace('https://',''),
    s1: '① Ouvre Instagram',
    s2: '② Appuie sur  +  →  Story',
    s3: '③ Autocollant  🔗  →  Colle le lien',
    copy:   'Copier le lien',
    open:   'Ouvrir Instagram  →',
    copied2:'✓ Copié !'
  } : {
    title:  'شارك في قصة انستغرام',
    copied: '🔗 تم نسخ الرابط تلقائياً!',
    url:    siteUrl.replace('https://',''),
    s1: '① افتح انستغرام',
    s2: '② اضغط  +  ← قصة جديدة',
    s3: '③ ملصق  🔗  ← الصق الرابط',
    copy:   'نسخ الرابط',
    open:   '← افتح انستغرام',
    copied2:'✓ تم النسخ!'
  };

  var modal = document.createElement('div');
  modal.id = 'igStoryModal';
  modal.innerHTML = [
    '<div class="igs-backdrop"></div>',
    '<div class="igs-panel">',
    '  <button class="igs-close" onclick="document.getElementById(\'igStoryModal\').remove()">✕</button>',
    '  <div class="igs-header">',
    '    <span class="igs-logo">📸</span>',
    '    <h3 class="igs-title">' + t.title + '</h3>',
    '  </div>',
    '  <div class="igs-copied-note">' + t.copied + '</div>',
    '  <div class="igs-urlbox">',
    '    <span class="igs-url">' + t.url + '</span>',
    '    <button class="igs-copybtn" id="igsCopyBtn">' + t.copy + '</button>',
    '  </div>',
    '  <div class="igs-steps">',
    '    <div class="igs-step">' + t.s1 + '</div>',
    '    <div class="igs-step">' + t.s2 + '</div>',
    '    <div class="igs-step">' + t.s3 + '</div>',
    '  </div>',
    '  <a class="igs-open-btn" href="' + igHref + '" target="_blank" rel="noopener">' + t.open + '</a>',
    '</div>'
  ].join('');

  document.body.appendChild(modal);
  modal.querySelector('.igs-backdrop').addEventListener('click', function() { modal.remove(); });

  var copyBtn = document.getElementById('igsCopyBtn');
  if (copyBtn) {
    copyBtn.addEventListener('click', function() {
      var copied2 = t.copied2;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(siteUrl).then(function() {
          copyBtn.textContent = copied2; copyBtn.classList.add('copied');
        }).catch(function() { _igCopyFallback(siteUrl, copyBtn, copied2); });
      } else { _igCopyFallback(siteUrl, copyBtn, copied2); }
    });
  }
}

function _igCopyFallback(text, btn, copied2Label) {
  var ta = document.createElement('textarea');
  ta.value = text; ta.style.cssText = 'position:fixed;top:-9999px;opacity:0;';
  document.body.appendChild(ta); ta.select();
  try { document.execCommand('copy'); btn.textContent = copied2Label; btn.classList.add('copied'); } catch(e) {}
  document.body.removeChild(ta);
}

function buildNationalOverview() {
  var panel = document.getElementById('mapPanel');
  if (!panel) return;
  var isFr = document.body.classList.contains('lang-fr');

  // Tally regions per winner
  var tally = {};
  REGIONS.forEach(function(r) {
    tally[r.winner] = (tally[r.winner] || []);
    tally[r.winner].push(r);
  });

  var rni = PARTIES['RNI'];
  var pam = PARTIES['PAM'];
  var rniColor = rni ? rni.color : '#2980B9';
  var pamColor = pam ? pam.color : '#E74C3C';
  var rniCount = (tally['RNI'] || []).length;
  var pamCount = (tally['PAM'] || []).length;
  var total = REGIONS.length;

  function chipsFor(key, color) {
    return (tally[key] || []).map(function(r) {
      return '<span class="mno-chip" style="background:' + color + '18;color:' + color + ';border:1px solid ' + color + '30;">' +
        (isFr ? r.nameFr.split('-')[0].trim() : r.name.split(' ')[0]) +
      '</span>';
    }).join('');
  }

  panel.innerHTML =
    '<div class="mno-eyebrow">' + (isFr ? '✦ Résultats nationaux' : '✦ النتائج الوطنية') + '</div>' +
    '<div class="mno-heading">' + (isFr ? 'Élections des Conseils régionaux 2021' : 'انتخابات المجالس الجهوية 2021') + '</div>' +
    '<div class="mno-split">' +
      '<div class="mno-party-card" style="background:' + rniColor + '12;border:1.5px solid ' + rniColor + '30;">' +
        '<div class="mno-party-count" style="color:' + rniColor + ';">' + rniCount + '</div>' +
        '<div class="mno-party-name" style="color:' + rniColor + ';">RNI</div>' +
        '<div class="mno-party-label">' + (isFr ? 'régions remportées' : 'جهة فازت بها') + '</div>' +
      '</div>' +
      '<div class="mno-party-card" style="background:' + pamColor + '12;border:1.5px solid ' + pamColor + '30;">' +
        '<div class="mno-party-count" style="color:' + pamColor + ';">' + pamCount + '</div>' +
        '<div class="mno-party-name" style="color:' + pamColor + ';">PAM</div>' +
        '<div class="mno-party-label">' + (isFr ? 'régions remportées' : 'جهة فازت بها') + '</div>' +
      '</div>' +
    '</div>' +
    '<div class="mno-bar-wrap">' +
      '<div class="mno-bar-labels"><span style="color:' + rniColor + ';">RNI ' + Math.round(rniCount/total*100) + '%</span>' +
        '<span style="color:' + pamColor + ';">' + Math.round(pamCount/total*100) + '% PAM</span></div>' +
      '<div class="mno-bar">' +
        '<div class="mno-bar-fill" id="mnoBarRni" style="width:0%;background:' + rniColor + ';"></div>' +
        '<div class="mno-bar-fill" id="mnoBarPam" style="width:0%;background:' + pamColor + ';"></div>' +
      '</div>' +
    '</div>' +
    '<div class="mno-regions-row">' +
      '<div class="mno-regions-label" style="color:' + rniColor + ';">RNI — ' + (isFr ? 'Régions' : 'الجهات') + '</div>' +
      '<div class="mno-chips">' + chipsFor('RNI', rniColor) + '</div>' +
    '</div>' +
    '<div class="mno-regions-row">' +
      '<div class="mno-regions-label" style="color:' + pamColor + ';">PAM — ' + (isFr ? 'Régions' : 'الجهات') + '</div>' +
      '<div class="mno-chips">' + chipsFor('PAM', pamColor) + '</div>' +
    '</div>' +
    '<div class="mno-note">' +
      (isFr
        ? '💡 Cliquez sur une région de la carte pour explorer les résultats détaillés.'
        : '💡 اضغط على أي جهة في الخريطة لاستعراض نتائجها التفصيلية.') +
    '</div>';

  // Animate bars after render
  setTimeout(function() {
    var barRni = document.getElementById('mnoBarRni');
    var barPam = document.getElementById('mnoBarPam');
    if (barRni) barRni.style.width = Math.round(rniCount / total * 100) + '%';
    if (barPam) barPam.style.width = Math.round(pamCount / total * 100) + '%';
  }, 80);
}

// ═══════════════════════════════════════════════════════════════
//  FIREBASE REALTIME DATABASE — Live Counters
// ═══════════════════════════════════════════════════════════════
//
//  HOW TO SET UP (one-time, takes ~5 minutes):
//  1. Go to https://console.firebase.google.com
//  2. Create a project (or open existing one)
//  3. Add a Web app → copy the config object below
//  4. Go to Realtime Database → Create database (start in test mode)
//  5. Paste your real values into FW_FIREBASE_CONFIG below
//  6. In Firebase Console → Realtime Database → Rules, set:
//     { "rules": { "counters": { ".read": true, ".write": true } } }
//
//  ↓↓↓ REPLACE THESE PLACEHOLDER VALUES WITH YOUR OWN ↓↓↓
var FW_FIREBASE_CONFIG = {
  apiKey:            "AIzaSyCsGIgVs039lMjPrwsYlFKve5gVvKCy5a8",
  authDomain:        "feinwaqfin.firebaseapp.com",
  databaseURL:       "https://feinwaqfin-default-rtdb.europe-west1.firebasedatabase.app",
  projectId:         "feinwaqfin",
  storageBucket:     "feinwaqfin.firebasestorage.app",
  messagingSenderId: "964609541535",
  appId:             "1:964609541535:web:6c878879a3a6838a9729aa"
};
//  ↑↑↑ ————————————————————————————————————————————————— ↑↑↑

var _fbApp = null;
var _fbDb  = null;

// Counter key → DOM element IDs that display the value
var FW_COUNTER_MAP = {
  quizCompleted: ['cnt1', 'heroCount'],
  comparisons:   ['cnt2'],
  waShares:      ['cnt3']
};

function initFirebase() {
  // Show — placeholder when Firebase is not yet configured
  if (FW_FIREBASE_CONFIG.apiKey === 'YOUR_API_KEY') {
    var allIds = Object.values(FW_COUNTER_MAP).reduce(function(a,b){ return a.concat(b); }, []);
    allIds.forEach(function(id) {
      var el = document.getElementById(id);
      if (el) { el.textContent = '—'; el.removeAttribute('data-target'); }
    });
    return;
  }
  if (typeof firebase === 'undefined') {
    console.warn('[fw] Firebase SDK not loaded — counters will be static.');
    return;
  }
  // Guard: avoid re-initialising if already done (e.g. hot reload)
  if (_fbApp) return;
  try {
    _fbApp = firebase.initializeApp(FW_FIREBASE_CONFIG);
    _fbDb  = firebase.database();
    fbLoadCounters();
  } catch (e) {
    console.warn('[fw] Firebase init failed:', e.message);
  }
}

/**
 * Atomically increment a named counter in Firebase
 * and immediately update the matching display elements.
 */
function fbIncrement(key) {
  if (!_fbDb) return;
  var ref = _fbDb.ref('counters/' + key);
  ref.transaction(function(current) {
    return (current || 0) + 1;
  }, function(err, committed, snap) {
    if (!err && committed) {
      var val = snap.val();
      _fbUpdateDisplay(key, val);
    }
  }).catch(function(err) {
    console.warn('[fw] Counter increment failed (offline?):', err.message);
  });
}

/**
 * Load all counter values from Firebase on page load
 * and seed the animated counter data-target attributes
 * so the entrance animation counts up to the real number.
 */
function fbLoadCounters() {
  if (!_fbDb) return;
  _fbDb.ref('counters').once('value', function(snap) {
    var data = snap.val() || {};
    Object.keys(FW_COUNTER_MAP).forEach(function(key) {
      if (!data[key]) return;
      var val = data[key];
      FW_COUNTER_MAP[key].forEach(function(id) {
        var el = document.getElementById(id);
        if (!el) return;
        // Update data-target for future scroll-triggered animations
        el.setAttribute('data-target', val);
        // Also update text immediately — fixes hero counter showing stale
        // hardcoded value when it animates before Firebase responds
        el.textContent = val.toLocaleString();
      });
    });
  });
}

/** Update display elements for a given counter key */
function _fbUpdateDisplay(key, val) {
  var ids = FW_COUNTER_MAP[key] || [];
  ids.forEach(function(id) {
    var el = document.getElementById(id);
    if (el) el.textContent = val.toLocaleString();
  });
}
