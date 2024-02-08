import Link from "next/link";

export const returnAnchor = (text = "") => {
  const linkMatches = text.matchAll(/href='(.*?)'/g);
  const linksArray = Array.from(linkMatches, (x) => x[1]);
  const textMatches = text.matchAll(/\'>(.*?)\</g);
  const textsArray = Array.from(textMatches, (x) => x[1]);
  const classMatches = text.matchAll(/className='(.*?)'/g);
  const classesArray = Array.from(classMatches, (x) => x[1]);
  const targetMatches = text.matchAll(/target='(.*?)'/g);
  const targetsArray = Array.from(targetMatches, (x) => x[1]);
  const anchorsObjectArray = linksArray.map((el, idx) => {
    return {
      link: el,
      content: textsArray[idx],
      target: targetsArray[idx],
      class: classesArray[idx],
    };
  });

  const splitOriginalText = text.split(/<a[^>]*>([^<]+)<\/a>/g);

  return splitOriginalText.map((el, idx) => {
    if (textsArray.indexOf(el) > -1) {
      let obj = {
        pathname: `${anchorsObjectArray[textsArray.indexOf(el)].link}`,
      };
      return (
        <Link
          key={idx}
          href={obj}
          target={anchorsObjectArray[textsArray.indexOf(el)].target}
          className={anchorsObjectArray[textsArray.indexOf(el)].class}
        >
          {el}
        </Link>
      );
    } else {
      return el;
    }
  });
};
export const sleep = async (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });
};
export const timeFromNow = (_createdAt, locale = "en") => {
  const formatDate = (date) => {
    const { day, month, year } = new Intl.DateTimeFormat(locale, {
      month: "numeric",
      day: "numeric",
      year: "numeric",
    })
      .formatToParts(date)
      .reduce((b, a) => {
        b[a.type] = a.value;
        return b;
      }, {});

    return { month, day, year };
  };
  const takeDiference = (a, b) => {
    if (a.year === b.year) {
      if (a.month === b.month) {
        return `${a.day - b.day}d`;
      } else {
        return `${a.month - b.month}m`;
      }
    } else {
      return `${a.year - b.year}d`;
    }
  };
  if (!_createdAt) return "";
  let createdAt = formatDate(new Date(_createdAt));
  let today = formatDate(new Date());
  let diference = takeDiference(today, createdAt);

  return diference;
};
export const formatDate = (_createdAt, locale = "en") => {
  let createdAt = new Date(_createdAt);

  const { day, month, year } = new Intl.DateTimeFormat(locale, {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
    .formatToParts(createdAt)
    .reduce((b, a) => {
      b[a.type] = a.value;
      return b;
    }, {});

  return `${month} ${day}, ${year}`;
};
export const formatDateShort = (_createdAt, locale = "en") => {
  let createdAt = new Date(_createdAt);

  const { day, month, year } = new Intl.DateTimeFormat(locale, {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
    .formatToParts(createdAt)
    .reduce((b, a) => {
      b[a.type] = a.value;
      return b;
    }, {});

  return `${month} ${day}, ${year}`;
};
export const paginationCalulate = (
  activePage,
  pagesCount,
  hasPrevPage,
  hasNextPage
) => {
  //   if activePage is less than 6
  if (activePage <= 5 && pagesCount > 7) {
    return {
      hasprevious: hasPrevPage,
      hasStartDots: activePage - 5 >= 1,
      shiftStartNumbers: 0,
      displayNumbers: 5,
      shiftEndNumbers: 7,
      hasEndDots: true,
      hasNext: hasNextPage,
    };
  }
  // middle pagination section
  else if (activePage >= 6 && activePage + 5 <= pagesCount) {
    return {
      hasprevious: hasPrevPage,
      hasStartDots: activePage - 5 >= 1,
      shiftStartNumbers: activePage - 2,
      displayNumbers: 3,
      shiftEndNumbers: activePage + 2,
      hasEndDots: activePage + 5 <= pagesCount,
      hasNext: hasNextPage,
    };
  }
  // last pagination section
  else if (activePage > 5 && activePage + 4 >= pagesCount && pagesCount > 6) {
    return {
      hasprevious: hasPrevPage,
      hasStartDots: activePage - 5 >= 1,
      shiftStartNumbers:
        pagesCount % 2 === 0 || pagesCount === 11
          ? pagesCount - 5
          : pagesCount - 6,
      displayNumbers: 5,
      shiftEndNumbers: 0,
      hasEndDots: activePage + 5 < pagesCount,
      hasNext: hasNextPage,
    };
  }
  // if number of pages are 7 or less
  return {
    hasprevious: hasPrevPage,
    hasStartDots: false,
    shiftStartNumbers: 0,
    displayNumbers: pagesCount,
    shiftEndNumbers: 0,
    hasEndDots: false,
    hasNext: hasNextPage,
  };
};
