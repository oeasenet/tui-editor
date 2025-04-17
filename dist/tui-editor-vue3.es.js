import { defineComponent as sl, ref as oa, watch as HW, onMounted as ll, nextTick as UW, createElementBlock as xo, openBlock as Eo, withKeys as WW, normalizeStyle as $W, normalizeClass as No, createElementVNode as Ga, createCommentVNode as GW, withModifiers as jW } from "vue";
import Ft from "@toast-ui/editor";
import KW from "@toast-ui/editor-plugin-chart";
import JW from "@toast-ui/editor-plugin-code-syntax-highlight";
import YW from "@toast-ui/editor-plugin-color-syntax";
import ZW from "@toast-ui/editor-plugin-table-merged-cell";
import QW from "@toast-ui/editor-plugin-uml";
/**
 * @toast-ui/editor : i18n
 * @version 3.2.2 | Fri Feb 17 2023
 * @author NHN Cloud FE Development Lab <dl_javascript@nhn.com>
 * @license MIT
 */
Ft.setLanguage("ar", {
  Markdown: "لغة ترميز",
  WYSIWYG: "ما تراه هو ما تحصل عليه",
  Write: "يكتب",
  Preview: "عرض مسبق",
  Headings: "العناوين",
  Paragraph: "فقرة",
  Bold: "خط عريض",
  Italic: "خط مائل",
  Strike: "إضراب",
  Code: "رمز",
  Line: "خط",
  Blockquote: "فقرة مقتبسة",
  "Unordered list": "قائمة غير مرتبة",
  "Ordered list": "قائمة مرتبة",
  Task: "مهمة",
  Indent: "المسافة البادئة",
  Outdent: "المسافة الخارجة",
  "Insert link": "أدخل الرابط",
  "Insert CodeBlock": "أدخل الكود",
  "Insert table": "أدخل جدول",
  "Insert image": "أدخل صورة",
  Heading: "عنوان",
  "Image URL": "رابط الصورة",
  "Select image file": "حدد ملف الصورة",
  "Choose a file": "اختيار الملف",
  "No file": "لا ملف",
  Description: "وصف",
  OK: "موافقة",
  More: "أكثر",
  Cancel: "إلغاء",
  File: "ملف",
  URL: "رابط",
  "Link text": "نص الرابط",
  "Add row to up": "أضف صفًا لأعلى",
  "Add row to down": "أضف صفًا إلى أسفل",
  "Add column to left": "أضف العمود على اليسار",
  "Add column to right": "أضف عمودًا إلى اليمين",
  "Remove row": "حذف سطر",
  "Remove column": "حذف عمود",
  "Align column to left": "محاذاة اليسار",
  "Align column to center": "محاذاة الوسط",
  "Align column to right": "محاذاة اليمين",
  "Remove table": "حذف الجدول",
  "Would you like to paste as table?": "هل تريد اللصق كجدول",
  "Text color": "لون النص",
  "Auto scroll enabled": "التحريك التلقائي ممكّن",
  "Auto scroll disabled": "التحريك التلقائي معطّل",
  "Choose language": "اختر اللغة"
});
/**
 * @toast-ui/editor : i18n
 * @version 3.2.2 | Fri Feb 17 2023
 * @author NHN Cloud FE Development Lab <dl_javascript@nhn.com>
 * @license MIT
 */
Ft.setLanguage(["cs", "cs-CZ"], {
  Markdown: "Markdown",
  WYSIWYG: "WYSIWYG",
  Write: "Napsat",
  Preview: "Náhled",
  Headings: "Nadpisy",
  Paragraph: "Odstavec",
  Bold: "Tučné",
  Italic: "Kurzíva",
  Strike: "Přeškrtnuté",
  Code: "Kód",
  Line: "Vodorovná čára",
  Blockquote: "Citace",
  "Unordered list": "Seznam s odrážkami",
  "Ordered list": "Číslovaný seznam",
  Task: "Úkol",
  Indent: "Zvětšit odsazení",
  Outdent: "Zmenšit odsazení",
  "Insert link": "Vložit odkaz",
  "Insert CodeBlock": "Vložit blok kódu",
  "Insert table": "Vložit tabulku",
  "Insert image": "Vložit obrázek",
  Heading: "Nadpis",
  "Image URL": "URL obrázku",
  "Select image file": "Vybrat obrázek",
  "Choose a file": "Vyberte soubor",
  "No file": "Žádný soubor",
  Description: "Popis",
  OK: "OK",
  More: "Více",
  Cancel: "Zrušit",
  File: "Soubor",
  URL: "URL",
  "Link text": "Text odkazu",
  "Add row to up": "Přidejte řádek nahoru",
  "Add row to down": "Přidejte řádek dolů",
  "Add column to left": "Přidat sloupec vlevo",
  "Add column to right": "Přidat sloupec doprava",
  "Remove row": "Odebrat řádek",
  "Remove column": "Odebrat sloupec",
  "Align column to left": "Zarovnat vlevo",
  "Align column to center": "Zarovnat na střed",
  "Align column to right": "Zarovnat vpravo",
  "Remove table": "Odstranit tabulku",
  "Would you like to paste as table?": "Chcete vložit jako tabulku?",
  "Text color": "Barva textu",
  "Auto scroll enabled": "Automatické rolování zapnuto",
  "Auto scroll disabled": "Automatické rolování vypnuto",
  "Choose language": "Vybrat jazyk"
});
/**
 * @toast-ui/editor : i18n
 * @version 3.2.2 | Fri Feb 17 2023
 * @author NHN Cloud FE Development Lab <dl_javascript@nhn.com>
 * @license MIT
 */
Ft.setLanguage(["de", "de-DE"], {
  Markdown: "Markdown",
  WYSIWYG: "WYSIWYG",
  Write: "Verfassen",
  Preview: "Vorschau",
  Headings: "Überschriften",
  Paragraph: "Text",
  Bold: "Fett",
  Italic: "Kursiv",
  Strike: "Durchgestrichen",
  Code: "Code",
  Line: "Trennlinie",
  Blockquote: "Blocktext",
  "Unordered list": "Aufzählung",
  "Ordered list": "Nummerierte Aufzählung",
  Task: "Aufgabe",
  Indent: "Einrücken",
  Outdent: "Ausrücken",
  "Insert link": "Link einfügen",
  "Insert CodeBlock": "Codeblock einfügen",
  "Insert table": "Tabelle einfügen",
  "Insert image": "Grafik einfügen",
  Heading: "Titel",
  "Image URL": "Bild URL",
  "Select image file": "Grafik auswählen",
  "Choose a file": "Wähle eine Datei",
  "No file": "Keine Datei",
  Description: "Beschreibung",
  OK: "OK",
  More: "Mehr",
  Cancel: "Abbrechen",
  File: "Datei",
  URL: "URL",
  "Link text": "Anzuzeigender Text",
  "Add row to up": "Zeile nach oben hinzufügen",
  "Add row to down": "Zeile nach unten hinzufügen",
  "Add column to left": "Spalte links hinzufügen",
  "Add column to right": "Spalte rechts hinzufügen",
  "Remove row": "Zeile entfernen",
  "Remove column": "Spalte entfernen",
  "Align column to left": "Links ausrichten",
  "Align column to center": "Zentrieren",
  "Align column to right": "Rechts ausrichten",
  "Remove table": "Tabelle entfernen",
  "Would you like to paste as table?": "Möchten Sie eine Tabelle einfügen?",
  "Text color": "Textfarbe",
  "Auto scroll enabled": "Autoscrollen aktiviert",
  "Auto scroll disabled": "Autoscrollen deaktiviert",
  "Choose language": "Sprache auswählen"
});
/**
 * @toast-ui/editor : i18n
 * @version 3.2.2 | Fri Feb 17 2023
 * @author NHN Cloud FE Development Lab <dl_javascript@nhn.com>
 * @license MIT
 */
Ft.setLanguage(["es", "es-ES"], {
  Markdown: "Markdown",
  WYSIWYG: "WYSIWYG",
  Write: "Escribir",
  Preview: "Vista previa",
  Headings: "Encabezados",
  Paragraph: "Párrafo",
  Bold: "Negrita",
  Italic: "Itálica",
  Strike: "Tachado",
  Code: "Código",
  Line: "Línea",
  Blockquote: "Cita",
  "Unordered list": "Lista desordenada",
  "Ordered list": "Lista ordenada",
  Task: "Tarea",
  Indent: "Sangría",
  Outdent: "Saliendo",
  "Insert link": "Insertar enlace",
  "Insert CodeBlock": "Insertar bloque de código",
  "Insert table": "Insertar tabla",
  "Insert image": "Insertar imagen",
  Heading: "Encabezado",
  "Image URL": "URL de la imagen",
  "Select image file": "Seleccionar archivo de imagen",
  "Choose a file": "Escoge un archivo",
  "No file": "Ningún archivo",
  Description: "Descripción",
  OK: "Aceptar",
  More: "Más",
  Cancel: "Cancelar",
  File: "Archivo",
  URL: "URL",
  "Link text": "Texto del enlace",
  "Add row to up": "Agregar fila para subir",
  "Add row to down": "Agregar fila hacia abajo",
  "Add column to left": "Agregar columna a la izquierda",
  "Add column to right": "Agregar columna a la derecha",
  "Remove row": "Eliminar fila",
  "Remove column": "Eliminar columna",
  "Align column to left": "Alinear a la izquierda",
  "Align column to center": "Centrar",
  "Align column to right": "Alinear a la derecha",
  "Remove table": "Eliminar tabla",
  "Would you like to paste as table?": "¿Desea pegar como tabla?",
  "Text color": "Color del texto",
  "Auto scroll enabled": "Desplazamiento automático habilitado",
  "Auto scroll disabled": "Desplazamiento automático deshabilitado",
  "Choose language": "Elegir idioma"
});
/**
 * @toast-ui/editor : i18n
 * @version 3.2.2 | Fri Feb 17 2023
 * @author NHN Cloud FE Development Lab <dl_javascript@nhn.com>
 * @license MIT
 */
Ft.setLanguage(["fi", "fi-FI"], {
  Markdown: "Markdown",
  WYSIWYG: "WYSIWYG",
  Write: "Kirjoita",
  Preview: "Esikatselu",
  Headings: "Otsikot",
  Paragraph: "Kappale",
  Bold: "Lihavointi",
  Italic: "Kursivointi",
  Strike: "Yliviivaus",
  Code: "Koodi",
  Line: "Vaakaviiva",
  Blockquote: "Lainaus",
  "Unordered list": "Luettelo",
  "Ordered list": "Numeroitu luettelo",
  Task: "Tehtävä",
  Indent: "Suurenna sisennystä",
  Outdent: "Pienennä sisennystä",
  "Insert link": "Lisää linkki",
  "Insert CodeBlock": "Lisää koodia",
  "Insert table": "Lisää taulukko",
  "Insert image": "Lisää kuva",
  Heading: "Otsikko",
  "Image URL": "Kuvan URL",
  "Select image file": "Valitse kuvatiedosto",
  "Choose a file": "Valitse tiedosto",
  "No file": "Ei tiedosto",
  Description: "Kuvaus",
  OK: "OK",
  More: "Lisää",
  Cancel: "Peruuta",
  File: "Tiedosto",
  URL: "URL",
  "Link text": "Linkkiteksti",
  "Add row to up": "Lisää rivi ylöspäin",
  "Add row to down": "Lisää rivi alaspäin",
  "Add column to left": "Lisää sarake vasemmalla",
  "Add column to right": "Lisää sarake oikealle",
  "Remove row": "Poista rivi",
  "Remove column": "Poista sarake",
  "Align column to left": "Tasaus vasemmalle",
  "Align column to center": "Keskitä",
  "Align column to right": "Tasaus oikealle",
  "Remove table": "Poista taulukko",
  "Would you like to paste as table?": "Haluatko liittää taulukkomuodossa?",
  "Text color": "Tekstin väri",
  "Auto scroll enabled": "Automaattinen skrollaus käytössä",
  "Auto scroll disabled": "Automaattinen skrollaus pois käytöstä",
  "Choose language": "Valitse kieli"
});
/**
 * @toast-ui/editor : i18n
 * @version 3.2.2 | Fri Feb 17 2023
 * @author NHN Cloud FE Development Lab <dl_javascript@nhn.com>
 * @license MIT
 */
Ft.setLanguage(["fr", "fr-FR"], {
  Markdown: "Markdown",
  WYSIWYG: "WYSIWYG",
  Write: "Écrire",
  Preview: "Aperçu",
  Headings: "En-têtes",
  Paragraph: "Paragraphe",
  Bold: "Gras",
  Italic: "Italique",
  Strike: "Barré",
  Code: "Code en ligne",
  Line: "Ligne",
  Blockquote: "Citation",
  "Unordered list": "Liste non-ordonnée",
  "Ordered list": "Liste ordonnée",
  Task: "Tâche",
  Indent: "Retrait",
  Outdent: "Sortir",
  "Insert link": "Insérer un lien",
  "Insert CodeBlock": "Insérer un bloc de code",
  "Insert table": "Insérer un tableau",
  "Insert image": "Insérer une image",
  Heading: "En-tête",
  "Image URL": "URL de l'image",
  "Select image file": "Sélectionnez un fichier image",
  "Choose a file": "Choisissez un fichier",
  "No file": "Pas de fichier",
  Description: "Description",
  OK: "OK",
  More: "de plus",
  Cancel: "Annuler",
  File: "Fichier",
  URL: "URL",
  "Link text": "Texte du lien",
  "Add row to up": "Ajouter une ligne vers le haut",
  "Add row to down": "Ajouter une ligne vers le bas",
  "Add column to left": "Ajouter une colonne à gauche",
  "Add column to right": "Ajouter une colonne à droite",
  "Remove row": "Supprimer une ligne",
  "Remove column": "Supprimer une colonne",
  "Align column to left": "Aligner à gauche",
  "Align column to center": "Aligner au centre",
  "Align column to right": "Aligner à droite",
  "Remove table": "Supprimer le tableau",
  "Would you like to paste as table?": "Voulez-vous coller ce contenu en tant que tableau ?",
  "Text color": "Couleur du texte",
  "Auto scroll enabled": "Défilement automatique activé",
  "Auto scroll disabled": "Défilement automatique désactivé",
  "Choose language": "Choix de la langue"
});
/**
 * @toast-ui/editor : i18n
 * @version 3.2.2 | Fri Feb 17 2023
 * @author NHN Cloud FE Development Lab <dl_javascript@nhn.com>
 * @license MIT
 */
Ft.setLanguage(["gl", "gl-ES"], {
  Markdown: "Markdown",
  WYSIWYG: "WYSIWYG",
  Write: "Escribir",
  Preview: "Vista previa",
  Headings: "Encabezados",
  Paragraph: "Parágrafo",
  Bold: "Negriña",
  Italic: "Cursiva",
  Strike: "Riscado",
  Code: "Código",
  Line: "Liña",
  Blockquote: "Cita",
  "Unordered list": "Lista desordenada",
  "Ordered list": "Lista ordenada",
  Task: "Tarefa",
  Indent: "Sangría",
  Outdent: "Anular sangría",
  "Insert link": "Inserir enlace",
  "Insert CodeBlock": "Inserir bloque de código",
  "Insert table": "Inserir táboa",
  "Insert image": "Inserir imaxe",
  Heading: "Encabezado",
  "Image URL": "URL da imaxe",
  "Select image file": "Seleccionar arquivo da imaxe",
  "Choose a file": "Escoge un archivo",
  "No file": "Ningún archivo",
  Description: "Descrición",
  OK: "Aceptar",
  More: "Máis",
  Cancel: "Cancelar",
  File: "Arquivo",
  URL: "URL",
  "Link text": "Texto do enlace",
  "Add row to up": "Engade fila para arriba",
  "Add row to down": "Engade fila para abaixo",
  "Add column to left": "Engade columna á esquerda",
  "Add column to right": "Engade columna á dereita",
  "Remove row": "Eliminar fila",
  "Remove column": "Eliminar columna",
  "Align column to left": "Aliñar á esquerda",
  "Align column to center": "Centrar",
  "Align column to right": "Aliñar á dereita",
  "Remove table": "Eliminar táboa",
  "Would you like to paste as table?": "Desexa pegar como táboa?",
  "Text color": "Cor do texto",
  "Auto scroll enabled": "Desprazamento automático habilitado",
  "Auto scroll disabled": "Desprazamento automático deshabilitado",
  "Choose language": "Elixir idioma"
});
/**
 * @toast-ui/editor : i18n
 * @version 3.2.2 | Fri Feb 17 2023
 * @author NHN Cloud FE Development Lab <dl_javascript@nhn.com>
 * @license MIT
 */
Ft.setLanguage(["it", "it-IT"], {
  Markdown: "Markdown",
  WYSIWYG: "WYSIWYG",
  Write: "Scrivere",
  Preview: "Anteprima",
  Headings: "Intestazioni",
  Paragraph: "Paragrafo",
  Bold: "Grassetto",
  Italic: "Corsivo",
  Strike: "Barrato",
  Code: "Codice",
  Line: "Linea",
  Blockquote: "Blocco citazione",
  "Unordered list": "Lista puntata",
  "Ordered list": "Lista numerata",
  Task: "Attività",
  Indent: "Aggiungi indentazione",
  Outdent: "Rimuovi indentazione",
  "Insert link": "Inserisci link",
  "Insert CodeBlock": "Inserisci blocco di codice",
  "Insert table": "Inserisci tabella",
  "Insert image": "Inserisci immagine",
  Heading: "Intestazione",
  "Image URL": "URL immagine",
  "Select image file": "Seleziona file immagine",
  "Choose a file": "Scegli un file",
  "No file": "Nessun file",
  Description: "Descrizione",
  OK: "OK",
  More: "Più",
  Cancel: "Cancella",
  File: "File",
  URL: "URL",
  "Link text": "Testo del collegamento",
  "Add row to up": "Aggiungi riga in alto",
  "Add row to down": "Aggiungi riga in basso",
  "Add column to left": "Aggiungi colonna a sinistra",
  "Add column to right": "Aggiungi colonna a destra",
  "Remove row": "Rimuovi riga",
  "Remove column": "Rimuovi colonna",
  "Align column to left": "Allinea a sinistra",
  "Align column to center": "Allinea al centro",
  "Align column to right": "Allinea a destra",
  "Remove table": "Rimuovi tabella",
  "Would you like to paste as table?": "Desideri incollare sotto forma di tabella?",
  "Text color": "Colore del testo",
  "Auto scroll enabled": "Scrolling automatico abilitato",
  "Auto scroll disabled": "Scrolling automatico disabilitato",
  "Choose language": "Scegli la lingua"
});
/**
 * @toast-ui/editor : i18n
 * @version 3.2.2 | Fri Feb 17 2023
 * @author NHN Cloud FE Development Lab <dl_javascript@nhn.com>
 * @license MIT
 */
Ft.setLanguage(["ja", "ja-JP"], {
  Markdown: "マークダウン",
  WYSIWYG: "WYSIWYG",
  Write: "編集する",
  Preview: "プレビュー",
  Headings: "見出し",
  Paragraph: "本文",
  Bold: "太字",
  Italic: "イタリック",
  Strike: "ストライク",
  Code: "インラインコード",
  Line: "ライン",
  Blockquote: "引用",
  "Unordered list": "番号なしリスト",
  "Ordered list": "順序付きリスト",
  Task: "タスク",
  Indent: "インデント",
  Outdent: "アウトデント",
  "Insert link": "リンク挿入",
  "Insert CodeBlock": "コードブロック挿入",
  "Insert table": "テーブル挿入",
  "Insert image": "画像挿入",
  Heading: "見出し",
  "Image URL": "イメージURL",
  "Select image file": "画像ファイル選択",
  "Choose a file": "ファイルの選択",
  "No file": "ファイルがない",
  Description: "ディスクリプション ",
  OK: "はい",
  More: "もっと",
  Cancel: "キャンセル",
  File: "ファイル",
  URL: "URL",
  "Link text": "リンクテキスト",
  "Add row to up": "行を上に追加",
  "Add row to down": "下に行を追加",
  "Add column to left": "左側に列を追加",
  "Add column to right": "右側に列を追加",
  "Remove row": "行削除",
  "Remove column": "列削除",
  "Align column to left": "左揃え",
  "Align column to center": "中央揃え",
  "Align column to right": "右揃え",
  "Remove table": "テーブル削除",
  "Would you like to paste as table?": "テーブルを貼り付けますか?",
  "Text color": "文字色相",
  "Auto scroll enabled": "自動スクロールが有効",
  "Auto scroll disabled": "自動スクロールを無効に",
  "Choose language": "言語選択"
});
/**
 * @toast-ui/editor : i18n
 * @version 3.2.2 | Fri Feb 17 2023
 * @author NHN Cloud FE Development Lab <dl_javascript@nhn.com>
 * @license MIT
 */
Ft.setLanguage(["ko", "ko-KR"], {
  Markdown: "마크다운",
  WYSIWYG: "위지윅",
  Write: "편집하기",
  Preview: "미리보기",
  Headings: "제목크기",
  Paragraph: "본문",
  Bold: "굵게",
  Italic: "기울임꼴",
  Strike: "취소선",
  Code: "인라인 코드",
  Line: "문단나눔",
  Blockquote: "인용구",
  "Unordered list": "글머리 기호",
  "Ordered list": "번호 매기기",
  Task: "체크박스",
  Indent: "들여쓰기",
  Outdent: "내어쓰기",
  "Insert link": "링크 삽입",
  "Insert CodeBlock": "코드블럭 삽입",
  "Insert table": "표 삽입",
  "Insert image": "이미지 삽입",
  Heading: "제목",
  "Image URL": "이미지 주소",
  "Select image file": "이미지 파일을 선택하세요.",
  "Choose a file": "파일 선택",
  "No file": "선택된 파일 없음",
  Description: "설명",
  OK: "확인",
  More: "더 보기",
  Cancel: "취소",
  File: "파일",
  URL: "주소",
  "Link text": "링크 텍스트",
  "Add row to up": "위에 행 추가",
  "Add row to down": "아래에 행 추가",
  "Add column to left": "왼쪽에 열 추가",
  "Add column to right": "오른쪽에 열 추가",
  "Remove row": "행 삭제",
  "Remove column": "열 삭제",
  "Align column to left": "열 왼쪽 정렬",
  "Align column to center": "열 가운데 정렬",
  "Align column to right": "열 오른쪽 정렬",
  "Remove table": "표 삭제",
  "Would you like to paste as table?": "표형태로 붙여 넣겠습니까?",
  "Text color": "글자 색상",
  "Auto scroll enabled": "자동 스크롤 켜짐",
  "Auto scroll disabled": "자동 스크롤 꺼짐",
  "Choose language": "언어 선택"
});
/**
 * @toast-ui/editor : i18n
 * @version 3.2.2 | Fri Feb 17 2023
 * @author NHN Cloud FE Development Lab <dl_javascript@nhn.com>
 * @license MIT
 */
Ft.setLanguage(["nb", "nb-NO"], {
  Markdown: "Funksjonaliteter",
  WYSIWYG: "WYSIWYG",
  Write: "Skriv",
  Preview: "Forhåndsvisning",
  Headings: "Overskrift",
  Paragraph: "Paragraf",
  Bold: "Fet skrift",
  Italic: "Italic",
  Strike: "Strike",
  Code: "Kode",
  Line: "Linje",
  Blockquote: "Blokksitat",
  "Unordered list": "Usortert liste",
  "Ordered list": "Sortert liste",
  Task: "Task",
  Indent: "Indent",
  Outdent: "Outdent",
  "Insert link": "Sett inn lenke",
  "Insert CodeBlock": "Sett inn CodeStreng",
  "Insert table": "Sett inn diagram",
  "Insert image": "Sett inn bilde",
  Heading: "Overskrift",
  "Image URL": "BildeURL",
  "Select image file": "Velg bildefil",
  "Choose a file": "Velg en fil",
  "No file": "Ingen fil",
  Description: "Beskrivelse",
  OK: "OK",
  More: "Mer",
  Cancel: "Angre",
  File: "Fil",
  URL: "URL",
  "Link text": "Lenketekst",
  "Add row to up": "Legg rad til opp",
  "Add row to down": "Legg rad til ned",
  "Add column to left": "Legg til kolonne til venstre",
  "Add column to right": "Legg til kolonne til høyre",
  "Remove row": "Fjern rad",
  "Remove column": "Fjern kolonne",
  "Align column to left": "Venstreorienter",
  "Align column to center": "Senterorienter",
  "Align column to right": "Høyreorienter",
  "Remove table": "Fjern diagram",
  "Would you like to paste as table?": "Ønsker du å lime inn som et diagram?",
  "Text color": "Tekstfarge",
  "Auto scroll enabled": "Auto-scroll aktivert",
  "Auto scroll disabled": "Auto-scroll deaktivert",
  "Choose language": "Velg språl"
});
/**
 * @toast-ui/editor : i18n
 * @version 3.2.2 | Fri Feb 17 2023
 * @author NHN Cloud FE Development Lab <dl_javascript@nhn.com>
 * @license MIT
 */
Ft.setLanguage(["nl", "nl-NL"], {
  Markdown: "Markdown",
  WYSIWYG: "WYSIWYG",
  Write: "Opslaan",
  Preview: "Voorbeeld",
  Headings: "Koppen",
  Paragraph: "Alinea",
  Bold: "Vet",
  Italic: "Cursief",
  Strike: "Doorhalen",
  Code: "Inline code",
  Line: "Regel",
  Blockquote: "Citaatblok",
  "Unordered list": "Opsomming",
  "Ordered list": "Genummerde opsomming",
  Task: "Taak",
  Indent: "Niveau verhogen",
  Outdent: "Niveau verlagen",
  "Insert link": "Link invoegen",
  "Insert CodeBlock": "Codeblok toevoegen",
  "Insert table": "Tabel invoegen",
  "Insert image": "Afbeelding invoegen",
  Heading: "Kop",
  "Image URL": "Afbeelding URL",
  "Select image file": "Selecteer een afbeelding",
  "Choose a file": "Kies een bestand",
  "No file": "Geen bestand",
  Description: "Omschrijving",
  OK: "OK",
  More: "Meer",
  Cancel: "Annuleren",
  File: "Bestand",
  URL: "URL",
  "Link text": "Link tekst",
  "Add row to up": "Voeg rij toe aan omhoog",
  "Add row to down": "Rij naar beneden toevoegen",
  "Add column to left": "Voeg kolom aan de linkerkant toe",
  "Add column to right": "Voeg een kolom aan de rechterkant toe",
  "Remove row": "Rij verwijderen",
  "Remove column": "Kolom verwijderen",
  "Align column to left": "Links uitlijnen",
  "Align column to center": "Centreren",
  "Align column to right": "Rechts uitlijnen",
  "Remove table": "Verwijder tabel",
  "Would you like to paste as table?": "Wil je dit als tabel plakken?",
  "Text color": "Tekstkleur",
  "Auto scroll enabled": "Autoscroll ingeschakeld",
  "Auto scroll disabled": "Autoscroll uitgeschakeld",
  "Choose language": "Kies een taal"
});
/**
 * @toast-ui/editor : i18n
 * @version 3.2.2 | Fri Feb 17 2023
 * @author NHN Cloud FE Development Lab <dl_javascript@nhn.com>
 * @license MIT
 */
Ft.setLanguage(["pl", "pl-PL"], {
  Markdown: "Markdown",
  WYSIWYG: "WYSIWYG",
  Write: "Napisz",
  Preview: "Podgląd",
  Headings: "Nagłówki",
  Paragraph: "Akapit",
  Bold: "Pogrubienie",
  Italic: "Kursywa",
  Strike: "Przekreślenie",
  Code: "Fragment kodu",
  Line: "Linia",
  Blockquote: "Cytat",
  "Unordered list": "Lista nieuporządkowana",
  "Ordered list": "Lista uporządkowana",
  Task: "Zadanie",
  Indent: "Utwórz wcięcie",
  Outdent: "Usuń wcięcie",
  "Insert link": "Umieść odnośnik",
  "Insert CodeBlock": "Umieść blok kodu",
  "Insert table": "Umieść tabelę",
  "Insert image": "Umieść obraz",
  Heading: "Nagłówek",
  "Image URL": "Adres URL obrazu",
  "Select image file": "Wybierz plik obrazu",
  "Choose a file": "Wybierz plik",
  "No file": "Brak plik",
  Description: "Opis",
  OK: "OK",
  More: "Więcej",
  Cancel: "Anuluj",
  File: "Plik",
  URL: "URL",
  "Link text": "Tekst odnośnika",
  "Add row to up": "Dodaj wiersz do góry",
  "Add row to down": "Dodaj wiersz w dół",
  "Add column to left": "Dodaj kolumnę po lewej stronie",
  "Add column to right": "Dodaj kolumnę po prawej stronie",
  "Remove row": "Usuń rząd",
  "Remove column": "Usuń kolumnę",
  "Align column to left": "Wyrównaj do lewej",
  "Align column to center": "Wyśrodkuj",
  "Align column to right": "Wyrównaj do prawej",
  "Remove table": "Usuń tabelę",
  "Would you like to paste as table?": "Czy chcesz wkleić tekst jako tabelę?",
  "Text color": "Kolor tekstu",
  "Auto scroll enabled": "Włączono automatyczne przewijanie",
  "Auto scroll disabled": "Wyłączono automatyczne przewijanie",
  "Choose language": "Wybierz język"
});
/**
 * @toast-ui/editor : i18n
 * @version 3.2.2 | Fri Feb 17 2023
 * @author NHN Cloud FE Development Lab <dl_javascript@nhn.com>
 * @license MIT
 */
Ft.setLanguage(["ru", "ru-RU"], {
  Markdown: "Markdown",
  WYSIWYG: "WYSIWYG",
  Write: "Редактор",
  Preview: "Просмотр",
  Headings: "Заголовки",
  Paragraph: "Абзац",
  Bold: "Жирный",
  Italic: "Курсив",
  Strike: "Зачеркнутый",
  Code: "Код",
  Line: "Линия",
  Blockquote: "Цитата",
  "Unordered list": "Неупорядоченный список",
  "Ordered list": "Упорядоченный список",
  Task: "Галочка",
  Indent: "Увеличить отступ",
  Outdent: "Уменьшить отступ",
  "Insert link": "Вставить ссылку",
  "Insert CodeBlock": "Вставить блок кода",
  "Insert table": "Вставить таблицу",
  "Insert image": "Вставить изображение",
  Heading: "Заголовок",
  "Image URL": "URL изображения",
  "Select image file": "Выбрать файл изображения",
  "Choose a file": "Выбрать",
  "No file": "Нет файла",
  Description: "Описание",
  OK: "Хорошо",
  More: "Еще",
  Cancel: "Отмена",
  File: "Файл",
  URL: "URL",
  "Link text": "Текст ссылки",
  "Add row to up": "Добавить строку вверх",
  "Add row to down": "Добавить строку вниз",
  "Add column to left": "Добавить столбец слева",
  "Add column to right": "Добавить столбец справа",
  "Remove row": "Удалить ряд",
  "Remove column": "Удалить столбец",
  "Align column to left": "Выровнять по левому краю",
  "Align column to center": "Выровнять по центру",
  "Align column to right": "Выровнять по правому краю",
  "Remove table": "Удалить таблицу",
  "Would you like to paste as table?": "Вы хотите вставить в виде таблицы?",
  "Text color": "Цвет текста",
  "Auto scroll enabled": "Автопрокрутка включена",
  "Auto scroll disabled": "Автопрокрутка отключена",
  "Choose language": "Выбрать язык"
});
/**
 * @toast-ui/editor : i18n
 * @version 3.2.2 | Fri Feb 17 2023
 * @author NHN Cloud FE Development Lab <dl_javascript@nhn.com>
 * @license MIT
 */
Ft.setLanguage(["sv", "sv-SE"], {
  Markdown: "Markdown",
  WYSIWYG: "WYSIWYG",
  Write: "Skriv",
  Preview: "Förhandsgranska",
  Headings: "Överskrifter",
  Paragraph: "Paragraf",
  Bold: "Fet",
  Italic: "Kursiv",
  Strike: "Genomstruken",
  Code: "Kodrad",
  Line: "Linje",
  Blockquote: "Citatblock",
  "Unordered list": "Punktlista",
  "Ordered list": "Numrerad lista",
  Task: "Att göra",
  Indent: "Öka indrag",
  Outdent: "Minska indrag",
  "Insert link": "Infoga länk",
  "Insert CodeBlock": "Infoga kodblock",
  "Insert table": "Infoga tabell",
  "Insert image": "Infoga bild",
  Heading: "Överskrift",
  "Image URL": "Bildadress",
  "Select image file": "Välj en bildfil",
  "Choose a file": "Välj en fil",
  "No file": "Ingen fil",
  Description: "Beskrivning",
  OK: "OK",
  More: "Mer",
  Cancel: "Avbryt",
  File: "Fil",
  URL: "Adress",
  "Link text": "Länktext",
  "Add row to up": "Lägg till rad till upp",
  "Add row to down": "Lägg till rad till ner",
  "Add column to left": "Lägg till kolumn till vänster",
  "Add column to right": "Lägg till kolumn till höger",
  "Remove row": "Radera rad",
  "Remove column": "Radera kolumn",
  "Align column to left": "Vänsterjustera",
  "Align column to center": "Centrera",
  "Align column to right": "Högerjustera",
  "Remove table": "Radera tabell",
  "Would you like to paste as table?": "Vill du klistra in som en tabell?",
  "Text color": "Textfärg",
  "Auto scroll enabled": "Automatisk scroll aktiverad",
  "Auto scroll disabled": "Automatisk scroll inaktiverad",
  "Choose language": "Välj språk"
});
/**
 * @toast-ui/editor : i18n
 * @version 3.2.2 | Fri Feb 17 2023
 * @author NHN Cloud FE Development Lab <dl_javascript@nhn.com>
 * @license MIT
 */
Ft.setLanguage(["tr", "tr-TR"], {
  Markdown: "Markdown",
  WYSIWYG: "WYSIWYG",
  Write: "Düzenle",
  Preview: "Ön izleme",
  Headings: "Başlıklar",
  Paragraph: "Paragraf",
  Bold: "Kalın",
  Italic: "İtalik",
  Strike: "Altı çizgili",
  Code: "Satır içi kod",
  Line: "Çizgi",
  Blockquote: "Alıntı",
  "Unordered list": "Sıralanmamış liste",
  "Ordered list": "Sıralı liste",
  Task: "Görev kutusu",
  Indent: "Girintiyi arttır",
  Outdent: "Girintiyi azalt",
  "Insert link": "Bağlantı ekle",
  "Insert CodeBlock": "Kod bloku ekle",
  "Insert table": "Tablo ekle",
  "Insert image": "İmaj ekle",
  Heading: "Başlık",
  "Image URL": "İmaj URL",
  "Select image file": "İmaj dosyası seç",
  "Choose a file": "Bir dosya seçin",
  "No file": "Dosya yok",
  Description: "Açıklama",
  OK: "Onay",
  More: "Daha Fazla",
  Cancel: "İptal",
  File: "Dosya",
  URL: "URL",
  "Link text": "Bağlantı yazısı",
  "Add row to up": "Yukarı satır ekle",
  "Add row to down": "Aşağı satır ekle",
  "Add column to left": "Sola sütun ekleyin",
  "Add column to right": "Sağa sütun ekle",
  "Remove row": "Satır sil",
  "Remove column": "Sütun sil",
  "Align column to left": "Sola hizala",
  "Align column to center": "Merkeze hizala",
  "Align column to right": "Sağa hizala",
  "Remove table": "Tabloyu kaldır",
  "Would you like to paste as table?": "Tablo olarak yapıştırmak ister misiniz?",
  "Text color": "Metin rengi",
  "Auto scroll enabled": "Otomatik kaydırma açık",
  "Auto scroll disabled": "Otomatik kaydırma kapalı",
  "Choose language": "Dil seçiniz"
});
/**
 * @toast-ui/editor : i18n
 * @version 3.2.2 | Fri Feb 17 2023
 * @author NHN Cloud FE Development Lab <dl_javascript@nhn.com>
 * @license MIT
 */
Ft.setLanguage(["uk", "uk-UA"], {
  Markdown: "Markdown",
  WYSIWYG: "WYSIWYG",
  Write: "Написати",
  Preview: "Попередній перегляд",
  Headings: "Заголовки",
  Paragraph: "Абзац",
  Bold: "Жирний",
  Italic: "Курсив",
  Strike: "Закреслений",
  Code: "Вбудований код",
  Line: "Лінія",
  Blockquote: "Блок цитування",
  "Unordered list": "Невпорядкований список",
  "Ordered list": "Упорядкований список",
  Task: "Завдання",
  Indent: "відступ",
  Outdent: "застарілий",
  "Insert link": "Вставити посилання",
  "Insert CodeBlock": "Вставити код",
  "Insert table": "Вставити таблицю",
  "Insert image": "Вставити зображення",
  Heading: "Заголовок",
  "Image URL": "URL зображення",
  "Select image file": "Вибрати файл зображення",
  "Choose a file": "Виберіть файл",
  "No file": "Немає файлу",
  Description: "Опис",
  OK: "OK",
  More: "ще",
  Cancel: "Скасувати",
  File: "Файл",
  URL: "URL",
  "Link text": "Текст посилання",
  "Add row to up": "Додати рядок вгору",
  "Add row to down": "Додати рядок вниз",
  "Add column to left": "Додайте стовпець зліва",
  "Add column to right": "Додайте стовпець праворуч",
  "Remove row": "Видалити ряд",
  "Remove column": "Видалити стовпчик",
  "Align column to left": "Вирівняти по лівому краю",
  "Align column to center": "Вирівняти по центру",
  "Align column to right": "Вирівняти по правому краю",
  "Remove table": "Видалити таблицю",
  "Would you like to paste as table?": "Ви хочете вставити у вигляді таблиці?",
  "Text color": "Колір тексту",
  "Auto scroll enabled": "Автоматична прокрутка включена",
  "Auto scroll disabled": "Автоматична прокрутка відключена",
  "Choose language": "Вибрати мову"
});
/**
 * @toast-ui/editor : i18n
 * @version 3.2.2 | Fri Feb 17 2023
 * @author NHN Cloud FE Development Lab <dl_javascript@nhn.com>
 * @license MIT
 */
Ft.setLanguage("zh-CN", {
  Markdown: "Markdown",
  WYSIWYG: "所见即所得",
  Write: "编辑",
  Preview: "预览",
  Headings: "标题",
  Paragraph: "文本",
  Bold: "加粗",
  Italic: "斜体字",
  Strike: "删除线",
  Code: "内嵌代码",
  Line: "水平线",
  Blockquote: "引用块",
  "Unordered list": "无序列表",
  "Ordered list": "有序列表",
  Task: "任务",
  Indent: "缩进",
  Outdent: "减少缩进",
  "Insert link": "插入链接",
  "Insert CodeBlock": "插入代码块",
  "Insert table": "插入表格",
  "Insert image": "插入图片",
  Heading: "标题",
  "Image URL": "图片网址",
  "Select image file": "选择图片文件",
  "Choose a file": "选择一个文件",
  "No file": "没有文件",
  Description: "说明",
  OK: "确认",
  More: "更多",
  Cancel: "取消",
  File: "文件",
  URL: "URL",
  "Link text": "链接文本",
  "Add row to up": "向上添加行",
  "Add row to down": "在下方添加行",
  "Add column to left": "在左侧添加列",
  "Add column to right": "在右侧添加列",
  "Remove row": "删除行",
  "Remove column": "删除列",
  "Align column to left": "左对齐",
  "Align column to center": "居中对齐",
  "Align column to right": "右对齐",
  "Remove table": "删除表格",
  "Would you like to paste as table?": "需要粘贴为表格吗?",
  "Text color": "文字颜色",
  "Auto scroll enabled": "自动滚动已启用",
  "Auto scroll disabled": "自动滚动已禁用",
  "Choose language": "选择语言"
});
/**
 * @toast-ui/editor : i18n
 * @version 3.2.2 | Fri Feb 17 2023
 * @author NHN Cloud FE Development Lab <dl_javascript@nhn.com>
 * @license MIT
 */
Ft.setLanguage("zh-TW", {
  Markdown: "Markdown",
  WYSIWYG: "所見即所得",
  Write: "編輯",
  Preview: "預覽",
  Headings: "標題",
  Paragraph: "內文",
  Bold: "粗體",
  Italic: "斜體",
  Strike: "刪除線",
  Code: "內嵌程式碼",
  Line: "分隔線",
  Blockquote: "引言",
  "Unordered list": "項目符號清單",
  "Ordered list": "編號清單",
  Task: "核取方塊清單",
  Indent: "增加縮排",
  Outdent: "減少縮排",
  "Insert link": "插入超連結",
  "Insert CodeBlock": "插入程式碼區塊",
  "Insert table": "插入表格",
  "Insert image": "插入圖片",
  Heading: "標題",
  "Image URL": "圖片網址",
  "Select image file": "選擇圖片檔案",
  "Choose a file": "選擇一個文件",
  "No file": "沒有文件",
  Description: "描述",
  OK: "確認",
  More: "更多",
  Cancel: "取消",
  File: "檔案",
  URL: "URL",
  "Link text": "超連結文字",
  "Add row to up": "向上添加行",
  "Add row to down": "在下方添加行",
  "Add column to left": "在左側添加列",
  "Add column to right": "在右側添加列",
  "Remove row": "刪除行",
  "Remove column": "刪除列",
  "Align column to left": "靠左對齊",
  "Align column to center": "置中",
  "Align column to right": "靠右對齊",
  "Remove table": "刪除表格",
  "Would you like to paste as table?": "您要以表格貼上嗎？",
  "Text color": "文字顏色",
  "Auto scroll enabled": "已啟用自動滾動",
  "Auto scroll disabled": "已停用自動滾動",
  "Choose language": "選擇語言"
});
function XW(ye, se) {
  if (!ye.value)
    throw new Error("Reference to the element is not set");
  const Ie = new Ft({
    el: ye.value,
    // Pass through options to the editor
    height: se.height,
    hideModeSwitch: se.hideModeSwitch,
    initialEditType: se.initialEditType,
    initialValue: se.initialValue,
    language: se.language,
    plugins: se.plugins,
    previewStyle: se.previewStyle,
    toolbarItems: se.toolbarItems,
    usageStatistics: se.usageStatistics,
    useCommandShortcut: se.useCommandShortcut,
    // Configure events and hooks
    events: {
      change: se.onChange ? () => {
        var Fe;
        return (Fe = se.onChange) == null ? void 0 : Fe.call(se, Ie);
      } : void 0
    },
    hooks: {
      addImageBlobHook: se.addImageBlobHook
    }
  });
  return Ie;
}
const wo = {
  chart: KW,
  codeSyntaxHighlight: JW,
  colorSyntax: YW,
  tableMergedCell: ZW,
  uml: QW
};
function ul(ye) {
  return ye.map((se) => {
    if (!(se in wo))
      throw new Error(`Plugin "${se}" not found. Available plugins: ${Object.keys(wo).join(", ")}`);
    return wo[se];
  });
}
const e$ = {
  key: 0,
  class: "fullscreen-button-container"
}, t$ = ["title"], r$ = /* @__PURE__ */ sl({
  __name: "Editor",
  props: {
    allowFullScreen: { type: Boolean, default: !0 },
    darkMode: { type: Boolean, default: !1 },
    editorClasses: {},
    enhanced: { type: Boolean, default: !1 },
    height: { default: "500px" },
    hideModeSwitch: { type: Boolean, default: !1 },
    initialEditType: { default: "wysiwyg" },
    language: {},
    modelValue: { default: "" },
    plugins: { default: () => ul(["chart", "codeSyntaxHighlight", "colorSyntax", "tableMergedCell", "uml"]) },
    previewStyle: { default: "vertical" },
    toolbarItems: { default: () => [
      ["heading", "bold", "italic", "strike"],
      ["hr", "quote"],
      ["ul", "ol", "task", "indent", "outdent"],
      ["table", "image", "link"],
      ["code", "codeblock"]
    ] },
    usageStatistics: { type: Boolean },
    useCommandShortcut: { type: Boolean }
  },
  emits: ["update:modelValue", "addImage", "fullScreenChange"],
  setup(ye, { expose: se, emit: Ie }) {
    const Fe = ye, Pe = oa(null), Xe = oa(null), et = oa(!1), Je = Ie;
    return se({ editor: Pe }), HW(et, (je) => {
      const te = document.body.classList;
      je ? te.add("overflow-hidden") : te.remove("overflow-hidden"), Je("fullScreenChange", je);
    }), ll(() => UW(() => {
      Xe.value && (Pe.value = XW(Xe, {
        // Use container height in fullscreen mode
        height: "100cqh",
        // Pass through props to the editor
        hideModeSwitch: Fe.hideModeSwitch,
        initialEditType: Fe.initialEditType,
        initialValue: Fe.modelValue,
        language: Fe.language,
        plugins: Fe.plugins,
        previewStyle: Fe.previewStyle,
        toolbarItems: Fe.toolbarItems,
        usageStatistics: Fe.usageStatistics,
        useCommandShortcut: Fe.useCommandShortcut,
        // Handle image uploads
        addImageBlobHook: (je, te) => {
          Je("addImage", { blob: je, callback: te });
        },
        // Update v-model when content changes
        onChange: (je) => {
          Je("update:modelValue", je.getMarkdown());
        }
      }));
    })), (je, te) => (Eo(), xo("div", {
      class: No([{
        "tui-editor-vue3-enhanced": je.enhanced,
        "toastui-full-screen": et.value,
        "toastui-editor-dark": je.darkMode
      }, "tui-editor-vue3-wrapper"]),
      style: $W({ height: et.value ? void 0 : je.height }),
      onKeydown: te[1] || (te[1] = WW((Be) => et.value = !1, ["escape"]))
    }, [
      Ga("div", {
        ref_key: "editorEl",
        ref: Xe,
        class: No(je.editorClasses)
      }, null, 2),
      je.allowFullScreen ? (Eo(), xo("div", e$, [
        Ga("a", {
          title: et.value ? "Exit fullscreen" : "Enter fullscreen",
          class: "fullscreen-button",
          href: "#",
          onClick: te[0] || (te[0] = jW((Be) => et.value = !et.value, ["prevent"]))
        }, te[2] || (te[2] = [
          Ga("svg", {
            "aria-hidden": "true",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg"
          }, [
            Ga("path", {
              d: "M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            })
          ], -1)
        ]), 8, t$)
      ])) : GW("", !0)
    ], 38));
  }
});
var Co = { exports: {} }, ur = {}, Er = {}, Qt = {}, To, Qs;
function n$() {
  if (Qs) return To;
  Qs = 1;
  function ye(se) {
    this.content = se;
  }
  return ye.prototype = {
    constructor: ye,
    find: function(se) {
      for (var Ie = 0; Ie < this.content.length; Ie += 2)
        if (this.content[Ie] === se) return Ie;
      return -1;
    },
    // :: (string) → ?any
    // Retrieve the value stored under `key`, or return undefined when
    // no such key exists.
    get: function(se) {
      var Ie = this.find(se);
      return Ie == -1 ? void 0 : this.content[Ie + 1];
    },
    // :: (string, any, ?string) → OrderedMap
    // Create a new map by replacing the value of `key` with a new
    // value, or adding a binding to the end of the map. If `newKey` is
    // given, the key of the binding will be replaced with that key.
    update: function(se, Ie, Fe) {
      var Pe = Fe && Fe != se ? this.remove(Fe) : this, Xe = Pe.find(se), et = Pe.content.slice();
      return Xe == -1 ? et.push(Fe || se, Ie) : (et[Xe + 1] = Ie, Fe && (et[Xe] = Fe)), new ye(et);
    },
    // :: (string) → OrderedMap
    // Return a map with the given key removed, if it existed.
    remove: function(se) {
      var Ie = this.find(se);
      if (Ie == -1) return this;
      var Fe = this.content.slice();
      return Fe.splice(Ie, 2), new ye(Fe);
    },
    // :: (string, any) → OrderedMap
    // Add a new key to the start of the map.
    addToStart: function(se, Ie) {
      return new ye([se, Ie].concat(this.remove(se).content));
    },
    // :: (string, any) → OrderedMap
    // Add a new key to the end of the map.
    addToEnd: function(se, Ie) {
      var Fe = this.remove(se).content.slice();
      return Fe.push(se, Ie), new ye(Fe);
    },
    // :: (string, string, any) → OrderedMap
    // Add a key after the given key. If `place` is not found, the new
    // key is added to the end.
    addBefore: function(se, Ie, Fe) {
      var Pe = this.remove(Ie), Xe = Pe.content.slice(), et = Pe.find(se);
      return Xe.splice(et == -1 ? Xe.length : et, 0, Ie, Fe), new ye(Xe);
    },
    // :: ((key: string, value: any))
    // Call the given function for each key/value pair in the map, in
    // order.
    forEach: function(se) {
      for (var Ie = 0; Ie < this.content.length; Ie += 2)
        se(this.content[Ie], this.content[Ie + 1]);
    },
    // :: (union<Object, OrderedMap>) → OrderedMap
    // Create a new map by prepending the keys in this map that don't
    // appear in `map` before the keys in `map`.
    prepend: function(se) {
      return se = ye.from(se), se.size ? new ye(se.content.concat(this.subtract(se).content)) : this;
    },
    // :: (union<Object, OrderedMap>) → OrderedMap
    // Create a new map by appending the keys in this map that don't
    // appear in `map` after the keys in `map`.
    append: function(se) {
      return se = ye.from(se), se.size ? new ye(this.subtract(se).content.concat(se.content)) : this;
    },
    // :: (union<Object, OrderedMap>) → OrderedMap
    // Create a map containing all the keys in this map that don't
    // appear in `map`.
    subtract: function(se) {
      var Ie = this;
      se = ye.from(se);
      for (var Fe = 0; Fe < se.content.length; Fe += 2)
        Ie = Ie.remove(se.content[Fe]);
      return Ie;
    },
    // :: () → Object
    // Turn ordered map into a plain object.
    toObject: function() {
      var se = {};
      return this.forEach(function(Ie, Fe) {
        se[Ie] = Fe;
      }), se;
    },
    // :: number
    // The amount of keys in this map.
    get size() {
      return this.content.length >> 1;
    }
  }, ye.from = function(se) {
    if (se instanceof ye) return se;
    var Ie = [];
    if (se) for (var Fe in se) Ie.push(Fe, se[Fe]);
    return new ye(Ie);
  }, To = ye, To;
}
var Xs;
function ja() {
  if (Xs) return Qt;
  Xs = 1;
  function ye(k, h) {
    var o = typeof Symbol < "u" && k[Symbol.iterator] || k["@@iterator"];
    if (!o) {
      if (Array.isArray(k) || (o = se(k)) || h) {
        o && (k = o);
        var c = 0, d = function() {
        };
        return { s: d, n: function() {
          return c >= k.length ? { done: !0 } : { done: !1, value: k[c++] };
        }, e: function(W) {
          throw W;
        }, f: d };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var C = !0, x = !1, M;
    return { s: function() {
      o = o.call(k);
    }, n: function() {
      var W = o.next();
      return C = W.done, W;
    }, e: function(W) {
      x = !0, M = W;
    }, f: function() {
      try {
        !C && o.return != null && o.return();
      } finally {
        if (x) throw M;
      }
    } };
  }
  function se(k, h) {
    if (k) {
      if (typeof k == "string") return Ie(k, h);
      var o = Object.prototype.toString.call(k).slice(8, -1);
      if (o === "Object" && k.constructor && (o = k.constructor.name), o === "Map" || o === "Set") return Array.from(k);
      if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return Ie(k, h);
    }
  }
  function Ie(k, h) {
    (h == null || h > k.length) && (h = k.length);
    for (var o = 0, c = new Array(h); o < h; o++) c[o] = k[o];
    return c;
  }
  function Fe() {
    return typeof Reflect < "u" && Reflect.get ? Fe = Reflect.get.bind() : Fe = function(h, o, c) {
      var d = Pe(h, o);
      if (d) {
        var C = Object.getOwnPropertyDescriptor(d, o);
        return C.get ? C.get.call(arguments.length < 3 ? h : c) : C.value;
      }
    }, Fe.apply(this, arguments);
  }
  function Pe(k, h) {
    for (; !Object.prototype.hasOwnProperty.call(k, h) && (k = ce(k), k !== null); )
      ;
    return k;
  }
  function Xe(k, h) {
    if (typeof h != "function" && h !== null)
      throw new TypeError("Super expression must either be null or a function");
    k.prototype = Object.create(h && h.prototype, { constructor: { value: k, writable: !0, configurable: !0 } }), Object.defineProperty(k, "prototype", { writable: !1 }), h && Z(k, h);
  }
  function et(k) {
    var h = j();
    return function() {
      var c = ce(k), d;
      if (h) {
        var C = ce(this).constructor;
        d = Reflect.construct(c, arguments, C);
      } else
        d = c.apply(this, arguments);
      return Je(this, d);
    };
  }
  function Je(k, h) {
    if (h && (ne(h) === "object" || typeof h == "function"))
      return h;
    if (h !== void 0)
      throw new TypeError("Derived constructors may only return object or undefined");
    return je(k);
  }
  function je(k) {
    if (k === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return k;
  }
  function te(k) {
    var h = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
    return te = function(c) {
      if (c === null || !le(c)) return c;
      if (typeof c != "function")
        throw new TypeError("Super expression must either be null or a function");
      if (typeof h < "u") {
        if (h.has(c)) return h.get(c);
        h.set(c, d);
      }
      function d() {
        return Be(c, arguments, ce(this).constructor);
      }
      return d.prototype = Object.create(c.prototype, { constructor: { value: d, enumerable: !1, writable: !0, configurable: !0 } }), Z(d, c);
    }, te(k);
  }
  function Be(k, h, o) {
    return j() ? Be = Reflect.construct.bind() : Be = function(d, C, x) {
      var M = [null];
      M.push.apply(M, C);
      var q = Function.bind.apply(d, M), W = new q();
      return x && Z(W, x.prototype), W;
    }, Be.apply(null, arguments);
  }
  function j() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  function le(k) {
    try {
      return Function.toString.call(k).indexOf("[native code]") !== -1;
    } catch {
      return typeof k == "function";
    }
  }
  function Z(k, h) {
    return Z = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(c, d) {
      return c.__proto__ = d, c;
    }, Z(k, h);
  }
  function ce(k) {
    return ce = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    }, ce(k);
  }
  function ne(k) {
    "@babel/helpers - typeof";
    return ne = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(h) {
      return typeof h;
    } : function(h) {
      return h && typeof Symbol == "function" && h.constructor === Symbol && h !== Symbol.prototype ? "symbol" : typeof h;
    }, ne(k);
  }
  function J(k, h) {
    if (!(k instanceof h))
      throw new TypeError("Cannot call a class as a function");
  }
  function V(k, h) {
    for (var o = 0; o < h.length; o++) {
      var c = h[o];
      c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(k, oe(c.key), c);
    }
  }
  function ue(k, h, o) {
    return h && V(k.prototype, h), o && V(k, o), Object.defineProperty(k, "prototype", { writable: !1 }), k;
  }
  function oe(k) {
    var h = fe(k, "string");
    return ne(h) === "symbol" ? h : String(h);
  }
  function fe(k, h) {
    if (ne(k) !== "object" || k === null) return k;
    var o = k[Symbol.toPrimitive];
    if (o !== void 0) {
      var c = o.call(k, h);
      if (ne(c) !== "object") return c;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(k);
  }
  var Te = /* @__PURE__ */ n$();
  function X(k, h, o) {
    for (var c = 0; ; c++) {
      if (c == k.childCount || c == h.childCount) return k.childCount == h.childCount ? null : o;
      var d = k.child(c), C = h.child(c);
      if (d == C) {
        o += d.nodeSize;
        continue;
      }
      if (!d.sameMarkup(C)) return o;
      if (d.isText && d.text != C.text) {
        for (var x = 0; d.text[x] == C.text[x]; x++) o++;
        return o;
      }
      if (d.content.size || C.content.size) {
        var M = X(d.content, C.content, o + 1);
        if (M != null) return M;
      }
      o += d.nodeSize;
    }
  }
  function he(k, h, o, c) {
    for (var d = k.childCount, C = h.childCount; ; ) {
      if (d == 0 || C == 0) return d == C ? null : {
        a: o,
        b: c
      };
      var x = k.child(--d), M = h.child(--C), q = x.nodeSize;
      if (x == M) {
        o -= q, c -= q;
        continue;
      }
      if (!x.sameMarkup(M)) return {
        a: o,
        b: c
      };
      if (x.isText && x.text != M.text) {
        for (var W = 0, ve = Math.min(x.text.length, M.text.length); W < ve && x.text[x.text.length - W - 1] == M.text[M.text.length - W - 1]; )
          W++, o--, c--;
        return {
          a: o,
          b: c
        };
      }
      if (x.content.size || M.content.size) {
        var pe = he(x.content, M.content, o - 1, c - 1);
        if (pe) return pe;
      }
      o -= q, c -= q;
    }
  }
  var me = function() {
    function k(h, o) {
      if (J(this, k), this.content = h, this.size = o || 0, o == null) for (var c = 0; c < h.length; c++) this.size += h[c].nodeSize;
    }
    return ue(k, [{
      key: "nodesBetween",
      value: function(o, c, d) {
        for (var C = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, x = arguments.length > 4 ? arguments[4] : void 0, M = 0, q = 0; q < c; M++) {
          var W = this.content[M], ve = q + W.nodeSize;
          if (ve > o && d(W, C + q, x || null, M) !== !1 && W.content.size) {
            var pe = q + 1;
            W.nodesBetween(Math.max(0, o - pe), Math.min(W.content.size, c - pe), d, C + pe);
          }
          q = ve;
        }
      }
    }, {
      key: "descendants",
      value: function(o) {
        this.nodesBetween(0, this.size, o);
      }
    }, {
      key: "textBetween",
      value: function(o, c, d, C) {
        var x = "", M = !0;
        return this.nodesBetween(o, c, function(q, W) {
          var ve = q.isText ? q.text.slice(Math.max(o, W) - W, c - W) : q.isLeaf ? C ? typeof C == "function" ? C(q) : C : q.type.spec.leafText ? q.type.spec.leafText(q) : "" : "";
          q.isBlock && (q.isLeaf && ve || q.isTextblock) && d && (M ? M = !1 : x += d), x += ve;
        }, 0), x;
      }
    }, {
      key: "append",
      value: function(o) {
        if (!o.size) return this;
        if (!this.size) return o;
        var c = this.lastChild, d = o.firstChild, C = this.content.slice(), x = 0;
        for (c.isText && c.sameMarkup(d) && (C[C.length - 1] = c.withText(c.text + d.text), x = 1); x < o.content.length; x++) C.push(o.content[x]);
        return new k(C, this.size + o.size);
      }
    }, {
      key: "cut",
      value: function(o) {
        var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.size;
        if (o == 0 && c == this.size) return this;
        var d = [], C = 0;
        if (c > o) for (var x = 0, M = 0; M < c; x++) {
          var q = this.content[x], W = M + q.nodeSize;
          W > o && ((M < o || W > c) && (q.isText ? q = q.cut(Math.max(0, o - M), Math.min(q.text.length, c - M)) : q = q.cut(Math.max(0, o - M - 1), Math.min(q.content.size, c - M - 1))), d.push(q), C += q.nodeSize), M = W;
        }
        return new k(d, C);
      }
    }, {
      key: "cutByIndex",
      value: function(o, c) {
        return o == c ? k.empty : o == 0 && c == this.content.length ? this : new k(this.content.slice(o, c));
      }
    }, {
      key: "replaceChild",
      value: function(o, c) {
        var d = this.content[o];
        if (d == c) return this;
        var C = this.content.slice(), x = this.size + c.nodeSize - d.nodeSize;
        return C[o] = c, new k(C, x);
      }
    }, {
      key: "addToStart",
      value: function(o) {
        return new k([o].concat(this.content), this.size + o.nodeSize);
      }
    }, {
      key: "addToEnd",
      value: function(o) {
        return new k(this.content.concat(o), this.size + o.nodeSize);
      }
    }, {
      key: "eq",
      value: function(o) {
        if (this.content.length != o.content.length) return !1;
        for (var c = 0; c < this.content.length; c++) if (!this.content[c].eq(o.content[c])) return !1;
        return !0;
      }
    }, {
      key: "firstChild",
      get: function() {
        return this.content.length ? this.content[0] : null;
      }
    }, {
      key: "lastChild",
      get: function() {
        return this.content.length ? this.content[this.content.length - 1] : null;
      }
    }, {
      key: "childCount",
      get: function() {
        return this.content.length;
      }
    }, {
      key: "child",
      value: function(o) {
        var c = this.content[o];
        if (!c) throw new RangeError("Index " + o + " out of range for " + this);
        return c;
      }
    }, {
      key: "maybeChild",
      value: function(o) {
        return this.content[o] || null;
      }
    }, {
      key: "forEach",
      value: function(o) {
        for (var c = 0, d = 0; c < this.content.length; c++) {
          var C = this.content[c];
          o(C, d, c), d += C.nodeSize;
        }
      }
    }, {
      key: "findDiffStart",
      value: function(o) {
        var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        return X(this, o, c);
      }
    }, {
      key: "findDiffEnd",
      value: function(o) {
        var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.size, d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : o.size;
        return he(this, o, c, d);
      }
    }, {
      key: "findIndex",
      value: function(o) {
        var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : -1;
        if (o == 0) return ze(0, o);
        if (o == this.size) return ze(this.content.length, o);
        if (o > this.size || o < 0) throw new RangeError("Position ".concat(o, " outside of fragment (").concat(this, ")"));
        for (var d = 0, C = 0; ; d++) {
          var x = this.child(d), M = C + x.nodeSize;
          if (M >= o)
            return M == o || c > 0 ? ze(d + 1, M) : ze(d, C);
          C = M;
        }
      }
    }, {
      key: "toString",
      value: function() {
        return "<" + this.toStringInner() + ">";
      }
    }, {
      key: "toStringInner",
      value: function() {
        return this.content.join(", ");
      }
    }, {
      key: "toJSON",
      value: function() {
        return this.content.length ? this.content.map(function(o) {
          return o.toJSON();
        }) : null;
      }
    }], [{
      key: "fromJSON",
      value: function(o, c) {
        if (!c) return k.empty;
        if (!Array.isArray(c)) throw new RangeError("Invalid input for Fragment.fromJSON");
        return new k(c.map(o.nodeFromJSON));
      }
    }, {
      key: "fromArray",
      value: function(o) {
        if (!o.length) return k.empty;
        for (var c, d = 0, C = 0; C < o.length; C++) {
          var x = o[C];
          d += x.nodeSize, C && x.isText && o[C - 1].sameMarkup(x) ? (c || (c = o.slice(0, C)), c[c.length - 1] = x.withText(c[c.length - 1].text + x.text)) : c && c.push(x);
        }
        return new k(c || o, d);
      }
    }, {
      key: "from",
      value: function(o) {
        if (!o) return k.empty;
        if (o instanceof k) return o;
        if (Array.isArray(o)) return this.fromArray(o);
        if (o.attrs) return new k([o], o.nodeSize);
        throw new RangeError("Can not convert " + o + " to a Fragment" + (o.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
      }
    }]), k;
  }();
  me.empty = new me([], 0);
  var Ce = {
    index: 0,
    offset: 0
  };
  function ze(k, h) {
    return Ce.index = k, Ce.offset = h, Ce;
  }
  function ht(k, h) {
    if (k === h) return !0;
    if (!(k && ne(k) == "object") || !(h && ne(h) == "object")) return !1;
    var o = Array.isArray(k);
    if (Array.isArray(h) != o) return !1;
    if (o) {
      if (k.length != h.length) return !1;
      for (var c = 0; c < k.length; c++) if (!ht(k[c], h[c])) return !1;
    } else {
      for (var d in k) if (!(d in h) || !ht(k[d], h[d])) return !1;
      for (var C in h) if (!(C in k)) return !1;
    }
    return !0;
  }
  var Le = function() {
    function k(h, o) {
      J(this, k), this.type = h, this.attrs = o;
    }
    return ue(k, [{
      key: "addToSet",
      value: function(o) {
        for (var c, d = !1, C = 0; C < o.length; C++) {
          var x = o[C];
          if (this.eq(x)) return o;
          if (this.type.excludes(x.type))
            c || (c = o.slice(0, C));
          else {
            if (x.type.excludes(this.type))
              return o;
            !d && x.type.rank > this.type.rank && (c || (c = o.slice(0, C)), c.push(this), d = !0), c && c.push(x);
          }
        }
        return c || (c = o.slice()), d || c.push(this), c;
      }
    }, {
      key: "removeFromSet",
      value: function(o) {
        for (var c = 0; c < o.length; c++) if (this.eq(o[c])) return o.slice(0, c).concat(o.slice(c + 1));
        return o;
      }
    }, {
      key: "isInSet",
      value: function(o) {
        for (var c = 0; c < o.length; c++) if (this.eq(o[c])) return !0;
        return !1;
      }
    }, {
      key: "eq",
      value: function(o) {
        return this == o || this.type == o.type && ht(this.attrs, o.attrs);
      }
    }, {
      key: "toJSON",
      value: function() {
        var o = {
          type: this.type.name
        };
        for (var c in this.attrs) {
          o.attrs = this.attrs;
          break;
        }
        return o;
      }
    }], [{
      key: "fromJSON",
      value: function(o, c) {
        if (!c) throw new RangeError("Invalid input for Mark.fromJSON");
        var d = o.marks[c.type];
        if (!d) throw new RangeError("There is no mark type ".concat(c.type, " in this schema"));
        var C = d.create(c.attrs);
        return d.checkAttrs(C.attrs), C;
      }
    }, {
      key: "sameSet",
      value: function(o, c) {
        if (o == c) return !0;
        if (o.length != c.length) return !1;
        for (var d = 0; d < o.length; d++) if (!o[d].eq(c[d])) return !1;
        return !0;
      }
    }, {
      key: "setFrom",
      value: function(o) {
        if (!o || Array.isArray(o) && o.length == 0) return k.none;
        if (o instanceof k) return [o];
        var c = o.slice();
        return c.sort(function(d, C) {
          return d.type.rank - C.type.rank;
        }), c;
      }
    }]), k;
  }();
  Le.none = [];
  var ut = function(k) {
    Xe(o, k);
    var h = et(o);
    function o() {
      return J(this, o), h.apply(this, arguments);
    }
    return ue(o);
  }(te(Error)), ct = function() {
    function k(h, o, c) {
      J(this, k), this.content = h, this.openStart = o, this.openEnd = c;
    }
    return ue(k, [{
      key: "size",
      get: function() {
        return this.content.size - this.openStart - this.openEnd;
      }
    }, {
      key: "insertAt",
      value: function(o, c) {
        var d = Ze(this.content, o + this.openStart, c);
        return d && new k(d, this.openStart, this.openEnd);
      }
    }, {
      key: "removeBetween",
      value: function(o, c) {
        return new k(it(this.content, o + this.openStart, c + this.openStart), this.openStart, this.openEnd);
      }
    }, {
      key: "eq",
      value: function(o) {
        return this.content.eq(o.content) && this.openStart == o.openStart && this.openEnd == o.openEnd;
      }
    }, {
      key: "toString",
      value: function() {
        return this.content + "(" + this.openStart + "," + this.openEnd + ")";
      }
    }, {
      key: "toJSON",
      value: function() {
        if (!this.content.size) return null;
        var o = {
          content: this.content.toJSON()
        };
        return this.openStart > 0 && (o.openStart = this.openStart), this.openEnd > 0 && (o.openEnd = this.openEnd), o;
      }
    }], [{
      key: "fromJSON",
      value: function(o, c) {
        if (!c) return k.empty;
        var d = c.openStart || 0, C = c.openEnd || 0;
        if (typeof d != "number" || typeof C != "number") throw new RangeError("Invalid input for Slice.fromJSON");
        return new k(me.fromJSON(o, c.content), d, C);
      }
    }, {
      key: "maxOpen",
      value: function(o) {
        for (var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, d = 0, C = 0, x = o.firstChild; x && !x.isLeaf && (c || !x.type.spec.isolating); x = x.firstChild) d++;
        for (var M = o.lastChild; M && !M.isLeaf && (c || !M.type.spec.isolating); M = M.lastChild) C++;
        return new k(o, d, C);
      }
    }]), k;
  }();
  ct.empty = new ct(me.empty, 0, 0);
  function it(k, h, o) {
    var c = k.findIndex(h), d = c.index, C = c.offset, x = k.maybeChild(d), M = k.findIndex(o), q = M.index, W = M.offset;
    if (C == h || x.isText) {
      if (W != o && !k.child(q).isText) throw new RangeError("Removing non-flat range");
      return k.cut(0, h).append(k.cut(o));
    }
    if (d != q) throw new RangeError("Removing non-flat range");
    return k.replaceChild(d, x.copy(it(x.content, h - C - 1, o - C - 1)));
  }
  function Ze(k, h, o, c) {
    var d = k.findIndex(h), C = d.index, x = d.offset, M = k.maybeChild(C);
    if (x == h || M.isText)
      return k.cut(0, h).append(o).append(k.cut(h));
    var q = Ze(M.content, h - x - 1, o);
    return q && k.replaceChild(C, M.copy(q));
  }
  function yt(k, h, o) {
    if (o.openStart > k.depth) throw new ut("Inserted content deeper than insertion position");
    if (k.depth - o.openStart != h.depth - o.openEnd) throw new ut("Inconsistent open depths");
    return Tt(k, h, o, 0);
  }
  function Tt(k, h, o, c) {
    var d = k.index(c), C = k.node(c);
    if (d == h.index(c) && c < k.depth - o.openStart) {
      var x = Tt(k, h, o, c + 1);
      return C.copy(C.content.replaceChild(d, x));
    } else if (o.content.size)
      if (!o.openStart && !o.openEnd && k.depth == c && h.depth == c) {
        var M = k.parent, q = M.content;
        return dt(M, q.cut(0, k.parentOffset).append(o.content).append(q.cut(h.parentOffset)));
      } else {
        var W = K(o, k), ve = W.start, pe = W.end;
        return dt(C, Wt(k, ve, pe, h, c));
      }
    else return dt(C, Yt(k, h, c));
  }
  function Bt(k, h) {
    if (!h.type.compatibleContent(k.type)) throw new ut("Cannot join " + h.type.name + " onto " + k.type.name);
  }
  function We(k, h, o) {
    var c = k.node(o);
    return Bt(c, h.node(o)), c;
  }
  function mt(k, h) {
    var o = h.length - 1;
    o >= 0 && k.isText && k.sameMarkup(h[o]) ? h[o] = k.withText(h[o].text + k.text) : h.push(k);
  }
  function kt(k, h, o, c) {
    var d = (h || k).node(o), C = 0, x = h ? h.index(o) : d.childCount;
    k && (C = k.index(o), k.depth > o ? C++ : k.textOffset && (mt(k.nodeAfter, c), C++));
    for (var M = C; M < x; M++) mt(d.child(M), c);
    h && h.depth == o && h.textOffset && mt(h.nodeBefore, c);
  }
  function dt(k, h) {
    return k.type.checkContent(h), k.copy(h);
  }
  function Wt(k, h, o, c, d) {
    var C = k.depth > d && We(k, h, d + 1), x = c.depth > d && We(o, c, d + 1), M = [];
    return kt(null, k, d, M), C && x && h.index(d) == o.index(d) ? (Bt(C, x), mt(dt(C, Wt(k, h, o, c, d + 1)), M)) : (C && mt(dt(C, Yt(k, h, d + 1)), M), kt(h, o, d, M), x && mt(dt(x, Yt(o, c, d + 1)), M)), kt(c, null, d, M), new me(M);
  }
  function Yt(k, h, o) {
    var c = [];
    if (kt(null, k, o, c), k.depth > o) {
      var d = We(k, h, o + 1);
      mt(dt(d, Yt(k, h, o + 1)), c);
    }
    return kt(h, null, o, c), new me(c);
  }
  function K(k, h) {
    for (var o = h.depth - k.openStart, c = h.node(o), d = c.copy(k.content), C = o - 1; C >= 0; C--) d = h.node(C).copy(me.from(d));
    return {
      start: d.resolveNoCache(k.openStart + o),
      end: d.resolveNoCache(d.content.size - k.openEnd - o)
    };
  }
  var $ = function() {
    function k(h, o, c) {
      J(this, k), this.pos = h, this.path = o, this.parentOffset = c, this.depth = o.length / 3 - 1;
    }
    return ue(k, [{
      key: "resolveDepth",
      value: function(o) {
        return o == null ? this.depth : o < 0 ? this.depth + o : o;
      }
    }, {
      key: "parent",
      get: function() {
        return this.node(this.depth);
      }
    }, {
      key: "doc",
      get: function() {
        return this.node(0);
      }
    }, {
      key: "node",
      value: function(o) {
        return this.path[this.resolveDepth(o) * 3];
      }
    }, {
      key: "index",
      value: function(o) {
        return this.path[this.resolveDepth(o) * 3 + 1];
      }
    }, {
      key: "indexAfter",
      value: function(o) {
        return o = this.resolveDepth(o), this.index(o) + (o == this.depth && !this.textOffset ? 0 : 1);
      }
    }, {
      key: "start",
      value: function(o) {
        return o = this.resolveDepth(o), o == 0 ? 0 : this.path[o * 3 - 1] + 1;
      }
    }, {
      key: "end",
      value: function(o) {
        return o = this.resolveDepth(o), this.start(o) + this.node(o).content.size;
      }
    }, {
      key: "before",
      value: function(o) {
        if (o = this.resolveDepth(o), !o) throw new RangeError("There is no position before the top-level node");
        return o == this.depth + 1 ? this.pos : this.path[o * 3 - 1];
      }
    }, {
      key: "after",
      value: function(o) {
        if (o = this.resolveDepth(o), !o) throw new RangeError("There is no position after the top-level node");
        return o == this.depth + 1 ? this.pos : this.path[o * 3 - 1] + this.path[o * 3].nodeSize;
      }
    }, {
      key: "textOffset",
      get: function() {
        return this.pos - this.path[this.path.length - 1];
      }
    }, {
      key: "nodeAfter",
      get: function() {
        var o = this.parent, c = this.index(this.depth);
        if (c == o.childCount) return null;
        var d = this.pos - this.path[this.path.length - 1], C = o.child(c);
        return d ? o.child(c).cut(d) : C;
      }
    }, {
      key: "nodeBefore",
      get: function() {
        var o = this.index(this.depth), c = this.pos - this.path[this.path.length - 1];
        return c ? this.parent.child(o).cut(0, c) : o == 0 ? null : this.parent.child(o - 1);
      }
    }, {
      key: "posAtIndex",
      value: function(o, c) {
        c = this.resolveDepth(c);
        for (var d = this.path[c * 3], C = c == 0 ? 0 : this.path[c * 3 - 1] + 1, x = 0; x < o; x++) C += d.child(x).nodeSize;
        return C;
      }
    }, {
      key: "marks",
      value: function() {
        var o = this.parent, c = this.index();
        if (o.content.size == 0) return Le.none;
        if (this.textOffset) return o.child(c).marks;
        var d = o.maybeChild(c - 1), C = o.maybeChild(c);
        if (!d) {
          var x = d;
          d = C, C = x;
        }
        for (var M = d.marks, q = 0; q < M.length; q++) M[q].type.spec.inclusive === !1 && (!C || !M[q].isInSet(C.marks)) && (M = M[q--].removeFromSet(M));
        return M;
      }
    }, {
      key: "marksAcross",
      value: function(o) {
        var c = this.parent.maybeChild(this.index());
        if (!c || !c.isInline) return null;
        for (var d = c.marks, C = o.parent.maybeChild(o.index()), x = 0; x < d.length; x++) d[x].type.spec.inclusive === !1 && (!C || !d[x].isInSet(C.marks)) && (d = d[x--].removeFromSet(d));
        return d;
      }
    }, {
      key: "sharedDepth",
      value: function(o) {
        for (var c = this.depth; c > 0; c--) if (this.start(c) <= o && this.end(c) >= o) return c;
        return 0;
      }
    }, {
      key: "blockRange",
      value: function() {
        var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this, c = arguments.length > 1 ? arguments[1] : void 0;
        if (o.pos < this.pos) return o.blockRange(this);
        for (var d = this.depth - (this.parent.inlineContent || this.pos == o.pos ? 1 : 0); d >= 0; d--) if (o.pos <= this.end(d) && (!c || c(this.node(d)))) return new Q(this, o, d);
        return null;
      }
    }, {
      key: "sameParent",
      value: function(o) {
        return this.pos - this.parentOffset == o.pos - o.parentOffset;
      }
    }, {
      key: "max",
      value: function(o) {
        return o.pos > this.pos ? o : this;
      }
    }, {
      key: "min",
      value: function(o) {
        return o.pos < this.pos ? o : this;
      }
    }, {
      key: "toString",
      value: function() {
        for (var o = "", c = 1; c <= this.depth; c++) o += (o ? "/" : "") + this.node(c).type.name + "_" + this.index(c - 1);
        return o + ":" + this.parentOffset;
      }
    }], [{
      key: "resolve",
      value: function(o, c) {
        if (!(c >= 0 && c <= o.content.size)) throw new RangeError("Position " + c + " out of range");
        for (var d = [], C = 0, x = c, M = o; ; ) {
          var q = M.content.findIndex(x), W = q.index, ve = q.offset, pe = x - ve;
          if (d.push(M, W, C + ve), !pe || (M = M.child(W), M.isText)) break;
          x = pe - 1, C += ve + 1;
        }
        return new k(c, d, x);
      }
    }, {
      key: "resolveCached",
      value: function(o, c) {
        var d = I.get(o);
        if (d)
          for (var C = 0; C < d.elts.length; C++) {
            var x = d.elts[C];
            if (x.pos == c) return x;
          }
        else
          I.set(o, d = new P());
        var M = d.elts[d.i] = k.resolve(o, c);
        return d.i = (d.i + 1) % B, M;
      }
    }]), k;
  }(), P = ue(function k() {
    J(this, k), this.elts = [], this.i = 0;
  }), B = 12, I = /* @__PURE__ */ new WeakMap(), Q = function() {
    function k(h, o, c) {
      J(this, k), this.$from = h, this.$to = o, this.depth = c;
    }
    return ue(k, [{
      key: "start",
      get: function() {
        return this.$from.before(this.depth + 1);
      }
    }, {
      key: "end",
      get: function() {
        return this.$to.after(this.depth + 1);
      }
    }, {
      key: "parent",
      get: function() {
        return this.$from.node(this.depth);
      }
    }, {
      key: "startIndex",
      get: function() {
        return this.$from.index(this.depth);
      }
    }, {
      key: "endIndex",
      get: function() {
        return this.$to.indexAfter(this.depth);
      }
    }]), k;
  }(), re = /* @__PURE__ */ Object.create(null), be = function() {
    function k(h, o, c) {
      var d = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : Le.none;
      J(this, k), this.type = h, this.attrs = o, this.marks = d, this.content = c || me.empty;
    }
    return ue(k, [{
      key: "children",
      get: function() {
        return this.content.content;
      }
    }, {
      key: "nodeSize",
      get: function() {
        return this.isLeaf ? 1 : 2 + this.content.size;
      }
    }, {
      key: "childCount",
      get: function() {
        return this.content.childCount;
      }
    }, {
      key: "child",
      value: function(o) {
        return this.content.child(o);
      }
    }, {
      key: "maybeChild",
      value: function(o) {
        return this.content.maybeChild(o);
      }
    }, {
      key: "forEach",
      value: function(o) {
        this.content.forEach(o);
      }
    }, {
      key: "nodesBetween",
      value: function(o, c, d) {
        var C = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
        this.content.nodesBetween(o, c, d, C, this);
      }
    }, {
      key: "descendants",
      value: function(o) {
        this.nodesBetween(0, this.content.size, o);
      }
    }, {
      key: "textContent",
      get: function() {
        return this.isLeaf && this.type.spec.leafText ? this.type.spec.leafText(this) : this.textBetween(0, this.content.size, "");
      }
    }, {
      key: "textBetween",
      value: function(o, c, d, C) {
        return this.content.textBetween(o, c, d, C);
      }
    }, {
      key: "firstChild",
      get: function() {
        return this.content.firstChild;
      }
    }, {
      key: "lastChild",
      get: function() {
        return this.content.lastChild;
      }
    }, {
      key: "eq",
      value: function(o) {
        return this == o || this.sameMarkup(o) && this.content.eq(o.content);
      }
    }, {
      key: "sameMarkup",
      value: function(o) {
        return this.hasMarkup(o.type, o.attrs, o.marks);
      }
    }, {
      key: "hasMarkup",
      value: function(o, c, d) {
        return this.type == o && ht(this.attrs, c || o.defaultAttrs || re) && Le.sameSet(this.marks, d || Le.none);
      }
    }, {
      key: "copy",
      value: function() {
        var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
        return o == this.content ? this : new k(this.type, this.attrs, o, this.marks);
      }
    }, {
      key: "mark",
      value: function(o) {
        return o == this.marks ? this : new k(this.type, this.attrs, this.content, o);
      }
    }, {
      key: "cut",
      value: function(o) {
        var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.content.size;
        return o == 0 && c == this.content.size ? this : this.copy(this.content.cut(o, c));
      }
    }, {
      key: "slice",
      value: function(o) {
        var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.content.size, d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
        if (o == c) return ct.empty;
        var C = this.resolve(o), x = this.resolve(c), M = d ? 0 : C.sharedDepth(c), q = C.start(M), W = C.node(M), ve = W.content.cut(C.pos - q, x.pos - q);
        return new ct(ve, C.depth - M, x.depth - M);
      }
    }, {
      key: "replace",
      value: function(o, c, d) {
        return yt(this.resolve(o), this.resolve(c), d);
      }
    }, {
      key: "nodeAt",
      value: function(o) {
        for (var c = this; ; ) {
          var d = c.content.findIndex(o), C = d.index, x = d.offset;
          if (c = c.maybeChild(C), !c) return null;
          if (x == o || c.isText) return c;
          o -= x + 1;
        }
      }
    }, {
      key: "childAfter",
      value: function(o) {
        var c = this.content.findIndex(o), d = c.index, C = c.offset;
        return {
          node: this.content.maybeChild(d),
          index: d,
          offset: C
        };
      }
    }, {
      key: "childBefore",
      value: function(o) {
        if (o == 0) return {
          node: null,
          index: 0,
          offset: 0
        };
        var c = this.content.findIndex(o), d = c.index, C = c.offset;
        if (C < o) return {
          node: this.content.child(d),
          index: d,
          offset: C
        };
        var x = this.content.child(d - 1);
        return {
          node: x,
          index: d - 1,
          offset: C - x.nodeSize
        };
      }
    }, {
      key: "resolve",
      value: function(o) {
        return $.resolveCached(this, o);
      }
    }, {
      key: "resolveNoCache",
      value: function(o) {
        return $.resolve(this, o);
      }
    }, {
      key: "rangeHasMark",
      value: function(o, c, d) {
        var C = !1;
        return c > o && this.nodesBetween(o, c, function(x) {
          return d.isInSet(x.marks) && (C = !0), !C;
        }), C;
      }
    }, {
      key: "isBlock",
      get: function() {
        return this.type.isBlock;
      }
    }, {
      key: "isTextblock",
      get: function() {
        return this.type.isTextblock;
      }
    }, {
      key: "inlineContent",
      get: function() {
        return this.type.inlineContent;
      }
    }, {
      key: "isInline",
      get: function() {
        return this.type.isInline;
      }
    }, {
      key: "isText",
      get: function() {
        return this.type.isText;
      }
    }, {
      key: "isLeaf",
      get: function() {
        return this.type.isLeaf;
      }
    }, {
      key: "isAtom",
      get: function() {
        return this.type.isAtom;
      }
    }, {
      key: "toString",
      value: function() {
        if (this.type.spec.toDebugString) return this.type.spec.toDebugString(this);
        var o = this.type.name;
        return this.content.size && (o += "(" + this.content.toStringInner() + ")"), lt(this.marks, o);
      }
    }, {
      key: "contentMatchAt",
      value: function(o) {
        var c = this.type.contentMatch.matchFragment(this.content, 0, o);
        if (!c) throw new Error("Called contentMatchAt on a node with invalid content");
        return c;
      }
    }, {
      key: "canReplace",
      value: function(o, c) {
        var d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : me.empty, C = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, x = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : d.childCount, M = this.contentMatchAt(o).matchFragment(d, C, x), q = M && M.matchFragment(this.content, c);
        if (!q || !q.validEnd) return !1;
        for (var W = C; W < x; W++) if (!this.type.allowsMarks(d.child(W).marks)) return !1;
        return !0;
      }
    }, {
      key: "canReplaceWith",
      value: function(o, c, d, C) {
        if (C && !this.type.allowsMarks(C)) return !1;
        var x = this.contentMatchAt(o).matchType(d), M = x && x.matchFragment(this.content, c);
        return M ? M.validEnd : !1;
      }
    }, {
      key: "canAppend",
      value: function(o) {
        return o.content.size ? this.canReplace(this.childCount, this.childCount, o.content) : this.type.compatibleContent(o.type);
      }
    }, {
      key: "check",
      value: function() {
        this.type.checkContent(this.content), this.type.checkAttrs(this.attrs);
        for (var o = Le.none, c = 0; c < this.marks.length; c++) {
          var d = this.marks[c];
          d.type.checkAttrs(d.attrs), o = d.addToSet(o);
        }
        if (!Le.sameSet(o, this.marks)) throw new RangeError("Invalid collection of marks for node ".concat(this.type.name, ": ").concat(this.marks.map(function(C) {
          return C.type.name;
        })));
        this.content.forEach(function(C) {
          return C.check();
        });
      }
    }, {
      key: "toJSON",
      value: function() {
        var o = {
          type: this.type.name
        };
        for (var c in this.attrs) {
          o.attrs = this.attrs;
          break;
        }
        return this.content.size && (o.content = this.content.toJSON()), this.marks.length && (o.marks = this.marks.map(function(d) {
          return d.toJSON();
        })), o;
      }
    }], [{
      key: "fromJSON",
      value: function(o, c) {
        if (!c) throw new RangeError("Invalid input for Node.fromJSON");
        var d = void 0;
        if (c.marks) {
          if (!Array.isArray(c.marks)) throw new RangeError("Invalid mark data for Node.fromJSON");
          d = c.marks.map(o.markFromJSON);
        }
        if (c.type == "text") {
          if (typeof c.text != "string") throw new RangeError("Invalid text node in JSON");
          return o.text(c.text, d);
        }
        var C = me.fromJSON(o, c.content), x = o.nodeType(c.type).create(c.attrs, C, d);
        return x.type.checkAttrs(x.attrs), x;
      }
    }]), k;
  }();
  be.prototype.text = void 0;
  var Ye = function(k) {
    Xe(o, k);
    var h = et(o);
    function o(c, d, C, x) {
      var M;
      if (J(this, o), M = h.call(this, c, d, null, x), !C) throw new RangeError("Empty text nodes are not allowed");
      return M.text = C, M;
    }
    return ue(o, [{
      key: "toString",
      value: function() {
        return this.type.spec.toDebugString ? this.type.spec.toDebugString(this) : lt(this.marks, JSON.stringify(this.text));
      }
    }, {
      key: "textContent",
      get: function() {
        return this.text;
      }
    }, {
      key: "textBetween",
      value: function(d, C) {
        return this.text.slice(d, C);
      }
    }, {
      key: "nodeSize",
      get: function() {
        return this.text.length;
      }
    }, {
      key: "mark",
      value: function(d) {
        return d == this.marks ? this : new o(this.type, this.attrs, this.text, d);
      }
    }, {
      key: "withText",
      value: function(d) {
        return d == this.text ? this : new o(this.type, this.attrs, d, this.marks);
      }
    }, {
      key: "cut",
      value: function() {
        var d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.text.length;
        return d == 0 && C == this.text.length ? this : this.withText(this.text.slice(d, C));
      }
    }, {
      key: "eq",
      value: function(d) {
        return this.sameMarkup(d) && this.text == d.text;
      }
    }, {
      key: "toJSON",
      value: function() {
        var d = Fe(ce(o.prototype), "toJSON", this).call(this);
        return d.text = this.text, d;
      }
    }]), o;
  }(be);
  function lt(k, h) {
    for (var o = k.length - 1; o >= 0; o--) h = k[o].type.name + "(" + h + ")";
    return h;
  }
  var Qe = function() {
    function k(h) {
      J(this, k), this.validEnd = h, this.next = [], this.wrapCache = [];
    }
    return ue(k, [{
      key: "matchType",
      value: function(o) {
        for (var c = 0; c < this.next.length; c++) if (this.next[c].type == o) return this.next[c].next;
        return null;
      }
    }, {
      key: "matchFragment",
      value: function(o) {
        for (var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : o.childCount, C = this, x = c; C && x < d; x++) C = C.matchType(o.child(x).type);
        return C;
      }
    }, {
      key: "inlineContent",
      get: function() {
        return this.next.length != 0 && this.next[0].type.isInline;
      }
    }, {
      key: "defaultType",
      get: function() {
        for (var o = 0; o < this.next.length; o++) {
          var c = this.next[o].type;
          if (!(c.isText || c.hasRequiredAttrs())) return c;
        }
        return null;
      }
    }, {
      key: "compatible",
      value: function(o) {
        for (var c = 0; c < this.next.length; c++) for (var d = 0; d < o.next.length; d++) if (this.next[c].type == o.next[d].type) return !0;
        return !1;
      }
    }, {
      key: "fillBefore",
      value: function(o) {
        var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, C = [this];
        function x(M, q) {
          var W = M.matchFragment(o, d);
          if (W && (!c || W.validEnd)) return me.from(q.map(function(bt) {
            return bt.createAndFill();
          }));
          for (var ve = 0; ve < M.next.length; ve++) {
            var pe = M.next[ve], Ae = pe.type, $e = pe.next;
            if (!(Ae.isText || Ae.hasRequiredAttrs()) && C.indexOf($e) == -1) {
              C.push($e);
              var ot = x($e, q.concat(Ae));
              if (ot) return ot;
            }
          }
          return null;
        }
        return x(this, []);
      }
    }, {
      key: "findWrapping",
      value: function(o) {
        for (var c = 0; c < this.wrapCache.length; c += 2) if (this.wrapCache[c] == o) return this.wrapCache[c + 1];
        var d = this.computeWrapping(o);
        return this.wrapCache.push(o, d), d;
      }
    }, {
      key: "computeWrapping",
      value: function(o) {
        for (var c = /* @__PURE__ */ Object.create(null), d = [{
          match: this,
          type: null,
          via: null
        }]; d.length; ) {
          var C = d.shift(), x = C.match;
          if (x.matchType(o)) {
            for (var M = [], q = C; q.type; q = q.via) M.push(q.type);
            return M.reverse();
          }
          for (var W = 0; W < x.next.length; W++) {
            var ve = x.next[W], pe = ve.type, Ae = ve.next;
            !pe.isLeaf && !pe.hasRequiredAttrs() && !(pe.name in c) && (!C.type || Ae.validEnd) && (d.push({
              match: pe.contentMatch,
              type: pe,
              via: C
            }), c[pe.name] = !0);
          }
        }
        return null;
      }
    }, {
      key: "edgeCount",
      get: function() {
        return this.next.length;
      }
    }, {
      key: "edge",
      value: function(o) {
        if (o >= this.next.length) throw new RangeError("There's no ".concat(o, "th edge in this content match"));
        return this.next[o];
      }
    }, {
      key: "toString",
      value: function() {
        var o = [];
        function c(d) {
          o.push(d);
          for (var C = 0; C < d.next.length; C++) o.indexOf(d.next[C].next) == -1 && c(d.next[C].next);
        }
        return c(this), o.map(function(d, C) {
          for (var x = C + (d.validEnd ? "*" : " ") + " ", M = 0; M < d.next.length; M++) x += (M ? ", " : "") + d.next[M].type.name + "->" + o.indexOf(d.next[M].next);
          return x;
        }).join(`
`);
      }
    }], [{
      key: "parse",
      value: function(o, c) {
        var d = new xt(o, c);
        if (d.next == null) return k.empty;
        var C = ft(d);
        d.next && d.err("Unexpected trailing text");
        var x = De(Nr(C));
        return Ke(x, d), x;
      }
    }]), k;
  }();
  Qe.empty = new Qe(!0);
  var xt = function() {
    function k(h, o) {
      J(this, k), this.string = h, this.nodeTypes = o, this.inline = null, this.pos = 0, this.tokens = h.split(/\s*(?=\b|\W|$)/), this.tokens[this.tokens.length - 1] == "" && this.tokens.pop(), this.tokens[0] == "" && this.tokens.shift();
    }
    return ue(k, [{
      key: "next",
      get: function() {
        return this.tokens[this.pos];
      }
    }, {
      key: "eat",
      value: function(o) {
        return this.next == o && (this.pos++ || !0);
      }
    }, {
      key: "err",
      value: function(o) {
        throw new SyntaxError(o + " (in content expression '" + this.string + "')");
      }
    }]), k;
  }();
  function ft(k) {
    var h = [];
    do
      h.push($t(k));
    while (k.eat("|"));
    return h.length == 1 ? h[0] : {
      type: "choice",
      exprs: h
    };
  }
  function $t(k) {
    var h = [];
    do
      h.push(It(k));
    while (k.next && k.next != ")" && k.next != "|");
    return h.length == 1 ? h[0] : {
      type: "seq",
      exprs: h
    };
  }
  function It(k) {
    for (var h = Vr(k); ; )
      if (k.eat("+")) h = {
        type: "plus",
        expr: h
      };
      else if (k.eat("*")) h = {
        type: "star",
        expr: h
      };
      else if (k.eat("?")) h = {
        type: "opt",
        expr: h
      };
      else if (k.eat("{")) h = St(k, h);
      else break;
    return h;
  }
  function Xt(k) {
    /\D/.test(k.next) && k.err("Expected number, got '" + k.next + "'");
    var h = Number(k.next);
    return k.pos++, h;
  }
  function St(k, h) {
    var o = Xt(k), c = o;
    return k.eat(",") && (k.next != "}" ? c = Xt(k) : c = -1), k.eat("}") || k.err("Unclosed braced range"), {
      type: "range",
      min: o,
      max: c,
      expr: h
    };
  }
  function cr(k, h) {
    var o = k.nodeTypes, c = o[h];
    if (c) return [c];
    var d = [];
    for (var C in o) {
      var x = o[C];
      x.isInGroup(h) && d.push(x);
    }
    return d.length == 0 && k.err("No node type or group '" + h + "' found"), d;
  }
  function Vr(k) {
    if (k.eat("(")) {
      var h = ft(k);
      return k.eat(")") || k.err("Missing closing paren"), h;
    } else if (/\W/.test(k.next))
      k.err("Unexpected token '" + k.next + "'");
    else {
      var o = cr(k, k.next).map(function(c) {
        return k.inline == null ? k.inline = c.isInline : k.inline != c.isInline && k.err("Mixing inline and block content"), {
          type: "name",
          value: c
        };
      });
      return k.pos++, o.length == 1 ? o[0] : {
        type: "choice",
        exprs: o
      };
    }
  }
  function Nr(k) {
    var h = [[]];
    return d(C(k, 0), o()), h;
    function o() {
      return h.push([]) - 1;
    }
    function c(x, M, q) {
      var W = {
        term: q,
        to: M
      };
      return h[x].push(W), W;
    }
    function d(x, M) {
      x.forEach(function(q) {
        return q.to = M;
      });
    }
    function C(x, M) {
      if (x.type == "choice")
        return x.exprs.reduce(function(Rr, Pr) {
          return Rr.concat(C(Pr, M));
        }, []);
      if (x.type == "seq")
        for (var q = 0; ; q++) {
          var W = C(x.exprs[q], M);
          if (q == x.exprs.length - 1) return W;
          d(W, M = o());
        }
      else if (x.type == "star") {
        var ve = o();
        return c(M, ve), d(C(x.expr, ve), ve), [c(ve)];
      } else if (x.type == "plus") {
        var pe = o();
        return d(C(x.expr, M), pe), d(C(x.expr, pe), pe), [c(pe)];
      } else {
        if (x.type == "opt")
          return [c(M)].concat(C(x.expr, M));
        if (x.type == "range") {
          for (var Ae = M, $e = 0; $e < x.min; $e++) {
            var ot = o();
            d(C(x.expr, Ae), ot), Ae = ot;
          }
          if (x.max == -1)
            d(C(x.expr, Ae), Ae);
          else
            for (var bt = x.min; bt < x.max; bt++) {
              var nr = o();
              c(Ae, nr), d(C(x.expr, Ae), nr), Ae = nr;
            }
          return [c(Ae)];
        } else {
          if (x.type == "name")
            return [c(M, void 0, x.value)];
          throw new Error("Unknown expr type");
        }
      }
    }
  }
  function zt(k, h) {
    return h - k;
  }
  function Ne(k, h) {
    var o = [];
    return c(h), o.sort(zt);
    function c(d) {
      var C = k[d];
      if (C.length == 1 && !C[0].term) return c(C[0].to);
      o.push(d);
      for (var x = 0; x < C.length; x++) {
        var M = C[x], q = M.term, W = M.to;
        !q && o.indexOf(W) == -1 && c(W);
      }
    }
  }
  function De(k) {
    var h = /* @__PURE__ */ Object.create(null);
    return o(Ne(k, 0));
    function o(c) {
      var d = [];
      c.forEach(function(q) {
        k[q].forEach(function(W) {
          var ve = W.term, pe = W.to;
          if (ve) {
            for (var Ae, $e = 0; $e < d.length; $e++) d[$e][0] == ve && (Ae = d[$e][1]);
            Ne(k, pe).forEach(function(ot) {
              Ae || d.push([ve, Ae = []]), Ae.indexOf(ot) == -1 && Ae.push(ot);
            });
          }
        });
      });
      for (var C = h[c.join(",")] = new Qe(c.indexOf(k.length - 1) > -1), x = 0; x < d.length; x++) {
        var M = d[x][1].sort(zt);
        C.next.push({
          type: d[x][0],
          next: h[M.join(",")] || o(M)
        });
      }
      return C;
    }
  }
  function Ke(k, h) {
    for (var o = 0, c = [k]; o < c.length; o++) {
      for (var d = c[o], C = !d.validEnd, x = [], M = 0; M < d.next.length; M++) {
        var q = d.next[M], W = q.type, ve = q.next;
        x.push(W.name), C && !(W.isText || W.hasRequiredAttrs()) && (C = !1), c.indexOf(ve) == -1 && c.push(ve);
      }
      C && h.err("Only non-generatable nodes (" + x.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
    }
  }
  function rt(k) {
    var h = /* @__PURE__ */ Object.create(null);
    for (var o in k) {
      var c = k[o];
      if (!c.hasDefault) return null;
      h[o] = c.default;
    }
    return h;
  }
  function wt(k, h) {
    var o = /* @__PURE__ */ Object.create(null);
    for (var c in k) {
      var d = h && h[c];
      if (d === void 0) {
        var C = k[c];
        if (C.hasDefault) d = C.default;
        else throw new RangeError("No value supplied for attribute " + c);
      }
      o[c] = d;
    }
    return o;
  }
  function er(k, h, o, c) {
    for (var d in h) if (!(d in k)) throw new RangeError("Unsupported attribute ".concat(d, " for ").concat(o, " of type ").concat(d));
    for (var C in k) {
      var x = k[C];
      x.validate && x.validate(h[C]);
    }
  }
  function At(k, h) {
    var o = /* @__PURE__ */ Object.create(null);
    if (h) for (var c in h) o[c] = new Dr(k, c, h[c]);
    return o;
  }
  var _t = function() {
    function k(h, o, c) {
      J(this, k), this.name = h, this.schema = o, this.spec = c, this.markSet = null, this.groups = c.group ? c.group.split(" ") : [], this.attrs = At(h, c.attrs), this.defaultAttrs = rt(this.attrs), this.contentMatch = null, this.inlineContent = null, this.isBlock = !(c.inline || h == "text"), this.isText = h == "text";
    }
    return ue(k, [{
      key: "isInline",
      get: function() {
        return !this.isBlock;
      }
    }, {
      key: "isTextblock",
      get: function() {
        return this.isBlock && this.inlineContent;
      }
    }, {
      key: "isLeaf",
      get: function() {
        return this.contentMatch == Qe.empty;
      }
    }, {
      key: "isAtom",
      get: function() {
        return this.isLeaf || !!this.spec.atom;
      }
    }, {
      key: "isInGroup",
      value: function(o) {
        return this.groups.indexOf(o) > -1;
      }
    }, {
      key: "whitespace",
      get: function() {
        return this.spec.whitespace || (this.spec.code ? "pre" : "normal");
      }
    }, {
      key: "hasRequiredAttrs",
      value: function() {
        for (var o in this.attrs) if (this.attrs[o].isRequired) return !0;
        return !1;
      }
    }, {
      key: "compatibleContent",
      value: function(o) {
        return this == o || this.contentMatch.compatible(o.contentMatch);
      }
    }, {
      key: "computeAttrs",
      value: function(o) {
        return !o && this.defaultAttrs ? this.defaultAttrs : wt(this.attrs, o);
      }
    }, {
      key: "create",
      value: function() {
        var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, c = arguments.length > 1 ? arguments[1] : void 0, d = arguments.length > 2 ? arguments[2] : void 0;
        if (this.isText) throw new Error("NodeType.create can't construct text nodes");
        return new be(this, this.computeAttrs(o), me.from(c), Le.setFrom(d));
      }
    }, {
      key: "createChecked",
      value: function() {
        var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, c = arguments.length > 1 ? arguments[1] : void 0, d = arguments.length > 2 ? arguments[2] : void 0;
        return c = me.from(c), this.checkContent(c), new be(this, this.computeAttrs(o), c, Le.setFrom(d));
      }
    }, {
      key: "createAndFill",
      value: function() {
        var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, c = arguments.length > 1 ? arguments[1] : void 0, d = arguments.length > 2 ? arguments[2] : void 0;
        if (o = this.computeAttrs(o), c = me.from(c), c.size) {
          var C = this.contentMatch.fillBefore(c);
          if (!C) return null;
          c = C.append(c);
        }
        var x = this.contentMatch.matchFragment(c), M = x && x.fillBefore(me.empty, !0);
        return M ? new be(this, o, c.append(M), Le.setFrom(d)) : null;
      }
    }, {
      key: "validContent",
      value: function(o) {
        var c = this.contentMatch.matchFragment(o);
        if (!c || !c.validEnd) return !1;
        for (var d = 0; d < o.childCount; d++) if (!this.allowsMarks(o.child(d).marks)) return !1;
        return !0;
      }
    }, {
      key: "checkContent",
      value: function(o) {
        if (!this.validContent(o)) throw new RangeError("Invalid content for node ".concat(this.name, ": ").concat(o.toString().slice(0, 50)));
      }
    }, {
      key: "checkAttrs",
      value: function(o) {
        er(this.attrs, o, "node", this.name);
      }
    }, {
      key: "allowsMarkType",
      value: function(o) {
        return this.markSet == null || this.markSet.indexOf(o) > -1;
      }
    }, {
      key: "allowsMarks",
      value: function(o) {
        if (this.markSet == null) return !0;
        for (var c = 0; c < o.length; c++) if (!this.allowsMarkType(o[c].type)) return !1;
        return !0;
      }
    }, {
      key: "allowedMarks",
      value: function(o) {
        if (this.markSet == null) return o;
        for (var c, d = 0; d < o.length; d++)
          this.allowsMarkType(o[d].type) ? c && c.push(o[d]) : c || (c = o.slice(0, d));
        return c ? c.length ? c : Le.none : o;
      }
    }], [{
      key: "compile",
      value: function(o, c) {
        var d = /* @__PURE__ */ Object.create(null);
        o.forEach(function(M, q) {
          return d[M] = new k(M, c, q);
        });
        var C = c.spec.topNode || "doc";
        if (!d[C]) throw new RangeError("Schema is missing its top node type ('" + C + "')");
        if (!d.text) throw new RangeError("Every schema needs a 'text' type");
        for (var x in d.text.attrs) throw new RangeError("The text node type should not have attributes");
        return d;
      }
    }]), k;
  }();
  function tr(k, h, o) {
    var c = o.split("|");
    return function(d) {
      var C = d === null ? "null" : ne(d);
      if (c.indexOf(C) < 0) throw new RangeError("Expected value of type ".concat(c, " for attribute ").concat(h, " on type ").concat(k, ", got ").concat(C));
    };
  }
  var Dr = function() {
    function k(h, o, c) {
      J(this, k), this.hasDefault = Object.prototype.hasOwnProperty.call(c, "default"), this.default = c.default, this.validate = typeof c.validate == "string" ? tr(h, o, c.validate) : c.validate;
    }
    return ue(k, [{
      key: "isRequired",
      get: function() {
        return !this.hasDefault;
      }
    }]), k;
  }(), rr = function() {
    function k(h, o, c, d) {
      J(this, k), this.name = h, this.rank = o, this.schema = c, this.spec = d, this.attrs = At(h, d.attrs), this.excluded = null;
      var C = rt(this.attrs);
      this.instance = C ? new Le(this, C) : null;
    }
    return ue(k, [{
      key: "create",
      value: function() {
        var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
        return !o && this.instance ? this.instance : new Le(this, wt(this.attrs, o));
      }
    }, {
      key: "removeFromSet",
      value: function(o) {
        for (var c = 0; c < o.length; c++) o[c].type == this && (o = o.slice(0, c).concat(o.slice(c + 1)), c--);
        return o;
      }
    }, {
      key: "isInSet",
      value: function(o) {
        for (var c = 0; c < o.length; c++) if (o[c].type == this) return o[c];
      }
    }, {
      key: "checkAttrs",
      value: function(o) {
        er(this.attrs, o, "mark", this.name);
      }
    }, {
      key: "excludes",
      value: function(o) {
        return this.excluded.indexOf(o) > -1;
      }
    }], [{
      key: "compile",
      value: function(o, c) {
        var d = /* @__PURE__ */ Object.create(null), C = 0;
        return o.forEach(function(x, M) {
          return d[x] = new k(x, C++, c, M);
        }), d;
      }
    }]), k;
  }(), Hr = function() {
    function k(h) {
      J(this, k), this.linebreakReplacement = null, this.cached = /* @__PURE__ */ Object.create(null);
      var o = this.spec = {};
      for (var c in h) o[c] = h[c];
      o.nodes = Te.from(h.nodes), o.marks = Te.from(h.marks || {}), this.nodes = _t.compile(this.spec.nodes, this), this.marks = rr.compile(this.spec.marks, this);
      var d = /* @__PURE__ */ Object.create(null);
      for (var C in this.nodes) {
        if (C in this.marks) throw new RangeError(C + " can not be both a node and a mark");
        var x = this.nodes[C], M = x.spec.content || "", q = x.spec.marks;
        if (x.contentMatch = d[M] || (d[M] = Qe.parse(M, this.nodes)), x.inlineContent = x.contentMatch.inlineContent, x.spec.linebreakReplacement) {
          if (this.linebreakReplacement) throw new RangeError("Multiple linebreak nodes defined");
          if (!x.isInline || !x.isLeaf) throw new RangeError("Linebreak replacement nodes must be inline leaf nodes");
          this.linebreakReplacement = x;
        }
        x.markSet = q == "_" ? null : q ? Ir(this, q.split(" ")) : q == "" || !x.inlineContent ? [] : null;
      }
      for (var W in this.marks) {
        var ve = this.marks[W], pe = ve.spec.excludes;
        ve.excluded = pe == null ? [ve] : pe == "" ? [] : Ir(this, pe.split(" "));
      }
      this.nodeFromJSON = this.nodeFromJSON.bind(this), this.markFromJSON = this.markFromJSON.bind(this), this.topNodeType = this.nodes[this.spec.topNode || "doc"], this.cached.wrappings = /* @__PURE__ */ Object.create(null);
    }
    return ue(k, [{
      key: "node",
      value: function(o) {
        var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, d = arguments.length > 2 ? arguments[2] : void 0, C = arguments.length > 3 ? arguments[3] : void 0;
        if (typeof o == "string") o = this.nodeType(o);
        else if (o instanceof _t) {
          if (o.schema != this) throw new RangeError("Node type from different schema used (" + o.name + ")");
        } else throw new RangeError("Invalid node type: " + o);
        return o.createChecked(c, d, C);
      }
    }, {
      key: "text",
      value: function(o, c) {
        var d = this.nodes.text;
        return new Ye(d, d.defaultAttrs, o, Le.setFrom(c));
      }
    }, {
      key: "mark",
      value: function(o, c) {
        return typeof o == "string" && (o = this.marks[o]), o.create(c);
      }
    }, {
      key: "nodeFromJSON",
      value: function(o) {
        return be.fromJSON(this, o);
      }
    }, {
      key: "markFromJSON",
      value: function(o) {
        return Le.fromJSON(this, o);
      }
    }, {
      key: "nodeType",
      value: function(o) {
        var c = this.nodes[o];
        if (!c) throw new RangeError("Unknown node type: " + o);
        return c;
      }
    }]), k;
  }();
  function Ir(k, h) {
    for (var o = [], c = 0; c < h.length; c++) {
      var d = h[c], C = k.marks[d], x = C;
      if (C)
        o.push(C);
      else
        for (var M in k.marks) {
          var q = k.marks[M];
          (d == "_" || q.spec.group && q.spec.group.split(" ").indexOf(d) > -1) && o.push(x = q);
        }
      if (!x) throw new SyntaxError("Unknown mark type: '" + h[c] + "'");
    }
    return o;
  }
  function Ur(k) {
    return k.tag != null;
  }
  function Or(k) {
    return k.style != null;
  }
  var yr = function() {
    function k(h, o) {
      var c = this;
      J(this, k), this.schema = h, this.rules = o, this.tags = [], this.styles = [];
      var d = this.matchedStyles = [];
      o.forEach(function(C) {
        if (Ur(C))
          c.tags.push(C);
        else if (Or(C)) {
          var x = /[^=]*/.exec(C.style)[0];
          d.indexOf(x) < 0 && d.push(x), c.styles.push(C);
        }
      }), this.normalizeLists = !this.tags.some(function(C) {
        if (!/^(ul|ol)\b/.test(C.tag) || !C.node) return !1;
        var x = h.nodes[C.node];
        return x.contentMatch.matchType(x);
      });
    }
    return ue(k, [{
      key: "parse",
      value: function(o) {
        var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, d = new m(this, c, !1);
        return d.addAll(o, Le.none, c.from, c.to), d.finish();
      }
    }, {
      key: "parseSlice",
      value: function(o) {
        var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, d = new m(this, c, !0);
        return d.addAll(o, Le.none, c.from, c.to), ct.maxOpen(d.finish());
      }
    }, {
      key: "matchTag",
      value: function(o, c, d) {
        for (var C = d ? this.tags.indexOf(d) + 1 : 0; C < this.tags.length; C++) {
          var x = this.tags[C];
          if (w(o, x.tag) && (x.namespace === void 0 || o.namespaceURI == x.namespace) && (!x.context || c.matchesContext(x.context))) {
            if (x.getAttrs) {
              var M = x.getAttrs(o);
              if (M === !1) continue;
              x.attrs = M || void 0;
            }
            return x;
          }
        }
      }
    }, {
      key: "matchStyle",
      value: function(o, c, d, C) {
        for (var x = C ? this.styles.indexOf(C) + 1 : 0; x < this.styles.length; x++) {
          var M = this.styles[x], q = M.style;
          if (!(q.indexOf(o) != 0 || M.context && !d.matchesContext(M.context) || q.length > o.length && (q.charCodeAt(o.length) != 61 || q.slice(o.length + 1) != c))) {
            if (M.getAttrs) {
              var W = M.getAttrs(c);
              if (W === !1) continue;
              M.attrs = W || void 0;
            }
            return M;
          }
        }
      }
    }], [{
      key: "schemaRules",
      value: function(o) {
        var c = [];
        function d(W) {
          for (var ve = W.priority == null ? 50 : W.priority, pe = 0; pe < c.length; pe++) {
            var Ae = c[pe], $e = Ae.priority == null ? 50 : Ae.priority;
            if ($e < ve) break;
          }
          c.splice(pe, 0, W);
        }
        var C = function(ve) {
          var pe = o.marks[ve].spec.parseDOM;
          pe && pe.forEach(function(Ae) {
            d(Ae = O(Ae)), Ae.mark || Ae.ignore || Ae.clearMark || (Ae.mark = ve);
          });
        };
        for (var x in o.marks)
          C(x);
        var M = function(ve) {
          var pe = o.nodes[ve].spec.parseDOM;
          pe && pe.forEach(function(Ae) {
            d(Ae = O(Ae)), Ae.node || Ae.ignore || Ae.mark || (Ae.node = ve);
          });
        };
        for (var q in o.nodes)
          M(q);
        return c;
      }
    }, {
      key: "fromSchema",
      value: function(o) {
        return o.cached.domParser || (o.cached.domParser = new k(o, k.schemaRules(o)));
      }
    }]), k;
  }(), Mr = {
    address: !0,
    article: !0,
    aside: !0,
    blockquote: !0,
    canvas: !0,
    dd: !0,
    div: !0,
    dl: !0,
    fieldset: !0,
    figcaption: !0,
    figure: !0,
    footer: !0,
    form: !0,
    h1: !0,
    h2: !0,
    h3: !0,
    h4: !0,
    h5: !0,
    h6: !0,
    header: !0,
    hgroup: !0,
    hr: !0,
    li: !0,
    noscript: !0,
    ol: !0,
    output: !0,
    p: !0,
    pre: !0,
    section: !0,
    table: !0,
    tfoot: !0,
    ul: !0
  }, Gt = {
    head: !0,
    noscript: !0,
    object: !0,
    script: !0,
    style: !0,
    title: !0
  }, kr = {
    ol: !0,
    ul: !0
  }, Vt = 1, jt = 2, E = 4;
  function N(k, h, o) {
    return h != null ? (h ? Vt : 0) | (h === "full" ? jt : 0) : k && k.whitespace == "pre" ? Vt | jt : o & -5;
  }
  var y = function() {
    function k(h, o, c, d, C, x) {
      J(this, k), this.type = h, this.attrs = o, this.marks = c, this.solid = d, this.options = x, this.content = [], this.activeMarks = Le.none, this.match = C || (x & E ? null : h.contentMatch);
    }
    return ue(k, [{
      key: "findWrapping",
      value: function(o) {
        if (!this.match) {
          if (!this.type) return [];
          var c = this.type.contentMatch.fillBefore(me.from(o));
          if (c)
            this.match = this.type.contentMatch.matchFragment(c);
          else {
            var d = this.type.contentMatch, C;
            return (C = d.findWrapping(o.type)) ? (this.match = d, C) : null;
          }
        }
        return this.match.findWrapping(o.type);
      }
    }, {
      key: "finish",
      value: function(o) {
        if (!(this.options & Vt)) {
          var c = this.content[this.content.length - 1], d;
          if (c && c.isText && (d = /[ \t\r\n\u000c]+$/.exec(c.text))) {
            var C = c;
            c.text.length == d[0].length ? this.content.pop() : this.content[this.content.length - 1] = C.withText(C.text.slice(0, C.text.length - d[0].length));
          }
        }
        var x = me.from(this.content);
        return !o && this.match && (x = x.append(this.match.fillBefore(me.empty, !0))), this.type ? this.type.create(this.attrs, x, this.marks) : x;
      }
    }, {
      key: "inlineContext",
      value: function(o) {
        return this.type ? this.type.inlineContent : this.content.length ? this.content[0].isInline : o.parentNode && !Mr.hasOwnProperty(o.parentNode.nodeName.toLowerCase());
      }
    }]), k;
  }(), m = function() {
    function k(h, o, c) {
      J(this, k), this.parser = h, this.options = o, this.isOpen = c, this.open = 0, this.localPreserveWS = !1;
      var d = o.topNode, C, x = N(null, o.preserveWhitespace, 0) | (c ? E : 0);
      d ? C = new y(d.type, d.attrs, Le.none, !0, o.topMatch || d.type.contentMatch, x) : c ? C = new y(null, null, Le.none, !0, null, x) : C = new y(h.schema.topNodeType, null, Le.none, !0, null, x), this.nodes = [C], this.find = o.findPositions, this.needsBlock = !1;
    }
    return ue(k, [{
      key: "top",
      get: function() {
        return this.nodes[this.open];
      }
    }, {
      key: "addDOM",
      value: function(o, c) {
        o.nodeType == 3 ? this.addTextNode(o, c) : o.nodeType == 1 && this.addElement(o, c);
      }
    }, {
      key: "addTextNode",
      value: function(o, c) {
        var d = o.nodeValue, C = this.top, x = C.options & jt ? "full" : this.localPreserveWS || (C.options & Vt) > 0;
        if (x === "full" || C.inlineContext(o) || /[^ \t\r\n\u000c]/.test(d)) {
          if (x)
            x !== "full" ? d = d.replace(/\r?\n|\r/g, " ") : d = d.replace(/\r\n?/g, `
`);
          else if (d = d.replace(/[ \t\r\n\u000c]+/g, " "), /^[ \t\r\n\u000c]/.test(d) && this.open == this.nodes.length - 1) {
            var M = C.content[C.content.length - 1], q = o.previousSibling;
            (!M || q && q.nodeName == "BR" || M.isText && /[ \t\r\n\u000c]$/.test(M.text)) && (d = d.slice(1));
          }
          d && this.insertNode(this.parser.schema.text(d), c), this.findInText(o);
        } else
          this.findInside(o);
      }
    }, {
      key: "addElement",
      value: function(o, c, d) {
        var C = this.localPreserveWS, x = this.top;
        (o.tagName == "PRE" || /pre/.test(o.style && o.style.whiteSpace)) && (this.localPreserveWS = !0);
        var M = o.nodeName.toLowerCase(), q;
        kr.hasOwnProperty(M) && this.parser.normalizeLists && b(o);
        var W = this.options.ruleFromNode && this.options.ruleFromNode(o) || (q = this.parser.matchTag(o, this, d));
        e: if (W ? W.ignore : Gt.hasOwnProperty(M))
          this.findInside(o), this.ignoreFallback(o, c);
        else if (!W || W.skip || W.closeParent) {
          W && W.closeParent ? this.open = Math.max(0, this.open - 1) : W && W.skip.nodeType && (o = W.skip);
          var ve, pe = this.needsBlock;
          if (Mr.hasOwnProperty(M))
            x.content.length && x.content[0].isInline && this.open && (this.open--, x = this.top), ve = !0, x.type || (this.needsBlock = !0);
          else if (!o.firstChild) {
            this.leafFallback(o, c);
            break e;
          }
          var Ae = W && W.skip ? c : this.readStyles(o, c);
          Ae && this.addAll(o, Ae), ve && this.sync(x), this.needsBlock = pe;
        } else {
          var $e = this.readStyles(o, c);
          $e && this.addElementByRule(o, W, $e, W.consuming === !1 ? q : void 0);
        }
        this.localPreserveWS = C;
      }
    }, {
      key: "leafFallback",
      value: function(o, c) {
        o.nodeName == "BR" && this.top.type && this.top.type.inlineContent && this.addTextNode(o.ownerDocument.createTextNode(`
`), c);
      }
    }, {
      key: "ignoreFallback",
      value: function(o, c) {
        o.nodeName == "BR" && (!this.top.type || !this.top.type.inlineContent) && this.findPlace(this.parser.schema.text("-"), c);
      }
    }, {
      key: "readStyles",
      value: function(o, c) {
        var d = this, C = o.style;
        if (C && C.length) for (var x = 0; x < this.parser.matchedStyles.length; x++) {
          var M = this.parser.matchedStyles[x], q = C.getPropertyValue(M);
          if (q) {
            for (var W = function($e) {
              var ot = d.parser.matchStyle(M, q, d, $e);
              if (!ot)
                return pe = $e, 0;
              if (ot.ignore) return {
                v: null
              };
              if (ot.clearMark ? c = c.filter(function(bt) {
                return !ot.clearMark(bt);
              }) : c = c.concat(d.parser.schema.marks[ot.mark].create(ot.attrs)), ot.consuming === !1) $e = ot;
              else
                return pe = $e, 0;
              pe = $e;
            }, ve, pe = void 0; ve = W(pe), ve !== 0; )
              if (ve) return ve.v;
          }
        }
        return c;
      }
    }, {
      key: "addElementByRule",
      value: function(o, c, d, C) {
        var x = this, M, q;
        if (c.node)
          if (q = this.parser.schema.nodes[c.node], q.isLeaf)
            this.insertNode(q.create(c.attrs), d) || this.leafFallback(o, d);
          else {
            var W = this.enter(q, c.attrs || null, d, c.preserveWhitespace);
            W && (M = !0, d = W);
          }
        else {
          var ve = this.parser.schema.marks[c.mark];
          d = d.concat(ve.create(c.attrs));
        }
        var pe = this.top;
        if (q && q.isLeaf)
          this.findInside(o);
        else if (C)
          this.addElement(o, d, C);
        else if (c.getContent)
          this.findInside(o), c.getContent(o, this.parser.schema).forEach(function($e) {
            return x.insertNode($e, d);
          });
        else {
          var Ae = o;
          typeof c.contentElement == "string" ? Ae = o.querySelector(c.contentElement) : typeof c.contentElement == "function" ? Ae = c.contentElement(o) : c.contentElement && (Ae = c.contentElement), this.findAround(o, Ae, !0), this.addAll(Ae, d), this.findAround(o, Ae, !1);
        }
        M && this.sync(pe) && this.open--;
      }
    }, {
      key: "addAll",
      value: function(o, c, d, C) {
        for (var x = d || 0, M = d ? o.childNodes[d] : o.firstChild, q = C == null ? null : o.childNodes[C]; M != q; M = M.nextSibling, ++x)
          this.findAtPoint(o, x), this.addDOM(M, c);
        this.findAtPoint(o, x);
      }
    }, {
      key: "findPlace",
      value: function(o, c) {
        for (var d, C, x = this.open; x >= 0; x--) {
          var M = this.nodes[x], q = M.findWrapping(o);
          if (q && (!d || d.length > q.length) && (d = q, C = M, !q.length) || M.solid) break;
        }
        if (!d) return null;
        this.sync(C);
        for (var W = 0; W < d.length; W++) c = this.enterInner(d[W], null, c, !1);
        return c;
      }
    }, {
      key: "insertNode",
      value: function(o, c) {
        if (o.isInline && this.needsBlock && !this.top.type) {
          var d = this.textblockFromContext();
          d && (c = this.enterInner(d, null, c));
        }
        var C = this.findPlace(o, c);
        if (C) {
          this.closeExtra();
          var x = this.top;
          x.match && (x.match = x.match.matchType(o.type));
          var M = Le.none, q = ye(C.concat(o.marks)), W;
          try {
            for (q.s(); !(W = q.n()).done; ) {
              var ve = W.value;
              (x.type ? x.type.allowsMarkType(ve.type) : H(ve.type, o.type)) && (M = ve.addToSet(M));
            }
          } catch (pe) {
            q.e(pe);
          } finally {
            q.f();
          }
          return x.content.push(o.mark(M)), !0;
        }
        return !1;
      }
    }, {
      key: "enter",
      value: function(o, c, d, C) {
        var x = this.findPlace(o.create(c), d);
        return x && (x = this.enterInner(o, c, d, !0, C)), x;
      }
    }, {
      key: "enterInner",
      value: function(o, c, d) {
        var C = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, x = arguments.length > 4 ? arguments[4] : void 0;
        this.closeExtra();
        var M = this.top;
        M.match = M.match && M.match.matchType(o);
        var q = N(o, x, M.options);
        M.options & E && M.content.length == 0 && (q |= E);
        var W = Le.none;
        return d = d.filter(function(ve) {
          return (M.type ? M.type.allowsMarkType(ve.type) : H(ve.type, o)) ? (W = ve.addToSet(W), !1) : !0;
        }), this.nodes.push(new y(o, c, W, C, null, q)), this.open++, d;
      }
    }, {
      key: "closeExtra",
      value: function() {
        var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, c = this.nodes.length - 1;
        if (c > this.open) {
          for (; c > this.open; c--) this.nodes[c - 1].content.push(this.nodes[c].finish(o));
          this.nodes.length = this.open + 1;
        }
      }
    }, {
      key: "finish",
      value: function() {
        return this.open = 0, this.closeExtra(this.isOpen), this.nodes[0].finish(!!(this.isOpen || this.options.topOpen));
      }
    }, {
      key: "sync",
      value: function(o) {
        for (var c = this.open; c >= 0; c--) {
          if (this.nodes[c] == o)
            return this.open = c, !0;
          this.localPreserveWS && (this.nodes[c].options |= Vt);
        }
        return !1;
      }
    }, {
      key: "currentPos",
      get: function() {
        this.closeExtra();
        for (var o = 0, c = this.open; c >= 0; c--) {
          for (var d = this.nodes[c].content, C = d.length - 1; C >= 0; C--) o += d[C].nodeSize;
          c && o++;
        }
        return o;
      }
    }, {
      key: "findAtPoint",
      value: function(o, c) {
        if (this.find) for (var d = 0; d < this.find.length; d++)
          this.find[d].node == o && this.find[d].offset == c && (this.find[d].pos = this.currentPos);
      }
    }, {
      key: "findInside",
      value: function(o) {
        if (this.find) for (var c = 0; c < this.find.length; c++)
          this.find[c].pos == null && o.nodeType == 1 && o.contains(this.find[c].node) && (this.find[c].pos = this.currentPos);
      }
    }, {
      key: "findAround",
      value: function(o, c, d) {
        if (o != c && this.find) {
          for (var C = 0; C < this.find.length; C++)
            if (this.find[C].pos == null && o.nodeType == 1 && o.contains(this.find[C].node)) {
              var x = c.compareDocumentPosition(this.find[C].node);
              x & (d ? 2 : 4) && (this.find[C].pos = this.currentPos);
            }
        }
      }
    }, {
      key: "findInText",
      value: function(o) {
        if (this.find) for (var c = 0; c < this.find.length; c++)
          this.find[c].node == o && (this.find[c].pos = this.currentPos - (o.nodeValue.length - this.find[c].offset));
      }
    }, {
      key: "matchesContext",
      value: function(o) {
        var c = this;
        if (o.indexOf("|") > -1) return o.split(/\s*\|\s*/).some(this.matchesContext, this);
        var d = o.split("/"), C = this.options.context, x = !this.isOpen && (!C || C.parent.type == this.nodes[0].type), M = -(C ? C.depth + 1 : 0) + (x ? 0 : 1), q = function W(ve, pe) {
          for (; ve >= 0; ve--) {
            var Ae = d[ve];
            if (Ae == "") {
              if (ve == d.length - 1 || ve == 0) continue;
              for (; pe >= M; pe--) if (W(ve - 1, pe)) return !0;
              return !1;
            } else {
              var $e = pe > 0 || pe == 0 && x ? c.nodes[pe].type : C && pe >= M ? C.node(pe - M).type : null;
              if (!$e || $e.name != Ae && !$e.isInGroup(Ae)) return !1;
              pe--;
            }
          }
          return !0;
        };
        return q(d.length - 1, this.open);
      }
    }, {
      key: "textblockFromContext",
      value: function() {
        var o = this.options.context;
        if (o) for (var c = o.depth; c >= 0; c--) {
          var d = o.node(c).contentMatchAt(o.indexAfter(c)).defaultType;
          if (d && d.isTextblock && d.defaultAttrs) return d;
        }
        for (var C in this.parser.schema.nodes) {
          var x = this.parser.schema.nodes[C];
          if (x.isTextblock && x.defaultAttrs) return x;
        }
      }
    }]), k;
  }();
  function b(k) {
    for (var h = k.firstChild, o = null; h; h = h.nextSibling) {
      var c = h.nodeType == 1 ? h.nodeName.toLowerCase() : null;
      c && kr.hasOwnProperty(c) && o ? (o.appendChild(h), h = o) : c == "li" ? o = h : c && (o = null);
    }
  }
  function w(k, h) {
    return (k.matches || k.msMatchesSelector || k.webkitMatchesSelector || k.mozMatchesSelector).call(k, h);
  }
  function O(k) {
    var h = {};
    for (var o in k) h[o] = k[o];
    return h;
  }
  function H(k, h) {
    var o = h.schema.nodes, c = function() {
      var M = o[C];
      if (!M.allowsMarkType(k)) return 0;
      var q = [], W = function ve(pe) {
        q.push(pe);
        for (var Ae = 0; Ae < pe.edgeCount; Ae++) {
          var $e = pe.edge(Ae), ot = $e.type, bt = $e.next;
          if (ot == h || q.indexOf(bt) < 0 && ve(bt)) return !0;
        }
      };
      if (W(M.contentMatch)) return {
        v: !0
      };
    }, d;
    for (var C in o)
      if (d = c(), d !== 0 && d)
        return d.v;
  }
  var ee = function() {
    function k(h, o) {
      J(this, k), this.nodes = h, this.marks = o;
    }
    return ue(k, [{
      key: "serializeFragment",
      value: function(o) {
        var c = this, d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, C = arguments.length > 2 ? arguments[2] : void 0;
        C || (C = ge(d).createDocumentFragment());
        var x = C, M = [];
        return o.forEach(function(q) {
          if (M.length || q.marks.length) {
            for (var W = 0, ve = 0; W < M.length && ve < q.marks.length; ) {
              var pe = q.marks[ve];
              if (!c.marks[pe.type.name]) {
                ve++;
                continue;
              }
              if (!pe.eq(M[W][0]) || pe.type.spec.spanning === !1) break;
              W++, ve++;
            }
            for (; W < M.length; ) x = M.pop()[1];
            for (; ve < q.marks.length; ) {
              var Ae = q.marks[ve++], $e = c.serializeMark(Ae, q.isInline, d);
              $e && (M.push([Ae, x]), x.appendChild($e.dom), x = $e.contentDOM || $e.dom);
            }
          }
          x.appendChild(c.serializeNodeInner(q, d));
        }), C;
      }
    }, {
      key: "serializeNodeInner",
      value: function(o, c) {
        var d = nt(ge(c), this.nodes[o.type.name](o), null, o.attrs), C = d.dom, x = d.contentDOM;
        if (x) {
          if (o.isLeaf) throw new RangeError("Content hole not allowed in a leaf node spec");
          this.serializeFragment(o.content, c, x);
        }
        return C;
      }
    }, {
      key: "serializeNode",
      value: function(o) {
        for (var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, d = this.serializeNodeInner(o, c), C = o.marks.length - 1; C >= 0; C--) {
          var x = this.serializeMark(o.marks[C], o.isInline, c);
          x && ((x.contentDOM || x.dom).appendChild(d), d = x.dom);
        }
        return d;
      }
    }, {
      key: "serializeMark",
      value: function(o, c) {
        var d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, C = this.marks[o.type.name];
        return C && nt(ge(d), C(o, c), null, o.attrs);
      }
    }], [{
      key: "renderSpec",
      value: function(o, c) {
        var d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, C = arguments.length > 3 ? arguments[3] : void 0;
        return nt(o, c, d, C);
      }
    }, {
      key: "fromSchema",
      value: function(o) {
        return o.cached.domSerializer || (o.cached.domSerializer = new k(this.nodesFromSchema(o), this.marksFromSchema(o)));
      }
    }, {
      key: "nodesFromSchema",
      value: function(o) {
        var c = U(o.nodes);
        return c.text || (c.text = function(d) {
          return d.text;
        }), c;
      }
    }, {
      key: "marksFromSchema",
      value: function(o) {
        return U(o.marks);
      }
    }]), k;
  }();
  function U(k) {
    var h = {};
    for (var o in k) {
      var c = k[o].spec.toDOM;
      c && (h[o] = c);
    }
    return h;
  }
  function ge(k) {
    return k.document || window.document;
  }
  var Oe = /* @__PURE__ */ new WeakMap();
  function xe(k) {
    var h = Oe.get(k);
    return h === void 0 && Oe.set(k, h = Ge(k)), h;
  }
  function Ge(k) {
    var h = null;
    function o(c) {
      if (c && ne(c) == "object")
        if (Array.isArray(c))
          if (typeof c[0] == "string")
            h || (h = []), h.push(c);
          else
            for (var d = 0; d < c.length; d++) o(c[d]);
        else
          for (var C in c) o(c[C]);
    }
    return o(k), h;
  }
  function nt(k, h, o, c) {
    if (typeof h == "string") return {
      dom: k.createTextNode(h)
    };
    if (h.nodeType != null) return {
      dom: h
    };
    if (h.dom && h.dom.nodeType != null) return h;
    var d = h[0], C;
    if (typeof d != "string") throw new RangeError("Invalid array passed to renderSpec");
    if (c && (C = xe(c)) && C.indexOf(h) > -1) throw new RangeError("Using an array from an attribute object as a DOM spec. This may be an attempted cross site scripting attack.");
    var x = d.indexOf(" ");
    x > 0 && (o = d.slice(0, x), d = d.slice(x + 1));
    var M, q = o ? k.createElementNS(o, d) : k.createElement(d), W = h[1], ve = 1;
    if (W && ne(W) == "object" && W.nodeType == null && !Array.isArray(W)) {
      ve = 2;
      for (var pe in W) if (W[pe] != null) {
        var Ae = pe.indexOf(" ");
        Ae > 0 ? q.setAttributeNS(pe.slice(0, Ae), pe.slice(Ae + 1), W[pe]) : q.setAttribute(pe, W[pe]);
      }
    }
    for (var $e = ve; $e < h.length; $e++) {
      var ot = h[$e];
      if (ot === 0) {
        if ($e < h.length - 1 || $e > ve) throw new RangeError("Content hole must be the only child of its parent node");
        return {
          dom: q,
          contentDOM: q
        };
      } else {
        var bt = nt(k, ot, o, c), nr = bt.dom, Rr = bt.contentDOM;
        if (q.appendChild(nr), Rr) {
          if (M) throw new RangeError("Multiple content holes");
          M = Rr;
        }
      }
    }
    return {
      dom: q,
      contentDOM: M
    };
  }
  return Qt.ContentMatch = Qe, Qt.DOMParser = yr, Qt.DOMSerializer = ee, Qt.Fragment = me, Qt.Mark = Le, Qt.MarkType = rr, Qt.Node = be, Qt.NodeRange = Q, Qt.NodeType = _t, Qt.ReplaceError = ut, Qt.ResolvedPos = $, Qt.Schema = Hr, Qt.Slice = ct, Qt;
}
var Ao = {}, el;
function Do() {
  return el || (el = 1, function(ye) {
    function se(E) {
      var N = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
      return se = function(m) {
        if (m === null || !Fe(m)) return m;
        if (typeof m != "function")
          throw new TypeError("Super expression must either be null or a function");
        if (typeof N < "u") {
          if (N.has(m)) return N.get(m);
          N.set(m, b);
        }
        function b() {
          return Ie(m, arguments, Be(this).constructor);
        }
        return b.prototype = Object.create(m.prototype, { constructor: { value: b, enumerable: !1, writable: !0, configurable: !0 } }), Xe(b, m);
      }, se(E);
    }
    function Ie(E, N, y) {
      return te() ? Ie = Reflect.construct.bind() : Ie = function(b, w, O) {
        var H = [null];
        H.push.apply(H, w);
        var ee = Function.bind.apply(b, H), U = new ee();
        return O && Xe(U, O.prototype), U;
      }, Ie.apply(null, arguments);
    }
    function Fe(E) {
      try {
        return Function.toString.call(E).indexOf("[native code]") !== -1;
      } catch {
        return typeof E == "function";
      }
    }
    function Pe(E, N) {
      if (typeof N != "function" && N !== null)
        throw new TypeError("Super expression must either be null or a function");
      E.prototype = Object.create(N && N.prototype, { constructor: { value: E, writable: !0, configurable: !0 } }), Object.defineProperty(E, "prototype", { writable: !1 }), N && Xe(E, N);
    }
    function Xe(E, N) {
      return Xe = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(m, b) {
        return m.__proto__ = b, m;
      }, Xe(E, N);
    }
    function et(E) {
      var N = te();
      return function() {
        var m = Be(E), b;
        if (N) {
          var w = Be(this).constructor;
          b = Reflect.construct(m, arguments, w);
        } else
          b = m.apply(this, arguments);
        return Je(this, b);
      };
    }
    function Je(E, N) {
      if (N && (j(N) === "object" || typeof N == "function"))
        return N;
      if (N !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return je(E);
    }
    function je(E) {
      if (E === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return E;
    }
    function te() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
      if (typeof Proxy == "function") return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        })), !0;
      } catch {
        return !1;
      }
    }
    function Be(E) {
      return Be = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(y) {
        return y.__proto__ || Object.getPrototypeOf(y);
      }, Be(E);
    }
    function j(E) {
      "@babel/helpers - typeof";
      return j = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(N) {
        return typeof N;
      } : function(N) {
        return N && typeof Symbol == "function" && N.constructor === Symbol && N !== Symbol.prototype ? "symbol" : typeof N;
      }, j(E);
    }
    function le(E, N) {
      if (!(E instanceof N))
        throw new TypeError("Cannot call a class as a function");
    }
    function Z(E, N) {
      for (var y = 0; y < N.length; y++) {
        var m = N[y];
        m.enumerable = m.enumerable || !1, m.configurable = !0, "value" in m && (m.writable = !0), Object.defineProperty(E, ne(m.key), m);
      }
    }
    function ce(E, N, y) {
      return N && Z(E.prototype, N), y && Z(E, y), Object.defineProperty(E, "prototype", { writable: !1 }), E;
    }
    function ne(E) {
      var N = J(E, "string");
      return j(N) === "symbol" ? N : String(N);
    }
    function J(E, N) {
      if (j(E) !== "object" || E === null) return E;
      var y = E[Symbol.toPrimitive];
      if (y !== void 0) {
        var m = y.call(E, N);
        if (j(m) !== "object") return m;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(E);
    }
    var V = /* @__PURE__ */ ja(), ue = 65535, oe = Math.pow(2, 16);
    function fe(E, N) {
      return E + N * oe;
    }
    function Te(E) {
      return E & ue;
    }
    function X(E) {
      return (E - (E & ue)) / oe;
    }
    var he = 1, me = 2, Ce = 4, ze = 8, ht = function() {
      function E(N, y, m) {
        le(this, E), this.pos = N, this.delInfo = y, this.recover = m;
      }
      return ce(E, [{
        key: "deleted",
        get: function() {
          return (this.delInfo & ze) > 0;
        }
      }, {
        key: "deletedBefore",
        get: function() {
          return (this.delInfo & (he | Ce)) > 0;
        }
      }, {
        key: "deletedAfter",
        get: function() {
          return (this.delInfo & (me | Ce)) > 0;
        }
      }, {
        key: "deletedAcross",
        get: function() {
          return (this.delInfo & Ce) > 0;
        }
      }]), E;
    }(), Le = function() {
      function E(N) {
        var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        if (le(this, E), this.ranges = N, this.inverted = y, !N.length && E.empty) return E.empty;
      }
      return ce(E, [{
        key: "recover",
        value: function(y) {
          var m = 0, b = Te(y);
          if (!this.inverted) for (var w = 0; w < b; w++) m += this.ranges[w * 3 + 2] - this.ranges[w * 3 + 1];
          return this.ranges[b * 3] + m + X(y);
        }
      }, {
        key: "mapResult",
        value: function(y) {
          var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
          return this._map(y, m, !1);
        }
      }, {
        key: "map",
        value: function(y) {
          var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
          return this._map(y, m, !0);
        }
      }, {
        key: "_map",
        value: function(y, m, b) {
          for (var w = 0, O = this.inverted ? 2 : 1, H = this.inverted ? 1 : 2, ee = 0; ee < this.ranges.length; ee += 3) {
            var U = this.ranges[ee] - (this.inverted ? w : 0);
            if (U > y) break;
            var ge = this.ranges[ee + O], Oe = this.ranges[ee + H], xe = U + ge;
            if (y <= xe) {
              var Ge = ge ? y == U ? -1 : y == xe ? 1 : m : m, nt = U + w + (Ge < 0 ? 0 : Oe);
              if (b) return nt;
              var k = y == (m < 0 ? U : xe) ? null : fe(ee / 3, y - U), h = y == U ? me : y == xe ? he : Ce;
              return (m < 0 ? y != U : y != xe) && (h |= ze), new ht(nt, h, k);
            }
            w += Oe - ge;
          }
          return b ? y + w : new ht(y + w, 0, null);
        }
      }, {
        key: "touches",
        value: function(y, m) {
          for (var b = 0, w = Te(m), O = this.inverted ? 2 : 1, H = this.inverted ? 1 : 2, ee = 0; ee < this.ranges.length; ee += 3) {
            var U = this.ranges[ee] - (this.inverted ? b : 0);
            if (U > y) break;
            var ge = this.ranges[ee + O], Oe = U + ge;
            if (y <= Oe && ee == w * 3) return !0;
            b += this.ranges[ee + H] - ge;
          }
          return !1;
        }
      }, {
        key: "forEach",
        value: function(y) {
          for (var m = this.inverted ? 2 : 1, b = this.inverted ? 1 : 2, w = 0, O = 0; w < this.ranges.length; w += 3) {
            var H = this.ranges[w], ee = H - (this.inverted ? O : 0), U = H + (this.inverted ? 0 : O), ge = this.ranges[w + m], Oe = this.ranges[w + b];
            y(ee, ee + ge, U, U + Oe), O += Oe - ge;
          }
        }
      }, {
        key: "invert",
        value: function() {
          return new E(this.ranges, !this.inverted);
        }
      }, {
        key: "toString",
        value: function() {
          return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
        }
      }], [{
        key: "offset",
        value: function(y) {
          return y == 0 ? E.empty : new E(y < 0 ? [0, -y, 0] : [0, 0, y]);
        }
      }]), E;
    }();
    Le.empty = new Le([]);
    var ut = function() {
      function E(N, y) {
        var m = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, b = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : N ? N.length : 0;
        le(this, E), this.mirror = y, this.from = m, this.to = b, this._maps = N || [], this.ownData = !(N || y);
      }
      return ce(E, [{
        key: "maps",
        get: function() {
          return this._maps;
        }
      }, {
        key: "slice",
        value: function() {
          var y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.maps.length;
          return new E(this._maps, this.mirror, y, m);
        }
      }, {
        key: "appendMap",
        value: function(y, m) {
          this.ownData || (this._maps = this._maps.slice(), this.mirror = this.mirror && this.mirror.slice(), this.ownData = !0), this.to = this._maps.push(y), m != null && this.setMirror(this._maps.length - 1, m);
        }
      }, {
        key: "appendMapping",
        value: function(y) {
          for (var m = 0, b = this._maps.length; m < y._maps.length; m++) {
            var w = y.getMirror(m);
            this.appendMap(y._maps[m], w != null && w < m ? b + w : void 0);
          }
        }
      }, {
        key: "getMirror",
        value: function(y) {
          if (this.mirror) {
            for (var m = 0; m < this.mirror.length; m++) if (this.mirror[m] == y) return this.mirror[m + (m % 2 ? -1 : 1)];
          }
        }
      }, {
        key: "setMirror",
        value: function(y, m) {
          this.mirror || (this.mirror = []), this.mirror.push(y, m);
        }
      }, {
        key: "appendMappingInverted",
        value: function(y) {
          for (var m = y.maps.length - 1, b = this._maps.length + y._maps.length; m >= 0; m--) {
            var w = y.getMirror(m);
            this.appendMap(y._maps[m].invert(), w != null && w > m ? b - w - 1 : void 0);
          }
        }
      }, {
        key: "invert",
        value: function() {
          var y = new E();
          return y.appendMappingInverted(this), y;
        }
      }, {
        key: "map",
        value: function(y) {
          var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
          if (this.mirror) return this._map(y, m, !0);
          for (var b = this.from; b < this.to; b++) y = this._maps[b].map(y, m);
          return y;
        }
      }, {
        key: "mapResult",
        value: function(y) {
          var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
          return this._map(y, m, !1);
        }
      }, {
        key: "_map",
        value: function(y, m, b) {
          for (var w = 0, O = this.from; O < this.to; O++) {
            var H = this._maps[O], ee = H.mapResult(y, m);
            if (ee.recover != null) {
              var U = this.getMirror(O);
              if (U != null && U > O && U < this.to) {
                O = U, y = this._maps[U].recover(ee.recover);
                continue;
              }
            }
            w |= ee.delInfo, y = ee.pos;
          }
          return b ? y : new ht(y, w, null);
        }
      }]), E;
    }(), ct = /* @__PURE__ */ Object.create(null), it = function() {
      function E() {
        le(this, E);
      }
      return ce(E, [{
        key: "getMap",
        value: function() {
          return Le.empty;
        }
      }, {
        key: "merge",
        value: function(y) {
          return null;
        }
      }], [{
        key: "fromJSON",
        value: function(y, m) {
          if (!m || !m.stepType) throw new RangeError("Invalid input for Step.fromJSON");
          var b = ct[m.stepType];
          if (!b) throw new RangeError("No step type ".concat(m.stepType, " defined"));
          return b.fromJSON(y, m);
        }
      }, {
        key: "jsonID",
        value: function(y, m) {
          if (y in ct) throw new RangeError("Duplicate use of step JSON ID " + y);
          return ct[y] = m, m.prototype.jsonID = y, m;
        }
      }]), E;
    }(), Ze = function() {
      function E(N, y) {
        le(this, E), this.doc = N, this.failed = y;
      }
      return ce(E, null, [{
        key: "ok",
        value: function(y) {
          return new E(y, null);
        }
      }, {
        key: "fail",
        value: function(y) {
          return new E(null, y);
        }
      }, {
        key: "fromReplace",
        value: function(y, m, b, w) {
          try {
            return E.ok(y.replace(m, b, w));
          } catch (O) {
            if (O instanceof V.ReplaceError) return E.fail(O.message);
            throw O;
          }
        }
      }]), E;
    }();
    function yt(E, N, y) {
      for (var m = [], b = 0; b < E.childCount; b++) {
        var w = E.child(b);
        w.content.size && (w = w.copy(yt(w.content, N, w))), w.isInline && (w = N(w, y, b)), m.push(w);
      }
      return V.Fragment.fromArray(m);
    }
    var Tt = function(E) {
      Pe(y, E);
      var N = et(y);
      function y(m, b, w) {
        var O;
        return le(this, y), O = N.call(this), O.from = m, O.to = b, O.mark = w, O;
      }
      return ce(y, [{
        key: "apply",
        value: function(b) {
          var w = this, O = b.slice(this.from, this.to), H = b.resolve(this.from), ee = H.node(H.sharedDepth(this.to)), U = new V.Slice(yt(O.content, function(ge, Oe) {
            return !ge.isAtom || !Oe.type.allowsMarkType(w.mark.type) ? ge : ge.mark(w.mark.addToSet(ge.marks));
          }, ee), O.openStart, O.openEnd);
          return Ze.fromReplace(b, this.from, this.to, U);
        }
      }, {
        key: "invert",
        value: function() {
          return new Bt(this.from, this.to, this.mark);
        }
      }, {
        key: "map",
        value: function(b) {
          var w = b.mapResult(this.from, 1), O = b.mapResult(this.to, -1);
          return w.deleted && O.deleted || w.pos >= O.pos ? null : new y(w.pos, O.pos, this.mark);
        }
      }, {
        key: "merge",
        value: function(b) {
          return b instanceof y && b.mark.eq(this.mark) && this.from <= b.to && this.to >= b.from ? new y(Math.min(this.from, b.from), Math.max(this.to, b.to), this.mark) : null;
        }
      }, {
        key: "toJSON",
        value: function() {
          return {
            stepType: "addMark",
            mark: this.mark.toJSON(),
            from: this.from,
            to: this.to
          };
        }
      }], [{
        key: "fromJSON",
        value: function(b, w) {
          if (typeof w.from != "number" || typeof w.to != "number") throw new RangeError("Invalid input for AddMarkStep.fromJSON");
          return new y(w.from, w.to, b.markFromJSON(w.mark));
        }
      }]), y;
    }(it);
    it.jsonID("addMark", Tt);
    var Bt = function(E) {
      Pe(y, E);
      var N = et(y);
      function y(m, b, w) {
        var O;
        return le(this, y), O = N.call(this), O.from = m, O.to = b, O.mark = w, O;
      }
      return ce(y, [{
        key: "apply",
        value: function(b) {
          var w = this, O = b.slice(this.from, this.to), H = new V.Slice(yt(O.content, function(ee) {
            return ee.mark(w.mark.removeFromSet(ee.marks));
          }, b), O.openStart, O.openEnd);
          return Ze.fromReplace(b, this.from, this.to, H);
        }
      }, {
        key: "invert",
        value: function() {
          return new Tt(this.from, this.to, this.mark);
        }
      }, {
        key: "map",
        value: function(b) {
          var w = b.mapResult(this.from, 1), O = b.mapResult(this.to, -1);
          return w.deleted && O.deleted || w.pos >= O.pos ? null : new y(w.pos, O.pos, this.mark);
        }
      }, {
        key: "merge",
        value: function(b) {
          return b instanceof y && b.mark.eq(this.mark) && this.from <= b.to && this.to >= b.from ? new y(Math.min(this.from, b.from), Math.max(this.to, b.to), this.mark) : null;
        }
      }, {
        key: "toJSON",
        value: function() {
          return {
            stepType: "removeMark",
            mark: this.mark.toJSON(),
            from: this.from,
            to: this.to
          };
        }
      }], [{
        key: "fromJSON",
        value: function(b, w) {
          if (typeof w.from != "number" || typeof w.to != "number") throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
          return new y(w.from, w.to, b.markFromJSON(w.mark));
        }
      }]), y;
    }(it);
    it.jsonID("removeMark", Bt);
    var We = function(E) {
      Pe(y, E);
      var N = et(y);
      function y(m, b) {
        var w;
        return le(this, y), w = N.call(this), w.pos = m, w.mark = b, w;
      }
      return ce(y, [{
        key: "apply",
        value: function(b) {
          var w = b.nodeAt(this.pos);
          if (!w) return Ze.fail("No node at mark step's position");
          var O = w.type.create(w.attrs, null, this.mark.addToSet(w.marks));
          return Ze.fromReplace(b, this.pos, this.pos + 1, new V.Slice(V.Fragment.from(O), 0, w.isLeaf ? 0 : 1));
        }
      }, {
        key: "invert",
        value: function(b) {
          var w = b.nodeAt(this.pos);
          if (w) {
            var O = this.mark.addToSet(w.marks);
            if (O.length == w.marks.length) {
              for (var H = 0; H < w.marks.length; H++) if (!w.marks[H].isInSet(O)) return new y(this.pos, w.marks[H]);
              return new y(this.pos, this.mark);
            }
          }
          return new mt(this.pos, this.mark);
        }
      }, {
        key: "map",
        value: function(b) {
          var w = b.mapResult(this.pos, 1);
          return w.deletedAfter ? null : new y(w.pos, this.mark);
        }
      }, {
        key: "toJSON",
        value: function() {
          return {
            stepType: "addNodeMark",
            pos: this.pos,
            mark: this.mark.toJSON()
          };
        }
      }], [{
        key: "fromJSON",
        value: function(b, w) {
          if (typeof w.pos != "number") throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
          return new y(w.pos, b.markFromJSON(w.mark));
        }
      }]), y;
    }(it);
    it.jsonID("addNodeMark", We);
    var mt = function(E) {
      Pe(y, E);
      var N = et(y);
      function y(m, b) {
        var w;
        return le(this, y), w = N.call(this), w.pos = m, w.mark = b, w;
      }
      return ce(y, [{
        key: "apply",
        value: function(b) {
          var w = b.nodeAt(this.pos);
          if (!w) return Ze.fail("No node at mark step's position");
          var O = w.type.create(w.attrs, null, this.mark.removeFromSet(w.marks));
          return Ze.fromReplace(b, this.pos, this.pos + 1, new V.Slice(V.Fragment.from(O), 0, w.isLeaf ? 0 : 1));
        }
      }, {
        key: "invert",
        value: function(b) {
          var w = b.nodeAt(this.pos);
          return !w || !this.mark.isInSet(w.marks) ? this : new We(this.pos, this.mark);
        }
      }, {
        key: "map",
        value: function(b) {
          var w = b.mapResult(this.pos, 1);
          return w.deletedAfter ? null : new y(w.pos, this.mark);
        }
      }, {
        key: "toJSON",
        value: function() {
          return {
            stepType: "removeNodeMark",
            pos: this.pos,
            mark: this.mark.toJSON()
          };
        }
      }], [{
        key: "fromJSON",
        value: function(b, w) {
          if (typeof w.pos != "number") throw new RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");
          return new y(w.pos, b.markFromJSON(w.mark));
        }
      }]), y;
    }(it);
    it.jsonID("removeNodeMark", mt);
    var kt = function(E) {
      Pe(y, E);
      var N = et(y);
      function y(m, b, w) {
        var O, H = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
        return le(this, y), O = N.call(this), O.from = m, O.to = b, O.slice = w, O.structure = H, O;
      }
      return ce(y, [{
        key: "apply",
        value: function(b) {
          return this.structure && Wt(b, this.from, this.to) ? Ze.fail("Structure replace would overwrite content") : Ze.fromReplace(b, this.from, this.to, this.slice);
        }
      }, {
        key: "getMap",
        value: function() {
          return new Le([this.from, this.to - this.from, this.slice.size]);
        }
      }, {
        key: "invert",
        value: function(b) {
          return new y(this.from, this.from + this.slice.size, b.slice(this.from, this.to));
        }
      }, {
        key: "map",
        value: function(b) {
          var w = b.mapResult(this.from, 1), O = b.mapResult(this.to, -1);
          return w.deletedAcross && O.deletedAcross ? null : new y(w.pos, Math.max(w.pos, O.pos), this.slice);
        }
      }, {
        key: "merge",
        value: function(b) {
          if (!(b instanceof y) || b.structure || this.structure) return null;
          if (this.from + this.slice.size == b.from && !this.slice.openEnd && !b.slice.openStart) {
            var w = this.slice.size + b.slice.size == 0 ? V.Slice.empty : new V.Slice(this.slice.content.append(b.slice.content), this.slice.openStart, b.slice.openEnd);
            return new y(this.from, this.to + (b.to - b.from), w, this.structure);
          } else if (b.to == this.from && !this.slice.openStart && !b.slice.openEnd) {
            var O = this.slice.size + b.slice.size == 0 ? V.Slice.empty : new V.Slice(b.slice.content.append(this.slice.content), b.slice.openStart, this.slice.openEnd);
            return new y(b.from, this.to, O, this.structure);
          } else
            return null;
        }
      }, {
        key: "toJSON",
        value: function() {
          var b = {
            stepType: "replace",
            from: this.from,
            to: this.to
          };
          return this.slice.size && (b.slice = this.slice.toJSON()), this.structure && (b.structure = !0), b;
        }
      }], [{
        key: "fromJSON",
        value: function(b, w) {
          if (typeof w.from != "number" || typeof w.to != "number") throw new RangeError("Invalid input for ReplaceStep.fromJSON");
          return new y(w.from, w.to, V.Slice.fromJSON(b, w.slice), !!w.structure);
        }
      }]), y;
    }(it);
    it.jsonID("replace", kt);
    var dt = function(E) {
      Pe(y, E);
      var N = et(y);
      function y(m, b, w, O, H, ee) {
        var U, ge = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : !1;
        return le(this, y), U = N.call(this), U.from = m, U.to = b, U.gapFrom = w, U.gapTo = O, U.slice = H, U.insert = ee, U.structure = ge, U;
      }
      return ce(y, [{
        key: "apply",
        value: function(b) {
          if (this.structure && (Wt(b, this.from, this.gapFrom) || Wt(b, this.gapTo, this.to))) return Ze.fail("Structure gap-replace would overwrite content");
          var w = b.slice(this.gapFrom, this.gapTo);
          if (w.openStart || w.openEnd) return Ze.fail("Gap is not a flat range");
          var O = this.slice.insertAt(this.insert, w.content);
          return O ? Ze.fromReplace(b, this.from, this.to, O) : Ze.fail("Content does not fit in gap");
        }
      }, {
        key: "getMap",
        value: function() {
          return new Le([this.from, this.gapFrom - this.from, this.insert, this.gapTo, this.to - this.gapTo, this.slice.size - this.insert]);
        }
      }, {
        key: "invert",
        value: function(b) {
          var w = this.gapTo - this.gapFrom;
          return new y(this.from, this.from + this.slice.size + w, this.from + this.insert, this.from + this.insert + w, b.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
        }
      }, {
        key: "map",
        value: function(b) {
          var w = b.mapResult(this.from, 1), O = b.mapResult(this.to, -1), H = this.from == this.gapFrom ? w.pos : b.map(this.gapFrom, -1), ee = this.to == this.gapTo ? O.pos : b.map(this.gapTo, 1);
          return w.deletedAcross && O.deletedAcross || H < w.pos || ee > O.pos ? null : new y(w.pos, O.pos, H, ee, this.slice, this.insert, this.structure);
        }
      }, {
        key: "toJSON",
        value: function() {
          var b = {
            stepType: "replaceAround",
            from: this.from,
            to: this.to,
            gapFrom: this.gapFrom,
            gapTo: this.gapTo,
            insert: this.insert
          };
          return this.slice.size && (b.slice = this.slice.toJSON()), this.structure && (b.structure = !0), b;
        }
      }], [{
        key: "fromJSON",
        value: function(b, w) {
          if (typeof w.from != "number" || typeof w.to != "number" || typeof w.gapFrom != "number" || typeof w.gapTo != "number" || typeof w.insert != "number") throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");
          return new y(w.from, w.to, w.gapFrom, w.gapTo, V.Slice.fromJSON(b, w.slice), w.insert, !!w.structure);
        }
      }]), y;
    }(it);
    it.jsonID("replaceAround", dt);
    function Wt(E, N, y) {
      for (var m = E.resolve(N), b = y - N, w = m.depth; b > 0 && w > 0 && m.indexAfter(w) == m.node(w).childCount; )
        w--, b--;
      if (b > 0)
        for (var O = m.node(w).maybeChild(m.indexAfter(w)); b > 0; ) {
          if (!O || O.isLeaf) return !0;
          O = O.firstChild, b--;
        }
      return !1;
    }
    function Yt(E, N, y, m) {
      var b = [], w = [], O, H;
      E.doc.nodesBetween(N, y, function(ee, U, ge) {
        if (ee.isInline) {
          var Oe = ee.marks;
          if (!m.isInSet(Oe) && ge.type.allowsMarkType(m.type)) {
            for (var xe = Math.max(U, N), Ge = Math.min(U + ee.nodeSize, y), nt = m.addToSet(Oe), k = 0; k < Oe.length; k++)
              Oe[k].isInSet(nt) || (O && O.to == xe && O.mark.eq(Oe[k]) ? O.to = Ge : b.push(O = new Bt(xe, Ge, Oe[k])));
            H && H.to == xe ? H.to = Ge : w.push(H = new Tt(xe, Ge, m));
          }
        }
      }), b.forEach(function(ee) {
        return E.step(ee);
      }), w.forEach(function(ee) {
        return E.step(ee);
      });
    }
    function K(E, N, y, m) {
      var b = [], w = 0;
      E.doc.nodesBetween(N, y, function(O, H) {
        if (O.isInline) {
          w++;
          var ee = null;
          if (m instanceof V.MarkType)
            for (var U = O.marks, ge; ge = m.isInSet(U); )
              (ee || (ee = [])).push(ge), U = ge.removeFromSet(U);
          else m ? m.isInSet(O.marks) && (ee = [m]) : ee = O.marks;
          if (ee && ee.length)
            for (var Oe = Math.min(H + O.nodeSize, y), xe = 0; xe < ee.length; xe++) {
              for (var Ge = ee[xe], nt = void 0, k = 0; k < b.length; k++) {
                var h = b[k];
                h.step == w - 1 && Ge.eq(b[k].style) && (nt = h);
              }
              nt ? (nt.to = Oe, nt.step = w) : b.push({
                style: Ge,
                from: Math.max(H, N),
                to: Oe,
                step: w
              });
            }
        }
      }), b.forEach(function(O) {
        return E.step(new Bt(O.from, O.to, O.style));
      });
    }
    function $(E, N, y) {
      for (var m = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : y.contentMatch, b = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, w = E.doc.nodeAt(N), O = [], H = N + 1, ee = 0; ee < w.childCount; ee++) {
        var U = w.child(ee), ge = H + U.nodeSize, Oe = m.matchType(U.type);
        if (!Oe)
          O.push(new kt(H, ge, V.Slice.empty));
        else {
          m = Oe;
          for (var xe = 0; xe < U.marks.length; xe++) y.allowsMarkType(U.marks[xe].type) || E.step(new Bt(H, ge, U.marks[xe]));
          if (b && U.isText && y.whitespace != "pre")
            for (var Ge = void 0, nt = /\r?\n|\r/g, k = void 0; Ge = nt.exec(U.text); )
              k || (k = new V.Slice(V.Fragment.from(y.schema.text(" ", y.allowedMarks(U.marks))), 0, 0)), O.push(new kt(H + Ge.index, H + Ge.index + Ge[0].length, k));
        }
        H = ge;
      }
      if (!m.validEnd) {
        var h = m.fillBefore(V.Fragment.empty, !0);
        E.replace(H, H, new V.Slice(h, 0, 0));
      }
      for (var o = O.length - 1; o >= 0; o--) E.step(O[o]);
    }
    function P(E, N, y) {
      return (N == 0 || E.canReplace(N, E.childCount)) && (y == E.childCount || E.canReplace(0, y));
    }
    function B(E) {
      for (var N = E.parent, y = N.content.cutByIndex(E.startIndex, E.endIndex), m = E.depth; ; --m) {
        var b = E.$from.node(m), w = E.$from.index(m), O = E.$to.indexAfter(m);
        if (m < E.depth && b.canReplace(w, O, y)) return m;
        if (m == 0 || b.type.spec.isolating || !P(b, w, O)) break;
      }
      return null;
    }
    function I(E, N, y) {
      for (var m = N.$from, b = N.$to, w = N.depth, O = m.before(w + 1), H = b.after(w + 1), ee = O, U = H, ge = V.Fragment.empty, Oe = 0, xe = w, Ge = !1; xe > y; xe--) Ge || m.index(xe) > 0 ? (Ge = !0, ge = V.Fragment.from(m.node(xe).copy(ge)), Oe++) : ee--;
      for (var nt = V.Fragment.empty, k = 0, h = w, o = !1; h > y; h--) o || b.after(h + 1) < b.end(h) ? (o = !0, nt = V.Fragment.from(b.node(h).copy(nt)), k++) : U++;
      E.step(new dt(ee, U, O, H, new V.Slice(ge.append(nt), Oe, k), ge.size - Oe, !0));
    }
    function Q(E, N) {
      var y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, m = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : E, b = be(E, N), w = b && Ye(m, N);
      return w ? b.map(re).concat({
        type: N,
        attrs: y
      }).concat(w.map(re)) : null;
    }
    function re(E) {
      return {
        type: E,
        attrs: null
      };
    }
    function be(E, N) {
      var y = E.parent, m = E.startIndex, b = E.endIndex, w = y.contentMatchAt(m).findWrapping(N);
      if (!w) return null;
      var O = w.length ? w[0] : N;
      return y.canReplaceWith(m, b, O) ? w : null;
    }
    function Ye(E, N) {
      var y = E.parent, m = E.startIndex, b = E.endIndex, w = y.child(m), O = N.contentMatch.findWrapping(w.type);
      if (!O) return null;
      for (var H = O.length ? O[O.length - 1] : N, ee = H.contentMatch, U = m; ee && U < b; U++) ee = ee.matchType(y.child(U).type);
      return !ee || !ee.validEnd ? null : O;
    }
    function lt(E, N, y) {
      for (var m = V.Fragment.empty, b = y.length - 1; b >= 0; b--) {
        if (m.size) {
          var w = y[b].type.contentMatch.matchFragment(m);
          if (!w || !w.validEnd) throw new RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper");
        }
        m = V.Fragment.from(y[b].type.create(y[b].attrs, m));
      }
      var O = N.start, H = N.end;
      E.step(new dt(O, H, O, H, new V.Slice(m, 0, 0), y.length, !0));
    }
    function Qe(E, N, y, m, b) {
      if (!m.isTextblock) throw new RangeError("Type given to setBlockType should be a textblock");
      var w = E.steps.length;
      E.doc.nodesBetween(N, y, function(O, H) {
        var ee = typeof b == "function" ? b(O) : b;
        if (O.isTextblock && !O.hasMarkup(m, ee) && $t(E.doc, E.mapping.slice(w).map(H), m)) {
          var U = null;
          if (m.schema.linebreakReplacement) {
            var ge = m.whitespace == "pre", Oe = !!m.contentMatch.matchType(m.schema.linebreakReplacement);
            ge && !Oe ? U = !1 : !ge && Oe && (U = !0);
          }
          U === !1 && ft(E, O, H, w), $(E, E.mapping.slice(w).map(H, 1), m, void 0, U === null);
          var xe = E.mapping.slice(w), Ge = xe.map(H, 1), nt = xe.map(H + O.nodeSize, 1);
          return E.step(new dt(Ge, nt, Ge + 1, nt - 1, new V.Slice(V.Fragment.from(m.create(ee, null, O.marks)), 0, 0), 1, !0)), U === !0 && xt(E, O, H, w), !1;
        }
      });
    }
    function xt(E, N, y, m) {
      N.forEach(function(b, w) {
        if (b.isText)
          for (var O, H = /\r?\n|\r/g; O = H.exec(b.text); ) {
            var ee = E.mapping.slice(m).map(y + 1 + w + O.index);
            E.replaceWith(ee, ee + 1, N.type.schema.linebreakReplacement.create());
          }
      });
    }
    function ft(E, N, y, m) {
      N.forEach(function(b, w) {
        if (b.type == b.type.schema.linebreakReplacement) {
          var O = E.mapping.slice(m).map(y + 1 + w);
          E.replaceWith(O, O + 1, N.type.schema.text(`
`));
        }
      });
    }
    function $t(E, N, y) {
      var m = E.resolve(N), b = m.index();
      return m.parent.canReplaceWith(b, b + 1, y);
    }
    function It(E, N, y, m, b) {
      var w = E.doc.nodeAt(N);
      if (!w) throw new RangeError("No node at given position");
      y || (y = w.type);
      var O = y.create(m, null, b || w.marks);
      if (w.isLeaf) return E.replaceWith(N, N + w.nodeSize, O);
      if (!y.validContent(w.content)) throw new RangeError("Invalid content for node type " + y.name);
      E.step(new dt(N, N + w.nodeSize, N + 1, N + w.nodeSize - 1, new V.Slice(V.Fragment.from(O), 0, 0), 1, !0));
    }
    function Xt(E, N) {
      var y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, m = arguments.length > 3 ? arguments[3] : void 0, b = E.resolve(N), w = b.depth - y, O = m && m[m.length - 1] || b.parent;
      if (w < 0 || b.parent.type.spec.isolating || !b.parent.canReplace(b.index(), b.parent.childCount) || !O.type.validContent(b.parent.content.cutByIndex(b.index(), b.parent.childCount))) return !1;
      for (var H = b.depth - 1, ee = y - 2; H > w; H--, ee--) {
        var U = b.node(H), ge = b.index(H);
        if (U.type.spec.isolating) return !1;
        var Oe = U.content.cutByIndex(ge, U.childCount), xe = m && m[ee + 1];
        xe && (Oe = Oe.replaceChild(0, xe.type.create(xe.attrs)));
        var Ge = m && m[ee] || U;
        if (!U.canReplace(ge + 1, U.childCount) || !Ge.type.validContent(Oe)) return !1;
      }
      var nt = b.indexAfter(w), k = m && m[0];
      return b.node(w).canReplaceWith(nt, nt, k ? k.type : b.node(w + 1).type);
    }
    function St(E, N) {
      for (var y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, m = arguments.length > 3 ? arguments[3] : void 0, b = E.doc.resolve(N), w = V.Fragment.empty, O = V.Fragment.empty, H = b.depth, ee = b.depth - y, U = y - 1; H > ee; H--, U--) {
        w = V.Fragment.from(b.node(H).copy(w));
        var ge = m && m[U];
        O = V.Fragment.from(ge ? ge.type.create(ge.attrs, O) : b.node(H).copy(O));
      }
      E.step(new kt(N, N, new V.Slice(w.append(O), y, y), !0));
    }
    function cr(E, N) {
      var y = E.resolve(N), m = y.index();
      return Nr(y.nodeBefore, y.nodeAfter) && y.parent.canReplace(m, m + 1);
    }
    function Vr(E, N) {
      N.content.size || E.type.compatibleContent(N.type);
      for (var y = E.contentMatchAt(E.childCount), m = E.type.schema.linebreakReplacement, b = 0; b < N.childCount; b++) {
        var w = N.child(b), O = w.type == m ? E.type.schema.nodes.text : w.type;
        if (y = y.matchType(O), !y || !E.type.allowsMarks(w.marks)) return !1;
      }
      return y.validEnd;
    }
    function Nr(E, N) {
      return !!(E && N && !E.isLeaf && Vr(E, N));
    }
    function zt(E, N) {
      for (var y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : -1, m = E.resolve(N), b = m.depth; ; b--) {
        var w = void 0, O = void 0, H = m.index(b);
        if (b == m.depth ? (w = m.nodeBefore, O = m.nodeAfter) : y > 0 ? (w = m.node(b + 1), H++, O = m.node(b).maybeChild(H)) : (w = m.node(b).maybeChild(H - 1), O = m.node(b + 1)), w && !w.isTextblock && Nr(w, O) && m.node(b).canReplace(H, H + 1)) return N;
        if (b == 0) break;
        N = y < 0 ? m.before(b) : m.after(b);
      }
    }
    function Ne(E, N, y) {
      var m = null, b = E.doc.type.schema.linebreakReplacement, w = E.doc.resolve(N - y), O = w.node().type;
      if (b && O.inlineContent) {
        var H = O.whitespace == "pre", ee = !!O.contentMatch.matchType(b);
        H && !ee ? m = !1 : !H && ee && (m = !0);
      }
      var U = E.steps.length;
      if (m === !1) {
        var ge = E.doc.resolve(N + y);
        ft(E, ge.node(), ge.before(), U);
      }
      O.inlineContent && $(E, N + y - 1, O, w.node().contentMatchAt(w.index()), m == null);
      var Oe = E.mapping.slice(U), xe = Oe.map(N - y);
      if (E.step(new kt(xe, Oe.map(N + y, -1), V.Slice.empty, !0)), m === !0) {
        var Ge = E.doc.resolve(xe);
        xt(E, Ge.node(), Ge.before(), E.steps.length);
      }
      return E;
    }
    function De(E, N, y) {
      var m = E.resolve(N);
      if (m.parent.canReplaceWith(m.index(), m.index(), y)) return N;
      if (m.parentOffset == 0) for (var b = m.depth - 1; b >= 0; b--) {
        var w = m.index(b);
        if (m.node(b).canReplaceWith(w, w, y)) return m.before(b + 1);
        if (w > 0) return null;
      }
      if (m.parentOffset == m.parent.content.size) for (var O = m.depth - 1; O >= 0; O--) {
        var H = m.indexAfter(O);
        if (m.node(O).canReplaceWith(H, H, y)) return m.after(O + 1);
        if (H < m.node(O).childCount) return null;
      }
      return null;
    }
    function Ke(E, N, y) {
      var m = E.resolve(N);
      if (!y.content.size) return N;
      for (var b = y.content, w = 0; w < y.openStart; w++) b = b.firstChild.content;
      for (var O = 1; O <= (y.openStart == 0 && y.size ? 2 : 1); O++)
        for (var H = m.depth; H >= 0; H--) {
          var ee = H == m.depth ? 0 : m.pos <= (m.start(H + 1) + m.end(H + 1)) / 2 ? -1 : 1, U = m.index(H) + (ee > 0 ? 1 : 0), ge = m.node(H), Oe = !1;
          if (O == 1)
            Oe = ge.canReplace(U, U, b);
          else {
            var xe = ge.contentMatchAt(U).findWrapping(b.firstChild.type);
            Oe = xe && ge.canReplaceWith(U, U, xe[0]);
          }
          if (Oe) return ee == 0 ? m.pos : ee < 0 ? m.before(H + 1) : m.after(H + 1);
        }
      return null;
    }
    function rt(E, N) {
      var y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : N, m = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : V.Slice.empty;
      if (N == y && !m.size) return null;
      var b = E.resolve(N), w = E.resolve(y);
      return wt(b, w, m) ? new kt(N, y, m) : new er(b, w, m).fit();
    }
    function wt(E, N, y) {
      return !y.openStart && !y.openEnd && E.start() == N.start() && E.parent.canReplace(E.index(), N.index(), y.content);
    }
    var er = function() {
      function E(N, y, m) {
        le(this, E), this.$from = N, this.$to = y, this.unplaced = m, this.frontier = [], this.placed = V.Fragment.empty;
        for (var b = 0; b <= N.depth; b++) {
          var w = N.node(b);
          this.frontier.push({
            type: w.type,
            match: w.contentMatchAt(N.indexAfter(b))
          });
        }
        for (var O = N.depth; O > 0; O--) this.placed = V.Fragment.from(N.node(O).copy(this.placed));
      }
      return ce(E, [{
        key: "depth",
        get: function() {
          return this.frontier.length - 1;
        }
      }, {
        key: "fit",
        value: function() {
          for (; this.unplaced.size; ) {
            var y = this.findFittable();
            y ? this.placeNodes(y) : this.openMore() || this.dropNode();
          }
          var m = this.mustMoveInline(), b = this.placed.size - this.depth - this.$from.depth, w = this.$from, O = this.close(m < 0 ? this.$to : w.doc.resolve(m));
          if (!O) return null;
          for (var H = this.placed, ee = w.depth, U = O.depth; ee && U && H.childCount == 1; )
            H = H.firstChild.content, ee--, U--;
          var ge = new V.Slice(H, ee, U);
          return m > -1 ? new dt(w.pos, m, this.$to.pos, this.$to.end(), ge, b) : ge.size || w.pos != this.$to.pos ? new kt(w.pos, O.pos, ge) : null;
        }
      }, {
        key: "findFittable",
        value: function() {
          for (var y = this.unplaced.openStart, m = this.unplaced.content, b = 0, w = this.unplaced.openEnd; b < y; b++) {
            var O = m.firstChild;
            if (m.childCount > 1 && (w = 0), O.type.spec.isolating && w <= b) {
              y = b;
              break;
            }
            m = O.content;
          }
          for (var H = 1; H <= 2; H++)
            for (var ee = H == 1 ? y : this.unplaced.openStart; ee >= 0; ee--) {
              var U = void 0, ge = null;
              ee ? (ge = tr(this.unplaced.content, ee - 1).firstChild, U = ge.content) : U = this.unplaced.content;
              for (var Oe = U.firstChild, xe = this.depth; xe >= 0; xe--) {
                var Ge = this.frontier[xe], nt = Ge.type, k = Ge.match, h = void 0, o = null;
                if (H == 1 && (Oe ? k.matchType(Oe.type) || (o = k.fillBefore(V.Fragment.from(Oe), !1)) : ge && nt.compatibleContent(ge.type))) return {
                  sliceDepth: ee,
                  frontierDepth: xe,
                  parent: ge,
                  inject: o
                };
                if (H == 2 && Oe && (h = k.findWrapping(Oe.type))) return {
                  sliceDepth: ee,
                  frontierDepth: xe,
                  parent: ge,
                  wrap: h
                };
                if (ge && k.matchType(ge.type)) break;
              }
            }
        }
      }, {
        key: "openMore",
        value: function() {
          var y = this.unplaced, m = y.content, b = y.openStart, w = y.openEnd, O = tr(m, b);
          return !O.childCount || O.firstChild.isLeaf ? !1 : (this.unplaced = new V.Slice(m, b + 1, Math.max(w, O.size + b >= m.size - w ? b + 1 : 0)), !0);
        }
      }, {
        key: "dropNode",
        value: function() {
          var y = this.unplaced, m = y.content, b = y.openStart, w = y.openEnd, O = tr(m, b);
          if (O.childCount <= 1 && b > 0) {
            var H = m.size - b <= b + O.size;
            this.unplaced = new V.Slice(At(m, b - 1, 1), b - 1, H ? b - 1 : w);
          } else
            this.unplaced = new V.Slice(At(m, b, 1), b, w);
        }
      }, {
        key: "placeNodes",
        value: function(y) {
          for (var m = y.sliceDepth, b = y.frontierDepth, w = y.parent, O = y.inject, H = y.wrap; this.depth > b; ) this.closeFrontierNode();
          if (H) for (var ee = 0; ee < H.length; ee++) this.openFrontierNode(H[ee]);
          var U = this.unplaced, ge = w ? w.content : U.content, Oe = U.openStart - m, xe = 0, Ge = [], nt = this.frontier[b], k = nt.match, h = nt.type;
          if (O) {
            for (var o = 0; o < O.childCount; o++) Ge.push(O.child(o));
            k = k.matchFragment(O);
          }
          for (var c = ge.size + m - (U.content.size - U.openEnd); xe < ge.childCount; ) {
            var d = ge.child(xe), C = k.matchType(d.type);
            if (!C) break;
            xe++, (xe > 1 || Oe == 0 || d.content.size) && (k = C, Ge.push(Dr(d.mark(h.allowedMarks(d.marks)), xe == 1 ? Oe : 0, xe == ge.childCount ? c : -1)));
          }
          var x = xe == ge.childCount;
          x || (c = -1), this.placed = _t(this.placed, b, V.Fragment.from(Ge)), this.frontier[b].match = k, x && c < 0 && w && w.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
          for (var M = 0, q = ge; M < c; M++) {
            var W = q.lastChild;
            this.frontier.push({
              type: W.type,
              match: W.contentMatchAt(W.childCount)
            }), q = W.content;
          }
          this.unplaced = x ? m == 0 ? V.Slice.empty : new V.Slice(At(U.content, m - 1, 1), m - 1, c < 0 ? U.openEnd : m - 1) : new V.Slice(At(U.content, m, xe), U.openStart, U.openEnd);
        }
      }, {
        key: "mustMoveInline",
        value: function() {
          if (!this.$to.parent.isTextblock) return -1;
          var y = this.frontier[this.depth], m;
          if (!y.type.isTextblock || !rr(this.$to, this.$to.depth, y.type, y.match, !1) || this.$to.depth == this.depth && (m = this.findCloseLevel(this.$to)) && m.depth == this.depth) return -1;
          for (var b = this.$to.depth, w = this.$to.after(b); b > 1 && w == this.$to.end(--b); ) ++w;
          return w;
        }
      }, {
        key: "findCloseLevel",
        value: function(y) {
          e: for (var m = Math.min(this.depth, y.depth); m >= 0; m--) {
            var b = this.frontier[m], w = b.match, O = b.type, H = m < y.depth && y.end(m + 1) == y.pos + (y.depth - (m + 1)), ee = rr(y, m, O, w, H);
            if (ee) {
              for (var U = m - 1; U >= 0; U--) {
                var ge = this.frontier[U], Oe = ge.match, xe = ge.type, Ge = rr(y, U, xe, Oe, !0);
                if (!Ge || Ge.childCount) continue e;
              }
              return {
                depth: m,
                fit: ee,
                move: H ? y.doc.resolve(y.after(m + 1)) : y
              };
            }
          }
        }
      }, {
        key: "close",
        value: function(y) {
          var m = this.findCloseLevel(y);
          if (!m) return null;
          for (; this.depth > m.depth; ) this.closeFrontierNode();
          m.fit.childCount && (this.placed = _t(this.placed, m.depth, m.fit)), y = m.move;
          for (var b = m.depth + 1; b <= y.depth; b++) {
            var w = y.node(b), O = w.type.contentMatch.fillBefore(w.content, !0, y.index(b));
            this.openFrontierNode(w.type, w.attrs, O);
          }
          return y;
        }
      }, {
        key: "openFrontierNode",
        value: function(y) {
          var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, b = arguments.length > 2 ? arguments[2] : void 0, w = this.frontier[this.depth];
          w.match = w.match.matchType(y), this.placed = _t(this.placed, this.depth, V.Fragment.from(y.create(m, b))), this.frontier.push({
            type: y,
            match: y.contentMatch
          });
        }
      }, {
        key: "closeFrontierNode",
        value: function() {
          var y = this.frontier.pop(), m = y.match.fillBefore(V.Fragment.empty, !0);
          m.childCount && (this.placed = _t(this.placed, this.frontier.length, m));
        }
      }]), E;
    }();
    function At(E, N, y) {
      return N == 0 ? E.cutByIndex(y, E.childCount) : E.replaceChild(0, E.firstChild.copy(At(E.firstChild.content, N - 1, y)));
    }
    function _t(E, N, y) {
      return N == 0 ? E.append(y) : E.replaceChild(E.childCount - 1, E.lastChild.copy(_t(E.lastChild.content, N - 1, y)));
    }
    function tr(E, N) {
      for (var y = 0; y < N; y++) E = E.firstChild.content;
      return E;
    }
    function Dr(E, N, y) {
      if (N <= 0) return E;
      var m = E.content;
      return N > 1 && (m = m.replaceChild(0, Dr(m.firstChild, N - 1, m.childCount == 1 ? y - 1 : 0))), N > 0 && (m = E.type.contentMatch.fillBefore(m).append(m), y <= 0 && (m = m.append(E.type.contentMatch.matchFragment(m).fillBefore(V.Fragment.empty, !0)))), E.copy(m);
    }
    function rr(E, N, y, m, b) {
      var w = E.node(N), O = b ? E.indexAfter(N) : E.index(N);
      if (O == w.childCount && !y.compatibleContent(w.type)) return null;
      var H = m.fillBefore(w.content, !0, O);
      return H && !Hr(y, w.content, O) ? H : null;
    }
    function Hr(E, N, y) {
      for (var m = y; m < N.childCount; m++) if (!E.allowsMarks(N.child(m).marks)) return !0;
      return !1;
    }
    function Ir(E) {
      return E.spec.defining || E.spec.definingForContent;
    }
    function Ur(E, N, y, m) {
      if (!m.size) return E.deleteRange(N, y);
      var b = E.doc.resolve(N), w = E.doc.resolve(y);
      if (wt(b, w, m)) return E.step(new kt(N, y, m));
      var O = Gt(b, E.doc.resolve(y));
      O[O.length - 1] == 0 && O.pop();
      var H = -(b.depth + 1);
      O.unshift(H);
      for (var ee = b.depth, U = b.pos - 1; ee > 0; ee--, U--) {
        var ge = b.node(ee).type.spec;
        if (ge.defining || ge.definingAsContext || ge.isolating) break;
        O.indexOf(ee) > -1 ? H = ee : b.before(ee) == U && O.splice(1, 0, -ee);
      }
      for (var Oe = O.indexOf(H), xe = [], Ge = m.openStart, nt = m.content, k = 0; ; k++) {
        var h = nt.firstChild;
        if (xe.push(h), k == m.openStart) break;
        nt = h.content;
      }
      for (var o = Ge - 1; o >= 0; o--) {
        var c = xe[o], d = Ir(c.type);
        if (d && !c.sameMarkup(b.node(Math.abs(H) - 1))) Ge = o;
        else if (d || !c.type.isTextblock) break;
      }
      for (var C = m.openStart; C >= 0; C--) {
        var x = (C + Ge + 1) % (m.openStart + 1), M = xe[x];
        if (M)
          for (var q = 0; q < O.length; q++) {
            var W = O[(q + Oe) % O.length], ve = !0;
            W < 0 && (ve = !1, W = -W);
            var pe = b.node(W - 1), Ae = b.index(W - 1);
            if (pe.canReplaceWith(Ae, Ae, M.type, M.marks)) return E.replace(b.before(W), ve ? w.after(W) : y, new V.Slice(Or(m.content, 0, m.openStart, x), x, m.openEnd));
          }
      }
      for (var $e = E.steps.length, ot = O.length - 1; ot >= 0 && (E.replace(N, y, m), !(E.steps.length > $e)); ot--) {
        var bt = O[ot];
        bt < 0 || (N = b.before(bt), y = w.after(bt));
      }
    }
    function Or(E, N, y, m, b) {
      if (N < y) {
        var w = E.firstChild;
        E = E.replaceChild(0, w.copy(Or(w.content, N + 1, y, m, w)));
      }
      if (N > m) {
        var O = b.contentMatchAt(0), H = O.fillBefore(E).append(E);
        E = H.append(O.matchFragment(H).fillBefore(V.Fragment.empty, !0));
      }
      return E;
    }
    function yr(E, N, y, m) {
      if (!m.isInline && N == y && E.doc.resolve(N).parent.content.size) {
        var b = De(E.doc, N, m.type);
        b != null && (N = y = b);
      }
      E.replaceRange(N, y, new V.Slice(V.Fragment.from(m), 0, 0));
    }
    function Mr(E, N, y) {
      for (var m = E.doc.resolve(N), b = E.doc.resolve(y), w = Gt(m, b), O = 0; O < w.length; O++) {
        var H = w[O], ee = O == w.length - 1;
        if (ee && H == 0 || m.node(H).type.contentMatch.validEnd) return E.delete(m.start(H), b.end(H));
        if (H > 0 && (ee || m.node(H - 1).canReplace(m.index(H - 1), b.indexAfter(H - 1)))) return E.delete(m.before(H), b.after(H));
      }
      for (var U = 1; U <= m.depth && U <= b.depth; U++)
        if (N - m.start(U) == m.depth - U && y > m.end(U) && b.end(U) - y != b.depth - U && m.start(U - 1) == b.start(U - 1) && m.node(U - 1).canReplace(m.index(U - 1), b.index(U - 1))) return E.delete(m.before(U), y);
      E.delete(N, y);
    }
    function Gt(E, N) {
      for (var y = [], m = Math.min(E.depth, N.depth), b = m; b >= 0; b--) {
        var w = E.start(b);
        if (w < E.pos - (E.depth - b) || N.end(b) > N.pos + (N.depth - b) || E.node(b).type.spec.isolating || N.node(b).type.spec.isolating) break;
        (w == N.start(b) || b == E.depth && b == N.depth && E.parent.inlineContent && N.parent.inlineContent && b && N.start(b - 1) == w - 1) && y.push(b);
      }
      return y;
    }
    var kr = function(E) {
      Pe(y, E);
      var N = et(y);
      function y(m, b, w) {
        var O;
        return le(this, y), O = N.call(this), O.pos = m, O.attr = b, O.value = w, O;
      }
      return ce(y, [{
        key: "apply",
        value: function(b) {
          var w = b.nodeAt(this.pos);
          if (!w) return Ze.fail("No node at attribute step's position");
          var O = /* @__PURE__ */ Object.create(null);
          for (var H in w.attrs) O[H] = w.attrs[H];
          O[this.attr] = this.value;
          var ee = w.type.create(O, null, w.marks);
          return Ze.fromReplace(b, this.pos, this.pos + 1, new V.Slice(V.Fragment.from(ee), 0, w.isLeaf ? 0 : 1));
        }
      }, {
        key: "getMap",
        value: function() {
          return Le.empty;
        }
      }, {
        key: "invert",
        value: function(b) {
          return new y(this.pos, this.attr, b.nodeAt(this.pos).attrs[this.attr]);
        }
      }, {
        key: "map",
        value: function(b) {
          var w = b.mapResult(this.pos, 1);
          return w.deletedAfter ? null : new y(w.pos, this.attr, this.value);
        }
      }, {
        key: "toJSON",
        value: function() {
          return {
            stepType: "attr",
            pos: this.pos,
            attr: this.attr,
            value: this.value
          };
        }
      }], [{
        key: "fromJSON",
        value: function(b, w) {
          if (typeof w.pos != "number" || typeof w.attr != "string") throw new RangeError("Invalid input for AttrStep.fromJSON");
          return new y(w.pos, w.attr, w.value);
        }
      }]), y;
    }(it);
    it.jsonID("attr", kr);
    var Vt = function(E) {
      Pe(y, E);
      var N = et(y);
      function y(m, b) {
        var w;
        return le(this, y), w = N.call(this), w.attr = m, w.value = b, w;
      }
      return ce(y, [{
        key: "apply",
        value: function(b) {
          var w = /* @__PURE__ */ Object.create(null);
          for (var O in b.attrs) w[O] = b.attrs[O];
          w[this.attr] = this.value;
          var H = b.type.create(w, b.content, b.marks);
          return Ze.ok(H);
        }
      }, {
        key: "getMap",
        value: function() {
          return Le.empty;
        }
      }, {
        key: "invert",
        value: function(b) {
          return new y(this.attr, b.attrs[this.attr]);
        }
      }, {
        key: "map",
        value: function(b) {
          return this;
        }
      }, {
        key: "toJSON",
        value: function() {
          return {
            stepType: "docAttr",
            attr: this.attr,
            value: this.value
          };
        }
      }], [{
        key: "fromJSON",
        value: function(b, w) {
          if (typeof w.attr != "string") throw new RangeError("Invalid input for DocAttrStep.fromJSON");
          return new y(w.attr, w.value);
        }
      }]), y;
    }(it);
    it.jsonID("docAttr", Vt), ye.TransformError = function(E) {
      Pe(y, E);
      var N = et(y);
      function y() {
        return le(this, y), N.apply(this, arguments);
      }
      return ce(y);
    }(se(Error)), ye.TransformError = function E(N) {
      var y = Error.call(this, N);
      return y.__proto__ = E.prototype, y;
    }, ye.TransformError.prototype = Object.create(Error.prototype), ye.TransformError.prototype.constructor = ye.TransformError, ye.TransformError.prototype.name = "TransformError";
    var jt = function() {
      function E(N) {
        le(this, E), this.doc = N, this.steps = [], this.docs = [], this.mapping = new ut();
      }
      return ce(E, [{
        key: "before",
        get: function() {
          return this.docs.length ? this.docs[0] : this.doc;
        }
      }, {
        key: "step",
        value: function(y) {
          var m = this.maybeStep(y);
          if (m.failed) throw new ye.TransformError(m.failed);
          return this;
        }
      }, {
        key: "maybeStep",
        value: function(y) {
          var m = y.apply(this.doc);
          return m.failed || this.addStep(y, m.doc), m;
        }
      }, {
        key: "docChanged",
        get: function() {
          return this.steps.length > 0;
        }
      }, {
        key: "addStep",
        value: function(y, m) {
          this.docs.push(this.doc), this.steps.push(y), this.mapping.appendMap(y.getMap()), this.doc = m;
        }
      }, {
        key: "replace",
        value: function(y) {
          var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : y, b = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : V.Slice.empty, w = rt(this.doc, y, m, b);
          return w && this.step(w), this;
        }
      }, {
        key: "replaceWith",
        value: function(y, m, b) {
          return this.replace(y, m, new V.Slice(V.Fragment.from(b), 0, 0));
        }
      }, {
        key: "delete",
        value: function(y, m) {
          return this.replace(y, m, V.Slice.empty);
        }
      }, {
        key: "insert",
        value: function(y, m) {
          return this.replaceWith(y, y, m);
        }
      }, {
        key: "replaceRange",
        value: function(y, m, b) {
          return Ur(this, y, m, b), this;
        }
      }, {
        key: "replaceRangeWith",
        value: function(y, m, b) {
          return yr(this, y, m, b), this;
        }
      }, {
        key: "deleteRange",
        value: function(y, m) {
          return Mr(this, y, m), this;
        }
      }, {
        key: "lift",
        value: function(y, m) {
          return I(this, y, m), this;
        }
      }, {
        key: "join",
        value: function(y) {
          var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
          return Ne(this, y, m), this;
        }
      }, {
        key: "wrap",
        value: function(y, m) {
          return lt(this, y, m), this;
        }
      }, {
        key: "setBlockType",
        value: function(y) {
          var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : y, b = arguments.length > 2 ? arguments[2] : void 0, w = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
          return Qe(this, y, m, b, w), this;
        }
      }, {
        key: "setNodeMarkup",
        value: function(y, m) {
          var b = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, w = arguments.length > 3 ? arguments[3] : void 0;
          return It(this, y, m, b, w), this;
        }
      }, {
        key: "setNodeAttribute",
        value: function(y, m, b) {
          return this.step(new kr(y, m, b)), this;
        }
      }, {
        key: "setDocAttribute",
        value: function(y, m) {
          return this.step(new Vt(y, m)), this;
        }
      }, {
        key: "addNodeMark",
        value: function(y, m) {
          return this.step(new We(y, m)), this;
        }
      }, {
        key: "removeNodeMark",
        value: function(y, m) {
          if (!(m instanceof V.Mark)) {
            var b = this.doc.nodeAt(y);
            if (!b) throw new RangeError("No node at position " + y);
            if (m = m.isInSet(b.marks), !m) return this;
          }
          return this.step(new mt(y, m)), this;
        }
      }, {
        key: "split",
        value: function(y) {
          var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, b = arguments.length > 2 ? arguments[2] : void 0;
          return St(this, y, m, b), this;
        }
      }, {
        key: "addMark",
        value: function(y, m, b) {
          return Yt(this, y, m, b), this;
        }
      }, {
        key: "removeMark",
        value: function(y, m, b) {
          return K(this, y, m, b), this;
        }
      }, {
        key: "clearIncompatible",
        value: function(y, m, b) {
          return $(this, y, m, b), this;
        }
      }]), E;
    }();
    ye.AddMarkStep = Tt, ye.AddNodeMarkStep = We, ye.AttrStep = kr, ye.DocAttrStep = Vt, ye.MapResult = ht, ye.Mapping = ut, ye.RemoveMarkStep = Bt, ye.RemoveNodeMarkStep = mt, ye.ReplaceAroundStep = dt, ye.ReplaceStep = kt, ye.Step = it, ye.StepMap = Le, ye.StepResult = Ze, ye.Transform = jt, ye.canJoin = cr, ye.canSplit = Xt, ye.dropPoint = Ke, ye.findWrapping = Q, ye.insertPoint = De, ye.joinPoint = zt, ye.liftTarget = B, ye.replaceStep = rt;
  }(Ao)), Ao;
}
var tl;
function Ka() {
  if (tl) return Er;
  tl = 1;
  function ye(K) {
    "@babel/helpers - typeof";
    return ye = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function($) {
      return typeof $;
    } : function($) {
      return $ && typeof Symbol == "function" && $.constructor === Symbol && $ !== Symbol.prototype ? "symbol" : typeof $;
    }, ye(K);
  }
  function se() {
    return typeof Reflect < "u" && Reflect.get ? se = Reflect.get : se = function($, P, B) {
      var I = Ie($, P);
      if (I) {
        var Q = Object.getOwnPropertyDescriptor(I, P);
        return Q.get ? Q.get.call(arguments.length < 3 ? $ : B) : Q.value;
      }
    }, se.apply(this, arguments);
  }
  function Ie(K, $) {
    for (; !Object.prototype.hasOwnProperty.call(K, $) && (K = te(K), K !== null); )
      ;
    return K;
  }
  function Fe(K, $) {
    if (typeof $ != "function" && $ !== null)
      throw new TypeError("Super expression must either be null or a function");
    K.prototype = Object.create($ && $.prototype, { constructor: { value: K, writable: !0, configurable: !0 } }), Object.defineProperty(K, "prototype", { writable: !1 }), $ && Pe(K, $);
  }
  function Pe(K, $) {
    return Pe = Object.setPrototypeOf || function(B, I) {
      return B.__proto__ = I, B;
    }, Pe(K, $);
  }
  function Xe(K) {
    var $ = je();
    return function() {
      var B = te(K), I;
      if ($) {
        var Q = te(this).constructor;
        I = Reflect.construct(B, arguments, Q);
      } else
        I = B.apply(this, arguments);
      return et(this, I);
    };
  }
  function et(K, $) {
    if ($ && (ye($) === "object" || typeof $ == "function"))
      return $;
    if ($ !== void 0)
      throw new TypeError("Derived constructors may only return object or undefined");
    return Je(K);
  }
  function Je(K) {
    if (K === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return K;
  }
  function je() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  function te(K) {
    return te = Object.setPrototypeOf ? Object.getPrototypeOf : function(P) {
      return P.__proto__ || Object.getPrototypeOf(P);
    }, te(K);
  }
  function Be(K, $) {
    if (!(K instanceof $))
      throw new TypeError("Cannot call a class as a function");
  }
  function j(K, $) {
    for (var P = 0; P < $.length; P++) {
      var B = $[P];
      B.enumerable = B.enumerable || !1, B.configurable = !0, "value" in B && (B.writable = !0), Object.defineProperty(K, B.key, B);
    }
  }
  function le(K, $, P) {
    return $ && j(K.prototype, $), P && j(K, P), Object.defineProperty(K, "prototype", { writable: !1 }), K;
  }
  Object.defineProperty(Er, "__esModule", {
    value: !0
  });
  var Z = /* @__PURE__ */ ja(), ce = /* @__PURE__ */ Do(), ne = /* @__PURE__ */ Object.create(null), J = function() {
    function K($, P, B) {
      Be(this, K), this.$anchor = $, this.$head = P, this.ranges = B || [new V($.min(P), $.max(P))];
    }
    return le(K, [{
      key: "anchor",
      get: function() {
        return this.$anchor.pos;
      }
    }, {
      key: "head",
      get: function() {
        return this.$head.pos;
      }
    }, {
      key: "from",
      get: function() {
        return this.$from.pos;
      }
    }, {
      key: "to",
      get: function() {
        return this.$to.pos;
      }
    }, {
      key: "$from",
      get: function() {
        return this.ranges[0].$from;
      }
    }, {
      key: "$to",
      get: function() {
        return this.ranges[0].$to;
      }
    }, {
      key: "empty",
      get: function() {
        for (var P = this.ranges, B = 0; B < P.length; B++)
          if (P[B].$from.pos != P[B].$to.pos) return !1;
        return !0;
      }
    }, {
      key: "content",
      value: function() {
        return this.$from.doc.slice(this.from, this.to, !0);
      }
    }, {
      key: "replace",
      value: function(P) {
        for (var B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Z.Slice.empty, I = B.content.lastChild, Q = null, re = 0; re < B.openEnd; re++)
          Q = I, I = I.lastChild;
        for (var be = P.steps.length, Ye = this.ranges, lt = 0; lt < Ye.length; lt++) {
          var Qe = Ye[lt], xt = Qe.$from, ft = Qe.$to, $t = P.mapping.slice(be);
          P.replaceRange($t.map(xt.pos), $t.map(ft.pos), lt ? Z.Slice.empty : B), lt == 0 && ht(P, be, (I ? I.isInline : Q && Q.isTextblock) ? -1 : 1);
        }
      }
    }, {
      key: "replaceWith",
      value: function(P, B) {
        for (var I = P.steps.length, Q = this.ranges, re = 0; re < Q.length; re++) {
          var be = Q[re], Ye = be.$from, lt = be.$to, Qe = P.mapping.slice(I), xt = Qe.map(Ye.pos), ft = Qe.map(lt.pos);
          re ? P.deleteRange(xt, ft) : (P.replaceRangeWith(xt, ft, B), ht(P, I, B.isInline ? -1 : 1));
        }
      }
    }, {
      key: "getBookmark",
      value: function() {
        return fe.between(this.$anchor, this.$head).getBookmark();
      }
    }], [{
      key: "findFrom",
      value: function(P, B) {
        var I = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, Q = P.parent.inlineContent ? new fe(P) : ze(P.node(0), P.parent, P.pos, P.index(), B, I);
        if (Q) return Q;
        for (var re = P.depth - 1; re >= 0; re--) {
          var be = B < 0 ? ze(P.node(0), P.node(re), P.before(re + 1), P.index(re), B, I) : ze(P.node(0), P.node(re), P.after(re + 1), P.index(re) + 1, B, I);
          if (be) return be;
        }
        return null;
      }
    }, {
      key: "near",
      value: function(P) {
        var B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
        return this.findFrom(P, B) || this.findFrom(P, -B) || new me(P.node(0));
      }
    }, {
      key: "atStart",
      value: function(P) {
        return ze(P, P, 0, 0, 1) || new me(P);
      }
    }, {
      key: "atEnd",
      value: function(P) {
        return ze(P, P, P.content.size, P.childCount, -1) || new me(P);
      }
    }, {
      key: "fromJSON",
      value: function(P, B) {
        if (!B || !B.type) throw new RangeError("Invalid input for Selection.fromJSON");
        var I = ne[B.type];
        if (!I) throw new RangeError("No selection type ".concat(B.type, " defined"));
        return I.fromJSON(P, B);
      }
    }, {
      key: "jsonID",
      value: function(P, B) {
        if (P in ne) throw new RangeError("Duplicate use of selection JSON ID " + P);
        return ne[P] = B, B.prototype.jsonID = P, B;
      }
    }]), K;
  }();
  J.prototype.visible = !0;
  var V = le(function K($, P) {
    Be(this, K), this.$from = $, this.$to = P;
  }), ue = !1;
  function oe(K) {
    !ue && !K.parent.inlineContent && (ue = !0, console.warn("TextSelection endpoint not pointing into a node with inline content (" + K.parent.type.name + ")"));
  }
  var fe = function(K) {
    Fe(P, K);
    var $ = Xe(P);
    function P(B) {
      var I = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : B;
      return Be(this, P), oe(B), oe(I), $.call(this, B, I);
    }
    return le(P, [{
      key: "$cursor",
      get: function() {
        return this.$anchor.pos == this.$head.pos ? this.$head : null;
      }
    }, {
      key: "map",
      value: function(I, Q) {
        var re = I.resolve(Q.map(this.head));
        if (!re.parent.inlineContent) return J.near(re);
        var be = I.resolve(Q.map(this.anchor));
        return new P(be.parent.inlineContent ? be : re, re);
      }
    }, {
      key: "replace",
      value: function(I) {
        var Q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Z.Slice.empty;
        if (se(te(P.prototype), "replace", this).call(this, I, Q), Q == Z.Slice.empty) {
          var re = this.$from.marksAcross(this.$to);
          re && I.ensureMarks(re);
        }
      }
    }, {
      key: "eq",
      value: function(I) {
        return I instanceof P && I.anchor == this.anchor && I.head == this.head;
      }
    }, {
      key: "getBookmark",
      value: function() {
        return new Te(this.anchor, this.head);
      }
    }, {
      key: "toJSON",
      value: function() {
        return {
          type: "text",
          anchor: this.anchor,
          head: this.head
        };
      }
    }], [{
      key: "fromJSON",
      value: function(I, Q) {
        if (typeof Q.anchor != "number" || typeof Q.head != "number") throw new RangeError("Invalid input for TextSelection.fromJSON");
        return new P(I.resolve(Q.anchor), I.resolve(Q.head));
      }
    }, {
      key: "create",
      value: function(I, Q) {
        var re = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Q, be = I.resolve(Q);
        return new this(be, re == Q ? be : I.resolve(re));
      }
    }, {
      key: "between",
      value: function(I, Q, re) {
        var be = I.pos - Q.pos;
        if ((!re || be) && (re = be >= 0 ? 1 : -1), !Q.parent.inlineContent) {
          var Ye = J.findFrom(Q, re, !0) || J.findFrom(Q, -re, !0);
          if (Ye) Q = Ye.$head;
          else return J.near(Q, re);
        }
        return I.parent.inlineContent || (be == 0 ? I = Q : (I = (J.findFrom(I, -re, !0) || J.findFrom(I, re, !0)).$anchor, I.pos < Q.pos != be < 0 && (I = Q))), new P(I, Q);
      }
    }]), P;
  }(J);
  J.jsonID("text", fe);
  var Te = function() {
    function K($, P) {
      Be(this, K), this.anchor = $, this.head = P;
    }
    return le(K, [{
      key: "map",
      value: function(P) {
        return new K(P.map(this.anchor), P.map(this.head));
      }
    }, {
      key: "resolve",
      value: function(P) {
        return fe.between(P.resolve(this.anchor), P.resolve(this.head));
      }
    }]), K;
  }(), X = function(K) {
    Fe(P, K);
    var $ = Xe(P);
    function P(B) {
      var I;
      Be(this, P);
      var Q = B.nodeAfter, re = B.node(0).resolve(B.pos + Q.nodeSize);
      return I = $.call(this, B, re), I.node = Q, I;
    }
    return le(P, [{
      key: "map",
      value: function(I, Q) {
        var re = Q.mapResult(this.anchor), be = re.deleted, Ye = re.pos, lt = I.resolve(Ye);
        return be ? J.near(lt) : new P(lt);
      }
    }, {
      key: "content",
      value: function() {
        return new Z.Slice(Z.Fragment.from(this.node), 0, 0);
      }
    }, {
      key: "eq",
      value: function(I) {
        return I instanceof P && I.anchor == this.anchor;
      }
    }, {
      key: "toJSON",
      value: function() {
        return {
          type: "node",
          anchor: this.anchor
        };
      }
    }, {
      key: "getBookmark",
      value: function() {
        return new he(this.anchor);
      }
    }], [{
      key: "fromJSON",
      value: function(I, Q) {
        if (typeof Q.anchor != "number") throw new RangeError("Invalid input for NodeSelection.fromJSON");
        return new P(I.resolve(Q.anchor));
      }
    }, {
      key: "create",
      value: function(I, Q) {
        return new P(I.resolve(Q));
      }
    }, {
      key: "isSelectable",
      value: function(I) {
        return !I.isText && I.type.spec.selectable !== !1;
      }
    }]), P;
  }(J);
  X.prototype.visible = !1, J.jsonID("node", X);
  var he = function() {
    function K($) {
      Be(this, K), this.anchor = $;
    }
    return le(K, [{
      key: "map",
      value: function(P) {
        var B = P.mapResult(this.anchor), I = B.deleted, Q = B.pos;
        return I ? new Te(Q, Q) : new K(Q);
      }
    }, {
      key: "resolve",
      value: function(P) {
        var B = P.resolve(this.anchor), I = B.nodeAfter;
        return I && X.isSelectable(I) ? new X(B) : J.near(B);
      }
    }]), K;
  }(), me = function(K) {
    Fe(P, K);
    var $ = Xe(P);
    function P(B) {
      return Be(this, P), $.call(this, B.resolve(0), B.resolve(B.content.size));
    }
    return le(P, [{
      key: "replace",
      value: function(I) {
        var Q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Z.Slice.empty;
        if (Q == Z.Slice.empty) {
          I.delete(0, I.doc.content.size);
          var re = J.atStart(I.doc);
          re.eq(I.selection) || I.setSelection(re);
        } else
          se(te(P.prototype), "replace", this).call(this, I, Q);
      }
    }, {
      key: "toJSON",
      value: function() {
        return {
          type: "all"
        };
      }
    }, {
      key: "map",
      value: function(I) {
        return new P(I);
      }
    }, {
      key: "eq",
      value: function(I) {
        return I instanceof P;
      }
    }, {
      key: "getBookmark",
      value: function() {
        return Ce;
      }
    }], [{
      key: "fromJSON",
      value: function(I) {
        return new P(I);
      }
    }]), P;
  }(J);
  J.jsonID("all", me);
  var Ce = {
    map: function() {
      return this;
    },
    resolve: function($) {
      return new me($);
    }
  };
  function ze(K, $, P, B, I) {
    var Q = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : !1;
    if ($.inlineContent) return fe.create(K, P);
    for (var re = B - (I > 0 ? 0 : 1); I > 0 ? re < $.childCount : re >= 0; re += I) {
      var be = $.child(re);
      if (be.isAtom) {
        if (!Q && X.isSelectable(be))
          return X.create(K, P - (I < 0 ? be.nodeSize : 0));
      } else {
        var Ye = ze(K, be, P + I, I < 0 ? be.childCount : 0, I, Q);
        if (Ye) return Ye;
      }
      P += be.nodeSize * I;
    }
    return null;
  }
  function ht(K, $, P) {
    var B = K.steps.length - 1;
    if (!(B < $)) {
      var I = K.steps[B];
      if (I instanceof ce.ReplaceStep || I instanceof ce.ReplaceAroundStep) {
        var Q = K.mapping.maps[B], re;
        Q.forEach(function(be, Ye, lt, Qe) {
          re == null && (re = Qe);
        }), K.setSelection(J.near(K.doc.resolve(re), P));
      }
    }
  }
  var Le = 1, ut = 2, ct = 4, it = function(K) {
    Fe(P, K);
    var $ = Xe(P);
    function P(B) {
      var I;
      return Be(this, P), I = $.call(this, B.doc), I.curSelectionFor = 0, I.updated = 0, I.meta = /* @__PURE__ */ Object.create(null), I.time = Date.now(), I.curSelection = B.selection, I.storedMarks = B.storedMarks, I;
    }
    return le(P, [{
      key: "selection",
      get: function() {
        return this.curSelectionFor < this.steps.length && (this.curSelection = this.curSelection.map(this.doc, this.mapping.slice(this.curSelectionFor)), this.curSelectionFor = this.steps.length), this.curSelection;
      }
    }, {
      key: "setSelection",
      value: function(I) {
        if (I.$from.doc != this.doc) throw new RangeError("Selection passed to setSelection must point at the current document");
        return this.curSelection = I, this.curSelectionFor = this.steps.length, this.updated = (this.updated | Le) & -3, this.storedMarks = null, this;
      }
    }, {
      key: "selectionSet",
      get: function() {
        return (this.updated & Le) > 0;
      }
    }, {
      key: "setStoredMarks",
      value: function(I) {
        return this.storedMarks = I, this.updated |= ut, this;
      }
    }, {
      key: "ensureMarks",
      value: function(I) {
        return Z.Mark.sameSet(this.storedMarks || this.selection.$from.marks(), I) || this.setStoredMarks(I), this;
      }
    }, {
      key: "addStoredMark",
      value: function(I) {
        return this.ensureMarks(I.addToSet(this.storedMarks || this.selection.$head.marks()));
      }
    }, {
      key: "removeStoredMark",
      value: function(I) {
        return this.ensureMarks(I.removeFromSet(this.storedMarks || this.selection.$head.marks()));
      }
    }, {
      key: "storedMarksSet",
      get: function() {
        return (this.updated & ut) > 0;
      }
    }, {
      key: "addStep",
      value: function(I, Q) {
        se(te(P.prototype), "addStep", this).call(this, I, Q), this.updated = this.updated & -3, this.storedMarks = null;
      }
    }, {
      key: "setTime",
      value: function(I) {
        return this.time = I, this;
      }
    }, {
      key: "replaceSelection",
      value: function(I) {
        return this.selection.replace(this, I), this;
      }
    }, {
      key: "replaceSelectionWith",
      value: function(I) {
        var Q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, re = this.selection;
        return Q && (I = I.mark(this.storedMarks || (re.empty ? re.$from.marks() : re.$from.marksAcross(re.$to) || Z.Mark.none))), re.replaceWith(this, I), this;
      }
    }, {
      key: "deleteSelection",
      value: function() {
        return this.selection.replace(this), this;
      }
    }, {
      key: "insertText",
      value: function(I, Q, re) {
        var be = this.doc.type.schema;
        if (Q == null)
          return I ? this.replaceSelectionWith(be.text(I), !0) : this.deleteSelection();
        if (re == null && (re = Q), re = re ?? Q, !I) return this.deleteRange(Q, re);
        var Ye = this.storedMarks;
        if (!Ye) {
          var lt = this.doc.resolve(Q);
          Ye = re == Q ? lt.marks() : lt.marksAcross(this.doc.resolve(re));
        }
        return this.replaceRangeWith(Q, re, be.text(I, Ye)), this.selection.empty || this.setSelection(J.near(this.selection.$to)), this;
      }
    }, {
      key: "setMeta",
      value: function(I, Q) {
        return this.meta[typeof I == "string" ? I : I.key] = Q, this;
      }
    }, {
      key: "getMeta",
      value: function(I) {
        return this.meta[typeof I == "string" ? I : I.key];
      }
    }, {
      key: "isGeneric",
      get: function() {
        for (var I in this.meta)
          return !1;
        return !0;
      }
    }, {
      key: "scrollIntoView",
      value: function() {
        return this.updated |= ct, this;
      }
    }, {
      key: "scrolledIntoView",
      get: function() {
        return (this.updated & ct) > 0;
      }
    }]), P;
  }(ce.Transform);
  function Ze(K, $) {
    return !$ || !K ? K : K.bind($);
  }
  var yt = le(function K($, P, B) {
    Be(this, K), this.name = $, this.init = Ze(P.init, B), this.apply = Ze(P.apply, B);
  }), Tt = [new yt("doc", {
    init: function($) {
      return $.doc || $.schema.topNodeType.createAndFill();
    },
    apply: function($) {
      return $.doc;
    }
  }), new yt("selection", {
    init: function($, P) {
      return $.selection || J.atStart(P.doc);
    },
    apply: function($) {
      return $.selection;
    }
  }), new yt("storedMarks", {
    init: function($) {
      return $.storedMarks || null;
    },
    apply: function($, P, B, I) {
      return I.selection.$cursor ? $.storedMarks : null;
    }
  }), new yt("scrollToSelection", {
    init: function() {
      return 0;
    },
    apply: function($, P) {
      return $.scrolledIntoView ? P + 1 : P;
    }
  })], Bt = le(function K($, P) {
    var B = this;
    Be(this, K), this.schema = $, this.plugins = [], this.pluginsByKey = /* @__PURE__ */ Object.create(null), this.fields = Tt.slice(), P && P.forEach(function(I) {
      if (B.pluginsByKey[I.key]) throw new RangeError("Adding different instances of a keyed plugin (" + I.key + ")");
      B.plugins.push(I), B.pluginsByKey[I.key] = I, I.spec.state && B.fields.push(new yt(I.key, I.spec.state, I));
    });
  }), We = function() {
    function K($) {
      Be(this, K), this.config = $;
    }
    return le(K, [{
      key: "schema",
      get: function() {
        return this.config.schema;
      }
    }, {
      key: "plugins",
      get: function() {
        return this.config.plugins;
      }
    }, {
      key: "apply",
      value: function(P) {
        return this.applyTransaction(P).state;
      }
    }, {
      key: "filterTransaction",
      value: function(P) {
        for (var B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : -1, I = 0; I < this.config.plugins.length; I++)
          if (I != B) {
            var Q = this.config.plugins[I];
            if (Q.spec.filterTransaction && !Q.spec.filterTransaction.call(Q, P, this)) return !1;
          }
        return !0;
      }
    }, {
      key: "applyTransaction",
      value: function(P) {
        if (!this.filterTransaction(P)) return {
          state: this,
          transactions: []
        };
        for (var B = [P], I = this.applyInner(P), Q = null; ; ) {
          for (var re = !1, be = 0; be < this.config.plugins.length; be++) {
            var Ye = this.config.plugins[be];
            if (Ye.spec.appendTransaction) {
              var lt = Q ? Q[be].n : 0, Qe = Q ? Q[be].state : this, xt = lt < B.length && Ye.spec.appendTransaction.call(Ye, lt ? B.slice(lt) : B, Qe, I);
              if (xt && I.filterTransaction(xt, be)) {
                if (xt.setMeta("appendedTransaction", P), !Q) {
                  Q = [];
                  for (var ft = 0; ft < this.config.plugins.length; ft++)
                    Q.push(ft < be ? {
                      state: I,
                      n: B.length
                    } : {
                      state: this,
                      n: 0
                    });
                }
                B.push(xt), I = I.applyInner(xt), re = !0;
              }
              Q && (Q[be] = {
                state: I,
                n: B.length
              });
            }
          }
          if (!re) return {
            state: I,
            transactions: B
          };
        }
      }
    }, {
      key: "applyInner",
      value: function(P) {
        if (!P.before.eq(this.doc)) throw new RangeError("Applying a mismatched transaction");
        for (var B = new K(this.config), I = this.config.fields, Q = 0; Q < I.length; Q++) {
          var re = I[Q];
          B[re.name] = re.apply(P, this[re.name], this, B);
        }
        return B;
      }
    }, {
      key: "tr",
      get: function() {
        return new it(this);
      }
    }, {
      key: "reconfigure",
      value: function(P) {
        for (var B = new Bt(this.schema, P.plugins), I = B.fields, Q = new K(B), re = 0; re < I.length; re++) {
          var be = I[re].name;
          Q[be] = this.hasOwnProperty(be) ? this[be] : I[re].init(P, Q);
        }
        return Q;
      }
    }, {
      key: "toJSON",
      value: function(P) {
        var B = {
          doc: this.doc.toJSON(),
          selection: this.selection.toJSON()
        };
        if (this.storedMarks && (B.storedMarks = this.storedMarks.map(function(be) {
          return be.toJSON();
        })), P && ye(P) == "object") for (var I in P) {
          if (I == "doc" || I == "selection") throw new RangeError("The JSON fields `doc` and `selection` are reserved");
          var Q = P[I], re = Q.spec.state;
          re && re.toJSON && (B[I] = re.toJSON.call(Q, this[Q.key]));
        }
        return B;
      }
    }], [{
      key: "create",
      value: function(P) {
        for (var B = new Bt(P.doc ? P.doc.type.schema : P.schema, P.plugins), I = new K(B), Q = 0; Q < B.fields.length; Q++)
          I[B.fields[Q].name] = B.fields[Q].init(P, I);
        return I;
      }
    }, {
      key: "fromJSON",
      value: function(P, B, I) {
        if (!B) throw new RangeError("Invalid input for EditorState.fromJSON");
        if (!P.schema) throw new RangeError("Required config field 'schema' missing");
        var Q = new Bt(P.schema, P.plugins), re = new K(Q);
        return Q.fields.forEach(function(be) {
          if (be.name == "doc")
            re.doc = Z.Node.fromJSON(P.schema, B.doc);
          else if (be.name == "selection")
            re.selection = J.fromJSON(re.doc, B.selection);
          else if (be.name == "storedMarks")
            B.storedMarks && (re.storedMarks = B.storedMarks.map(P.schema.markFromJSON));
          else {
            if (I) for (var Ye in I) {
              var lt = I[Ye], Qe = lt.spec.state;
              if (lt.key == be.name && Qe && Qe.fromJSON && Object.prototype.hasOwnProperty.call(B, Ye)) {
                re[be.name] = Qe.fromJSON.call(lt, P, B[Ye], re);
                return;
              }
            }
            re[be.name] = be.init(P, re);
          }
        }), re;
      }
    }]), K;
  }();
  function mt(K, $, P) {
    for (var B in K) {
      var I = K[B];
      I instanceof Function ? I = I.bind($) : B == "handleDOMEvents" && (I = mt(I, $, {})), P[B] = I;
    }
    return P;
  }
  var kt = function() {
    function K($) {
      Be(this, K), this.spec = $, this.props = {}, $.props && mt($.props, this, this.props), this.key = $.key ? $.key.key : Wt("plugin");
    }
    return le(K, [{
      key: "getState",
      value: function(P) {
        return P[this.key];
      }
    }]), K;
  }(), dt = /* @__PURE__ */ Object.create(null);
  function Wt(K) {
    return K in dt ? K + "$" + ++dt[K] : (dt[K] = 0, K + "$");
  }
  var Yt = function() {
    function K() {
      var $ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "key";
      Be(this, K), this.key = Wt($);
    }
    return le(K, [{
      key: "get",
      value: function(P) {
        return P.config.pluginsByKey[this.key];
      }
    }, {
      key: "getState",
      value: function(P) {
        return P[this.key];
      }
    }]), K;
  }();
  return Er.AllSelection = me, Er.EditorState = We, Er.NodeSelection = X, Er.Plugin = kt, Er.PluginKey = Yt, Er.Selection = J, Er.SelectionRange = V, Er.TextSelection = fe, Er.Transaction = it, Er;
}
var rl;
function a$() {
  if (rl) return ur;
  rl = 1;
  function ye(oe, fe, Te) {
    return Object.defineProperty(oe, "prototype", { writable: !1 }), oe;
  }
  function se(oe, fe) {
    if (!(oe instanceof fe))
      throw new TypeError("Cannot call a class as a function");
  }
  var Ie = /* @__PURE__ */ Ka(), Fe = /* @__PURE__ */ Do(), Pe = ye(function oe(fe, Te) {
    var X = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    se(this, oe), this.match = fe, this.match = fe, this.handler = typeof Te == "string" ? Xe(Te) : Te, this.undoable = X.undoable !== !1, this.inCode = X.inCode || !1, this.inCodeMark = X.inCodeMark !== !1;
  });
  function Xe(oe) {
    return function(fe, Te, X, he) {
      var me = oe;
      if (Te[1]) {
        var Ce = Te[0].lastIndexOf(Te[1]);
        me += Te[0].slice(Ce + Te[1].length), X += Ce;
        var ze = X - he;
        ze > 0 && (me = Te[0].slice(Ce - ze, Ce) + me, X = he);
      }
      return fe.tr.insertText(me, X, he);
    };
  }
  var et = 500;
  function Je(oe) {
    var fe = oe.rules, Te = new Ie.Plugin({
      state: {
        init: function() {
          return null;
        },
        apply: function(he, me) {
          var Ce = he.getMeta(this);
          return Ce || (he.selectionSet || he.docChanged ? null : me);
        }
      },
      props: {
        handleTextInput: function(he, me, Ce, ze) {
          return je(he, me, Ce, ze, fe, Te);
        },
        handleDOMEvents: {
          compositionend: function(he) {
            setTimeout(function() {
              var me = he.state.selection.$cursor;
              me && je(he, me.pos, me.pos, "", fe, Te);
            });
          }
        }
      },
      isInputRules: !0
    });
    return Te;
  }
  function je(oe, fe, Te, X, he, me) {
    if (oe.composing) return !1;
    for (var Ce = oe.state, ze = Ce.doc.resolve(fe), ht = ze.parent.textBetween(Math.max(0, ze.parentOffset - et), ze.parentOffset, null, "￼") + X, Le = 0; Le < he.length; Le++) {
      var ut = he[Le];
      if (!(!ut.inCodeMark && ze.marks().some(function(Ze) {
        return Ze.type.spec.code;
      }))) {
        if (ze.parent.type.spec.code) {
          if (!ut.inCode) continue;
        } else if (ut.inCode === "only")
          continue;
        var ct = ut.match.exec(ht), it = ct && ct[0].length >= X.length && ut.handler(Ce, ct, fe - (ct[0].length - X.length), Te);
        if (it)
          return ut.undoable && it.setMeta(me, {
            transform: it,
            from: fe,
            to: Te,
            text: X
          }), oe.dispatch(it), !0;
      }
    }
    return !1;
  }
  var te = function(fe, Te) {
    for (var X = fe.plugins, he = 0; he < X.length; he++) {
      var me = X[he], Ce = void 0;
      if (me.spec.isInputRules && (Ce = me.getState(fe))) {
        if (Te) {
          for (var ze = fe.tr, ht = Ce.transform, Le = ht.steps.length - 1; Le >= 0; Le--) ze.step(ht.steps[Le].invert(ht.docs[Le]));
          if (Ce.text) {
            var ut = ze.doc.resolve(Ce.from).marks();
            ze.replaceWith(Ce.from, Ce.to, fe.schema.text(Ce.text, ut));
          } else
            ze.delete(Ce.from, Ce.to);
          Te(ze);
        }
        return !0;
      }
    }
    return !1;
  }, Be = new Pe(/--$/, "—", {
    inCodeMark: !1
  }), j = new Pe(/\.\.\.$/, "…", {
    inCodeMark: !1
  }), le = new Pe(/(?:^|[\s\{\[\(\<'"\u2018\u201C])(")$/, "“", {
    inCodeMark: !1
  }), Z = new Pe(/"$/, "”", {
    inCodeMark: !1
  }), ce = new Pe(/(?:^|[\s\{\[\(\<'"\u2018\u201C])(')$/, "‘", {
    inCodeMark: !1
  }), ne = new Pe(/'$/, "’", {
    inCodeMark: !1
  }), J = [le, Z, ce, ne];
  function V(oe, fe) {
    var Te = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, X = arguments.length > 3 ? arguments[3] : void 0;
    return new Pe(oe, function(he, me, Ce, ze) {
      var ht = Te instanceof Function ? Te(me) : Te, Le = he.tr.delete(Ce, ze), ut = Le.doc.resolve(Ce), ct = ut.blockRange(), it = ct && Fe.findWrapping(ct, fe, ht);
      if (!it) return null;
      Le.wrap(ct, it);
      var Ze = Le.doc.resolve(Ce - 1).nodeBefore;
      return Ze && Ze.type == fe && Fe.canJoin(Le.doc, Ce - 1) && (!X || X(me, Ze)) && Le.join(Ce - 1), Le;
    });
  }
  function ue(oe, fe) {
    var Te = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
    return new Pe(oe, function(X, he, me, Ce) {
      var ze = X.doc.resolve(me), ht = Te instanceof Function ? Te(he) : Te;
      return ze.node(-1).canReplaceWith(ze.index(-1), ze.indexAfter(-1), fe) ? X.tr.delete(me, Ce).setBlockType(me, me, fe, ht) : null;
    });
  }
  return ur.InputRule = Pe, ur.closeDoubleQuote = Z, ur.closeSingleQuote = ne, ur.ellipsis = j, ur.emDash = Be, ur.inputRules = Je, ur.openDoubleQuote = le, ur.openSingleQuote = ce, ur.smartQuotes = J, ur.textblockTypeInputRule = ue, ur.undoInputRule = te, ur.wrappingInputRule = V, ur;
}
var ia = {}, jn = {}, nl;
function i$() {
  if (nl) return jn;
  nl = 1, Object.defineProperty(jn, "__esModule", { value: !0 });
  for (var ye = {
    8: "Backspace",
    9: "Tab",
    10: "Enter",
    12: "NumLock",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    44: "PrintScreen",
    45: "Insert",
    46: "Delete",
    59: ";",
    61: "=",
    91: "Meta",
    92: "Meta",
    106: "*",
    107: "+",
    108: ",",
    109: "-",
    110: ".",
    111: "/",
    144: "NumLock",
    145: "ScrollLock",
    160: "Shift",
    161: "Shift",
    162: "Control",
    163: "Control",
    164: "Alt",
    165: "Alt",
    173: "-",
    186: ";",
    187: "=",
    188: ",",
    189: "-",
    190: ".",
    191: "/",
    192: "`",
    219: "[",
    220: "\\",
    221: "]",
    222: "'"
  }, se = {
    48: ")",
    49: "!",
    50: "@",
    51: "#",
    52: "$",
    53: "%",
    54: "^",
    55: "&",
    56: "*",
    57: "(",
    59: ":",
    61: "+",
    173: "_",
    186: ":",
    187: "+",
    188: "<",
    189: "_",
    190: ">",
    191: "?",
    192: "~",
    219: "{",
    220: "|",
    221: "}",
    222: '"'
  }, Ie = typeof navigator < "u" && /Mac/.test(navigator.platform), Fe = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), Pe = 0; Pe < 10; Pe++) ye[48 + Pe] = ye[96 + Pe] = String(Pe);
  for (var Pe = 1; Pe <= 24; Pe++) ye[Pe + 111] = "F" + Pe;
  for (var Pe = 65; Pe <= 90; Pe++)
    ye[Pe] = String.fromCharCode(Pe + 32), se[Pe] = String.fromCharCode(Pe);
  for (var Xe in ye) se.hasOwnProperty(Xe) || (se[Xe] = ye[Xe]);
  function et(Je) {
    var je = Ie && Je.metaKey && Je.shiftKey && !Je.ctrlKey && !Je.altKey || Fe && Je.shiftKey && Je.key && Je.key.length == 1 || Je.key == "Unidentified", te = !je && Je.key || (Je.shiftKey ? se : ye)[Je.keyCode] || Je.key || "Unidentified";
    return te == "Esc" && (te = "Escape"), te == "Del" && (te = "Delete"), te == "Left" && (te = "ArrowLeft"), te == "Up" && (te = "ArrowUp"), te == "Right" && (te = "ArrowRight"), te == "Down" && (te = "ArrowDown"), te;
  }
  return jn.base = ye, jn.keyName = et, jn.shift = se, jn;
}
var al;
function o$() {
  if (al) return ia;
  al = 1, Object.defineProperty(ia, "__esModule", {
    value: !0
  });
  var ye = i$(), se = /* @__PURE__ */ Ka(), Ie = typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : !1;
  function Fe(je) {
    var te = je.split(/-(?!$)/), Be = te[te.length - 1];
    Be == "Space" && (Be = " ");
    for (var j, le, Z, ce, ne = 0; ne < te.length - 1; ne++) {
      var J = te[ne];
      if (/^(cmd|meta|m)$/i.test(J)) ce = !0;
      else if (/^a(lt)?$/i.test(J)) j = !0;
      else if (/^(c|ctrl|control)$/i.test(J)) le = !0;
      else if (/^s(hift)?$/i.test(J)) Z = !0;
      else if (/^mod$/i.test(J))
        Ie ? ce = !0 : le = !0;
      else throw new Error("Unrecognized modifier name: " + J);
    }
    return j && (Be = "Alt-" + Be), le && (Be = "Ctrl-" + Be), ce && (Be = "Meta-" + Be), Z && (Be = "Shift-" + Be), Be;
  }
  function Pe(je) {
    var te = /* @__PURE__ */ Object.create(null);
    for (var Be in je)
      te[Fe(Be)] = je[Be];
    return te;
  }
  function Xe(je, te) {
    var Be = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
    return te.altKey && (je = "Alt-" + je), te.ctrlKey && (je = "Ctrl-" + je), te.metaKey && (je = "Meta-" + je), Be && te.shiftKey && (je = "Shift-" + je), je;
  }
  function et(je) {
    return new se.Plugin({
      props: {
        handleKeyDown: Je(je)
      }
    });
  }
  function Je(je) {
    var te = Pe(je);
    return function(Be, j) {
      var le = ye.keyName(j), Z, ce = te[Xe(le, j)];
      if (ce && ce(Be.state, Be.dispatch, Be)) return !0;
      if (le.length == 1 && le != " ") {
        if (j.shiftKey) {
          var ne = te[Xe(le, j, !1)];
          if (ne && ne(Be.state, Be.dispatch, Be)) return !0;
        }
        if ((j.shiftKey || j.altKey || j.metaKey || le.charCodeAt(0) > 127) && (Z = ye.base[j.keyCode]) && Z != le) {
          var J = te[Xe(Z, j)];
          if (J && J(Be.state, Be.dispatch, Be)) return !0;
        }
      }
      return !1;
    };
  }
  return ia.keydownHandler = Je, ia.keymap = et, ia;
}
var Nn = {}, il;
function s$() {
  if (il) return Nn;
  il = 1;
  function ye(e, i) {
    return Fe(e) || Ie(e, i) || Xe(e, i) || se();
  }
  function se() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function Ie(e, i) {
    var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (t != null) {
      var a, l, u, v, p = [], S = !0, T = !1;
      try {
        if (u = (t = t.call(e)).next, i !== 0) for (; !(S = (a = u.call(t)).done) && (p.push(a.value), p.length !== i); S = !0) ;
      } catch (R) {
        T = !0, l = R;
      } finally {
        try {
          if (!S && t.return != null && (v = t.return(), Object(v) !== v)) return;
        } finally {
          if (T) throw l;
        }
      }
      return p;
    }
  }
  function Fe(e) {
    if (Array.isArray(e)) return e;
  }
  function Pe(e, i) {
    var t = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (!t) {
      if (Array.isArray(e) || (t = Xe(e)) || i) {
        t && (e = t);
        var a = 0, l = function() {
        };
        return { s: l, n: function() {
          return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
        }, e: function(T) {
          throw T;
        }, f: l };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var u = !0, v = !1, p;
    return { s: function() {
      t = t.call(e);
    }, n: function() {
      var T = t.next();
      return u = T.done, T;
    }, e: function(T) {
      v = !0, p = T;
    }, f: function() {
      try {
        !u && t.return != null && t.return();
      } finally {
        if (v) throw p;
      }
    } };
  }
  function Xe(e, i) {
    if (e) {
      if (typeof e == "string") return et(e, i);
      var t = Object.prototype.toString.call(e).slice(8, -1);
      if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set") return Array.from(e);
      if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return et(e, i);
    }
  }
  function et(e, i) {
    (i == null || i > e.length) && (i = e.length);
    for (var t = 0, a = new Array(i); t < i; t++) a[t] = e[t];
    return a;
  }
  function Je() {
    return typeof Reflect < "u" && Reflect.get ? Je = Reflect.get.bind() : Je = function(i, t, a) {
      var l = je(i, t);
      if (l) {
        var u = Object.getOwnPropertyDescriptor(l, t);
        return u.get ? u.get.call(arguments.length < 3 ? i : a) : u.value;
      }
    }, Je.apply(this, arguments);
  }
  function je(e, i) {
    for (; !Object.prototype.hasOwnProperty.call(e, i) && (e = ne(e), e !== null); )
      ;
    return e;
  }
  function te(e, i) {
    if (typeof i != "function" && i !== null)
      throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(i && i.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), i && Be(e, i);
  }
  function Be(e, i) {
    return Be = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, l) {
      return a.__proto__ = l, a;
    }, Be(e, i);
  }
  function j(e) {
    var i = ce();
    return function() {
      var a = ne(e), l;
      if (i) {
        var u = ne(this).constructor;
        l = Reflect.construct(a, arguments, u);
      } else
        l = a.apply(this, arguments);
      return le(this, l);
    };
  }
  function le(e, i) {
    if (i && (J(i) === "object" || typeof i == "function"))
      return i;
    if (i !== void 0)
      throw new TypeError("Derived constructors may only return object or undefined");
    return Z(e);
  }
  function Z(e) {
    if (e === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function ce() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  function ne(e) {
    return ne = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    }, ne(e);
  }
  function J(e) {
    "@babel/helpers - typeof";
    return J = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(i) {
      return typeof i;
    } : function(i) {
      return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
    }, J(e);
  }
  function V(e, i) {
    if (!(e instanceof i))
      throw new TypeError("Cannot call a class as a function");
  }
  function ue(e, i) {
    for (var t = 0; t < i.length; t++) {
      var a = i[t];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, fe(a.key), a);
    }
  }
  function oe(e, i, t) {
    return i && ue(e.prototype, i), t && ue(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
  }
  function fe(e) {
    var i = Te(e, "string");
    return J(i) === "symbol" ? i : String(i);
  }
  function Te(e, i) {
    if (J(e) !== "object" || e === null) return e;
    var t = e[Symbol.toPrimitive];
    if (t !== void 0) {
      var a = t.call(e, i);
      if (J(a) !== "object") return a;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(e);
  }
  var X = /* @__PURE__ */ Ka(), he = /* @__PURE__ */ ja(), me = /* @__PURE__ */ Do(), Ce = function(i) {
    for (var t = 0; ; t++)
      if (i = i.previousSibling, !i) return t;
  }, ze = function(i) {
    var t = i.assignedSlot || i.parentNode;
    return t && t.nodeType == 11 ? t.host : t;
  }, ht = null, Le = function(i, t, a) {
    var l = ht || (ht = document.createRange());
    return l.setEnd(i, a ?? i.nodeValue.length), l.setStart(i, t || 0), l;
  }, ut = function() {
    ht = null;
  }, ct = function(i, t, a, l) {
    return a && (Ze(i, t, a, l, -1) || Ze(i, t, a, l, 1));
  }, it = /^(img|br|input|textarea|hr)$/i;
  function Ze(e, i, t, a, l) {
    for (; ; ) {
      if (e == t && i == a) return !0;
      if (i == (l < 0 ? 0 : yt(e))) {
        var u = e.parentNode;
        if (!u || u.nodeType != 1 || mt(e) || it.test(e.nodeName) || e.contentEditable == "false") return !1;
        i = Ce(e) + (l < 0 ? 0 : 1), e = u;
      } else if (e.nodeType == 1) {
        if (e = e.childNodes[i + (l < 0 ? -1 : 0)], e.contentEditable == "false") return !1;
        i = l < 0 ? yt(e) : 0;
      } else
        return !1;
    }
  }
  function yt(e) {
    return e.nodeType == 3 ? e.nodeValue.length : e.childNodes.length;
  }
  function Tt(e, i) {
    for (; ; ) {
      if (e.nodeType == 3 && i) return e;
      if (e.nodeType == 1 && i > 0) {
        if (e.contentEditable == "false") return null;
        e = e.childNodes[i - 1], i = yt(e);
      } else if (e.parentNode && !mt(e))
        i = Ce(e), e = e.parentNode;
      else
        return null;
    }
  }
  function Bt(e, i) {
    for (; ; ) {
      if (e.nodeType == 3 && i < e.nodeValue.length) return e;
      if (e.nodeType == 1 && i < e.childNodes.length) {
        if (e.contentEditable == "false") return null;
        e = e.childNodes[i], i = 0;
      } else if (e.parentNode && !mt(e))
        i = Ce(e) + 1, e = e.parentNode;
      else
        return null;
    }
  }
  function We(e, i, t) {
    for (var a = i == 0, l = i == yt(e); a || l; ) {
      if (e == t) return !0;
      var u = Ce(e);
      if (e = e.parentNode, !e) return !1;
      a = a && u == 0, l = l && u == yt(e);
    }
  }
  function mt(e) {
    for (var i, t = e; t && !(i = t.pmViewDesc); t = t.parentNode) ;
    return i && i.node && i.node.isBlock && (i.dom == e || i.contentDOM == e);
  }
  var kt = function(i) {
    return i.focusNode && ct(i.focusNode, i.focusOffset, i.anchorNode, i.anchorOffset);
  };
  function dt(e, i) {
    var t = document.createEvent("Event");
    return t.initEvent("keydown", !0, !0), t.keyCode = e, t.key = t.code = i, t;
  }
  function Wt(e) {
    for (var i = e.activeElement; i && i.shadowRoot; ) i = i.shadowRoot.activeElement;
    return i;
  }
  function Yt(e, i, t) {
    if (e.caretPositionFromPoint)
      try {
        var a = e.caretPositionFromPoint(i, t);
        if (a) return {
          node: a.offsetNode,
          offset: Math.min(yt(a.offsetNode), a.offset)
        };
      } catch {
      }
    if (e.caretRangeFromPoint) {
      var l = e.caretRangeFromPoint(i, t);
      if (l) return {
        node: l.startContainer,
        offset: Math.min(yt(l.startContainer), l.startOffset)
      };
    }
  }
  var K = typeof navigator < "u" ? navigator : null, $ = typeof document < "u" ? document : null, P = K && K.userAgent || "", B = /Edge\/(\d+)/.exec(P), I = /MSIE \d/.exec(P), Q = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(P), re = !!(I || Q || B), be = I ? document.documentMode : Q ? +Q[1] : B ? +B[1] : 0, Ye = !re && /gecko\/(\d+)/i.test(P);
  Ye && +(/Firefox\/(\d+)/.exec(P) || [0, 0])[1];
  var lt = !re && /Chrome\/(\d+)/.exec(P), Qe = !!lt, xt = lt ? +lt[1] : 0, ft = !re && !!K && /Apple Computer/.test(K.vendor), $t = ft && (/Mobile\/\w+/.test(P) || !!K && K.maxTouchPoints > 2), It = $t || (K ? /Mac/.test(K.platform) : !1), Xt = K ? /Win/.test(K.platform) : !1, St = /Android \d/.test(P), cr = !!$ && "webkitFontSmoothing" in $.documentElement.style, Vr = cr ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;
  function Nr(e) {
    var i = e.defaultView && e.defaultView.visualViewport;
    return i ? {
      left: 0,
      right: i.width,
      top: 0,
      bottom: i.height
    } : {
      left: 0,
      right: e.documentElement.clientWidth,
      top: 0,
      bottom: e.documentElement.clientHeight
    };
  }
  function zt(e, i) {
    return typeof e == "number" ? e : e[i];
  }
  function Ne(e) {
    var i = e.getBoundingClientRect(), t = i.width / e.offsetWidth || 1, a = i.height / e.offsetHeight || 1;
    return {
      left: i.left,
      right: i.left + e.clientWidth * t,
      top: i.top,
      bottom: i.top + e.clientHeight * a
    };
  }
  function De(e, i, t) {
    for (var a = e.someProp("scrollThreshold") || 0, l = e.someProp("scrollMargin") || 5, u = e.dom.ownerDocument, v = t || e.dom; v; ) {
      if (v.nodeType != 1) {
        v = ze(v);
        continue;
      }
      var p = v, S = p == u.body, T = S ? Nr(u) : Ne(p), R = 0, z = 0;
      if (i.top < T.top + zt(a, "top") ? z = -(T.top - i.top + zt(l, "top")) : i.bottom > T.bottom - zt(a, "bottom") && (z = i.bottom - i.top > T.bottom - T.top ? i.top + zt(l, "top") - T.top : i.bottom - T.bottom + zt(l, "bottom")), i.left < T.left + zt(a, "left") ? R = -(T.left - i.left + zt(l, "left")) : i.right > T.right - zt(a, "right") && (R = i.right - T.right + zt(l, "right")), R || z)
        if (S)
          u.defaultView.scrollBy(R, z);
        else {
          var F = p.scrollLeft, G = p.scrollTop;
          z && (p.scrollTop += z), R && (p.scrollLeft += R);
          var ae = p.scrollLeft - F, Se = p.scrollTop - G;
          i = {
            left: i.left - ae,
            top: i.top - Se,
            right: i.right - ae,
            bottom: i.bottom - Se
          };
        }
      var Me = S ? "fixed" : getComputedStyle(v).position;
      if (/^(fixed|sticky)$/.test(Me)) break;
      v = Me == "absolute" ? v.offsetParent : ze(v);
    }
  }
  function Ke(e) {
    for (var i = e.dom.getBoundingClientRect(), t = Math.max(0, i.top), a, l, u = (i.left + i.right) / 2, v = t + 1; v < Math.min(innerHeight, i.bottom); v += 5) {
      var p = e.root.elementFromPoint(u, v);
      if (!(!p || p == e.dom || !e.dom.contains(p))) {
        var S = p.getBoundingClientRect();
        if (S.top >= t - 20) {
          a = p, l = S.top;
          break;
        }
      }
    }
    return {
      refDOM: a,
      refTop: l,
      stack: rt(e.dom)
    };
  }
  function rt(e) {
    for (var i = [], t = e.ownerDocument, a = e; a && (i.push({
      dom: a,
      top: a.scrollTop,
      left: a.scrollLeft
    }), e != t); a = ze(a))
      ;
    return i;
  }
  function wt(e) {
    var i = e.refDOM, t = e.refTop, a = e.stack, l = i ? i.getBoundingClientRect().top : 0;
    er(a, l == 0 ? 0 : l - t);
  }
  function er(e, i) {
    for (var t = 0; t < e.length; t++) {
      var a = e[t], l = a.dom, u = a.top, v = a.left;
      l.scrollTop != u + i && (l.scrollTop = u + i), l.scrollLeft != v && (l.scrollLeft = v);
    }
  }
  var At = null;
  function _t(e) {
    if (e.setActive) return e.setActive();
    if (At) return e.focus(At);
    var i = rt(e);
    e.focus(At == null ? {
      get preventScroll() {
        return At = {
          preventScroll: !0
        }, !0;
      }
    } : void 0), At || (At = !1, er(i, 0));
  }
  function tr(e, i) {
    for (var t, a = 2e8, l, u = 0, v = i.top, p = i.top, S, T, R = e.firstChild, z = 0; R; R = R.nextSibling, z++) {
      var F = void 0;
      if (R.nodeType == 1) F = R.getClientRects();
      else if (R.nodeType == 3) F = Le(R).getClientRects();
      else continue;
      for (var G = 0; G < F.length; G++) {
        var ae = F[G];
        if (ae.top <= v && ae.bottom >= p) {
          v = Math.max(ae.bottom, v), p = Math.min(ae.top, p);
          var Se = ae.left > i.left ? ae.left - i.left : ae.right < i.left ? i.left - ae.right : 0;
          if (Se < a) {
            t = R, a = Se, l = Se && t.nodeType == 3 ? {
              left: ae.right < i.left ? ae.right : ae.left,
              top: i.top
            } : i, R.nodeType == 1 && Se && (u = z + (i.left >= (ae.left + ae.right) / 2 ? 1 : 0));
            continue;
          }
        } else ae.top > i.top && !S && ae.left <= i.left && ae.right >= i.left && (S = R, T = {
          left: Math.max(ae.left, Math.min(ae.right, i.left)),
          top: ae.top
        });
        !t && (i.left >= ae.right && i.top >= ae.top || i.left >= ae.left && i.top >= ae.bottom) && (u = z + 1);
      }
    }
    return !t && S && (t = S, l = T, a = 0), t && t.nodeType == 3 ? Dr(t, l) : !t || a && t.nodeType == 1 ? {
      node: e,
      offset: u
    } : tr(t, l);
  }
  function Dr(e, i) {
    for (var t = e.nodeValue.length, a = document.createRange(), l = 0; l < t; l++) {
      a.setEnd(e, l + 1), a.setStart(e, l);
      var u = Gt(a, 1);
      if (u.top != u.bottom && rr(i, u))
        return {
          node: e,
          offset: l + (i.left >= (u.left + u.right) / 2 ? 1 : 0)
        };
    }
    return {
      node: e,
      offset: 0
    };
  }
  function rr(e, i) {
    return e.left >= i.left - 1 && e.left <= i.right + 1 && e.top >= i.top - 1 && e.top <= i.bottom + 1;
  }
  function Hr(e, i) {
    var t = e.parentNode;
    return t && /^li$/i.test(t.nodeName) && i.left < e.getBoundingClientRect().left ? t : e;
  }
  function Ir(e, i, t) {
    var a = tr(i, t), l = a.node, u = a.offset, v = -1;
    if (l.nodeType == 1 && !l.firstChild) {
      var p = l.getBoundingClientRect();
      v = p.left != p.right && t.left > (p.left + p.right) / 2 ? 1 : -1;
    }
    return e.docView.posFromDOM(l, u, v);
  }
  function Ur(e, i, t, a) {
    for (var l = -1, u = i, v = !1; u != e.dom; ) {
      var p = e.docView.nearestDesc(u, !0), S = void 0;
      if (!p) return null;
      if (p.dom.nodeType == 1 && (p.node.isBlock && p.parent || !p.contentDOM) && ((S = p.dom.getBoundingClientRect()).width || S.height) && (p.node.isBlock && p.parent && (!v && S.left > a.left || S.top > a.top ? l = p.posBefore : (!v && S.right < a.left || S.bottom < a.top) && (l = p.posAfter), v = !0), !p.contentDOM && l < 0 && !p.node.isText)) {
        var T = p.node.isBlock ? a.top < (S.top + S.bottom) / 2 : a.left < (S.left + S.right) / 2;
        return T ? p.posBefore : p.posAfter;
      }
      u = p.dom.parentNode;
    }
    return l > -1 ? l : e.docView.posFromDOM(i, t, -1);
  }
  function Or(e, i, t) {
    var a = e.childNodes.length;
    if (a && t.top < t.bottom)
      for (var l = Math.max(0, Math.min(a - 1, Math.floor(a * (i.top - t.top) / (t.bottom - t.top)) - 2)), u = l; ; ) {
        var v = e.childNodes[u];
        if (v.nodeType == 1)
          for (var p = v.getClientRects(), S = 0; S < p.length; S++) {
            var T = p[S];
            if (rr(i, T)) return Or(v, i, T);
          }
        if ((u = (u + 1) % a) == l) break;
      }
    return e;
  }
  function yr(e, i) {
    var t = e.dom.ownerDocument, a, l = 0, u = Yt(t, i.left, i.top);
    u && (a = u.node, l = u.offset);
    var v = (e.root.elementFromPoint ? e.root : t).elementFromPoint(i.left, i.top), p;
    if (!v || !e.dom.contains(v.nodeType != 1 ? v.parentNode : v)) {
      var S = e.dom.getBoundingClientRect();
      if (!rr(i, S) || (v = Or(e.dom, i, S), !v)) return null;
    }
    if (ft)
      for (var T = v; a && T; T = ze(T)) T.draggable && (a = void 0);
    if (v = Hr(v, i), a) {
      if (Ye && a.nodeType == 1 && (l = Math.min(l, a.childNodes.length), l < a.childNodes.length)) {
        var R = a.childNodes[l], z;
        R.nodeName == "IMG" && (z = R.getBoundingClientRect()).right <= i.left && z.bottom > i.top && l++;
      }
      var F;
      cr && l && a.nodeType == 1 && (F = a.childNodes[l - 1]).nodeType == 1 && F.contentEditable == "false" && F.getBoundingClientRect().top >= i.top && l--, a == e.dom && l == a.childNodes.length - 1 && a.lastChild.nodeType == 1 && i.top > a.lastChild.getBoundingClientRect().bottom ? p = e.state.doc.content.size : (l == 0 || a.nodeType != 1 || a.childNodes[l - 1].nodeName != "BR") && (p = Ur(e, a, l, i));
    }
    p == null && (p = Ir(e, v, i));
    var G = e.docView.nearestDesc(v, !0);
    return {
      pos: p,
      inside: G ? G.posAtStart - G.border : -1
    };
  }
  function Mr(e) {
    return e.top < e.bottom || e.left < e.right;
  }
  function Gt(e, i) {
    var t = e.getClientRects();
    if (t.length) {
      var a = t[i < 0 ? 0 : t.length - 1];
      if (Mr(a)) return a;
    }
    return Array.prototype.find.call(t, Mr) || e.getBoundingClientRect();
  }
  var kr = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
  function Vt(e, i, t) {
    var a = e.docView.domFromPos(i, t < 0 ? -1 : 1), l = a.node, u = a.offset, v = a.atom, p = cr || Ye;
    if (l.nodeType == 3)
      if (p && (kr.test(l.nodeValue) || (t < 0 ? !u : u == l.nodeValue.length))) {
        var S = Gt(Le(l, u, u), t);
        if (Ye && u && /\s/.test(l.nodeValue[u - 1]) && u < l.nodeValue.length) {
          var T = Gt(Le(l, u - 1, u - 1), -1);
          if (T.top == S.top) {
            var R = Gt(Le(l, u, u + 1), -1);
            if (R.top != S.top) return jt(R, R.left < T.left);
          }
        }
        return S;
      } else {
        var z = u, F = u, G = t < 0 ? 1 : -1;
        return t < 0 && !u ? (F++, G = -1) : t >= 0 && u == l.nodeValue.length ? (z--, G = 1) : t < 0 ? z-- : F++, jt(Gt(Le(l, z, F), G), G < 0);
      }
    var ae = e.state.doc.resolve(i - (v || 0));
    if (!ae.parent.inlineContent) {
      if (v == null && u && (t < 0 || u == yt(l))) {
        var Se = l.childNodes[u - 1];
        if (Se.nodeType == 1) return E(Se.getBoundingClientRect(), !1);
      }
      if (v == null && u < yt(l)) {
        var Me = l.childNodes[u];
        if (Me.nodeType == 1) return E(Me.getBoundingClientRect(), !0);
      }
      return E(l.getBoundingClientRect(), t >= 0);
    }
    if (v == null && u && (t < 0 || u == yt(l))) {
      var de = l.childNodes[u - 1], st = de.nodeType == 3 ? Le(de, yt(de) - (p ? 0 : 1)) : de.nodeType == 1 && (de.nodeName != "BR" || !de.nextSibling) ? de : null;
      if (st) return jt(Gt(st, 1), !1);
    }
    if (v == null && u < yt(l)) {
      for (var tt = l.childNodes[u]; tt.pmViewDesc && tt.pmViewDesc.ignoreForCoords; ) tt = tt.nextSibling;
      var Ue = tt ? tt.nodeType == 3 ? Le(tt, 0, p ? 0 : 1) : tt.nodeType == 1 ? tt : null : null;
      if (Ue) return jt(Gt(Ue, -1), !0);
    }
    return jt(Gt(l.nodeType == 3 ? Le(l) : l, -t), t >= 0);
  }
  function jt(e, i) {
    if (e.width == 0) return e;
    var t = i ? e.left : e.right;
    return {
      top: e.top,
      bottom: e.bottom,
      left: t,
      right: t
    };
  }
  function E(e, i) {
    if (e.height == 0) return e;
    var t = i ? e.top : e.bottom;
    return {
      top: t,
      bottom: t,
      left: e.left,
      right: e.right
    };
  }
  function N(e, i, t) {
    var a = e.state, l = e.root.activeElement;
    a != i && e.updateState(i), l != e.dom && e.focus();
    try {
      return t();
    } finally {
      a != i && e.updateState(a), l != e.dom && l && l.focus();
    }
  }
  function y(e, i, t) {
    var a = i.selection, l = t == "up" ? a.$from : a.$to;
    return N(e, i, function() {
      for (var u = e.docView.domFromPos(l.pos, t == "up" ? -1 : 1), v = u.node; ; ) {
        var p = e.docView.nearestDesc(v, !0);
        if (!p) break;
        if (p.node.isBlock) {
          v = p.contentDOM || p.dom;
          break;
        }
        v = p.dom.parentNode;
      }
      for (var S = Vt(e, l.pos, 1), T = v.firstChild; T; T = T.nextSibling) {
        var R = void 0;
        if (T.nodeType == 1) R = T.getClientRects();
        else if (T.nodeType == 3) R = Le(T, 0, T.nodeValue.length).getClientRects();
        else continue;
        for (var z = 0; z < R.length; z++) {
          var F = R[z];
          if (F.bottom > F.top + 1 && (t == "up" ? S.top - F.top > (F.bottom - S.top) * 2 : F.bottom - S.bottom > (S.bottom - F.top) * 2)) return !1;
        }
      }
      return !0;
    });
  }
  var m = /[\u0590-\u08ac]/;
  function b(e, i, t) {
    var a = i.selection.$head;
    if (!a.parent.isTextblock) return !1;
    var l = a.parentOffset, u = !l, v = l == a.parent.content.size, p = e.domSelection();
    return p ? !m.test(a.parent.textContent) || !p.modify ? t == "left" || t == "backward" ? u : v : N(e, i, function() {
      var S = e.domSelectionRange(), T = S.focusNode, R = S.focusOffset, z = S.anchorNode, F = S.anchorOffset, G = p.caretBidiLevel;
      p.modify("move", t, "character");
      var ae = a.depth ? e.docView.domAfterPos(a.before()) : e.dom, Se = e.domSelectionRange(), Me = Se.focusNode, de = Se.focusOffset, st = Me && !ae.contains(Me.nodeType == 1 ? Me : Me.parentNode) || T == Me && R == de;
      try {
        p.collapse(z, F), T && (T != z || R != F) && p.extend && p.extend(T, R);
      } catch {
      }
      return G != null && (p.caretBidiLevel = G), st;
    }) : a.pos == a.start() || a.pos == a.end();
  }
  var w = null, O = null, H = !1;
  function ee(e, i, t) {
    return w == i && O == t ? H : (w = i, O = t, H = t == "up" || t == "down" ? y(e, i, t) : b(e, i, t));
  }
  var U = 0, ge = 1, Oe = 2, xe = 3, Ge = function() {
    function e(i, t, a, l) {
      V(this, e), this.parent = i, this.children = t, this.dom = a, this.contentDOM = l, this.dirty = U, a.pmViewDesc = this;
    }
    return oe(e, [{
      key: "matchesWidget",
      value: function(t) {
        return !1;
      }
    }, {
      key: "matchesMark",
      value: function(t) {
        return !1;
      }
    }, {
      key: "matchesNode",
      value: function(t, a, l) {
        return !1;
      }
    }, {
      key: "matchesHack",
      value: function(t) {
        return !1;
      }
    }, {
      key: "parseRule",
      value: function() {
        return null;
      }
    }, {
      key: "stopEvent",
      value: function(t) {
        return !1;
      }
    }, {
      key: "size",
      get: function() {
        for (var t = 0, a = 0; a < this.children.length; a++) t += this.children[a].size;
        return t;
      }
    }, {
      key: "border",
      get: function() {
        return 0;
      }
    }, {
      key: "destroy",
      value: function() {
        this.parent = void 0, this.dom.pmViewDesc == this && (this.dom.pmViewDesc = void 0);
        for (var t = 0; t < this.children.length; t++) this.children[t].destroy();
      }
    }, {
      key: "posBeforeChild",
      value: function(t) {
        for (var a = 0, l = this.posAtStart; ; a++) {
          var u = this.children[a];
          if (u == t) return l;
          l += u.size;
        }
      }
    }, {
      key: "posBefore",
      get: function() {
        return this.parent.posBeforeChild(this);
      }
    }, {
      key: "posAtStart",
      get: function() {
        return this.parent ? this.parent.posBeforeChild(this) + this.border : 0;
      }
    }, {
      key: "posAfter",
      get: function() {
        return this.posBefore + this.size;
      }
    }, {
      key: "posAtEnd",
      get: function() {
        return this.posAtStart + this.size - 2 * this.border;
      }
    }, {
      key: "localPosFromDOM",
      value: function(t, a, l) {
        if (this.contentDOM && this.contentDOM.contains(t.nodeType == 1 ? t : t.parentNode))
          if (l < 0) {
            var u, v;
            if (t == this.contentDOM)
              u = t.childNodes[a - 1];
            else {
              for (; t.parentNode != this.contentDOM; ) t = t.parentNode;
              u = t.previousSibling;
            }
            for (; u && !((v = u.pmViewDesc) && v.parent == this); ) u = u.previousSibling;
            return u ? this.posBeforeChild(v) + v.size : this.posAtStart;
          } else {
            var p, S;
            if (t == this.contentDOM)
              p = t.childNodes[a];
            else {
              for (; t.parentNode != this.contentDOM; ) t = t.parentNode;
              p = t.nextSibling;
            }
            for (; p && !((S = p.pmViewDesc) && S.parent == this); ) p = p.nextSibling;
            return p ? this.posBeforeChild(S) : this.posAtEnd;
          }
        var T;
        if (t == this.dom && this.contentDOM)
          T = a > Ce(this.contentDOM);
        else if (this.contentDOM && this.contentDOM != this.dom && this.dom.contains(this.contentDOM))
          T = t.compareDocumentPosition(this.contentDOM) & 2;
        else if (this.dom.firstChild) {
          if (a == 0) for (var R = t; ; R = R.parentNode) {
            if (R == this.dom) {
              T = !1;
              break;
            }
            if (R.previousSibling) break;
          }
          if (T == null && a == t.childNodes.length) for (var z = t; ; z = z.parentNode) {
            if (z == this.dom) {
              T = !0;
              break;
            }
            if (z.nextSibling) break;
          }
        }
        return T ?? l > 0 ? this.posAtEnd : this.posAtStart;
      }
    }, {
      key: "nearestDesc",
      value: function(t) {
        for (var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, l = !0, u = t; u; u = u.parentNode) {
          var v = this.getDesc(u), p = void 0;
          if (v && (!a || v.node))
            if (l && (p = v.nodeDOM) && !(p.nodeType == 1 ? p.contains(t.nodeType == 1 ? t : t.parentNode) : p == t)) l = !1;
            else return v;
        }
      }
    }, {
      key: "getDesc",
      value: function(t) {
        for (var a = t.pmViewDesc, l = a; l; l = l.parent) if (l == this) return a;
      }
    }, {
      key: "posFromDOM",
      value: function(t, a, l) {
        for (var u = t; u; u = u.parentNode) {
          var v = this.getDesc(u);
          if (v) return v.localPosFromDOM(t, a, l);
        }
        return -1;
      }
    }, {
      key: "descAt",
      value: function(t) {
        for (var a = 0, l = 0; a < this.children.length; a++) {
          var u = this.children[a], v = l + u.size;
          if (l == t && v != l) {
            for (; !u.border && u.children.length; )
              for (var p = 0; p < u.children.length; p++) {
                var S = u.children[p];
                if (S.size) {
                  u = S;
                  break;
                }
              }
            return u;
          }
          if (t < v) return u.descAt(t - l - u.border);
          l = v;
        }
      }
    }, {
      key: "domFromPos",
      value: function(t, a) {
        if (!this.contentDOM) return {
          node: this.dom,
          offset: 0,
          atom: t + 1
        };
        for (var l = 0, u = 0, v = 0; l < this.children.length; l++) {
          var p = this.children[l], S = v + p.size;
          if (S > t || p instanceof C) {
            u = t - v;
            break;
          }
          v = S;
        }
        if (u) return this.children[l].domFromPos(u - this.children[l].border, a);
        for (var T; l && !(T = this.children[l - 1]).size && T instanceof nt && T.side >= 0; l--)
          ;
        if (a <= 0) {
          for (var R, z = !0; R = l ? this.children[l - 1] : null, !(!R || R.dom.parentNode == this.contentDOM); l--, z = !1)
            ;
          return R && a && z && !R.border && !R.domAtom ? R.domFromPos(R.size, a) : {
            node: this.contentDOM,
            offset: R ? Ce(R.dom) + 1 : 0
          };
        } else {
          for (var F, G = !0; F = l < this.children.length ? this.children[l] : null, !(!F || F.dom.parentNode == this.contentDOM); l++, G = !1)
            ;
          return F && G && !F.border && !F.domAtom ? F.domFromPos(0, a) : {
            node: this.contentDOM,
            offset: F ? Ce(F.dom) : this.contentDOM.childNodes.length
          };
        }
      }
    }, {
      key: "parseRange",
      value: function(t, a) {
        var l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
        if (this.children.length == 0) return {
          node: this.contentDOM,
          from: t,
          to: a,
          fromOffset: 0,
          toOffset: this.contentDOM.childNodes.length
        };
        for (var u = -1, v = -1, p = l, S = 0; ; S++) {
          var T = this.children[S], R = p + T.size;
          if (u == -1 && t <= R) {
            var z = p + T.border;
            if (t >= z && a <= R - T.border && T.node && T.contentDOM && this.contentDOM.contains(T.contentDOM)) return T.parseRange(t, a, z);
            t = p;
            for (var F = S; F > 0; F--) {
              var G = this.children[F - 1];
              if (G.size && G.dom.parentNode == this.contentDOM && !G.emptyChildAt(1)) {
                u = Ce(G.dom) + 1;
                break;
              }
              t -= G.size;
            }
            u == -1 && (u = 0);
          }
          if (u > -1 && (R > a || S == this.children.length - 1)) {
            a = R;
            for (var ae = S + 1; ae < this.children.length; ae++) {
              var Se = this.children[ae];
              if (Se.size && Se.dom.parentNode == this.contentDOM && !Se.emptyChildAt(-1)) {
                v = Ce(Se.dom);
                break;
              }
              a += Se.size;
            }
            v == -1 && (v = this.contentDOM.childNodes.length);
            break;
          }
          p = R;
        }
        return {
          node: this.contentDOM,
          from: t,
          to: a,
          fromOffset: u,
          toOffset: v
        };
      }
    }, {
      key: "emptyChildAt",
      value: function(t) {
        if (this.border || !this.contentDOM || !this.children.length) return !1;
        var a = this.children[t < 0 ? 0 : this.children.length - 1];
        return a.size == 0 || a.emptyChildAt(t);
      }
    }, {
      key: "domAfterPos",
      value: function(t) {
        var a = this.domFromPos(t, 0), l = a.node, u = a.offset;
        if (l.nodeType != 1 || u == l.childNodes.length) throw new RangeError("No node after pos " + t);
        return l.childNodes[u];
      }
    }, {
      key: "setSelection",
      value: function(t, a, l) {
        for (var u = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, v = Math.min(t, a), p = Math.max(t, a), S = 0, T = 0; S < this.children.length; S++) {
          var R = this.children[S], z = T + R.size;
          if (v > T && p < z) return R.setSelection(t - T - R.border, a - T - R.border, l, u);
          T = z;
        }
        var F = this.domFromPos(t, t ? -1 : 1), G = a == t ? F : this.domFromPos(a, a ? -1 : 1), ae = l.root.getSelection(), Se = l.domSelectionRange(), Me = !1;
        if ((Ye || ft) && t == a) {
          var de = F, st = de.node, tt = de.offset;
          if (st.nodeType == 3) {
            if (Me = !!(tt && st.nodeValue[tt - 1] == `
`), Me && tt == st.nodeValue.length)
              for (var Ue = st, at; Ue; Ue = Ue.parentNode) {
                if (at = Ue.nextSibling) {
                  at.nodeName == "BR" && (F = G = {
                    node: at.parentNode,
                    offset: Ce(at) + 1
                  });
                  break;
                }
                var gt = Ue.pmViewDesc;
                if (gt && gt.node && gt.node.isBlock) break;
              }
          } else {
            var Ct = st.childNodes[tt - 1];
            Me = Ct && (Ct.nodeName == "BR" || Ct.contentEditable == "false");
          }
        }
        if (Ye && Se.focusNode && Se.focusNode != G.node && Se.focusNode.nodeType == 1) {
          var vr = Se.focusNode.childNodes[Se.focusOffset];
          vr && vr.contentEditable == "false" && (u = !0);
        }
        if (!(!(u || Me && ft) && ct(F.node, F.offset, Se.anchorNode, Se.anchorOffset) && ct(G.node, G.offset, Se.focusNode, Se.focusOffset))) {
          var Pt = !1;
          if ((ae.extend || t == a) && !Me) {
            ae.collapse(F.node, F.offset);
            try {
              t != a && ae.extend(G.node, G.offset), Pt = !0;
            } catch {
            }
          }
          if (!Pt) {
            if (t > a) {
              var Zt = F;
              F = G, G = Zt;
            }
            var Mt = document.createRange();
            Mt.setEnd(G.node, G.offset), Mt.setStart(F.node, F.offset), ae.removeAllRanges(), ae.addRange(Mt);
          }
        }
      }
    }, {
      key: "ignoreMutation",
      value: function(t) {
        return !this.contentDOM && t.type != "selection";
      }
    }, {
      key: "contentLost",
      get: function() {
        return this.contentDOM && this.contentDOM != this.dom && !this.dom.contains(this.contentDOM);
      }
    }, {
      key: "markDirty",
      value: function(t, a) {
        for (var l = 0, u = 0; u < this.children.length; u++) {
          var v = this.children[u], p = l + v.size;
          if (l == p ? t <= p && a >= l : t < p && a > l) {
            var S = l + v.border, T = p - v.border;
            if (t >= S && a <= T) {
              this.dirty = t == l || a == p ? Oe : ge, t == S && a == T && (v.contentLost || v.dom.parentNode != this.contentDOM) ? v.dirty = xe : v.markDirty(t - S, a - S);
              return;
            } else
              v.dirty = v.dom == v.contentDOM && v.dom.parentNode == this.contentDOM && !v.children.length ? Oe : xe;
          }
          l = p;
        }
        this.dirty = Oe;
      }
    }, {
      key: "markParentsDirty",
      value: function() {
        for (var t = 1, a = this.parent; a; a = a.parent, t++) {
          var l = t == 1 ? Oe : ge;
          a.dirty < l && (a.dirty = l);
        }
      }
    }, {
      key: "domAtom",
      get: function() {
        return !1;
      }
    }, {
      key: "ignoreForCoords",
      get: function() {
        return !1;
      }
    }, {
      key: "isText",
      value: function(t) {
        return !1;
      }
    }]), e;
  }(), nt = function(e) {
    te(t, e);
    var i = j(t);
    function t(a, l, u, v) {
      var p;
      V(this, t);
      var S, T = l.type.toDOM;
      if (typeof T == "function" && (T = T(u, function() {
        if (!S) return v;
        if (S.parent) return S.parent.posBeforeChild(S);
      })), !l.type.spec.raw) {
        if (T.nodeType != 1) {
          var R = document.createElement("span");
          R.appendChild(T), T = R;
        }
        T.contentEditable = "false", T.classList.add("ProseMirror-widget");
      }
      return p = i.call(this, a, [], T, null), p.widget = l, p.widget = l, S = Z(p), p;
    }
    return oe(t, [{
      key: "matchesWidget",
      value: function(l) {
        return this.dirty == U && l.type.eq(this.widget.type);
      }
    }, {
      key: "parseRule",
      value: function() {
        return {
          ignore: !0
        };
      }
    }, {
      key: "stopEvent",
      value: function(l) {
        var u = this.widget.spec.stopEvent;
        return u ? u(l) : !1;
      }
    }, {
      key: "ignoreMutation",
      value: function(l) {
        return l.type != "selection" || this.widget.spec.ignoreSelection;
      }
    }, {
      key: "destroy",
      value: function() {
        this.widget.type.destroy(this.dom), Je(ne(t.prototype), "destroy", this).call(this);
      }
    }, {
      key: "domAtom",
      get: function() {
        return !0;
      }
    }, {
      key: "side",
      get: function() {
        return this.widget.type.side;
      }
    }]), t;
  }(Ge), k = function(e) {
    te(t, e);
    var i = j(t);
    function t(a, l, u, v) {
      var p;
      return V(this, t), p = i.call(this, a, [], l, null), p.textDOM = u, p.text = v, p;
    }
    return oe(t, [{
      key: "size",
      get: function() {
        return this.text.length;
      }
    }, {
      key: "localPosFromDOM",
      value: function(l, u) {
        return l != this.textDOM ? this.posAtStart + (u ? this.size : 0) : this.posAtStart + u;
      }
    }, {
      key: "domFromPos",
      value: function(l) {
        return {
          node: this.textDOM,
          offset: l
        };
      }
    }, {
      key: "ignoreMutation",
      value: function(l) {
        return l.type === "characterData" && l.target.nodeValue == l.oldValue;
      }
    }]), t;
  }(Ge), h = function(e) {
    te(t, e);
    var i = j(t);
    function t(a, l, u, v, p) {
      var S;
      return V(this, t), S = i.call(this, a, [], u, v), S.mark = l, S.spec = p, S;
    }
    return oe(t, [{
      key: "parseRule",
      value: function() {
        return this.dirty & xe || this.mark.type.spec.reparseInView ? null : {
          mark: this.mark.type.name,
          attrs: this.mark.attrs,
          contentElement: this.contentDOM
        };
      }
    }, {
      key: "matchesMark",
      value: function(l) {
        return this.dirty != xe && this.mark.eq(l);
      }
    }, {
      key: "markDirty",
      value: function(l, u) {
        if (Je(ne(t.prototype), "markDirty", this).call(this, l, u), this.dirty != U) {
          for (var v = this.parent; !v.node; ) v = v.parent;
          v.dirty < this.dirty && (v.dirty = this.dirty), this.dirty = U;
        }
      }
    }, {
      key: "slice",
      value: function(l, u, v) {
        var p = t.create(this.parent, this.mark, !0, v), S = this.children, T = this.size;
        u < T && (S = br(S, u, T, v)), l > 0 && (S = br(S, 0, l, v));
        for (var R = 0; R < S.length; R++) S[R].parent = p;
        return p.children = S, p;
      }
    }, {
      key: "ignoreMutation",
      value: function(l) {
        return this.spec.ignoreMutation ? this.spec.ignoreMutation(l) : Je(ne(t.prototype), "ignoreMutation", this).call(this, l);
      }
    }, {
      key: "destroy",
      value: function() {
        this.spec.destroy && this.spec.destroy(), Je(ne(t.prototype), "destroy", this).call(this);
      }
    }], [{
      key: "create",
      value: function(l, u, v, p) {
        var S = p.nodeViews[u.type.name], T = S && S(u, p, v);
        return (!T || !T.dom) && (T = he.DOMSerializer.renderSpec(document, u.type.spec.toDOM(u, v), null, u.attrs)), new t(l, u, T.dom, T.contentDOM || T.dom, T);
      }
    }]), t;
  }(Ge), o = function(e) {
    te(t, e);
    var i = j(t);
    function t(a, l, u, v, p, S, T, R, z) {
      var F;
      return V(this, t), F = i.call(this, a, [], p, S), F.node = l, F.outerDeco = u, F.innerDeco = v, F.nodeDOM = T, F;
    }
    return oe(t, [{
      key: "parseRule",
      value: function() {
        var l = this;
        if (this.node.type.spec.reparseInView) return null;
        var u = {
          node: this.node.type.name,
          attrs: this.node.attrs
        };
        if (this.node.type.whitespace == "pre" && (u.preserveWhitespace = "full"), !this.contentDOM)
          u.getContent = function() {
            return l.node.content;
          };
        else if (!this.contentLost)
          u.contentElement = this.contentDOM;
        else {
          for (var v = this.children.length - 1; v >= 0; v--) {
            var p = this.children[v];
            if (this.dom.contains(p.dom.parentNode)) {
              u.contentElement = p.dom.parentNode;
              break;
            }
          }
          u.contentElement || (u.getContent = function() {
            return he.Fragment.empty;
          });
        }
        return u;
      }
    }, {
      key: "matchesNode",
      value: function(l, u, v) {
        return this.dirty == U && l.eq(this.node) && ot(u, this.outerDeco) && v.eq(this.innerDeco);
      }
    }, {
      key: "size",
      get: function() {
        return this.node.nodeSize;
      }
    }, {
      key: "border",
      get: function() {
        return this.node.isLeaf ? 0 : 1;
      }
    }, {
      key: "updateChildren",
      value: function(l, u) {
        var v = this, p = this.node.inlineContent, S = u, T = l.composing ? this.localCompositionInfo(l, u) : null, R = T && T.pos > -1 ? T : null, z = T && T.pos < 0, F = new nr(this, R && R.node, l);
        Dn(this.node, this.innerDeco, function(G, ae, Se) {
          G.spec.marks ? F.syncToMarks(G.spec.marks, p, l) : G.type.side >= 0 && !Se && F.syncToMarks(ae == v.node.childCount ? he.Mark.none : v.node.child(ae).marks, p, l), F.placeWidget(G, l, S);
        }, function(G, ae, Se, Me) {
          F.syncToMarks(G.marks, p, l);
          var de;
          F.findNodeMatch(G, ae, Se, Me) || z && l.state.selection.from > S && l.state.selection.to < S + G.nodeSize && (de = F.findIndexWithChild(T.node)) > -1 && F.updateNodeAt(G, ae, Se, de, l) || F.updateNextNode(G, ae, Se, l, Me, S) || F.addNode(G, ae, Se, l, S), S += G.nodeSize;
        }), F.syncToMarks([], p, l), this.node.isTextblock && F.addTextblockHacks(), F.destroyRest(), (F.changed || this.dirty == Oe) && (R && this.protectLocalComposition(l, R), M(this.contentDOM, this.children, l), $t && hn(this.dom));
      }
    }, {
      key: "localCompositionInfo",
      value: function(l, u) {
        var v = l.state.selection, p = v.from, S = v.to;
        if (!(l.state.selection instanceof X.TextSelection) || p < u || S > u + this.node.content.size) return null;
        var T = l.input.compositionNode;
        if (!T || !this.dom.contains(T.parentNode)) return null;
        if (this.node.inlineContent) {
          var R = T.nodeValue, z = Wr(this.node.content, R, p - u, S - u);
          return z < 0 ? null : {
            node: T,
            pos: z,
            text: R
          };
        } else
          return {
            node: T,
            pos: -1,
            text: ""
          };
      }
    }, {
      key: "protectLocalComposition",
      value: function(l, u) {
        var v = u.node, p = u.pos, S = u.text;
        if (!this.getDesc(v)) {
          for (var T = v; T.parentNode != this.contentDOM; T = T.parentNode) {
            for (; T.previousSibling; ) T.parentNode.removeChild(T.previousSibling);
            for (; T.nextSibling; ) T.parentNode.removeChild(T.nextSibling);
            T.pmViewDesc && (T.pmViewDesc = void 0);
          }
          var R = new k(this, T, v, S);
          l.input.compositionNodes.push(R), this.children = br(this.children, p, p + S.length, l, R);
        }
      }
    }, {
      key: "update",
      value: function(l, u, v, p) {
        return this.dirty == xe || !l.sameMarkup(this.node) ? !1 : (this.updateInner(l, u, v, p), !0);
      }
    }, {
      key: "updateInner",
      value: function(l, u, v, p) {
        this.updateOuterDeco(u), this.node = l, this.innerDeco = v, this.contentDOM && this.updateChildren(p, this.posAtStart), this.dirty = U;
      }
    }, {
      key: "updateOuterDeco",
      value: function(l) {
        if (!ot(l, this.outerDeco)) {
          var u = this.nodeDOM.nodeType != 1, v = this.dom;
          this.dom = pe(this.dom, this.nodeDOM, ve(this.outerDeco, this.node, u), ve(l, this.node, u)), this.dom != v && (v.pmViewDesc = void 0, this.dom.pmViewDesc = this), this.outerDeco = l;
        }
      }
    }, {
      key: "selectNode",
      value: function() {
        this.nodeDOM.nodeType == 1 && this.nodeDOM.classList.add("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && (this.dom.draggable = !0);
      }
    }, {
      key: "deselectNode",
      value: function() {
        this.nodeDOM.nodeType == 1 && (this.nodeDOM.classList.remove("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && this.dom.removeAttribute("draggable"));
      }
    }, {
      key: "domAtom",
      get: function() {
        return this.node.isAtom;
      }
    }], [{
      key: "create",
      value: function(l, u, v, p, S, T) {
        var R = S.nodeViews[u.type.name], z, F = R && R(u, S, function() {
          if (!z) return T;
          if (z.parent) return z.parent.posBeforeChild(z);
        }, v, p), G = F && F.dom, ae = F && F.contentDOM;
        if (u.isText) {
          if (!G) G = document.createTextNode(u.text);
          else if (G.nodeType != 3) throw new RangeError("Text must be rendered as a DOM text node");
        } else if (!G) {
          var Se = he.DOMSerializer.renderSpec(document, u.type.spec.toDOM(u), null, u.attrs);
          G = Se.dom, ae = Se.contentDOM;
        }
        !ae && !u.isText && G.nodeName != "BR" && (G.hasAttribute("contenteditable") || (G.contentEditable = "false"), u.type.spec.draggable && (G.draggable = !0));
        var Me = G;
        return G = $e(G, v, u), F ? z = new x(l, u, v, p, G, ae || null, Me, F, S, T + 1) : u.isText ? new d(l, u, v, p, G, Me, S) : new t(l, u, v, p, G, ae || null, Me);
      }
    }]), t;
  }(Ge);
  function c(e, i, t, a, l) {
    $e(a, i, e);
    var u = new o(void 0, e, i, t, a, a, a, l, 0);
    return u.contentDOM && u.updateChildren(l, 0), u;
  }
  var d = function(e) {
    te(t, e);
    var i = j(t);
    function t(a, l, u, v, p, S, T) {
      return V(this, t), i.call(this, a, l, u, v, p, null, S, T, 0);
    }
    return oe(t, [{
      key: "parseRule",
      value: function() {
        for (var l = this.nodeDOM.parentNode; l && l != this.dom && !l.pmIsDeco; ) l = l.parentNode;
        return {
          skip: l || !0
        };
      }
    }, {
      key: "update",
      value: function(l, u, v, p) {
        return this.dirty == xe || this.dirty != U && !this.inParent() || !l.sameMarkup(this.node) ? !1 : (this.updateOuterDeco(u), (this.dirty != U || l.text != this.node.text) && l.text != this.nodeDOM.nodeValue && (this.nodeDOM.nodeValue = l.text, p.trackWrites == this.nodeDOM && (p.trackWrites = null)), this.node = l, this.dirty = U, !0);
      }
    }, {
      key: "inParent",
      value: function() {
        for (var l = this.parent.contentDOM, u = this.nodeDOM; u; u = u.parentNode) if (u == l) return !0;
        return !1;
      }
    }, {
      key: "domFromPos",
      value: function(l) {
        return {
          node: this.nodeDOM,
          offset: l
        };
      }
    }, {
      key: "localPosFromDOM",
      value: function(l, u, v) {
        return l == this.nodeDOM ? this.posAtStart + Math.min(u, this.node.text.length) : Je(ne(t.prototype), "localPosFromDOM", this).call(this, l, u, v);
      }
    }, {
      key: "ignoreMutation",
      value: function(l) {
        return l.type != "characterData" && l.type != "selection";
      }
    }, {
      key: "slice",
      value: function(l, u, v) {
        var p = this.node.cut(l, u), S = document.createTextNode(p.text);
        return new t(this.parent, p, this.outerDeco, this.innerDeco, S, S, v);
      }
    }, {
      key: "markDirty",
      value: function(l, u) {
        Je(ne(t.prototype), "markDirty", this).call(this, l, u), this.dom != this.nodeDOM && (l == 0 || u == this.nodeDOM.nodeValue.length) && (this.dirty = xe);
      }
    }, {
      key: "domAtom",
      get: function() {
        return !1;
      }
    }, {
      key: "isText",
      value: function(l) {
        return this.node.text == l;
      }
    }]), t;
  }(o), C = function(e) {
    te(t, e);
    var i = j(t);
    function t() {
      return V(this, t), i.apply(this, arguments);
    }
    return oe(t, [{
      key: "parseRule",
      value: function() {
        return {
          ignore: !0
        };
      }
    }, {
      key: "matchesHack",
      value: function(l) {
        return this.dirty == U && this.dom.nodeName == l;
      }
    }, {
      key: "domAtom",
      get: function() {
        return !0;
      }
    }, {
      key: "ignoreForCoords",
      get: function() {
        return this.dom.nodeName == "IMG";
      }
    }]), t;
  }(Ge), x = function(e) {
    te(t, e);
    var i = j(t);
    function t(a, l, u, v, p, S, T, R, z, F) {
      var G;
      return V(this, t), G = i.call(this, a, l, u, v, p, S, T, z, F), G.spec = R, G;
    }
    return oe(t, [{
      key: "update",
      value: function(l, u, v, p) {
        if (this.dirty == xe) return !1;
        if (this.spec.update && (this.node.type == l.type || this.spec.multiType)) {
          var S = this.spec.update(l, u, v);
          return S && this.updateInner(l, u, v, p), S;
        } else return !this.contentDOM && !l.isLeaf ? !1 : Je(ne(t.prototype), "update", this).call(this, l, u, v, p);
      }
    }, {
      key: "selectNode",
      value: function() {
        this.spec.selectNode ? this.spec.selectNode() : Je(ne(t.prototype), "selectNode", this).call(this);
      }
    }, {
      key: "deselectNode",
      value: function() {
        this.spec.deselectNode ? this.spec.deselectNode() : Je(ne(t.prototype), "deselectNode", this).call(this);
      }
    }, {
      key: "setSelection",
      value: function(l, u, v, p) {
        this.spec.setSelection ? this.spec.setSelection(l, u, v.root) : Je(ne(t.prototype), "setSelection", this).call(this, l, u, v, p);
      }
    }, {
      key: "destroy",
      value: function() {
        this.spec.destroy && this.spec.destroy(), Je(ne(t.prototype), "destroy", this).call(this);
      }
    }, {
      key: "stopEvent",
      value: function(l) {
        return this.spec.stopEvent ? this.spec.stopEvent(l) : !1;
      }
    }, {
      key: "ignoreMutation",
      value: function(l) {
        return this.spec.ignoreMutation ? this.spec.ignoreMutation(l) : Je(ne(t.prototype), "ignoreMutation", this).call(this, l);
      }
    }]), t;
  }(o);
  function M(e, i, t) {
    for (var a = e.firstChild, l = !1, u = 0; u < i.length; u++) {
      var v = i[u], p = v.dom;
      if (p.parentNode == e) {
        for (; p != a; )
          a = bt(a), l = !0;
        a = a.nextSibling;
      } else
        l = !0, e.insertBefore(p, a);
      if (v instanceof h) {
        var S = a ? a.previousSibling : e.lastChild;
        M(v.contentDOM, v.children, t), a = S ? S.nextSibling : e.firstChild;
      }
    }
    for (; a; )
      a = bt(a), l = !0;
    l && t.trackWrites == e && (t.trackWrites = null);
  }
  var q = function(i) {
    i && (this.nodeName = i);
  };
  q.prototype = /* @__PURE__ */ Object.create(null);
  var W = [new q()];
  function ve(e, i, t) {
    if (e.length == 0) return W;
    for (var a = t ? W[0] : new q(), l = [a], u = 0; u < e.length; u++) {
      var v = e[u].type.attrs;
      if (v) {
        v.nodeName && l.push(a = new q(v.nodeName));
        for (var p in v) {
          var S = v[p];
          S != null && (t && l.length == 1 && l.push(a = new q(i.isInline ? "span" : "div")), p == "class" ? a.class = (a.class ? a.class + " " : "") + S : p == "style" ? a.style = (a.style ? a.style + ";" : "") + S : p != "nodeName" && (a[p] = S));
        }
      }
    }
    return l;
  }
  function pe(e, i, t, a) {
    if (t == W && a == W) return i;
    for (var l = i, u = 0; u < a.length; u++) {
      var v = a[u], p = t[u];
      if (u) {
        var S = void 0;
        p && p.nodeName == v.nodeName && l != e && (S = l.parentNode) && S.nodeName.toLowerCase() == v.nodeName || (S = document.createElement(v.nodeName), S.pmIsDeco = !0, S.appendChild(l), p = W[0]), l = S;
      }
      Ae(l, p || W[0], v);
    }
    return l;
  }
  function Ae(e, i, t) {
    for (var a in i) a != "class" && a != "style" && a != "nodeName" && !(a in t) && e.removeAttribute(a);
    for (var l in t) l != "class" && l != "style" && l != "nodeName" && t[l] != i[l] && e.setAttribute(l, t[l]);
    if (i.class != t.class) {
      for (var u = i.class ? i.class.split(" ").filter(Boolean) : [], v = t.class ? t.class.split(" ").filter(Boolean) : [], p = 0; p < u.length; p++) v.indexOf(u[p]) == -1 && e.classList.remove(u[p]);
      for (var S = 0; S < v.length; S++) u.indexOf(v[S]) == -1 && e.classList.add(v[S]);
      e.classList.length == 0 && e.removeAttribute("class");
    }
    if (i.style != t.style) {
      if (i.style)
        for (var T = /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g, R; R = T.exec(i.style); ) e.style.removeProperty(R[1]);
      t.style && (e.style.cssText += t.style);
    }
  }
  function $e(e, i, t) {
    return pe(e, e, W, ve(i, t, e.nodeType != 1));
  }
  function ot(e, i) {
    if (e.length != i.length) return !1;
    for (var t = 0; t < e.length; t++) if (!e[t].type.eq(i[t].type)) return !1;
    return !0;
  }
  function bt(e) {
    var i = e.nextSibling;
    return e.parentNode.removeChild(e), i;
  }
  var nr = function() {
    function e(i, t, a) {
      V(this, e), this.lock = t, this.view = a, this.index = 0, this.stack = [], this.changed = !1, this.top = i, this.preMatch = Rr(i.node.content, i);
    }
    return oe(e, [{
      key: "destroyBetween",
      value: function(t, a) {
        if (t != a) {
          for (var l = t; l < a; l++) this.top.children[l].destroy();
          this.top.children.splice(t, a - t), this.changed = !0;
        }
      }
    }, {
      key: "destroyRest",
      value: function() {
        this.destroyBetween(this.index, this.top.children.length);
      }
    }, {
      key: "syncToMarks",
      value: function(t, a, l) {
        for (var u = 0, v = this.stack.length >> 1, p = Math.min(v, t.length); u < p && (u == v - 1 ? this.top : this.stack[u + 1 << 1]).matchesMark(t[u]) && t[u].type.spec.spanning !== !1; ) u++;
        for (; u < v; )
          this.destroyRest(), this.top.dirty = U, this.index = this.stack.pop(), this.top = this.stack.pop(), v--;
        for (; v < t.length; ) {
          this.stack.push(this.top, this.index + 1);
          for (var S = -1, T = this.index; T < Math.min(this.index + 3, this.top.children.length); T++) {
            var R = this.top.children[T];
            if (R.matchesMark(t[v]) && !this.isLocked(R.dom)) {
              S = T;
              break;
            }
          }
          if (S > -1)
            S > this.index && (this.changed = !0, this.destroyBetween(this.index, S)), this.top = this.top.children[this.index];
          else {
            var z = h.create(this.top, t[v], a, l);
            this.top.children.splice(this.index, 0, z), this.top = z, this.changed = !0;
          }
          this.index = 0, v++;
        }
      }
    }, {
      key: "findNodeMatch",
      value: function(t, a, l, u) {
        var v = -1, p;
        if (u >= this.preMatch.index && (p = this.preMatch.matches[u - this.preMatch.index]).parent == this.top && p.matchesNode(t, a, l))
          v = this.top.children.indexOf(p, this.index);
        else
          for (var S = this.index, T = Math.min(this.top.children.length, S + 5); S < T; S++) {
            var R = this.top.children[S];
            if (R.matchesNode(t, a, l) && !this.preMatch.matched.has(R)) {
              v = S;
              break;
            }
          }
        return v < 0 ? !1 : (this.destroyBetween(this.index, v), this.index++, !0);
      }
    }, {
      key: "updateNodeAt",
      value: function(t, a, l, u, v) {
        var p = this.top.children[u];
        return p.dirty == xe && p.dom == p.contentDOM && (p.dirty = Oe), p.update(t, a, l, v) ? (this.destroyBetween(this.index, u), this.index++, !0) : !1;
      }
    }, {
      key: "findIndexWithChild",
      value: function(t) {
        for (; ; ) {
          var a = t.parentNode;
          if (!a) return -1;
          if (a == this.top.contentDOM) {
            var l = t.pmViewDesc;
            if (l) {
              for (var u = this.index; u < this.top.children.length; u++)
                if (this.top.children[u] == l) return u;
            }
            return -1;
          }
          t = a;
        }
      }
    }, {
      key: "updateNextNode",
      value: function(t, a, l, u, v, p) {
        for (var S = this.index; S < this.top.children.length; S++) {
          var T = this.top.children[S];
          if (T instanceof o) {
            var R = this.preMatch.matched.get(T);
            if (R != null && R != v) return !1;
            var z = T.dom, F = void 0, G = this.isLocked(z) && !(t.isText && T.node && T.node.isText && T.nodeDOM.nodeValue == t.text && T.dirty != xe && ot(a, T.outerDeco));
            if (!G && T.update(t, a, l, u))
              return this.destroyBetween(this.index, S), T.dom != z && (this.changed = !0), this.index++, !0;
            if (!G && (F = this.recreateWrapper(T, t, a, l, u, p)))
              return this.destroyBetween(this.index, S), this.top.children[this.index] = F, F.contentDOM && (F.dirty = Oe, F.updateChildren(u, p + 1), F.dirty = U), this.changed = !0, this.index++, !0;
            break;
          }
        }
        return !1;
      }
    }, {
      key: "recreateWrapper",
      value: function(t, a, l, u, v, p) {
        if (t.dirty || a.isAtom || !t.children.length || !t.node.content.eq(a.content) || !ot(l, t.outerDeco) || !u.eq(t.innerDeco)) return null;
        var S = o.create(this.top, a, l, u, v, p);
        if (S.contentDOM) {
          S.children = t.children, t.children = [];
          var T = Pe(S.children), R;
          try {
            for (T.s(); !(R = T.n()).done; ) {
              var z = R.value;
              z.parent = S;
            }
          } catch (F) {
            T.e(F);
          } finally {
            T.f();
          }
        }
        return t.destroy(), S;
      }
    }, {
      key: "addNode",
      value: function(t, a, l, u, v) {
        var p = o.create(this.top, t, a, l, u, v);
        p.contentDOM && p.updateChildren(u, v + 1), this.top.children.splice(this.index++, 0, p), this.changed = !0;
      }
    }, {
      key: "placeWidget",
      value: function(t, a, l) {
        var u = this.index < this.top.children.length ? this.top.children[this.index] : null;
        if (u && u.matchesWidget(t) && (t == u.widget || !u.widget.type.toDOM.parentNode))
          this.index++;
        else {
          var v = new nt(this.top, t, a, l);
          this.top.children.splice(this.index++, 0, v), this.changed = !0;
        }
      }
    }, {
      key: "addTextblockHacks",
      value: function() {
        for (var t = this.top.children[this.index - 1], a = this.top; t instanceof h; )
          a = t, t = a.children[a.children.length - 1];
        (!t || !(t instanceof d) || /\n$/.test(t.node.text) || this.view.requiresGeckoHackNode && /\s$/.test(t.node.text)) && ((ft || Qe) && t && t.dom.contentEditable == "false" && this.addHackNode("IMG", a), this.addHackNode("BR", this.top));
      }
    }, {
      key: "addHackNode",
      value: function(t, a) {
        if (a == this.top && this.index < a.children.length && a.children[this.index].matchesHack(t))
          this.index++;
        else {
          var l = document.createElement(t);
          t == "IMG" && (l.className = "ProseMirror-separator", l.alt = ""), t == "BR" && (l.className = "ProseMirror-trailingBreak");
          var u = new C(this.top, [], l, null);
          a != this.top ? a.children.push(u) : a.children.splice(this.index++, 0, u), this.changed = !0;
        }
      }
    }, {
      key: "isLocked",
      value: function(t) {
        return this.lock && (t == this.lock || t.nodeType == 1 && t.contains(this.lock.parentNode));
      }
    }]), e;
  }();
  function Rr(e, i) {
    var t = i, a = t.children.length, l = e.childCount, u = /* @__PURE__ */ new Map(), v = [];
    e: for (; l > 0; ) {
      for (var p = void 0; ; )
        if (a) {
          var S = t.children[a - 1];
          if (S instanceof h)
            t = S, a = S.children.length;
          else {
            p = S, a--;
            break;
          }
        } else {
          if (t == i)
            break e;
          a = t.parent.children.indexOf(t), t = t.parent;
        }
      var T = p.node;
      if (T) {
        if (T != e.child(l - 1)) break;
        --l, u.set(p, l), v.push(p);
      }
    }
    return {
      index: l,
      matched: u,
      matches: v.reverse()
    };
  }
  function Pr(e, i) {
    return e.type.side - i.type.side;
  }
  function Dn(e, i, t, a) {
    var l = i.locals(e), u = 0;
    if (l.length == 0) {
      for (var v = 0; v < e.childCount; v++) {
        var p = e.child(v);
        a(p, l, i.forChild(u, p), v), u += p.nodeSize;
      }
      return;
    }
    for (var S = 0, T = [], R = null, z = 0; ; ) {
      for (var F = void 0, G = void 0; S < l.length && l[S].to == u; ) {
        var ae = l[S++];
        ae.widget && (F ? (G || (G = [F])).push(ae) : F = ae);
      }
      if (F)
        if (G) {
          G.sort(Pr);
          for (var Se = 0; Se < G.length; Se++) t(G[Se], z, !!R);
        } else
          t(F, z, !!R);
      var Me = void 0, de = void 0;
      if (R)
        de = -1, Me = R, R = null;
      else if (z < e.childCount)
        de = z, Me = e.child(z++);
      else
        break;
      for (var st = 0; st < T.length; st++) T[st].to <= u && T.splice(st--, 1);
      for (; S < l.length && l[S].from <= u && l[S].to > u; ) T.push(l[S++]);
      var tt = u + Me.nodeSize;
      if (Me.isText) {
        var Ue = tt;
        S < l.length && l[S].from < Ue && (Ue = l[S].from);
        for (var at = 0; at < T.length; at++) T[at].to < Ue && (Ue = T[at].to);
        Ue < tt && (R = Me.cut(Ue - u), Me = Me.cut(0, Ue - u), tt = Ue, de = -1);
      } else
        for (; S < l.length && l[S].to < tt; ) S++;
      var gt = Me.isInline && !Me.isLeaf ? T.filter(function(Ct) {
        return !Ct.inline;
      }) : T.slice();
      a(Me, gt, i.forChild(u, Me), de), u = tt;
    }
  }
  function hn(e) {
    if (e.nodeName == "UL" || e.nodeName == "OL") {
      var i = e.style.cssText;
      e.style.cssText = i + "; list-style: square !important", window.getComputedStyle(e).listStyle, e.style.cssText = i;
    }
  }
  function Wr(e, i, t, a) {
    for (var l = 0, u = 0; l < e.childCount && u <= a; ) {
      var v = e.child(l++), p = u;
      if (u += v.nodeSize, !!v.isText) {
        for (var S = v.text; l < e.childCount; ) {
          var T = e.child(l++);
          if (u += T.nodeSize, !T.isText) break;
          S += T.text;
        }
        if (u >= t) {
          if (u >= a && S.slice(a - i.length - p, a - p) == i) return a - i.length;
          var R = p < a ? S.lastIndexOf(i, a - p - 1) : -1;
          if (R >= 0 && R + i.length + p >= t) return p + R;
          if (t == a && S.length >= a + i.length - p && S.slice(a - p, a - p + i.length) == i) return a;
        }
      }
    }
    return -1;
  }
  function br(e, i, t, a, l) {
    for (var u = [], v = 0, p = 0; v < e.length; v++) {
      var S = e[v], T = p, R = p += S.size;
      T >= t || R <= i ? u.push(S) : (T < i && u.push(S.slice(0, i - T, a)), l && (u.push(l), l = void 0), R > t && u.push(S.slice(t - T, S.size, a)));
    }
    return u;
  }
  function Sr(e) {
    var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, t = e.domSelectionRange(), a = e.state.doc;
    if (!t.focusNode) return null;
    var l = e.docView.nearestDesc(t.focusNode), u = l && l.size == 0, v = e.docView.posFromDOM(t.focusNode, t.focusOffset, 1);
    if (v < 0) return null;
    var p = a.resolve(v), S, T;
    if (kt(t)) {
      for (S = v; l && !l.node; ) l = l.parent;
      var R = l.node;
      if (l && R.isAtom && X.NodeSelection.isSelectable(R) && l.parent && !(R.isInline && We(t.focusNode, t.focusOffset, l.dom))) {
        var z = l.posBefore;
        T = new X.NodeSelection(v == z ? p : a.resolve(z));
      }
    } else {
      if (t instanceof e.dom.ownerDocument.defaultView.Selection && t.rangeCount > 1) {
        for (var F = v, G = v, ae = 0; ae < t.rangeCount; ae++) {
          var Se = t.getRangeAt(ae);
          F = Math.min(F, e.docView.posFromDOM(Se.startContainer, Se.startOffset, 1)), G = Math.max(G, e.docView.posFromDOM(Se.endContainer, Se.endOffset, -1));
        }
        if (F < 0) return null;
        var Me = G == e.state.selection.anchor ? [G, F] : [F, G], de = ye(Me, 2);
        S = de[0], v = de[1], p = a.resolve(v);
      } else
        S = e.docView.posFromDOM(t.anchorNode, t.anchorOffset, 1);
      if (S < 0) return null;
    }
    var st = a.resolve(S);
    if (!T) {
      var tt = i == "pointer" || e.state.selection.head < p.pos && !u ? 1 : -1;
      T = Cr(e, st, p, tt);
    }
    return T;
  }
  function vn(e) {
    return e.editable ? e.hasFocus() : Mn(e) && document.activeElement && document.activeElement.contains(e.dom);
  }
  function ar(e) {
    var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, t = e.state.selection;
    if ($r(e, t), !!vn(e)) {
      if (!i && e.input.mouseDown && e.input.mouseDown.allowDefault && Qe) {
        var a = e.domSelectionRange(), l = e.domObserver.currentSelection;
        if (a.anchorNode && l.anchorNode && ct(a.anchorNode, a.anchorOffset, l.anchorNode, l.anchorOffset)) {
          e.input.mouseDown.delayedSelectionSync = !0, e.domObserver.setCurSelection();
          return;
        }
      }
      if (e.domObserver.disconnectSelection(), e.cursorWrapper)
        wr(e);
      else {
        var u = t.anchor, v = t.head, p, S;
        dn && !(t instanceof X.TextSelection) && (t.$from.parent.inlineContent || (p = rn(e, t.from)), !t.empty && !t.$from.parent.inlineContent && (S = rn(e, t.to))), e.docView.setSelection(u, v, e, i), dn && (p && an(p), S && an(S)), t.visible ? e.dom.classList.remove("ProseMirror-hideselection") : (e.dom.classList.add("ProseMirror-hideselection"), "onselectionchange" in document && pn(e));
      }
      e.domObserver.setCurSelection(), e.domObserver.connectSelection();
    }
  }
  var dn = ft || Qe && xt < 63;
  function rn(e, i) {
    var t = e.docView.domFromPos(i, 0), a = t.node, l = t.offset, u = l < a.childNodes.length ? a.childNodes[l] : null, v = l ? a.childNodes[l - 1] : null;
    if (ft && u && u.contentEditable == "false") return nn(u);
    if ((!u || u.contentEditable == "false") && (!v || v.contentEditable == "false")) {
      if (u) return nn(u);
      if (v) return nn(v);
    }
  }
  function nn(e) {
    return e.contentEditable = "true", ft && e.draggable && (e.draggable = !1, e.wasDraggable = !0), e;
  }
  function an(e) {
    e.contentEditable = "false", e.wasDraggable && (e.draggable = !0, e.wasDraggable = null);
  }
  function pn(e) {
    var i = e.dom.ownerDocument;
    i.removeEventListener("selectionchange", e.input.hideSelectionGuard);
    var t = e.domSelectionRange(), a = t.anchorNode, l = t.anchorOffset;
    i.addEventListener("selectionchange", e.input.hideSelectionGuard = function() {
      (t.anchorNode != a || t.anchorOffset != l) && (i.removeEventListener("selectionchange", e.input.hideSelectionGuard), setTimeout(function() {
        (!vn(e) || e.state.selection.visible) && e.dom.classList.remove("ProseMirror-hideselection");
      }, 20));
    });
  }
  function wr(e) {
    var i = e.domSelection(), t = document.createRange();
    if (i) {
      var a = e.cursorWrapper.dom, l = a.nodeName == "IMG";
      l ? t.setStart(a.parentNode, Ce(a) + 1) : t.setStart(a, 0), t.collapse(!0), i.removeAllRanges(), i.addRange(t), !l && !e.state.selection.visible && re && be <= 11 && (a.disabled = !0, a.disabled = !1);
    }
  }
  function $r(e, i) {
    if (i instanceof X.NodeSelection) {
      var t = e.docView.descAt(i.from);
      t != e.lastSelectedViewDesc && (on(e), t && t.selectNode(), e.lastSelectedViewDesc = t);
    } else
      on(e);
  }
  function on(e) {
    e.lastSelectedViewDesc && (e.lastSelectedViewDesc.parent && e.lastSelectedViewDesc.deselectNode(), e.lastSelectedViewDesc = void 0);
  }
  function Cr(e, i, t, a) {
    return e.someProp("createSelectionBetween", function(l) {
      return l(e, i, t);
    }) || X.TextSelection.between(i, t, a);
  }
  function On(e) {
    return e.editable && !e.hasFocus() ? !1 : Mn(e);
  }
  function Mn(e) {
    var i = e.domSelectionRange();
    if (!i.anchorNode) return !1;
    try {
      return e.dom.contains(i.anchorNode.nodeType == 3 ? i.anchorNode.parentNode : i.anchorNode) && (e.editable || e.dom.contains(i.focusNode.nodeType == 3 ? i.focusNode.parentNode : i.focusNode));
    } catch {
      return !1;
    }
  }
  function Fr(e) {
    var i = e.docView.domFromPos(e.state.selection.anchor, 0), t = e.domSelectionRange();
    return ct(i.node, i.offset, t.anchorNode, t.anchorOffset);
  }
  function Tr(e, i) {
    var t = e.selection, a = t.$anchor, l = t.$head, u = i > 0 ? a.max(l) : a.min(l), v = u.parent.inlineContent ? u.depth ? e.doc.resolve(i > 0 ? u.after() : u.before()) : null : u;
    return v && X.Selection.findFrom(v, i);
  }
  function Ar(e, i) {
    return e.dispatch(e.state.tr.setSelection(i).scrollIntoView()), !0;
  }
  function sn(e, i, t) {
    var a = e.state.selection;
    if (a instanceof X.TextSelection)
      if (t.indexOf("s") > -1) {
        var l = a.$head, u = l.textOffset ? null : i < 0 ? l.nodeBefore : l.nodeAfter;
        if (!u || u.isText || !u.isLeaf) return !1;
        var v = e.state.doc.resolve(l.pos + u.nodeSize * (i < 0 ? -1 : 1));
        return Ar(e, new X.TextSelection(a.$anchor, v));
      } else if (a.empty) {
        if (e.endOfTextblock(i > 0 ? "forward" : "backward")) {
          var p = Tr(e.state, i);
          return p && p instanceof X.NodeSelection ? Ar(e, p) : !1;
        } else if (!(It && t.indexOf("m") > -1)) {
          var S = a.$head, T = S.textOffset ? null : i < 0 ? S.nodeBefore : S.nodeAfter, R;
          if (!T || T.isText) return !1;
          var z = i < 0 ? S.pos - T.nodeSize : S.pos;
          return T.isAtom || (R = e.docView.descAt(z)) && !R.contentDOM ? X.NodeSelection.isSelectable(T) ? Ar(e, new X.NodeSelection(i < 0 ? e.state.doc.resolve(S.pos - T.nodeSize) : S)) : cr ? Ar(e, new X.TextSelection(e.state.doc.resolve(i < 0 ? z : z + T.nodeSize))) : !1 : !1;
        }
      } else return !1;
    else {
      if (a instanceof X.NodeSelection && a.node.isInline)
        return Ar(e, new X.TextSelection(i > 0 ? a.$to : a.$from));
      var F = Tr(e.state, i);
      return F ? Ar(e, F) : !1;
    }
  }
  function Gr(e) {
    return e.nodeType == 3 ? e.nodeValue.length : e.childNodes.length;
  }
  function Br(e, i) {
    var t = e.pmViewDesc;
    return t && t.size == 0 && (i < 0 || e.nextSibling || e.nodeName != "BR");
  }
  function fr(e, i) {
    return i < 0 ? mn(e) : Kn(e);
  }
  function mn(e) {
    var i = e.domSelectionRange(), t = i.focusNode, a = i.focusOffset;
    if (t) {
      var l, u, v = !1;
      for (Ye && t.nodeType == 1 && a < Gr(t) && Br(t.childNodes[a], -1) && (v = !0); ; )
        if (a > 0) {
          if (t.nodeType != 1)
            break;
          var p = t.childNodes[a - 1];
          if (Br(p, -1))
            l = t, u = --a;
          else if (p.nodeType == 3)
            t = p, a = t.nodeValue.length;
          else break;
        } else {
          if (ir(t))
            break;
          for (var S = t.previousSibling; S && Br(S, -1); )
            l = t.parentNode, u = Ce(S), S = S.previousSibling;
          if (S)
            t = S, a = Gr(t);
          else {
            if (t = t.parentNode, t == e.dom) break;
            a = 0;
          }
        }
      v ? ln(e, t, a) : l && ln(e, l, u);
    }
  }
  function Kn(e) {
    var i = e.domSelectionRange(), t = i.focusNode, a = i.focusOffset;
    if (t) {
      for (var l = Gr(t), u, v; ; )
        if (a < l) {
          if (t.nodeType != 1) break;
          var p = t.childNodes[a];
          if (Br(p, 1))
            u = t, v = ++a;
          else break;
        } else {
          if (ir(t))
            break;
          for (var S = t.nextSibling; S && Br(S, 1); )
            u = S.parentNode, v = Ce(S) + 1, S = S.nextSibling;
          if (S)
            t = S, a = 0, l = Gr(t);
          else {
            if (t = t.parentNode, t == e.dom) break;
            a = l = 0;
          }
        }
      u && ln(e, u, v);
    }
  }
  function ir(e) {
    var i = e.pmViewDesc;
    return i && i.node && i.node.isBlock;
  }
  function Rn(e, i) {
    for (; e && i == e.childNodes.length && !mt(e); )
      i = Ce(e) + 1, e = e.parentNode;
    for (; e && i < e.childNodes.length; ) {
      var t = e.childNodes[i];
      if (t.nodeType == 3) return t;
      if (t.nodeType == 1 && t.contentEditable == "false") break;
      e = t, i = 0;
    }
  }
  function Ln(e, i) {
    for (; e && !i && !mt(e); )
      i = Ce(e), e = e.parentNode;
    for (; e && i; ) {
      var t = e.childNodes[i - 1];
      if (t.nodeType == 3) return t;
      if (t.nodeType == 1 && t.contentEditable == "false") break;
      e = t, i = e.childNodes.length;
    }
  }
  function ln(e, i, t) {
    if (i.nodeType != 3) {
      var a, l;
      (l = Rn(i, t)) ? (i = l, t = 0) : (a = Ln(i, t)) && (i = a, t = a.nodeValue.length);
    }
    var u = e.domSelection();
    if (u) {
      if (kt(u)) {
        var v = document.createRange();
        v.setEnd(i, t), v.setStart(i, t), u.removeAllRanges(), u.addRange(v);
      } else u.extend && u.extend(i, t);
      e.domObserver.setCurSelection();
      var p = e.state;
      setTimeout(function() {
        e.state == p && ar(e);
      }, 50);
    }
  }
  function In(e, i) {
    var t = e.state.doc.resolve(i);
    if (!(Qe || Xt) && t.parent.inlineContent) {
      var a = e.coordsAtPos(i);
      if (i > t.start()) {
        var l = e.coordsAtPos(i - 1), u = (l.top + l.bottom) / 2;
        if (u > a.top && u < a.bottom && Math.abs(l.left - a.left) > 1) return l.left < a.left ? "ltr" : "rtl";
      }
      if (i < t.end()) {
        var v = e.coordsAtPos(i + 1), p = (v.top + v.bottom) / 2;
        if (p > a.top && p < a.bottom && Math.abs(v.left - a.left) > 1) return v.left > a.left ? "ltr" : "rtl";
      }
    }
    var S = getComputedStyle(e.dom).direction;
    return S == "rtl" ? "rtl" : "ltr";
  }
  function qr(e, i, t) {
    var a = e.state.selection;
    if (a instanceof X.TextSelection && !a.empty || t.indexOf("s") > -1 || It && t.indexOf("m") > -1) return !1;
    var l = a.$from, u = a.$to;
    if (!l.parent.inlineContent || e.endOfTextblock(i < 0 ? "up" : "down")) {
      var v = Tr(e.state, i);
      if (v && v instanceof X.NodeSelection) return Ar(e, v);
    }
    if (!l.parent.inlineContent) {
      var p = i < 0 ? l : u, S = a instanceof X.AllSelection ? X.Selection.near(p, i) : X.Selection.findFrom(p, i);
      return S ? Ar(e, S) : !1;
    }
    return !1;
  }
  function or(e, i) {
    if (!(e.state.selection instanceof X.TextSelection)) return !0;
    var t = e.state.selection, a = t.$head, l = t.$anchor, u = t.empty;
    if (!a.sameParent(l)) return !0;
    if (!u) return !1;
    if (e.endOfTextblock(i > 0 ? "forward" : "backward")) return !0;
    var v = !a.textOffset && (i < 0 ? a.nodeBefore : a.nodeAfter);
    if (v && !v.isText) {
      var p = e.state.tr;
      return i < 0 ? p.delete(a.pos - v.nodeSize, a.pos) : p.delete(a.pos, a.pos + v.nodeSize), e.dispatch(p), !0;
    }
    return !1;
  }
  function gn(e, i, t) {
    e.domObserver.stop(), i.contentEditable = t, e.domObserver.start();
  }
  function Pn(e) {
    if (!ft || e.state.selection.$head.parentOffset > 0) return !1;
    var i = e.domSelectionRange(), t = i.focusNode, a = i.focusOffset;
    if (t && t.nodeType == 1 && a == 0 && t.firstChild && t.firstChild.contentEditable == "false") {
      var l = t.firstChild;
      gn(e, l, "true"), setTimeout(function() {
        return gn(e, l, "false");
      }, 20);
    }
    return !1;
  }
  function Fn(e) {
    var i = "";
    return e.ctrlKey && (i += "c"), e.metaKey && (i += "m"), e.altKey && (i += "a"), e.shiftKey && (i += "s"), i;
  }
  function Jn(e, i) {
    var t = i.keyCode, a = Fn(i);
    if (t == 8 || It && t == 72 && a == "c")
      return or(e, -1) || fr(e, -1);
    if (t == 46 && !i.shiftKey || It && t == 68 && a == "c")
      return or(e, 1) || fr(e, 1);
    if (t == 13 || t == 27)
      return !0;
    if (t == 37 || It && t == 66 && a == "c") {
      var l = t == 37 ? In(e, e.state.selection.from) == "ltr" ? -1 : 1 : -1;
      return sn(e, l, a) || fr(e, l);
    } else if (t == 39 || It && t == 70 && a == "c") {
      var u = t == 39 ? In(e, e.state.selection.from) == "ltr" ? 1 : -1 : 1;
      return sn(e, u, a) || fr(e, u);
    } else {
      if (t == 38 || It && t == 80 && a == "c")
        return qr(e, -1, a) || fr(e, -1);
      if (t == 40 || It && t == 78 && a == "c")
        return Pn(e) || qr(e, 1, a) || fr(e, 1);
      if (a == (It ? "m" : "c") && (t == 66 || t == 73 || t == 89 || t == 90))
        return !0;
    }
    return !1;
  }
  function _e(e, i) {
    e.someProp("transformCopied", function(de) {
      i = de(i, e);
    });
    for (var t = [], a = i, l = a.content, u = a.openStart, v = a.openEnd; u > 1 && v > 1 && l.childCount == 1 && l.firstChild.childCount == 1; ) {
      u--, v--;
      var p = l.firstChild;
      t.push(p.type.name, p.attrs != p.type.defaultAttrs ? p.attrs : null), l = p.content;
    }
    var S = e.someProp("clipboardSerializer") || he.DOMSerializer.fromSchema(e.state.schema), T = Bn(), R = T.createElement("div");
    R.appendChild(S.serializeFragment(l, {
      document: T
    }));
    for (var z = R.firstChild, F, G = 0; z && z.nodeType == 1 && (F = zr[z.nodeName.toLowerCase()]); ) {
      for (var ae = F.length - 1; ae >= 0; ae--) {
        for (var Se = T.createElement(F[ae]); R.firstChild; ) Se.appendChild(R.firstChild);
        R.appendChild(Se), G++;
      }
      z = R.firstChild;
    }
    z && z.nodeType == 1 && z.setAttribute("data-pm-slice", "".concat(u, " ").concat(v).concat(G ? " -".concat(G) : "", " ").concat(JSON.stringify(t)));
    var Me = e.someProp("clipboardTextSerializer", function(de) {
      return de(i, e);
    }) || i.content.textBetween(0, i.content.size, `

`);
    return {
      dom: R,
      text: Me,
      slice: i
    };
  }
  function _(e, i, t, a, l) {
    var u = l.parent.type.spec.code, v, p;
    if (!t && !i) return null;
    var S = i && (a || u || !t);
    if (S) {
      if (e.someProp("transformPastedText", function(gt) {
        i = gt(i, u || a, e);
      }), u) return i ? new he.Slice(he.Fragment.from(e.state.schema.text(i.replace(/\r\n?/g, `
`))), 0, 0) : he.Slice.empty;
      var T = e.someProp("clipboardTextParser", function(gt) {
        return gt(i, l, a, e);
      });
      if (T)
        p = T;
      else {
        var R = l.marks(), z = e.state.schema, F = he.DOMSerializer.fromSchema(z);
        v = document.createElement("div"), i.split(/(?:\r\n?|\n)+/).forEach(function(gt) {
          var Ct = v.appendChild(document.createElement("p"));
          gt && Ct.appendChild(F.serializeNode(z.text(gt, R)));
        });
      }
    } else
      e.someProp("transformPastedHTML", function(gt) {
        t = gt(t, e);
      }), v = Ya(t), cr && Za(v);
    var G = v && v.querySelector("[data-pm-slice]"), ae = G && /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(G.getAttribute("data-pm-slice") || "");
    if (ae && ae[3]) for (var Se = +ae[3]; Se > 0; Se--) {
      for (var Me = v.firstChild; Me && Me.nodeType != 1; ) Me = Me.nextSibling;
      if (!Me) break;
      v = Me;
    }
    if (!p) {
      var de = e.someProp("clipboardParser") || e.someProp("domParser") || he.DOMParser.fromSchema(e.state.schema);
      p = de.parseSlice(v, {
        preserveWhitespace: !!(S || ae),
        context: l,
        ruleFromNode: function(Ct) {
          return Ct.nodeName == "BR" && !Ct.nextSibling && Ct.parentNode && !ke.test(Ct.parentNode.nodeName) ? {
            ignore: !0
          } : null;
        }
      });
    }
    if (ae)
      p = Qa(sr(p, +ae[1], +ae[2]), ae[4]);
    else if (p = he.Slice.maxOpen(qe(p.content, l), !0), p.openStart || p.openEnd) {
      for (var st = 0, tt = 0, Ue = p.content.firstChild; st < p.openStart && !Ue.type.spec.isolating; st++, Ue = Ue.firstChild)
        ;
      for (var at = p.content.lastChild; tt < p.openEnd && !at.type.spec.isolating; tt++, at = at.lastChild)
        ;
      p = sr(p, st, tt);
    }
    return e.someProp("transformPasted", function(gt) {
      p = gt(p, e);
    }), p;
  }
  var ke = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
  function qe(e, i) {
    if (e.childCount < 2) return e;
    for (var t = function() {
      var v = i.node(l), p = v.contentMatchAt(i.index(l)), S, T = [];
      if (e.forEach(function(R) {
        if (T) {
          var z = p.findWrapping(R.type), F;
          if (!z) return T = null;
          if (F = T.length && S.length && Dt(z, S, R, T[T.length - 1], 0))
            T[T.length - 1] = F;
          else {
            T.length && (T[T.length - 1] = Ot(T[T.length - 1], S.length));
            var G = vt(R, z);
            T.push(G), p = p.matchType(G.type), S = z;
          }
        }
      }), T) return {
        v: he.Fragment.from(T)
      };
    }, a, l = i.depth; l >= 0; l--)
      if (a = t(), a) return a.v;
    return e;
  }
  function vt(e, i) {
    for (var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, a = i.length - 1; a >= t; a--) e = i[a].create(null, he.Fragment.from(e));
    return e;
  }
  function Dt(e, i, t, a, l) {
    if (l < e.length && l < i.length && e[l] == i[l]) {
      var u = Dt(e, i, t, a.lastChild, l + 1);
      if (u) return a.copy(a.content.replaceChild(a.childCount - 1, u));
      var v = a.contentMatchAt(a.childCount);
      if (v.matchType(l == e.length - 1 ? t.type : e[l + 1])) return a.copy(a.content.append(he.Fragment.from(vt(t, e, l + 1))));
    }
  }
  function Ot(e, i) {
    if (i == 0) return e;
    var t = e.content.replaceChild(e.childCount - 1, Ot(e.lastChild, i - 1)), a = e.contentMatchAt(e.childCount).fillBefore(he.Fragment.empty, !0);
    return e.copy(t.append(a));
  }
  function Et(e, i, t, a, l, u) {
    var v = i < 0 ? e.firstChild : e.lastChild, p = v.content;
    return e.childCount > 1 && (u = 0), l < a - 1 && (p = Et(p, i, t, a, l + 1, u)), l >= t && (p = i < 0 ? v.contentMatchAt(0).fillBefore(p, u <= l).append(p) : p.append(v.contentMatchAt(v.childCount).fillBefore(he.Fragment.empty, !0))), e.replaceChild(i < 0 ? 0 : e.childCount - 1, v.copy(p));
  }
  function sr(e, i, t) {
    return i < e.openStart && (e = new he.Slice(Et(e.content, -1, i, e.openStart, 0, e.openEnd), i, e.openEnd)), t < e.openEnd && (e = new he.Slice(Et(e.content, 1, t, e.openEnd, 0, 0), e.openStart, t)), e;
  }
  var zr = {
    thead: ["table"],
    tbody: ["table"],
    tfoot: ["table"],
    caption: ["table"],
    colgroup: ["table"],
    col: ["table", "colgroup"],
    tr: ["table", "tbody"],
    td: ["table", "tbody", "tr"],
    th: ["table", "tbody", "tr"]
  }, yn = null;
  function Bn() {
    return yn || (yn = document.implementation.createHTMLDocument("title"));
  }
  var qn = null;
  function Ja(e) {
    var i = window.trustedTypes;
    return i ? (qn || (qn = i.createPolicy("ProseMirrorClipboard", {
      createHTML: function(a) {
        return a;
      }
    })), qn.createHTML(e)) : e;
  }
  function Ya(e) {
    var i = /^(\s*<meta [^>]*>)*/.exec(e);
    i && (e = e.slice(i[0].length));
    var t = Bn().createElement("div"), a = /<([a-z][^>\s]+)/i.exec(e), l;
    if ((l = a && zr[a[1].toLowerCase()]) && (e = l.map(function(v) {
      return "<" + v + ">";
    }).join("") + e + l.map(function(v) {
      return "</" + v + ">";
    }).reverse().join("")), t.innerHTML = Ja(e), l) for (var u = 0; u < l.length; u++) t = t.querySelector(l[u]) || t;
    return t;
  }
  function Za(e) {
    for (var i = e.querySelectorAll(Qe ? "span:not([class]):not([style])" : "span.Apple-converted-space"), t = 0; t < i.length; t++) {
      var a = i[t];
      a.childNodes.length == 1 && a.textContent == " " && a.parentNode && a.parentNode.replaceChild(e.ownerDocument.createTextNode(" "), a);
    }
  }
  function Qa(e, i) {
    if (!e.size) return e;
    var t = e.content.firstChild.type.schema, a;
    try {
      a = JSON.parse(i);
    } catch {
      return e;
    }
    for (var l = e.content, u = e.openStart, v = e.openEnd, p = a.length - 2; p >= 0; p -= 2) {
      var S = t.nodes[a[p]];
      if (!S || S.hasRequiredAttrs()) break;
      l = he.Fragment.from(S.create(a[p + 1], l)), u++, v++;
    }
    return new he.Slice(l, u, v);
  }
  var Kt = {}, Jt = {}, Xa = {
    touchstart: !0,
    touchmove: !0
  }, ei = oe(function e() {
    V(this, e), this.shiftKey = !1, this.mouseDown = null, this.lastKeyCode = null, this.lastKeyCodeTime = 0, this.lastClick = {
      time: 0,
      x: 0,
      y: 0,
      type: ""
    }, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastIOSEnter = 0, this.lastIOSEnterFallbackTimeout = -1, this.lastFocus = 0, this.lastTouch = 0, this.lastChromeDelete = 0, this.composing = !1, this.compositionNode = null, this.composingTimeout = -1, this.compositionNodes = [], this.compositionEndedAt = -2e8, this.compositionID = 1, this.compositionPendingChanges = 0, this.domChangeCount = 0, this.eventHandlers = /* @__PURE__ */ Object.create(null), this.hideSelectionGuard = null;
  });
  function ti(e) {
    var i = function() {
      var l = Kt[t];
      e.dom.addEventListener(t, e.input.eventHandlers[t] = function(u) {
        ni(e, u) && !Zn(e, u) && (e.editable || !(u.type in Jt)) && l(e, u);
      }, Xa[t] ? {
        passive: !0
      } : void 0);
    };
    for (var t in Kt)
      i();
    ft && e.dom.addEventListener("input", function() {
      return null;
    }), Yn(e);
  }
  function _r(e, i) {
    e.input.lastSelectionOrigin = i, e.input.lastSelectionTime = Date.now();
  }
  function ri(e) {
    e.domObserver.stop();
    for (var i in e.input.eventHandlers) e.dom.removeEventListener(i, e.input.eventHandlers[i]);
    clearTimeout(e.input.composingTimeout), clearTimeout(e.input.lastIOSEnterFallbackTimeout);
  }
  function Yn(e) {
    e.someProp("handleDOMEvents", function(i) {
      for (var t in i) e.input.eventHandlers[t] || e.dom.addEventListener(t, e.input.eventHandlers[t] = function(a) {
        return Zn(e, a);
      });
    });
  }
  function Zn(e, i) {
    return e.someProp("handleDOMEvents", function(t) {
      var a = t[i.type];
      return a ? a(e, i) || i.defaultPrevented : !1;
    });
  }
  function ni(e, i) {
    if (!i.bubbles) return !0;
    if (i.defaultPrevented) return !1;
    for (var t = i.target; t != e.dom; t = t.parentNode) if (!t || t.nodeType == 11 || t.pmViewDesc && t.pmViewDesc.stopEvent(i)) return !1;
    return !0;
  }
  function ai(e, i) {
    !Zn(e, i) && Kt[i.type] && (e.editable || !(i.type in Jt)) && Kt[i.type](e, i);
  }
  Jt.keydown = function(e, i) {
    var t = i;
    if (e.input.shiftKey = t.keyCode == 16 || t.shiftKey, !la(e, t) && (e.input.lastKeyCode = t.keyCode, e.input.lastKeyCodeTime = Date.now(), !(St && Qe && t.keyCode == 13)))
      if (t.keyCode != 229 && e.domObserver.forceFlush(), $t && t.keyCode == 13 && !t.ctrlKey && !t.altKey && !t.metaKey) {
        var a = Date.now();
        e.input.lastIOSEnter = a, e.input.lastIOSEnterFallbackTimeout = setTimeout(function() {
          e.input.lastIOSEnter == a && (e.someProp("handleKeyDown", function(l) {
            return l(e, dt(13, "Enter"));
          }), e.input.lastIOSEnter = 0);
        }, 200);
      } else e.someProp("handleKeyDown", function(l) {
        return l(e, t);
      }) || Jn(e, t) ? t.preventDefault() : _r(e, "key");
  }, Jt.keyup = function(e, i) {
    i.keyCode == 16 && (e.input.shiftKey = !1);
  }, Jt.keypress = function(e, i) {
    var t = i;
    if (!(la(e, t) || !t.charCode || t.ctrlKey && !t.altKey || It && t.metaKey)) {
      if (e.someProp("handleKeyPress", function(u) {
        return u(e, t);
      })) {
        t.preventDefault();
        return;
      }
      var a = e.state.selection;
      if (!(a instanceof X.TextSelection) || !a.$from.sameParent(a.$to)) {
        var l = String.fromCharCode(t.charCode);
        !/[\r\n]/.test(l) && !e.someProp("handleTextInput", function(u) {
          return u(e, a.$from.pos, a.$to.pos, l);
        }) && e.dispatch(e.state.tr.insertText(l).scrollIntoView()), t.preventDefault();
      }
    }
  };
  function zn(e) {
    return {
      left: e.clientX,
      top: e.clientY
    };
  }
  function ii(e, i) {
    var t = i.x - e.clientX, a = i.y - e.clientY;
    return t * t + a * a < 100;
  }
  function Qn(e, i, t, a, l) {
    if (a == -1) return !1;
    for (var u = e.state.doc.resolve(a), v = function(R) {
      if (e.someProp(i, function(z) {
        return R > u.depth ? z(e, t, u.nodeAfter, u.before(R), l, !0) : z(e, t, u.node(R), u.before(R), l, !1);
      })) return {
        v: !0
      };
    }, p, S = u.depth + 1; S > 0; S--)
      if (p = v(S), p) return p.v;
    return !1;
  }
  function un(e, i, t) {
    if (e.focused || e.focus(), !e.state.selection.eq(i)) {
      var a = e.state.tr.setSelection(i);
      a.setMeta("pointer", !0), e.dispatch(a);
    }
  }
  function oi(e, i) {
    if (i == -1) return !1;
    var t = e.state.doc.resolve(i), a = t.nodeAfter;
    return a && a.isAtom && X.NodeSelection.isSelectable(a) ? (un(e, new X.NodeSelection(t)), !0) : !1;
  }
  function si(e, i) {
    if (i == -1) return !1;
    var t = e.state.selection, a, l;
    t instanceof X.NodeSelection && (a = t.node);
    for (var u = e.state.doc.resolve(i), v = u.depth + 1; v > 0; v--) {
      var p = v > u.depth ? u.nodeAfter : u.node(v);
      if (X.NodeSelection.isSelectable(p)) {
        a && t.$from.depth > 0 && v >= t.$from.depth && u.before(t.$from.depth + 1) == t.$from.pos ? l = u.before(t.$from.depth) : l = u.before(v);
        break;
      }
    }
    return l != null ? (un(e, X.NodeSelection.create(e.state.doc, l)), !0) : !1;
  }
  function li(e, i, t, a, l) {
    return Qn(e, "handleClickOn", i, t, a) || e.someProp("handleClick", function(u) {
      return u(e, i, a);
    }) || (l ? si(e, t) : oi(e, t));
  }
  function ui(e, i, t, a) {
    return Qn(e, "handleDoubleClickOn", i, t, a) || e.someProp("handleDoubleClick", function(l) {
      return l(e, i, a);
    });
  }
  function ci(e, i, t, a) {
    return Qn(e, "handleTripleClickOn", i, t, a) || e.someProp("handleTripleClick", function(l) {
      return l(e, i, a);
    }) || fi(e, t, a);
  }
  function fi(e, i, t) {
    if (t.button != 0) return !1;
    var a = e.state.doc;
    if (i == -1)
      return a.inlineContent ? (un(e, X.TextSelection.create(a, 0, a.content.size)), !0) : !1;
    for (var l = a.resolve(i), u = l.depth + 1; u > 0; u--) {
      var v = u > l.depth ? l.nodeAfter : l.node(u), p = l.before(u);
      if (v.inlineContent) un(e, X.TextSelection.create(a, p + 1, p + 1 + v.content.size));
      else if (X.NodeSelection.isSelectable(v)) un(e, X.NodeSelection.create(a, p));
      else continue;
      return !0;
    }
  }
  function Xn(e) {
    return kn(e);
  }
  var sa = It ? "metaKey" : "ctrlKey";
  Kt.mousedown = function(e, i) {
    var t = i;
    e.input.shiftKey = t.shiftKey;
    var a = Xn(e), l = Date.now(), u = "singleClick";
    l - e.input.lastClick.time < 500 && ii(t, e.input.lastClick) && !t[sa] && (e.input.lastClick.type == "singleClick" ? u = "doubleClick" : e.input.lastClick.type == "doubleClick" && (u = "tripleClick")), e.input.lastClick = {
      time: l,
      x: t.clientX,
      y: t.clientY,
      type: u
    };
    var v = e.posAtCoords(zn(t));
    v && (u == "singleClick" ? (e.input.mouseDown && e.input.mouseDown.done(), e.input.mouseDown = new hi(e, v, t, !!a)) : (u == "doubleClick" ? ui : ci)(e, v.pos, v.inside, t) ? t.preventDefault() : _r(e, "pointer"));
  };
  var hi = function() {
    function e(i, t, a, l) {
      var u = this;
      V(this, e), this.view = i, this.pos = t, this.event = a, this.flushed = l, this.delayedSelectionSync = !1, this.mightDrag = null, this.startDoc = i.state.doc, this.selectNode = !!a[sa], this.allowDefault = a.shiftKey;
      var v, p;
      if (t.inside > -1)
        v = i.state.doc.nodeAt(t.inside), p = t.inside;
      else {
        var S = i.state.doc.resolve(t.pos);
        v = S.parent, p = S.depth ? S.before() : 0;
      }
      var T = l ? null : a.target, R = T ? i.docView.nearestDesc(T, !0) : null;
      this.target = R && R.dom.nodeType == 1 ? R.dom : null;
      var z = i.state.selection;
      (a.button == 0 && v.type.spec.draggable && v.type.spec.selectable !== !1 || z instanceof X.NodeSelection && z.from <= p && z.to > p) && (this.mightDrag = {
        node: v,
        pos: p,
        addAttr: !!(this.target && !this.target.draggable),
        setUneditable: !!(this.target && Ye && !this.target.hasAttribute("contentEditable"))
      }), this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable) && (this.view.domObserver.stop(), this.mightDrag.addAttr && (this.target.draggable = !0), this.mightDrag.setUneditable && setTimeout(function() {
        u.view.input.mouseDown == u && u.target.setAttribute("contentEditable", "false");
      }, 20), this.view.domObserver.start()), i.root.addEventListener("mouseup", this.up = this.up.bind(this)), i.root.addEventListener("mousemove", this.move = this.move.bind(this)), _r(i, "pointer");
    }
    return oe(e, [{
      key: "done",
      value: function() {
        var t = this;
        this.view.root.removeEventListener("mouseup", this.up), this.view.root.removeEventListener("mousemove", this.move), this.mightDrag && this.target && (this.view.domObserver.stop(), this.mightDrag.addAttr && this.target.removeAttribute("draggable"), this.mightDrag.setUneditable && this.target.removeAttribute("contentEditable"), this.view.domObserver.start()), this.delayedSelectionSync && setTimeout(function() {
          return ar(t.view);
        }), this.view.input.mouseDown = null;
      }
    }, {
      key: "up",
      value: function(t) {
        if (this.done(), !!this.view.dom.contains(t.target)) {
          var a = this.pos;
          this.view.state.doc != this.startDoc && (a = this.view.posAtCoords(zn(t))), this.updateAllowDefault(t), this.allowDefault || !a ? _r(this.view, "pointer") : li(this.view, a.pos, a.inside, t, this.selectNode) ? t.preventDefault() : t.button == 0 && (this.flushed || ft && this.mightDrag && !this.mightDrag.node.isAtom || Qe && !this.view.state.selection.visible && Math.min(Math.abs(a.pos - this.view.state.selection.from), Math.abs(a.pos - this.view.state.selection.to)) <= 2) ? (un(this.view, X.Selection.near(this.view.state.doc.resolve(a.pos))), t.preventDefault()) : _r(this.view, "pointer");
        }
      }
    }, {
      key: "move",
      value: function(t) {
        this.updateAllowDefault(t), _r(this.view, "pointer"), t.buttons == 0 && this.done();
      }
    }, {
      key: "updateAllowDefault",
      value: function(t) {
        !this.allowDefault && (Math.abs(this.event.x - t.clientX) > 4 || Math.abs(this.event.y - t.clientY) > 4) && (this.allowDefault = !0);
      }
    }]), e;
  }();
  Kt.touchstart = function(e) {
    e.input.lastTouch = Date.now(), Xn(e), _r(e, "pointer");
  }, Kt.touchmove = function(e) {
    e.input.lastTouch = Date.now(), _r(e, "pointer");
  }, Kt.contextmenu = function(e) {
    return Xn(e);
  };
  function la(e, i) {
    return e.composing ? !0 : ft && Math.abs(i.timeStamp - e.input.compositionEndedAt) < 500 ? (e.input.compositionEndedAt = -2e8, !0) : !1;
  }
  var vi = St ? 5e3 : -1;
  Jt.compositionstart = Jt.compositionupdate = function(e) {
    if (!e.composing) {
      e.domObserver.flush();
      var i = e.state, t = i.selection.$to;
      if (i.selection instanceof X.TextSelection && (i.storedMarks || !t.textOffset && t.parentOffset && t.nodeBefore.marks.some(function(S) {
        return S.type.spec.inclusive === !1;
      })))
        e.markCursor = e.state.storedMarks || t.marks(), kn(e, !0), e.markCursor = null;
      else if (kn(e, !i.selection.empty), Ye && i.selection.empty && t.parentOffset && !t.textOffset && t.nodeBefore.marks.length)
        for (var a = e.domSelectionRange(), l = a.focusNode, u = a.focusOffset; l && l.nodeType == 1 && u != 0; ) {
          var v = u < 0 ? l.lastChild : l.childNodes[u - 1];
          if (!v) break;
          if (v.nodeType == 3) {
            var p = e.domSelection();
            p && p.collapse(v, v.nodeValue.length);
            break;
          } else
            l = v, u = -1;
        }
      e.input.composing = !0;
    }
    ua(e, vi);
  }, Jt.compositionend = function(e, i) {
    e.composing && (e.input.composing = !1, e.input.compositionEndedAt = i.timeStamp, e.input.compositionPendingChanges = e.domObserver.pendingRecords().length ? e.input.compositionID : 0, e.input.compositionNode = null, e.input.compositionPendingChanges && Promise.resolve().then(function() {
      return e.domObserver.flush();
    }), e.input.compositionID++, ua(e, 20));
  };
  function ua(e, i) {
    clearTimeout(e.input.composingTimeout), i > -1 && (e.input.composingTimeout = setTimeout(function() {
      return kn(e);
    }, i));
  }
  function ca(e) {
    for (e.composing && (e.input.composing = !1, e.input.compositionEndedAt = pi()); e.input.compositionNodes.length > 0; ) e.input.compositionNodes.pop().markParentsDirty();
  }
  function di(e) {
    var i = e.domSelectionRange();
    if (!i.focusNode) return null;
    var t = Tt(i.focusNode, i.focusOffset), a = Bt(i.focusNode, i.focusOffset);
    if (t && a && t != a) {
      var l = a.pmViewDesc, u = e.domObserver.lastChangedTextNode;
      if (t == u || a == u) return u;
      if (!l || !l.isText(a.nodeValue))
        return a;
      if (e.input.compositionNode == a) {
        var v = t.pmViewDesc;
        if (!(!v || !v.isText(t.nodeValue))) return a;
      }
    }
    return t || a;
  }
  function pi() {
    var e = document.createEvent("Event");
    return e.initEvent("event", !0, !0), e.timeStamp;
  }
  function kn(e) {
    var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (!(St && e.domObserver.flushingSoon >= 0)) {
      if (e.domObserver.forceFlush(), ca(e), i || e.docView && e.docView.dirty) {
        var t = Sr(e);
        return t && !t.eq(e.state.selection) ? e.dispatch(e.state.tr.setSelection(t)) : (e.markCursor || i) && !e.state.selection.empty ? e.dispatch(e.state.tr.deleteSelection()) : e.updateState(e.state), !0;
      }
      return !1;
    }
  }
  function mi(e, i) {
    if (e.dom.parentNode) {
      var t = e.dom.parentNode.appendChild(document.createElement("div"));
      t.appendChild(i), t.style.cssText = "position: fixed; left: -10000px; top: 10px";
      var a = getSelection(), l = document.createRange();
      l.selectNodeContents(i), e.dom.blur(), a.removeAllRanges(), a.addRange(l), setTimeout(function() {
        t.parentNode && t.parentNode.removeChild(t), e.focus();
      }, 50);
    }
  }
  var bn = re && be < 15 || $t && Vr < 604;
  Kt.copy = Jt.cut = function(e, i) {
    var t = i, a = e.state.selection, l = t.type == "cut";
    if (!a.empty) {
      var u = bn ? null : t.clipboardData, v = a.content(), p = _e(e, v), S = p.dom, T = p.text;
      u ? (t.preventDefault(), u.clearData(), u.setData("text/html", S.innerHTML), u.setData("text/plain", T)) : mi(e, S), l && e.dispatch(e.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"));
    }
  };
  function gi(e) {
    return e.openStart == 0 && e.openEnd == 0 && e.content.childCount == 1 ? e.content.firstChild : null;
  }
  function yi(e, i) {
    if (e.dom.parentNode) {
      var t = e.input.shiftKey || e.state.selection.$from.parent.type.spec.code, a = e.dom.parentNode.appendChild(document.createElement(t ? "textarea" : "div"));
      t || (a.contentEditable = "true"), a.style.cssText = "position: fixed; left: -10000px; top: 10px", a.focus();
      var l = e.input.shiftKey && e.input.lastKeyCode != 45;
      setTimeout(function() {
        e.focus(), a.parentNode && a.parentNode.removeChild(a), t ? Sn(e, a.value, null, l, i) : Sn(e, a.textContent, a.innerHTML, l, i);
      }, 50);
    }
  }
  function Sn(e, i, t, a, l) {
    var u = _(e, i, t, a, e.state.selection.$from);
    if (e.someProp("handlePaste", function(S) {
      return S(e, l, u || he.Slice.empty);
    })) return !0;
    if (!u) return !1;
    var v = gi(u), p = v ? e.state.tr.replaceSelectionWith(v, a) : e.state.tr.replaceSelection(u);
    return e.dispatch(p.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste")), !0;
  }
  function fa(e) {
    var i = e.getData("text/plain") || e.getData("Text");
    if (i) return i;
    var t = e.getData("text/uri-list");
    return t ? t.replace(/\r?\n/g, " ") : "";
  }
  Jt.paste = function(e, i) {
    var t = i;
    if (!(e.composing && !St)) {
      var a = bn ? null : t.clipboardData, l = e.input.shiftKey && e.input.lastKeyCode != 45;
      a && Sn(e, fa(a), a.getData("text/html"), l, t) ? t.preventDefault() : yi(e, t);
    }
  };
  var ha = oe(function e(i, t, a) {
    V(this, e), this.slice = i, this.move = t, this.node = a;
  }), ki = It ? "altKey" : "ctrlKey";
  function va(e, i) {
    var t = e.someProp("dragCopies", function(a) {
      return !a(i);
    });
    return t ?? !i[ki];
  }
  Kt.dragstart = function(e, i) {
    var t = i, a = e.input.mouseDown;
    if (a && a.done(), !!t.dataTransfer) {
      var l = e.state.selection, u = l.empty ? null : e.posAtCoords(zn(t)), v;
      if (!(u && u.pos >= l.from && u.pos <= (l instanceof X.NodeSelection ? l.to - 1 : l.to))) {
        if (a && a.mightDrag)
          v = X.NodeSelection.create(e.state.doc, a.mightDrag.pos);
        else if (t.target && t.target.nodeType == 1) {
          var p = e.docView.nearestDesc(t.target, !0);
          p && p.node.type.spec.draggable && p != e.docView && (v = X.NodeSelection.create(e.state.doc, p.posBefore));
        }
      }
      var S = (v || e.state.selection).content(), T = _e(e, S), R = T.dom, z = T.text, F = T.slice;
      (!t.dataTransfer.files.length || !Qe || xt > 120) && t.dataTransfer.clearData(), t.dataTransfer.setData(bn ? "Text" : "text/html", R.innerHTML), t.dataTransfer.effectAllowed = "copyMove", bn || t.dataTransfer.setData("text/plain", z), e.dragging = new ha(F, va(e, t), v);
    }
  }, Kt.dragend = function(e) {
    var i = e.dragging;
    window.setTimeout(function() {
      e.dragging == i && (e.dragging = null);
    }, 50);
  }, Jt.dragover = Jt.dragenter = function(e, i) {
    return i.preventDefault();
  }, Jt.drop = function(e, i) {
    var t = i, a = e.dragging;
    if (e.dragging = null, !!t.dataTransfer) {
      var l = e.posAtCoords(zn(t));
      if (l) {
        var u = e.state.doc.resolve(l.pos), v = a && a.slice;
        v ? e.someProp("transformPasted", function(Me) {
          v = Me(v, e);
        }) : v = _(e, fa(t.dataTransfer), bn ? null : t.dataTransfer.getData("text/html"), !1, u);
        var p = !!(a && va(e, t));
        if (e.someProp("handleDrop", function(Me) {
          return Me(e, t, v || he.Slice.empty, p);
        })) {
          t.preventDefault();
          return;
        }
        if (v) {
          t.preventDefault();
          var S = v ? me.dropPoint(e.state.doc, u.pos, v) : u.pos;
          S == null && (S = u.pos);
          var T = e.state.tr;
          if (p) {
            var R = a.node;
            R ? R.replace(T) : T.deleteSelection();
          }
          var z = T.mapping.map(S), F = v.openStart == 0 && v.openEnd == 0 && v.content.childCount == 1, G = T.doc;
          if (F ? T.replaceRangeWith(z, z, v.content.firstChild) : T.replaceRange(z, z, v), !T.doc.eq(G)) {
            var ae = T.doc.resolve(z);
            if (F && X.NodeSelection.isSelectable(v.content.firstChild) && ae.nodeAfter && ae.nodeAfter.sameMarkup(v.content.firstChild))
              T.setSelection(new X.NodeSelection(ae));
            else {
              var Se = T.mapping.map(S);
              T.mapping.maps[T.mapping.maps.length - 1].forEach(function(Me, de, st, tt) {
                return Se = tt;
              }), T.setSelection(Cr(e, ae, T.doc.resolve(Se)));
            }
            e.focus(), e.dispatch(T.setMeta("uiEvent", "drop"));
          }
        }
      }
    }
  }, Kt.focus = function(e) {
    e.input.lastFocus = Date.now(), e.focused || (e.domObserver.stop(), e.dom.classList.add("ProseMirror-focused"), e.domObserver.start(), e.focused = !0, setTimeout(function() {
      e.docView && e.hasFocus() && !e.domObserver.currentSelection.eq(e.domSelectionRange()) && ar(e);
    }, 20));
  }, Kt.blur = function(e, i) {
    var t = i;
    e.focused && (e.domObserver.stop(), e.dom.classList.remove("ProseMirror-focused"), e.domObserver.start(), t.relatedTarget && e.dom.contains(t.relatedTarget) && e.domObserver.currentSelection.clear(), e.focused = !1);
  }, Kt.beforeinput = function(e, i) {
    var t = i;
    if (Qe && St && t.inputType == "deleteContentBackward") {
      e.domObserver.flushSoon();
      var a = e.input.domChangeCount;
      setTimeout(function() {
        if (e.input.domChangeCount == a && (e.dom.blur(), e.focus(), !e.someProp("handleKeyDown", function(u) {
          return u(e, dt(8, "Backspace"));
        }))) {
          var l = e.state.selection.$cursor;
          l && l.pos > 0 && e.dispatch(e.state.tr.delete(l.pos - 1, l.pos).scrollIntoView());
        }
      }, 50);
    }
  };
  for (var da in Jt) Kt[da] = Jt[da];
  function wn(e, i) {
    if (e == i) return !0;
    for (var t in e) if (e[t] !== i[t]) return !1;
    for (var a in i) if (!(a in e)) return !1;
    return !0;
  }
  var pa = function() {
    function e(i, t) {
      V(this, e), this.toDOM = i, this.spec = t || Kr, this.side = this.spec.side || 0;
    }
    return oe(e, [{
      key: "map",
      value: function(t, a, l, u) {
        var v = t.mapResult(a.from + u, this.side < 0 ? -1 : 1), p = v.pos, S = v.deleted;
        return S ? null : new jr(p - l, p - l, this);
      }
    }, {
      key: "valid",
      value: function() {
        return !0;
      }
    }, {
      key: "eq",
      value: function(t) {
        return this == t || t instanceof e && (this.spec.key && this.spec.key == t.spec.key || this.toDOM == t.toDOM && wn(this.spec, t.spec));
      }
    }, {
      key: "destroy",
      value: function(t) {
        this.spec.destroy && this.spec.destroy(t);
      }
    }]), e;
  }(), Cn = function() {
    function e(i, t) {
      V(this, e), this.attrs = i, this.spec = t || Kr;
    }
    return oe(e, [{
      key: "map",
      value: function(t, a, l, u) {
        var v = t.map(a.from + u, this.spec.inclusiveStart ? -1 : 1) - l, p = t.map(a.to + u, this.spec.inclusiveEnd ? 1 : -1) - l;
        return v >= p ? null : new jr(v, p, this);
      }
    }, {
      key: "valid",
      value: function(t, a) {
        return a.from < a.to;
      }
    }, {
      key: "eq",
      value: function(t) {
        return this == t || t instanceof e && wn(this.attrs, t.attrs) && wn(this.spec, t.spec);
      }
    }, {
      key: "destroy",
      value: function() {
      }
    }], [{
      key: "is",
      value: function(t) {
        return t.type instanceof e;
      }
    }]), e;
  }(), bi = function() {
    function e(i, t) {
      V(this, e), this.attrs = i, this.spec = t || Kr;
    }
    return oe(e, [{
      key: "map",
      value: function(t, a, l, u) {
        var v = t.mapResult(a.from + u, 1);
        if (v.deleted) return null;
        var p = t.mapResult(a.to + u, -1);
        return p.deleted || p.pos <= v.pos ? null : new jr(v.pos - l, p.pos - l, this);
      }
    }, {
      key: "valid",
      value: function(t, a) {
        var l = t.content.findIndex(a.from), u = l.index, v = l.offset, p;
        return v == a.from && !(p = t.child(u)).isText && v + p.nodeSize == a.to;
      }
    }, {
      key: "eq",
      value: function(t) {
        return this == t || t instanceof e && wn(this.attrs, t.attrs) && wn(this.spec, t.spec);
      }
    }, {
      key: "destroy",
      value: function() {
      }
    }]), e;
  }(), jr = function() {
    function e(i, t, a) {
      V(this, e), this.from = i, this.to = t, this.type = a;
    }
    return oe(e, [{
      key: "copy",
      value: function(t, a) {
        return new e(t, a, this.type);
      }
    }, {
      key: "eq",
      value: function(t) {
        var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        return this.type.eq(t.type) && this.from + a == t.from && this.to + a == t.to;
      }
    }, {
      key: "map",
      value: function(t, a, l) {
        return this.type.map(t, this, a, l);
      }
    }, {
      key: "spec",
      get: function() {
        return this.type.spec;
      }
    }, {
      key: "inline",
      get: function() {
        return this.type instanceof Cn;
      }
    }, {
      key: "widget",
      get: function() {
        return this.type instanceof pa;
      }
    }], [{
      key: "widget",
      value: function(t, a, l) {
        return new e(t, t, new pa(a, l));
      }
    }, {
      key: "inline",
      value: function(t, a, l, u) {
        return new e(t, a, new Cn(l, u));
      }
    }, {
      key: "node",
      value: function(t, a, l, u) {
        return new e(t, a, new bi(l, u));
      }
    }]), e;
  }(), cn = [], Kr = {}, hr = function() {
    function e(i, t) {
      V(this, e), this.local = i.length ? i : cn, this.children = t.length ? t : cn;
    }
    return oe(e, [{
      key: "find",
      value: function(t, a, l) {
        var u = [];
        return this.findInner(t ?? 0, a ?? 1e9, u, 0, l), u;
      }
    }, {
      key: "findInner",
      value: function(t, a, l, u, v) {
        for (var p = 0; p < this.local.length; p++) {
          var S = this.local[p];
          S.from <= a && S.to >= t && (!v || v(S.spec)) && l.push(S.copy(S.from + u, S.to + u));
        }
        for (var T = 0; T < this.children.length; T += 3)
          if (this.children[T] < a && this.children[T + 1] > t) {
            var R = this.children[T] + 1;
            this.children[T + 2].findInner(t - R, a - R, l, u + R, v);
          }
      }
    }, {
      key: "map",
      value: function(t, a, l) {
        return this == Ht || t.maps.length == 0 ? this : this.mapInner(t, a, 0, 0, l || Kr);
      }
    }, {
      key: "mapInner",
      value: function(t, a, l, u, v) {
        for (var p, S = 0; S < this.local.length; S++) {
          var T = this.local[S].map(t, l, u);
          T && T.type.valid(a, T) ? (p || (p = [])).push(T) : v.onRemove && v.onRemove(this.local[S].spec);
        }
        return this.children.length ? Si(this.children, p || [], t, a, l, u, v) : p ? new e(p.sort(Jr), cn) : Ht;
      }
    }, {
      key: "add",
      value: function(t, a) {
        return a.length ? this == Ht ? e.create(t, a) : this.addInner(t, a, 0) : this;
      }
    }, {
      key: "addInner",
      value: function(t, a, l) {
        var u = this, v, p = 0;
        t.forEach(function(R, z) {
          var F = z + l, G;
          if (G = ya(a, R, F)) {
            for (v || (v = u.children.slice()); p < v.length && v[p] < z; ) p += 3;
            v[p] == z ? v[p + 2] = v[p + 2].addInner(R, G, F + 1) : v.splice(p, 0, z, z + R.nodeSize, _n(G, R, F + 1, Kr)), p += 3;
          }
        });
        for (var S = ga(p ? ka(a) : a, -l), T = 0; T < S.length; T++) S[T].type.valid(t, S[T]) || S.splice(T--, 1);
        return new e(S.length ? this.local.concat(S).sort(Jr) : this.local, v || this.children);
      }
    }, {
      key: "remove",
      value: function(t) {
        return t.length == 0 || this == Ht ? this : this.removeInner(t, 0);
      }
    }, {
      key: "removeInner",
      value: function(t, a) {
        for (var l = this.children, u = this.local, v = 0; v < l.length; v += 3) {
          for (var p = void 0, S = l[v] + a, T = l[v + 1] + a, R = 0, z; R < t.length; R++) (z = t[R]) && z.from > S && z.to < T && (t[R] = null, (p || (p = [])).push(z));
          if (p) {
            l == this.children && (l = this.children.slice());
            var F = l[v + 2].removeInner(p, S + 1);
            F != Ht ? l[v + 2] = F : (l.splice(v, 3), v -= 3);
          }
        }
        if (u.length) {
          for (var G = 0, ae; G < t.length; G++) if (ae = t[G])
            for (var Se = 0; Se < u.length; Se++) u[Se].eq(ae, a) && (u == this.local && (u = this.local.slice()), u.splice(Se--, 1));
        }
        return l == this.children && u == this.local ? this : u.length || l.length ? new e(u, l) : Ht;
      }
    }, {
      key: "forChild",
      value: function(t, a) {
        if (this == Ht) return this;
        if (a.isLeaf) return e.empty;
        for (var l, u, v = 0; v < this.children.length; v += 3) if (this.children[v] >= t) {
          this.children[v] == t && (l = this.children[v + 2]);
          break;
        }
        for (var p = t + 1, S = p + a.content.size, T = 0; T < this.local.length; T++) {
          var R = this.local[T];
          if (R.from < S && R.to > p && R.type instanceof Cn) {
            var z = Math.max(p, R.from) - p, F = Math.min(S, R.to) - p;
            z < F && (u || (u = [])).push(R.copy(z, F));
          }
        }
        if (u) {
          var G = new e(u.sort(Jr), cn);
          return l ? new ma([G, l]) : G;
        }
        return l || Ht;
      }
    }, {
      key: "eq",
      value: function(t) {
        if (this == t) return !0;
        if (!(t instanceof e) || this.local.length != t.local.length || this.children.length != t.children.length) return !1;
        for (var a = 0; a < this.local.length; a++) if (!this.local[a].eq(t.local[a])) return !1;
        for (var l = 0; l < this.children.length; l += 3) if (this.children[l] != t.children[l] || this.children[l + 1] != t.children[l + 1] || !this.children[l + 2].eq(t.children[l + 2])) return !1;
        return !0;
      }
    }, {
      key: "locals",
      value: function(t) {
        return ea(this.localsInner(t));
      }
    }, {
      key: "localsInner",
      value: function(t) {
        if (this == Ht) return cn;
        if (t.inlineContent || !this.local.some(Cn.is)) return this.local;
        for (var a = [], l = 0; l < this.local.length; l++)
          this.local[l].type instanceof Cn || a.push(this.local[l]);
        return a;
      }
    }, {
      key: "forEachSet",
      value: function(t) {
        t(this);
      }
    }], [{
      key: "create",
      value: function(t, a) {
        return a.length ? _n(a, t, 0, Kr) : Ht;
      }
    }]), e;
  }();
  hr.empty = new hr([], []), hr.removeOverlap = ea;
  var Ht = hr.empty, ma = function() {
    function e(i) {
      V(this, e), this.members = i;
    }
    return oe(e, [{
      key: "map",
      value: function(t, a) {
        var l = this.members.map(function(u) {
          return u.map(t, a, Kr);
        });
        return e.from(l);
      }
    }, {
      key: "forChild",
      value: function(t, a) {
        if (a.isLeaf) return hr.empty;
        for (var l = [], u = 0; u < this.members.length; u++) {
          var v = this.members[u].forChild(t, a);
          v != Ht && (v instanceof e ? l = l.concat(v.members) : l.push(v));
        }
        return e.from(l);
      }
    }, {
      key: "eq",
      value: function(t) {
        if (!(t instanceof e) || t.members.length != this.members.length) return !1;
        for (var a = 0; a < this.members.length; a++) if (!this.members[a].eq(t.members[a])) return !1;
        return !0;
      }
    }, {
      key: "locals",
      value: function(t) {
        for (var a, l = !0, u = 0; u < this.members.length; u++) {
          var v = this.members[u].localsInner(t);
          if (v.length)
            if (!a)
              a = v;
            else {
              l && (a = a.slice(), l = !1);
              for (var p = 0; p < v.length; p++) a.push(v[p]);
            }
        }
        return a ? ea(l ? a : a.sort(Jr)) : cn;
      }
    }, {
      key: "forEachSet",
      value: function(t) {
        for (var a = 0; a < this.members.length; a++) this.members[a].forEachSet(t);
      }
    }], [{
      key: "from",
      value: function(t) {
        switch (t.length) {
          case 0:
            return Ht;
          case 1:
            return t[0];
          default:
            return new e(t.every(function(a) {
              return a instanceof hr;
            }) ? t : t.reduce(function(a, l) {
              return a.concat(l instanceof hr ? l : l.members);
            }, []));
        }
      }
    }]), e;
  }();
  function Si(e, i, t, a, l, u, v) {
    for (var p = e.slice(), S = function(dr) {
      var fn = 0;
      t.maps[T].forEach(function(lr, Nt, Hi, Ui) {
        for (var Vn = Ui - Hi - (Nt - lr), Yr = 0; Yr < p.length; Yr += 3) {
          var Ma = p[Yr + 1];
          if (!(Ma < 0 || lr > Ma + dr - fn)) {
            var Ra = p[Yr] + dr - fn;
            Nt >= Ra ? p[Yr + 1] = lr <= Ra ? -2 : -1 : lr >= dr && Vn && (p[Yr] += Vn, p[Yr + 1] += Vn);
          }
        }
        fn += Vn;
      }), dr = t.maps[T].map(dr, -1), R = dr;
    }, T = 0, R = u; T < t.maps.length; T++)
      S(R);
    for (var z = !1, F = 0; F < p.length; F += 3) if (p[F + 1] < 0) {
      if (p[F + 1] == -2) {
        z = !0, p[F + 1] = -1;
        continue;
      }
      var G = t.map(e[F] + u), ae = G - l;
      if (ae < 0 || ae >= a.content.size) {
        z = !0;
        continue;
      }
      var Se = t.map(e[F + 1] + u, -1), Me = Se - l, de = a.content.findIndex(ae), st = de.index, tt = de.offset, Ue = a.maybeChild(st);
      if (Ue && tt == ae && tt + Ue.nodeSize == Me) {
        var at = p[F + 2].mapInner(t, Ue, G + 1, e[F] + u + 1, v);
        at != Ht ? (p[F] = ae, p[F + 1] = Me, p[F + 2] = at) : (p[F + 1] = -2, z = !0);
      } else
        z = !0;
    }
    if (z) {
      var gt = wi(p, e, i, t, l, u, v), Ct = _n(gt, a, 0, v);
      i = Ct.local;
      for (var vr = 0; vr < p.length; vr += 3) p[vr + 1] < 0 && (p.splice(vr, 3), vr -= 3);
      for (var Pt = 0, Zt = 0; Pt < Ct.children.length; Pt += 3) {
        for (var Mt = Ct.children[Pt]; Zt < p.length && p[Zt] < Mt; ) Zt += 3;
        p.splice(Zt, 0, Ct.children[Pt], Ct.children[Pt + 1], Ct.children[Pt + 2]);
      }
    }
    return new hr(i.sort(Jr), p);
  }
  function ga(e, i) {
    if (!i || !e.length) return e;
    for (var t = [], a = 0; a < e.length; a++) {
      var l = e[a];
      t.push(new jr(l.from + i, l.to + i, l.type));
    }
    return t;
  }
  function wi(e, i, t, a, l, u, v) {
    function p(T, R) {
      for (var z = 0; z < T.local.length; z++) {
        var F = T.local[z].map(a, l, R);
        F ? t.push(F) : v.onRemove && v.onRemove(T.local[z].spec);
      }
      for (var G = 0; G < T.children.length; G += 3) p(T.children[G + 2], T.children[G] + R + 1);
    }
    for (var S = 0; S < e.length; S += 3) e[S + 1] == -1 && p(e[S + 2], i[S] + u + 1);
    return t;
  }
  function ya(e, i, t) {
    if (i.isLeaf) return null;
    for (var a = t + i.nodeSize, l = null, u = 0, v; u < e.length; u++)
      (v = e[u]) && v.from > t && v.to < a && ((l || (l = [])).push(v), e[u] = null);
    return l;
  }
  function ka(e) {
    for (var i = [], t = 0; t < e.length; t++) e[t] != null && i.push(e[t]);
    return i;
  }
  function _n(e, i, t, a) {
    var l = [], u = !1;
    i.forEach(function(S, T) {
      var R = ya(e, S, T + t);
      if (R) {
        u = !0;
        var z = _n(R, S, t + T + 1, a);
        z != Ht && l.push(T, T + S.nodeSize, z);
      }
    });
    for (var v = ga(u ? ka(e) : e, -t).sort(Jr), p = 0; p < v.length; p++) v[p].type.valid(i, v[p]) || (a.onRemove && a.onRemove(v[p].spec), v.splice(p--, 1));
    return v.length || l.length ? new hr(v, l) : Ht;
  }
  function Jr(e, i) {
    return e.from - i.from || e.to - i.to;
  }
  function ea(e) {
    for (var i = e, t = 0; t < i.length - 1; t++) {
      var a = i[t];
      if (a.from != a.to) for (var l = t + 1; l < i.length; l++) {
        var u = i[l];
        if (u.from == a.from) {
          u.to != a.to && (i == e && (i = e.slice()), i[l] = u.copy(u.from, a.to), ba(i, l + 1, u.copy(a.to, u.to)));
          continue;
        } else {
          u.from < a.to && (i == e && (i = e.slice()), i[t] = a.copy(a.from, u.from), ba(i, l, a.copy(u.from, a.to)));
          break;
        }
      }
    }
    return i;
  }
  function ba(e, i, t) {
    for (; i < e.length && Jr(t, e[i]) > 0; ) i++;
    e.splice(i, 0, t);
  }
  function ta(e) {
    var i = [];
    return e.someProp("decorations", function(t) {
      var a = t(e.state);
      a && a != Ht && i.push(a);
    }), e.cursorWrapper && i.push(hr.create(e.state.doc, [e.cursorWrapper.deco])), ma.from(i);
  }
  var Ci = {
    childList: !0,
    characterData: !0,
    characterDataOldValue: !0,
    attributes: !0,
    attributeOldValue: !0,
    subtree: !0
  }, Ti = re && be <= 11, Ai = function() {
    function e() {
      V(this, e), this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
    }
    return oe(e, [{
      key: "set",
      value: function(t) {
        this.anchorNode = t.anchorNode, this.anchorOffset = t.anchorOffset, this.focusNode = t.focusNode, this.focusOffset = t.focusOffset;
      }
    }, {
      key: "clear",
      value: function() {
        this.anchorNode = this.focusNode = null;
      }
    }, {
      key: "eq",
      value: function(t) {
        return t.anchorNode == this.anchorNode && t.anchorOffset == this.anchorOffset && t.focusNode == this.focusNode && t.focusOffset == this.focusOffset;
      }
    }]), e;
  }(), xi = function() {
    function e(i, t) {
      var a = this;
      V(this, e), this.view = i, this.handleDOMChange = t, this.queue = [], this.flushingSoon = -1, this.observer = null, this.currentSelection = new Ai(), this.onCharData = null, this.suppressingSelectionUpdates = !1, this.lastChangedTextNode = null, this.observer = window.MutationObserver && new window.MutationObserver(function(l) {
        for (var u = 0; u < l.length; u++) a.queue.push(l[u]);
        re && be <= 11 && l.some(function(v) {
          return v.type == "childList" && v.removedNodes.length || v.type == "characterData" && v.oldValue.length > v.target.nodeValue.length;
        }) ? a.flushSoon() : a.flush();
      }), Ti && (this.onCharData = function(l) {
        a.queue.push({
          target: l.target,
          type: "characterData",
          oldValue: l.prevValue
        }), a.flushSoon();
      }), this.onSelectionChange = this.onSelectionChange.bind(this);
    }
    return oe(e, [{
      key: "flushSoon",
      value: function() {
        var t = this;
        this.flushingSoon < 0 && (this.flushingSoon = window.setTimeout(function() {
          t.flushingSoon = -1, t.flush();
        }, 20));
      }
    }, {
      key: "forceFlush",
      value: function() {
        this.flushingSoon > -1 && (window.clearTimeout(this.flushingSoon), this.flushingSoon = -1, this.flush());
      }
    }, {
      key: "start",
      value: function() {
        this.observer && (this.observer.takeRecords(), this.observer.observe(this.view.dom, Ci)), this.onCharData && this.view.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.connectSelection();
      }
    }, {
      key: "stop",
      value: function() {
        var t = this;
        if (this.observer) {
          var a = this.observer.takeRecords();
          if (a.length) {
            for (var l = 0; l < a.length; l++) this.queue.push(a[l]);
            window.setTimeout(function() {
              return t.flush();
            }, 20);
          }
          this.observer.disconnect();
        }
        this.onCharData && this.view.dom.removeEventListener("DOMCharacterDataModified", this.onCharData), this.disconnectSelection();
      }
    }, {
      key: "connectSelection",
      value: function() {
        this.view.dom.ownerDocument.addEventListener("selectionchange", this.onSelectionChange);
      }
    }, {
      key: "disconnectSelection",
      value: function() {
        this.view.dom.ownerDocument.removeEventListener("selectionchange", this.onSelectionChange);
      }
    }, {
      key: "suppressSelectionUpdates",
      value: function() {
        var t = this;
        this.suppressingSelectionUpdates = !0, setTimeout(function() {
          return t.suppressingSelectionUpdates = !1;
        }, 50);
      }
    }, {
      key: "onSelectionChange",
      value: function() {
        if (On(this.view)) {
          if (this.suppressingSelectionUpdates) return ar(this.view);
          if (re && be <= 11 && !this.view.state.selection.empty) {
            var t = this.view.domSelectionRange();
            if (t.focusNode && ct(t.focusNode, t.focusOffset, t.anchorNode, t.anchorOffset)) return this.flushSoon();
          }
          this.flush();
        }
      }
    }, {
      key: "setCurSelection",
      value: function() {
        this.currentSelection.set(this.view.domSelectionRange());
      }
    }, {
      key: "ignoreSelectionChange",
      value: function(t) {
        if (!t.focusNode) return !0;
        for (var a = /* @__PURE__ */ new Set(), l, u = t.focusNode; u; u = ze(u)) a.add(u);
        for (var v = t.anchorNode; v; v = ze(v)) if (a.has(v)) {
          l = v;
          break;
        }
        var p = l && this.view.docView.nearestDesc(l);
        if (p && p.ignoreMutation({
          type: "selection",
          target: l.nodeType == 3 ? l.parentNode : l
        }))
          return this.setCurSelection(), !0;
      }
    }, {
      key: "pendingRecords",
      value: function() {
        if (this.observer) {
          var t = Pe(this.observer.takeRecords()), a;
          try {
            for (t.s(); !(a = t.n()).done; ) {
              var l = a.value;
              this.queue.push(l);
            }
          } catch (u) {
            t.e(u);
          } finally {
            t.f();
          }
        }
        return this.queue;
      }
    }, {
      key: "flush",
      value: function() {
        var t = this.view;
        if (!(!t.docView || this.flushingSoon > -1)) {
          var a = this.pendingRecords();
          a.length && (this.queue = []);
          var l = t.domSelectionRange(), u = !this.suppressingSelectionUpdates && !this.currentSelection.eq(l) && On(t) && !this.ignoreSelectionChange(l), v = -1, p = -1, S = !1, T = [];
          if (t.editable)
            for (var R = 0; R < a.length; R++) {
              var z = this.registerMutation(a[R], T);
              z && (v = v < 0 ? z.from : Math.min(z.from, v), p = p < 0 ? z.to : Math.max(z.to, p), z.typeOver && (S = !0));
            }
          if (Ye && T.length) {
            var F = T.filter(function(gt) {
              return gt.nodeName == "BR";
            });
            if (F.length == 2) {
              var G = ye(F, 2), ae = G[0], Se = G[1];
              ae.parentNode && ae.parentNode.parentNode == Se.parentNode ? Se.remove() : ae.remove();
            } else {
              var Me = this.currentSelection.focusNode, de = Pe(F), st;
              try {
                for (de.s(); !(st = de.n()).done; ) {
                  var tt = st.value, Ue = tt.parentNode;
                  Ue && Ue.nodeName == "LI" && (!Me || Di(t, Me) != Ue) && tt.remove();
                }
              } catch (gt) {
                de.e(gt);
              } finally {
                de.f();
              }
            }
          }
          var at = null;
          v < 0 && u && t.input.lastFocus > Date.now() - 200 && Math.max(t.input.lastTouch, t.input.lastClick.time) < Date.now() - 300 && kt(l) && (at = Sr(t)) && at.eq(X.Selection.near(t.state.doc.resolve(0), 1)) ? (t.input.lastFocus = 0, ar(t), this.currentSelection.set(l), t.scrollToSelection()) : (v > -1 || u) && (v > -1 && (t.docView.markDirty(v, p), Ei(t)), this.handleDOMChange(v, p, S, T), t.docView && t.docView.dirty ? t.updateState(t.state) : this.currentSelection.eq(l) || ar(t), this.currentSelection.set(l));
        }
      }
    }, {
      key: "registerMutation",
      value: function(t, a) {
        if (a.indexOf(t.target) > -1) return null;
        var l = this.view.docView.nearestDesc(t.target);
        if (t.type == "attributes" && (l == this.view.docView || t.attributeName == "contenteditable" || t.attributeName == "style" && !t.oldValue && !t.target.getAttribute("style")) || !l || l.ignoreMutation(t)) return null;
        if (t.type == "childList") {
          for (var u = 0; u < t.addedNodes.length; u++) {
            var v = t.addedNodes[u];
            a.push(v), v.nodeType == 3 && (this.lastChangedTextNode = v);
          }
          if (l.contentDOM && l.contentDOM != l.dom && !l.contentDOM.contains(t.target)) return {
            from: l.posBefore,
            to: l.posAfter
          };
          var p = t.previousSibling, S = t.nextSibling;
          if (re && be <= 11 && t.addedNodes.length)
            for (var T = 0; T < t.addedNodes.length; T++) {
              var R = t.addedNodes[T], z = R.previousSibling, F = R.nextSibling;
              (!z || Array.prototype.indexOf.call(t.addedNodes, z) < 0) && (p = z), (!F || Array.prototype.indexOf.call(t.addedNodes, F) < 0) && (S = F);
            }
          var G = p && p.parentNode == t.target ? Ce(p) + 1 : 0, ae = l.localPosFromDOM(t.target, G, -1), Se = S && S.parentNode == t.target ? Ce(S) : t.target.childNodes.length, Me = l.localPosFromDOM(t.target, Se, 1);
          return {
            from: ae,
            to: Me
          };
        } else return t.type == "attributes" ? {
          from: l.posAtStart - l.border,
          to: l.posAtEnd + l.border
        } : (this.lastChangedTextNode = t.target, {
          from: l.posAtStart,
          to: l.posAtEnd,
          typeOver: t.target.nodeValue == t.oldValue
        });
      }
    }]), e;
  }(), Sa = /* @__PURE__ */ new WeakMap(), wa = !1;
  function Ei(e) {
    if (!Sa.has(e) && (Sa.set(e, null), ["normal", "nowrap", "pre-line"].indexOf(getComputedStyle(e.dom).whiteSpace) !== -1)) {
      if (e.requiresGeckoHackNode = Ye, wa) return;
      console.warn("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package."), wa = !0;
    }
  }
  function Ca(e, i) {
    var t = i.startContainer, a = i.startOffset, l = i.endContainer, u = i.endOffset, v = e.domAtPos(e.state.selection.anchor);
    if (ct(v.node, v.offset, l, u)) {
      var p = [l, u, t, a];
      t = p[0], a = p[1], l = p[2], u = p[3];
    }
    return {
      anchorNode: t,
      anchorOffset: a,
      focusNode: l,
      focusOffset: u
    };
  }
  function Ni(e, i) {
    if (i.getComposedRanges) {
      var t = i.getComposedRanges(e.root)[0];
      if (t) return Ca(e, t);
    }
    var a;
    function l(u) {
      u.preventDefault(), u.stopImmediatePropagation(), a = u.getTargetRanges()[0];
    }
    return e.dom.addEventListener("beforeinput", l, !0), document.execCommand("indent"), e.dom.removeEventListener("beforeinput", l, !0), a ? Ca(e, a) : null;
  }
  function Di(e, i) {
    for (var t = i.parentNode; t && t != e.dom; t = t.parentNode) {
      var a = e.docView.nearestDesc(t, !0);
      if (a && a.node.isBlock) return t;
    }
    return null;
  }
  function Oi(e, i, t) {
    var a = e.docView.parseRange(i, t), l = a.node, u = a.fromOffset, v = a.toOffset, p = a.from, S = a.to, T = e.domSelectionRange(), R, z = T.anchorNode;
    if (z && e.dom.contains(z.nodeType == 1 ? z : z.parentNode) && (R = [{
      node: z,
      offset: T.anchorOffset
    }], kt(T) || R.push({
      node: T.focusNode,
      offset: T.focusOffset
    })), Qe && e.input.lastKeyCode === 8)
      for (var F = v; F > u; F--) {
        var G = l.childNodes[F - 1], ae = G.pmViewDesc;
        if (G.nodeName == "BR" && !ae) {
          v = F;
          break;
        }
        if (!ae || ae.size) break;
      }
    var Se = e.state.doc, Me = e.someProp("domParser") || he.DOMParser.fromSchema(e.state.schema), de = Se.resolve(p), st = null, tt = Me.parse(l, {
      topNode: de.parent,
      topMatch: de.parent.contentMatchAt(de.index()),
      topOpen: !0,
      from: u,
      to: v,
      preserveWhitespace: de.parent.type.whitespace == "pre" ? "full" : !0,
      findPositions: R,
      ruleFromNode: Mi,
      context: de
    });
    if (R && R[0].pos != null) {
      var Ue = R[0].pos, at = R[1] && R[1].pos;
      at == null && (at = Ue), st = {
        anchor: Ue + p,
        head: at + p
      };
    }
    return {
      doc: tt,
      sel: st,
      from: p,
      to: S
    };
  }
  function Mi(e) {
    var i = e.pmViewDesc;
    if (i)
      return i.parseRule();
    if (e.nodeName == "BR" && e.parentNode) {
      if (ft && /^(ul|ol)$/i.test(e.parentNode.nodeName)) {
        var t = document.createElement("div");
        return t.appendChild(document.createElement("li")), {
          skip: t
        };
      } else if (e.parentNode.lastChild == e || ft && /^(tr|table)$/i.test(e.parentNode.nodeName))
        return {
          ignore: !0
        };
    } else if (e.nodeName == "IMG" && e.getAttribute("mark-placeholder"))
      return {
        ignore: !0
      };
    return null;
  }
  var Ri = /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;
  function Li(e, i, t, a, l) {
    var u = e.input.compositionPendingChanges || (e.composing ? e.input.compositionID : 0);
    if (e.input.compositionPendingChanges = 0, i < 0) {
      var v = e.input.lastSelectionTime > Date.now() - 50 ? e.input.lastSelectionOrigin : null, p = Sr(e, v);
      if (p && !e.state.selection.eq(p)) {
        if (Qe && St && e.input.lastKeyCode === 13 && Date.now() - 100 < e.input.lastKeyCodeTime && e.someProp("handleKeyDown", function(Nt) {
          return Nt(e, dt(13, "Enter"));
        })) return;
        var S = e.state.tr.setSelection(p);
        v == "pointer" ? S.setMeta("pointer", !0) : v == "key" && S.scrollIntoView(), u && S.setMeta("composition", u), e.dispatch(S);
      }
      return;
    }
    var T = e.state.doc.resolve(i), R = T.sharedDepth(t);
    i = T.before(R + 1), t = e.state.doc.resolve(t).after(R + 1);
    var z = e.state.selection, F = Oi(e, i, t), G = e.state.doc, ae = G.slice(F.from, F.to), Se, Me;
    e.input.lastKeyCode === 8 && Date.now() - 100 < e.input.lastKeyCodeTime ? (Se = e.state.selection.to, Me = "end") : (Se = e.state.selection.from, Me = "start"), e.input.lastKeyCode = null;
    var de = Fi(ae.content, F.doc.content, F.from, Se, Me);
    if (de && e.input.domChangeCount++, ($t && e.input.lastIOSEnter > Date.now() - 225 || St) && l.some(function(Nt) {
      return Nt.nodeType == 1 && !Ri.test(Nt.nodeName);
    }) && (!de || de.endA >= de.endB) && e.someProp("handleKeyDown", function(Nt) {
      return Nt(e, dt(13, "Enter"));
    })) {
      e.input.lastIOSEnter = 0;
      return;
    }
    if (!de)
      if (a && z instanceof X.TextSelection && !z.empty && z.$head.sameParent(z.$anchor) && !e.composing && !(F.sel && F.sel.anchor != F.sel.head))
        de = {
          start: z.from,
          endA: z.to,
          endB: z.to
        };
      else {
        if (F.sel) {
          var st = Ta(e, e.state.doc, F.sel);
          if (st && !st.eq(e.state.selection)) {
            var tt = e.state.tr.setSelection(st);
            u && tt.setMeta("composition", u), e.dispatch(tt);
          }
        }
        return;
      }
    e.state.selection.from < e.state.selection.to && de.start == de.endB && e.state.selection instanceof X.TextSelection && (de.start > e.state.selection.from && de.start <= e.state.selection.from + 2 && e.state.selection.from >= F.from ? de.start = e.state.selection.from : de.endA < e.state.selection.to && de.endA >= e.state.selection.to - 2 && e.state.selection.to <= F.to && (de.endB += e.state.selection.to - de.endA, de.endA = e.state.selection.to)), re && be <= 11 && de.endB == de.start + 1 && de.endA == de.start && de.start > F.from && F.doc.textBetween(de.start - F.from - 1, de.start - F.from + 1) == "  " && (de.start--, de.endA--, de.endB--);
    var Ue = F.doc.resolveNoCache(de.start - F.from), at = F.doc.resolveNoCache(de.endB - F.from), gt = G.resolve(de.start), Ct = Ue.sameParent(at) && Ue.parent.inlineContent && gt.end() >= de.endA, vr;
    if (($t && e.input.lastIOSEnter > Date.now() - 225 && (!Ct || l.some(function(Nt) {
      return Nt.nodeName == "DIV" || Nt.nodeName == "P";
    })) || !Ct && Ue.pos < F.doc.content.size && (!Ue.sameParent(at) || !Ue.parent.inlineContent) && (vr = X.Selection.findFrom(F.doc.resolve(Ue.pos + 1), 1, !0)) && vr.head > Ue.pos) && e.someProp("handleKeyDown", function(Nt) {
      return Nt(e, dt(13, "Enter"));
    })) {
      e.input.lastIOSEnter = 0;
      return;
    }
    if (e.state.selection.anchor > de.start && Pi(G, de.start, de.endA, Ue, at) && e.someProp("handleKeyDown", function(Nt) {
      return Nt(e, dt(8, "Backspace"));
    })) {
      St && Qe && e.domObserver.suppressSelectionUpdates();
      return;
    }
    Qe && de.endB == de.start && (e.input.lastChromeDelete = Date.now()), St && !Ct && Ue.start() != at.start() && at.parentOffset == 0 && Ue.depth == at.depth && F.sel && F.sel.anchor == F.sel.head && F.sel.head == de.endA && (de.endB -= 2, at = F.doc.resolveNoCache(de.endB - F.from), setTimeout(function() {
      e.someProp("handleKeyDown", function(Nt) {
        return Nt(e, dt(13, "Enter"));
      });
    }, 20));
    var Pt = de.start, Zt = de.endA, Mt, Tn, dr;
    if (Ct) {
      if (Ue.pos == at.pos)
        re && be <= 11 && Ue.parentOffset == 0 && (e.domObserver.suppressSelectionUpdates(), setTimeout(function() {
          return ar(e);
        }, 20)), Mt = e.state.tr.delete(Pt, Zt), Tn = G.resolve(de.start).marksAcross(G.resolve(de.endA));
      else if (de.endA == de.endB && (dr = Ii(Ue.parent.content.cut(Ue.parentOffset, at.parentOffset), gt.parent.content.cut(gt.parentOffset, de.endA - gt.start()))))
        Mt = e.state.tr, dr.type == "add" ? Mt.addMark(Pt, Zt, dr.mark) : Mt.removeMark(Pt, Zt, dr.mark);
      else if (Ue.parent.child(Ue.index()).isText && Ue.index() == at.index() - (at.textOffset ? 0 : 1)) {
        var fn = Ue.parent.textBetween(Ue.parentOffset, at.parentOffset);
        if (e.someProp("handleTextInput", function(Nt) {
          return Nt(e, Pt, Zt, fn);
        })) return;
        Mt = e.state.tr.insertText(fn, Pt, Zt);
      }
    }
    if (Mt || (Mt = e.state.tr.replace(Pt, Zt, F.doc.slice(de.start - F.from, de.endB - F.from))), F.sel) {
      var lr = Ta(e, Mt.doc, F.sel);
      lr && !(Qe && e.composing && lr.empty && (de.start != de.endB || e.input.lastChromeDelete < Date.now() - 100) && (lr.head == Pt || lr.head == Mt.mapping.map(Zt) - 1) || re && lr.empty && lr.head == Pt) && Mt.setSelection(lr);
    }
    Tn && Mt.ensureMarks(Tn), u && Mt.setMeta("composition", u), e.dispatch(Mt.scrollIntoView());
  }
  function Ta(e, i, t) {
    return Math.max(t.anchor, t.head) > i.content.size ? null : Cr(e, i.resolve(t.anchor), i.resolve(t.head));
  }
  function Ii(e, i) {
    for (var t = e.firstChild.marks, a = i.firstChild.marks, l = t, u = a, v, p, S, T = 0; T < a.length; T++) l = a[T].removeFromSet(l);
    for (var R = 0; R < t.length; R++) u = t[R].removeFromSet(u);
    if (l.length == 1 && u.length == 0)
      p = l[0], v = "add", S = function(ae) {
        return ae.mark(p.addToSet(ae.marks));
      };
    else if (l.length == 0 && u.length == 1)
      p = u[0], v = "remove", S = function(ae) {
        return ae.mark(p.removeFromSet(ae.marks));
      };
    else
      return null;
    for (var z = [], F = 0; F < i.childCount; F++) z.push(S(i.child(F)));
    if (he.Fragment.from(z).eq(e)) return {
      mark: p,
      type: v
    };
  }
  function Pi(e, i, t, a, l) {
    if (t - i <= l.pos - a.pos || ra(a, !0, !1) < l.pos) return !1;
    var u = e.resolve(i);
    if (!a.parent.isTextblock) {
      var v = u.nodeAfter;
      return v != null && t == i + v.nodeSize;
    }
    if (u.parentOffset < u.parent.content.size || !u.parent.isTextblock) return !1;
    var p = e.resolve(ra(u, !0, !0));
    return !p.parent.isTextblock || p.pos > t || ra(p, !0, !1) < t ? !1 : a.parent.content.cut(a.parentOffset).eq(p.parent.content);
  }
  function ra(e, i, t) {
    for (var a = e.depth, l = i ? e.end() : e.pos; a > 0 && (i || e.indexAfter(a) == e.node(a).childCount); )
      a--, l++, i = !1;
    if (t)
      for (var u = e.node(a).maybeChild(e.indexAfter(a)); u && !u.isLeaf; )
        u = u.firstChild, l++;
    return l;
  }
  function Fi(e, i, t, a, l) {
    var u = e.findDiffStart(i, t);
    if (u == null) return null;
    var v = e.findDiffEnd(i, t + e.size, t + i.size), p = v.a, S = v.b;
    if (l == "end") {
      var T = Math.max(0, u - Math.min(p, S));
      a -= p + T - u;
    }
    if (p < u && e.size < i.size) {
      var R = a <= u && a >= p ? u - a : 0;
      u -= R, u && u < i.size && Aa(i.textBetween(u - 1, u + 1)) && (u += R ? 1 : -1), S = u + (S - p), p = u;
    } else if (S < u) {
      var z = a <= u && a >= S ? u - a : 0;
      u -= z, u && u < e.size && Aa(e.textBetween(u - 1, u + 1)) && (u += z ? 1 : -1), p = u + (p - S), S = u;
    }
    return {
      start: u,
      endA: p,
      endB: S
    };
  }
  function Aa(e) {
    if (e.length != 2) return !1;
    var i = e.charCodeAt(0), t = e.charCodeAt(1);
    return i >= 56320 && i <= 57343 && t >= 55296 && t <= 56319;
  }
  var Bi = _, qi = kn, zi = function() {
    function e(i, t) {
      var a = this;
      V(this, e), this._root = null, this.focused = !1, this.trackWrites = null, this.mounted = !1, this.markCursor = null, this.cursorWrapper = null, this.lastSelectedViewDesc = void 0, this.input = new ei(), this.prevDirectPlugins = [], this.pluginViews = [], this.requiresGeckoHackNode = !1, this.dragging = null, this._props = t, this.state = t.state, this.directPlugins = t.plugins || [], this.directPlugins.forEach(Oa), this.dispatch = this.dispatch.bind(this), this.dom = i && i.mount || document.createElement("div"), i && (i.appendChild ? i.appendChild(this.dom) : typeof i == "function" ? i(this.dom) : i.mount && (this.mounted = !0)), this.editable = Na(this), Ea(this), this.nodeViews = Da(this), this.docView = c(this.state.doc, xa(this), ta(this), this.dom, this), this.domObserver = new xi(this, function(l, u, v, p) {
        return Li(a, l, u, v, p);
      }), this.domObserver.start(), ti(this), this.updatePluginViews();
    }
    return oe(e, [{
      key: "composing",
      get: function() {
        return this.input.composing;
      }
    }, {
      key: "props",
      get: function() {
        if (this._props.state != this.state) {
          var t = this._props;
          this._props = {};
          for (var a in t) this._props[a] = t[a];
          this._props.state = this.state;
        }
        return this._props;
      }
    }, {
      key: "update",
      value: function(t) {
        t.handleDOMEvents != this._props.handleDOMEvents && Yn(this);
        var a = this._props;
        this._props = t, t.plugins && (t.plugins.forEach(Oa), this.directPlugins = t.plugins), this.updateStateInner(t.state, a);
      }
    }, {
      key: "setProps",
      value: function(t) {
        var a = {};
        for (var l in this._props) a[l] = this._props[l];
        a.state = this.state;
        for (var u in t) a[u] = t[u];
        this.update(a);
      }
    }, {
      key: "updateState",
      value: function(t) {
        this.updateStateInner(t, this._props);
      }
    }, {
      key: "updateStateInner",
      value: function(t, a) {
        var l, u = this.state, v = !1, p = !1;
        t.storedMarks && this.composing && (ca(this), p = !0), this.state = t;
        var S = u.plugins != t.plugins || this._props.plugins != a.plugins;
        if (S || this._props.plugins != a.plugins || this._props.nodeViews != a.nodeViews) {
          var T = Da(this);
          Vi(T, this.nodeViews) && (this.nodeViews = T, v = !0);
        }
        (S || a.handleDOMEvents != this._props.handleDOMEvents) && Yn(this), this.editable = Na(this), Ea(this);
        var R = ta(this), z = xa(this), F = u.plugins != t.plugins && !u.doc.eq(t.doc) ? "reset" : t.scrollToSelection > u.scrollToSelection ? "to selection" : "preserve", G = v || !this.docView.matchesNode(t.doc, z, R);
        (G || !t.selection.eq(u.selection)) && (p = !0);
        var ae = F == "preserve" && p && this.dom.style.overflowAnchor == null && Ke(this);
        if (p) {
          this.domObserver.stop();
          var Se = G && (re || Qe) && !this.composing && !u.selection.empty && !t.selection.empty && _i(u.selection, t.selection);
          if (G) {
            var Me = Qe ? this.trackWrites = this.domSelectionRange().focusNode : null;
            this.composing && (this.input.compositionNode = di(this)), (v || !this.docView.update(t.doc, z, R, this)) && (this.docView.updateOuterDeco(z), this.docView.destroy(), this.docView = c(t.doc, z, R, this.dom, this)), Me && !this.trackWrites && (Se = !0);
          }
          Se || !(this.input.mouseDown && this.domObserver.currentSelection.eq(this.domSelectionRange()) && Fr(this)) ? ar(this, Se) : ($r(this, t.selection), this.domObserver.setCurSelection()), this.domObserver.start();
        }
        this.updatePluginViews(u), !((l = this.dragging) === null || l === void 0) && l.node && !u.doc.eq(t.doc) && this.updateDraggedNode(this.dragging, u), F == "reset" ? this.dom.scrollTop = 0 : F == "to selection" ? this.scrollToSelection() : ae && wt(ae);
      }
    }, {
      key: "scrollToSelection",
      value: function() {
        var t = this, a = this.domSelectionRange().focusNode;
        if (!(!a || !this.dom.contains(a.nodeType == 1 ? a : a.parentNode))) {
          if (!this.someProp("handleScrollToSelection", function(u) {
            return u(t);
          })) if (this.state.selection instanceof X.NodeSelection) {
            var l = this.docView.domAfterPos(this.state.selection.from);
            l.nodeType == 1 && De(this, l.getBoundingClientRect(), a);
          } else
            De(this, this.coordsAtPos(this.state.selection.head, 1), a);
        }
      }
    }, {
      key: "destroyPluginViews",
      value: function() {
        for (var t; t = this.pluginViews.pop(); ) t.destroy && t.destroy();
      }
    }, {
      key: "updatePluginViews",
      value: function(t) {
        if (!t || t.plugins != this.state.plugins || this.directPlugins != this.prevDirectPlugins) {
          this.prevDirectPlugins = this.directPlugins, this.destroyPluginViews();
          for (var a = 0; a < this.directPlugins.length; a++) {
            var l = this.directPlugins[a];
            l.spec.view && this.pluginViews.push(l.spec.view(this));
          }
          for (var u = 0; u < this.state.plugins.length; u++) {
            var v = this.state.plugins[u];
            v.spec.view && this.pluginViews.push(v.spec.view(this));
          }
        } else
          for (var p = 0; p < this.pluginViews.length; p++) {
            var S = this.pluginViews[p];
            S.update && S.update(this, t);
          }
      }
    }, {
      key: "updateDraggedNode",
      value: function(t, a) {
        var l = t.node, u = -1;
        if (this.state.doc.nodeAt(l.from) == l.node)
          u = l.from;
        else {
          var v = l.from + (this.state.doc.content.size - a.doc.content.size), p = v > 0 && this.state.doc.nodeAt(v);
          p == l.node && (u = v);
        }
        this.dragging = new ha(t.slice, t.move, u < 0 ? void 0 : X.NodeSelection.create(this.state.doc, u));
      }
    }, {
      key: "someProp",
      value: function(t, a) {
        var l = this._props && this._props[t], u;
        if (l != null && (u = a ? a(l) : l)) return u;
        for (var v = 0; v < this.directPlugins.length; v++) {
          var p = this.directPlugins[v].props[t];
          if (p != null && (u = a ? a(p) : p)) return u;
        }
        var S = this.state.plugins;
        if (S) for (var T = 0; T < S.length; T++) {
          var R = S[T].props[t];
          if (R != null && (u = a ? a(R) : R)) return u;
        }
      }
    }, {
      key: "hasFocus",
      value: function() {
        if (re) {
          var t = this.root.activeElement;
          if (t == this.dom) return !0;
          if (!t || !this.dom.contains(t)) return !1;
          for (; t && this.dom != t && this.dom.contains(t); ) {
            if (t.contentEditable == "false") return !1;
            t = t.parentElement;
          }
          return !0;
        }
        return this.root.activeElement == this.dom;
      }
    }, {
      key: "focus",
      value: function() {
        this.domObserver.stop(), this.editable && _t(this.dom), ar(this), this.domObserver.start();
      }
    }, {
      key: "root",
      get: function() {
        var t = this, a = this._root;
        if (a == null) {
          for (var l = function(S) {
            if (S.nodeType == 9 || S.nodeType == 11 && S.host)
              return S.getSelection || (Object.getPrototypeOf(S).getSelection = function() {
                return S.ownerDocument.getSelection();
              }), {
                v: t._root = S
              };
          }, u, v = this.dom.parentNode; v; v = v.parentNode)
            if (u = l(v), u) return u.v;
        }
        return a || document;
      }
    }, {
      key: "updateRoot",
      value: function() {
        this._root = null;
      }
    }, {
      key: "posAtCoords",
      value: function(t) {
        return yr(this, t);
      }
    }, {
      key: "coordsAtPos",
      value: function(t) {
        var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
        return Vt(this, t, a);
      }
    }, {
      key: "domAtPos",
      value: function(t) {
        var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        return this.docView.domFromPos(t, a);
      }
    }, {
      key: "nodeDOM",
      value: function(t) {
        var a = this.docView.descAt(t);
        return a ? a.nodeDOM : null;
      }
    }, {
      key: "posAtDOM",
      value: function(t, a) {
        var l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : -1, u = this.docView.posFromDOM(t, a, l);
        if (u == null) throw new RangeError("DOM position not inside the editor");
        return u;
      }
    }, {
      key: "endOfTextblock",
      value: function(t, a) {
        return ee(this, a || this.state, t);
      }
    }, {
      key: "pasteHTML",
      value: function(t, a) {
        return Sn(this, "", t, !1, a || new ClipboardEvent("paste"));
      }
    }, {
      key: "pasteText",
      value: function(t, a) {
        return Sn(this, t, null, !0, a || new ClipboardEvent("paste"));
      }
    }, {
      key: "serializeForClipboard",
      value: function(t) {
        return _e(this, t);
      }
    }, {
      key: "destroy",
      value: function() {
        this.docView && (ri(this), this.destroyPluginViews(), this.mounted ? (this.docView.update(this.state.doc, [], ta(this), this), this.dom.textContent = "") : this.dom.parentNode && this.dom.parentNode.removeChild(this.dom), this.docView.destroy(), this.docView = null, ut());
      }
    }, {
      key: "isDestroyed",
      get: function() {
        return this.docView == null;
      }
    }, {
      key: "dispatchEvent",
      value: function(t) {
        return ai(this, t);
      }
    }, {
      key: "dispatch",
      value: function(t) {
        var a = this._props.dispatchTransaction;
        a ? a.call(this, t) : this.updateState(this.state.apply(t));
      }
    }, {
      key: "domSelectionRange",
      value: function() {
        var t = this.domSelection();
        return t ? ft && this.root.nodeType === 11 && Wt(this.dom.ownerDocument) == this.dom && Ni(this, t) || t : {
          focusNode: null,
          focusOffset: 0,
          anchorNode: null,
          anchorOffset: 0
        };
      }
    }, {
      key: "domSelection",
      value: function() {
        return this.root.getSelection();
      }
    }]), e;
  }();
  function xa(e) {
    var i = /* @__PURE__ */ Object.create(null);
    return i.class = "ProseMirror", i.contenteditable = String(e.editable), e.someProp("attributes", function(t) {
      if (typeof t == "function" && (t = t(e.state)), t) for (var a in t)
        a == "class" ? i.class += " " + t[a] : a == "style" ? i.style = (i.style ? i.style + ";" : "") + t[a] : !i[a] && a != "contenteditable" && a != "nodeName" && (i[a] = String(t[a]));
    }), i.translate || (i.translate = "no"), [jr.node(0, e.state.doc.content.size, i)];
  }
  function Ea(e) {
    if (e.markCursor) {
      var i = document.createElement("img");
      i.className = "ProseMirror-separator", i.setAttribute("mark-placeholder", "true"), i.setAttribute("alt", ""), e.cursorWrapper = {
        dom: i,
        deco: jr.widget(e.state.selection.from, i, {
          raw: !0,
          marks: e.markCursor
        })
      };
    } else
      e.cursorWrapper = null;
  }
  function Na(e) {
    return !e.someProp("editable", function(i) {
      return i(e.state) === !1;
    });
  }
  function _i(e, i) {
    var t = Math.min(e.$anchor.sharedDepth(e.head), i.$anchor.sharedDepth(i.head));
    return e.$anchor.start(t) != i.$anchor.start(t);
  }
  function Da(e) {
    var i = /* @__PURE__ */ Object.create(null);
    function t(a) {
      for (var l in a) Object.prototype.hasOwnProperty.call(i, l) || (i[l] = a[l]);
    }
    return e.someProp("nodeViews", t), e.someProp("markViews", t), i;
  }
  function Vi(e, i) {
    var t = 0, a = 0;
    for (var l in e) {
      if (e[l] != i[l]) return !0;
      t++;
    }
    for (var u in i) a++;
    return t != a;
  }
  function Oa(e) {
    if (e.spec.state || e.spec.filterTransaction || e.spec.appendTransaction) throw new RangeError("Plugins passed directly to the view must not have a state component");
  }
  return Nn.Decoration = jr, Nn.DecorationSet = hr, Nn.EditorView = zi, Nn.__endComposition = qi, Nn.__parseFromClipboard = Bi, Nn;
}
/*!
 * @toast-ui/editor
 * @version 3.2.2 | Fri Feb 17 2023
 * @author NHN Cloud FE Development Lab <dl_javascript@nhn.com>
 * @license MIT
 */
var ol;
function l$() {
  return ol || (ol = 1, function(ye, se) {
    (function(Fe, Pe) {
      ye.exports = Pe(/* @__PURE__ */ a$(), /* @__PURE__ */ o$(), /* @__PURE__ */ ja(), /* @__PURE__ */ Ka(), /* @__PURE__ */ s$());
    })(self, function(Ie, Fe, Pe, Xe, et) {
      return (
        /******/
        function() {
          var Je = {
            /***/
            368: (
              /***/
              function(j) {
                /*! @license DOMPurify 2.3.3 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.3.3/LICENSE */
                (function(le, Z) {
                  j.exports = Z();
                })(this, function() {
                  function le(Ne) {
                    if (Array.isArray(Ne)) {
                      for (var De = 0, Ke = Array(Ne.length); De < Ne.length; De++)
                        Ke[De] = Ne[De];
                      return Ke;
                    } else
                      return Array.from(Ne);
                  }
                  var Z = Object.hasOwnProperty, ce = Object.setPrototypeOf, ne = Object.isFrozen, J = Object.getPrototypeOf, V = Object.getOwnPropertyDescriptor, ue = Object.freeze, oe = Object.seal, fe = Object.create, Te = typeof Reflect < "u" && Reflect, X = Te.apply, he = Te.construct;
                  X || (X = function(De, Ke, rt) {
                    return De.apply(Ke, rt);
                  }), ue || (ue = function(De) {
                    return De;
                  }), oe || (oe = function(De) {
                    return De;
                  }), he || (he = function(De, Ke) {
                    return new (Function.prototype.bind.apply(De, [null].concat(le(Ke))))();
                  });
                  var me = Tt(Array.prototype.forEach), Ce = Tt(Array.prototype.pop), ze = Tt(Array.prototype.push), ht = Tt(String.prototype.toLowerCase), Le = Tt(String.prototype.match), ut = Tt(String.prototype.replace), ct = Tt(String.prototype.indexOf), it = Tt(String.prototype.trim), Ze = Tt(RegExp.prototype.test), yt = Bt(TypeError);
                  function Tt(Ne) {
                    return function(De) {
                      for (var Ke = arguments.length, rt = Array(Ke > 1 ? Ke - 1 : 0), wt = 1; wt < Ke; wt++)
                        rt[wt - 1] = arguments[wt];
                      return X(Ne, De, rt);
                    };
                  }
                  function Bt(Ne) {
                    return function() {
                      for (var De = arguments.length, Ke = Array(De), rt = 0; rt < De; rt++)
                        Ke[rt] = arguments[rt];
                      return he(Ne, Ke);
                    };
                  }
                  function We(Ne, De) {
                    ce && ce(Ne, null);
                    for (var Ke = De.length; Ke--; ) {
                      var rt = De[Ke];
                      if (typeof rt == "string") {
                        var wt = ht(rt);
                        wt !== rt && (ne(De) || (De[Ke] = wt), rt = wt);
                      }
                      Ne[rt] = !0;
                    }
                    return Ne;
                  }
                  function mt(Ne) {
                    var De = fe(null), Ke = void 0;
                    for (Ke in Ne)
                      X(Z, Ne, [Ke]) && (De[Ke] = Ne[Ke]);
                    return De;
                  }
                  function kt(Ne, De) {
                    for (; Ne !== null; ) {
                      var Ke = V(Ne, De);
                      if (Ke) {
                        if (Ke.get)
                          return Tt(Ke.get);
                        if (typeof Ke.value == "function")
                          return Tt(Ke.value);
                      }
                      Ne = J(Ne);
                    }
                    function rt(wt) {
                      return console.warn("fallback value for", wt), null;
                    }
                    return rt;
                  }
                  var dt = ue(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Wt = ue(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Yt = ue(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), K = ue(["animate", "color-profile", "cursor", "discard", "fedropshadow", "feimage", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), $ = ue(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), P = ue(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), B = ue(["#text"]), I = ue(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), Q = ue(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), re = ue(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), be = ue(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Ye = oe(/\{\{[\s\S]*|[\s\S]*\}\}/gm), lt = oe(/<%[\s\S]*|[\s\S]*%>/gm), Qe = oe(/^data-[\-\w.\u00B7-\uFFFF]/), xt = oe(/^aria-[\-\w]+$/), ft = oe(
                    /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
                    // eslint-disable-line no-useless-escape
                  ), $t = oe(/^(?:\w+script|data):/i), It = oe(
                    /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
                    // eslint-disable-line no-control-regex
                  ), Xt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(Ne) {
                    return typeof Ne;
                  } : function(Ne) {
                    return Ne && typeof Symbol == "function" && Ne.constructor === Symbol && Ne !== Symbol.prototype ? "symbol" : typeof Ne;
                  };
                  function St(Ne) {
                    if (Array.isArray(Ne)) {
                      for (var De = 0, Ke = Array(Ne.length); De < Ne.length; De++)
                        Ke[De] = Ne[De];
                      return Ke;
                    } else
                      return Array.from(Ne);
                  }
                  var cr = function() {
                    return typeof window > "u" ? null : window;
                  }, Vr = function(De, Ke) {
                    if ((typeof De > "u" ? "undefined" : Xt(De)) !== "object" || typeof De.createPolicy != "function")
                      return null;
                    var rt = null, wt = "data-tt-policy-suffix";
                    Ke.currentScript && Ke.currentScript.hasAttribute(wt) && (rt = Ke.currentScript.getAttribute(wt));
                    var er = "dompurify" + (rt ? "#" + rt : "");
                    try {
                      return De.createPolicy(er, {
                        createHTML: function(_t) {
                          return _t;
                        }
                      });
                    } catch {
                      return console.warn("TrustedTypes policy " + er + " could not be created."), null;
                    }
                  };
                  function Nr() {
                    var Ne = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : cr(), De = function(_) {
                      return Nr(_);
                    };
                    if (De.version = "2.3.3", De.removed = [], !Ne || !Ne.document || Ne.document.nodeType !== 9)
                      return De.isSupported = !1, De;
                    var Ke = Ne.document, rt = Ne.document, wt = Ne.DocumentFragment, er = Ne.HTMLTemplateElement, At = Ne.Node, _t = Ne.Element, tr = Ne.NodeFilter, Dr = Ne.NamedNodeMap, rr = Dr === void 0 ? Ne.NamedNodeMap || Ne.MozNamedAttrMap : Dr, Hr = Ne.Text, Ir = Ne.Comment, Ur = Ne.DOMParser, Or = Ne.trustedTypes, yr = _t.prototype, Mr = kt(yr, "cloneNode"), Gt = kt(yr, "nextSibling"), kr = kt(yr, "childNodes"), Vt = kt(yr, "parentNode");
                    if (typeof er == "function") {
                      var jt = rt.createElement("template");
                      jt.content && jt.content.ownerDocument && (rt = jt.content.ownerDocument);
                    }
                    var E = Vr(Or, Ke), N = E && Pr ? E.createHTML("") : "", y = rt, m = y.implementation, b = y.createNodeIterator, w = y.createDocumentFragment, O = y.getElementsByTagName, H = Ke.importNode, ee = {};
                    try {
                      ee = mt(rt).documentMode ? rt.documentMode : {};
                    } catch {
                    }
                    var U = {};
                    De.isSupported = typeof Vt == "function" && m && typeof m.createHTMLDocument < "u" && ee !== 9;
                    var ge = Ye, Oe = lt, xe = Qe, Ge = xt, nt = $t, k = It, h = ft, o = null, c = We({}, [].concat(St(dt), St(Wt), St(Yt), St($), St(B))), d = null, C = We({}, [].concat(St(I), St(Q), St(re), St(be))), x = null, M = null, q = !0, W = !0, ve = !1, pe = !1, Ae = !1, $e = !1, ot = !1, bt = !1, nr = !1, Rr = !0, Pr = !1, Dn = !0, hn = !0, Wr = !1, br = {}, Sr = null, vn = We({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), ar = null, dn = We({}, ["audio", "video", "img", "source", "image", "track"]), rn = null, nn = We({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), an = "http://www.w3.org/1998/Math/MathML", pn = "http://www.w3.org/2000/svg", wr = "http://www.w3.org/1999/xhtml", $r = wr, on = !1, Cr = void 0, On = ["application/xhtml+xml", "text/html"], Mn = "text/html", Fr = void 0, Tr = null, Ar = rt.createElement("form"), sn = function(_) {
                      Tr && Tr === _ || ((!_ || (typeof _ > "u" ? "undefined" : Xt(_)) !== "object") && (_ = {}), _ = mt(_), o = "ALLOWED_TAGS" in _ ? We({}, _.ALLOWED_TAGS) : c, d = "ALLOWED_ATTR" in _ ? We({}, _.ALLOWED_ATTR) : C, rn = "ADD_URI_SAFE_ATTR" in _ ? We(mt(nn), _.ADD_URI_SAFE_ATTR) : nn, ar = "ADD_DATA_URI_TAGS" in _ ? We(mt(dn), _.ADD_DATA_URI_TAGS) : dn, Sr = "FORBID_CONTENTS" in _ ? We({}, _.FORBID_CONTENTS) : vn, x = "FORBID_TAGS" in _ ? We({}, _.FORBID_TAGS) : {}, M = "FORBID_ATTR" in _ ? We({}, _.FORBID_ATTR) : {}, br = "USE_PROFILES" in _ ? _.USE_PROFILES : !1, q = _.ALLOW_ARIA_ATTR !== !1, W = _.ALLOW_DATA_ATTR !== !1, ve = _.ALLOW_UNKNOWN_PROTOCOLS || !1, pe = _.SAFE_FOR_TEMPLATES || !1, Ae = _.WHOLE_DOCUMENT || !1, bt = _.RETURN_DOM || !1, nr = _.RETURN_DOM_FRAGMENT || !1, Rr = _.RETURN_DOM_IMPORT !== !1, Pr = _.RETURN_TRUSTED_TYPE || !1, ot = _.FORCE_BODY || !1, Dn = _.SANITIZE_DOM !== !1, hn = _.KEEP_CONTENT !== !1, Wr = _.IN_PLACE || !1, h = _.ALLOWED_URI_REGEXP || h, $r = _.NAMESPACE || wr, Cr = // eslint-disable-next-line unicorn/prefer-includes
                      On.indexOf(_.PARSER_MEDIA_TYPE) === -1 ? Cr = Mn : Cr = _.PARSER_MEDIA_TYPE, Fr = Cr === "application/xhtml+xml" ? function(ke) {
                        return ke;
                      } : ht, pe && (W = !1), nr && (bt = !0), br && (o = We({}, [].concat(St(B))), d = [], br.html === !0 && (We(o, dt), We(d, I)), br.svg === !0 && (We(o, Wt), We(d, Q), We(d, be)), br.svgFilters === !0 && (We(o, Yt), We(d, Q), We(d, be)), br.mathMl === !0 && (We(o, $), We(d, re), We(d, be))), _.ADD_TAGS && (o === c && (o = mt(o)), We(o, _.ADD_TAGS)), _.ADD_ATTR && (d === C && (d = mt(d)), We(d, _.ADD_ATTR)), _.ADD_URI_SAFE_ATTR && We(rn, _.ADD_URI_SAFE_ATTR), _.FORBID_CONTENTS && (Sr === vn && (Sr = mt(Sr)), We(Sr, _.FORBID_CONTENTS)), hn && (o["#text"] = !0), Ae && We(o, ["html", "head", "body"]), o.table && (We(o, ["tbody"]), delete x.tbody), ue && ue(_), Tr = _);
                    }, Gr = We({}, ["mi", "mo", "mn", "ms", "mtext"]), Br = We({}, ["foreignobject", "desc", "title", "annotation-xml"]), fr = We({}, Wt);
                    We(fr, Yt), We(fr, K);
                    var mn = We({}, $);
                    We(mn, P);
                    var Kn = function(_) {
                      var ke = Vt(_);
                      (!ke || !ke.tagName) && (ke = {
                        namespaceURI: wr,
                        tagName: "template"
                      });
                      var qe = ht(_.tagName), vt = ht(ke.tagName);
                      if (_.namespaceURI === pn)
                        return ke.namespaceURI === wr ? qe === "svg" : ke.namespaceURI === an ? qe === "svg" && (vt === "annotation-xml" || Gr[vt]) : !!fr[qe];
                      if (_.namespaceURI === an)
                        return ke.namespaceURI === wr ? qe === "math" : ke.namespaceURI === pn ? qe === "math" && Br[vt] : !!mn[qe];
                      if (_.namespaceURI === wr) {
                        if (ke.namespaceURI === pn && !Br[vt] || ke.namespaceURI === an && !Gr[vt])
                          return !1;
                        var Dt = We({}, ["title", "style", "font", "a", "script"]);
                        return !mn[qe] && (Dt[qe] || !fr[qe]);
                      }
                      return !1;
                    }, ir = function(_) {
                      ze(De.removed, { element: _ });
                      try {
                        _.parentNode.removeChild(_);
                      } catch {
                        try {
                          _.outerHTML = N;
                        } catch {
                          _.remove();
                        }
                      }
                    }, Rn = function(_, ke) {
                      try {
                        ze(De.removed, {
                          attribute: ke.getAttributeNode(_),
                          from: ke
                        });
                      } catch {
                        ze(De.removed, {
                          attribute: null,
                          from: ke
                        });
                      }
                      if (ke.removeAttribute(_), _ === "is" && !d[_])
                        if (bt || nr)
                          try {
                            ir(ke);
                          } catch {
                          }
                        else
                          try {
                            ke.setAttribute(_, "");
                          } catch {
                          }
                    }, Ln = function(_) {
                      var ke = void 0, qe = void 0;
                      if (ot)
                        _ = "<remove></remove>" + _;
                      else {
                        var vt = Le(_, /^[\r\n\t ]+/);
                        qe = vt && vt[0];
                      }
                      Cr === "application/xhtml+xml" && (_ = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + _ + "</body></html>");
                      var Dt = E ? E.createHTML(_) : _;
                      if ($r === wr)
                        try {
                          ke = new Ur().parseFromString(Dt, Cr);
                        } catch {
                        }
                      if (!ke || !ke.documentElement) {
                        ke = m.createDocument($r, "template", null);
                        try {
                          ke.documentElement.innerHTML = on ? "" : Dt;
                        } catch {
                        }
                      }
                      var Ot = ke.body || ke.documentElement;
                      return _ && qe && Ot.insertBefore(rt.createTextNode(qe), Ot.childNodes[0] || null), $r === wr ? O.call(ke, Ae ? "html" : "body")[0] : Ae ? ke.documentElement : Ot;
                    }, ln = function(_) {
                      return b.call(_.ownerDocument || _, _, tr.SHOW_ELEMENT | tr.SHOW_COMMENT | tr.SHOW_TEXT, null, !1);
                    }, In = function(_) {
                      return _ instanceof Hr || _ instanceof Ir ? !1 : typeof _.nodeName != "string" || typeof _.textContent != "string" || typeof _.removeChild != "function" || !(_.attributes instanceof rr) || typeof _.removeAttribute != "function" || typeof _.setAttribute != "function" || typeof _.namespaceURI != "string" || typeof _.insertBefore != "function";
                    }, qr = function(_) {
                      return (typeof At > "u" ? "undefined" : Xt(At)) === "object" ? _ instanceof At : _ && (typeof _ > "u" ? "undefined" : Xt(_)) === "object" && typeof _.nodeType == "number" && typeof _.nodeName == "string";
                    }, or = function(_, ke, qe) {
                      U[_] && me(U[_], function(vt) {
                        vt.call(De, ke, qe, Tr);
                      });
                    }, gn = function(_) {
                      var ke = void 0;
                      if (or("beforeSanitizeElements", _, null), In(_) || Le(_.nodeName, /[\u0080-\uFFFF]/))
                        return ir(_), !0;
                      var qe = Fr(_.nodeName);
                      if (or("uponSanitizeElement", _, {
                        tagName: qe,
                        allowedTags: o
                      }), !qr(_.firstElementChild) && (!qr(_.content) || !qr(_.content.firstElementChild)) && Ze(/<[/\w]/g, _.innerHTML) && Ze(/<[/\w]/g, _.textContent) || qe === "select" && Ze(/<template/i, _.innerHTML))
                        return ir(_), !0;
                      if (!o[qe] || x[qe]) {
                        if (hn && !Sr[qe]) {
                          var vt = Vt(_) || _.parentNode, Dt = kr(_) || _.childNodes;
                          if (Dt && vt)
                            for (var Ot = Dt.length, Et = Ot - 1; Et >= 0; --Et)
                              vt.insertBefore(Mr(Dt[Et], !0), Gt(_));
                        }
                        return ir(_), !0;
                      }
                      return _ instanceof _t && !Kn(_) || (qe === "noscript" || qe === "noembed") && Ze(/<\/no(script|embed)/i, _.innerHTML) ? (ir(_), !0) : (pe && _.nodeType === 3 && (ke = _.textContent, ke = ut(ke, ge, " "), ke = ut(ke, Oe, " "), _.textContent !== ke && (ze(De.removed, { element: _.cloneNode() }), _.textContent = ke)), or("afterSanitizeElements", _, null), !1);
                    }, Pn = function(_, ke, qe) {
                      if (Dn && (ke === "id" || ke === "name") && (qe in rt || qe in Ar))
                        return !1;
                      if (!(W && !M[ke] && Ze(xe, ke))) {
                        if (!(q && Ze(Ge, ke))) {
                          if (!d[ke] || M[ke])
                            return !1;
                          if (!rn[ke]) {
                            if (!Ze(h, ut(qe, k, ""))) {
                              if (!((ke === "src" || ke === "xlink:href" || ke === "href") && _ !== "script" && ct(qe, "data:") === 0 && ar[_])) {
                                if (!(ve && !Ze(nt, ut(qe, k, "")))) {
                                  if (qe) return !1;
                                }
                              }
                            }
                          }
                        }
                      }
                      return !0;
                    }, Fn = function(_) {
                      var ke = void 0, qe = void 0, vt = void 0, Dt = void 0;
                      or("beforeSanitizeAttributes", _, null);
                      var Ot = _.attributes;
                      if (Ot) {
                        var Et = {
                          attrName: "",
                          attrValue: "",
                          keepAttr: !0,
                          allowedAttributes: d
                        };
                        for (Dt = Ot.length; Dt--; ) {
                          ke = Ot[Dt];
                          var sr = ke, zr = sr.name, yn = sr.namespaceURI;
                          if (qe = it(ke.value), vt = Fr(zr), Et.attrName = vt, Et.attrValue = qe, Et.keepAttr = !0, Et.forceKeepAttr = void 0, or("uponSanitizeAttribute", _, Et), qe = Et.attrValue, !Et.forceKeepAttr && (Rn(zr, _), !!Et.keepAttr)) {
                            if (Ze(/\/>/i, qe)) {
                              Rn(zr, _);
                              continue;
                            }
                            pe && (qe = ut(qe, ge, " "), qe = ut(qe, Oe, " "));
                            var Bn = Fr(_.nodeName);
                            if (Pn(Bn, vt, qe))
                              try {
                                yn ? _.setAttributeNS(yn, zr, qe) : _.setAttribute(zr, qe), Ce(De.removed);
                              } catch {
                              }
                          }
                        }
                        or("afterSanitizeAttributes", _, null);
                      }
                    }, Jn = function _e(_) {
                      var ke = void 0, qe = ln(_);
                      for (or("beforeSanitizeShadowDOM", _, null); ke = qe.nextNode(); )
                        or("uponSanitizeShadowNode", ke, null), !gn(ke) && (ke.content instanceof wt && _e(ke.content), Fn(ke));
                      or("afterSanitizeShadowDOM", _, null);
                    };
                    return De.sanitize = function(_e, _) {
                      var ke = void 0, qe = void 0, vt = void 0, Dt = void 0, Ot = void 0;
                      if (on = !_e, on && (_e = "<!-->"), typeof _e != "string" && !qr(_e)) {
                        if (typeof _e.toString != "function")
                          throw yt("toString is not a function");
                        if (_e = _e.toString(), typeof _e != "string")
                          throw yt("dirty is not a string, aborting");
                      }
                      if (!De.isSupported) {
                        if (Xt(Ne.toStaticHTML) === "object" || typeof Ne.toStaticHTML == "function") {
                          if (typeof _e == "string")
                            return Ne.toStaticHTML(_e);
                          if (qr(_e))
                            return Ne.toStaticHTML(_e.outerHTML);
                        }
                        return _e;
                      }
                      if ($e || sn(_), De.removed = [], typeof _e == "string" && (Wr = !1), !Wr) if (_e instanceof At)
                        ke = Ln("<!---->"), qe = ke.ownerDocument.importNode(_e, !0), qe.nodeType === 1 && qe.nodeName === "BODY" || qe.nodeName === "HTML" ? ke = qe : ke.appendChild(qe);
                      else {
                        if (!bt && !pe && !Ae && // eslint-disable-next-line unicorn/prefer-includes
                        _e.indexOf("<") === -1)
                          return E && Pr ? E.createHTML(_e) : _e;
                        if (ke = Ln(_e), !ke)
                          return bt ? null : N;
                      }
                      ke && ot && ir(ke.firstChild);
                      for (var Et = ln(Wr ? _e : ke); vt = Et.nextNode(); )
                        vt.nodeType === 3 && vt === Dt || gn(vt) || (vt.content instanceof wt && Jn(vt.content), Fn(vt), Dt = vt);
                      if (Dt = null, Wr)
                        return _e;
                      if (bt) {
                        if (nr)
                          for (Ot = w.call(ke.ownerDocument); ke.firstChild; )
                            Ot.appendChild(ke.firstChild);
                        else
                          Ot = ke;
                        return Rr && (Ot = H.call(Ke, Ot, !0)), Ot;
                      }
                      var sr = Ae ? ke.outerHTML : ke.innerHTML;
                      return pe && (sr = ut(sr, ge, " "), sr = ut(sr, Oe, " ")), E && Pr ? E.createHTML(sr) : sr;
                    }, De.setConfig = function(_e) {
                      sn(_e), $e = !0;
                    }, De.clearConfig = function() {
                      Tr = null, $e = !1;
                    }, De.isValidAttribute = function(_e, _, ke) {
                      Tr || sn({});
                      var qe = Fr(_e), vt = Fr(_);
                      return Pn(qe, vt, ke);
                    }, De.addHook = function(_e, _) {
                      typeof _ == "function" && (U[_e] = U[_e] || [], ze(U[_e], _));
                    }, De.removeHook = function(_e) {
                      U[_e] && Ce(U[_e]);
                    }, De.removeHooks = function(_e) {
                      U[_e] && (U[_e] = []);
                    }, De.removeAllHooks = function() {
                      U = {};
                    }, De;
                  }
                  var zt = Nr();
                  return zt;
                });
              }
            ),
            /***/
            928: (
              /***/
              function(j, le, Z) {
                var ce = Z(322);
                function ne(J, V, ue) {
                  var oe, fe;
                  if (ue = ue || 0, !ce(V))
                    return -1;
                  if (Array.prototype.indexOf)
                    return Array.prototype.indexOf.call(V, J, ue);
                  for (fe = V.length, oe = ue; ue >= 0 && oe < fe; oe += 1)
                    if (V[oe] === J)
                      return oe;
                  return -1;
                }
                j.exports = ne;
              }
            ),
            /***/
            690: (
              /***/
              function(j, le, Z) {
                var ce = Z(322), ne = Z(893), J = Z(956);
                function V(ue, oe, fe) {
                  ce(ue) ? ne(ue, oe, fe) : J(ue, oe, fe);
                }
                j.exports = V;
              }
            ),
            /***/
            893: (
              /***/
              function(j) {
                function le(Z, ce, ne) {
                  var J = 0, V = Z.length;
                  for (ne = ne || null; J < V && ce.call(ne, Z[J], J, Z) !== !1; J += 1)
                    ;
                }
                j.exports = le;
              }
            ),
            /***/
            956: (
              /***/
              function(j) {
                function le(Z, ce, ne) {
                  var J;
                  ne = ne || null;
                  for (J in Z)
                    if (Z.hasOwnProperty(J) && ce.call(ne, Z[J], J, Z) === !1)
                      break;
                }
                j.exports = le;
              }
            ),
            /***/
            990: (
              /***/
              function(j, le, Z) {
                var ce = Z(893);
                function ne(J) {
                  var V;
                  try {
                    V = Array.prototype.slice.call(J);
                  } catch {
                    V = [], ce(J, function(oe) {
                      V.push(oe);
                    });
                  }
                  return V;
                }
                j.exports = ne;
              }
            ),
            /***/
            755: (
              /***/
              function(j) {
                var le = "_feEventKey";
                function Z(ce, ne) {
                  var J = ce[le], V;
                  return J || (J = ce[le] = {}), V = J[ne], V || (V = J[ne] = []), V;
                }
                j.exports = Z;
              }
            ),
            /***/
            349: (
              /***/
              function(j, le, Z) {
                var ce = Z(758), ne = Z(690), J = Z(755);
                function V(fe, Te, X) {
                  if (ce(Te)) {
                    ne(Te.split(/\s+/g), function(he) {
                      ue(fe, he, X);
                    });
                    return;
                  }
                  ne(Te, function(he, me) {
                    ue(fe, me, he);
                  });
                }
                function ue(fe, Te, X) {
                  var he = J(fe, Te), me;
                  X ? (ne(he, function(Ce, ze) {
                    return X === Ce.handler ? (oe(fe, Te, Ce.wrappedHandler), me = ze, !1) : !0;
                  }), he.splice(me, 1)) : (ne(he, function(Ce) {
                    oe(fe, Te, Ce.wrappedHandler);
                  }), he.splice(0, he.length));
                }
                function oe(fe, Te, X) {
                  "removeEventListener" in fe ? fe.removeEventListener(Te, X) : "detachEvent" in fe && fe.detachEvent("on" + Te, X);
                }
                j.exports = V;
              }
            ),
            /***/
            348: (
              /***/
              function(j, le, Z) {
                var ce = Z(758), ne = Z(690), J = Z(755);
                function V(fe, Te, X, he) {
                  if (ce(Te)) {
                    ne(Te.split(/\s+/g), function(me) {
                      ue(fe, me, X, he);
                    });
                    return;
                  }
                  ne(Te, function(me, Ce) {
                    ue(fe, Ce, me, X);
                  });
                }
                function ue(fe, Te, X, he) {
                  function me(Ce) {
                    X.call(he || fe, Ce || window.event);
                  }
                  "addEventListener" in fe ? fe.addEventListener(Te, me) : "attachEvent" in fe && fe.attachEvent("on" + Te, me), oe(fe, Te, X, me);
                }
                function oe(fe, Te, X, he) {
                  var me = J(fe, Te), Ce = !1;
                  ne(me, function(ze) {
                    return ze.handler === X ? (Ce = !0, !1) : !0;
                  }), Ce || me.push({
                    handler: X,
                    wrappedHandler: he
                  });
                }
                j.exports = V;
              }
            ),
            /***/
            24: (
              /***/
              function(j, le, Z) {
                var ce = Z(322), ne = Z(929);
                function J(V, ue) {
                  if (ue = ce(ue) ? ue.join(" ") : ue, ue = ue.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""), ne(V.className.baseVal)) {
                    V.className = ue;
                    return;
                  }
                  V.className.baseVal = ue;
                }
                j.exports = J;
              }
            ),
            /***/
            204: (
              /***/
              function(j, le, Z) {
                var ce = Z(690), ne = Z(928), J = Z(902), V = Z(24);
                function ue(oe) {
                  var fe = Array.prototype.slice.call(arguments, 1), Te = oe.classList, X = [], he;
                  if (Te) {
                    ce(fe, function(me) {
                      oe.classList.add(me);
                    });
                    return;
                  }
                  he = J(oe), he && (fe = [].concat(he.split(/\s+/), fe)), ce(fe, function(me) {
                    ne(me, X) < 0 && X.push(me);
                  }), V(oe, X);
                }
                j.exports = ue;
              }
            ),
            /***/
            522: (
              /***/
              function(j, le, Z) {
                var ce = Z(758), ne = Z(690);
                function J(V, ue, oe) {
                  var fe = V.style;
                  if (ce(ue)) {
                    fe[ue] = oe;
                    return;
                  }
                  ne(ue, function(Te, X) {
                    fe[X] = Te;
                  });
                }
                j.exports = J;
              }
            ),
            /***/
            902: (
              /***/
              function(j, le, Z) {
                var ce = Z(929);
                function ne(J) {
                  return !J || !J.className ? "" : ce(J.className.baseVal) ? J.className : J.className.baseVal;
                }
                j.exports = ne;
              }
            ),
            /***/
            714: (
              /***/
              function(j, le, Z) {
                var ce = Z(928), ne = Z(902);
                function J(V, ue) {
                  var oe;
                  return V.classList ? V.classList.contains(ue) : (oe = ne(V).split(/\s+/), ce(ue, oe) > -1);
                }
                j.exports = J;
              }
            ),
            /***/
            471: (
              /***/
              function(j, le, Z) {
                var ce = Z(928), ne = Z(990), J = Element.prototype, V = J.matches || J.webkitMatchesSelector || J.mozMatchesSelector || J.msMatchesSelector || function(oe) {
                  var fe = this.document || this.ownerDocument;
                  return ce(this, ne(fe.querySelectorAll(oe))) > -1;
                };
                function ue(oe, fe) {
                  return V.call(oe, fe);
                }
                j.exports = ue;
              }
            ),
            /***/
            462: (
              /***/
              function(j, le, Z) {
                var ce = Z(893), ne = Z(928), J = Z(902), V = Z(24);
                function ue(oe) {
                  var fe = Array.prototype.slice.call(arguments, 1), Te = oe.classList, X, he;
                  if (Te) {
                    ce(fe, function(me) {
                      Te.remove(me);
                    });
                    return;
                  }
                  X = J(oe).split(/\s+/), he = [], ce(X, function(me) {
                    ne(me, fe) < 0 && he.push(me);
                  }), V(oe, he);
                }
                j.exports = ue;
              }
            ),
            /***/
            969: (
              /***/
              function(j) {
                function le(Z, ce) {
                  var ne = Object.prototype.hasOwnProperty, J, V, ue, oe;
                  for (ue = 1, oe = arguments.length; ue < oe; ue += 1) {
                    J = arguments[ue];
                    for (V in J)
                      ne.call(J, V) && (Z[V] = J[V]);
                  }
                  return Z;
                }
                j.exports = le;
              }
            ),
            /***/
            254: (
              /***/
              function(j, le, Z) {
                var ce = Z(956);
                function ne(J, V) {
                  var ue = document.createElement("img"), oe = "";
                  return ce(V, function(fe, Te) {
                    oe += "&" + Te + "=" + fe;
                  }), oe = oe.substring(1), ue.src = J + "?" + oe, ue.style.display = "none", document.body.appendChild(ue), document.body.removeChild(ue), ue;
                }
                j.exports = ne;
              }
            ),
            /***/
            391: (
              /***/
              function(j, le, Z) {
                var ce = Z(929), ne = Z(254), J = 7 * 24 * 60 * 60 * 1e3;
                function V(oe) {
                  var fe = (/* @__PURE__ */ new Date()).getTime();
                  return fe - oe > J;
                }
                function ue(oe, fe) {
                  var Te = "https://www.google-analytics.com/collect", X = location.hostname, he = "event", me = "use", Ce = "TOAST UI " + oe + " for " + X + ": Statistics", ze = window.localStorage.getItem(Ce);
                  !ce(window.tui) && window.tui.usageStatistics === !1 || ze && !V(ze) || (window.localStorage.setItem(Ce, (/* @__PURE__ */ new Date()).getTime()), setTimeout(function() {
                    (document.readyState === "interactive" || document.readyState === "complete") && ne(Te, {
                      v: 1,
                      t: he,
                      tid: fe,
                      cid: X,
                      dp: X,
                      dh: oe,
                      el: oe,
                      ec: me
                    });
                  }, 1e3));
                }
                j.exports = ue;
              }
            ),
            /***/
            322: (
              /***/
              function(j) {
                function le(Z) {
                  return Z instanceof Array;
                }
                j.exports = le;
              }
            ),
            /***/
            65: (
              /***/
              function(j, le, Z) {
                var ce = Z(929), ne = Z(934);
                function J(V) {
                  return !ce(V) && !ne(V);
                }
                j.exports = J;
              }
            ),
            /***/
            404: (
              /***/
              function(j, le, Z) {
                var ce = Z(790);
                function ne(J) {
                  return !ce(J);
                }
                j.exports = ne;
              }
            ),
            /***/
            294: (
              /***/
              function(j) {
                function le(Z) {
                  return Z instanceof Function;
                }
                j.exports = le;
              }
            ),
            /***/
            934: (
              /***/
              function(j) {
                function le(Z) {
                  return Z === null;
                }
                j.exports = le;
              }
            ),
            /***/
            758: (
              /***/
              function(j) {
                function le(Z) {
                  return typeof Z == "string" || Z instanceof String;
                }
                j.exports = le;
              }
            ),
            /***/
            790: (
              /***/
              function(j, le, Z) {
                var ce = Z(65);
                function ne(J) {
                  return ce(J) && J !== !1;
                }
                j.exports = ne;
              }
            ),
            /***/
            929: (
              /***/
              function(j) {
                function le(Z) {
                  return Z === void 0;
                }
                j.exports = le;
              }
            ),
            /***/
            479: (
              /***/
              function(j) {
                j.exports = Ie;
              }
            ),
            /***/
            481: (
              /***/
              function(j) {
                j.exports = Fe;
              }
            ),
            /***/
            43: (
              /***/
              function(j) {
                j.exports = Pe;
              }
            ),
            /***/
            814: (
              /***/
              function(j) {
                j.exports = Xe;
              }
            ),
            /***/
            311: (
              /***/
              function(j) {
                j.exports = et;
              }
            )
            /******/
          }, je = {};
          function te(j) {
            var le = je[j];
            if (le !== void 0)
              return le.exports;
            var Z = je[j] = {
              /******/
              // no module.id needed
              /******/
              // no module.loaded needed
              /******/
              exports: {}
              /******/
            };
            return Je[j].call(Z.exports, Z, Z.exports, te), Z.exports;
          }
          (function() {
            te.n = function(j) {
              var le = j && j.__esModule ? (
                /******/
                function() {
                  return j.default;
                }
              ) : (
                /******/
                function() {
                  return j;
                }
              );
              return te.d(le, { a: le }), le;
            };
          })(), function() {
            te.d = function(j, le) {
              for (var Z in le)
                te.o(le, Z) && !te.o(j, Z) && Object.defineProperty(j, Z, { enumerable: !0, get: le[Z] });
            };
          }(), function() {
            te.g = function() {
              if (typeof globalThis == "object") return globalThis;
              try {
                return this || new Function("return this")();
              } catch {
                if (typeof window == "object") return window;
              }
            }();
          }(), function() {
            te.o = function(j, le) {
              return Object.prototype.hasOwnProperty.call(j, le);
            };
          }();
          var Be = {};
          return function() {
            te.d(Be, {
              default: function() {
                return (
                  /* binding */
                  _W
                );
              }
            });
            var j = function() {
              return j = Object.assign || function(r) {
                for (var s, f = 1, g = arguments.length; f < g; f++) {
                  s = arguments[f];
                  for (var A in s) Object.prototype.hasOwnProperty.call(s, A) && (r[A] = s[A]);
                }
                return r;
              }, j.apply(this, arguments);
            };
            function le(n, r, s) {
              if (arguments.length === 2) for (var f = 0, g = r.length, A; f < g; f++)
                (A || !(f in r)) && (A || (A = Array.prototype.slice.call(r, 0, f)), A[f] = r[f]);
              return n.concat(A || Array.prototype.slice.call(r));
            }
            /*! *****************************************************************************
            		Copyright (c) Microsoft Corporation.
            
            		Permission to use, copy, modify, and/or distribute this software for any
            		purpose with or without fee is hereby granted.
            
            		THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
            		REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
            		AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
            		INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
            		LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
            		OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
            		PERFORMANCE OF THIS SOFTWARE.
            		***************************************************************************** */
            var Z = function(n, r) {
              return Z = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, f) {
                s.__proto__ = f;
              } || function(s, f) {
                for (var g in f)
                  Object.prototype.hasOwnProperty.call(f, g) && (s[g] = f[g]);
              }, Z(n, r);
            };
            function ce(n, r) {
              if (typeof r != "function" && r !== null)
                throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
              Z(n, r);
              function s() {
                this.constructor = n;
              }
              n.prototype = r === null ? Object.create(r) : (s.prototype = r.prototype, new s());
            }
            var ne = function() {
              return ne = Object.assign || function(r) {
                for (var s, f = 1, g = arguments.length; f < g; f++) {
                  s = arguments[f];
                  for (var A in s)
                    Object.prototype.hasOwnProperty.call(s, A) && (r[A] = s[A]);
                }
                return r;
              }, ne.apply(this, arguments);
            };
            function J(n, r, s) {
              if (arguments.length === 2)
                for (var f = 0, g = r.length, A; f < g; f++)
                  (A || !(f in r)) && (A || (A = Array.prototype.slice.call(r, 0, f)), A[f] = r[f]);
              return n.concat(A || Array.prototype.slice.call(r));
            }
            var V = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof te.g < "u" ? te.g : typeof self < "u" ? self : {}, ue = {};
            function oe(n) {
              var r, s, f = ue[n];
              if (f)
                return f;
              for (f = ue[n] = [], r = 0; r < 128; r++)
                s = String.fromCharCode(r), /^[0-9a-z]$/i.test(s) ? f.push(s) : f.push("%" + ("0" + r.toString(16).toUpperCase()).slice(-2));
              for (r = 0; r < n.length; r++)
                f[n.charCodeAt(r)] = n[r];
              return f;
            }
            function fe(n, r, s) {
              var f, g, A, D, L, Y = "";
              for (typeof r != "string" && (s = r, r = fe.defaultChars), typeof s > "u" && (s = !0), L = oe(r), f = 0, g = n.length; f < g; f++) {
                if (A = n.charCodeAt(f), s && A === 37 && f + 2 < g && /^[0-9a-f]{2}$/i.test(n.slice(f + 1, f + 3))) {
                  Y += n.slice(f, f + 3), f += 2;
                  continue;
                }
                if (A < 128) {
                  Y += L[A];
                  continue;
                }
                if (A >= 55296 && A <= 57343) {
                  if (A >= 55296 && A <= 56319 && f + 1 < g && (D = n.charCodeAt(f + 1), D >= 56320 && D <= 57343)) {
                    Y += encodeURIComponent(n[f] + n[f + 1]), f++;
                    continue;
                  }
                  Y += "%EF%BF%BD";
                  continue;
                }
                Y += encodeURIComponent(n[f]);
              }
              return Y;
            }
            fe.defaultChars = ";/?:@&=+$,-_.!~*'()#", fe.componentChars = "-_.!~*'()";
            var Te = fe, X = {}, he = {}, me = "Á", Ce = "á", ze = "Ă", ht = "ă", Le = "∾", ut = "∿", ct = "∾̳", it = "Â", Ze = "â", yt = "´", Tt = "А", Bt = "а", We = "Æ", mt = "æ", kt = "⁡", dt = "𝔄", Wt = "𝔞", Yt = "À", K = "à", $ = "ℵ", P = "ℵ", B = "Α", I = "α", Q = "Ā", re = "ā", be = "⨿", Ye = "&", lt = "&", Qe = "⩕", xt = "⩓", ft = "∧", $t = "⩜", It = "⩘", Xt = "⩚", St = "∠", cr = "⦤", Vr = "∠", Nr = "⦨", zt = "⦩", Ne = "⦪", De = "⦫", Ke = "⦬", rt = "⦭", wt = "⦮", er = "⦯", At = "∡", _t = "∟", tr = "⊾", Dr = "⦝", rr = "∢", Hr = "Å", Ir = "⍼", Ur = "Ą", Or = "ą", yr = "𝔸", Mr = "𝕒", Gt = "⩯", kr = "≈", Vt = "⩰", jt = "≊", E = "≋", N = "'", y = "⁡", m = "≈", b = "≊", w = "Å", O = "å", H = "𝒜", ee = "𝒶", U = "≔", ge = "*", Oe = "≈", xe = "≍", Ge = "Ã", nt = "ã", k = "Ä", h = "ä", o = "∳", c = "⨑", d = "≌", C = "϶", x = "‵", M = "∽", q = "⋍", W = "∖", ve = "⫧", pe = "⊽", Ae = "⌅", $e = "⌆", ot = "⌅", bt = "⎵", nr = "⎶", Rr = "≌", Pr = "Б", Dn = "б", hn = "„", Wr = "∵", br = "∵", Sr = "∵", vn = "⦰", ar = "϶", dn = "ℬ", rn = "ℬ", nn = "Β", an = "β", pn = "ℶ", wr = "≬", $r = "𝔅", on = "𝔟", Cr = "⋂", On = "◯", Mn = "⋃", Fr = "⨀", Tr = "⨁", Ar = "⨂", sn = "⨆", Gr = "★", Br = "▽", fr = "△", mn = "⨄", Kn = "⋁", ir = "⋀", Rn = "⤍", Ln = "⧫", ln = "▪", In = "▴", qr = "▾", or = "◂", gn = "▸", Pn = "␣", Fn = "▒", Jn = "░", _e = "▓", _ = "█", ke = "=⃥", qe = "≡⃥", vt = "⫭", Dt = "⌐", Ot = "𝔹", Et = "𝕓", sr = "⊥", zr = "⊥", yn = "⋈", Bn = "⧉", qn = "┐", Ja = "╕", Ya = "╖", Za = "╗", Qa = "┌", Kt = "╒", Jt = "╓", Xa = "╔", ei = "─", ti = "═", _r = "┬", ri = "╤", Yn = "╥", Zn = "╦", ni = "┴", ai = "╧", zn = "╨", ii = "╩", Qn = "⊟", un = "⊞", oi = "⊠", si = "┘", li = "╛", ui = "╜", ci = "╝", fi = "└", Xn = "╘", sa = "╙", hi = "╚", la = "│", vi = "║", ua = "┼", ca = "╪", di = "╫", pi = "╬", kn = "┤", mi = "╡", bn = "╢", gi = "╣", yi = "├", Sn = "╞", fa = "╟", ha = "╠", ki = "‵", va = "˘", da = "˘", wn = "¦", pa = "𝒷", Cn = "ℬ", bi = "⁏", jr = "∽", cn = "⋍", Kr = "⧅", hr = "\\", Ht = "⟈", ma = "•", Si = "•", ga = "≎", wi = "⪮", ya = "≏", ka = "≎", _n = "≏", Jr = "Ć", ea = "ć", ba = "⩄", ta = "⩉", Ci = "⩋", Ti = "∩", Ai = "⋒", xi = "⩇", Sa = "⩀", wa = "ⅅ", Ei = "∩︀", Ca = "⁁", Ni = "ˇ", Di = "ℭ", Oi = "⩍", Mi = "Č", Ri = "č", Li = "Ç", Ta = "ç", Ii = "Ĉ", Pi = "ĉ", ra = "∰", Fi = "⩌", Aa = "⩐", Bi = "Ċ", qi = "ċ", zi = "¸", xa = "¸", Ea = "⦲", Na = "¢", _i = "·", Da = "·", Vi = "𝔠", Oa = "ℭ", e = "Ч", i = "ч", t = "✓", a = "✓", l = "Χ", u = "χ", v = "ˆ", p = "≗", S = "↺", T = "↻", R = "⊛", z = "⊚", F = "⊝", G = "⊙", ae = "®", Se = "Ⓢ", Me = "⊖", de = "⊕", st = "⊗", tt = "○", Ue = "⧃", at = "≗", gt = "⨐", Ct = "⫯", vr = "⧂", Pt = "∲", Zt = "”", Mt = "’", Tn = "♣", dr = "♣", fn = ":", lr = "∷", Nt = "⩴", Hi = "≔", Ui = "≔", Vn = ",", Yr = "@", Ma = "∁", Ra = "∘", cl = "∁", fl = "ℂ", hl = "≅", vl = "⩭", dl = "≡", pl = "∮", ml = "∯", gl = "∮", yl = "𝕔", kl = "ℂ", bl = "∐", Sl = "∐", wl = "©", Cl = "©", Tl = "℗", Al = "∳", xl = "↵", El = "✗", Nl = "⨯", Dl = "𝒞", Ol = "𝒸", Ml = "⫏", Rl = "⫑", Ll = "⫐", Il = "⫒", Pl = "⋯", Fl = "⤸", Bl = "⤵", ql = "⋞", zl = "⋟", _l = "↶", Vl = "⤽", Hl = "⩈", Ul = "⩆", Wl = "≍", $l = "∪", Gl = "⋓", jl = "⩊", Kl = "⊍", Jl = "⩅", Yl = "∪︀", Zl = "↷", Ql = "⤼", Xl = "⋞", eu = "⋟", tu = "⋎", ru = "⋏", nu = "¤", au = "↶", iu = "↷", ou = "⋎", su = "⋏", lu = "∲", uu = "∱", cu = "⌭", fu = "†", hu = "‡", vu = "ℸ", du = "↓", pu = "↡", mu = "⇓", gu = "‐", yu = "⫤", ku = "⊣", bu = "⤏", Su = "˝", wu = "Ď", Cu = "ď", Tu = "Д", Au = "д", xu = "‡", Eu = "⇊", Nu = "ⅅ", Du = "ⅆ", Ou = "⤑", Mu = "⩷", Ru = "°", Lu = "∇", Iu = "Δ", Pu = "δ", Fu = "⦱", Bu = "⥿", qu = "𝔇", zu = "𝔡", _u = "⥥", Vu = "⇃", Hu = "⇂", Uu = "´", Wu = "˙", $u = "˝", Gu = "`", ju = "˜", Ku = "⋄", Ju = "⋄", Yu = "⋄", Zu = "♦", Qu = "♦", Xu = "¨", ec = "ⅆ", tc = "ϝ", rc = "⋲", nc = "÷", ac = "÷", ic = "⋇", oc = "⋇", sc = "Ђ", lc = "ђ", uc = "⌞", cc = "⌍", fc = "$", hc = "𝔻", vc = "𝕕", dc = "¨", pc = "˙", mc = "⃜", gc = "≐", yc = "≑", kc = "≐", bc = "∸", Sc = "∔", wc = "⊡", Cc = "⌆", Tc = "∯", Ac = "¨", xc = "⇓", Ec = "⇐", Nc = "⇔", Dc = "⫤", Oc = "⟸", Mc = "⟺", Rc = "⟹", Lc = "⇒", Ic = "⊨", Pc = "⇑", Fc = "⇕", Bc = "∥", qc = "⤓", zc = "↓", _c = "↓", Vc = "⇓", Hc = "⇵", Uc = "̑", Wc = "⇊", $c = "⇃", Gc = "⇂", jc = "⥐", Kc = "⥞", Jc = "⥖", Yc = "↽", Zc = "⥟", Qc = "⥗", Xc = "⇁", ef = "↧", tf = "⊤", rf = "⤐", nf = "⌟", af = "⌌", of = "𝒟", sf = "𝒹", lf = "Ѕ", uf = "ѕ", cf = "⧶", ff = "Đ", hf = "đ", vf = "⋱", df = "▿", pf = "▾", mf = "⇵", gf = "⥯", yf = "⦦", kf = "Џ", bf = "џ", Sf = "⟿", wf = "É", Cf = "é", Tf = "⩮", Af = "Ě", xf = "ě", Ef = "Ê", Nf = "ê", Df = "≖", Of = "≕", Mf = "Э", Rf = "э", Lf = "⩷", If = "Ė", Pf = "ė", Ff = "≑", Bf = "ⅇ", qf = "≒", zf = "𝔈", _f = "𝔢", Vf = "⪚", Hf = "È", Uf = "è", Wf = "⪖", $f = "⪘", Gf = "⪙", jf = "∈", Kf = "⏧", Jf = "ℓ", Yf = "⪕", Zf = "⪗", Qf = "Ē", Xf = "ē", eh = "∅", th = "∅", rh = "◻", nh = "∅", ah = "▫", ih = " ", oh = " ", sh = " ", lh = "Ŋ", uh = "ŋ", ch = " ", fh = "Ę", hh = "ę", vh = "𝔼", dh = "𝕖", ph = "⋕", mh = "⧣", gh = "⩱", yh = "ε", kh = "Ε", bh = "ε", Sh = "ϵ", wh = "≖", Ch = "≕", Th = "≂", Ah = "⪖", xh = "⪕", Eh = "⩵", Nh = "=", Dh = "≂", Oh = "≟", Mh = "⇌", Rh = "≡", Lh = "⩸", Ih = "⧥", Ph = "⥱", Fh = "≓", Bh = "ℯ", qh = "ℰ", zh = "≐", _h = "⩳", Vh = "≂", Hh = "Η", Uh = "η", Wh = "Ð", $h = "ð", Gh = "Ë", jh = "ë", Kh = "€", Jh = "!", Yh = "∃", Zh = "∃", Qh = "ℰ", Xh = "ⅇ", ev = "ⅇ", tv = "≒", rv = "Ф", nv = "ф", av = "♀", iv = "ﬃ", ov = "ﬀ", sv = "ﬄ", lv = "𝔉", uv = "𝔣", cv = "ﬁ", fv = "◼", hv = "▪", vv = "fj", dv = "♭", pv = "ﬂ", mv = "▱", gv = "ƒ", yv = "𝔽", kv = "𝕗", bv = "∀", Sv = "∀", wv = "⋔", Cv = "⫙", Tv = "ℱ", Av = "⨍", xv = "½", Ev = "⅓", Nv = "¼", Dv = "⅕", Ov = "⅙", Mv = "⅛", Rv = "⅔", Lv = "⅖", Iv = "¾", Pv = "⅗", Fv = "⅜", Bv = "⅘", qv = "⅚", zv = "⅝", _v = "⅞", Vv = "⁄", Hv = "⌢", Uv = "𝒻", Wv = "ℱ", $v = "ǵ", Gv = "Γ", jv = "γ", Kv = "Ϝ", Jv = "ϝ", Yv = "⪆", Zv = "Ğ", Qv = "ğ", Xv = "Ģ", ed = "Ĝ", td = "ĝ", rd = "Г", nd = "г", ad = "Ġ", id = "ġ", od = "≥", sd = "≧", ld = "⪌", ud = "⋛", cd = "≥", fd = "≧", hd = "⩾", vd = "⪩", dd = "⩾", pd = "⪀", md = "⪂", gd = "⪄", yd = "⋛︀", kd = "⪔", bd = "𝔊", Sd = "𝔤", wd = "≫", Cd = "⋙", Td = "⋙", Ad = "ℷ", xd = "Ѓ", Ed = "ѓ", Nd = "⪥", Dd = "≷", Od = "⪒", Md = "⪤", Rd = "⪊", Ld = "⪊", Id = "⪈", Pd = "≩", Fd = "⪈", Bd = "≩", qd = "⋧", zd = "𝔾", _d = "𝕘", Vd = "`", Hd = "≥", Ud = "⋛", Wd = "≧", $d = "⪢", Gd = "≷", jd = "⩾", Kd = "≳", Jd = "𝒢", Yd = "ℊ", Zd = "≳", Qd = "⪎", Xd = "⪐", ep = "⪧", tp = "⩺", rp = ">", np = ">", ap = "≫", ip = "⋗", op = "⦕", sp = "⩼", lp = "⪆", up = "⥸", cp = "⋗", fp = "⋛", hp = "⪌", vp = "≷", dp = "≳", pp = "≩︀", mp = "≩︀", gp = "ˇ", yp = " ", kp = "½", bp = "ℋ", Sp = "Ъ", wp = "ъ", Cp = "⥈", Tp = "↔", Ap = "⇔", xp = "↭", Ep = "^", Np = "ℏ", Dp = "Ĥ", Op = "ĥ", Mp = "♥", Rp = "♥", Lp = "…", Ip = "⊹", Pp = "𝔥", Fp = "ℌ", Bp = "ℋ", qp = "⤥", zp = "⤦", _p = "⇿", Vp = "∻", Hp = "↩", Up = "↪", Wp = "𝕙", $p = "ℍ", Gp = "―", jp = "─", Kp = "𝒽", Jp = "ℋ", Yp = "ℏ", Zp = "Ħ", Qp = "ħ", Xp = "≎", em = "≏", tm = "⁃", rm = "‐", nm = "Í", am = "í", im = "⁣", om = "Î", sm = "î", lm = "И", um = "и", cm = "İ", fm = "Е", hm = "е", vm = "¡", dm = "⇔", pm = "𝔦", mm = "ℑ", gm = "Ì", ym = "ì", km = "ⅈ", bm = "⨌", Sm = "∭", wm = "⧜", Cm = "℩", Tm = "Ĳ", Am = "ĳ", xm = "Ī", Em = "ī", Nm = "ℑ", Dm = "ⅈ", Om = "ℐ", Mm = "ℑ", Rm = "ı", Lm = "ℑ", Im = "⊷", Pm = "Ƶ", Fm = "⇒", Bm = "℅", qm = "∞", zm = "⧝", _m = "ı", Vm = "⊺", Hm = "∫", Um = "∬", Wm = "ℤ", $m = "∫", Gm = "⊺", jm = "⋂", Km = "⨗", Jm = "⨼", Ym = "⁣", Zm = "⁢", Qm = "Ё", Xm = "ё", eg = "Į", tg = "į", rg = "𝕀", ng = "𝕚", ag = "Ι", ig = "ι", og = "⨼", sg = "¿", lg = "𝒾", ug = "ℐ", cg = "∈", fg = "⋵", hg = "⋹", vg = "⋴", dg = "⋳", pg = "∈", mg = "⁢", gg = "Ĩ", yg = "ĩ", kg = "І", bg = "і", Sg = "Ï", wg = "ï", Cg = "Ĵ", Tg = "ĵ", Ag = "Й", xg = "й", Eg = "𝔍", Ng = "𝔧", Dg = "ȷ", Og = "𝕁", Mg = "𝕛", Rg = "𝒥", Lg = "𝒿", Ig = "Ј", Pg = "ј", Fg = "Є", Bg = "є", qg = "Κ", zg = "κ", _g = "ϰ", Vg = "Ķ", Hg = "ķ", Ug = "К", Wg = "к", $g = "𝔎", Gg = "𝔨", jg = "ĸ", Kg = "Х", Jg = "х", Yg = "Ќ", Zg = "ќ", Qg = "𝕂", Xg = "𝕜", ey = "𝒦", ty = "𝓀", ry = "⇚", ny = "Ĺ", ay = "ĺ", iy = "⦴", oy = "ℒ", sy = "Λ", ly = "λ", uy = "⟨", cy = "⟪", fy = "⦑", hy = "⟨", vy = "⪅", dy = "ℒ", py = "«", my = "⇤", gy = "⤟", yy = "←", ky = "↞", by = "⇐", Sy = "⤝", wy = "↩", Cy = "↫", Ty = "⤹", Ay = "⥳", xy = "↢", Ey = "⤙", Ny = "⤛", Dy = "⪫", Oy = "⪭", My = "⪭︀", Ry = "⤌", Ly = "⤎", Iy = "❲", Py = "{", Fy = "[", By = "⦋", qy = "⦏", zy = "⦍", _y = "Ľ", Vy = "ľ", Hy = "Ļ", Uy = "ļ", Wy = "⌈", $y = "{", Gy = "Л", jy = "л", Ky = "⤶", Jy = "“", Yy = "„", Zy = "⥧", Qy = "⥋", Xy = "↲", ek = "≤", tk = "≦", rk = "⟨", nk = "⇤", ak = "←", ik = "←", ok = "⇐", sk = "⇆", lk = "↢", uk = "⌈", ck = "⟦", fk = "⥡", hk = "⥙", vk = "⇃", dk = "⌊", pk = "↽", mk = "↼", gk = "⇇", yk = "↔", kk = "↔", bk = "⇔", Sk = "⇆", wk = "⇋", Ck = "↭", Tk = "⥎", Ak = "↤", xk = "⊣", Ek = "⥚", Nk = "⋋", Dk = "⧏", Ok = "⊲", Mk = "⊴", Rk = "⥑", Lk = "⥠", Ik = "⥘", Pk = "↿", Fk = "⥒", Bk = "↼", qk = "⪋", zk = "⋚", _k = "≤", Vk = "≦", Hk = "⩽", Uk = "⪨", Wk = "⩽", $k = "⩿", Gk = "⪁", jk = "⪃", Kk = "⋚︀", Jk = "⪓", Yk = "⪅", Zk = "⋖", Qk = "⋚", Xk = "⪋", eb = "⋚", tb = "≦", rb = "≶", nb = "≶", ab = "⪡", ib = "≲", ob = "⩽", sb = "≲", lb = "⥼", ub = "⌊", cb = "𝔏", fb = "𝔩", hb = "≶", vb = "⪑", db = "⥢", pb = "↽", mb = "↼", gb = "⥪", yb = "▄", kb = "Љ", bb = "љ", Sb = "⇇", wb = "≪", Cb = "⋘", Tb = "⌞", Ab = "⇚", xb = "⥫", Eb = "◺", Nb = "Ŀ", Db = "ŀ", Ob = "⎰", Mb = "⎰", Rb = "⪉", Lb = "⪉", Ib = "⪇", Pb = "≨", Fb = "⪇", Bb = "≨", qb = "⋦", zb = "⟬", _b = "⇽", Vb = "⟦", Hb = "⟵", Ub = "⟵", Wb = "⟸", $b = "⟷", Gb = "⟷", jb = "⟺", Kb = "⟼", Jb = "⟶", Yb = "⟶", Zb = "⟹", Qb = "↫", Xb = "↬", e0 = "⦅", t0 = "𝕃", r0 = "𝕝", n0 = "⨭", a0 = "⨴", i0 = "∗", o0 = "_", s0 = "↙", l0 = "↘", u0 = "◊", c0 = "◊", f0 = "⧫", h0 = "(", v0 = "⦓", d0 = "⇆", p0 = "⌟", m0 = "⇋", g0 = "⥭", y0 = "‎", k0 = "⊿", b0 = "‹", S0 = "𝓁", w0 = "ℒ", C0 = "↰", T0 = "↰", A0 = "≲", x0 = "⪍", E0 = "⪏", N0 = "[", D0 = "‘", O0 = "‚", M0 = "Ł", R0 = "ł", L0 = "⪦", I0 = "⩹", P0 = "<", F0 = "<", B0 = "≪", q0 = "⋖", z0 = "⋋", _0 = "⋉", V0 = "⥶", H0 = "⩻", U0 = "◃", W0 = "⊴", $0 = "◂", G0 = "⦖", j0 = "⥊", K0 = "⥦", J0 = "≨︀", Y0 = "≨︀", Z0 = "¯", Q0 = "♂", X0 = "✠", eS = "✠", tS = "↦", rS = "↦", nS = "↧", aS = "↤", iS = "↥", oS = "▮", sS = "⨩", lS = "М", uS = "м", cS = "—", fS = "∺", hS = "∡", vS = " ", dS = "ℳ", pS = "𝔐", mS = "𝔪", gS = "℧", yS = "µ", kS = "*", bS = "⫰", SS = "∣", wS = "·", CS = "⊟", TS = "−", AS = "∸", xS = "⨪", ES = "∓", NS = "⫛", DS = "…", OS = "∓", MS = "⊧", RS = "𝕄", LS = "𝕞", IS = "∓", PS = "𝓂", FS = "ℳ", BS = "∾", qS = "Μ", zS = "μ", _S = "⊸", VS = "⊸", HS = "∇", US = "Ń", WS = "ń", $S = "∠⃒", GS = "≉", jS = "⩰̸", KS = "≋̸", JS = "ŉ", YS = "≉", ZS = "♮", QS = "ℕ", XS = "♮", ew = " ", tw = "≎̸", rw = "≏̸", nw = "⩃", aw = "Ň", iw = "ň", ow = "Ņ", sw = "ņ", lw = "≇", uw = "⩭̸", cw = "⩂", fw = "Н", hw = "н", vw = "–", dw = "⤤", pw = "↗", mw = "⇗", gw = "↗", yw = "≠", kw = "≐̸", bw = "​", Sw = "​", ww = "​", Cw = "​", Tw = "≢", Aw = "⤨", xw = "≂̸", Ew = "≫", Nw = "≪", Dw = `
`, Ow = "∄", Mw = "∄", Rw = "𝔑", Lw = "𝔫", Iw = "≧̸", Pw = "≱", Fw = "≱", Bw = "≧̸", qw = "⩾̸", zw = "⩾̸", _w = "⋙̸", Vw = "≵", Hw = "≫⃒", Uw = "≯", Ww = "≯", $w = "≫̸", Gw = "↮", jw = "⇎", Kw = "⫲", Jw = "∋", Yw = "⋼", Zw = "⋺", Qw = "∋", Xw = "Њ", e1 = "њ", t1 = "↚", r1 = "⇍", n1 = "‥", a1 = "≦̸", i1 = "≰", o1 = "↚", s1 = "⇍", l1 = "↮", u1 = "⇎", c1 = "≰", f1 = "≦̸", h1 = "⩽̸", v1 = "⩽̸", d1 = "≮", p1 = "⋘̸", m1 = "≴", g1 = "≪⃒", y1 = "≮", k1 = "⋪", b1 = "⋬", S1 = "≪̸", w1 = "∤", C1 = "⁠", T1 = " ", A1 = "𝕟", x1 = "ℕ", E1 = "⫬", N1 = "¬", D1 = "≢", O1 = "≭", M1 = "∦", R1 = "∉", L1 = "≠", I1 = "≂̸", P1 = "∄", F1 = "≯", B1 = "≱", q1 = "≧̸", z1 = "≫̸", _1 = "≹", V1 = "⩾̸", H1 = "≵", U1 = "≎̸", W1 = "≏̸", $1 = "∉", G1 = "⋵̸", j1 = "⋹̸", K1 = "∉", J1 = "⋷", Y1 = "⋶", Z1 = "⧏̸", Q1 = "⋪", X1 = "⋬", eC = "≮", tC = "≰", rC = "≸", nC = "≪̸", aC = "⩽̸", iC = "≴", oC = "⪢̸", sC = "⪡̸", lC = "∌", uC = "∌", cC = "⋾", fC = "⋽", hC = "⊀", vC = "⪯̸", dC = "⋠", pC = "∌", mC = "⧐̸", gC = "⋫", yC = "⋭", kC = "⊏̸", bC = "⋢", SC = "⊐̸", wC = "⋣", CC = "⊂⃒", TC = "⊈", AC = "⊁", xC = "⪰̸", EC = "⋡", NC = "≿̸", DC = "⊃⃒", OC = "⊉", MC = "≁", RC = "≄", LC = "≇", IC = "≉", PC = "∤", FC = "∦", BC = "∦", qC = "⫽⃥", zC = "∂̸", _C = "⨔", VC = "⊀", HC = "⋠", UC = "⊀", WC = "⪯̸", $C = "⪯̸", GC = "⤳̸", jC = "↛", KC = "⇏", JC = "↝̸", YC = "↛", ZC = "⇏", QC = "⋫", XC = "⋭", eT = "⊁", tT = "⋡", rT = "⪰̸", nT = "𝒩", aT = "𝓃", iT = "∤", oT = "∦", sT = "≁", lT = "≄", uT = "≄", cT = "∤", fT = "∦", hT = "⋢", vT = "⋣", dT = "⊄", pT = "⫅̸", mT = "⊈", gT = "⊂⃒", yT = "⊈", kT = "⫅̸", bT = "⊁", ST = "⪰̸", wT = "⊅", CT = "⫆̸", TT = "⊉", AT = "⊃⃒", xT = "⊉", ET = "⫆̸", NT = "≹", DT = "Ñ", OT = "ñ", MT = "≸", RT = "⋪", LT = "⋬", IT = "⋫", PT = "⋭", FT = "Ν", BT = "ν", qT = "#", zT = "№", _T = " ", VT = "≍⃒", HT = "⊬", UT = "⊭", WT = "⊮", $T = "⊯", GT = "≥⃒", jT = ">⃒", KT = "⤄", JT = "⧞", YT = "⤂", ZT = "≤⃒", QT = "<⃒", XT = "⊴⃒", eA = "⤃", tA = "⊵⃒", rA = "∼⃒", nA = "⤣", aA = "↖", iA = "⇖", oA = "↖", sA = "⤧", lA = "Ó", uA = "ó", cA = "⊛", fA = "Ô", hA = "ô", vA = "⊚", dA = "О", pA = "о", mA = "⊝", gA = "Ő", yA = "ő", kA = "⨸", bA = "⊙", SA = "⦼", wA = "Œ", CA = "œ", TA = "⦿", AA = "𝔒", xA = "𝔬", EA = "˛", NA = "Ò", DA = "ò", OA = "⧁", MA = "⦵", RA = "Ω", LA = "∮", IA = "↺", PA = "⦾", FA = "⦻", BA = "‾", qA = "⧀", zA = "Ō", _A = "ō", VA = "Ω", HA = "ω", UA = "Ο", WA = "ο", $A = "⦶", GA = "⊖", jA = "𝕆", KA = "𝕠", JA = "⦷", YA = "“", ZA = "‘", QA = "⦹", XA = "⊕", ex = "↻", tx = "⩔", rx = "∨", nx = "⩝", ax = "ℴ", ix = "ℴ", ox = "ª", sx = "º", lx = "⊶", ux = "⩖", cx = "⩗", fx = "⩛", hx = "Ⓢ", vx = "𝒪", dx = "ℴ", px = "Ø", mx = "ø", gx = "⊘", yx = "Õ", kx = "õ", bx = "⨶", Sx = "⨷", wx = "⊗", Cx = "Ö", Tx = "ö", Ax = "⌽", xx = "‾", Ex = "⏞", Nx = "⎴", Dx = "⏜", Ox = "¶", Mx = "∥", Rx = "∥", Lx = "⫳", Ix = "⫽", Px = "∂", Fx = "∂", Bx = "П", qx = "п", zx = "%", _x = ".", Vx = "‰", Hx = "⊥", Ux = "‱", Wx = "𝔓", $x = "𝔭", Gx = "Φ", jx = "φ", Kx = "ϕ", Jx = "ℳ", Yx = "☎", Zx = "Π", Qx = "π", Xx = "⋔", eE = "ϖ", tE = "ℏ", rE = "ℎ", nE = "ℏ", aE = "⨣", iE = "⊞", oE = "⨢", sE = "+", lE = "∔", uE = "⨥", cE = "⩲", fE = "±", hE = "±", vE = "⨦", dE = "⨧", pE = "±", mE = "ℌ", gE = "⨕", yE = "𝕡", kE = "ℙ", bE = "£", SE = "⪷", wE = "⪻", CE = "≺", TE = "≼", AE = "⪷", xE = "≺", EE = "≼", NE = "≺", DE = "⪯", OE = "≼", ME = "≾", RE = "⪯", LE = "⪹", IE = "⪵", PE = "⋨", FE = "⪯", BE = "⪳", qE = "≾", zE = "′", _E = "″", VE = "ℙ", HE = "⪹", UE = "⪵", WE = "⋨", $E = "∏", GE = "∏", jE = "⌮", KE = "⌒", JE = "⌓", YE = "∝", ZE = "∝", QE = "∷", XE = "∝", eN = "≾", tN = "⊰", rN = "𝒫", nN = "𝓅", aN = "Ψ", iN = "ψ", oN = " ", sN = "𝔔", lN = "𝔮", uN = "⨌", cN = "𝕢", fN = "ℚ", hN = "⁗", vN = "𝒬", dN = "𝓆", pN = "ℍ", mN = "⨖", gN = "?", yN = "≟", kN = '"', bN = '"', SN = "⇛", wN = "∽̱", CN = "Ŕ", TN = "ŕ", AN = "√", xN = "⦳", EN = "⟩", NN = "⟫", DN = "⦒", ON = "⦥", MN = "⟩", RN = "»", LN = "⥵", IN = "⇥", PN = "⤠", FN = "⤳", BN = "→", qN = "↠", zN = "⇒", _N = "⤞", VN = "↪", HN = "↬", UN = "⥅", WN = "⥴", $N = "⤖", GN = "↣", jN = "↝", KN = "⤚", JN = "⤜", YN = "∶", ZN = "ℚ", QN = "⤍", XN = "⤏", eD = "⤐", tD = "❳", rD = "}", nD = "]", aD = "⦌", iD = "⦎", oD = "⦐", sD = "Ř", lD = "ř", uD = "Ŗ", cD = "ŗ", fD = "⌉", hD = "}", vD = "Р", dD = "р", pD = "⤷", mD = "⥩", gD = "”", yD = "”", kD = "↳", bD = "ℜ", SD = "ℛ", wD = "ℜ", CD = "ℝ", TD = "ℜ", AD = "▭", xD = "®", ED = "®", ND = "∋", DD = "⇋", OD = "⥯", MD = "⥽", RD = "⌋", LD = "𝔯", ID = "ℜ", PD = "⥤", FD = "⇁", BD = "⇀", qD = "⥬", zD = "Ρ", _D = "ρ", VD = "ϱ", HD = "⟩", UD = "⇥", WD = "→", $D = "→", GD = "⇒", jD = "⇄", KD = "↣", JD = "⌉", YD = "⟧", ZD = "⥝", QD = "⥕", XD = "⇂", eO = "⌋", tO = "⇁", rO = "⇀", nO = "⇄", aO = "⇌", iO = "⇉", oO = "↝", sO = "↦", lO = "⊢", uO = "⥛", cO = "⋌", fO = "⧐", hO = "⊳", vO = "⊵", dO = "⥏", pO = "⥜", mO = "⥔", gO = "↾", yO = "⥓", kO = "⇀", bO = "˚", SO = "≓", wO = "⇄", CO = "⇌", TO = "‏", AO = "⎱", xO = "⎱", EO = "⫮", NO = "⟭", DO = "⇾", OO = "⟧", MO = "⦆", RO = "𝕣", LO = "ℝ", IO = "⨮", PO = "⨵", FO = "⥰", BO = ")", qO = "⦔", zO = "⨒", _O = "⇉", VO = "⇛", HO = "›", UO = "𝓇", WO = "ℛ", $O = "↱", GO = "↱", jO = "]", KO = "’", JO = "’", YO = "⋌", ZO = "⋊", QO = "▹", XO = "⊵", eM = "▸", tM = "⧎", rM = "⧴", nM = "⥨", aM = "℞", iM = "Ś", oM = "ś", sM = "‚", lM = "⪸", uM = "Š", cM = "š", fM = "⪼", hM = "≻", vM = "≽", dM = "⪰", pM = "⪴", mM = "Ş", gM = "ş", yM = "Ŝ", kM = "ŝ", bM = "⪺", SM = "⪶", wM = "⋩", CM = "⨓", TM = "≿", AM = "С", xM = "с", EM = "⊡", NM = "⋅", DM = "⩦", OM = "⤥", MM = "↘", RM = "⇘", LM = "↘", IM = "§", PM = ";", FM = "⤩", BM = "∖", qM = "∖", zM = "✶", _M = "𝔖", VM = "𝔰", HM = "⌢", UM = "♯", WM = "Щ", $M = "щ", GM = "Ш", jM = "ш", KM = "↓", JM = "←", YM = "∣", ZM = "∥", QM = "→", XM = "↑", eR = "­", tR = "Σ", rR = "σ", nR = "ς", aR = "ς", iR = "∼", oR = "⩪", sR = "≃", lR = "≃", uR = "⪞", cR = "⪠", fR = "⪝", hR = "⪟", vR = "≆", dR = "⨤", pR = "⥲", mR = "←", gR = "∘", yR = "∖", kR = "⨳", bR = "⧤", SR = "∣", wR = "⌣", CR = "⪪", TR = "⪬", AR = "⪬︀", xR = "Ь", ER = "ь", NR = "⌿", DR = "⧄", OR = "/", MR = "𝕊", RR = "𝕤", LR = "♠", IR = "♠", PR = "∥", FR = "⊓", BR = "⊓︀", qR = "⊔", zR = "⊔︀", _R = "√", VR = "⊏", HR = "⊑", UR = "⊏", WR = "⊑", $R = "⊐", GR = "⊒", jR = "⊐", KR = "⊒", JR = "□", YR = "□", ZR = "⊓", QR = "⊏", XR = "⊑", eL = "⊐", tL = "⊒", rL = "⊔", nL = "▪", aL = "□", iL = "▪", oL = "→", sL = "𝒮", lL = "𝓈", uL = "∖", cL = "⌣", fL = "⋆", hL = "⋆", vL = "☆", dL = "★", pL = "ϵ", mL = "ϕ", gL = "¯", yL = "⊂", kL = "⋐", bL = "⪽", SL = "⫅", wL = "⊆", CL = "⫃", TL = "⫁", AL = "⫋", xL = "⊊", EL = "⪿", NL = "⥹", DL = "⊂", OL = "⋐", ML = "⊆", RL = "⫅", LL = "⊆", IL = "⊊", PL = "⫋", FL = "⫇", BL = "⫕", qL = "⫓", zL = "⪸", _L = "≻", VL = "≽", HL = "≻", UL = "⪰", WL = "≽", $L = "≿", GL = "⪰", jL = "⪺", KL = "⪶", JL = "⋩", YL = "≿", ZL = "∋", QL = "∑", XL = "∑", eI = "♪", tI = "¹", rI = "²", nI = "³", aI = "⊃", iI = "⋑", oI = "⪾", sI = "⫘", lI = "⫆", uI = "⊇", cI = "⫄", fI = "⊃", hI = "⊇", vI = "⟉", dI = "⫗", pI = "⥻", mI = "⫂", gI = "⫌", yI = "⊋", kI = "⫀", bI = "⊃", SI = "⋑", wI = "⊇", CI = "⫆", TI = "⊋", AI = "⫌", xI = "⫈", EI = "⫔", NI = "⫖", DI = "⤦", OI = "↙", MI = "⇙", RI = "↙", LI = "⤪", II = "ß", PI = "	", FI = "⌖", BI = "Τ", qI = "τ", zI = "⎴", _I = "Ť", VI = "ť", HI = "Ţ", UI = "ţ", WI = "Т", $I = "т", GI = "⃛", jI = "⌕", KI = "𝔗", JI = "𝔱", YI = "∴", ZI = "∴", QI = "∴", XI = "Θ", eP = "θ", tP = "ϑ", rP = "ϑ", nP = "≈", aP = "∼", iP = "  ", oP = " ", sP = " ", lP = "≈", uP = "∼", cP = "Þ", fP = "þ", hP = "˜", vP = "∼", dP = "≃", pP = "≅", mP = "≈", gP = "⨱", yP = "⊠", kP = "×", bP = "⨰", SP = "∭", wP = "⤨", CP = "⌶", TP = "⫱", AP = "⊤", xP = "𝕋", EP = "𝕥", NP = "⫚", DP = "⤩", OP = "‴", MP = "™", RP = "™", LP = "▵", IP = "▿", PP = "◃", FP = "⊴", BP = "≜", qP = "▹", zP = "⊵", _P = "◬", VP = "≜", HP = "⨺", UP = "⃛", WP = "⨹", $P = "⧍", GP = "⨻", jP = "⏢", KP = "𝒯", JP = "𝓉", YP = "Ц", ZP = "ц", QP = "Ћ", XP = "ћ", eF = "Ŧ", tF = "ŧ", rF = "≬", nF = "↞", aF = "↠", iF = "Ú", oF = "ú", sF = "↑", lF = "↟", uF = "⇑", cF = "⥉", fF = "Ў", hF = "ў", vF = "Ŭ", dF = "ŭ", pF = "Û", mF = "û", gF = "У", yF = "у", kF = "⇅", bF = "Ű", SF = "ű", wF = "⥮", CF = "⥾", TF = "𝔘", AF = "𝔲", xF = "Ù", EF = "ù", NF = "⥣", DF = "↿", OF = "↾", MF = "▀", RF = "⌜", LF = "⌜", IF = "⌏", PF = "◸", FF = "Ū", BF = "ū", qF = "¨", zF = "_", _F = "⏟", VF = "⎵", HF = "⏝", UF = "⋃", WF = "⊎", $F = "Ų", GF = "ų", jF = "𝕌", KF = "𝕦", JF = "⤒", YF = "↑", ZF = "↑", QF = "⇑", XF = "⇅", eB = "↕", tB = "↕", rB = "⇕", nB = "⥮", aB = "↿", iB = "↾", oB = "⊎", sB = "↖", lB = "↗", uB = "υ", cB = "ϒ", fB = "ϒ", hB = "Υ", vB = "υ", dB = "↥", pB = "⊥", mB = "⇈", gB = "⌝", yB = "⌝", kB = "⌎", bB = "Ů", SB = "ů", wB = "◹", CB = "𝒰", TB = "𝓊", AB = "⋰", xB = "Ũ", EB = "ũ", NB = "▵", DB = "▴", OB = "⇈", MB = "Ü", RB = "ü", LB = "⦧", IB = "⦜", PB = "ϵ", FB = "ϰ", BB = "∅", qB = "ϕ", zB = "ϖ", _B = "∝", VB = "↕", HB = "⇕", UB = "ϱ", WB = "ς", $B = "⊊︀", GB = "⫋︀", jB = "⊋︀", KB = "⫌︀", JB = "ϑ", YB = "⊲", ZB = "⊳", QB = "⫨", XB = "⫫", eq = "⫩", tq = "В", rq = "в", nq = "⊢", aq = "⊨", iq = "⊩", oq = "⊫", sq = "⫦", lq = "⊻", uq = "∨", cq = "⋁", fq = "≚", hq = "⋮", vq = "|", dq = "‖", pq = "|", mq = "‖", gq = "∣", yq = "|", kq = "❘", bq = "≀", Sq = " ", wq = "𝔙", Cq = "𝔳", Tq = "⊲", Aq = "⊂⃒", xq = "⊃⃒", Eq = "𝕍", Nq = "𝕧", Dq = "∝", Oq = "⊳", Mq = "𝒱", Rq = "𝓋", Lq = "⫋︀", Iq = "⊊︀", Pq = "⫌︀", Fq = "⊋︀", Bq = "⊪", qq = "⦚", zq = "Ŵ", _q = "ŵ", Vq = "⩟", Hq = "∧", Uq = "⋀", Wq = "≙", $q = "℘", Gq = "𝔚", jq = "𝔴", Kq = "𝕎", Jq = "𝕨", Yq = "℘", Zq = "≀", Qq = "≀", Xq = "𝒲", ez = "𝓌", tz = "⋂", rz = "◯", nz = "⋃", az = "▽", iz = "𝔛", oz = "𝔵", sz = "⟷", lz = "⟺", uz = "Ξ", cz = "ξ", fz = "⟵", hz = "⟸", vz = "⟼", dz = "⋻", pz = "⨀", mz = "𝕏", gz = "𝕩", yz = "⨁", kz = "⨂", bz = "⟶", Sz = "⟹", wz = "𝒳", Cz = "𝓍", Tz = "⨆", Az = "⨄", xz = "△", Ez = "⋁", Nz = "⋀", Dz = "Ý", Oz = "ý", Mz = "Я", Rz = "я", Lz = "Ŷ", Iz = "ŷ", Pz = "Ы", Fz = "ы", Bz = "¥", qz = "𝔜", zz = "𝔶", _z = "Ї", Vz = "ї", Hz = "𝕐", Uz = "𝕪", Wz = "𝒴", $z = "𝓎", Gz = "Ю", jz = "ю", Kz = "ÿ", Jz = "Ÿ", Yz = "Ź", Zz = "ź", Qz = "Ž", Xz = "ž", e_ = "З", t_ = "з", r_ = "Ż", n_ = "ż", a_ = "ℨ", i_ = "​", o_ = "Ζ", s_ = "ζ", l_ = "𝔷", u_ = "ℨ", c_ = "Ж", f_ = "ж", h_ = "⇝", v_ = "𝕫", d_ = "ℤ", p_ = "𝒵", m_ = "𝓏", g_ = "‍", y_ = "‌", Oo = {
              Aacute: me,
              aacute: Ce,
              Abreve: ze,
              abreve: ht,
              ac: Le,
              acd: ut,
              acE: ct,
              Acirc: it,
              acirc: Ze,
              acute: yt,
              Acy: Tt,
              acy: Bt,
              AElig: We,
              aelig: mt,
              af: kt,
              Afr: dt,
              afr: Wt,
              Agrave: Yt,
              agrave: K,
              alefsym: $,
              aleph: P,
              Alpha: B,
              alpha: I,
              Amacr: Q,
              amacr: re,
              amalg: be,
              amp: Ye,
              AMP: lt,
              andand: Qe,
              And: xt,
              and: ft,
              andd: $t,
              andslope: It,
              andv: Xt,
              ang: St,
              ange: cr,
              angle: Vr,
              angmsdaa: Nr,
              angmsdab: zt,
              angmsdac: Ne,
              angmsdad: De,
              angmsdae: Ke,
              angmsdaf: rt,
              angmsdag: wt,
              angmsdah: er,
              angmsd: At,
              angrt: _t,
              angrtvb: tr,
              angrtvbd: Dr,
              angsph: rr,
              angst: Hr,
              angzarr: Ir,
              Aogon: Ur,
              aogon: Or,
              Aopf: yr,
              aopf: Mr,
              apacir: Gt,
              ap: kr,
              apE: Vt,
              ape: jt,
              apid: E,
              apos: N,
              ApplyFunction: y,
              approx: m,
              approxeq: b,
              Aring: w,
              aring: O,
              Ascr: H,
              ascr: ee,
              Assign: U,
              ast: ge,
              asymp: Oe,
              asympeq: xe,
              Atilde: Ge,
              atilde: nt,
              Auml: k,
              auml: h,
              awconint: o,
              awint: c,
              backcong: d,
              backepsilon: C,
              backprime: x,
              backsim: M,
              backsimeq: q,
              Backslash: W,
              Barv: ve,
              barvee: pe,
              barwed: Ae,
              Barwed: $e,
              barwedge: ot,
              bbrk: bt,
              bbrktbrk: nr,
              bcong: Rr,
              Bcy: Pr,
              bcy: Dn,
              bdquo: hn,
              becaus: Wr,
              because: br,
              Because: Sr,
              bemptyv: vn,
              bepsi: ar,
              bernou: dn,
              Bernoullis: rn,
              Beta: nn,
              beta: an,
              beth: pn,
              between: wr,
              Bfr: $r,
              bfr: on,
              bigcap: Cr,
              bigcirc: On,
              bigcup: Mn,
              bigodot: Fr,
              bigoplus: Tr,
              bigotimes: Ar,
              bigsqcup: sn,
              bigstar: Gr,
              bigtriangledown: Br,
              bigtriangleup: fr,
              biguplus: mn,
              bigvee: Kn,
              bigwedge: ir,
              bkarow: Rn,
              blacklozenge: Ln,
              blacksquare: ln,
              blacktriangle: In,
              blacktriangledown: qr,
              blacktriangleleft: or,
              blacktriangleright: gn,
              blank: Pn,
              blk12: Fn,
              blk14: Jn,
              blk34: _e,
              block: _,
              bne: ke,
              bnequiv: qe,
              bNot: vt,
              bnot: Dt,
              Bopf: Ot,
              bopf: Et,
              bot: sr,
              bottom: zr,
              bowtie: yn,
              boxbox: Bn,
              boxdl: qn,
              boxdL: Ja,
              boxDl: Ya,
              boxDL: Za,
              boxdr: Qa,
              boxdR: Kt,
              boxDr: Jt,
              boxDR: Xa,
              boxh: ei,
              boxH: ti,
              boxhd: _r,
              boxHd: ri,
              boxhD: Yn,
              boxHD: Zn,
              boxhu: ni,
              boxHu: ai,
              boxhU: zn,
              boxHU: ii,
              boxminus: Qn,
              boxplus: un,
              boxtimes: oi,
              boxul: si,
              boxuL: li,
              boxUl: ui,
              boxUL: ci,
              boxur: fi,
              boxuR: Xn,
              boxUr: sa,
              boxUR: hi,
              boxv: la,
              boxV: vi,
              boxvh: ua,
              boxvH: ca,
              boxVh: di,
              boxVH: pi,
              boxvl: kn,
              boxvL: mi,
              boxVl: bn,
              boxVL: gi,
              boxvr: yi,
              boxvR: Sn,
              boxVr: fa,
              boxVR: ha,
              bprime: ki,
              breve: va,
              Breve: da,
              brvbar: wn,
              bscr: pa,
              Bscr: Cn,
              bsemi: bi,
              bsim: jr,
              bsime: cn,
              bsolb: Kr,
              bsol: hr,
              bsolhsub: Ht,
              bull: ma,
              bullet: Si,
              bump: ga,
              bumpE: wi,
              bumpe: ya,
              Bumpeq: ka,
              bumpeq: _n,
              Cacute: Jr,
              cacute: ea,
              capand: ba,
              capbrcup: ta,
              capcap: Ci,
              cap: Ti,
              Cap: Ai,
              capcup: xi,
              capdot: Sa,
              CapitalDifferentialD: wa,
              caps: Ei,
              caret: Ca,
              caron: Ni,
              Cayleys: Di,
              ccaps: Oi,
              Ccaron: Mi,
              ccaron: Ri,
              Ccedil: Li,
              ccedil: Ta,
              Ccirc: Ii,
              ccirc: Pi,
              Cconint: ra,
              ccups: Fi,
              ccupssm: Aa,
              Cdot: Bi,
              cdot: qi,
              cedil: zi,
              Cedilla: xa,
              cemptyv: Ea,
              cent: Na,
              centerdot: _i,
              CenterDot: Da,
              cfr: Vi,
              Cfr: Oa,
              CHcy: e,
              chcy: i,
              check: t,
              checkmark: a,
              Chi: l,
              chi: u,
              circ: v,
              circeq: p,
              circlearrowleft: S,
              circlearrowright: T,
              circledast: R,
              circledcirc: z,
              circleddash: F,
              CircleDot: G,
              circledR: ae,
              circledS: Se,
              CircleMinus: Me,
              CirclePlus: de,
              CircleTimes: st,
              cir: tt,
              cirE: Ue,
              cire: at,
              cirfnint: gt,
              cirmid: Ct,
              cirscir: vr,
              ClockwiseContourIntegral: Pt,
              CloseCurlyDoubleQuote: Zt,
              CloseCurlyQuote: Mt,
              clubs: Tn,
              clubsuit: dr,
              colon: fn,
              Colon: lr,
              Colone: Nt,
              colone: Hi,
              coloneq: Ui,
              comma: Vn,
              commat: Yr,
              comp: Ma,
              compfn: Ra,
              complement: cl,
              complexes: fl,
              cong: hl,
              congdot: vl,
              Congruent: dl,
              conint: pl,
              Conint: ml,
              ContourIntegral: gl,
              copf: yl,
              Copf: kl,
              coprod: bl,
              Coproduct: Sl,
              copy: wl,
              COPY: Cl,
              copysr: Tl,
              CounterClockwiseContourIntegral: Al,
              crarr: xl,
              cross: El,
              Cross: Nl,
              Cscr: Dl,
              cscr: Ol,
              csub: Ml,
              csube: Rl,
              csup: Ll,
              csupe: Il,
              ctdot: Pl,
              cudarrl: Fl,
              cudarrr: Bl,
              cuepr: ql,
              cuesc: zl,
              cularr: _l,
              cularrp: Vl,
              cupbrcap: Hl,
              cupcap: Ul,
              CupCap: Wl,
              cup: $l,
              Cup: Gl,
              cupcup: jl,
              cupdot: Kl,
              cupor: Jl,
              cups: Yl,
              curarr: Zl,
              curarrm: Ql,
              curlyeqprec: Xl,
              curlyeqsucc: eu,
              curlyvee: tu,
              curlywedge: ru,
              curren: nu,
              curvearrowleft: au,
              curvearrowright: iu,
              cuvee: ou,
              cuwed: su,
              cwconint: lu,
              cwint: uu,
              cylcty: cu,
              dagger: fu,
              Dagger: hu,
              daleth: vu,
              darr: du,
              Darr: pu,
              dArr: mu,
              dash: gu,
              Dashv: yu,
              dashv: ku,
              dbkarow: bu,
              dblac: Su,
              Dcaron: wu,
              dcaron: Cu,
              Dcy: Tu,
              dcy: Au,
              ddagger: xu,
              ddarr: Eu,
              DD: Nu,
              dd: Du,
              DDotrahd: Ou,
              ddotseq: Mu,
              deg: Ru,
              Del: Lu,
              Delta: Iu,
              delta: Pu,
              demptyv: Fu,
              dfisht: Bu,
              Dfr: qu,
              dfr: zu,
              dHar: _u,
              dharl: Vu,
              dharr: Hu,
              DiacriticalAcute: Uu,
              DiacriticalDot: Wu,
              DiacriticalDoubleAcute: $u,
              DiacriticalGrave: Gu,
              DiacriticalTilde: ju,
              diam: Ku,
              diamond: Ju,
              Diamond: Yu,
              diamondsuit: Zu,
              diams: Qu,
              die: Xu,
              DifferentialD: ec,
              digamma: tc,
              disin: rc,
              div: nc,
              divide: ac,
              divideontimes: ic,
              divonx: oc,
              DJcy: sc,
              djcy: lc,
              dlcorn: uc,
              dlcrop: cc,
              dollar: fc,
              Dopf: hc,
              dopf: vc,
              Dot: dc,
              dot: pc,
              DotDot: mc,
              doteq: gc,
              doteqdot: yc,
              DotEqual: kc,
              dotminus: bc,
              dotplus: Sc,
              dotsquare: wc,
              doublebarwedge: Cc,
              DoubleContourIntegral: Tc,
              DoubleDot: Ac,
              DoubleDownArrow: xc,
              DoubleLeftArrow: Ec,
              DoubleLeftRightArrow: Nc,
              DoubleLeftTee: Dc,
              DoubleLongLeftArrow: Oc,
              DoubleLongLeftRightArrow: Mc,
              DoubleLongRightArrow: Rc,
              DoubleRightArrow: Lc,
              DoubleRightTee: Ic,
              DoubleUpArrow: Pc,
              DoubleUpDownArrow: Fc,
              DoubleVerticalBar: Bc,
              DownArrowBar: qc,
              downarrow: zc,
              DownArrow: _c,
              Downarrow: Vc,
              DownArrowUpArrow: Hc,
              DownBreve: Uc,
              downdownarrows: Wc,
              downharpoonleft: $c,
              downharpoonright: Gc,
              DownLeftRightVector: jc,
              DownLeftTeeVector: Kc,
              DownLeftVectorBar: Jc,
              DownLeftVector: Yc,
              DownRightTeeVector: Zc,
              DownRightVectorBar: Qc,
              DownRightVector: Xc,
              DownTeeArrow: ef,
              DownTee: tf,
              drbkarow: rf,
              drcorn: nf,
              drcrop: af,
              Dscr: of,
              dscr: sf,
              DScy: lf,
              dscy: uf,
              dsol: cf,
              Dstrok: ff,
              dstrok: hf,
              dtdot: vf,
              dtri: df,
              dtrif: pf,
              duarr: mf,
              duhar: gf,
              dwangle: yf,
              DZcy: kf,
              dzcy: bf,
              dzigrarr: Sf,
              Eacute: wf,
              eacute: Cf,
              easter: Tf,
              Ecaron: Af,
              ecaron: xf,
              Ecirc: Ef,
              ecirc: Nf,
              ecir: Df,
              ecolon: Of,
              Ecy: Mf,
              ecy: Rf,
              eDDot: Lf,
              Edot: If,
              edot: Pf,
              eDot: Ff,
              ee: Bf,
              efDot: qf,
              Efr: zf,
              efr: _f,
              eg: Vf,
              Egrave: Hf,
              egrave: Uf,
              egs: Wf,
              egsdot: $f,
              el: Gf,
              Element: jf,
              elinters: Kf,
              ell: Jf,
              els: Yf,
              elsdot: Zf,
              Emacr: Qf,
              emacr: Xf,
              empty: eh,
              emptyset: th,
              EmptySmallSquare: rh,
              emptyv: nh,
              EmptyVerySmallSquare: ah,
              emsp13: ih,
              emsp14: oh,
              emsp: sh,
              ENG: lh,
              eng: uh,
              ensp: ch,
              Eogon: fh,
              eogon: hh,
              Eopf: vh,
              eopf: dh,
              epar: ph,
              eparsl: mh,
              eplus: gh,
              epsi: yh,
              Epsilon: kh,
              epsilon: bh,
              epsiv: Sh,
              eqcirc: wh,
              eqcolon: Ch,
              eqsim: Th,
              eqslantgtr: Ah,
              eqslantless: xh,
              Equal: Eh,
              equals: Nh,
              EqualTilde: Dh,
              equest: Oh,
              Equilibrium: Mh,
              equiv: Rh,
              equivDD: Lh,
              eqvparsl: Ih,
              erarr: Ph,
              erDot: Fh,
              escr: Bh,
              Escr: qh,
              esdot: zh,
              Esim: _h,
              esim: Vh,
              Eta: Hh,
              eta: Uh,
              ETH: Wh,
              eth: $h,
              Euml: Gh,
              euml: jh,
              euro: Kh,
              excl: Jh,
              exist: Yh,
              Exists: Zh,
              expectation: Qh,
              exponentiale: Xh,
              ExponentialE: ev,
              fallingdotseq: tv,
              Fcy: rv,
              fcy: nv,
              female: av,
              ffilig: iv,
              fflig: ov,
              ffllig: sv,
              Ffr: lv,
              ffr: uv,
              filig: cv,
              FilledSmallSquare: fv,
              FilledVerySmallSquare: hv,
              fjlig: vv,
              flat: dv,
              fllig: pv,
              fltns: mv,
              fnof: gv,
              Fopf: yv,
              fopf: kv,
              forall: bv,
              ForAll: Sv,
              fork: wv,
              forkv: Cv,
              Fouriertrf: Tv,
              fpartint: Av,
              frac12: xv,
              frac13: Ev,
              frac14: Nv,
              frac15: Dv,
              frac16: Ov,
              frac18: Mv,
              frac23: Rv,
              frac25: Lv,
              frac34: Iv,
              frac35: Pv,
              frac38: Fv,
              frac45: Bv,
              frac56: qv,
              frac58: zv,
              frac78: _v,
              frasl: Vv,
              frown: Hv,
              fscr: Uv,
              Fscr: Wv,
              gacute: $v,
              Gamma: Gv,
              gamma: jv,
              Gammad: Kv,
              gammad: Jv,
              gap: Yv,
              Gbreve: Zv,
              gbreve: Qv,
              Gcedil: Xv,
              Gcirc: ed,
              gcirc: td,
              Gcy: rd,
              gcy: nd,
              Gdot: ad,
              gdot: id,
              ge: od,
              gE: sd,
              gEl: ld,
              gel: ud,
              geq: cd,
              geqq: fd,
              geqslant: hd,
              gescc: vd,
              ges: dd,
              gesdot: pd,
              gesdoto: md,
              gesdotol: gd,
              gesl: yd,
              gesles: kd,
              Gfr: bd,
              gfr: Sd,
              gg: wd,
              Gg: Cd,
              ggg: Td,
              gimel: Ad,
              GJcy: xd,
              gjcy: Ed,
              gla: Nd,
              gl: Dd,
              glE: Od,
              glj: Md,
              gnap: Rd,
              gnapprox: Ld,
              gne: Id,
              gnE: Pd,
              gneq: Fd,
              gneqq: Bd,
              gnsim: qd,
              Gopf: zd,
              gopf: _d,
              grave: Vd,
              GreaterEqual: Hd,
              GreaterEqualLess: Ud,
              GreaterFullEqual: Wd,
              GreaterGreater: $d,
              GreaterLess: Gd,
              GreaterSlantEqual: jd,
              GreaterTilde: Kd,
              Gscr: Jd,
              gscr: Yd,
              gsim: Zd,
              gsime: Qd,
              gsiml: Xd,
              gtcc: ep,
              gtcir: tp,
              gt: rp,
              GT: np,
              Gt: ap,
              gtdot: ip,
              gtlPar: op,
              gtquest: sp,
              gtrapprox: lp,
              gtrarr: up,
              gtrdot: cp,
              gtreqless: fp,
              gtreqqless: hp,
              gtrless: vp,
              gtrsim: dp,
              gvertneqq: pp,
              gvnE: mp,
              Hacek: gp,
              hairsp: yp,
              half: kp,
              hamilt: bp,
              HARDcy: Sp,
              hardcy: wp,
              harrcir: Cp,
              harr: Tp,
              hArr: Ap,
              harrw: xp,
              Hat: Ep,
              hbar: Np,
              Hcirc: Dp,
              hcirc: Op,
              hearts: Mp,
              heartsuit: Rp,
              hellip: Lp,
              hercon: Ip,
              hfr: Pp,
              Hfr: Fp,
              HilbertSpace: Bp,
              hksearow: qp,
              hkswarow: zp,
              hoarr: _p,
              homtht: Vp,
              hookleftarrow: Hp,
              hookrightarrow: Up,
              hopf: Wp,
              Hopf: $p,
              horbar: Gp,
              HorizontalLine: jp,
              hscr: Kp,
              Hscr: Jp,
              hslash: Yp,
              Hstrok: Zp,
              hstrok: Qp,
              HumpDownHump: Xp,
              HumpEqual: em,
              hybull: tm,
              hyphen: rm,
              Iacute: nm,
              iacute: am,
              ic: im,
              Icirc: om,
              icirc: sm,
              Icy: lm,
              icy: um,
              Idot: cm,
              IEcy: fm,
              iecy: hm,
              iexcl: vm,
              iff: dm,
              ifr: pm,
              Ifr: mm,
              Igrave: gm,
              igrave: ym,
              ii: km,
              iiiint: bm,
              iiint: Sm,
              iinfin: wm,
              iiota: Cm,
              IJlig: Tm,
              ijlig: Am,
              Imacr: xm,
              imacr: Em,
              image: Nm,
              ImaginaryI: Dm,
              imagline: Om,
              imagpart: Mm,
              imath: Rm,
              Im: Lm,
              imof: Im,
              imped: Pm,
              Implies: Fm,
              incare: Bm,
              in: "∈",
              infin: qm,
              infintie: zm,
              inodot: _m,
              intcal: Vm,
              int: Hm,
              Int: Um,
              integers: Wm,
              Integral: $m,
              intercal: Gm,
              Intersection: jm,
              intlarhk: Km,
              intprod: Jm,
              InvisibleComma: Ym,
              InvisibleTimes: Zm,
              IOcy: Qm,
              iocy: Xm,
              Iogon: eg,
              iogon: tg,
              Iopf: rg,
              iopf: ng,
              Iota: ag,
              iota: ig,
              iprod: og,
              iquest: sg,
              iscr: lg,
              Iscr: ug,
              isin: cg,
              isindot: fg,
              isinE: hg,
              isins: vg,
              isinsv: dg,
              isinv: pg,
              it: mg,
              Itilde: gg,
              itilde: yg,
              Iukcy: kg,
              iukcy: bg,
              Iuml: Sg,
              iuml: wg,
              Jcirc: Cg,
              jcirc: Tg,
              Jcy: Ag,
              jcy: xg,
              Jfr: Eg,
              jfr: Ng,
              jmath: Dg,
              Jopf: Og,
              jopf: Mg,
              Jscr: Rg,
              jscr: Lg,
              Jsercy: Ig,
              jsercy: Pg,
              Jukcy: Fg,
              jukcy: Bg,
              Kappa: qg,
              kappa: zg,
              kappav: _g,
              Kcedil: Vg,
              kcedil: Hg,
              Kcy: Ug,
              kcy: Wg,
              Kfr: $g,
              kfr: Gg,
              kgreen: jg,
              KHcy: Kg,
              khcy: Jg,
              KJcy: Yg,
              kjcy: Zg,
              Kopf: Qg,
              kopf: Xg,
              Kscr: ey,
              kscr: ty,
              lAarr: ry,
              Lacute: ny,
              lacute: ay,
              laemptyv: iy,
              lagran: oy,
              Lambda: sy,
              lambda: ly,
              lang: uy,
              Lang: cy,
              langd: fy,
              langle: hy,
              lap: vy,
              Laplacetrf: dy,
              laquo: py,
              larrb: my,
              larrbfs: gy,
              larr: yy,
              Larr: ky,
              lArr: by,
              larrfs: Sy,
              larrhk: wy,
              larrlp: Cy,
              larrpl: Ty,
              larrsim: Ay,
              larrtl: xy,
              latail: Ey,
              lAtail: Ny,
              lat: Dy,
              late: Oy,
              lates: My,
              lbarr: Ry,
              lBarr: Ly,
              lbbrk: Iy,
              lbrace: Py,
              lbrack: Fy,
              lbrke: By,
              lbrksld: qy,
              lbrkslu: zy,
              Lcaron: _y,
              lcaron: Vy,
              Lcedil: Hy,
              lcedil: Uy,
              lceil: Wy,
              lcub: $y,
              Lcy: Gy,
              lcy: jy,
              ldca: Ky,
              ldquo: Jy,
              ldquor: Yy,
              ldrdhar: Zy,
              ldrushar: Qy,
              ldsh: Xy,
              le: ek,
              lE: tk,
              LeftAngleBracket: rk,
              LeftArrowBar: nk,
              leftarrow: ak,
              LeftArrow: ik,
              Leftarrow: ok,
              LeftArrowRightArrow: sk,
              leftarrowtail: lk,
              LeftCeiling: uk,
              LeftDoubleBracket: ck,
              LeftDownTeeVector: fk,
              LeftDownVectorBar: hk,
              LeftDownVector: vk,
              LeftFloor: dk,
              leftharpoondown: pk,
              leftharpoonup: mk,
              leftleftarrows: gk,
              leftrightarrow: yk,
              LeftRightArrow: kk,
              Leftrightarrow: bk,
              leftrightarrows: Sk,
              leftrightharpoons: wk,
              leftrightsquigarrow: Ck,
              LeftRightVector: Tk,
              LeftTeeArrow: Ak,
              LeftTee: xk,
              LeftTeeVector: Ek,
              leftthreetimes: Nk,
              LeftTriangleBar: Dk,
              LeftTriangle: Ok,
              LeftTriangleEqual: Mk,
              LeftUpDownVector: Rk,
              LeftUpTeeVector: Lk,
              LeftUpVectorBar: Ik,
              LeftUpVector: Pk,
              LeftVectorBar: Fk,
              LeftVector: Bk,
              lEg: qk,
              leg: zk,
              leq: _k,
              leqq: Vk,
              leqslant: Hk,
              lescc: Uk,
              les: Wk,
              lesdot: $k,
              lesdoto: Gk,
              lesdotor: jk,
              lesg: Kk,
              lesges: Jk,
              lessapprox: Yk,
              lessdot: Zk,
              lesseqgtr: Qk,
              lesseqqgtr: Xk,
              LessEqualGreater: eb,
              LessFullEqual: tb,
              LessGreater: rb,
              lessgtr: nb,
              LessLess: ab,
              lesssim: ib,
              LessSlantEqual: ob,
              LessTilde: sb,
              lfisht: lb,
              lfloor: ub,
              Lfr: cb,
              lfr: fb,
              lg: hb,
              lgE: vb,
              lHar: db,
              lhard: pb,
              lharu: mb,
              lharul: gb,
              lhblk: yb,
              LJcy: kb,
              ljcy: bb,
              llarr: Sb,
              ll: wb,
              Ll: Cb,
              llcorner: Tb,
              Lleftarrow: Ab,
              llhard: xb,
              lltri: Eb,
              Lmidot: Nb,
              lmidot: Db,
              lmoustache: Ob,
              lmoust: Mb,
              lnap: Rb,
              lnapprox: Lb,
              lne: Ib,
              lnE: Pb,
              lneq: Fb,
              lneqq: Bb,
              lnsim: qb,
              loang: zb,
              loarr: _b,
              lobrk: Vb,
              longleftarrow: Hb,
              LongLeftArrow: Ub,
              Longleftarrow: Wb,
              longleftrightarrow: $b,
              LongLeftRightArrow: Gb,
              Longleftrightarrow: jb,
              longmapsto: Kb,
              longrightarrow: Jb,
              LongRightArrow: Yb,
              Longrightarrow: Zb,
              looparrowleft: Qb,
              looparrowright: Xb,
              lopar: e0,
              Lopf: t0,
              lopf: r0,
              loplus: n0,
              lotimes: a0,
              lowast: i0,
              lowbar: o0,
              LowerLeftArrow: s0,
              LowerRightArrow: l0,
              loz: u0,
              lozenge: c0,
              lozf: f0,
              lpar: h0,
              lparlt: v0,
              lrarr: d0,
              lrcorner: p0,
              lrhar: m0,
              lrhard: g0,
              lrm: y0,
              lrtri: k0,
              lsaquo: b0,
              lscr: S0,
              Lscr: w0,
              lsh: C0,
              Lsh: T0,
              lsim: A0,
              lsime: x0,
              lsimg: E0,
              lsqb: N0,
              lsquo: D0,
              lsquor: O0,
              Lstrok: M0,
              lstrok: R0,
              ltcc: L0,
              ltcir: I0,
              lt: P0,
              LT: F0,
              Lt: B0,
              ltdot: q0,
              lthree: z0,
              ltimes: _0,
              ltlarr: V0,
              ltquest: H0,
              ltri: U0,
              ltrie: W0,
              ltrif: $0,
              ltrPar: G0,
              lurdshar: j0,
              luruhar: K0,
              lvertneqq: J0,
              lvnE: Y0,
              macr: Z0,
              male: Q0,
              malt: X0,
              maltese: eS,
              Map: "⤅",
              map: tS,
              mapsto: rS,
              mapstodown: nS,
              mapstoleft: aS,
              mapstoup: iS,
              marker: oS,
              mcomma: sS,
              Mcy: lS,
              mcy: uS,
              mdash: cS,
              mDDot: fS,
              measuredangle: hS,
              MediumSpace: vS,
              Mellintrf: dS,
              Mfr: pS,
              mfr: mS,
              mho: gS,
              micro: yS,
              midast: kS,
              midcir: bS,
              mid: SS,
              middot: wS,
              minusb: CS,
              minus: TS,
              minusd: AS,
              minusdu: xS,
              MinusPlus: ES,
              mlcp: NS,
              mldr: DS,
              mnplus: OS,
              models: MS,
              Mopf: RS,
              mopf: LS,
              mp: IS,
              mscr: PS,
              Mscr: FS,
              mstpos: BS,
              Mu: qS,
              mu: zS,
              multimap: _S,
              mumap: VS,
              nabla: HS,
              Nacute: US,
              nacute: WS,
              nang: $S,
              nap: GS,
              napE: jS,
              napid: KS,
              napos: JS,
              napprox: YS,
              natural: ZS,
              naturals: QS,
              natur: XS,
              nbsp: ew,
              nbump: tw,
              nbumpe: rw,
              ncap: nw,
              Ncaron: aw,
              ncaron: iw,
              Ncedil: ow,
              ncedil: sw,
              ncong: lw,
              ncongdot: uw,
              ncup: cw,
              Ncy: fw,
              ncy: hw,
              ndash: vw,
              nearhk: dw,
              nearr: pw,
              neArr: mw,
              nearrow: gw,
              ne: yw,
              nedot: kw,
              NegativeMediumSpace: bw,
              NegativeThickSpace: Sw,
              NegativeThinSpace: ww,
              NegativeVeryThinSpace: Cw,
              nequiv: Tw,
              nesear: Aw,
              nesim: xw,
              NestedGreaterGreater: Ew,
              NestedLessLess: Nw,
              NewLine: Dw,
              nexist: Ow,
              nexists: Mw,
              Nfr: Rw,
              nfr: Lw,
              ngE: Iw,
              nge: Pw,
              ngeq: Fw,
              ngeqq: Bw,
              ngeqslant: qw,
              nges: zw,
              nGg: _w,
              ngsim: Vw,
              nGt: Hw,
              ngt: Uw,
              ngtr: Ww,
              nGtv: $w,
              nharr: Gw,
              nhArr: jw,
              nhpar: Kw,
              ni: Jw,
              nis: Yw,
              nisd: Zw,
              niv: Qw,
              NJcy: Xw,
              njcy: e1,
              nlarr: t1,
              nlArr: r1,
              nldr: n1,
              nlE: a1,
              nle: i1,
              nleftarrow: o1,
              nLeftarrow: s1,
              nleftrightarrow: l1,
              nLeftrightarrow: u1,
              nleq: c1,
              nleqq: f1,
              nleqslant: h1,
              nles: v1,
              nless: d1,
              nLl: p1,
              nlsim: m1,
              nLt: g1,
              nlt: y1,
              nltri: k1,
              nltrie: b1,
              nLtv: S1,
              nmid: w1,
              NoBreak: C1,
              NonBreakingSpace: T1,
              nopf: A1,
              Nopf: x1,
              Not: E1,
              not: N1,
              NotCongruent: D1,
              NotCupCap: O1,
              NotDoubleVerticalBar: M1,
              NotElement: R1,
              NotEqual: L1,
              NotEqualTilde: I1,
              NotExists: P1,
              NotGreater: F1,
              NotGreaterEqual: B1,
              NotGreaterFullEqual: q1,
              NotGreaterGreater: z1,
              NotGreaterLess: _1,
              NotGreaterSlantEqual: V1,
              NotGreaterTilde: H1,
              NotHumpDownHump: U1,
              NotHumpEqual: W1,
              notin: $1,
              notindot: G1,
              notinE: j1,
              notinva: K1,
              notinvb: J1,
              notinvc: Y1,
              NotLeftTriangleBar: Z1,
              NotLeftTriangle: Q1,
              NotLeftTriangleEqual: X1,
              NotLess: eC,
              NotLessEqual: tC,
              NotLessGreater: rC,
              NotLessLess: nC,
              NotLessSlantEqual: aC,
              NotLessTilde: iC,
              NotNestedGreaterGreater: oC,
              NotNestedLessLess: sC,
              notni: lC,
              notniva: uC,
              notnivb: cC,
              notnivc: fC,
              NotPrecedes: hC,
              NotPrecedesEqual: vC,
              NotPrecedesSlantEqual: dC,
              NotReverseElement: pC,
              NotRightTriangleBar: mC,
              NotRightTriangle: gC,
              NotRightTriangleEqual: yC,
              NotSquareSubset: kC,
              NotSquareSubsetEqual: bC,
              NotSquareSuperset: SC,
              NotSquareSupersetEqual: wC,
              NotSubset: CC,
              NotSubsetEqual: TC,
              NotSucceeds: AC,
              NotSucceedsEqual: xC,
              NotSucceedsSlantEqual: EC,
              NotSucceedsTilde: NC,
              NotSuperset: DC,
              NotSupersetEqual: OC,
              NotTilde: MC,
              NotTildeEqual: RC,
              NotTildeFullEqual: LC,
              NotTildeTilde: IC,
              NotVerticalBar: PC,
              nparallel: FC,
              npar: BC,
              nparsl: qC,
              npart: zC,
              npolint: _C,
              npr: VC,
              nprcue: HC,
              nprec: UC,
              npreceq: WC,
              npre: $C,
              nrarrc: GC,
              nrarr: jC,
              nrArr: KC,
              nrarrw: JC,
              nrightarrow: YC,
              nRightarrow: ZC,
              nrtri: QC,
              nrtrie: XC,
              nsc: eT,
              nsccue: tT,
              nsce: rT,
              Nscr: nT,
              nscr: aT,
              nshortmid: iT,
              nshortparallel: oT,
              nsim: sT,
              nsime: lT,
              nsimeq: uT,
              nsmid: cT,
              nspar: fT,
              nsqsube: hT,
              nsqsupe: vT,
              nsub: dT,
              nsubE: pT,
              nsube: mT,
              nsubset: gT,
              nsubseteq: yT,
              nsubseteqq: kT,
              nsucc: bT,
              nsucceq: ST,
              nsup: wT,
              nsupE: CT,
              nsupe: TT,
              nsupset: AT,
              nsupseteq: xT,
              nsupseteqq: ET,
              ntgl: NT,
              Ntilde: DT,
              ntilde: OT,
              ntlg: MT,
              ntriangleleft: RT,
              ntrianglelefteq: LT,
              ntriangleright: IT,
              ntrianglerighteq: PT,
              Nu: FT,
              nu: BT,
              num: qT,
              numero: zT,
              numsp: _T,
              nvap: VT,
              nvdash: HT,
              nvDash: UT,
              nVdash: WT,
              nVDash: $T,
              nvge: GT,
              nvgt: jT,
              nvHarr: KT,
              nvinfin: JT,
              nvlArr: YT,
              nvle: ZT,
              nvlt: QT,
              nvltrie: XT,
              nvrArr: eA,
              nvrtrie: tA,
              nvsim: rA,
              nwarhk: nA,
              nwarr: aA,
              nwArr: iA,
              nwarrow: oA,
              nwnear: sA,
              Oacute: lA,
              oacute: uA,
              oast: cA,
              Ocirc: fA,
              ocirc: hA,
              ocir: vA,
              Ocy: dA,
              ocy: pA,
              odash: mA,
              Odblac: gA,
              odblac: yA,
              odiv: kA,
              odot: bA,
              odsold: SA,
              OElig: wA,
              oelig: CA,
              ofcir: TA,
              Ofr: AA,
              ofr: xA,
              ogon: EA,
              Ograve: NA,
              ograve: DA,
              ogt: OA,
              ohbar: MA,
              ohm: RA,
              oint: LA,
              olarr: IA,
              olcir: PA,
              olcross: FA,
              oline: BA,
              olt: qA,
              Omacr: zA,
              omacr: _A,
              Omega: VA,
              omega: HA,
              Omicron: UA,
              omicron: WA,
              omid: $A,
              ominus: GA,
              Oopf: jA,
              oopf: KA,
              opar: JA,
              OpenCurlyDoubleQuote: YA,
              OpenCurlyQuote: ZA,
              operp: QA,
              oplus: XA,
              orarr: ex,
              Or: tx,
              or: rx,
              ord: nx,
              order: ax,
              orderof: ix,
              ordf: ox,
              ordm: sx,
              origof: lx,
              oror: ux,
              orslope: cx,
              orv: fx,
              oS: hx,
              Oscr: vx,
              oscr: dx,
              Oslash: px,
              oslash: mx,
              osol: gx,
              Otilde: yx,
              otilde: kx,
              otimesas: bx,
              Otimes: Sx,
              otimes: wx,
              Ouml: Cx,
              ouml: Tx,
              ovbar: Ax,
              OverBar: xx,
              OverBrace: Ex,
              OverBracket: Nx,
              OverParenthesis: Dx,
              para: Ox,
              parallel: Mx,
              par: Rx,
              parsim: Lx,
              parsl: Ix,
              part: Px,
              PartialD: Fx,
              Pcy: Bx,
              pcy: qx,
              percnt: zx,
              period: _x,
              permil: Vx,
              perp: Hx,
              pertenk: Ux,
              Pfr: Wx,
              pfr: $x,
              Phi: Gx,
              phi: jx,
              phiv: Kx,
              phmmat: Jx,
              phone: Yx,
              Pi: Zx,
              pi: Qx,
              pitchfork: Xx,
              piv: eE,
              planck: tE,
              planckh: rE,
              plankv: nE,
              plusacir: aE,
              plusb: iE,
              pluscir: oE,
              plus: sE,
              plusdo: lE,
              plusdu: uE,
              pluse: cE,
              PlusMinus: fE,
              plusmn: hE,
              plussim: vE,
              plustwo: dE,
              pm: pE,
              Poincareplane: mE,
              pointint: gE,
              popf: yE,
              Popf: kE,
              pound: bE,
              prap: SE,
              Pr: wE,
              pr: CE,
              prcue: TE,
              precapprox: AE,
              prec: xE,
              preccurlyeq: EE,
              Precedes: NE,
              PrecedesEqual: DE,
              PrecedesSlantEqual: OE,
              PrecedesTilde: ME,
              preceq: RE,
              precnapprox: LE,
              precneqq: IE,
              precnsim: PE,
              pre: FE,
              prE: BE,
              precsim: qE,
              prime: zE,
              Prime: _E,
              primes: VE,
              prnap: HE,
              prnE: UE,
              prnsim: WE,
              prod: $E,
              Product: GE,
              profalar: jE,
              profline: KE,
              profsurf: JE,
              prop: YE,
              Proportional: ZE,
              Proportion: QE,
              propto: XE,
              prsim: eN,
              prurel: tN,
              Pscr: rN,
              pscr: nN,
              Psi: aN,
              psi: iN,
              puncsp: oN,
              Qfr: sN,
              qfr: lN,
              qint: uN,
              qopf: cN,
              Qopf: fN,
              qprime: hN,
              Qscr: vN,
              qscr: dN,
              quaternions: pN,
              quatint: mN,
              quest: gN,
              questeq: yN,
              quot: kN,
              QUOT: bN,
              rAarr: SN,
              race: wN,
              Racute: CN,
              racute: TN,
              radic: AN,
              raemptyv: xN,
              rang: EN,
              Rang: NN,
              rangd: DN,
              range: ON,
              rangle: MN,
              raquo: RN,
              rarrap: LN,
              rarrb: IN,
              rarrbfs: PN,
              rarrc: FN,
              rarr: BN,
              Rarr: qN,
              rArr: zN,
              rarrfs: _N,
              rarrhk: VN,
              rarrlp: HN,
              rarrpl: UN,
              rarrsim: WN,
              Rarrtl: $N,
              rarrtl: GN,
              rarrw: jN,
              ratail: KN,
              rAtail: JN,
              ratio: YN,
              rationals: ZN,
              rbarr: QN,
              rBarr: XN,
              RBarr: eD,
              rbbrk: tD,
              rbrace: rD,
              rbrack: nD,
              rbrke: aD,
              rbrksld: iD,
              rbrkslu: oD,
              Rcaron: sD,
              rcaron: lD,
              Rcedil: uD,
              rcedil: cD,
              rceil: fD,
              rcub: hD,
              Rcy: vD,
              rcy: dD,
              rdca: pD,
              rdldhar: mD,
              rdquo: gD,
              rdquor: yD,
              rdsh: kD,
              real: bD,
              realine: SD,
              realpart: wD,
              reals: CD,
              Re: TD,
              rect: AD,
              reg: xD,
              REG: ED,
              ReverseElement: ND,
              ReverseEquilibrium: DD,
              ReverseUpEquilibrium: OD,
              rfisht: MD,
              rfloor: RD,
              rfr: LD,
              Rfr: ID,
              rHar: PD,
              rhard: FD,
              rharu: BD,
              rharul: qD,
              Rho: zD,
              rho: _D,
              rhov: VD,
              RightAngleBracket: HD,
              RightArrowBar: UD,
              rightarrow: WD,
              RightArrow: $D,
              Rightarrow: GD,
              RightArrowLeftArrow: jD,
              rightarrowtail: KD,
              RightCeiling: JD,
              RightDoubleBracket: YD,
              RightDownTeeVector: ZD,
              RightDownVectorBar: QD,
              RightDownVector: XD,
              RightFloor: eO,
              rightharpoondown: tO,
              rightharpoonup: rO,
              rightleftarrows: nO,
              rightleftharpoons: aO,
              rightrightarrows: iO,
              rightsquigarrow: oO,
              RightTeeArrow: sO,
              RightTee: lO,
              RightTeeVector: uO,
              rightthreetimes: cO,
              RightTriangleBar: fO,
              RightTriangle: hO,
              RightTriangleEqual: vO,
              RightUpDownVector: dO,
              RightUpTeeVector: pO,
              RightUpVectorBar: mO,
              RightUpVector: gO,
              RightVectorBar: yO,
              RightVector: kO,
              ring: bO,
              risingdotseq: SO,
              rlarr: wO,
              rlhar: CO,
              rlm: TO,
              rmoustache: AO,
              rmoust: xO,
              rnmid: EO,
              roang: NO,
              roarr: DO,
              robrk: OO,
              ropar: MO,
              ropf: RO,
              Ropf: LO,
              roplus: IO,
              rotimes: PO,
              RoundImplies: FO,
              rpar: BO,
              rpargt: qO,
              rppolint: zO,
              rrarr: _O,
              Rrightarrow: VO,
              rsaquo: HO,
              rscr: UO,
              Rscr: WO,
              rsh: $O,
              Rsh: GO,
              rsqb: jO,
              rsquo: KO,
              rsquor: JO,
              rthree: YO,
              rtimes: ZO,
              rtri: QO,
              rtrie: XO,
              rtrif: eM,
              rtriltri: tM,
              RuleDelayed: rM,
              ruluhar: nM,
              rx: aM,
              Sacute: iM,
              sacute: oM,
              sbquo: sM,
              scap: lM,
              Scaron: uM,
              scaron: cM,
              Sc: fM,
              sc: hM,
              sccue: vM,
              sce: dM,
              scE: pM,
              Scedil: mM,
              scedil: gM,
              Scirc: yM,
              scirc: kM,
              scnap: bM,
              scnE: SM,
              scnsim: wM,
              scpolint: CM,
              scsim: TM,
              Scy: AM,
              scy: xM,
              sdotb: EM,
              sdot: NM,
              sdote: DM,
              searhk: OM,
              searr: MM,
              seArr: RM,
              searrow: LM,
              sect: IM,
              semi: PM,
              seswar: FM,
              setminus: BM,
              setmn: qM,
              sext: zM,
              Sfr: _M,
              sfr: VM,
              sfrown: HM,
              sharp: UM,
              SHCHcy: WM,
              shchcy: $M,
              SHcy: GM,
              shcy: jM,
              ShortDownArrow: KM,
              ShortLeftArrow: JM,
              shortmid: YM,
              shortparallel: ZM,
              ShortRightArrow: QM,
              ShortUpArrow: XM,
              shy: eR,
              Sigma: tR,
              sigma: rR,
              sigmaf: nR,
              sigmav: aR,
              sim: iR,
              simdot: oR,
              sime: sR,
              simeq: lR,
              simg: uR,
              simgE: cR,
              siml: fR,
              simlE: hR,
              simne: vR,
              simplus: dR,
              simrarr: pR,
              slarr: mR,
              SmallCircle: gR,
              smallsetminus: yR,
              smashp: kR,
              smeparsl: bR,
              smid: SR,
              smile: wR,
              smt: CR,
              smte: TR,
              smtes: AR,
              SOFTcy: xR,
              softcy: ER,
              solbar: NR,
              solb: DR,
              sol: OR,
              Sopf: MR,
              sopf: RR,
              spades: LR,
              spadesuit: IR,
              spar: PR,
              sqcap: FR,
              sqcaps: BR,
              sqcup: qR,
              sqcups: zR,
              Sqrt: _R,
              sqsub: VR,
              sqsube: HR,
              sqsubset: UR,
              sqsubseteq: WR,
              sqsup: $R,
              sqsupe: GR,
              sqsupset: jR,
              sqsupseteq: KR,
              square: JR,
              Square: YR,
              SquareIntersection: ZR,
              SquareSubset: QR,
              SquareSubsetEqual: XR,
              SquareSuperset: eL,
              SquareSupersetEqual: tL,
              SquareUnion: rL,
              squarf: nL,
              squ: aL,
              squf: iL,
              srarr: oL,
              Sscr: sL,
              sscr: lL,
              ssetmn: uL,
              ssmile: cL,
              sstarf: fL,
              Star: hL,
              star: vL,
              starf: dL,
              straightepsilon: pL,
              straightphi: mL,
              strns: gL,
              sub: yL,
              Sub: kL,
              subdot: bL,
              subE: SL,
              sube: wL,
              subedot: CL,
              submult: TL,
              subnE: AL,
              subne: xL,
              subplus: EL,
              subrarr: NL,
              subset: DL,
              Subset: OL,
              subseteq: ML,
              subseteqq: RL,
              SubsetEqual: LL,
              subsetneq: IL,
              subsetneqq: PL,
              subsim: FL,
              subsub: BL,
              subsup: qL,
              succapprox: zL,
              succ: _L,
              succcurlyeq: VL,
              Succeeds: HL,
              SucceedsEqual: UL,
              SucceedsSlantEqual: WL,
              SucceedsTilde: $L,
              succeq: GL,
              succnapprox: jL,
              succneqq: KL,
              succnsim: JL,
              succsim: YL,
              SuchThat: ZL,
              sum: QL,
              Sum: XL,
              sung: eI,
              sup1: tI,
              sup2: rI,
              sup3: nI,
              sup: aI,
              Sup: iI,
              supdot: oI,
              supdsub: sI,
              supE: lI,
              supe: uI,
              supedot: cI,
              Superset: fI,
              SupersetEqual: hI,
              suphsol: vI,
              suphsub: dI,
              suplarr: pI,
              supmult: mI,
              supnE: gI,
              supne: yI,
              supplus: kI,
              supset: bI,
              Supset: SI,
              supseteq: wI,
              supseteqq: CI,
              supsetneq: TI,
              supsetneqq: AI,
              supsim: xI,
              supsub: EI,
              supsup: NI,
              swarhk: DI,
              swarr: OI,
              swArr: MI,
              swarrow: RI,
              swnwar: LI,
              szlig: II,
              Tab: PI,
              target: FI,
              Tau: BI,
              tau: qI,
              tbrk: zI,
              Tcaron: _I,
              tcaron: VI,
              Tcedil: HI,
              tcedil: UI,
              Tcy: WI,
              tcy: $I,
              tdot: GI,
              telrec: jI,
              Tfr: KI,
              tfr: JI,
              there4: YI,
              therefore: ZI,
              Therefore: QI,
              Theta: XI,
              theta: eP,
              thetasym: tP,
              thetav: rP,
              thickapprox: nP,
              thicksim: aP,
              ThickSpace: iP,
              ThinSpace: oP,
              thinsp: sP,
              thkap: lP,
              thksim: uP,
              THORN: cP,
              thorn: fP,
              tilde: hP,
              Tilde: vP,
              TildeEqual: dP,
              TildeFullEqual: pP,
              TildeTilde: mP,
              timesbar: gP,
              timesb: yP,
              times: kP,
              timesd: bP,
              tint: SP,
              toea: wP,
              topbot: CP,
              topcir: TP,
              top: AP,
              Topf: xP,
              topf: EP,
              topfork: NP,
              tosa: DP,
              tprime: OP,
              trade: MP,
              TRADE: RP,
              triangle: LP,
              triangledown: IP,
              triangleleft: PP,
              trianglelefteq: FP,
              triangleq: BP,
              triangleright: qP,
              trianglerighteq: zP,
              tridot: _P,
              trie: VP,
              triminus: HP,
              TripleDot: UP,
              triplus: WP,
              trisb: $P,
              tritime: GP,
              trpezium: jP,
              Tscr: KP,
              tscr: JP,
              TScy: YP,
              tscy: ZP,
              TSHcy: QP,
              tshcy: XP,
              Tstrok: eF,
              tstrok: tF,
              twixt: rF,
              twoheadleftarrow: nF,
              twoheadrightarrow: aF,
              Uacute: iF,
              uacute: oF,
              uarr: sF,
              Uarr: lF,
              uArr: uF,
              Uarrocir: cF,
              Ubrcy: fF,
              ubrcy: hF,
              Ubreve: vF,
              ubreve: dF,
              Ucirc: pF,
              ucirc: mF,
              Ucy: gF,
              ucy: yF,
              udarr: kF,
              Udblac: bF,
              udblac: SF,
              udhar: wF,
              ufisht: CF,
              Ufr: TF,
              ufr: AF,
              Ugrave: xF,
              ugrave: EF,
              uHar: NF,
              uharl: DF,
              uharr: OF,
              uhblk: MF,
              ulcorn: RF,
              ulcorner: LF,
              ulcrop: IF,
              ultri: PF,
              Umacr: FF,
              umacr: BF,
              uml: qF,
              UnderBar: zF,
              UnderBrace: _F,
              UnderBracket: VF,
              UnderParenthesis: HF,
              Union: UF,
              UnionPlus: WF,
              Uogon: $F,
              uogon: GF,
              Uopf: jF,
              uopf: KF,
              UpArrowBar: JF,
              uparrow: YF,
              UpArrow: ZF,
              Uparrow: QF,
              UpArrowDownArrow: XF,
              updownarrow: eB,
              UpDownArrow: tB,
              Updownarrow: rB,
              UpEquilibrium: nB,
              upharpoonleft: aB,
              upharpoonright: iB,
              uplus: oB,
              UpperLeftArrow: sB,
              UpperRightArrow: lB,
              upsi: uB,
              Upsi: cB,
              upsih: fB,
              Upsilon: hB,
              upsilon: vB,
              UpTeeArrow: dB,
              UpTee: pB,
              upuparrows: mB,
              urcorn: gB,
              urcorner: yB,
              urcrop: kB,
              Uring: bB,
              uring: SB,
              urtri: wB,
              Uscr: CB,
              uscr: TB,
              utdot: AB,
              Utilde: xB,
              utilde: EB,
              utri: NB,
              utrif: DB,
              uuarr: OB,
              Uuml: MB,
              uuml: RB,
              uwangle: LB,
              vangrt: IB,
              varepsilon: PB,
              varkappa: FB,
              varnothing: BB,
              varphi: qB,
              varpi: zB,
              varpropto: _B,
              varr: VB,
              vArr: HB,
              varrho: UB,
              varsigma: WB,
              varsubsetneq: $B,
              varsubsetneqq: GB,
              varsupsetneq: jB,
              varsupsetneqq: KB,
              vartheta: JB,
              vartriangleleft: YB,
              vartriangleright: ZB,
              vBar: QB,
              Vbar: XB,
              vBarv: eq,
              Vcy: tq,
              vcy: rq,
              vdash: nq,
              vDash: aq,
              Vdash: iq,
              VDash: oq,
              Vdashl: sq,
              veebar: lq,
              vee: uq,
              Vee: cq,
              veeeq: fq,
              vellip: hq,
              verbar: vq,
              Verbar: dq,
              vert: pq,
              Vert: mq,
              VerticalBar: gq,
              VerticalLine: yq,
              VerticalSeparator: kq,
              VerticalTilde: bq,
              VeryThinSpace: Sq,
              Vfr: wq,
              vfr: Cq,
              vltri: Tq,
              vnsub: Aq,
              vnsup: xq,
              Vopf: Eq,
              vopf: Nq,
              vprop: Dq,
              vrtri: Oq,
              Vscr: Mq,
              vscr: Rq,
              vsubnE: Lq,
              vsubne: Iq,
              vsupnE: Pq,
              vsupne: Fq,
              Vvdash: Bq,
              vzigzag: qq,
              Wcirc: zq,
              wcirc: _q,
              wedbar: Vq,
              wedge: Hq,
              Wedge: Uq,
              wedgeq: Wq,
              weierp: $q,
              Wfr: Gq,
              wfr: jq,
              Wopf: Kq,
              wopf: Jq,
              wp: Yq,
              wr: Zq,
              wreath: Qq,
              Wscr: Xq,
              wscr: ez,
              xcap: tz,
              xcirc: rz,
              xcup: nz,
              xdtri: az,
              Xfr: iz,
              xfr: oz,
              xharr: sz,
              xhArr: lz,
              Xi: uz,
              xi: cz,
              xlarr: fz,
              xlArr: hz,
              xmap: vz,
              xnis: dz,
              xodot: pz,
              Xopf: mz,
              xopf: gz,
              xoplus: yz,
              xotime: kz,
              xrarr: bz,
              xrArr: Sz,
              Xscr: wz,
              xscr: Cz,
              xsqcup: Tz,
              xuplus: Az,
              xutri: xz,
              xvee: Ez,
              xwedge: Nz,
              Yacute: Dz,
              yacute: Oz,
              YAcy: Mz,
              yacy: Rz,
              Ycirc: Lz,
              ycirc: Iz,
              Ycy: Pz,
              ycy: Fz,
              yen: Bz,
              Yfr: qz,
              yfr: zz,
              YIcy: _z,
              yicy: Vz,
              Yopf: Hz,
              yopf: Uz,
              Yscr: Wz,
              yscr: $z,
              YUcy: Gz,
              yucy: jz,
              yuml: Kz,
              Yuml: Jz,
              Zacute: Yz,
              zacute: Zz,
              Zcaron: Qz,
              zcaron: Xz,
              Zcy: e_,
              zcy: t_,
              Zdot: r_,
              zdot: n_,
              zeetrf: a_,
              ZeroWidthSpace: i_,
              Zeta: o_,
              zeta: s_,
              zfr: l_,
              Zfr: u_,
              ZHcy: c_,
              zhcy: f_,
              zigrarr: h_,
              zopf: v_,
              Zopf: d_,
              Zscr: p_,
              zscr: m_,
              zwj: g_,
              zwnj: y_
            }, k_ = "Á", b_ = "á", S_ = "Â", w_ = "â", C_ = "´", T_ = "Æ", A_ = "æ", x_ = "À", E_ = "à", N_ = "&", D_ = "&", O_ = "Å", M_ = "å", R_ = "Ã", L_ = "ã", I_ = "Ä", P_ = "ä", F_ = "¦", B_ = "Ç", q_ = "ç", z_ = "¸", __ = "¢", V_ = "©", H_ = "©", U_ = "¤", W_ = "°", $_ = "÷", G_ = "É", j_ = "é", K_ = "Ê", J_ = "ê", Y_ = "È", Z_ = "è", Q_ = "Ð", X_ = "ð", e2 = "Ë", t2 = "ë", r2 = "½", n2 = "¼", a2 = "¾", i2 = ">", o2 = ">", s2 = "Í", l2 = "í", u2 = "Î", c2 = "î", f2 = "¡", h2 = "Ì", v2 = "ì", d2 = "¿", p2 = "Ï", m2 = "ï", g2 = "«", y2 = "<", k2 = "<", b2 = "¯", S2 = "µ", w2 = "·", C2 = " ", T2 = "¬", A2 = "Ñ", x2 = "ñ", E2 = "Ó", N2 = "ó", D2 = "Ô", O2 = "ô", M2 = "Ò", R2 = "ò", L2 = "ª", I2 = "º", P2 = "Ø", F2 = "ø", B2 = "Õ", q2 = "õ", z2 = "Ö", _2 = "ö", V2 = "¶", H2 = "±", U2 = "£", W2 = '"', $2 = '"', G2 = "»", j2 = "®", K2 = "®", J2 = "§", Y2 = "­", Z2 = "¹", Q2 = "²", X2 = "³", eV = "ß", tV = "Þ", rV = "þ", nV = "×", aV = "Ú", iV = "ú", oV = "Û", sV = "û", lV = "Ù", uV = "ù", cV = "¨", fV = "Ü", hV = "ü", vV = "Ý", dV = "ý", pV = "¥", mV = "ÿ", gV = {
              Aacute: k_,
              aacute: b_,
              Acirc: S_,
              acirc: w_,
              acute: C_,
              AElig: T_,
              aelig: A_,
              Agrave: x_,
              agrave: E_,
              amp: N_,
              AMP: D_,
              Aring: O_,
              aring: M_,
              Atilde: R_,
              atilde: L_,
              Auml: I_,
              auml: P_,
              brvbar: F_,
              Ccedil: B_,
              ccedil: q_,
              cedil: z_,
              cent: __,
              copy: V_,
              COPY: H_,
              curren: U_,
              deg: W_,
              divide: $_,
              Eacute: G_,
              eacute: j_,
              Ecirc: K_,
              ecirc: J_,
              Egrave: Y_,
              egrave: Z_,
              ETH: Q_,
              eth: X_,
              Euml: e2,
              euml: t2,
              frac12: r2,
              frac14: n2,
              frac34: a2,
              gt: i2,
              GT: o2,
              Iacute: s2,
              iacute: l2,
              Icirc: u2,
              icirc: c2,
              iexcl: f2,
              Igrave: h2,
              igrave: v2,
              iquest: d2,
              Iuml: p2,
              iuml: m2,
              laquo: g2,
              lt: y2,
              LT: k2,
              macr: b2,
              micro: S2,
              middot: w2,
              nbsp: C2,
              not: T2,
              Ntilde: A2,
              ntilde: x2,
              Oacute: E2,
              oacute: N2,
              Ocirc: D2,
              ocirc: O2,
              Ograve: M2,
              ograve: R2,
              ordf: L2,
              ordm: I2,
              Oslash: P2,
              oslash: F2,
              Otilde: B2,
              otilde: q2,
              Ouml: z2,
              ouml: _2,
              para: V2,
              plusmn: H2,
              pound: U2,
              quot: W2,
              QUOT: $2,
              raquo: G2,
              reg: j2,
              REG: K2,
              sect: J2,
              shy: Y2,
              sup1: Z2,
              sup2: Q2,
              sup3: X2,
              szlig: eV,
              THORN: tV,
              thorn: rV,
              times: nV,
              Uacute: aV,
              uacute: iV,
              Ucirc: oV,
              ucirc: sV,
              Ugrave: lV,
              ugrave: uV,
              uml: cV,
              Uuml: fV,
              uuml: hV,
              Yacute: vV,
              yacute: dV,
              yen: pV,
              yuml: mV
            }, yV = "&", kV = "'", bV = ">", SV = "<", wV = '"', Mo = {
              amp: yV,
              apos: kV,
              gt: bV,
              lt: SV,
              quot: wV
            }, Wi = {}, CV = {
              0: 65533,
              128: 8364,
              130: 8218,
              131: 402,
              132: 8222,
              133: 8230,
              134: 8224,
              135: 8225,
              136: 710,
              137: 8240,
              138: 352,
              139: 8249,
              140: 338,
              142: 381,
              145: 8216,
              146: 8217,
              147: 8220,
              148: 8221,
              149: 8226,
              150: 8211,
              151: 8212,
              152: 732,
              153: 8482,
              154: 353,
              155: 8250,
              156: 339,
              158: 382,
              159: 376
            }, TV = V && V.__importDefault || function(n) {
              return n && n.__esModule ? n : { default: n };
            };
            Object.defineProperty(Wi, "__esModule", { value: !0 });
            var Ro = TV(CV), AV = (
              // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
              String.fromCodePoint || function(n) {
                var r = "";
                return n > 65535 && (n -= 65536, r += String.fromCharCode(n >>> 10 & 1023 | 55296), n = 56320 | n & 1023), r += String.fromCharCode(n), r;
              }
            );
            function xV(n) {
              return n >= 55296 && n <= 57343 || n > 1114111 ? "�" : (n in Ro.default && (n = Ro.default[n]), AV(n));
            }
            Wi.default = xV;
            var La = V && V.__importDefault || function(n) {
              return n && n.__esModule ? n : { default: n };
            };
            Object.defineProperty(he, "__esModule", { value: !0 }), he.decodeHTML = he.decodeHTMLStrict = he.decodeXML = void 0;
            var $i = La(Oo), EV = La(gV), NV = La(Mo), Lo = La(Wi), DV = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
            he.decodeXML = Io(NV.default), he.decodeHTMLStrict = Io($i.default);
            function Io(n) {
              var r = Fo(n);
              return function(s) {
                return String(s).replace(DV, r);
              };
            }
            var Po = function(n, r) {
              return n < r ? 1 : -1;
            };
            he.decodeHTML = function() {
              for (var n = Object.keys(EV.default).sort(Po), r = Object.keys($i.default).sort(Po), s = 0, f = 0; s < r.length; s++)
                n[f] === r[s] ? (r[s] += ";?", f++) : r[s] += ";";
              var g = new RegExp("&(?:" + r.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g"), A = Fo($i.default);
              function D(L) {
                return L.substr(-1) !== ";" && (L += ";"), A(L);
              }
              return function(L) {
                return String(L).replace(g, D);
              };
            }();
            function Fo(n) {
              return function(s) {
                if (s.charAt(1) === "#") {
                  var f = s.charAt(2);
                  return f === "X" || f === "x" ? Lo.default(parseInt(s.substr(3), 16)) : Lo.default(parseInt(s.substr(2), 10));
                }
                return n[s.slice(1, -1)] || s;
              };
            }
            var pr = {}, Bo = V && V.__importDefault || function(n) {
              return n && n.__esModule ? n : { default: n };
            };
            Object.defineProperty(pr, "__esModule", { value: !0 }), pr.escapeUTF8 = pr.escape = pr.encodeNonAsciiHTML = pr.encodeHTML = pr.encodeXML = void 0;
            var OV = Bo(Mo), qo = _o(OV.default), zo = Vo(qo);
            pr.encodeXML = Wo(qo);
            var MV = Bo(Oo), Gi = _o(MV.default), RV = Vo(Gi);
            pr.encodeHTML = IV(Gi, RV), pr.encodeNonAsciiHTML = Wo(Gi);
            function _o(n) {
              return Object.keys(n).sort().reduce(function(r, s) {
                return r[n[s]] = "&" + s + ";", r;
              }, {});
            }
            function Vo(n) {
              for (var r = [], s = [], f = 0, g = Object.keys(n); f < g.length; f++) {
                var A = g[f];
                A.length === 1 ? r.push("\\" + A) : s.push(A);
              }
              r.sort();
              for (var D = 0; D < r.length - 1; D++) {
                for (var L = D; L < r.length - 1 && r[L].charCodeAt(1) + 1 === r[L + 1].charCodeAt(1); )
                  L += 1;
                var Y = 1 + L - D;
                Y < 3 || r.splice(D, Y, r[D] + "-" + r[L]);
              }
              return s.unshift("[" + r.join("") + "]"), new RegExp(s.join("|"), "g");
            }
            var Ho = /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g, LV = (
              // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
              String.prototype.codePointAt != null ? (
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                function(n) {
                  return n.codePointAt(0);
                }
              ) : (
                // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
                function(n) {
                  return (n.charCodeAt(0) - 55296) * 1024 + n.charCodeAt(1) - 56320 + 65536;
                }
              )
            );
            function Ia(n) {
              return "&#x" + (n.length > 1 ? LV(n) : n.charCodeAt(0)).toString(16).toUpperCase() + ";";
            }
            function IV(n, r) {
              return function(s) {
                return s.replace(r, function(f) {
                  return n[f];
                }).replace(Ho, Ia);
              };
            }
            var Uo = new RegExp(zo.source + "|" + Ho.source, "g");
            function PV(n) {
              return n.replace(Uo, Ia);
            }
            pr.escape = PV;
            function FV(n) {
              return n.replace(zo, Ia);
            }
            pr.escapeUTF8 = FV;
            function Wo(n) {
              return function(r) {
                return r.replace(Uo, function(s) {
                  return n[s] || Ia(s);
                });
              };
            }
            (function(n) {
              Object.defineProperty(n, "__esModule", { value: !0 }), n.decodeXMLStrict = n.decodeHTML5Strict = n.decodeHTML4Strict = n.decodeHTML5 = n.decodeHTML4 = n.decodeHTMLStrict = n.decodeHTML = n.decodeXML = n.encodeHTML5 = n.encodeHTML4 = n.escapeUTF8 = n.escape = n.encodeNonAsciiHTML = n.encodeHTML = n.encodeXML = n.encode = n.decodeStrict = n.decode = void 0;
              var r = he, s = pr;
              function f(Y, ie) {
                return (!ie || ie <= 0 ? r.decodeXML : r.decodeHTML)(Y);
              }
              n.decode = f;
              function g(Y, ie) {
                return (!ie || ie <= 0 ? r.decodeXML : r.decodeHTMLStrict)(Y);
              }
              n.decodeStrict = g;
              function A(Y, ie) {
                return (!ie || ie <= 0 ? s.encodeXML : s.encodeHTML)(Y);
              }
              n.encode = A;
              var D = pr;
              Object.defineProperty(n, "encodeXML", { enumerable: !0, get: function() {
                return D.encodeXML;
              } }), Object.defineProperty(n, "encodeHTML", { enumerable: !0, get: function() {
                return D.encodeHTML;
              } }), Object.defineProperty(n, "encodeNonAsciiHTML", { enumerable: !0, get: function() {
                return D.encodeNonAsciiHTML;
              } }), Object.defineProperty(n, "escape", { enumerable: !0, get: function() {
                return D.escape;
              } }), Object.defineProperty(n, "escapeUTF8", { enumerable: !0, get: function() {
                return D.escapeUTF8;
              } }), Object.defineProperty(n, "encodeHTML4", { enumerable: !0, get: function() {
                return D.encodeHTML;
              } }), Object.defineProperty(n, "encodeHTML5", { enumerable: !0, get: function() {
                return D.encodeHTML;
              } });
              var L = he;
              Object.defineProperty(n, "decodeXML", { enumerable: !0, get: function() {
                return L.decodeXML;
              } }), Object.defineProperty(n, "decodeHTML", { enumerable: !0, get: function() {
                return L.decodeHTML;
              } }), Object.defineProperty(n, "decodeHTMLStrict", { enumerable: !0, get: function() {
                return L.decodeHTMLStrict;
              } }), Object.defineProperty(n, "decodeHTML4", { enumerable: !0, get: function() {
                return L.decodeHTML;
              } }), Object.defineProperty(n, "decodeHTML5", { enumerable: !0, get: function() {
                return L.decodeHTML;
              } }), Object.defineProperty(n, "decodeHTML4Strict", { enumerable: !0, get: function() {
                return L.decodeHTMLStrict;
              } }), Object.defineProperty(n, "decodeHTML5Strict", { enumerable: !0, get: function() {
                return L.decodeHTMLStrict;
              } }), Object.defineProperty(n, "decodeXMLStrict", { enumerable: !0, get: function() {
                return L.decodeXML;
              } });
            })(X);
            var $o = "&(?:#x[a-f0-9]{1,6}|#[0-9]{1,7}|[a-z][a-z0-9]{1,31});", BV = 92, qV = /[\\&]/, ji = "[!\"#$%&'()*+,./:;<=>?@[\\\\\\]^_`{|}~-]", zV = new RegExp("\\\\" + ji + "|" + $o, "gi"), _V = '[&<>"]', Go = new RegExp(_V, "g"), VV = function(n) {
              return n.charCodeAt(0) === BV ? n.charAt(1) : X.decodeHTML(n);
            };
            function na(n) {
              return qV.test(n) ? n.replace(zV, VV) : n;
            }
            function Pa(n) {
              try {
                return Te(n);
              } catch {
                return n;
              }
            }
            function HV(n) {
              switch (n) {
                case "&":
                  return "&amp;";
                case "<":
                  return "&lt;";
                case ">":
                  return "&gt;";
                case '"':
                  return "&quot;";
                default:
                  return n;
              }
            }
            function Hn(n) {
              return Go.test(n) ? n.replace(Go, HV) : n;
            }
            function Ki(n, r) {
              for (var s = [], f = 0; f < r; f++)
                s.push(n);
              return s.join("");
            }
            function jo(n) {
              return n ? !/[^ \t]+/.test(n) : !0;
            }
            var UV = (
              /** @class */
              function() {
                function n(r) {
                  this.current = r, this.root = r, this.entering = !0;
                }
                return n.prototype.next = function() {
                  var r = this.current, s = this.entering;
                  if (r === null)
                    return null;
                  var f = Ji(r);
                  return s && f ? r.firstChild ? (this.current = r.firstChild, this.entering = !0) : this.entering = !1 : r === this.root ? this.current = null : r.next === null ? (this.current = r.parent, this.entering = !1) : (this.current = r.next, this.entering = !0), { entering: s, node: r };
                }, n.prototype.resumeAt = function(r, s) {
                  this.current = r, this.entering = s === !0;
                }, n;
              }()
            );
            function Ji(n) {
              switch (n.type) {
                case "document":
                case "blockQuote":
                case "list":
                case "item":
                case "paragraph":
                case "heading":
                case "emph":
                case "strong":
                case "strike":
                case "link":
                case "image":
                case "table":
                case "tableHead":
                case "tableBody":
                case "tableRow":
                case "tableCell":
                case "tableDelimRow":
                case "customInline":
                  return !0;
                default:
                  return !1;
              }
            }
            var WV = 1, Fa = {};
            function $V(n) {
              return Fa[n];
            }
            function Yi(n) {
              delete Fa[n];
            }
            function GV() {
              Fa = {};
            }
            var aa = (
              /** @class */
              function() {
                function n(r, s) {
                  this.parent = null, this.prev = null, this.next = null, this.firstChild = null, this.lastChild = null, this.literal = null, r === "document" ? this.id = -1 : this.id = WV++, this.type = r, this.sourcepos = s, Fa[this.id] = this;
                }
                return n.prototype.isContainer = function() {
                  return Ji(this);
                }, n.prototype.unlink = function() {
                  this.prev ? this.prev.next = this.next : this.parent && (this.parent.firstChild = this.next), this.next ? this.next.prev = this.prev : this.parent && (this.parent.lastChild = this.prev), this.parent = null, this.next = null, this.prev = null;
                }, n.prototype.replaceWith = function(r) {
                  this.insertBefore(r), this.unlink();
                }, n.prototype.insertAfter = function(r) {
                  r.unlink(), r.next = this.next, r.next && (r.next.prev = r), r.prev = this, this.next = r, this.parent && (r.parent = this.parent, r.next || (r.parent.lastChild = r));
                }, n.prototype.insertBefore = function(r) {
                  r.unlink(), r.prev = this.prev, r.prev && (r.prev.next = r), r.next = this, this.prev = r, r.parent = this.parent, r.prev || (r.parent.firstChild = r);
                }, n.prototype.appendChild = function(r) {
                  r.unlink(), r.parent = this, this.lastChild ? (this.lastChild.next = r, r.prev = this.lastChild, this.lastChild = r) : (this.firstChild = r, this.lastChild = r);
                }, n.prototype.prependChild = function(r) {
                  r.unlink(), r.parent = this, this.firstChild ? (this.firstChild.prev = r, r.next = this.firstChild, this.firstChild = r) : (this.firstChild = r, this.lastChild = r);
                }, n.prototype.walker = function() {
                  return new UV(this);
                }, n;
              }()
            ), Zr = (
              /** @class */
              function(n) {
                ce(r, n);
                function r(s, f) {
                  var g = n.call(this, s, f) || this;
                  return g.open = !0, g.lineOffsets = null, g.stringContent = null, g.lastLineBlank = !1, g.lastLineChecked = !1, g.type = s, g;
                }
                return r;
              }(aa)
            ), jV = (
              /** @class */
              function(n) {
                ce(r, n);
                function r() {
                  var s = n !== null && n.apply(this, arguments) || this;
                  return s.listData = null, s;
                }
                return r;
              }(Zr)
            ), KV = (
              /** @class */
              function(n) {
                ce(r, n);
                function r() {
                  var s = n !== null && n.apply(this, arguments) || this;
                  return s.level = 0, s.headingType = "atx", s;
                }
                return r;
              }(Zr)
            ), JV = (
              /** @class */
              function(n) {
                ce(r, n);
                function r() {
                  var s = n !== null && n.apply(this, arguments) || this;
                  return s.isFenced = !1, s.fenceChar = null, s.fenceLength = 0, s.fenceOffset = -1, s.info = null, s.infoPadding = 0, s;
                }
                return r;
              }(Zr)
            ), YV = (
              /** @class */
              function(n) {
                ce(r, n);
                function r() {
                  var s = n !== null && n.apply(this, arguments) || this;
                  return s.columns = [], s;
                }
                return r;
              }(Zr)
            ), ZV = (
              /** @class */
              function(n) {
                ce(r, n);
                function r() {
                  var s = n !== null && n.apply(this, arguments) || this;
                  return s.startIdx = 0, s.endIdx = 0, s.paddingLeft = 0, s.paddingRight = 0, s.ignored = !1, s;
                }
                return r;
              }(Zr)
            ), QV = (
              /** @class */
              function(n) {
                ce(r, n);
                function r() {
                  var s = n !== null && n.apply(this, arguments) || this;
                  return s.title = "", s.dest = "", s.label = "", s;
                }
                return r;
              }(Zr)
            ), XV = (
              /** @class */
              function(n) {
                ce(r, n);
                function r() {
                  var s = n !== null && n.apply(this, arguments) || this;
                  return s.syntaxLength = 0, s.offset = -1, s.info = "", s;
                }
                return r;
              }(Zr)
            ), eH = (
              /** @class */
              function(n) {
                ce(r, n);
                function r() {
                  var s = n !== null && n.apply(this, arguments) || this;
                  return s.htmlBlockType = -1, s;
                }
                return r;
              }(Zr)
            ), tH = (
              /** @class */
              function(n) {
                ce(r, n);
                function r() {
                  var s = n !== null && n.apply(this, arguments) || this;
                  return s.destination = null, s.title = null, s.extendedAutolink = !1, s;
                }
                return r;
              }(aa)
            ), rH = (
              /** @class */
              function(n) {
                ce(r, n);
                function r() {
                  var s = n !== null && n.apply(this, arguments) || this;
                  return s.tickCount = 0, s;
                }
                return r;
              }(aa)
            ), nH = (
              /** @class */
              function(n) {
                ce(r, n);
                function r() {
                  var s = n !== null && n.apply(this, arguments) || this;
                  return s.info = "", s;
                }
                return r;
              }(aa)
            );
            function Rt(n, r) {
              switch (n) {
                case "heading":
                  return new KV(n, r);
                case "list":
                case "item":
                  return new jV(n, r);
                case "link":
                case "image":
                  return new tH(n, r);
                case "codeBlock":
                  return new JV(n, r);
                case "htmlBlock":
                  return new eH(n, r);
                case "table":
                  return new YV(n, r);
                case "tableCell":
                  return new ZV(n, r);
                case "document":
                case "paragraph":
                case "blockQuote":
                case "thematicBreak":
                case "tableRow":
                case "tableBody":
                case "tableHead":
                case "frontMatter":
                  return new Zr(n, r);
                case "code":
                  return new rH(n, r);
                case "refDef":
                  return new QV(n, r);
                case "customBlock":
                  return new XV(n, r);
                case "customInline":
                  return new nH(n, r);
                default:
                  return new aa(n, r);
              }
            }
            function Ko(n) {
              return n.type === "codeBlock";
            }
            function aH(n) {
              return n.type === "htmlBlock";
            }
            function iH(n) {
              return n.type === "heading";
            }
            function Jo(n) {
              return n.type === "list";
            }
            function oH(n) {
              return n.type === "table";
            }
            function Un(n) {
              return n.type === "refDef";
            }
            function Yo(n) {
              return n.type === "customBlock";
            }
            function sH(n) {
              return n.type === "customInline";
            }
            function qt(n, r) {
              var s = Rt("text", r);
              return s.literal = n, s;
            }
            var Zo = "[A-Za-z][A-Za-z0-9-]*", lH = "[a-zA-Z_:][a-zA-Z0-9:._-]*", uH = "[^\"'=<>`\\x00-\\x20]+", cH = "'[^']*'", fH = '"[^"]*"', hH = "(?:" + uH + "|" + cH + "|" + fH + ")", vH = "(?:\\s*=\\s*" + hH + ")", dH = "(?:\\s+" + lH + vH + "?)", Qo = "<" + Zo + dH + "*\\s*/?>", Xo = "</" + Zo + "\\s*[>]", pH = "<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->", mH = "[<][?].*?[?][>]", gH = "<![A-Z]+\\s+[^>]*>", yH = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>", kH = "(?:" + Qo + "|" + Xo + "|" + pH + "|" + mH + "|" + gH + "|" + yH + ")", bH = new RegExp("^" + kH, "i");
            /*! http://mths.be/fromcodepoint v0.2.1 by @mathias */
            var Zi;
            if (String.fromCodePoint)
              Zi = function(n) {
                try {
                  return String.fromCodePoint(n);
                } catch (r) {
                  if (r instanceof RangeError)
                    return "�";
                  throw r;
                }
              };
            else {
              var SH = String.fromCharCode, wH = Math.floor;
              Zi = function() {
                for (var n = [], r = 0; r < arguments.length; r++)
                  n[r] = arguments[r];
                var s = 16384, f = [], g, A, D = -1, L = n.length;
                if (!L)
                  return "";
                for (var Y = ""; ++D < L; ) {
                  var ie = Number(n[D]);
                  if (!isFinite(ie) || // `NaN`, `+Infinity`, or `-Infinity`
                  ie < 0 || // not a valid Unicode code point
                  ie > 1114111 || // not a valid Unicode code point
                  wH(ie) !== ie)
                    return "�";
                  ie <= 65535 ? f.push(ie) : (ie -= 65536, g = (ie >> 10) + 55296, A = ie % 1024 + 56320, f.push(g, A)), (D + 1 === L || f.length > s) && (Y += SH.apply(void 0, f), f.length = 0);
                }
                return Y;
              };
            }
            var Qi = Zi, CH = "(?:[w-]+.)*[A-Za-z0-9-]+.[A-Za-z0-9-]+", TH = "[^<\\s]*[^<?!.,:*_?~\\s]", AH = "[\\w.+-]+@(?:[\\w-]+\\.)+[\\w-]+";
            function xH(n) {
              var r = /\)+$/.exec(n);
              if (r) {
                for (var s = 0, f = 0, g = n; f < g.length; f++) {
                  var A = g[f];
                  A === "(" ? s < 0 ? s = 1 : s += 1 : A === ")" && (s -= 1);
                }
                if (s < 0) {
                  var D = Math.min(-s, r[0].length);
                  return n.substring(0, n.length - D);
                }
              }
              return n;
            }
            function EH(n) {
              return n.replace(/&[A-Za-z0-9]+;$/, "");
            }
            function NH(n) {
              for (var r = new RegExp(AH, "g"), s = [], f; f = r.exec(n); ) {
                var g = f[0];
                /[_-]+$/.test(g) || s.push({
                  text: g,
                  range: [f.index, f.index + g.length - 1],
                  url: "mailto:" + g
                });
              }
              return s;
            }
            function DH(n) {
              for (var r = new RegExp("(www|https?://)." + CH + TH, "g"), s = [], f; f = r.exec(n); ) {
                var g = EH(xH(f[0])), A = f[1] === "www" ? "http://" : "";
                s.push({
                  text: g,
                  range: [f.index, f.index + g.length - 1],
                  url: "" + A + g
                });
              }
              return s;
            }
            function OH(n) {
              return J(J([], DH(n)), NH(n)).sort(function(r, s) {
                return r.range[0] - s.range[0];
              });
            }
            function MH(n, r) {
              typeof r == "boolean" && (r = OH);
              for (var s, f = function() {
                var g = s.entering, A = s.node;
                if (g && A.type === "text" && A.parent.type !== "link") {
                  var D = A.literal, L = r(D);
                  if (!L || !L.length)
                    return "continue";
                  for (var Y = 0, ie = A.sourcepos[0], Ee = ie[0], Re = ie[1], we = function(tn, VW) {
                    return [
                      [Ee, Re + tn],
                      [Ee, Re + VW]
                    ];
                  }, He = [], Ve = 0, pt = L; Ve < pt.length; Ve++) {
                    var Lt = pt[Ve], Ut = Lt.range, Qr = Lt.url, xr = Lt.text;
                    Ut[0] > Y && He.push(qt(D.substring(Y, Ut[0]), we(Y, Ut[0] - 1)));
                    var gr = Rt("link", we.apply(void 0, Ut));
                    gr.appendChild(qt(xr, we.apply(void 0, Ut))), gr.destination = Qr, gr.extendedAutolink = !0, He.push(gr), Y = Ut[1] + 1;
                  }
                  Y < D.length && He.push(qt(D.substring(Y), we(Y, D.length - 1)));
                  for (var Lr = 0, Xr = He; Lr < Xr.length; Lr++) {
                    var en = Xr[Lr];
                    A.insertBefore(en);
                  }
                  A.unlink();
                }
              }; s = n.next(); )
                f();
            }
            function Ba(n) {
              return n[n.length - 1];
            }
            function es(n) {
              return n.slice(1, n.length - 1).trim().replace(/[ \t\r\n]+/, " ").toLowerCase().toUpperCase();
            }
            function qa(n, r) {
              Object.keys(n).forEach(function(s) {
                r(s, n[s]);
              });
            }
            function RH(n) {
              for (var r = [], s = 1; s < arguments.length; s++)
                r[s - 1] = arguments[s];
              var f = ne({}, n);
              return r.forEach(function(g) {
                delete f[g];
              }), f;
            }
            function Wn(n) {
              return !Object.keys(n).length;
            }
            function LH(n) {
              Object.keys(n).forEach(function(r) {
                delete n[r];
              });
            }
            var Xi = 10, eo = 42, za = 95, IH = 96, ts = 91, PH = 93, _a = 126, rs = 60, FH = 33, ns = 92, BH = 38, as = 40, to = 41, qH = 58, An = 39, xn = 34, En = 36, ro = "\\\\" + ji, is = new RegExp(/[!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E42\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDF3C-\uDF3E]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]/), zH = new RegExp('^(?:"(' + ro + '|[^"\\x00])*"|' + ("'(" + ro + "|[^'\\x00])*'") + "|" + ("\\((" + ro + "|[^()\\x00])*\\))")), _H = /^(?:<(?:[^<>\n\\\x00]|\\.)*>)/, os = new RegExp("^" + ji), VH = new RegExp("^" + $o, "i"), HH = /`+/, UH = /^`+/, WH = /\.\.\./g, $H = /--+/g, GH = /^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/, jH = /^<[A-Za-z][A-Za-z0-9.+-]{1,31}:[^<>\x00-\x20]*>/i, KH = /^ *(?:\n *)?/, no = /^[ \t\n\x0b\x0c\x0d]/, ss = /^\s/, JH = / *$/, YH = /^ */, ls = /^ *(?:\n|$)/, ZH = /^\[(?:[^\\\[\]]|\\.){0,1000}\]/, QH = /^[^\n`\[\]\\!<&*_'"~$]+/m, XH = (
              /** @class */
              function() {
                function n(r) {
                  this.subject = "", this.delimiters = null, this.brackets = null, this.pos = 0, this.lineStartNum = 0, this.lineIdx = 0, this.lineOffsets = [0], this.linePosOffset = 0, this.refMap = {}, this.refLinkCandidateMap = {}, this.refDefCandidateMap = {}, this.options = r;
                }
                return n.prototype.sourcepos = function(r, s) {
                  var f = this.linePosOffset + this.lineOffsets[this.lineIdx], g = this.lineStartNum + this.lineIdx, A = [g, r + f];
                  return typeof s == "number" ? [A, [g, s + f]] : A;
                }, n.prototype.nextLine = function() {
                  this.lineIdx += 1, this.linePosOffset = -this.pos;
                }, n.prototype.match = function(r) {
                  var s = r.exec(this.subject.slice(this.pos));
                  return s === null ? null : (this.pos += s.index + s[0].length, s[0]);
                }, n.prototype.peek = function() {
                  return this.pos < this.subject.length ? this.subject.charCodeAt(this.pos) : -1;
                }, n.prototype.spnl = function() {
                  return this.match(KH), !0;
                }, n.prototype.parseBackticks = function(r) {
                  var s = this.pos + 1, f = this.match(UH);
                  if (f === null)
                    return !1;
                  for (var g = this.pos, A; (A = this.match(HH)) !== null; )
                    if (A === f) {
                      var D = this.subject.slice(g, this.pos - f.length), L = this.sourcepos(s, this.pos), Y = D.split(`
`);
                      if (Y.length > 1) {
                        var ie = Ba(Y);
                        this.lineIdx += Y.length - 1, this.linePosOffset = -(this.pos - ie.length - f.length), L[1] = this.sourcepos(this.pos), D = Y.join(" ");
                      }
                      var Ee = Rt("code", L);
                      return D.length > 0 && D.match(/[^ ]/) !== null && D[0] == " " && D[D.length - 1] == " " ? Ee.literal = D.slice(1, D.length - 1) : Ee.literal = D, Ee.tickCount = f.length, r.appendChild(Ee), !0;
                    }
                  return this.pos = g, r.appendChild(qt(f, this.sourcepos(s, this.pos - 1))), !0;
                }, n.prototype.parseBackslash = function(r) {
                  var s = this.subject, f;
                  this.pos += 1;
                  var g = this.pos;
                  return this.peek() === Xi ? (this.pos += 1, f = Rt("linebreak", this.sourcepos(this.pos - 1, this.pos)), r.appendChild(f), this.nextLine()) : os.test(s.charAt(this.pos)) ? (r.appendChild(qt(s.charAt(this.pos), this.sourcepos(g, this.pos))), this.pos += 1) : r.appendChild(qt("\\", this.sourcepos(g, g))), !0;
                }, n.prototype.parseAutolink = function(r) {
                  var s, f, g, A = this.pos + 1;
                  return (s = this.match(GH)) ? (f = s.slice(1, s.length - 1), g = Rt("link", this.sourcepos(A, this.pos)), g.destination = Pa("mailto:" + f), g.title = "", g.appendChild(qt(f, this.sourcepos(A + 1, this.pos - 1))), r.appendChild(g), !0) : (s = this.match(jH)) ? (f = s.slice(1, s.length - 1), g = Rt("link", this.sourcepos(A, this.pos)), g.destination = Pa(f), g.title = "", g.appendChild(qt(f, this.sourcepos(A + 1, this.pos - 1))), r.appendChild(g), !0) : !1;
                }, n.prototype.parseHtmlTag = function(r) {
                  var s = this.pos + 1, f = this.match(bH);
                  if (f === null)
                    return !1;
                  var g = Rt("htmlInline", this.sourcepos(s, this.pos));
                  return g.literal = f, r.appendChild(g), !0;
                }, n.prototype.scanDelims = function(r) {
                  var s = 0, f = this.pos;
                  if (r === An || r === xn)
                    s++, this.pos++;
                  else
                    for (; this.peek() === r; )
                      s++, this.pos++;
                  if (s === 0 || s < 2 && (r === _a || r === En))
                    return this.pos = f, null;
                  var g = f === 0 ? `
` : this.subject.charAt(f - 1), A = this.peek(), D;
                  A === -1 ? D = `
` : D = Qi(A);
                  var L = ss.test(D), Y = is.test(D), ie = ss.test(g), Ee = is.test(g), Re = !L && (!Y || ie || Ee), we = !ie && (!Ee || L || Y), He, Ve;
                  return r === za ? (He = Re && (!we || Ee), Ve = we && (!Re || Y)) : r === An || r === xn ? (He = Re && !we, Ve = we) : r === En ? (He = !L, Ve = !ie) : (He = Re, Ve = we), this.pos = f, { numdelims: s, canOpen: He, canClose: Ve };
                }, n.prototype.handleDelim = function(r, s) {
                  var f = this.scanDelims(r);
                  if (!f)
                    return !1;
                  var g = f.numdelims, A = this.pos + 1, D;
                  this.pos += g, r === An ? D = "’" : r === xn ? D = "“" : D = this.subject.slice(A - 1, this.pos);
                  var L = qt(D, this.sourcepos(A, this.pos));
                  return s.appendChild(L), (f.canOpen || f.canClose) && (this.options.smart || r !== An && r !== xn) && (this.delimiters = {
                    cc: r,
                    numdelims: g,
                    origdelims: g,
                    node: L,
                    previous: this.delimiters,
                    next: null,
                    canOpen: f.canOpen,
                    canClose: f.canClose
                  }, this.delimiters.previous && (this.delimiters.previous.next = this.delimiters)), !0;
                }, n.prototype.removeDelimiter = function(r) {
                  r.previous !== null && (r.previous.next = r.next), r.next === null ? this.delimiters = r.previous : r.next.previous = r.previous;
                }, n.prototype.removeDelimitersBetween = function(r, s) {
                  r.next !== s && (r.next = s, s.previous = r);
                }, n.prototype.processEmphasis = function(r) {
                  var s, f, g, A, D, L, Y, ie = !1, Ee = (s = {}, s[za] = [r, r, r], s[eo] = [r, r, r], s[An] = [r], s[xn] = [r], s[_a] = [r], s[En] = [r], s);
                  for (g = this.delimiters; g !== null && g.previous !== r; )
                    g = g.previous;
                  for (; g !== null; ) {
                    var Re = g.cc, we = Re === za || Re === eo;
                    if (!g.canClose)
                      g = g.next;
                    else {
                      for (f = g.previous, Y = !1; f !== null && f !== r && f !== Ee[Re][we ? g.origdelims % 3 : 0]; ) {
                        if (ie = we && (g.canOpen || f.canClose) && g.origdelims % 3 !== 0 && (f.origdelims + g.origdelims) % 3 === 0, f.cc === g.cc && f.canOpen && !ie) {
                          Y = !0;
                          break;
                        }
                        f = f.previous;
                      }
                      if (A = g, we || Re === _a || Re === En) {
                        if (!Y)
                          g = g.next;
                        else if (f) {
                          var He = g.numdelims >= 2 && f.numdelims >= 2 ? 2 : 1, Ve = we ? 0 : 1;
                          D = f.node, L = g.node;
                          var pt = we ? He === 1 ? "emph" : "strong" : "strike";
                          Re === En && (pt = "customInline");
                          var Lt = Rt(pt), Ut = D.sourcepos[1], Qr = L.sourcepos[0];
                          Lt.sourcepos = [
                            [Ut[0], Ut[1] - He + 1],
                            [Qr[0], Qr[1] + He - 1]
                          ], D.sourcepos[1][1] -= He, L.sourcepos[0][1] += He, D.literal = D.literal.slice(He), L.literal = L.literal.slice(He), f.numdelims -= He, g.numdelims -= He;
                          for (var xr = D.next, gr = void 0; xr && xr !== L; )
                            gr = xr.next, xr.unlink(), Lt.appendChild(xr), xr = gr;
                          if (Re === En) {
                            var Lr = Lt.firstChild, Xr = Lr.literal || "", en = Xr.split(/\s/)[0];
                            Lt.info = en, Xr.length <= en.length ? Lr.unlink() : (Lr.sourcepos[0][1] += en.length, Lr.literal = Xr.replace(en + " ", ""));
                          }
                          if (D.insertAfter(Lt), this.removeDelimitersBetween(f, g), f.numdelims <= Ve && (f.numdelims === 0 && D.unlink(), this.removeDelimiter(f)), g.numdelims <= Ve) {
                            g.numdelims === 0 && L.unlink();
                            var tn = g.next;
                            this.removeDelimiter(g), g = tn;
                          }
                        }
                      } else Re === An ? (g.node.literal = "’", Y && (f.node.literal = "‘"), g = g.next) : Re === xn && (g.node.literal = "”", Y && (f.node.literal = "“"), g = g.next);
                      Y || (Ee[Re][we ? A.origdelims % 3 : 0] = A.previous, A.canOpen || this.removeDelimiter(A));
                    }
                  }
                  for (; this.delimiters !== null && this.delimiters !== r; )
                    this.removeDelimiter(this.delimiters);
                }, n.prototype.parseLinkTitle = function() {
                  var r = this.match(zH);
                  return r === null ? null : na(r.substr(1, r.length - 2));
                }, n.prototype.parseLinkDestination = function() {
                  var r = this.match(_H);
                  if (r === null) {
                    if (this.peek() === rs)
                      return null;
                    for (var s = this.pos, f = 0, g = void 0; (g = this.peek()) !== -1; )
                      if (g === ns && os.test(this.subject.charAt(this.pos + 1)))
                        this.pos += 1, this.peek() !== -1 && (this.pos += 1);
                      else if (g === as)
                        this.pos += 1, f += 1;
                      else if (g === to) {
                        if (f < 1)
                          break;
                        this.pos += 1, f -= 1;
                      } else {
                        if (no.exec(Qi(g)) !== null)
                          break;
                        this.pos += 1;
                      }
                    return this.pos === s && g !== to || f !== 0 ? null : (r = this.subject.substr(s, this.pos - s), Pa(na(r)));
                  }
                  return Pa(na(r.substr(1, r.length - 2)));
                }, n.prototype.parseLinkLabel = function() {
                  var r = this.match(ZH);
                  return r === null || r.length > 1001 ? 0 : r.length;
                }, n.prototype.parseOpenBracket = function(r) {
                  var s = this.pos;
                  this.pos += 1;
                  var f = qt("[", this.sourcepos(this.pos, this.pos));
                  return r.appendChild(f), this.addBracket(f, s, !1), !0;
                }, n.prototype.parseBang = function(r) {
                  var s = this.pos;
                  if (this.pos += 1, this.peek() === ts) {
                    this.pos += 1;
                    var f = qt("![", this.sourcepos(this.pos - 1, this.pos));
                    r.appendChild(f), this.addBracket(f, s + 1, !0);
                  } else {
                    var f = qt("!", this.sourcepos(this.pos, this.pos));
                    r.appendChild(f);
                  }
                  return !0;
                }, n.prototype.parseCloseBracket = function(r) {
                  var s = null, f = null, g = !1;
                  this.pos += 1;
                  var A = this.pos, D = this.brackets;
                  if (D === null)
                    return r.appendChild(qt("]", this.sourcepos(A, A))), !0;
                  if (!D.active)
                    return r.appendChild(qt("]", this.sourcepos(A, A))), this.removeBracket(), !0;
                  var L = D.image, Y = this.pos;
                  this.peek() === as && (this.pos++, this.spnl() && (s = this.parseLinkDestination()) !== null && this.spnl() && // make sure there's a space before the title:
                  (no.test(this.subject.charAt(this.pos - 1)) && (f = this.parseLinkTitle()) || !0) && this.spnl() && this.peek() === to ? (this.pos += 1, g = !0) : this.pos = Y);
                  var ie = "";
                  if (!g) {
                    var Ee = this.pos, Re = this.parseLinkLabel();
                    if (Re > 2 ? ie = this.subject.slice(Ee, Ee + Re) : D.bracketAfter || (ie = this.subject.slice(D.index, A)), Re === 0 && (this.pos = Y), ie) {
                      ie = es(ie);
                      var we = this.refMap[ie];
                      we && (s = we.destination, f = we.title, g = !0);
                    }
                  }
                  if (g) {
                    var He = Rt(L ? "image" : "link");
                    He.destination = s, He.title = f || "", He.sourcepos = [D.startpos, this.sourcepos(this.pos)];
                    for (var Ve = D.node.next, pt = void 0; Ve; )
                      pt = Ve.next, Ve.unlink(), He.appendChild(Ve), Ve = pt;
                    if (r.appendChild(He), this.processEmphasis(D.previousDelimiter), this.removeBracket(), D.node.unlink(), !L)
                      for (D = this.brackets; D !== null; )
                        D.image || (D.active = !1), D = D.previous;
                    return this.options.referenceDefinition && (this.refLinkCandidateMap[r.id] = { node: r, refLabel: ie }), !0;
                  }
                  return this.removeBracket(), this.pos = A, r.appendChild(qt("]", this.sourcepos(A, A))), this.options.referenceDefinition && (this.refLinkCandidateMap[r.id] = { node: r, refLabel: ie }), !0;
                }, n.prototype.addBracket = function(r, s, f) {
                  this.brackets !== null && (this.brackets.bracketAfter = !0), this.brackets = {
                    node: r,
                    startpos: this.sourcepos(s + (f ? 0 : 1)),
                    previous: this.brackets,
                    previousDelimiter: this.delimiters,
                    index: s,
                    image: f,
                    active: !0
                  };
                }, n.prototype.removeBracket = function() {
                  this.brackets && (this.brackets = this.brackets.previous);
                }, n.prototype.parseEntity = function(r) {
                  var s, f = this.pos + 1;
                  return (s = this.match(VH)) ? (r.appendChild(qt(X.decodeHTML(s), this.sourcepos(f, this.pos))), !0) : !1;
                }, n.prototype.parseString = function(r) {
                  var s, f = this.pos + 1;
                  if (s = this.match(QH)) {
                    if (this.options.smart) {
                      var g = s.replace(WH, "…").replace($H, function(D) {
                        var L = 0, Y = 0;
                        return D.length % 3 === 0 ? Y = D.length / 3 : D.length % 2 === 0 ? L = D.length / 2 : D.length % 3 === 2 ? (L = 1, Y = (D.length - 2) / 3) : (L = 2, Y = (D.length - 4) / 3), Ki("—", Y) + Ki("–", L);
                      });
                      r.appendChild(qt(g, this.sourcepos(f, this.pos)));
                    } else {
                      var A = qt(s, this.sourcepos(f, this.pos));
                      r.appendChild(A);
                    }
                    return !0;
                  }
                  return !1;
                }, n.prototype.parseNewline = function(r) {
                  this.pos += 1;
                  var s = r.lastChild;
                  if (s && s.type === "text" && s.literal[s.literal.length - 1] === " ") {
                    var f = s.literal[s.literal.length - 2] === " ", g = s.literal.length;
                    s.literal = s.literal.replace(JH, "");
                    var A = g - s.literal.length;
                    s.sourcepos[1][1] -= A, r.appendChild(Rt(f ? "linebreak" : "softbreak", this.sourcepos(this.pos - A, this.pos)));
                  } else
                    r.appendChild(Rt("softbreak", this.sourcepos(this.pos, this.pos)));
                  return this.nextLine(), this.match(YH), !0;
                }, n.prototype.parseReference = function(r, s) {
                  if (!this.options.referenceDefinition)
                    return 0;
                  this.subject = r.stringContent, this.pos = 0;
                  var f = null, g = this.pos, A = this.parseLinkLabel();
                  if (A === 0)
                    return 0;
                  var D = this.subject.substr(0, A);
                  if (this.peek() === qH)
                    this.pos++;
                  else
                    return this.pos = g, 0;
                  this.spnl();
                  var L = this.parseLinkDestination();
                  if (L === null)
                    return this.pos = g, 0;
                  var Y = this.pos;
                  this.spnl(), this.pos !== Y && (f = this.parseLinkTitle()), f === null && (f = "", this.pos = Y);
                  var ie = !0;
                  if (this.match(ls) === null && (f === "" ? ie = !1 : (f = "", this.pos = Y, ie = this.match(ls) !== null)), !ie)
                    return this.pos = g, 0;
                  var Ee = es(D);
                  if (Ee === "")
                    return this.pos = g, 0;
                  var Re = this.getReferenceDefSourcepos(r);
                  r.sourcepos[0][0] = Re[1][0] + 1;
                  var we = Rt("refDef", Re);
                  return we.title = f, we.dest = L, we.label = Ee, r.insertBefore(we), s[Ee] ? this.refDefCandidateMap[we.id] = we : s[Ee] = uo(we), this.pos - g;
                }, n.prototype.mergeTextNodes = function(r) {
                  for (var s, f = []; s = r.next(); ) {
                    var g = s.entering, A = s.node;
                    if (g && A.type === "text")
                      f.push(A);
                    else if (f.length === 1)
                      f = [];
                    else if (f.length > 1) {
                      var D = f[0], L = f[f.length - 1];
                      D.sourcepos && L.sourcepos && (D.sourcepos[1] = L.sourcepos[1]), D.next = L.next, D.next && (D.next.prev = D);
                      for (var Y = 1; Y < f.length; Y += 1)
                        D.literal += f[Y].literal, f[Y].unlink();
                      f = [];
                    }
                  }
                }, n.prototype.getReferenceDefSourcepos = function(r) {
                  for (var s = r.stringContent.split(/\n|\r\n/), f = !1, g = 0, A = { line: 0, ch: 0 }, D = 0; D < s.length; D += 1) {
                    var L = s[D];
                    if (no.test(L))
                      break;
                    if (/\:/.test(L) && g === 0) {
                      if (f)
                        break;
                      var Y = L.indexOf(":") === L.length - 1 ? D + 1 : D;
                      A = { line: Y, ch: s[Y].length }, f = !0;
                    }
                    var ie = L.match(/'|"/g);
                    if (ie && (g += ie.length), g === 2) {
                      A = { line: D, ch: L.length };
                      break;
                    }
                  }
                  return [
                    [r.sourcepos[0][0], r.sourcepos[0][1]],
                    [r.sourcepos[0][0] + A.line, A.ch]
                  ];
                }, n.prototype.parseInline = function(r) {
                  var s, f = !1, g = this.peek();
                  if (g === -1)
                    return !1;
                  switch (g) {
                    case Xi:
                      f = this.parseNewline(r);
                      break;
                    case ns:
                      f = this.parseBackslash(r);
                      break;
                    case IH:
                      f = this.parseBackticks(r);
                      break;
                    case eo:
                    case za:
                    case _a:
                    case En:
                      f = this.handleDelim(g, r);
                      break;
                    case An:
                    case xn:
                      f = !!(!((s = this.options) === null || s === void 0) && s.smart) && this.handleDelim(g, r);
                      break;
                    case ts:
                      f = this.parseOpenBracket(r);
                      break;
                    case FH:
                      f = this.parseBang(r);
                      break;
                    case PH:
                      f = this.parseCloseBracket(r);
                      break;
                    case rs:
                      f = this.parseAutolink(r) || this.parseHtmlTag(r);
                      break;
                    case BH:
                      r.disabledEntityParse || (f = this.parseEntity(r));
                      break;
                    default:
                      f = this.parseString(r);
                      break;
                  }
                  return f || (this.pos += 1, r.appendChild(qt(Qi(g), this.sourcepos(this.pos, this.pos + 1)))), !0;
                }, n.prototype.parse = function(r) {
                  for (this.subject = r.stringContent.trim(), this.pos = 0, this.delimiters = null, this.brackets = null, this.lineOffsets = r.lineOffsets || [0], this.lineIdx = 0, this.linePosOffset = 0, this.lineStartNum = r.sourcepos[0][0], iH(r) && (this.lineOffsets[0] += r.level + 1); this.parseInline(r); )
                    ;
                  r.stringContent = null, this.processEmphasis(null), this.mergeTextNodes(r.walker());
                  var s = this.options, f = s.extendedAutolinks, g = s.customParser;
                  if (f && MH(r.walker(), f), g && r.firstChild)
                    for (var A, D = r.firstChild.walker(); A = D.next(); ) {
                      var L = A.node, Y = A.entering;
                      g[L.type] && g[L.type](L, { entering: Y, options: this.options });
                    }
                }, n;
              }()
            ), eU = /^\[([ \txX])\][ \t]+/;
            function tU(n, r) {
              if (r.firstChild && r.firstChild.type === "paragraph") {
                var s = r.firstChild, f = s.stringContent.match(eU);
                if (f) {
                  var g = f[0].length;
                  s.stringContent = s.stringContent.substring(g - 1), s.sourcepos[0][1] += g, s.lineOffsets[0] += g, r.listData.task = !0, r.listData.checked = /[xX]/.test(f[1]);
                }
              }
            }
            var rU = {
              continue: function() {
                return 0;
              },
              finalize: function() {
              },
              canContain: function(n) {
                return n === "tableHead" || n === "tableBody";
              },
              acceptsLines: !1
            }, nU = {
              continue: function() {
                return 0;
              },
              finalize: function() {
              },
              canContain: function(n) {
                return n === "tableRow";
              },
              acceptsLines: !1
            }, aU = {
              continue: function() {
                return 1;
              },
              finalize: function() {
              },
              canContain: function(n) {
                return n === "tableRow" || n === "tableDelimRow";
              },
              acceptsLines: !1
            }, iU = {
              continue: function() {
                return 1;
              },
              finalize: function() {
              },
              canContain: function(n) {
                return n === "tableDelimCell";
              },
              acceptsLines: !1
            }, oU = {
              continue: function() {
                return 1;
              },
              finalize: function() {
              },
              canContain: function() {
                return !1;
              },
              acceptsLines: !1
            }, sU = {
              continue: function() {
                return 1;
              },
              finalize: function() {
              },
              canContain: function(n) {
                return n === "tableCell";
              },
              acceptsLines: !1
            }, lU = {
              continue: function() {
                return 1;
              },
              finalize: function() {
              },
              canContain: function() {
                return !1;
              },
              acceptsLines: !1
            }, Va = 4, us = 9, cs = 62, uU = 60, fs = 32, hs = 91, vs = /[^ \t\f\v\r\n]/, cU = /^(?:`{3,}|~{3,})(?= *$)/;
            function ds(n) {
              for (var r = n; r; ) {
                if (r.lastLineBlank)
                  return !0;
                var s = r.type;
                if (!r.lastLineChecked && (s === "list" || s === "item"))
                  r.lastLineChecked = !0, r = r.lastChild;
                else {
                  r.lastLineChecked = !0;
                  break;
                }
              }
              return !1;
            }
            function mr(n, r) {
              return r < n.length ? n.charCodeAt(r) : -1;
            }
            function ps(n) {
              return !vs.test(n);
            }
            function $n(n) {
              return n === fs || n === us;
            }
            var fU = /^\$\$$/, hU = {
              continue: function(n, r) {
                var s = n.currentLine, f = s.match(fU);
                if (f)
                  return n.lastLineLength = f[0].length, n.finalize(r, n.lineNumber), 2;
                for (var g = r.offset; g > 0 && $n(mr(s, n.offset)); )
                  n.advanceOffset(1, !0), g--;
                return 0;
              },
              finalize: function(n, r) {
                if (r.stringContent !== null) {
                  var s = r.stringContent, f = s.indexOf(`
`), g = s.slice(0, f), A = s.slice(f + 1), D = g.match(/^(\s*)(.*)/);
                  r.info = na(D[2].trim()), r.literal = A, r.stringContent = null;
                }
              },
              canContain: function() {
                return !1;
              },
              acceptsLines: !0
            }, ms = {
              continue: function() {
                return 1;
              },
              finalize: function() {
              },
              canContain: function() {
                return !1;
              },
              acceptsLines: !0
            }, vU = {
              continue: function() {
                return 0;
              },
              finalize: function() {
              },
              canContain: function(n) {
                return n !== "item";
              },
              acceptsLines: !1
            }, dU = {
              continue: function() {
                return 0;
              },
              finalize: function(n, r) {
                for (var s = r.firstChild; s; ) {
                  if (ds(s) && s.next) {
                    r.listData.tight = !1;
                    break;
                  }
                  for (var f = s.firstChild; f; ) {
                    if (ds(f) && (s.next || f.next)) {
                      r.listData.tight = !1;
                      break;
                    }
                    f = f.next;
                  }
                  s = s.next;
                }
              },
              canContain: function(n) {
                return n === "item";
              },
              acceptsLines: !1
            }, pU = {
              continue: function(n) {
                var r = n.currentLine;
                if (!n.indented && mr(r, n.nextNonspace) === cs)
                  n.advanceNextNonspace(), n.advanceOffset(1, !1), $n(mr(r, n.offset)) && n.advanceOffset(1, !0);
                else
                  return 1;
                return 0;
              },
              finalize: function() {
              },
              canContain: function(n) {
                return n !== "item";
              },
              acceptsLines: !1
            }, mU = {
              continue: function(n, r) {
                if (n.blank) {
                  if (r.firstChild === null)
                    return 1;
                  n.advanceNextNonspace();
                } else if (n.indent >= r.listData.markerOffset + r.listData.padding)
                  n.advanceOffset(r.listData.markerOffset + r.listData.padding, !0);
                else
                  return 1;
                return 0;
              },
              finalize: tU,
              canContain: function(n) {
                return n !== "item";
              },
              acceptsLines: !1
            }, gU = {
              continue: function() {
                return 1;
              },
              finalize: function() {
              },
              canContain: function() {
                return !1;
              },
              acceptsLines: !1
            }, yU = {
              continue: function() {
                return 1;
              },
              finalize: function() {
              },
              canContain: function() {
                return !1;
              },
              acceptsLines: !1
            }, kU = {
              continue: function(n, r) {
                var s = n.currentLine, f = n.indent;
                if (r.isFenced) {
                  var g = f <= 3 && s.charAt(n.nextNonspace) === r.fenceChar && s.slice(n.nextNonspace).match(cU);
                  if (g && g[0].length >= r.fenceLength)
                    return n.lastLineLength = n.offset + f + g[0].length, n.finalize(r, n.lineNumber), 2;
                  for (var A = r.fenceOffset; A > 0 && $n(mr(s, n.offset)); )
                    n.advanceOffset(1, !0), A--;
                } else if (f >= Va)
                  n.advanceOffset(Va, !0);
                else if (n.blank)
                  n.advanceNextNonspace();
                else
                  return 1;
                return 0;
              },
              finalize: function(n, r) {
                var s;
                if (r.stringContent !== null) {
                  if (r.isFenced) {
                    var f = r.stringContent, g = f.indexOf(`
`), A = f.slice(0, g), D = f.slice(g + 1), L = A.match(/^(\s*)(.*)/);
                    r.infoPadding = L[1].length, r.info = na(L[2].trim()), r.literal = D;
                  } else
                    r.literal = (s = r.stringContent) === null || s === void 0 ? void 0 : s.replace(/(\n *)+$/, `
`);
                  r.stringContent = null;
                }
              },
              canContain: function() {
                return !1;
              },
              acceptsLines: !0
            }, bU = {
              continue: function(n, r) {
                return n.blank && (r.htmlBlockType === 6 || r.htmlBlockType === 7) ? 1 : 0;
              },
              finalize: function(n, r) {
                var s;
                r.literal = ((s = r.stringContent) === null || s === void 0 ? void 0 : s.replace(/(\n *)+$/, "")) || null, r.stringContent = null;
              },
              canContain: function() {
                return !1;
              },
              acceptsLines: !0
            }, SU = {
              continue: function(n) {
                return n.blank ? 1 : 0;
              },
              finalize: function(n, r) {
                if (r.stringContent !== null) {
                  for (var s, f = !1; mr(r.stringContent, 0) === hs && (s = n.inlineParser.parseReference(r, n.refMap)); )
                    r.stringContent = r.stringContent.slice(s), f = !0;
                  f && ps(r.stringContent) && r.unlink();
                }
              },
              canContain: function() {
                return !1;
              },
              acceptsLines: !0
            }, wU = ms, CU = ms, Gn = {
              document: vU,
              list: dU,
              blockQuote: pU,
              item: mU,
              heading: gU,
              thematicBreak: yU,
              codeBlock: kU,
              htmlBlock: bU,
              paragraph: SU,
              table: rU,
              tableBody: nU,
              tableHead: aU,
              tableRow: sU,
              tableCell: lU,
              tableDelimRow: iU,
              tableDelimCell: oU,
              refDef: wU,
              customBlock: hU,
              frontMatter: CU
            };
            function ao(n) {
              for (var r = 0, s = 0, f = [], g = 0; g < n.length; g += 1)
                if (n[g] === "|" && n[g - 1] !== "\\") {
                  var A = n.substring(r, g);
                  r === 0 && jo(A) ? s = g + 1 : f.push(A), r = g + 1;
                }
              if (r < n.length) {
                var A = n.substring(r, n.length);
                jo(A) || f.push(A);
              }
              return [s, f];
            }
            function io(n, r, s, f) {
              for (var g = [], A = 0, D = r; A < D.length; A++) {
                var L = D[A], Y = L.match(/^[ \t]+/), ie = Y ? Y[0].length : 0, Ee = void 0, Re = void 0;
                if (ie === L.length)
                  ie = 0, Ee = 0, Re = "";
                else {
                  var we = L.match(/[ \t]+$/);
                  Ee = we ? we[0].length : 0, Re = L.slice(ie, L.length - Ee);
                }
                var He = f + ie, Ve = Rt(n, [
                  [s, f],
                  [s, f + L.length - 1]
                ]);
                Ve.stringContent = Re.replace(/\\\|/g, "|"), Ve.startIdx = g.length, Ve.endIdx = g.length, Ve.lineOffsets = [He - 1], Ve.paddingLeft = ie, Ve.paddingRight = Ee, g.push(Ve), f += L.length + 1;
              }
              return g;
            }
            function TU(n) {
              var r = null, s = n.stringContent, f = s[0], g = s[s.length - 1];
              return g === ":" ? r = f === ":" ? "center" : "right" : f === ":" && (r = "left"), { align: r };
            }
            var AU = function(n, r) {
              var s = r.stringContent;
              if (r.type === "paragraph" && !n.indented && !n.blank) {
                var f = s.length - 1, g = s.lastIndexOf(`
`, f - 1) + 1, A = s.slice(g, f), D = n.currentLine.slice(n.nextNonspace), L = ao(A), Y = L[0], ie = L[1], Ee = ao(D), Re = Ee[0], we = Ee[1], He = /^[ \t]*:?-+:?[ \t]*$/;
                if (
                  // not checking if the number of header cells and delimiter cells are the same
                  // to consider the case of merged-column (via plugin)
                  !ie.length || !we.length || we.some(function(tn) {
                    return !He.test(tn);
                  }) || // to prevent to regard setTextHeading as tabel delim cell with 'disallowDeepHeading' option
                  we.length === 1 && D.indexOf("|") !== 0
                )
                  return 0;
                var Ve = r.lineOffsets, pt = n.lineNumber - 1, Lt = Ba(Ve) + 1, Ut = Rt("table", [
                  [pt, Lt],
                  [n.lineNumber, n.offset]
                ]);
                if (Ut.columns = we.map(function() {
                  return { align: null };
                }), r.insertAfter(Ut), Ve.length === 1)
                  r.unlink();
                else {
                  r.stringContent = s.slice(0, g);
                  var Qr = s.lastIndexOf(`
`, g - 2) + 1, xr = g - Qr - 1;
                  n.lastLineLength = Ve[Ve.length - 2] + xr, n.finalize(r, pt - 1);
                }
                n.advanceOffset(n.currentLine.length - n.offset, !1);
                var gr = Rt("tableHead", [
                  [pt, Lt],
                  [n.lineNumber, n.offset]
                ]);
                Ut.appendChild(gr);
                var Lr = Rt("tableRow", [
                  [pt, Lt],
                  [pt, Lt + A.length - 1]
                ]), Xr = Rt("tableDelimRow", [
                  [n.lineNumber, n.nextNonspace + 1],
                  [n.lineNumber, n.offset]
                ]);
                gr.appendChild(Lr), gr.appendChild(Xr), io("tableCell", ie, pt, Lt + Y).forEach(function(tn) {
                  Lr.appendChild(tn);
                });
                var en = io("tableDelimCell", we, n.lineNumber, n.nextNonspace + 1 + Re);
                return en.forEach(function(tn) {
                  Xr.appendChild(tn);
                }), Ut.columns = en.map(TU), n.tip = Ut, 2;
              }
              return 0;
            }, xU = function(n, r) {
              if (r.type !== "table" && r.type !== "tableBody" || !n.blank && n.currentLine.indexOf("|") === -1)
                return 0;
              if (n.advanceOffset(n.currentLine.length - n.offset, !1), n.blank) {
                var s = r;
                return r.type === "tableBody" && (s = r.parent, n.finalize(r, n.lineNumber - 1)), n.finalize(s, n.lineNumber - 1), 0;
              }
              var f = r;
              r.type === "table" && (f = n.addChild("tableBody", n.nextNonspace), f.stringContent = null);
              var g = Rt("tableRow", [
                [n.lineNumber, n.nextNonspace + 1],
                [n.lineNumber, n.currentLine.length]
              ]);
              f.appendChild(g);
              var A = f.parent, D = n.currentLine.slice(n.nextNonspace), L = ao(D), Y = L[0], ie = L[1];
              return io("tableCell", ie, n.lineNumber, n.nextNonspace + 1 + Y).forEach(function(Ee, Re) {
                Re >= A.columns.length && (Ee.ignored = !0), g.appendChild(Ee);
              }), 2;
            }, EU = /^(\$\$)(\s*[a-zA-Z])+/, NU = /^(\$\$)(\s*[a-zA-Z])+.*(\$\$)/, DU = function(n) {
              var r;
              if (!n.indented && !NU.test(n.currentLine) && (r = n.currentLine.match(EU))) {
                var s = r[1].length;
                n.closeUnmatchedBlocks();
                var f = n.addChild("customBlock", n.nextNonspace);
                return f.syntaxLength = s, f.offset = n.indent, n.advanceNextNonspace(), n.advanceOffset(s, !1), 2;
              }
              return 0;
            }, OU = /^`{3,}(?!.*`)|^~{3,}/, MU = [
              /./,
              /^<(?:script|pre|style)(?:\s|>|$)/i,
              /^<!--/,
              /^<[?]/,
              /^<![A-Z]/,
              /^<!\[CDATA\[/,
              /^<[/]?(?:address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[123456]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul)(?:\s|[/]?[>]|$)/i,
              new RegExp("^(?:" + Qo + "|" + Xo + ")\\s*$", "i")
            ], RU = /^(?:=+|-+)[ \t]*$/, LU = /^#{1,6}(?:[ \t]+|$)/, IU = /^(?:(?:\*[ \t]*){3,}|(?:_[ \t]*){3,}|(?:-[ \t]*){3,})[ \t]*$/, gs = /^[*+-]/, ys = /^(\d{1,9})([.)])/;
            function PU(n, r) {
              var s = n.currentLine.slice(n.nextNonspace), f, g, A = {
                type: "bullet",
                tight: !0,
                bulletChar: "",
                start: 0,
                delimiter: "",
                padding: 0,
                markerOffset: n.indent,
                // GFM: Task List Item
                task: !1,
                checked: !1
              };
              if (n.indent >= 4)
                return null;
              if (f = s.match(gs))
                A.type = "bullet", A.bulletChar = f[0][0];
              else if ((f = s.match(ys)) && (r.type !== "paragraph" || f[1] === "1"))
                A.type = "ordered", A.start = parseInt(f[1], 10), A.delimiter = f[2];
              else
                return null;
              if (g = mr(n.currentLine, n.nextNonspace + f[0].length), !(g === -1 || g === us || g === fs) || r.type === "paragraph" && !n.currentLine.slice(n.nextNonspace + f[0].length).match(vs))
                return null;
              n.advanceNextNonspace(), n.advanceOffset(f[0].length, !0);
              var D = n.column, L = n.offset;
              do
                n.advanceOffset(1, !0), g = mr(n.currentLine, n.offset);
              while (n.column - D < 5 && $n(g));
              var Y = mr(n.currentLine, n.offset) === -1, ie = n.column - D;
              return ie >= 5 || ie < 1 || Y ? (A.padding = f[0].length + 1, n.column = D, n.offset = L, $n(mr(n.currentLine, n.offset)) && n.advanceOffset(1, !0)) : A.padding = f[0].length + ie, A;
            }
            function FU(n, r) {
              return n.type === r.type && n.delimiter === r.delimiter && n.bulletChar === r.bulletChar;
            }
            function ks(n, r) {
              return n.options.disallowDeepHeading && (r.type === "blockQuote" || r.type === "item");
            }
            var BU = function(n) {
              return !n.indented && mr(n.currentLine, n.nextNonspace) === cs ? (n.advanceNextNonspace(), n.advanceOffset(1, !1), $n(mr(n.currentLine, n.offset)) && n.advanceOffset(1, !0), n.closeUnmatchedBlocks(), n.addChild("blockQuote", n.nextNonspace), 1) : 0;
            }, qU = function(n, r) {
              var s;
              if (!n.indented && // The nested Heading is disallowed in list and blockquote with 'disallowDeepHeading' option
              !ks(n, r) && (s = n.currentLine.slice(n.nextNonspace).match(LU))) {
                n.advanceNextNonspace(), n.advanceOffset(s[0].length, !1), n.closeUnmatchedBlocks();
                var f = n.addChild("heading", n.nextNonspace);
                return f.level = s[0].trim().length, f.headingType = "atx", f.stringContent = n.currentLine.slice(n.offset).replace(/^[ \t]*#+[ \t]*$/, "").replace(/[ \t]+#+[ \t]*$/, ""), n.advanceOffset(n.currentLine.length - n.offset), 2;
              }
              return 0;
            }, zU = function(n) {
              var r;
              if (!n.indented && (r = n.currentLine.slice(n.nextNonspace).match(OU))) {
                var s = r[0].length;
                n.closeUnmatchedBlocks();
                var f = n.addChild("codeBlock", n.nextNonspace);
                return f.isFenced = !0, f.fenceLength = s, f.fenceChar = r[0][0], f.fenceOffset = n.indent, n.advanceNextNonspace(), n.advanceOffset(s, !1), 2;
              }
              return 0;
            }, _U = function(n, r) {
              if (!n.indented && mr(n.currentLine, n.nextNonspace) === uU) {
                var s = n.currentLine.slice(n.nextNonspace), f = n.options.disallowedHtmlBlockTags, g = void 0;
                for (g = 1; g <= 7; g++) {
                  var A = s.match(MU[g]);
                  if (A) {
                    if (g === 7) {
                      if (r.type === "paragraph")
                        return 0;
                      if (f.length > 0) {
                        var D = new RegExp("</?(?:" + f.join("|") + ")", "i");
                        if (D.test(A[0]))
                          return 0;
                      }
                    }
                    n.closeUnmatchedBlocks();
                    var L = n.addChild("htmlBlock", n.offset);
                    return L.htmlBlockType = g, 2;
                  }
                }
              }
              return 0;
            }, VU = function(n, r) {
              var s;
              if (r.stringContent !== null && !n.indented && r.type === "paragraph" && // The nested Heading is disallowed in list and blockquote with 'disallowDeepHeading' option
              !ks(n, r.parent) && (s = n.currentLine.slice(n.nextNonspace).match(RU))) {
                n.closeUnmatchedBlocks();
                for (var f = void 0; mr(r.stringContent, 0) === hs && (f = n.inlineParser.parseReference(r, n.refMap)); )
                  r.stringContent = r.stringContent.slice(f);
                if (r.stringContent.length > 0) {
                  var g = Rt("heading", r.sourcepos);
                  return g.level = s[0][0] === "=" ? 1 : 2, g.headingType = "setext", g.stringContent = r.stringContent, r.insertAfter(g), r.unlink(), n.tip = g, n.advanceOffset(n.currentLine.length - n.offset, !1), 2;
                }
                return 0;
              }
              return 0;
            }, HU = function(n) {
              return !n.indented && IU.test(n.currentLine.slice(n.nextNonspace)) ? (n.closeUnmatchedBlocks(), n.addChild("thematicBreak", n.nextNonspace), n.advanceOffset(n.currentLine.length - n.offset, !1), 2) : 0;
            }, UU = function(n, r) {
              var s, f = r;
              return (!n.indented || r.type === "list") && (s = PU(n, f)) ? (n.closeUnmatchedBlocks(), (n.tip.type !== "list" || !FU(f.listData, s)) && (f = n.addChild("list", n.nextNonspace), f.listData = s), f = n.addChild("item", n.nextNonspace), f.listData = s, 1) : 0;
            }, WU = function(n) {
              return n.indented && n.tip.type !== "paragraph" && !n.blank ? (n.advanceOffset(Va, !0), n.closeUnmatchedBlocks(), n.addChild("codeBlock", n.offset), 2) : 0;
            }, oo = [
              BU,
              qU,
              zU,
              _U,
              VU,
              HU,
              UU,
              WU,
              AU,
              xU,
              DU
            ], bs = /^(-{3}|\+{3}|;{3})$/, $U = function(n, r) {
              var s = n.currentLine, f = n.lineNumber, g = n.indented;
              if (f === 1 && !g && r.type === "document" && bs.test(s)) {
                n.closeUnmatchedBlocks();
                var A = n.addChild("frontMatter", n.nextNonspace);
                return A.stringContent = s, n.advanceNextNonspace(), n.advanceOffset(s.length, !1), 2;
              }
              return 0;
            }, GU = {
              continue: function(n, r) {
                var s = n.currentLine, f = s.match(bs);
                return r.type === "frontMatter" && f ? (r.stringContent += s, n.lastLineLength = f[0].length, n.finalize(r, n.lineNumber), 2) : 0;
              },
              finalize: function(n, r) {
                r.stringContent !== null && (r.literal = r.stringContent, r.stringContent = null);
              },
              canContain: function() {
                return !1;
              },
              acceptsLines: !0
            }, jU = [
              /./,
              /<\/(?:script|pre|style)>/i,
              /-->/,
              /\?>/,
              />/,
              /\]\]>/
            ], KU = /^[#`~*+_=<>0-9-;$]/, JU = /\r\n|\n|\r/;
            function so() {
              return Rt("document", [
                [1, 1],
                [0, 0]
              ]);
            }
            var YU = {
              smart: !1,
              tagFilter: !1,
              extendedAutolinks: !1,
              disallowedHtmlBlockTags: [],
              referenceDefinition: !1,
              disallowDeepHeading: !1,
              customParser: null,
              frontMatter: !1
            }, ZU = (
              /** @class */
              function() {
                function n(r) {
                  this.options = ne(ne({}, YU), r), this.doc = so(), this.tip = this.doc, this.oldtip = this.doc, this.lineNumber = 0, this.offset = 0, this.column = 0, this.nextNonspace = 0, this.nextNonspaceColumn = 0, this.indent = 0, this.currentLine = "", this.indented = !1, this.blank = !1, this.partiallyConsumedTab = !1, this.allClosed = !0, this.lastMatchedContainer = this.doc, this.refMap = {}, this.refLinkCandidateMap = {}, this.refDefCandidateMap = {}, this.lastLineLength = 0, this.lines = [], this.options.frontMatter && (Gn.frontMatter = GU, oo.unshift($U)), this.inlineParser = new XH(this.options);
                }
                return n.prototype.advanceOffset = function(r, s) {
                  s === void 0 && (s = !1);
                  for (var f = this.currentLine, g, A, D; r > 0 && (D = f[this.offset]); )
                    D === "	" ? (g = 4 - this.column % 4, s ? (this.partiallyConsumedTab = g > r, A = g > r ? r : g, this.column += A, this.offset += this.partiallyConsumedTab ? 0 : 1, r -= A) : (this.partiallyConsumedTab = !1, this.column += g, this.offset += 1, r -= 1)) : (this.partiallyConsumedTab = !1, this.offset += 1, this.column += 1, r -= 1);
                }, n.prototype.advanceNextNonspace = function() {
                  this.offset = this.nextNonspace, this.column = this.nextNonspaceColumn, this.partiallyConsumedTab = !1;
                }, n.prototype.findNextNonspace = function() {
                  for (var r = this.currentLine, s = this.offset, f = this.column, g; (g = r.charAt(s)) !== ""; )
                    if (g === " ")
                      s++, f++;
                    else if (g === "	")
                      s++, f += 4 - f % 4;
                    else
                      break;
                  this.blank = g === `
` || g === "\r" || g === "", this.nextNonspace = s, this.nextNonspaceColumn = f, this.indent = this.nextNonspaceColumn - this.column, this.indented = this.indent >= Va;
                }, n.prototype.addLine = function() {
                  if (this.partiallyConsumedTab) {
                    this.offset += 1;
                    var r = 4 - this.column % 4;
                    this.tip.stringContent += Ki(" ", r);
                  }
                  this.tip.lineOffsets ? this.tip.lineOffsets.push(this.offset) : this.tip.lineOffsets = [this.offset], this.tip.stringContent += this.currentLine.slice(this.offset) + `
`;
                }, n.prototype.addChild = function(r, s) {
                  for (; !Gn[this.tip.type].canContain(r); )
                    this.finalize(this.tip, this.lineNumber - 1);
                  var f = s + 1, g = Rt(r, [
                    [this.lineNumber, f],
                    [0, 0]
                  ]);
                  return g.stringContent = "", this.tip.appendChild(g), this.tip = g, g;
                }, n.prototype.closeUnmatchedBlocks = function() {
                  if (!this.allClosed) {
                    for (; this.oldtip !== this.lastMatchedContainer; ) {
                      var r = this.oldtip.parent;
                      this.finalize(this.oldtip, this.lineNumber - 1), this.oldtip = r;
                    }
                    this.allClosed = !0;
                  }
                }, n.prototype.finalize = function(r, s) {
                  var f = r.parent;
                  r.open = !1, r.sourcepos[1] = [s, this.lastLineLength], Gn[r.type].finalize(this, r), this.tip = f;
                }, n.prototype.processInlines = function(r) {
                  var s, f = this.options.customParser, g = r.walker();
                  for (this.inlineParser.refMap = this.refMap, this.inlineParser.refLinkCandidateMap = this.refLinkCandidateMap, this.inlineParser.refDefCandidateMap = this.refDefCandidateMap, this.inlineParser.options = this.options; s = g.next(); ) {
                    var A = s.node, D = s.entering, L = A.type;
                    f && f[L] && f[L](A, { entering: D, options: this.options }), !D && (L === "paragraph" || L === "heading" || L === "tableCell" && !A.ignored) && this.inlineParser.parse(A);
                  }
                }, n.prototype.incorporateLine = function(r) {
                  var s = this.doc;
                  this.oldtip = this.tip, this.offset = 0, this.column = 0, this.blank = !1, this.partiallyConsumedTab = !1, this.lineNumber += 1, r.indexOf("\0") !== -1 && (r = r.replace(/\0/g, "�")), this.currentLine = r;
                  for (var f = !0, g; (g = s.lastChild) && g.open; ) {
                    switch (s = g, this.findNextNonspace(), Gn[s.type].continue(this, s)) {
                      case 0:
                        break;
                      case 1:
                        f = !1;
                        break;
                      case 2:
                        this.lastLineLength = r.length;
                        return;
                      default:
                        throw new Error("continue returned illegal value, must be 0, 1, or 2");
                    }
                    if (!f) {
                      s = s.parent;
                      break;
                    }
                  }
                  this.allClosed = s === this.oldtip, this.lastMatchedContainer = s;
                  for (var A = s.type !== "paragraph" && Gn[s.type].acceptsLines, D = oo.length; !A; ) {
                    if (this.findNextNonspace(), s.type !== "table" && s.type !== "tableBody" && s.type !== "paragraph" && !this.indented && !KU.test(r.slice(this.nextNonspace))) {
                      this.advanceNextNonspace();
                      break;
                    }
                    for (var L = 0; L < D; ) {
                      var Y = oo[L](this, s);
                      if (Y === 1) {
                        s = this.tip;
                        break;
                      } else if (Y === 2) {
                        s = this.tip, A = !0;
                        break;
                      } else
                        L++;
                    }
                    if (L === D) {
                      this.advanceNextNonspace();
                      break;
                    }
                  }
                  if (!this.allClosed && !this.blank && this.tip.type === "paragraph")
                    this.addLine();
                  else {
                    this.closeUnmatchedBlocks(), this.blank && s.lastChild && (s.lastChild.lastLineBlank = !0);
                    for (var ie = s.type, Ee = this.blank && !(ie === "blockQuote" || Ko(s) && s.isFenced || ie === "item" && !s.firstChild && s.sourcepos[0][0] === this.lineNumber), Re = s; Re; )
                      Re.lastLineBlank = Ee, Re = Re.parent;
                    Gn[ie].acceptsLines ? (this.addLine(), aH(s) && s.htmlBlockType >= 1 && s.htmlBlockType <= 5 && jU[s.htmlBlockType].test(this.currentLine.slice(this.offset)) && (this.lastLineLength = r.length, this.finalize(s, this.lineNumber))) : this.offset < r.length && !this.blank && (s = this.addChild("paragraph", this.offset), this.advanceNextNonspace(), this.addLine());
                  }
                  this.lastLineLength = r.length;
                }, n.prototype.parse = function(r, s) {
                  this.doc = so(), this.tip = this.doc, this.lineNumber = 0, this.lastLineLength = 0, this.offset = 0, this.column = 0, this.lastMatchedContainer = this.doc, this.currentLine = "";
                  var f = r.split(JU), g = f.length;
                  this.lines = s || f, this.options.referenceDefinition && this.clearRefMaps(), r.charCodeAt(r.length - 1) === Xi && (g -= 1);
                  for (var A = 0; A < g; A++)
                    this.incorporateLine(f[A]);
                  for (; this.tip; )
                    this.finalize(this.tip, g);
                  return this.processInlines(this.doc), this.doc;
                }, n.prototype.partialParseStart = function(r, s) {
                  this.doc = so(), this.tip = this.doc, this.lineNumber = r - 1, this.lastLineLength = 0, this.offset = 0, this.column = 0, this.lastMatchedContainer = this.doc, this.currentLine = "";
                  for (var f = s.length, g = 0; g < f; g++)
                    this.incorporateLine(s[g]);
                  return this.doc;
                }, n.prototype.partialParseExtends = function(r) {
                  for (var s = 0; s < r.length; s++)
                    this.incorporateLine(r[s]);
                }, n.prototype.partialParseFinish = function() {
                  for (; this.tip; )
                    this.finalize(this.tip, this.lineNumber);
                  this.processInlines(this.doc);
                }, n.prototype.setRefMaps = function(r, s, f) {
                  this.refMap = r, this.refLinkCandidateMap = s, this.refDefCandidateMap = f;
                }, n.prototype.clearRefMaps = function() {
                  [this.refMap, this.refLinkCandidateMap, this.refDefCandidateMap].forEach(function(r) {
                    LH(r);
                  });
                }, n;
              }()
            );
            function Ss(n, r) {
              return n[0] < r[0] ? 1 : n[0] > r[0] ? -1 : n[1] < r[1] ? 1 : n[1] > r[1] ? -1 : 0;
            }
            function QU(n, r) {
              var s = n[0], f = n[1];
              return Ss(f, r) === 1 ? 1 : Ss(s, r) === -1 ? -1 : 0;
            }
            function XU(n, r) {
              if (!(n.parent !== r.parent || n === r)) {
                for (var s = n.next; s && s !== r; ) {
                  for (var f = s.next, g = 0, A = ["parent", "prev", "next"]; g < A.length; g++) {
                    var D = A[g];
                    s[D] && (Yi(s[D].id), s[D] = null);
                  }
                  s = f;
                }
                n.next = r.next, r.next ? r.next.prev = n : n.parent.lastChild = n;
              }
            }
            function e3(n) {
              for (var r = [], s = n.firstChild; s; )
                r.push(s), s = s.next;
              return r;
            }
            function ws(n, r) {
              for (var s = 0, f = r; s < f.length; s++) {
                var g = f[s];
                n.insertBefore(g);
              }
            }
            function t3(n, r) {
              for (var s = r.length - 1; s >= 0; s -= 1)
                n.prependChild(r[s]);
            }
            function r3(n, r) {
              if (!(!n || !n.parent || r === 0)) {
                var s = n.parent.walker();
                s.resumeAt(n, !0);
                for (var f; f = s.next(); ) {
                  var g = f.node, A = f.entering;
                  A && (g.sourcepos[0][0] += r, g.sourcepos[1][0] += r);
                }
              }
            }
            function Cs(n, r) {
              var s = n[0], f = n[1];
              return f[0] < r ? 1 : s[0] > r ? -1 : 0;
            }
            function Ha(n, r) {
              for (var s = n.firstChild; s; ) {
                var f = Cs(s.sourcepos, r);
                if (f === 0)
                  return s;
                if (f === -1)
                  return s.prev || s;
                s = s.next;
              }
              return n.lastChild;
            }
            function n3(n) {
              for (; n.lastChild; )
                n = n.lastChild;
              return n;
            }
            function a3(n) {
              for (; n.parent && n.parent.type !== "document" && n.parent.sourcepos[0][0] === n.sourcepos[0][0]; )
                n = n.parent;
              return n;
            }
            function i3(n, r) {
              for (var s = n.firstChild, f = null; s; ) {
                var g = Cs(s.sourcepos, r);
                if (g === 0) {
                  if (s.sourcepos[0][0] === r || !s.firstChild)
                    return s;
                  f = s, s = s.firstChild;
                } else {
                  if (g === -1)
                    break;
                  f = s, s = s.next;
                }
              }
              return f ? a3(n3(f)) : null;
            }
            function o3(n, r) {
              for (var s = n, f = null; s; ) {
                var g = QU(s.sourcepos, r);
                if (g === 0)
                  if (s.firstChild)
                    f = s, s = s.firstChild;
                  else
                    return s;
                else {
                  if (g === -1)
                    return f;
                  if (s.next)
                    s = s.next;
                  else
                    return f;
                }
              }
              return s;
            }
            function Ts(n) {
              return $V(n) || null;
            }
            function lo(n, r, s) {
              if (s === void 0 && (s = null), r)
                for (var f = r.walker(); r && r !== s; ) {
                  n(r);
                  var g = f.next();
                  if (g)
                    r = g.node;
                  else
                    break;
                }
            }
            function s3(n) {
              var r = Ts(n);
              if (!r)
                return !0;
              for (; r && r.type !== "document"; ) {
                if (!r.parent && !r.prev && !r.next)
                  return !0;
                r = r.parent;
              }
              return !1;
            }
            var As = /\r\n|\n|\r/;
            function l3(n) {
              var r = n.match(/^[ \t]+/);
              if (r && (r[0].length >= 2 || /\t/.test(r[0])))
                return !0;
              var s = r ? n.slice(r.length) : n;
              return gs.test(s) || ys.test(s);
            }
            function u3(n) {
              return !ps(n) && n.indexOf("|") !== -1;
            }
            function uo(n) {
              var r = n.id, s = n.title, f = n.sourcepos, g = n.dest;
              return {
                id: r,
                title: s,
                sourcepos: f,
                unlinked: !1,
                destination: g
              };
            }
            var c3 = (
              /** @class */
              function() {
                function n(r, s) {
                  this.refMap = {}, this.refLinkCandidateMap = {}, this.refDefCandidateMap = {}, this.referenceDefinition = !!(s != null && s.referenceDefinition), this.parser = new ZU(s), this.parser.setRefMaps(this.refMap, this.refLinkCandidateMap, this.refDefCandidateMap), this.eventHandlerMap = { change: [] }, r = r || "", this.lineTexts = r.split(As), this.root = this.parser.parse(r, this.lineTexts);
                }
                return n.prototype.updateLineTexts = function(r, s, f) {
                  var g, A = r[0], D = r[1], L = s[0], Y = s[1], ie = f.split(As), Ee = ie.length, Re = this.lineTexts[A - 1], we = this.lineTexts[L - 1];
                  ie[0] = Re.slice(0, D - 1) + ie[0], ie[Ee - 1] = ie[Ee - 1] + we.slice(Y - 1);
                  var He = L - A + 1;
                  return (g = this.lineTexts).splice.apply(g, J([A - 1, He], ie)), Ee - He;
                }, n.prototype.updateRootNodeState = function() {
                  if (this.lineTexts.length === 1 && this.lineTexts[0] === "") {
                    this.root.lastLineBlank = !0, this.root.sourcepos = [
                      [1, 1],
                      [1, 0]
                    ];
                    return;
                  }
                  this.root.lastChild && (this.root.lastLineBlank = this.root.lastChild.lastLineBlank);
                  for (var r = this.lineTexts, s = r.length - 1; r[s] === ""; )
                    s -= 1;
                  r.length - 2 > s && (s += 1), this.root.sourcepos[1] = [s + 1, r[s].length];
                }, n.prototype.replaceRangeNodes = function(r, s, f) {
                  r ? (ws(r, f), XU(r, s), [r.id, s.id].forEach(function(g) {
                    return Yi(g);
                  }), r.unlink()) : s ? (ws(s, f), Yi(s.id), s.unlink()) : t3(this.root, f);
                }, n.prototype.getNodeRange = function(r, s) {
                  var f = Ha(this.root, r[0]), g = Ha(this.root, s[0]);
                  return g && g.next && s[0] + 1 === g.next.sourcepos[0][0] && (g = g.next), [f, g];
                }, n.prototype.trigger = function(r, s) {
                  this.eventHandlerMap[r].forEach(function(f) {
                    f(s);
                  });
                }, n.prototype.extendEndLine = function(r) {
                  for (; this.lineTexts[r] === ""; )
                    r += 1;
                  return r;
                }, n.prototype.parseRange = function(r, s, f, g) {
                  r && r.prev && (Jo(r.prev) && l3(this.lineTexts[f - 1]) || oH(r.prev) && u3(this.lineTexts[f - 1])) && (r = r.prev, f = r.sourcepos[0][0]);
                  for (var A = this.lineTexts.slice(f - 1, g), D = this.parser.partialParseStart(f, A), L = s ? s.next : this.root.firstChild, Y = D.lastChild, ie = Y && Ko(Y) && Y.open, Ee = Y && Yo(Y) && Y.open, Re = Y && Jo(Y); (ie || Ee) && L || Re && L && (L.type === "list" || L.sourcepos[0][1] >= 2); ) {
                    var we = this.extendEndLine(L.sourcepos[1][0]);
                    this.parser.partialParseExtends(this.lineTexts.slice(g, we)), r || (r = s), s = L, g = we, L = L.next;
                  }
                  this.parser.partialParseFinish();
                  var He = e3(D);
                  return { newNodes: He, extStartNode: r, extEndNode: s };
                }, n.prototype.getRemovedNodeRange = function(r, s) {
                  return !r || r && Un(r) || s && Un(s) ? null : {
                    id: [r.id, s.id],
                    line: [r.sourcepos[0][0] - 1, s.sourcepos[1][0] - 1]
                  };
                }, n.prototype.markDeletedRefMap = function(r, s) {
                  var f = this;
                  if (!Wn(this.refMap)) {
                    var g = function(A) {
                      if (Un(A)) {
                        var D = f.refMap[A.label];
                        D && A.id === D.id && (D.unlinked = !0);
                      }
                    };
                    r && lo(g, r.parent, s), s && lo(g, s);
                  }
                }, n.prototype.replaceWithNewRefDefState = function(r) {
                  var s = this;
                  if (!Wn(this.refMap)) {
                    var f = function(g) {
                      if (Un(g)) {
                        var A = g.label, D = s.refMap[A];
                        (!D || D.unlinked) && (s.refMap[A] = uo(g));
                      }
                    };
                    r.forEach(function(g) {
                      lo(f, g);
                    });
                  }
                }, n.prototype.replaceWithRefDefCandidate = function() {
                  var r = this;
                  Wn(this.refDefCandidateMap) || qa(this.refDefCandidateMap, function(s, f) {
                    var g = f.label, A = f.sourcepos, D = r.refMap[g];
                    (!D || D.unlinked || D.sourcepos[0][0] > A[0][0]) && (r.refMap[g] = uo(f));
                  });
                }, n.prototype.getRangeWithRefDef = function(r, s, f, g, A) {
                  if (this.referenceDefinition && !Wn(this.refMap)) {
                    var D = Ha(this.root, r - 1), L = Ha(this.root, s + 1);
                    D && Un(D) && D !== f && D !== g && (f = D, r = f.sourcepos[0][0]), L && Un(L) && L !== f && L !== g && (g = L, s = this.extendEndLine(g.sourcepos[1][0] + A));
                  }
                  return [f, g, r, s];
                }, n.prototype.parse = function(r, s, f) {
                  f === void 0 && (f = 0);
                  var g = this.getNodeRange(r, s), A = g[0], D = g[1], L = A ? Math.min(A.sourcepos[0][0], r[0]) : r[0], Y = this.extendEndLine((D ? Math.max(D.sourcepos[1][0], s[0]) : s[0]) + f), ie = this.parseRange.apply(this, this.getRangeWithRefDef(L, Y, A, D, f)), Ee = ie.newNodes, Re = ie.extStartNode, we = ie.extEndNode, He = this.getRemovedNodeRange(Re, we), Ve = we ? we.next : this.root.firstChild;
                  return this.referenceDefinition ? (this.markDeletedRefMap(Re, we), this.replaceRangeNodes(Re, we, Ee), this.replaceWithNewRefDefState(Ee)) : this.replaceRangeNodes(Re, we, Ee), { nodes: Ee, removedNodeRange: He, nextNode: Ve };
                }, n.prototype.parseRefLink = function() {
                  var r = this, s = [];
                  return Wn(this.refMap) || qa(this.refMap, function(f, g) {
                    g.unlinked && delete r.refMap[f], qa(r.refLinkCandidateMap, function(A, D) {
                      var L = D.node, Y = D.refLabel;
                      Y === f && s.push(r.parse(L.sourcepos[0], L.sourcepos[1]));
                    });
                  }), s;
                }, n.prototype.removeUnlinkedCandidate = function() {
                  Wn(this.refDefCandidateMap) || [this.refLinkCandidateMap, this.refDefCandidateMap].forEach(function(r) {
                    qa(r, function(s) {
                      s3(s) && delete r[s];
                    });
                  });
                }, n.prototype.editMarkdown = function(r, s, f) {
                  var g = this.updateLineTexts(r, s, f), A = this.parse(r, s, g), D = RH(A, "nextNode");
                  r3(A.nextNode, g), this.updateRootNodeState();
                  var L = [D];
                  return this.referenceDefinition && (this.removeUnlinkedCandidate(), this.replaceWithRefDefCandidate(), L = L.concat(this.parseRefLink())), this.trigger("change", L), L;
                }, n.prototype.getLineTexts = function() {
                  return this.lineTexts;
                }, n.prototype.getRootNode = function() {
                  return this.root;
                }, n.prototype.findNodeAtPosition = function(r) {
                  var s = o3(this.root, r);
                  return !s || s === this.root ? null : s;
                }, n.prototype.findFirstNodeAtLine = function(r) {
                  return i3(this.root, r);
                }, n.prototype.on = function(r, s) {
                  this.eventHandlerMap[r].push(s);
                }, n.prototype.off = function(r, s) {
                  var f = this.eventHandlerMap[r], g = f.indexOf(s);
                  f.splice(g, 1);
                }, n.prototype.findNodeById = function(r) {
                  return Ts(r);
                }, n.prototype.removeAllNode = function() {
                  GV();
                }, n;
              }()
            ), f3 = [
              "title",
              "textarea",
              "style",
              "xmp",
              "iframe",
              "noembed",
              "noframes",
              "script",
              "plaintext"
            ], xs = new RegExp("<(/?(?:" + f3.join("|") + ")[^>]*>)", "ig");
            function Es(n) {
              return xs.test(n) ? n.replace(xs, function(r, s) {
                return "&lt;" + s;
              }) : n;
            }
            var Ns = {
              heading: function(n, r) {
                var s = r.entering;
                return {
                  type: s ? "openTag" : "closeTag",
                  tagName: "h" + n.level,
                  outerNewLine: !0
                };
              },
              text: function(n) {
                return {
                  type: "text",
                  content: n.literal
                };
              },
              softbreak: function(n, r) {
                var s = r.options;
                return {
                  type: "html",
                  content: s.softbreak
                };
              },
              linebreak: function() {
                return {
                  type: "html",
                  content: `<br />
`
                };
              },
              emph: function(n, r) {
                var s = r.entering;
                return {
                  type: s ? "openTag" : "closeTag",
                  tagName: "em"
                };
              },
              strong: function(n, r) {
                var s = r.entering;
                return {
                  type: s ? "openTag" : "closeTag",
                  tagName: "strong"
                };
              },
              paragraph: function(n, r) {
                var s, f = r.entering, g = (s = n.parent) === null || s === void 0 ? void 0 : s.parent;
                return g && g.type === "list" && g.listData.tight ? null : {
                  type: f ? "openTag" : "closeTag",
                  tagName: "p",
                  outerNewLine: !0
                };
              },
              thematicBreak: function() {
                return {
                  type: "openTag",
                  tagName: "hr",
                  outerNewLine: !0,
                  selfClose: !0
                };
              },
              blockQuote: function(n, r) {
                var s = r.entering;
                return {
                  type: s ? "openTag" : "closeTag",
                  tagName: "blockquote",
                  outerNewLine: !0,
                  innerNewLine: !0
                };
              },
              list: function(n, r) {
                var s = r.entering, f = n.listData, g = f.type, A = f.start, D = g === "bullet" ? "ul" : "ol", L = {};
                return D === "ol" && A !== null && A !== 1 && (L.start = A.toString()), {
                  type: s ? "openTag" : "closeTag",
                  tagName: D,
                  attributes: L,
                  outerNewLine: !0
                };
              },
              item: function(n, r) {
                var s = r.entering;
                return {
                  type: s ? "openTag" : "closeTag",
                  tagName: "li",
                  outerNewLine: !0
                };
              },
              htmlInline: function(n, r) {
                var s = r.options, f = s.tagFilter ? Es(n.literal) : n.literal;
                return { type: "html", content: f };
              },
              htmlBlock: function(n, r) {
                var s = r.options, f = s.tagFilter ? Es(n.literal) : n.literal;
                return s.nodeId ? [
                  { type: "openTag", tagName: "div", outerNewLine: !0 },
                  { type: "html", content: f },
                  { type: "closeTag", tagName: "div", outerNewLine: !0 }
                ] : { type: "html", content: f, outerNewLine: !0 };
              },
              code: function(n) {
                return [
                  { type: "openTag", tagName: "code" },
                  { type: "text", content: n.literal },
                  { type: "closeTag", tagName: "code" }
                ];
              },
              codeBlock: function(n) {
                var r = n.info, s = r ? r.split(/\s+/) : [], f = [];
                return s.length > 0 && s[0].length > 0 && f.push("language-" + Hn(s[0])), [
                  { type: "openTag", tagName: "pre", outerNewLine: !0 },
                  { type: "openTag", tagName: "code", classNames: f },
                  { type: "text", content: n.literal },
                  { type: "closeTag", tagName: "code" },
                  { type: "closeTag", tagName: "pre", outerNewLine: !0 }
                ];
              },
              link: function(n, r) {
                var s = r.entering;
                if (s) {
                  var f = n, g = f.title, A = f.destination;
                  return {
                    type: "openTag",
                    tagName: "a",
                    attributes: ne({ href: Hn(A) }, g && { title: Hn(g) })
                  };
                }
                return { type: "closeTag", tagName: "a" };
              },
              image: function(n, r) {
                var s = r.getChildrenText, f = r.skipChildren, g = n, A = g.title, D = g.destination;
                return f(), {
                  type: "openTag",
                  tagName: "img",
                  selfClose: !0,
                  attributes: ne({ src: Hn(D), alt: s(n) }, A && { title: Hn(A) })
                };
              },
              customBlock: function(n, r, s) {
                var f = n.info.trim().toLowerCase(), g = s[f];
                if (g)
                  try {
                    return g(n, r);
                  } catch (A) {
                    console.warn("[@toast-ui/editor] - The error occurred when " + f + " block node was parsed in markdown renderer: " + A);
                  }
                return [
                  { type: "openTag", tagName: "div", outerNewLine: !0 },
                  { type: "text", content: n.literal },
                  { type: "closeTag", tagName: "div", outerNewLine: !0 }
                ];
              },
              frontMatter: function(n) {
                return [
                  {
                    type: "openTag",
                    tagName: "div",
                    outerNewLine: !0,
                    // Because front matter is metadata, it should not be render.
                    attributes: { style: "white-space: pre; display: none;" }
                  },
                  { type: "text", content: n.literal },
                  { type: "closeTag", tagName: "div", outerNewLine: !0 }
                ];
              },
              customInline: function(n, r, s) {
                var f = n, g = f.info, A = f.firstChild, D = g.trim().toLowerCase(), L = s[D], Y = r.entering;
                if (L)
                  try {
                    return L(n, r);
                  } catch (ie) {
                    console.warn("[@toast-ui/editor] - The error occurred when " + D + " inline node was parsed in markdown renderer: " + ie);
                  }
                return Y ? [
                  { type: "openTag", tagName: "span" },
                  { type: "text", content: "$$" + g + (A ? " " : "") }
                ] : [
                  { type: "text", content: "$$" },
                  { type: "closeTag", tagName: "span" }
                ];
              }
            }, Ds = {
              strike: function(n, r) {
                var s = r.entering;
                return {
                  type: s ? "openTag" : "closeTag",
                  tagName: "del"
                };
              },
              item: function(n, r) {
                var s = r.entering, f = n.listData, g = f.checked, A = f.task;
                if (s) {
                  var D = {
                    type: "openTag",
                    tagName: "li",
                    outerNewLine: !0
                  };
                  return A ? [
                    D,
                    {
                      type: "openTag",
                      tagName: "input",
                      selfClose: !0,
                      attributes: ne(ne({}, g && { checked: "" }), { disabled: "", type: "checkbox" })
                    },
                    {
                      type: "text",
                      content: " "
                    }
                  ] : D;
                }
                return {
                  type: "closeTag",
                  tagName: "li",
                  outerNewLine: !0
                };
              },
              table: function(n, r) {
                var s = r.entering;
                return {
                  type: s ? "openTag" : "closeTag",
                  tagName: "table",
                  outerNewLine: !0
                };
              },
              tableHead: function(n, r) {
                var s = r.entering;
                return {
                  type: s ? "openTag" : "closeTag",
                  tagName: "thead",
                  outerNewLine: !0
                };
              },
              tableBody: function(n, r) {
                var s = r.entering;
                return {
                  type: s ? "openTag" : "closeTag",
                  tagName: "tbody",
                  outerNewLine: !0
                };
              },
              tableRow: function(n, r) {
                var s = r.entering;
                if (s)
                  return {
                    type: "openTag",
                    tagName: "tr",
                    outerNewLine: !0
                  };
                var f = [];
                if (n.lastChild)
                  for (var g = n.parent.parent.columns.length, A = n.lastChild.endIdx, D = A + 1; D < g; D += 1)
                    f.push({
                      type: "openTag",
                      tagName: "td",
                      outerNewLine: !0
                    }, {
                      type: "closeTag",
                      tagName: "td",
                      outerNewLine: !0
                    });
                return f.push({
                  type: "closeTag",
                  tagName: "tr",
                  outerNewLine: !0
                }), f;
              },
              tableCell: function(n, r) {
                var s = r.entering;
                if (n.ignored)
                  return {
                    type: "text",
                    content: ""
                  };
                var f = n.parent.parent, g = f.type === "tableHead" ? "th" : "td", A = f.parent, D = A.columns[n.startIdx], L = D != null && D.align ? { align: D.align } : null;
                return s ? ne({ type: "openTag", tagName: g, outerNewLine: !0 }, L && { attributes: L }) : {
                  type: "closeTag",
                  tagName: g,
                  outerNewLine: !0
                };
              }
            }, h3 = {
              softbreak: `
`,
              gfm: !1,
              tagFilter: !1,
              nodeId: !1
            };
            function v3(n) {
              for (var r = [], s = n.walker(), f = null; f = s.next(); ) {
                var g = f.node;
                g.type === "text" && r.push(g.literal);
              }
              return r.join("");
            }
            var d3 = (
              /** @class */
              function() {
                function n(r) {
                  this.buffer = [], this.options = ne(ne({}, h3), r), this.convertors = this.createConvertors(), delete this.options.convertors;
                }
                return n.prototype.createConvertors = function() {
                  var r = ne({}, Ns);
                  if (this.options.gfm && (r = ne(ne({}, r), Ds)), this.options.convertors) {
                    var s = this.options.convertors, f = Object.keys(s), g = ne(ne({}, Ns), Ds);
                    f.forEach(function(A) {
                      var D = r[A], L = s[A], Y = Object.keys(g).indexOf(A) === -1 ? A.toLowerCase() : A;
                      D ? r[Y] = function(ie, Ee, Re) {
                        return Ee.origin = function() {
                          return D(ie, Ee, Re);
                        }, L(ie, Ee);
                      } : r[Y] = L;
                    });
                  }
                  return r;
                }, n.prototype.getConvertors = function() {
                  return this.convertors;
                }, n.prototype.getOptions = function() {
                  return this.options;
                }, n.prototype.render = function(r) {
                  var s = this;
                  this.buffer = [];
                  for (var f = r.walker(), g = null, A = function() {
                    var L = g.node, Y = g.entering, ie = D.convertors[L.type];
                    if (!ie)
                      return "continue";
                    var Ee = !1, Re = {
                      entering: Y,
                      leaf: !Ji(L),
                      options: D.options,
                      getChildrenText: v3,
                      skipChildren: function() {
                        Ee = !0;
                      }
                    }, we = Yo(L) || sH(L) ? ie(L, Re, D.convertors) : ie(L, Re);
                    if (we) {
                      var He = Array.isArray(we) ? we : [we];
                      He.forEach(function(Ve, pt) {
                        Ve.type === "openTag" && s.options.nodeId && pt === 0 && (Ve.attributes || (Ve.attributes = {}), Ve.attributes["data-nodeid"] = String(L.id)), s.renderHTMLNode(Ve);
                      }), Ee && (f.resumeAt(L, !1), f.next());
                    }
                  }, D = this; g = f.next(); )
                    A();
                  return this.addNewLine(), this.buffer.join("");
                }, n.prototype.renderHTMLNode = function(r) {
                  switch (r.type) {
                    case "openTag":
                    case "closeTag":
                      this.renderElementNode(r);
                      break;
                    case "text":
                      this.renderTextNode(r);
                      break;
                    case "html":
                      this.renderRawHtmlNode(r);
                      break;
                  }
                }, n.prototype.generateOpenTagString = function(r) {
                  var s = this, f = r.tagName, g = r.classNames, A = r.attributes;
                  this.buffer.push("<" + f), g && g.length > 0 && this.buffer.push(' class="' + g.join(" ") + '"'), A && Object.keys(A).forEach(function(D) {
                    var L = A[D];
                    s.buffer.push(" " + D + '="' + L + '"');
                  }), r.selfClose && this.buffer.push(" /"), this.buffer.push(">");
                }, n.prototype.generateCloseTagString = function(r) {
                  var s = r.tagName;
                  this.buffer.push("</" + s + ">");
                }, n.prototype.addNewLine = function() {
                  this.buffer.length && Ba(Ba(this.buffer)) !== `
` && this.buffer.push(`
`);
                }, n.prototype.addOuterNewLine = function(r) {
                  r.outerNewLine && this.addNewLine();
                }, n.prototype.addInnerNewLine = function(r) {
                  r.innerNewLine && this.addNewLine();
                }, n.prototype.renderTextNode = function(r) {
                  this.buffer.push(Hn(r.content));
                }, n.prototype.renderRawHtmlNode = function(r) {
                  this.addOuterNewLine(r), this.buffer.push(r.content), this.addOuterNewLine(r);
                }, n.prototype.renderElementNode = function(r) {
                  r.type === "openTag" ? (this.addOuterNewLine(r), this.generateOpenTagString(r), r.selfClose ? this.addOuterNewLine(r) : this.addInnerNewLine(r)) : (this.addInnerNewLine(r), this.generateCloseTagString(r), this.addOuterNewLine(r));
                }, n;
              }()
            ), p3 = te(956), m3 = /* @__PURE__ */ te.n(p3), g3 = te(969), Os = /* @__PURE__ */ te.n(g3), y3 = te(348), Ms = /* @__PURE__ */ te.n(y3), k3 = te(349), Rs = /* @__PURE__ */ te.n(k3), b3 = te(204), Ls = /* @__PURE__ */ te.n(b3), S3 = te(462), co = /* @__PURE__ */ te.n(S3), w3 = te(522), Is = /* @__PURE__ */ te.n(w3), C3 = te(990), T3 = /* @__PURE__ */ te.n(C3), A3 = te(322), x3 = /* @__PURE__ */ te.n(A3), E3 = te(758), N3 = /* @__PURE__ */ te.n(E3), D3 = te(929), Ua = /* @__PURE__ */ te.n(D3), O3 = te(714), M3 = /* @__PURE__ */ te.n(O3);
            te(471);
            var Ps = "[A-Za-z][A-Za-z0-9-]*", R3 = "[a-zA-Z_:][a-zA-Z0-9:._-]*", L3 = "[^\"'=<>`\\x00-\\x20]+", I3 = "'[^']*'", P3 = '"[^"]*"', F3 = "(?:" + L3 + "|" + I3 + "|" + P3 + ")", B3 = "(?:\\s*=\\s*" + F3 + ")", Fs = "(?:\\s+" + R3 + B3 + "?)", q3 = "<(" + Ps + ")(" + Fs + ")*\\s*/?>", z3 = "</(" + Ps + ")\\s*[>]", _3 = "(?:" + q3 + "|" + z3 + ")", Bs = new RegExp("^" + _3, "i");
            te(934), te(391);
            function fo(n, r) {
              return n.indexOf(r) !== -1;
            }
            var V3 = ["rel", "target", "hreflang", "type"];
            function H3(n) {
              if (!n)
                return null;
              var r = {};
              return V3.forEach(function(s) {
                Ua()(n[s]) || (r[s] = n[s]);
              }), r;
            }
            function U3(n) {
              return n[n.length - 1];
            }
            function ho(n) {
              return typeof n == "object" && n !== null;
            }
            function vo(n, r) {
              var s = j({}, n);
              return n && r && Object.keys(r).forEach(function(f) {
                ho(s[f]) ? Array.isArray(r[f]) ? s[f] = po(r[f]) : s.hasOwnProperty(f) ? s[f] = vo(s[f], r[f]) : s[f] = mo(r[f]) : s[f] = r[f];
              }), s;
            }
            function po(n) {
              return n.map(function(r) {
                return ho(r) ? Array.isArray(r) ? po(r) : mo(r) : r;
              });
            }
            function mo(n) {
              var r = Object.keys(n);
              return r.length ? r.reduce(function(s, f) {
                return ho(n[f]) ? s[f] = Array.isArray(n[f]) ? po(n[f]) : mo(n[f]) : s[f] = n[f], s;
              }, {}) : n;
            }
            function qs(n, r) {
              return r === void 0 && (r = {}), Object.keys(r).forEach(function(s) {
                n.hasOwnProperty(s) && typeof n[s] == "object" ? Array.isArray(r[s]) ? n[s] = r[s] : qs(n[s], r[s]) : n[s] = r[s];
              }), n;
            }
            function zs(n, r) {
              return n > r ? [r, n] : [n, r];
            }
            function W3(n, r, s) {
              var f = parseInt(n.left, 10), g = parseInt(n.top, 10), A = parseInt(n.width, 10) + parseInt(n.paddingLeft, 10) + parseInt(n.paddingRight, 10), D = parseInt(n.height, 10) + parseInt(n.paddingTop, 10) + parseInt(n.paddingBottom, 10);
              return r >= f && r <= f + A && s >= g && s <= g + D;
            }
            var $3 = "toastui-editor-";
            function Wa() {
              for (var n = [], r = 0; r < arguments.length; r++)
                n[r] = arguments[r];
              for (var s = [], f = 0, g = n; f < g.length; f++) {
                var A = g[f], D = void 0;
                Array.isArray(A) ? D = A[0] ? A[1] : null : D = A, D && s.push("" + $3 + D);
              }
              return s.join(" ");
            }
            function _s(n) {
              n.parentNode && n.parentNode.removeChild(n);
            }
            function Vs(n, r, s) {
              Ua()(s) && (s = !M3()(n, r));
              var f = s ? Ls() : co();
              f(n, r);
            }
            function G3(n, r) {
              var s = document.createElement("div");
              N3()(n) ? s.innerHTML = n : s.appendChild(n);
              var f = s.firstChild;
              return f;
            }
            function j3(n) {
              var r = /<img class="ProseMirror-separator" alt="">/g, s = / class="ProseMirror-trailingBreak"/g, f = n;
              return f = f.replace(r, ""), f = f.replace(s, ""), f;
            }
            var K3 = te(294), Hs = /* @__PURE__ */ te.n(K3);
            function J3(n) {
              return n.sourcepos[0][1];
            }
            function Y3(n) {
              switch (n.type) {
                case "code":
                case "text":
                case "emph":
                case "strong":
                case "strike":
                case "link":
                case "image":
                case "htmlInline":
                case "linebreak":
                case "softbreak":
                case "customInline":
                  return !0;
                default:
                  return !1;
              }
            }
            function Z3(n, r, s) {
              for (s === void 0 && (s = !0), n = s ? n : n.parent; n && n.type !== "document"; ) {
                if (r(n))
                  return n;
                n = n.parent;
              }
              return null;
            }
            function Q3(n) {
              var r = n.firstChild.literal;
              switch (n.type) {
                case "emph":
                  return "*" + r + "*";
                case "strong":
                  return "**" + r + "**";
                case "strike":
                  return "~~" + r + "~~";
                case "code":
                  return "`" + r + "`";
                case "link":
                case "image":
                  var s = n, f = s.destination, g = s.title, A = n.type === "link" ? "" : "!";
                  return A + "[" + r + "](" + f + (g ? ' "' + g + '"' : "") + ")";
                default:
                  return null;
              }
            }
            var X3 = {}, Us = /\$\$widget\d+\s/;
            function Ws(n) {
              var r = n.search(Us);
              if (r !== -1) {
                var s = n.substring(r), f = s.replace(Us, "").replace("$$", "");
                n = n.substring(0, r), n += Ws(f);
              }
              return n;
            }
            function eW(n, r) {
              var s = X3[n], f = s.rule, g = s.toDOM, A = Ws(r).match(f);
              return A && (r = A[0]), g(r);
            }
            function tW(n) {
              for (var r, s = "", f = n.walker(); r = f.next(); ) {
                var g = r.node, A = r.entering;
                A && (g !== n && g.type !== "text" ? (s += Q3(g), f.resumeAt(n, !1), f.next()) : g.type === "text" && (s += g.literal));
              }
              return s;
            }
            var rW = te(368), nW = /* @__PURE__ */ te.n(rW), aW = ["iframe", "embed"], $s = [];
            function iW(n) {
              fo(aW, n) && $s.push(n.toLowerCase());
            }
            function oW(n, r) {
              return nW().sanitize(n, j({ ADD_TAGS: $s, ADD_ATTR: ["rel", "target", "hreflang", "type"], FORBID_TAGS: [
                "input",
                "script",
                "textarea",
                "form",
                "button",
                "select",
                "meta",
                "style",
                "link",
                "title",
                "object",
                "base"
              ] }, r));
            }
            function sW(n, r) {
              return n.literal.replace(new RegExp("(<\\s*" + r + "[^>]*>)|(</" + r + "\\s*[>])", "ig"), "").trim();
            }
            function lW(n) {
              n = n.match(Bs)[0];
              var r = n.match(new RegExp(Fs, "g"));
              return r ? r.reduce(function(s, f) {
                var g = f.trim().split("="), A = g[0], D = g.slice(1);
                return D.length && (s[A] = D.join("=").replace(/'|"/g, "").trim()), s;
              }, {}) : {};
            }
            var uW = /^\s*<\s*\//, cW = {
              paragraph: function(n, r) {
                var s = r.entering, f = r.origin, g = r.options;
                return g.nodeId ? {
                  type: s ? "openTag" : "closeTag",
                  outerNewLine: !0,
                  tagName: "p"
                } : f();
              },
              softbreak: function(n) {
                var r = n.prev && n.prev.type === "htmlInline", s = r && /<br ?\/?>/.test(n.prev.literal), f = s ? `
` : `<br>
`;
                return { type: "html", content: f };
              },
              item: function(n, r) {
                var s = r.entering;
                if (s) {
                  var f = {}, g = [];
                  return n.listData.task && (f["data-task"] = "", g.push("task-list-item"), n.listData.checked && (g.push("checked"), f["data-task-checked"] = "")), {
                    type: "openTag",
                    tagName: "li",
                    classNames: g,
                    attributes: f,
                    outerNewLine: !0
                  };
                }
                return {
                  type: "closeTag",
                  tagName: "li",
                  outerNewLine: !0
                };
              },
              code: function(n) {
                var r = { "data-backticks": String(n.tickCount) };
                return [
                  { type: "openTag", tagName: "code", attributes: r },
                  { type: "text", content: n.literal },
                  { type: "closeTag", tagName: "code" }
                ];
              },
              codeBlock: function(n) {
                var r = n, s = r.fenceLength, f = r.info, g = f ? f.split(/\s+/) : [], A = [], D = {};
                if (s > 3 && (D["data-backticks"] = s), g.length > 0 && g[0].length > 0) {
                  var L = g[0];
                  A.push("lang-" + L), D["data-language"] = L;
                }
                return [
                  { type: "openTag", tagName: "pre", classNames: A },
                  { type: "openTag", tagName: "code", attributes: D },
                  { type: "text", content: n.literal },
                  { type: "closeTag", tagName: "code" },
                  { type: "closeTag", tagName: "pre" }
                ];
              },
              customInline: function(n, r) {
                var s = r.origin, f = r.entering, g = r.skipChildren, A = n.info;
                if (A.indexOf("widget") !== -1 && f) {
                  g();
                  var D = tW(n), L = eW(A, D).outerHTML;
                  return [
                    { type: "openTag", tagName: "span", classNames: ["tui-widget"] },
                    { type: "html", content: L },
                    { type: "closeTag", tagName: "span" }
                  ];
                }
                return s();
              }
            };
            function fW(n, r) {
              var s = j({}, cW);
              return n && (s.link = function(f, g) {
                var A = g.entering, D = g.origin, L = D();
                return A && (L.attributes = j(j({}, L.attributes), n)), L;
              }), r && Object.keys(r).forEach(function(f) {
                var g = s[f], A = r[f];
                g && Hs()(A) ? s[f] = function(D, L) {
                  var Y = j({}, L);
                  return Y.origin = function() {
                    return g(D, L);
                  }, A(D, Y);
                } : fo(["htmlBlock", "htmlInline"], f) && !Hs()(A) ? s[f] = function(D, L) {
                  var Y = D.literal.match(Bs);
                  if (Y) {
                    var ie = Y[0], Ee = Y[1], Re = Y[3], we = (Ee || Re).toLowerCase(), He = A[we], Ve = sW(D, we);
                    if (He) {
                      var pt = j({}, D);
                      return pt.attrs = lW(ie), pt.childrenHTML = Ve, pt.type = we, L.entering = !uW.test(D.literal), He(pt, L);
                    }
                  }
                  return L.origin();
                } : s[f] = A;
              }), s;
            }
            var hW = ["UL", "OL", "BLOCKQUOTE"];
            function vW(n, r) {
              for (var s = 0; n && n !== r && (fo(hW, n.tagName) || (s += n.offsetTop), n.offsetParent !== r.offsetParent); )
                n = n.parentElement;
              return s;
            }
            function dW(n, r) {
              for (var s = r, f = null; s; ) {
                var g = s.firstElementChild;
                if (!g)
                  break;
                var A = Gs(g, n, vW(s, r));
                f = s, s = A;
              }
              var D = s || f;
              return D === r ? null : D;
            }
            function Gs(n, r, s) {
              return n && r > s + n.offsetTop ? Gs(n.nextElementSibling, r, s) || n : null;
            }
            var pW = {};
            function go(n) {
              n && (delete pW[Number(n.getAttribute("data-nodeid"))], T3()(n.children).forEach(function(r) {
                go(r);
              }));
            }
            var yo = Wa("md-preview-highlight");
            function mW(n, r) {
              for (var s = n.firstChild; s && s.next && !(J3(s.next) > r + 1); )
                s = s.next;
              return s;
            }
            var gW = (
              /** @class */
              function() {
                function n(r, s) {
                  var f = document.createElement("div");
                  this.el = f, this.eventEmitter = r, this.isViewer = !!s.isViewer, this.el.className = Wa("md-preview");
                  var g = s.linkAttributes, A = s.customHTMLRenderer, D = s.sanitizer, L = s.highlight, Y = L === void 0 ? !1 : L;
                  this.renderer = new d3({
                    gfm: !0,
                    nodeId: !0,
                    convertors: fW(g, A)
                  }), this.cursorNodeId = null, this.sanitizer = D, this.initEvent(Y), this.initContentSection(), this.isViewer && (this.previewContent.style.overflowWrap = "break-word");
                }
                return n.prototype.initContentSection = function() {
                  this.previewContent = G3('<div class="' + Wa("contents") + '"></div>'), this.isViewer || this.el.appendChild(this.previewContent);
                }, n.prototype.toggleActive = function(r) {
                  Vs(this.el, "active", r);
                }, n.prototype.initEvent = function(r) {
                  var s = this;
                  this.eventEmitter.listen("updatePreview", this.update.bind(this)), !this.isViewer && (r && (this.eventEmitter.listen("changeToolbarState", function(f) {
                    var g = f.mdNode, A = f.cursorPos;
                    s.updateCursorNode(g, A);
                  }), this.eventEmitter.listen("blur", function() {
                    s.removeHighlight();
                  })), Ms()(this.el, "scroll", function(f) {
                    s.eventEmitter.emit("scroll", "preview", dW(f.target.scrollTop, s.previewContent));
                  }), this.eventEmitter.listen("changePreviewTabPreview", function() {
                    return s.toggleActive(!0);
                  }), this.eventEmitter.listen("changePreviewTabWrite", function() {
                    return s.toggleActive(!1);
                  }));
                }, n.prototype.removeHighlight = function() {
                  if (this.cursorNodeId) {
                    var r = this.getElementByNodeId(this.cursorNodeId);
                    r && co()(r, yo);
                  }
                }, n.prototype.updateCursorNode = function(r, s) {
                  r && (r = Z3(r, function(D) {
                    return !Y3(D);
                  }), r.type === "tableRow" ? r = mW(r, s[1]) : r.type === "tableBody" && (r = null));
                  var f = r ? r.id : null;
                  if (this.cursorNodeId !== f) {
                    var g = this.getElementByNodeId(this.cursorNodeId), A = this.getElementByNodeId(f);
                    g && co()(g, yo), A && Ls()(A, yo), this.cursorNodeId = f;
                  }
                }, n.prototype.getElementByNodeId = function(r) {
                  return r ? this.previewContent.querySelector('[data-nodeid="' + r + '"]') : null;
                }, n.prototype.update = function(r) {
                  var s = this;
                  r.forEach(function(f) {
                    return s.replaceRangeNodes(f);
                  }), this.eventEmitter.emit("afterPreviewRender", this);
                }, n.prototype.replaceRangeNodes = function(r) {
                  var s = this, f = r.nodes, g = r.removedNodeRange, A = this.previewContent, D = this.eventEmitter.emitReduce("beforePreviewRender", this.sanitizer(f.map(function(Ve) {
                    return s.renderer.render(Ve);
                  }).join("")));
                  if (!g)
                    A.insertAdjacentHTML("afterbegin", D);
                  else {
                    var L = g.id, Y = L[0], ie = L[1], Ee = this.getElementByNodeId(Y), Re = this.getElementByNodeId(ie);
                    if (Ee) {
                      Ee.insertAdjacentHTML("beforebegin", D);
                      for (var we = Ee; we && we !== Re; ) {
                        var He = we.nextElementSibling;
                        _s(we), go(we), we = He;
                      }
                      we != null && we.parentNode && (_s(we), go(we));
                    }
                  }
                }, n.prototype.getRenderer = function() {
                  return this.renderer;
                }, n.prototype.destroy = function() {
                  Rs()(this.el, "scroll"), this.el = null;
                }, n.prototype.getElement = function() {
                  return this.el;
                }, n.prototype.getHTML = function() {
                  return j3(this.previewContent.innerHTML);
                }, n.prototype.setHTML = function(r) {
                  this.previewContent.innerHTML = r;
                }, n.prototype.setHeight = function(r) {
                  Is()(this.el, { height: r + "px" });
                }, n.prototype.setMinHeight = function(r) {
                  Is()(this.el, { minHeight: r + "px" });
                }, n;
              }()
            ), yW = gW, $a = te(814), ko = te(479), js = te(311), kW = te(481), bW = te(43), SW = te(928), wW = /* @__PURE__ */ te.n(SW), CW = (
              /** @class */
              function() {
                function n() {
                  this.keys = [], this.values = [];
                }
                return n.prototype.getKeyIndex = function(r) {
                  return wW()(r, this.keys);
                }, n.prototype.get = function(r) {
                  return this.values[this.getKeyIndex(r)];
                }, n.prototype.set = function(r, s) {
                  var f = this.getKeyIndex(r);
                  return f > -1 ? this.values[f] = s : (this.keys.push(r), this.values.push(s)), this;
                }, n.prototype.has = function(r) {
                  return this.getKeyIndex(r) > -1;
                }, n.prototype.delete = function(r) {
                  var s = this.getKeyIndex(r);
                  return s > -1 ? (this.keys.splice(s, 1), this.values.splice(s, 1), !0) : !1;
                }, n.prototype.forEach = function(r, s) {
                  var f = this;
                  s === void 0 && (s = this), this.values.forEach(function(g, A) {
                    g && f.keys[A] && r.call(s, g, f.keys[A], f);
                  });
                }, n.prototype.clear = function() {
                  this.keys = [], this.values = [];
                }, n;
              }()
            ), Ks = CW, bo = "en-US", TW = (
              /** @class */
              function() {
                function n() {
                  this.code = bo, this.langs = new Ks();
                }
                return n.prototype.setCode = function(r) {
                  this.code = r || bo;
                }, n.prototype.setLanguage = function(r, s) {
                  var f = this;
                  r = [].concat(r), r.forEach(function(g) {
                    if (!f.langs.has(g))
                      f.langs.set(g, s);
                    else {
                      var A = f.langs.get(g);
                      f.langs.set(g, Os()(A, s));
                    }
                  });
                }, n.prototype.get = function(r, s) {
                  s || (s = this.code);
                  var f = this.langs.get(s);
                  f || (f = this.langs.get(bo));
                  var g = f[r];
                  if (!g)
                    throw new Error('There is no text key "' + r + '" in ' + s);
                  return g;
                }, n;
              }()
            ), AW = new TW();
            function xW(n, r) {
              for (var s = n.depth; s; ) {
                var f = n.node(s);
                if (r(f, s))
                  return {
                    node: f,
                    depth: s,
                    offset: s > 0 ? n.before(s) : 0
                  };
                s -= 1;
              }
              return null;
            }
            var Js = /* @__PURE__ */ new Map(), Ys = (
              /** @class */
              function() {
                function n(r, s, f, g) {
                  this.table = r, this.tableRows = s, this.tableStartPos = f, this.rowInfo = g;
                }
                return n.create = function(r) {
                  var s = xW(r, function(Ve) {
                    var pt = Ve.type;
                    return pt.name === "table";
                  });
                  if (s) {
                    var f = s.node, g = s.depth, A = s.offset, D = Js.get(f);
                    if ((D == null ? void 0 : D.tableStartPos) === A + 1)
                      return D;
                    var L = [], Y = r.start(g), ie = f.child(0), Ee = f.child(1), Re = So(ie, Y), we = So(Ee, Y + ie.nodeSize);
                    ie.forEach(function(Ve) {
                      return L.push(Ve);
                    }), Ee.forEach(function(Ve) {
                      return L.push(Ve);
                    });
                    var He = new n(f, L, Y, Re.concat(we));
                    return Js.set(f, He), He;
                  }
                  return null;
                }, Object.defineProperty(n.prototype, "totalRowCount", {
                  get: function() {
                    return this.rowInfo.length;
                  },
                  enumerable: !1,
                  configurable: !0
                }), Object.defineProperty(n.prototype, "totalColumnCount", {
                  get: function() {
                    return this.rowInfo[0].length;
                  },
                  enumerable: !1,
                  configurable: !0
                }), Object.defineProperty(n.prototype, "tableStartOffset", {
                  get: function() {
                    return this.tableStartPos;
                  },
                  enumerable: !1,
                  configurable: !0
                }), Object.defineProperty(n.prototype, "tableEndOffset", {
                  get: function() {
                    return this.tableStartPos + this.table.nodeSize - 1;
                  },
                  enumerable: !1,
                  configurable: !0
                }), n.prototype.getCellInfo = function(r, s) {
                  return this.rowInfo[r][s];
                }, n.prototype.posAt = function(r, s) {
                  for (var f = 0, g = this.tableStartPos; ; f += 1) {
                    var A = g + this.tableRows[f].nodeSize;
                    if (f === r) {
                      for (var D = s; D < this.totalColumnCount && this.rowInfo[f][D].offset < g; )
                        D += 1;
                      return D === this.totalColumnCount ? A : this.rowInfo[f][D].offset;
                    }
                    g = A;
                  }
                }, n.prototype.getNodeAndPos = function(r, s) {
                  var f = this.rowInfo[r][s];
                  return {
                    node: this.table.nodeAt(f.offset - this.tableStartOffset),
                    pos: f.offset
                  };
                }, n.prototype.extendedRowspan = function(r, s) {
                  return !1;
                }, n.prototype.extendedColspan = function(r, s) {
                  return !1;
                }, n.prototype.getRowspanCount = function(r, s) {
                  return 0;
                }, n.prototype.getColspanCount = function(r, s) {
                  return 0;
                }, n.prototype.decreaseColspanCount = function(r, s) {
                  return 0;
                }, n.prototype.decreaseRowspanCount = function(r, s) {
                  return 0;
                }, n.prototype.getColspanStartInfo = function(r, s) {
                  return null;
                }, n.prototype.getRowspanStartInfo = function(r, s) {
                  return null;
                }, n.prototype.getCellStartOffset = function(r, s) {
                  var f = this.rowInfo[r][s].offset;
                  return this.extendedRowspan(r, s) ? this.posAt(r, s) : f;
                }, n.prototype.getCellEndOffset = function(r, s) {
                  var f = this.rowInfo[r][s], g = f.offset, A = f.nodeSize;
                  return this.extendedRowspan(r, s) ? this.posAt(r, s) : g + A;
                }, n.prototype.getCellIndex = function(r) {
                  for (var s = 0; s < this.totalRowCount; s += 1)
                    for (var f = this.rowInfo[s], g = 0; g < this.totalColumnCount; g += 1)
                      if (f[g].offset + 1 > r.pos)
                        return [s, g];
                  return [0, 0];
                }, n.prototype.getRectOffsets = function(r, s) {
                  var f, g, A;
                  s === void 0 && (s = r), r.pos > s.pos && (f = [s, r], r = f[0], s = f[1]);
                  var D = this.getCellIndex(r), L = D[0], Y = D[1], ie = this.getCellIndex(s), Ee = ie[0], Re = ie[1];
                  return g = zs(L, Ee), L = g[0], Ee = g[1], A = zs(Y, Re), Y = A[0], Re = A[1], this.getSpannedOffsets({ startRowIdx: L, startColIdx: Y, endRowIdx: Ee, endColIdx: Re });
                }, n.prototype.getSpannedOffsets = function(r) {
                  return r;
                }, n;
              }()
            ), So = function(n, r) {
              var s = [];
              return n.forEach(function(f, g) {
                var A = { rowspanMap: {}, colspanMap: {}, length: 0 };
                f.forEach(function(D, L) {
                  for (var Y = D.nodeSize, ie = 0; A[ie]; )
                    ie += 1;
                  A[ie] = {
                    // 2 is the sum of the front and back positions of the tag
                    offset: r + g + L + 2,
                    nodeSize: Y
                  }, A.length += 1;
                }), s.push(A);
              }), s;
            };
            function EW(n, r) {
              return qs(Ys.prototype, n), So = r, Ys;
            }
            function NW(n) {
              var r = n.plugin, s = n.eventEmitter, f = n.usageStatistics, g = n.instance, A = { Plugin: $a.Plugin, PluginKey: $a.PluginKey, Selection: $a.Selection, TextSelection: $a.TextSelection }, D = { Decoration: js.Decoration, DecorationSet: js.DecorationSet }, L = { Fragment: bW.Fragment }, Y = { InputRule: ko.InputRule, inputRules: ko.inputRules, undoInputRule: ko.undoInputRule }, ie = { keymap: kW.keymap }, Ee = {
                eventEmitter: s,
                usageStatistics: f,
                instance: g,
                pmState: A,
                pmView: D,
                pmModel: L,
                pmRules: Y,
                pmKeymap: ie,
                i18n: AW
              };
              if (x3()(r)) {
                var Re = r[0], we = r[1], He = we === void 0 ? {} : we;
                return Re(Ee, He);
              }
              return r(Ee);
            }
            function DW(n) {
              var r = n.plugins, s = n.eventEmitter, f = n.usageStatistics, g = n.instance;
              return s.listen("mixinTableOffsetMapPrototype", EW), (r ?? []).reduce(function(A, D) {
                var L = NW({
                  plugin: D,
                  eventEmitter: s,
                  usageStatistics: f,
                  instance: g
                });
                if (!L)
                  throw new Error("The return value of the executed plugin is empty.");
                var Y = L.markdownParsers, ie = L.toHTMLRenderers, Ee = L.toMarkdownRenderers, Re = L.markdownPlugins, we = L.wysiwygPlugins, He = L.wysiwygNodeViews, Ve = L.markdownCommands, pt = L.wysiwygCommands, Lt = L.toolbarItems;
                return ie && (A.toHTMLRenderers = vo(A.toHTMLRenderers, ie)), Ee && (A.toMarkdownRenderers = vo(A.toMarkdownRenderers, Ee)), Re && (A.mdPlugins = A.mdPlugins.concat(Re)), we && (A.wwPlugins = A.wwPlugins.concat(we)), He && (A.wwNodeViews = j(j({}, A.wwNodeViews), He)), Ve && (A.mdCommands = j(j({}, A.mdCommands), Ve)), pt && (A.wwCommands = j(j({}, A.wwCommands), pt)), Lt && (A.toolbarItems = A.toolbarItems.concat(Lt)), Y && (A.markdownParsers = j(j({}, A.markdownParsers), Y)), A;
              }, {
                toHTMLRenderers: {},
                toMarkdownRenderers: {},
                mdPlugins: [],
                wwPlugins: [],
                wwNodeViews: {},
                mdCommands: {},
                wwCommands: {},
                toolbarItems: [],
                markdownParsers: {}
              });
            }
            var OW = te(404), MW = /* @__PURE__ */ te.n(OW), Zs = [
              "afterPreviewRender",
              "updatePreview",
              "changeMode",
              "needChangeMode",
              "command",
              "changePreviewStyle",
              "changePreviewTabPreview",
              "changePreviewTabWrite",
              "scroll",
              "contextmenu",
              "show",
              "hide",
              "changeLanguage",
              "changeToolbarState",
              "toggleScrollSync",
              "mixinTableOffsetMapPrototype",
              "setFocusedNode",
              "removePopupWidget",
              "query",
              // provide event for user
              "openPopup",
              "closePopup",
              "addImageBlobHook",
              "beforePreviewRender",
              "beforeConvertWysiwygToMarkdown",
              "load",
              "loadUI",
              "change",
              "caretChange",
              "destroy",
              "focus",
              "blur",
              "keydown",
              "keyup"
            ], RW = (
              /** @class */
              function() {
                function n() {
                  var r = this;
                  this.events = new Ks(), this.eventTypes = Zs.reduce(function(s, f) {
                    return j(j({}, s), { type: f });
                  }, {}), this.hold = !1, Zs.forEach(function(s) {
                    r.addEventType(s);
                  });
                }
                return n.prototype.listen = function(r, s) {
                  var f = this.getTypeInfo(r), g = this.events.get(f.type) || [];
                  if (!this.hasEventType(f.type))
                    throw new Error("There is no event type " + f.type);
                  f.namespace && (s.namespace = f.namespace), g.push(s), this.events.set(f.type, g);
                }, n.prototype.emit = function(r) {
                  for (var s = [], f = 1; f < arguments.length; f++)
                    s[f - 1] = arguments[f];
                  var g = this.getTypeInfo(r), A = this.events.get(g.type), D = [];
                  return !this.hold && A && A.forEach(function(L) {
                    var Y = L.apply(void 0, s);
                    Ua()(Y) || D.push(Y);
                  }), D;
                }, n.prototype.emitReduce = function(r, s) {
                  for (var f = [], g = 2; g < arguments.length; g++)
                    f[g - 2] = arguments[g];
                  var A = this.events.get(r);
                  return !this.hold && A && A.forEach(function(D) {
                    var L = D.apply(void 0, le([s], f));
                    MW()(L) || (s = L);
                  }), s;
                }, n.prototype.getTypeInfo = function(r) {
                  var s = r.split(".");
                  return {
                    type: s[0],
                    namespace: s[1]
                  };
                }, n.prototype.hasEventType = function(r) {
                  return !Ua()(this.eventTypes[this.getTypeInfo(r).type]);
                }, n.prototype.addEventType = function(r) {
                  if (this.hasEventType(r))
                    throw new Error("There is already have event type " + r);
                  this.eventTypes[r] = r;
                }, n.prototype.removeEventHandler = function(r, s) {
                  var f = this, g = this.getTypeInfo(r), A = g.type, D = g.namespace;
                  A && s ? this.removeEventHandlerWithHandler(A, s) : A && !D ? this.events.delete(A) : !A && D ? this.events.forEach(function(L, Y) {
                    f.removeEventHandlerWithTypeInfo(Y, D);
                  }) : A && D && this.removeEventHandlerWithTypeInfo(A, D);
                }, n.prototype.removeEventHandlerWithHandler = function(r, s) {
                  var f = this.events.get(r);
                  if (f) {
                    var g = f.indexOf(s);
                    f.indexOf(s) >= 0 && f.splice(g, 1);
                  }
                }, n.prototype.removeEventHandlerWithTypeInfo = function(r, s) {
                  var f = [], g = this.events.get(r);
                  g && (g.map(function(A) {
                    return A.namespace !== s && f.push(A), null;
                  }), this.events.set(r, f));
                }, n.prototype.getEvents = function() {
                  return this.events;
                }, n.prototype.holdEventInvoke = function(r) {
                  this.hold = !0, r(), this.hold = !1;
                }, n;
              }()
            ), LW = RW, IW = "data-task", PW = "data-task-disabled", FW = "checked";
            function BW(n) {
              ["htmlBlock", "htmlInline"].forEach(function(r) {
                n[r] && Object.keys(n[r]).forEach(function(s) {
                  return iW(s);
                });
              });
            }
            var qW = (
              /** @class */
              function() {
                function n(r) {
                  var s = this;
                  this.options = Os()({
                    linkAttributes: null,
                    extendedAutolinks: !1,
                    customHTMLRenderer: null,
                    referenceDefinition: !1,
                    customHTMLSanitizer: null,
                    frontMatter: !1,
                    usageStatistics: !0,
                    theme: "light"
                  }, r), this.eventEmitter = new LW();
                  var f = H3(this.options.linkAttributes), g = DW({
                    plugins: this.options.plugins,
                    eventEmitter: this.eventEmitter,
                    usageStatistics: this.options.usageStatistics,
                    instance: this
                  }) || {}, A = g.toHTMLRenderers, D = g.markdownParsers, L = this.options, Y = L.customHTMLRenderer, ie = L.extendedAutolinks, Ee = L.referenceDefinition, Re = L.frontMatter, we = L.customHTMLSanitizer, He = {
                    linkAttributes: f,
                    customHTMLRenderer: j(j({}, A), Y),
                    extendedAutolinks: ie,
                    referenceDefinition: Ee,
                    frontMatter: Re,
                    sanitizer: we || oW
                  };
                  BW(He.customHTMLRenderer), this.options.events && m3()(this.options.events, function(xr, gr) {
                    s.on(gr, xr);
                  });
                  var Ve = this.options, pt = Ve.el, Lt = Ve.initialValue, Ut = Ve.theme, Qr = pt.innerHTML;
                  Ut !== "light" && pt.classList.add(Wa(Ut)), pt.innerHTML = "", this.toastMark = new c3("", {
                    disallowedHtmlBlockTags: ["br", "img"],
                    extendedAutolinks: ie,
                    referenceDefinition: Ee,
                    disallowDeepHeading: !0,
                    frontMatter: Re,
                    customParser: D
                  }), this.preview = new yW(this.eventEmitter, j(j({}, He), { isViewer: !0 })), Ms()(this.preview.previewContent, "mousedown", this.toggleTask.bind(this)), Lt ? this.setMarkdown(Lt) : Qr && this.preview.setHTML(Qr), pt.appendChild(this.preview.previewContent), this.eventEmitter.emit("load", this);
                }
                return n.prototype.toggleTask = function(r) {
                  var s = r.target, f = getComputedStyle(s, ":before");
                  !s.hasAttribute(PW) && s.hasAttribute(IW) && W3(f, r.offsetX, r.offsetY) && (Vs(s, FW), this.eventEmitter.emit("change", {
                    source: "viewer",
                    date: r
                  }));
                }, n.prototype.setMarkdown = function(r) {
                  var s = this.toastMark.getLineTexts(), f = s.length, g = U3(s), A = [f, g.length + 1], D = this.toastMark.editMarkdown([1, 1], A, r || "");
                  this.eventEmitter.emit("updatePreview", D);
                }, n.prototype.on = function(r, s) {
                  this.eventEmitter.listen(r, s);
                }, n.prototype.off = function(r) {
                  this.eventEmitter.removeEventHandler(r);
                }, n.prototype.addHook = function(r, s) {
                  this.eventEmitter.removeEventHandler(r), this.eventEmitter.listen(r, s);
                }, n.prototype.destroy = function() {
                  Rs()(this.preview.el, "mousedown", this.toggleTask.bind(this)), this.preview.destroy(), this.eventEmitter.emit("destroy");
                }, n.prototype.isViewer = function() {
                  return !0;
                }, n.prototype.isMarkdownMode = function() {
                  return !1;
                }, n.prototype.isWysiwygMode = function() {
                  return !1;
                }, n;
              }()
            ), zW = qW, _W = zW;
          }(), Be = Be.default, Be;
        }()
      );
    });
  }(Co)), Co.exports;
}
var u$ = l$();
function c$(ye, se) {
  if (!ye.value)
    throw new Error("Reference to the element is not set");
  return new u$.Viewer({
    el: ye.value,
    // Pass through options to the viewer
    initialValue: se.initialValue,
    plugins: se.plugins,
    extendedAutolinks: se.extendedAutolinks,
    linkAttributes: se.linkAttributes,
    referenceDefinition: se.referenceDefinition,
    frontMatter: se.frontMatter,
    usageStatistics: se.usageStatistics,
    theme: se.theme
  });
}
const f$ = /* @__PURE__ */ sl({
  __name: "Viewer",
  props: {
    value: {},
    plugins: { default: () => ul(["chart", "codeSyntaxHighlight", "colorSyntax", "tableMergedCell", "uml"]) },
    darkMode: { type: Boolean, default: !1 }
  },
  setup(ye, { expose: se }) {
    const Ie = ye, Fe = oa(null), Pe = oa(null);
    return se({ viewer: Pe }), ll(() => {
      Fe.value && (Pe.value = c$(Fe, {
        initialValue: Ie.value,
        plugins: Ie.plugins
      }));
    }), (Xe, et) => (Eo(), xo("div", {
      ref_key: "viewer",
      ref: Fe,
      class: No([{ "toastui-editor-dark": Xe.darkMode }, "tui-viewer-vue3-wrapper"])
    }, null, 2));
  }
}), h$ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Editor: r$,
  Viewer: f$
}, Symbol.toStringTag, { value: "Module" })), b$ = {
  install(ye) {
    Object.entries(h$).forEach(([se, Ie]) => {
      ye.component(se, Ie);
    });
  }
};
export {
  r$ as Editor,
  b$ as TuiEditorPlugin,
  f$ as Viewer,
  b$ as default
};
//# sourceMappingURL=tui-editor-vue3.es.js.map
