const themes = [
  { day: 1, date: "1 בנובמבר", title: "נקודות", description: "הציגו תופעה דרך מיקומים, סמנים או מוקדים על המפה.", original: "Points" },
  { day: 2, date: "2 בנובמבר", title: "קווים", description: "מסלולים, גבולות, תנועה או קשרים — תנו לקו להוביל את הסיפור.", original: "Lines" },
  { day: 3, date: "3 בנובמבר", title: "פוליגונים", description: "מפו אזורים, חלוקות ושטחים באמצעות פוליגונים.", original: "Polygons" },
  { day: 4, date: "4 בנובמבר", title: "אשכולות", description: "גלו קבוצות, ריכוזים ומוקדים של תופעה.", original: "Clusters" },
  { day: 5, date: "5 בנובמבר", title: "חושים: ראייה", description: "מה אפשר לראות מהמרחב? נסו למפות נראות או שדה ראייה.", original: "Senses: Sight" },
  { day: 6, date: "6 בנובמבר", title: "וינטג׳", description: "תנו למפה מראה של פעם או עסקו בנושא שיש לו עבר.", original: "Vintage" },
  { day: 7, date: "7 בנובמבר", title: "מפה בעשר דקות", description: "בחרו רעיון, הפעילו שעון וצרו מפה בעשר דקות.", original: "10 minute map" },
  { day: 8, date: "8 בנובמבר", title: "אוטופיה", description: "מפו מקום, חברה או עתיד כפי שהייתם רוצים שיהיו.", original: "Utopia" },
  { day: 9, date: "9 בנובמבר", title: "עירוני–כפרי", description: "חקרו עיר, כפר או את המעבר בין שני סוגי המרחב.", original: "Urban-rural" },
  { day: 10, date: "10 בנובמבר", title: "פרומפטים בלבד", description: "תנו לכלי AI ליצור מפה מההנחיות שלכם, מתחילת התהליך ועד סופו.", original: "Prompting only" },
  { day: 11, date: "11 בנובמבר", title: "חושים: שמיעה", description: "מפו נוף קולי, צלילים, מוזיקה או רעש במרחב.", original: "Senses: Sound" },
  { day: 12, date: "12 בנובמבר", title: "אנרגיה", description: "מפו אנרגיה, ייצור חשמל, רשתות, צריכה או מקורות אנרגיה.", original: "Power" },
  { day: 13, date: "13 בנובמבר", title: "אינטראקציות", description: "הראו קשרים בין דברים או בנו מפה שאפשר לחקור באופן פעיל.", original: "Interactions" },
  { day: 14, date: "14 בנובמבר", title: "מפה בורחסיאנית", description: "שחקו ברעיון של מפה שמנסה לייצג את העולם בפרטי פרטים.", original: "Borgesian map" },
  { day: 15, date: "15 בנובמבר", title: "מבפנים החוצה", description: "הפכו את נקודת המבט, הסדר או הציפייה המקובלת.", original: "Inside out" },
  { day: 16, date: "16 בנובמבר", title: "מפה שיתופית", description: "צרו מפה יחד עם חבר, עמיתה, קבוצה או אדם שפגשתם בדרך.", original: "Collaborative map" },
  { day: 17, date: "17 בנובמבר", title: "אור וחושך", description: "השתמשו באור, בצל ובניגודיות כדי לספר סיפור מרחבי.", original: "Light & dark" },
  { day: 18, date: "18 בנובמבר", title: "NULL — ערך ריק", description: "התמקדו בערך חסר או ריק בנתונים, ובמה שאפשר ללמוד מהיעדר מידע.", original: "NULL" },
  { day: 19, date: "19 בנובמבר", title: "חושים: ריח", description: "נסו לייצג ריחות, מקורות ריח או את התפשטותם במרחב.", original: "Senses: Smell" },
  { day: 20, date: "20 בנובמבר", title: "משושים", description: "השתמשו במשושים כצורה, כיחידת חלוקה או כדרך לראות נתונים.", original: "Hexagons" },
  { day: 21, date: "21 בנובמבר", title: "OpenStreetMap", description: "השתמשו בנתוני OpenStreetMap או תרמו לפרויקט המיפוי הפתוח.", original: "OpenStreetMap" },
  { day: 22, date: "22 בנובמבר", title: "היטלים", description: "בדקו כיצד בחירת היטל משנה את האופן שבו אנחנו רואים את העולם.", original: "Projections" },
  { day: 23, date: "23 בנובמבר", title: "חושים: טעם", description: "מפו אוכל, שתייה, טעמים או המקומות שמחברים ביניהם.", original: "Senses: Taste" },
  { day: 24, date: "24 בנובמבר", title: "רשת", description: "תחבורה, קשרים חברתיים, תקשורת או כל רשת אחרת.", original: "Network" },
  { day: 25, date: "25 בנובמבר", title: "האם זו מפה?", description: "מתחו את הגבול שבין מפה, יצירת אמנות והדמיית נתונים.", original: "Is this a map?" },
  { day: 26, date: "26 בנובמבר", title: "מים", description: "מפו מקווי מים, זרימה, שימושים, גישה או מחסור.", original: "Water" },
  { day: 27, date: "27 בנובמבר", title: "כלי חדש", description: "התנסו בכלי חדש בתהליך העבודה על המפה.", original: "New tool" },
  { day: 28, date: "28 בנובמבר", title: "חושים: תחושה", description: "נסו לתת צורה מרחבית לתחושה או לרגש.", original: "Senses: Feeling" },
  { day: 29, date: "29 בנובמבר", title: "רסטר", description: "צרו משהו מעניין בעזרת פיקסלים, תאים או שכבת רסטר.", original: "Raster" },
  { day: 30, date: "30 בנובמבר", title: "עט ונייר", description: "סיימו את האתגר במפה אנלוגית, בעזרת עט ונייר.", original: "Pen & paper" }
];

