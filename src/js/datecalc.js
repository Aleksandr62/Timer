export function diffDates(firstDate, secondDate) {
    firstDate = new Date(firstDate);
    secondDate = new Date(secondDate);

    if (firstDate > secondDate)
        secondDate = [firstDate, firstDate = secondDate][0];
    const diffDays = secondDate.getDate() +
        new Date(firstDate.getFullYear(), firstDate.getMonth() + 1, 0).getDate() - firstDate.getDate();

    const modfirstDate = { y: firstDate.getFullYear(), m: firstDate.getMonth() + 1, d: firstDate.getDate() };
    const modsecondDate = { y: secondDate.getFullYear(), m: secondDate.getMonth() + 1, d: secondDate.getDate() };

    const diff = {};
    diff.d = modsecondDate.d > modfirstDate.d ? modsecondDate.d - modfirstDate.d :
        modsecondDate.d < modfirstDate.d ? diffDays : null;

    diff.m = modsecondDate.m > modfirstDate.m
        && modsecondDate.d >= modfirstDate.d ? modsecondDate.m - modfirstDate.m :
        modsecondDate.m > modfirstDate.m
            && modsecondDate.d < modfirstDate.d ? modsecondDate.m - modfirstDate.m - 1 : null;
    modsecondDate.m === modfirstDate.m && modsecondDate.d < modfirstDate.d ? diff.m = 11 : null;

    diff.y = modsecondDate.y > modfirstDate.y
        && modsecondDate.m >= modfirstDate.m ? modsecondDate.y - modfirstDate.y : null;
    modsecondDate.m === modfirstDate.m && modsecondDate.d < modfirstDate.d ? diff.y-- : null;
    console.log(diff);
    return diff;
}

export const diffToHtml = diff => `
    <span> 
        ${diff.y ? 'Лет: ' + diff.y : ''} 
        ${diff.m ? 'Месяцев: ' + diff.m : ''} 
        ${diff.d ? 'Дней: ' + diff.d : ''}
    </span>
`;
