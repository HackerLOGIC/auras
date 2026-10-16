/* AURAS i18n framework v2 - shared by all 10 websites */
/* Languages: EN / ZH / FR / ES / DE, remembered in localStorage */
(function () {
  'use strict';
  var LANG_KEY = 'auras_lang';
  var LANGS = ['en', 'zh', 'fr', 'es', 'de'];
  var LABELS = { en: 'EN', zh: '中文', fr: 'FR', es: 'ES', de: 'DE' };

  var DICT = {
    "Home": { en: "Home", zh: "首页", fr: "Accueil", es: "Inicio", de: "Startseite" },
    "About": { en: "About", zh: "关于我们", fr: "À propos", es: "Sobre nosotros", de: "Über uns" },
    "About Us": { en: "About Us", zh: "关于我们", fr: "À propos de nous", es: "Sobre nosotros", de: "Über uns" },
    "Milestones": { en: "Milestones", zh: "里程碑", fr: "Jalons", es: "Hitos", de: "Meilensteine" },
    "Services": { en: "Services", zh: "服务", fr: "Services", es: "Servicios", de: "Dienstleistungen" },
    "Products": { en: "Products", zh: "产品", fr: "Produits", es: "Productos", de: "Produkte" },
    "New Energy": { en: "New Energy", zh: "新能源", fr: "Nouvelles énergies", es: "Nueva energía", de: "Neue Energie" },
    "Projects": { en: "Projects", zh: "项目", fr: "Projets", es: "Proyectos", de: "Projekte" },
    "News": { en: "News", zh: "新闻", fr: "Actualités", es: "Noticias", de: "Neuigkeiten" },
    "Business & Pleasure": { en: "Business & Pleasure", zh: "商务与生活", fr: "Affaires et plaisir", es: "Negocios y placer", de: "Geschäft und Vergnügen" },
    "Contact": { en: "Contact", zh: "联系我们", fr: "Contact", es: "Contacto", de: "Kontakt" },
    "Employee Login": { en: "Employee Login", zh: "员工登录", fr: "Connexion employé", es: "Inicio de sesión de empleados", de: "Mitarbeiter-Login" },
    "Staff Portal": { en: "Staff Portal", zh: "员工后台", fr: "Portail du personnel", es: "Portal del personal", de: "Mitarbeiterportal" },
    "Good News": { en: "Good News", zh: "重大喜讯", fr: "Bonne nouvelle", es: "Buenas noticias", de: "Gute Nachrichten" },
    "Read News": { en: "Read News", zh: "阅读新闻", fr: "Lire l'actualité", es: "Leer noticias", de: "Neuigkeiten lesen" },
    "Close": { en: "Close", zh: "关闭", fr: "Fermer", es: "Cerrar", de: "Schließen" },
    "Quick Links": { en: "Quick Links", zh: "快捷链接", fr: "Liens rapides", es: "Enlaces rápidos", de: "Schnellzugriff" },
    "More": { en: "More", zh: "更多", fr: "Plus", es: "Más", de: "Mehr" },
    "AURAS International": { en: "AURAS International", zh: "AURAS 国际", fr: "AURAS International", es: "AURAS Internacional", de: "AURAS International" },
    "One Group, Complete Solutions": { en: "One Group, Complete Solutions", zh: "一个集团，一站式解决方案", fr: "Un groupe, des solutions complètes", es: "Un grupo, soluciones completas", de: "Eine Gruppe, komplette Lösungen" },
    "News & Milestones": { en: "News & Milestones", zh: "新闻与里程碑", fr: "Actualités et jalons", es: "Noticias e hitos", de: "Neuigkeiten und Meilensteine" },
    "Seven Sections of Our Story": { en: "Seven Sections of Our Story", zh: "我们的七个篇章", fr: "Sept chapitres de notre histoire", es: "Siete secciones de nuestra historia", de: "Sieben Kapitel unserer Geschichte" },
    "About AURAS": { en: "About AURAS", zh: "关于 AURAS", fr: "À propos d'AURAS", es: "Sobre AURAS", de: "Über AURAS" },
    "Latest News": { en: "Latest News", zh: "最新新闻", fr: "Dernières actualités", es: "Últimas noticias", de: "Neueste Nachrichten" },
    "Explore AURAS": { en: "Explore AURAS", zh: "探索 AURAS", fr: "Découvrir AURAS", es: "Explorar AURAS", de: "AURAS entdecken" },
    "What We Do": { en: "What We Do", zh: "我们做什么", fr: "Ce que nous faisons", es: "Lo que hacemos", de: "Was wir tun" },
    "Our Team": { en: "Our Team", zh: "我们的团队", fr: "Notre équipe", es: "Nuestro equipo", de: "Unser Team" },
    "Company & Order Management": { en: "Company & Order Management", zh: "公司与订单管理", fr: "Gestion d'entreprise et des commandes", es: "Gestión de empresa y pedidos", de: "Unternehmens- und Auftragsverwaltung" },
    "Our Partners": { en: "Our Partners", zh: "我们的合作伙伴", fr: "Nos partenaires", es: "Nuestros socios", de: "Unsere Partner" },
    "Worldwide Presence": { en: "Worldwide Presence", zh: "全球布局", fr: "Présence mondiale", es: "Presencia mundial", de: "Weltweite Präsenz" },
    "Certificates & Qualifications": { en: "Certificates & Qualifications", zh: "证书与资质", fr: "Certificats et qualifications", es: "Certificados y cualificaciones", de: "Zertifikate und Qualifikationen" },
    "Business Overview": { en: "Business Overview", zh: "业务概览", fr: "Aperçu de l'activité", es: "Resumen del negocio", de: "Geschäftsüberblick" },
    "Core Values": { en: "Core Values", zh: "核心价值观", fr: "Valeurs fondamentales", es: "Valores fundamentales", de: "Kernwerte" },
    "People Power": { en: "People Power", zh: "团队力量", fr: "Force humaine", es: "Fuerza del equipo", de: "Team-Stärke" },
    "Management Systems": { en: "Management Systems", zh: "管理体系", fr: "Systèmes de gestion", es: "Sistemas de gestión", de: "Managementsysteme" },
    "Partners & Global Cooperation": { en: "Partners & Global Cooperation", zh: "合作伙伴与全球协作", fr: "Partenaires et coopération mondiale", es: "Socios y cooperación global", de: "Partner und globale Zusammenarbeit" },
    "Global Layout & Structure": { en: "Global Layout & Structure", zh: "全球架构与布局", fr: "Disposition et structure mondiales", es: "Estructura y diseño global", de: "Globale Struktur und Aufbau" },
    "Certificates": { en: "Certificates", zh: "证书", fr: "Certificats", es: "Certificados", de: "Zertifikate" },
    "Contact Information": { en: "Contact Information", zh: "联系信息", fr: "Coordonnées", es: "Información de contacto", de: "Kontaktinformationen" },
    "Inquiry Form": { en: "Inquiry Form", zh: "咨询表单", fr: "Formulaire de demande", es: "Formulario de consulta", de: "Anfrageformular" },
    "Team Life in Pictures": { en: "Team Life in Pictures", zh: "团队影像", fr: "La vie d'équipe en images", es: "La vida del equipo en imágenes", de: "Teamleben in Bildern" },
    "Our Culture": { en: "Our Culture", zh: "我们的文化", fr: "Notre culture", es: "Nuestra cultura", de: "Unsere Kultur" },
    "Moments": { en: "Moments", zh: "精彩瞬间", fr: "Instants", es: "Momentos", de: "Momente" },
    "Beyond the Office": { en: "Beyond the Office", zh: "办公室之外", fr: "Au-delà du bureau", es: "Más allá de la oficina", de: "Jenseits des Büros" },
    "Our Journey": { en: "Our Journey", zh: "我们的旅程", fr: "Notre parcours", es: "Nuestro viaje", de: "Unsere Reise" },
    "Trade Fairs & Events": { en: "Trade Fairs & Events", zh: "展会与活动", fr: "Salons et événements", es: "Ferias y eventos", de: "Messen und Veranstaltungen" },
    "Development History": { en: "Development History", zh: "发展历程", fr: "Historique du développement", es: "Historia del desarrollo", de: "Entwicklungsgeschichte" },
    "Exhibition Moments": { en: "Exhibition Moments", zh: "展会瞬间", fr: "Moments d'exposition", es: "Momentos de exposición", de: "Ausstellungsmomente" },
    "Global Cooperation": { en: "Global Cooperation", zh: "全球合作", fr: "Coopération mondiale", es: "Cooperación global", de: "Globale Zusammenarbeit" },
    "Eight Future-Ready Business Lines": { en: "Eight Future-Ready Business Lines", zh: "八大未来业务线", fr: "Huit lignes d'activité tournées vers l'avenir", es: "Ocho líneas de negocio preparadas para el futuro", de: "Acht zukunftsfähige Geschäftsbereiche" },
    "New Energy & New Business": { en: "New Energy & New Business", zh: "新能源与新业务", fr: "Nouvelles énergies et nouveaux métiers", es: "Nueva energía y nuevos negocios", de: "Neue Energie und neue Geschäfte" },
    "Charging Infrastructure": { en: "Charging Infrastructure", zh: "充电基础设施", fr: "Infrastructures de recharge", es: "Infraestructura de carga", de: "Ladeinfrastruktur" },
    "Brands & Product Categories": { en: "Brands & Product Categories", zh: "品牌与产品类别", fr: "Marques et catégories de produits", es: "Marcas y categorías de productos", de: "Marken und Produktkategorien" },
    "Product Lines": { en: "Product Lines", zh: "产品线", fr: "Gammes de produits", es: "Líneas de producto", de: "Produktlinien" },
    "Quality Products": { en: "Quality Products", zh: "优质产品", fr: "Produits de qualité", es: "Productos de calidad", de: "Qualitätsprodukte" },
    "Production Line Project Cases": { en: "Production Line Project Cases", zh: "生产线项目案例", fr: "Cas de projets de lignes de production", es: "Casos de proyectos de líneas de producción", de: "Projektfälle Produktionslinien" },
    "Project Gallery": { en: "Project Gallery", zh: "项目图集", fr: "Galerie de projets", es: "Galería de proyectos", de: "Projektgalerie" },
    "Delivered Projects": { en: "Delivered Projects", zh: "已交付项目", fr: "Projets livrés", es: "Proyectos entregados", de: "Gelieferte Projekte" },
    "On-Site Gallery": { en: "On-Site Gallery", zh: "现场图集", fr: "Galerie sur site", es: "Galería in situ", de: "Galerie vor Ort" },
    "Your Project, Our Mission": { en: "Your Project, Our Mission", zh: "您的项目，我们的使命", fr: "Votre projet, notre mission", es: "Su proyecto, nuestra misión", de: "Ihr Projekt, unsere Mission" },
    "Service Advantages": { en: "Service Advantages", zh: "服务优势", fr: "Avantages des services", es: "Ventajas del servicio", de: "Servicevorteile" },
    "Trade Services": { en: "Trade Services", zh: "贸易服务", fr: "Services commerciaux", es: "Servicios comerciales", de: "Handelsservices" },
    "AURAS Logistics": { en: "AURAS Logistics", zh: "AURAS 物流", fr: "Logistique AURAS", es: "Logística AURAS", de: "AURAS Logistik" },
    "Why AURAS": { en: "Why AURAS", zh: "为什么选择 AURAS", fr: "Pourquoi AURAS", es: "Por qué AURAS", de: "Warum AURAS" },
    "Explore Our Services": { en: "Explore Our Services", zh: "探索我们的服务", fr: "Découvrez nos services", es: "Explorar nuestros servicios", de: "Entdecken Sie unsere Dienstleistungen" },
    "Contact Us": { en: "Contact Us", zh: "联系我们", fr: "Contactez-nous", es: "Contáctenos", de: "Kontaktieren Sie uns" },
    "More About Us": { en: "More About Us", zh: "更多关于我们", fr: "En savoir plus", es: "Más sobre nosotros", de: "Mehr über uns" },
    "View All News": { en: "View All News", zh: "查看全部新闻", fr: "Voir toutes les actualités", es: "Ver todas las noticias", de: "Alle Neuigkeiten ansehen" },
    "See Our Milestones": { en: "See Our Milestones", zh: "查看我们的里程碑", fr: "Voir nos jalons", es: "Ver nuestros hitos", de: "Unsere Meilensteine ansehen" },
    "Get in Touch": { en: "Get in Touch", zh: "与我们联系", fr: "Entrer en contact", es: "Ponte en contacto", de: "Kontakt aufnehmen" },
    "Read Related News": { en: "Read Related News", zh: "阅读相关新闻", fr: "Lire les actualités associées", es: "Leer noticias relacionadas", de: "Verwandte Neuigkeiten lesen" },
    "Partner With Us": { en: "Partner With Us", zh: "与我们合作", fr: "Partenariat", es: "Asóciese con nosotros", de: "Werden Sie unser Partner" },
    "Ask About Products": { en: "Ask About Products", zh: "咨询产品", fr: "Renseignez-vous sur les produits", es: "Pregunte por los productos", de: "Fragen Sie nach Produkten" },
    "Submit Project Inquiry": { en: "Submit Project Inquiry", zh: "提交项目咨询", fr: "Envoyer une demande de projet", es: "Enviar consulta de proyecto", de: "Projektanfrage senden" },
    "Request a Quote": { en: "Request a Quote", zh: "获取报价", fr: "Demander un devis", es: "Solicitar presupuesto", de: "Angebot anfordern" },
    "Submit Inquiry": { en: "Submit Inquiry", zh: "提交咨询", fr: "Envoyer la demande", es: "Enviar consulta", de: "Anfrage senden" },
    "Company Profile": { en: "Company Profile", zh: "公司概况", fr: "Profil de l'entreprise", es: "Perfil de la empresa", de: "Firmenprofil" },
    "Our Services": { en: "Our Services", zh: "我们的服务", fr: "Nos services", es: "Nuestros servicios", de: "Unsere Dienstleistungen" },
    "AURAS in the Market": { en: "AURAS in the Market", zh: "AURAS 市场实力", fr: "AURAS sur le marché", es: "AURAS en el mercado", de: "AURAS am Markt" },
    "New Business Lines": { en: "New Business Lines", zh: "新业务板块", fr: "Nouvelles lignes d'activité", es: "Nuevas líneas de negocio", de: "Neue Geschäftsbereiche" },
    "Project Done by AURAS": { en: "Project Done by AURAS", zh: "AURAS 交付项目", fr: "Projets réalisés par AURAS", es: "Proyectos realizados por AURAS", de: "Von AURAS umgesetzte Projekte" },
    "News & Updates": { en: "News & Updates", zh: "新闻动态", fr: "Actualités et mises à jour", es: "Noticias y actualizaciones", de: "Neuigkeiten und Updates" },
    "AURAS Through the Time": { en: "AURAS Through the Time", zh: "AURAS 发展历程", fr: "AURAS à travers le temps", es: "AURAS a través del tiempo", de: "AURAS im Wandel der Zeit" },
    "Contact & Inquiries": { en: "Contact & Inquiries", zh: "联系我们与询盘", fr: "Contact et demandes", es: "Contacto y consultas", de: "Kontakt und Anfragen" },
    "News Article": { en: "News Article", zh: "新闻详情", fr: "Article d'actualité", es: "Artículo de noticias", de: "Nachrichtenartikel" },
    "Leisure": { en: "Leisure", zh: "商务休闲", fr: "Affaires et loisirs", es: "Negocios y ocio", de: "Geschäft und Freizeit" },
    "Learn More →": { en: "Learn More →", zh: "了解更多 →", fr: "En savoir plus →", es: "Saber más →", de: "Mehr erfahren →" },
    "Read More →": { en: "Read More →", zh: "阅读更多 →", fr: "Lire la suite →", es: "Leer más →", de: "Weiterlesen →" },
    "About Us →": { en: "About Us →", zh: "关于我们 →", fr: "À propos →", es: "Sobre nosotros →", de: "Über uns →" },
    "Services →": { en: "Services →", zh: "服务 →", fr: "Services →", es: "Servicios →", de: "Dienstleistungen →" },
    "Products →": { en: "Products →", zh: "产品 →", fr: "Produits →", es: "Productos →", de: "Produkte →" },
    "Projects →": { en: "Projects →", zh: "项目 →", fr: "Projets →", es: "Proyectos →", de: "Projekte →" },
    "Milestones →": { en: "Milestones →", zh: "里程碑 →", fr: "Jalons →", es: "Hitos →", de: "Meilensteine →" },
    "New Energy →": { en: "New Energy →", zh: "新能源 →", fr: "Nouvelles énergies →", es: "Nueva energía →", de: "Neue Energie →" },
    "Life & Fun →": { en: "Life & Fun →", zh: "生活与乐趣 →", fr: "Vie et loisirs →", es: "Vida y diversión →", de: "Leben & Spaß →" },
    "Back to News": { en: "Back to News", zh: "返回新闻", fr: "Retour aux actualités", es: "Volver a noticias", de: "Zurück zu Neuigkeiten" },
    "← Back to News": { en: "← Back to News", zh: "← 返回新闻", fr: "← Retour aux actualités", es: "← Volver a noticias", de: "← Zurück zu Neuigkeiten" },
    "News not found.": { en: "News not found.", zh: "未找到该新闻。", fr: "Actualité introuvable.", es: "Noticia no encontrada.", de: "Neuigkeit nicht gefunden." },
    "No news published yet. Check back soon.": { en: "No news published yet. Check back soon.", zh: "暂无已发布的新闻，敬请期待。", fr: "Aucune actualité publiée pour le moment. Revenez bientôt.", es: "Aún no hay noticias publicadas. Vuelva pronto.", de: "Noch keine Neuigkeiten veröffentlicht. Schauen Sie bald wieder vorbei." },
    "No milestones yet.": { en: "No milestones yet.", zh: "暂无里程碑记录。", fr: "Aucun jalon pour le moment.", es: "Aún no hay hitos.", de: "Noch keine Meilensteine." },
    "Announced: ": { en: "Announced: ", zh: "发布于：", fr: "Annoncé le : ", es: "Anunciado: ", de: "Angekündigt: " },
    "Send Your Inquiry": { en: "Send Your Inquiry", zh: "发送您的询盘", fr: "Envoyez votre demande", es: "Envíe su consulta", de: "Anfrage senden" },
    "Tell Us Your Production Line Need": { en: "Tell Us Your Production Line Need", zh: "告诉我们您的生产线需求", fr: "Dites-nous votre besoin en ligne de production", es: "Cuéntenos su necesidad de línea de producción", de: "Teilen Sie uns Ihren Bedarf an Produktionslinien mit" },
    "Your Name *": { en: "Your Name *", zh: "您的姓名 *", fr: "Votre nom *", es: "Su nombre *", de: "Ihr Name *" },
    "Email *": { en: "Email *", zh: "邮箱 *", fr: "E-mail *", es: "Correo electrónico *", de: "E-Mail *" },
    "Message *": { en: "Message *", zh: "留言 *", fr: "Message *", es: "Mensaje *", de: "Nachricht *" },
    "Country": { en: "Country", zh: "国家/地区", fr: "Pays", es: "País", de: "Land" },
    "Phone": { en: "Phone", zh: "电话", fr: "Téléphone", es: "Teléfono", de: "Telefon" },
    "Company": { en: "Company", zh: "公司", fr: "Société", es: "Empresa", de: "Firma" },
    "Interest": { en: "Interest", zh: "感兴趣的内容", fr: "Intérêt", es: "Interés", de: "Interesse" },
    "Address:": { en: "Address:", zh: "地址：", fr: "Adresse :", es: "Dirección:", de: "Adresse:" },
    "Email:": { en: "Email:", zh: "邮箱：", fr: "E-mail :", es: "Correo:", de: "E-Mail:" },
    "Websites:": { en: "Websites:", zh: "官网：", fr: "Sites web :", es: "Sitios web:", de: "Websites:" },
    "Business Lines:": { en: "Business Lines:", zh: "业务线：", fr: "Lignes d'activité :", es: "Líneas de negocio:", de: "Geschäftsbereiche:" },
    "Announcement": { en: "Announcement", zh: "重大喜讯", fr: "Annonce", es: "Anuncio", de: "Ankündigung" },
    "Archive by Year": { en: "Archive by Year", zh: "按年份归档", fr: "Archives par année", es: "Archivo por año", de: "Archiv nach Jahr" },
    "Years in Trade": { en: "Years in Trade", zh: "从业年限", fr: "Années d'expérience", es: "Años de experiencia", de: "Jahre im Handel" },
    "Production Lines Delivered": { en: "Production Lines Delivered", zh: "已交付生产线", fr: "Lignes de production livrées", es: "Líneas de producción entregadas", de: "Gelieferte Produktionslinien" },
    "Countries Served": { en: "Countries Served", zh: "服务国家/地区", fr: "Pays desservis", es: "Países atendidos", de: "Bediente Länder" },
    "Industry Categories": { en: "Industry Categories", zh: "行业类别", fr: "Catégories d'industrie", es: "Categorías de industria", de: "Branchenkategorien" },
    "Food & Beverage Line": { en: "Food & Beverage Line", zh: "食品饮料线", fr: "Ligne agroalimentaire", es: "Línea de alimentos y bebidas", de: "Lebensmittel- und Getränkelinie" },
    "Packaging Line": { en: "Packaging Line", zh: "包装线", fr: "Ligne d'emballage", es: "Línea de embalaje", de: "Verpackungslinie" },
    "Building Materials Line": { en: "Building Materials Line", zh: "建材线", fr: "Ligne de matériaux de construction", es: "Línea de materiales de construcción", de: "Baustofflinie" },
    "Automotive Line": { en: "Automotive Line", zh: "汽车相关产线", fr: "Ligne automobile", es: "Línea automotriz", de: "Automobillinie" },
    "Environmental & Other": { en: "Environmental & Other", zh: "环保与其他", fr: "Environnement et autres", es: "Ambiental y otros", de: "Umwelt & Sonstiges" },
    "Mechanical & Electronic Assembly": { en: "Mechanical & Electronic Assembly", zh: "机电组装线", fr: "Assemblage mécanique et électronique", es: "Ensamblaje mecánico y electrónico", de: "Mechanische & elektronische Montage" },
    "Vision & Business Overview": { en: "Vision & Business Overview", zh: "愿景与业务概览", fr: "Vision et aperçu de l'activité", es: "Visión y resumen del negocio", de: "Vision und Geschäftsüberblick" },
    "Company Structure": { en: "Company Structure", zh: "公司架构", fr: "Structure de l'entreprise", es: "Estructura de la empresa", de: "Unternehmensstruktur" },
    "Business Coverage: Trade · Logistics · Products · Projects · New Energy": { en: "Business Coverage: Trade · Logistics · Products · Projects · New Energy", zh: "业务覆盖：贸易 · 物流 · 产品 · 项目 · 新能源", fr: "Couverture : Commerce · Logistique · Produits · Projets · Nouvelles énergies", es: "Cobertura: Comercio · Logística · Productos · Proyectos · Nueva energía", de: "Abdeckung: Handel · Logistik · Produkte · Projekte · Neue Energie" },
    "Trade Services · Logistics · Products · Projects · New Energy": { en: "Trade Services · Logistics · Products · Projects · New Energy", zh: "贸易服务 · 物流 · 产品 · 项目 · 新能源", fr: "Services commerciaux · Logistique · Produits · Projets · Nouvelles énergies", es: "Servicios · Logística · Productos · Proyectos · Nueva energía", de: "Handel · Logistik · Produkte · Projekte · Neue Energie" },
    "Logistics That Deliver": { en: "Logistics That Deliver", zh: "物流实力", fr: "Une logistique qui livre", es: "Logística que entrega", de: "Logistik, die liefert" },
    "Full-Cycle Trade Service": { en: "Full-Cycle Trade Service", zh: "全流程贸易服务", fr: "Service commercial complet", es: "Servicio comercial de ciclo completo", de: "Kompletter Handelsservice" },
    "One-Stop Solutions": { en: "One-Stop Solutions", zh: "一站式解决方案", fr: "Solutions clés en main", es: "Soluciones integrales", de: "Komplettlösungen" },
    "Quality Assurance": { en: "Quality Assurance", zh: "质量保障", fr: "Assurance qualité", es: "Garantía de calidad", de: "Qualitätssicherung" },
    "Reliable Delivery": { en: "Reliable Delivery", zh: "可靠交付", fr: "Livraison fiable", es: "Entrega confiable", de: "Zuverlässige Lieferung" },
    "Cargo Tracking & Updates": { en: "Cargo Tracking & Updates", zh: "货物跟踪与更新", fr: "Suivi de la cargaison", es: "Seguimiento de carga", de: "Sendungsverfolgung" },
    "Warehousing & Consolidation": { en: "Warehousing & Consolidation", zh: "仓储与拼箱", fr: "Entreposage et consolidation", es: "Almacenamiento y consolidación", de: "Lagerung & Konsolidierung" },
    "Door-to-Door Delivery": { en: "Door-to-Door Delivery", zh: "门到门配送", fr: "Livraison de porte à porte", es: "Entrega puerta a puerta", de: "Lieferung von Tür zu Tür" },
    "Customs Brokerage": { en: "Customs Brokerage", zh: "报关代理", fr: "Courtage en douane", es: "Corretaje de aduanas", de: "Zollabfertigung" },
    "Export Documentation": { en: "Export Documentation", zh: "出口单证", fr: "Documentation d'exportation", es: "Documentación de exportación", de: "Exporthandling" },
    "FCL & LCL worldwide": { en: "FCL & LCL worldwide", zh: "全球整柜与拼箱", fr: "FCL et LCL dans le monde", es: "FCL y LCL mundial", de: "FCL & LCL weltweit" },
    "Purchasing / Sourcing:": { en: "Purchasing / Sourcing:", zh: "采购与寻源：", fr: "Achat / Approvisionnement :", es: "Compras / Abastecimiento:", de: "Einkauf / Beschaffung:" },
    "Transportation:": { en: "Transportation:", zh: "运输：", fr: "Transport :", es: "Transporte:", de: "Transport:" },
    "Quality Control (QC):": { en: "Quality Control (QC):", zh: "质量控制（QC）：", fr: "Contrôle qualité (CQ) :", es: "Control de calidad (CC):", de: "Qualitätskontrolle (QC):" },
    "Customs Clearance:": { en: "Customs Clearance:", zh: "清关：", fr: "Dédouanement :", es: "Despacho de aduanas:", de: "Zollabfertigung:" },
    "Translation:": { en: "Translation:", zh: "翻译：", fr: "Traduction :", es: "Traducción:", de: "Übersetzung:" },
    "Negotiation:": { en: "Negotiation:", zh: "谈判：", fr: "Négociation :", es: "Negociación:", de: "Verhandlung:" },
    "Order Management:": { en: "Order Management:", zh: "订单管理：", fr: "Gestion des commandes :", es: "Gestión de pedidos:", de: "Auftragsverwaltung:" },
    "Sea Forwarding:": { en: "Sea Forwarding:", zh: "海运：", fr: "Fret maritime :", es: "Flete marítimo:", de: "Seefracht:" },
    "Air Forwarding:": { en: "Air Forwarding:", zh: "空运：", fr: "Fret aérien :", es: "Flete aéreo:", de: "Luftfracht:" },
    "Your Trusted Global Trade Partner": { en: "Your Trusted Global Trade Partner", zh: "您值得信赖的全球贸易伙伴", fr: "Votre partenaire commercial mondial de confiance", es: "Su socio comercial mundial de confianza", de: "Ihr vertrauenswürdiger globaler Handelspartner" },
    "A Global Trading Group Built on Trust": { en: "A Global Trading Group Built on Trust", zh: "以信任为基石的国际集团", fr: "Un groupe mondial bâti sur la confiance", es: "Un grupo global construido sobre la confianza", de: "Eine auf Vertrauen aufgebaute Handelsgruppe" },
    "Delivering Excellence Worldwide.": { en: "Delivering Excellence Worldwide.", zh: "在全球交付卓越品质。", fr: "L'excellence dans le monde.", es: "Excelencia en todo el mundo.", de: "Exzellenz weltweit." },
    "Built for International Buyers": { en: "Built for International Buyers", zh: "为国际买家打造", fr: "Conçu pour les acheteurs internationaux", es: "Diseñado para compradores internacionales", de: "Für internationale Käufer entwickelt" },
    "Multi-Standard DC Fast Charging": { en: "Multi-Standard DC Fast Charging", zh: "多标准直流快充", fr: "Recharge rapide DC multi-normes", es: "Carga rápida DC multinorma", de: "Multi-Standard DC-Schnellladung" },
    "EV Fast Charging": { en: "EV Fast Charging", zh: "电动汽车快充", fr: "Recharge rapide VE", es: "Carga rápida para vehículos eléctricos", de: "EV-Schnellladen" },
    "Construction Business": { en: "Construction Business", zh: "建筑工程业务", fr: "Activité de construction", es: "Negocio de construcción", de: "Baugeschäft" },
    "Energy Stations & Factories": { en: "Energy Stations & Factories", zh: "能源站与工厂", fr: "Stations et usines d'énergie", es: "Estaciones y fábricas de energía", de: "Energiestationen & -fabriken" },
    "Crude Oil & Natural Gas": { en: "Crude Oil & Natural Gas", zh: "原油与天然气", fr: "Pétrole brut et gaz naturel", es: "Petróleo crudo y gas natural", de: "Rohöl und Erdgas" },
    "Medicine Line": { en: "Medicine Line", zh: "医药产线", fr: "Ligne pharmaceutique", es: "Línea farmacéutica", de: "Pharmalinie" },
    "Cars Export": { en: "Cars Export", zh: "汽车出口", fr: "Exportation de voitures", es: "Exportación de autos", de: "Auto-Export" },
    "Green Hydrogen H2": { en: "Green Hydrogen H2", zh: "绿氢 H2", fr: "Hydrogène vert H2", es: "Hidrógeno verde H2", de: "Grüner Wasserstoff H2" },
    "AURAS Solar Energy": { en: "AURAS Solar Energy", zh: "AURAS 太阳能", fr: "Énergie solaire AURAS", es: "Energía solar AURAS", de: "AURAS Solarenergie" },
    "Gas Aluminum Radiator": { en: "Gas Aluminum Radiator", zh: "燃气铝制散热器", fr: "Radiateur en aluminium à gaz", es: "Radiador de aluminio a gas", de: "Gas-Aluminiumheizkörper" },
    "Valves & Copper Coil": { en: "Valves & Copper Coil", zh: "阀门与铜盘管", fr: "Vannes et serpentins en cuivre", es: "Válvulas y serpentín de cobre", de: "Ventile & Kupferspule" },
    "Fuel Dispenser": { en: "Fuel Dispenser", zh: "加油机", fr: "Distributeur de carburant", es: "Dispensador de combustible", de: "Zapfsäule" },
    "Product Categories": { en: "Product Categories", zh: "产品类别", fr: "Catégories de produits", es: "Categorías de productos", de: "Produktkategorien" },
    "Production Lines": { en: "Production Lines", zh: "生产线", fr: "Lignes de production", es: "Líneas de producción", de: "Produktionslinien" },
    "/ About Us": { en: "/ About Us", zh: "/ 关于我们", fr: "/ À propos", es: "/ Sobre nosotros", de: "/ Über uns" },
    "/ Contact": { en: "/ Contact", zh: "/ 联系我们", fr: "/ Contact", es: "/ Contacto", de: "/ Kontakt" },
    "/ Milestones": { en: "/ Milestones", zh: "/ 里程碑", fr: "/ Jalons", es: "/ Hitos", de: "/ Meilensteine" },
    "/ New Energy": { en: "/ New Energy", zh: "/ 新能源", fr: "/ Nouvelles énergies", es: "/ Nueva energía", de: "/ Neue Energie" },
    "/ Detail": { en: "/ Detail", zh: "/ 详情", fr: "/ Détail", es: "/ Detalle", de: "/ Details" },
    "/ News": { en: "/ News", zh: "/ 新闻", fr: "/ Actualités", es: "/ Noticias", de: "/ Neuigkeiten" },
    "/ Products": { en: "/ Products", zh: "/ 产品", fr: "/ Produits", es: "/ Productos", de: "/ Produkte" },
    "/ Projects": { en: "/ Projects", zh: "/ 项目", fr: "/ Projets", es: "/ Proyectos", de: "/ Projekte" },
    "/ Business & Pleasure": { en: "/ Business & Pleasure", zh: "/ 商务与生活", fr: "/ Affaires et plaisir", es: "/ Negocios y placer", de: "/ Geschäft und Vergnügen" },
    "Website: www.aurasgroup.com": { en: "Website: www.aurasgroup.com", zh: "官网：www.aurasgroup.com", fr: "Site web : www.aurasgroup.com", es: "Sitio web: www.aurasgroup.com", de: "Website: www.aurasgroup.com" },
    "Official Websites: www.aurasgroup.com / www.aurasgo.com": { en: "Official Websites: www.aurasgroup.com / www.aurasgo.com", zh: "官网：www.aurasgroup.com / www.aurasgo.com", fr: "Sites web : www.aurasgroup.com / www.aurasgo.com", es: "Sitios web: www.aurasgroup.com / www.aurasgo.com", de: "Websites: www.aurasgroup.com / www.aurasgo.com" },
    "Address: Suite A6/F Ritz Plaza, 122 Austin Rd, TST, KL, HK": { en: "Address: Suite A6/F Ritz Plaza, 122 Austin Rd, TST, KL, HK", zh: "地址：Suite A6/F Ritz Plaza, 122 Austin Rd, TST, KL, HK", fr: "Adresse : Suite A6/F Ritz Plaza, 122 Austin Rd, TST, KL, HK", es: "Dirección: Suite A6/F Ritz Plaza, 122 Austin Rd, TST, KL, HK", de: "Adresse: Suite A6/F Ritz Plaza, 122 Austin Rd, TST, KL, HK" },
    "Logistics": { en: "Logistics", zh: "物流", fr: "Logistique", es: "Logística", de: "Logistik" },
    "Welcome to AURAS": { en: "Welcome to AURAS", zh: "欢迎来到 AURAS", fr: "Bienvenue chez AURAS", es: "Bienvenido a AURAS", de: "Willkommen bei AURAS" },
    "Trade services:": { en: "Trade services:", zh: "贸易服务：", fr: "Services commerciaux :", es: "Servicios comerciales:", de: "Handelsdienstleistungen:" },
    "Logistics:": { en: "Logistics:", zh: "物流：", fr: "Logistique :", es: "Logística:", de: "Logistik:" },
    "Products:": { en: "Products:", zh: "产品：", fr: "Produits :", es: "Productos:", de: "Produkte:" },
    "New energy:": { en: "New energy:", zh: "新能源：", fr: "Nouvelles énergies :", es: "Nueva energía:", de: "Neue Energie:" },
    "Our Core Values": { en: "Our Core Values", zh: "我们的核心价值观", fr: "Nos valeurs fondamentales", es: "Nuestros valores fundamentales", de: "Unsere Kernwerte" },
    "Honesty": { en: "Honesty", zh: "诚信", fr: "Honnêteté", es: "Honestidad", de: "Ehrlichkeit" },
    "Quality First": { en: "Quality First", zh: "质量第一", fr: "La qualité d'abord", es: "Calidad primero", de: "Qualität zuerst" },
    "Global Vision": { en: "Global Vision", zh: "全球视野", fr: "Vision mondiale", es: "Visión global", de: "Globale Vision" },
    "Company Management System": { en: "Company Management System", zh: "公司管理体系", fr: "Système de gestion d'entreprise", es: "Sistema de gestión empresarial", de: "Unternehmensmanagementsystem" },
    "Order Management System": { en: "Order Management System", zh: "订单管理系统", fr: "Système de gestion des commandes", es: "Sistema de gestión de pedidos", de: "Auftragsmanagementsystem" },
    "Quality Control": { en: "Quality Control", zh: "质量控制", fr: "Contrôle qualité", es: "Control de calidad", de: "Qualitätskontrolle" },
    "International Projects": { en: "International Projects", zh: "国际项目", fr: "Projets internationaux", es: "Proyectos internacionales", de: "Internationale Projekte" },
    "Brands & Products": { en: "Brands & Products", zh: "品牌与产品", fr: "Marques et produits", es: "Marcas y productos", de: "Marken und Produkte" },
    "Business & Service Lines": { en: "Business & Service Lines", zh: "业务与服务板块", fr: "Lignes d'activité et services", es: "Líneas de negocio y servicios", de: "Geschäfts- und Servicebereiche" },
    "Hong Kong based, serving global markets": { en: "Hong Kong based, serving global markets", zh: "立足香港，服务全球市场", fr: "Basé à Hong Kong, au service des marchés mondiaux", es: "Con sede en Hong Kong, al servicio de los mercados mundiales", de: "In Hongkong ansässig, weltweit tätig" },
    "Complete company & order management systems": { en: "Complete company & order management systems", zh: "完善的公司与订单管理体系", fr: "Systèmes complets de gestion d'entreprise et des commandes", es: "Sistemas completos de gestión empresarial y de pedidos", de: "Komplette Unternehmens- und Auftragsverwaltung" },
    "Strong partnerships with verified manufacturers": { en: "Strong partnerships with verified manufacturers", zh: "与优质制造商建立稳固合作", fr: "Partenariats solides avec des fabricants vérifiés", es: "Alianzas sólidas con fabricantes verificados", de: "Starke Partnerschaften mit geprüften Herstellern" },
    "Full coverage: trade, logistics, projects, new energy": { en: "Full coverage: trade, logistics, projects, new energy", zh: "全面覆盖：贸易、物流、项目、新能源", fr: "Couverture complète : commerce, logistique, projets, nouvelles énergies", es: "Cobertura completa: comercio, logística, proyectos, nueva energía", de: "Volle Abdeckung: Handel, Logistik, Projekte, neue Energie" },
    "Reach AURAS": { en: "Reach AURAS", zh: "联系 AURAS", fr: "Contacter AURAS", es: "Contactar a AURAS", de: "AURAS kontaktieren" },
    "Work Hard, Celebrate Together": { en: "Work Hard, Celebrate Together", zh: "努力工作，共同庆祝", fr: "Travailler dur, célébrer ensemble", es: "Trabajar duro, celebrar juntos", de: "Hart arbeiten, gemeinsam feiern" },
    "Team travel and group excursions after major projects": { en: "Team travel and group excursions after major projects", zh: "重大项目后的团队旅行与集体出游", fr: "Voyages d'équipe après les grands projets", es: "Viajes de equipo tras grandes proyectos", de: "Teamreisen nach großen Projekten" },
    "Annual meetings with awards and shared celebrations": { en: "Annual meetings with awards and shared celebrations", zh: "年会颁奖与共同庆祝", fr: "Réunions annuelles avec remises de prix", es: "Reuniones anuales con premios y celebraciones", de: "Jahrestreffen mit Auszeichnungen" },
    "The personal touch that makes global trade trustworthy": { en: "The personal touch that makes global trade trustworthy", zh: "以人为本，让全球贸易值得信赖", fr: "La touche humaine qui rend le commerce mondial fiable", es: "El toque personal que hace confiable el comercio global", de: "Persönlicher Einsatz, der Handel vertrauenswürdig macht" },
    "Balance That Builds Trust": { en: "Balance That Builds Trust", zh: "平衡创造信任", fr: "L'équilibre qui bâtit la confiance", es: "El equilibrio que genera confianza", de: "Balance schafft Vertrauen" },
    "Cooperation & Signing Moments": { en: "Cooperation & Signing Moments", zh: "合作与签约时刻", fr: "Moments de coopération et de signature", es: "Momentos de cooperación y firma", de: "Kooperations- und Unterzeichnungsmomente" },
    "Long-term cooperation with partners worldwide": { en: "Long-term cooperation with partners worldwide", zh: "与全球伙伴长期合作", fr: "Coopération à long terme avec des partenaires mondiaux", es: "Cooperación a largo plazo con socios de todo el mundo", de: "Langfristige Zusammenarbeit mit Partnern weltweit" },
    "Annual supplier recognition and awards": { en: "Annual supplier recognition and awards", zh: "年度供应商表彰与颁奖", fr: "Reconnaissance et prix annuels des fournisseurs", es: "Reconocimiento y premios anuales a proveedores", de: "Jährliche Lieferantenauszeichnungen" },
    "Cooperation expanded across trade, projects and new energy": { en: "Cooperation expanded across trade, projects and new energy", zh: "合作扩展至贸易、项目与新能源", fr: "Coopération élargie au commerce, aux projets et aux nouvelles énergies", es: "Cooperación ampliada en comercio, proyectos y nueva energía", de: "Zusammenarbeit auf Handel, Projekte und neue Energie ausgeweitet" },
    "New energy business officially launched since 2024": { en: "New energy business officially launched since 2024", zh: "2024 年正式启动新能源业务", fr: "Activité nouvelles énergies lancée officiellement depuis 2024", es: "Negocio de nueva energía lanzado oficialmente desde 2024", de: "Neue-Energie-Geschäft seit 2024 offiziell gestartet" },
    "Exhibitions": { en: "Exhibitions", zh: "展会", fr: "Salons", es: "Exposiciones", de: "Ausstellungen" },
    "AURAS Energy: petrol stations and energy plant solutions.": { en: "AURAS Energy: petrol stations and energy plant solutions.", zh: "AURAS 能源：加油站与能源工厂解决方案。", fr: "AURAS Énergie : stations-service et solutions d'usines d'énergie.", es: "AURAS Energy: estaciones de servicio y soluciones de plantas de energía.", de: "AURAS Energy: Tankstellen und Energiewerkslösungen." },
    "60KW / 180KW / 300KW configurations": { en: "60KW / 180KW / 300KW configurations", zh: "60KW / 180KW / 300KW 多种配置", fr: "Configurations 60KW / 180KW / 300KW", es: "Configuraciones de 60KW / 180KW / 300KW", de: "60KW / 180KW / 300KW Konfigurationen" },
    "Multi-standard compatibility": { en: "Multi-standard compatibility", zh: "多标准兼容", fr: "Compatibilité multi-normes", es: "Compatibilidad multinorma", de: "Multi-Standard-Kompatibilität" },
    "Installation guidance and after-sales support": { en: "Installation guidance and after-sales support", zh: "安装指导与售后支持", fr: "Conseils d'installation et support après-vente", es: "Guía de instalación y soporte posventa", de: "Installationsanleitung und Kundendienst" },
    "Backed by our overseas tender success": { en: "Backed by our overseas tender success", zh: "海外中标业绩背书", fr: "Appuyé par nos succès d'appels d'offres à l'étranger", es: "Respaldado por nuestro éxito en licitaciones en el extranjero", de: "Gestützt auf unsere Erfolge bei Auslandsausschreibungen" },
    "Home & Office Supply": { en: "Home & Office Supply", zh: "家居与办公用品", fr: "Fournitures maison et bureau", es: "Suministros para hogar y oficina", de: "Haushalts- und Bürobedarf" },
    "Valves & Copper Coils": { en: "Valves & Copper Coils", zh: "阀门与铜盘管", fr: "Vannes et serpentins en cuivre", es: "Válvulas y serpentines de cobre", de: "Ventile & Kupferspulen" },
    "Own brand products developed for overseas markets": { en: "Own brand products developed for overseas markets", zh: "自主品牌产品，面向海外市场开发", fr: "Produits de marque propre développés pour les marchés étrangers", es: "Productos de marca propia desarrollados para mercados exteriores", de: "Eigenmarkenprodukte für Überseemärkte" },
    "Factory inspection and QC before shipment": { en: "Factory inspection and QC before shipment", zh: "出货前工厂验厂与质检", fr: "Inspection d'usine et contrôle qualité avant expédition", es: "Inspección de fábrica y control de calidad antes del envío", de: "Werksinspektion und Qualitätskontrolle vor Versand" },
    "Customized packaging and labeling available": { en: "Customized packaging and labeling available", zh: "支持定制包装与标签", fr: "Emballage et étiquetage personnalisés disponibles", es: "Embalaje y etiquetado personalizados disponibles", de: "Individuelle Verpackung und Kennzeichnung möglich" },
    "Integrated with AURAS trade services and logistics": { en: "Integrated with AURAS trade services and logistics", zh: "与 AURAS 贸易服务和物流协同", fr: "Intégré aux services commerciaux et à la logistique AURAS", es: "Integrado con los servicios comerciales y la logística de AURAS", de: "Integriert in AURAS Handels- und Logistikdienstleistungen" },
    "Commissioning Support": { en: "Commissioning Support", zh: "调试支持", fr: "Support de mise en service", es: "Soporte de puesta en marcha", de: "Inbetriebnahmesupport" },
    "Food & Beverage Lines": { en: "Food & Beverage Lines", zh: "食品饮料生产线", fr: "Lignes agroalimentaires", es: "Líneas de alimentos y bebidas", de: "Lebensmittel- und Getränkelinien" },
    "Packaging Lines": { en: "Packaging Lines", zh: "包装生产线", fr: "Lignes d'emballage", es: "Líneas de embalaje", de: "Verpackungslinien" },
    "Building Materials Lines": { en: "Building Materials Lines", zh: "建材生产线", fr: "Lignes de matériaux de construction", es: "Líneas de materiales de construcción", de: "Baustofflinien" },
    "Automotive Lines": { en: "Automotive Lines", zh: "汽车生产线", fr: "Lignes automobiles", es: "Líneas automotrices", de: "Automobillinien" },
    "/ Services": { en: "/ Services", zh: "/ 服务", fr: "/ Services", es: "/ Servicios", de: "/ Dienstleistungen" },
    "Tell Us Your Production Line Needs": { en: "Tell Us Your Production Line Needs", zh: "告诉我们您的生产线需求", fr: "Dites-nous vos besoins en lignes de production", es: "Cuéntenos sus necesidades de líneas de producción", de: "Teilen Sie uns Ihre Anforderungen an Produktionslinien mit" },
    "Environmental & Others": { en: "Environmental & Others", zh: "环保与其他", fr: "Environnement et autres", es: "Ambiental y otros", de: "Umwelt & Sonstiges" },
    "Logistics That Delivers": { en: "Logistics That Delivers", zh: "物流实力", fr: "Une logistique qui livre", es: "Logística que entrega", de: "Logistik, die liefert" },
    "Aluminum injection molding machines": { en: "Aluminum injection molding machines", zh: "铝合金注塑机", fr: "Machines d'injection d'aluminium", es: "Máquinas de inyección de aluminio", de: "Aluminium-Spritzgussmaschinen" },
    "Switch & appliance assembly": { en: "Switch & appliance assembly", zh: "开关与小家电组装", fr: "Assemblage d'interrupteurs et d'appareils", es: "Ensamblaje de interruptores y aparatos", de: "Schalter- und Gerätemontage" },
    "Commissioning & operator training": { en: "Commissioning & operator training", zh: "调试与操作培训", fr: "Mise en service et formation des opérateurs", es: "Puesta en marcha y formación de operadores", de: "Inbetriebnahme und Bedienerschulung" },
    "Equipment specification & capacity design": { en: "Equipment specification & capacity design", zh: "设备规格与产能设计", fr: "Spécifications d'équipement et conception de capacité", es: "Especificación de equipos y diseño de capacidad", de: "Gerätespezifikation und Kapazitätsauslegung" },
    "Factory layout & installation guidance": { en: "Factory layout & installation guidance", zh: "工厂布局与安装指导", fr: "Agencement d'usine et conseils d'installation", es: "Distribución de fábrica y guía de instalación", de: "Werkslayout und Installationsanleitung" },
    "Factory Network": { en: "Factory Network", zh: "工厂网络", fr: "Réseau d'usines", es: "Red de fábricas", de: "Werksnetzwerk" },
    "Inspection and control at every production stage.": { en: "Inspection and control at every production stage.", zh: "每一生产环节的检验与控制。", fr: "Inspection et contrôle à chaque étape de production.", es: "Inspección y control en cada etapa de producción.", de: "Inspektion und Kontrolle in jeder Produktionsstufe." },
    "Experience from 40+ delivered production line projects.": { en: "Experience from 40+ delivered production line projects.", zh: "拥有 40+ 条交付生产线的丰富经验。", fr: "L'expérience de plus de 40 lignes de production livrées.", es: "Experiencia en más de 40 proyectos de líneas de producción entregados.", de: "Erfahrung aus über 40 gelieferten Produktionslinienprojekten." },
    "One-Stop Solution": { en: "One-Stop Solution", zh: "一站式解决方案", fr: "Solution clé en main", es: "Solución integral", de: "Komplettlösung" },
    "Spare parts & after-sales support": { en: "Spare parts & after-sales support", zh: "备件与售后服务", fr: "Pièces détachées et support après-vente", es: "Repuestos y soporte posventa", de: "Ersatzteile und Kundendienst" },
    "Verified manufacturers across 15+ product categories.": { en: "Verified manufacturers across 15+ product categories.", zh: "15+ 个产品类别的认证制造商网络。", fr: "Des fabricants vérifiés dans plus de 15 catégories de produits.", es: "Fabricantes verificados en más de 15 categorías de productos.", de: "Geprüfte Hersteller in über 15 Produktkategorien." },
    "Presence at Canton Fair, Yiwu Fair, Algeria Fair and more.": { en: "Presence at Canton Fair, Yiwu Fair, Algeria Fair and more.", zh: "参展广交会、义乌博览会、阿尔及利亚展会等。", fr: "Présence à la Foire de Canton, à la Foire de Yiwu, au Salon d'Alger et plus.", es: "Presencia en Canton Fair, Yiwu Fair, Feria de Argelia y más.", de: "Präsenz auf der Canton Fair, Yiwu Fair, Algerien-Messe u. v. m." },
    "Projects and cooperation delivered across different markets.": { en: "Projects and cooperation delivered across different markets.", zh: "项目与合作覆盖全球不同市场。", fr: "Projets et coopérations livrés sur différents marchés.", es: "Proyectos y cooperación entregados en distintos mercados.", de: "Projekte und Kooperationen in verschiedenen Märkten." },
    "find the right factory and the right price": { en: "find the right factory and the right price", zh: "找到合适的工厂与合适的价格", fr: "trouver la bonne usine au bon prix", es: "encontrar la fábrica adecuada al precio adecuado", de: "die richtige Fabrik zum richtigen Preis finden" },
    "organize domestic and international freight": { en: "organize domestic and international freight", zh: "组织国内与国际货运", fr: "organiser le fret national et international", es: "organizar el flete nacional e internacional", de: "Inlands- und Auslandsfracht organisieren" },
    "inspect goods before shipment": { en: "inspect goods before shipment", zh: "出货前检验货物", fr: "inspecter les marchandises avant expédition", es: "inspeccionar las mercancías antes del envío", de: "Waren vor dem Versand prüfen" },
    "handle documentation and customs procedures": { en: "handle documentation and customs procedures", zh: "处理单证与清关手续", fr: "gérer les documents et les procédures douanières", es: "gestionar la documentación y los trámites aduaneros", de: "Dokumente und Zollformalitäten erledigen" },
    "bilingual support for contracts and communication": { en: "bilingual support for contracts and communication", zh: "合同与沟通的双语支持", fr: "support bilingue pour les contrats et la communication", es: "soporte bilingüe para contratos y comunicación", de: "zweisprachige Unterstützung für Verträge und Kommunikation" },
    "protect your interests in every deal": { en: "protect your interests in every deal", zh: "在每笔交易中保护您的利益", fr: "protéger vos intérêts dans chaque transaction", es: "proteger sus intereses en cada operación", de: "Ihre Interessen bei jedem Geschäft schützen" },
    "track orders from confirmation to delivery": { en: "track orders from confirmation to delivery", zh: "从确认到交付全程跟踪订单", fr: "suivre les commandes de la confirmation à la livraison", es: "seguir los pedidos desde la confirmación hasta la entrega", de: "Aufträge von der Bestätigung bis zur Lieferung verfolgen" },
    "fast and reliable air cargo": { en: "fast and reliable air cargo", zh: "快速可靠的空运服务", fr: "fret aérien rapide et fiable", es: "carga aérea rápida y fiable", de: "schnelle und zuverlässige Luftfracht" }
  };

  var HERO = {
    "Connecting Markets.<br>Delivering Excellence Worldwide.": {
      en: "Connecting Markets.<br>Delivering Excellence Worldwide.",
      zh: "连接全球市场，<br>交付卓越品质。",
      fr: "Connecter les marchés.<br>Offrir l'excellence dans le monde.",
      es: "Conectando mercados.<br>Entregando excelencia mundial.",
      de: "Märkte verbinden.<br>Exzellenz weltweit liefern."
    }
  };

  var COPYRIGHT = {
    en: "All rights reserved.",
    zh: "版权所有。",
    fr: "Tous droits réservés.",
    es: "Todos los derechos reservados.",
    de: "Alle Rechte vorbehalten."
  };

  var saved = null;
  try { saved = localStorage.getItem(LANG_KEY); } catch (e) {}
  var lang = LANGS.indexOf(saved) >= 0 ? saved : 'en';

  function applyLang(l) {
    var i;
    // 1) restore original English text for previously translated elements
    var marked = document.querySelectorAll('[data-i18n]');
    for (i = 0; i < marked.length; i++) {
      marked[i].textContent = marked[i].getAttribute('data-i18n');
    }
    // 2) restore hero titles then re-apply
    document.querySelectorAll('h1').forEach(function (h) {
      var orig = h.getAttribute('data-en') || h.innerHTML;
      if (HERO[orig]) {
        h.setAttribute('data-en', orig);
        h.innerHTML = HERO[orig][l];
      }
    });
    // 3) translate leaf text nodes
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        var p = n.parentElement;
        if (!p) return NodeFilter.FILTER_REJECT;
        var tag = p.tagName;
        if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'SELECT' || tag === 'OPTION' || tag === 'TEXTAREA') return NodeFilter.FILTER_REJECT;
        return n.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    var arr = [];
    while (walker.nextNode()) arr.push(walker.currentNode);
    for (i = 0; i < arr.length; i++) {
      var node = arr[i];
      var t = node.nodeValue.trim();
      var parent = node.parentElement;
      if (DICT[t]) {
        if (!parent.hasAttribute('data-i18n') && parent.textContent.trim() === t) {
          parent.setAttribute('data-i18n', t);
        }
        node.nodeValue = DICT[t][l];
      } else if (/All Rights Reserved/i.test(t)) {
        node.nodeValue = t.replace(/All Rights Reserved\.?/i, COPYRIGHT[l]);
      }
    }
    // 4) sync selector + persistence
    var sel = document.getElementById('langSelect');
    if (sel) sel.value = l;
    document.documentElement.lang = l;
    document.documentElement.setAttribute('dir', 'ltr');
    try { localStorage.setItem(LANG_KEY, l); } catch (e) {}
  }

  function init() {
    var sel = document.getElementById('langSelect');
    if (!sel) {
      sel = document.createElement('select');
      sel.id = 'langSelect';
      sel.className = 'lang-select';
      for (var i = 0; i < LANGS.length; i++) {
        var o = document.createElement('option');
        o.value = LANGS[i];
        o.textContent = LABELS[LANGS[i]];
        sel.appendChild(o);
      }
      var host = document.querySelector('.navbar .container');
      if (host) {
        var li = document.createElement('li');
        li.className = 'lang-item';
        li.appendChild(sel);
        host.appendChild(li);
      } else {
        document.body.insertBefore(sel, document.body.firstChild);
      }
    }
    sel.addEventListener('change', function () { applyLang(this.value); });
    applyLang(lang);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  /* Expose dynamic translate helper for runtime-rendered strings (site.js) */
  window.AURAS_I18N = {
    t: function (s) {
      return (DICT[s] && DICT[s][lang]) ? DICT[s][lang] : s;
    }
  };
})();