function makeThemeCard(theme) {
  const card = document.createElement("a");
  card.className = "theme-card";
  card.href = `day.html?day=${theme.day}`;
  card.setAttribute("aria-label", `יום ${theme.day}, ${theme.title}: ${theme.description}`);

  const top = document.createElement("span");
  top.className = "theme-card-top";
  const number = document.createElement("span");
  number.className = "theme-number";
  number.textContent = String(theme.day).padStart(2, "0");
  const date = document.createElement("span");
  date.className = "theme-date";
  date.textContent = theme.date;
  top.append(number, date);

  const title = document.createElement("span");
  title.className = "theme-title";
  title.textContent = theme.title;
  const description = document.createElement("span");
  description.className = "theme-description";
  description.textContent = theme.description;
  const arrow = document.createElement("span");
  arrow.className = "theme-arrow";
  arrow.setAttribute("aria-hidden", "true");
  arrow.textContent = "←";
  card.append(top, title, description, arrow);
  return card;
}

document.querySelectorAll("[data-theme-grid]").forEach((grid) => {
  const limit = Number(grid.dataset.limit);
  const list = Number.isInteger(limit) && limit > 0 ? themes.slice(0, limit) : themes;
  list.forEach((theme) => grid.append(makeThemeCard(theme)));
});

const dayPage = document.querySelector("[data-day-page]");
if (dayPage) {
  const requestedDay = Number(new URLSearchParams(window.location.search).get("day"));
  const theme = themes.find((item) => item.day === requestedDay);

  if (!theme) {
    window.location.replace("themes.html");
  } else {
    document.title = `יום ${theme.day}: ${theme.title} — אתגר המפות 2026`;
    dayPage.querySelector("[data-day-date]").textContent = `${theme.date} · אתגר המפות 2026`;
    dayPage.querySelector("[data-day-number]").textContent = String(theme.day).padStart(2, "0");
    dayPage.querySelector("[data-day-title]").textContent = theme.title;
    dayPage.querySelector("[data-day-description]").textContent = theme.description;
    dayPage.querySelector("[data-day-submit]").href = `submit.html?day=${theme.day}`;
    dayPage.querySelector("[data-day-empty-submit]").href = `submit.html?day=${theme.day}`;
    initializeDayGallery(theme.day);

    const previous = dayPage.querySelector("[data-day-prev]");
    const next = dayPage.querySelector("[data-day-next]");
    if (theme.day > 1) {
      previous.href = `day.html?day=${theme.day - 1}`;
      previous.textContent = `→ יום ${theme.day - 1}`;
    } else {
      previous.hidden = true;
    }
    if (theme.day < 30) {
      next.href = `day.html?day=${theme.day + 1}`;
      next.textContent = `יום ${theme.day + 1} ←`;
    } else {
      next.hidden = true;
    }
  }
}

function isPublicGalleryEntry(entry) {
  if (!entry || typeof entry !== "object" ||
      !Number.isInteger(entry.day) || entry.day < 1 || entry.day > 30 ||
      typeof entry.title !== "string") {
    return false;
  }
  const validImage = !entry.image || (typeof entry.image === "string" &&
    /^assets\/gallery\/[A-F0-9]{32}-[A-F0-9]{40}\.(png|jpg|webp)$/i.test(entry.image));
  if (!validImage || (!entry.image && !entry.url)) return false;
  if (!entry.url) return true;

  try {
    return typeof entry.url === "string" &&
      new URL(entry.url).protocol === "https:" &&
      /^https:\/\/[^\s]+$/i.test(entry.url);
  } catch (error) {
    return false;
  }
}

