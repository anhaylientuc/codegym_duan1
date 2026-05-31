const formatVND = (money=0) => {
    return Number(money).toLocaleString("vi-VN", {
        style: "currency",
        currency: "VND"
    });
}
export const FormatCurrency={formatVND}