const getLastDayOfMonth = () => {
    const now = new Date();

    const year = now.getFullYear();
    const month = now.getMonth();

    const lastDay = new Date(
        year,
        month + 1,
        0
    );

    const yyyy = lastDay.getFullYear();

    const mm = String(
        lastDay.getMonth() + 1
    ).padStart(2, "0");

    const dd = String(
        lastDay.getDate()
    ).padStart(2, "0");

    return `${yyyy}-${mm}-${dd}`;
};
const getFirstDayOfMonth = () => {
    const now = new Date();

    const year = now.getFullYear();
    const month = now.getMonth();

    const lastDay = new Date(
        year,
        month + 1,
        0
    );
    const mm = String(
        lastDay.getMonth() + 1
    ).padStart(2, "0");

    return `${year}-${mm}-01`;
};
const getLastDayOfYear = () => {
    const now = new Date();

    const year = now.getFullYear();

    return `${year}-12-31`;
};
const getFirstDayOfYear = () => {
    const now = new Date();

    const year = now.getFullYear();

    return `${year}-01-01`;
};
const getCurrentDate = () => {
    const now = new Date();

    const year = now.getFullYear();

    const month = String(
        now.getMonth() + 1
    ).padStart(2, "0");

    const day = String(
        now.getDate()
    ).padStart(2, "0");

    return `${year}-${month}-${day}`;
};
export const getLastDayOfWeek = () => {

    const now = new Date();

    const day = now.getDay();

    const diff = day === 0
        ? 0
        : 7 - day;

    const lastDay = new Date(now);

    lastDay.setDate(
        now.getDate() + diff
    );

    const year = lastDay.getFullYear();

    const month = String(
        lastDay.getMonth() + 1
    ).padStart(2, '0');

    const date = String(
        lastDay.getDate()
    ).padStart(2, '0');

    return `${year}-${month}-${date}`;
}
export const getFirstDayOfWeek = () => {

    const now = new Date();

    const day = now.getDay();

    // Chủ nhật = 0
    const diff = day === 0
        ? -6
        : 1 - day;

    const firstDay = new Date(now);

    firstDay.setDate(
        now.getDate() + diff
    );

    const year = firstDay.getFullYear();

    const month = String(
        firstDay.getMonth() + 1
    ).padStart(2, '0');

    const date = String(
        firstDay.getDate()
    ).padStart(2, '0');

    return `${year}-${month}-${date}`;
}
export const DateHelper = { getLastDayOfMonth, getFirstDayOfMonth, getCurrentDate, getLastDayOfYear, getFirstDayOfYear,getFirstDayOfWeek,getLastDayOfWeek }