function initializeDayGallery(day) {
  const mapList = document.querySelector("[data-day-maps]");
  if (!mapList) return;

  const status = document.querySelector("[data-day-gallery-status]");
  const emptyState = document.querySelector("[data-day-empty]");
  fetch("data/gallery.json", { cache: "no-cache" })
    .then((response) => {
      if (!response.ok) throw new Error("gallery feed request failed");
      return response.json();
    })
    .then((feed) => {
      if (!feed || feed.schemaVersion !== 1 || !Array.isArray(feed.entries)) {
        throw new Error("gallery feed has an unsupported shape");
      }

      const entries = feed.entries.filter((entry) => isPublicGalleryEntry(entry) && entry.day === day);
      mapList.setAttribute("aria-busy", "false");
      status.textContent = "";
      if (!entries.length) {
        mapList.hidden = true;
        emptyState.hidden = false;
        return;
      }

      mapList.replaceChildren(...entries.map(makeDayMapCard));
      mapList.hidden = false;
      emptyState.hidden = true;
    })
    .catch(() => {
      mapList.setAttribute("aria-busy", "false");
      mapList.hidden = true;
      status.textContent = "לא הצלחנו לטעון את מפות היום. נסו לרענן את העמוד.";
      status.dataset.state = "error";
    });
}

function makeDayMapCard(entry) {
  const card = document.createElement("article");
  card.className = "day-map-card";

  const content = document.createElement("div");
  content.className = "gallery-card-content";
  const title = document.createElement("h3");
  title.className = "day-map-title";
  title.textContent = entry.title;
  content.append(title);
  if (entry.displayName) {
    const creator = document.createElement("p");
    creator.className = "gallery-creator";
    creator.textContent = entry.displayName;
    content.append(creator);
  }
  if (entry.description) {
    const description = document.createElement("p");
    description.className = "gallery-description";
    description.textContent = entry.description;
    content.append(description);
  }
  if (entry.credits) {
    const credits = document.createElement("p");
    credits.className = "gallery-credits";
    credits.textContent = `קרדיט: ${entry.credits}`;
    content.append(credits);
  }

  if (entry.image) {
    const image = document.createElement("img");
    image.className = "day-map-image";
    image.src = entry.image;
    image.alt = entry.imageAltText || entry.title;
    image.loading = "lazy";
    image.decoding = "async";
    card.append(createFullscreenControl(image));

    const imageLink = document.createElement("a");
    imageLink.className = "text-link day-map-open";
    imageLink.href = entry.image;
    imageLink.target = "_blank";
    imageLink.rel = "noopener noreferrer";
    imageLink.textContent = "פתיחת התמונה בחלון חדש";
    appendNewTabNotice(imageLink);
    content.append(imageLink);
  }

  if (entry.url) {
    const mapUrl = new URL(entry.url);
    if (mapUrl.origin !== window.location.origin) {
      const frame = document.createElement("iframe");
      frame.className = "day-map-embed";
      frame.src = mapUrl.href;
      frame.title = `מפה אינטראקטיבית: ${entry.title}`;
      frame.loading = "lazy";
      frame.referrerPolicy = "no-referrer";
      frame.setAttribute("allow", "fullscreen");
      frame.setAttribute("allowfullscreen", "");
      frame.setAttribute("sandbox", "allow-scripts allow-same-origin allow-forms");
      card.append(createFullscreenControl(frame));
    }

    const link = document.createElement("a");
    link.className = "text-link day-map-open";
    link.href = mapUrl.href;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = mapUrl.origin === window.location.origin
      ? "פתיחת המפה בחלון חדש"
      : "פתיחת המפה המקורית בחלון חדש";
    appendNewTabNotice(link);
    content.append(link);
  }

  card.append(content);
  return card;
}

function createFullscreenControl(media) {
  const frame = document.createElement("div");
  frame.className = "day-map-frame";
  frame.append(media);

  const fullscreenButton = document.createElement("button");
  fullscreenButton.className = "button button-small day-map-fullscreen";
  fullscreenButton.type = "button";
  fullscreenButton.textContent = frame.requestFullscreen
    ? "הצגה במסך מלא"
    : "המסך המלא אינו נתמך בדפדפן זה";
  fullscreenButton.disabled = !frame.requestFullscreen;
  fullscreenButton.setAttribute("aria-label", "הצגת המפה במסך מלא");
  fullscreenButton.addEventListener("click", async () => {
    try {
      if (document.fullscreenElement === frame) {
        await document.exitFullscreen();
      } else {
        await frame.requestFullscreen();
      }
    } catch (error) {
      fullscreenButton.textContent = "לא ניתן לפתוח מסך מלא. אפשר לפתוח בחלון חדש.";
      fullscreenButton.title = error instanceof Error ? error.message : "בקשת המסך המלא נכשלה.";
    }
  });
  document.addEventListener("fullscreenchange", () => {
    fullscreenButton.textContent = document.fullscreenElement === frame
      ? "יציאה ממסך מלא"
      : "הצגה במסך מלא";
  });
  frame.append(fullscreenButton);
  return frame;
}

function appendNewTabNotice(link) {
  const notice = document.createElement("span");
  notice.className = "visually-hidden";
  notice.textContent = " (נפתח בכרטיסייה חדשה)";
  link.append(notice);
}

function initializeGallery() {
  const galleryResults = document.querySelector("#gallery-results");
  if (galleryResults) {
    const galleryControls = document.querySelector("[data-gallery-controls]");
    const galleryDay = document.querySelector("#gallery-day");
    const gallerySearch = document.querySelector("#gallery-search");
    const galleryStatus = document.querySelector("#gallery-status");
    const galleryCount = document.querySelector("#gallery-count");
    const galleryEmpty = document.querySelector("#gallery-empty");
    let galleryEntries = [];

    galleryDay.addEventListener("change", renderGallery);
    gallerySearch.addEventListener("input", renderGallery);

    fetch("data/gallery.json", { cache: "no-cache" })
      .then((response) => {
        if (!response.ok) throw new Error("gallery feed request failed");
        return response.json();
      })
      .then((feed) => {
        if (!feed || feed.schemaVersion !== 1 || !Array.isArray(feed.entries)) {
          throw new Error("gallery feed has an unsupported shape");
        }
        galleryEntries = feed.entries.filter(isPublicGalleryEntry);
        if (!galleryEntries.length) {
          galleryResults.hidden = true;
          galleryEmpty.hidden = false;
          galleryStatus.textContent = "";
          galleryResults.setAttribute("aria-busy", "false");
          return;
        }

        galleryControls.hidden = false;
        const days = Array.from(new Set(galleryEntries.map((entry) => entry.day)))
          .sort((left, right) => left - right);
        days.forEach((day) => {
          const option = document.createElement("option");
          option.value = String(day);
          option.textContent = `יום ${day} — ${galleryEntries.find((entry) => entry.day === day).theme}`;
          galleryDay.append(option);
        });
        galleryResults.hidden = false;
        galleryEmpty.hidden = true;
        galleryResults.setAttribute("aria-busy", "false");
        renderGallery();
      })
      .catch(() => {
        galleryResults.setAttribute("aria-busy", "false");
        galleryResults.hidden = true;
        galleryResults.replaceChildren();
        galleryStatus.textContent = "לא הצלחנו לטעון את הגלריה כרגע. נסו לרענן את העמוד.";
        galleryStatus.dataset.state = "error";
      });

    function renderGallery() {
      const selectedDay = galleryDay.value;
      const query = gallerySearch.value.trim().toLocaleLowerCase();
      const filtered = galleryEntries.filter((entry) => {
        const matchesDay = selectedDay === "all" || String(entry.day) === selectedDay;
        const haystack = [entry.title, entry.theme, entry.displayName, entry.description]
          .filter(Boolean)
          .join(" ")
          .toLocaleLowerCase();
        return matchesDay && (!query || haystack.includes(query));
      });

      galleryCount.textContent = `${filtered.length} ${filtered.length === 1 ? "מפה" : "מפות"}`;
      galleryStatus.textContent = filtered.length ? "" : "לא נמצאו מפות שמתאימות לחיפוש.";
      galleryResults.replaceChildren(...filtered.map(makeGalleryCard));
    }

    function makeGalleryCard(entry) {
      const card = document.createElement("article");
      card.className = "gallery-card";

      if (entry.image) {
        const image = document.createElement("img");
        image.className = "gallery-image";
        image.src = entry.image;
        image.alt = entry.imageAltText || entry.title;
        image.loading = "lazy";
        card.append(image);
      }

      const content = document.createElement("div");
      content.className = "gallery-card-content";
      const day = document.createElement("p");
      day.className = "gallery-day";
      day.textContent = `יום ${entry.day} · ${entry.theme || ""}`;
      const title = document.createElement("h2");
      title.textContent = entry.title;
      content.append(day, title);

      if (entry.displayName) {
        const creator = document.createElement("p");
        creator.className = "gallery-creator";
        creator.textContent = entry.displayName;
        content.append(creator);
      }
      if (entry.description) {
        const description = document.createElement("p");
        description.className = "gallery-description";
        description.textContent = entry.description;
        content.append(description);
      }
      if (entry.credits) {
        const credits = document.createElement("p");
        credits.className = "gallery-credits";
        credits.textContent = `קרדיט: ${entry.credits}`;
        content.append(credits);
      }
      if (entry.url) {
        const link = document.createElement("a");
        link.className = "text-link gallery-link";
        link.href = entry.url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = "לצפייה במפה";
        appendNewTabNotice(link);
        content.append(link);
      }
      card.append(content);
      return card;
    }
  }
}

initializeGallery();
